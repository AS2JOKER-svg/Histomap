/**
 * ui.js — État d'interface global (non persisté). Le premier lancement est suivi par
 * l'Aventure (aventure.onboarding, store/progress.js) : page /bienvenue.
 */
import { create } from 'zustand'

let toastTimer = null

export const useUI = create((set) => ({
  /**
   * Aperçu d'une fiche (feuille du bas), ouvert depuis un mot souligné, un dirigeant, une guerre… :
   *   { id }                       fiche liée ou civilisation (chargée par l'aperçu)
   *   { id?, title, badge, … }     contenu fourni directement (dirigeant sans fiche, guerre…)
   */
  sheet: null,
  openSheet: (sheet) => set({ sheet: { ...sheet, key: Date.now() } }),
  closeSheet: () => set({ sheet: null }),

  /** Message éphémère en bas de l'écran : { text, icon?, tone?: 'success' | 'info' } */
  toast: null,
  showToast: (toast, duration = 3200) => {
    clearTimeout(toastTimer)
    set({ toast: { ...toast, id: Date.now() } })
    toastTimer = setTimeout(() => set({ toast: null }), duration)
  },
}))
