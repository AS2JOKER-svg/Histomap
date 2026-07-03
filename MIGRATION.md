# MIGRATION.md — Guide d'installation HistoArrow

> **Pour un développeur TRÈS junior.** Ce fichier explique pas à pas comment
> intégrer le composant HistoArrow dans ton projet front existant.

---

## 📁 Fichiers à copier dans ton projet

Ton projet est dans `front/`. Voici **exactement** quoi copier :

```
front/src/
├── components/
│   ├── HistoArrow.jsx      ← NOUVEAU (composant principal)
│   ├── EpochView.jsx       ← NOUVEAU (niveau 1 : les époques)
│   ├── ContinentsView.jsx  ← NOUVEAU (niveau 2 : continents)
│   ├── CivilizationView.jsx← NOUVEAU (niveau 3 : fiches)
│   └── Breadcrumb.jsx      ← NOUVEAU (fil d'ariane)
├── store/
│   └── navigation.js       ← NOUVEAU (état zustand)
└── data/
    └── epochs.json         ← NOUVEAU (données)
```

> ⚠️ **Ne remplace PAS tes anciens fichiers.** Les composants HistoArrow sont
> entièrement nouveaux. Tu peux garder Timeline.jsx et EpochView.jsx.old
> pour l'instant.

---

## Étape 1 — Copier les fichiers

Dans ton terminal, dans le dossier `front/` :

```bash
# Créer les dossiers si besoin
mkdir -p src/components src/store src/data

# Copier chaque fichier
cp /CHEMIN/VERS/HistoArrow.jsx       src/components/
cp /CHEMIN/VERS/EpochView.jsx        src/components/
cp /CHEMIN/VERS/ContinentsView.jsx    src/components/
cp /CHEMIN/VERS/CivilizationView.jsx  src/components/
cp /CHEMIN/VERS/Breadcrumb.jsx        src/components/
cp /CHEMIN/VERS/navigation.js        src/store/
cp /CHEMIN/VERS/epochs.json           src/data/
```

---

## Étape 2 — Vérifier les imports dans App.jsx

Ouvre `src/App.jsx` et remplace tout son contenu par :

```jsx
import HistoArrow from './components/HistoArrow'
import epochsData from './data/epochs.json'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      <HistoArrow epochsData={epochsData.epochs} />
    </div>
  )
}
```

---

## Étape 3 — Vérifier les dépendances

Les dépendances suivantes **doivent** être installées. Vérifie dans `front/package.json` :

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.4.0",
    "framer-motion": "^10.x"
  }
}
```

Si `zustand` ou `framer-motion` manque :

```bash
cd front
npm install zustand framer-motion
```

---

## Étape 4 — Lancer et vérifier

```bash
cd front
npm run dev
```

Ouvrir http://localhost:5173 dans le navigateur.

**Ce que tu dois voir :**
1. Le header "HISTOMAP" doré en haut
2. Une longue flèche horizontale colorée en dessous
3. La flèche est partagée en segments colorés (Préhistoire, Antiquité, etc.)
4. Chaque segment a un nom d'époque inscrit

**Test de navigation :**
- Clique sur un segment d'époque (ex: "Antiquité") → la flèche zoome et montre des bandes continents
- Clique sur une civilisation dans une bande → une fiche s'ouvre avec les infos
- Clique sur "← Retour" pour remonter

**Si rien ne s'affiche :**
```bash
# Vérifier qu'il n'y a pas d'erreur dans le terminal
npm run dev 2>&1 | head -30
```

---

## 📂 Récapitulatif des fichiers livrables

| Fichier | Rôle |
|---|---|
| `components/HistoArrow.jsx` | Composant principal (le point d'entrée) |
| `components/EpochView.jsx` | Niveau 1 : vue globale des époques |
| `components/ContinentsView.jsx` | Niveau 2 : continents + civilisations |
| `components/CivilizationView.jsx` | Niveau 3 : fiches enrichies via API |
| `components/Breadcrumb.jsx` | Fil d'ariane |
| `store/navigation.js` | État zustand (navigation 3 niveaux) |
| `timeScale.js` | Utils : parser de période, échelle temps |
| `epochs.json` | Données (époques, continents, civilisations) |
| `MIGRATION.md` | Ce fichier |
| `PROMPT_IA.md` | Prompt système pour génération Mistral |

---

## 🔧 Dépannage rapide

| Problème | Solution |
|---|---|
| `Cannot find module 'zustand'` | `npm install zustand` |
| `Cannot find module 'framer-motion'` | `npm install framer-motion` |
| Écran blanc | Ouvre les DevTools (F12) → onglet Console |
| Les segments ne s'affichent pas | Vérifie que `epochs.json` est bien dans `src/data/` et que le chemin dans `App.jsx` est correct |
| Erreur "Failed to fetch" sur la fiche | Le backend Hono n'est pas lancé. Lance le serveur back : `npm run dev` dans `back/` |