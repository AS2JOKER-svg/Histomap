// Rapprochement de texte question → carte (outil du sprint 28, d'après src/lib/eclairs.js du sprint 26).
// Sert à PROPOSER le champ `carte` d'une question rédigée (scripts/relier-questions.mjs) : la carte du
// chapitre où sa bonne réponse se lit le mieux. Le site n'utilise plus ce rapprochement : il lit `carte`.
//
//   mots(texte), memeMot(a, b), texteCarte(carte)
//   rattacher(cartes, questions) → Map id → [[ids de cartes sûres pour la partie 1], [partie 2]…] | null
//   analyser(cartes, q)          → { statut: 'sure' | 'probable' | 'introuvable', parties: [{ candidats, choix }] }
//   proposer(cartes, q)          → valeur du champ `carte` proposée ('id' | ['id1', 'id2'] | null) + statut
import { formatYear } from '../../src/lib/time.js'

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
    .replace(/(\d)[\s  .](?=\d{3}(?!\d))/g, '$1') // 1 500 → 1500
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
// Seuils réglés sur les 214 chapitres au sprint 26
const SEUIL_REPONSE = 0.6 // part (pondérée) de la bonne réponse qu'on doit retrouver dans la carte
const SEUIL_CONTEXTE = 0.2 // part (pondérée) de l'énoncé qu'on doit y retrouver aussi (QCM)
const SEUIL_AFFIRMATION = 0.5 // vrai / faux : part de l'affirmation (et de son explication) retrouvée
const EGALITE = 0.02 // deux cartes à moins de 0,02 point l'une de l'autre sont aussi bonnes

/**
 * Parties d'une question à retrouver dans les cartes :
 *   QCM : la bonne réponse (+ l'énoncé et l'explication comme contexte) ;
 *   vrai / faux : l'affirmation et son explication ;
 *   ordre : chaque élément à remettre dans l'ordre.
 */
function parties(q) {
  const contexte = mots(`${q.prompt ?? ''} ${q.explanation ?? ''}`)
  if (q.type === 'mcq' || q.type === 'map') return [{ texte: q.options?.[q.answer], reponse: mots(q.options?.[q.answer]), contexte }]
  if (q.type === 'tf') return [{ texte: q.prompt, reponse: contexte, contexte: [] }]
  if (q.type === 'order') return (q.items ?? []).map((it) => ({ texte: it, reponse: mots(it), contexte: [] }))
  return []
}

/** Index des mots des cartes d'un chapitre (à calculer une fois par chapitre). */
export function indexer(cartes) {
  const contenu = cartes.filter(carteDeContenu).map((c, rang) => ({ id: c.id, tier: c.tier, rang, mots: [...new Set(mots(texteCarte(c)))] }))
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
  return { contenu, dans, couverture }
}

/**
 * Analyse d'une question : pour chaque partie, les cartes classées (r = part de la réponse retrouvée,
 * k = part du contexte, note = 2r + k) et la carte choisie.
 *   sure        : comme au sprint 26 (réponse et contexte assez présents, aucune carte meilleure moins sûre) ;
 *   probable    : une carte nettement en tête mais sous les seuils (à relire) ;
 *   introuvable : rien de net (à relire).
 * Choix des cartes (le moins possible) parmi les cartes sûres de chaque partie : niveau 1 d'abord (la
 * question sert dès Découvrir), puis la carte qui couvre le plus de parties (une frise plutôt que quatre
 * cartes pour une question d'ordre), puis la première du paquet.
 */
export function analyser(index, q) {
  const { contenu, couverture } = index
  const ps = parties(q)
  const res = { statut: ps.length ? 'sure' : 'introuvable', parties: [] }
  for (const { texte, reponse, contexte } of ps) {
    const notes = contenu
      .map((c) => {
        const r = couverture(reponse, c.id)
        const k = couverture(contexte, c.id)
        return { id: c.id, tier: c.tier, rang: c.rang, r: r ?? 0, k: k ?? 0, aContexte: k !== null, note: 2 * (r ?? 0) + (k ?? 0) }
      })
      .sort((a, b) => b.note - a.note || a.tier - b.tier || a.rang - b.rang)
    const max = notes[0]?.note ?? 0
    const meilleures = notes.filter((x) => x.note >= max - EGALITE)
    const seuil = q.type === 'tf' ? SEUIL_AFFIRMATION : SEUIL_REPONSE
    const sures = meilleures.filter((x) => x.r >= seuil && (!x.aContexte || x.k >= SEUIL_CONTEXTE))
    let statut = 'sure'
    if (!reponse.length || !sures.length || sures.length < meilleures.length) {
      // une carte nettement devant les autres, avec au moins un tiers de la réponse : probable
      const second = notes.find((x) => x.note < max - EGALITE)
      const net = meilleures.length === 1 && (!second || max - second.note >= 0.25) && notes[0].r >= 0.34
      statut = reponse.length && net ? 'probable' : 'introuvable'
    }
    const pool = statut === 'sure' ? sures : meilleures.slice(0, 1)
    res.parties.push({ texte, candidats: notes.slice(0, 3), sures: statut === 'sure' ? sures.map((x) => x.id) : [], pool, choix: null, statut })
    if (statut === 'introuvable') res.statut = 'introuvable'
    else if (statut === 'probable' && res.statut === 'sure') res.statut = 'probable'
  }
  // couverture : à chaque tour, la carte (niveau 1 d'abord) qui couvre le plus de parties encore libres
  const libres = new Set(res.parties.keys())
  while (libres.size) {
    const cand = new Map()
    for (const i of libres) for (const c of res.parties[i].pool) {
      const x = cand.get(c.id) ?? { ...c, parts: [] }
      x.parts.push(i)
      cand.set(c.id, x)
    }
    const best = [...cand.values()].sort((a, b) => a.tier - b.tier || b.parts.length - a.parts.length || a.rang - b.rang)[0]
    if (!best) break
    for (const i of best.parts) {
      res.parties[i].choix = best.id
      libres.delete(i)
    }
  }
  for (const p of res.parties) delete p.pool
  return res
}

/** Valeur du champ `carte` à partir des cartes choisies : un id, une liste (plusieurs cartes), ou null. */
export function valeurCarte(ids) {
  if (!ids.length || !ids.every(Boolean)) return null
  const u = [...new Set(ids)]
  return u.length === 1 ? u[0] : u
}

/** Proposition pour une question : { carte, statut, analyse }. */
export function proposer(index, q) {
  const analyse = analyser(index, q)
  const ids = analyse.parties.map((p) => p.choix)
  return { carte: valeurCarte(ids), statut: analyse.statut, analyse }
}

/**
 * Rattachement « sûr » de chaque question (règle du sprint 26, gardée pour comparer avant / après) :
 * Map id → [[ids de cartes acceptables pour la partie 1], [partie 2]…], ou null.
 */
export function rattacher(cartes, questions) {
  const index = indexer(cartes)
  return new Map(questions.map((q) => {
    const a = analyser(index, q)
    return [q.id, a.statut === 'sure' ? a.parties.map((p) => p.sures) : null]
  }))
}
