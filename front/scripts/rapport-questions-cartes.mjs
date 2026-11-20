// Rapport des questions reliées aux cartes (V3.1, sprint 28) → front/reports/questions-cartes.md
// Pour chaque salle : questions rédigées sur les cartes de Découvrir / d'Approfondir / hors cartes,
// questions générées depuis les cartes, total posable à l'Épreuve sans Approfondir face au seuil
// (tronc 15, annexe 10), cartes de Découvrir sans aucune question. Sert aux sprints de contenu (34A…).
// Avant / après : questions lisibles dans les cartes selon le rapprochement automatique du sprint 26
// (scripts/lib/rapprochement.mjs) puis selon le champ `carte` relu.
//
// Usage : npm run questions-cartes              → rapport complet
//         npm run questions-cartes -- carthage  → questions générées d'une salle (console, pour relecture)
import { mkdirSync, writeFileSync } from 'fs'
import { HANDWRITTEN } from '../src/data/revision/index.js'
import { estVue } from '../src/lib/eclairs.js'
import { bilanSalle, contexteQuestions, SEUILS } from './lib/questions-cartes.mjs'
import { rattacher } from './lib/rapprochement.mjs'

const ici = (p) => new URL(p, import.meta.url)
const ctx = contexteQuestions()
const detail = process.argv.slice(2)

const lignes = []
const horsCartes = []
const tot = { salles: 0, red: 0, redD: 0, redA: 0, hors: 0, gen: 0, genD: 0, genA: 0, sous: 0, sansQ: 0, avantD: 0, avantA: 0 }
const parSorte = {}
for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
  const b = bilanSalle(civId, ch, ctx)
  // avant (sprint 26) : rattachement par rapprochement de texte, posable si toutes ses parties se lisent au niveau voulu
  const t1 = new Set(ch.cards.filter((c) => c.tier === 1).map((c) => c.id))
  const tous = new Set(ch.cards.map((c) => c.id))
  const liens = rattacher(ch.cards, ch.quiz)
  const avantLisible = (lues) => ch.quiz.filter((q) => liens.get(q.id)?.every((ids) => ids.some((id) => lues.has(id)))).length
  const avantD = avantLisible(t1)
  const avantA = avantLisible(tous) - avantD
  const apresD = ch.quiz.filter((q) => estVue(q, t1)).length
  tot.salles++
  tot.red += ch.quiz.length
  tot.redD += b.redigees.decouvrir
  tot.redA += b.redigees.approfondir
  tot.hors += b.redigees.horsCartes
  tot.gen += b.questionsGenerees.length
  tot.genD += b.generees.decouvrir
  tot.genA += b.generees.approfondir
  tot.avantD += avantD
  tot.avantA += avantA
  if (b.manque) tot.sous++
  tot.sansQ += b.cartesSansQuestion.length
  for (const q of b.questionsGenerees) {
    const sorte = q.id.match(/-(annee|evenement|ordre|qui|vainqueur)(-|$)/)?.[1] ?? 'autre'
    parSorte[sorte] = (parSorte[sorte] ?? 0) + 1
  }
  for (const q of ch.quiz.filter((x) => x.carte === null)) horsCartes.push({ civId, q })
  lignes.push({ ...b, avantD, avantA, apresD })

  if (detail.includes(civId)) {
    console.log(`\n── ${civId} : ${b.decouvrir} questions sur les cartes de Découvrir (seuil ${b.seuil}) ──`)
    for (const q of b.questionsGenerees) {
      const rep = q.type === 'mcq' ? q.options.join(' | ') : q.type === 'tf' ? String(q.answer) : q.items.join(' → ')
      console.log(`${q.id} (${ch.cards.find((c) => c.id === q.carte).tier})\n   ${q.prompt}\n   → ${rep}`)
    }
  }
}

const pc = (a, b) => `${Math.round((100 * a) / b)} %`
const marges = lignes.map((l) => l.decouvrir - l.seuil).sort((a, b) => a - b)
const rep = (q) => (q.type === 'mcq' ? q.options[q.answer] : q.type === 'tf' ? (q.answer ? 'vrai' : 'faux') : q.items.join(' → '))
const md = [
  '# Questions reliées aux cartes',
  '',
  `Généré par \`npm run questions-cartes\` (sprint 28). Règle (V3.1, décisions 8 et 9) : toute question porte sur une carte déjà vue. Chaque question rédigée porte le champ \`carte\` (posé par \`npm run relier\`, liaisons douteuses relues une par une) ; des questions sont aussi **générées depuis les données des cartes** (\`src/lib/questionsCartes.js\`). Seuils vérifiés par \`npm run validate\` : au moins **${SEUILS.tronc}** questions sur les cartes de Découvrir pour une salle du tronc (Épreuve de 12 + marge), **${SEUILS.annexe}** pour une annexe (mini-épreuve de 8 + marge).`,
  '',
  '## Résumé',
  '',
  `- ${tot.salles} salles, ${tot.red} questions rédigées : ${tot.redD} sur les cartes de Découvrir, ${tot.redA} sur celles d'Approfondir, **${tot.hors} hors cartes** (réponse dans aucune carte : jamais posées dans l'Aventure, liste plus bas).`,
  `- ${tot.gen} questions générées depuis les cartes : ${tot.genD} sur les cartes de Découvrir, ${tot.genA} sur celles d'Approfondir — ${Object.entries(parSorte).map(([k, n]) => `${n} ${{ annee: '« en quelle année »', evenement: '« que se passe-t-il »', ordre: 'ordre chronologique', qui: '« qui est-ce ? »', vainqueur: 'vainqueur (vrai / faux)' }[k] ?? k}`).join(', ')}.`,
  `- **Salles sous le seuil : ${tot.sous}**. Marge au-dessus du seuil : de ${marges[0]} à ${marges[marges.length - 1]} (médiane ${marges[marges.length >> 1]}).`,
  `- ${tot.sansQ} cartes de Découvrir (hors cartes de territoire) sans aucune question : pistes pour de nouvelles questions.`,
  `- **Avant / après** (questions rédigées posables) : sur les cartes de Découvrir, ${tot.avantD} avec le rapprochement automatique du sprint 26 → **${tot.redD}** avec le champ \`carte\` relu (${pc(tot.redD, tot.red)} des questions) ; sur celles d'Approfondir, ${tot.avantA} → ${tot.redA}. Les ids des questions n'ont pas changé.`,
  '',
  '## Par salle',
  '',
  'Colonnes : cartes de Découvrir / d’Approfondir ; questions rédigées sur Découvrir / Approfondir / hors cartes ; générées sur Découvrir / Approfondir ; **total posable à l’Épreuve sans Approfondir** face au seuil ; rédigées lisibles en Découvrir avant (sprint 26) → après.',
  '',
  '| Salle | Tronc | Cartes | Rédigées | Générées | Découvrir / seuil | Avant → après | Cartes de Découvrir sans question |',
  '|---|---|---|---|---|---|---|---|',
  ...lignes.map(
    (l) =>
      `| ${l.civId} | ${l.tronc ? 'oui' : ''} | ${l.cartes1} / ${l.cartes2} | ${l.redigees.decouvrir} / ${l.redigees.approfondir} / ${l.redigees.horsCartes} | ${l.generees.decouvrir} / ${l.generees.approfondir} | ${l.manque ? '❌ ' : ''}**${l.decouvrir}** / ${l.seuil} | ${l.avantD} → ${l.apresD} | ${l.cartesSansQuestion.join(', ')} |`
  ),
  '',
  `## Questions hors cartes (${horsCartes.length})`,
  '',
  'Leur réponse ne se lit dans aucune carte du chapitre : elles ne sont jamais posées dans l’Aventure. À reprendre dans un sprint de contenu : ajouter l’information à une carte (puis relier la question), ou réécrire la question sur une carte (même id).',
  '',
  ...horsCartes.map(({ civId, q }) => `- \`${civId}/${q.id}\` : ${q.prompt} → ${rep(q)}`),
  '',
]
mkdirSync(ici('../reports/'), { recursive: true })
writeFileSync(ici('../reports/questions-cartes.md'), md.join('\n'))
console.log(md.slice(4, 10).join('\n'))
console.log('→ reports/questions-cartes.md')
