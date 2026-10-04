import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgress, timeAgo } from '../../store/progress'
import Icon from '../ui/Icon'

const KIND_ICON = { fiche: 'cards', frise: 'timeline', carte: 'globe', revision: 'layers', quiz: 'sparkles' }

/**
 * « Reprendre où j'en étais » : affiché en haut de l'accueil dès qu'un
 * endroit a été mémorisé. Message « Bon retour » si la visite précédente
 * date de plus d'une heure.
 */
export default function ResumeCard() {
  const last = useProgress((s) => s.last)
  const lastFiche = useProgress((s) => s.lastFiche)
  const previousVisitAt = useProgress((s) => s.previousVisitAt)
  if (!last?.path) return null

  const welcomeBack = previousVisitAt && Date.now() - previousVisitAt > 3600 * 1000

  return (
    <motion.section
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      aria-label="Reprendre"
      className="card p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center gap-4 relative overflow-hidden"
    >
      <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: last.color ?? 'rgb(var(--c-accent))' }} />
      <span
        className="grid place-items-center w-12 h-12 rounded-2xl text-white shrink-0 ml-1"
        style={{ background: last.color ?? 'rgb(var(--c-accent))' }}
      >
        <Icon name={KIND_ICON[last.kind] ?? 'clock'} size={22} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted">
          {welcomeBack ? (
            <>
              <strong className="text-ink font-semibold">Bon retour !</strong> Dernière visite {timeAgo(previousVisitAt)} · vous en étiez à
            </>
          ) : (
            <>Vous en étiez à · {timeAgo(last.at)}</>
          )}
        </p>
        <p className="font-display text-lg sm:text-xl font-semibold text-ink truncate">{last.title}</p>
        <p className="text-sm text-muted truncate">{last.subtitle}</p>
        {last.kind !== 'fiche' && lastFiche && (
          <Link to={lastFiche.path} className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink">
            <span className="w-2 h-2 rounded-full" style={{ background: lastFiche.color }} />
            Dernière fiche lue : <span className="font-medium text-ink">{lastFiche.title}</span>
            <Icon name="chevronRight" size={14} />
          </Link>
        )}
      </div>
      <Link to={last.path} className="btn-primary w-full sm:w-auto h-11">
        Reprendre <Icon name="arrowRight" size={18} />
      </Link>
    </motion.section>
  )
}
