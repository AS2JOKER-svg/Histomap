import { useEffect, useState } from 'react'
import { useApp } from '../../store/app'
import { isIOS, cacheAllMaps, countCachedMaps } from '../../lib/pwa'
import MAP_YEARS from '../../data/map-years.json' // (pas lib/map : évite de charger d3 ici)
import { haptic } from '../../lib/haptics'
import { useUI } from '../../store/ui'
import Icon from '../ui/Icon'
import { TitreSection } from '../profil/SousPage'

const offlineSupported = import.meta.env.PROD && typeof window !== 'undefined' && 'serviceWorker' in navigator && 'caches' in window

/**
 * Section « Application » des Réglages (sprint 32 ; carte « Emportez HistoMap » du Profil avant) :
 * installer l'application sur l'écran d'accueil, télécharger les fonds de carte pour le hors-ligne.
 * Rien n'est affiché quand il n'y a rien à proposer (développement, navigateur sans installation).
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
      showToast({ text: 'HistoMap est installé sur ton appareil', tone: 'success' })
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
      showToast({ text: 'Téléchargement interrompu : vérifie ta connexion', icon: 'wifiOff' })
      countCachedMaps(MAP_YEARS).then(setCached).catch(() => {})
    } finally {
      setProgress(null)
    }
  }

  return (
    <section aria-labelledby="reg-app" className="mt-6">
      <TitreSection id="reg-app" className="mb-0.5">Application</TitreSection>
      <div className="border-t border-line">
        {installEvent && !standalone && (
          <div className="min-h-[60px] py-2 flex items-center gap-3 border-b border-line">
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-ink">Installer l’application</span>
              <span className="block text-xs text-muted">Sur l’écran d’accueil : elle s’ouvre en un geste, même sans réseau.</span>
            </span>
            <button onClick={install} className="btn-accent h-11 px-4 shrink-0">
              <Icon name="download" size={18} /> Installer
            </button>
          </div>
        )}
        {ios && (
          <p className="py-3 border-b border-line text-sm text-ink leading-relaxed">
            <span className="block font-semibold">Installer sur iPhone ou iPad</span>
            Touche <Icon name="share" size={16} className="inline -mt-1 mx-0.5" aria-label="Partager" /> <strong>Partager</strong>, puis <strong>« Sur l’écran d’accueil »</strong>.
          </p>
        )}
        {standalone && (
          <p className="min-h-[52px] flex items-center gap-2 border-b border-line text-sm font-semibold text-success">
            <Icon name="check" size={18} /> Application installée
          </p>
        )}
        {offlineSupported && (
          <div className="min-h-[60px] py-2 flex items-center gap-3 border-b border-line">
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-ink">Carte du monde hors ligne</span>
              <span className="block text-xs text-muted">
                {progress !== null
                  ? `Téléchargement… ${Math.round(progress * 100)} %`
                  : cached === total
                    ? `Les ${total} cartes sont sur cet appareil.`
                    : `${cached ?? 0} carte${cached > 1 ? 's' : ''} sur ${total} sans réseau (≈ 3,5 Mo en tout).`}
              </span>
              {progress !== null && (
                <span className="block mt-1.5 h-1.5 rounded-full bg-surface2 overflow-hidden" role="progressbar" aria-label="Téléchargement des cartes" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
                  <span className="block h-full bg-accent transition-[width]" style={{ width: `${progress * 100}%` }} />
                </span>
              )}
            </span>
            {cached !== total && (
              <button onClick={download} disabled={progress !== null || !online} className="btn-secondary h-11 px-4 shrink-0">
                <Icon name="download" size={16} /> {progress !== null ? 'En cours' : 'Télécharger'}
              </button>
            )}
            {cached === total && <Icon name="check" size={20} className="text-success shrink-0" aria-label="Terminé" />}
          </div>
        )}
      </div>
    </section>
  )
}
