/**
 * aventure.js — Règles du parcours de l'Aventure (V3)
 * ====================================================
 * Fonctions pures, sans React ni chargement de données : elles reçoivent le parcours
 * compilé (src/data/parcours.json, depuis content/parcours.json) et l'état des salles,
 * et sont aussi utilisées par les tests Node (scripts/test-aventure.mjs).
 *
 * Règles (front/maquettes/aventure/ARBORESCENCE.md, validées le 14/11/2026) :
 *   - une salle = 3 étapes : Découvrir (→ bronze), Approfondir (→ argent), Épreuve réussie (→ or) ;
 *   - la salle suivante du tronc s'ouvre au BRONZE de la précédente ;
 *   - un monde s'ouvre quand toutes les salles du tronc du monde précédent ont l'ARGENT ;
 *   - une branche s'ouvre quand son monde est ouvert et que son parent a le BRONZE ;
 *   - l'or n'est jamais obligatoire pour avancer : il donne les étoiles, les coffres et les titres.
 *
 * État d'une salle (fourni par le store de progression, sprint 18) :
 *   salles[civId] = { medaille: 0 | 1 | 2 | 3, meilleur: note sur 20 | null, essais: n, enCours: étape | null }
 */

export const MEDAILLE = { AUCUNE: 0, BRONZE: 1, ARGENT: 2, OR: 3 }
export const ETAPES = ['decouvrir', 'approfondir', 'epreuve']
export const EPREUVE = { questions: 20, reussite: 15, etoiles: [15, 17, 19] }

/** Index du parcours compilé (à créer une fois). */
export function createParcours(data) {
  const monde = new Map() // civId → index du monde
  const position = new Map() // civId (tronc) → rang dans le tronc de son monde
  const ordre = [] // tout le parcours, dans l'ordre d'affichage (tronc puis branches, monde par monde)
  data.mondes.forEach((m, w) => m.tronc.forEach((id, i) => (monde.set(id, w), position.set(id, i))))
  const parent = new Map(Object.entries(data.branches))
  const enfants = new Map()
  for (const [id, p] of parent) enfants.set(p, [...(enfants.get(p) ?? []), id])
  for (const [id, w] of Object.entries(data.brancheMonde)) monde.set(id, w) // monde = époque de la branche
  data.mondes.forEach((m, w) => {
    ordre.push(...m.tronc)
    for (const id of parent.keys()) if (monde.get(id) === w) ordre.push(id)
  })
  const filsRouges = data.filsRouges ?? []
  const filRougeDe = new Map(filsRouges.flatMap((f) => f.membres.map((id) => [id, f.id])))
  return { data, mondes: data.mondes, monde, position, parent, enfants, ordre, filsRouges, filRougeDe }
}

const medal = (salles, id) => salles?.[id]?.medaille ?? MEDAILLE.AUCUNE
export const estTronc = (P, id) => P.position.has(id)

/** Étape à jouer ensuite dans une salle d'après sa médaille (null : tout est fait). */
export function etapeSuivante(medaille) {
  return ETAPES[medaille] ?? null
}

/** Étoiles d'une épreuve d'après la note sur 20 (0 si l'épreuve est ratée). */
export function etoiles(note) {
  return EPREUVE.etoiles.filter((seuil) => note >= seuil).length
}

/** Le monde w est-il ouvert ? (le premier toujours ; les autres : tronc précédent tout en argent) */
export function mondeOuvert(P, salles, w) {
  if (w <= 0) return w === 0
  return P.mondes[w - 1].tronc.every((id) => medal(salles, id) >= MEDAILLE.ARGENT)
}

/**
 * Une salle est-elle ouverte ? → { ouvert, raison }
 * raison : null, { type: 'monde', monde } (monde précédent à finir en argent),
 *          { type: 'salle', id } (salle précédente du tronc à découvrir), { type: 'parent', id }.
 */
export function ouverture(P, salles, id) {
  const w = P.monde.get(id)
  if (w === undefined || w < 0) return { ouvert: false, raison: null }
  if (!mondeOuvert(P, salles, w)) return { ouvert: false, raison: { type: 'monde', monde: w - 1 } }
  if (estTronc(P, id)) {
    const i = P.position.get(id)
    const prev = i > 0 ? P.mondes[w].tronc[i - 1] : null
    if (prev && medal(salles, prev) < MEDAILLE.BRONZE) return { ouvert: false, raison: { type: 'salle', id: prev } }
    return { ouvert: true, raison: null }
  }
  const p = P.parent.get(id)
  if (medal(salles, p) < MEDAILLE.BRONZE) return { ouvert: false, raison: { type: 'parent', id: p } }
  return { ouvert: true, raison: null }
}
export const estOuvert = (P, salles, id) => ouverture(P, salles, id).ouvert

/** L'épreuve d'une salle n'est jouable qu'après Approfondir (argent). */
export const epreuveOuverte = (P, salles, id) => estOuvert(P, salles, id) && medal(salles, id) >= MEDAILLE.ARGENT

/** Avancement d'un monde (jauges des écrans Parcours et Mondes). */
export function avancementMonde(P, salles, w) {
  const tronc = P.mondes[w].tronc
  const branches = P.ordre.filter((id) => !estTronc(P, id) && P.monde.get(id) === w)
  const count = (ids, min) => ids.filter((id) => medal(salles, id) >= min).length
  return {
    ouvert: mondeOuvert(P, salles, w),
    salles: tronc.length,
    commencees: count(tronc, MEDAILLE.BRONZE),
    argent: count(tronc, MEDAILLE.ARGENT),
    or: count(tronc, MEDAILLE.OR),
    branches: branches.length,
    branchesOuvertes: branches.filter((id) => estOuvert(P, salles, id)).length,
    branchesCommencees: count(branches, MEDAILLE.BRONZE),
    branchesOr: count(branches, MEDAILLE.OR),
  }
}

/** Salle en cours : la première salle ouverte du tronc (tous mondes confondus) sans l'argent. */
export function salleEnCours(P, salles) {
  for (let w = 0; w < P.mondes.length; w++) {
    if (!mondeOuvert(P, salles, w)) return null
    for (const id of P.mondes[w].tronc) if (medal(salles, id) < MEDAILLE.ARGENT && estOuvert(P, salles, id)) return id
  }
  return null
}

/**
 * Étape du jour : une seule proposition → { civId, etape, raison } ou null.
 * Ordre (ARBORESCENCE.md § 3) : étape commencée et pas finie ; étape suivante de la salle
 * en cours du tronc ; épreuve ratée à retenter ; branche nouvellement ouverte ; puis
 * épreuves pas encore réussies et branches à approfondir.
 */
export function etapeDuJour(P, salles) {
  const ouvertes = P.ordre.filter((id) => estOuvert(P, salles, id))
  const enCours = ouvertes.find((id) => ETAPES.includes(salles?.[id]?.enCours))
  if (enCours) return { civId: enCours, etape: salles[enCours].enCours, raison: 'reprendre' }

  const salle = salleEnCours(P, salles)
  if (salle) return { civId: salle, etape: etapeSuivante(medal(salles, salle)), raison: 'tronc' }

  const ratee = ouvertes.find((id) => medal(salles, id) === MEDAILLE.ARGENT && (salles?.[id]?.essais ?? 0) > 0)
  if (ratee) return { civId: ratee, etape: 'epreuve', raison: 'retenter' }

  const branche = ouvertes.find((id) => !estTronc(P, id) && medal(salles, id) === MEDAILLE.AUCUNE)
  if (branche) return { civId: branche, etape: 'decouvrir', raison: 'branche' }

  const epreuve = ouvertes.find((id) => estTronc(P, id) && medal(salles, id) === MEDAILLE.ARGENT)
  if (epreuve) return { civId: epreuve, etape: 'epreuve', raison: 'or' }

  const reste = ouvertes.find((id) => medal(salles, id) < MEDAILLE.OR)
  if (reste) return { civId: reste, etape: etapeSuivante(medal(salles, reste)), raison: 'or' }
  return null
}

/** Avancement d'un fil rouge (lignée) : membres en or / total. */
export function avancementFilRouge(P, salles, filRouge) {
  return { or: filRouge.membres.filter((id) => medal(salles, id) >= MEDAILLE.OR).length, total: filRouge.membres.length }
}

/**
 * Titres de collection obtenus → [{ id, type: 'monde' | 'filRouge' | 'ultime', titre }].
 * Monde : tout son tronc en or. Fil rouge : toute la lignée en or. Ultime : tout le parcours en or.
 */
export function titresObtenus(P, salles) {
  const or = (id) => medal(salles, id) >= MEDAILLE.OR
  const titres = []
  P.mondes.forEach((m) => m.tronc.every(or) && titres.push({ id: `monde:${m.epoque}`, type: 'monde', titre: m.titre, theme: m.theme }))
  for (const f of P.filsRouges) if (f.membres.every(or)) titres.push({ id: `fil:${f.id}`, type: 'filRouge', titre: f.titre })
  if (P.ordre.every(or)) titres.push({ id: 'ultime', type: 'ultime', titre: P.data.titreUltime })
  return titres
}
