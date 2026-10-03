/**
 * color.js — Petits utilitaires de couleur (hexadécimal #rgb / #rrggbb)
 */
function toRgb(hex) {
  const full = hex.length === 4 ? '#' + [...hex.slice(1)].map((c) => c + c).join('') : hex
  const n = parseInt(full.slice(1), 16)
  return [n >> 16, (n >> 8) & 0xff, n & 0xff]
}

/** Assombrit (amount < 0) ou éclaircit (amount > 0) une couleur, en % de 255. */
export function shade(hex, amount) {
  const f = (v) => Math.max(0, Math.min(255, v + Math.round((amount / 100) * 255)))
  const [r, g, b] = toRgb(hex).map(f)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

/** Luminance relative WCAG (0 = noir, 1 = blanc). */
function luminance(hex) {
  const [r, g, b] = toRgb(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Couleur de texte lisible sur ce fond : blanc ou encre foncée. */
export function readableText(hex) {
  const L = luminance(hex)
  const contrastWhite = 1.05 / (L + 0.05)
  const contrastDark = (L + 0.05) / 0.06 // encre ≈ #1c2330
  return contrastWhite >= contrastDark || contrastWhite >= 3 ? '#ffffff' : '#1c2330'
}
