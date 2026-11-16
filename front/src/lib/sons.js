/**
 * sons.js — Sons de l'interface, fabriqués dans le navigateur (Web Audio, V3 sprint 25)
 * =====================================================================================
 * Aucun fichier audio : chaque son est synthétisé à la volée (oscillateurs + enveloppes),
 * donc rien à télécharger, rien à licencier, et tout marche hors ligne.
 * Déclenchés par lib/haptics.js (chaque moment qui vibre a son son) ; coupables dans le Profil.
 *
 *   jouerSon(nom)        'carte' | 'juste' | 'faux' | 'fin' | 'medaille' | 'niveau' | 'coffre'
 *   definirCombo(n)      la bonne réponse suivante sonne plus haut (combo de l'épreuve)
 *   contexteAudio()      AudioContext partagé avec la musique d'ambiance (lib/musique.js)
 */
import { load, save } from './storage'

const CLE = 'histomap_sons'
let actif = load(CLE, true)
let ctx = null
let sortie = null
let combo = 0

export const sonsActifs = () => actif
export function activerSons(oui) {
  actif = Boolean(oui)
  save(CLE, actif)
}
export const definirCombo = (n) => {
  combo = Math.max(0, n | 0)
}

/** Contexte audio (créé au premier son, donc après un geste de l'utilisateur, comme l'exigent les navigateurs). */
export function contexteAudio() {
  if (typeof window === 'undefined') return null
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  if (!ctx) {
    ctx = new AC()
    // léger compresseur : rien ne sature, même quand plusieurs sons se chevauchent
    const comp = ctx.createDynamicsCompressor()
    comp.connect(ctx.destination)
    sortie = ctx.createGain()
    sortie.gain.value = 0.9
    sortie.connect(comp)
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {})
  return ctx
}
/** Entrée commune (après le compresseur) : sons et musique y sont branchés. */
export const sortieAudio = () => (contexteAudio(), sortie)

const DO5 = 523.25
const demiTons = (f, n) => f * 2 ** (n / 12)

/** Une note : oscillateur + enveloppe (attaque courte, chute exponentielle). */
function note(ac, { f, t = 0, d = 0.3, type = 'sine', vol = 0.1, attaque = 0.006 }) {
  const o = ac.createOscillator()
  const g = ac.createGain()
  o.type = type
  o.frequency.value = f
  const t0 = ac.currentTime + t
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(vol, t0 + attaque)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + d)
  o.connect(g)
  g.connect(sortie)
  o.start(t0)
  o.stop(t0 + d + 0.05)
}

const SONS = {
  // carte comprise : « tock » feutré
  carte: (ac) => {
    note(ac, { f: 740, d: 0.07, type: 'triangle', vol: 0.05 })
    note(ac, { f: 1480, d: 0.03, type: 'sine', vol: 0.015 })
  },
  // bonne réponse : petit accord ascendant, un ton plus haut à chaque palier de combo,
  // puis un demi-ton de plus tous les deux au-delà de ×5 (jusqu'à une octave au-dessus à ×12)
  juste: (ac) => {
    const base = demiTons(DO5, combo <= 4 ? combo * 2 : 8 + Math.min(combo - 4, 8) * 0.5)
    ;[0, 4, 7].forEach((n, i) => note(ac, { f: demiTons(base, n), t: i * 0.055, d: 0.32, type: i ? 'sine' : 'triangle', vol: 0.075 }))
  },
  // erreur : deux notes graves et douces, jamais un buzzer
  faux: (ac) => {
    note(ac, { f: 311.13, d: 0.18, type: 'triangle', vol: 0.05 })
    note(ac, { f: 261.63, t: 0.11, d: 0.28, type: 'triangle', vol: 0.045 })
  },
  // étape terminée : arpège do-mi-sol-do
  fin: (ac) => {
    ;[0, 4, 7, 12].forEach((n, i) => note(ac, { f: demiTons(DO5, n), t: i * 0.08, d: 0.45, type: 'triangle', vol: 0.06 }))
  },
  // médaille : petite fanfare puis accord tenu
  medaille: (ac) => {
    ;[-5, 0, 4, 7].forEach((n, i) => note(ac, { f: demiTons(DO5, n), t: i * 0.11, d: 0.25, type: 'triangle', vol: 0.07 }))
    ;[0, 4, 7, 12].forEach((n) => note(ac, { f: demiTons(DO5, n), t: 0.48, d: 1.3, type: 'sine', vol: 0.045, attaque: 0.02 }))
  },
  // niveau supérieur : grande montée sur deux octaves, accord et scintillement
  niveau: (ac) => {
    ;[-12, -8, -5, 0, 4, 7, 12].forEach((n, i) => note(ac, { f: demiTons(DO5, n), t: i * 0.07, d: 0.3, type: 'triangle', vol: 0.06 }))
    ;[0, 4, 7, 12, 16].forEach((n) => note(ac, { f: demiTons(DO5, n), t: 0.55, d: 1.6, type: 'sine', vol: 0.035, attaque: 0.03 }))
    ;[24, 28, 31, 36].forEach((n, i) => note(ac, { f: demiTons(DO5, n), t: 0.7 + i * 0.09, d: 0.4, type: 'sine', vol: 0.02 }))
  },
  // coffre ou titre : scintillement pentatonique qui monte
  coffre: (ac) => {
    ;[12, 14, 16, 19, 21, 24, 26, 28].forEach((n, i) => note(ac, { f: demiTons(DO5, n), t: i * 0.05, d: 0.35, type: 'sine', vol: 0.03 }))
  },
}

/** Joue un son de l'interface (rien si les sons sont coupés ou si l'appareil n'a pas d'audio). */
export function jouerSon(nom) {
  if (!actif || !SONS[nom]) return
  try {
    const ac = contexteAudio()
    if (ac) SONS[nom](ac)
  } catch {
    /* audio indisponible : on se contente du retour visuel */
  }
}
