// Simulation d'un joueur (V3.1, sprint 29) : temps et XP par monde, niveau atteint.
//   npm run simulation                      joueur « type » et « complet », 80 % de bonnes réponses, sans fil
//   npm run simulation -- --precision 0.7 --fil chine
//
// Joueur « type »    : suit le chemin (salle en cours) : Découvrir, puis l'Épreuve jusqu'à ★ (3 essais au plus) ;
//                      une salle de fil (annexe) : séance + mini-épreuve, une fois.
// Joueur « complet » : en plus, Approfondir dans chaque salle du tronc et chaque annexe dès qu'elle s'ouvre.
// Temps : 20 s par carte, 15 s par question éclair, 12 s par question d'épreuve, 20 s par étape ;
// 15 minutes de jeu par jour (bonus du jour, série). Les règles sont celles de l'app (lib/aventure.js,
// lib/progression.js, lib/xp.js) ; les nombres de cartes viennent des chapitres (src/data/revision-meta.json).
import { readFileSync } from 'fs'
import { createParcours, estOuvert, estTronc, salleEnCours } from '../src/lib/aventure.js'
import { aventureVide, changerFil, terminerEpreuve, terminerEtape } from '../src/lib/progression.js'
import { niveau } from '../src/lib/xp.js'
import { rng } from '../src/lib/random.js'

const lire = (f) => JSON.parse(readFileSync(new URL(`../src/data/${f}`, import.meta.url)))
const DATA = lire('parcours.json')
const META = lire('revision-meta.json')
export const TEMPS = { carte: 20, eclair: 15, question: 12, etape: 20, jour: 15 * 60 }
const jourN = (n) => new Date(Date.UTC(2026, 10, 2 + n)).toISOString().slice(0, 10)

export function simuler({ profil = 'type', precision = 0.8, fil = null } = {}) {
  const P = createParcours(DATA)
  const rand = rng(`simulation:${profil}:${precision}:${fil}`)
  let av = changerFil(aventureVide(), P, fil).av
  let t = 0 // secondes de jeu
  const jour = () => jourN(Math.floor(t / TEMPS.jour))
  const reponses = (n) => Array.from({ length: n }, () => rand() < precision)
  const mondes = P.mondes.map((m) => ({ monde: m.nom, secondes: 0, xp: 0, salles: 0, annexes: 0, etoiles: 0, niveau: 1 }))
  const noter = (id, t0, xp0) => {
    const m = mondes[P.monde.get(id)]
    m.secondes += t - t0
    m.xp += av.xp - xp0
    m.etoiles += av.salles[id]?.etoiles ?? 0
    m.niveau = niveau(av.xp).niveau
  }
  const epreuve = (id, n, essais) => {
    for (let k = 0; k < essais; k++) {
      t += TEMPS.etape + n * TEMPS.question
      const justes = reponses(n)
      av = terminerEpreuve(av, P, id, { correct: justes.filter(Boolean).length, total: n, justes }, jour()).av
      if (av.salles[id].etoiles >= 1) return
    }
  }
  const seance = (id) => {
    const t0 = t
    const xp0 = av.xp
    t += TEMPS.etape + (META[id]?.tier1 ?? 8) * TEMPS.carte
    epreuve(id, 8, 1)
    noter(id, t0, xp0)
    mondes[P.monde.get(id)][estTronc(P, id) ? 'salles' : P.filRougeDe.get(id) === fil ? 'salles' : 'annexes']++
  }
  for (let id = salleEnCours(P, av); id; id = salleEnCours(P, av)) {
    if (!estTronc(P, id)) seance(id)
    else {
      const t0 = t
      const xp0 = av.xp
      t += TEMPS.etape + META[id].tier1 * TEMPS.carte + 3 * TEMPS.eclair
      av = terminerEtape(av, P, id, 'decouvrir', { eclairs: reponses(3).filter(Boolean).length }, jour()).av
      if (profil === 'complet') {
        t += TEMPS.etape + META[id].tier2 * TEMPS.carte + 5 * TEMPS.eclair
        av = terminerEtape(av, P, id, 'approfondir', { eclairs: reponses(5).filter(Boolean).length }, jour()).av
      }
      epreuve(id, 12, 3)
      noter(id, t0, xp0)
      mondes[P.monde.get(id)].salles++
    }
    if (profil === 'complet') for (const a of P.ordre) if (!estTronc(P, a) && !av.salles[a]?.decouverte && estOuvert(P, av, a)) seance(a)
  }
  return { mondes, xp: av.xp, niveau: niveau(av.xp), heures: t / 3600, jours: Math.ceil(t / TEMPS.jour) }
}

const hm = (s) => `${Math.floor(s / 3600)} h ${String(Math.round((s % 3600) / 60)).padStart(2, '0')}`

if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (nom, def) => {
    const i = process.argv.indexOf(`--${nom}`)
    return i > 0 ? process.argv[i + 1] : def
  }
  const precision = Number(arg('precision', 0.8))
  const fil = arg('fil', null)
  for (const profil of ['type', 'complet']) {
    const r = simuler({ profil, precision, fil })
    console.log(`\nJoueur « ${profil} » — ${Math.round(precision * 100)} % de bonnes réponses${fil ? `, fil ${fil}` : ''}`)
    console.log('Monde'.padEnd(22) + 'Salles  Annexes  Temps      XP      Niveau à la fin')
    let cumul = 0
    for (const m of r.mondes) {
      cumul += m.secondes
      console.log(`${m.monde.padEnd(22)}${String(m.salles).padStart(5)}  ${String(m.annexes).padStart(7)}  ${hm(m.secondes).padStart(8)}  ${String(m.xp).padStart(6)}   ${m.niveau} (${hm(cumul)} en tout)`)
    }
    console.log(`Total : ${r.xp} XP, niveau ${r.niveau.niveau} (${r.niveau.rang}), ${hm(r.heures * 3600)} de jeu, ≈ ${r.jours} jours à 15 min`)
  }
}
