import { AnimatePresence, motion } from 'framer-motion'
import { useUI } from '../store/ui'
import Icon from './ui/Icon'

/** Affiche le message éphémère courant (voir useUI().showToast). */
export default function Toaster() {
  const toast = useUI((s) => s.toast)
  return (
    <div className="pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4 bottom-[calc(theme(spacing.tabbar)+0.75rem)] md:bottom-6" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="flex items-center gap-2.5 max-w-md px-4 py-3 rounded-2xl bg-ink text-bg shadow-lift text-sm"
            role="status"
          >
            <span
              className={`grid place-items-center w-6 h-6 rounded-full shrink-0 ${toast.tone === 'success' ? 'bg-success text-white' : 'bg-bg/15'}`}
            >
              <Icon name={toast.icon ?? (toast.tone === 'success' ? 'check' : 'info')} size={14} strokeWidth={2.4} />
            </span>
            <span>{toast.text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
