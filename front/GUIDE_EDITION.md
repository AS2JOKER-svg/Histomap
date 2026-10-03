# Guide d'édition HistoMap

Petit mode d'emploi pour ajouter ou modifier du contenu et des pages sans rien casser.

---

## 1. Ajouter / modifier une civilisation

### Où ?
Les données ne se modifient **jamais** directement dans `src/data/epochs.json` : c'est un fichier **généré**, il est écrasé à chaque `npm run data`.
On édite les **sources** dans `scripts/` :

| Fichier | Époque |
|---|---|
| `scripts/data-part1.mjs` | Préhistoire |
| `scripts/data-part2.mjs` | Antiquité |
| `scripts/data-part3.mjs` | Moyen Âge |
| `scripts/data-part4.mjs` | Époque moderne, Époque contemporaine |
| `scripts/build-epochs.mjs` | Assemble tout → `src/data/epochs.json` |
| `scripts/validate-data.mjs` | Vérifie les données (lancé automatiquement) |

### Dans quel ordre ?
1. Ouvrir le bon `data-partX.mjs`, trouver le bon continent (`europe`, `asie`, `afrique`, `amerique`).
2. Ajouter/modifier un objet civilisation dans `civilizations`.
3. Régénérer **et valider** :
   ```bash
   cd front && npm run data
   ```
4. Vérifier dans le navigateur (`npm run dev`).

### Structure d'une civilisation
```js
{
  id: "france-capet",          // OBLIGATOIRE, UNIQUE dans tout le site (sert dans l'URL)
  trackId: "france",           // optionnel : civs qui partagent une même ligne de frise
  row: 1,                      // optionnel : ordre vertical dans le continent
  label: "France (Capétiens)",
  period: "987 à 1492",        // texte affiché
  start: 987,                  // NOMBRE (négatif = av. J.-C.)
  end: 1492,                   // NOMBRE, strictement > start
  color: "#2c6fd1",            // couleur hexadécimale
  isRiver: false,
  capitale: "Paris",
  description: "…",
  datesCles:   [{ annee, evenement, info }],
  dirigeants:  [{ titre, nom, surnom, debut, fin }],
  personnages: [{ nom, role, description, dates, wikiUrl }],
  guerres:     [{ nom, annee, adversaires: [], allies: [], morts, vainqueur, consequences, wikiUrl }],
  sciences: "texte…",
  croyancesText: "texte…",
  diplomatie: "texte…",
  documentaires: [{ titre, url }]
}
```

### Le validateur (`npm run validate`)
Il tourne avant **chaque build** (en local et sur GitHub Actions).
- **Erreur** ❌ → le build s'arrête : id dupliqué, date non numérique, `start ≥ end`, couleur invalide, champ obligatoire manquant…
- **Alerte** ⚠️ → le build continue, mais le contenu mérite un coup d'œil (date clé hors de la période de la civilisation, etc.).

### Relier une civilisation à la carte
Dans `src/data/map-links.js` :
- `TERRITORIES['mon-id']` = noms **anglais** des territoires sur les cartes historiques (ex. `'Kingdom of France'`). La liste des noms disponibles par année est dans `public/map/index.json`.
- `CONFLICTS['Nom exact de la guerre']` = `[longitude, latitude]` du lieu emblématique.
- Le validateur signale un nom de territoire introuvable ou une guerre sans coordonnées.

---

## 2. Où se trouve quoi dans le code ?

| Je veux modifier… | Fichier |
|---|---|
| Le plan du site (URLs) | `src/App.jsx` |
| L'en-tête, la barre d'onglets mobile | `src/layouts/AppShell.jsx` |
| La page d'accueil (hub) | `src/pages/HomePage.jsx` |
| La flèche des époques | `src/pages/TimelinePage.jsx` + `src/components/timeline/EpochRibbon.jsx` |
| La frise d'une époque (toile, zoom, filtres) | `src/pages/EpochPage.jsx` + `src/components/timeline/EpochTimeline.jsx` |
| Le rangement des barres en lignes | `src/components/timeline/layout.js` |
| L'aperçu d'une civilisation (tiroir) | `src/components/timeline/CivPreview.jsx` |
| Les échelles de temps (linéaire / log) | `src/lib/time.js` (`createEpochScale`) |
| La fiche d'une civilisation | `src/pages/CivilizationPage.jsx` |
| La carte du monde | `src/pages/MapPage.jsx` + `src/components/map/` + `src/lib/map.js` |
| Relier une civilisation à la carte, placer un conflit | `src/data/map-links.js` |
| On avance (aperçu) | `src/pages/RevisePage.jsx` |
| Le mot de bienvenue | `src/config/welcome.js` (`enabled: false` pour le couper) |
| Les couleurs, le mode sombre | `src/index.css` (variables `--c-…`) |
| Les icônes | `src/components/ui/Icon.jsx` |

### À garder en tête
- **Les pages ne lisent pas le JSON directement** : elles passent par `src/lib/data.js` (`getEpoch`, `getCivilization`…).
- **Couleurs** : utiliser les classes de thème (`text-ink`, `text-muted`, `bg-surface`, `bg-surface2`, `border-line`, `text-accent`…) plutôt que `bg-white` ou `text-gray-500`, sinon le mode sombre casse.
- **Boutons** : classes prêtes à l'emploi `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-icon` (zone tactile ≥ 44 px).
- **`localStorage`** : toujours passer par `src/lib/storage.js` (protégé contre la navigation privée).
- **Vibrations** : `haptic('success')` depuis `src/lib/haptics.js`. Android uniquement (Safari iOS ne le permet pas).
- Frise d'une époque : `LANE_H`, `LANE_GAP`, `MIN_W`, `ZOOM_MAX` en tête de `EpochTimeline.jsx`. Les époques de plus de 20 000 ans passent automatiquement en échelle logarithmique (`LOG_THRESHOLD` dans `time.js`).
- `trackId` : des civilisations successives d'une même piste (Ghana → Mali) restent sur la même ligne ; si elles se chevauchent nettement, elles sont séparées automatiquement.
