// Rapport des questions éclair (V3.1, sprints 26 et 28) : pour chaque salle, combien de questions rédigées
// portent sur les cartes de Découvrir (et sur la 1re moitié du paquet, pour la question du milieu)
// et sur celles d'Approfondir. Règle : src/lib/eclairs.js (champ `carte` de chaque question).
//
// Usage : node scripts/rapport-eclairs.mjs              → front/reports/questions-eclair.md
//         node scripts/rapport-eclairs.mjs carthage …   → détail question par question (console)
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { HANDWRITTEN } from '../src/data/revision/index.js'
import { choisirEclairs, estVue } from '../src/lib/eclairs.js'

const ici = (p) => new URL(p, import.meta.url)
const lignees = JSON.parse(readFileSync(ici('../content/lineages.json'), 'utf8'))
const parcours = JSON.parse(readFileSync(ici('../src/data/parcours.json'), 'utf8'))
const dansLignee = new Set(lignees.filter((l) => (l.members ?? []).length >= 2).flatMap((l) => l.members))
const tronc = new Set(parcours.mondes.flatMap((m) => m.tronc))
const ECLAIRS = { decouvrir: 3, approfondir: 5 }

/** Paquet d'une séance, comme lib/revision.js buildDeck (couverture, cartes, lignée, bilan). */
function paquet(civId, ch, tier) {
  const corps = ch.cards.filter((c) => c.tier === tier)
  return ['cover', ...corps.map((c) => c.id), ...(tier === 1 && dansLignee.has(civId) ? ['lineage'] : []), 'recap']
}
/** Cartes lues avant la question du milieu (comme SallePage : au-delà de 8 cartes de contenu). */
const milieuDe = (ids) => (ids.length - 2 > 8 ? Math.floor(ids.length / 2) : null)

const detail = process.argv.slice(2)
const lignes = []
const totaux = { salles: 0, q: 0, rattachees: 0, t1: 0, t2: 0, dec: [0, 0, 0, 0], milieuSans: 0, milieux: 0, app: [0, 0, 0, 0, 0, 0] }
for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
  const qs = ch.quiz.map((q) => ({ ...q, id: `hand-${q.id}` }))
  const tier = Object.fromEntries(ch.cards.map((c) => [c.id, c.tier]))
  const t1 = new Set(ch.cards.filter((c) => c.tier === 1).map((c) => c.id))
  const t2 = new Set(ch.cards.filter((c) => c.tier === 2).map((c) => c.id))
  const rattachees = qs.filter((q) => q.carte != null)
  const vuesT1 = qs.filter((q) => estVue(q, t1))
  const vuesT2 = qs.filter((q) => estVue(q, t2))
  const dec = paquet(civId, ch, 1)
  const app = paquet(civId, ch, 2)
  const m = milieuDe(dec)
  const choixDec = choisirEclairs({ questions: qs, paquet: dec, nombre: ECLAIRS.decouvrir, milieu: m, graine: civId })
  const choixApp = choisirEclairs({ questions: qs, paquet: app, nombre: ECLAIRS.approfondir, milieu: milieuDe(app), graine: civId })
  const nDec = choixDec.fin.length + (choixDec.milieu ? 1 : 0)
  const nApp = choixApp.fin.length + (choixApp.milieu ? 1 : 0)

  totaux.salles++
  totaux.q += qs.length
  totaux.rattachees += rattachees.length
  totaux.t1 += vuesT1.length
  totaux.t2 += vuesT2.length
  totaux.dec[nDec]++
  totaux.app[nApp]++
  if (m) {
    totaux.milieux++
    if (!choixDec.milieu) totaux.milieuSans++
  }
  lignes.push({ civId, tronc: tronc.has(civId), q: qs.length, rattachees: rattachees.length, t1: vuesT1.length, t2: vuesT2.length, nDec, milieu: m ? (choixDec.milieu ? 'oui' : 'aucune') : '—', nApp })

  if (detail.includes(civId)) {
    console.log(`\n── ${civId} : ${rattachees.length}/${qs.length} questions reliées ──`)
    for (const q of qs) {
      const l = q.carte == null ? null : [].concat(q.carte)
      const ou = l ? l.map((id) => `${id}(${tier[id]})`).join(' + ') : '— hors cartes'
      const rep = q.type === 'mcq' ? q.options[q.answer] : q.type === 'tf' ? String(q.answer) : q.items?.join(' → ')
      console.log(`${q.id.padEnd(22)} ${ou}\n   ${q.prompt} → ${rep}`)
    }
    console.log(`Découvrir (${dec.length} cartes, milieu après ${m ?? '—'}) : milieu = ${choixDec.milieu?.id ?? '—'} ; fin = ${choixDec.fin.map((q) => q.id).join(', ')}`)
    console.log(`Approfondir : ${choixApp.milieu ? `milieu = ${choixApp.milieu.id} ; ` : ''}fin = ${choixApp.fin.map((q) => q.id).join(', ')}`)
  }
}

const pc = (a, b) => `${Math.round((100 * a) / b)} %`
const md = [
  '# Questions éclair : questions qui se lisent dans les cartes de la séance',
  '',
  `Généré par \`npm run eclairs\` (sprints 26 et 28). Règle : une question éclair ne porte que sur une carte déjà lue dans la séance ; la question du milieu (au-delà de 8 cartes) ne porte que sur la 1re moitié du paquet. Chaque question rédigée porte sa carte (champ \`carte\`, \`src/lib/eclairs.js\`). S'il manque des questions, la séance en pose moins.`,
  '',
  '## Résumé',
  '',
  `- ${totaux.salles} salles, ${totaux.q} questions rédigées ; ${totaux.rattachees} reliées à une carte (${pc(totaux.rattachees, totaux.q)}) : ${totaux.t1} se lisent dans les cartes de Découvrir, ${totaux.t2} dans celles d'Approfondir.`,
  `- **Découvrir** (3 questions voulues) : ${totaux.dec[3]} salles à 3 questions, ${totaux.dec[2]} à 2, ${totaux.dec[1]} à 1, ${totaux.dec[0]} sans question.`,
  `- Question du milieu (${totaux.milieux} salles à plus de 8 cartes) : ${totaux.milieux - totaux.milieuSans} en ont une, ${totaux.milieuSans} sans (toutes les questions à la fin).`,
  `- **Approfondir** (5 questions voulues) : ${[5, 4, 3, 2, 1, 0].map((k) => `${totaux.app[k]} salles à ${k}`).join(', ')}.`,
  '',
  '## Par salle',
  '',
  '| Salle | Tronc | Questions | Reliées | Lisibles en Découvrir | Lisibles en Approfondir | Posées en Découvrir | Question du milieu | Posées en Approfondir |',
  '|---|---|---|---|---|---|---|---|---|',
  ...lignes.map((l) => `| ${l.civId} | ${l.tronc ? 'oui' : ''} | ${l.q} | ${l.rattachees} | ${l.t1} | ${l.t2} | ${l.nDec} / 3 | ${l.milieu} | ${l.nApp} / 5 |`),
  '',
]
mkdirSync(ici('../reports/'), { recursive: true })
writeFileSync(ici('../reports/questions-eclair.md'), md.join('\n'))
console.log(md.slice(4, 10).join('\n'))
console.log('→ reports/questions-eclair.md')
