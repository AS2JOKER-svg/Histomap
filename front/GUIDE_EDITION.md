# Guide d'édition HISTOMAP

Petit mode d'emploi pour ajouter/modifier des civilisations, la première page, et éviter de tout casser.

---

## 1. Ajouter / modifier / améliorer une civilisation

### Où ?
Les données NE se modifient JAMAIS directement dans `src/data/epochs.json` (c'est un fichier **généré**, il sera écrasé).
On édite les **sources** dans `scripts/` :

| Fichier | Époque |
|---|---|
| `scripts/data-part1.mjs` | Préhistoire / Antiquité (1re époque) |
| `scripts/data-part2.mjs` | Antiquité (2e époque) |
| `scripts/data-part3.mjs` | Moyen Âge |
| `scripts/data-part4.mjs` | Époque suivante |
| `scripts/build-epochs.mjs` | Script qui assemble tout → `src/data/epochs.json` |

### Dans quel ordre ?
1. Ouvrir le bon `data-partX.mjs`.
2. Trouver le bon **continent** (`id: "europe"`, `"asie"`, `"afrique"`, `"amerique"`…).
3. Ajouter/modifier un objet civilisation dans son tableau `civilizations`.
4. **Régénérer** les données :
   ```bash
   cd front && node scripts/build-epochs.mjs
   ```
5. Vérifier dans le navigateur (`npm run dev`).

### Structure minimale d'une civilisation
```js
{
  id: "identifiant-unique",      // OBLIGATOIRE et UNIQUE dans le continent
  label: "Nom affiché",
  period: "800 à 476",           // texte libre
  start: -800,                   // NOMBRE (négatif = av. J.-C.)
  end: 476,                      // NOMBRE, doit être >= start
  color: "#c0392b",
  isRiver: false,                // true = bordure blanche (civ. fluviale)
  capitale: "…",
  description: "…",
  regimes: [{ type, start, end, chef }],
  technologies: ["…"],
  croyances: ["…"],
  personnages: [{ nom, role, dates }],
  guerres: [{ nom, annee, contre, issue }],
  events: [{ year, label, importance: "haute"|"moyenne", info }],
  relations: [{ type: "conflit"|"alliance", with: "id-autre-civ", label, start, end }],
  liens: [{ label, url }]
}
```

### ⚠️ À garder en tête (pièges qui « cassent tout »)
- **`id` UNIQUE par continent.** Deux civs avec le même `id` → l'une **disparaît** (React `key` dupliquée). C'était le bug corrigé le 03/07.
- **`start` et `end` sont des NOMBRES**, pas des chaînes. `end >= start`.
- **`relations.with`** doit pointer vers un `id` **existant**. Une relation vers une civ d'un autre continent n'est simplement pas tracée (pas d'erreur).
- Toujours **relancer `build-epochs.mjs`** après édition, sinon rien ne change à l'écran.
- Vérifier les virgules JS entre objets (`},{`), une virgule manquante casse tout le fichier.

### Vérifier l'absence de doublons/erreurs avant de committer
```bash
cd front && node -e '
const eps = require("./src/data/epochs.json");
let p=0;
for (const ep of eps) for (const c of ep.continents) {
  const seen=new Map();
  for (const civ of c.civilizations){
    seen.set(civ.id,(seen.get(civ.id)||0)+1);
    if(typeof civ.start!=="number"||typeof civ.end!=="number") {console.log("DATE NON NUMERIQUE",ep.id,c.id,civ.id);p++;}
    if(civ.start>civ.end){console.log("START>END",ep.id,c.id,civ.id);p++;}
  }
  for(const[id,n]of seen)if(n>1){console.log("DOUBLON",ep.id,c.id,id,"x"+n);p++;}
}
console.log(p?p+" probleme(s)":"OK aucun probleme");
'
```

---

## 2. Modifier la première page (dont la flèche)

### Où ?
- **`src/components/EpochView.jsx`** : c'est la vue de la première page (frise des époques). La **flèche** de la timeline y est dessinée.
- L'échelle temporelle globale (compression de la préhistoire) est dans **`src/store/timeScale.js`** (`createTimeScale`).

### À garder en tête
- La flèche/timeline utilise les positions calculées par `createTimeScale` : si tu changes la flèche, vérifie que `PREHIST_RATIO` (32 %) et `HISTORY_START` (-800) dans `timeScale.js` restent cohérents.
- Les positions `x` renvoyées sont **déjà** dans `[0, width]` — ne pas rajouter de padding.
- La navigation entre pages passe par `src/store/navigation.js` (`goToCivilization`, etc.). Ne pas casser les noms de ces actions.

---

## 3. Les fichiers d'une civilisation (fiche détaillée)

### Où ?
- **`src/components/CivilizationView.jsx`** : affichage de la fiche détaillée d'une civilisation (régimes, guerres, personnages, events, liens…).
- **`src/components/ContinentsView.jsx`** : la timeline par continent (barres cliquables). Une **ligne par civilisation** (correctif du 03/07 : labels et barres toujours alignés).
- **`src/data/fiches.json`** : contenu enrichi éventuel des fiches.

### À garder en tête
- `CivilizationView.jsx` lit les champs de l'objet civilisation (voir structure ci-dessus). Si tu ajoutes un champ dans les `data-partX.mjs`, il faut aussi l'afficher ici.
- Dans `ContinentsView.jsx` : `key={civ.id}` → encore une fois, `id` unique obligatoire.
- Les constantes de mise en page (`LANE_H`, `LANE_GAP`, `LABEL_W`) contrôlent la hauteur des lignes — les modifier avec précaution car labels (gauche) et barres (droite) doivent rester alignés.

---

## Récapitulatif des ordres d'action

**Ajouter une civ :** `data-partX.mjs` → `node scripts/build-epochs.mjs` → vérifier navigateur.
**Changer la flèche/1re page :** `EpochView.jsx` (+ éventuellement `timeScale.js`).
**Changer une fiche :** `CivilizationView.jsx` (+ `data-partX.mjs` si nouveau champ).
