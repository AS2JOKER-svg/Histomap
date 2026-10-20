/**
 * data.js — Accès aux données historiques (100 % local)
 * ======================================================
 * Point d'entrée unique vers les données générées par scripts/build-content.mjs.
 * Les pages ne doivent pas importer le JSON directement.
 *
 * Deux niveaux :
 *   - l'index léger (src/data/index.json), chargé au démarrage : époques,
 *     continents et, pour chaque civilisation, de quoi l'afficher dans la frise,
 *     les listes et l'en-tête de l'aperçu (id, label, dates, couleur, capitale,
 *     description, lignée, tier, region, eventYears) ;
 *   - le détail d'une fiche (dates clés, dirigeants, personnages, guerres,
 *     textes…), chargé à la demande : loadCiv(id) / useCiv(id).
 * Les fonctions synchrones (getEpochs, getCivilization…) renvoient la version légère.
 */
import { useEffect, useState } from 'react'
import INDEX from '../data/index.json'
import MAP_YEARS from '../data/map-years.json'

const epochs = INDEX.epochs

export function getEpochs() {
  return epochs
}

export function getEpoch(epochId) {
  return epochs.find((e) => e.id === epochId)
}

/** Retrouve une civilisation (version légère) et son continent dans une époque. */
export function getCivilization(epochId, civId) {
  const epoch = getEpoch(epochId)
  if (!epoch) return null
  for (const continent of epoch.continents) {
    const civ = continent.civilizations.find((c) => c.id === civId)
    if (civ) return { epoch, continent, civ }
  }
  return null
}

export function countCivilizations(epoch) {
  return epoch.continents.reduce((n, c) => n + c.civilizations.length, 0)
}

/** Nom d'une région actuelle normalisée (content/regions.json), ex. « italie » → « Italie ». */
export const regionLabel = (id) => INDEX.regions?.[id] ?? null

/** Chiffres globaux affichés sur l'accueil (calculés au build). */
export function getStats() {
  return INDEX.stats
}

/** Retrouve une civilisation (version légère) par son id, quelle que soit son époque. */
export function findCivilization(civId) {
  for (const epoch of epochs)
    for (const continent of epoch.continents) {
      const civ = continent.civilizations.find((c) => c.id === civId)
      if (civ) return { epoch, continent, civ }
    }
  return null
}

/** Époque contenant cette année (la première ou la dernière si hors bornes). */
export function epochOfYear(year) {
  return epochs.find((e) => year >= e.start && year < e.end) ?? (year < epochs[0].start ? epochs[0] : epochs[epochs.length - 1])
}

/** Carte historique la plus proche d'une année quelconque. */
export function nearestMapYear(year) {
  return MAP_YEARS.reduce((best, y) => (Math.abs(y - year) < Math.abs(best - year) ? y : best))
}

// ── Détail des fiches, chargé à la demande ───────────────────────────────────
// Chaque fichier devient un petit fichier séparé au build (le service worker
// les garde tous pour le hors-ligne).
const LOADERS = import.meta.glob('../data/civs/*.json', { import: 'default' })
const cache = new Map()

/** La fiche est-elle complète (détail chargé) ? */
export const isFull = (civ) => Array.isArray(civ?.datesCles)

/** Promise de la fiche complète : version légère + détail. */
export function loadCiv(civId) {
  const light = findCivilization(civId)?.civ
  const load = LOADERS[`../data/civs/${civId}.json`]
  if (!light || !load) return Promise.reject(new Error(`Fiche introuvable : ${civId}`))
  if (!cache.has(civId)) {
    cache.set(
      civId,
      load().then(
        (detail) => ({ ...light, ...detail }),
        (e) => {
          cache.delete(civId) // permet de réessayer (ex. réseau revenu)
          throw e
        }
      )
    )
  }
  return cache.get(civId)
}

/** Hook : { status: 'loading' | 'ready' | 'error', civ (complète si ready), retry } */
export function useCiv(civId) {
  const [state, setState] = useState({ id: civId, status: 'loading', civ: null })
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    let alive = true
    setState({ id: civId, status: 'loading', civ: null })
    loadCiv(civId).then(
      (civ) => alive && setState({ id: civId, status: 'ready', civ }),
      () => alive && setState({ id: civId, status: 'error', civ: null })
    )
    return () => {
      alive = false
    }
  }, [civId, attempt])
  // pendant le changement de fiche, ne jamais renvoyer l'ancienne
  const current = state.id === civId ? state : { status: 'loading', civ: null }
  return { ...current, retry: () => setAttempt((n) => n + 1) }
}
