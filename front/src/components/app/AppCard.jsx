import { useEffect, useState } from 'react'
import { useApp } from '../../store/app'
import { isIOS, cacheAllMaps, countCachedMaps } from '../../lib/pwa'
import MAP_YEARS from '../../data/map-years.json' // (pas lib/map : évite de charger d3 sur l'accueil)
import { haptic } from '../../lib/haptics'
import { useUI } from '../../store/ui'
import Icon from '../ui/Icon'

const offlineSupported = import.meta.env.PROD && typeof window !== 'undefined' && 'serviceWorker' in navigator && 'caches' in window

/**
 * « Emportez HistoMap » (accueil) : installer l'application sur l'écran d'accueil
 * et télécharger les fonds de carte pour réviser sans réseau.
 */
export default function AppCard() {
  const installEvent = useApp((s) => s.installEvent)
  const standalone = useApp((s) => s.standalone)
  const online = useApp((s) => s.online)
  const promptInstall = useApp((s) => s.promptInstall)
  const showToast = useUI((s) => s.showToast)

  const [cached, setCached] = useState(null)
  const [progress, setProgress] = useState(null)
  const total = MAP_YEARS.length

  useEffect(() => {
    if (offlineSupported) countCachedMaps(MAP_YEARS).then(setCached).catch(() => {})
  }, [])

  const ios = !standalone && isIOS()
  const canInstall = !standalone && (installEvent || ios)
  if (!canInstall && !standalone && !offlineSupported) return null

  const install = async () => {
    if (await promptInstall()) {
      haptic('success')
      showToast({ text: 'HistoMap est installé sur votre appareil', tone: 'success' })
    }
  }

  const download = async () => {
    setProgress(0)
    try {
      await cacheAllMaps(MAP_YEARS, setProgress)
      setCached(total)
      haptic('success')
      showToast({ text: 'Toutes les cartes sont disponibles hors ligne', tone: 'success' })
    } catch {
      showToast({ text: 'Téléchargement interrompu : vérifiez votre connexion', icon: 'wifiOff' })
      countCachedMaps(MAP_YEARS).then(setCached).catch(() => {})
    } finally {
      setProgress(null)
    }
  }

  return (
    <section aria-labelledby="app-title" className="card p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <img src={`${import.meta.env.BASE_URL}icons/icon-192.png`} alt="" width="56" height="56" className="w-14 h-14 rounded-2xl shadow-soft shrink-0" />
        <div className="min-w-0">
          <p className="eyebrow mb-1">Application</p>
          <h2 id="app-title" className="font-display text-2xl font-semibold text-ink">Emportez HistoMap</h2>
          <p className="mt-1.5 text-muted leading-relaxed">
            {standalone
              ? 'HistoMap est installé : il s’ouvre comme une application et fonctionne même sans réseau.'
              : 'Ajoutez HistoMap à votre écran d’accueil pour l’ouvrir en un geste et réviser même sans réseau.'}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {installEvent && !standalone && (
          <button onClick={install} className="btn-primary h-12 justify-center">
            <Icon name="download" size={18} /> Installer l'application
          </button>
        )}
        {ios && (
          <p className="rounded-2xl bg-surface2 p-4 text-sm text-ink leading-relaxed sm:col-span-2">
            Sur iPhone ou iPad : touchez <Icon name="share" size={16} className="inline -mt-1 mx-0.5" aria-label="Partager" />{' '}
            <strong>Partager</strong>, puis <strong>« Sur l'écran d'accueil »</strong>.
          </p>
        )}
        {standalone && (
          <p className="flex items-center gap-2 text-sm text-success font-medium">
            <Icon name="check" size={18} /> Application installée
          </p>
        )}

        {offlineSupported && (
          <div className="rounded-2xl border border-line p-4 flex flex-wrap items-center gap-3 sm:col-span-2">
            <Icon name="globe" size={20} className="text-accent shrink-0" />
            <div className="flex-1 min-w-[12rem]">
              <p className="text-sm font-medium text-ink">Carte du monde hors ligne</p>
              <p className="text-xs text-muted">
                {progress !== null
                  ? `Téléchargement… ${Math.round(progress * 100)} %`
                  : cached === total
                    ? `Les ${total} cartes sont sur votre appareil.`
                    : `${cached ?? 0} carte${cached > 1 ? 's' : ''} sur ${total} disponible${cached > 1 ? 's' : ''} sans réseau (≈ 3,5 Mo en tout).`}
              </p>
              {progress !== null && (
                <div className="mt-2 h-1.5 rounded-full bg-surface2 overflow-hidden" role="progressbar" aria-label="Téléchargement des cartes" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
                  <div className="h-full bg-accent transition-[width]" style={{ width: `${progress * 100}%` }} />
                </div>
              )}
            </div>
            {cached !== total && (
              <button onClick={download} disabled={progress !== null || !online} className="btn-secondary h-10 px-4 text-sm disabled:opacity-50">
                <Icon name="download" size={16} /> {progress !== null ? 'En cours' : 'Télécharger'}
              </button>
            )}
            {cached === total && <Icon name="check" size={20} className="text-success" aria-label="Terminé" />}
          </div>
        )}
      </div>
    </section>
  )
}
