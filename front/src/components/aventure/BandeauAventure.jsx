import { Link } from 'react-router-dom'
import { estTronc, ouverture, salleDe } from '../../lib/aventure'
import { PARCOURS_AVENTURE as P, useProgress } from '../../store/progress'
import EtatSalle from './EtatSalle'

const ROMAIN = ['I', 'II', 'III', 'IV', 'V']
const etat = (s) => (!s.decouverte ? 'pas encore découverte' : s.etoiles ? `${s.etoiles} étoile${s.etoiles > 1 ? 's' : ''}` : 'découverte')

/** Fiche d'une civilisation : où elle se trouve dans l'Aventure, et un accès direct à sa salle. */
export default function BandeauAventure({ civId, label }) {
  const av = useProgress((s) => s.aventure)
  if (!P.monde.has(civId)) return null
  const w = P.monde.get(civId)
  const s = salleDe(av, civId)
  const { ouvert } = ouverture(P, av, civId)
  const place = estTronc(P, civId) ? `salle ${P.position.get(civId) + 1}` : 'annexe'
  return (
    <Link to={`/?salle=${civId}`} className="flex items-center gap-3 p-3 bg-surface border border-muted/40 shadow-lift min-h-[56px]" aria-label={`${label} dans l’Aventure : monde ${ROMAIN[w]}, ${place}, ${ouvert ? etat(s) : 'verrouillée'}`}>
      <EtatSalle decouverte={s.decouverte} etoiles={s.etoiles} ouvert={ouvert} taille={36} />
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[.12em] text-accent">Dans l’Aventure</span>
        <span className="block text-sm text-ink truncate">
          Monde {ROMAIN[w]} · {place} · {ouvert ? etat(s) : 'verrouillée'}
        </span>
      </span>
      <span className="btn-accent h-11 px-4 text-sm shrink-0" aria-hidden="true">{ouvert ? 'Jouer' : 'Voir'}</span>
    </Link>
  )
}
