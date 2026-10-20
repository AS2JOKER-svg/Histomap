// Lecture et assemblage du contenu (front/content/), partagés par :
//   build-content.mjs (compile vers src/data/), validate-content.mjs,
//   coverage-report.mjs, build-revision-index.mjs et validate-revision.mjs.
//
// content/
//   epochs.json               époques → continents → ids des civilisations (ordre d'affichage)
//   civs/<id>.json            une fiche par civilisation
//   people/<id>.json          fiches liées : personnes
//   events/<id>.json          fiches liées : événements
//   discoveries/<id>.json     fiches liées : découvertes, inventions, œuvres
//   lineages.json             même civilisation sur plusieurs époques (couleur commune, « La suite »)
//   regions.json              régions actuelles normalisées (champ `region` des fiches)
//   conflicts.json            lieu des guerres sur la carte (nom exact de la guerre → coordonnées)
//   ignore-territories.json   territoires des cartes volontairement sans fiche
import { existsSync, readFileSync, readdirSync } from 'fs'
import { basename, dirname, join, relative, resolve } from 'path'
import { fileURLToPath } from 'url'

const FRONT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')

export const PATHS = {
  front: FRONT,
  // HISTOMAP_CONTENT : autre dossier de contenu (tests du validateur)
  content: process.env.HISTOMAP_CONTENT ? resolve(process.env.HISTOMAP_CONTENT) : join(FRONT, 'content'),
  data: join(FRONT, 'src', 'data'),
  mapIndex: join(FRONT, 'public', 'map', 'index.json'),
  mapYears: join(FRONT, 'src', 'data', 'map-years.json'),
}

/** Types de fiches liées : type → dossier de content/. */
export const ENTITY_TYPES = {
  personne: 'people',
  evenement: 'events',
  decouverte: 'discoveries',
}

export const rel = (file) => relative(FRONT, file)

/**
 * Lit tout content/. Ne lève jamais d'exception : un fichier illisible est
 * signalé dans `problems` (le validateur les affiche comme erreurs).
 */
export function loadContent(dir = PATHS.content) {
  const problems = []
  const readJson = (file, { required = false, fallback = null } = {}) => {
    if (!existsSync(file)) {
      if (required) problems.push(`${rel(file)} — fichier manquant`)
      return fallback
    }
    try {
      return JSON.parse(readFileSync(file, 'utf-8'))
    } catch (e) {
      problems.push(`${rel(file)} — JSON invalide : ${e.message}`)
      return fallback
    }
  }
  const readDir = (sub) => {
    const folder = join(dir, sub)
    if (!existsSync(folder)) return []
    return readdirSync(folder)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => ({ file: `${sub}/${f}`, name: basename(f, '.json'), data: readJson(join(folder, f)) }))
      .filter((x) => x.data !== null)
  }

  const civs = new Map()
  for (const { file, name, data } of readDir('civs')) civs.set(name, { file, data })

  const entities = new Map() // id → { type, file, data } (les doublons d'id sont signalés par le validateur)
  const entityFiles = []
  for (const [type, sub] of Object.entries(ENTITY_TYPES)) {
    for (const { file, name, data } of readDir(sub)) {
      entityFiles.push({ type, file, name, data })
      if (!entities.has(name)) entities.set(name, { type, file, data })
    }
  }

  return {
    dir,
    problems,
    epochs: readJson(join(dir, 'epochs.json'), { required: true, fallback: [] }),
    regions: readJson(join(dir, 'regions.json'), { required: true, fallback: [] }),
    lineages: readJson(join(dir, 'lineages.json'), { fallback: [] }),
    conflicts: readJson(join(dir, 'conflicts.json'), { fallback: {} }),
    ignoreTerritories: readJson(join(dir, 'ignore-territories.json'), { fallback: [] }),
    civs,
    entities,
    entityFiles,
  }
}

/**
 * Assemble époques + fiches dans l'ordre d'affichage, avec les lignées
 * (couleur commune + liens « avant / la suite »). Tolérant : ce qui est
 * incohérent est ignoré ici et signalé par le validateur.
 *   → { epochs: [{ ...époque, continents: [{ id, label, civilizations: [civ] }] }],
 *       byId: Map civId → { epoch, continent, civ } }
 */
export function assemble(content) {
  const byId = new Map()
  const epochs = content.epochs.map((ep) => {
    const { continents = [], ...meta } = ep
    const epoch = { ...meta, continents: [] }
    for (const ct of continents) {
      const continent = { id: ct.id, label: ct.label, civilizations: [] }
      for (const civId of ct.civs ?? []) {
        const src = content.civs.get(civId)?.data
        if (!src || byId.has(civId)) continue
        const civ = structuredClone(src)
        continent.civilizations.push(civ)
        byId.set(civId, { epoch, continent, civ })
      }
      epoch.continents.push(continent)
    }
    return epoch
  })

  const ref = (id) => {
    const w = byId.get(id)
    return { epochId: w.epoch.id, epochLabel: w.epoch.label, civId: id, label: w.civ.label }
  }
  for (const lineage of content.lineages) {
    const members = (lineage.members ?? []).filter((id) => byId.has(id))
    members.forEach((id, i) => {
      const { civ } = byId.get(id)
      if (civ.lineage) return
      civ.color = lineage.color
      civ.lineage = {
        id: lineage.id,
        label: lineage.label,
        prev: i > 0 ? ref(members[i - 1]) : null,
        next: i < members.length - 1 ? ref(members[i + 1]) : null,
        members: members.map(ref),
      }
    })
  }
  return { epochs, byId }
}

/** Index des cartes historiques : [{ year, file, names, powers }] (null si absent). */
export function loadMapIndex() {
  return existsSync(PATHS.mapIndex) ? JSON.parse(readFileSync(PATHS.mapIndex, 'utf-8')) : null
}

/**
 * Années de carte où une civilisation est « active » : celles de sa période,
 * sinon (civilisation brève) la carte la plus proche. Même règle que src/lib/map.js.
 */
export function activeMapYears(civ, years) {
  const inside = years.filter((y) => y >= civ.start && y <= civ.end)
  if (inside.length || !years.length) return inside
  const dist = (y) => (y < civ.start ? civ.start - y : y - civ.end)
  return [years.reduce((best, y) => (dist(y) < dist(best) ? y : best))]
}

/** Noms des territoires volontairement sans fiche (content/ignore-territories.json). */
export function ignoredTerritories(content) {
  return new Set(content.ignoreTerritories.flatMap((group) => group.noms ?? []))
}
