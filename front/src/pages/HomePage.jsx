import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpochs, getStats } from '../lib/data'
import { useProgress } from '../store/progress'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'
import ResumeCard from '../components/progress/ResumeCard'
import ProgressPanel from '../components/progress/ProgressPanel'
import AppCard from '../components/app/AppCard'
import { MapIllustration, ReviseIllustration, TimelineIllustration, WarsIllustration } from '../components/illustrations'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
})

/**
 * Accueil (maquette 02) : une seule question, « qu'est-ce que je fais maintenant ? »
 *   1. « Continuer » (ou, à la première visite, une phrase d'accroche) ;
 *   2. la recherche ;
 *   3. quatre portes (Frise, Carte, Guerres, Réviser) ;
 *   4. la progression.
 */
export default function HomePage() {
  useDocumentTitle(null)
  const epochs = getEpochs()
  const stats = getStats()
  const hasHistory = useProgress((s) => !!s.last?.path)

  return (
    <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
      {hasHistory ? (
        <ResumeCard />
      ) : (
        <section className="pt-2 sm:pt-6">
          <motion.p {...fadeUp(0)} className="eyebrow mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-muted/50" />
            {stats.epochs} époques · {stats.civs} civilisations
          </motion.p>
          <motion.h1 {...fadeUp(0.05)} className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight text-ink text-balance">
            L'histoire du monde,{' '}
            <em className="not-italic bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(120deg, rgb(var(--c-accent)), rgb(var(--c-accent-2)))' }}>
              en un coup d'œil.
            </em>
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            La frise des civilisations, la carte du monde à travers les siècles, les grandes guerres, et des révisions à votre rythme.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-7">
            <Link to="/frise" className="btn-primary h-12 px-6 text-[15px]">
              Commencer par la frise <Icon name="arrowRight" size={18} />
            </Link>
          </motion.div>
        </section>
      )}

      {/* Recherche */}
      <Link
        to="/recherche"
        className="flex items-center gap-3 h-14 px-4 rounded-2xl bg-surface border border-line shadow-soft text-muted hover:border-muted/40 transition"
      >
        <Icon name="search" size={20} />
        <span className="truncate">Une civilisation, un personnage, une guerre…</span>
      </Link>

      {/* Quatre portes */}
      <section aria-labelledby="portes-titre">
        <h2 id="portes-titre" className="eyebrow mb-3">Par où continuer ?</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          <Door to="/frise" title="Frise" text="Toutes les civilisations, de la Préhistoire à nos jours" art={<TimelineIllustration epochs={epochs} />} />
          <Door to="/carte" title="Carte" text="Le monde à n'importe quelle date" art={<MapIllustration />} />
          <Door to="/guerres" title="Guerres" text={`${stats.wars} conflits, camp contre camp`} art={<WarsIllustration />} />
          <Door to="/reviser" title="Réviser" text="Cartes à faire glisser et quiz sur 20" art={<ReviseIllustration />} />
        </div>
      </section>

      {/* Progression (sauvegardée localement) */}
      <ProgressPanel />

      {/* Installer l'application, cartes hors ligne */}
      <AppCard />
    </div>
  )
}

function Door({ to, title, text, art }) {
  return (
    <Link to={to} className="group card hoverable flex flex-col overflow-hidden">
      <div className="relative h-24 sm:h-32 bg-surface2 overflow-hidden border-b border-line">{art}</div>
      <div className="p-3.5 sm:p-4">
        <span className="flex items-center justify-between gap-2">
          <span className="font-display text-lg font-semibold text-ink">{title}</span>
          <Icon name="arrowRight" size={16} className="text-muted group-hover:text-ink group-hover:translate-x-0.5 transition" />
        </span>
        <span className="block text-[13px] text-muted leading-snug mt-0.5">{text}</span>
      </div>
    </Link>
  )
}
