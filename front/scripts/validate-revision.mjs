// Valide les chapitres rédigés à la main (src/data/revision/*.js) :
// structure des cartes, questions de quiz (bonne réponse existante, options
// uniques…), ids uniques, années de carte disponibles ;
// depuis le sprint 28 : chaque question porte `carte` (cartes existantes du chapitre, ou null = hors
// cartes), et chaque salle a assez de questions sur ses cartes de Découvrir (tronc ≥ 15, annexe ≥ 10 :
// rédigées + générées depuis les cartes, scripts/lib/questions-cartes.mjs).
// Usage : node scripts/validate-revision.mjs  (lancé par `npm run validate`)
//         node scripts/validate-revision.mjs src/data/revision/x.js …  (fichiers précis,
//         même s'ils ne sont pas encore enregistrés dans index.js)
import { readFileSync } from 'fs'
import { resolve, basename } from 'path'
import { pathToFileURL } from 'url'
import { HANDWRITTEN as REGISTERED } from '../src/data/revision/index.js'
import { PATHS, assemble, loadContent } from './lib/content.mjs'
import { SEUILS, bilanSalle, contexteQuestions } from './lib/questions-cartes.mjs'

const files = process.argv.slice(2)
const HANDWRITTEN = files.length
  ? Object.fromEntries(await Promise.all(files.map(async (f) => [basename(f, '.js'), (await import(pathToFileURL(resolve(f)).href)).default])))
  : REGISTERED

const mapYears = new Set(JSON.parse(readFileSync(PATHS.mapYears, 'utf-8')))
const civIds = new Set(assemble(loadContent()).byId.keys())

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

const ctx = contexteQuestions()
const str2 = (v) => typeof v === 'string' && /^[a-z0-9-]+$/.test(v)
let cards = 0
let questions = 0
let horsCartes = 0
let generees = 0
for (const [civId, chapter] of Object.entries(HANDWRITTEN)) {
  const w = `revision/${civId}`
  if (!civIds.has(civId)) err(w, 'civilisation inconnue (aucun fichier content/civs/ listé dans content/epochs.json)')
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
    // carte de la question : 'id' | ['id1', 'id2'] (il faut les avoir lues toutes) | null (hors cartes)
    if (!('carte' in q)) err(qw, 'champ « carte » manquant (npm run relier, puis relire)')
    else if (q.carte === null) horsCartes++
    else {
      const liste = Array.isArray(q.carte) ? q.carte : [q.carte]
      if (!liste.length || !liste.every(str2)) err(qw, `« carte » doit être un id, une liste d'ids ou null`)
      else if (new Set(liste).size !== liste.length) err(qw, 'carte en double dans « carte »')
      else for (const id of liste) if (!ids.has(id)) err(qw, `carte « ${id} » inconnue dans ce chapitre`)
    }
  }
  // assez de questions sur les cartes de Découvrir pour l'Épreuve (tronc) ou la mini-épreuve (annexe)
  const bilan = bilanSalle(civId, chapter, ctx)
  generees += bilan.questionsGenerees.length
  if (bilan.manque) {
    err(w, `${bilan.decouvrir} questions sur les cartes de Découvrir (${bilan.redigees.decouvrir} rédigées + ${bilan.generees.decouvrir} générées), il en faut ${bilan.seuil} pour ${bilan.tronc ? 'une salle du tronc' : 'une annexe'} : relier ou écrire des questions (npm run questions-cartes)`)
  }
  for (const r of chapter.recap ?? []) if (!str(r)) err(w, 'point de bilan vide')
}

if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) dans les chapitres rédigés :`)
  for (const m of errors) console.error('   · ' + m)
  process.exit(1)
}
console.log(`✅ Chapitres rédigés valides : ${Object.keys(HANDWRITTEN).length} chapitres, ${cards} cartes, ${questions} questions (${questions - horsCartes} reliées à une carte, ${horsCartes} hors cartes) + ${generees} générées depuis les cartes ; chaque salle a au moins ${SEUILS.tronc} (tronc) ou ${SEUILS.annexe} (annexe) questions sur ses cartes de Découvrir.`)
