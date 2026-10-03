/**
 * preferences.js — Préférences utilisateur (Zustand, persistées)
 * ===============================================================
 *   theme : 'system' | 'light' | 'dark'  (« system » tant que l'utilisateur n'a rien choisi)
 *
 * Le thème est aussi appliqué avant le premier rendu par le script inline de
 * index.html (même clé localStorage) pour éviter un flash de couleur.
 */
import { create } from 'zustand'

const THEME_KEY = 'histomap_theme'
const darkQuery = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : null

function resolve(theme) {
  if (theme === 'system') return darkQuery?.matches ? 'dark' : 'light'
  return theme
}

function apply(theme) {
  const resolved = resolve(theme)
  usePreferences.setState({ resolved })
  document.documentElement.dataset.theme = resolved
  const meta = document.querySelectorAll('meta[name="theme-color"]')
  meta.forEach((m) => m.setAttribute('content', resolved === 'dark' ? '#0c0f16' : '#f7f8fb'))
}

function readTheme() {
  try {
    const v = localStorage.getItem(THEME_KEY)
    return v === 'light' || v === 'dark' ? v : 'system'
  } catch {
    return 'system'
  }
}

export const usePreferences = create((set, get) => ({
  theme: readTheme(),
  /** Thème réellement affiché : 'light' | 'dark' */
  resolved: resolve(readTheme()),

  setTheme: (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore */
    }
    apply(theme)
    set({ theme })
  },

  /** Bascule vers le thème opposé à celui affiché (le choix est ensuite mémorisé). */
  toggleTheme: () => get().setTheme(get().resolved === 'dark' ? 'light' : 'dark'),
}))

// Suit le thème du système quand l'utilisateur est en mode « système »
darkQuery?.addEventListener?.('change', () => {
  if (usePreferences.getState().theme === 'system') apply('system')
})

apply(usePreferences.getState().theme)
