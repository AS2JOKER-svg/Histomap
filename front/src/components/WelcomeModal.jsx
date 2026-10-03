import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { welcome } from '../config/welcome'
import Icon from './ui/Icon'

/** Rend **gras** dans une chaîne simple. */
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="text-ink">{part.slice(2, -2)}</strong> : part
  )
}

export default function WelcomeModal({ open, onClose }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    buttonRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full sm:max-w-lg bg-surface rounded-t-4xl sm:rounded-4xl p-6 sm:p-8 shadow-lift border border-line pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
          >
            <span className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-line" />
            <button onClick={onClose} className="btn-icon absolute top-3 right-3" aria-label="Fermer">
              <Icon name="close" />
            </button>

            <div className="text-center mb-5">
              <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-3xl mb-3">
                {welcome.emoji}
              </span>
              <h2 id="welcome-title" className="font-display text-2xl font-semibold text-ink">
                {welcome.title}
              </h2>
            </div>

            <div className="text-[15px] text-muted space-y-3 leading-relaxed">
              {welcome.paragraphs.map((p, i) => <p key={i}>{rich(p)}</p>)}
              {welcome.note && (
                <p className="text-sm bg-surface2 p-3 rounded-xl text-center">{rich(welcome.note)}</p>
              )}
            </div>

            <button ref={buttonRef} onClick={onClose} className="btn-primary w-full mt-6 h-12">
              {welcome.cta}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
