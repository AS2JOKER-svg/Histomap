/**
 * history.ts — HistoArrow
 * ==========================
 * Donnees et types pour le front (import local du epochs.json).
 * Zéro dépendance serveur/API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface EventItem {
  year: number
  title: string
  info: string
}

export interface Civilization {
  id: string
  label: string
  period: string
  color: string
  events: EventItem[]
}

export interface Continent {
  id: string
  label: string
  civilizations: Civilization[]
}

export interface Epoch {
  id: string
  label: string
  color: string
  start: number
  end: number
  continents: Continent[]
}

export interface EpochsData {
  epochs: Epoch[]
}

// ---------------------------------------------------------------------------
// Donnees locales — import direct (full local, zero fetch)
// ---------------------------------------------------------------------------
import epochsData from './data/epochs.json'

// ---------------------------------------------------------------------------
// Assertions de type a l'import (validees a la compilation)
// ---------------------------------------------------------------------------
const data = epochsData as EpochsData

// ---------------------------------------------------------------------------
// Accesseurs
// ---------------------------------------------------------------------------

/** Toutes les epoques */
export function getEpochs(): Epoch[] {
  return data.epochs
}

/** Une epoque par id */
export function getEpochById(id: string): Epoch | undefined {
  return data.epochs.find(e => e.id === id)
}

/** Tous les continents d'une epoque */
export function getContinentsOfEpoch(epochId: string): Continent[] {
  return getEpochById(epochId)?.continents ?? []
}

/** Toutes les civilisations d'un continent donne (epochId + continentId) */
export function getCivilizations(
  epochId: string,
  continentId: string,
): Civilization[] {
  return (
    getContinentsOfEpoch(epochId)
      .find(c => c.id === continentId)
      ?.civilizations ?? []
  )
}

/** Une civilisation par id dans un continent */
export function getCivilizationById(
  epochId: string,
  continentId: string,
  civId: string,
): Civilization | undefined {
  return getCivilizations(epochId, continentId).find(c => c.id === civId)
}

/** Evenements d'une civilisation (dates cles triees) */
export function getEventsOfCivilization(
  epochId: string,
  continentId: string,
  civId: string,
): EventItem[] {
  return (
    getCivilizationById(epochId, continentId, civId)?.events
      .sort((a, b) => a.year - b.year) ?? []
  )
}
