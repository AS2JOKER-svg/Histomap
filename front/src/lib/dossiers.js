/**
 * dossiers.js — Dossiers de guerre (sprint Guerres A)
 * ===================================================
 * Index léger (src/data/dossiers.json, généré) + détail chargé à la demande
 * (src/data/dossiers/<id>.json), comme les fiches de civilisation.
 *   getDossiers()          liste légère
 *   findDossier(id)        entrée légère ou null
 *   useDossier(id)         → { status: 'loading' | 'ready' | 'error' | 'missing', dossier, retry }
 *   formatDate('1939-09-01') → « 1er septembre 1939 » ; formatDate('-218') → « 218 av. J.-C. »
 *   formatSpan(debut, fin) ; dateKey(date) : clé de tri
 */
import { useEffect, useState } from 'react'
import DOSSIERS from '../data/dossiers.json'
import { formatYear } from './time'

const LOADERS = import.meta.glob('../data/dossiers/*.json', { import: 'default' })
const cache = new Map()

export const getDossiers = () => DOSSIERS
export const findDossier = (id) => DOSSIERS.find((d) => d.id === id) ?? null

export function loadDossier(id) {
  const load = LOADERS[`../data/dossiers/${id}.json`]
  if (!load) return Promise.reject(new Error(`Dossier introuvable : ${id}`))
  if (!cache.has(id)) {
    cache.set(
      id,
      load().catch((e) => {
        cache.delete(id) // permet de réessayer
        throw e
      })
    )
  }
  return cache.get(id)
}

export function useDossier(id) {
  const exists = !!findDossier(id)
  const [state, setState] = useState({ id, status: exists ? 'loading' : 'missing', dossier: null })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    if (!exists) return setState({ id, status: 'missing', dossier: null })
    let alive = true
    setState({ id, status: 'loading', dossier: null })
    loadDossier(id).then(
      (dossier) => alive && setState({ id, status: 'ready', dossier }),
      () => alive && setState({ id, status: 'error', dossier: null })
    )
    return () => {
      alive = false
    }
  }, [id, exists, attempt])
  const current = state.id === id ? state : { status: 'loading', dossier: null }
  return { ...current, retry: () => setAttempt((n) => n + 1) }
}

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

// « 1942 », « -218 », « 1942-08 », « 1942-08-23 » → [année, mois?, jour?]
function parts(date) {
  const neg = date.startsWith('-')
  const [y, m, d] = (neg ? date.slice(1) : date).split('-').map(Number)
  return [neg ? -y : y, m, d]
}

/** Clé de tri chronologique d'une date (années av. J.-C. comprises). */
export function dateKey(date) {
  const [y, m, d] = parts(date)
  return y * 10000 + (m ?? 0) * 100 + (d ?? 0)
}

/** « 1939-09 » → « septembre 1939 » ; « 1939-09-01 » → « 1er septembre 1939 » ; « -218 » → « 218 av. J.-C. ». */
export function formatDate(date) {
  const [y, m, d] = parts(date)
  if (!m) return formatYear(y)
  return d ? `${d === 1 ? '1er' : d} ${MOIS[m - 1]} ${formatYear(y)}` : `${MOIS[m - 1]} ${formatYear(y)}`
}

/** Période « septembre 1939 → avril 1940 » (année commune écrite une fois), ou une seule date. */
export function formatSpan(debut, fin) {
  if (!fin || fin === debut) return formatDate(debut)
  const [y1, m1] = parts(debut)
  const [y2, m2] = parts(fin)
  if (y1 === y2 && m1 && m2) return `${formatDate(debut).replace(` ${formatYear(y1)}`, '')} → ${formatDate(fin)}`
  return `${formatDate(debut)} → ${formatDate(fin)}`
}
