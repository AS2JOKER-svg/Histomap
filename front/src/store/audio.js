/**
 * audio.js — Réglages du son (V3, sprint 25) : sons de l'interface (activés par défaut)
 * et musique d'ambiance (coupée par défaut). La logique est dans lib/sons.js et lib/musique.js,
 * qui gardent leur réglage dans le stockage local ; ce store ne sert qu'à rafraîchir l'affichage.
 */
import { create } from 'zustand'
import { activerSons, sonsActifs } from '../lib/sons'
import { activerMusique, musiqueActive } from '../lib/musique'

export const useAudio = create((set) => ({
  sons: sonsActifs(),
  musique: musiqueActive(),
  setSons: (oui) => {
    activerSons(oui)
    set({ sons: oui })
  },
  setMusique: (oui) => {
    activerMusique(oui)
    set({ musique: oui })
  },
}))
