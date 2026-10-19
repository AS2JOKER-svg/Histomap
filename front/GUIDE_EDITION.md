# Guide d'édition HistoMap

Petit mode d'emploi pour ajouter ou modifier du contenu et des pages sans rien casser.

---

## 1. Le contenu : `front/content/`

Tout le contenu vit dans **`front/content/`**, en JSON, **un fichier par unité** (une civilisation, une personne…).
Le site ne lit jamais ces fichiers directement : `scripts/build-content.mjs` les compile dans `src/data/`
(**fichiers générés, ignorés par git : ne jamais les éditer**). `npm run dev`, `npm run data` et `npm run build` le font automatiquement.

| Fichier | Rôle |
|---|---|
| `content/epochs.json` | Le plan du site : époques → continents → **liste ordonnée des ids** des civilisations |
| `content/civs/<id>.json` | Une fiche par civilisation |
| `content/people/<id>.json` | Fiches liées : personnes |
| `content/events/<id>.json` | Fiches liées : événements |
| `content/discoveries/<id>.json` | Fiches liées : découvertes, inventions, œuvres |
| `content/lineages.json` | Même civilisation sur plusieurs époques (couleur commune, « La suite ») |
| `content/regions.json` | Régions actuelles normalisées (champ `region` des fiches) |
| `content/conflicts.json` | Lieu de chaque guerre sur la carte |
| `content/ignore-territories.json` | Territoires des cartes volontairement sans fiche |

### Ajouter une civilisation
1. Créer `content/civs/<id>.json` (copier une fiche existante, par exemple `carthage.json`). Le nom du fichier **est** l'id.
2. Ajouter l'id dans `content/epochs.json`, dans la liste `civs` du bon continent, à la place voulue (l'ordre est celui des listes et des quiz).
3. Compiler **et valider** :
   ```bash
   cd front && npm run data
   ```
4. Vérifier dans le navigateur (`npm run dev`), puis `npm run coverage` pour voir le trou comblé.

### Structure d'une fiche de civilisation
```jsonc
{
  "id": "france-capet",            // OBLIGATOIRE = nom du fichier, unique dans tout le site (sert dans l'URL)
  "label": "France (Capétiens)",
  "tier": 1,                       // 1 majeure, 2 secondaire, 3 mineure
  "region": "europe-ouest",        // id de content/regions.json (région ACTUELLE du cœur de la civilisation)
  "period": "987 à 1492",          // texte affiché
  "start": 987,                    // NOMBRE (négatif = av. J.-C.)
  "end": 1492,                     // NOMBRE, strictement > start
  "color": "#2c6fd1",              // SAUF si la civilisation est dans une lignée (la couleur vient alors de la lignée)
  "trackId": "france",             // optionnel : civilisations qui partagent une même ligne de frise
  "row": 1,                        // optionnel : ordre vertical dans le continent
  "isRiver": false,
  "capitale": "Paris",
  "description": "…",
  "territories": ["Kingdom of France", "France"],   // noms ANGLAIS des territoires sur les cartes (voir plus bas)
  "datesCles":   [{ "annee": 1214, "evenement": "Bouvines", "info": "…", "ref": "bataille-de-bouvines" }],
  "dirigeants":  [{ "nom": "Philippe II", "titre": "Roi", "surnom": "Auguste", "debut": 1180, "fin": 1223,
                    "dynastie": "capetiens-directs", "personne": "philippe-auguste" }],
  "dynasties":   [{ "id": "capetiens-directs", "nom": "Capétiens directs", "debut": 987, "fin": 1328 }],
  "personnages": [{ "nom": "…", "role": "…", "description": "…", "dates": "1412 à 1431", "wikiUrl": "https://…", "ref": "jeanne-d-arc" }],
  "guerres":     [{ "nom": "…", "annee": 1337, "adversaires": [], "allies": [], "morts": "…", "vainqueur": "…", "consequences": "…", "wikiUrl": "https://…" }],
  "sciences": "texte…",
  "croyancesText": "texte…",
  "diplomatie": "texte…",
  "documentaires": [{ "titre": "…", "url": "https://…" }],
  "sources": ["https://fr.wikipedia.org/wiki/…", { "titre": "Britannica — …", "url": "https://…" }],

  // ── Structure « fiche en béton » (sprint 10B) : tout est facultatif, la fiche s'adapte ──
  "reperes": {                     // les 9 repères (capitale et durée ont une valeur par défaut)
    "capitale":  { "valeur": "Paris", "precision": "…" },   // un texte, ou { valeur, precision }
    "regimes": "Monarchie féodale", "langues": "…", "religion": "…", "apogee": "…",
    "population": "…", "monnaie": "…", "duree": "…", "aujourdhui": "…"
  },
  "essentiel": ["5 points maximum, ce qu'il faut retenir"],
  "periodes": [{ "nom": "…", "debut": 987, "fin": 1180, "resume": "…",
                 "evenements": [{ "annee": 1214, "evenement": "Bouvines", "ref": "bataille-de-bouvines" }] }],
  "regimes": [{ "id": "republique", "nom": "République", "debut": -509, "fin": -27, "note": "Pas de chef unique : …" }],
  "societe": "…", "economie": "…", "arts": "…", "quotidien": "…",   // onglet Société (avec croyancesText, sciences, diplomatie)
  "decouvertes": ["calendrier-julien"],                              // ids de content/discoveries/
  "heritage": [{ "titre": "Nos langues", "texte": "…" }],
  "aSavoir": ["légendes, débats d'historiens, idées reçues"]
}
```
**Où s'affiche quoi** (fiche à 6 onglets) : Résumé = mini-carte, repères, essentiel, dates clés, personnages, héritage,
à savoir, lignée, sources · Histoire = `periodes` (sinon les dates clés avec leur explication) · Dirigeants = `regimes`
(bandeau) + `dirigeants` groupés par `dynasties` (barre de règne proportionnelle) · Société = société, économie, religions
(`croyancesText`), sciences (+ `decouvertes`), arts, vie quotidienne, diplomatie · Guerres = `guerres` · Carte = territoire.
- Dynastie : `{ id, nom, debut, fin, regime?, note? }` ; dirigeant : `note` facultative (ex. « selon la tradition »).
- **Liste complète des dirigeants** : marquer les 5 à 8 plus importants avec `"cle": true`. Seuls ceux-là font l'objet de
  questions de quiz (sinon, 80 empereurs romains donneraient des centaines de questions) ; ils sont aussi cités dans le
  résumé des groupes fermés (« dont Khéops, Hatchepsout… »).
- `documentaires` : les anciens liens portaient des titres d'émissions mais pointaient tous vers Wikipédia. Ne plus en
  ajouter : mettre les références dans `sources` (liste vide `[]` dans les fiches mises à niveau).
- Régime sans chef unique (République romaine, cités marchandes…) : l'expliquer dans `note` et ne lister que les grandes figures.
- Champs facultatifs : `trackId`, `row`, `surnom`, `dynastie`, `personne`, `dynasties`, `ref`, `sources`.
- `ref` (date clé → événement, personnage → personne) et `personne` (dirigeant → personne) relient la ligne à une **fiche liée** : elle deviendra cliquable.
- `dynastie` doit exister dans `dynasties` de la même fiche.
- **Un champ inconnu est une erreur** (une faute de frappe comme `dirigeant` au lieu de `dirigeants` ne passe pas).

### Fiches liées (personnes, événements, découvertes)
Une fiche liée est **partagée** : Jules César a une seule fiche, citée par Rome, les Celtes, l'Égypte…
```jsonc
// content/people/jules-cesar.json
{ "id": "jules-cesar", "nom": "Jules César", "nomComplet": "Caius Julius Caesar",
  "role": "Général et homme d'État", "roles": ["Général", "Homme politique", "Écrivain"],
  "dates": "−100 → −44", "naissance": -100, "mort": -44,
  "description": "En une phrase : qui est-ce ?",
  "reperes": [{ "label": "Naissance", "valeur": "12 ou 13 juillet −100", "precision": "Rome" }],
  "essentiel": ["Pourquoi il compte : 3 points"],
  "chronologie": [{ "annee": -49, "texte": "Passage du Rubicon", "detail": "…", "ref": "rubicon" }],
  "liens": [{ "ref": "pompee", "relation": "Allié, puis rival" }],
  "aSavoir": ["…"], "wikiUrl": "https://…", "sources": ["https://…"] }
// content/events/<id>.json : { id, nom, annee (obligatoire), fin?, dates?, lieu?, description,
//    sections: [{ titre: "Contexte" | "Déroulement" | "Conséquences", texte }], liens (acteurs), avant?, apres?, … }
// content/discoveries/<id>.json : { id, nom, annee?, domaine?, description,
//    sections: [{ titre: "Comment ça marche", texte }], heritage: [{ titre, texte }], avant?, apres?, … }
// Champs communs : nomComplet, dates, roles, reperes, essentiel, sections, chronologie, liens, avant, apres,
//                  heritage, aSavoir, wikiUrl, sources. Page : #/fiche/<id> ; aperçu : depuis tout lien [[id]].
```
Les ids sont **uniques dans tout le site**, civilisations comprises (minuscules, chiffres, tirets).
« Apparaît dans » (les fiches qui citent celle-ci) est calculé automatiquement.

### Liens dans les textes
Dans **n'importe quel texte** de `content/` (description, info d'une date, sciences, description d'une personne…) :
- `[[jules-cesar]]` → affiche le nom de la fiche (« Jules César ») ;
- `[[jules-cesar|César]]` → affiche « César ».

L'id peut être une civilisation ou une fiche liée. Un lien vers une fiche inexistante, ou des crochets mal fermés, **bloquent le build**.
Les quiz et les cartes générées utilisent le texte brut (sans les crochets).

### Le validateur (`npm run validate`)
Il tourne avant **chaque build** (en local et sur GitHub Actions). Objectif : **0 erreur et 0 alerte**.
- **Erreur** ❌ → le build s'arrête : id dupliqué, fiche absente de `epochs.json`, date non numérique, `start ≥ end`, région ou tier invalide,
  champ inconnu, lien ou référence vers une fiche inexistante, couleur en double avec une lignée…
- **Alerte** ⚠️ → le build continue, mais le contenu mérite un coup d'œil (date clé hors de la période, guerre sans lieu sur la carte…).
- Les messages donnent le fichier exact (`content/civs/rome.json (dirigeant « Auguste ») — …`).

### Relier une civilisation d'une époque à l'autre (lignées)
Dans `content/lineages.json` : une lignée = une couleur + la liste des ids dans l'ordre chronologique.
```json
{ "id": "france", "label": "France", "color": "#3f6fd1", "members": ["francs", "france-capet", "france-mod", "france-contemp"] }
```
Tous les membres prennent la couleur de la lignée (leurs fiches n'ont donc **pas** de `color`) et gagnent les liens
« ← Avant / La suite → ». Une civilisation n'appartient qu'à une lignée.

### Rapport de couverture (`npm run coverage`)
Affiche le tableau **région × siècle** (combien de civilisations actives, où sont les trous) et la liste des **territoires des
cartes sans fiche**, classés par nombre de cartes. Rapport complet : `reports/couverture.md` (généré).
Pour exclure volontairement un territoire (mode de vie générique, colonie, micro-État) : `content/ignore-territories.json`.

### Écrire un chapitre de révision (« On avance »)
**Les 105 civilisations ont un chapitre rédigé** (cartes + quiz + bilan) dans `src/data/revision/<id>.js`.
Sans fichier, une civilisation aurait un chapitre **généré automatiquement** à partir de ses données
(c'est le cas d'une nouvelle civilisation ajoutée aux données, tant qu'on n'a pas écrit son chapitre).

Pour écrire ou réécrire un chapitre : copier `src/data/revision/carthage.js` sous le nom `<id de la civilisation>.js`
et l'adapter. **Pas d'enregistrement à faire** : `scripts/build-revision-index.mjs` (lancé par `npm run data` et avant
chaque build) régénère `src/data/revision/index.js` et `src/data/revision-meta.json`. Sur le site, chaque chapitre est
un petit fichier chargé seulement quand on l'ouvre (`src/lib/chapters.js`).
- `tier: 1` = premier passage (l'essentiel) ; `tier: 2` = nouvelles cartes quand on reprend le chapitre.
- Types de cartes : `text` (titre + texte + chiffre mis en avant), `keyfigure` (grand chiffre), `dates`,
  `steps` (schéma en étapes), `map` (mini-carte, `years: [...]`), `war`, `person`, `leaders`.
- La couverture, la carte « avant / après » (lignée) et le bilan (`recap`) sont ajoutés automatiquement.
- `npm run validate` vérifie les chapitres rédigés (`scripts/validate-revision.mjs`) : ids uniques, types de cartes,
  bonne réponse existante, années de carte disponibles. Une erreur bloque le build.
- Pour vérifier un nouveau fichier avant de l'enregistrer : `node scripts/validate-revision.mjs src/data/revision/mon-chapitre.js`.
- Carte `map` : prendre des années listées pour la civilisation dans `src/data/map-presence.json` (généré par `npm run data`) (sinon la mini-carte n'a rien à colorer).

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
- `territories` dans la fiche = noms **anglais** des territoires sur les cartes historiques (ex. `"Kingdom of France"`).
  La liste des noms disponibles par année est dans `public/map/index.json` ; `npm run coverage` liste ceux qui n'ont pas de fiche.
- `content/conflicts.json` : `"Nom exact de la guerre": { "coords": [longitude, latitude], "lieu": "Cannes" }` (lieu facultatif).
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
| La fiche d'une civilisation (6 onglets) | `src/pages/CivilizationPage.jsx` + `src/components/fiche/` |
| Les fiches liées (personne, événement, découverte) | `src/pages/EntityPage.jsx` + `src/lib/entities.js` |
| L'aperçu d'une fiche (feuille du bas) | `src/components/RefSheet.jsx` + `useUI().openSheet(...)` |
| La recherche globale | `src/pages/SearchPage.jsx` + `src/lib/search.js` (index : `src/data/search.json`, généré) |
| L'onglet Guerres | `src/pages/WarsPage.jsx` (liste : `src/data/wars.json`, générée) |
| La présentation au premier lancement | `src/components/Onboarding.jsx` |
| Accès aux données (index léger, détail à la demande) | `src/lib/data.js` (`loadCiv`, `useCiv`) |
| Compilation et validation du contenu | `scripts/build-content.mjs`, `scripts/validate-content.mjs`, `scripts/lib/` |
| Liens `[[id]]` dans les textes | `src/lib/links.js` + `src/components/ui/RichText.jsx` |
| La carte du monde | `src/pages/MapPage.jsx` + `src/components/map/` + `src/lib/map.js` |
| Relier une civilisation à la carte, placer un conflit | `content/civs/<id>.json` (`territories`) + `content/conflicts.json` |
| Lignées (même civilisation sur plusieurs époques) | `content/lineages.json` + `src/components/LineageTrail.jsx` |
| Progression (fiches lues, reprendre, série) | `src/store/progress.js` + `src/components/progress/` |
| Messages éphémères (toasts) | `useUI().showToast({ text, tone })` dans `src/store/ui.js` |
| On avance : hub, choix du chapitre, chapitre | `src/pages/RevisePage.jsx`, `ReviseEpochPage.jsx`, `ChapterPage.jsx` |
| Cartes de révision (paquet, types de cartes) | `src/components/revision/` + `src/lib/revision.js` |
| Chapitres rédigés à la main (cartes + questions) | `src/data/revision/` |
| Quiz : génération des questions, règles | `src/lib/quiz.js` + `src/pages/QuizPage.jsx` + `src/components/quiz/` |
| Les couleurs, le mode sombre | `src/index.css` (variables `--c-…`) |
| Les icônes | `src/components/ui/Icon.jsx` |

### À garder en tête
- **Les pages ne lisent pas le JSON directement** : elles passent par `src/lib/data.js`. `getEpoch`, `getCivilization`… renvoient la version **légère** (frise, listes) ; le détail (dates, dirigeants, textes…) se charge avec `useCiv(id)` / `loadCiv(id)`.
- **Couleurs** : utiliser les classes de thème (`text-ink`, `text-muted`, `bg-surface`, `bg-surface2`, `border-line`, `text-accent`…) plutôt que `bg-white` ou `text-gray-500`, sinon le mode sombre casse.
- **Boutons** : classes prêtes à l'emploi `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-icon` (zone tactile ≥ 44 px).
- **`localStorage`** : toujours passer par `src/lib/storage.js` (protégé contre la navigation privée).
- **Progression** : clé `histomap_progress` (version 1). Si vous changez sa forme, incrémentez `VERSION` et complétez `migrate()` dans `store/progress.js`, sinon les utilisateurs perdent leur avancement.
- **Couleur d'une civilisation en texte** : ne pas écrire `style={{ color: civ.color }}` (certaines couleurs, comme l'or de l'Égypte, sont illisibles sur fond blanc) mais `className="civ-text" style={civTextStyle(civ.color)}` ; pour un fond portant du texte blanc : `style={{ background: solidBg(civ.color) }}` (`src/lib/color.js`). Le contraste AA (4,5:1) est alors garanti dans les deux thèmes.
- **Application installable / hors ligne** : `public/manifest.webmanifest` (nom, icônes, raccourcis), `sw/sw.js` (service worker, complété au build par le plugin de `vite.config.js`), `src/lib/pwa.js` + `src/store/app.js` (connexion, installation, mise à jour). Le service worker n'est actif qu'après `npm run build` (pas en `npm run dev`). Icônes : `public/icons/`.
- **Vibrations** : `haptic('success')` depuis `src/lib/haptics.js`. Android uniquement (Safari iOS ne le permet pas).
- Frise d'une époque : `LANE_H`, `LANE_GAP`, `MIN_W`, `ZOOM_MAX` en tête de `EpochTimeline.jsx`. Les époques de plus de 20 000 ans passent automatiquement en échelle logarithmique (`LOG_THRESHOLD` dans `time.js`).
- `trackId` : des civilisations successives d'une même piste (Ghana → Mali) restent sur la même ligne ; si elles se chevauchent nettement, elles sont séparées automatiquement.
