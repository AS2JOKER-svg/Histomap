// Tests des règles de l'Aventure (src/lib/aventure.js, src/lib/xp.js) et du validateur du parcours.
// Lancé par `npm run validate` (donc par `npm run data` et `npm run build`).
import assert from 'node:assert/strict'
import { readFileSync } from 'fs'
import { loadContent } from './lib/content.mjs'
import { loadParcours, validateParcours } from './lib/parcours.mjs'
import { MEDAILLE, createParcours, etapeDuJour, etoiles, mondeOuvert, ouverture, avancementMonde, titresObtenus } from '../src/lib/aventure.js'
import { aventureVide, enregistrerActivite, finOnboarding, gagnerXp, migrerV2, terminerEpreuve, terminerEtape, xpReponses, lundi } from '../src/lib/progression.js'
import { emplacementsJokers, gainReponse, niveau, petitCoffre, prochaineRecompense, rang, recompensesNiveau, seuilNiveau } from '../src/lib/xp.js'

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
  assert.deepEqual(etapeDuJour(P, ok), { civId: 'mesopotamie', etape: 'decouvrir', raison: 'tronc' })
})

test('fil rouge : l’Empire d’Éthiopie demande Aksoum, qui demande Koush', () => {
  const tousOuverts = etat(toutLeTronc(ARGENT))
  assert.deepEqual(ouverture(P, tousOuverts, 'ethiopie-contemp').raison, { type: 'parent', id: 'aksoum' })
  assert.deepEqual(ouverture(P, tousOuverts, 'aksoum').raison, { type: 'parent', id: 'koush' })
  const avecAksoum = { ...tousOuverts, ...etat([['koush', BRONZE], ['aksoum', BRONZE]]) }
  assert.ok(ouverture(P, avecAksoum, 'ethiopie-contemp').ouvert)
})

test('étape du jour : reprendre, retenter une épreuve, puis une branche', () => {
  const base = etat(toutLeTronc(ARGENT))
  assert.equal(etapeDuJour(P, { ...base, carthage: { medaille: ARGENT, enCours: 'epreuve' } }).raison, 'reprendre')
  assert.deepEqual(etapeDuJour(P, { ...base, rome: { medaille: ARGENT, essais: 1, meilleur: 12 } }), { civId: 'rome', etape: 'epreuve', raison: 'retenter' })
  const d = etapeDuJour(P, base)
  assert.equal(d.raison, 'branche')
  assert.equal(d.etape, 'decouvrir')
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
  const t = types(ok.evenements)
  assert.ok(t.includes('coffre') && t.includes('etoiles'))
  assert.ok(ok.av.coffres.includes('or:carthage'))
  const encore = terminerEpreuve(ok.av, P, 'carthage', 18, Array(18).fill(true).concat([false, false]), J(1))
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

console.log(`✅ Aventure : ${n} tests réussis (parcours, étape du jour, XP, niveaux, récompenses, progression, migration, validateur).`)
