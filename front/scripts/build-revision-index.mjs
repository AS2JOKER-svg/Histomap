// Génère, à partir des fichiers de src/data/revision/ :
//   - src/data/revision/index.js  : tous les chapitres (utilisé par le validateur Node) ;
//   - src/data/revision-meta.json : taille de chaque chapitre (cartes de niveau 1 et 2,
//     temps de lecture), pour afficher les listes sans charger les chapitres eux-mêmes.
// Ajouter un chapitre = créer src/data/revision/<id>.js : il est pris en compte ici.
// Usage : node scripts/build-revision-index.mjs  (lancé par `npm run data` et avant le build)
import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA = join(__dirname, '..', 'src', 'data')
const DIR = join(DATA, 'revision')

const epochs = JSON.parse(readFileSync(join(DATA, 'epochs.json'), 'utf-8'))
const order = []
const epochOf = {}
for (const e of epochs) for (const ct of e.continents) for (const c of ct.civilizations) {
  order.push(c.id)
  epochOf[c.id] = e.label
}

const ids = readdirSync(DIR).filter((f) => f.endsWith('.js') && f !== 'index.js').map((f) => f.slice(0, -3))
const unknown = ids.filter((id) => !order.includes(id))
if (unknown.length) {
  console.error(`❌ Chapitre(s) sans civilisation dans epochs.json : ${unknown.join(', ')}`)
  process.exit(1)
}
ids.sort((a, b) => order.indexOf(a) - order.indexOf(b))

const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase())
let out = `/**
 * GÉNÉRÉ par scripts/build-revision-index.mjs — ne pas éditer à la main.
 * Chapitres de révision rédigés à la main. Clé = id de la civilisation.
 * Le site charge chaque chapitre à la demande (src/lib/chapters.js) ;
 * ce fichier sert au validateur (scripts/validate-revision.mjs).
 */
`
out += ids.map((id) => `import ${camel(id)} from './${id}.js'`).join('\n') + '\n\nexport const HANDWRITTEN = {\n'
let current = null
for (const id of ids) {
  if (epochOf[id] !== current) out += `  // ${(current = epochOf[id])}\n`
  out += id.includes('-') ? `  '${id}': ${camel(id)},\n` : `  ${id},\n`
}
out += '}\n'
writeFileSync(join(DIR, 'index.js'), out)

const meta = {}
for (const id of ids) {
  const ch = (await import(pathToFileURL(join(DIR, `${id}.js`)).href)).default
  const cards = ch.cards ?? []
  meta[id] = {
    tier1: cards.filter((c) => c.tier === 1).length,
    tier2: cards.filter((c) => c.tier === 2).length,
    readingTime: ch.readingTime ?? null,
  }
}
writeFileSync(join(DATA, 'revision-meta.json'), JSON.stringify(meta) + '\n')
console.log(`OK → ${ids.length} chapitres rédigés indexés (index.js, revision-meta.json)`)
