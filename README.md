# HistoMap

Site pour apprendre l'histoire des civilisations : une **frise** interactive, une **carte du monde** dans le temps et un espace de **révision** avec fiches et quiz.

Inspiré du célèbre *Histomap* de John B. Sparks (1931).

## Les sections

| URL | Section | État |
|---|---|---|
| `#/` | Accueil : « Continuer », recherche, portes d'entrée, progression | ✅ |
| `#/frise` | Frise des 5 époques | ✅ |
| `#/frise/:epoque` | Une époque : continents et civilisations | ✅ |
| `#/frise/:epoque/:civilisation` | Fiche détaillée (6 onglets : `?onglet=histoire`, `dirigeants`…) | ✅ |
| `#/carte` | Carte du monde : 54 cartes de -123 000 à 2010, conflits, fiches | ✅ |
| `#/guerres` | Guerres, par époque, camp contre camp | ✅ |
| `#/recherche` | Recherche globale (civilisations, personnes, événements, guerres, découvertes) | ✅ |
| `#/fiche/:id` | Fiche liée : personne, événement, découverte | ✅ |
| `#/reviser` | Réviser : époque → civilisation → cartes de révision → quiz de 20 questions | ✅ |

## Structure

```
histomap/
├── CLAUDE.md                    ← contexte et règles pour l'agent IA
├── front/                       ← Le site (React 18 + Vite + Tailwind)
│   ├── content/                 ← SOURCE de tout le contenu (JSON, à éditer)
│   │   ├── epochs.json          ← plan : époques → continents → ids des civilisations
│   │   ├── civs/<id>.json       ← une fiche par civilisation
│   │   ├── people/ events/ discoveries/  ← fiches liées (personnes, événements, découvertes)
│   │   └── lineages, regions, conflicts, ignore-territories.json
│   ├── scripts/
│   │   ├── build-content.mjs    ← compile content/ → src/data/ (généré)
│   │   ├── validate-content.mjs ← vérifie le contenu avant chaque build
│   │   ├── validate-revision.mjs← vérifie les chapitres et quiz rédigés
│   │   ├── coverage-report.mjs  ← rapport de couverture (trous région × siècle)
│   │   └── build-map.mjs        ← génère les fonds de carte (public/map/)
│   ├── src/
│   │   ├── App.jsx              ← plan du site (routes)
│   │   ├── layouts/AppShell.jsx ← en-tête, barre d'onglets mobile
│   │   ├── pages/               ← une page par écran
│   │   ├── components/          ← composants partagés (ui/ = briques de base)
│   │   ├── lib/                 ← accès aux données, temps, stockage, vibrations
│   │   ├── store/               ← état global (thème, interface, progression)
│   │   └── data/                ← GÉNÉRÉ depuis content/ (sauf revision/<id>.js : chapitres rédigés)
│   └── GUIDE_EDITION.md         ← comment ajouter du contenu
└── .github/workflows/deploy.yml ← déploiement GitHub Pages à chaque push sur main
```

## Démarrer

Prérequis : Node.js 18+ (20 recommandé).

```bash
cd front && npm ci && cd ..   # installe les dépendances (une fois)
npm run dev                    # http://localhost:5173/Histomap/ (marche aussi depuis front/)
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Compile le contenu puis lance le serveur de développement |
| `npm run data` | Compile `content/` → `src/data/` puis valide tout |
| `npm run validate` | Valide seulement le contenu et les chapitres |
| `npm run coverage` | Rapport de couverture → `front/reports/couverture.md` |
| `npm run map` | Régénère les fonds de carte depuis historical-basemaps (réseau requis, rarement utile) |
| `npm run build` | Valide puis construit le site dans `dist/` |
| `npm run preview` | Sert le build localement |

## Carte du monde

- **Frontières** : projet [historical-basemaps](https://github.com/aourednik/historical-basemaps) (André Ourednik, **licence GPL-3.0**), simplifiées et converties en TopoJSON dans `front/public/map/` (fichiers séparés du code, avec `LICENSE` et `NOTICE.md`).
- **Lien carte ↔ fiches** : champ `territories` de chaque fiche (`front/content/civs/`) + `front/content/conflicts.json` (lieu des guerres).

## Progression

Fiches lues, dernier endroit consulté (« Reprendre » sur l'accueil), série de jours : tout est enregistré **dans le navigateur** (`localStorage`, clé `histomap_progress`). Rien n'est envoyé sur un serveur ; en contrepartie, la progression ne se synchronise pas entre appareils.

## Application installable et hors ligne

HistoMap est une PWA : sur téléphone, « Installer l'application » (Android) ou « Partager → Sur l'écran d'accueil » (iPhone) l'ajoute comme une appli. Après la première visite, le site, les fiches, les révisions et les quiz fonctionnent **sans réseau** ; les fonds de carte se téléchargent à la demande (bouton « Carte du monde hors ligne » sur l'accueil). Quand une nouvelle version est publiée, un bandeau propose de la charger.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : installation, génération + validation des données, build, puis publication sur GitHub Pages.

## Pas de serveur

Toutes les données sont dans le dépôt (`front/content/`), compilées au build : le site est entièrement statique, sans API ni clé secrète.
