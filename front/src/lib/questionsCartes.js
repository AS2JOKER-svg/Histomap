/**
 * questionsCartes.js — Questions générées depuis les cartes d'un chapitre (V3.1, sprint 28)
 * ==========================================================================================
 * Quand une salle manque de questions rédigées, on en tire d'abord des DONNÉES DES CARTES elles-mêmes :
 * le joueur a lu la carte, la question n'apprend rien de nouveau, elle vérifie.
 *
 *   dates, steps : pour chaque élément, « En quelle année situe-t-on « … » ? » OU « Que se passe-t-il en … ? »
 *                  (choix stable, tiré de l'année), et « Remets dans l'ordre chronologique » (3 ou 4 éléments) ;
 *   person       : « Qui est-ce ? » d'après la description, le nom masqué ;
 *   war          : « En quelle année situe-t-on « … » ? » (champ facultatif `fin` d'un conflit long : aucun
 *                  leurre entre le début et la fin) et, quand le vainqueur désigne sans doute possible
 *                  l'un des deux camps, un vrai / faux sur le vainqueur ;
 *   text, keyfigure, map, leaders : pas de question générée (texte libre : questions rédigées).
 *
 * Règle d'or (comme le quiz express) : une seule bonne réponse possible.
 *   - deux éléments de la même année (ou trop proches pour une date approximative) ne sont jamais
 *     opposés : ni comme leurres, ni dans une question d'ordre ;
 *   - la date en tête d'un libellé (« Vers 1730 : … ») est retirée, et un libellé qui donne encore
 *     l'année n'est pas utilisé ;
 *   - les années « voisines » ajoutées comme leurres ne changent pas d'ère (av. / apr. J.-C.) et ne
 *     dépassent pas aujourd'hui ;
 *   - « Qui est-ce ? » : les leurres sont les autres personnes du chapitre, puis des personnes
 *     d'autres civilisations fournies par l'appelant (`personnes`), jamais un nom cité dans la description.
 *
 * Chaque question porte `carte` (l'id de sa carte) et un id STABLE, même si l'on réordonne les cartes
 * ou les éléments : « carte-<carte>-annee-<année> », « carte-<carte>-evenement-<année> »,
 * « carte-<carte>-ordre », « carte-<carte>-qui », « carte-<carte>-annee », « carte-<carte>-vainqueur ».
 * Changer l'année d'un élément change donc l'id de sa question (c'est une autre question).
 *
 * Module pur, sans données : utilisé par l'app et par les scripts (validateur, rapport, tests).
 */
import { formatYear } from './time.js'
import { rng, shuffle } from './random.js'

export const PREFIXE = 'carte-'
const AUJOURD_HUI = 2025

/** Ids des cartes d'une question (champ `carte` : 'id' | ['id1', 'id2'] | null). Null = hors cartes. */
export const cartesDe = (q) => (q.carte == null ? null : Array.isArray(q.carte) ? q.carte : [q.carte])

const norm = (t) => String(t ?? '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')

/** Écart entre la bonne date et les leurres, selon l'ancienneté (comme le quiz express). */
export function pasAnnees(y) {
  if (y >= 1800) return 30
  if (y >= 1500) return 50
  if (y >= 0) return 100
  if (y >= -1000) return 200
  if (y >= -5000) return 500
  return Math.max(1000, Math.round((-y * 0.2) / 1000) * 1000)
}

// ── Libellés d'éléments datés ────────────────────────────────────────────────
// « Vers 1730 : le Dahomey… », « Vers 728 av. J.-C., le roi… », « Vers le milieu du Ier millénaire av. J.-C. : … »
const DATE_EN_TETE = /^\s*(?:vers\s+|en\s+|dès\s+)?(?:le\s+|la\s+)?(?:début|milieu|fin)?[^:,]{0,45}?(?:\d|siècle|millénaire|notre ère)[^:,]*?\s*[:,]\s+/i

/** Libellé sans la date de tête, avec une majuscule. */
export function sansDate(label) {
  const t = String(label ?? '').replace(DATE_EN_TETE, '').trim()
  return t.charAt(0).toUpperCase() + t.slice(1)
}
/** Élément daté approximatif : très ancien, ou libellé « Vers 1730 : … », « (vers) », « XIVe siècle », « selon la tradition »… */
const approximative = (y, label = '') => y < -1000 || /^\s*vers\b|\(vers\b|\bvers\)|environ|approx|≈|siècle|millénaire|tradition/i.test(label)
/** Carte entière aux dates approximatives (« Une longue histoire (dates approximatives) ») — pas « Vers la rupture ». */
const carteApproximative = (c) => /approx|environ|≈/i.test(`${c.title ?? ''} ${c.kicker ?? ''}`)
/** Le texte donne-t-il l'année (« 1730 », « 1 500 ») ? */
const donneAnnee = (texte, y) => {
  const a = String(Math.abs(y))
  return norm(texte).replace(/(\d)[\s  .](?=\d{3}(?!\d))/g, '$1').includes(a)
}

/** Deux années assez séparées pour ne pas être confondues (plus d'écart si la date est approximative). */
const separees = (a, b, approx) => Math.abs(a - b) >= (approx ? Math.max(1, pasAnnees(Math.min(a, b)) / 2) : 1)

/** Années voisines comme leurres : même ère, pas dans le futur, loin de toutes les années `interdites`. */
function voisines(seed, y, interdites, approx) {
  const pas = pasAnnees(y)
  const ks = shuffle([-3, -2, -1, 1, 2, 3, -4, 4], rng(seed))
  return ks
    .map((k) => y + k * pas)
    .filter((d) => d <= AUJOURD_HUI && Math.sign(d || 1) === Math.sign(y || 1))
    .filter((d) => interdites.every((x) => separees(d, x, approx)))
}

const qcm = (id, carte, prompt, bonne, leurres, extra = {}) => {
  const faux = [...new Set(leurres)].filter((x) => x && norm(x) !== norm(bonne)).slice(0, 3)
  if (faux.length < 2) return null
  return { id, carte, type: 'mcq', prompt, options: [bonne, ...faux], answer: 0, ...extra }
}

// ── Cartes datées (dates, steps) ─────────────────────────────────────────────
function questionsDatees(c) {
  const qs = []
  const approxCarte = carteApproximative(c)
  const elems = (c.items ?? [])
    .filter((it) => typeof it.year === 'number' && it.label)
    .map((it) => ({ y: it.year, brut: it.label, label: sansDate(it.label), approx: approxCarte || approximative(it.year, it.label) }))
  // une année partagée par deux éléments : ni question, ni leurre, ni ordre (on ne saurait lequel est juste)
  const uniques = elems.filter((e) => elems.filter((x) => x.y === e.y).length === 1 && e.label.length >= 3 && !donneAnnee(e.label, e.y))
  const ans = elems.map((e) => e.y)

  for (const e of uniques) {
    const base = `${PREFIXE}${c.id}`
    const fmt = formatYear(e.y)
    // leurres d'année : les autres années de la carte (bien séparées, de la même ère : pas « 1995 » pour
    // une date de 9600 av. J.-C.), puis des années voisines
    const autresAnnees = shuffle(ans.filter((y) => y !== e.y && separees(y, e.y, e.approx) && Math.sign(y || 1) === Math.sign(e.y || 1)), rng(`${base}:${e.y}:a`))
    const anneeQ = () =>
      qcm(
        `${base}-annee-${e.y}`,
        c.id,
        `${e.approx ? 'Vers quelle date' : 'En quelle année'} situe-t-on « ${e.label} » ?`,
        fmt,
        [...autresAnnees, ...voisines(`${base}:${e.y}:v`, e.y, ans, e.approx)].map(formatYear),
        { explanation: `${fmt} : ${e.label}.` }
      )
    // leurres d'événement : les autres éléments de la carte, d'années bien séparées
    const autresLabels = shuffle(uniques.filter((x) => x !== e && separees(x.y, e.y, e.approx || x.approx)), rng(`${base}:${e.y}:e`)).map((x) => x.label)
    const evenementQ = () =>
      autresLabels.length >= 2
        ? qcm(`${base}-evenement-${e.y}`, c.id, `Que se passe-t-il ${e.approx ? 'vers' : 'en'} ${fmt} ?`, e.label, autresLabels, { explanation: `${fmt} : ${e.label}.` })
        : null
    // une seule question par élément, choisie de façon stable (même tirage tant que l'année ne change pas)
    const [a, b] = rng(`${base}:${e.y}`)() < 0.5 ? [anneeQ, evenementQ] : [evenementQ, anneeQ]
    const q = a() ?? b()
    if (q) qs.push(q)
  }

  // ordre : 3 ou 4 éléments bien séparés, répartis sur toute la carte
  const tries = [...uniques].sort((p, q) => p.y - q.y)
  const choisis = []
  const cibles = tries.length <= 4 ? tries : [0, 1, 2, 3].map((i) => tries[Math.round((i * (tries.length - 1)) / 3)])
  for (const e of cibles) if (choisis.every((x) => separees(x.y, e.y, x.approx || e.approx))) choisis.push(e)
  if (choisis.length >= 3 && new Set(choisis.map((e) => norm(e.label))).size === choisis.length) {
    qs.push({
      id: `${PREFIXE}${c.id}-ordre`,
      carte: c.id,
      type: 'order',
      prompt: 'Remets dans l’ordre chronologique.',
      items: choisis.map((e) => e.label),
      explanation: choisis.map((e) => `${formatYear(e.y)} : ${e.label}`).join(' → '),
    })
  }
  return qs
}

// ── Personnages ──────────────────────────────────────────────────────────────
// mots d'un nom qu'on ne masque pas (ils peuvent apparaître ailleurs dans le texte sans désigner la personne ;
// « askia » : titre des souverains songhaï, porté aussi par le père d'Askia Daoud)
const NOM_GENERIQUE = new Set(['grand', 'grande', 'saint', 'sainte', 'jeune', 'ancien', 'vieux', 'pieux', 'hardi', 'roi', 'reine', 'empereur', 'pape', 'sultan', 'khan', 'chah', 'inca', 'mansa', 'askia'])
const echapper = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Description où le nom (et chacun de ses mots propres) est remplacé par « … ». */
export function masquerNom(description, nom) {
  let t = description.replaceAll(nom, '…')
  const motsNom = nom.split(/[\s'’-]+/).filter((w) => w.length >= 4 && /^\p{Lu}/u.test(w) && !NOM_GENERIQUE.has(norm(w)))
  for (const w of motsNom) t = t.replace(new RegExp(`(?<!\\p{L})${echapper(w)}(?!\\p{L})`, 'gu'), '…')
  // « Mary Leakey y découvre » → « … y découvre » (et non « … … »)
  t = t.replace(/…(?:[\s ]*…)+/g, '…')
  return { texte: t, motsNom }
}

function questionPersonne(c, cartes, personnes) {
  if (!c.nom || !c.description || c.description.length < 40) return null
  const { texte, motsNom } = masquerNom(c.description, c.nom)
  // le nom se lit encore (forme déclinée, surnom…) : question écartée
  if (motsNom.some((w) => norm(texte).includes(norm(w)))) return null
  if (texte.replace(/[…\s.,;:!?«»]/g, '').length < 30) return null
  const id = `${PREFIXE}${c.id}-qui`
  const cite = (n) => norm(c.description).includes(norm(n)) || n.split(/\s+/).some((w) => w.length >= 4 && !NOM_GENERIQUE.has(norm(w)) && norm(c.description).includes(norm(w)))
  const duChapitre = cartes.filter((x) => x.type === 'person' && x.nom && x.nom !== c.nom).map((x) => x.nom)
  const leurres = [...shuffle(duChapitre, rng(`${id}:chapitre`)), ...shuffle(personnes, rng(`${id}:ailleurs`))].filter((n) => n !== c.nom && !cite(n))
  return qcm(id, c.id, `Qui est-ce ? « ${texte} »`, c.nom, leurres, { explanation: `${c.nom}${c.role ? `, ${c.role.charAt(0).toLowerCase()}${c.role.slice(1)}` : ''}.` })
}

// ── Guerres et batailles ─────────────────────────────────────────────────────
// mots qui ne désignent pas un camp en particulier
const CAMP_GENERIQUE = new Set(['empire', 'royaume', 'armee', 'armees', 'troupes', 'forces', 'flotte', 'cite', 'cites', 'republique', 'dynastie', 'coalition', 'allies', 'peuples', 'tribus', 'general', 'roi', 'khan', 'chef', 'chefs', 'ses', 'leurs'])
const motsCamp = (t) => norm(String(t ?? '').replace(/\([^)]*\)/g, ' ')).split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !CAMP_GENERIQUE.has(w))
/** Même mot à la flexion près (« perses » ~ « perse », « mongols » ~ « mongole » ; pas « francs » ~ « france »). */
function memeRacine(a, b) {
  if (a === b) return true
  const m = Math.min(a.length, b.length)
  if (m < 5) return false
  let p = 0
  while (p < m && a[p] === b[p]) p++
  return p >= Math.min(m, 6)
}

/** Camp du vainqueur : 'allies' ou 'adversaires' s'il en désigne un seul sans ambiguïté, sinon null. */
export function campVainqueur(c) {
  const v = motsCamp(c.vainqueur)
  if (!v.length) return null
  const A = (c.allies ?? []).flatMap(motsCamp)
  const X = (c.adversaires ?? []).flatMap(motsCamp)
  const dans = (liste) => (w) => liste.some((x) => memeRacine(w, x))
  const tousA = v.every(dans(A))
  const tousX = v.every(dans(X))
  const unA = v.some(dans(A))
  const unX = v.some(dans(X))
  if (tousA && !unX) return 'allies'
  if (tousX && !unA) return 'adversaires'
  return null
}

function questionsGuerre(c) {
  const qs = []
  const base = `${PREFIXE}${c.id}`
  if (typeof c.annee === 'number' && c.nom && !donneAnnee(c.nom, c.annee)) {
    const approx = approximative(c.annee)
    const fmt = formatYear(c.annee)
    // conflit long (champ facultatif `fin`, année de fin) : aucun leurre pendant le conflit
    // (« Guerres des mousquets », 1807-1842 : 1837 serait aussi une bonne réponse)
    const fin = typeof c.fin === 'number' ? c.fin : c.annee
    const leurres = voisines(`${base}:v`, c.annee, [c.annee], approx).filter((y) => y < c.annee || y > fin)
    const q = qcm(`${base}-annee`, c.id, `${approx ? 'Vers quelle date' : 'En quelle année'} situe-t-on « ${c.nom} » ?`, fmt, leurres.map(formatYear), {
      explanation: `${c.nom} : ${fmt}.`,
    })
    if (q) qs.push(q)
  }
  const camp = campVainqueur(c)
  const perdant = camp && (camp === 'allies' ? c.adversaires : c.allies)?.[0]?.replace(/\s*\([^)]*\)/g, '').trim()
  if (camp && perdant && c.nom) {
    const vrai = rng(`${base}-vainqueur`)() < 0.5
    const v = c.vainqueur.replace(/\s*\([^)]*\)/g, '').trim()
    qs.push({
      id: `${base}-vainqueur`,
      carte: c.id,
      type: 'tf',
      prompt: `« ${c.nom} » : le vainqueur est « ${vrai ? v : perdant} ».`,
      answer: vrai,
      explanation: `Vainqueur : ${c.vainqueur}.`,
    })
  }
  return qs
}

/**
 * Leurres de « Qui est-ce ? » pour une civilisation : des personnes de la même époque mais d'un AUTRE
 * continent (plausibles, mais elles ne peuvent pas être la personne décrite) ; à défaut, d'un autre continent.
 *   personnes : [{ nom, civ }] (src/data/quiz-context.json → people)
 *   lieu      : civId → { epoch, continent } (ids) ou undefined
 */
export function leurresPersonnes(personnes, lieu, civId) {
  const ici = lieu(civId)
  if (!ici) return []
  const ailleurs = personnes.filter((p) => p.civ !== civId && lieu(p.civ) && lieu(p.civ).continent !== ici.continent)
  const memeEpoque = ailleurs.filter((p) => lieu(p.civ).epoch === ici.epoch)
  return [...new Set((memeEpoque.length >= 3 ? memeEpoque : ailleurs).map((p) => p.nom))]
}

/**
 * Questions générées depuis les cartes d'un chapitre (toutes les cartes, niveaux 1 et 2 ;
 * le niveau de chaque question est celui de sa carte).
 *   cartes    : cartes du chapitre (chapitre rédigé : `cards`)
 *   personnes : noms de personnes d'autres civilisations, leurres de « Qui est-ce ? »
 *               (leurresPersonnes : même époque, autre continent — jamais quelqu'un qui pourrait convenir)
 */
export function questionsDesCartes(cartes, { personnes = [] } = {}) {
  const qs = []
  for (const c of cartes ?? []) {
    if (c.type === 'dates' || c.type === 'steps') qs.push(...questionsDatees(c))
    else if (c.type === 'person') {
      const q = questionPersonne(c, cartes, personnes)
      if (q) qs.push(q)
    } else if (c.type === 'war') qs.push(...questionsGuerre(c))
  }
  return qs
}
