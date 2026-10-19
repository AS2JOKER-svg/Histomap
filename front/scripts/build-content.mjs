// Compile front/content/ → fichiers lus par le site (src/data/, GÉNÉRÉS : ne pas éditer, ignorés par git).
//
//   src/data/index.json         index léger chargé au démarrage : époques, continents et, pour chaque
//                               civilisation, ce qu'il faut pour la frise, les listes et l'aperçu
//   src/data/civs/<id>.json     détail d'une fiche (dates, dirigeants, textes…), chargé à la demande
//   src/data/entities/<id>.json fiches liées (personnes, événements, découvertes) + « apparaît dans »
//   src/data/territories.json   civilisation → noms des territoires sur les cartes historiques
//   src/data/conflicts.json     guerres placées sur la carte
//   src/data/quiz-context.json  leurres des quiz (événements, dirigeants, personnages des autres fiches)
//   src/data/map-presence.json  années de carte où chaque civilisation a un territoire
//
// Usage : node scripts/build-content.mjs  (lancé par `npm run data`, `npm run dev` et `npm run build`)
// Tolérant : ce qui est incohérent est ignoré ici et signalé par scripts/validate-content.mjs.
import { mkdirSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'
import { PATHS, assemble, loadContent, loadMapIndex } from './lib/content.mjs'
import { parseLinks, resolveLinks, stripLinks, stripLinksDeep } from '../src/lib/links.js'

const content = loadContent()
if (content.problems.length) {
  console.error(`❌ Contenu illisible :\n${content.problems.map((p) => `   · ${p}`).join('\n')}`)
  process.exit(1)
}
const { epochs, byId } = assemble(content)

// Champs de l'index léger (le reste part dans le détail, chargé à la demande)
const LIGHT = ['id', 'label', 'tier', 'region', 'period', 'start', 'end', 'color', 'trackId', 'row', 'isRiver', 'capitale', 'description', 'lineage']
const DETAIL = ['datesCles', 'dirigeants', 'dynasties', 'personnages', 'guerres', 'sciences', 'croyancesText', 'diplomatie', 'documentaires', 'sources']
const pickFields = (obj, keys) => Object.fromEntries(keys.filter((k) => obj[k] !== undefined).map((k) => [k, obj[k]]))

// ── Liens [[id]] : nom affiché + « apparaît dans » ─────────────────────────────
const labelOf = (id) => byId.get(id)?.civ.label ?? content.entities.get(id)?.data.nom
const resolveDeep = (v) =>
  typeof v === 'string' ? resolveLinks(v, labelOf)
  : Array.isArray(v) ? v.map(resolveDeep)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, resolveDeep(x)]))
  : v

const backlinks = new Map() // id cible → { civs: Set, fiches: Set }
const linkFrom = (target, kind, sourceId) => {
  if (!target || target === sourceId) return
  if (!backlinks.has(target)) backlinks.set(target, { civs: new Set(), fiches: new Set() })
  backlinks.get(target)[kind].add(sourceId)
}
const textLinks = (v, out = []) => {
  if (typeof v === 'string') for (const p of parseLinks(v)) p.id !== undefined && out.push(p.id)
  else if (v && typeof v === 'object') for (const x of Object.values(v)) textLinks(x, out)
  return out
}
for (const { civ } of byId.values()) {
  for (const id of textLinks(pickFields(civ, [...LIGHT, ...DETAIL]))) linkFrom(id, 'civs', civ.id)
  for (const p of civ.personnages ?? []) linkFrom(p.ref, 'civs', civ.id)
  for (const d of civ.dirigeants ?? []) linkFrom(d.personne, 'civs', civ.id)
  for (const d of civ.datesCles ?? []) linkFrom(d.ref, 'civs', civ.id)
}
for (const [id, { data }] of content.entities) for (const target of textLinks(data)) linkFrom(target, 'fiches', id)

// ── Écriture ──────────────────────────────────────────────────────────────────
const D = PATHS.data
const writeJson = (file, value) => writeFileSync(join(D, file), JSON.stringify(value) + '\n')
for (const dir of ['civs', 'entities']) {
  rmSync(join(D, dir), { recursive: true, force: true })
  mkdirSync(join(D, dir), { recursive: true })
}

const stats = { epochs: epochs.length, civs: 0, events: 0, people: 0, wars: 0 }
const index = epochs.map(({ continents, ...meta }) => ({
  ...meta,
  continents: continents.map(({ civilizations, ...ct }) => ({
    ...ct,
    civilizations: civilizations.map((civ) => {
      stats.civs++
      stats.events += civ.datesCles?.length ?? 0
      stats.people += civ.personnages?.length ?? 0
      stats.wars += civ.guerres?.length ?? 0
      writeJson(`civs/${civ.id}.json`, resolveDeep(pickFields(civ, DETAIL)))
      return {
        ...resolveDeep(pickFields(civ, LIGHT)),
        // petits points des dates clés sur la frise
        eventYears: (civ.datesCles ?? []).map((d) => d.annee),
      }
    }),
  })),
}))
writeJson('index.json', { stats, epochs: index })

for (const [id, { type, data }] of content.entities) {
  const links = backlinks.get(id)
  writeJson(`entities/${id}.json`, {
    ...resolveDeep(data),
    type,
    apparaitDans: { civs: [...(links?.civs ?? [])], fiches: [...(links?.fiches ?? [])] },
  })
}

// ── Carte : territoires, conflits, présence ───────────────────────────────────
const territories = {}
for (const { civ } of byId.values()) if (civ.territories?.length) territories[civ.id] = civ.territories
writeJson('territories.json', territories)

const conflicts = []
for (const { civ } of byId.values())
  for (const g of civ.guerres ?? [])
    if (content.conflicts[g.nom] && typeof g.annee === 'number')
      conflicts.push({ ...stripLinksDeep(g), coords: content.conflicts[g.nom].coords, civId: civ.id })
writeJson('conflicts.json', conflicts)

const mapIndex = loadMapIndex()
if (mapIndex) {
  const presence = {}
  for (const { civ } of byId.values()) {
    const names = new Set(civ.territories ?? [])
    if (!names.size) continue
    const years = mapIndex.filter((m) => m.names.some((n) => names.has(n))).map((m) => m.year)
    const inside = years.filter((y) => y >= civ.start && y <= civ.end)
    // période sans carte (civilisation brève) : la carte la plus proche où elle apparaît
    const dist = (y) => (y < civ.start ? civ.start - y : y - civ.end)
    const picked = inside.length ? inside : years.length ? [years.reduce((b, y) => (dist(y) < dist(b) ? y : b))] : []
    if (picked.length) presence[civ.id] = picked
  }
  writeJson('map-presence.json', presence)
} else console.warn('⚠️  public/map/index.json introuvable : map-presence.json non régénéré (lancer `npm run map`)')

// ── Quiz : leurres tirés des autres fiches (texte brut, sans liens) ────────────
const quizContext = { epochs: {}, people: [] }
for (const epoch of epochs) {
  const ctx = (quizContext.epochs[epoch.id] = { events: [], leaders: [] })
  for (const ct of epoch.continents)
    for (const civ of ct.civilizations) {
      for (const d of civ.datesCles ?? []) ctx.events.push({ civ: civ.id, evenement: stripLinks(d.evenement) })
      for (const l of civ.dirigeants ?? []) ctx.leaders.push({ civ: civ.id, nom: l.nom, titre: l.titre, surnom: l.surnom })
      for (const p of civ.personnages ?? []) quizContext.people.push({ civ: civ.id, nom: p.nom, role: p.role })
    }
}
writeJson('quiz-context.json', quizContext)

console.log(
  `OK → ${stats.epochs} époques, ${stats.civs} civilisations (${content.lineages.length} lignées), ` +
    `${content.entities.size} fiches liées, ${conflicts.length} conflits sur la carte → src/data/`
)
