// Génère les fonds de carte historiques dans public/map/ à partir du projet
// open source « historical-basemaps » (A. Ourednik, licence GPL-3.0).
//
//   node scripts/build-map.mjs            → télécharge (si besoin) + simplifie
//
// Sorties (commitées : le build du site n'a pas besoin du réseau) :
//   public/map/world_<année>.json   TopoJSON simplifié, 1 fichier par instantané
//   public/map/land.json            terres émergées (Natural Earth 1:110m, domaine public)
//   public/map/index.json           années + noms des territoires (names) et puissances dominantes (powers)
//   public/map/LICENSE, NOTICE.md   licence et attribution des données
//   src/data/map-years.json         liste des années (utilisée par le curseur de la carte)
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, statSync } from 'fs'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CACHE = join(ROOT, '.cache', 'historical-basemaps')
const OUT = join(ROOT, 'public', 'map')
const RAW = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master'
const SIMPLIFY = '5%'

mkdirSync(CACHE, { recursive: true })
mkdirSync(OUT, { recursive: true })

async function download(path, dest) {
  if (existsSync(dest)) return
  const res = await fetch(`${RAW}/${path}`)
  if (!res.ok) throw new Error(`Téléchargement impossible : ${path} (${res.status})`)
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()))
}

await download('index.json', join(CACHE, 'index.json'))
await download('LICENSE', join(OUT, 'LICENSE'))
const { years } = JSON.parse(readFileSync(join(CACHE, 'index.json'), 'utf-8'))

const index = []
for (const { year, filename } of years) {
  const src = join(CACHE, filename)
  await download(`geojson/${filename}`, src)
  const dest = join(OUT, `world_${year}.json`)
  execFileSync(
    'npx',
    [
      'mapshaper', src,
      '-filter', 'NAME != null && NAME !== ""',
      '-filter-fields', 'NAME,SUBJECTO,PARTOF',
      '-simplify', SIMPLIFY, 'keep-shapes',
      '-clean',
      '-rename-layers', 'world',
      '-o', dest, 'format=topojson', 'quantization=1e5',
    ],
    { stdio: 'pipe', cwd: ROOT }
  )
  const topo = JSON.parse(readFileSync(dest, 'utf-8'))
  const geoms = topo.objects.world.geometries
  const uniq = (key) => [...new Set(geoms.map((g) => g.properties?.[key]).filter(Boolean))].sort()
  const names = uniq('NAME')
  const powers = uniq('SUBJECTO').filter((s) => !names.includes(s))
  index.push({ year, file: `world_${year}.json`, names, powers })
  console.log(`  ${String(year).padStart(7)}  ${(statSync(dest).size / 1024).toFixed(0).padStart(5)} Ko  ${names.length} entités`)
}

copyFileSync(join(ROOT, 'node_modules', 'world-atlas', 'land-110m.json'), join(OUT, 'land.json'))
writeFileSync(join(OUT, 'index.json'), JSON.stringify(index))
// Liste légère des années, embarquée dans le site (curseur temporel)
writeFileSync(join(ROOT, 'src', 'data', 'map-years.json'), JSON.stringify(index.map((m) => m.year)) + '\n')
writeFileSync(
  join(OUT, 'NOTICE.md'),
  `# Données cartographiques

- **Frontières historiques** : [historical-basemaps](https://github.com/aourednik/historical-basemaps)
  par André Ourednik et contributeurs — licence GPL-3.0 (voir LICENSE).
  Fichiers simplifiés (${SIMPLIFY}) et convertis en TopoJSON par \`scripts/build-map.mjs\`.
- **Terres émergées** : Natural Earth 1:110m via [world-atlas](https://github.com/topojson/world-atlas) — domaine public.

Les frontières anciennes sont approximatives : à vérifier avant tout usage académique.
`
)
console.log(`\nOK → ${index.length} cartes écrites dans public/map/`)
