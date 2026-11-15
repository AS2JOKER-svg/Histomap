/**
 * haptics.js — Retours haptiques (vibrations)
 * ============================================
 * Utilise l'API Vibration du navigateur. Fonctionne sur Android (Chrome,
 * Firefox, Samsung Internet). Safari iOS n'expose PAS cette API : les appels
 * sont alors silencieusement ignorés — prévoir toujours un retour visuel.
 *
 * Usage (quiz, sprint 6) :
 *   import { haptic } from '../lib/haptics'
 *   haptic('success')
 */
import { jouerSon } from './sons'

// Chaque moment qui vibre a aussi son son (lib/sons.js) ; « tap » (navigation) reste silencieux.
const SON = { select: 'carte', success: 'juste', error: 'faux', complete: 'fin', recompense: 'medaille', niveau: 'niveau', coffre: 'coffre' }

const PATTERNS = {
  tap: 8,
  select: 12,
  success: [14, 60, 22],
  error: [40, 50, 40, 50, 40],
  complete: [20, 80, 20, 80, 60],
  recompense: [30, 60, 30, 60, 120], // médaille, étoiles
  niveau: [40, 70, 40, 70, 40, 70, 160], // passage de niveau
  coffre: [10, 30, 10, 30, 10, 30, 90], // ouverture d'un coffre ou d'un titre
}

export function canVibrate() {
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
}

export function haptic(kind = 'tap') {
  if (SON[kind]) jouerSon(SON[kind])
  if (!canVibrate()) return
  if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) return
  // Sans geste préalable de l'utilisateur (page ouverte par un lien), le navigateur refuse et le signale
  if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return
  try {
    navigator.vibrate(PATTERNS[kind] ?? PATTERNS.tap)
  } catch {
    /* certains navigateurs refusent sans geste utilisateur */
  }
}
