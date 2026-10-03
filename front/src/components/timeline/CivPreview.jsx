import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useDragControls } from 'framer-motion'
import { formatDuration, formatYear } from '../../lib/time'
import { readableText, shade } from '../../lib/color'
import Icon from '../ui/Icon'
import LineageTrail from '../LineageTrail'
import { useProgress } from '../../store/progress'

/**
 * Aperçu d'une civilisation sans quitter la frise.
 * Desktop : tiroir à droite (la frise reste utilisable).
 * Mobile  : feuille qui monte du bas, avec voile sombre.
 * À placer dans un <AnimatePresence>.
 */
export default function CivPreview({ civ, epoch, continent, onClose }) {
  const desktop = useIsDesktop()
  const closeRef = useRef(null)
  const dragControls = useDragControls()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
  }, [civ.id])

  const read = useProgress((st) => !!st.fiches[civ.id])
  const events = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  const fg = readableText(civ.color)
  const offscreen = desktop ? { x: 420, opacity: 0 } : { y: '100%' }

  return (
    <>
      {!desktop && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
      <motion.aside
        role="dialog"
        aria-label={`Aperçu : ${civ.label}`}
        initial={offscreen}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={offscreen}
        transition={{ type: 'spring', damping: 30, stiffness: 320 }}
        drag={desktop ? false : 'y'}
        dragListener={false}
        dragControls={dragControls}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) => (info.offset.y > 120 || info.velocity.y > 600) && onClose()}
        className={
          desktop
            ? 'fixed z-40 right-4 top-20 bottom-4 w-[380px] flex flex-col bg-surface border border-line rounded-xl2 shadow-lift overflow-hidden'
            : 'fixed z-40 inset-x-0 bottom-0 max-h-[80vh] flex flex-col bg-surface rounded-t-4xl shadow-lift overflow-hidden'
        }
      >
        {/* En-tête coloré */}
        {/* Sur mobile, glisser l'en-tête vers le bas ferme la feuille */}
        <header
          onPointerDown={(e) => !desktop && dragControls.start(e)}
          className="relative shrink-0 px-5 pt-5 pb-4 touch-none md:touch-auto"
          style={{ background: `linear-gradient(140deg, ${civ.color}, ${shade(civ.color, -14)})`, color: fg }}
        >
          {!desktop && <span className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-current opacity-40" />}
          <button
            ref={closeRef}
            onClick={onClose}
            className="absolute top-3 right-3 grid place-items-center w-10 h-10 rounded-xl hover:bg-black/10 transition"
            aria-label="Fermer l'aperçu"
          >
            <Icon name="close" />
          </button>
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] opacity-80">
            {epoch.label} · {continent.label}
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight mt-1 pr-10">{civ.label}</h2>
          <p className="text-sm opacity-90 mt-1 tabular-nums flex flex-wrap items-center gap-x-2">
            {civ.period} · {formatDuration(civ.start, civ.end)}
            {read && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-1.5 py-0.5 rounded-md bg-black/15">
                <Icon name="check" size={12} strokeWidth={2.6} /> Lue
              </span>
            )}
          </p>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-5">
          {civ.capitale && (
            <p className="chip">
              <span className="text-muted">Capitale</span>
              <span className="font-medium">{civ.capitale}</span>
            </p>
          )}

          <p className="text-[15px] text-ink/85 leading-relaxed">{civ.description}</p>

          {/* Même civilisation à l'époque précédente / suivante : on ouvre sa frise et on la met en évidence */}
          <LineageTrail
            civ={civ}
            variant="compact"
            linkTo={(m) => `/frise/${m.epochId}?focus=${m.civId}&from=${civ.id}`}
          />

          {events.length > 0 && (
            <section>
              <h3 className="eyebrow mb-2.5">Dates clés</h3>
              <ol className="space-y-2.5">
                {events.map((ev, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-[5.5rem] text-xs font-semibold tabular-nums pt-px" style={{ color: civ.color }}>
                      {formatYear(ev.annee)}
                    </span>
                    <span className="text-sm text-ink leading-snug">{ev.evenement}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {civ.personnages?.length > 0 && (
            <section>
              <h3 className="eyebrow mb-2.5">Personnages</h3>
              <div className="flex flex-wrap gap-1.5">
                {civ.personnages.map((p) => (
                  <span key={p.nom} className="chip">{p.nom}</span>
                ))}
              </div>
            </section>
          )}

          {civ.guerres?.length > 0 && (
            <section>
              <h3 className="eyebrow mb-2.5">Conflits majeurs</h3>
              <ul className="space-y-1.5">
                {civ.guerres.map((g) => (
                  <li key={g.nom} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-ink">{g.nom}</span>
                    {g.annee != null && <span className="text-xs text-muted tabular-nums shrink-0">{formatYear(g.annee)}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <footer className="shrink-0 p-4 border-t border-line pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <Link to={`/frise/${epoch.id}/${civ.id}`} className="btn-primary w-full h-12">
            {read ? 'Relire la fiche complète' : 'Ouvrir la fiche complète'} <Icon name="arrowRight" size={18} />
          </Link>
        </footer>
      </motion.aside>
    </>
  )
}

function useIsDesktop() {
  const query = '(min-width: 768px)'
  const [match, setMatch] = useState(() => typeof matchMedia === 'function' && matchMedia(query).matches)
  useEffect(() => {
    const mq = matchMedia(query)
    const onChange = () => setMatch(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return match
}
