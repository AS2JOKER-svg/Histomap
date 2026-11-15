/**
 * cosmetiques.js — Thèmes, sceaux, cadres et effets de célébration (V3, sprint 22)
 * =================================================================================
 * Tous se gagnent dans l'Aventure (lib/xp.js : récompenses de niveau ; lib/progression.js :
 * thèmes des mondes terminés) et se choisissent dans le Profil. Identifiants des récompenses :
 * « theme:<id> », « sceau:<id> », « cadre:<id> », « effet:<id> ».
 *
 * Thèmes : seul l'accent change (le papier, l'encre et l'or restent ceux du « Musée vivant ») ;
 * les couleurs sont dans src/index.css (:root[data-palette=…]), contrastes AA vérifiés :
 * accent ≥ 4,5:1 sur le papier (clair) et sur la surface (sombre), texte blanc sur --c-accent-btn.
 */

export const THEMES = [
  { id: 'musee', nom: 'Musée', apercu: '#8a3a1e', defaut: true },
  { id: 'silex', nom: 'Silex', apercu: '#4a5560', origine: 'Préhistoire terminée en or' },
  { id: 'papyrus', nom: 'Papyrus', apercu: '#2f6b5e', origine: 'Antiquité terminée en or' },
  { id: 'enluminure', nom: 'Enluminure', apercu: '#9b1c31', origine: 'Moyen Âge terminé en or' },
  { id: 'lapis', nom: 'Lapis', apercu: '#1f4e8c', origine: 'Époque moderne terminée en or' },
  { id: 'neon', nom: 'Néon', apercu: '#7a2e8a', origine: 'Époque contemporaine terminée en or' },
  { id: 'indigo', nom: 'Indigo', apercu: '#3b3f8f', origine: 'niveau 10' },
  { id: 'pourpre', nom: 'Pourpre impérial', apercu: '#6b1f4f', origine: 'niveau 25' },
  { id: 'or-ebene', nom: 'Or et ébène', apercu: '#7a5512', origine: 'niveau 40' },
]

/** Sceaux : un pictogramme dans un cachet (viewBox 0 0 24 24, trait). */
export const SCEAUX = [
  { id: 'aucun', nom: 'Monogramme', defaut: true },
  { id: 'silex', nom: 'Silex', origine: 'niveau 3', d: 'M7 19 12 4l5 15-5-3Z M12 16V9' },
  { id: 'amphore', nom: 'Amphore', origine: 'niveau 6', d: 'M9 3h6M10 3v3c-3 1-4 4-4 7s2 6 6 8c4-2 6-5 6-8s-1-6-4-7V3 M6 9H4M18 9h2' },
  { id: 'lauriers', nom: 'Lauriers', origine: 'niveau 9', d: 'M7 20c-3-4-3-10 1-15 M17 20c3-4 3-10-1-15 M5 14l3-1M5 10l3 0M7 6l2 1 M19 14l-3-1M19 10l-3 0M17 6l-2 1' },
  { id: 'rose-des-vents', nom: 'Rose des vents', origine: 'niveau 13', d: 'M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2Z' },
  { id: 'plume', nom: 'Plume et encrier', origine: 'niveau 16', d: 'M20 4c-6 0-11 5-12 12l-2 4 M8 16c4 0 8-3 9-8 M4 20h7' },
  { id: 'astrolabe', nom: 'Astrolabe', origine: 'niveau 19', d: 'M12 3a8 8 0 1 0 0 16a8 8 0 1 0 0-16 M12 7a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M4 11h16M12 3v16' },
  { id: 'globe', nom: 'Globe', origine: 'niveau 35', d: 'M12 3a8 8 0 1 0 0 16a8 8 0 1 0 0-16 M4 11h16 M12 3c-3 3-3 13 0 16 M12 3c3 3 3 13 0 16 M9 22h6M12 19v3' },
  { id: 'couronne', nom: 'Couronne de lauriers d’or', origine: 'niveau 50', d: 'M6 20c-3-4-3-10 1-15 M18 20c3-4 3-10-1-15 M8 11l2-3 2 3 2-3 2 3v3H8Z' },
]

/** Cadres de la carte de profil et de l'image partagée. */
export const CADRES = [
  { id: 'aucun', nom: 'Sans cadre', couleur: null, defaut: true },
  { id: 'bronze', nom: 'Bronze', couleur: '#b07a3f', origine: 'niveau 5' },
  { id: 'argent', nom: 'Argent', couleur: '#9aa3ae', origine: 'niveau 10' },
  { id: 'or', nom: 'Or', couleur: '#d4a12a', origine: 'niveau 20' },
  { id: 'lapis', nom: 'Lapis', couleur: '#1f4e8c', origine: 'niveau 30' },
  { id: 'ebene', nom: 'Ébène', couleur: '#2a2118', origine: 'niveau 45' },
  { id: 'anime', nom: 'Cadre animé', couleur: '#e0c27a', anime: true, origine: 'niveau 50' },
]

/** Effets de célébration : couleurs et forme des particules des écrans de récompense. */
export const EFFETS = [
  { id: 'poussiere-or', nom: 'Poussière d’or', couleurs: ['#e0c27a', '#f6efe2', '#c9966a'], forme: 'rond', defaut: true },
  { id: 'petales', nom: 'Pétales', couleurs: ['#e8a0a8', '#f6efe2', '#c25a6a'], forme: 'petale', origine: 'niveau 8' },
  { id: 'feux-artifice', nom: 'Feux d’artifice', couleurs: ['#e0c27a', '#e6966e', '#8fb4ec', '#d79be6'], forme: 'eclat', origine: 'niveau 12' },
  { id: 'etincelles', nom: 'Étincelles', couleurs: ['#ffe08a', '#ffb36b', '#ffffff'], forme: 'trait', origine: 'niveau 17' },
  { id: 'pluie-etoiles', nom: 'Pluie d’étoiles', couleurs: ['#e0c27a', '#ffffff'], forme: 'etoile', origine: 'niveau 30' },
  { id: 'aurore', nom: 'Aurore', couleurs: ['#7cc4b2', '#8fb4ec', '#d79be6'], forme: 'rond', origine: 'niveau 45' },
]
// L'effet « Poussière d'or » est gagné au niveau 4 ; avant, les célébrations utilisent la même poussière d'or.

const GENRES = { theme: THEMES, sceau: SCEAUX, cadre: CADRES, effet: EFFETS }

/** Un cosmétique est-il obtenu ? (les éléments « par défaut » le sont toujours) */
export function possede(genre, id, recompenses) {
  const item = GENRES[genre]?.find((x) => x.id === id)
  if (!item) return false
  return Boolean(item.defaut) || recompenses.includes(`${genre}:${id}`)
}

/** Cosmétique choisi (ou celui par défaut si le choix n'est pas, ou plus, possédé). */
export function choisi(genre, cosmetiques, recompenses) {
  const id = cosmetiques?.[genre]
  const liste = GENRES[genre]
  return (id && possede(genre, id, recompenses) && liste.find((x) => x.id === id)) || liste.find((x) => x.defaut)
}

/** Applique le thème choisi à la page (attribut data-palette lu par src/index.css). */
export function appliquerTheme(id) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.palette = id && id !== 'musee' ? id : ''
}
