/**
 * app.js — État de l'application installée (non persisté)
 *   online        connexion réseau disponible
 *   installEvent  invitation d'installation du navigateur (Android / Chrome / Edge)
 *   standalone    le site tourne comme une application installée
 *   updateReady   une nouvelle version attend : applyUpdate() la charge
 */
import { create } from 'zustand'

export const useApp = create((set, get) => ({
  online: typeof navigator === 'undefined' ? true : navigator.onLine,
  installEvent: null,
  standalone: false,
  updateReady: false,
  waitingWorker: null,

  promptInstall: async () => {
    const ev = get().installEvent
    if (!ev) return false
    ev.prompt()
    const { outcome } = await ev.userChoice.catch(() => ({ outcome: 'dismissed' }))
    set({ installEvent: null })
    return outcome === 'accepted'
  },

  applyUpdate: () => {
    const worker = get().waitingWorker
    if (worker) worker.postMessage({ type: 'SKIP_WAITING' })
    else window.location.reload()
  },
}))
