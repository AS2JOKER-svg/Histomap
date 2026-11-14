// Liste les territoires d'une carte historique dans une zone (utile pour les dossiers de guerre : carte.statuts).
// Usage : npm run zone -- <année> <ouest> <sud> <est> <nord>   (ex. npm run zone -- 1914 -12 28 60 72)
// Affiche : nom [métropole] (longitude, latitude du centre ; surface relative). Les tout petits morceaux sont omis.
import fs from 'fs'
import { feature } from 'topojson-client'
import { geoCentroid, geoArea } from 'd3-geo'
const [y, w, s, e, n] = process.argv.slice(2).map(Number)
const topo = JSON.parse(fs.readFileSync(`public/map/world_${y}.json`))
const fc = feature(topo, topo.objects.world)
const rows = []
for (const f of fc.features) { if (!f.geometry) continue; const polys = f.geometry.type==='MultiPolygon'?f.geometry.coordinates:[f.geometry.coordinates]; for (const c of polys) { const g={type:'Polygon',coordinates:c}; const [lon,lat]=geoCentroid(g); const a=geoArea(g)*1e4; if (lon>=w&&lon<=e&&lat>=s&&lat<=n&&a>0.3) rows.push(`${f.properties.NAME}${f.properties.SUBJECTO&&f.properties.SUBJECTO!==f.properties.NAME?' ['+f.properties.SUBJECTO+']':''} (${lon.toFixed(0)},${lat.toFixed(0)};${a.toFixed(0)})`) } }
console.log(y, [...new Set(rows)].sort().join(' | '))
