// Tests des règles de l'Aventure (src/lib/aventure.js, src/lib/xp.js) et du validateur du parcours.
// Lancé par `npm run validate` (donc par `npm run data` et `npm run build`).
import assert from 'node:assert/strict'
import { readFileSync } from 'fs'
import { loadContent } from './lib/content.mjs'
import { loadParcours, validateParcours } from './lib/parcours.mjs'
import { MEDAILLE, createParcours, etapeDuJour, etoiles, mondeOuvert, ouverture, avancementMonde, titresObtenus } from '../src/lib/aventure.js'
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
  assert.ok(titres.includes('Maître de l’Égypte'))
  assert.ok(!titres.includes('Historien universel'))
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
  assert.equal(recompensesNiveau(13)[0].id, 'rose-des-vents')
  assert.equal(prochaineRecompense(13).niveau, 14)
  assert.equal(recompensesNiveau(21)[0].type, 'coffre')
  for (let k = 2; k <= 20; k++) assert.ok(recompensesNiveau(k).length, `niveau ${k} sans récompense`)
  assert.deepEqual([14, 15, 35].map(emplacementsJokers), [2, 3, 4])
  assert.deepEqual([14, 15, 16, 17, 18, 19, 20].map(etoiles), [0, 1, 1, 2, 2, 3, 3])
  assert.deepEqual(petitCoffre('carthage'), petitCoffre('carthage'))
  assert.ok([25, 50, 100].includes(petitCoffre('x').xp))
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

console.log(`✅ Aventure : ${n} tests réussis (parcours, étape du jour, XP, niveaux, récompenses, validateur).`)
