/**
 * map.js — Données de la carte historique
 * ========================================
 *   MAP_YEARS                 années disponibles (une carte par année)
 *   loadSnapshot(year)        → Promise<FeatureCollection>  (mis en cache)
 *   loadLand()                → Promise<Feature>            (terres émergées)
 *   linkTerritory(props, y)   → { civ, epoch, continent, colony } | null
 *   conflictsAt(year)         → guerres à afficher sur la carte de cette année
 *   epochOfYear(year)         → époque contenant cette année
 */
import { feature } from 'topojson-client'
import MAP_YEARS from '../data/map-years.json'
import { TERRITORIES, CONFLICTS } from '../data/map-links.js'
import { getEpochs } from './data'

export { MAP_YEARS }

const BASE = `${import.meta.env.BASE_URL}map/`
const cache = new Map()

function fetchTopo(file) {
  if (!cache.has(file)) {
    const p = fetch(BASE + file)
      .then((r) => {
        if (!r.ok) throw new Error(`Carte introuvable : ${file}`)
        return r.json()
      })
      .catch((e) => {
        cache.delete(file) // permet de réessayer
        throw e
      })
    cache.set(file, p)
  }
  return cache.get(file)
}

export function loadSnapshot(year) {
  return fetchTopo(`world_${year}.json`).then((topo) => feature(topo, topo.objects.world))
}

export function loadLand() {
  return fetchTopo('land.json').then((topo) => feature(topo, topo.objects.land))
}

// ── Toutes les civilisations, à plat ──────────────────────────────────────────
const ALL = getEpochs().flatMap((epoch) =>
  epoch.continents.flatMap((continent) => continent.civilizations.map((civ) => ({ civ, epoch, continent })))
)

/**
 * Années de carte où chaque civilisation est « active » : celles comprises dans
 * sa période ; si aucune (civilisation brève), la carte la plus proche.
 */
const ACTIVE = new Map(
  ALL.map((ref) => {
    const { start, end } = ref.civ
    let years = MAP_YEARS.filter((y) => y >= start && y <= end)
    if (!years.length) {
      const dist = (y) => (y < start ? start - y : y - end)
      years = [MAP_YEARS.reduce((best, y) => (dist(y) < dist(best) ? y : best))]
    }
    return [ref.civ.id, new Set(years)]
  })
)

// nom de territoire → civilisations candidates
const BY_NAME = new Map()
for (const ref of ALL) {
  for (const name of TERRITORIES[ref.civ.id] ?? []) {
    if (!BY_NAME.has(name)) BY_NAME.set(name, [])
    BY_NAME.get(name).push(ref)
  }
}

function pick(name, year) {
  const refs = (BY_NAME.get(name) ?? []).filter((r) => ACTIVE.get(r.civ.id).has(year))
  // Deux civilisations se passent le relais la même année (ex. France 1492) :
  // on garde la plus récente.
  return refs.sort((a, b) => b.civ.start - a.civ.start)[0] ?? null
}

/** Civilisation HistoMap correspondant à un territoire de la carte de `year`. */
export function linkTerritory(props, year) {
  const direct = pick(props.NAME, year)
  if (direct) return { ...direct, colony: false }
  if (props.SUBJECTO && props.SUBJECTO !== props.NAME) {
    const ruler = pick(props.SUBJECTO, year)
    if (ruler) return { ...ruler, colony: true }
  }
  return null
}

/**
 * Comme linkTerritory, mais du point de vue d'une civilisation donnée (mini-cartes
 * d'un chapitre) : si elle peut revendiquer ce territoire cette année-là, on la
 * préfère à la plus récente (ex. Songhaï et Songhaï « apogée » en 1492).
 */
export function linkTerritoryFor(props, year, civId) {
  // (pas de filtre de période : les années proposées viennent de map-presence.json,
  // où le territoire existe ; ex. Ibères, visibles seulement sur la carte de -700)
  const mine = (name) => (BY_NAME.get(name) ?? []).find((r) => r.civ.id === civId)
  const direct = mine(props.NAME)
  if (direct) return { ...direct, colony: false }
  if (props.SUBJECTO && props.SUBJECTO !== props.NAME) {
    const ruler = mine(props.SUBJECTO)
    if (ruler) return { ...ruler, colony: true }
  }
  return linkTerritory(props, year)
}

/**
 * Guerres affichées sur la carte de `year` : chaque guerre apparaît sur la
 * carte la plus proche de sa date (entre les deux milieux d'intervalles).
 */
const WARS = ALL.flatMap((ref) =>
  (ref.civ.guerres ?? [])
    .filter((g) => CONFLICTS[g.nom] && typeof g.annee === 'number')
    .map((g) => ({ ...g, coords: CONFLICTS[g.nom], ref }))
)

export function conflictsAt(year) {
  const i = MAP_YEARS.indexOf(year)
  const from = i > 0 ? (MAP_YEARS[i - 1] + year) / 2 : -Infinity
  const to = i < MAP_YEARS.length - 1 ? (year + MAP_YEARS[i + 1]) / 2 : Infinity
  const seen = new Set()
  return WARS.filter((w) => {
    if (w.annee <= from || w.annee > to) return false
    // même guerre vue des deux camps (ex. Qadesh) : un seul point
    const key = `${w.nom}|${w.annee}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function epochOfYear(year) {
  const epochs = getEpochs()
  return epochs.find((e) => year >= e.start && year < e.end) ?? (year < epochs[0].start ? epochs[0] : epochs[epochs.length - 1])
}

/** Carte la plus proche d'une année quelconque. */
export function nearestMapYear(year) {
  return MAP_YEARS.reduce((best, y) => (Math.abs(y - year) < Math.abs(best - year) ? y : best))
}
