import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgress, timeAgo } from '../../store/progress'
import { solidBg, shade } from '../../lib/color'
import Icon from '../ui/Icon'

const KIND_LABEL = { fiche: 'Fiche', frise: 'Frise', carte: 'Carte', revision: 'Chapitre', quiz: 'Quiz' }

/**
 * « Continuer » : l'action principale de l'accueil (maquette 02). Grande carte
 * à la couleur de la civilisation en cours, qui reprend là où l'on s'était
 * arrêté (fiche, chapitre, quiz, frise ou carte). Rien si première visite.
 */
export default function ResumeCard() {
  const last = useProgress((s) => s.last)
  const previousVisitAt = useProgress((s) => s.previousVisitAt)
  if (!last?.path) return null

  const welcomeBack = previousVisitAt && Date.now() - previousVisitAt > 3600 * 1000
  const color = solidBg(last.color ?? '#345ce6')

  return (
    <motion.section initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} aria-label="Continuer">
      <p className="text-sm text-muted mb-2">
        {welcomeBack ? (
          <>
            <strong className="text-ink font-semibold">Bon retour !</strong> Dernière visite {timeAgo(previousVisitAt)}.
          </>
        ) : (
          <>Vous en étiez là · {timeAgo(last.at)}</>
        )}
      </p>
      <Link
        to={last.path}
        className="group block rounded-4xl p-5 sm:p-6 text-white shadow-lift relative overflow-hidden hoverable"
        style={{ background: `linear-gradient(140deg, ${color}, ${shade(color, -22)})` }}
      >
        <span className="text-[11px] font-bold uppercase tracking-[.14em] opacity-85">Continuer · {KIND_LABEL[last.kind] ?? 'Reprendre'}</span>
        <span className="block font-display text-3xl font-semibold leading-tight mt-1">{last.title}</span>
        {last.subtitle && <span className="block text-sm opacity-90 mt-0.5">{last.subtitle}</span>}
        <span className="mt-5 flex items-center justify-center gap-2 h-12 rounded-xl bg-white font-semibold" style={{ color: shade(color, -35) }}>
          Continuer <Icon name="arrowRight" size={18} className="transition group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.section>
  )
}
