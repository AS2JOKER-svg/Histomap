import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../../store/app'
import Icon from '../ui/Icon'

/**
 * Bandeau sous l'en-tête :
 *   - hors ligne : rassure (fiches et révisions restent disponibles) ;
 *   - nouvelle version prête : bouton pour la charger (la progression est conservée).
 */
export default function AppBanner() {
  const online = useApp((s) => s.online)
  const updateReady = useApp((s) => s.updateReady)
  const applyUpdate = useApp((s) => s.applyUpdate)

  return (
    <div aria-live="polite" className="sticky top-16 z-20">
      <AnimatePresence initial={false}>
        {!online && (
          <Bar key="offline" tone="muted">
            <Icon name="wifiOff" size={16} className="shrink-0" />
            <span>
              <strong className="font-semibold">Hors ligne.</strong> Fiches, révisions et quiz restent disponibles.
            </span>
          </Bar>
        )}
        {updateReady && (
          <Bar key="update" tone="accent">
            <Icon name="sparkles" size={16} className="shrink-0" />
            <span className="flex-1">Une nouvelle version d'HistoMap est prête.</span>
            <button onClick={applyUpdate} className="btn-primary h-9 px-3.5 text-sm shrink-0">
              <Icon name="refresh" size={16} /> Mettre à jour
            </button>
          </Bar>
        )}
      </AnimatePresence>
    </div>
  )
}

function Bar({ tone, children }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className={`overflow-hidden border-b border-line/70 ${tone === 'accent' ? 'bg-surface' : 'bg-surface2'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-2.5 text-sm text-ink" role="status">
        {children}
      </div>
    </motion.div>
  )
}
