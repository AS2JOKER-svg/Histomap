// Questions d'une salle reliées aux cartes (V3.1, sprint 28) : bilan partagé par le validateur
// (scripts/validate-revision.mjs) et le rapport des manques (scripts/rapport-questions-cartes.mjs).
//
// Règle (décisions 8 et 9 de la V3.1) : toute question porte sur une carte déjà vue. Une salle du tronc
// doit avoir au moins 15 questions sur ses cartes de Découvrir (Épreuve de 12 + une marge pour varier),
// une annexe au moins 10 (mini-épreuve de 8 + marge) : questions rédigées reliées aux cartes de niveau 1,
// puis questions générées depuis ces cartes (src/lib/questionsCartes.js).
import { readFileSync } from 'fs'
import { join } from 'path'
import { PATHS, assemble, loadContent } from './content.mjs'
import { cartesDe, leurresPersonnes, questionsDesCartes } from '../../src/lib/questionsCartes.js'

export const SEUILS = { tronc: 15, annexe: 10 }

/** Contexte : salles du tronc (parcours compilé) et leurres de « Qui est-ce ? » (même époque, autre continent). */
export function contexteQuestions() {
  const { byId } = assemble(loadContent())
  const lieu = (id) => {
    const w = byId.get(id)
    return w && { epoch: w.epoch.id, continent: w.continent.id }
  }
  const lire = (f) => JSON.parse(readFileSync(join(PATHS.data, f), 'utf8'))
  const parcours = lire('parcours.json')
  const people = lire('quiz-context.json').people
  return {
    tronc: new Set(parcours.mondes.flatMap((m) => m.tronc)),
    personnes: (civId) => leurresPersonnes(people, lieu, civId),
  }
}

/**
 * Bilan d'une salle.
 *   redigees  : { decouvrir, approfondir, horsCartes } — une question reliée à des cartes des deux niveaux
 *               compte en Approfondir (elle n'est posable qu'après les deux étapes) ;
 *   generees  : { decouvrir, approfondir } ;
 *   decouvrir : questions posables à l'Épreuve sans Approfondir (rédigées + générées, niveau 1) ;
 *   cartesSansQuestion : cartes de Découvrir (hors carte de territoire) sans aucune question.
 */
export function bilanSalle(civId, chapitre, ctx) {
  const cartes = chapitre.cards ?? []
  const niveau = Object.fromEntries(cartes.map((c) => [c.id, c.tier]))
  const generees = questionsDesCartes(cartes, { personnes: ctx.personnes(civId) })
  const r = { decouvrir: 0, approfondir: 0, horsCartes: 0 }
  const g = { decouvrir: 0, approfondir: 0 }
  const couvertes = new Set()
  for (const q of chapitre.quiz ?? []) {
    const ids = cartesDe(q)
    if (!ids) r.horsCartes++
    else {
      r[ids.every((id) => niveau[id] === 1) ? 'decouvrir' : 'approfondir']++
      ids.forEach((id) => couvertes.add(id))
    }
  }
  for (const q of generees) {
    g[niveau[q.carte] === 1 ? 'decouvrir' : 'approfondir']++
    couvertes.add(q.carte)
  }
  const tronc = ctx.tronc.has(civId)
  const seuil = tronc ? SEUILS.tronc : SEUILS.annexe
  const decouvrir = r.decouvrir + g.decouvrir
  return {
    civId,
    tronc,
    seuil,
    cartes1: cartes.filter((c) => c.tier === 1).length,
    cartes2: cartes.filter((c) => c.tier === 2).length,
    redigees: r,
    generees: g,
    decouvrir,
    manque: Math.max(0, seuil - decouvrir),
    cartesSansQuestion: cartes.filter((c) => c.tier === 1 && c.type !== 'map' && !couvertes.has(c.id)).map((c) => c.id),
    questionsGenerees: generees,
  }
}
