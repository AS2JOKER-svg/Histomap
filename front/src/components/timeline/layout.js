/**
 * layout.js — Placement des barres d'une frise (fonctions pures, sans React)
 * ===========================================================================
 */
import { clampPeriod } from '../../lib/time'

export const BAR_FONT = '600 12px Inter, system-ui, sans-serif'
const PAD_X = 10 // marge intérieure d'une barre (px)
const LABEL_GAP = 8 // espace entre une barre et son nom extérieur

let ctx = null
/** Largeur d'un texte en px (canvas) — repli sur une estimation si indisponible. */
export function textWidth(text, font = BAR_FONT) {
  try {
    ctx ??= document.createElement('canvas').getContext('2d')
    ctx.font = font
    return Math.ceil(ctx.measureText(text).width)
  } catch {
    return Math.ceil(text.length * 7)
  }
}

/**
 * Calcule la géométrie de chaque civilisation d'un continent puis les range
 * en couloirs (lanes) le plus compactement possible :
 *   - les civilisations d'un même `trackId` restent sur la même ligne
 *     (ex. Ghana → Mali), dans l'ordre de `row`, sauf si elles se chevauchent ;
 *   - le nom est écrit DANS la barre s'il tient, sinon à droite, sinon à
 *     gauche (fin de frise) : sa place est réservée pour éviter les collisions.
 *
 * @param minX / maxX  bornes (px, repère de l'échelle) où un nom peut s'écrire
 * @returns {{ items: Item[], laneCount: number }}
 *   Item = { civ, x, w, labelSide: 'inside'|'right'|'left', labelW, from, to, lane, … }
 */
export function layoutContinent(civs, epoch, scale, { minX = 0, maxX = Infinity, gap = 14 } = {}) {
  const items = civs.map((civ) => {
    const p = clampPeriod(civ, epoch.start, epoch.end)
    const x = scale.x(p.start)
    const w = Math.max(scale.x(p.end) - x, 6)
    const labelW = textWidth(civ.label)
    let labelSide = 'inside'
    if (labelW + PAD_X * 2 > w) {
      if (x + w + LABEL_GAP + labelW <= maxX) labelSide = 'right'
      else if (x - LABEL_GAP - labelW >= minX) labelSide = 'left'
    }
    return {
      civ,
      x,
      w,
      labelW,
      labelSide,
      // étendue réellement occupée (barre + nom à l'extérieur si besoin)
      from: labelSide === 'left' ? x - LABEL_GAP - labelW : x,
      to: labelSide === 'right' ? x + w + LABEL_GAP + labelW : x + w,
      overflowBefore: p.overflowBefore,
      overflowAfter: p.overflowAfter,
      lane: 0,
    }
  })

  // Regroupement par piste (trackId), puis découpage des pistes dont les
  // éléments se chevauchent (ex. Mali et Songhaï, contemporains un temps).
  const byTrack = new Map()
  for (const it of items) {
    const key = it.civ.trackId || it.civ.id
    if (!byTrack.has(key)) byTrack.set(key, [])
    byTrack.get(key).push(it)
  }
  const tracks = []
  for (const group of byTrack.values()) {
    const row = Math.min(...group.map((it) => it.civ.row ?? 999))
    const subs = []
    for (const it of [...group].sort((a, b) => a.from - b.from)) {
      // tolérance de quelques px : Ghana (→ 1240) et Mali (1235 →) restent alignés
      let sub = subs.find((t) => t.end - 8 <= it.from)
      if (!sub) subs.push((sub = { items: [], row, start: it.from, end: -Infinity }))
      sub.items.push(it)
      sub.end = it.to
    }
    tracks.push(...subs)
  }
  tracks.sort((a, b) => a.row - b.row || a.start - b.start)

  // Rangement glouton : chaque piste va dans le premier couloir libre.
  const lanes = [] // lanes[i] = intervalles occupés [from, to]
  for (const track of tracks) {
    const spans = track.items.map((it) => [it.from, it.to + gap])
    let laneIndex = lanes.findIndex((occupied) =>
      spans.every(([a, b]) => occupied.every(([c, d]) => b <= c || a >= d))
    )
    if (laneIndex === -1) laneIndex = lanes.push([]) - 1
    lanes[laneIndex].push(...spans)
    for (const it of track.items) it.lane = laneIndex
  }

  return { items, laneCount: Math.max(lanes.length, 1) }
}
