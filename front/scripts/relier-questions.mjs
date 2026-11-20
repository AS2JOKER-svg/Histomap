// Relie les questions rédigées à leur carte (V3.1, sprint 28) : pose le champ `carte` dans
// src/data/revision/<id>.js pour les questions qui ne l'ont pas encore.
//
// Proposition par rapprochement de texte (scripts/lib/rapprochement.mjs) : la carte du chapitre où la
// bonne réponse se lit le mieux (niveau 1 d'abord). Seules les liaisons SÛRES sont écrites ; les
// liaisons douteuses (« probable », « introuvable ») sont affichées pour être relues une par une, puis
// tranchées à la main dans le chapitre ou dans un fichier de décisions.
//
// Usage :
//   npm run relier                       → bilan, sans rien écrire (questions sans `carte` seulement)
//   npm run relier -- carthage nok       → détail des chapitres cités
//   npm run relier -- --ecrire           → écrit les liaisons sûres
//   npm run relier -- --decisions f.txt  → écrit des décisions relues, une par ligne :
//                                            civ/question = carte          (une carte)
//                                            civ/question = carte1,carte2  (il faut avoir lu les deux)
//                                            civ/question = -              (hors cartes : jamais posée dans l'Aventure)
//
// Format du champ (GUIDE_EDITION.md) : carte: 'id' | ['id1', 'id2'] | null.
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { HANDWRITTEN } from '../src/data/revision/index.js'
import { PATHS } from './lib/content.mjs'
import { indexer, proposer } from './lib/rapprochement.mjs'

const args = process.argv.slice(2)
const ecrire = args.includes('--ecrire')
const iDec = args.indexOf('--decisions')
const fichierDecisions = iDec >= 0 ? args[iDec + 1] : null
const cibles = args.filter((a, i) => !a.startsWith('--') && i !== iDec + 1)
const DIR = join(PATHS.data, 'revision')

/** Décisions relues : Map « civ/question » → valeur du champ (id, liste d'ids ou null). */
function lireDecisions(fichier) {
  const out = new Map()
  for (const ligne of readFileSync(fichier, 'utf8').split('\n')) {
    const m = /^\s*([a-z0-9-]+\/[a-z0-9-]+)\s*=\s*(.+?)\s*$/.exec(ligne)
    if (!m) continue
    const ids = m[2] === '-' ? [] : m[2].split(',').map((s) => s.trim()).filter(Boolean)
    out.set(m[1], ids.length === 0 ? null : ids.length === 1 ? ids[0] : ids)
  }
  return out
}

/** Écriture JS d'une valeur du champ `carte`. */
const enJs = (v) => (v === null ? 'null' : Array.isArray(v) ? `[${v.map((x) => `'${x}'`).join(', ')}]` : `'${v}'`)

/**
 * Pose `carte` sur des questions d'un chapitre, dans le fichier source (juste après l'id de la question).
 * Les questions sont écrites une par ligne : « { id: 'xxx', type: … } » dans le tableau `quiz`.
 */
function ecrireChapitre(civId, valeurs) {
  const fichier = join(DIR, `${civId}.js`)
  const src = readFileSync(fichier, 'utf8')
  const debut = src.indexOf('\n  quiz: [')
  const fin = src.indexOf('\n  ],', debut)
  if (debut < 0 || fin < 0) throw new Error(`${civId} : tableau quiz introuvable`)
  let quiz = src.slice(debut, fin)
  for (const [qid, v] of valeurs) {
    const re = new RegExp(`(\\{ id: '${qid}', )(?!carte:)`)
    if (!re.test(quiz)) throw new Error(`${civId} : question « ${qid} » introuvable (ou déjà reliée) dans le source`)
    quiz = quiz.replace(re, `$1carte: ${enJs(v)}, `)
  }
  writeFileSync(fichier, src.slice(0, debut) + quiz + src.slice(fin))
}

const decisions = fichierDecisions ? lireDecisions(fichierDecisions) : new Map()
const bilan = { deja: 0, sure: 0, probable: 0, introuvable: 0, decidees: 0 }
const aRelire = []
let ecrits = 0
for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
  if (cibles.length && !cibles.includes(civId)) continue
  const index = indexer(ch.cards)
  const titres = Object.fromEntries(ch.cards.map((c) => [c.id, `${c.id}(${c.tier})`]))
  const valeurs = new Map()
  for (const q of ch.quiz) {
    if ('carte' in q) {
      bilan.deja++
      continue
    }
    const cle = `${civId}/${q.id}`
    if (decisions.has(cle)) {
      bilan.decidees++
      valeurs.set(q.id, decisions.get(cle))
      continue
    }
    const p = proposer(index, q)
    bilan[p.statut]++
    if (p.statut === 'sure') valeurs.set(q.id, p.carte)
    else aRelire.push({ cle, q, p })
    if (cibles.includes(civId)) {
      const ou = p.analyse.parties.map((x) => x.candidats.map((c) => `${titres[c.id]} ${c.r.toFixed(2)}/${c.k.toFixed(2)}`).join(' | ')).join(' + ')
      console.log(`${q.id.padEnd(22)} [${p.statut}] → ${enJs(p.carte)}   ${ou}`)
    }
  }
  if ((ecrire || fichierDecisions) && valeurs.size) {
    // sans --ecrire, seules les décisions relues sont écrites
    const aEcrire = ecrire ? valeurs : new Map([...valeurs].filter(([qid]) => decisions.has(`${civId}/${qid}`)))
    if (aEcrire.size) {
      ecrireChapitre(civId, aEcrire)
      ecrits += aEcrire.size
    }
  }
}

const total = bilan.deja + bilan.sure + bilan.probable + bilan.introuvable + bilan.decidees
console.log(`\nQuestions : ${total} — déjà reliées ${bilan.deja}, décisions relues ${bilan.decidees}, sûres ${bilan.sure}, à relire ${bilan.probable + bilan.introuvable} (probables ${bilan.probable}, introuvables ${bilan.introuvable}).`)
if (aRelire.length && !cibles.length) {
  console.log('\nÀ relire une par une (`npm run relier -- <civ>` pour le détail), puis trancher dans le chapitre ou un fichier de décisions :')
  for (const { cle, p } of aRelire.slice(0, 40)) console.log(`  ${cle} [${p.statut}] → proposition ${enJs(p.carte)}`)
  if (aRelire.length > 40) console.log(`  … et ${aRelire.length - 40} autres`)
}
if (ecrits) console.log(`\n✏️  ${ecrits} champs « carte » écrits. Lancer ensuite npm run data.`)
