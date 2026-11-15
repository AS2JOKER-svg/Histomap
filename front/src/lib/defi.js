/**
 * defi.js — Défis entre amis, sans serveur (V3, sprint 25)
 * =========================================================
 * Un défi = une civilisation + une « graine » : à partir d'elles, chaque téléphone régénère
 * exactement les mêmes 10 questions (même contenu, même hasard reproductible). Le lien partagé
 * ne contient que la civilisation, la graine, le score et un prénom facultatif choisi par le joueur :
 * pas de serveur, pas de compte, pas de pistage.
 *
 *   #/defi/<civId>?g=<graine>&s=<score>&n=<prénom>
 */
import { prepareQuestion } from './questions.js'
import { rng, shuffle } from './random.js'

export const DEFI_LONGUEUR = 10
const PART_REDIGEE = 7
const ALPHABET = 'abcdefghijkmnpqrstuvwxyz23456789' // sans l, o, 0, 1 (faciles à confondre)

export function nouvelleGraine(alea = Math.random) {
  return Array.from({ length: 6 }, () => ALPHABET[Math.floor(alea() * ALPHABET.length)]).join('')
}

/**
 * Les questions d'un défi, toujours les mêmes pour une graine : 7 questions rédigées (s'il y en a)
 * et des questions générées pour compléter, sans questions de carte (plus légères à charger).
 */
export function questionsDefi(pool, graine, longueur = DEFI_LONGUEUR) {
  const rand = rng(`defi:${graine}`)
  const jouables = pool.filter((q) => q.type !== 'map')
  const redigees = shuffle(jouables.filter((q) => q.id.startsWith('hand-')), rand)
  const generees = shuffle(jouables.filter((q) => !q.id.startsWith('hand-')), rand)
  const choix = [...redigees.slice(0, PART_REDIGEE), ...generees, ...redigees.slice(PART_REDIGEE)].slice(0, longueur)
  return shuffle(choix, rand).map((q) => prepareQuestion(q, `defi-${graine}`))
}

/** Lien à partager. `base` : l'adresse de l'app sans le « # » (par défaut, celle de la page). */
export function lienDefi({ civId, graine, score, nom }, base = typeof location !== 'undefined' ? location.href.split('#')[0] : '') {
  const q = new URLSearchParams({ g: graine, s: String(score) })
  const prenom = nettoyerPrenom(nom)
  if (prenom) q.set('n', prenom)
  return `${base}#/defi/${civId}?${q}`
}

export const nettoyerPrenom = (nom) => (nom ?? '').replace(/[<>{}[\]\\/"]/g, '').replace(/\s+/g, ' ').trim().slice(0, 20)

/** Lit un lien reçu (paramètres d'URL) ; toute valeur douteuse est ignorée. */
export function lireDefi(params) {
  const g = params.get('g') ?? ''
  const s = params.get('s')
  const score = s !== null && /^\d{1,2}$/.test(s) && Number(s) <= DEFI_LONGUEUR ? Number(s) : null
  return {
    graine: /^[a-z0-9]{4,12}$/.test(g) ? g : null,
    score,
    nom: nettoyerPrenom(params.get('n')) || null,
  }
}

/** Issue d'un défi pour celui qui le relève. */
export const verdict = (moi, autre) => (moi > autre ? 'gagne' : moi < autre ? 'perdu' : 'egalite')
