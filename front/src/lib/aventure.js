/**
 * aventure.js — Règles du parcours de l'Aventure (V3.1 « Allègement », sprint 29)
 * ================================================================================
 * Fonctions pures, sans React ni chargement de données : elles reçoivent le parcours compilé
 * (src/data/parcours.json, depuis content/parcours.json) et l'état de l'Aventure (`av`, voir
 * lib/progression.js), et sont aussi utilisées par les tests Node (scripts/test-aventure.mjs).
 *
 * Règles (décisions du 16/11/2026, CLAUDE.md § V3.1 ; points tranchés le 16/11/2026 au sprint 29) :
 *   - le CHEMIN d'un joueur = les salles du tronc, monde par monde, + les salles de son fil rouge qui sont
 *     des annexes, insérées juste après leur salle parente, sinon (parente dans un monde précédent)
 *     avant la première salle de leur monde qui commence plus tard qu'elles ;
 *   - une salle du tronc : Découvrir → salle « découverte » ; Épreuve de 12 questions dès la découverte
 *     (★ 9, ★★ 11, ★★★ 12) ; Approfondir = bonus facultatif ;
 *   - une annexe (salle de fil comprise) : une seule séance, cartes puis mini-épreuve de 8 questions
 *     (★ 6, ★★ 7, ★★★ 8) ; elle est « découverte » (faite) à la fin de la séance, quelle que soit la note ;
 *   - chaîne simple : chaque salle découverte du chemin ouvre la suivante, même d'un monde à l'autre
 *     (une salle de fil en fin de monde ouvre donc le monde suivant) ;
 *   - une annexe hors du chemin s'ouvre quand sa salle parente est découverte et que son monde est atteint ;
 *   - une salle ouverte ne se referme jamais : en changeant de fil, les salles qui se refermeraient sont
 *     gardées dans `av.ouvertes` ; les salles du nouveau fil placées derrière le joueur sont « à rattraper » :
 *     elles ne bloquent rien, ne sont jamais la salle en cours et s'ouvrent dans l'ordre du fil ;
 *   - titres : au moins ★ sur toutes les salles concernées (tronc d'un monde, fil rouge, tout le parcours).
 *
 * État d'une salle : av.salles[civId] = { decouverte, approfondi, etoiles: 0-3, essais, enCours: étape | null }
 */

export const ETAPES = ['decouvrir', 'approfondir', 'epreuve']
/** Épreuve d'une salle du tronc et mini-épreuve d'une annexe ; `rattrapage` = questions ratées qui reviennent. */
export const EPREUVE = {
  tronc: { questions: 12, rattrapage: 3 },
  annexe: { questions: 8, rattrapage: 2 },
}
export const SALLE_VIDE = Object.freeze({ decouverte: false, approfondi: false, etoiles: 0, essais: 0, enCours: null })

/** Seuils des étoiles d'une épreuve de `total` questions : 12 → 9 / 11 / 12 ; 8 → 6 / 7 / 8. */
export function seuilsEtoiles(total) {
  return [Math.ceil(total * 0.75), Math.max(1, total - 1), total]
}
/** Étoiles d'une épreuve (0 = ratée). */
export function etoilesEpreuve(correct, total) {
  if (!total) return 0
  return seuilsEtoiles(total).filter((s) => correct >= s).length
}
/** Étoiles d'une ancienne note sur 20 (V3 : 15 → ★, 17 → ★★, 19 → ★★★), pour la migration. */
export const etoilesSur20 = (note) => [15, 17, 19].filter((s) => (note ?? 0) >= s).length

/** Index du parcours compilé (à créer une fois). */
export function createParcours(data) {
  const monde = new Map() // civId → index du monde (son époque)
  const position = new Map() // civId (tronc) → rang dans le tronc de son monde
  data.mondes.forEach((m, w) => m.tronc.forEach((id, i) => (monde.set(id, w), position.set(id, i))))
  const parent = new Map(Object.entries(data.branches))
  const enfants = new Map()
  for (const [id, p] of parent) enfants.set(p, [...(enfants.get(p) ?? []), id])
  for (const [id, w] of Object.entries(data.brancheMonde)) monde.set(id, w)
  const ordre = [] // tout le parcours : tronc puis annexes, monde par monde
  data.mondes.forEach((m, w) => {
    ordre.push(...m.tronc)
    for (const id of parent.keys()) if (monde.get(id) === w) ordre.push(id)
  })
  const filsRouges = data.filsRouges ?? []
  const filRougeDe = new Map(filsRouges.flatMap((f) => f.membres.map((id) => [id, f.id])))
  return {
    data,
    mondes: data.mondes,
    monde,
    position,
    parent,
    enfants,
    ordre,
    filsRouges,
    filRougeDe,
    courts: data.courts ?? {},
    debuts: data.debuts ?? {},
    chemins: new Map(), // cache : fil → chemin
  }
}

export const estTronc = (P, id) => P.position.has(id)
export const salleDe = (av, id) => ({ ...SALLE_VIDE, ...av?.salles?.[id] })
const decouverte = (av, id) => !!av?.salles?.[id]?.decouverte
const etoilesDe = (av, id) => av?.salles?.[id]?.etoiles ?? 0
export const filDe = (P, filId) => P.filsRouges.find((f) => f.id === filId) ?? null

// ── Chemin du joueur ──────────────────────────────────────────────────────────

/** Chemin d'un joueur (ids, de la Préhistoire à la fin) : le tronc + les annexes de son fil rouge. */
export function chemin(P, filId = null) {
  const cle = filId ?? ''
  if (!P.chemins.has(cle)) {
    const parMonde = P.mondes.map((m) => [...m.tronc])
    for (const id of filDe(P, filId)?.membres ?? []) {
      if (estTronc(P, id)) continue
      const liste = parMonde[P.monde.get(id)]
      const i = liste.indexOf(P.parent.get(id))
      if (i >= 0) liste.splice(i + 1, 0, id) // juste après sa salle parente
      else {
        // parente dans un monde précédent : avant la première salle de son monde qui commence plus tard
        const debut = P.debuts[id] ?? 0
        const k = liste.findIndex((x) => (P.debuts[x] ?? 0) > debut)
        liste.splice(k < 0 ? liste.length : k, 0, id)
      }
    }
    P.chemins.set(cle, parMonde.flat())
  }
  return P.chemins.get(cle)
}
export const cheminDe = (P, av) => chemin(P, av?.filRouge ?? null)
/** Salles du chemin dans le monde w. */
export const cheminMonde = (P, av, w) => cheminDe(P, av).filter((id) => P.monde.get(id) === w)

// ── Ouverture ─────────────────────────────────────────────────────────────────

const OUVERTE = Object.freeze({ ouvert: true, raison: null })

/**
 * Une salle est-elle ouverte ? → { ouvert, raison }
 * raison : null ; { type: 'salle', id } (salle précédente du chemin à découvrir) ;
 *          { type: 'monde', monde, id } (monde pas encore atteint : `id` = la salle qui l'ouvre) ;
 *          { type: 'parent', id } (annexe : sa salle parente à découvrir).
 */
export function ouverture(P, av, id) {
  const w = P.monde.get(id)
  if (w === undefined) return { ouvert: false, raison: null }
  if (decouverte(av, id) || av?.ouvertes?.includes(id)) return OUVERTE
  const ch = cheminDe(P, av)
  const i = ch.indexOf(id)
  if (i === 0) return OUVERTE
  if (i > 0) {
    const prev = ch[i - 1]
    if (decouverte(av, prev)) return OUVERTE
    return { ouvert: false, raison: P.monde.get(prev) !== w ? { type: 'monde', monde: w, id: prev } : { type: 'salle', id: prev } }
  }
  // annexe hors du chemin
  const parent = P.parent.get(id)
  if (!decouverte(av, parent)) return { ouvert: false, raison: { type: 'parent', id: parent } }
  if (!mondeOuvert(P, av, w)) return { ouvert: false, raison: { type: 'monde', monde: w, id: porteMonde(P, av, w) } }
  return OUVERTE
}
export const estOuvert = (P, av, id) => ouverture(P, av, id).ouvert

/** Le monde w est-il atteint ? (le premier toujours ; les autres : une salle de son chemin ouverte) */
export function mondeOuvert(P, av, w) {
  if (w <= 0) return w === 0
  return cheminMonde(P, av, w).some((id) => estOuvert(P, av, id))
}

/** Salle dont la découverte ouvre le monde w (la dernière du chemin dans le monde précédent). */
export function porteMonde(P, av, w) {
  const ch = cheminDe(P, av)
  const i = ch.findIndex((id) => P.monde.get(id) === w)
  return i > 0 ? ch[i - 1] : null
}

/**
 * Salles « à rattraper » : salles de fil du chemin, pas encore découvertes, derrière le joueur
 * (une salle plus loin sur le chemin est découverte, ou est une salle du tronc déjà ouverte).
 */
export function aRattraper(P, av) {
  const ch = cheminDe(P, av)
  const out = new Set()
  let devant = false
  for (let i = ch.length - 1; i >= 0; i--) {
    const id = ch[i]
    const d = decouverte(av, id)
    if (!d && devant && !estTronc(P, id)) out.add(id)
    if (d || (estTronc(P, id) && estOuvert(P, av, id))) devant = true
  }
  return out
}

/** Salle en cours : la première salle du chemin pas encore découverte (hors salles à rattraper). null = chemin fini. */
export function salleEnCours(P, av) {
  const rattraper = aRattraper(P, av)
  return cheminDe(P, av).find((id) => !decouverte(av, id) && !rattraper.has(id)) ?? null
}

// ── Étapes d'une salle ───────────────────────────────────────────────────────

/** Taille de l'épreuve d'une salle et questions ratées qui reviennent. */
export const epreuveDe = (P, id) => (estTronc(P, id) ? EPREUVE.tronc : EPREUVE.annexe)

/**
 * Étape à jouer ensuite dans une salle (le gros bouton du panneau) : l'étape commencée s'il y en a une,
 * sinon Découvrir (la séance, pour une annexe), puis l'Épreuve tant qu'il manque des étoiles. null : tout est fait.
 */
export function etapeSuivante(P, av, id) {
  const s = salleDe(av, id)
  if (s.enCours) return s.enCours
  if (!s.decouverte) return 'decouvrir'
  return s.etoiles < 3 ? 'epreuve' : null
}

/**
 * Une étape est-elle jouable ? Découvrir dès que la salle est ouverte ; dans le tronc, Approfondir et
 * l'Épreuve après la découverte ; dans une annexe, la mini-épreuve après les cartes de la séance
 * (étape commencée) ou pour améliorer ses étoiles. Approfondir n'existe pas pour une annexe.
 */
export function etapeAccessible(P, av, id, etape) {
  if (!estOuvert(P, av, id)) return false
  const s = salleDe(av, id)
  if (etape === 'decouvrir') return true
  if (estTronc(P, id)) return s.decouverte && (etape === 'approfondir' || etape === 'epreuve')
  return etape === 'epreuve' && (s.decouverte || s.enCours === 'epreuve')
}

/** Niveaux de cartes vus, donc posables à l'épreuve : 1 (Découvrir), + 2 si Approfondir est fait. */
export const niveauxVus = (P, av, id) => (estTronc(P, id) && salleDe(av, id).approfondi ? [1, 2] : [1])

// ── Avancement ───────────────────────────────────────────────────────────────

const compte = (ids, ok) => ids.filter(ok).length

/** Avancement d'un monde : salles du chemin, tronc (pour le titre) et annexes. */
export function avancementMonde(P, av, w) {
  const ch = cheminMonde(P, av, w)
  const tronc = P.mondes[w].tronc
  const surChemin = new Set(ch)
  const annexes = P.ordre.filter((id) => !surChemin.has(id) && !estTronc(P, id) && P.monde.get(id) === w)
  return {
    ouvert: mondeOuvert(P, av, w),
    salles: ch.length,
    decouvertes: compte(ch, (id) => decouverte(av, id)),
    etoiles: ch.reduce((n, id) => n + etoilesDe(av, id), 0),
    tronc: tronc.length,
    troncEtoile: compte(tronc, (id) => etoilesDe(av, id) >= 1),
    annexes: annexes.length,
    annexesOuvertes: compte(annexes, (id) => estOuvert(P, av, id)),
    annexesFaites: compte(annexes, (id) => decouverte(av, id)),
  }
}

/** Avancement d'un fil rouge : salles découvertes et salles avec au moins ★, sur le total. */
export function avancementFilRouge(P, av, fil) {
  return {
    decouvertes: compte(fil.membres, (id) => decouverte(av, id)),
    etoilees: compte(fil.membres, (id) => etoilesDe(av, id) >= 1),
    total: fil.membres.length,
  }
}
export const filTermine = (av, fil) => fil.membres.every((id) => decouverte(av, id))

/**
 * Titres de collection obtenus → [{ id, type: 'monde' | 'filRouge' | 'ultime', titre }] :
 * au moins ★ sur tout le tronc d'un monde, sur toute une lignée, sur tout le parcours.
 */
export function titresObtenus(P, av) {
  const ok = (id) => etoilesDe(av, id) >= 1
  const titres = []
  P.mondes.forEach((m) => m.tronc.every(ok) && titres.push({ id: `monde:${m.epoque}`, type: 'monde', titre: m.titre }))
  for (const f of P.filsRouges) if (f.membres.every(ok)) titres.push({ id: `fil:${f.id}`, type: 'filRouge', titre: f.titre })
  if (P.ordre.every(ok)) titres.push({ id: 'ultime', type: 'ultime', titre: P.data.titreUltime })
  return titres
}

// ── « À revoir » ─────────────────────────────────────────────────────────────

/**
 * Erreurs à revoir, salle par salle (cartes marquées « à revoir » + questions ratées à l'épreuve)
 * → [{ civId, nb, jours }], « jours » = ancienneté du plus vieux passage concerné.
 */
export const REVISION = { seuil: 5, jours: 3, parSeance: 6 }
export function listeARevoir(chapters = {}, quizzes = {}, maintenant = Date.now()) {
  const ids = new Set([...Object.keys(chapters), ...Object.keys(quizzes)])
  const out = []
  for (const civId of ids) {
    const cartes = chapters[civId]?.toReview?.length ?? 0
    const questions = quizzes[civId]?.failed?.length ?? 0
    if (!cartes && !questions) continue
    const dates = [cartes && chapters[civId]?.finishedAt, questions && quizzes[civId]?.lastAt].filter(Boolean)
    const jours = dates.length ? Math.floor((maintenant - Math.min(...dates)) / 86400000) : 0
    out.push({ civId, nb: cartes + questions, jours })
  }
  return out
}

/** Séance « À revoir » proposée (bulle à côté de la salle en cours) : dès 5 erreurs ou 3 jours, une par jour. */
export function revisionDue(aRevoir = [], revisionFaite = false) {
  if (revisionFaite) return null
  return aRevoir.filter((r) => r.nb >= REVISION.seuil || r.jours >= REVISION.jours).sort((a, b) => b.nb - a.nb)[0] ?? null
}

/**
 * Prochaine action proposée → { civId, etape, raison, nb? } ou null (écran Aventure jusqu'à la carte du sprint 30).
 * Ordre : étape commencée ; séance « À revoir » due ; salle en cours ; salle à rattraper ; épreuve d'une salle
 * découverte sans étoile ; annexe ouverte pas encore faite ; étoiles à gagner.
 */
export function etapeDuJour(P, av, { aRevoir = [], revisionFaite = false } = {}) {
  const ouvertes = P.ordre.filter((id) => estOuvert(P, av, id))
  const commencee = ouvertes.find((id) => ETAPES.includes(av?.salles?.[id]?.enCours))
  if (commencee) return { civId: commencee, etape: av.salles[commencee].enCours, raison: 'reprendre' }

  const due = revisionDue(aRevoir, revisionFaite)
  if (due) return { civId: due.civId, etape: 'a-revoir', raison: 'a-revoir', nb: due.nb }

  const salle = salleEnCours(P, av)
  if (salle) return { civId: salle, etape: 'decouvrir', raison: 'chemin' }

  const rattraper = [...aRattraper(P, av)][0]
  if (rattraper && estOuvert(P, av, rattraper)) return { civId: rattraper, etape: 'decouvrir', raison: 'rattraper' }

  const ch = cheminDe(P, av)
  const epreuve = ch.find((id) => decouverte(av, id) && etoilesDe(av, id) === 0)
  if (epreuve) return { civId: epreuve, etape: 'epreuve', raison: 'epreuve' }

  const annexe = ouvertes.find((id) => !decouverte(av, id))
  if (annexe) return { civId: annexe, etape: 'decouvrir', raison: 'annexe' }

  const reste = ouvertes.find((id) => etoilesDe(av, id) < 3)
  if (reste) return { civId: reste, etape: 'epreuve', raison: 'etoiles' }
  return null
}

// ── Noms sur la carte du parcours ────────────────────────────────────────────

/** Nom court d'une salle (content/parcours.json → courts), sinon son nom. */
export const nomCourt = (P, id, label) => P.courts[id] ?? label

const MOTS_VIDES = new Set(['de', 'du', 'des', 'd', 'la', 'le', 'les', 'l', 'et', 'en', 'au', 'aux', 'a', 'puis', 'sur', 'son'])
const MOTS_GENERIQUES = new Set(['royaume', 'royaumes', 'empire', 'civilisation', 'culture', 'confederation', 'sultanat', 'khaganat', 'dynastie', 'peuples', 'monarchie', 'republique', 'republiques', 'grande-principaute', 'cites'])
const sansAccent = (m) => m.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()

/**
 * Initiales d'une pastille ou d'une bulle : deux mots → leurs premières lettres (« Qin et Han » → « QH »,
 * « Saint-Empire » → « SE ») ; un seul mot → ses deux premières lettres (« Égypte » → « Ég »).
 * Le texte entre parenthèses, les petits mots et les mots génériques seuls (« Empire », « Royaume »…) sont ignorés.
 */
export function initiales(nom) {
  const texte = String(nom ?? '').replace(/\([^)]*\)/g, ' ')
  const tous = texte.split(/[\s/&,]+/).filter((m) => m && !MOTS_VIDES.has(sansAccent(m)))
  const mots = tous.filter((m) => !MOTS_GENERIQUES.has(sansAccent(m)))
  const choix = (mots.length ? mots : tous).flatMap((m) => m.split(/[-’']+/)).filter((m) => m && !MOTS_VIDES.has(sansAccent(m)))
  if (!choix.length) return ''
  if (choix.length === 1) {
    const [a = '', b = ''] = [...choix[0]]
    return a.toUpperCase() + b.toLowerCase()
  }
  return (choix[0][0] + choix[1][0]).toUpperCase()
}
