// Valide les chapitres rédigés à la main (src/data/revision/*.js) :
// structure des cartes, questions de quiz (bonne réponse existante, options
// uniques…), ids uniques, années de carte disponibles.
// Usage : node scripts/validate-revision.mjs  (lancé par `npm run validate`)
//         node scripts/validate-revision.mjs src/data/revision/x.js …  (fichiers précis,
//         même s'ils ne sont pas encore enregistrés dans index.js)
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join, resolve, basename } from 'path'
import { pathToFileURL } from 'url'
import { HANDWRITTEN as REGISTERED } from '../src/data/revision/index.js'

const files = process.argv.slice(2)
const HANDWRITTEN = files.length
  ? Object.fromEntries(await Promise.all(files.map(async (f) => [basename(f, '.js'), (await import(pathToFileURL(resolve(f)).href)).default])))
  : REGISTERED

const __dirname = dirname(fileURLToPath(import.meta.url))
const epochs = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'epochs.json'), 'utf-8'))
const mapYears = new Set(JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'map-years.json'), 'utf-8')))
const civIds = new Set(epochs.flatMap((e) => e.continents.flatMap((c) => c.civilizations.map((v) => v.id))))

const errors = []
const err = (where, msg) => errors.push(`${where} — ${msg}`)
const str = (v) => typeof v === 'string' && v.trim().length > 0
const num = (v) => typeof v === 'number' && Number.isFinite(v)

const CARD_FIELDS = {
  text: (c) => str(c.title) && str(c.body),
  keyfigure: (c) => str(c.value) && str(c.label),
  dates: (c) => str(c.title) && Array.isArray(c.items) && c.items.length >= 2 && c.items.every((i) => num(i.year) && str(i.label)),
  steps: (c) => str(c.title) && Array.isArray(c.items) && c.items.length >= 2 && c.items.every((i) => num(i.year) && str(i.label)),
  map: (c) => str(c.title) && Array.isArray(c.years) && c.years.length >= 1,
  war: (c) => str(c.nom),
  person: (c) => str(c.nom) && str(c.description),
  leaders: (c) => Array.isArray(c.items) && c.items.length >= 1,
}

let cards = 0
let questions = 0
for (const [civId, chapter] of Object.entries(HANDWRITTEN)) {
  const w = `revision/${civId}`
  if (!civIds.has(civId)) err(w, 'civilisation inconnue dans epochs.json')
  const ids = new Set()
  for (const c of chapter.cards ?? []) {
    cards++
    const cw = `${w}/carte « ${c.id} »`
    if (!str(c.id)) err(w, 'carte sans id')
    else if (ids.has(c.id)) err(cw, 'id dupliqué')
    ids.add(c.id)
    if (![1, 2].includes(c.tier)) err(cw, 'tier doit valoir 1 ou 2')
    if (!CARD_FIELDS[c.type]) err(cw, `type inconnu « ${c.type} »`)
    else if (!CARD_FIELDS[c.type](c)) err(cw, `champs manquants pour le type ${c.type}`)
    if (c.type === 'map') for (const y of c.years ?? []) if (!mapYears.has(y)) err(cw, `pas de carte historique pour l'année ${y}`)
  }
  if (!(chapter.cards ?? []).some((c) => c.tier === 1)) err(w, 'aucune carte de niveau 1')
  const qids = new Set()
  for (const q of chapter.quiz ?? []) {
    questions++
    const qw = `${w}/question « ${q.id} »`
    if (!str(q.id)) err(w, 'question sans id')
    else if (qids.has(q.id)) err(qw, 'id dupliqué')
    qids.add(q.id)
    if (!str(q.prompt)) err(qw, 'énoncé manquant')
    if (q.type === 'mcq') {
      if (!Array.isArray(q.options) || q.options.length < 3) err(qw, 'au moins 3 réponses')
      else if (new Set(q.options).size !== q.options.length) err(qw, 'réponses en double')
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options?.length ?? 0)) err(qw, `answer hors limites (${q.answer})`)
    } else if (q.type === 'tf') {
      if (typeof q.answer !== 'boolean') err(qw, 'answer doit être true ou false')
    } else if (q.type === 'order') {
      if (!Array.isArray(q.items) || q.items.length < 3) err(qw, 'au moins 3 éléments à ordonner')
      else if (new Set(q.items).size !== q.items.length) err(qw, 'éléments en double')
    } else err(qw, `type inconnu « ${q.type} »`)
  }
  for (const r of chapter.recap ?? []) if (!str(r)) err(w, 'point de bilan vide')
}

if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) dans les chapitres rédigés :`)
  for (const m of errors) console.error('   · ' + m)
  process.exit(1)
}
console.log(`✅ Chapitres rédigés valides : ${Object.keys(HANDWRITTEN).length} chapitres, ${cards} cartes, ${questions} questions.`)
