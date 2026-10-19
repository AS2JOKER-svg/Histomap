import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { useChapter } from '../../lib/chapters'
import { useCiv } from '../../lib/data'
import Icon from '../ui/Icon'

/**
 * Charge la fiche complète et le chapitre rédigé (s'il existe) puis affiche
 * children(refComplète) en plein écran. Pendant le chargement : un squelette ;
 * en cas d'échec (hors ligne et chapitre jamais ouvert) : un message et « Réessayer ».
 */
export default function ChapterGate({ refCiv, children }) {
  const chapterState = useChapter(refCiv.civ.id)
  const civState = useCiv(refCiv.civ.id)
  const { chapter } = chapterState
  const fullCiv = civState.civ
  const status = [chapterState.status, civState.status].includes('error')
    ? 'error'
    : chapterState.status === 'ready' && civState.status === 'ready' ? 'ready' : 'loading'
  const retry = () => {
    if (chapterState.status === 'error') chapterState.retry()
    if (civState.status === 'error') civState.retry()
  }
  const ref = useMemo(
    () => (status === 'ready' ? { ...refCiv, civ: fullCiv, hand: chapter } : null),
    [status, chapter, fullCiv, refCiv]
  )

  let content
  if (ref) content = children(ref)
  else if (status === 'error') {
    content = (
      <div className="fixed inset-0 z-50 bg-bg grid place-items-center p-6 text-center">
        <div className="max-w-sm">
          <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-surface2 text-muted mb-4">
            <Icon name="wifiOff" size={26} />
          </span>
          <h1 className="font-display text-2xl font-semibold text-ink">Chapitre indisponible</h1>
          <p className="mt-2 text-muted">Il n'a pas pu être chargé. Vérifiez votre connexion, puis réessayez.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to={`/reviser/${refCiv.epoch.id}`} className="btn-secondary h-11 px-4">Retour</Link>
            <button onClick={retry} className="btn-primary h-11 px-4"><Icon name="refresh" size={18} /> Réessayer</button>
          </div>
        </div>
      </div>
    )
  } else {
    content = (
      <div className="fixed inset-0 z-50 bg-bg flex flex-col items-center px-4 pt-6" aria-busy="true" aria-label="Chargement du chapitre">
        <div className="w-full max-w-[560px] animate-pulse space-y-4">
          <div className="h-4 w-40 mx-auto rounded bg-surface2" />
          <div className="h-1.5 rounded bg-surface2" />
          <div className="h-[60vh] rounded-3xl bg-surface2" />
        </div>
      </div>
    )
  }
  return createPortal(content, document.body)
}
