/**
 * ui.js — État d'interface global (non persisté, sauf « présentation déjà vue »)
 */
import { create } from 'zustand'
import { load, save } from '../lib/storage'

const ONBOARDING_KEY = 'histomap_onboarding_done'
// Ancienne fenêtre de bienvenue : quelqu'un qui l'a déjà vue ne revoit pas la présentation
const LEGACY_WELCOME_KEY = 'histomap_welcome_seen'
let toastTimer = null

export const useUI = create((set) => ({
  /** Présentation en 3 écrans, au premier lancement (et via le bouton « Présentation »). */
  onboardingOpen: !load(ONBOARDING_KEY, false) && !load(LEGACY_WELCOME_KEY, false),
  openOnboarding: () => set({ onboardingOpen: true }),
  closeOnboarding: () => {
    save(ONBOARDING_KEY, true)
    set({ onboardingOpen: false })
  },

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
