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

/**
 * Reprise d'un quiz : indice de la première question sans réponse (la dernière si tout est répondu).
 * Ne pas prendre « le nombre de réponses » : une réponse à une question disparue entre-temps
 * décalerait l'indice et ferait sauter une question.
 */
export function premiereSansReponse(questions, answers) {
  const i = questions.findIndex((q) => !answers.some((a) => a.id === q.id))
  return i === -1 ? Math.max(questions.length - 1, 0) : i
}

/**
 * Note d'un quiz terminé, calculée sur les questions réellement posées à l'écran (`ids`, par défaut
 * toutes celles du quiz) : une question disparue ne compte pas, une réponse en double non plus.
 * → { ids, correct, total, score (sur 20), failed: [ids ratés], justes: [booléens dans l'ordre des questions] }
 */
export function noteQuiz({ ids: idsQuiz = [], answers = [] }, ids = idsQuiz) {
  const reponses = ids.map((id) => answers.find((a) => a.id === id)).filter(Boolean)
  const correct = reponses.filter((a) => a.correct).length
  const total = ids.length
  return {
    ids,
    correct,
    total,
    score: total ? Math.round((correct / total) * 20) : 0,
    failed: reponses.filter((a) => !a.correct).map((a) => a.id),
    justes: reponses.map((a) => a.correct),
  }
}

/** La bonne réponse, en texte (liste « Revoir mes erreurs »). */
export function bonneReponse(q) {
  if (q.type === 'tf') return q.answer ? 'Vrai' : 'Faux'
  if (q.type === 'order') return q.items.join(' → ')
  return q.options?.[q.answer] ?? ''
}
