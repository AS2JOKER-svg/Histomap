// Parcours de l'Aventure (content/parcours.json) : 5 mondes (= les époques), un tronc de salles
// par monde à faire dans l'ordre, des branches bonus rattachées à une autre civilisation,
// et les titres à gagner (époques, fils rouges = lignées, titre ultime).
//
//   loadParcours(dir)                    → { file, data, problem? }
//   validateParcours(parcours, ctx)      → erreurs et alertes, via ctx.err / ctx.warn
//   compileParcours(data, ctx)           → objet écrit dans src/data/parcours.json
//
// Règles (ARBORESCENCE.md, validées le 14/11/2026) :
//   - chaque civilisation est soit une salle du tronc de son époque, soit une branche, une seule fois ;
//   - une branche dépend d'une civilisation (tronc ou branche) de son monde ou d'un monde précédent ;
//   - une branche qui appartient à une lignée dépend de la civilisation précédente de cette lignée ;
//   - pas de cycle ; chaque lignée a son titre « Maître de … » ;
//   - V3.1 (sprint 29) : nom court (`courts`, ≤ 16 caractères) obligatoire pour chaque salle qui peut être
//     sur le chemin d'un joueur (tronc ou membre d'un fil rouge) dont le nom dépasse 16 caractères ;
//     les noms affichés sur le chemin (nom court, sinon nom) sont tous différents ;
//   - V3.1 (sprint 30) : chaque branche dont le parent est dans un monde précédent a une ancre (`ancres`) :
//     la salle du tronc de son propre monde à côté de laquelle sa bulle est dessinée sur la carte du parcours
//     (la plus proche par la géographie, puis par l'histoire) ; l'ouverture ne change pas (parent découvert).
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export const THEMES = ['silex', 'papyrus', 'enluminure', 'lapis', 'neon']
export const COURT_MAX = 16
const FILE = 'parcours.json'

export function loadParcours(dir) {
  const path = join(dir, FILE)
  if (!existsSync(path)) return { file: FILE, data: null, problem: 'fichier manquant' }
  try {
    return { file: FILE, data: JSON.parse(readFileSync(path, 'utf-8')) }
  } catch (e) {
    return { file: FILE, data: null, problem: `JSON invalide : ${e.message}` }
  }
}

/** Époque de chaque civilisation (ordre de epochs.json) et lignée ordonnée par date de début. */
function context(content) {
  const epochOf = new Map()
  const epochIds = []
  for (const ep of content.epochs ?? []) {
    epochIds.push(ep.id)
    for (const c of ep.continents ?? []) for (const id of c.civilizations ?? c.civs ?? []) epochOf.set(typeof id === 'string' ? id : id.id, ep.id)
  }
  const start = (id) => content.civs.get(id)?.data?.start ?? 0
  const previousInLineage = new Map()
  const lineageOf = new Map()
  for (const l of content.lineages ?? []) {
    const members = [...(l.members ?? [])].sort((a, b) => start(a) - start(b))
    members.forEach((id, i) => {
      lineageOf.set(id, l.id)
      if (i) previousInLineage.set(id, members[i - 1])
    })
  }
  return { epochOf, epochIds, previousInLineage, lineageOf, start }
}

export function validateParcours({ file, data: p, problem }, ctx) {
  const { err, warn, isStr, isArr, onlyFields, content } = ctx
  const w = `content/${file}`
  if (problem) return err(w, problem)
  onlyFields(w, p, ['mondes', 'branches', 'ancres', 'courts', 'filsRouges', 'titreUltime'])
  const { epochOf, epochIds, previousInLineage } = context(content)
  const worldIndex = new Map() // civId → index du monde
  const place = new Map() // civId → « tronc » | « branche »

  // Mondes : un par époque, dans l'ordre, chacun avec son tronc
  if (!isArr(p.mondes) || p.mondes.map((m) => m?.epoque).join() !== epochIds.join())
    err(w, `« mondes » : un monde par époque, dans l'ordre de epochs.json (${epochIds.join(', ')})`)
  const themes = new Set()
  ;(p.mondes ?? []).forEach((m, i) => {
    const mw = `${w} (monde « ${m?.epoque ?? i} »)`
    onlyFields(mw, m, ['epoque', 'titre', 'theme', 'tronc'])
    if (!isStr(m.titre)) err(mw, '« titre » manquant')
    if (!THEMES.includes(m.theme) || themes.has(m.theme)) err(mw, `« theme » inconnu ou déjà pris (${THEMES.join(', ')})`)
    themes.add(m.theme)
    if (!isArr(m.tronc) || m.tronc.length < 3) err(mw, '« tronc » : au moins 3 salles')
    for (const id of m.tronc ?? []) {
      if (!content.civs.has(id)) err(mw, `salle inconnue « ${id} »`)
      else if (epochOf.get(id) !== m.epoque) err(mw, `« ${id} » n'appartient pas à cette époque (${epochOf.get(id) ?? 'aucune'})`)
      if (place.has(id)) err(mw, `« ${id} » placée deux fois`)
      place.set(id, 'tronc')
      worldIndex.set(id, i)
    }
  })

  // Branches : { civId: parent }
  const branches = p.branches && typeof p.branches === 'object' && !isArr(p.branches) ? p.branches : (err(w, '« branches » doit être un objet { civilisation: parent }'), {})
  for (const id of Object.keys(branches)) {
    if (!content.civs.has(id)) err(w, `branche inconnue « ${id} »`)
    if (place.has(id)) err(w, `« ${id} » est à la fois dans le tronc et dans les branches`)
    place.set(id, 'branche')
    const i = epochIds.indexOf(epochOf.get(id))
    if (i >= 0) worldIndex.set(id, i)
  }
  for (const [id, parent] of Object.entries(branches)) {
    const bw = `${w} (branche « ${id} »)`
    if (!place.has(parent)) {
      err(bw, `parent « ${parent} » absent du parcours`)
      continue
    }
    if (worldIndex.get(parent) > worldIndex.get(id)) err(bw, `dépend de « ${parent} », d'un monde plus tardif`)
    const prev = previousInLineage.get(id)
    if (prev && prev !== parent) err(bw, `fil rouge : doit dépendre de « ${prev} », la civilisation précédente de sa lignée`)
  }
  // Pas de cycle (une branche remonte toujours jusqu'au tronc)
  for (const id of Object.keys(branches)) {
    const seen = new Set([id])
    let cur = branches[id]
    while (place.get(cur) === 'branche') {
      if (seen.has(cur)) {
        err(`${w} (branche « ${id} »)`, 'cycle de dépendances')
        break
      }
      seen.add(cur)
      cur = branches[cur]
    }
  }
  // Toutes les civilisations sont dans le parcours
  for (const id of content.civs.keys()) if (!place.has(id)) err(w, `« ${id} » n'est ni dans un tronc ni dans les branches`)

  // Ancres (carte du parcours) : une pour chaque branche dont le parent est dans un monde précédent, et seulement pour elles
  const ancres = p.ancres && typeof p.ancres === 'object' && !isArr(p.ancres) ? p.ancres : (err(w, '« ancres » doit être un objet { branche: salle du tronc }'), {})
  for (const [id, parent] of Object.entries(branches)) {
    if (!place.has(parent) || !worldIndex.has(id)) continue
    const venue = worldIndex.get(parent) < worldIndex.get(id)
    if (venue && !isStr(ancres[id])) err(w, `ancres : « ${id} » dépend de « ${parent} », d'un monde précédent : ancre obligatoire (une salle du tronc de son monde)`)
    if (!venue && ancres[id] !== undefined) err(w, `ancres : « ${id} » dépend d'une salle de son monde : pas d'ancre`)
  }
  for (const [id, a] of Object.entries(ancres)) {
    if (!(id in branches)) err(w, `ancres : « ${id} » n'est pas une branche`)
    else if (place.get(a) !== 'tronc' || worldIndex.get(a) !== worldIndex.get(id)) err(w, `ancres : l'ancre de « ${id} » (« ${a} ») doit être une salle du tronc de son monde`)
  }

  // Noms courts (carte du parcours) : salles du tronc et membres des fils rouges aux noms longs
  const courts = p.courts && typeof p.courts === 'object' && !isArr(p.courts) ? p.courts : (p.courts !== undefined && err(w, '« courts » doit être un objet { civilisation: nom court }'), {})
  const label = (id) => content.civs.get(id)?.data?.label ?? id
  for (const [id, c] of Object.entries(courts)) {
    if (!place.has(id)) err(w, `courts : salle inconnue « ${id} »`)
    if (!isStr(c) || c.trim() !== c || c.length > COURT_MAX) err(w, `courts : nom court de « ${id} » vide, avec des espaces autour ou de plus de ${COURT_MAX} caractères`)
  }
  const lineageMembers = new Set((content.lineages ?? []).flatMap((l) => l.members ?? []))
  const surChemin = [...place.keys()].filter((id) => place.get(id) === 'tronc' || lineageMembers.has(id))
  const affiches = new Map()
  for (const id of surChemin) {
    if (label(id).length > COURT_MAX && !isStr(courts[id])) err(w, `courts : « ${id} » (${label(id)}) peut être sur le chemin d'un joueur : nom court obligatoire (≤ ${COURT_MAX} caractères)`)
    const nom = courts[id] ?? label(id)
    if (affiches.has(nom)) err(w, `courts : « ${nom} » affiché pour « ${affiches.get(nom)} » et « ${id} »`)
    affiches.set(nom, id)
  }

  // Titres : un par lignée, plus le titre ultime
  const titres = p.filsRouges && typeof p.filsRouges === 'object' ? p.filsRouges : {}
  const lineageIds = new Set((content.lineages ?? []).map((l) => l.id))
  for (const l of lineageIds) if (!isStr(titres[l])) err(w, `fil rouge « ${l} » : titre manquant (filsRouges)`)
  for (const k of Object.keys(titres)) if (!lineageIds.has(k)) err(w, `filsRouges : lignée inconnue « ${k} »`)
  if (!isStr(p.titreUltime)) err(w, '« titreUltime » manquant')
  const all = [...(p.mondes ?? []).map((m) => m.titre), ...Object.values(titres), p.titreUltime].filter(isStr)
  if (new Set(all).size !== all.length) warn(w, 'deux titres identiques')
}

/**
 * Version compilée : mondes (avec le nom de l'époque), branches, ancres, noms courts, années de début
 * (pour placer les salles des fils rouges sur le chemin, lib/aventure.js), fils rouges ordonnés, titres.
 */
export function compileParcours(p, content) {
  const { start, epochOf, epochIds } = context(content)
  const label = new Map((content.epochs ?? []).map((e) => [e.id, e.label]))
  return {
    mondes: p.mondes.map((m) => ({ epoque: m.epoque, nom: label.get(m.epoque) ?? m.epoque, titre: m.titre, theme: m.theme, tronc: m.tronc })),
    branches: p.branches,
    ancres: p.ancres ?? {},
    brancheMonde: Object.fromEntries(Object.keys(p.branches).map((id) => [id, epochIds.indexOf(epochOf.get(id))])),
    courts: p.courts ?? {},
    debuts: Object.fromEntries([...p.mondes.flatMap((m) => m.tronc), ...Object.keys(p.branches)].map((id) => [id, start(id)])),
    filsRouges: (content.lineages ?? []).map((l) => ({
      id: l.id,
      label: l.label,
      couleur: l.color,
      membres: [...l.members].sort((a, b) => start(a) - start(b)),
      titre: p.filsRouges[l.id],
    })),
    titreUltime: p.titreUltime,
  }
}
