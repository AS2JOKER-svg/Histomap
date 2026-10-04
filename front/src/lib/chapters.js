/**
 * chapters.js — Chargement à la demande des chapitres rédigés
 * ============================================================
 * Chaque fichier de src/data/revision/ devient un petit fichier séparé au build :
 * on ne télécharge que le chapitre ouvert (et le service worker les garde
 * tous pour le hors-ligne).
 */
import { useEffect, useState } from 'react'
import META from '../data/revision-meta.json'

const LOADERS = import.meta.glob(['../data/revision/*.js', '!../data/revision/index.js'], { import: 'default' })
const cache = new Map()

/** Infos légères (nombre de cartes…) d'un chapitre rédigé, sans le charger. */
export const chapterMeta = (civId) => META[civId] ?? null

/** Promise du chapitre rédigé de cette civilisation (null s'il n'y en a pas). */
export function loadChapter(civId) {
  const load = LOADERS[`../data/revision/${civId}.js`]
  if (!load) return Promise.resolve(null)
  if (!cache.has(civId)) {
    cache.set(civId, load().catch((e) => {
      cache.delete(civId) // permet de réessayer (ex. réseau revenu)
      throw e
    }))
  }
  return cache.get(civId)
}

/** Hook : { status: 'loading' | 'ready' | 'error', chapter, retry } */
export function useChapter(civId) {
  const [state, setState] = useState({ status: 'loading', chapter: null })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    let alive = true
    setState({ status: 'loading', chapter: null })
    loadChapter(civId).then(
      (chapter) => alive && setState({ status: 'ready', chapter }),
      () => alive && setState({ status: 'error', chapter: null })
    )
    return () => {
      alive = false
    }
  }, [civId, attempt])
  return { ...state, retry: () => setAttempt((n) => n + 1) }
}
