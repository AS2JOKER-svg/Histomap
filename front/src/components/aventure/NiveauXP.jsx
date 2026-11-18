import { Link } from 'react-router-dom'
import { niveau } from '../../lib/xp'
import { useProgress } from '../../store/progress'

/**
 * Niveau et XP (décision 18, maquette 1) : dans l'en-tête, sur la carte de l'Aventure seulement.
 * Pastille du niveau + rang + barre d'XP ; mène au Profil.
 */
export default function NiveauXP({ className = '' }) {
  const xp = useProgress((s) => s.aventure.xp)
  const n = niveau(xp)
  const nombre = (x) => x.toLocaleString('fr-FR')
  return (
    <Link
      to="/profil"
      className={`flex items-center gap-2.5 min-h-[44px] min-w-0 rounded-xl ${className}`}
      aria-label={`Niveau ${n.niveau}, ${n.rang}, ${n.max ? `${nombre(xp)} XP` : `${nombre(n.dansNiveau)} sur ${nombre(n.pourSuivant)} XP`} : voir le profil`}
    >
      <span aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full grid place-items-center font-display text-xl font-bold lining-nums border-2" style={{ background: '#2a2118', color: '#e0c27a', borderColor: '#a8791c' }}>
        {n.niveau}
      </span>
      <span aria-hidden="true" className="flex-1 min-w-0">
        <span className="flex justify-between gap-2 text-[11px] font-bold text-muted">
          <span className="truncate">{n.rang}</span>
          <span className="tabular-nums shrink-0">{n.max ? `${nombre(xp)} XP` : `${nombre(n.dansNiveau)} / ${nombre(n.pourSuivant)}`}</span>
        </span>
        <span className="block mt-1.5 h-1.5 rounded-full bg-line overflow-hidden">
          <span className="block h-full bg-accent2" style={{ width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
        </span>
      </span>
    </Link>
  )
}
