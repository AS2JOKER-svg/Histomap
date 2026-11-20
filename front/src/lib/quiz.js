/**
 * quiz.js — Questions d'une salle (V3.1, sprint 29)
 * ==================================================
 * Décision 8 : toute question porte sur une carte déjà vue. Le réservoir d'une salle = ses questions
 * rédigées reliées aux cartes vues + les questions générées depuis ces cartes (lib/epreuve.js,
 * lib/questionsCartes.js). Plus de questions générées depuis la fiche complète : le quiz express
 * des fiches liées, lui, est généré au build (scripts/lib/express.mjs) et ne change pas.
 *
 * Une question a un id STABLE (« hand-<id> » ou « carte-<carte>-… ») : on peut mémoriser les questions
 * ratées et les reposer plus tard ; seul l'ordre des réponses change d'une tentative à l'autre.
 *
 * Types :
 *   mcq   { prompt, options[], answer: index, explanation? }
 *   tf    { prompt, answer: true|false, explanation? }        (vrai / faux)
 *   order { prompt, items[] (dans le bon ordre), explanation? } (remettre dans l'ordre)
 */
// leurres de « Qui est-ce ? » : personnes des autres fiches (scripts/build-content.mjs)
import CONTEXT from '../data/quiz-context.json'
import { findCivilization } from './data'
import { stripLinksDeep } from './links'
import { composerEpreuve, reservoirSalle } from './epreuve'
import { leurresPersonnes } from './questionsCartes'
// hasard reproductible, partagé avec le quiz express (généré au build)
import { rng, shuffle } from './random'

export { rng, shuffle, composerEpreuve }
// affichage et correction d'une question : module léger, partagé avec le quiz express
export { isCorrect, prepareQuestion } from './questions'

const lieu = (id) => {
  const r = findCivilization(id)
  return r && { epoch: r.epoch.id, continent: r.continent.id }
}

/**
 * Réservoir de questions d'une salle (ref.hand = chapitre rédigé, voir lib/chapters).
 * `niveaux` : cartes vues — [1] (Découvrir) ou [1, 2] (Découvrir + Approfondir, par défaut).
 */
export function questionPool(ref, { niveaux = [1, 2] } = {}) {
  if (!ref?.hand) return []
  const personnes = leurresPersonnes(CONTEXT.people, lieu, ref.civ.id)
  return stripLinksDeep(reservoirSalle(ref.hand, { niveaux, personnes }))
}
