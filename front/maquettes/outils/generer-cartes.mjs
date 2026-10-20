// Génère les cartes SVG des maquettes à partir des VRAIES données (fonds historical-basemaps,
// territoires et couleurs des fiches de content/). Usage : node maquettes/outils/generer-cartes.mjs
// (depuis front/). Les SVG sont écrits dans maquettes/assets/ et suivent le thème clair/sombre du système.
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { geoGraticule10, geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { PATHS, activeMapYears, assemble, loadContent } from '../../scripts/lib/content.mjs'

const OUT = join(PATHS.front, 'maquettes', 'assets')
const { byId } = assemble(loadContent())
const mapIndex = JSON.parse(readFileSync(PATHS.mapIndex, 'utf-8'))
const years = mapIndex.map((m) => m.year)
const topo = (file) => JSON.parse(readFileSync(join(PATHS.front, 'public', 'map', file), 'utf-8'))
const land = (() => {
  const t = topo('land.json')
  return feature(t, t.objects.land)
})()

/** Civilisation (et colonie ?) d'un territoire pour une année — même règle que src/lib/map.js. */
function linker(year) {
  const byName = new Map()
  for (const { civ } of byId.values()) {
    if (!activeMapYears(civ, years).includes(year)) continue
    for (const n of civ.territories ?? []) {
      const prev = byName.get(n)
      if (!prev || civ.start > prev.start) byName.set(n, civ) // la plus récente gagne
    }
  }
  return (props) => byName.get(props.NAME) ?? (props.SUBJECTO !== props.NAME ? byName.get(props.SUBJECTO) : null) ?? null
}

const xml = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const STYLE = `<style>
  .sea{fill:#dfe9f3}.land{fill:#f4f1ea}.other{fill:#e6e0d4;stroke:#fff;stroke-width:.5}.grid{fill:none;stroke:rgba(60,90,130,.10);stroke-width:.6}
  .civ{stroke:#fff;stroke-width:.6}.dim{opacity:.55}.label{font:600 11px Inter,system-ui,sans-serif;fill:#fff;paint-order:stroke;stroke:rgba(0,0,0,.45);stroke-width:2.5px}
  @media (prefers-color-scheme: dark){.sea{fill:#0f1724}.land{fill:#1f2633}.other{fill:#2a3241;stroke:#121823}.civ{stroke:#121823}.grid{stroke:rgba(160,190,230,.07)}}
</style>`

function render({ file, year, width, height, focus, labels = [] }) {
  const t = topo(`world_${year}.json`)
  const features = feature(t, t.objects.world).features
  const link = linker(year)
  const projection = geoNaturalEarth1()
  if (focus) {
    const own = features.filter((f) => link(f.properties)?.id === focus)
    projection.fitExtent([[width * 0.1, height * 0.12], [width * 0.9, height * 0.88]], { type: 'FeatureCollection', features: own })
  } else projection.fitExtent([[4, 4], [width - 4, height - 4]], { type: 'Sphere' })
  const path = geoPath(projection)
  const round = (d) => d?.replace(/(\d+\.\d{1})\d+/g, '$1') ?? ''

  let body = `<rect class="sea" width="${width}" height="${height}"/>`
  body += `<path class="grid" d="${round(path(geoGraticule10()))}"/>`
  body += `<path class="land" d="${round(path(land))}"/>`
  const placed = new Map()
  for (const f of features) {
    const civ = link(f.properties)
    const d = round(path(f))
    if (!d) continue
    if (!civ) body += `<path class="other" d="${d}"/>`
    else {
      const dim = focus && civ.id !== focus ? ' dim' : ''
      body += `<path class="civ${dim}" fill="${civ.color}" d="${d}"><title>${xml(civ.label)}</title></path>`
      const area = path.area(f)
      if (!placed.has(civ.id) || placed.get(civ.id).area < area) placed.set(civ.id, { area, c: path.centroid(f), label: civ.label })
    }
  }
  for (const id of labels) {
    const p = placed.get(id)
    if (p) body += `<text class="label" x="${p.c[0].toFixed(1)}" y="${p.c[1].toFixed(1)}" text-anchor="middle">${xml(p.label)}</text>`
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="Carte du monde en ${year}">${STYLE}${body}</svg>\n`
  writeFileSync(join(OUT, file), svg)
  console.log(`${file} : ${(svg.length / 1024).toFixed(0)} Ko, ${[...placed.keys()].join(', ')}`)
}

render({ file: 'carte-monde-100.svg', year: 100, width: 390, height: 230, labels: ['rome', 'chine-imperiale'] })
render({ file: 'carte-rome-100.svg', year: 100, width: 358, height: 220, focus: 'rome', labels: ['rome'] })
render({ file: 'carte-rome--200.svg', year: -200, width: 358, height: 220, focus: 'rome', labels: ['rome', 'carthage'] })
render({ file: 'carte-rome-400.svg', year: 400, width: 358, height: 220, focus: 'rome', labels: ['rome'] })
