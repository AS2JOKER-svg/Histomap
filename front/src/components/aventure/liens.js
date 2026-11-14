import { findCivilization } from '../../lib/data'
import { PARCOURS_AVENTURE as P } from '../../store/progress'

/** Adresse où se joue une étape (écrans de chapitre et de quiz, en attendant le sprint 21). */
export function lienEtape(civId, etape) {
  const ref = findCivilization(civId)
  if (!ref) return '/'
  const base = `/reviser/${ref.epoch.id}/${civId}`
  return etape === 'epreuve' ? `${base}/quiz` : base
}

/** Phrase qui explique un verrou (lib/aventure.js → ouverture().raison). */
export function raisonVerrou(raison) {
  if (!raison) return ''
  if (raison.type === 'monde') return `S’ouvre quand toutes les salles du monde « ${P.mondes[raison.monde].nom} » ont l’argent`
  return `S’ouvre après le bronze de ${findCivilization(raison.id)?.civ.label ?? '…'}`
}
