/**
 * links.js — Liens vers d'autres fiches à l'intérieur d'un texte
 * ===============================================================
 * Syntaxe (dans n'importe quel texte de content/) :
 *   [[jules-cesar]]          → lien affiché avec le nom de la fiche (« Jules César »)
 *   [[jules-cesar|César]]    → lien affiché avec un autre texte
 * L'id désigne une civilisation (content/civs/) ou une fiche liée
 * (content/people/, content/events/, content/discoveries/).
 *
 * Au build, scripts/build-content.mjs complète les liens sans texte
 * ([[id]] → [[id|Nom]]) : le site n'a jamais besoin de chercher un nom.
 * Fichier sans dépendance : utilisé par le site ET par les scripts Node.
 */

const LINK = /\[\[([^\]|]*)(?:\|([^\]]*))?\]\]/g
export const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Découpe un texte en morceaux : { text } ou { id, text } (text absent si [[id]] sans libellé). */
export function parseLinks(text) {
  const parts = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index) })
    parts.push({ id: m[1].trim(), text: m[2]?.trim() || undefined })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push({ text: text.slice(last) })
  return parts
}

/** Texte brut, sans la syntaxe des liens (quiz, titres, lecteurs d'écran…). */
export function stripLinks(text) {
  if (typeof text !== 'string' || !text.includes('[[')) return text
  return parseLinks(text).map((p) => p.text ?? p.id).join('')
}

/** Copie profonde d'une valeur (objet, tableau, texte) où tous les textes sont sans liens. */
export function stripLinksDeep(value) {
  if (typeof value === 'string') return stripLinks(value)
  if (Array.isArray(value)) return value.map(stripLinksDeep)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, stripLinksDeep(v)]))
  return value
}

/** Problèmes de syntaxe d'un texte : crochets non fermés, id vide ou mal formé. */
export function linkSyntaxErrors(text) {
  const errors = []
  const rest = text.replace(LINK, '')
  if (rest.includes('[[') || rest.includes(']]')) errors.push('crochets [[ ]] mal fermés')
  for (const p of parseLinks(text)) {
    if (p.id === undefined) continue
    if (!ID.test(p.id)) errors.push(`id de lien invalide « ${p.id} » (minuscules, chiffres et tirets)`)
  }
  return errors
}

/** Remplace chaque [[id]] sans libellé par [[id|nom]] (nom donné par labelOf(id)). */
export function resolveLinks(text, labelOf) {
  if (!text.includes('[[')) return text
  return text.replace(LINK, (whole, id, label) => (label?.trim() ? whole : `[[${id.trim()}|${labelOf(id.trim()) ?? id.trim()}]]`))
}
