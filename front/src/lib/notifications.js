/**
 * notifications.js — Rappels, côté application (V3.1, sprint 33, décision 25)
 * ============================================================================
 * Réglages (clé `histomap_notifications`), autorisation demandée seulement depuis Réglages, état écrit pour le
 * service worker (IndexedDB, lib/rappels.js) et inscription à la synchronisation périodique de Chrome.
 * Les notifications sont locales : rien ne part sur un serveur. Elles ne marchent que là où Chrome sait réveiller
 * une application installée (Android surtout ; rien sur iPhone), à une heure qu'il choisit.
 *
 *   initNotifications()      au démarrage (main.jsx) : état à jour, inscription, tiroir vidé, clic sur une notification
 *   disponibilite()          'non' | 'installer' | 'bloquees' | 'ok' (Réglages)
 *   changerReglages({…})     interrupteurs et heure (Réglages) : demande l'autorisation si besoin
 */
import { load, save } from './storage'
import { HEURES, INTERVALLE, REGLAGES_DEFAUT, TAG_NOTIF, TAG_SYNC, ecrireRappels, etatRappels, fautInscrire } from './rappels'
import { salleDe, salleEnCours } from './aventure'
import { findCivilization } from './data'
import { PARCOURS_AVENTURE, useProgress } from '../store/progress'

const CLE = 'histomap_notifications' // { rappel, serie, heure, inscriteLe }

/** Réglages des rappels (éteints tant qu'on ne les a pas allumés dans Réglages). */
export function lireReglages() {
  const r = load(CLE, null) ?? {}
  return { ...REGLAGES_DEFAUT, ...r, heure: HEURES.includes(r.heure) ? r.heure : REGLAGES_DEFAUT.heure }
}

const actifs = (r) => r.rappel || r.serie
const permission = () => (typeof Notification === 'undefined' ? 'denied' : Notification.permission)
const enProduction = import.meta.env.PROD && typeof navigator !== 'undefined' && 'serviceWorker' in navigator

/** Service worker actif (null en développement, ou s'il n'est pas prêt en 5 s). */
function enregistrement() {
  if (!enProduction) return Promise.resolve(null)
  return Promise.race([navigator.serviceWorker.ready, new Promise((resolve) => setTimeout(() => resolve(null), 5000))])
}

/**
 * Les rappels sont-ils possibles ici ?
 *   'non'       navigateur sans notifications ou sans synchronisation périodique (iPhone, Firefox…), ou développement
 *   'installer' Chrome, mais l'application n'est pas installée (Chrome ne réveille que les applications installées)
 *   'bloquees'  notifications refusées pour HistoMap (réglages du téléphone ou du navigateur)
 *   'ok'
 */
export async function disponibilite() {
  if (!enProduction || typeof Notification === 'undefined' || typeof ServiceWorkerRegistration === 'undefined' || !('periodicSync' in ServiceWorkerRegistration.prototype)) return 'non'
  if (permission() === 'denied') return 'bloquees'
  const etat = await navigator.permissions?.query({ name: 'periodic-background-sync' }).then((p) => p.state, () => null)
  return etat === 'granted' ? 'ok' : 'installer'
}

// ── État pour le service worker ──────────────────────────────────────────────

/** Salle en cours, telle que la nomme une notification. */
function salleDuJoueur(av) {
  const id = salleEnCours(PARCOURS_AVENTURE, av)
  return id ? { id, nom: findCivilization(id)?.civ.label ?? id, reprendre: Boolean(salleDe(av, id).enCours) } : null
}

let dernierEtat = null
/** Écrit l'état lu par le service worker s'il a changé (ou toujours avec `forcer`). Rien tant que les rappels sont éteints. */
async function ecrireEtat({ forcer = false } = {}) {
  const r = lireReglages()
  if (!actifs(r) && !forcer) return
  const av = useProgress.getState().aventure
  const etat = etatRappels(r, av.serie, salleDuJoueur(av))
  const texte = JSON.stringify(etat)
  if (texte === dernierEtat && !forcer) return
  await ecrireRappels('etat', etat)
  dernierEtat = texte
}

// ── Inscription à la synchronisation périodique ──────────────────────────────

/**
 * Inscrit, réinscrit ou désinscrit la synchronisation périodique selon les réglages et l'autorisation
 * (règle de réinscription : fautInscrire, lib/rappels.js).
 */
async function planifier(maintenant = new Date()) {
  const reg = await enregistrement()
  if (!reg?.periodicSync) return
  const r = lireReglages()
  try {
    const inscrit = (await reg.periodicSync.getTags()).includes(TAG_SYNC)
    if (!actifs(r) || (await disponibilite()) !== 'ok' || permission() !== 'granted') {
      if (inscrit) await reg.periodicSync.unregister(TAG_SYNC)
      return
    }
    if (!fautInscrire({ inscrit, inscriteLe: r.inscriteLe, heure: r.heure }, maintenant)) return
    if (inscrit) await reg.periodicSync.unregister(TAG_SYNC) // même étiquette : Chrome repartirait de l'ancienne date
    await reg.periodicSync.register(TAG_SYNC, { minInterval: INTERVALLE })
    save(CLE, { ...lireReglages(), inscriteLe: maintenant.getTime() })
  } catch {
    /* refusé par le navigateur (application désinstallée, site trop peu utilisé…) : rien à faire */
  }
}

/** Ferme les rappels restés dans le tiroir du téléphone : l'app est ouverte, ils ne servent plus. */
async function viderTiroir() {
  const reg = await enregistrement()
  const ouvertes = (await reg?.getNotifications?.({ tag: TAG_NOTIF }).catch(() => [])) ?? []
  ouvertes.forEach((n) => n.close())
}

// ── Réglages ─────────────────────────────────────────────────────────────────

/**
 * Change les réglages (`{ rappel }`, `{ serie }` ou `{ heure }`). Allumer un rappel demande l'autorisation du téléphone
 * si elle n'est pas encore donnée (à appeler depuis un toucher : le navigateur l'exige).
 * → { ok: true } ou { ok: false, permission: 'denied' | 'default' } (autorisation refusée ou fenêtre fermée)
 */
export async function changerReglages(changement) {
  const avant = lireReglages()
  const apres = { ...avant, ...changement }
  const allume = (apres.rappel && !avant.rappel) || (apres.serie && !avant.serie)
  if (allume && permission() !== 'granted') {
    const reponse = await Notification.requestPermission()
    if (reponse !== 'granted') return { ok: false, permission: reponse }
  }
  save(CLE, apres)
  await ecrireEtat({ forcer: true }).catch(() => {})
  await planifier()
  return { ok: true }
}

// ── Démarrage ────────────────────────────────────────────────────────────────

export function initNotifications() {
  if (!enProduction) return
  // Notification touchée pendant que l'app était ouverte : le service worker demande d'aller à la salle
  navigator.serviceWorker.addEventListener('message', (e) => {
    const hash = e.data?.type === 'OUVRIR' ? e.data.hash : null
    if (typeof hash === 'string' && hash.startsWith('#/')) window.location.hash = hash
  })
  const ecrire = () => ecrireEtat().catch(() => {})
  // Série, salle en cours… : l'état du service worker suit la progression (écrit seulement s'il change)
  useProgress.subscribe((s, avant) => {
    if (s.aventure !== avant.aventure) ecrire()
  })
  const auPremierPlan = () => {
    viderTiroir().catch(() => {})
    planifier()
  }
  document.addEventListener('visibilitychange', () => (document.visibilityState === 'visible' ? auPremierPlan() : ecrire()))
  ecrire()
  auPremierPlan()
}
