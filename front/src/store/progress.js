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
 *   chapters  { [civId]: Chapter }                        révisions (voir plus bas)
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

      // ── Révisions ───────────────────────────────────────────────────────────
      // Chapter = {
      //   rounds,          passages terminés (0 = jamais terminé)
      //   finishedAt,      date du dernier passage terminé
      //   toReview: [],    cartes marquées « à revoir » au dernier passage
      //   current: { round, queue: [cardId], pos, review: [cardId], requeued: [cardId] } | null
      // }

      /** Démarre (ou redémarre) une séance avec une liste de cartes. */
      startChapter(civId, round, queue) {
        set((s) => ({
          chapters: {
            ...s.chapters,
            [civId]: { rounds: 0, toReview: [], ...s.chapters[civId], current: { round, queue, pos: 0, review: [], requeued: [] } },
          },
        }))
        get().touchDay()
      },

      /** Réponse sur la carte courante : 'ok' (compris) ou 'review' (à revoir). */
      answerCard(civId, verdict) {
        set((s) => {
          const ch = s.chapters[civId]
          if (!ch?.current) return {}
          const cur = ch.current
          const cardId = cur.queue[cur.pos]
          let queue = cur.queue
          let review = cur.review
          let requeued = cur.requeued
          if (verdict === 'review') {
            if (!review.includes(cardId)) review = [...review, cardId]
            // la carte revient une fois avant le bilan (dernière carte)
            if (!requeued.includes(cardId)) {
              queue = [...queue.slice(0, -1), cardId, queue[queue.length - 1]]
              requeued = [...requeued, cardId]
            }
          }
          return { chapters: { ...s.chapters, [civId]: { ...ch, current: { ...cur, queue, review, requeued, pos: cur.pos + 1 } } } }
        })
      },

      /** Revenir à la carte précédente. */
      previousCard(civId) {
        set((s) => {
          const ch = s.chapters[civId]
          if (!ch?.current || ch.current.pos === 0) return {}
          return { chapters: { ...s.chapters, [civId]: { ...ch, current: { ...ch.current, pos: ch.current.pos - 1 } } } }
        })
      },

      /** Fin de séance : passage comptabilisé, cartes « à revoir » mémorisées. */
      finishChapter(civId) {
        set((s) => {
          const ch = s.chapters[civId]
          if (!ch?.current) return {}
          return {
            chapters: {
              ...s.chapters,
              [civId]: { ...ch, rounds: ch.rounds + 1, finishedAt: Date.now(), toReview: ch.current.review, current: null },
            },
          }
        })
        get().touchDay()
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
