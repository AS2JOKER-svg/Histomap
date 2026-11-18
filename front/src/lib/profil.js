/**
 * profil.js — Ce qu'affichent le Profil et ses sous-pages (V3.1, sprint 32, maquettes 14 et 15)
 * ================================================================================================
 * Fonctions pures, testées par scripts/test-aventure.mjs ; les pages (ProfilPage, CollectionsPage,
 * ARevoirListePage) ne font que les afficher.
 *
 *   chiffresProfil(P, av)                    → { salles, etoiles, jours } : les 3 chiffres du Profil
 *   texteSerie(etat, record)                 → { titre, detail } : la ligne de la série (etat = etatSerie())
 *   aRevoirParSalle(P, chapters, quizzes)    → { salles: [{ id, cartes, questions }], cartes, questions }
 *   texteARevoir(liste, seanceFaite)         → sous-titre de l'entrée « À revoir »
 *   mondesCollection(P, av)                  → les 5 mondes : 'titre' | 'ouvert' | 'ferme', étoiles du tronc
 *   filsCollection(P, av)                    → les fils rouges : le sien, puis les titres obtenus, puis le reste
 *   titreUltime(P, av)                       → { titre, faites, total }
 */
import { aRattraper, avancementFilRouge, avancementMonde, titresObtenus } from './aventure.js'

export const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`

/** Salles découvertes (tronc et annexes), étoiles gagnées, jours joués. */
export function chiffresProfil(P, av) {
  const salles = Object.entries(av.salles ?? {}).filter(([id]) => P.monde.has(id)).map(([, s]) => s)
  return {
    salles: salles.filter((s) => s.decouverte).length,
    etoiles: salles.reduce((t, s) => t + (s.etoiles ?? 0), 0),
    jours: av.joursJoues ?? 0,
  }
}

/** Ligne de la série dans le Profil, d'après etatSerie() (lib/progression.js) et le record. */
export function texteSerie(etat, record = 0) {
  const rec = record > etat.jours ? ` · record ${pluriel(record, 'jour')}` : ''
  switch (etat.statut) {
    case 'faite':
      return { titre: `Série de ${pluriel(etat.jours, 'jour')}`, detail: `Jouée aujourd’hui${rec}` }
    case 'a-prolonger':
      return { titre: `Série de ${pluriel(etat.jours, 'jour')}`, detail: `Joue aujourd’hui pour la prolonger${rec}` }
    case 'a-sauver':
      return {
        titre: `Série de ${pluriel(etat.jours, 'jour')}`,
        detail: `${etat.jokers > 1 ? `${etat.jokers} jokers la sauvent` : 'Un joker la sauve'} si tu joues aujourd’hui`,
      }
    case 'perdue':
      return { titre: 'Pas de série en cours', detail: `${record ? `Record : ${pluriel(record, 'jour')} · ` : ''}joue aujourd’hui pour repartir` }
    default:
      return { titre: 'Pas encore de série', detail: 'Termine une étape pour la commencer' }
  }
}

/** Cartes marquées « à revoir » et questions ratées, salle par salle (les plus chargées d'abord). */
export function aRevoirParSalle(P, chapters = {}, quizzes = {}) {
  const salles = P.ordre
    .map((id) => ({ id, cartes: chapters[id]?.toReview?.length ?? 0, questions: quizzes[id]?.failed?.length ?? 0 }))
    .filter((x) => x.cartes + x.questions > 0)
    .sort((a, b) => b.cartes + b.questions - (a.cartes + a.questions))
  return {
    salles,
    cartes: salles.reduce((t, x) => t + x.cartes, 0),
    questions: salles.reduce((t, x) => t + x.questions, 0),
  }
}

/** « 7 cartes et 4 questions · +20 XP » (maquette 14). */
export function texteARevoir({ cartes, questions }, seanceFaite = false) {
  if (!cartes && !questions) return 'Rien à revoir pour l’instant'
  const quoi = [cartes && pluriel(cartes, 'carte'), questions && pluriel(questions, 'question')].filter(Boolean).join(' et ')
  return `${quoi} · ${seanceFaite ? 'séance du jour faite' : '+20 XP'}`
}

const titresDe = (P, av) => new Set(titresObtenus(P, av).map((t) => t.id))

/** Les 5 mondes (Collections) : titre obtenu, ouvert (salles du tronc à ★) ou pas encore ouvert. */
export function mondesCollection(P, av) {
  const titres = titresDe(P, av)
  return P.mondes.map((m, w) => {
    const a = avancementMonde(P, av, w)
    return {
      w,
      epoque: m.epoque,
      nom: m.nom,
      theme: m.theme,
      titre: m.titre,
      statut: titres.has(`monde:${m.epoque}`) ? 'titre' : a.ouvert ? 'ouvert' : 'ferme',
      troncEtoile: a.troncEtoile,
      tronc: a.tronc,
      salles: a.salles,
    }
  })
}

/**
 * Fils rouges (Collections) : le sien d'abord, puis ceux dont le titre est obtenu, puis le reste, du plus
 * avancé au moins avancé (salles à ★, puis salles découvertes) ; à égalité, l'ordre de content/parcours.json.
 */
export function filsCollection(P, av) {
  const titres = titresDe(P, av)
  const rattraper = aRattraper(P, av)
  const groupe = (f) => (f.actuel ? 0 : f.titreObtenu ? 1 : 2)
  return P.filsRouges
    .map((f) => ({
      ...f,
      ...avancementFilRouge(P, av, f),
      actuel: f.id === av.filRouge,
      titreObtenu: titres.has(`fil:${f.id}`),
      aRattraper: f.membres.filter((id) => rattraper.has(id)).length,
    }))
    .sort((a, b) => groupe(a) - groupe(b) || b.etoilees / b.total - a.etoilees / a.total || b.decouvertes / b.total - a.decouvertes / a.total)
}

/** Titre ultime : au moins ★ dans toutes les salles du parcours (lib/aventure.js → titresObtenus). */
export function titreUltime(P, av) {
  return {
    titre: P.data.titreUltime,
    faites: P.ordre.filter((id) => (av.salles?.[id]?.etoiles ?? 0) >= 1).length,
    total: P.ordre.length,
  }
}
