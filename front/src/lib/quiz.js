/**
 * quiz.js — Questions de quiz d'un chapitre
 * ==========================================
 * Réservoir de questions (« pool ») par civilisation :
 *   - questions rédigées à la main (src/data/revision/<civ>.js → `quiz`) ;
 *   - questions générées à partir des données (dates, dirigeants, guerres…).
 *
 * Une question a un id STABLE (ex. « date-year-2 ») : on peut mémoriser les
 * questions ratées et les reposer plus tard. La génération est déterministe
 * (hasard « graine » = id de la question), seul l'ordre des réponses change
 * d'une tentative à l'autre.
 *
 * Types :
 *   mcq   { prompt, options[], answer: index, explanation? }
 *   tf    { prompt, answer: true|false, explanation? }        (vrai / faux)
 *   order { prompt, items[] (dans le bon ordre), explanation? } (remettre dans l'ordre)
 *   map   { prompt, year, civId, options[], answer }          (carte + QCM)
 */
import { HANDWRITTEN } from '../data/revision'
import PRESENCE from '../data/map-presence.json'
import { getEpochs } from './data'
import { formatDuration, formatYear } from './time'

export const QUIZ_LENGTH = 20
export const PASS_MARK = 15 // sur 20
const RETRY_FAILED = 5 // questions ratées reposées au quiz suivant

// ── Hasard reproductible ─────────────────────────────────────────────────────
function hash(str) {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return h >>> 0
}
export function rng(seed) {
  let a = hash(String(seed))
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
export function shuffle(arr, rand) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const uniq = (arr) => [...new Set(arr)]

/** Termine une phrase par un point, sans doubler celui de « av. J.-C. ». */
const sentence = (text) => (text.endsWith('.') ? text : `${text}.`)

// Mots trop génériques pour trahir la réponse
const GENERIC = new Set(['empire', 'royaume', 'civilisation', 'culture', 'antique', 'grande', 'grand', 'dynastie', 'peuples', 'époque', 'classique', 'moderne', 'contemporaine', 'république', 'républiques'])
/** Masque le nom d'une civilisation (et ses mots significatifs) dans un texte. */
function maskName(text, civ) {
  const words = civ.label
    .replace(/[()&,/]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !GENERIC.has(w.toLowerCase()))
  let out = text.replaceAll(civ.label, '…')
  // limite de mot compatible avec les lettres accentuées (\b ne connaît que l'ASCII)
  for (const w of words) out = out.replace(new RegExp(`(?<!\\p{L})${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\p{L}*`, 'giu'), '…')
  return out
}
function pick(arr, n, rand, exclude = []) {
  return shuffle(uniq(arr).filter((x) => x != null && x !== '' && !exclude.includes(x)), rand).slice(0, n)
}

/** QCM : bonne réponse + 3 leurres (moins si pas assez de leurres). Null si < 2 leurres. */
function mcq(id, prompt, correct, distractors, extra = {}) {
  const rand = rng(id)
  const wrong = pick(distractors, 3, rand, [correct])
  if (wrong.length < 2) return null
  return { id, type: 'mcq', prompt, options: [correct, ...wrong], answer: 0, ...extra }
}

/** Années plausibles autour d'une date (pour les leurres). */
function yearDistractors(year, others, rand) {
  const span = Math.abs(year) > 5000 ? Math.round(Math.abs(year) * 0.3) : Math.abs(year) > 1000 ? 120 : 60
  const near = [1, -1, 2, -2, 3].map((k) => year + k * Math.max(10, Math.round((span * (0.4 + rand() * 0.6)) / 10) * 10))
  return uniq([...others.filter((y) => y !== year), ...near]).map(formatYear)
}

// ── Contexte : civilisations de la même époque / du même continent ──────────
const ALL = getEpochs().flatMap((epoch) =>
  epoch.continents.flatMap((continent) => continent.civilizations.map((civ) => ({ epoch, continent, civ })))
)

/** Réservoir complet de questions d'une civilisation. */
export function questionPool(ref) {
  const { civ, epoch, continent } = ref
  const hand = (HANDWRITTEN[civ.id]?.quiz ?? []).map((q) => ({ ...q, id: `hand-${q.id}` }))
  return [...hand, ...autoQuestions(civ, epoch, continent)].filter(Boolean)
}

function autoQuestions(civ, epoch, continent) {
  const qs = []
  const sameEpoch = ALL.filter((r) => r.epoch.id === epoch.id && r.civ.id !== civ.id).map((r) => r.civ)
  const sameCont = sameEpoch.filter((c) => continent.civilizations.some((x) => x.id === c.id))
  const dates = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  const otherEvents = sameEpoch.flatMap((c) => (c.datesCles ?? []).map((d) => d.evenement))
  const leaders = civ.dirigeants ?? []
  const otherLeaders = ALL.filter((r) => r.epoch.id === epoch.id).flatMap((r) => r.civ.dirigeants ?? [])
  const people = civ.personnages ?? []
  const otherPeople = ALL.flatMap((r) => r.civ.personnages ?? []).filter((p) => !people.some((x) => x.nom === p.nom))
  const wars = civ.guerres ?? []
  const name = civ.label

  // ── Dates ──
  dates.forEach((d, i) => {
    const rand = rng(`${civ.id}-date-${i}`)
    qs.push(
      mcq(`date-year-${i}`, `${name} : en quelle année situe-t-on « ${d.evenement} » ?`, formatYear(d.annee), yearDistractors(d.annee, dates.map((x) => x.annee), rand), {
        explanation: d.info,
      })
    )
    qs.push(
      mcq(
        `date-event-${i}`,
        `${name} : que se passe-t-il en ${formatYear(d.annee)} ?`,
        d.evenement,
        [...dates.filter((x) => x !== d).map((x) => x.evenement), ...pick(otherEvents, 4, rand)],
        { explanation: d.info }
      )
    )
  })
  dates.forEach((d, i) => {
    // Vrai / faux sur la date (une fois vrai, une fois faux, selon la question)
    const rand = rng(`${civ.id}-tfdate-${i}`)
    if (i % 2 === 0) {
      qs.push({ id: `tf-date-${i}`, type: 'tf', prompt: sentence(`${name} : « ${d.evenement} » a lieu en ${formatYear(d.annee)}`), answer: true, explanation: d.info })
    } else {
      const wrong = d.annee + (rand() < 0.5 ? -1 : 1) * (Math.abs(d.annee) > 3000 ? 1000 : 100) * (1 + Math.floor(rand() * 2))
      qs.push({ id: `tf-date-${i}`, type: 'tf', prompt: sentence(`${name} : « ${d.evenement} » a lieu en ${formatYear(wrong)}`), answer: false, explanation: `C'était en ${formatYear(d.annee)}. ${d.info ?? ''}` })
    }
    // Quel événement est décrit ? (nom et année masqués)
    if (d.info && d.info.length > 25) {
      const masked = d.info.replaceAll(d.evenement, '…').replaceAll(String(Math.abs(d.annee)), '…')
      qs.push(mcq(`date-info-${i}`, `${name} : quel événement est décrit ici ? « ${masked} »`, d.evenement, [...dates.filter((x) => x !== d).map((x) => x.evenement), ...pick(otherEvents, 4, rand)]))
    }
  })
  if (dates.length >= 3) {
    qs.push({ id: 'order-dates', type: 'order', prompt: `${name} : remettez ces événements dans l'ordre chronologique.`, items: dates.slice(0, 4).map((d) => d.evenement), explanation: dates.slice(0, 4).map((d) => `${formatYear(d.annee)} : ${d.evenement}`).join(' → ') })
  }
  if (dates.length >= 2) {
    const [a, b] = [dates[0], dates[dates.length - 1]]
    qs.push({ id: 'tf-order', type: 'tf', prompt: `« ${b.evenement} » a lieu avant « ${a.evenement} ».`, answer: false, explanation: `${a.evenement} : ${formatYear(a.annee)} ; ${b.evenement} : ${formatYear(b.annee)}.` })
  }

  // ── Repères généraux ──
  if (civ.capitale) {
    const withCap = sameEpoch.filter((c) => c.capitale && c.capitale !== civ.capitale)
    qs.push(mcq('capitale-inverse', `${civ.capitale} est la capitale de…`, name, withCap.map((c) => c.label)))
    qs.push(mcq('capitale', `Quelle est la capitale de : ${name} ?`, civ.capitale, sameEpoch.map((c) => c.capitale)))
    const wrongCap = pick(sameEpoch.map((c) => c.capitale), 1, rng(`${civ.id}-tfcap`), [civ.capitale])[0]
    if (wrongCap) qs.push({ id: 'tf-capitale', type: 'tf', prompt: sentence(`La capitale de « ${name} » est ${wrongCap}`), answer: false, explanation: `Sa capitale est ${civ.capitale}.` })
  }
  qs.push(mcq('periode', `Quelle période correspond à : ${name} ?`, civ.period, sameCont.length >= 3 ? sameCont.map((c) => c.period) : sameEpoch.map((c) => c.period)))
  qs.push(
    mcq('duree', `Combien de temps dure : ${name} (${civ.period}) ?`, formatDuration(civ.start, civ.end), [0.5, 0.25, 2, 3].map((k) => formatDuration(0, Math.max(10, Math.round(((civ.end - civ.start) * k) / 10) * 10))))
  )
  if (civ.description) {
    const masked = maskName(civ.description, civ)
    qs.push(mcq('description', `De quelle civilisation s'agit-il ? « ${masked} »`, name, (sameCont.length >= 3 ? sameCont : sameEpoch).map((c) => c.label)))
  }
  if (sameEpoch.length >= 3) qs.push(mcq('continent', `Sur quel continent se trouve : ${name} ?`, continent.label, epoch.continents.map((c) => c.label)))

  // ── Dirigeants ──
  leaders.forEach((l, i) => {
    if (l.titre) qs.push(mcq(`leader-titre-${i}`, `Quel titre porte ${l.nom} (${name}) ?`, l.titre, otherLeaders.map((x) => x.titre)))
    if (l.surnom) qs.push(mcq(`leader-surnom-${i}`, `Quel est le surnom de ${l.nom} (${name}) ?`, l.surnom, otherLeaders.map((x) => x.surnom)))
    qs.push(
      mcq(`leader-reign-${i}`, `${name} : qui gouverne de ${formatYear(l.debut)} à ${formatYear(l.fin)} ?`, l.nom, [...leaders.filter((x) => x !== l).map((x) => x.nom), ...otherLeaders.map((x) => x.nom)], {
        explanation: `${l.titre}${l.surnom ? ` « ${l.surnom} »` : ''}.`,
      })
    )
  })
  if (leaders.length >= 3) qs.push({ id: 'order-leaders', type: 'order', prompt: `${name} : classez ces dirigeants du plus ancien au plus récent.`, items: [...leaders].sort((a, b) => a.debut - b.debut).slice(0, 4).map((l) => l.nom) })

  // ── Personnages ──
  people.forEach((p, i) => {
    if (p.description) {
      const masked = p.description.replaceAll(p.nom, '…')
      qs.push(mcq(`person-who-${i}`, `Qui est-ce ? « ${masked} »`, p.nom, otherPeople.map((x) => x.nom)))
    }
    if (p.role) qs.push(mcq(`person-role-${i}`, `Quel rôle joue ${p.nom} ?`, p.role, otherPeople.map((x) => x.role)))
  })

  // Personnage : vrai / faux sur son appartenance
  if (people[0]) {
    const intruder = pick(otherPeople.map((p) => p.nom), 1, rng(`${civ.id}-intrus`))[0]
    if (intruder) qs.push({ id: 'tf-person', type: 'tf', prompt: sentence(`${intruder} est un personnage marquant de : ${name}`), answer: false, explanation: `Pour ${name}, on retient notamment ${people.map((p) => p.nom).join(', ')}.` })
  }

  // ── Textes (sciences, croyances, diplomatie) : à quelle civilisation correspond ce passage ? ──
  const firstSentence = (t) => (t ?? '').match(/[^.!?]+[.!?]/)?.[0]?.trim()
  ;[
    ['sciences', 'Sciences & techniques'],
    ['croyancesText', 'Croyances'],
    ['diplomatie', 'Diplomatie'],
  ].forEach(([key, label]) => {
    const text = firstSentence(civ[key])
    if (!text || text.length < 40) return
    const masked = maskName(text, civ)
    qs.push(mcq(`texte-${key}`, `${label} : à quelle civilisation correspond ce passage ? « ${masked} »`, name, (sameCont.length >= 3 ? sameCont : sameEpoch).map((c) => c.label)))
  })

  // ── Guerres ──
  wars.forEach((w, i) => {
    if (w.vainqueur) {
      qs.push(
        mcq(`war-winner-${i}`, `Qui sort vainqueur de : ${w.nom} ?`, w.vainqueur, [...(w.adversaires ?? []), ...(w.allies ?? []), ...sameEpoch.map((c) => c.label)], { explanation: w.consequences })
      )
    }
    if (w.adversaires?.length) {
      qs.push(mcq(`war-enemy-${i}`, `${name} : contre qui est menée « ${w.nom} » ?`, w.adversaires[0], sameEpoch.map((c) => c.label), { explanation: w.consequences }))
    }
    if (typeof w.annee === 'number') {
      qs.push(mcq(`war-year-${i}`, `En quelle année commence (ou se joue) : ${w.nom} ?`, formatYear(w.annee), yearDistractors(w.annee, dates.map((d) => d.annee), rng(`${civ.id}-war-${i}`))))
    }
  })

  // ── Carte ──
  const years = PRESENCE[civ.id] ?? []
  const mapYearsPicked = uniq([years[Math.floor(years.length / 2)], years[years.length - 1]]).filter((y) => y !== undefined)
  mapYearsPicked.forEach((year, i) => {
    const neighbors = ALL.filter((r) => (PRESENCE[r.civ.id] ?? []).includes(year) && r.civ.id !== civ.id).map((r) => r.civ.label)
    qs.push(mcq(i ? `map-${i}` : 'map', `Quelle civilisation occupe le territoire en couleur, en ${formatYear(year)} ?`, name, neighbors.length >= 3 ? neighbors : sameEpoch.map((c) => c.label), { type: 'map', year, civId: civ.id }))
  })

  // ── Lignée ──
  if (civ.lineage?.next) {
    qs.push(mcq('lineage-next', `Quelle civilisation prend la suite de « ${name} » à l'époque suivante ?`, civ.lineage.next.label, ALL.filter((r) => r.epoch.id === civ.lineage.next.epochId).map((r) => r.civ.label)))
  }
  if (civ.lineage?.prev) {
    qs.push(mcq('lineage-prev', `Quelle civilisation précède « ${name} » dans l'histoire de : ${civ.lineage.label} ?`, civ.lineage.prev.label, ALL.filter((r) => r.epoch.id === civ.lineage.prev.epochId).map((r) => r.civ.label)))
  }

  return qs
}

/**
 * Compose un quiz de 20 questions (ou moins si le réservoir est petit) :
 *   - d'abord jusqu'à 5 questions ratées la fois précédente ;
 *   - puis des questions jamais posées ;
 *   - puis, s'il en manque, des questions déjà vues.
 * Renvoie des ids de questions + une graine pour l'ordre des réponses.
 */
export function composeQuiz(pool, { failed = [], asked = [], attempt = 0 } = {}) {
  const rand = rng(`compose-${attempt}-${pool.length}`)
  const ids = pool.map((q) => q.id)
  const fromFailed = shuffle(failed.filter((id) => ids.includes(id)), rand).slice(0, RETRY_FAILED)
  const fresh = shuffle(ids.filter((id) => !asked.includes(id) && !fromFailed.includes(id)), rand)
  // à compléter si besoin : d'abord des questions déjà réussies, puis les autres ratées
  const seenOk = shuffle(ids.filter((id) => asked.includes(id) && !failed.includes(id)), rand)
  const seenFailed = shuffle(ids.filter((id) => failed.includes(id) && !fromFailed.includes(id)), rand)
  const seen = [...seenOk, ...seenFailed]
  const chosen = [...fromFailed, ...fresh, ...seen].slice(0, QUIZ_LENGTH)
  // mélange final en gardant de la variété (pas deux questions identiques de type à la suite si possible)
  return shuffle(chosen, rand)
}

/** Question prête à afficher : réponses mélangées (selon la tentative). */
export function prepareQuestion(q, attempt) {
  if (q.type === 'mcq' || q.type === 'map') {
    const order = shuffle(q.options.map((_, i) => i), rng(`${q.id}-${attempt}`))
    return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) }
  }
  if (q.type === 'order') {
    // mélange garanti différent de l'ordre correct
    let items = shuffle(q.items, rng(`${q.id}-${attempt}`))
    if (items.every((x, i) => x === q.items[i])) items = [...items.slice(1), items[0]]
    return { ...q, shuffled: items }
  }
  return q
}

/** La réponse donnée est-elle juste ? */
export function isCorrect(q, response) {
  if (q.type === 'tf') return response === q.answer
  if (q.type === 'order') return Array.isArray(response) && response.every((x, i) => x === q.items[i])
  return response === q.answer
}

/** Note sur 20, même si le quiz compte moins de 20 questions. */
export function scoreOn20(correct, total) {
  return total ? Math.round((correct / total) * 20) : 0
}
