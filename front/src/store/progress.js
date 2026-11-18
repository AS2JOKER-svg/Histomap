/**
 * progress.js — Progression de l'utilisateur (sauvegardée dans le navigateur)
 * ===========================================================================
 * Tout est stocké en local (localStorage, clé `histomap_progress`) : rien ne
 * part sur un serveur. Conséquence : la progression est propre à un appareil
 * et à un navigateur (pas de synchronisation téléphone ↔ ordinateur).
 *
 * Schéma (version 5) :
 *   fiches    { [civId]: { firstAt, lastAt, views } }      fiches complètes ouvertes
 *   last      { path, title, subtitle, kind, color, at }   dernier endroit « utile »
 *   lastFiche { path, title, subtitle, color, at }         dernière fiche lue
 *   days      ['2026-10-03', …]                            jours d'activité (60 max)
 *   chapters  { [civId]: Chapter }                        révisions (voir plus bas)
 *   quizzes   { [civId]: Quiz }                             quiz (voir plus bas)
 *   express   { [ficheId]: { best, total, attempts, lastAt } }  quiz express des fiches liées (v2)
 *   aventure  { xp, salles, serie, joursJoues, niveauCredite, titres… }  Aventure (v3 ; V3.1 en v4 ; jours joués en v5) : voir lib/progression.js
 *   startedAt                                              première visite
 *
 * Pour faire évoluer le schéma : incrémenter VERSION et compléter migrate().
 */
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { load } from '../lib/storage'
import PARCOURS from '../data/parcours.json'
import { createParcours, estTronc, etapeAccessible } from '../lib/aventure'
import * as prog from '../lib/progression'
import { noteQuiz } from '../lib/questions'

const VERSION = 5
const MAX_DAYS = 60

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Parcours de l'Aventure (index créé une fois). */
export const PARCOURS_AVENTURE = createParcours(PARCOURS)

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
  express: {},
  aventure: prog.aventureVide(),
  evenements: [], // derniers événements de l'Aventure (xp, découverte, étoiles, niveau, rang…), non sauvegardés
  startedAt: Date.now(),
})

export const useProgress = create(
  persist(
    (set, get) => ({
      ...initial(),

      // ── Aventure (V3.1) ──────────────────────────────────────────────────────
      /** Applique une fonction de lib/progression.js ; renvoie ses événements (pour les célébrations). */
      avancer(fn) {
        const { av, evenements } = fn(get().aventure)
        set({ aventure: av, evenements })
        return evenements
      },
      commencerEtape(civId, etape) {
        set((s) => ({ aventure: prog.commencerEtape(s.aventure, civId, etape) }))
      },
      /**
       * Découvrir ou Approfondir terminé dans une salle du tronc (`eclairs` : questions éclair justes).
       * Crédité seulement si l'étape est jouable (salle ouverte ; Approfondir après la découverte) :
       * un chapitre lu en avance ne fait pas sauter les verrous du parcours.
       */
      terminerEtape(civId, etape, options) {
        get().touchDay()
        if (!estTronc(PARCOURS_AVENTURE, civId) || !etapeAccessible(PARCOURS_AVENTURE, get().aventure, civId, etape)) return []
        return get().avancer((av) => prog.terminerEtape(av, PARCOURS_AVENTURE, civId, etape, options, today()))
      },
      /** Épreuve (ou mini-épreuve d'annexe) terminée : `correct` sur `total`, `justes` = réponses dans l'ordre. */
      terminerEpreuve(civId, correct, total, justes) {
        get().touchDay()
        if (!etapeAccessible(PARCOURS_AVENTURE, get().aventure, civId, 'epreuve')) return []
        return get().avancer((av) => prog.terminerEpreuve(av, PARCOURS_AVENTURE, civId, { correct, total, justes }, today()))
      },
      seanceARevoir() {
        get().touchDay()
        return get().avancer((av) => prog.seanceARevoir(av, today()))
      },
      /** Choisir ou changer de fil rouge : ses annexes entrent dans le chemin (rien ne se referme). */
      choisirFilRouge(id) {
        return get().avancer((av) => prog.changerFil(av, PARCOURS_AVENTURE, id))
      },
      /** Premier lancement terminé ({ filRouge, recompense }) : +50 XP la première fois. */
      terminerOnboarding(options) {
        if (options?.recompense !== false) get().touchDay()
        return get().avancer((av) => prog.finOnboarding(av, PARCOURS_AVENTURE, options, today()))
      },
      /**
       * Séance « À revoir » d'une salle : les cartes comprises et les questions réussies sortent
       * des listes (toReview du chapitre, failed du quiz). Puis +20 XP une fois par jour.
       */
      terminerARevoir(civId, cartesOk, questionsOk) {
        set((s) => {
          const ch = s.chapters[civId]
          const q = s.quizzes[civId]
          return {
            chapters: ch ? { ...s.chapters, [civId]: { ...ch, toReview: (ch.toReview ?? []).filter((id) => !cartesOk.includes(id)) } } : s.chapters,
            quizzes: q ? { ...s.quizzes, [civId]: { ...q, failed: (q.failed ?? []).filter((id) => !questionsOk.includes(id)) } } : s.quizzes,
          }
        })
        return get().seanceARevoir()
      },
      choisirTitre(id) {
        set((s) => ({ aventure: { ...s.aventure, titreAffiche: id } }))
      },

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
        if (!prev) get().avancer((av) => prog.ficheLue(av, true))
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

      /**
       * Fin de séance : passage comptabilisé, cartes « à revoir » mémorisées.
       * Aventure (`round` 0 = Découvrir, sinon Approfondir ; `options.eclairs` = questions éclair justes) :
       *   - salle du tronc : l'étape est créditée (découverte, XP, ouvertures…) ;
       *   - annexe : rien n'est crédité ici, la séance continue par la mini-épreuve (étape « epreuve » commencée).
       * Renvoie les événements de l'Aventure.
       */
      finishChapter(civId, options = {}) {
        const round = get().chapters[civId]?.current?.round
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
        if (round === undefined || !PARCOURS_AVENTURE.monde.has(civId)) return []
        if (estTronc(PARCOURS_AVENTURE, civId)) return get().terminerEtape(civId, round === 0 ? 'decouvrir' : 'approfondir', options)
        if (round === 0 && etapeAccessible(PARCOURS_AVENTURE, get().aventure, civId, 'decouvrir')) get().commencerEtape(civId, 'epreuve')
        return []
      },

      // ── Quiz ─────────────────────────────────────────────────────────────────
      // Quiz = {                               (Épreuve d'une salle ; mini-épreuve d'une annexe)
      //   attempts, best, lastScore, lastAt,     (notes ramenées sur 20 ; les étoiles sont dans « aventure »)
      //   failed: [qid],   questions ratées à la dernière tentative
      //   asked:  [qid],   toutes les questions déjà posées
      //   history: [{ at, score }],
      //   current: { attempt, ids: [qid], answers: [{ id, correct, response }] } | null
      // }

      startQuiz(civId, ids) {
        set((s) => {
          const q = s.quizzes[civId] ?? { attempts: 0, best: null, failed: [], asked: [], history: [] }
          return { quizzes: { ...s.quizzes, [civId]: { ...q, current: { attempt: q.attempts, ids, answers: [] } } } }
        })
        get().touchDay()
      },

      answerQuestion(civId, id, response, correct) {
        set((s) => {
          const q = s.quizzes[civId]
          if (!q?.current || q.current.answers.some((a) => a.id === id)) return {}
          return { quizzes: { ...s.quizzes, [civId]: { ...q, current: { ...q.current, answers: [...q.current.answers, { id, response, correct }] } } } }
        })
      },

      /**
       * Clôture le quiz en cours et renvoie { score, correct, total, evenements } (score : note sur 20).
       * `idsPoses` : questions réellement posées à l'écran (une question disparue du contenu ne compte pas).
       */
      finishQuiz(civId, idsPoses) {
        const q = get().quizzes[civId]
        if (!q?.current) return null
        const { ids, correct, total, score, failed, justes } = noteQuiz(q.current, idsPoses ?? q.current.ids)
        const now = Date.now()
        set((s) => ({
          quizzes: {
            ...s.quizzes,
            [civId]: {
              ...q,
              attempts: q.attempts + 1,
              best: Math.max(q.best ?? 0, score),
              lastScore: score,
              lastAt: now,
              failed,
              asked: [...new Set([...q.asked, ...ids])],
              history: [...q.history, { at: now, score }].slice(-20),
              current: null,
            },
          },
        }))
        get().touchDay()
        const evenements = PARCOURS_AVENTURE.monde.has(civId) ? get().terminerEpreuve(civId, correct, total, justes) : []
        return { score, correct, total, evenements }
      },

      // ── Quiz express (fiches liées) ─────────────────────────────────────────
      /** Enregistre un quiz express terminé : `correct` bonnes réponses sur `total`. */
      finishExpress(ficheId, correct, total) {
        const ancien = get().express[ficheId]?.best ?? 0
        get().avancer((av) => prog.quizExpress(av, ancien, correct))
        set((s) => {
          const prev = s.express[ficheId]
          return {
            express: {
              ...s.express,
              [ficheId]: { best: Math.max(prev?.best ?? 0, correct), total, attempts: (prev?.attempts ?? 0) + 1, lastAt: Date.now() },
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
        express: s.express,
        aventure: s.aventure,
        startedAt: s.startedAt,
      }),
      // v1 → v2 : ajout de « express » (quiz express des fiches liées), vide au départ.
      // v2 → v3 : ajout de « aventure » (V3), qui crédite ce qui a déjà été fait (lib/progression.js, migrerV2).
      // v3 → v4 : Aventure V3.1 (médailles → salle découverte et étoiles, plus de coffres, cosmétiques
      //           ni objectif ; lib/progression.js, migrerV3) ; une épreuve en cours (20 questions) est abandonnée.
      // v4 → v5 : nombre de jours joués (Profil, sprint 32), estimé d'après le record et les jours d'activité (migrerV4).
      // Les champs absents reprennent leur valeur initiale ; rien n'est perdu.
      migrate: (persisted, version) => {
        const state = { ...initial(), ...persisted }
        if (version < 2) state.express = {}
        if (version < 3) state.aventure = prog.migrerV2(state, PARCOURS_AVENTURE, today())
        else if (version < 4) state.aventure = prog.migrerV3(state.aventure, PARCOURS_AVENTURE)
        if (version < 4) state.quizzes = Object.fromEntries(Object.entries(state.quizzes ?? {}).map(([id, q]) => [id, { ...q, current: null }]))
        if (version < 5) state.aventure = prog.migrerV4(state.aventure, state.days)
        return state
      },
      // un état sauvegardé incomplet (champ ajouté plus tard dans « aventure ») est complété
      merge: (persisted, current) => ({
        ...current,
        ...persisted,
        aventure: { ...prog.aventureVide(), ...(persisted?.aventure ?? current.aventure) },
      }),
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
