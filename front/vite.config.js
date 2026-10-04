import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Application 100 % front : les données sont chargées localement (src/data/epochs.json).
export default defineConfig({
  plugins: [react()],
  base: '/Histomap/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        // Fichiers séparés : une mise à jour du contenu ne force pas
        // le re-téléchargement des librairies (et inversement).
        manualChunks(id) {
          if (id.includes('src/data/')) return 'data'
          // d3 + topojson : chargés uniquement avec la carte
          if (/node_modules\/(d3-|topojson|delaunator|robust-predicates)/.test(id)) return 'map-vendor'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
