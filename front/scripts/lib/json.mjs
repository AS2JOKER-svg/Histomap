// Écriture JSON lisible pour les fichiers de contenu (content/) :
// les listes de valeurs simples et les petits objets tiennent sur une ligne
// (ex. un dirigeant, des coordonnées), le reste est indenté normalement.
const MAX = 110 // largeur au-delà de laquelle on repasse en multi-ligne

export function stringify(value, indent = '') {
  const inline = JSON.stringify(value)
  if (value === null || typeof value !== 'object') return inline
  const simple = Array.isArray(value)
    ? value.every((v) => v === null || typeof v !== 'object' || isFlat(v))
    : isFlat(value)
  if (simple && indent.length + inline.length <= MAX) return spaced(value)

  const inner = indent + '  '
  if (Array.isArray(value)) {
    if (!value.length) return '[]'
    return `[\n${value.map((v) => inner + stringify(v, inner)).join(',\n')}\n${indent}]`
  }
  const entries = Object.entries(value).filter(([, v]) => v !== undefined)
  if (!entries.length) return '{}'
  return `{\n${entries.map(([k, v]) => `${inner}${JSON.stringify(k)}: ${stringify(v, inner)}`).join(',\n')}\n${indent}}`
}

/** Objet ou tableau dont toutes les valeurs sont simples (pas d'objet imbriqué). */
function isFlat(v) {
  return Object.values(v).every((x) => x === null || typeof x !== 'object')
}

/** Version sur une ligne, aérée : { "a": 1, "b": [1, 2] } */
function spaced(value) {
  if (Array.isArray(value)) return `[${value.map(spaced).join(', ')}]`
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value).filter(([, v]) => v !== undefined)
    return entries.length ? `{ ${entries.map(([k, v]) => `${JSON.stringify(k)}: ${spaced(v)}`).join(', ')} }` : '{}'
  }
  return JSON.stringify(value)
}

export const toFile = (value) => stringify(value) + '\n'
