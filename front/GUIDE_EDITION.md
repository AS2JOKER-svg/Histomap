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

### Relier une civilisation d'une époque à l'autre (lignées)
Dans `scripts/lineages.mjs` : une lignée = une couleur + la liste des ids dans l'ordre chronologique.
```js
{ id: 'france', label: 'France', color: '#3f6fd1', members: ['francs', 'france-capet', 'france-mod', 'france-contemp'] }
```
Après `npm run data`, tous les membres prennent la même couleur (frise, carte, fiches) et gagnent les liens
« ← Avant / La suite → » (champ `lineage` généré dans `epochs.json`). Une civilisation n'appartient qu'à une lignée.

### Écrire un chapitre de révision (« On avance »)
**Chapitres rédigés à ce jour (21)** :
- Préhistoire : Europe paléolithique
- Antiquité : Mésopotamie · Égypte · Perse achéménide · Grèce · Carthage · Rome · Chine (Qin & Han)
- Moyen Âge : Empire byzantin · Califat islamique · Empire mongol · France capétienne · Japon féodal
- Époque moderne : France d'Ancien Régime · Empire ottoman · Empire moghol · Aztèques · Incas
- Époque contemporaine : France · Royaume-Uni · États-Unis

Chaque civilisation a un chapitre **généré automatiquement** à partir de ses données. Pour un chapitre
**rédigé à la main** (meilleure qualité) : copier `src/data/revision/france-capet.js`, l'adapter, puis
l'enregistrer dans `src/data/revision/index.js`.
- `tier: 1` = premier passage (l'essentiel) ; `tier: 2` = nouvelles cartes quand on reprend le chapitre.
- Types de cartes : `text` (titre + texte + chiffre mis en avant), `keyfigure` (grand chiffre), `dates`,
  `steps` (schéma en étapes), `map` (mini-carte, `years: [...]`), `war`, `person`, `leaders`.
- La couverture, la carte « avant / après » (lignée) et le bilan (`recap`) sont ajoutés automatiquement.
- `npm run validate` vérifie les chapitres rédigés (`scripts/validate-revision.mjs`) : ids uniques, types de cartes,
  bonne réponse existante, années de carte disponibles. Une erreur bloque le build.

### Questions de quiz
Chaque chapitre a un réservoir de questions **générées automatiquement** (≈ 38 en moyenne, de 20 à 67) :
dates, ordre chronologique, capitale, dirigeants, personnages, guerres, carte, lignée, vrai/faux…
Pour ajouter des questions rédigées à la main, compléter le tableau `quiz` du chapitre
(voir `src/data/revision/france-capet.js`) :
```js
{ id: 'saint-louis', type: 'mcq', prompt: 'Quel roi est surnommé « Saint Louis » ?',
  options: ['Louis IX', 'Louis VI', 'Louis XI', 'Louis VII'], answer: 0, explanation: '…' },
{ id: 'sorbonne', type: 'tf', prompt: 'Robert de Sorbon fonde la Sorbonne en 1257.', answer: true },
{ id: 'ordre', type: 'order', prompt: 'Remettez dans l’ordre…', items: ['A', 'B', 'C'] } // items dans le BON ordre
```
- `answer` = position de la bonne réponse dans `options` (elles sont mélangées à l'affichage).
- **Ne jamais réutiliser ou renommer un `id`** : il sert à mémoriser les questions ratées.
- Règles (dans `src/lib/quiz.js`) : 20 questions, validé dès 15/20 ; après un échec, 5 questions ratées reviennent avec 15 nouvelles.

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
| Lignées (même civilisation sur plusieurs époques) | `scripts/lineages.mjs` + `src/components/LineageTrail.jsx` |
| Progression (fiches lues, reprendre, série) | `src/store/progress.js` + `src/components/progress/` |
| Messages éphémères (toasts) | `useUI().showToast({ text, tone })` dans `src/store/ui.js` |
| On avance : hub, choix du chapitre, chapitre | `src/pages/RevisePage.jsx`, `ReviseEpochPage.jsx`, `ChapterPage.jsx` |
| Cartes de révision (paquet, types de cartes) | `src/components/revision/` + `src/lib/revision.js` |
| Chapitres rédigés à la main (cartes + questions) | `src/data/revision/` |
| Quiz : génération des questions, règles | `src/lib/quiz.js` + `src/pages/QuizPage.jsx` + `src/components/quiz/` |
| Le mot de bienvenue | `src/config/welcome.js` (`enabled: false` pour le couper) |
| Les couleurs, le mode sombre | `src/index.css` (variables `--c-…`) |
| Les icônes | `src/components/ui/Icon.jsx` |

### À garder en tête
- **Les pages ne lisent pas le JSON directement** : elles passent par `src/lib/data.js` (`getEpoch`, `getCivilization`…).
- **Couleurs** : utiliser les classes de thème (`text-ink`, `text-muted`, `bg-surface`, `bg-surface2`, `border-line`, `text-accent`…) plutôt que `bg-white` ou `text-gray-500`, sinon le mode sombre casse.
- **Boutons** : classes prêtes à l'emploi `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-icon` (zone tactile ≥ 44 px).
- **`localStorage`** : toujours passer par `src/lib/storage.js` (protégé contre la navigation privée).
- **Progression** : clé `histomap_progress` (version 1). Si vous changez sa forme, incrémentez `VERSION` et complétez `migrate()` dans `store/progress.js`, sinon les utilisateurs perdent leur avancement.
- **Vibrations** : `haptic('success')` depuis `src/lib/haptics.js`. Android uniquement (Safari iOS ne le permet pas).
- Frise d'une époque : `LANE_H`, `LANE_GAP`, `MIN_W`, `ZOOM_MAX` en tête de `EpochTimeline.jsx`. Les époques de plus de 20 000 ans passent automatiquement en échelle logarithmique (`LOG_THRESHOLD` dans `time.js`).
- `trackId` : des civilisations successives d'une même piste (Ghana → Mali) restent sur la même ligne ; si elles se chevauchent nettement, elles sont séparées automatiquement.
