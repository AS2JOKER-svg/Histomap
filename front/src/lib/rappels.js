/**
 * rappels.js — Notifications de rappel (V3.1, sprint 33, décision 25), partagé avec le service worker
 * ====================================================================================================
 * Ce fichier est recopié dans dist/sw.js au build (vite.config.js → scripts/lib/service-worker.mjs, qui retire
 * les mots `export`). Il ne doit donc rien importer et n'utiliser que ce qui existe aussi dans un service worker
 * (ni window, ni document, ni localStorage). Ses fonctions pures sont testées par scripts/test-aventure.mjs.
 *
 * Comment ça marche, sans serveur et « au mieux » :
 *   1. l'app écrit un petit état dans IndexedDB (base « histomap », magasin « rappels », clé « etat ») : réglages,
 *      dernier jour joué, série, salle en cours (lib/notifications.js) ;
 *   2. Chrome réveille le service worker de temps en temps (synchronisation périodique, événement « periodicsync » :
 *      application installée, Android surtout ; au plus toutes les 12 h, à une heure que Chrome choisit) ;
 *   3. le service worker lit l'état et choisit la notification du moment (choisirRappel) : une au plus par réveil,
 *      deux par jour au plus, jamais entre 21 h et 8 h ; il note ce qu'il a montré (clé « journal »).
 * Chrome compte ses délais (12 h ou 24 h selon l'usage du site) à partir de l'inscription : l'app se réinscrit quand
 * on l'ouvre pendant la plage du rappel, pour que les réveils suivants tombent à cette heure-là (fautInscrire).
 */

export const TAG_SYNC = 'histomap-rappels' // synchronisation périodique
export const TAG_NOTIF = 'histomap-rappel' // notification : une seule à la fois dans le tiroir du téléphone
export const HEURES = [17, 18, 19, 20] // « À partir de » (maquette 16)
export const REGLAGES_DEFAUT = Object.freeze({ rappel: false, serie: false, heure: 18 })
export const NUIT = Object.freeze({ debut: 21, fin: 8 }) // rien entre 21 h et 8 h
export const MAX_PAR_JOUR = 2
export const SERIE_MIN = 2 // « série en danger » à partir de 2 jours
export const INTERVALLE = 12 * 60 * 60 * 1000 // demandé à Chrome, qui l'arrondit à 12 h ou 24 h selon l'usage du site

// ── Jours (« AAAA-MM-JJ », comme la progression) ─────────────────────────────

const deux = (n) => String(n).padStart(2, '0')

/** Jour local d'une date. */
export const jourLocal = (d = new Date()) => `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}`

const utc = (jour) => {
  const [a, m, j] = jour.split('-').map(Number)
  return Date.UTC(a, m - 1, j)
}

/** Jour + n jours. */
export function ajouterJours(jour, n) {
  const d = new Date(utc(jour) + n * 86400000)
  return `${d.getUTCFullYear()}-${deux(d.getUTCMonth() + 1)}-${deux(d.getUTCDate())}`
}

/**
 * Dernier jour où l'on peut encore jouer pour garder sa série (même règle que etatSerie dans lib/progression.js) :
 * le lendemain du dernier jour joué, plus un jour par joker en réserve. null : pas de série.
 */
export function derniereChance(serie) {
  if (!serie?.dernier || !serie.jours) return null
  return ajouterJours(serie.dernier, 1 + (serie.jokers ?? 0))
}

// ── État écrit par l'app ─────────────────────────────────────────────────────

/**
 * État lu par le service worker (IndexedDB, clé « etat »).
 *   reglages : { rappel, serie, heure } ; serie : aventure.serie ;
 *   salle : salle en cours { id, nom, reprendre } (reprendre : une étape y est commencée), ou null (chemin fini).
 */
export function etatRappels(reglages, serie, salle = null) {
  const heure = HEURES.includes(reglages?.heure) ? reglages.heure : REGLAGES_DEFAUT.heure
  return {
    v: 1,
    reglages: { rappel: Boolean(reglages?.rappel), serie: Boolean(reglages?.serie), heure },
    joue: serie?.dernier ?? null,
    serie: { jours: serie?.jours ?? 0, derniereChance: derniereChance(serie) },
    salle: salle ? { id: salle.id, nom: salle.nom, reprendre: Boolean(salle.reprendre) } : null,
  }
}

// ── Textes ───────────────────────────────────────────────────────────────────

const TITRES_RAPPEL = ['Une petite séance d’histoire ?', 'L’Aventure continue', 'Quelques minutes d’histoire ?']

/** Rappel du jour : le titre change d'un jour à l'autre, le texte nomme la salle en cours. */
export function texteRappel(salle, jour) {
  const titre = TITRES_RAPPEL[Math.round(utc(jour) / 86400000) % TITRES_RAPPEL.length]
  if (!salle) return { titre, corps: 'Des épreuves et des annexes t’attendent encore sur la carte.' }
  return { titre, corps: salle.reprendre ? `Reprends ta séance : ${salle.nom}.` : `Prochaine salle : ${salle.nom}.` }
}

/** Série en danger : ce soir est la dernière chance de la garder. */
export function texteSerie(jours, salle) {
  return {
    titre: `Ta série de ${jours} jours va s’arrêter`,
    corps: `Termine une étape avant minuit pour la garder.${salle ? ` Prochaine salle : ${salle.nom}.` : ''}`,
  }
}

// ── Choix du service worker ──────────────────────────────────────────────────

/**
 * Notification à montrer maintenant, ou null.
 *   etat    : état écrit par l'app (etatRappels) ; journal : { jour, envoyes: ['rappel' | 'serie'] } (service worker).
 * Rien entre 21 h et 8 h, rien avant l'heure choisie, rien si l'on a déjà joué ce jour-là. « Série en danger » d'abord
 * (une série d'au moins 2 jours que l'on perd ce soir sans jouer), sinon le rappel du jour ; chacune une fois par jour,
 * pas de rappel après une alerte de série, deux par jour au plus.
 * → { type: 'serie' | 'rappel', titre, corps, url } ; url = adresse à ouvrir dans l'app (#/?salle=…).
 */
export function choisirRappel(etat, journal, maintenant = new Date()) {
  if (!etat?.reglages) return null
  const r = { ...REGLAGES_DEFAUT, ...etat.reglages }
  if (!r.rappel && !r.serie) return null
  const h = maintenant.getHours()
  if (h >= NUIT.debut || h < NUIT.fin || h < r.heure) return null
  const jour = jourLocal(maintenant)
  if (etat.joue === jour) return null
  const envoyes = journal?.jour === jour ? journal.envoyes ?? [] : []
  if (envoyes.length >= MAX_PAR_JOUR) return null
  const url = etat.salle ? `#/?salle=${encodeURIComponent(etat.salle.id)}` : '#/'
  const jours = etat.serie?.jours ?? 0
  if (r.serie && !envoyes.includes('serie') && jours >= SERIE_MIN && etat.serie?.derniereChance === jour) {
    return { type: 'serie', ...texteSerie(jours, etat.salle), url }
  }
  if (r.rappel && !envoyes.includes('rappel') && !envoyes.includes('serie')) {
    return { type: 'rappel', ...texteRappel(etat.salle, jour), url }
  }
  return null
}

/** Journal du service worker après une notification montrée. */
export const noterEnvoi = (journal, jour, type) => ({ jour, envoyes: [...(journal?.jour === jour ? journal.envoyes ?? [] : []), type] })

// ── Inscription à la synchronisation périodique ──────────────────────────────

const dansPlage = (d, heure) => d.getHours() >= heure && d.getHours() < NUIT.debut

/**
 * Faut-il (ré)inscrire la synchronisation périodique maintenant ? Oui si elle ne l'est pas. Sinon, une fois par jour
 * quand l'app est ouverte pendant la plage du rappel (de l'heure choisie à 21 h) : Chrome compte ses délais à partir
 * de l'inscription, les réveils suivants tomberont donc vers cette heure-là les jours où l'on ne vient pas.
 *   inscriteLe : date de la dernière inscription (ms), ou null.
 */
export function fautInscrire({ inscrit, inscriteLe = null, heure = REGLAGES_DEFAUT.heure }, maintenant = new Date()) {
  if (!inscrit) return true
  if (!dansPlage(maintenant, heure)) return false
  if (!inscriteLe) return true
  const avant = new Date(inscriteLe)
  return !(jourLocal(avant) === jourLocal(maintenant) && dansPlage(avant, heure))
}

// ── IndexedDB (lu et écrit par l'app comme par le service worker) ────────────

const BASE = 'histomap'
const MAGASIN = 'rappels'

function ouvrirBase() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(BASE, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(MAGASIN)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function transaction(mode, operation) {
  const db = await ouvrirBase()
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(MAGASIN, mode)
      const req = operation(tx.objectStore(MAGASIN))
      tx.oncomplete = () => resolve(req.result)
      tx.onerror = () => reject(tx.error)
      tx.onabort = () => reject(tx.error)
    })
  } finally {
    db.close()
  }
}

/** Valeur gardée sous `cle` (« etat » : écrit par l'app ; « journal » : écrit par le service worker). */
export const lireRappels = (cle) => transaction('readonly', (magasin) => magasin.get(cle))
export const ecrireRappels = (cle, valeur) => transaction('readwrite', (magasin) => magasin.put(valeur, cle))
