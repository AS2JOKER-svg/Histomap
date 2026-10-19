import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, readdirSync } from 'fs'
import { createHash } from 'crypto'

/**
 * Génère dist/sw.js (service worker) à partir de sw/sw.js : la liste des fichiers
 * à mettre en cache est celle du build, et la version change à chaque contenu différent.
 */
function serviceWorker() {
  return {
    name: 'service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = [
        './',
        './index.html',
        './manifest.webmanifest',
        ...readdirSync('public/icons').map((f) => `./icons/${f}`),
        './map/index.json',
        './map/land.json',
        ...Object.keys(bundle).filter((f) => !f.endsWith('.map')).map((f) => `./${f}`),
      ]
      const unique = [...new Set(files)].sort()
      const version = createHash('sha1').update(unique.join('|')).digest('hex').slice(0, 10)
      const source = readFileSync('sw/sw.js', 'utf-8')
        .replace('__VERSION__', version)
        .replace('__PRECACHE__', JSON.stringify(unique, null, 2))
      this.emitFile({ type: 'asset', fileName: 'sw.js', source })
    },
  }
}

// Application 100 % front : les données sont chargées localement (src/data/, généré depuis content/).
export default defineConfig({
  plugins: [react(), serviceWorker()],
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
          // Données du démarrage (index léger des fiches, années des cartes…) : un seul fichier.
          // Le reste de src/data/ suit la page qui l'utilise : détail des fiches et chapitres
          // (un fichier chacun, chargés à la demande par lib/data.js et lib/chapters.js),
          // territoires et conflits (avec la carte), leurres des quiz (avec le quiz).
          if (/src\/data\/(index|map-years|map-presence|revision-meta)\.json$/.test(id)) return 'data'
          // d3 + topojson : chargés uniquement avec la carte
          if (/node_modules\/(d3-|topojson|delaunator|robust-predicates)/.test(id)) return 'map-vendor'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
