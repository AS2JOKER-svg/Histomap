import { useCallback, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { getCivilization, getEpoch, getEpochs, countCivilizations, findCivilization } from '../lib/data'
import { useProgress, readCount } from '../store/progress'
import { useUI } from '../store/ui'
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
  // Arrivée depuis « la suite » d'une autre époque : ?focus=<civ>&from=<civ précédente>
  const focusId = params.get('focus')
  const fromId = params.get('from')

  const fiches = useProgress((s) => s.fiches)
  const setLast = useProgress((s) => s.setLast)
  const showToast = useUI((s) => s.showToast)
  const read = readCount(fiches, epoch)
  const total = countCivilizations(epoch)

  useEffect(() => {
    setLast({ path: `/frise/${epoch.id}`, kind: 'frise', title: epoch.label, subtitle: 'Frise', color: epoch.color })
  }, [epoch, setLast])

  useEffect(() => {
    if (!focusId) return
    const target = getCivilization(epoch.id, focusId)
    const from = fromId ? findCivilization(fromId) : null
    if (target && from) {
      showToast({ text: `La suite de « ${from.civ.label} » : ${target.civ.label}`, icon: 'arrowRight' }, 4000)
    }
    // on nettoie l'URL une fois l'animation jouée (un rechargement ne la rejoue pas)
    const t = setTimeout(() => setParams({}, { replace: true, preventScrollReset: true }), 3300)
    return () => clearTimeout(t)
  }, [focusId]) // eslint-disable-line react-hooks/exhaustive-deps

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
            <span className="chip" title="Fiches complètes ouvertes dans cette époque">
              <span className="relative w-10 h-1.5 rounded-full bg-line overflow-hidden">
                <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${(read / total) * 100}%`, background: epoch.color }} />
              </span>
              <span className="font-medium tabular-nums">{read}/{total}</span> <span className="text-muted">fiches lues</span>
            </span>
          </div>
        }
      />

      <EpochTimeline epoch={epoch} selectedId={selected?.civ.id} onSelect={select} focusId={focusId} />

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
