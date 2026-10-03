import { useCallback } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { getCivilization, getEpoch, getEpochs, countCivilizations } from '../lib/data'
import { formatDuration, formatYear } from '../lib/time'
import useDocumentTitle from '../lib/useDocumentTitle'
import PageHeader from '../components/ui/PageHeader'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Icon from '../components/ui/Icon'
import EpochSwitcher from '../components/timeline/EpochSwitcher'
import EpochTimeline from '../components/timeline/EpochTimeline'
import CivPreview from '../components/timeline/CivPreview'
import NotFoundPage from './NotFoundPage'

export default function EpochPage() {
  const { epochId } = useParams()
  const epoch = getEpoch(epochId)
  useDocumentTitle(epoch?.label ?? 'Époque introuvable')

  if (!epoch) {
    return <NotFoundPage title="Époque introuvable" text="Cette époque n'existe pas (encore) dans HistoMap." />
  }
  return <EpochContent key={epoch.id} epoch={epoch} />
}

function EpochContent({ epoch }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [params, setParams] = useSearchParams()

  // L'aperçu ouvert est dans l'URL (?civ=…) : partageable, et « retour » le ferme.
  const selected = params.get('civ') ? getCivilization(epoch.id, params.get('civ')) : null

  const select = useCallback(
    (civ) => {
      const alreadyOpen = !!location.state?.preview
      setParams({ civ: civ.id }, { replace: alreadyOpen, state: { preview: true }, preventScrollReset: true })
    },
    [location.state, setParams]
  )
  const close = useCallback(() => {
    if (location.state?.preview) navigate(-1)
    else setParams({}, { replace: true, preventScrollReset: true })
  }, [location.state, navigate, setParams])

  const epochs = getEpochs()
  const idx = epochs.findIndex((e) => e.id === epoch.id)
  const prev = epochs[idx - 1]
  const next = epochs[idx + 1]

  return (
    <section>
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Frise', to: '/frise' }, { label: epoch.label }]} />
      <EpochSwitcher epochs={epochs} currentId={epoch.id} />

      <PageHeader
        eyebrow={`${formatYear(epoch.start)} → ${formatYear(epoch.end)}`}
        color={epoch.color}
        title={epoch.label}
        description={epoch.description}
        actions={
          <div className="flex gap-2 text-xs">
            <span className="chip"><span className="text-muted">Durée</span> <span className="font-medium">{formatDuration(epoch.start, epoch.end)}</span></span>
            <span className="chip"><span className="font-medium">{countCivilizations(epoch)}</span> <span className="text-muted">civilisations</span></span>
          </div>
        }
      />

      <EpochTimeline epoch={epoch} selectedId={selected?.civ.id} onSelect={select} />

      {/* Époque précédente / suivante */}
      <nav aria-label="Autres époques" className="mt-8 grid grid-cols-2 gap-3">
        {prev ? <EpochLink epoch={prev} dir="prev" /> : <span />}
        {next ? <EpochLink epoch={next} dir="next" /> : <span />}
      </nav>

      <AnimatePresence>
        {selected && (
          <CivPreview
            key="preview"
            civ={selected.civ}
            epoch={epoch}
            continent={selected.continent}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function EpochLink({ epoch, dir }) {
  const isNext = dir === 'next'
  return (
    <Link
      to={`/frise/${epoch.id}`}
      className={`card hoverable p-4 flex items-center gap-3 ${isNext ? 'justify-end text-right' : ''}`}
    >
      {!isNext && <Icon name="arrowLeft" className="text-muted shrink-0" />}
      <span className="min-w-0">
        <span className="eyebrow block">{isNext ? 'Époque suivante' : 'Époque précédente'}</span>
        <span className="font-display font-semibold text-ink truncate block">{epoch.label}</span>
      </span>
      {isNext && <Icon name="arrowRight" className="text-muted shrink-0" />}
    </Link>
  )
}
