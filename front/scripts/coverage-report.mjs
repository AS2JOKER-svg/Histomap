// Rapport de couverture : où manque-t-il des civilisations ?
//   1. Tableau région × siècle : nombre de civilisations actives (trous = cases vides).
//   2. Territoires des cartes historiques sans fiche, classés par nombre de cartes où ils apparaissent
//      (hors content/ignore-territories.json : chasseurs-cueilleurs génériques, colonies, micro-États…).
//
// Usage : npm run coverage   → résumé dans le terminal + rapport complet dans reports/couverture.md
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { PATHS, activeMapYears, assemble, ignoredTerritories, loadContent, loadMapIndex } from './lib/content.mjs'

const content = loadContent()
const { byId } = assemble(content)
const civs = [...byId.values()].map((r) => r.civ)
const regions = content.regions

// ── 1. Région × siècle ────────────────────────────────────────────────────────
// Colonnes : « avant -3000 » puis un siècle de -3000 à 2099 (le siècle -30 couvre -3000 → -2901).
const FIRST = -3000
const LAST = 2000
const centuries = []
for (let y = FIRST; y <= LAST; y += 100) centuries.push(y)
const centuryLabel = (y) => (y < 0 ? String(y / 100) : String(y / 100 + 1))
const covers = (civ, from, to) => civ.start < to && civ.end > from

const grid = regions.map((r) => {
  const mine = civs.filter((c) => c.region === r.id)
  return {
    region: r,
    total: mine.length,
    before: mine.filter((c) => c.start < FIRST).length,
    cells: centuries.map((y) => mine.filter((c) => covers(c, y, y + 100)).length),
  }
})

const cell = (n) => (n === 0 ? '·' : n < 10 ? String(n) : '+')
const W = Math.max(...regions.map((r) => r.id.length)) + 1
function gridText() {
  const scale = centuries.map((y, i) => (i % 5 === 0 ? centuryLabel(y).padEnd(5) : '')).join('')
  const lines = [`${''.padEnd(W)} <3k ${scale}`, `${''.padEnd(W)}     ${centuries.map((y, i) => (i % 5 === 0 ? '|' : ' ')).join('')}`]
  let continent = null
  for (const row of grid) {
    if (row.region.continent !== continent) lines.push(`── ${(continent = row.region.continent).toUpperCase()}`)
    lines.push(`${row.region.id.padEnd(W)}  ${cell(row.before)}  ${row.cells.map(cell).join('')}  (${row.total})`)
  }
  return lines.join('\n')
}

/** Siècles vides consécutifs d'une région : [[début, fin], …] (années). */
function holes(row) {
  const out = []
  let start = null
  row.cells.forEach((n, i) => {
    if (n === 0 && start === null) start = centuries[i]
    if (n !== 0 && start !== null) {
      out.push([start, centuries[i] - 1])
      start = null
    }
  })
  if (start !== null) out.push([start, LAST + 99])
  return out
}
const fmtRange = ([a, b]) => `${centuryLabel(a)}e → ${centuryLabel(b - 99)}e s.`.replaceAll('-', '−')

// ── 2. Territoires sans fiche ─────────────────────────────────────────────────
const mapIndex = loadMapIndex() ?? []
const mapYears = mapIndex.map((m) => m.year)
const ignored = ignoredTerritories(content)
const active = new Map(civs.map((c) => [c.id, new Set(activeMapYears(c, mapYears))]))
const byName = new Map()
for (const c of civs) for (const n of c.territories ?? []) byName.set(n, [...(byName.get(n) ?? []), c])
const linked = (name, year) => (byName.get(name) ?? []).some((c) => active.get(c.id).has(year))

const territories = new Map() // nom → { maps, without: [années], colonyOf: Set }
for (const m of mapIndex) {
  const topo = JSON.parse(readFileSync(join(PATHS.front, 'public', 'map', m.file), 'utf-8'))
  const seen = new Set()
  for (const g of topo.objects.world.geometries) {
    const { NAME, SUBJECTO } = g.properties ?? {}
    if (!NAME || seen.has(NAME)) continue
    seen.add(NAME)
    const t = territories.get(NAME) ?? { maps: 0, without: [], colonyOf: new Set() }
    territories.set(NAME, t)
    t.maps++
    if (linked(NAME, m.year)) continue
    // colonie d'une puissance qui a une fiche : affichée à sa couleur sur la carte
    if (SUBJECTO && SUBJECTO !== NAME && linked(SUBJECTO, m.year)) t.colonyOf.add(SUBJECTO)
    else t.without.push(m.year)
  }
}
const missing = [...territories.entries()]
  .filter(([name, t]) => t.without.length && !ignored.has(name))
  .map(([name, t]) => ({ name, ...t, never: t.without.length === t.maps }))
  .sort((a, b) => b.without.length - a.without.length || a.name.localeCompare(b.name))
const fmtYears = (ys) => (ys.length > 6 ? `${ys.slice(0, 3).join(', ')} … ${ys.slice(-2).join(', ')}` : ys.join(', '))

// ── Sorties ───────────────────────────────────────────────────────────────────
const emptyCells = grid.reduce((n, r) => n + r.cells.filter((x) => x === 0).length, 0)
const totalCells = grid.length * centuries.length
const tiers = [1, 2, 3].map((t) => `${civs.filter((c) => c.tier === t).length} de tier ${t}`).join(', ')
const occurrences = missing.reduce((n, t) => n + t.without.length, 0)

const md = [
  '# Rapport de couverture HistoMap',
  '',
  `_Généré par \`npm run coverage\` le ${new Date().toISOString().slice(0, 10)} : ne pas éditer._`,
  '',
  `**${civs.length} civilisations** (${tiers}) · **${regions.length} régions** · ` +
    `**${emptyCells} cases vides sur ${totalCells}** (région × siècle, de −30e à 21e s.) · ` +
    `**${missing.length} territoires de carte sans fiche** (${occurrences} apparitions sur ${mapIndex.length} cartes).`,
  '',
  '## 1. Région × siècle',
  '',
  'Nombre de civilisations actives par siècle (`·` = aucune, `+` = 10 ou plus). Repères tous les 5 siècles ; « <3k » = avant −3000.',
  '',
  '```',
  gridText(),
  '```',
  '',
  '### Trous par région',
  '',
  '| Région | Pays actuels | Fiches | Siècles vides |',
  '|---|---|---:|---|',
  ...grid.map((r) => `| ${r.region.label} | ${r.region.pays ?? ''} | ${r.total} | ${holes(r).map(fmtRange).join(' ; ') || '—'} |`),
  '',
  '## 2. Territoires des cartes sans fiche',
  '',
  'Classés par nombre de cartes où ils apparaissent sans fiche. « Jamais » = aucune carte ne les relie à une fiche ;',
  'sinon, ils sont reliés certaines années seulement. Les colonies d’une puissance qui a une fiche ne sont pas comptées',
  '(elles prennent sa couleur). Pour exclure volontairement un nom : `content/ignore-territories.json`.',
  '',
  '| # | Territoire | Cartes sans fiche | Sur | Années | Statut |',
  '|---:|---|---:|---:|---|---|',
  ...missing.map((t, i) => `| ${i + 1} | ${t.name} | ${t.without.length} | ${t.maps} | ${fmtYears(t.without)} | ${t.never ? 'jamais' : 'partiel'} |`),
  '',
]
mkdirSync(join(PATHS.front, 'reports'), { recursive: true })
const out = join(PATHS.front, 'reports', 'couverture.md')
writeFileSync(out, md.join('\n'))

console.log(`\n${civs.length} civilisations (${tiers}) · ${emptyCells}/${totalCells} cases région × siècle vides\n`)
console.log(gridText())
console.log(`\nTerritoires sans fiche : ${missing.length} (${missing.filter((t) => t.never).length} jamais reliés). Les 25 plus fréquents :`)
for (const t of missing.slice(0, 25)) console.log(`   ${String(t.without.length).padStart(3)} cartes · ${t.name}${t.never ? '' : ' (partiel)'}`)
console.log(`\nRapport complet : reports/couverture.md`)
