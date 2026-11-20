/**
 * haptics.js — Retours haptiques (vibrations)
 * ============================================
 * Utilise l'API Vibration du navigateur. Fonctionne sur Android (Chrome,
 * Firefox, Samsung Internet). Safari iOS n'expose PAS cette API : les appels
 * sont alors silencieusement ignorés — prévoir toujours un retour visuel.
 * Chrome sur Android ne vibre pas quand le téléphone est en mode silencieux
 * (impossible à contourner pour un site ou une TWA : c'est expliqué dans les Réglages).
 *
 * Sprint 26 : motifs allongés (chaque impulsion ≥ 30 ms, les plus courtes se sentaient mal)
 * et interrupteur dédié « Vibrations » (clé histomap_vibrations), indépendant de « réduire
 * les animations » : on peut vouloir moins de mouvement à l'écran et garder les vibrations.
 *
 * Usage :
 *   import { haptic } from '../lib/haptics'
 *   haptic('success')
 */
import { jouerSon } from './sons'
import { load, save } from './storage'

// Chaque moment qui vibre a aussi son son (lib/sons.js) ; « tap » (navigation) reste silencieux.
const SON = { select: 'carte', success: 'juste', error: 'faux', complete: 'fin', recompense: 'etoiles', niveau: 'niveau', titre: 'titre' }

// [vibration, pause, vibration, …] en millisecondes ; chaque vibration dure au moins 30 ms
export const PATTERNS = {
  tap: 30,
  select: 35,
  success: [45, 70, 60],
  error: [80, 70, 80],
  complete: [50, 80, 50, 80, 120],
  recompense: [60, 80, 60, 80, 180], // épreuve réussie (étoiles), défi gagné, première récompense
  niveau: [70, 90, 70, 90, 70, 90, 240], // nouveau rang
  titre: [40, 50, 40, 50, 40, 50, 140], // titre obtenu, fil rouge terminé
}

const CLE = 'histomap_vibrations'
let actives = load(CLE, true)

export const vibrationsActives = () => actives
export function activerVibrations(oui) {
  actives = Boolean(oui)
  save(CLE, actives)
}

export function canVibrate() {
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
}

function vibrer(motif) {
  if (!canVibrate()) return false
  // Sans geste préalable de l'utilisateur (page ouverte par un lien), le navigateur refuse et le signale
  if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return false
  try {
    return navigator.vibrate(motif)
  } catch {
    return false /* certains navigateurs refusent sans geste utilisateur */
  }
}

export function haptic(kind = 'tap') {
  if (SON[kind]) jouerSon(SON[kind])
  if (actives) vibrer(PATTERNS[kind] ?? PATTERNS.tap)
}

/**
 * Bouton « Tester » des Réglages : vibre (motif d'une bonne réponse puis des étoiles), même si
 * l'interrupteur est coupé. Renvoie false si l'appareil ou le navigateur ne sait pas vibrer.
 * Attention : true ne garantit pas qu'on ait senti quelque chose (mode silencieux d'Android).
 */
export function testerVibrations() {
  return vibrer([...PATTERNS.success, 250, ...PATTERNS.recompense])
}
