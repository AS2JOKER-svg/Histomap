/**
 * search.js — Recherche globale (100 % hors ligne)
 * ================================================
 * L'index (src/data/search.json, généré au build) est chargé à la première
 * recherche. Insensible aux majuscules et aux accents : « cesar » trouve « César ».
 */
let index = null

export function loadSearchIndex() {
  index ??= import('../data/search.json').then((m) => m.default)
  return index
}

export const normalize = (t) =>
  String(t ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()

export const SEARCH_TYPES = [
  { id: 'civ', label: 'Civilisations' },
  { id: 'personne', label: 'Personnes' },
  { id: 'evenement', label: 'Événements' },
  { id: 'guerre', label: 'Guerres' },
  { id: 'decouverte', label: 'Découvertes' },
]

const TYPE_RANK = { civ: 0, personne: 1, guerre: 2, evenement: 3, decouverte: 4 }

/**
 * Résultats triés par pertinence : nom qui commence par la recherche, puis nom
 * qui la contient, puis texte associé. Tous les mots doivent être trouvés.
 */
export function search(items, query, limit = 200) {
  const q = normalize(query)
  if (q.length < 2) return []
  const words = q.split(/\s+/)
  const out = []
  for (const it of items) {
    if (!words.every((w) => it.q.includes(w))) continue
    const name = normalize(it.n)
    const match = name === q ? 0 : name.startsWith(q) ? 1 : name.split(/[\s'’-]+/).some((w) => w.startsWith(words[0])) ? 2 : name.includes(q) ? 3 : 4
    // à pertinence égale : civilisations, puis personnes, guerres, événements, découvertes ; fiches liées avant les simples mentions
    const score = match * 10 + TYPE_RANK[it.t] * 2 + (it.t === 'civ' || it.id ? 0 : 1)
    out.push({ ...it, score })
  }
  // puis le nom le plus court (« Jules César » avant « Assassinat de César »)
  return out.sort((a, b) => a.score - b.score || a.n.length - b.n.length || a.n.localeCompare(b.n, 'fr')).slice(0, limit)
}
