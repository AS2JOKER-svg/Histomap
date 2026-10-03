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
const PATTERNS = {
  tap: 8,
  select: 12,
  success: [14, 60, 22],
  error: [40, 50, 40, 50, 40],
  complete: [20, 80, 20, 80, 60],
}

export function canVibrate() {
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
}

export function haptic(kind = 'tap') {
  if (!canVibrate()) return
  if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) return
  try {
    navigator.vibrate(PATTERNS[kind] ?? PATTERNS.tap)
  } catch {
    /* certains navigateurs refusent sans geste utilisateur */
  }
}
