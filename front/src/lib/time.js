/**
 * time.js — Échelles temporelles + formatage des dates
 * =====================================================
 *   createEpochScale(start, end, width) → { x(year), invert(px), ticks(px), isLog }
 *   clampPeriod(civ, epochStart, end)   → { start, end, overflowBefore, overflowAfter }
 *   formatYear(year)                    → "3 000 av. J.-C." | "476"
 *   formatTick(year)                    → version courte pour les axes
 *   formatDuration(start, end)          → "505 ans" | "3,5 millénaires" | "3 millions d'années"
 */

const fr = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 })

// Au-delà de cette durée, une échelle linéaire écrase tout dans les derniers
// millénaires (ex. Préhistoire : 3 millions d'années, mais Göbekli Tepe ne dure
// que 2 000 ans). On passe alors en échelle logarithmique.
const LOG_THRESHOLD = 20000
// Décalage du log (en années) : évite que les derniers siècles s'étirent à l'infini.
const LOG_OFFSET = 1000

/**
 * Échelle d'une époque, de `start` à `end`, projetée sur [0, width] pixels.
 * - Linéaire pour l'Histoire.
 * - Logarithmique « avant la fin de l'époque » pour les très longues périodes :
 *   chaque ordre de grandeur (1 Ma, 100 000 ans, 10 000 ans…) a une place lisible.
 */
export function createEpochScale(start, end, width) {
  const span = end - start || 1
  const clamp = (y) => Math.max(start, Math.min(end, y))

  if (span <= LOG_THRESHOLD) {
    const k = width / span
    return {
      isLog: false,
      x: (y) => (clamp(y) - start) * k,
      invert: (px) => start + px / k,
      ticks: (minSpacing = 110) => linearTicks(start, end, (minSpacing / width) * span),
    }
  }

  const L0 = Math.log(span + LOG_OFFSET)
  const L1 = Math.log(LOG_OFFSET)
  const x = (y) => (width * (L0 - Math.log(end - clamp(y) + LOG_OFFSET))) / (L0 - L1)
  return {
    isLog: true,
    x,
    invert: (px) => end + LOG_OFFSET - Math.exp(L0 - (px / width) * (L0 - L1)),
    ticks: (minSpacing = 110) => {
      const candidates = [
        -5e6, -3e6, -2e6, -1e6, -5e5, -3e5, -2e5, -1e5, -5e4, -3e4, -2e4,
        -1e4, -8000, -6000, -5000, -4000, -3000, -2000, -1000, 0,
      ].filter((t) => t >= start && t <= end)
      const out = []
      for (const t of candidates) {
        if (!out.length || x(t) - x(out[out.length - 1]) >= minSpacing) out.push(t)
      }
      return out
    },
  }
}

function linearTicks(start, end, rawStep) {
  const step = niceStep(rawStep)
  const out = []
  for (let t = Math.ceil(start / step) * step; t <= end; t += step) out.push(t)
  return out
}

function niceStep(raw) {
  const pow = Math.pow(10, Math.floor(Math.log10(Math.abs(raw) || 1)))
  const n = raw / pow
  const nice = n > 5 ? 10 : n > 2 ? 5 : n > 1 ? 2 : 1
  return Math.max(nice * pow, 1)
}

// ─── Bornage d'une civilisation dans une époque ───────────────────────────────
export function clampPeriod(civ, epochStart, epochEnd) {
  const s = typeof civ.start === 'number' ? civ.start : epochStart
  const e = typeof civ.end === 'number' ? civ.end : epochEnd
  return {
    start: Math.max(s, epochStart),
    end: Math.min(e, epochEnd),
    overflowBefore: s < epochStart,
    overflowAfter: e > epochEnd,
  }
}

// ─── Formatage ────────────────────────────────────────────────────────────────
export function formatYear(year) {
  if (year === null || year === undefined) return ''
  const y = Math.round(year)
  if (y < 0) return new Intl.NumberFormat('fr-FR').format(-y) + ' av. J.-C.'
  return String(y)
}

/** Libellé court pour les axes : « 1,5 million av. J.-C. » plutôt que « 1 500 000 av. J.-C. ». */
export function formatTick(year) {
  const abs = Math.abs(year)
  if (year < 0 && abs >= 1e6) return `${fr.format(abs / 1e6)} million${abs >= 2e6 ? 's' : ''} av. J.-C.`
  return formatYear(year)
}

export function formatDuration(start, end) {
  const years = Math.abs(end - start)
  if (years >= 1e6) return `${fr.format(years / 1e6)} million${years >= 2e6 ? 's' : ''} d'années`
  if (years >= 10000) return `${new Intl.NumberFormat('fr-FR').format(years)} ans`
  if (years >= 1000) return `${fr.format(years / 1000)} millénaire${years >= 2000 ? 's' : ''}`
  return `${years.toLocaleString('fr-FR')} an${years > 1 ? 's' : ''}`
}
