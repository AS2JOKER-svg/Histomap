/**
 * pwa.js — Application installable et hors ligne
 * ===============================================
 * Enregistre le service worker (dist/sw.js, généré au build) et tient à jour
 * useApp : connexion, invitation d'installation, nouvelle version disponible.
 * En développement (npm run dev), rien n'est enregistré.
 */
import { useApp } from '../store/app'

const isStandalone = () =>
  (typeof matchMedia === 'function' && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true

/** iPhone / iPad sous Safari : pas d'invitation automatique, il faut passer par « Partager ». */
export const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

export function initPWA() {
  if (typeof window === 'undefined') return
  const set = useApp.setState
  set({ standalone: isStandalone() })

  window.addEventListener('online', () => set({ online: true }))
  window.addEventListener('offline', () => set({ online: false }))
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    set({ installEvent: e })
  })
  window.addEventListener('appinstalled', () => set({ installEvent: null, standalone: true }))

  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((reg) => {
        const offer = (worker) => set({ updateReady: true, waitingWorker: worker })
        // Une version attendait déjà (onglet resté ouvert pendant une mise à jour)
        if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting)
        reg.addEventListener('updatefound', () => {
          const worker = reg.installing
          worker?.addEventListener('statechange', () => {
            // Première installation : pas de bandeau, le site est simplement prêt hors ligne.
            if (worker.state === 'installed' && navigator.serviceWorker.controller) offer(worker)
          })
        })
        // Vérifie les mises à jour quand on revient sur l'application
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') reg.update().catch(() => {})
        })
      })
      .catch(() => {})

    let reloading = false
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloading) return
      reloading = true
      window.location.reload()
    })
  })
}

export const RUNTIME_CACHE = 'histomap-runtime-v1' // même nom que dans sw/sw.js
const mapUrl = (y) => new URL(`${import.meta.env.BASE_URL}map/world_${y}.json`, location.href).href

/** Nombre de fonds de carte déjà disponibles hors ligne. */
export async function countCachedMaps(years) {
  if (!('caches' in window)) return 0
  const cache = await caches.open(RUNTIME_CACHE)
  const hits = await Promise.all(years.map((y) => cache.match(mapUrl(y))))
  return hits.filter(Boolean).length
}

/** Télécharge tous les fonds de carte pour consulter la carte sans réseau. */
export async function cacheAllMaps(years, onProgress = () => {}) {
  const cache = await caches.open(RUNTIME_CACHE)
  let done = 0
  for (const y of years) {
    if (!(await cache.match(mapUrl(y)))) await cache.add(mapUrl(y))
    onProgress(++done / years.length)
  }
}
