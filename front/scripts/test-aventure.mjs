// Tests des règles de l'Aventure (src/lib/aventure.js, xp.js, progression.js, epreuve.js) et du validateur du parcours.
// Lancé par `npm run validate` (donc par `npm run data` et `npm run build`).
import assert from 'node:assert/strict'
import { readFileSync } from 'fs'
import { loadContent } from './lib/content.mjs'
import { loadParcours, validateParcours } from './lib/parcours.mjs'
import { contexteQuestions } from './lib/questions-cartes.mjs'
import {
  SALLE_VIDE,
  aRattraper,
  avancementMonde,
  chemin,
  createParcours,
  estOuvert,
  etapeAccessible,
  etapeSuivante,
  etoilesEpreuve,
  etoilesSur20,
  ilots,
  initiales,
  listeARevoir,
  mondeOuvert,
  nomCourt,
  ouverture,
  revisionDue,
  salleEnCours,
  seuilsEtoiles,
} from '../src/lib/aventure.js'
import { aventureVide, changerFil, commencerEtape, enregistrerActivite, etatSerie, finOnboarding, gagnerXp, migrerV2, migrerV3, migrerV4, terminerEpreuve, terminerEtape, xpReponses } from '../src/lib/progression.js'
import { BAREME, RECOMPENSES, RANGS, emplacementsJokers, gainReponse, niveau, prochainRang, prochaineRecompense, rang, recompensesNiveau, seuilNiveau } from '../src/lib/xp.js'
import { cartesVues, composerEpreuve, reservoirSalle } from '../src/lib/epreuve.js'
import { rng } from '../src/lib/random.js'
import { lienDefi, lireDefi, nouvelleGraine, questionsDefi, verdict } from '../src/lib/defi.js'
import { choisirEclairs, estVue } from '../src/lib/eclairs.js'
import { campVainqueur, cartesDe, masquerNom, questionsDesCartes, sansDate } from '../src/lib/questionsCartes.js'
import { formatYear } from '../src/lib/time.js'
import { indexer, memeMot, mots, proposer } from './lib/rapprochement.mjs'
import { noteQuiz, premiereSansReponse } from '../src/lib/questions.js'
import { HANDWRITTEN } from '../src/data/revision/index.js'
import { GEO, disposerCarte, grilleIlot, modeleCarte, pointRoute, rectangles } from '../src/lib/carteParcours.js'
import { ceQuiSouvre, choixFils, dureeSeance, panneauSalle } from '../src/lib/ecransSalle.js'
import { aRevoirParSalle, chiffresProfil, filsCollection, mondesCollection, texteARevoir, texteSerie, titreUltime } from '../src/lib/profil.js'
import { NUIT, ajouterJours, choisirRappel, derniereChance, etatRappels, fautInscrire, jourLocal, noterEnvoi, texteRappel } from '../src/lib/rappels.js'
import { codeRappels, codeServiceWorker } from './lib/service-worker.mjs'
import vm from 'node:vm'

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
const tronc = (w) => data.mondes[w].tronc
const D = { decouverte: true }
/** État de l'Aventure avec ces salles ([id, champs]) et ces autres champs. */
const avec = (entries, extra = {}) => ({ ...aventureVide(), ...extra, salles: Object.fromEntries(entries.map(([id, s]) => [id, { ...SALLE_VIDE, ...s }])) })
const decouvrir = (av, id) => ({ ...av, salles: { ...av.salles, [id]: { ...SALLE_VIDE, ...av.salles[id], decouverte: true } } })
const ouvertesDe = (av) => P.ordre.filter((id) => estOuvert(P, av, id))
const J = (n) => new Date(Date.UTC(2026, 10, 2 + n)).toISOString().slice(0, 10) // J(0) = lundi 2 novembre 2026
const types = (ev) => ev.map((e) => e.type)
const xpDe = (r, raison) => r.evenements.filter((e) => e.type === 'xp' && e.raison === raison).reduce((t, e) => t + e.montant, 0)
const justes = (bonnes, total) => Array(total).fill(true).fill(false, bonnes) // `bonnes` réponses justes puis des erreurs

// ── Parcours et chemin du joueur ──────────────────────────────────────────────
test('le parcours contient les 214 civilisations, une seule fois', () => {
  assert.equal(P.ordre.length, 214)
  assert.equal(new Set(P.ordre).size, 214)
  assert.equal(data.mondes.flatMap((m) => m.tronc).length, 51)
})

test('chemin : le tronc seul sans fil ; un fil y ajoute ses annexes, à leur place', () => {
  assert.deepEqual(chemin(P, null), data.mondes.flatMap((m) => m.tronc))
  assert.equal(chemin(P, 'france').length, 51) // toutes ses salles sont dans le tronc
  const avant = (ch, id) => ch[ch.indexOf(id) - 1]
  const coree = chemin(P, 'coree')
  assert.equal(coree.length, 56) // fil Corée = +5 salles
  assert.equal(avant(coree, 'gojoseon'), 'chine-imperiale') // juste après sa salle parente
  assert.equal(avant(coree, 'trois-royaumes-coree'), 'gojoseon')
  assert.equal(avant(coree, 'goryeo'), 'khmer') // parente dans le monde précédent : par date de début
  const chine = chemin(P, 'chine')
  assert.equal(avant(chine, 'chine-neo'), 'gobekli-tepe')
  assert.equal(avant(chine, 'six-dynasties'), 'chine-imperiale')
  assert.equal(avant(chine, 'maya'), 'six-dynasties') // dernière salle de l'Antiquité pour ce joueur
  const thai = chemin(P, 'thailande')
  assert.equal(avant(thai, 'thailande'), tronc(3).at(-1)) // plus ancienne que tout le tronc contemporain : en tête du monde
  for (const f of [null, ...P.filsRouges.map((x) => x.id)]) {
    const ch = chemin(P, f)
    assert.equal(new Set(ch).size, ch.length)
    ch.forEach((id, i) => i && assert.ok(P.monde.get(ch[i - 1]) <= P.monde.get(id), `${f} : mondes dans l’ordre`))
    for (const id of P.filsRouges.find((x) => x.id === f)?.membres ?? []) assert.ok(ch.includes(id))
  }
})

test('au départ : seule la 1re salle est ouverte ; raisons des verrous', () => {
  const av = aventureVide()
  assert.deepEqual(ouvertesDe(av), ['hominides-est'])
  assert.deepEqual(ouverture(P, av, 'europe-paleo').raison, { type: 'salle', id: 'hominides-est' })
  assert.deepEqual(ouverture(P, av, 'mesopotamie').raison, { type: 'monde', monde: 1, id: 'mesopotamie-prehist' })
  assert.deepEqual(ouverture(P, av, 'sahara-pasteurs').raison, { type: 'parent', id: 'hominides-est' })
  assert.equal(salleEnCours(P, av), 'hominides-est')
  assert.equal(etapeSuivante(P, av, 'hominides-est'), 'decouvrir')
})

test('découverte : ouvre la salle suivante et les annexes rattachées, puis l’Épreuve et Approfondir', () => {
  const av = avec([['hominides-est', D]])
  assert.ok(estOuvert(P, av, 'europe-paleo') && estOuvert(P, av, 'sahara-pasteurs'))
  assert.ok(!estOuvert(P, av, 'aborigenes-australie'))
  assert.equal(salleEnCours(P, av), 'europe-paleo')
  assert.ok(etapeAccessible(P, av, 'hominides-est', 'epreuve') && etapeAccessible(P, av, 'hominides-est', 'approfondir'))
  assert.ok(!etapeAccessible(P, av, 'europe-paleo', 'epreuve') && !etapeAccessible(P, av, 'europe-paleo', 'approfondir'))
  assert.equal(etapeSuivante(P, av, 'hominides-est'), 'epreuve')
  // annexe : pas d'Approfondir ; la mini-épreuve après les cartes de la séance (ou pour améliorer ses étoiles)
  assert.ok(!etapeAccessible(P, av, 'sahara-pasteurs', 'approfondir') && !etapeAccessible(P, av, 'sahara-pasteurs', 'epreuve'))
  assert.ok(etapeAccessible(P, commencerEtape(av, 'sahara-pasteurs', 'epreuve'), 'sahara-pasteurs', 'epreuve'))
  assert.equal(etapeSuivante(P, commencerEtape(av, 'sahara-pasteurs', 'epreuve'), 'sahara-pasteurs'), 'epreuve')
})

test('chemin continu : la dernière salle découverte d’un monde ouvre le suivant (même une salle de fil)', () => {
  const av = avec(tronc(0).map((id) => [id, D]))
  assert.ok(mondeOuvert(P, av, 1) && estOuvert(P, av, 'mesopotamie'))
  assert.ok(!estOuvert(P, av, 'egypte'))
  const chine = avec([...tronc(0), ...tronc(1), 'chine-neo'].map((id) => [id, D]), { filRouge: 'chine' })
  assert.equal(salleEnCours(P, chine), 'six-dynasties')
  assert.deepEqual(ouverture(P, chine, 'maya').raison, { type: 'monde', monde: 2, id: 'six-dynasties' })
  assert.ok(!mondeOuvert(P, chine, 2))
  assert.ok(estOuvert(P, decouvrir(chine, 'six-dynasties'), 'maya'))
})

test('annexe hors du chemin : salle parente découverte et monde atteint ; chaînes d’annexes', () => {
  const av = avec([...tronc(0), 'mesopotamie', 'egypte'].map((id) => [id, D]))
  assert.deepEqual(ouverture(P, av, 'mamelouks').raison, { type: 'monde', monde: 2, id: 'chine-imperiale' }) // Moyen Âge pas atteint
  assert.ok(estOuvert(P, avec([...tronc(0), ...tronc(1)].map((id) => [id, D])), 'mamelouks'))
  const tout = avec(data.mondes.flatMap((m) => m.tronc).map((id) => [id, D]))
  assert.deepEqual(ouverture(P, tout, 'ethiopie-contemp').raison, { type: 'parent', id: 'aksoum' })
  assert.deepEqual(ouverture(P, tout, 'aksoum').raison, { type: 'parent', id: 'koush' })
})

test('fil choisi en cours de route : salles « à rattraper », rien ne se referme', () => {
  let av = avec([...tronc(0), ...tronc(1)].map((id) => [id, D]))
  assert.equal(salleEnCours(P, av), 'maya')
  const avant = ouvertesDe(av)
  av = changerFil(av, P, 'chine').av
  for (const id of avant) assert.ok(estOuvert(P, av, id), `${id} refermée`)
  assert.deepEqual([...aRattraper(P, av)].sort(), ['chine-neo', 'six-dynasties'])
  assert.equal(salleEnCours(P, av), 'maya') // une salle à rattraper n'est jamais la salle en cours
  assert.ok(estOuvert(P, av, 'chine-neo') && estOuvert(P, av, 'six-dynasties'))
  av = decouvrir(decouvrir(av, 'maya'), 'chine-neo')
  assert.deepEqual([...aRattraper(P, av)], ['six-dynasties'])
  assert.ok(estOuvert(P, av, 'byzance'))
  // revenir sans fil : Six Dynasties redevient une annexe, toujours ouverte
  const sans = changerFil(av, P, null).av
  assert.ok(estOuvert(P, sans, 'six-dynasties') && aRattraper(P, sans).size === 0)
})

test('suivre la salle en cours mène au bout du chemin, avec ou sans fil', () => {
  for (const fil of [null, ...P.filsRouges.map((f) => f.id)]) {
    let av = { ...aventureVide(), filRouge: fil }
    const vus = []
    for (let id = salleEnCours(P, av); id; id = salleEnCours(P, av)) {
      assert.ok(estOuvert(P, av, id), `${fil} : ${id} fermée`)
      vus.push(id)
      av = decouvrir(av, id)
    }
    assert.deepEqual(vus, chemin(P, fil))
    P.mondes.forEach((_, w) => assert.ok(mondeOuvert(P, av, w)))
  }
})

test('propriété : quel que soit l’ordre de jeu et les changements de fil, une salle ouverte ne se referme jamais', () => {
  const rand = rng('propriete-ouverture')
  for (let partie = 0; partie < 16; partie++) {
    let av = aventureVide()
    let avant = new Set(ouvertesDe(av))
    for (let pas = 0; pas < 90; pas++) {
      if (rand() < 0.12) av = changerFil(av, P, rand() < 0.15 ? null : P.filsRouges[Math.floor(rand() * P.filsRouges.length)].id).av
      else {
        const libres = [...avant].filter((id) => !av.salles[id]?.decouverte)
        if (!libres.length) break
        av = decouvrir(av, rand() < 0.6 ? salleEnCours(P, av) ?? libres[0] : libres[Math.floor(rand() * libres.length)])
      }
      const maintenant = new Set(ouvertesDe(av))
      for (const id of avant) assert.ok(maintenant.has(id), `${id} refermée (partie ${partie}, pas ${pas})`)
      const enCours = salleEnCours(P, av)
      if (enCours) assert.ok(maintenant.has(enCours), `salle en cours ${enCours} fermée`)
      avant = maintenant
    }
  }
})

test('« À revoir » due (≥ 5 erreurs ou 3 jours, une par jour) ; « Jouer » : étape commencée, sinon Découvrir', () => {
  const now = Date.UTC(2026, 10, 20)
  const jour = 86400000
  const chapters = { carthage: { toReview: ['a', 'b'], finishedAt: now - jour }, rome: { toReview: ['x'], finishedAt: now - 4 * jour } }
  const quizzes = { carthage: { failed: ['q1', 'q2', 'q3'], lastAt: now - jour } }
  const liste = listeARevoir(chapters, quizzes, now)
  assert.deepEqual(liste.find((r) => r.civId === 'carthage'), { civId: 'carthage', nb: 5, jours: 1 })
  assert.deepEqual(liste.find((r) => r.civId === 'rome'), { civId: 'rome', nb: 1, jours: 4 })
  assert.deepEqual(revisionDue(liste), { civId: 'carthage', nb: 5, jours: 1 })
  assert.equal(revisionDue(liste, true), null) // séance du jour déjà faite
  assert.equal(revisionDue([{ civId: 'egypte', nb: 2, jours: 1 }]), null) // pas encore due
  assert.deepEqual(revisionDue([{ civId: 'egypte', nb: 2, jours: 3 }]), { civId: 'egypte', nb: 2, jours: 3 })
  // bouton « Jouer » de la salle en cours (carte du parcours)
  assert.equal(etapeSuivante(P, aventureVide(), salleEnCours(P, aventureVide())), 'decouvrir')
  const enCours = avec([['hominides-est', { enCours: 'decouvrir' }]])
  assert.equal(salleEnCours(P, enCours), 'hominides-est')
  assert.equal(etapeSuivante(P, enCours, 'hominides-est'), 'decouvrir')
})

test('avancement d’un monde', () => {
  const av = avec([...tronc(0).map((id) => [id, { decouverte: true, etoiles: 1 }]), ['sahara-pasteurs', D]])
  const a = avancementMonde(P, av, 0)
  assert.deepEqual([a.ouvert, a.salles, a.decouvertes, a.etoiles, a.tronc, a.troncEtoile, a.annexesFaites], [true, 5, 5, 5, 5, 5, 1])
  assert.ok(avancementMonde(P, av, 1).ouvert && !avancementMonde(P, av, 2).ouvert)
})

test('noms courts et initiales des pastilles', () => {
  assert.equal(nomCourt(P, 'chine-imperiale', 'Chine (Qin & Han)'), 'Qin et Han')
  assert.equal(nomCourt(P, 'rome', 'Rome antique'), 'Rome antique')
  const noms = ['Qin et Han', 'Saint-Empire', 'Égypte', 'Rus’ de Kiev', 'Royaume du Dahomey (Bénin)', 'États-Unis 1776', 'Celtes / Gaulois', 'Les deux Corées']
  assert.deepEqual(noms.map(initiales), ['QH', 'SE', 'Ég', 'RK', 'Da', 'ÉU', 'CG', 'DC'])
})

// ── Étoiles, XP et niveaux ────────────────────────────────────────────────────
test('étoiles : 9 / 11 / 12 sur 12, 6 / 7 / 8 sur 8 ; anciennes notes sur 20 : 15 / 17 / 19', () => {
  assert.deepEqual(seuilsEtoiles(12), [9, 11, 12])
  assert.deepEqual(seuilsEtoiles(8), [6, 7, 8])
  assert.deepEqual([8, 9, 10, 11, 12].map((c) => etoilesEpreuve(c, 12)), [0, 1, 1, 2, 3])
  assert.deepEqual([5, 6, 7, 8].map((c) => etoilesEpreuve(c, 8)), [0, 1, 2, 3])
  assert.equal(etoilesEpreuve(0, 0), 0)
  assert.deepEqual([14, 15, 16, 17, 18, 19, 20].map(etoilesSur20), [0, 1, 1, 2, 2, 3, 3])
})

test('barème : salle du tronc sans faute = 490 XP, annexe = 295 XP (60 %)', () => {
  const sansFaute = (q) => xpReponses(Array(q).fill(true))
  const salle = BAREME.decouvrir + 3 * BAREME.eclair + sansFaute(12) + BAREME.reussite + 3 * BAREME.etoile
  const annexe = BAREME.annexe + sansFaute(8) + BAREME.reussiteAnnexe + 3 * BAREME.etoileAnnexe
  assert.deepEqual([sansFaute(12), salle, sansFaute(8), annexe], [310, 490, 190, 295])
})

test('combo : 10, 15, 20, 25 puis 30 XP au maximum ; moitié en rejeu', () => {
  assert.deepEqual([1, 2, 3, 4, 5, 9].map((s) => gainReponse(s)), [10, 15, 20, 25, 30, 30])
  assert.equal(gainReponse(5, { rejeu: true }), 15)
  assert.equal(xpReponses([true, true, true, false, true]), 55)
  assert.equal(xpReponses([true, true, true, false, true], { rejeu: true }), 27)
})

test('niveaux : 70 × n XP pour passer du niveau n au suivant, maximum 50 (85 750 XP)', () => {
  assert.equal(seuilNiveau(2), 70)
  assert.equal(seuilNiveau(10), 3150)
  assert.equal(seuilNiveau(50), 85750)
  assert.deepEqual(niveau(0), { niveau: 1, rang: 'Curieux', dansNiveau: 0, pourSuivant: 70, max: false })
  assert.deepEqual(niveau(7910), { niveau: 15, rang: 'Érudit', dansNiveau: 560, pourSuivant: 1050, max: false })
  assert.equal(niveau(10 ** 7).niveau, 50)
  assert.equal(rang(50), 'Légende de l’Histoire')
})

test('récompenses de niveau : rangs, jokers et places de joker seulement', () => {
  assert.deepEqual(recompensesNiveau(10).map((r) => r.type), ['rang'])
  assert.deepEqual(recompensesNiveau(15).map((r) => r.type), ['rang', 'emplacement'])
  assert.deepEqual(recompensesNiveau(3), [])
  assert.equal(prochaineRecompense(3).niveau, 5)
  assert.deepEqual([...new Set(Object.values(RECOMPENSES).flat().map((r) => r.type))].sort(), ['emplacement', 'joker', 'rang'])
  assert.deepEqual([14, 15, 35].map(emplacementsJokers), [2, 3, 4])
})

test('niveau : un événement par niveau, un « rang » aux nouveaux rangs, jokers crédités une fois', () => {
  const r = gagnerXp({ ...aventureVide(), xp: 60 }, 20, 'test')
  assert.deepEqual([r.av.niveauCredite, r.av.serie.jokers], [2, 1])
  assert.ok(types(r.evenements).includes('niveau') && !types(r.evenements).includes('rang'))
  assert.ok(!types(gagnerXp(r.av, 5, 'test').evenements).includes('niveau'))
  const r5 = gagnerXp({ ...aventureVide(), xp: 690, niveauCredite: 4 }, 20, 'test')
  assert.deepEqual(r5.evenements.filter((e) => e.type === 'rang'), [{ type: 'rang', niveau: 5, rang: 'Apprenti' }])
})

// ── Progression (lib/progression.js) ──────────────────────────────────────────
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

test('série : un joker tous les 7 jours ; +50 XP au premier passage d’un palier', () => {
  let av = aventureVide()
  const paliers = []
  for (let i = 0; i < 7; i++) {
    const r = enregistrerActivite(av, J(i))
    av = r.av
    paliers.push(...r.evenements.filter((e) => e.type === 'palier').map((e) => e.jours))
  }
  assert.deepEqual([paliers, av.serie.jours, av.xp], [[3, 7], 7, 100])
  assert.ok(av.serie.jokers >= 1)
  let r = { av: { ...av, serie: { ...av.serie, jokers: 0 } } }
  for (const j of [J(10), J(11), J(12)]) r = enregistrerActivite(r.av, j) // série perdue puis retrouvée
  assert.equal(r.av.serie.jours, 3)
  assert.ok(!r.evenements.some((e) => e.type === 'palier')) // le palier 3 ne rapporte qu'une fois
})

test('Découvrir : salle découverte, 40 XP + éclairs + bonus du jour, salles ouvertes ; Approfondir en bonus', () => {
  const r = terminerEtape(aventureVide(), P, 'hominides-est', 'decouvrir', { eclairs: 3 }, J(0))
  assert.equal(r.av.salles['hominides-est'].decouverte, true)
  assert.equal(r.av.xp, 40 + 15 + 20)
  assert.ok(types(r.evenements).includes('decouverte'))
  const ouv = r.evenements.find((e) => e.type === 'ouverture')
  assert.ok(ouv.salles.includes('europe-paleo') && ouv.salles.includes('sahara-pasteurs'))
  assert.equal(terminerEtape(r.av, P, 'hominides-est', 'decouvrir', {}, J(0)).av.xp - r.av.xp, 10) // rejouer
  const a = terminerEtape(r.av, P, 'hominides-est', 'approfondir', { eclairs: 5 }, J(0))
  assert.deepEqual([a.av.salles['hominides-est'].approfondi, a.av.xp - r.av.xp], [true, 60 + 25])
  assert.ok(!types(a.evenements).includes('ouverture')) // Approfondir n'ouvre rien
})

test('Épreuve (12) : ratée (2 XP par bonne réponse), réussie (+50, étoiles), rejouée (moitié)', () => {
  const base = avec([['carthage', D]])
  const rate = terminerEpreuve(base, P, 'carthage', { correct: 8, total: 12, justes: justes(8, 12) }, J(0))
  assert.deepEqual([rate.av.salles.carthage.etoiles, rate.av.salles.carthage.essais, xpDe(rate, 'epreuve')], [0, 1, 16])
  const ok = terminerEpreuve(rate.av, P, 'carthage', { correct: 11, total: 12, justes: justes(11, 12) }, J(1))
  assert.equal(ok.av.salles.carthage.etoiles, 2)
  assert.deepEqual([xpDe(ok, 'epreuve'), xpDe(ok, 'reussite'), xpDe(ok, 'etoiles')], [xpReponses(justes(11, 12)), 50, 50]) // réussite après échec : XP entière
  const encore = terminerEpreuve(ok.av, P, 'carthage', { correct: 12, total: 12, justes: justes(12, 12) }, J(1))
  assert.deepEqual([xpDe(encore, 'epreuve'), xpDe(encore, 'reussite'), xpDe(encore, 'etoiles')], [xpReponses(justes(12, 12), { rejeu: true }), 0, 25])
  const moins = terminerEpreuve(encore.av, P, 'carthage', { correct: 9, total: 12, justes: justes(9, 12) }, J(1))
  assert.equal(moins.av.salles.carthage.etoiles, 3) // les étoiles ne baissent jamais
})

test('annexe : séance unique (cartes, puis mini-épreuve de 8) ; faite quelle que soit la note', () => {
  const av = commencerEtape(avec([...tronc(0), ...tronc(1)].map((id) => [id, D])), 'koush', 'epreuve')
  const r = terminerEpreuve(av, P, 'koush', { correct: 5, total: 8, justes: justes(5, 8) }, J(0))
  assert.deepEqual([r.av.salles.koush.decouverte, r.av.salles.koush.etoiles, r.av.salles.koush.enCours], [true, 0, null])
  assert.deepEqual([xpDe(r, 'annexe'), xpDe(r, 'epreuve')], [30, 10])
  assert.ok(r.evenements.find((e) => e.type === 'ouverture').salles.includes('aksoum'))
  const parfait = terminerEpreuve(r.av, P, 'koush', { correct: 8, total: 8, justes: justes(8, 8) }, J(0))
  assert.deepEqual([xpDe(parfait, 'annexe'), xpDe(parfait, 'epreuve'), xpDe(parfait, 'reussite'), xpDe(parfait, 'etoiles')], [0, 190, 30, 45])
})

test('fil rouge terminé (une fois), titre du fil plus tard ; titre d’un monde (300 XP)', () => {
  const salles = tronc(0).map((id) => [id, { decouverte: true, etoiles: 1 }])
  const av = avec(salles, { filRouge: 'mesopotamie', titres: ['monde:prehistoire'] })
  const d = terminerEtape(av, P, 'mesopotamie', 'decouvrir', {}, J(0))
  const fin = d.evenements.find((e) => e.type === 'fil-termine')
  assert.deepEqual([fin.fil, fin.merite, fin.manque], ['mesopotamie', false, 1])
  const e = terminerEpreuve(d.av, P, 'mesopotamie', { correct: 9, total: 12, justes: justes(9, 12) }, J(0))
  const t = e.evenements.find((x) => x.type === 'titre')
  assert.deepEqual([t.id, t.xp], ['fil:mesopotamie', 150])
  assert.ok(!types(e.evenements).includes('fil-termine'))

  const monde = avec(tronc(0).map((id) => [id, id === 'mesopotamie-prehist' ? D : { decouverte: true, etoiles: 1 }]))
  const r = terminerEpreuve(monde, P, 'mesopotamie-prehist', { correct: 9, total: 12, justes: justes(9, 12) }, J(0))
  const titre = r.evenements.find((x) => x.type === 'titre')
  assert.deepEqual([titre.titre, titre.xp], ['Grand savant de la Préhistoire', 300])
  assert.ok(r.av.titres.includes('monde:prehistoire'))
})

test('migration v3 → v4 : médailles → découverte et étoiles ; XP, série, jokers, fil gardés ; le reste retiré', () => {
  const v3 = {
    xp: 5200,
    niveauCredite: 10,
    salles: {
      ...Object.fromEntries(tronc(0).map((id) => [id, { medaille: 1, meilleur: null, essais: 0, enCours: null }])),
      'hominides-est': { medaille: 3, meilleur: 18, essais: 2, enCours: null },
      'europe-paleo': { medaille: 2, meilleur: 12, essais: 1, enCours: 'epreuve' },
      'sahara-pasteurs': { medaille: 2, meilleur: null, essais: 0, enCours: null },
      mesopotamie: { medaille: 1, meilleur: null, essais: 0, enCours: 'approfondir' },
      inconnue: { medaille: 3 },
    },
    serie: { jours: 4, record: 9, dernier: J(3), jokers: 2 },
    titres: [],
    titreAffiche: 'fil:chine',
    recompenses: ['theme:indigo', 'sceau:silex'],
    cosmetiques: { theme: 'indigo', sceau: 'silex', cadre: null, effet: null },
    coffres: ['onboarding', 'or:hominides-est'],
    semaine: { debut: J(0), xp: 300, objectif: 600, coffre: false },
    filRouge: 'chine',
    bonusJour: J(3),
    aRevoirJour: null,
    onboarding: true,
  }
  const av = migrerV3(v3, P)
  assert.deepEqual(av.salles['hominides-est'], { decouverte: true, approfondi: true, etoiles: 2, essais: 2, enCours: null })
  assert.deepEqual(av.salles['europe-paleo'], { decouverte: true, approfondi: true, etoiles: 0, essais: 1, enCours: null })
  assert.deepEqual(av.salles['gobekli-tepe'], { ...SALLE_VIDE, decouverte: true })
  assert.equal(av.salles['sahara-pasteurs'].approfondi, false) // une annexe n'a pas d'Approfondir
  assert.ok(!('inconnue' in av.salles))
  // 5 200 XP : niveau 10 en V3, niveau 12 avec la nouvelle courbe, crédité sans célébration (joker du niveau 11, 2 places)
  assert.deepEqual([av.xp, av.niveauCredite, av.serie.jours, av.serie.record, av.serie.jokers, av.filRouge, av.onboarding, av.bonusJour], [5200, 12, 4, 9, 2, 'chine', true, J(3)])
  assert.deepEqual([av.jalons, av.titreAffiche], [['onboarding'], null])
  assert.deepEqual(Object.keys(av).sort(), Object.keys(aventureVide()).sort()) // ni coffres, ni cosmétiques, ni objectif
  // fil Chine : la Chine néolithique (Préhistoire), derrière le joueur, est à rattraper ; il reprend à l'Égypte
  assert.equal(salleEnCours(P, av), 'egypte')
  assert.ok(aRattraper(P, av).has('chine-neo') && estOuvert(P, av, 'chine-neo'))
  const titre = migrerV3({ ...v3, titres: ['monde:prehistoire'], titreAffiche: 'monde:prehistoire' }, P)
  assert.equal(titre.titreAffiche, 'monde:prehistoire')
})

test('migration v2 → v4 : salles, XP, série et onboarding crédités', () => {
  const today = J(10)
  const ancien = {
    chapters: { carthage: { rounds: 2 }, egypte: { rounds: 1 } },
    quizzes: { rome: { best: 18, attempts: 2 }, grece: { best: 9, attempts: 1 } },
    fiches: { a: {}, b: {}, c: {} },
    express: { x: { best: 2 } },
    days: [J(7), J(8), J(9), J(10)],
  }
  const av = migrerV2(ancien, P, today)
  const etat = (id) => [av.salles[id].decouverte, av.salles[id].approfondi, av.salles[id].etoiles]
  assert.deepEqual(['carthage', 'egypte', 'rome', 'grece'].map(etat), [[true, true, 0], [true, false, 0], [true, false, 2], [false, false, 0]])
  assert.equal(av.salles.grece.essais, 1)
  assert.equal(av.xp, 40 + 60 + 40 + (40 + 50 + 180 + 50) + 15 + 10)
  assert.deepEqual([av.serie.jours, av.onboarding, av.niveauCredite], [4, true, niveau(av.xp).niveau])
  assert.equal(migrerV2({}, P, today).onboarding, false)
})

test('onboarding : +50 XP et série une seule fois, fil rouge choisi ; passer = sans récompense', () => {
  const r = finOnboarding(aventureVide(), P, { filRouge: 'egypte' }, J(0))
  assert.deepEqual([r.av.onboarding, r.av.filRouge, r.av.xp, r.av.serie.jours], [true, 'egypte', 50, 1])
  assert.equal(finOnboarding(r.av, P, {}, J(1)).av.xp, 50) // revoir la présentation ne redonne rien
  const passe = finOnboarding(aventureVide(), P, { recompense: false }, J(0))
  assert.deepEqual([passe.av.onboarding, passe.av.xp], [true, 0])
})

// ── Épreuve : questions sur les cartes vues (lib/epreuve.js) ───────────────────
const ctxQ = contexteQuestions()
test('épreuve : 12 questions (8 pour une annexe) sur les cartes vues ; 3 ratées reviennent', () => {
  const ch = HANDWRITTEN.carthage
  const niv1 = reservoirSalle(ch, { niveaux: [1], personnes: ctxQ.personnes('carthage') })
  const vues = cartesVues(ch.cards, [1])
  for (const q of niv1) assert.ok((cartesDe(q) ?? []).every((id) => vues.has(id)), q.id)
  assert.ok(reservoirSalle(ch, { niveaux: [1, 2] }).length > niv1.length)
  const ids = composerEpreuve(niv1, { longueur: 12, rattrapage: 3 })
  assert.deepEqual([ids.length, new Set(ids).size], [12, 12])
  assert.ok(ids.filter((id) => id.startsWith('hand-')).length >= 8)
  const failed = ids.slice(0, 5)
  const suivante = composerEpreuve(niv1, { longueur: 12, rattrapage: 3, failed, asked: ids, attempt: 1 })
  assert.equal(suivante.filter((id) => failed.includes(id)).length, 3)
  assert.equal(composerEpreuve(niv1, { longueur: 8, rattrapage: 2 }).length, 8)
})

test('épreuve : sur les 214 salles, assez de questions sur les cartes de Découvrir (12 au tronc, 8 aux annexes)', () => {
  for (const [id, ch] of Object.entries(HANDWRITTEN)) {
    const pool = reservoirSalle(ch, { niveaux: [1], personnes: ctxQ.personnes(id) })
    assert.ok(pool.length >= (P.position.has(id) ? 12 : 8), `${id} : ${pool.length}`)
    assert.ok(!pool.some((q) => q.carte === null))
  }
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

// ── Sprint 34 : relecture des questions générées du tronc ──
test('cartes : un seul « … » par nom masqué, leurres de date de la même ère, aucun leurre pendant un conflit long', () => {
  // « Mary Leakey y découvre » → « … y découvre », pas « … … y découvre »
  assert.equal(masquerNom('Mary Leakey y découvre un crâne.', 'Louis et Mary Leakey').texte, '… y découvre un crâne.')
  // « askia » est un titre : le père d'Askia Daoud reste lisible
  assert.equal(masquerNom('Fils d’Askia Mohammed, il règne trente ans.', 'Askia Daoud').texte, 'Fils d’Askia Mohammed, il règne trente ans.')
  const ere = (t) => String(t).includes('av. J.-C.')
  let annees = 0
  for (const [civId, ch] of Object.entries(HANDWRITTEN)) {
    for (const q of questionsDesCartes(ch.cards, { personnes: [] })) {
      if (!/-annee(-|$)/.test(q.id)) continue
      annees++
      // pas de « 1995 » pour une date de 9600 av. J.-C., pas de « 66 » pour « 66 av. J.-C. »
      for (const o of q.options) assert.equal(ere(o), ere(q.options[0]), `${civId}/${q.id} : leurre « ${o} » d'une autre ère`)
      const c = ch.cards.find((x) => x.id === q.carte)
      if (c.type === 'war' && typeof c.fin === 'number') {
        for (const o of q.options.slice(1)) {
          const y = Number(o.replace(/\D/g, '')) * (ere(o) ? -1 : 1)
          assert.ok(y < c.annee || y > c.fin, `${civId}/${q.id} : leurre ${o} pendant le conflit (${c.annee}-${c.fin})`)
        }
      }
    }
  }
  assert.ok(annees > 700, `${annees} questions de date`)
  // conflit long : sans `fin`, un leurre pourrait tomber pendant le conflit ; avec `fin`, jamais
  const guerre = { id: 'mousquets', tier: 1, type: 'war', nom: 'Guerres des mousquets', annee: 1807, adversaires: ['A'], allies: ['B'], vainqueur: 'Aucun' }
  for (const fin of [1842, 1950]) {
    const [q] = questionsDesCartes([{ ...guerre, fin }])
    assert.ok(q.options.slice(1).every((o) => Number(o) < 1807 || Number(o) > fin), `fin ${fin} : ${q.options}`)
  }
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

// ── Carte du parcours (sprint 30) ─────────────────────────────────────────────
const LABELS = new Map(JSON.parse(readFileSync(new URL('../src/data/index.json', import.meta.url))).epochs.flatMap((e) => e.continents.flatMap((c) => c.civilizations.map((x) => [x.id, x.label]))))
const nomDe = (id) => LABELS.get(id) ?? id
const FILS = [null, ...P.filsRouges.map((f) => f.id)]

test('îlots : chaque annexe hors du chemin est dans un seul îlot, de son monde ; ancres et suites', () => {
  for (const fil of FILS) {
    const av = { ...aventureVide(), filRouge: fil }
    const vus = [...chemin(P, fil)]
    for (const [id, groupes] of ilots(P, av))
      for (const g of groupes)
        g.forEach((b, k) => {
          assert.equal(P.monde.get(b.id), P.monde.get(id), `${b.id} hors du monde de ${id}`)
          assert.equal(b.suite, k > 0 && P.parent.get(b.id) === g[k - 1].id)
          vus.push(b.id)
        })
    assert.equal(new Set(vus).size, vus.length, `fil ${fil} : une annexe dans deux îlots`)
    assert.equal(vus.length, P.ordre.length, `fil ${fil} : annexes oubliées`)
  }
  const sans = ilots(P, aventureVide())
  const ids = (id) => sans.get(id).flat().map((b) => b.id)
  assert.ok(ids('chine-imperiale').includes('lapita'), 'Lapita ancrée à Qin et Han')
  assert.ok(ids('chine-tang-song').includes('goryeo'), 'Goryeo ancrée aux Tang-Song')
  assert.deepEqual(sans.get('egypte').find((g) => g[0].id === 'koush').map((b) => [b.id, b.suite]), [['koush', false], ['aksoum', true]])
  // fil Corée : Goryeo est une salle du chemin, plus une bulle
  const coree = P.filsRouges.find((f) => f.membres.includes('goryeo')).id
  assert.ok(!ilots(P, { ...aventureVide(), filRouge: coree }).get('chine-tang-song').flat().some((b) => b.id === 'goryeo'))
})

test('îlots : une suite touche toujours l’annexe dont elle dépend (2 colonnes ou 1)', () => {
  const g = [[{ id: 'a' }], [{ id: 'b' }, { id: 'c', suite: true }, { id: 'd', suite: true }], [{ id: 'e' }]]
  for (const cols of [1, 2]) {
    const { cellules } = grilleIlot(g, cols)
    const pos = new Map(cellules.map((c) => [c.id, c]))
    for (const [p, e] of [['b', 'c'], ['c', 'd']]) assert.equal(Math.abs(pos.get(p).rang - pos.get(e).rang) + Math.abs(pos.get(p).col - pos.get(e).col), 1)
    assert.equal(new Set(cellules.map((c) => `${c.rang},${c.col}`)).size, 5)
  }
})

/** Distance d'un point à un rectangle. */
const distRect = ([px, py], r) => Math.hypot(Math.max(r.x - px, 0, px - (r.x + r.l)), Math.max(r.y - py, 0, py - (r.y + r.h)))
const chevauche = (a, b) => a.x < b.x + b.l && b.x < a.x + a.l && a.y < b.y + b.h && b.y < a.y + a.h

test('carte : rien ne se chevauche, rien ne sort de l’écran, la route évite les îlots (6 largeurs × 33 fils × 5 états)', () => {
  let cartes = 0
  for (const fil of FILS) {
    const ch = chemin(P, fil)
    const tr = ch.filter((id) => P.position.has(id))
    const jusqua = (ids, s) => avec(ids.map((id) => [id, { decouverte: true, ...s }]), { filRouge: fil })
    const etats = [
      { ...aventureVide(), filRouge: fil }, // nouveau joueur
      jusqua(ch.slice(0, Math.floor(ch.length / 3)), { etoiles: 2 }), // en route, « À revoir » due
      jusqua(tr.slice(0, Math.floor(tr.length / 2)), { etoiles: 1 }), // fil choisi en route : salles à rattraper
      jusqua(ch.slice(0, -1), { etoiles: 3 }), // dernière salle
      jusqua(P.ordre, { etoiles: 3 }), // tout est fait
    ]
    etats.forEach((av, k) => {
      const salles = modeleCarte(P, av, { nom: nomDe, revoir: k === 1 || k === 4 })
      // une salle de fil suivie (plus loin sur le chemin) d'une salle découverte est « à rattraper »
      if (k === 2 && fil && P.filsRouges.find((f) => f.id === fil).membres.some((id) => !P.position.has(id) && ch.indexOf(id) < ch.indexOf(tr[Math.floor(tr.length / 2) - 1])))
        assert.ok(salles.some((s) => s.etat === 'rattraper'), `fil ${fil} : salle à rattraper attendue`)
      for (const largeur of [320, 360, 375, 390, 430, 480]) {
        const carte = disposerCarte(salles, { largeur, mondes: P.mondes.length })
        const W = carte.largeur
        cartes++
        const ctx = `fil ${fil}, état ${k}, largeur ${largeur}`
        const rects = rectangles(carte).sort((a, b) => a.y - b.y)
        for (const r of rects) assert.ok(r.x >= 0 && r.x + r.l <= W + 0.01 && r.y >= 0 && r.y + r.h <= carte.hauteur, `${ctx} : ${r.type} ${r.id} hors de la carte`)
        for (let i = 0; i < rects.length; i++)
          for (let j = i + 1; j < rects.length && rects[j].y < rects[i].y + rects[i].h; j++)
            assert.ok(!chevauche(rects[i], rects[j]), `${ctx} : ${rects[i].type} ${rects[i].id} chevauche ${rects[j].type} ${rects[j].id}`)
        // bulles : dans leur îlot, dans l'écran, à 46 px les unes des autres
        for (const s of carte.salles) {
          if (!s.ilot) continue
          for (const c of s.ilot.cellules) {
            assert.ok(c.x >= s.ilot.x && c.x + GEO.bulle <= s.ilot.x + s.ilot.l && c.y >= s.ilot.y && c.y + GEO.bulle <= s.ilot.y + s.ilot.h, `${ctx} : bulle ${c.id} hors de son îlot`)
            assert.ok(c.x >= GEO.marge && c.x + GEO.bulle <= W - GEO.marge, `${ctx} : bulle ${c.id} hors de l'écran`)
          }
        }
        // route : monte toujours, et passe à plus de 12 px des îlots et des bulles « À revoir »
        carte.route.forEach((p, i) => i && assert.ok(p[1] < carte.route[i - 1][1], `${ctx} : la route redescend`))
        const obstacles = carte.salles.flatMap((s) => [s.ilot, s.revoir].filter(Boolean))
        for (let kk = 0; kk < carte.route.length - 1; kk++) {
          const [y1, y0] = [carte.route[kk][1], carte.route[kk + 1][1]]
          const proches = obstacles.filter((o) => o.y < y1 + 40 && o.y + o.h > y0 - 40)
          for (let t = 0; t <= 24; t++) {
            const p = pointRoute(carte.route, kk, t / 24)
            for (const o of proches) assert.ok(distRect(p, o) > 12, `${ctx} : la route traverse l'îlot ou la bulle près de (${Math.round(p[0])}, ${Math.round(p[1])})`)
          }
        }
        // une seule salle en cours, son « Jouer » ; « À revoir » une seule fois si due
        assert.ok(carte.salles.filter((s) => s.jouer).length <= 1)
        if (k === 1) assert.equal(carte.salles.filter((s) => s.revoir).length, 1)
      }
    })
  }
  assert.equal(cartes, FILS.length * 5 * 6)
})

test('carte : îlots repliés au-delà de 6 annexes (2 bulles utiles + « +N »), sinon toutes', () => {
  const salles = modeleCarte(P, aventureVide(), { nom: nomDe })
  const califat = salles.find((s) => s.id === 'califat')
  assert.ok(califat.annexes.length > 6)
  assert.equal(califat.ilot.flat().length, 3)
  assert.equal(califat.ilot.at(-1)[0].plus, califat.annexes.length - 2)
  const egypte = salles.find((s) => s.id === 'egypte')
  assert.equal(egypte.ilot.flat().length, egypte.annexes.length)
  // une annexe ouverte passe devant les fermées dans un îlot replié
  const av = avec([...tronc(0), ...tronc(1), ...tronc(2).slice(0, 5)].map((id) => [id, D]))
  const ouverte = modeleCarte(P, av, { nom: nomDe }).find((s) => s.id === 'califat').ilot.flat()[0]
  assert.equal(ouverte.etat, 'ouverte')
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
test('validateur : nom court manquant, trop long, en double ou d’une salle inconnue', () => {
  assert.ok(errs((d) => delete d.courts['hominides-est']).length)
  assert.ok(errs((d) => (d.courts.rome = 'Un nom beaucoup trop long')).length)
  assert.ok(errs((d) => (d.courts.carthage = 'Mayas')).length)
  assert.ok(errs((d) => (d.courts['pas-une-salle'] = 'X')).length)
})
test('validateur : ancre manquante, inutile ou hors du tronc de son monde', () => {
  assert.ok(errs((d) => delete d.ancres.lapita).length)
  assert.ok(errs((d) => (d.ancres.koush = 'egypte')).length)
  assert.ok(errs((d) => (d.ancres.lapita = 'byzance')).length)
  assert.ok(errs((d) => (d.ancres.goryeo = 'six-dynasties')).length)
})

// ── Écrans d'une salle (sprint 31) : panneau court, ce qui s'ouvre, choix du fil ──
const T = { tier1: 9, tier2: 5 }
test('panneau : salle du tronc, de « à découvrir » à ★★★, un seul gros bouton', () => {
  const id = tronc(1)[0]
  let m = panneauSalle(P, avec([], { filRouge: null }), tronc(0)[0], { tailles: T })
  assert.equal(m.ouvert, true)
  assert.deepEqual([m.bouton.etape, m.bouton.titre, m.bouton.detail], ['decouvrir', 'Découvrir', '9 cartes et 3 questions éclair'])
  assert.deepEqual(m.etapes.map((e) => e.etat), ['actif', 'a-venir'])
  assert.equal(m.approfondir.etat, 'ferme')
  assert.match(m.approfondir.detail, /Après Découvrir · 5 cartes/)
  assert.equal(m.place.salle, 1)
  // fermée : pas de bouton, une raison
  m = panneauSalle(P, aventureVide(), id, { tailles: T })
  assert.equal(m.ouvert, false)
  assert.equal(m.bouton, null)
  assert.equal(m.raison.type, 'monde')
  // découverte : l'épreuve, Approfondir en bonus
  m = panneauSalle(P, avec([[id, D]]), id, { tailles: T })
  assert.deepEqual([m.bouton.etape, m.bouton.titre], ['epreuve', 'Passer l’épreuve'])
  assert.deepEqual(m.etapes.map((e) => e.etat), ['fait', 'actif'])
  assert.equal(m.approfondir.etat, 'ouvert')
  // ★★ et Approfondir fait : rejouer, « Revoir les cartes » (les deux niveaux)
  m = panneauSalle(P, avec([[id, { ...D, approfondi: true, etoiles: 2 }]]), id, { tailles: T })
  assert.deepEqual([m.bouton.titre, m.bouton.rejouer], ['Rejouer l’épreuve', true])
  assert.match(m.bouton.detail, /Découvrir et d’Approfondir/)
  assert.deepEqual([m.approfondir.etat, m.approfondir.titre, m.approfondir.detail], ['fait', 'Revoir les cartes', 'Découvrir et Approfondir · 14 cartes'])
  assert.deepEqual(m.etapes.map((e) => e.id), ['decouvrir', 'epreuve', 'approfondir'])
  // ★★★ : se rejoue pour le plaisir ; étape commencée : « Reprendre »
  assert.match(panneauSalle(P, avec([[id, { ...D, etoiles: 3 }]]), id).bouton.detail, /pour le plaisir/)
  assert.equal(panneauSalle(P, avec([[id, { ...D, enCours: 'epreuve' }]]), id).bouton.titre, 'Reprendre l’épreuve')
  assert.equal(panneauSalle(P, avec([[id, { ...D, enCours: 'approfondir' }]]), id).bouton.titre, 'Reprendre Approfondir')
})
test('panneau : annexe en une séance, puis mini-épreuve à rejouer ; pas d’Approfondir', () => {
  const id = 'sahara-pasteurs'
  const av = avec([['hominides-est', D]])
  let m = panneauSalle(P, av, id, { tailles: { tier1: 7, tier2: 3 }, nom: (x) => `<${x}>` })
  assert.equal(m.tronc, false)
  assert.equal(m.approfondir, null)
  assert.equal(m.annexeDeNom, '<hominides-est>')
  assert.equal(m.resume, '7 cartes, puis 8 questions')
  assert.deepEqual([m.bouton.etape, m.bouton.titre, m.bouton.detail], ['decouvrir', 'Commencer', 'Environ 4 minutes'])
  m = panneauSalle(P, avec([['hominides-est', D], [id, { enCours: 'epreuve' }]]), id)
  assert.deepEqual([m.bouton.etape, m.bouton.titre], ['epreuve', 'Reprendre la séance'])
  m = panneauSalle(P, avec([['hominides-est', D], [id, { ...D, etoiles: 1 }]]), id)
  assert.deepEqual([m.bouton.etape, m.bouton.titre, m.resume], ['epreuve', 'Rejouer la mini-épreuve', null])
  assert.deepEqual(m.etapes.map((e) => e.titre), ['Séance', 'Mini-épreuve'])
  assert.equal(dureeSeance(7, 8), 4)
})
test('panneau : sur tout le parcours et dans tous les états, le gros bouton mène à une étape jouable', () => {
  const etats = [{}, { enCours: 'decouvrir' }, D, { ...D, enCours: 'epreuve' }, { ...D, etoiles: 2 }, { ...D, approfondi: true, etoiles: 3 }]
  for (const fil of [null, 'coree', 'chine']) {
    for (const id of P.ordre) {
      for (const etat of etats) {
        // tout ce qui précède est découvert : la salle est ouverte
        const av = avec([...P.ordre.filter((x) => x !== id).map((x) => [x, D]), [id, etat]], { filRouge: fil })
        const m = panneauSalle(P, av, id)
        assert.ok(m.bouton, `${id} : pas de bouton`)
        assert.ok(etapeAccessible(P, av, id, m.bouton.etape), `${id} ${JSON.stringify(etat)} → ${m.bouton.etape} injouable`)
      }
    }
  }
})
test('fin de Découvrir : ce qui s’ouvre (salle suivante, annexes, monde)', () => {
  const [a, b] = tronc(0)
  let r = terminerEtape(aventureVide(), P, a, 'decouvrir', {}, '2026-11-17')
  let o = ceQuiSouvre(P, r.av, r.evenements)
  assert.deepEqual(o.chemin, [b])
  assert.ok(o.annexes.includes('sahara-pasteurs'))
  assert.deepEqual(o.mondes, [])
  // dernière salle de la Préhistoire : le monde suivant s'ouvre avec sa 1re salle
  const av = avec(tronc(0).slice(0, -1).map((x) => [x, D]))
  r = terminerEtape(av, P, tronc(0).at(-1), 'decouvrir', {}, '2026-11-17')
  o = ceQuiSouvre(P, r.av, r.evenements)
  assert.deepEqual(o.mondes, [1])
  assert.equal(o.chemin[0], tronc(1)[0])
})
test('séance d’annexe : aucune question éclair, pas même au milieu du paquet', () => {
  for (const id of ['sahara-pasteurs', 'nok', 'koush']) {
    const ch = HANDWRITTEN[id]
    const paquet = ['cover', ...ch.cards.filter((c) => c.tier === 1).map((c) => c.id), 'recap']
    const r = choisirEclairs({ questions: ch.quiz, paquet, nombre: 0, milieu: Math.floor(paquet.length / 2), graine: id })
    assert.deepEqual([r.milieu, r.fin.length], [null, 0], id)
  }
})
test('choix du fil : salles ajoutées, « déjà sur ton chemin », fils terminés à la fin', () => {
  let liste = choixFils(P, aventureVide())
  assert.equal(liste.length, P.filsRouges.length)
  const de = (l, id) => l.find((f) => f.id === id)
  assert.equal(de(liste, 'coree').ajoutees.length, 5)
  assert.equal(de(liste, 'france').ajoutees.length, 0)
  assert.equal(liste[0].id, 'coree') // le plus de salles à faire d'abord
  const groupes = liste.map((f) => (f.termine ? 2 : f.ajoutees.length ? 0 : 1))
  assert.deepEqual(groupes, [...groupes].sort((x, y) => x - y))
  assert.match(de(liste, 'perse').apercu, /, /) // 4 salles ajoutées : leurs noms
  assert.match(de(liste, 'coree').apercu, /^De « .+ » à « .+ »$/) // 5 : la première et la dernière
  // fil terminé (toutes ses salles découvertes) : à la fin, marqué
  const coree = P.filsRouges.find((f) => f.id === 'coree')
  liste = choixFils(P, avec(coree.membres.map((x) => [x, { ...D, etoiles: 1 }]), { filRouge: 'coree', titres: ['fil:coree'] }))
  const c = de(liste, 'coree')
  assert.deepEqual([c.termine, c.actuel, c.faites, c.titreObtenu], [true, true, 5, true])
  assert.equal(liste.at(-1).termine, true)
})

// ── Profil, Collections, Réglages (sprint 32) ────────────────────────────────

test('jours joués : un de plus par jour d’activité (pas deux le même jour), jokers et série perdue compris', () => {
  let av = aventureVide()
  for (const j of [J(0), J(0), J(1), J(4), J(5), J(5)]) av = enregistrerActivite(av, j).av
  assert.deepEqual([av.joursJoues, av.serie.jours, av.serie.record], [4, 2, 2])
})

test('migration v4 → v5 : jours joués estimés (record, jours d’activité gardés), jamais revus à la baisse', () => {
  const av = { ...aventureVide(), serie: { jours: 3, record: 9, dernier: J(3), jokers: 0 } }
  assert.equal(migrerV4(av, [J(0), J(1), J(1), J(3)]).joursJoues, 9) // record > 3 jours distincts
  assert.equal(migrerV4(av, Array.from({ length: 12 }, (_, i) => J(i))).joursJoues, 12)
  assert.equal(migrerV4({ ...av, joursJoues: 40 }, []).joursJoues, 40)
  const { joursJoues, ...reste } = migrerV4(av, [])
  assert.deepEqual([joursJoues, reste], [9, (({ joursJoues: _, ...r }) => r)(av)]) // rien d'autre ne change
  // chaîne complète d'une sauvegarde v3 : v3 → v4 → v5, toutes les clés de la v5
  const v5 = migrerV4(migrerV3({ xp: 300, salles: {}, serie: { jours: 2, record: 5, dernier: J(1), jokers: 1 }, onboarding: true }, P), [J(0), J(1)])
  assert.deepEqual([v5.joursJoues, Object.keys(v5).sort()], [5, Object.keys(aventureVide()).sort()])
})

test('état de la série : faite, à prolonger, à sauver (jokers), perdue, aucune ; d’accord avec enregistrerActivite', () => {
  const serie = { jours: 6, record: 10, dernier: J(3), jokers: 2 }
  assert.deepEqual(etatSerie(aventureVide().serie, J(0)), { statut: 'aucune', jours: 0, jokers: 0 })
  assert.deepEqual(etatSerie(serie, J(3)), { statut: 'faite', jours: 6, jokers: 0 })
  assert.deepEqual(etatSerie(serie, J(4)), { statut: 'a-prolonger', jours: 6, jokers: 0 })
  assert.deepEqual(etatSerie(serie, J(6)), { statut: 'a-sauver', jours: 6, jokers: 2 })
  assert.deepEqual(etatSerie(serie, J(7)), { statut: 'perdue', jours: 0, jokers: 0 })
  // ce que le Profil annonce est ce qui arrive si l'on joue ce jour-là
  for (let k = 3; k <= 9; k++)
    for (const jokers of [0, 1, 2, 3]) {
      const s = { ...serie, jokers }
      const e = etatSerie(s, J(k))
      const r = enregistrerActivite({ ...aventureVide(), serie: s }, J(k))
      const attendu = e.statut === 'faite' ? s.jours : e.statut === 'perdue' ? 1 : s.jours + 1
      assert.equal(r.av.serie.jours, attendu, `J(${k}), ${jokers} joker(s) : ${e.statut}`)
      assert.equal(r.evenements.find((x) => x.type === 'joker-utilise')?.nombre ?? 0, e.jokers, `J(${k}), ${jokers} joker(s) : jokers utilisés`)
    }
})

test('texte de la série (Profil)', () => {
  assert.deepEqual(texteSerie({ statut: 'faite', jours: 13, jokers: 0 }, 21), { titre: 'Série de 13 jours', detail: 'Jouée aujourd’hui · record 21 jours' })
  assert.deepEqual(texteSerie({ statut: 'a-prolonger', jours: 1, jokers: 0 }, 1), { titre: 'Série de 1 jour', detail: 'Joue aujourd’hui pour la prolonger' })
  assert.equal(texteSerie({ statut: 'a-sauver', jours: 4, jokers: 1 }, 4).detail, 'Un joker la sauve si tu joues aujourd’hui')
  assert.equal(texteSerie({ statut: 'a-sauver', jours: 4, jokers: 2 }, 4).detail, '2 jokers la sauvent si tu joues aujourd’hui')
  assert.deepEqual(texteSerie({ statut: 'perdue', jours: 0, jokers: 0 }, 21), { titre: 'Pas de série en cours', detail: 'Record : 21 jours · joue aujourd’hui pour repartir' })
  assert.equal(texteSerie({ statut: 'aucune', jours: 0, jokers: 0 }, 0).titre, 'Pas encore de série')
})

test('prochain rang : rang suivant et son niveau, rien après le dernier', () => {
  assert.deepEqual(prochainRang(1), { niveau: 5, rang: 'Apprenti' })
  assert.deepEqual(prochainRang(12), { niveau: 15, rang: 'Érudit' })
  assert.deepEqual(prochainRang(15), { niveau: 20, rang: 'Chroniqueur' })
  assert.equal(prochainRang(RANGS.at(-1)[0]), null)
  for (let k = 1; k < RANGS.at(-1)[0]; k++) assert.equal(rang(prochainRang(k).niveau), prochainRang(k).rang)
})

test('Profil : salles découvertes, étoiles, jours joués ; « À revoir » salle par salle', () => {
  const av = avec([['hominides-est', { ...D, etoiles: 3 }], ['europe-paleo', { ...D, etoiles: 1 }], ['gobekli-tepe', D], ['mesopotamie', { essais: 1 }], ['inconnue', { ...D, etoiles: 3 }]], { joursJoues: 7 })
  assert.deepEqual(chiffresProfil(P, av), { salles: 3, etoiles: 4, jours: 7 })
  const chapters = { egypte: { toReview: ['a', 'b'] }, carthage: { toReview: [] }, nok: { toReview: ['c'] } }
  const quizzes = { egypte: { failed: ['q1'] }, nok: { failed: ['q2', 'q3', 'q4'] }, carthage: { failed: [] } }
  const r = aRevoirParSalle(P, chapters, quizzes)
  assert.deepEqual(r, { salles: [{ id: 'nok', cartes: 1, questions: 3 }, { id: 'egypte', cartes: 2, questions: 1 }], cartes: 3, questions: 4 })
  assert.equal(texteARevoir(r), '3 cartes et 4 questions · +20 XP')
  assert.equal(texteARevoir({ cartes: 0, questions: 1 }, true), '1 question · séance du jour faite')
  assert.equal(texteARevoir({ cartes: 0, questions: 0 }), 'Rien à revoir pour l’instant')
})

test('Collections : mondes (titre, ouvert, pas encore ouvert), fils (le sien, titres obtenus, le reste), titre ultime', () => {
  const etoile = (ids) => ids.map((id) => [id, { ...D, etoiles: 1 }])
  const av = avec([...etoile(tronc(0)), ...etoile(P.filsRouges.find((f) => f.id === 'mesopotamie').membres)], { filRouge: 'chine' })
  const mondes = mondesCollection(P, av)
  assert.deepEqual(mondes.map((m) => m.statut), ['titre', 'ouvert', 'ferme', 'ferme', 'ferme'])
  assert.deepEqual([mondes[0].troncEtoile, mondes[0].tronc, mondes[0].titre], [tronc(0).length, tronc(0).length, data.mondes[0].titre])
  assert.ok(mondes[2].salles >= tronc(2).length) // le chemin du joueur (fil Chine compris)
  const fils = filsCollection(P, av)
  assert.equal(fils.length, P.filsRouges.length)
  assert.deepEqual([fils[0].id, fils[0].actuel, fils[1].id, fils[1].titreObtenu], ['chine', true, 'mesopotamie', true])
  assert.ok(fils[0].aRattraper >= 1) // la Chine néolithique, derrière le joueur
  assert.ok(fils.slice(2).every((f) => !f.actuel && !f.titreObtenu))
  const u = titreUltime(P, av)
  assert.deepEqual([u.titre, u.total], [data.titreUltime, P.ordre.length])
  assert.equal(u.faites, new Set([...tronc(0), ...P.filsRouges.find((f) => f.id === 'mesopotamie').membres]).size)
})

// ── Rappels (sprint 33) ──────────────────────────────────────────────────────

const RAPPEL_SALLE = { id: 'carthage', nom: 'Carthage', reprendre: false }
/** Le 18 novembre 2026 (ou le jour `j`) à h h m, heure locale. */
const le = (h, m = 0, j = 18) => new Date(2026, 10, j, h, m)

test('rappels : jours « AAAA-MM-JJ » (fin de mois, d’année, 29 février, heure d’été)', () => {
  assert.equal(ajouterJours('2026-12-31', 1), '2027-01-01')
  assert.equal(ajouterJours('2026-03-01', -1), '2026-02-28')
  assert.equal(ajouterJours('2028-03-01', -1), '2028-02-29')
  assert.equal(ajouterJours('2026-03-28', 2), '2026-03-30')
  assert.equal(ajouterJours('2026-10-24', 2), '2026-10-26')
  assert.equal(jourLocal(le(23, 59)), '2026-11-18')
  assert.equal(jourLocal(new Date(2026, 0, 5, 0, 1)), '2026-01-05')
})

test('rappels : « dernière chance » de la série = etatSerie (à prolonger ou à sauver ce jour-là, perdue le lendemain)', () => {
  const base = '2026-11-18'
  for (let ecart = 1; ecart <= 6; ecart++)
    for (let jokers = 0; jokers <= 3; jokers++)
      for (const jours of [1, 2, 9]) {
        const serie = { jours, record: jours, dernier: ajouterJours(base, -ecart), jokers }
        for (let k = 0; k <= 6; k++) {
          const jour = ajouterJours(base, k)
          const enDanger = ['a-prolonger', 'a-sauver'].includes(etatSerie(serie, jour).statut) && etatSerie(serie, ajouterJours(jour, 1)).statut === 'perdue'
          assert.equal(derniereChance(serie) === jour, enDanger, `écart ${ecart}, ${jokers} joker(s), le ${jour}`)
        }
      }
  assert.equal(derniereChance({ jours: 0, record: 3, dernier: null, jokers: 2 }), null)
  // et ce que fait vraiment la progression : jouer ce jour-là garde la série (joker utilisé), le lendemain elle est perdue
  const av = { ...aventureVide(), serie: { jours: 4, record: 4, dernier: '2026-11-16', jokers: 1 } }
  const jour = derniereChance(av.serie)
  assert.equal(jour, '2026-11-18')
  assert.equal(enregistrerActivite(av, jour).av.serie.jours, 5)
  assert.ok(enregistrerActivite(av, ajouterJours(jour, 1)).evenements.some((e) => e.type === 'serie-perdue'))
})

test('rappels : rien la nuit (21 h – 8 h), avant l’heure choisie ni si l’on a joué ce jour-là ; sinon le rappel du jour', () => {
  const etat = etatRappels({ rappel: true, serie: false, heure: 18 }, { jours: 3, record: 3, dernier: '2026-11-16', jokers: 2 }, RAPPEL_SALLE)
  for (const [h, m] of [[0, 15], [7, 59], [8, 0], [12, 0], [17, 59], [21, 0], [23, 30]]) assert.equal(choisirRappel(etat, null, le(h, m)), null, `${h} h ${m}`)
  const r = choisirRappel(etat, null, le(18))
  assert.deepEqual([r.type, r.url, r.corps], ['rappel', '#/?salle=carthage', 'Prochaine salle : Carthage.'])
  assert.ok(choisirRappel(etat, null, le(20, 59)))
  assert.equal(choisirRappel({ ...etat, joue: '2026-11-18' }, null, le(19)), null)
  assert.equal(choisirRappel(etat, noterEnvoi(null, '2026-11-18', 'rappel'), le(20)), null) // une fois par jour
  assert.ok(choisirRappel(etat, noterEnvoi(null, '2026-11-17', 'rappel'), le(20))) // le journal d'hier ne compte plus
  const tard = etatRappels({ rappel: true, heure: 20 }, null, RAPPEL_SALLE)
  assert.equal(choisirRappel(tard, null, le(19, 30)), null)
  assert.ok(choisirRappel(tard, null, le(20)))
  assert.equal(choisirRappel(etatRappels({ rappel: false, serie: false, heure: 18 }, null, RAPPEL_SALLE), null, le(19)), null)
  assert.equal(choisirRappel(undefined, null, le(19)), null)
  for (let h = 0; h < 24; h++) for (const heure of [17, 18, 19, 20]) {
    const c = choisirRappel(etatRappels({ rappel: true, serie: true, heure }, null, null), null, le(h))
    assert.equal(Boolean(c), h >= heure && h < NUIT.debut, `${h} h, à partir de ${heure} h`)
  }
})

test('rappels : « série en danger » d’abord, une fois par jour ; plus rien après elle ; 2 notifications par jour au plus', () => {
  const serie = { jours: 6, record: 6, dernier: '2026-11-17', jokers: 0 } // dernière chance : le 18
  const tout = etatRappels({ rappel: true, serie: true, heure: 18 }, serie, RAPPEL_SALLE)
  const s = choisirRappel(tout, null, le(19))
  assert.deepEqual([s.type, s.titre, s.corps, s.url], ['serie', 'Ta série de 6 jours va s’arrêter', 'Termine une étape avant minuit pour la garder. Prochaine salle : Carthage.', '#/?salle=carthage'])
  assert.equal(choisirRappel(tout, noterEnvoi(null, '2026-11-18', 'serie'), le(20)), null)
  let journal = noterEnvoi(null, '2026-11-18', 'rappel') // rappel montré, puis « série en danger » allumée dans la soirée
  assert.equal(choisirRappel(tout, journal, le(20)).type, 'serie')
  journal = noterEnvoi(journal, '2026-11-18', 'serie')
  assert.deepEqual(journal.envoyes, ['rappel', 'serie'])
  assert.equal(choisirRappel(tout, journal, le(20, 30)), null)
  assert.equal(choisirRappel(tout, journal, le(19, 0, 19)).type, 'rappel') // le 19 : série perdue, rappel du jour seulement
  // série d'un jour, ou sauvée par un joker : pas d'alerte ce soir
  const seulement = { rappel: false, serie: true, heure: 18 }
  assert.equal(choisirRappel(etatRappels(seulement, { ...serie, jours: 1 }, RAPPEL_SALLE), null, le(19)), null)
  const joker = etatRappels(seulement, { ...serie, jokers: 1 }, RAPPEL_SALLE)
  assert.equal(choisirRappel(joker, null, le(19)), null)
  assert.equal(choisirRappel(joker, null, le(19, 0, 19)).type, 'serie') // le joker repousse la dernière chance d'un jour
  assert.equal(choisirRappel({ ...joker, joue: '2026-11-19' }, null, le(19, 0, 19)), null)
})

test('rappels : textes (titre qui change chaque jour, séance commencée, chemin fini) ; heure inconnue → 18 h', () => {
  assert.equal(new Set([0, 1, 2].map((k) => texteRappel(RAPPEL_SALLE, ajouterJours('2026-11-18', k)).titre)).size, 3)
  assert.equal(texteRappel(RAPPEL_SALLE, '2026-11-18').titre, texteRappel(RAPPEL_SALLE, '2026-11-21').titre)
  assert.equal(texteRappel({ ...RAPPEL_SALLE, reprendre: true }, '2026-11-18').corps, 'Reprends ta séance : Carthage.')
  assert.equal(texteRappel(null, '2026-11-18').corps, 'Des épreuves et des annexes t’attendent encore sur la carte.')
  assert.equal(choisirRappel(etatRappels({ rappel: true, heure: 18 }, null, null), null, le(19)).url, '#/')
  assert.equal(etatRappels({ rappel: true, heure: 15 }, null).reglages.heure, 18)
  assert.deepEqual(etatRappels(null, null), { v: 1, reglages: { rappel: false, serie: false, heure: 18 }, joue: null, serie: { jours: 0, derniereChance: null }, salle: null })
})

test('rappels : inscription, puis réinscription une fois par jour quand l’app est ouverte dans la plage du rappel', () => {
  const heure = 18
  assert.equal(fautInscrire({ inscrit: false }, le(10)), true)
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: null, heure }, le(10)), false) // hors plage : on garde l'inscription
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: le(10).getTime(), heure }, le(19)), true) // inscrite ce matin : recalée
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: le(18, 30).getTime(), heure }, le(19)), false) // déjà calée aujourd'hui
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: le(18, 30, 17).getTime(), heure }, le(19)), true) // calée hier : recalée
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: le(18, 30, 17).getTime(), heure: 20 }, le(19)), false) // avant l'heure choisie
  assert.equal(fautInscrire({ inscrit: true, inscriteLe: le(18, 30, 17).getTime(), heure }, le(21, 5)), false) // la nuit
})

test('service worker : rappels.js recopié dans sw.js (script classique valide, mêmes décisions)', () => {
  const sw = readFileSync(new URL('../sw/sw.js', import.meta.url), 'utf8')
  const rappels = readFileSync(new URL('../src/lib/rappels.js', import.meta.url), 'utf8')
  const code = codeServiceWorker({ sw, rappels, version: 'essai', precache: ['./', './index.html'] })
  assert.doesNotThrow(() => new vm.Script(code, { filename: 'sw.js' })) // ni import, ni export, ni nom déclaré deux fois
  assert.ok(!/^\s*(import|export)\b/m.test(code) && !code.includes('__RAPPELS__') && !code.includes('__PRECACHE__') && !code.includes('__VERSION__'))
  for (const nom of ['periodicsync', 'notificationclick', 'choisirRappel(etat, journal, maintenant)', "lireRappels('etat')", "ecrireRappels('journal'"]) assert.ok(code.includes(nom), nom)
  const ctx = vm.createContext({})
  vm.runInContext(`${codeRappels(rappels)}\nthis.choisir = choisirRappel; this.etat = etatRappels`, ctx)
  const serie = { jours: 6, record: 6, dernier: '2026-11-17', jokers: 0 }
  for (const h of [7, 18, 19, 22]) for (const reglages of [{ rappel: true, heure: 18 }, { serie: true, heure: 19 }, { rappel: true, serie: true, heure: 17 }]) {
    const attendu = choisirRappel(etatRappels(reglages, serie, RAPPEL_SALLE), null, le(h))
    assert.equal(JSON.stringify(ctx.choisir(ctx.etat(reglages, serie, RAPPEL_SALLE), null, le(h))), JSON.stringify(attendu))
  }
  assert.throws(() => codeRappels("import { x } from './y.js'\nexport const a = 1"), /importer/)
  assert.throws(() => codeRappels('export default 1'), /recopiables/)
})

console.log(`✅ Aventure : ${n} tests réussis (chemin, ouverture, à rattraper, étoiles, XP, rangs, progression, migrations, épreuve sur les cartes vues, défis, questions éclair, questions des cartes, carte du parcours, écrans d’une salle, profil et collections, rappels et service worker, validateur).`)
