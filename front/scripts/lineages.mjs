// Lignées : une même civilisation (ou un même pays) racontée sur plusieurs époques.
//
// Pour chaque lignée, build-epochs.mjs :
//   - donne la MÊME couleur à tous ses membres (frise, carte, fiches) ;
//   - ajoute à chaque membre `lineage: { id, label, prev, next }` pour naviguer
//     « ← Avant » / « La suite → » d'une époque à l'autre.
//
// `members` : ids de civilisations, dans l'ordre chronologique.
// Une civilisation ne peut appartenir qu'à une seule lignée.
export default [
  { id: 'france', label: 'France', color: '#3f6fd1', members: ['francs', 'france-capet', 'france-mod', 'france-contemp'] },
  { id: 'angleterre', label: 'Angleterre et Royaume-Uni', color: '#c0392b', members: ['angleterre', 'angleterre-mod', 'royaume-uni'] },
  { id: 'rome', label: 'Rome et Byzance', color: '#8e44ad', members: ['rome', 'byzance'] },
  { id: 'grece', label: 'Monde grec', color: '#4a90d9', members: ['minoen-mycenien', 'grece'] },
  { id: 'mesopotamie', label: 'Mésopotamie', color: '#d9a066', members: ['mesopotamie-prehist', 'mesopotamie'] },
  { id: 'chine', label: 'Chine', color: '#e67e22', members: ['chine-neo', 'chine-imperiale', 'chine-tang-song', 'chine-mod', 'chine-contemp'] },
  { id: 'japon', label: 'Japon', color: '#c0392b', members: ['japon-feodal', 'japon-mod', 'japon'] },
  { id: 'coree', label: 'Corée', color: '#2e6f95', members: ['gojoseon', 'goryeo', 'joseon', 'coree-contemp'] },
  { id: 'inde', label: 'Inde', color: '#16a085', members: ['maurya', 'moghols', 'inde-contemp'] },
  { id: 'perse', label: 'Perse et Iran', color: '#9c27b0', members: ['perse', 'safavides', 'iran'] },
  { id: 'turquie', label: 'Ottomans et Turquie', color: '#27ae60', members: ['ottomans', 'turquie'] },
  { id: 'russie', label: 'Russie', color: '#6d4c41', members: ['rus-kiev', 'russie'] },
  { id: 'espagne', label: 'Espagne', color: '#d4ac0d', members: ['reconquista-royaumes', 'espagne'] },
  { id: 'italie', label: 'Italie', color: '#4caf50', members: ['italie-maritime', 'italie-contemp'] },
  { id: 'allemagne', label: 'Monde germanique', color: '#34495e', members: ['serg', 'prusse', 'allemagne'] },
  { id: 'songhai', label: 'Empire songhaï', color: '#b83b1d', members: ['songhai', 'songhai-mod'] },
  { id: 'kongo', label: 'Royaume du Kongo', color: '#2e7d32', members: ['kongo', 'kongo-mod'] },
  { id: 'ethiopie', label: 'Éthiopie', color: '#7b1fa2', members: ['aksoum', 'ethiopie-contemp'] },
  { id: 'mexique', label: 'Mexique', color: '#e74c3c', members: ['azteque', 'mexique'] },
  { id: 'etats-unis', label: 'États-Unis', color: '#1a237e', members: ['usa-moderne', 'etats-unis'] },
]
