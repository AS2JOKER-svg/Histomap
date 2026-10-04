import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import { haptic } from '../../lib/haptics'
import Icon from '../ui/Icon'
import RevisionCard from './RevisionCard'

const SWIPE = 110 // px à parcourir pour valider un glissement

/**
 * Paquet de cartes « à la Tinder ».
 *   → glisser à droite / bouton ✓ / flèche droite : compris
 *   ← glisser à gauche / bouton ↺ / flèche gauche : à revoir
 *   Retour arrière : bouton ↶ ou touche Retour
 * La couverture et le bilan n'ont qu'une action (commencer / terminer).
 */
export default function CardDeck({ cards, pos, civ, epoch, round, onAnswer, onBack, onFinish }) {
  const [exitDir, setExitDir] = useState(1)
  const card = cards[pos]
  const kind = card?.type === 'cover' ? 'cover' : card?.type === 'recap' ? 'recap' : 'card'

  const answer = (verdict) => {
    if (kind === 'recap') {
      haptic('complete')
      onFinish()
      return
    }
    setExitDir(verdict === 'review' ? -1 : 1)
    haptic(verdict === 'review' ? 'tap' : 'select')
    // laisse React appliquer la direction de sortie avant de changer de carte
    requestAnimationFrame(() => onAnswer(kind === 'cover' ? 'ok' : verdict))
  }

  // Raccourcis clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea')) return
      if (e.key === 'ArrowRight') answer('ok')
      else if (e.key === 'ArrowLeft' && kind === 'card') answer('review')
      else if (e.key === 'Backspace' || e.key === 'ArrowUp') pos > 0 && onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!card) return null

  return (
    <div className="flex-1 flex flex-col items-center min-h-0">
      {/* Pile de cartes */}
      <div className="relative w-full max-w-[440px] flex-1 min-h-0 max-h-[600px]">
        {/* Cartes suivantes, en retrait */}
        {[2, 1].map((offset) =>
          cards[pos + offset] ? (
            <div
              key={`behind-${offset}`}
              aria-hidden="true"
              className="absolute inset-0 rounded-[28px] bg-surface border border-line shadow-soft transition-transform duration-300"
              style={{ transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.045})`, opacity: 1 - offset * 0.25 }}
            />
          ) : null
        )}

        <AnimatePresence initial={false} custom={exitDir}>
          <SwipeCard key={`${pos}-${card.id}`} exitDir={exitDir} draggable={kind === 'card' || kind === 'cover'} onSwipe={(dir) => answer(dir > 0 ? 'ok' : 'review')}>
            <RevisionCard card={card} civ={civ} epoch={epoch} round={round} deck={cards} />
          </SwipeCard>
        </AnimatePresence>
      </div>

      {/* Commandes */}
      <div className="w-full max-w-[440px] mt-5 sm:mt-6 flex items-center justify-center gap-2.5 sm:gap-4 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={onBack}
          disabled={pos === 0}
          className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-surface border border-line text-muted hover:text-ink shadow-soft disabled:opacity-30 transition active:scale-95"
          aria-label="Carte précédente"
          title="Carte précédente"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></svg>
        </button>

        {kind === 'card' ? (
          <>
            <button
              type="button"
              onClick={() => answer('review')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-14 px-4 sm:pl-5 sm:pr-6 rounded-full bg-surface border-2 text-warning font-semibold whitespace-nowrap shadow-soft transition active:scale-95 hover:bg-warning/5"
              style={{ borderColor: 'rgb(var(--c-warning) / .5)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
              À revoir
            </button>
            <button
              type="button"
              onClick={() => answer('ok')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-14 px-4 sm:pl-5 sm:pr-6 rounded-full bg-success text-white font-semibold whitespace-nowrap shadow-lift transition active:scale-95 hover:brightness-105"
            >
              <Icon name="check" size={20} strokeWidth={2.6} />
              Compris
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => answer('ok')}
            className="flex items-center gap-2 h-14 px-7 rounded-full text-white font-semibold shadow-lift transition active:scale-95 hover:brightness-110"
            style={{ background: civ.color }}
          >
            {kind === 'cover' ? 'Commencer' : 'Terminer le chapitre'}
            <Icon name={kind === 'cover' ? 'arrowRight' : 'check'} size={20} strokeWidth={2.4} />
          </button>
        )}

        <span className="hidden sm:block w-11 shrink-0" aria-hidden="true" />
      </div>
    </div>
  )
}

/** Carte du dessus : glissable, penche en suivant le doigt, tampons « Compris / À revoir ». */
function SwipeCard({ children, exitDir, draggable, onSwipe }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-240, 240], [-14, 14])
  const okOpacity = useTransform(x, [30, SWIPE], [0, 1])
  const reviewOpacity = useTransform(x, [-SWIPE, -30], [1, 0])

  return (
    <motion.div
      className="absolute inset-0 rounded-[28px] bg-surface border border-line shadow-lift overflow-hidden touch-pan-y select-none"
      style={{ x, rotate }}
      custom={exitDir}
      variants={{
        enter: { opacity: 0, scale: 0.96, y: 14 },
        center: { opacity: 1, scale: 1, y: 0, x: 0 },
        exit: (dir) => ({ x: dir * 520, rotate: dir * 18, opacity: 0, transition: { duration: 0.32, ease: 'easeIn' } }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      drag={draggable ? 'x' : false}
      dragSnapToOrigin
      dragElastic={0.9}
      onDragEnd={(_, info) => {
        const dx = info.offset.x + info.velocity.x * 0.15
        if (Math.abs(dx) > SWIPE) onSwipe(Math.sign(dx))
      }}
    >
      {children}
      {draggable && (
        <>
          <motion.span
            style={{ opacity: okOpacity }}
            className="pointer-events-none absolute top-6 left-5 -rotate-12 px-3 py-1 rounded-lg border-[3px] border-success text-success font-bold text-lg tracking-wider bg-surface/80"
          >
            COMPRIS
          </motion.span>
          <motion.span
            style={{ opacity: reviewOpacity }}
            className="pointer-events-none absolute top-6 right-5 rotate-12 px-3 py-1 rounded-lg border-[3px] border-warning text-warning font-bold text-lg tracking-wider bg-surface/80"
          >
            À REVOIR
          </motion.span>
        </>
      )}
    </motion.div>
  )
}
