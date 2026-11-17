/**
 * ecransSalle.js — Ce qu'affichent les écrans d'une salle (V3.1, sprint 31), en fonctions pures
 * ==============================================================================================
 * Sans React ni chargement de données (testé par scripts/test-aventure.mjs) :
 *   panneauSalle(P, av, id, opts)     le panneau court d'une salle (maquettes 4 à 7 du sprint 27)
 *   ceQuiSouvre(P, av, evenements)    « Ce qui s'ouvre » à la fin de Découvrir (maquette 8)
 *   choixFils(P, av)                  la liste du choix d'un fil rouge (maquette 13)
 *   dureeSeance(cartes, questions)    durée estimée d'une séance d'annexe (≈ 4 min)
 * Les noms affichés viennent de `nom(id)` (lib/data dans l'app, content/ dans les tests).
 */
import { EPREUVE, aRattraper, cheminDe, cheminMonde, estTronc, etapeSuivante, filTermine, ouverture, salleDe } from './aventure.js'

/** Temps de jeu (mêmes valeurs que le joueur simulé, scripts/simuler-joueur.mjs), en secondes. */
const TEMPS = { carte: 20, question: 12, etape: 20 }

/** Durée estimée d'une séance d'annexe (cartes puis mini-épreuve), en minutes (au moins 1). */
export const dureeSeance = (cartes, questions = EPREUVE.annexe.questions) =>
  Math.max(1, Math.round((TEMPS.carte * cartes + TEMPS.question * questions + TEMPS.etape) / 60))

const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`
const cartes = (n) => (n ? pluriel(n, 'carte') : 'Les cartes')

/**
 * Panneau court d'une salle (décision 19) : en-tête, ligne d'étapes, un seul gros bouton, lignes secondaires.
 * @param opts.tailles  { tier1, tier2 } : cartes de Découvrir et d'Approfondir (null si inconnues)
 * @param opts.nom      id → nom affiché
 * → {
 *   ouvert, raison,                      raison du verrou (lib/aventure.js → ouverture)
 *   tronc, surChemin, rattraper,
 *   place: { monde, salle, annexeDe },   salle = rang dans le chemin du monde (1, 2…) ; annexeDe = id de la parente
 *   etapes: [{ id, titre, etat: 'fait' | 'actif' | 'a-venir', etoiles? }]   la ligne « Découvrir ✓ · Épreuve ★★☆ »
 *   resume,                              texte de la ligne d'étapes d'une annexe pas encore faite
 *   bouton: { etape, titre, detail, rejouer } | null
 *   approfondir: { etat: 'ferme' | 'ouvert' | 'fait', titre, detail } | null   (tronc seulement)
 *   etoiles, decouverte
 * }
 */
export function panneauSalle(P, av, id, { tailles = null, nom = (x) => x } = {}) {
  const s = salleDe(av, id)
  const { ouvert, raison } = ouverture(P, av, id)
  const tronc = estTronc(P, id)
  const w = P.monde.get(id)
  const ch = cheminMonde(P, av, w)
  const surChemin = ch.includes(id)
  const rattraper = aRattraper(P, av).has(id)
  const n = tronc ? EPREUVE.tronc.questions : EPREUVE.annexe.questions
  const t1 = tailles?.tier1 ?? 0
  const t2 = tailles?.tier2 ?? 0
  const place = { monde: w, salle: surChemin ? ch.indexOf(id) + 1 : null, annexeDe: tronc ? null : P.parent.get(id) ?? null }

  // Ligne d'étapes
  const prochaine = ouvert ? etapeSuivante(P, av, id) : null
  let etapes
  let resume = null
  if (tronc) {
    etapes = [
      { id: 'decouvrir', titre: 'Découvrir', etat: s.decouverte ? 'fait' : ouvert ? 'actif' : 'a-venir' },
      { id: 'epreuve', titre: 'Épreuve', etat: s.etoiles ? 'fait' : s.decouverte ? 'actif' : 'a-venir', etoiles: s.etoiles },
      ...(s.approfondi ? [{ id: 'approfondir', titre: 'Approfondir', etat: 'fait' }] : []),
    ]
  } else if (s.decouverte) {
    etapes = [
      { id: 'decouvrir', titre: 'Séance', etat: 'fait' },
      { id: 'epreuve', titre: 'Mini-épreuve', etat: s.etoiles ? 'fait' : 'actif', etoiles: s.etoiles },
    ]
  } else {
    etapes = []
    resume = `${t1 ? pluriel(t1, 'carte') : 'Les cartes'}, puis ${n} questions`
  }

  // Le gros bouton : l'étape suivante ; une salle déjà en ★★★ se rejoue pour le plaisir
  let bouton = null
  if (ouvert) {
    const etape = prochaine ?? 'epreuve'
    const vues = s.approfondi ? 'cartes de Découvrir et d’Approfondir' : null
    if (tronc) {
      if (etape === 'decouvrir')
        bouton = { etape, titre: s.enCours === 'decouvrir' ? 'Reprendre Découvrir' : 'Découvrir', detail: `${cartes(t1)} et 3 questions éclair` }
      else if (etape === 'approfondir') bouton = { etape, titre: 'Reprendre Approfondir', detail: `${cartes(t2)} en bonus` }
      else if (s.enCours === 'epreuve') bouton = { etape, titre: 'Reprendre l’épreuve', detail: `${n} questions sur les cartes vues` }
      else if (!s.etoiles) bouton = { etape, titre: 'Passer l’épreuve', detail: `${n} questions sur les ${vues ?? 'cartes vues'}` }
      else bouton = { etape, titre: 'Rejouer l’épreuve', detail: prochaine ? `${n} questions · ${vues ?? 'vise une étoile de plus'}` : 'Trois étoiles : pour le plaisir', rejouer: true }
    } else if (etape === 'decouvrir')
      bouton = { etape, titre: s.enCours === 'decouvrir' ? 'Reprendre la séance' : 'Commencer', detail: s.enCours === 'decouvrir' ? `${cartes(t1)}, puis ${n} questions` : `Environ ${dureeSeance(t1 || 7, n)} minutes` }
    else if (!s.decouverte) bouton = { etape, titre: 'Reprendre la séance', detail: `La mini-épreuve : ${n} questions` }
    else bouton = { etape, titre: 'Rejouer la mini-épreuve', detail: prochaine ? `${n} questions sur les cartes de la séance` : 'Trois étoiles : pour le plaisir', rejouer: true }
  }

  // Approfondir (bonus) : grisé avant la découverte ; une fois fait, sa ligne devient « Revoir les cartes » (point 11)
  let approfondir = null
  if (tronc) {
    if (!s.decouverte) approfondir = { etat: 'ferme', titre: 'Approfondir', detail: `Après Découvrir${t2 ? ` · ${pluriel(t2, 'carte')}` : ''}` }
    else if (!s.approfondi) approfondir = { etat: 'ouvert', titre: 'Approfondir', detail: `${cartes(t2)} · elles entreront dans l’épreuve` }
    else approfondir = { etat: 'fait', titre: 'Revoir les cartes', detail: `Découvrir et Approfondir${t1 + t2 ? ` · ${pluriel(t1 + t2, 'carte')}` : ''}` }
  }

  return { ouvert, raison, tronc, surChemin, rattraper, place, etapes, resume, bouton, approfondir, etoiles: s.etoiles, decouverte: s.decouverte, annexeDeNom: place.annexeDe ? nom(place.annexeDe) : null }
}

/**
 * « Ce qui s'ouvre » après une étape (événements de lib/progression.js) :
 * salles du chemin (la suivante, d'abord), annexes (bonus) et mondes atteints.
 * → { chemin: [id], annexes: [id], mondes: [w] }
 */
export function ceQuiSouvre(P, av, evenements = []) {
  const nouvelles = evenements.filter((e) => e.type === 'ouverture').flatMap((e) => e.salles)
  const ch = cheminDe(P, av)
  const surChemin = new Set(ch)
  return {
    chemin: nouvelles.filter((id) => surChemin.has(id)).sort((a, b) => ch.indexOf(a) - ch.indexOf(b)),
    annexes: nouvelles.filter((id) => !surChemin.has(id)),
    mondes: evenements.filter((e) => e.type === 'monde-ouvert').map((e) => e.monde),
  }
}

/**
 * Choix d'un fil rouge (maquette 13 ; décisions 14 et points 7-8 des maquettes) : pour chaque fil,
 * les salles qu'il ajoute au chemin (ses annexes), celles déjà faites, son avancement pour le titre.
 * Ordre : les fils à suivre (le plus de salles ajoutées d'abord), puis ceux « déjà sur ton chemin »
 * (toutes leurs salles sont dans le tronc), puis les fils terminés.
 * → [{ id, label, titre, couleur, membres, ajoutees, faites, etoilees, total, termine, actuel, titreObtenu, apercu }]
 *   apercu : « Parthes, Sassanides, Safavides, Iran » (4 salles ajoutées au plus) ou « De « … » à « … » »
 */
export function choixFils(P, av, { nom = (x) => x } = {}) {
  const decouverte = (id) => !!av?.salles?.[id]?.decouverte
  const etoilee = (id) => (av?.salles?.[id]?.etoiles ?? 0) >= 1
  const liste = P.filsRouges.map((f) => {
    const ajoutees = f.membres.filter((id) => !estTronc(P, id))
    const termine = filTermine(av, f)
    const apercu = ajoutees.length && ajoutees.length <= 4 ? ajoutees.map(nom).join(', ') : `De « ${nom(f.membres[0])} » à « ${nom(f.membres.at(-1))} »`
    return {
      id: f.id,
      label: f.label,
      titre: f.titre,
      couleur: f.couleur,
      membres: f.membres,
      ajoutees,
      faites: ajoutees.filter(decouverte).length,
      etoilees: f.membres.filter(etoilee).length,
      total: f.membres.length,
      termine,
      actuel: f.id === av?.filRouge,
      titreObtenu: !!av?.titres?.includes(`fil:${f.id}`),
      apercu,
    }
  })
  const groupe = (f) => (f.termine ? 2 : f.ajoutees.length ? 0 : 1)
  return liste.sort((a, b) => groupe(a) - groupe(b) || b.ajoutees.length - b.faites - (a.ajoutees.length - a.faites) || a.label.localeCompare(b.label, 'fr'))
}
