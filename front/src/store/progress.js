/**
 * progress.js — Progression de l'utilisateur (sauvegardée dans le navigateur)
 * ===========================================================================
 * Tout est stocké en local (localStorage, clé `histomap_progress`) : rien ne
 * part sur un serveur. Conséquence : la progression est propre à un appareil
 * et à un navigateur (pas de synchronisation téléphone ↔ ordinateur).
 *
 * Schéma (version 1) :
 *   fiches    { [civId]: { firstAt, lastAt, views } }      fiches complètes ouvertes
 *   last      { path, title, subtitle, kind, color, at }   dernier endroit « utile »
 *   lastFiche { path, title, subtitle, color, at }         dernière fiche lue
 *   days      ['2026-10-03', …]                            jours d'activité (60 max)
 *   chapters  { [civId]: { cardsSeen, finishedAt, … } }    révisions  (sprint 5)
 *   quizzes   { [civId]: { attempts, best, failed: [] } }  quiz       (sprint 6)
 *   startedAt                                              première visite
 *
 * Pour faire évoluer le schéma : incrémenter VERSION et compléter migrate().
 */
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { load } from '../lib/storage'

const VERSION = 1
const MAX_DAYS = 60

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Date de la visite précédente (lue avant que cette session ne l'écrase) → « Bon retour »
const PREVIOUS_VISIT_AT = load('histomap_progress', null)?.state?.last?.at ?? null

const initial = () => ({
  fiches: {},
  last: null,
  lastFiche: null,
  previousVisitAt: PREVIOUS_VISIT_AT,
  days: [],
  chapters: {},
  quizzes: {},
  startedAt: Date.now(),
})

export const useProgress = create(
  persist(
    (set, get) => ({
      ...initial(),

      /** À appeler à l'ouverture d'une fiche complète. Renvoie true la 1re fois. */
      readFiche(civId) {
        const now = Date.now()
        const prev = get().fiches[civId]
        set((s) => ({
          fiches: {
            ...s.fiches,
            [civId]: { firstAt: prev?.firstAt ?? now, lastAt: now, views: (prev?.views ?? 0) + 1 },
          },
        }))
        get().touchDay()
        return !prev
      },

      /** Mémorise le dernier endroit consulté (pour « Reprendre où j'en étais »). */
      setLast(entry) {
        const last = { ...entry, at: Date.now() }
        set(entry.kind === 'fiche' ? { last, lastFiche: last } : { last })
      },

      touchDay() {
        const d = today()
        const days = get().days
        if (days[days.length - 1] !== d) set({ days: [...days, d].slice(-MAX_DAYS) })
      },

      reset() {
        set({ ...initial(), previousVisitAt: null, startedAt: Date.now() })
      },
    }),
    {
      name: 'histomap_progress',
      version: VERSION,
      // localStorage indisponible (navigation privée stricte) → progression en mémoire seulement
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        fiches: s.fiches,
        last: s.last,
        lastFiche: s.lastFiche,
        days: s.days,
        chapters: s.chapters,
        quizzes: s.quizzes,
        startedAt: s.startedAt,
      }),
      migrate: (persisted) => ({ ...initial(), ...persisted }),
    }
  )
)

// ── Sélecteurs ───────────────────────────────────────────────────────────────

/** Série de jours consécutifs d'activité, jusqu'à aujourd'hui (ou hier). */
export function streakOf(days) {
  if (!days.length) return 0
  const set = new Set(days)
  const d = new Date()
  // la série n'est pas cassée si l'on n'est pas encore venu aujourd'hui
  if (!set.has(today())) d.setDate(d.getDate() - 1)
  let n = 0
  for (;;) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    if (!set.has(key)) return n
    n++
    d.setDate(d.getDate() - 1)
  }
}

/** Nombre de fiches lues dans une époque. */
export function readCount(fiches, epoch) {
  let n = 0
  for (const c of epoch.continents) for (const civ of c.civilizations) if (fiches[civ.id]) n++
  return n
}

/** « il y a 3 jours », « aujourd'hui »… */
export function timeAgo(ts) {
  if (!ts) return ''
  const s = (Date.now() - ts) / 1000
  if (s < 60) return "à l'instant"
  if (s < 3600) return `il y a ${Math.round(s / 60)} min`
  if (s < 86400) return `il y a ${Math.round(s / 3600)} h`
  const days = Math.round(s / 86400)
  if (days === 1) return 'hier'
  if (days < 30) return `il y a ${days} jours`
  return `il y a ${Math.round(days / 30)} mois`
}
