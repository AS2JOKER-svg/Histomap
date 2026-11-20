/**
 * musique.js — Musique d'ambiance générée dans le navigateur (Web Audio, V3 sprint 25)
 * ====================================================================================
 * 12 ambiances (région × époque), chacune = une gamme, un tempo, un instrument synthétisé
 * (luth pincé, flûte, cloches, balafon, clavecin…), parfois un bourdon, une percussion légère,
 * du vent ou des vagues. La mélodie est composée une fois pour toutes (hasard reproductible) et
 * tourne en boucle d'environ 48 secondes. Aucun fichier : léger, hors ligne, sans droits à payer.
 *
 * Coupée par défaut (on joue souvent en classe ou dans les transports) ; activable dans Profil ›
 * Réglages (sprint 32 ; dans l'en-tête avant). Fondu enchaîné au changement d'ambiance ; pause quand l'app passe en arrière-plan.
 *
 *   ambianceDe(ref)        ambiance d'une civilisation (findCivilization → { epoch, civ })
 *   definirAmbiance(id)    appelé par les pages (hook useAmbiance)
 *   activerMusique(oui)
 */
import { useEffect } from 'react'
import { load, save } from './storage'
import { contexteAudio, sortieAudio } from './sons'
import { rng } from './random'
import { findCivilization } from './data'

const CLE = 'histomap_musique'
const VOLUME = 0.22
let actif = load(CLE, false)
let demandee = null // ambiance voulue par la page affichée
let lecture = null // ambiance en train de jouer : { id, arreter() }

// ── Les ambiances ───────────────────────────────────────────────────────────
// gamme : demi-tons depuis la tonique ; voix : instrument mélodique ; densite : probabilité d'une note par croche ;
// percu : motif sur 16 croches (G grave, A aigu, . silence) ; accords : degrés de la gamme, 8 croches chacun.
const PENTA_MAJ = [0, 2, 4, 7, 9]
const PENTA_MIN = [0, 3, 5, 7, 10]
const DORIEN = [0, 2, 3, 5, 7, 9, 10]
export const AMBIANCES = {
  prehistoire: { nom: 'Feux de la Préhistoire', tonique: 110, gamme: PENTA_MIN, bpm: 56, voix: 'flute', densite: 0.22, bourdon: [0, 7], percu: 'G.......G...G...', souffle: 'vent' },
  orient: { nom: 'Le Nil et l’Orient', tonique: 146.83, gamme: [0, 1, 4, 5, 7, 8, 10], bpm: 84, voix: 'luth', densite: 0.42, bourdon: [0, 7], percu: 'G..A..A.G..A.A..' },
  mediterranee: { nom: 'Méditerranée antique', tonique: 164.81, gamme: DORIEN, bpm: 70, voix: 'lyre', densite: 0.36, bourdon: [0], percu: null },
  medieval: { nom: 'Europe médiévale', tonique: 146.83, gamme: DORIEN, bpm: 66, voix: 'flute', densite: 0.34, bourdon: [0, 7], percu: 'G.......A.......', vielle: true },
  'asie-est': { nom: 'Asie de l’Est', tonique: 196, gamme: PENTA_MAJ, bpm: 54, voix: 'guzheng', densite: 0.3, bourdon: null, percu: null, cloche: 16 },
  inde: { nom: 'Inde', tonique: 138.59, gamme: [0, 2, 3, 5, 7, 9, 10], bpm: 68, voix: 'sitar', densite: 0.38, bourdon: [0, 7, 12], percu: 'G...A.A.G...A...' },
  gamelan: { nom: 'Asie du Sud-Est', tonique: 220, gamme: [0, 2.4, 4.8, 7.2, 9.6], bpm: 80, voix: 'cloche', densite: 0.48, bourdon: null, percu: null, cloche: 32 },
  afrique: { nom: 'Afrique', tonique: 196, gamme: PENTA_MAJ, bpm: 96, voix: 'balafon', densite: 0.5, bourdon: null, percu: 'G.AG.A.AG.AG.A.A' },
  ameriques: { nom: 'Amériques anciennes', tonique: 220, gamme: PENTA_MIN, bpm: 62, voix: 'flute', densite: 0.3, bourdon: null, percu: 'G...G...G..AG...' },
  oceanie: { nom: 'Océanie', tonique: 130.81, gamme: PENTA_MAJ, bpm: 52, voix: 'luth', densite: 0.26, bourdon: [0], percu: null, souffle: 'vagues' },
  baroque: { nom: 'Europe baroque', tonique: 261.63, gamme: [0, 2, 4, 5, 7, 9, 11], bpm: 88, voix: 'clavecin', densite: 1, accords: [0, 4, 5, 3], percu: null },
  contemporain: { nom: 'Monde contemporain', tonique: 220, gamme: [0, 2, 4, 5, 7, 9, 11], bpm: 72, voix: 'piano', densite: 0.55, accords: [5, 3, 0, 4], percu: null, nappe: true },
}

// ── Quelle ambiance pour quelle civilisation (région normalisée de la fiche + époque) ──
const EUROPE = ['iles-britanniques', 'europe-ouest', 'peninsule-iberique', 'italie', 'europe-centrale', 'europe-nord', 'grece-egee', 'balkans', 'europe-est', 'russie-europeenne']
const PAR_REGION = {
  orient: ['egypte', 'levant', 'mesopotamie', 'peninsule-arabique', 'iran', 'anatolie', 'afrique-nord', 'asie-centrale', 'caucase'],
  'asie-est': ['chine', 'coree', 'japon', 'mongolie', 'siberie'],
  inde: ['asie-sud'],
  gamelan: ['asie-sud-est-continentale', 'asie-sud-est-insulaire'],
  afrique: ['nubie-soudan', 'corne-afrique', 'afrique-ouest', 'afrique-centrale', 'afrique-est', 'afrique-australe'],
  ameriques: ['amerique-nord', 'mesoamerique', 'amerique-centrale-caraibes', 'andes', 'amerique-sud-est'],
  oceanie: ['australasie', 'pacifique'],
}
const COLONIES = new Set(['nouvelle-espagne', 'bresil-colonial', 'nouvelle-france', 'usa-moderne'])
export function ambianceDe(ref) {
  if (!ref) return null
  const { epoch, civ } = ref
  const r = civ.region
  if (epoch.id === 'prehistoire') return 'prehistoire'
  if (epoch.id === 'contemporaine') return 'contemporain'
  if (epoch.id === 'moderne' && (EUROPE.includes(r) || COLONIES.has(civ.id))) return 'baroque'
  if (EUROPE.includes(r)) return epoch.id === 'antiquite' && ['grece-egee', 'italie', 'balkans', 'peninsule-iberique'].includes(r) ? 'mediterranee' : 'medieval'
  for (const [amb, regions] of Object.entries(PAR_REGION)) if (regions.includes(r)) return amb
  return 'medieval'
}

// ── Composition : une boucle d'environ 48 s, toujours la même pour une ambiance ──
function composer(id, a) {
  const rand = rng(`musique:${id}`)
  const pasParBoucle = Math.max(64, Math.round(((a.bpm * 2) / 60) * 48 / 16) * 16)
  const n = a.gamme.length
  const ton = (idx) => a.gamme[((idx % n) + n) % n] + 12 * Math.floor(idx / n)
  const phrase = () => {
    let idx = rand() < 0.5 ? 0 : 2
    return Array.from({ length: 16 }, (_, i) => {
      if (i > 0 && rand() > a.densite) return null
      idx = Math.max(-2, Math.min(n + 3, idx + [-2, -1, -1, 0, 1, 1, 2][Math.floor(rand() * 7)]))
      if (i === 0) idx = rand() < 0.6 ? 0 : 2
      return ton(idx)
    })
  }
  const A = phrase()
  const B = phrase()
  const C = phrase()
  const plan = [A, A, B, A, C, B, A, A]
  const pas = []
  for (let i = 0; i < pasParBoucle; i++) {
    const p = a.percu ? a.percu[i % 16] : '.'
    let notes = []
    if (a.accords) {
      // arpèges sur une suite d'accords (baroque, contemporain)
      const racine = a.accords[Math.floor(i / 8) % a.accords.length]
      const accord = [0, 2, 4].map((k) => ton(racine + k))
      const motif = [0, 1, 2, 1, 0, 2, 1, 2]
      if (a.voix === 'clavecin' || rand() < a.densite) notes = [accord[motif[i % 8]] + (i % 8 === 4 ? 12 : 0)]
      if (a.nappe && i % 8 === 0) notes.push(...accord.map((t) => t - 12))
    } else {
      const t = plan[Math.floor(i / 16) % plan.length][i % 16]
      if (t !== null) notes = [t]
    }
    pas.push({ notes, percu: p === '.' ? null : p, cloche: a.cloche && i % a.cloche === 0 })
  }
  return pas
}

// ── Instruments ─────────────────────────────────────────────────────────────
function enveloppe(ac, g, t0, vol, attaque, duree) {
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(vol, t0 + attaque)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree)
}
const INSTRUMENTS = {
  // cordes pincées : oscillateur filtré dont le filtre se referme (luth, lyre, guzheng, sitar, clavecin)
  pincee: (ac, dest, f, t0, { onde = 'sawtooth', coupure = 2200, duree = 1.4, vol = 0.09 } = {}) => {
    const o = ac.createOscillator()
    const filtre = ac.createBiquadFilter()
    const g = ac.createGain()
    o.type = onde
    o.frequency.value = f
    filtre.type = 'lowpass'
    filtre.frequency.setValueAtTime(coupure, t0)
    filtre.frequency.exponentialRampToValueAtTime(Math.max(200, coupure / 6), t0 + duree)
    enveloppe(ac, g, t0, vol, 0.004, duree)
    o.connect(filtre).connect(g).connect(dest)
    o.start(t0)
    o.stop(t0 + duree + 0.05)
  },
  flute: (ac, dest, f, t0, { duree = 1.1, vol = 0.07 } = {}) => {
    const o = ac.createOscillator()
    const vib = ac.createOscillator()
    const prof = ac.createGain()
    const g = ac.createGain()
    o.type = 'sine'
    o.frequency.value = f
    vib.frequency.value = 5
    prof.gain.value = f * 0.006
    vib.connect(prof).connect(o.frequency)
    g.gain.setValueAtTime(0.0001, t0)
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.09)
    g.gain.setValueAtTime(vol, t0 + duree * 0.6)
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree)
    o.connect(g).connect(dest)
    o.start(t0)
    vib.start(t0)
    o.stop(t0 + duree + 0.05)
    vib.stop(t0 + duree + 0.05)
  },
  // cloches (gamelan, gong léger) : synthèse FM, partiels inharmoniques
  cloche: (ac, dest, f, t0, { duree = 2.4, vol = 0.06, ratio = 3.5 } = {}) => {
    const porteuse = ac.createOscillator()
    const mod = ac.createOscillator()
    const indice = ac.createGain()
    const g = ac.createGain()
    porteuse.frequency.value = f
    mod.frequency.value = f * ratio
    indice.gain.setValueAtTime(f * 2, t0)
    indice.gain.exponentialRampToValueAtTime(1, t0 + duree)
    mod.connect(indice).connect(porteuse.frequency)
    enveloppe(ac, g, t0, vol, 0.003, duree)
    porteuse.connect(g).connect(dest)
    porteuse.start(t0)
    mod.start(t0)
    porteuse.stop(t0 + duree + 0.05)
    mod.stop(t0 + duree + 0.05)
  },
  // lames de bois (balafon) : son court et rond
  bois: (ac, dest, f, t0, { vol = 0.1 } = {}) => {
    INSTRUMENTS.cloche(ac, dest, f, t0, { duree: 0.45, vol, ratio: 4 })
  },
  piano: (ac, dest, f, t0, { duree = 1.8, vol = 0.06 } = {}) => {
    ;[
      [1, vol, 'sine'],
      [2, vol * 0.25, 'sine'],
      [3, vol * 0.08, 'triangle'],
    ].forEach(([k, v, onde]) => {
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.type = onde
      o.frequency.value = f * k
      enveloppe(ac, g, t0, v, 0.006, duree / k)
      o.connect(g).connect(dest)
      o.start(t0)
      o.stop(t0 + duree + 0.05)
    })
  },
}
const VOIX = {
  luth: (ac, d, f, t) => INSTRUMENTS.pincee(ac, d, f, t, { onde: 'sawtooth', coupure: 1800, duree: 1.3 }),
  lyre: (ac, d, f, t) => INSTRUMENTS.pincee(ac, d, f, t, { onde: 'triangle', coupure: 3000, duree: 1.8, vol: 0.1 }),
  guzheng: (ac, d, f, t) => INSTRUMENTS.pincee(ac, d, f * 2, t, { onde: 'triangle', coupure: 3500, duree: 2.2, vol: 0.08 }),
  sitar: (ac, d, f, t) => INSTRUMENTS.pincee(ac, d, f * 2, t, { onde: 'sawtooth', coupure: 3200, duree: 1.6, vol: 0.06 }),
  clavecin: (ac, d, f, t) => INSTRUMENTS.pincee(ac, d, f, t, { onde: 'square', coupure: 2600, duree: 0.6, vol: 0.045 }),
  flute: (ac, d, f, t) => INSTRUMENTS.flute(ac, d, f * 2, t),
  cloche: (ac, d, f, t) => INSTRUMENTS.cloche(ac, d, f * 2, t, { duree: 1.8, vol: 0.05 }),
  balafon: (ac, d, f, t) => INSTRUMENTS.bois(ac, d, f * 2, t),
  piano: (ac, d, f, t) => INSTRUMENTS.piano(ac, d, f, t),
}

let tamponBruit = null
/** Bruit blanc de 2 s, créé une seule fois (percussions, vent, vagues). */
function bruit(ac) {
  if (tamponBruit) return tamponBruit
  const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  tamponBruit = buf
  return buf
}

function percussion(ac, dest, type, t0) {
  if (type === 'G') {
    // tambour grave : sinus dont la hauteur chute
    const o = ac.createOscillator()
    const g = ac.createGain()
    o.frequency.setValueAtTime(140, t0)
    o.frequency.exponentialRampToValueAtTime(55, t0 + 0.18)
    enveloppe(ac, g, t0, 0.12, 0.003, 0.3)
    o.connect(g).connect(dest)
    o.start(t0)
    o.stop(t0 + 0.35)
  } else {
    // frappe aiguë : souffle filtré très court
    const s = ac.createBufferSource()
    const f = ac.createBiquadFilter()
    const g = ac.createGain()
    s.buffer = bruit(ac)
    f.type = 'bandpass'
    f.frequency.value = 2200
    enveloppe(ac, g, t0, 0.05, 0.002, 0.08)
    s.connect(f).connect(g).connect(dest)
    s.start(t0)
    s.stop(t0 + 0.1)
  }
}

// ── Lecture ─────────────────────────────────────────────────────────────────
function demarrer(id) {
  const ac = contexteAudio()
  const a = AMBIANCES[id]
  if (!ac || !a) return null
  const maintenant = ac.currentTime
  const bus = ac.createGain()
  bus.gain.setValueAtTime(0.0001, maintenant)
  bus.gain.exponentialRampToValueAtTime(VOLUME, maintenant + 2.5)
  bus.connect(sortieAudio())
  // un peu d'espace : écho doux
  const entree = ac.createGain()
  const echo = ac.createDelay(1)
  const retour = ac.createGain()
  const humide = ac.createGain()
  echo.delayTime.value = Math.min(0.9, (60 / a.bpm) * 0.75)
  retour.gain.value = 0.3
  humide.gain.value = 0.35
  entree.connect(bus)
  entree.connect(echo)
  echo.connect(retour).connect(echo)
  echo.connect(humide).connect(bus)

  const continus = []
  // bourdon (ou vielle) : quelques sinus tenus, qui « respirent » lentement
  if (a.bourdon) {
    for (const st of a.bourdon) {
      const o = ac.createOscillator()
      const g = ac.createGain()
      const lfo = ac.createOscillator()
      const lfoG = ac.createGain()
      o.type = a.vielle ? 'sawtooth' : 'sine'
      o.frequency.value = (a.tonique / 2) * 2 ** (st / 12)
      g.gain.value = a.vielle ? 0.012 : 0.03
      lfo.frequency.value = 0.07 + st * 0.003
      lfoG.gain.value = g.gain.value * 0.5
      lfo.connect(lfoG).connect(g.gain)
      if (a.vielle) {
        const f = ac.createBiquadFilter()
        f.type = 'lowpass'
        f.frequency.value = 700
        o.connect(f).connect(g)
      } else o.connect(g)
      g.connect(bus)
      o.start(maintenant)
      lfo.start(maintenant)
      continus.push(o, lfo)
    }
  }
  // vent ou vagues : souffle filtré qui ondule
  if (a.souffle) {
    const s = ac.createBufferSource()
    const f = ac.createBiquadFilter()
    const g = ac.createGain()
    const lfo = ac.createOscillator()
    const lfoG = ac.createGain()
    s.buffer = bruit(ac)
    s.loop = true
    f.type = a.souffle === 'vagues' ? 'lowpass' : 'bandpass'
    f.frequency.value = a.souffle === 'vagues' ? 500 : 900
    g.gain.value = 0.02
    lfo.frequency.value = a.souffle === 'vagues' ? 0.12 : 0.05
    lfoG.gain.value = 0.018
    lfo.connect(lfoG).connect(g.gain)
    s.connect(f).connect(g).connect(bus)
    s.start(maintenant)
    lfo.start(maintenant)
    continus.push(s, lfo)
  }

  const motif = composer(id, a)
  const duree = 60 / a.bpm / 2
  let prochain = maintenant + 0.4
  let i = 0
  const tic = setInterval(() => {
    while (prochain < ac.currentTime + 0.5) {
      const p = motif[i % motif.length]
      for (const st of p.notes) VOIX[a.voix](ac, entree, a.tonique * 2 ** (st / 12), prochain)
      if (p.percu) percussion(ac, bus, p.percu, prochain)
      if (p.cloche && a.voix !== 'cloche') INSTRUMENTS.cloche(ac, entree, a.tonique, prochain, { duree: 3, vol: 0.04, ratio: 1.41 })
      prochain += duree
      i++
    }
  }, 120)

  return {
    id,
    arreter() {
      clearInterval(tic)
      const t = ac.currentTime
      bus.gain.cancelScheduledValues(t)
      bus.gain.setValueAtTime(Math.max(bus.gain.value, 0.0001), t)
      bus.gain.exponentialRampToValueAtTime(0.0001, t + 1.5)
      setTimeout(() => {
        for (const n of continus) {
          try {
            n.stop()
          } catch {
            /* déjà arrêté */
          }
        }
        bus.disconnect()
      }, 1700)
    },
  }
}

function arreter() {
  lecture?.arreter()
  lecture = null
}
function relancer() {
  if (!actif || !demandee || (typeof document !== 'undefined' && document.hidden)) return
  if (lecture?.id === demandee) return
  arreter()
  try {
    lecture = demarrer(demandee)
  } catch {
    lecture = null
  }
}

// Navigateur qui bloque l'audio avant tout geste (app rouverte avec la musique activée) : on attend le premier toucher.
if (typeof window !== 'undefined') {
  const debloquer = () => {
    if (actif) {
      contexteAudio()
      relancer()
    }
  }
  window.addEventListener('pointerdown', debloquer, { passive: true })
  document.addEventListener('visibilitychange', () => (document.hidden ? arreter() : relancer()))
}

export const musiqueActive = () => actif
export function activerMusique(oui) {
  actif = Boolean(oui)
  save(CLE, actif)
  if (actif) {
    contexteAudio()
    demandee ??= 'mediterranee' // aucune page n'a encore choisi : ambiance par défaut
    relancer()
  } else arreter()
}
export function definirAmbiance(id) {
  if (!id || id === demandee) return
  demandee = id
  relancer()
}
export const ambianceActuelle = () => demandee

/** Hook : la page affichée choisit l'ambiance (d'après une civilisation). */
export function useAmbiance(civId) {
  useEffect(() => {
    if (civId) definirAmbiance(ambianceDe(findCivilization(civId)))
  }, [civId])
}
