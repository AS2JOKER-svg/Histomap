import { findCivilization } from '../../lib/data'
import { PARCOURS_AVENTURE as P } from '../../store/progress'

/** Adresse où se joue une étape d'une salle (SallePage). */
export const lienEtape = (civId, etape) => (etape === 'a-revoir' ? `/aventure/a-revoir/${civId}` : `/aventure/salle/${civId}/${etape}`)

const nom = (id) => findCivilization(id)?.civ.label ?? '…'

/** Phrase qui explique un verrou (lib/aventure.js → ouverture().raison). */
export function raisonVerrou(raison) {
  if (!raison) return ''
  if (raison.type === 'monde') return `Le monde « ${P.mondes[raison.monde].nom} » s’ouvre quand la salle « ${nom(raison.id)} » est découverte`
  return `S’ouvre quand la salle « ${nom(raison.id)} » est découverte`
}
