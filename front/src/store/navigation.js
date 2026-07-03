/**
 * store/navigation.js — Navigation à 3 niveaux (Zustand)
 * =======================================================
 *   'epochs'       → frise globale des époques
 *   'continents'   → timeline d'une époque (continents + civilisations)
 *   'civilization' → fiche détaillée d'une civilisation
 */

import { create } from 'zustand'

export const useNavigation = create((set, get) => ({
  // ── État ─────────────────────────────────────────────────────────────
  view: 'epochs',
  selectedEpoch: null,
  selectedCiv: null,
  breadcrumbs: [], // [{ label, level }]

  // ── Actions ──────────────────────────────────────────────────────────
  goToEpoch: (epoch) =>
    set({
      view: 'continents',
      selectedEpoch: epoch,
      selectedCiv: null,
      breadcrumbs: [{ label: epoch.label, level: 'continents' }],
    }),

  goToCivilization: (civ) =>
    set((state) => ({
      view: 'civilization',
      selectedCiv: civ,
      breadcrumbs: [
        state.breadcrumbs[0] ?? { label: civ.epochLabel, level: 'continents' },
        { label: civ.label, level: 'civilization' },
      ],
    })),

  goToLevel: (level) => {
    if (level === 'epochs') return get().reset()
    if (level === 'continents') {
      set((state) => ({
        view: 'continents',
        selectedCiv: null,
        breadcrumbs: state.breadcrumbs.slice(0, 1),
      }))
    }
  },

  goBack: () => {
    const { view } = get()
    if (view === 'civilization') return get().goToLevel('continents')
    return get().reset()
  },

  reset: () =>
    set({
      view: 'epochs',
      selectedEpoch: null,
      selectedCiv: null,
      breadcrumbs: [],
    }),
}))

export default useNavigation
