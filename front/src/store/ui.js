/**
 * ui.js — État d'interface global (non persisté, sauf « bienvenue déjà vue »)
 */
import { create } from 'zustand'
import { welcome } from '../config/welcome'
import { load, save } from '../lib/storage'

const WELCOME_KEY = 'histomap_welcome_seen'

export const useUI = create((set) => ({
  welcomeOpen: welcome.enabled && !load(WELCOME_KEY, false),

  openWelcome: () => set({ welcomeOpen: true }),
  closeWelcome: () => {
    save(WELCOME_KEY, true)
    set({ welcomeOpen: false })
  },
}))
