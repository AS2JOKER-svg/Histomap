# HistoMap

Site pour apprendre l'histoire des civilisations : une **frise** interactive, une **carte du monde** dans le temps (à venir) et un espace de **révision** avec fiches et quiz (à venir).

Inspiré du célèbre *Histomap* de John B. Sparks (1931).

## Les sections

| URL | Section | État |
|---|---|---|
| `#/` | Accueil : les trois portes d'entrée | ✅ |
| `#/frise` | Frise des 5 époques | ✅ |
| `#/frise/:epoque` | Une époque : continents et civilisations | ✅ |
| `#/frise/:epoque/:civilisation` | Fiche détaillée | ✅ |
| `#/carte` | Carte du monde avec curseur temporel | 🚧 sprint 3 |
| `#/reviser` | « On avance » : fiches de révision + quiz | 🚧 sprints 5-6 |

## Structure

```
histomap/
├── front/                       ← Le site (React 18 + Vite + Tailwind)
│   ├── scripts/
│   │   ├── data-part1..4.mjs    ← SOURCES des données (à éditer)
│   │   ├── build-epochs.mjs     ← génère src/data/epochs.json
│   │   └── validate-data.mjs    ← vérifie les données avant chaque build
│   ├── src/
│   │   ├── App.jsx              ← plan du site (routes)
│   │   ├── layouts/AppShell.jsx ← en-tête, barre d'onglets mobile
│   │   ├── pages/               ← une page par écran
│   │   ├── components/          ← composants partagés (ui/ = briques de base)
│   │   ├── lib/                 ← accès aux données, temps, stockage, vibrations
│   │   ├── store/               ← état global (thème, interface)
│   │   ├── config/welcome.js    ← mot de bienvenue
│   │   └── data/epochs.json     ← GÉNÉRÉ, ne pas éditer à la main
│   └── GUIDE_EDITION.md         ← comment ajouter du contenu
├── back/                        ← API Hono + Mistral (optionnelle, non utilisée par le site)
└── .github/workflows/deploy.yml ← déploiement GitHub Pages à chaque push sur main
```

## Démarrer

Prérequis : Node.js 18+ (20 recommandé).

```bash
cd front
npm ci          # installe les dépendances
npm run dev     # http://localhost:5173/Histomap/
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run data` | Régénère `epochs.json` depuis `scripts/` puis le valide |
| `npm run validate` | Valide seulement les données |
| `npm run build` | Valide puis construit le site dans `dist/` |
| `npm run preview` | Sert le build localement |

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : installation, génération + validation des données, build, puis publication sur GitHub Pages.

## Backend (optionnel)

`back/` contient une petite API Hono qui peut appeler Mistral pour enrichir des fiches. Le site n'en dépend pas.

```bash
cd back
cp .env.example .env   # puis renseigner MISTRAL_API_KEY
npm install && npm run dev
```

⚠️ Ne jamais committer `back/.env` : il est ignoré par git.
