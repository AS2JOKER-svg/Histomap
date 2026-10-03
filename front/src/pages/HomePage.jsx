import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpochs, getStats } from '../lib/data'
import { formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HomePage() {
  useDocumentTitle(null)
  const epochs = getEpochs()
  const stats = getStats()

  return (
    <div className="space-y-14 sm:space-y-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-2 sm:pt-8">
        <motion.p {...fadeUp(0)} className="eyebrow mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-muted/50" />
          {stats.epochs} époques · {stats.civs} civilisations
        </motion.p>

        <motion.h1
          {...fadeUp(0.05)}
          className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink max-w-4xl text-balance"
        >
          L'histoire du monde,{' '}
          <em
            className="not-italic bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, rgb(var(--c-accent)), rgb(var(--c-accent-2)))' }}
          >
            en un coup d'œil.
          </em>
        </motion.h1>

        <motion.p {...fadeUp(0.1)} className="mt-5 text-lg text-muted max-w-2xl leading-relaxed">
          Parcourez la frise des civilisations, voyagez sur la carte du monde à travers les siècles,
          puis révisez à votre rythme avec des fiches courtes et des quiz.
        </motion.p>

        <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-wrap gap-3">
          <Link to="/frise" className="btn-primary h-12 px-6 text-[15px]">
            Explorer la frise <Icon name="arrowRight" size={18} />
          </Link>
          <Link to="/reviser" className="btn-secondary h-12 px-6 text-[15px]">
            Je veux réviser
          </Link>
        </motion.div>

        {/* Ruban des époques */}
        <motion.div {...fadeUp(0.22)} className="mt-12">
          <EpochRibbon epochs={epochs} />
        </motion.div>
      </section>

      {/* ── Trois portes d'entrée ────────────────────────────────────────── */}
      <section aria-labelledby="sections-title">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="eyebrow mb-1.5">Choisissez votre parcours</p>
            <h2 id="sections-title" className="font-display text-3xl font-semibold text-ink">
              Trois façons d'apprendre
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <EntryCard
            to="/frise"
            delay={0}
            title="La frise"
            text="Toutes les époques côte à côte. Zoomez sur une période, comparez les continents, ouvrez les fiches."
            status="ready"
            illustration={<TimelineIllustration epochs={epochs} />}
          />
          <EntryCard
            to="/carte"
            delay={0.06}
            title="La carte du monde"
            text="Faites défiler les siècles et regardez les empires naître, s'étendre et disparaître. Cliquez sur un pays pour sa fiche."
            status="ready"
            illustration={<MapIllustration />}
          />
          <EntryCard
            to="/reviser"
            delay={0.12}
            title="On avance"
            text="Choisissez une période, une civilisation, révisez avec des fiches à faire glisser… puis testez-vous en 20 questions."
            status="soon"
            highlight
            illustration={<ReviseIllustration />}
          />
        </div>
      </section>

      {/* ── Chiffres ─────────────────────────────────────────────────────── */}
      <section aria-label="Le contenu en chiffres" className="card p-6 sm:p-8">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat value={stats.civs} label="civilisations" icon="temple" />
          <Stat value={stats.events} label="dates clés" icon="clock" />
          <Stat value={stats.people} label="personnages" icon="star" />
          <Stat value={stats.wars} label="guerres & batailles" icon="swords" />
        </dl>
      </section>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */

function EpochRibbon({ epochs }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="eyebrow">Accès direct à une époque</p>
        <Link to="/frise" className="text-sm text-muted hover:text-ink inline-flex items-center gap-1">
          Tout voir <Icon name="chevronRight" size={16} />
        </Link>
      </div>
      <ol className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-1">
        {epochs.map((epoch, i) => (
          <li key={epoch.id} className="snap-start shrink-0 w-[42%] sm:w-auto sm:flex-1">
            <Link
              to={`/frise/${epoch.id}`}
              className="group relative block h-full rounded-2xl p-4 text-white overflow-hidden hoverable"
              style={{ background: `linear-gradient(140deg, ${epoch.color}, ${epoch.color}c8)` }}
            >
              <span aria-hidden="true" className="absolute right-3 -bottom-3 font-display text-6xl font-bold opacity-20 select-none leading-none">
                {i + 1}
              </span>
              <span className="block text-[11px] font-medium opacity-90">{formatYear(epoch.start)}</span>
              <span className="block font-display text-lg font-semibold leading-tight mt-0.5">{epoch.label}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium opacity-90 group-hover:gap-2 transition-all">
                Explorer <Icon name="arrowRight" size={14} />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

function EntryCard({ to, title, text, status, illustration, highlight, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 + delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={to}
        className={`group card hoverable flex flex-col h-full overflow-hidden ${highlight ? 'ring-2 ring-accent/30' : ''}`}
      >
        <div className="relative h-40 bg-surface2 overflow-hidden border-b border-line">{illustration}</div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
            {status === 'ready' ? (
              <span className="text-[11px] font-semibold px-2 py-1 rounded-md text-success" style={{ background: 'rgb(var(--c-success) / .12)' }}>
                Disponible
              </span>
            ) : (
              <span className="text-[11px] font-semibold px-2 py-1 rounded-md text-warning" style={{ background: 'rgb(var(--c-warning) / .14)' }}>
                Bientôt
              </span>
            )}
          </div>
          <p className="text-sm text-muted leading-relaxed flex-1">{text}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
            {status === 'ready' ? 'Ouvrir' : 'Découvrir le projet'} <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

function Stat({ value, label, icon }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="inline-grid place-items-center w-9 h-9 rounded-xl bg-surface2 text-muted mb-3">
          <Icon name={icon} size={18} />
        </span>
        <span className="block font-display text-3xl sm:text-4xl font-semibold text-ink tabular-nums">
          {value.toLocaleString('fr-FR')}
        </span>
        <span className="block text-sm text-muted mt-0.5">{label}</span>
      </dd>
    </div>
  )
}

/* ── Illustrations (100 % CSS/SVG, aucune image à charger) ───────────────── */

function TimelineIllustration({ epochs }) {
  const rows = [
    [[4, 30, 0], [38, 34, 1], [76, 20, 2]],
    [[12, 40, 1], [56, 36, 3]],
    [[0, 22, 0], [26, 28, 2], [58, 38, 4]],
  ]
  return (
    <div className="absolute inset-0 px-5 py-6 flex flex-col justify-center gap-3">
      {rows.map((row, r) => (
        <div key={r} className="relative h-6">
          {row.map(([left, width, c], i) => (
            <span
              key={i}
              className="absolute top-0 h-6 rounded-lg shadow-sm transition-transform duration-500 group-hover:translate-x-1"
              style={{ left: `${left}%`, width: `${width}%`, background: epochs[c % epochs.length].color }}
            />
          ))}
        </div>
      ))}
      <div className="h-px bg-line mt-1" />
    </div>
  )
}

function MapIllustration() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg viewBox="0 0 200 120" className="w-full h-full text-muted/40" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="100" cy="56" r="44" />
          <ellipse cx="100" cy="56" rx="20" ry="44" />
          <ellipse cx="100" cy="56" rx="36" ry="44" />
          <path d="M56 56h88M62 34h76M62 78h76" />
        </g>
        <g className="transition-transform duration-700 origin-center group-hover:scale-105">
          <path d="M78 30c8-4 18-2 22 4s-2 12-10 12-16-10-12-16Z" fill="#d4a373" opacity=".9" />
          <path d="M104 48c8-3 20 0 22 8s-6 14-14 12-14-16-8-20Z" fill="#7c8bbf" opacity=".9" />
          <path d="M80 64c6-2 12 2 12 8s-6 12-12 10-6-16 0-18Z" fill="#c98bb9" opacity=".9" />
        </g>
        <g>
          <rect x="40" y="108" width="120" height="3" rx="1.5" fill="currentColor" />
          <rect x="40" y="108" width="62" height="3" rx="1.5" fill="rgb(var(--c-accent))" />
          <circle cx="102" cy="109.5" r="4.5" fill="rgb(var(--c-surface))" stroke="rgb(var(--c-accent))" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}

function ReviseIllustration() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative w-28 h-32">
        {[-10, 6].map((rot, i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-2xl bg-surface border border-line shadow-soft transition-transform duration-500"
            style={{ transform: `rotate(${rot}deg) translateY(${i * 2}px)` }}
          />
        ))}
        <span className="absolute inset-0 rounded-2xl bg-surface border border-line shadow-lift p-3 flex flex-col transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-y-1">
          <span className="h-2 w-10 rounded bg-accent/60" />
          <span className="mt-2 h-1.5 w-16 rounded bg-line" />
          <span className="mt-1 h-1.5 w-14 rounded bg-line" />
          <span className="mt-auto self-center inline-flex items-center gap-1 text-[11px] font-semibold text-success">
            <Icon name="check" size={14} strokeWidth={2.5} /> 18/20
          </span>
        </span>
      </div>
    </div>
  )
}
