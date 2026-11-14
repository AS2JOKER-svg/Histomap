// Dossiers de guerre (content/wars/<id>.json) : la page complète d'une grande guerre
// (phases, carte animée, batailles, personnages, quiz).
//
//   loadDossiers(dir)                       → [{ file, name, data, problem? }]
//   validateDossiers(dossiers, ctx)         → erreurs et alertes, via ctx.err / ctx.warn
//   compileDossier(d, resolveDeep)          → objet écrit dans src/data/dossiers/<id>.json
//
// Camps : deux camps ou plus, d'ids libres (« allies », « axe », « rome »…).
// Carte : `carte.statuts` donne l'état de départ (nom d'un territoire de la carte de
// `carte.annee` → statut), chaque phase n'indique que ce qui change. Statuts possibles :
// l'id d'un camp, « occupe » (occupé par le camp `carte.occupant`) ou « neutre ».
// Un territoire sans statut prend celui de sa métropole (SUBJECTO), sinon « neutre ».
// Dates : « 1942 », « -218 », « 1942-08 » ou « 1942-08-23 ».
import { existsSync, readFileSync, readdirSync } from 'fs'
import { basename, join } from 'path'

const RESERVED = ['neutre', 'occupe', 'autres']
const QUIZ_TYPES = ['mcq', 'tf', 'order']
const DATE = /^-?\d{1,4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/

/** Bornes comparables d'une date : « 1942 » couvre toute l'année, « 1942-08 » tout le mois. */
export function dateRange(s) {
  const neg = s.startsWith('-')
  const [y, m, d] = (neg ? s.slice(1) : s).split('-').map(Number)
  const year = neg ? -y : y
  return [year * 10000 + (m ?? 0) * 100 + (d ?? 0), year * 10000 + (m ?? 12) * 100 + (d ?? 99)]
}

export function loadDossiers(dir) {
  const folder = join(dir, 'wars')
  if (!existsSync(folder)) return []
  return readdirSync(folder)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => {
      const file = `wars/${f}`
      try {
        return { file, name: basename(f, '.json'), data: JSON.parse(readFileSync(join(folder, f), 'utf-8')) }
      } catch (e) {
        return { file, name: basename(f, '.json'), data: null, problem: `JSON invalide : ${e.message}` }
      }
    })
}

const statutOf = (v) => (typeof v === 'string' ? v : v?.statut)

/** États de la carte, phase par phase (cumulés). */
export function phaseStates(d) {
  let state = { ...(d.carte?.statuts ?? {}) }
  return (d.phases ?? []).map((p) => (state = { ...state, ...(p.carte?.statuts ?? {}) }))
}

/**
 * ctx : { err(where, msg), warn(where, msg), isStr, isNum, isArr, isUrl, isHex, onlyFields, sources,
 *         entities: Map, civs: Map, wars: Set<"nom|annee">, mapIndex }
 */
export function validateDossiers(dossiers, ctx) {
  const { err, warn, isStr, isNum, isArr, isUrl, isHex, onlyFields, sources } = ctx
  const ids = new Set()
  const linkedBy = new Map() // guerre de fiche → dossier
  const isDate = (v) => typeof v === 'string' && DATE.test(v)
  for (const { file, name, data: d, problem } of dossiers) {
    const w = `content/${file}`
    if (problem) {
      err(w, problem)
      continue
    }
    onlyFields(w, d, ['id', 'nom', 'debut', 'fin', 'dates', 'description', 'essentiel', 'chiffres', 'camps', 'carte', 'phases', 'batailles', 'personnages', 'sections', 'quiz', 'guerresLiees', 'sources'])
    if (d.id !== name) err(w, `id « ${d.id} » différent du nom du fichier`)
    if (ctx.civs.has(d.id) || ctx.entities.has(d.id)) err(w, `id « ${d.id} » déjà utilisé par une autre fiche`)
    if (ids.has(d.id)) err(w, 'id dupliqué')
    ids.add(d.id)
    for (const k of ['nom', 'dates', 'description']) if (!isStr(d[k])) err(w, `« ${k} » manquant`)
    if (!isNum(d.debut) || !isNum(d.fin) || d.debut > d.fin) err(w, 'bornes « debut » / « fin » invalides')
    if (!isArr(d.essentiel) || !d.essentiel.every(isStr) || d.essentiel.length > 5) err(w, '« essentiel » : 5 textes au plus')
    if (!isArr(d.chiffres) || !d.chiffres.every((c) => c && isStr(c.valeur) && isStr(c.label))) err(w, '« chiffres » : liste de { valeur, label }')
    sources(w, d)

    // Camps
    const camps = new Set()
    if (!isArr(d.camps) || d.camps.length < 2) err(w, '« camps » : au moins deux camps')
    for (const c of d.camps ?? []) {
      const cw = `${w} (camp « ${c.id ?? '?'} »)`
      onlyFields(cw, c, ['id', 'nom', 'legende', 'couleur', 'description', 'membres'])
      if (!isStr(c.id) || !SLUG.test(c.id) || RESERVED.includes(c.id) || camps.has(c.id)) err(cw, `id de camp manquant, dupliqué ou réservé (${RESERVED.join(', ')})`)
      if (!isStr(c.nom) || !isStr(c.description)) err(cw, 'nom ou description manquant')
      if (c.legende !== undefined && !isStr(c.legende)) err(cw, '« legende » doit être un texte')
      if (!isHex(c.couleur)) err(cw, `couleur invalide : ${c.couleur}`)
      if (!isArr(c.membres) || !c.membres.every(isStr)) err(cw, '« membres » : liste de textes')
      camps.add(c.id)
    }
    const statuts = new Set([...camps, 'occupe', 'neutre'])

    // Carte : statuts valides et noms présents sur la carte de l'année choisie
    const map = ctx.mapIndex?.find((m) => m.year === d.carte?.annee)
    if (!d.carte || !isNum(d.carte.annee)) err(w, '« carte.annee » manquante')
    else if (ctx.mapIndex && !map) err(w, `aucune carte historique pour l'année ${d.carte.annee}`)
    if (d.carte) onlyFields(`${w} (carte)`, d.carte, ['annee', 'note', 'noms', 'occupant', 'statuts'])
    if (d.carte?.occupant !== undefined && !camps.has(d.carte.occupant)) err(`${w} (carte)`, `« occupant » : camp inconnu « ${d.carte.occupant} »`)
    const names = map ? new Set(map.names) : null
    for (const n of Object.keys(d.carte?.noms ?? {})) if (names && !names.has(n)) err(`${w} (carte)`, `nom traduit « ${n} » absent de la carte de ${d.carte.annee}`)
    const checkStatuts = (where, list) => {
      if (list === undefined) return
      if (!list || typeof list !== 'object' || isArr(list)) return err(where, '« statuts » doit être un objet { territoire: statut }')
      for (const [n, v] of Object.entries(list)) {
        if (names && !names.has(n)) err(where, `territoire « ${n} » absent de la carte de ${d.carte.annee}`)
        if (!d.carte?.noms?.[n]) warn(where, `« ${n} » : nom français manquant (carte.noms)`)
        if (typeof v === 'object') {
          onlyFields(`${where} « ${n} »`, v, ['statut', 'note'])
          if (!isStr(v.note)) err(where, `« ${n} » : note manquante`)
        }
        if (!statuts.has(statutOf(v))) err(where, `« ${n} » : statut inconnu (${[...statuts].join(', ')})`)
        if (statutOf(v) === 'occupe' && !d.carte?.occupant) err(where, `« ${n} » : statut « occupe » sans « carte.occupant »`)
      }
    }
    checkStatuts(`${w} (carte)`, d.carte?.statuts)

    // Batailles
    const battles = new Map()
    for (const b of d.batailles ?? []) {
      const bw = `${w} (bataille « ${b.id ?? b.nom ?? '?'} »)`
      onlyFields(bw, b, ['id', 'nom', 'debut', 'fin', 'lieu', 'coords', 'vainqueur', 'resume', 'ref', 'wikiUrl'])
      if (!isStr(b.id) || battles.has(b.id)) err(bw, 'id manquant ou dupliqué')
      battles.set(b.id, b)
      for (const k of ['nom', 'lieu', 'resume']) if (!isStr(b[k])) err(bw, `« ${k} » manquant`)
      if (!isDate(b.debut) || (b.fin !== undefined && !isDate(b.fin))) err(bw, 'dates attendues : AAAA, AAAA-MM ou AAAA-MM-JJ')
      else if (b.fin && dateRange(b.fin)[1] < dateRange(b.debut)[0]) err(bw, 'fin avant le début')
      const [lon, lat] = isArr(b.coords) ? b.coords : []
      if (!isNum(lon) || !isNum(lat) || Math.abs(lon) > 180 || Math.abs(lat) > 90) err(bw, '« coords » doit valoir [longitude, latitude]')
      if (b.vainqueur !== undefined && !camps.has(b.vainqueur)) err(bw, `vainqueur inconnu « ${b.vainqueur} »`)
      if (b.ref !== undefined && ctx.entities.get(b.ref)?.type !== 'evenement') err(bw, `« ref » : événement inconnu « ${b.ref} »`)
      if (b.wikiUrl !== undefined && !isUrl(b.wikiUrl)) err(bw, 'lien invalide')
    }
    if (!battles.size) err(w, 'aucune bataille')

    // Phases : chronologiques, batailles connues, chaque bataille dans une seule phase
    const used = new Set()
    let prev = null
    ;(d.phases ?? []).forEach((p, i) => {
      const pw = `${w} (phase « ${p.id ?? i} »)`
      onlyFields(pw, p, ['id', 'nom', 'debut', 'fin', 'resume', 'texte', 'carte', 'batailles', 'evenements'])
      for (const k of ['id', 'nom', 'resume', 'texte']) if (!isStr(p[k])) err(pw, `« ${k} » manquant`)
      const okDates = isDate(p.debut) && isDate(p.fin) && dateRange(p.fin)[1] >= dateRange(p.debut)[0]
      if (!okDates) err(pw, 'dates invalides (AAAA, AAAA-MM ou AAAA-MM-JJ)')
      if (okDates && prev && dateRange(p.debut)[0] < dateRange(prev)[0]) err(pw, 'commence avant la fin de la phase précédente')
      if (okDates) prev = p.fin
      const c = p.carte ?? {}
      onlyFields(`${pw} (carte)`, c, ['cadre', 'rotation', 'statuts'])
      const okCorner = (x) => isArr(x) && x.length === 2 && isNum(x[0]) && isNum(x[1]) && Math.abs(x[0]) <= 180 && Math.abs(x[1]) <= 90
      if (!isArr(c.cadre) || c.cadre.length !== 2 || !c.cadre.every(okCorner)) err(pw, '« carte.cadre » : deux coins [[lon, lat], [lon, lat]]')
      if (c.rotation !== undefined && (!isNum(c.rotation) || Math.abs(c.rotation) > 180)) err(pw, '« carte.rotation » : une longitude')
      checkStatuts(`${pw} (carte)`, c.statuts)
      for (const id of p.batailles ?? []) {
        if (!battles.has(id)) err(pw, `bataille inconnue « ${id} »`)
        if (used.has(id)) err(pw, `bataille « ${id} » déjà dans une autre phase`)
        used.add(id)
      }
      for (const e of p.evenements ?? []) {
        onlyFields(`${pw} (événement)`, e, ['date', 'texte', 'ref'])
        if (!isDate(e.date) || !isStr(e.texte)) err(pw, `événement mal formé : ${JSON.stringify(e).slice(0, 60)}`)
        else if (okDates) {
          const [s, f] = dateRange(e.date)
          if (f < dateRange(p.debut)[0] || s > dateRange(p.fin)[1]) warn(pw, `événement « ${e.texte} » hors des dates de la phase`)
        }
        if (e.ref !== undefined && !ctx.entities.has(e.ref)) err(pw, `« ref » : fiche inconnue « ${e.ref} »`)
      }
    })
    if (!(d.phases ?? []).length) err(w, 'aucune phase')
    for (const id of battles.keys()) if (!used.has(id)) warn(w, `bataille « ${id} » rangée dans aucune phase`)

    // Personnages
    for (const p of d.personnages ?? []) {
      const pw = `${w} (personnage « ${p.nom ?? '?'} »)`
      onlyFields(pw, p, ['nom', 'camp', 'role', 'dates', 'description', 'ref', 'wikiUrl'])
      for (const k of ['nom', 'role', 'dates', 'description']) if (!isStr(p[k])) err(pw, `« ${k} » manquant`)
      if (!camps.has(p.camp) && p.camp !== 'autres') err(pw, `camp inconnu « ${p.camp} » (un camp du dossier, ou « autres »)`)
      if (p.ref !== undefined && ctx.entities.get(p.ref)?.type !== 'personne') err(pw, `« ref » : personne inconnue « ${p.ref} »`)
      if (p.wikiUrl !== undefined && !isUrl(p.wikiUrl)) err(pw, 'lien invalide')
    }

    if (d.sections !== undefined && !(isArr(d.sections) && d.sections.every((s) => s && isStr(s.titre) && isStr(s.texte) && Object.keys(s).every((k) => ['titre', 'texte'].includes(k)))))
      err(w, '« sections » : liste de { titre, texte }')

    // Quiz (format des quiz express : mcq bonne réponse en 0, tf, order)
    const qids = new Set()
    for (const q of d.quiz ?? []) {
      const qw = `${w} (question « ${q.id ?? '?'} »)`
      onlyFields(qw, q, ['id', 'type', 'prompt', 'options', 'answer', 'items', 'explanation'])
      if (!isStr(q.id) || !SLUG.test(q.id) || qids.has(q.id)) err(qw, 'id manquant, dupliqué ou mal formé (minuscules, chiffres, tirets)')
      qids.add(q.id)
      if (!QUIZ_TYPES.includes(q.type)) err(qw, `type inconnu (${QUIZ_TYPES.join(', ')})`)
      if (!isStr(q.prompt)) err(qw, 'énoncé manquant')
      if (q.type === 'mcq' && (!isArr(q.options) || q.options.length < 3 || new Set(q.options).size !== q.options.length || !q.options.every(isStr) || q.answer !== 0))
        err(qw, 'mcq : au moins 3 réponses différentes, la bonne en position 0 (answer: 0)')
      if (q.type === 'tf' && typeof q.answer !== 'boolean') err(qw, 'tf : answer doit valoir true ou false')
      if (q.type === 'order' && (!isArr(q.items) || q.items.length < 3 || new Set(q.items).size !== q.items.length)) err(qw, 'order : au moins 3 éléments différents')
    }
    if ((d.quiz ?? []).length < 10) err(w, 'quiz : au moins 10 questions')

    // Guerres des fiches rattachées à ce dossier (« nom|année »), une seule fois dans tout le site
    for (const key of d.guerresLiees ?? []) {
      if (!ctx.wars.has(key)) err(w, `guerre liée inconnue « ${key} » (nom exact|année d'une guerre de fiche)`)
      if (linkedBy.has(key)) err(w, `guerre « ${key} » déjà rattachée au dossier « ${linkedBy.get(key)} »`)
      linkedBy.set(key, d.id)
    }
  }
}

/** Version compilée : liens [[id]] résolus, états de la carte cumulés par phase. */
export function compileDossier(d, resolveDeep) {
  const states = phaseStates(d)
  return resolveDeep({
    ...d,
    phases: d.phases.map((p, i) => ({ ...p, carte: { ...p.carte, statuts: states[i] } })),
  })
}
