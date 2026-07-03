/**
 * assignLanes.js — Compactage en couloirs (greedy lane packing)
 * =============================================================
 * Positionne verticalement des civilisations qui se chevauchent dans le temps.
 *
 * Renvoie une Map { civId -> laneIndex } ainsi que le nombre total de couloirs.
 *
 * @param {Array<{id:string,start:number,end:number}>} items
 * @returns {{ lanes: Record<string, number>, count: number }}
 */
export function assignLanes(items) {
  const lanes = {}
  if (!items || items.length === 0) return { lanes, count: 1 }

  // Tri croissant par date de début
  const sorted = [...items].sort((a, b) => (a.start ?? 0) - (b.start ?? 0))

  // laneEnds[i] = année de fin du dernier élément du couloir i
  const laneEnds = []

  for (const item of sorted) {
    const start = item.start ?? 0
    const end   = item.end ?? start
    let placed = false

    for (let i = 0; i < laneEnds.length; i++) {
      if (laneEnds[i] <= start) {
        lanes[item.id] = i
        laneEnds[i] = end
        placed = true
        break
      }
    }
    if (!placed) {
      lanes[item.id] = laneEnds.length
      laneEnds.push(end)
    }
  }

  return { lanes, count: Math.max(laneEnds.length, 1) }
}
