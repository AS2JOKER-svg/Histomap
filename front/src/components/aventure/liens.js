import { findCivilization } from '../../lib/data'
import { PARCOURS_AVENTURE as P } from '../../store/progress'

/** Adresse où se joue une étape d'une salle (SallePage). */
export const lienEtape = (civId, etape) => (etape === 'a-revoir' ? `/aventure/a-revoir/${civId}` : `/aventure/salle/${civId}/${etape}`)

/** Phrase qui explique un verrou (lib/aventure.js → ouverture().raison). */
export function raisonVerrou(raison) {
  if (!raison) return ''
  if (raison.type === 'monde') return `S’ouvre quand toutes les salles du monde « ${P.mondes[raison.monde].nom} » ont l’argent`
  return `S’ouvre après le bronze de ${findCivilization(raison.id)?.civ.label ?? '…'}`
}
