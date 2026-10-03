import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getEpochs, countCivilizations } from '../lib/data'
import { formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import EpochRibbon from '../components/timeline/EpochRibbon'

export default function TimelinePage() {
  useDocumentTitle('La frise')
  const epochs = getEpochs()

  return (
    <section>
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Frise' }]} />
      <PageHeader
        eyebrow="La frise"
        title={`${epochs.length} époques, une seule flèche`}
        description="Chaque trait dans un bloc est une civilisation, rangée par continent. Choisissez une époque pour l'ouvrir en grand."
      />

      <EpochRibbon epochs={epochs} />

      {/* Repères : ce qu'on trouve dans chaque époque */}
      <h2 className="font-display text-2xl font-semibold text-ink mt-14 mb-5">En bref</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {epochs.map((epoch, i) => (
          <motion.div key={epoch.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.05 }}>
            <Link to={`/frise/${epoch.id}`} className="card hoverable group block h-full p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: epoch.color }} />
                <span className="text-xs font-medium text-muted tabular-nums">
                  {formatYear(epoch.start)} → {formatYear(epoch.end)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition">{epoch.label}</h3>
              <p className="text-sm text-muted mt-1.5 line-clamp-3 leading-relaxed">{epoch.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {epoch.continents.map((c) => (
                  <span key={c.id} className="chip text-muted">
                    {c.label} <span className="text-ink font-medium tabular-nums">{c.civilizations.length}</span>
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {countCivilizations(epoch)} civilisations <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
