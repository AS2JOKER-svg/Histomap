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
  return contrastWhite >= 4.5 || contrastWhite >= contrastDark ? '#ffffff' : '#1c2330'
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * Variante d'une couleur de civilisation utilisable comme couleur de TEXTE :
 * assombrie (thème clair) ou éclaircie (thème sombre) jusqu'à un contraste
 * de 4,5:1 (WCAG AA) sur le fond des cartes.
 */
export function readableOn(hex, background, min = 4.5) {
  const lighten = luminance(background) < 0.2
  let c = hex
  for (let i = 0; i < 40 && contrast(c, background) < min; i++) c = shade(c, lighten ? 3 : -3)
  return c
}

const SURFACE_LIGHT = '#ffffff'
const SURFACE_DARK = '#1d2330' // --c-surface-2 sombre (le plus clair des fonds sombres)

/**
 * Style à poser sur un élément avec la classe `civ-text` : la couleur de la
 * civilisation, lisible dans les deux thèmes (voir index.css).
 */
export function civTextStyle(hex) {
  if (!hex) return undefined
  return { '--civ-text-light': readableOn(hex, SURFACE_LIGHT, 5) /* marge : fonds teintés */, '--civ-text-dark': readableOn(hex, SURFACE_DARK) }
}

/** Fond pour du texte blanc : la couleur, assombrie si besoin (contraste ≥ 4,5:1). */
export const solidBg = (hex) => (hex ? readableOn(hex, '#ffffff') : hex)
