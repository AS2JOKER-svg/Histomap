/**
 * epreuve.js — Questions d'une salle sur les cartes vues, et composition de l'Épreuve (V3.1, sprint 29)
 * ======================================================================================================
 * Décision 8 : toute question porte sur une carte déjà vue.
 *   - Épreuve d'une salle du tronc (12 questions) : cartes de Découvrir, + celles d'Approfondir s'il est fait ;
 *   - mini-épreuve d'une annexe (8 questions) : cartes de la séance (Découvrir) ;
 *   - défis, quiz infini, « À revoir » : cartes de Découvrir et d'Approfondir.
 * Réservoir = questions rédigées dont toutes les cartes (champ `carte`) sont vues, puis questions générées
 * depuis ces cartes (lib/questionsCartes.js). Une question « hors cartes » (`carte: null`) n'est jamais posée.
 *
 * Module pur, sans données : utilisé par l'app (lib/quiz.js) et par les scripts (tests, simulation).
 */
import { rng, shuffle } from './random.js'
import { cartesDe, questionsDesCartes } from './questionsCartes.js'

/** Ids des cartes des niveaux donnés (1 = Découvrir, 2 = Approfondir). */
export const cartesVues = (cartes = [], niveaux = [1]) => new Set(cartes.filter((c) => niveaux.includes(c.tier)).map((c) => c.id))

/**
 * Réservoir de questions d'une salle.
 *   chapitre  : chapitre rédigé ({ cards, quiz }, src/data/revision/<id>.js)
 *   niveaux   : [1] ou [1, 2]
 *   personnes : leurres de « Qui est-ce ? » (lib/questionsCartes.js → leurresPersonnes)
 * Les questions rédigées prennent l'id « hand-<id> » (mémorisé dans la progression) ; les générées gardent
 * le leur (« carte-<carte>-… »). Les questions générées le sont depuis TOUTES les cartes du chapitre
 * (leurres et ids identiques à ceux du validateur), puis filtrées sur les cartes vues.
 */
export function reservoirSalle(chapitre, { niveaux = [1], personnes = [] } = {}) {
  const cartes = chapitre?.cards ?? []
  const vues = cartesVues(cartes, niveaux)
  const lisible = (ids) => !!ids && ids.length > 0 && ids.every((id) => vues.has(id))
  const redigees = (chapitre?.quiz ?? []).filter((q) => lisible(cartesDe(q))).map((q) => ({ ...q, id: `hand-${q.id}` }))
  const generees = questionsDesCartes(cartes, { personnes }).filter((q) => vues.has(q.carte))
  return [...redigees, ...generees]
}

/** Part des questions rédigées à la main dans une épreuve (comme avant : 14 sur 20). */
export const PART_REDIGEE = 0.7

/**
 * Compose une épreuve de `longueur` questions (moins si le réservoir est plus petit) :
 *   - d'abord jusqu'à `rattrapage` questions ratées la fois précédente ;
 *   - puis ≈ 70 % de questions rédigées et le reste de questions générées, en prenant dans chaque
 *     groupe les jamais posées, puis les déjà réussies, puis les déjà ratées ;
 *   - s'il en manque, on complète avec ce qui reste.
 * Renvoie des ids de questions (ordre mélangé, reproductible pour une tentative donnée).
 */
export function composerEpreuve(pool, { longueur, rattrapage = 0, failed = [], asked = [], attempt = 0 }) {
  const rand = rng(`compose-${attempt}-${pool.length}`)
  const ids = pool.map((q) => q.id)
  const fromFailed = shuffle(failed.filter((id) => ids.includes(id)), rand).slice(0, Math.min(rattrapage, longueur))
  const ordre = (groupe) => {
    const g = groupe.filter((id) => !fromFailed.includes(id))
    return [
      ...shuffle(g.filter((id) => !asked.includes(id)), rand),
      ...shuffle(g.filter((id) => asked.includes(id) && !failed.includes(id)), rand),
      ...shuffle(g.filter((id) => failed.includes(id)), rand),
    ]
  }
  const redigees = ordre(ids.filter((id) => id.startsWith('hand-')))
  const generees = ordre(ids.filter((id) => !id.startsWith('hand-')))
  const reste = longueur - fromFailed.length
  const nbRedigees = Math.min(redigees.length, Math.round(PART_REDIGEE * reste))
  let chosen = [...fromFailed, ...redigees.slice(0, nbRedigees), ...generees.slice(0, reste - nbRedigees)]
  if (chosen.length < longueur) chosen = [...chosen, ...[...redigees, ...generees].filter((id) => !chosen.includes(id))].slice(0, longueur)
  return shuffle(chosen, rand)
}
