/**
 * questions.js — Afficher et corriger une question
 * =================================================
 * Module léger (sans les données des quiz) : utilisé par le quiz des chapitres
 * et par le quiz express des fiches liées. Types de questions : voir lib/quiz.js.
 */
import { rng, shuffle } from './random.js'

/** Question prête à afficher : réponses mélangées (selon la tentative). */
export function prepareQuestion(q, attempt) {
  if (q.type === 'mcq' || q.type === 'map') {
    const order = shuffle(q.options.map((_, i) => i), rng(`${q.id}-${attempt}`))
    return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) }
  }
  if (q.type === 'order') {
    // mélange garanti différent de l'ordre correct
    let items = shuffle(q.items, rng(`${q.id}-${attempt}`))
    if (items.every((x, i) => x === q.items[i])) items = [...items.slice(1), items[0]]
    return { ...q, shuffled: items }
  }
  return q
}

/** La réponse donnée est-elle juste ? */
export function isCorrect(q, response) {
  if (q.type === 'tf') return response === q.answer
  if (q.type === 'order') return Array.isArray(response) && response.every((x, i) => x === q.items[i])
  return response === q.answer
}
