// Cherche des noms de territoires dans les cartes historiques (public/map/index.json), pour remplir
// le champ `territories` d'une fiche de civilisation.
//
// Usage : npm run territoires -- huns khazar "golden horde"
//   → pour chaque nom trouvé : années des cartes où il apparaît + fiche(s) qui l'utilisent déjà.
// La recherche ignore majuscules et accents ; chaque terme est cherché séparément.
import { assemble, loadContent, loadMapIndex } from './lib/content.mjs'

const terms = process.argv.slice(2)
if (!terms.length) {
  console.log('Usage : npm run territoires -- <terme> [<terme>…]   (ex. npm run territoires -- huns "golden horde")')
  process.exit(0)
}
const mapIndex = loadMapIndex()
if (!mapIndex) {
  console.error('❌ public/map/index.json introuvable (lancer `npm run map`)')
  process.exit(1)
}
const norm = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

// nom de territoire → années / fiches qui l'utilisent
const years = new Map()
for (const m of mapIndex) for (const n of m.names) years.set(n, [...(years.get(n) ?? []), m.year])
const { byId } = assemble(loadContent())
const usedBy = new Map()
for (const { civ } of byId.values()) for (const n of civ.territories ?? []) usedBy.set(n, [...(usedBy.get(n) ?? []), civ.id])

const fmt = (y) => (y < 0 ? `${-y} av. J.-C.` : String(y))
for (const term of terms) {
  const hits = [...years.keys()].filter((n) => norm(n).includes(norm(term))).sort()
  console.log(`\n« ${term} » : ${hits.length ? `${hits.length} territoire(s)` : 'aucun territoire'}`)
  for (const n of hits) {
    const ys = years.get(n).sort((a, b) => a - b)
    const span = ys.length > 6 ? `${ys.slice(0, 3).map(fmt).join(', ')} … ${ys.slice(-2).map(fmt).join(', ')}` : ys.map(fmt).join(', ')
    const owner = usedBy.get(n)
    console.log(`  · ${n}  —  ${ys.length} carte(s) : ${span}${owner ? `  [déjà relié : ${owner.join(', ')}]` : ''}`)
  }
}
