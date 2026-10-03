/**
 * data.js — Accès aux données historiques (100 % local)
 * ======================================================
 * Point d'entrée unique vers src/data/epochs.json. Les pages ne doivent pas
 * importer le JSON directement : si le modèle de données évolue (sprint 4),
 * seul ce fichier change.
 */
import epochs from '../data/epochs.json'

export function getEpochs() {
  return epochs
}

export function getEpoch(epochId) {
  return epochs.find((e) => e.id === epochId)
}

/** Retrouve une civilisation et son continent dans une époque. */
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

/** Chiffres globaux affichés sur l'accueil. */
export function getStats() {
  let civs = 0
  let events = 0
  let people = 0
  let wars = 0
  for (const e of epochs)
    for (const c of e.continents)
      for (const civ of c.civilizations) {
        civs++
        events += civ.datesCles?.length ?? 0
        people += civ.personnages?.length ?? 0
        wars += civ.guerres?.length ?? 0
      }
  return { epochs: epochs.length, civs, events, people, wars }
}

/** Retrouve une civilisation par son id, quelle que soit son époque. */
export function findCivilization(civId) {
  for (const epoch of epochs)
    for (const continent of epoch.continents) {
      const civ = continent.civilizations.find((c) => c.id === civId)
      if (civ) return { epoch, continent, civ }
    }
  return null
}
