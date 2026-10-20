/**
 * entities.js — Fiches liées (personnes, événements, découvertes)
 * ================================================================
 * Une fiche liée = un petit fichier src/data/entities/<id>.json (généré depuis
 * content/people|events|discoveries), chargé seulement quand on l'ouvre.
 * Chaque fiche contient « apparaitDans » : { civs: [id], fiches: [id] }.
 */
import { useEffect, useState } from 'react'
import { epochOfYear } from './data'

const LOADERS = import.meta.glob('../data/entities/*.json', { import: 'default' })
const cache = new Map()

export const ENTITY_TYPES = {
  personne: { label: 'Personne', badge: 'person' },
  evenement: { label: 'Événement', badge: 'event' },
  decouverte: { label: 'Découverte', badge: 'discovery' },
}

/** Une fiche liée existe-t-elle pour cet id ? */
export const hasEntity = (id) => !!LOADERS[`../data/entities/${id}.json`]

export function loadEntity(id) {
  const load = LOADERS[`../data/entities/${id}.json`]
  if (!load) return Promise.reject(new Error(`Fiche introuvable : ${id}`))
  if (!cache.has(id)) {
    cache.set(
      id,
      load().catch((e) => {
        cache.delete(id)
        throw e
      })
    )
  }
  return cache.get(id)
}

/** Hook : { status: 'loading' | 'ready' | 'error' | 'missing', entity, retry } */
export function useEntity(id) {
  const [state, setState] = useState({ id, status: 'loading', entity: null })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    let alive = true
    if (!hasEntity(id)) {
      setState({ id, status: 'missing', entity: null })
      return
    }
    setState({ id, status: 'loading', entity: null })
    loadEntity(id).then(
      (entity) => alive && setState({ id, status: 'ready', entity }),
      () => alive && setState({ id, status: 'error', entity: null })
    )
    return () => {
      alive = false
    }
  }, [id, attempt])
  const current = state.id === id ? state : { status: 'loading', entity: null }
  return { ...current, retry: () => setAttempt((n) => n + 1) }
}

/** Année représentative d'une fiche liée (pour la situer sur la frise). */
export function entityYear(e) {
  if (typeof e.annee === 'number') return e.annee
  if (typeof e.naissance === 'number' && typeof e.mort === 'number') return Math.round((e.naissance + e.mort) / 2)
  return e.naissance ?? e.mort ?? null
}

/** Époque de la frise où situer une fiche liée. */
export function entityEpoch(e) {
  const y = entityYear(e)
  return y == null ? null : epochOfYear(y)
}

/** Initiales pour l'avatar (« Jules César » → « JC », « Marc Aurèle » → « MA »). */
export function initials(name) {
  const words = name
    .replace(/[()«»"']/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !/^(de|du|des|la|le|les|d|l|von|van|al|el|ibn|ben)$/i.test(w))
  return (words.slice(0, 2).map((w) => w[0]).join('') || name[0] || '?').toUpperCase()
}
