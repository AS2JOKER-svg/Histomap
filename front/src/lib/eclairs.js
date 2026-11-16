/**
 * eclairs.js — Questions éclair sur les cartes déjà lues (V3.1)
 * ==============================================================
 * Règle : une question éclair ne porte que sur une carte déjà lue dans la séance.
 * Chaque question rédigée porte l'id de sa carte (champ `carte`, sprint 28 : 'id', ['id1', 'id2'] —
 * il faut avoir lu toutes ces cartes — ou null : « hors cartes », jamais posée). Le champ est posé
 * par `npm run relier` puis relu (scripts/relier-questions.mjs) ; le validateur l'exige.
 * S'il n'y a pas assez de questions sur les cartes lues, on en pose moins.
 *
 *   estVue(q, lues)    toutes les cartes de la question sont-elles dans `lues` (Set d'ids) ?
 *   choisirEclairs({ questions, paquet, nombre, milieu, graine })
 *                      → { milieu: question | null, fin: [questions] }
 *
 * Module pur, sans données : utilisé par l'app (SallePage) et par les scripts (tests, rapports).
 */
import { rng, shuffle } from './random.js'
import { cartesDe } from './questionsCartes.js'

/** La question se lit-elle dans les cartes lues ? (une question hors cartes ne l'est jamais) */
export function estVue(q, lues) {
  const ids = cartesDe(q)
  return !!ids && ids.length > 0 && ids.every((id) => lues.has(id))
}

/**
 * Questions éclair d'une séance.
 *   questions: questions candidates (rédigées), avec leur id et leur `carte`
 *   paquet   : ids des cartes de la séance, dans l'ordre (doublons des cartes à revoir permis)
 *   nombre   : questions voulues en tout
 *   milieu   : nombre de cartes lues avant la question du milieu (null = pas de question au milieu)
 *   graine   : hasard reproductible
 * La question du milieu ne porte que sur les cartes lues avant elle ; les autres, sur tout le paquet.
 */
export function choisirEclairs({ questions, paquet, nombre, milieu = null, graine = '' }) {
  const rand = rng(`eclair:${graine}`)
  const vues = (ids) => {
    const lues = new Set(ids)
    return shuffle(
      questions.filter((q) => estVue(q, lues)),
      rand
    )
  }
  const premiere = milieu ? vues(paquet.slice(0, milieu))[0] ?? null : null
  const fin = vues(paquet)
    .filter((q) => q !== premiere)
    .slice(0, Math.max(0, nombre - (premiere ? 1 : 0)))
  return { milieu: premiere, fin }
}
