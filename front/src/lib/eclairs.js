/**
 * eclairs.js — Questions éclair sur les cartes déjà lues (V3.1, sprint 26)
 * ========================================================================
 * Règle : une question éclair ne porte que sur une carte déjà lue dans la séance.
 * En attendant le lien explicite question → carte (champ `carte`, sprint 28), chaque question
 * rédigée est rattachée par rapprochement de texte à la carte du chapitre où sa bonne réponse
 * se lit le mieux, parmi TOUTES les cartes (niveaux 1 et 2) : une question dont la réponse est
 * surtout dans une carte d'Approfondir n'est donc jamais posée dans Découvrir.
 * Dans le doute (rapprochement trop faible), la question n'est pas posée : mieux vaut poser
 * moins de questions qu'une question sur une carte pas encore vue.
 *
 *   rattacher(cartes, questions)          → Map id de question → parties [[ids de cartes possibles]…]
 *   estVue(parties, lues)                 la bonne réponse se lit-elle dans les cartes lues ?
 *   choisirEclairs({ cartes, questions, paquet, nombre, milieu, graine })
 *                                         → { milieu: question | null, fin: [questions] }
 *
 * Module pur, sans données : utilisé par l'app (SallePage) et par les scripts (tests, rapport).
 */
import { formatYear } from './time.js'
import { rng, shuffle } from './random.js'

// ── Mots ─────────────────────────────────────────────────────────────────────
// mots-outils et mots de question : ils ne disent rien du contenu
const VIDES = new Set(
  `les des une aux dans par pour sur sous avec sans entre vers chez que qui quoi quel quelle quels quelles dont
  est sont etait etaient ete etre ont avait avaient fait font faire elle ils elles leur leurs cet cette ces
  pas plus moins tres tout tous toute toutes aussi comme mais donc car non oui avant apres pendant depuis jusqu lors
  quand comment pourquoi combien lequel laquelle lesquels lesquelles celui celle ceux celles nom nomme nommee
  appelle appellent appelait appele appelee vrai faux ordre remettez remettre chronologique suivants suivantes
  elements evenements son ses sur une peu bien deux selon encore deja autre autres meme memes ici the`
    .split(/\s+/)
    .filter(Boolean)
)

const normaliser = (t) => t.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')

/** Mots significatifs d'un texte : minuscules sans accents, sans élisions ni mots-outils ; nombres gardés. */
export function mots(texte) {
  if (!texte) return []
  const t = normaliser(String(texte))
    .replace(/(\d)[\s  .](?=\d{3}(?!\d))/g, '$1') // 1 500 → 1500
    .replace(/(^|[^a-z])(?:[ldjnmstc]|qu)['’]/g, '$1 ') // l’, d’, qu’…
  return t.split(/[^a-z0-9]+/).filter((m) => m && (/^\d+$/.test(m) || (m.length >= 3 && !VIDES.has(m))))
}

/** Deux mots identiques à la flexion près (pluriel, féminin, conjugaison proche : « détruite » ~ « détruire »). */
export function memeMot(a, b) {
  if (a === b) return true
  if (/^\d/.test(a) || /^\d/.test(b)) return false // les nombres doivent être identiques
  const m = Math.min(a.length, b.length)
  if (m < 4) return a.replace(/[sx]$/, '') === b.replace(/[sx]$/, '')
  let p = 0
  while (p < m && a[p] === b[p]) p++
  return p >= Math.min(m, 6) // « tunis » ~ « tunisie », « phéniciens » ~ « phénicienne » ; pas « romain » ~ « romantique »
}

// ── Texte d'une carte ────────────────────────────────────────────────────────
const ANNEES = new Set(['year', 'annee', 'debut', 'fin'])
const IGNORES = new Set(['id', 'tier', 'type', 'years', 'readingTime'])

/** Tout ce qu'affiche une carte, en texte (années comprises, au format affiché). */
export function texteCarte(carte) {
  const out = []
  const visiter = (v, cle) => {
    if (v == null || IGNORES.has(cle)) return
    if (typeof v === 'string') out.push(v)
    else if (typeof v === 'number') out.push(ANNEES.has(cle) ? formatYear(v) : String(v))
    else if (Array.isArray(v)) v.forEach((x) => visiter(x, cle))
    else if (typeof v === 'object') Object.entries(v).forEach(([k, x]) => visiter(x, k))
  }
  visiter(carte)
  return out.join(' ')
}

/** Cartes qui portent du contenu (ni couverture, ni bilan, ni lignée). */
export const carteDeContenu = (c) => c && !['cover', 'recap', 'lineage'].includes(c.type)

// ── Rattachement question → carte ────────────────────────────────────────────
// Seuils réglés sur les 214 chapitres (rapport : npm run eclairs → reports/questions-eclair.md)
const SEUIL_REPONSE = 0.6 // part (pondérée) de la bonne réponse qu'on doit retrouver dans la carte
const SEUIL_CONTEXTE = 0.2 // part (pondérée) de l'énoncé qu'on doit y retrouver aussi (QCM)
const SEUIL_AFFIRMATION = 0.5 // vrai / faux : part de l'affirmation (et de son explication) retrouvée
const EGALITE = 0.02 // deux cartes à moins de 0,02 point l'une de l'autre sont aussi bonnes

/**
 * Parties d'une question à retrouver dans les cartes :
 *   QCM / carte : la bonne réponse (+ l'énoncé et l'explication comme contexte) ;
 *   vrai / faux : l'affirmation et son explication ;
 *   ordre : chaque élément à remettre dans l'ordre.
 */
function parties(q) {
  const contexte = mots(`${q.prompt ?? ''} ${q.explanation ?? ''}`)
  if (q.type === 'mcq' || q.type === 'map') return [{ reponse: mots(q.options?.[q.answer]), contexte }]
  if (q.type === 'tf') return [{ reponse: contexte, contexte: [] }]
  if (q.type === 'order') return (q.items ?? []).map((it) => ({ reponse: mots(it), contexte: [] }))
  return []
}

/**
 * Rattache chaque question à la ou les cartes où sa bonne réponse se lit le mieux.
 * Renvoie une Map : id de question → [[ids de cartes acceptables pour la partie 1], [partie 2]…],
 * ou null si une partie ne se lit dans aucune carte avec assez de certitude.
 */
export function rattacher(cartes, questions) {
  const contenu = cartes.filter(carteDeContenu).map((c) => ({ id: c.id, mots: [...new Set(mots(texteCarte(c)))] }))
  const n = contenu.length
  const cache = new Map()
  /** Cartes qui contiennent ce mot (à la flexion près). */
  const dans = (m) => {
    if (!cache.has(m)) cache.set(m, new Set(contenu.filter((c) => c.mots.some((x) => memeMot(m, x))).map((c) => c.id)))
    return cache.get(m)
  }
  // un mot présent dans toutes les cartes (le nom de la civilisation…) ne distingue rien
  const poids = (m) => Math.log((n + 1) / (dans(m).size + 0.5))
  const couverture = (liste, carteId) => {
    const uniques = [...new Set(liste)]
    const total = uniques.reduce((s, m) => s + poids(m), 0)
    if (!total) return null
    return uniques.reduce((s, m) => s + (dans(m).has(carteId) ? poids(m) : 0), 0) / total
  }

  const res = new Map()
  for (const q of questions) {
    const ps = parties(q)
    let ok = ps.length > 0
    const cartesParPartie = []
    for (const { reponse, contexte } of ps) {
      if (!ok) break
      const notes = contenu.map((c) => {
        const r = couverture(reponse, c.id)
        const k = couverture(contexte, c.id)
        return { id: c.id, r: r ?? 0, k: k ?? 0, aContexte: k !== null, note: 2 * (r ?? 0) + (k ?? 0) }
      })
      const max = Math.max(...notes.map((x) => x.note))
      const meilleures = notes.filter((x) => x.note >= max - EGALITE)
      const seuil = q.type === 'tf' ? SEUIL_AFFIRMATION : SEUIL_REPONSE
      const sures = meilleures.filter((x) => x.r >= seuil && (!x.aContexte || x.k >= SEUIL_CONTEXTE))
      // une réponse vide de sens (« Oui ») ou introuvable : on ne rattache pas
      if (!reponse.length || !sures.length || sures.length < meilleures.length) ok = false
      else cartesParPartie.push(sures.map((x) => x.id))
    }
    res.set(q.id, ok ? cartesParPartie : null)
  }
  return res
}

/** La question se lit-elle dans les cartes lues ? (chaque partie dans au moins une carte lue) */
export const estVue = (parts, lues) => !!parts && parts.every((ids) => ids.some((id) => lues.has(id)))

/**
 * Questions éclair d'une séance.
 *   cartes   : toutes les cartes du chapitre (niveaux 1 et 2)
 *   questions: questions candidates (rédigées), avec leur id
 *   paquet   : ids des cartes de la séance, dans l'ordre (doublons des cartes à revoir permis)
 *   nombre   : questions voulues en tout
 *   milieu   : nombre de cartes lues avant la question du milieu (null = pas de question au milieu)
 *   graine   : hasard reproductible
 * La question du milieu ne porte que sur les cartes lues avant elle ; les autres, sur tout le paquet.
 * S'il n'y a pas assez de questions sûres, on en pose moins.
 */
export function choisirEclairs({ cartes, questions, paquet, nombre, milieu = null, graine = '' }) {
  const liens = rattacher(cartes, questions)
  const rand = rng(`eclair:${graine}`)
  const vues = (ids) => {
    const lues = new Set(ids)
    return shuffle(
      questions.filter((q) => estVue(liens.get(q.id), lues)),
      rand
    )
  }
  const premiere = milieu ? vues(paquet.slice(0, milieu))[0] ?? null : null
  const fin = vues(paquet)
    .filter((q) => q !== premiere)
    .slice(0, Math.max(0, nombre - (premiere ? 1 : 0)))
  return { milieu: premiere, fin }
}
