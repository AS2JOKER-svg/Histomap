/**
 * timeScale.js — Échelles temporelles + formatage
 * ================================================
 * API claire et cohérente utilisée par toutes les vues.
 *
 *   createTimeScale(min, max, width)   → f(year) => x  (échelle globale log/linéaire)
 *   createLinearScale(min, max, width) → f(year) => x  (échelle linéaire simple)
 *   formatYear(year)                   → "3 000 av. J.-C." | "476"
 *   clampPeriod(civ, epochStart, end)  → { start, end, overflowBefore, overflowAfter }
 */

// ─── Échelle GLOBALE (vue des époques) ────────────────────────────────────────
// Log-compressée pour la préhistoire, linéaire pour l'histoire.
// Retourne une position x DÉJÀ dans [0, width] (pas de padding à ajouter).
export function createTimeScale(minYear, maxYear, width) {
  const HISTORY_START = -800
  const HISTORY_END   = maxYear
  const PREHIST_DUR   = HISTORY_START - minYear
  const HISTORY_DUR   = HISTORY_END - HISTORY_START
  const PREHIST_RATIO = 0.32

  return function yearToX(year) {
    const y = Math.max(minYear, Math.min(maxYear, year))
    if (y < HISTORY_START) {
      const shifted = y - minYear + 1
      const ratio = Math.log10(shifted) / Math.log10(PREHIST_DUR + 1)
      return ratio * PREHIST_RATIO * width
    }
    const ratio = (y - HISTORY_START) / HISTORY_DUR
    return PREHIST_RATIO * width + ratio * (1 - PREHIST_RATIO) * width
  }
}

// ─── Échelle LINÉAIRE (vue d'une époque) ──────────────────────────────────────
export function createLinearScale(minYear, maxYear, width) {
  const span = maxYear - minYear || 1
  return function yearToX(year) {
    const ratio = (year - minYear) / span
    return ratio * width
  }
}

// ─── Bornage d'une civilisation dans une époque ───────────────────────────────
export function clampPeriod(civ, epochStart, epochEnd) {
  const s = typeof civ.start === 'number' ? civ.start : epochStart
  const e = typeof civ.end === 'number' ? civ.end : epochEnd
  return {
    start: Math.max(s, epochStart),
    end:   Math.min(e, epochEnd),
    overflowBefore: s < epochStart,
    overflowAfter:  e > epochEnd,
  }
}

// ─── Formatage ────────────────────────────────────────────────────────────────
export function formatYear(year) {
  if (year === null || year === undefined) return ''
  if (year < 0) return new Intl.NumberFormat('fr-FR').format(-year) + ' av. J.-C.'
  return String(year)
}

export function formatDuration(start, end) {
  const years = Math.abs(end - start)
  if (years >= 10000) return Math.round(years / 1000) + ' 000 ans'
  if (years >= 1000)  return (years / 1000).toFixed(1).replace('.0', '') + ' millénaires'
  return years.toLocaleString('fr-FR') + ' ans'
}
