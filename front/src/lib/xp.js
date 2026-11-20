/**
 * xp.js — XP, niveaux, rangs et jokers (V3.1, sprint 29)
 * =======================================================
 * Fonctions pures (aussi utilisées par les tests Node). Barème validé le 16/11/2026 (point 12 des
 * maquettes V3.1) : sans faute, une salle du tronc rapporte ≈ 490 XP (Découvrir 40 + 3 éclairs × 5,
 * Épreuve de 12 = 310 avec le combo plafonné à ×5, 1re réussite 50, étoiles 3 × 25) ; Approfondir,
 * en bonus, 60 + 5 éclairs × 5 ; une annexe ≈ 295 XP, soit 60 % (séance 30, mini-épreuve de 8 = 190,
 * réussite 30, étoiles 3 × 15). Plus de coffres ni de cosmétiques : les niveaux donnent des rangs
 * (écran de félicitation) et des jokers.
 * Courbe des niveaux réglée par la simulation d'un joueur (npm run simulation) : 70 × n XP pour passer
 * du niveau n au suivant ; le niveau 50 (85 750 XP) demande à peu près tout le parcours en ★★★.
 *
 *   gainReponse(serie, { rejeu })   XP d'une bonne réponse d'épreuve (combo compris)
 *   seuilNiveau(n)                  XP totale pour atteindre le niveau n (70 × n pour passer de n à n+1)
 *   niveau(xpTotale)                → { niveau, rang, dansNiveau, pourSuivant, max }
 *   recompensesNiveau(n)            récompenses du niveau n (rang, joker, place de joker)
 *   prochaineRecompense(n)          prochaine récompense après le niveau n
 *   prochainRang(n)                 prochain rang après le niveau n (Profil)
 *   emplacementsJokers(n)           jokers que l'on peut garder en réserve au niveau n
 */

export const BAREME = {
  decouvrir: 40, // Découvrir, 1re fois (salle du tronc)
  approfondir: 60, // Approfondir, 1re fois (bonus)
  rejouerEtape: 10, // Découvrir ou Approfondir refaits
  eclair: 5, // question éclair juste (1re fois)
  annexe: 30, // séance d'annexe terminée, 1re fois
  reponse: 10, // question d'épreuve juste, sans combo
  reponseEchec: 2, // épreuve ratée (aucune étoile) : 2 XP par bonne réponse, sans combo
  pasCombo: 5, // + 5 par réponse juste d'affilée…
  comboMax: 5, // … jusqu'à la 5e (30 XP) ; le compteur continue à l'écran, l'XP non
  reussite: 50, // 1re épreuve réussie (★) d'une salle du tronc
  reussiteAnnexe: 30, // 1re mini-épreuve réussie d'une annexe
  etoile: 25, // par nouvelle étoile (tronc)
  etoileAnnexe: 15, // par nouvelle étoile (annexe)
  bonusJour: 20, // 1re étape terminée de la journée
  palierSerie: 50, // palier de série atteint pour la 1re fois (3, 7, 14… jours)
  ficheLue: 5, // fiche lue pour la 1re fois dans l'Atlas
  express: 5, // bonne réponse au quiz express d'une fiche liée (1re fois)
  aRevoir: 20, // séance « À revoir » (une par jour)
  onboarding: 50, // premier lancement terminé (une seule fois)
  filRouge: 150, // titre d'un fil rouge
  monde: 300, // titre d'un monde
}

export const NIVEAU_MAX = 50

/** XP d'une bonne réponse d'épreuve ; `serie` = nombre de bonnes réponses d'affilée, celle-ci comprise. */
export function gainReponse(serie, { rejeu = false } = {}) {
  const palier = Math.min(Math.max(serie, 1), BAREME.comboMax)
  const xp = BAREME.reponse + BAREME.pasCombo * (palier - 1)
  return rejeu ? Math.floor(xp / 2) : xp
}

/** XP totale nécessaire pour atteindre le niveau n (niveau 1 = 0 XP, niveau 2 = 70, niveau 3 = 210…). */
export const seuilNiveau = (n) => 35 * n * (n - 1)

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
/** Prochain rang après le niveau n → { niveau, rang } | null (dernier rang atteint). */
export function prochainRang(n) {
  const r = RANGS.find(([min]) => min > n)
  return r ? { niveau: r[0], rang: r[1] } : null
}

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

// ── Récompenses de niveau : rangs, jokers, places de joker ──────────────────────
const R = (type, id, nom) => ({ type, id: `${type}:${id}`, nom })
const RANG = (n) => R('rang', `rang-${n}`, rang(n))
const JOKER = R('joker', 'joker', '1 joker')
export const RECOMPENSES = {
  2: [JOKER],
  5: [RANG(5)],
  7: [JOKER],
  10: [RANG(10)],
  11: [JOKER],
  14: [JOKER],
  15: [RANG(15), R('emplacement', 'joker-3', '3e place de joker')],
  18: [JOKER],
  20: [RANG(20)],
  25: [RANG(25)],
  30: [RANG(30)],
  35: [R('emplacement', 'joker-4', '4e place de joker')],
  40: [RANG(40)],
  50: [RANG(50)],
}

/** Récompenses obtenues en atteignant le niveau n. */
export const recompensesNiveau = (n) => (n >= 2 && n <= NIVEAU_MAX ? RECOMPENSES[n] ?? [] : [])

/** Prochaine récompense après le niveau n → { niveau, recompenses } | null. */
export function prochaineRecompense(n) {
  for (let k = n + 1; k <= NIVEAU_MAX; k++) if (RECOMPENSES[k]) return { niveau: k, recompenses: RECOMPENSES[k] }
  return null
}

/** Jokers gardés en réserve au maximum : 2, puis 3 au niveau 15, 4 au niveau 35. */
export const emplacementsJokers = (n) => 2 + Number(n >= 15) + Number(n >= 35)

// ── Série ─────────────────────────────────────────────────────────────────────
export const PALIERS_SERIE = [3, 7, 14, 30, 60, 100, 365]
/** Un joker gagné tous les 7 jours de série. */
export const jokerDeSerie = (jours) => jours > 0 && jours % 7 === 0
