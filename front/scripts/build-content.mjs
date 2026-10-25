// Compile front/content/ → fichiers lus par le site (src/data/, GÉNÉRÉS : ne pas éditer, ignorés par git).
//
//   src/data/index.json         index léger chargé au démarrage : époques, continents et, pour chaque
//                               civilisation, ce qu'il faut pour la frise, les listes et l'aperçu
//   src/data/civs/<id>.json     détail d'une fiche (dates, dirigeants, textes…), chargé à la demande
//   src/data/entities/<id>.json fiches liées (personnes, événements, découvertes) + « apparaît dans »
//                               + « express » : les questions du quiz express (scripts/lib/express.mjs)
//   src/data/territories.json   civilisation → noms des territoires sur les cartes historiques
//   src/data/conflicts.json     guerres placées sur la carte
//   src/data/quiz-context.json  leurres des quiz (événements, dirigeants, personnages des autres fiches)
//   src/data/search.json        index de la recherche globale (chargé à l'ouverture de la recherche)
//   src/data/wars.json          toutes les guerres des fiches (onglet Guerres)
//   src/data/map-presence.json  années de carte où chaque civilisation a un territoire
//
// Usage : node scripts/build-content.mjs  (lancé par `npm run data`, `npm run dev` et `npm run build`)
// Tolérant : ce qui est incohérent est ignoré ici et signalé par scripts/validate-content.mjs.
import { mkdirSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'
import { PATHS, assemble, loadContent, loadMapIndex } from './lib/content.mjs'
import { expressQuestions } from './lib/express.mjs'
import { parseLinks, resolveLinks, stripLinks, stripLinksDeep } from '../src/lib/links.js'

const content = loadContent()
if (content.problems.length) {
  console.error(`❌ Contenu illisible :\n${content.problems.map((p) => `   · ${p}`).join('\n')}`)
  process.exit(1)
}
const { epochs, byId } = assemble(content)

// Champs de l'index léger (le reste part dans le détail, chargé à la demande)
const LIGHT = ['id', 'label', 'tier', 'region', 'period', 'start', 'end', 'color', 'trackId', 'row', 'isRiver', 'capitale', 'description', 'lineage']
const DETAIL = [
  'reperes', 'essentiel', 'datesCles', 'periodes', 'regimes', 'dynasties', 'dirigeants', 'personnages', 'guerres',
  'societe', 'economie', 'croyancesText', 'sciences', 'decouvertes', 'arts', 'quotidien', 'diplomatie', 'heritage', 'aSavoir',
  'documentaires', 'sources',
]
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
  for (const p of civ.periodes ?? []) for (const e of p.evenements ?? []) linkFrom(e.ref, 'civs', civ.id)
  for (const id of civ.decouvertes ?? []) linkFrom(id, 'civs', civ.id)
}
for (const [id, { data }] of content.entities) {
  const targets = [...textLinks(data), data.avant, data.apres, ...(data.liens ?? []).map((l) => l.ref), ...(data.chronologie ?? []).map((c) => c.ref)]
  for (const target of targets) if (target) linkFrom(target, byId.has(target) ? 'civs' : 'fiches', id)
}

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
      const detail = resolveDeep(pickFields(civ, DETAIL))
      // découvertes : id → { id, nom } (la fiche affiche le nom sans charger chaque découverte)
      if (detail.decouvertes) detail.decouvertes = detail.decouvertes.map((id) => ({ id, nom: labelOf(id) ?? id }))
      writeJson(`civs/${civ.id}.json`, detail)
      return {
        ...resolveDeep(pickFields(civ, LIGHT)),
        // petits points des dates clés sur la frise
        eventYears: (civ.datesCles ?? []).map((d) => d.annee),
      }
    }),
  })),
}))
const regions = Object.fromEntries(content.regions.map((r) => [r.id, r.label]))
writeJson('index.json', { stats, regions, epochs: index })

// Quiz express des fiches liées (texte brut : les questions n'affichent pas de liens)
const express = expressQuestions({ content, byId, backlinks })
// (moins de 2 questions sûres : pas de quiz express sur la fiche, ce n'est pas une erreur)
const expressCount = (n) => [...express.values()].filter((qs) => (n === 2 ? qs.length === 2 : n === 3 ? qs.length >= 3 : qs.length < 2)).length
console.log(`Quiz express : ${expressCount(3)} fiches à 3 questions, ${expressCount(2)} à 2, ${expressCount(0)} sans quiz (données trop floues)`)

// Référence affichable vers une autre fiche : { id, nom, type } (sans charger la fiche)
const refOf = (id) =>
  byId.has(id)
    ? { id, nom: byId.get(id).civ.label, type: 'civ' }
    : { id, nom: content.entities.get(id)?.data.nom ?? id, type: content.entities.get(id)?.type ?? null }
for (const [id, { type, data }] of content.entities) {
  const links = backlinks.get(id)
  const out = resolveDeep(data)
  for (const k of ['avant', 'apres']) if (out[k]) out[k] = refOf(out[k])
  if (out.liens) out.liens = out.liens.map((l) => ({ ...refOf(l.ref), relation: l.relation }))
  writeJson(`entities/${id}.json`, {
    ...out,
    type,
    apparaitDans: { civs: [...(links?.civs ?? [])], fiches: [...(links?.fiches ?? [])].map(refOf) },
    ...(express.get(id)?.length >= 2 ? { express: express.get(id) } : {}),
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
      // (même règle que src/lib/quiz.js : les dirigeants « clés » s'il y en a, sinon tous)
      const leaders = civ.dirigeants?.some((l) => l.cle) ? civ.dirigeants.filter((l) => l.cle) : civ.dirigeants ?? []
      for (const l of leaders) ctx.leaders.push({ civ: civ.id, nom: l.nom, titre: l.titre, surnom: l.surnom })
      for (const p of civ.personnages ?? []) quizContext.people.push({ civ: civ.id, nom: p.nom, role: p.role })
    }
}
writeJson('quiz-context.json', quizContext)

// ── Recherche globale ─────────────────────────────────────────────────────────
// Une entrée : { t: type, n: nom, s: sous-titre, y: année (tri), to: lien interne } + q : texte normalisé
// (minuscules, sans accents) où l'on cherche. Les personnes et événements qui n'ont pas encore de
// fiche liée renvoient vers la fiche de leur civilisation (onglet adapté).
const norm = (t) => stripLinks(String(t ?? '')).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const search = []
const add = (e, ...extra) => search.push({ ...e, q: norm([e.n, ...extra].join(' ')) })
const civPath = (id) => {
  const w = byId.get(id)
  return `/frise/${w.epoch.id}/${id}`
}
for (const { epoch, civ } of byId.values()) {
  add({ t: 'civ', id: civ.id, n: civ.label, s: `${civ.period} · ${epoch.label}`, y: civ.start, to: civPath(civ.id), c: civ.color }, civ.capitale)
  for (const p of civ.personnages ?? [])
    if (!p.ref) add({ t: 'personne', n: p.nom, s: `${p.role ?? ''} · ${civ.label}`, to: `${civPath(civ.id)}`, c: civ.color }, p.role)
  for (const l of civ.dirigeants ?? [])
    if (!l.personne) add({ t: 'personne', n: l.nom, s: `${l.titre} · ${civ.label}`, y: l.debut, to: `${civPath(civ.id)}?onglet=dirigeants`, c: civ.color }, l.surnom, l.titre)
  for (const d of civ.datesCles ?? [])
    if (!d.ref) add({ t: 'evenement', n: stripLinks(d.evenement), s: civ.label, y: d.annee, to: `${civPath(civ.id)}?onglet=histoire`, c: civ.color })
}
const dateOf = (d) => d.annee ?? d.naissance ?? null
for (const [id, { type, data }] of content.entities)
  add({ t: type, id, n: data.nom, s: data.dates ?? data.role ?? data.domaine ?? '', y: dateOf(data), to: `/fiche/${id}` }, data.nomComplet, data.role, data.description)

// ── Guerres : une entrée par guerre (même nom + même année = même guerre, vue des deux camps) ──
const wars = new Map()
// époque de la guerre = celle qui contient son année (pas celle de la fiche : la
// Première bataille de Panipat, 1526, racontée d'abord par le sultanat de Delhi, est moderne)
const epochOfYear = (year, fallback) =>
  year == null ? fallback : (epochs.find((e) => year >= e.start && year < e.end) ?? (year < epochs[0].start ? epochs[0] : epochs.at(-1))).id
for (const { epoch, civ } of byId.values())
  for (const g of civ.guerres ?? []) {
    const key = `${g.nom}|${g.annee ?? ''}`
    const war = wars.get(key) ?? {
      // camp = la première fiche qui raconte la guerre ; une 2e fiche (ex. Qadesh vue par les Hittites) est l'autre camp.
      // « camp » dans la fiche remplace son nom quand elle couvre plusieurs peuples (ex. Israël et Palestine)
      key, nom: g.nom, annee: g.annee ?? null, epoch: epochOfYear(g.annee, epoch.id), civs: [], camp: [g.camp ?? civ.label], adversaires: g.adversaires ?? [],
      allies: g.allies ?? [], vainqueur: stripLinks(g.vainqueur ?? ''), consequences: stripLinks(g.consequences ?? ''),
      morts: g.morts ?? '', wikiUrl: g.wikiUrl ?? null, coords: content.conflicts[g.nom]?.coords ?? null,
    }
    war.civs.push(civ.id)
    wars.set(key, war)
  }
const warList = [...wars.values()].sort((a, b) => (a.annee ?? 0) - (b.annee ?? 0))
writeJson('wars.json', warList)
for (const w of warList) add({ t: 'guerre', n: w.nom, s: [...w.camp, ...w.adversaires].join(' · ').slice(0, 90), y: w.annee, to: `/guerres?guerre=${encodeURIComponent(w.key)}` }, w.adversaires.join(' '), w.camp.join(' '))
writeJson('search.json', search)

console.log(
  `OK → ${stats.epochs} époques, ${stats.civs} civilisations (${content.lineages.length} lignées), ` +
    `${content.entities.size} fiches liées, ${warList.length} guerres, ${search.length} entrées de recherche → src/data/`
)
