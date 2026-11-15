/**
 * xp.js — XP, niveaux, rangs et récompenses (V3)
 * ===============================================
 * Fonctions pures (aussi utilisées par les tests Node). Barème : ARBORESCENCE.md § 5,
 * validé le 14/11/2026 ; les chiffres seront réglés au sprint 24.
 *
 *   gainReponse(serie, { rejeu })   XP d'une bonne réponse d'épreuve (combo compris)
 *   seuilNiveau(n)                  XP totale pour atteindre le niveau n (100 × n pour passer de n à n+1)
 *   niveau(xpTotale)                → { niveau, rang, dansNiveau, pourSuivant, max }
 *   recompensesNiveau(n)            récompenses débloquées en atteignant le niveau n
 *   prochaineRecompense(n)          prochaine récompense « nommée » après le niveau n
 *   emplacementsJokers(n)           jokers que l'on peut garder en réserve au niveau n
 *   petitCoffre(graine)             contenu reproductible d'un petit coffre
 */
import { rng } from './random.js'

export const BAREME = {
  decouvrir: 40,
  approfondir: 60,
  rejouerEtape: 10, // Découvrir ou Approfondir refaits
  eclair: 5, // question éclair juste (1re fois)
  reponse: 10, // question d'épreuve juste, sans combo
  reponseEchec: 2, // épreuve ratée (< 15/20) : 2 XP par bonne réponse, sans combo
  pasCombo: 5, // + 5 par réponse juste d'affilée…
  comboMax: 5, // … jusqu'à la 5e (30 XP)
  or: 50, // 1re médaille d'or d'une salle
  etoile: 25, // par nouvelle étoile d'épreuve
  bonusJour: 20, // 1re étape terminée de la journée
  ficheLue: 5, // fiche lue pour la 1re fois dans l'Atlas
  express: 5, // bonne réponse au quiz express d'une fiche liée (1re fois)
  aRevoir: 20, // séance « À revoir » (une par jour)
  onboarding: 50, // premier lancement terminé (une seule fois)
  filRouge: 150, // coffre de fil rouge
  monde: 300, // grand coffre de monde
}

export const NIVEAU_MAX = 50

/** XP d'une bonne réponse d'épreuve ; `serie` = nombre de bonnes réponses d'affilée, celle-ci comprise. */
export function gainReponse(serie, { rejeu = false } = {}) {
  const palier = Math.min(Math.max(serie, 1), BAREME.comboMax)
  const xp = BAREME.reponse + BAREME.pasCombo * (palier - 1)
  return rejeu ? Math.floor(xp / 2) : xp
}

/** XP totale nécessaire pour atteindre le niveau n (niveau 1 = 0 XP, niveau 2 = 100, niveau 3 = 300…). */
export const seuilNiveau = (n) => 50 * n * (n - 1)

export const RANGS = [
  [1, 'Curieux'],
  [5, 'Apprenti'],
  [10, 'Explorateur'],
  [15, 'Érudit'],
  [20, 'Chroniqueur'],
  [25, 'Historien'],
  [30, 'Grand historien'],
  [40, 'Sage'],
  [50, 'Légende de l’Histoire'],
]
export const rang = (n) => RANGS.filter(([min]) => n >= min).at(-1)[1]

export function niveau(xpTotale) {
  const xp = Math.max(0, Math.floor(xpTotale || 0))
  let n = 1
  while (n < NIVEAU_MAX && xp >= seuilNiveau(n + 1)) n++
  const max = n === NIVEAU_MAX
  return {
    niveau: n,
    rang: rang(n),
    dansNiveau: xp - seuilNiveau(n),
    pourSuivant: max ? null : seuilNiveau(n + 1) - seuilNiveau(n),
    max,
  }
}

// ── Récompenses de niveau (ARBORESCENCE.md § 5.4) ────────────────────────────
// type : rang, joker, emplacement (de joker), sceau, cadre, effet (de célébration), theme, partage
// id préfixé par le type (« sceau:silex », « theme:silex »…) : pas de collision entre un sceau et un thème
const R = (type, id, nom) => ({ type, id: `${type}:${id}`, nom })
const RANG = (n) => R('rang', `rang-${n}`, rang(n))
export const RECOMPENSES = {
  2: [R('joker', 'joker', '1 joker')],
  3: [R('sceau', 'silex', 'Sceau « Silex »')],
  4: [R('effet', 'poussiere-or', 'Effet « Poussière d’or »')],
  5: [RANG(5), R('cadre', 'bronze', 'Cadre Bronze')],
  6: [R('sceau', 'amphore', 'Sceau « Amphore »')],
  7: [R('joker', 'joker', '1 joker')],
  8: [R('effet', 'petales', 'Effet « Pétales »')],
  9: [R('sceau', 'lauriers', 'Sceau « Lauriers »')],
  10: [RANG(10), R('cadre', 'argent', 'Cadre Argent'), R('theme', 'indigo', 'Thème « Indigo »')],
  11: [R('joker', 'joker', '1 joker')],
  12: [R('effet', 'feux-artifice', 'Effet « Feux d’artifice »')],
  13: [R('sceau', 'rose-des-vents', 'Sceau « Rose des vents »')],
  14: [R('joker', 'joker', '1 joker')],
  15: [RANG(15), R('emplacement', 'joker-3', '3e emplacement de joker')],
  16: [R('sceau', 'plume', 'Sceau « Plume et encrier »')],
  17: [R('effet', 'etincelles', 'Effet « Étincelles »')],
  18: [R('joker', 'joker', '1 joker')],
  19: [R('sceau', 'astrolabe', 'Sceau « Astrolabe »')],
  20: [RANG(20), R('cadre', 'or', 'Cadre Or'), R('partage', 'edition-doree', 'Image de résultat « édition dorée »')],
  25: [RANG(25), R('theme', 'pourpre', 'Thème « Pourpre impérial »')],
  30: [RANG(30), R('effet', 'pluie-etoiles', 'Effet « Pluie d’étoiles »'), R('cadre', 'lapis', 'Cadre Lapis')],
  35: [R('sceau', 'globe', 'Sceau « Globe »'), R('emplacement', 'joker-4', '4e emplacement de joker')],
  40: [RANG(40), R('theme', 'or-ebene', 'Thème « Or et ébène »')],
  45: [R('effet', 'aurore', 'Effet « Aurore »'), R('cadre', 'ebene', 'Cadre Ébène')],
  50: [RANG(50), R('cadre', 'anime', 'Cadre animé'), R('sceau', 'couronne', 'Sceau « Couronne de lauriers d’or »')],
}

/** Récompenses obtenues en atteignant le niveau n (après 20, un petit coffre aux niveaux sans récompense). */
export function recompensesNiveau(n) {
  if (n < 2 || n > NIVEAU_MAX) return []
  return RECOMPENSES[n] ?? (n > 20 ? [R('coffre', `coffre-niveau-${n}`, 'Petit coffre')] : [])
}

/** Prochaine récompense nommée (hors petits coffres) après le niveau n → { niveau, recompenses } | null. */
export function prochaineRecompense(n) {
  for (let k = n + 1; k <= NIVEAU_MAX; k++) if (RECOMPENSES[k]) return { niveau: k, recompenses: RECOMPENSES[k] }
  return null
}

/** Toutes les récompenses obtenues jusqu'au niveau n (pour le Profil). */
export function recompensesJusqua(n) {
  const out = []
  for (let k = 2; k <= Math.min(n, NIVEAU_MAX); k++) out.push(...recompensesNiveau(k))
  return out
}

/** Jokers gardés en réserve au maximum : 2, puis 3 au niveau 15, 4 au niveau 35. */
export const emplacementsJokers = (n) => 2 + Number(n >= 15) + Number(n >= 35)

// ── Série ─────────────────────────────────────────────────────────────────────
export const PALIERS_SERIE = [3, 7, 14, 30, 60, 100, 365]
/** Un joker gagné tous les 7 jours de série. */
export const jokerDeSerie = (jours) => jours > 0 && jours % 7 === 0

// ── Coffres (contenu reproductible : même graine, même contenu) ─────────────
/** Petit coffre : 25, 50 ou 100 XP ; une fois sur cinq environ, un joker en plus. */
export function petitCoffre(graine) {
  const r = rng(`coffre:${graine}`)
  const tirage = r()
  const xp = tirage < 0.5 ? 25 : tirage < 0.85 ? 50 : 100
  return { xp, joker: r() < 0.2 }
}
