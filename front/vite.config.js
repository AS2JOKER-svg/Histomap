import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

/**
 * Génère dist/licences.txt : les bibliothèques réellement incluses dans le build (paquets de node_modules),
 * avec leur version, leur licence et le texte de cette licence (les licences MIT, ISC et BSD demandent que
 * l'avis de copyright accompagne le code). Lien depuis Profil › Réglages › À propos et licences.
 */
function licences() {
  return {
    name: 'licences',
    apply: 'build',
    generateBundle(_, bundle) {
      const dossiers = new Set()
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== 'chunk') continue
        for (const id of Object.keys(chunk.modules)) {
          const chemin = id.replace(/^\0/, '').split('?')[0]
          const i = chemin.lastIndexOf('/node_modules/')
          if (i < 0) continue
          const reste = chemin.slice(i + '/node_modules/'.length).split('/')
          const nom = reste[0].startsWith('@') ? `${reste[0]}/${reste[1]}` : reste[0]
          dossiers.add(join(chemin.slice(0, i), 'node_modules', nom))
        }
      }
      const paquets = [...dossiers]
        .filter((d) => existsSync(join(d, 'package.json')))
        .map((d) => {
          const pkg = JSON.parse(readFileSync(join(d, 'package.json'), 'utf-8'))
          const fichier = readdirSync(d).find((f) => /^(licen[cs]e|copying)(\.|$)/i.test(f))
          const licence = typeof pkg.license === 'string' ? pkg.license : pkg.license?.type ?? 'licence non indiquée'
          return { nom: pkg.name, version: pkg.version, licence, texte: fichier ? readFileSync(join(d, fichier), 'utf-8').trim() : null }
        })
        .sort((a, b) => a.nom.localeCompare(b.nom))
      const trait = '='.repeat(72)
      const source = [
        'HistoMap — bibliothèques incluses dans l’application',
        `${paquets.length} paquets, liste générée au build. Cartes historiques, terres émergées et polices : voir`,
        'Profil › Réglages › À propos et licences.',
        '',
        ...paquets.flatMap((p) => [trait, `${p.nom} ${p.version} — ${p.licence}`, trait, p.texte ?? `(Le paquet ne contient pas le texte de sa licence : ${p.licence}.)`, '']),
      ].join('\n')
      this.emitFile({ type: 'asset', fileName: 'licences.txt', source })
    },
  }
}

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
  plugins: [react(), licences(), serviceWorker()], // licences avant le service worker : le fichier est mis en cache
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
