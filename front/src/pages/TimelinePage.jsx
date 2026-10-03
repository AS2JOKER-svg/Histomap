import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpochs, countCivilizations } from '../lib/data'
import { createTimeScale, formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'

const TRACK_W = 1040
const TRACK_H = 112

export default function TimelinePage() {
  useDocumentTitle('La frise')
  const navigate = useNavigate()
  const epochs = getEpochs()

  const minYear = Math.min(...epochs.map((e) => e.start))
  const maxYear = Math.max(...epochs.map((e) => e.end))
  const scale = createTimeScale(minYear, maxYear, TRACK_W - 40)

  return (
    <section>
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Frise' }]} />
      <PageHeader
        eyebrow="La frise"
        title={`${epochs.length} époques, une seule frise`}
        description="Choisissez une époque pour explorer ses continents et ses civilisations."
      />

      {/* Frise horizontale (refonte complète prévue au sprint 2) */}
      <div className="card p-4 sm:p-6 mb-8">
        <div className="overflow-x-auto -mx-1 px-1 pb-1">
          <div className="relative mx-auto" style={{ width: TRACK_W, height: TRACK_H }}>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-surface2 rounded-l-full"
              style={{ width: TRACK_W - 20, height: 16 }}
            >
              <svg className="absolute left-full top-1/2 -translate-y-1/2 text-surface2 fill-current" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 4l8 8-8 8V4z" />
              </svg>
            </div>

            {epochs.map((epoch, i) => {
              const x1 = scale(epoch.start)
              const w = Math.max(scale(epoch.end) - x1, 110)
              return (
                <motion.button
                  key={epoch.id}
                  onClick={() => navigate(`/frise/${epoch.id}`)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="absolute rounded-xl text-white text-left px-4 py-3 shadow-soft border border-white/10 flex flex-col justify-center"
                  style={{
                    left: x1,
                    width: w,
                    top: TRACK_H / 2 - 32,
                    height: 64,
                    background: `linear-gradient(135deg, ${epoch.color}, ${epoch.color}dd)`,
                  }}
                  aria-label={`${epoch.label}, à partir de ${formatYear(epoch.start)}`}
                >
                  <span className="block text-xs font-bold leading-tight tracking-wide uppercase truncate">{epoch.label}</span>
                  <span className="block text-[11px] opacity-85 mt-0.5 tracking-wider truncate font-medium">
                    {formatYear(epoch.start)}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
        <p className="md:hidden text-xs text-muted mt-2 flex items-center gap-1">
          <Icon name="arrowRight" size={14} /> Faites défiler la frise horizontalement
        </p>
      </div>

      {/* Grille des époques */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {epochs.map((epoch, i) => (
          <motion.div
            key={epoch.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={`/frise/${epoch.id}`}
              className="card hoverable text-left p-5 relative overflow-hidden group block h-full"
            >
              <span className="absolute top-0 left-0 h-1 w-full" style={{ background: epoch.color }} />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: epoch.color }} />
                <span className="text-xs font-medium text-muted">
                  {formatYear(epoch.start)} → {formatYear(epoch.end)}
                </span>
              </div>
              <h2 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition">
                {epoch.label}
              </h2>
              <p className="text-sm text-muted mt-1.5 line-clamp-3">{epoch.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <span className="chip text-muted">{epoch.continents.length} continents</span>
                <span className="chip text-muted">{countCivilizations(epoch)} civilisations</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
