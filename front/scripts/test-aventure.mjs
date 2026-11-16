// Tests des règles de l'Aventure (src/lib/aventure.js, src/lib/xp.js) et du validateur du parcours.
// Lancé par `npm run validate` (donc par `npm run data` et `npm run build`).
import assert from 'node:assert/strict'
import { readFileSync } from 'fs'
import { loadContent } from './lib/content.mjs'
import { loadParcours, validateParcours } from './lib/parcours.mjs'
import { MEDAILLE, createParcours, etapeDuJour, listeARevoir, etoiles, mondeOuvert, ouverture, avancementMonde, titresObtenus } from '../src/lib/aventure.js'
import { aventureVide, enregistrerActivite, finOnboarding, gagnerXp, migrerV2, terminerEpreuve, terminerEtape, xpReponses, lundi } from '../src/lib/progression.js'
import { lienDefi, lireDefi, nouvelleGraine, questionsDefi, verdict } from '../src/lib/defi.js'
import { emplacementsJokers, gainReponse, niveau, petitCoffre, prochaineRecompense, rang, recompensesNiveau, seuilNiveau } from '../src/lib/xp.js'
import { choisirEclairs, estVue } from '../src/lib/eclairs.js'
import { campVainqueur, cartesDe, masquerNom, questionsDesCartes, sansDate } from '../src/lib/questionsCartes.js'
import { formatYear } from '../src/lib/time.js'
import { indexer, memeMot, mots, proposer } from './lib/rapprochement.mjs'
import { noteQuiz, premiereSansReponse } from '../src/lib/questions.js'
import { HANDWRITTEN } from '../src/data/revision/index.js'

let n = 0
const test = (nom, fn) => {
  try {
    fn()
    n++
  } catch (e) {
    console.error(`❌ ${nom}\n   ${e.message}`)
    process.exit(1)
  }
}

const data = JSON.parse(readFileSync(new URL('../src/data/parcours.json', import.meta.url)))
const P = createParcours(data)
const { BRONZE, ARGENT, OR } = MEDAILLE
const etat = (entries) => Object.fromEntries(entries.map(([id, medaille, extra]) => [id, { medaille, ...extra }]))
const tronc = (w) => data.mondes[w].tronc
const toutLeTronc = (m) => data.mondes.flatMap((x) => x.tronc).map((id) => [id, m])

// ── Parcours ──────────────────────────────────────────────────────────────────
test('le parcours contient les 214 civilisations, une seule fois', () => {
  assert.equal(P.ordre.length, 214)
  assert.equal(new Set(P.ordre).size, 214)
  assert.equal(data.mondes.flatMap((m) => m.tronc).length, 51)
})

test('au départ : seule la 1re salle du 1er monde est ouverte', () => {
  const ouvertes = P.ordre.filter((id) => ouverture(P, {}, id).ouvert)
  assert.deepEqual(ouvertes, [tronc(0)[0]])
  assert.deepEqual(ouverture(P, {}, tronc(0)[1]).raison, { type: 'salle', id: tronc(0)[0] })
  assert.deepEqual(ouverture(P, {}, 'mesopotamie').raison, { type: 'monde', monde: 0 })
  assert.deepEqual(ouverture(P, {}, 'sahara-pasteurs').raison, { type: 'parent', id: 'hominides-est' })
  assert.deepEqual(etapeDuJour(P, {}), { civId: 'hominides-est', etape: 'decouvrir', raison: 'tronc' })
})

test('le bronze ouvre la salle suivante et les branches rattachées', () => {
  const s = etat([['hominides-est', BRONZE]])
  assert.ok(ouverture(P, s, 'europe-paleo').ouvert)
  assert.ok(ouverture(P, s, 'sahara-pasteurs').ouvert)
  assert.ok(!ouverture(P, s, 'aborigenes-australie').ouvert)
  assert.deepEqual(etapeDuJour(P, s), { civId: 'hominides-est', etape: 'approfondir', raison: 'tronc' })
})

test('un monde s’ouvre quand tout le tronc précédent a l’argent (pas avant)', () => {
  const presque = etat(tronc(0).map((id, i) => [id, i === 4 ? BRONZE : ARGENT]))
  assert.ok(!mondeOuvert(P, presque, 1))
  const ok = etat(tronc(0).map((id) => [id, ARGENT]))
  assert.ok(mondeOuvert(P, ok, 1))
  assert.ok(ouverture(P, ok, 'mesopotamie').ouvert)
  assert.ok(!ouverture(P, ok, 'egypte').ouvert)
  // l'étape du jour suit la boucle de la salle : l'épreuve de la 1re salle avant la salle suivante
  assert.deepEqual(etapeDuJour(P, ok), { civId: 'hominides-est', etape: 'epreuve', raison: 'tronc' })
  const raté = { ...ok, 'hominides-est': { medaille: ARGENT, essais: 1, meilleur: 12 } }
  assert.equal(etapeDuJour(P, raté).civId, 'europe-paleo') // épreuve ratée : on passe à la salle suivante
})

test('fil rouge : l’Empire d’Éthiopie demande Aksoum, qui demande Koush', () => {
  const tousOuverts = etat(toutLeTronc(ARGENT))
  assert.deepEqual(ouverture(P, tousOuverts, 'ethiopie-contemp').raison, { type: 'parent', id: 'aksoum' })
  assert.deepEqual(ouverture(P, tousOuverts, 'aksoum').raison, { type: 'parent', id: 'koush' })
  const avecAksoum = { ...tousOuverts, ...etat([['koush', BRONZE], ['aksoum', BRONZE]]) }
  assert.ok(ouverture(P, avecAksoum, 'ethiopie-contemp').ouvert)
})

test('étape du jour : reprendre, retenter une épreuve, puis une branche', () => {
  const base = etat(toutLeTronc(OR))
  assert.equal(etapeDuJour(P, { ...base, carthage: { medaille: ARGENT, enCours: 'epreuve' } }).raison, 'reprendre')
  assert.deepEqual(etapeDuJour(P, { ...base, rome: { medaille: ARGENT, essais: 1, meilleur: 12 } }), { civId: 'rome', etape: 'epreuve', raison: 'retenter' })
  const d = etapeDuJour(P, base)
  assert.equal(d.raison, 'branche')
  assert.equal(d.etape, 'decouvrir')
})

test('erreurs à revoir : proposées dans l’étape du jour (≥ 5 ou 3 jours), une fois par jour', () => {
  const now = Date.UTC(2026, 10, 20)
  const jour = 86400000
  const chapters = { carthage: { toReview: ['a', 'b'], finishedAt: now - jour }, rome: { toReview: ['x'], finishedAt: now - 4 * jour } }
  const quizzes = { carthage: { failed: ['q1', 'q2', 'q3'], lastAt: now - jour } }
  const liste = listeARevoir(chapters, quizzes, now)
  assert.deepEqual(liste.find((r) => r.civId === 'carthage'), { civId: 'carthage', nb: 5, jours: 1 })
  assert.deepEqual(liste.find((r) => r.civId === 'rome'), { civId: 'rome', nb: 1, jours: 4 })
  assert.deepEqual(etapeDuJour(P, {}, { aRevoir: liste }), { civId: 'carthage', etape: 'a-revoir', raison: 'a-revoir', nb: 5 })
  assert.equal(etapeDuJour(P, {}, { aRevoir: liste, revisionFaite: true }).etape, 'decouvrir') // déjà faite aujourd'hui
  assert.equal(etapeDuJour(P, {}, { aRevoir: [{ civId: 'egypte', nb: 2, jours: 1 }] }).etape, 'decouvrir') // pas encore dû
})

test('avancement d’un monde et titres de collection', () => {
  const s = etat([...tronc(0).map((id) => [id, OR]), ['egypte', OR], ['mamelouks', OR], ['egypte-contemp', OR]])
  const a = avancementMonde(P, s, 0)
  assert.equal(a.salles, 5)
  assert.equal(a.or, 5)
  const titres = titresObtenus(P, s).map((t) => t.titre)
  assert.ok(titres.includes('Grand savant de la Préhistoire'))
  assert.ok(titres.includes('Plus érudit qu’un scribe de pharaon'))
  assert.ok(!titres.includes('Encyclopédie ambulante'))
})

// ── XP et niveaux ─────────────────────────────────────────────────────────────
test('combo : 10, 15, 20, 25 puis 30 XP au maximum ; moitié en rejeu', () => {
  assert.deepEqual([1, 2, 3, 4, 5, 9].map((s) => gainReponse(s)), [10, 15, 20, 25, 30, 30])
  assert.equal(gainReponse(5, { rejeu: true }), 15)
})

test('niveaux : 100 × n XP pour passer du niveau n au suivant, maximum 50', () => {
  assert.equal(seuilNiveau(2), 100)
  assert.equal(seuilNiveau(10), 4500)
  assert.equal(seuilNiveau(13), 7800)
  assert.deepEqual(niveau(0), { niveau: 1, rang: 'Curieux', dansNiveau: 0, pourSuivant: 100, max: false })
  assert.deepEqual(niveau(7910), { niveau: 13, rang: 'Explorateur', dansNiveau: 110, pourSuivant: 1300, max: false })
  assert.equal(niveau(10 ** 7).niveau, 50)
  assert.equal(niveau(10 ** 7).max, true)
  assert.equal(rang(50), 'Légende de l’Histoire')
})

test('récompenses de niveau, jokers, étoiles, coffres', () => {
  assert.equal(recompensesNiveau(13)[0].id, 'sceau:rose-des-vents')
  assert.equal(prochaineRecompense(13).niveau, 14)
  assert.equal(recompensesNiveau(21)[0].type, 'coffre')
  for (let k = 2; k <= 20; k++) assert.ok(recompensesNiveau(k).length, `niveau ${k} sans récompense`)
  assert.deepEqual([14, 15, 35].map(emplacementsJokers), [2, 3, 4])
  assert.deepEqual([14, 15, 16, 17, 18, 19, 20].map(etoiles), [0, 1, 1, 2, 2, 3, 3])
  assert.deepEqual(petitCoffre('carthage'), petitCoffre('carthage'))
  assert.ok([25, 50, 100].includes(petitCoffre('x').xp))
})

// ── Progression (lib/progression.js) ──────────────────────────────────────────
const J = (n) => new Date(Date.UTC(2026, 10, 2 + n)).toISOString().slice(0, 10) // J(0) = lundi 2 novembre 2026
const types = (ev) => ev.map((e) => e.type)

test('série : jours consécutifs, jour manqué, joker, record', () => {
  let av = aventureVide()
  av = enregistrerActivite(av, J(0)).av
  av = enregistrerActivite(av, J(1)).av
  assert.equal(av.serie.jours, 2)
  assert.equal(enregistrerActivite(av, J(1)).av.serie.jours, 2) // même jour : rien ne change
  const perdu = enregistrerActivite(av, J(3)).av // J(2) manqué, aucun joker
  assert.deepEqual([perdu.serie.jours, perdu.serie.record], [1, 2])
  const sauve = enregistrerActivite({ ...av, serie: { ...av.serie, jokers: 1 } }, J(3))
  assert.deepEqual([sauve.av.serie.jours, sauve.av.serie.jokers], [3, 0])
  assert.ok(types(sauve.evenements).includes('joker-utilise'))
})

test('série : un joker tous les 7 jours, coffre aux paliers (une seule fois)', () => {
  let av = aventureVide()
  let coffres = 0
  for (let i = 0; i < 7; i++) {
    const r = enregistrerActivite(av, J(i))
    av = r.av
    coffres += r.evenements.filter((e) => e.type === 'coffre' && e.sorte === 'serie').length
  }
  assert.equal(av.serie.jours, 7)
  assert.equal(coffres, 2) // paliers 3 et 7
  assert.ok(av.serie.jokers >= 1)
})

test('Découvrir : bronze, 40 XP + éclairs + bonus du jour, salles ouvertes ; rejouer = 10 XP', () => {
  const r = terminerEtape(aventureVide(), P, 'hominides-est', 'decouvrir', { eclairs: 3 }, J(0))
  assert.equal(r.av.salles['hominides-est'].medaille, BRONZE)
  assert.equal(r.av.xp, 40 + 15 + 20)
  const ouv = r.evenements.find((e) => e.type === 'ouverture')
  assert.ok(ouv.salles.includes('europe-paleo') && ouv.salles.includes('sahara-pasteurs'))
  const r2 = terminerEtape(r.av, P, 'hominides-est', 'decouvrir', { eclairs: 3 }, J(0))
  assert.equal(r2.av.xp - r.av.xp, 10)
})

test('combo des réponses : 10, 15, 20, rien, 10 ; moitié en rejeu', () => {
  assert.equal(xpReponses([true, true, true, false, true]), 55)
  assert.equal(xpReponses([true, true, true, false, true], { rejeu: true }), 27)
})

test('Épreuve : ratée (essai compté), puis réussie (or, coffre, étoiles)', () => {
  const base = { ...aventureVide(), salles: { carthage: { medaille: ARGENT, meilleur: null, essais: 0, enCours: null } } }
  const rate = terminerEpreuve(base, P, 'carthage', 12, Array(12).fill(true).concat(Array(8).fill(false)), J(0))
  assert.deepEqual([rate.av.salles.carthage.medaille, rate.av.salles.carthage.essais, rate.av.salles.carthage.meilleur], [ARGENT, 1, 12])
  assert.equal(rate.evenements.find((e) => e.type === 'xp' && e.raison === 'epreuve').montant, 24) // échec : 2 XP × 12, sans combo
  const ok = terminerEpreuve(rate.av, P, 'carthage', 18, Array(18).fill(true).concat([false, false]), J(1))
  assert.equal(ok.av.salles.carthage.medaille, OR)
  assert.equal(ok.evenements.find((e) => e.type === 'xp' && e.raison === 'epreuve').montant, xpReponses(Array(18).fill(true))) // réussite après échec : XP entière
  const t = types(ok.evenements)
  assert.ok(t.includes('coffre') && t.includes('etoiles'))
  assert.ok(ok.av.coffres.includes('or:carthage'))
  const encore = terminerEpreuve(ok.av, P, 'carthage', 18, Array(18).fill(true).concat([false, false]), J(1))
  assert.equal(encore.evenements.find((e) => e.type === 'xp' && e.raison === 'epreuve').montant, xpReponses(Array(18).fill(true), { rejeu: true })) // déjà en or : moitié
  assert.ok(!encore.evenements.some((e) => e.type === 'coffre' && e.sorte === 'salle')) // le coffre de la salle ne s'ouvre qu'une fois
})

test('niveau 2 : récompense (1 joker) créditée une fois', () => {
  const r = gagnerXp({ ...aventureVide(), xp: 90 }, 20, 'test', J(0))
  assert.equal(r.av.niveauCredite, 2)
  assert.equal(r.av.serie.jokers, 1)
  assert.ok(types(r.evenements).includes('niveau'))
  assert.ok(!types(gagnerXp(r.av, 5, 'test', J(0)).evenements).includes('niveau'))
})

test('objectif de la semaine : coffre + joker, remis à zéro le lundi suivant', () => {
  let av = { ...aventureVide(), semaine: { debut: null, xp: 0, objectif: 300, coffre: false } }
  const r = gagnerXp(av, 320, 'test', J(2))
  assert.equal(r.av.semaine.debut, lundi(J(2)))
  assert.equal(r.av.semaine.coffre, true)
  assert.ok(r.evenements.some((e) => e.type === 'coffre' && e.sorte === 'semaine'))
  const lundiSuivant = gagnerXp(r.av, 10, 'test', J(7))
  assert.deepEqual([lundiSuivant.av.semaine.xp, lundiSuivant.av.semaine.coffre], [10, false])
})

test('titre d’époque : tout le tronc du monde I en or → titre, thème, 300 XP', () => {
  const salles = Object.fromEntries(tronc(0).map((id) => [id, { medaille: id === 'mesopotamie-prehist' ? ARGENT : OR, meilleur: 18, essais: 1, enCours: null }]))
  const r = terminerEpreuve({ ...aventureVide(), salles }, P, 'mesopotamie-prehist', 17, Array(17).fill(true), J(0))
  const titre = r.evenements.find((e) => e.type === 'titre')
  assert.equal(titre.titre, 'Grand savant de la Préhistoire')
  assert.ok(r.av.recompenses.includes('theme:silex'))
  assert.ok(r.av.titres.includes('monde:prehistoire'))
})

test('migration v2 → v3 : médailles, XP, série et onboarding crédités', () => {
  const today = J(10)
  const ancien = {
    chapters: { carthage: { rounds: 2 }, egypte: { rounds: 1 } },
    quizzes: { rome: { best: 18, attempts: 2 }, grece: { best: 9, attempts: 1 } },
    fiches: { a: {}, b: {}, c: {} },
    express: { x: { best: 2 } },
    days: [J(7), J(8), J(9), J(10)],
  }
  const av = migrerV2(ancien, P, today)
  assert.deepEqual([av.salles.carthage.medaille, av.salles.egypte.medaille, av.salles.rome.medaille, av.salles.grece.medaille], [ARGENT, BRONZE, OR, 0])
  assert.equal(av.salles.grece.essais, 1)
  assert.equal(av.xp, 100 + 40 + (40 + 60 + 50 + 180 + 50) + 15 + 10)
  assert.equal(av.serie.jours, 4)
  assert.ok(av.coffres.includes('or:rome'))
  assert.equal(av.onboarding, true)
  assert.equal(av.niveauCredite, niveau(av.xp).niveau)
  assert.equal(migrerV2({}, P, today).onboarding, false)
})

test('onboarding : +50 XP et série une seule fois ; passer = sans récompense', () => {
  const r = finOnboarding(aventureVide(), { filRouge: 'egypte' }, J(0))
  assert.deepEqual([r.av.onboarding, r.av.filRouge, r.av.xp, r.av.serie.jours], [true, 'egypte', 50, 1])
  assert.equal(finOnboarding(r.av, {}, J(1)).av.xp, 50) // revoir la présentation ne redonne rien
  const passe = finOnboarding(aventureVide(), { recompense: false }, J(0))
  assert.deepEqual([passe.av.onboarding, passe.av.xp], [true, 0])
})

// ── Défis entre amis (lib/defi.js) ───────────────────────────────────────────
test('défi : mêmes 10 questions pour une graine, 7 rédigées, pas de carte', () => {
  const pool = [
    ...Array.from({ length: 12 }, (_, i) => ({ id: `hand-q${i}`, type: 'mcq', prompt: `Q${i}`, options: ['a', 'b', 'c'], answer: 0 })),
    ...Array.from({ length: 20 }, (_, i) => ({ id: `date-year-${i}`, type: 'mcq', prompt: `D${i}`, options: ['1', '2', '3'], answer: 0 })),
    { id: 'map', type: 'map', prompt: 'Carte', options: ['x', 'y', 'z'], answer: 0 },
  ]
  const a = questionsDefi(pool, 'abc234')
  const b = questionsDefi(pool, 'abc234')
  assert.equal(a.length, 10)
  assert.deepEqual(a.map((q) => q.id), b.map((q) => q.id))
  assert.deepEqual(a.map((q) => q.options), b.map((q) => q.options)) // mêmes réponses dans le même ordre
  assert.equal(a.filter((q) => q.id.startsWith('hand-')).length, 7)
  assert.ok(!a.some((q) => q.type === 'map'))
  assert.notDeepEqual(questionsDefi(pool, 'zzz999').map((q) => q.id), a.map((q) => q.id))
  assert.match(nouvelleGraine(), /^[a-z2-9]{6}$/)
})

test('défi : lien aller-retour, valeurs douteuses ignorées, verdict', () => {
  const lien = lienDefi({ civId: 'egypte', graine: 'abc234', score: 8, nom: ' Léa <script> ' }, 'https://exemple.fr/app/')
  assert.equal(lien.split('#')[0], 'https://exemple.fr/app/')
  const params = new URLSearchParams(lien.split('?')[1])
  assert.deepEqual(lireDefi(params), { graine: 'abc234', score: 8, nom: 'Léa script' })
  assert.deepEqual(lireDefi(new URLSearchParams('g=../x&s=99&n=')), { graine: null, score: null, nom: null })
  assert.deepEqual([verdict(9, 8), verdict(7, 8), verdict(8, 8)], ['gagne', 'perdu', 'egalite'])
})

// ── Questions éclair (sprints 26 et 28) : seulement sur les cartes déjà lues ──
test('rapprochement (outil npm run relier) : mots et flexions', () => {
  assert.deepEqual(mots('L’Égypte est « un don du Nil » en 1 500 av. J.-C.'), ['egypte', 'don', 'nil', '1500'])
  assert.ok(memeMot('tunis', 'tunisie') && memeMot('pheniciens', 'phenicienne') && memeMot('detruite', 'detruire'))
  assert.ok(!memeMot('romain', 'romantique') && !memeMot('146', '1460') && !memeMot('roi', 'rome'))
})

test('rapprochement : propose la carte de Découvrir, et une seule frise pour une question d’ordre', () => {
  const ch = HANDWRITTEN.carthage
  const idx = indexer(ch.cards)
  const q = (id) => ch.quiz.find((x) => x.id === id)
  assert.deepEqual(proposer(idx, q('sicile')).carte, 'puniques')
  assert.deepEqual(proposer(idx, q('pere')).carte, 'hamilcar') // le père d'Hannibal : carte de niveau 2
  assert.equal(proposer(idx, q('zama')).statut, 'probable') // « Scipion l’Africain » : à relire (relu → puniques)
  const pl = HANDWRITTEN['pologne-piast']
  assert.equal(proposer(indexer(pl.cards), pl.quiz.find((x) => x.id === 'ordre')).carte, 'chronologie')
})

test('carte : chaque question rédigée porte une carte existante de son chapitre (ou null)', () => {
  let hors = 0
  for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
    const ids = new Set(ch.cards.map((c) => c.id))
    for (const q of ch.quiz) {
      assert.ok('carte' in q, `${civId}/${q.id} sans carte`)
      const c = cartesDe(q)
      if (!c) hors++
      else assert.ok(c.length && c.every((id) => ids.has(id)), `${civId}/${q.id} : carte inconnue`)
    }
  }
  assert.ok(hors <= 44, `${hors} questions hors cartes`) // état du sprint 28 : 44, à réduire (sprints 34)
})

test('éclairs : Carthage, une question sur une carte d’Approfondir n’est jamais posée dans Découvrir', () => {
  const ch = HANDWRITTEN.carthage
  const q = (id) => ch.quiz.find((x) => x.id === id)
  const t1 = new Set(ch.cards.filter((c) => c.tier === 1).map((c) => c.id))
  assert.equal(q('pere').carte, 'hamilcar')
  assert.ok(!estVue(q('pere'), t1) && !estVue(q('suffetes'), t1) && !estVue(q('salammbo'), t1))
  assert.ok(estVue(q('sicile'), t1) && estVue(q('alpes'), t1) && estVue(q('caton'), t1) && estVue(q('zama'), t1))
  assert.ok(!estVue({ id: 'x', carte: null }, t1) && !estVue({ id: 'x' }, t1))
  assert.ok(!estVue({ id: 'x', carte: ['puniques', 'hamilcar'] }, t1) && estVue({ id: 'x', carte: ['puniques', 'hamilcar'] }, new Set([...t1, 'hamilcar'])))
})

test('éclairs : sur les 214 chapitres, chaque question porte sur une carte déjà lue', () => {
  let salles = 0
  for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
    const qs = ch.quiz.map((q) => ({ ...q, id: `hand-${q.id}` }))
    for (const [tier, nombre] of [[1, 3], [2, 5]]) {
      const paquet = ['cover', ...ch.cards.filter((c) => c.tier === tier).map((c) => c.id), 'recap']
      const milieu = Math.floor(paquet.length / 2)
      const choix = choisirEclairs({ questions: qs, paquet, nombre, milieu, graine: civId })
      const toutes = [choix.milieu, ...choix.fin].filter(Boolean)
      assert.ok(toutes.length <= nombre, civId)
      assert.equal(new Set(toutes.map((q) => q.id)).size, toutes.length, `${civId} : question en double`)
      if (choix.milieu) assert.ok(estVue(choix.milieu, new Set(paquet.slice(0, milieu))), `${civId} : question du milieu sur une carte pas encore lue`)
      for (const q of choix.fin) assert.ok(estVue(q, new Set(paquet)), `${civId} : ${q.id} hors du paquet`)
      // une carte « à revoir » remise avant le bilan ne change rien au choix
      const avecRevue = [...paquet.slice(0, -1), paquet[1], 'recap']
      const bis = choisirEclairs({ questions: qs, paquet: [...new Set(avecRevue)], nombre, milieu, graine: civId })
      assert.deepEqual([bis.milieu?.id, ...bis.fin.map((q) => q.id)], [choix.milieu?.id, ...choix.fin.map((q) => q.id)])
      if (tier === 1) {
        assert.equal(toutes.length, 3, `${civId} : moins de 3 questions en Découvrir`) // état actuel du contenu (rapport : 214/214)
        salles++
      }
    }
  }
  assert.equal(salles, 214)
})

// ── Questions générées depuis les cartes (sprint 28) : une seule bonne réponse ──
test('cartes : date de tête retirée, vainqueur sans ambiguïté, nom masqué', () => {
  assert.equal(sansDate('Vers 1730 : le Dahomey devient tributaire'), 'Le Dahomey devient tributaire')
  assert.equal(sansDate('Vers 728 av. J.-C., le roi Piânkhy conquiert l’Égypte'), 'Le roi Piânkhy conquiert l’Égypte')
  assert.equal(sansDate('Défaite : Carthage perd la Sicile'), 'Défaite : Carthage perd la Sicile')
  assert.equal(sansDate('Hannibal franchit les Alpes'), 'Hannibal franchit les Alpes')
  const cannes = HANDWRITTEN.carthage.cards.find((c) => c.id === 'cannes')
  assert.equal(campVainqueur(cannes), 'allies')
  const guerre = (vainqueur) => ({ allies: ['Tikal'], adversaires: ['Calakmul et ses alliés, dont Caracol'], vainqueur })
  assert.equal(campVainqueur(guerre('Calakmul, puis Tikal en 695')), null)
  assert.equal(campVainqueur(guerre('Aucun')), null)
  assert.equal(campVainqueur(guerre('Calakmul')), 'adversaires')
  assert.equal(masquerNom('Hannibal Barca part d’Espagne ; Hannibal écrase Rome.', 'Hannibal Barca').texte, '… part d’Espagne ; … écrase Rome.')
})

test('cartes : sur les 214 chapitres, questions générées sûres, reliées à leur carte et stables', () => {
  let total = 0
  for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
    const personnes = ['Personne Lointaine', 'Autre Personne', 'Troisième Personne']
    const qs = questionsDesCartes(ch.cards, { personnes })
    const byId = Object.fromEntries(ch.cards.map((c) => [c.id, c]))
    assert.equal(new Set(qs.map((q) => q.id)).size, qs.length, `${civId} : id en double`)
    // même résultat quand on réordonne les cartes et leurs éléments (ids et réponses stables)
    const melange = [...ch.cards].reverse().map((c) => (c.items ? { ...c, items: [...c.items].reverse() } : c))
    const bis = Object.fromEntries(questionsDesCartes(melange, { personnes }).map((q) => [q.id, q]))
    for (const q of qs) {
      total++
      const c = byId[q.carte]
      assert.ok(c && q.id.startsWith(`carte-${c.id}-`), `${civId}/${q.id} : carte`)
      assert.ok(bis[q.id], `${civId}/${q.id} : id instable`)
      if (q.type === 'mcq') {
        assert.ok(q.options.length >= 3 && q.answer === 0, `${civId}/${q.id}`)
        assert.equal(new Set(q.options).size, q.options.length, `${civId}/${q.id} : options en double`)
        assert.equal(bis[q.id].options[0], q.options[0], `${civId}/${q.id} : réponse instable`)
      }
      const items = (c.items ?? []).map((it) => ({ y: it.year, label: sansDate(it.label) }))
      const annee = /-annee-(-?\d+)$/.exec(q.id)
      if (annee) {
        // aucune autre année proposée n'est celle de l'élément, ni celle d'un élément de même libellé
        const y = Number(annee[1])
        assert.equal(q.options[0], formatYear(y))
        assert.ok(!q.options.slice(1).includes(formatYear(y)), `${civId}/${q.id}`)
        assert.ok(!q.options[0] || !q.prompt.includes(String(Math.abs(y))), `${civId}/${q.id} : l'énoncé donne l'année`)
      }
      const ev = /-evenement-(-?\d+)$/.exec(q.id)
      if (ev) {
        // chaque leurre est un élément d'une AUTRE année de la carte
        const y = Number(ev[1])
        for (const o of q.options.slice(1)) assert.ok(items.some((it) => it.label === o && it.y !== y), `${civId}/${q.id} : leurre « ${o} »`)
        assert.ok(items.filter((it) => it.y === y).length === 1)
      }
      if (q.type === 'order' && items.length) {
        const ys = q.items.map((l) => items.find((it) => it.label === l).y)
        assert.ok(ys.every((y, i) => i === 0 || y > ys[i - 1]), `${civId}/${q.id} : ordre`)
      }
      if (q.id.endsWith('-qui')) assert.ok(!q.prompt.includes(c.nom), `${civId}/${q.id} : nom visible`)
      if (q.id.endsWith('-vainqueur')) assert.ok(campVainqueur(c))
    }
  }
  assert.ok(total > 2000, `${total} questions générées`)
})

// ── Épreuve : reprise et note sur les mêmes questions qu'à l'écran (sprint 26) ──
test('épreuve : reprise à la première question sans réponse, même si une question a disparu', () => {
  const q = (id) => ({ id })
  // « b » répondue puis disparue du contenu : l'ancien calcul (2 réponses → question n° 3) sautait « c »
  const affichees = [q('a'), q('c'), q('d')]
  const reponses = [{ id: 'a', correct: true }, { id: 'b', correct: true }]
  assert.equal(premiereSansReponse(affichees, reponses), 1)
  assert.equal(premiereSansReponse(affichees, [...reponses, { id: 'c' }, { id: 'd' }]), 2)
  assert.equal(premiereSansReponse([], []), 0)
})

test('épreuve : la note ne compte que les questions posées à l’écran', () => {
  const current = { ids: ['a', 'b', 'c', 'd'], answers: [{ id: 'a', correct: true }, { id: 'b', correct: true }, { id: 'c', correct: false }, { id: 'd', correct: true }] }
  assert.deepEqual(noteQuiz(current), { ids: ['a', 'b', 'c', 'd'], correct: 3, total: 4, score: 15, failed: ['c'], justes: [true, true, false, true] })
  // « b » a disparu : 2 bonnes sur 3 questions posées
  const r = noteQuiz(current, ['a', 'c', 'd'])
  assert.deepEqual([r.correct, r.total, r.score, r.failed, r.justes], [2, 3, 13, ['c'], [true, false, true]])
})

// ── Validateur du parcours : il doit bloquer les erreurs ──────────────────────
const content = loadContent()
const errs = (mutate) => {
  const p = loadParcours(content.dir)
  p.data = structuredClone(p.data)
  mutate(p.data)
  const out = []
  const isStr = (v) => typeof v === 'string' && v.trim() !== ''
  const onlyFields = (w, o, allowed) => Object.keys(o ?? {}).forEach((k) => allowed.includes(k) || out.push(`${w}: champ ${k}`))
  validateParcours(p, { err: (w, m) => out.push(m), warn: () => {}, isStr, isArr: Array.isArray, onlyFields, content })
  return out
}
test('validateur : le parcours actuel est valide', () => assert.deepEqual(errs(() => {}), []))
test('validateur : salle d’une autre époque', () => assert.ok(errs((d) => d.mondes[0].tronc.push('rome')).length))
test('validateur : civilisation oubliée', () => assert.ok(errs((d) => delete d.branches.koush).length))
test('validateur : parent d’un monde plus tardif', () => assert.ok(errs((d) => (d.branches.koush = 'rome-x')).length && errs((d) => (d.branches.koush = 'byzance')).length))
test('validateur : fil rouge non respecté', () => assert.ok(errs((d) => (d.branches['ethiopie-contemp'] = 'afrique-sud')).length))
test('validateur : titre de fil rouge manquant', () => assert.ok(errs((d) => delete d.filsRouges.egypte).length))

console.log(`✅ Aventure : ${n} tests réussis (parcours, étape du jour, XP, niveaux, récompenses, progression, migration, questions éclair, questions des cartes, épreuve, validateur).`)
