# Histomap

Visualisation interactive de la puissance des civilisations à travers l'histoire, inspirée du célèbre Histomap de John B. Sparks.

## Structure

```
histomap/
├── front/                  ← React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Timeline.jsx        ← La frise principale
│   │   │   ├── EpochView.jsx       ← Vue par époque
│   │   │   ├── ContinentView.jsx   ← Vue par continent
│   │   │   └── CountryCard.jsx     ← Fiche pays
│   │   ├── data/
│   │   │   └── epochs.json         ← Toutes les époques mockées
│   │   ├── store/
│   │   │   └── navigation.js       ← Zustand (état navigation)
│   │   └── App.jsx
├── back/                   ← Hono + Bun
│   ├── index.ts
│   └── routes/
│       └── history.ts      ← Route qui appelle Mistral
└── README.md
```

## Prérequis

- [Bun](https://bun.sh) (backend)
- Node.js 18+ (frontend)

## Installation

```bash
# Backend
cd back
bun install

# Frontend
cd front
npm install
```

## Lancement

```bash
# Terminal 1 — API (port 3000)
cd back
bun run dev

# Terminal 2 — Frontend (port 5173)
cd front
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## API Mistral (optionnel)

Pour enrichir les fiches pays avec une analyse générée par IA :

```bash
export MISTRAL_API_KEY=votre_clé
cd back && bun run dev
```

Sans clé API, le backend retourne un texte mocké.

## Navigation

1. **Frise** — Cliquez sur une époque pour l'explorer
2. **Époque** — Barres de puissance + accès par continent
3. **Continent** — Liste des civilisations du continent
4. **Fiche pays** — Détails + analyse historique (Mistral ou mock)

## Endpoints

| Route | Méthode | Description |
|-------|---------|-------------|
| `/health` | GET | Santé de l'API |
| `/api/history/enrich` | POST | Analyse historique d'un pays/époque |
