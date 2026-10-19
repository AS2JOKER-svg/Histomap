import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getEpochs, getStats } from '../lib/data'
import Icon from './ui/Icon'
import { MapIllustration, ReviseIllustration, TimelineIllustration } from './illustrations'

/**
 * Présentation en 3 écrans, au premier lancement (remplace l'ancienne fenêtre
 * de bienvenue). Une seule action par écran : « Suivant », puis « Commencer ».
 * Rouvrable depuis le bouton « Présentation » de l'en-tête.
 */
export default function Onboarding({ open, onClose }) {
  const [step, setStep] = useState(0)
  const buttonRef = useRef(null)
  const stats = getStats()
  const epochs = getEpochs()

  const STEPS = [
    {
      title: "L'histoire du monde, en un coup d'œil",
      text: `${stats.civs} civilisations, de la Préhistoire à nos jours, rangées sur une seule frise. Voyez qui vivait en même temps que qui.`,
      art: <TimelineIllustration epochs={epochs} />,
    },
    {
      title: 'Une carte qui remonte le temps',
      text: 'Faites glisser les années : les empires naissent, s’étendent et disparaissent. Touchez un territoire pour découvrir sa civilisation.',
      art: <MapIllustration />,
    },
    {
      title: 'Apprenez à votre rythme',
      text: 'Des cartes à faire glisser, puis un quiz de 20 questions. Un chapitre est validé dès 15/20 ; vos erreurs reviennent la fois suivante.',
      art: <ReviseIllustration score="16/20" />,
    },
  ]
  const last = step === STEPS.length - 1

  useEffect(() => {
    if (!open) return
    setStep(0)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) buttonRef.current?.focus({ preventScroll: true })
  }, [open, step])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-stretch sm:items-center justify-center bg-bg sm:bg-black/40 sm:backdrop-blur-sm sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="onboarding-title"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full sm:max-w-md bg-bg sm:bg-surface sm:rounded-4xl sm:border sm:border-line sm:shadow-lift flex flex-col pt-[env(safe-area-inset-top)] pb-[calc(1.25rem+env(safe-area-inset-bottom))]"
          >
            <div className="flex justify-end px-3 pt-3">
              <button onClick={onClose} className="btn-ghost h-11 px-4">
                Passer
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.22 }}
                className="flex-1 flex flex-col"
              >
                <div className="relative flex-1 min-h-[220px] sm:h-56 sm:flex-none mx-6 rounded-3xl bg-surface2 overflow-hidden">
                  {STEPS[step].art}
                </div>
                <div className="px-7 pt-7 text-center">
                  <h2 id="onboarding-title" className="font-display text-[1.75rem] leading-tight font-semibold text-ink text-balance">
                    {STEPS[step].title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">{STEPS[step].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="px-6 pt-7">
              <div className="flex justify-center gap-2 mb-5" role="group" aria-label="Étapes">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    aria-label={`Étape ${i + 1} sur ${STEPS.length}`}
                    aria-current={i === step ? 'step' : undefined}
                    className="h-11 grid place-items-center px-1"
                  >
                    <span className={`block h-2 rounded-full transition-all ${i === step ? 'w-7 bg-ink' : 'w-2 bg-line'}`} />
                  </button>
                ))}
              </div>
              <button ref={buttonRef} onClick={() => (last ? onClose() : setStep(step + 1))} className="btn-primary w-full h-12 text-[15px]">
                {last ? 'Commencer' : 'Suivant'} {!last && <Icon name="arrowRight" size={18} />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
