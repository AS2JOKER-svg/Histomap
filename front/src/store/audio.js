/**
 * audio.js — Réglages du son (V3, sprint 25) : sons de l'interface (activés par défaut)
 * et musique d'ambiance (coupée par défaut) ; depuis le sprint 26, vibrations (activées par défaut).
 * La logique est dans lib/sons.js, lib/musique.js et lib/haptics.js, qui gardent leur réglage
 * dans le stockage local ; ce store ne sert qu'à rafraîchir l'affichage.
 */
import { create } from 'zustand'
import { activerSons, sonsActifs } from '../lib/sons'
import { activerMusique, musiqueActive } from '../lib/musique'
import { activerVibrations, vibrationsActives } from '../lib/haptics'

export const useAudio = create((set) => ({
  sons: sonsActifs(),
  musique: musiqueActive(),
  vibrations: vibrationsActives(),
  setSons: (oui) => {
    activerSons(oui)
    set({ sons: oui })
  },
  setMusique: (oui) => {
    activerMusique(oui)
    set({ musique: oui })
  },
  setVibrations: (oui) => {
    activerVibrations(oui)
    set({ vibrations: oui })
  },
}))
