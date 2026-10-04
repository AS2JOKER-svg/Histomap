/**
 * revision.js — Construction des paquets de cartes de révision
 * =============================================================
 * Chaque civilisation a un chapitre :
 *   - rédigé à la main s'il existe dans src/data/revision/ : il est chargé à la
 *     demande (lib/chapters.js) puis passé dans ref.hand ;
 *   - sinon généré automatiquement à partir de ses données (dates, dirigeants…).
 *
 * Deux niveaux de cartes :
 *   tier 1 → premier passage (l'essentiel)
 *   tier 2 → débloqué en reprenant le chapitre (nouvelles informations)
 *
 * Types de cartes :
 *   cover · text · keyfigure · dates · steps · map · leaders · person · war · lineage · recap
 */
import { chapterMeta } from './chapters'
import PRESENCE from '../data/map-presence.json'
import { formatDuration, formatYear } from './time'

/** Toutes les cartes (niveaux 1 et 2) d'une civilisation, avec couverture et bilan. */
export function chapterCards(ref) {
  const { civ, hand } = ref
  const body = hand ? hand.cards : autoCards(ref)
  const cover = { id: 'cover', tier: 0, type: 'cover', readingTime: hand?.readingTime ?? Math.max(2, Math.round(body.length / 3)) }
  const lineage = civ.lineage ? [{ id: 'lineage', tier: 1, type: 'lineage' }] : []
  const recap = { id: 'recap', tier: 0, type: 'recap', points: hand?.recap ?? autoRecap(civ) }
  return [cover, ...body, ...lineage, recap]
}

export function isHandwritten(civId) {
  return !!chapterMeta(civId)
}

/**
 * Paquet d'une séance selon le nombre de passages déjà terminés :
 *   round 0  → niveau 1
 *   round 1  → niveau 2 + cartes marquées « à revoir » la fois précédente
 *   round 2+ → tout le chapitre
 * Couverture en tête, bilan à la fin.
 */
export function buildDeck(ref, { round = 0, toReview = [] } = {}) {
  const all = chapterCards(ref)
  const cover = all[0]
  const recap = all[all.length - 1]
  const body = all.slice(1, -1)
  let picked
  if (round === 0) picked = body.filter((c) => c.tier === 1)
  else if (round === 1) {
    picked = body.filter((c) => c.tier === 2 || toReview.includes(c.id))
    // Pas de niveau 2 pour ce chapitre : on refait le niveau 1
    if (!picked.length) picked = body.filter((c) => c.tier === 1)
  } else picked = body
  return [cover, ...picked, recap]
}

/** Nombre de cartes de chaque niveau (affiché dans le hub). */
export function chapterSize(ref) {
  // Chapitre rédigé pas encore chargé (listes) : tailles précalculées
  const meta = !ref.hand && chapterMeta(ref.civ.id)
  if (meta) return { tier1: meta.tier1 + (ref.civ.lineage ? 1 : 0), tier2: meta.tier2 }
  const all = chapterCards(ref)
  return { tier1: all.filter((c) => c.tier === 1).length, tier2: all.filter((c) => c.tier === 2).length }
}

// ─────────────────────────────────────────────────────────────────────────────
// Génération automatique à partir des données de la civilisation
// ─────────────────────────────────────────────────────────────────────────────

function autoCards({ civ }) {
  const cards = []
  const dates = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee)
  const leaders = civ.dirigeants ?? []
  const people = civ.personnages ?? []
  const wars = civ.guerres ?? []

  // ── Niveau 1 ──
  cards.push({
    id: 'essentiel',
    tier: 1,
    type: 'text',
    kicker: "L'essentiel",
    title: civ.label,
    body: civ.description,
    highlight: civ.capitale ? { value: civ.capitale, label: 'capitale' } : null,
  })
  cards.push({
    id: 'duree',
    tier: 1,
    type: 'keyfigure',
    kicker: 'Durée',
    value: formatDuration(civ.start, civ.end),
    label: civ.period,
    caption: dates[0] ? `Point de départ : ${dates[0].evenement} (${formatYear(dates[0].annee)}). ${dates[0].info ?? ''}` : null,
  })
  if (hasMap(civ)) {
    const years = mapYears(civ)
    cards.push({
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Où sur la carte ?',
      years,
      caption: years.length > 1 ? "Changez d'année pour voir le territoire s'étendre ou se réduire." : null,
    })
  }
  if (dates.length >= 2) {
    cards.push({
      id: 'dates',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: `${Math.min(dates.length, 5)} dates à retenir`,
      items: dates.slice(0, 5).map((d) => ({ year: d.annee, label: d.evenement })),
    })
  }
  if (leaders.length) {
    cards.push({ id: 'dirigeants', tier: 1, type: 'leaders', kicker: 'Pouvoir', title: 'Qui gouverne ?', items: leaders })
  }
  if (wars[0]) cards.push({ id: 'guerre-0', tier: 1, type: 'war', kicker: 'Guerre', ...wars[0] })
  if (people[0]) cards.push({ id: 'perso-0', tier: 1, type: 'person', ...people[0] })

  // ── Niveau 2 ──
  dates.forEach((d, i) => {
    if (d.info) {
      cards.push({ id: `date-${i}`, tier: 2, type: 'text', kicker: formatYear(d.annee), title: d.evenement, body: d.info })
    }
  })
  chunks(civ.sciences).forEach((body, i, arr) =>
    cards.push({ id: `sciences-${i}`, tier: 2, type: 'text', kicker: 'Sciences & techniques', title: part('Ce qu’elle a inventé', i, arr), body })
  )
  chunks(civ.croyancesText).forEach((body, i, arr) =>
    cards.push({ id: `croyances-${i}`, tier: 2, type: 'text', kicker: 'Croyances', title: part('Ce qu’on y croit', i, arr), body })
  )
  chunks(civ.diplomatie).forEach((body, i, arr) =>
    cards.push({ id: `diplomatie-${i}`, tier: 2, type: 'text', kicker: 'Diplomatie', title: part('Alliés et rivaux', i, arr), body })
  )
  wars.slice(1).forEach((w, i) => cards.push({ id: `guerre-${i + 1}`, tier: 2, type: 'war', kicker: 'Guerre', ...w }))
  people.slice(1).forEach((p, i) => cards.push({ id: `perso-${i + 1}`, tier: 2, type: 'person', ...p }))
  return cards
}

function autoRecap(civ) {
  const dates = [...(civ.datesCles ?? [])].sort((a, b) => a.annee - b.annee).slice(0, 3)
  return [
    `${civ.label} : ${civ.period}${civ.capitale ? `, capitale ${civ.capitale}` : ''}`,
    ...dates.map((d) => `${formatYear(d.annee)} : ${d.evenement}`),
  ]
}

/** Découpe un long texte en morceaux de ~260 caractères, sur des fins de phrases. */
function chunks(text, max = 260) {
  if (!text) return []
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) ?? [text]
  const out = []
  let cur = ''
  for (const s of sentences) {
    if (cur && (cur + s).length > max) {
      out.push(cur.trim())
      cur = ''
    }
    cur += s
  }
  if (cur.trim()) out.push(cur.trim())
  return out
}

const part = (title, i, arr) => (arr.length > 1 ? `${title} (${i + 1}/${arr.length})` : title)

// ── Carte : années où la civilisation a un territoire sur les cartes historiques ──

function hasMap(civ) {
  return !!PRESENCE[civ.id]?.length
}

/** Jusqu'à 3 années de carte où la civilisation a un territoire, réparties sur sa période. */
export function mapYears(civ) {
  const years = PRESENCE[civ.id] ?? []
  if (years.length <= 3) return years
  return [years[0], years[Math.floor(years.length / 2)], years[years.length - 1]]
}
