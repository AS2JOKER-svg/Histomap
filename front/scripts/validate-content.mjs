// Valide le contenu (front/content/) avant chaque build.
//   - ERREUR  → bloque le build (exit 1) : structure cassée, id dupliqué, référence inconnue…
//   - ALERTE  → affichée mais non bloquante : contenu à vérifier (date hors période, lien douteux…)
// Objectif permanent : 0 erreur ET 0 alerte.
//
// Usage : npm run validate   (lancé automatiquement par `npm run data` et `npm run build`)
//         HISTOMAP_CONTENT=<dossier> node scripts/validate-content.mjs   (valider un autre dossier)
import { ENTITY_TYPES, ignoredTerritories, loadContent, loadMapIndex } from './lib/content.mjs'
import { ID, linkSyntaxErrors, parseLinks } from '../src/lib/links.js'

const content = loadContent()
const errors = [...content.problems]
const warnings = []
const err = (where, msg) => errors.push(`${where} — ${msg}`)
const warn = (where, msg) => warnings.push(`${where} — ${msg}`)

const isNum = (v) => typeof v === 'number' && Number.isFinite(v)
const isStr = (v) => typeof v === 'string' && v.trim().length > 0
const isHex = (v) => typeof v === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)
const isUrl = (v) => typeof v === 'string' && /^https?:\/\//.test(v)
const isArr = Array.isArray

/** Champs autorisés : toute faute de frappe (« dirigeant » au lieu de « dirigeants ») est une erreur. */
function onlyFields(where, obj, allowed) {
  for (const k of Object.keys(obj)) if (!allowed.includes(k)) err(where, `champ inconnu « ${k} » (autorisés : ${allowed.join(', ')})`)
}
function optional(where, obj, key, test, expected) {
  if (obj[key] !== undefined && !test(obj[key])) err(where, `« ${key} » doit être ${expected}`)
}
function sources(where, obj) {
  if (obj.sources === undefined) return
  const ok = (x) => isUrl(x) || (x && isStr(x.titre) && isUrl(x.url) && Object.keys(x).every((k) => ['titre', 'url'].includes(k)))
  if (!isArr(obj.sources) || !obj.sources.every(ok)) err(where, '« sources » : liste de liens http(s) ou de { titre, url }')
}
const isStrList = (v) => isArr(v) && v.every(isStr)
/** [{ titre, texte }] : héritage, sections d'une fiche liée */
function blocks(where, obj, key) {
  if (obj[key] === undefined) return
  if (!isArr(obj[key]) || !obj[key].every((b) => b && isStr(b.titre) && isStr(b.texte) && Object.keys(b).every((k) => ['titre', 'texte'].includes(k))))
    err(where, `« ${key} » doit être une liste de { titre, texte }`)
}

// ── Régions ─────────────────────────────────────────────────────────────────
const CONTINENTS = ['europe', 'asie', 'afrique', 'amerique', 'oceanie']
const regionIds = new Set()
for (const r of isArr(content.regions) ? content.regions : []) {
  const w = `content/regions.json « ${r.id ?? '?'} »`
  if (!isStr(r.id) || !ID.test(r.id)) err(w, 'id manquant ou mal formé')
  if (!isStr(r.label)) err(w, 'label manquant')
  if (!CONTINENTS.includes(r.continent)) err(w, `continent invalide (${CONTINENTS.join(', ')})`)
  if (regionIds.has(r.id)) err(w, 'id dupliqué')
  regionIds.add(r.id)
}
if (!regionIds.size) err('content/regions.json', 'aucune région')

// ── Époques : le plan du site (ordre des continents et des civilisations) ────
const placedIn = new Map() // civId → "epoque/continent"
const epochIds = new Set()
if (!isArr(content.epochs) || !content.epochs.length) err('content/epochs.json', 'doit être un tableau non vide d’époques')
else
  content.epochs.forEach((ep, i) => {
    const w = `content/epochs.json « ${ep.id ?? i} »`
    onlyFields(w, ep, ['id', 'label', 'start', 'end', 'color', 'description', 'continents'])
    for (const k of ['id', 'label', 'description']) if (!isStr(ep[k])) err(w, `champ « ${k} » manquant`)
    if (!isHex(ep.color)) err(w, `couleur invalide : ${ep.color}`)
    if (!isNum(ep.start) || !isNum(ep.end) || ep.start >= ep.end) err(w, `bornes invalides ${ep.start} → ${ep.end}`)
    if (epochIds.has(ep.id)) err(w, "id d'époque dupliqué")
    epochIds.add(ep.id)
    const prev = content.epochs[i - 1]
    if (prev && prev.end !== ep.start) warn(w, `ne commence pas là où finit « ${prev.id} » (${prev.end} ≠ ${ep.start})`)
    if (!isArr(ep.continents) || !ep.continents.length) return err(w, 'aucun continent')
    for (const ct of ep.continents) {
      const cw = `${w} / ${ct.id ?? '?'}`
      onlyFields(cw, ct, ['id', 'label', 'civs'])
      if (!isStr(ct.id) || !isStr(ct.label)) err(cw, 'continent sans id ou label')
      if (!isArr(ct.civs)) {
        err(cw, '« civs » doit être la liste des ids des civilisations')
        continue
      }
      for (const civId of ct.civs) {
        if (placedIn.has(civId)) err(cw, `« ${civId} » est déjà listée dans ${placedIn.get(civId)}`)
        else placedIn.set(civId, `${ep.id}/${ct.id}`)
        if (!content.civs.has(civId)) err(cw, `« ${civId} » : aucun fichier content/civs/${civId}.json`)
      }
    }
  })
for (const [id, { file }] of content.civs) {
  if (!placedIn.has(id)) err(`content/${file}`, 'fiche absente de content/epochs.json (à ajouter dans la liste « civs » d’un continent)')
}

// ── Lignées ──────────────────────────────────────────────────────────────────
const lineageOf = new Map() // civId → id de lignée
for (const l of isArr(content.lineages) ? content.lineages : []) {
  const w = `content/lineages.json « ${l.id ?? '?'} »`
  onlyFields(w, l, ['id', 'label', 'color', 'members'])
  if (!isStr(l.id) || !isStr(l.label)) err(w, 'id ou label manquant')
  if (!isHex(l.color)) err(w, `couleur invalide : ${l.color}`)
  if (!isArr(l.members) || l.members.length < 2) {
    err(w, '« members » doit lister au moins 2 civilisations')
    continue
  }
  l.members.forEach((id, i) => {
    const civ = content.civs.get(id)?.data
    if (!civ) return err(w, `civilisation inconnue « ${id} »`)
    if (lineageOf.has(id)) err(w, `« ${id} » appartient déjà à la lignée « ${lineageOf.get(id)} »`)
    else lineageOf.set(id, l.id)
    const prev = content.civs.get(l.members[i - 1])?.data
    if (prev && isNum(civ.start) && civ.start < prev.start) err(w, `ordre chronologique : « ${id} » commence avant « ${l.members[i - 1]} »`)
  })
}

// ── Fiches liées (personnes, événements, découvertes) ───────────────────────
// Blocs communs : en-tête (nom, nomComplet, dates, roles, description = « en une phrase »), repères,
// essentiel (« pourquoi il compte »), sections (contexte, déroulement…), chronologie, liens (entourage,
// acteurs), avant / après, héritage, à savoir, sources.
const ENTITY_COMMON = ['nomComplet', 'dates', 'roles', 'reperes', 'essentiel', 'sections', 'chronologie', 'liens', 'avant', 'apres', 'heritage', 'aSavoir', 'wikiUrl', 'sources']
const ENTITY_FIELDS = {
  personne: { required: ['nom', 'description'], allowed: ['role', 'naissance', 'mort', ...ENTITY_COMMON] },
  evenement: { required: ['nom', 'description'], allowed: ['annee', 'fin', 'lieu', ...ENTITY_COMMON] },
  decouverte: { required: ['nom', 'description'], allowed: ['annee', 'domaine', ...ENTITY_COMMON] },
}
const seenEntity = new Map()
for (const { type, file, name, data } of content.entityFiles) {
  const w = `content/${file}`
  if (seenEntity.has(name)) err(w, `id déjà utilisé par content/${seenEntity.get(name)}`)
  seenEntity.set(name, file)
  if (content.civs.has(name)) err(w, `id déjà utilisé par la civilisation content/civs/${name}.json`)
  if (!ID.test(name)) err(w, 'nom de fichier invalide (minuscules, chiffres et tirets)')
  if (data.id !== name) err(w, `« id » (${data.id}) doit être identique au nom du fichier (${name})`)
  const spec = ENTITY_FIELDS[type]
  onlyFields(w, data, ['id', ...spec.required, ...spec.allowed])
  for (const k of spec.required) if (!isStr(data[k])) err(w, `champ « ${k} » manquant`)
  for (const k of ['role', 'dates', 'lieu', 'domaine']) optional(w, data, k, isStr, 'un texte')
  for (const k of ['naissance', 'mort', 'annee', 'fin']) optional(w, data, k, isNum, 'un nombre (année, négative av. J.-C.)')
  optional(w, data, 'wikiUrl', isUrl, 'un lien http(s)')
  sources(w, data)
  if (type === 'evenement' && !isNum(data.annee)) err(w, '« annee » obligatoire pour un événement')
  if (isNum(data.naissance) && isNum(data.mort) && data.naissance > data.mort) err(w, `naissance (${data.naissance}) après la mort (${data.mort})`)
  if (data.roles !== undefined && !isStrList(data.roles)) err(w, '« roles » doit être une liste de textes')
  if (data.essentiel !== undefined && !isStrList(data.essentiel)) err(w, '« essentiel » doit être une liste de textes')
  if (data.aSavoir !== undefined && !isStrList(data.aSavoir)) err(w, '« aSavoir » doit être une liste de textes')
  if (data.reperes !== undefined && !(isArr(data.reperes) && data.reperes.every((r) => r && isStr(r.label) && isStr(r.valeur) && (r.precision === undefined || isStr(r.precision)))))
    err(w, '« reperes » doit être une liste de { label, valeur, precision? }')
  blocks(w, data, 'sections')
  blocks(w, data, 'heritage')
  if (data.chronologie !== undefined && !(isArr(data.chronologie) && data.chronologie.every((c) => c && isNum(c.annee) && isStr(c.texte))))
    err(w, '« chronologie » doit être une liste de { annee, texte, detail?, ref? }')
  if (data.liens !== undefined && !(isArr(data.liens) && data.liens.every((l) => l && isStr(l.ref) && isStr(l.relation))))
    err(w, '« liens » doit être une liste de { ref, relation }')
  if (isNum(data.annee) && isNum(data.fin) && data.annee > data.fin) err(w, `début (${data.annee}) après la fin (${data.fin})`)
}
const entityType = (id) => content.entities.get(id)?.type
const exists = (id) => content.civs.has(id) || content.entities.has(id)
for (const { file, data } of content.entityFiles) {
  const w = `content/${file}`
  for (const k of ['avant', 'apres']) if (data[k] !== undefined && !exists(data[k])) err(w, `« ${k} » : fiche « ${data[k]} » introuvable`)
  for (const l of isArr(data.liens) ? data.liens : []) if (isStr(l.ref) && !exists(l.ref)) err(w, `lien vers « ${l.ref} » : fiche introuvable`)
  for (const c of isArr(data.chronologie) ? data.chronologie : []) if (c.ref !== undefined && !exists(c.ref)) err(w, `chronologie : fiche « ${c.ref} » introuvable`)
}
const expectEntity = (where, id, type, what) => {
  if (id === undefined) return
  if (!isStr(id)) return err(where, `${what} : l'id doit être un texte`)
  const t = entityType(id)
  if (!t) err(where, `${what} : fiche « ${id} » introuvable (content/${ENTITY_TYPES[type]}/${id}.json)`)
  else if (t !== type) err(where, `${what} : « ${id} » est une fiche « ${t} », pas « ${type} »`)
}

// ── Civilisations ────────────────────────────────────────────────────────────
const CIV_FIELDS = [
  'id', 'label', 'tier', 'region', 'period', 'start', 'end', 'color', 'trackId', 'row', 'isRiver', 'capitale', 'description',
  'territories', 'reperes', 'essentiel', 'datesCles', 'periodes', 'regimes', 'dynasties', 'dirigeants', 'personnages', 'guerres',
  'societe', 'economie', 'croyancesText', 'sciences', 'decouvertes', 'arts', 'quotidien', 'diplomatie', 'heritage', 'aSavoir',
  'documentaires', 'sources',
]
// Les 9 repères (identiques pour toutes les fiches). Capitale et durée ont une valeur par défaut
// (champ capitale, dates) ; « reperes » peut les préciser.
export const REPERES = ['capitale', 'regimes', 'langues', 'religion', 'apogee', 'population', 'monnaie', 'duree', 'aujourdhui']
const mapIndex = loadMapIndex()
const mapNames = mapIndex ? new Set(mapIndex.flatMap((m) => [...m.names, ...(m.powers ?? [])])) : null
if (!mapIndex) warn('carte', 'public/map/index.json introuvable (lancer `npm run map`)')
const ignored = ignoredTerritories(content)
const usedConflicts = new Set()

for (const [id, { file, data: civ }] of content.civs) {
  const w = `content/${file}`
  if (civ.id !== id) err(w, `« id » (${civ.id}) doit être identique au nom du fichier (${id})`)
  if (!ID.test(id)) err(w, 'nom de fichier invalide (minuscules, chiffres et tirets)')
  onlyFields(w, civ, CIV_FIELDS)
  for (const k of ['label', 'period', 'description', 'capitale']) if (!isStr(civ[k])) err(w, `champ « ${k} » manquant`)
  if (![1, 2, 3].includes(civ.tier)) err(w, '« tier » doit valoir 1 (majeure), 2 (secondaire) ou 3 (mineure)')
  if (!regionIds.has(civ.region)) err(w, `région inconnue « ${civ.region} » (voir content/regions.json)`)
  if (!isNum(civ.start) || !isNum(civ.end)) err(w, 'start/end doivent être des nombres')
  else if (civ.start >= civ.end) err(w, `start (${civ.start}) ≥ end (${civ.end})`)
  // (une civilisation peut déborder de son époque : la frise l'indique par ‹ ›)
  // La période affichée doit correspondre aux dates : « 250 à 900 » ⇔ start 250, end 900
  if (isStr(civ.period) && isNum(civ.start) && isNum(civ.end)) {
    const nums = (civ.period.replace(/(\d)[\s\u202f\u00a0](?=\d{3})/g, '$1').match(/-?\d+/g) ?? []).map(Number)
    if (nums.length >= 2 && (nums[0] !== civ.start || nums[nums.length - 1] !== civ.end))
      err(w, `période « ${civ.period} » différente des dates enregistrées (${civ.start} → ${civ.end})`)
  }
  if (lineageOf.has(id)) {
    if (civ.color !== undefined) err(w, `pas de « color » : la couleur vient de la lignée « ${lineageOf.get(id)} » (content/lineages.json)`)
  } else if (!isHex(civ.color)) err(w, `couleur invalide : ${civ.color}`)
  optional(w, civ, 'trackId', isStr, 'un texte')
  optional(w, civ, 'row', isNum, 'un nombre')
  optional(w, civ, 'isRiver', (v) => typeof v === 'boolean', 'true ou false')
  sources(w, civ)
  for (const k of ['datesCles', 'dirigeants', 'personnages', 'guerres', 'documentaires'])
    if (!isArr(civ[k])) err(w, `champ « ${k} » doit être un tableau`)
  for (const k of ['sciences', 'croyancesText', 'diplomatie']) {
    if (!isStr(civ[k])) warn(w, `texte « ${k} » vide`)
    // Le quiz cite la première phrase (« à quelle civilisation correspond ce passage ? ») : trop courte, la question disparaît
    else if ((civ[k].match(/[^.!?]+[.!?]/)?.[0]?.trim().length ?? 0) < 40) warn(w, `texte « ${k} » : première phrase de moins de 40 caractères, la question du quiz qui la cite ne sera pas générée`)
  }
  for (const k of ['societe', 'economie', 'arts', 'quotidien']) optional(w, civ, k, isStr, 'un texte')
  if (civ.reperes !== undefined) {
    if (!civ.reperes || typeof civ.reperes !== 'object' || isArr(civ.reperes)) err(w, '« reperes » doit être un objet')
    else
      for (const [k, v] of Object.entries(civ.reperes)) {
        if (!REPERES.includes(k)) err(w, `repère inconnu « ${k} » (autorisés : ${REPERES.join(', ')})`)
        const ok = isStr(v) || (v && isStr(v.valeur) && (v.precision === undefined || isStr(v.precision)) && Object.keys(v).every((x) => ['valeur', 'precision'].includes(x)))
        if (!ok) err(w, `repère « ${k} » : un texte ou { valeur, precision }`)
      }
  }
  if (civ.essentiel !== undefined) {
    if (!isStrList(civ.essentiel)) err(w, '« essentiel » doit être une liste de textes')
    else if (civ.essentiel.length > 5) err(w, `« essentiel » : 5 points maximum (${civ.essentiel.length})`)
  }
  if (civ.aSavoir !== undefined && !isStrList(civ.aSavoir)) err(w, '« aSavoir » doit être une liste de textes')
  blocks(w, civ, 'heritage')
  for (const id of civ.decouvertes ?? []) expectEntity(w, id, 'decouverte', 'découvertes')
  if (civ.decouvertes !== undefined && !isStrList(civ.decouvertes)) err(w, '« decouvertes » doit être une liste d’ids')
  for (const pe of civ.periodes ?? []) {
    const pw = `${w} (période « ${pe.nom ?? '?'} »)`
    onlyFields(pw, pe, ['nom', 'debut', 'fin', 'resume', 'evenements'])
    if (!isStr(pe.nom) || !isStr(pe.resume)) err(pw, '« nom » et « resume » obligatoires')
    if (!isNum(pe.debut) || !isNum(pe.fin) || pe.debut > pe.fin) err(pw, `dates invalides ${pe.debut} → ${pe.fin}`)
    for (const ev of pe.evenements ?? []) {
      onlyFields(pw, ev, ['annee', 'evenement', 'ref'])
      if (!isNum(ev.annee) || !isStr(ev.evenement)) err(pw, `événement invalide : ${JSON.stringify(ev).slice(0, 80)}`)
      expectEntity(pw, ev.ref, 'evenement', `événement « ${ev.evenement} »`)
    }
  }
  const regimeIds = new Set()
  for (const re of civ.regimes ?? []) {
    const rw = `${w} (régime « ${re.id ?? '?'} »)`
    onlyFields(rw, re, ['id', 'nom', 'debut', 'fin', 'note'])
    if (!isStr(re.id) || !ID.test(re.id)) err(rw, 'id manquant ou mal formé')
    else if (regimeIds.has(re.id)) err(rw, 'id dupliqué')
    regimeIds.add(re.id)
    if (!isStr(re.nom)) err(rw, 'nom manquant')
    if (!isNum(re.debut) || !isNum(re.fin) || re.debut > re.fin) err(rw, `dates invalides ${re.debut} → ${re.fin}`)
    optional(rw, re, 'note', isStr, 'un texte')
  }

  for (const d of civ.datesCles ?? []) {
    if (!isNum(d.annee) || !isStr(d.evenement)) err(w, `date clé invalide : ${JSON.stringify(d).slice(0, 90)}`)
    else if (isNum(civ.start)) {
      // tolérance pour une date « de contexte » (ex. Boston Tea Party, 3 ans avant 1776)
      const margin = Math.max(30, (civ.end - civ.start) * 0.05)
      if (d.annee < civ.start - margin || d.annee > civ.end + margin)
        warn(w, `date clé « ${d.evenement} » (${d.annee}) hors de ${civ.start} → ${civ.end}`)
    }
    onlyFields(`${w} (date clé ${d.annee})`, d, ['annee', 'evenement', 'info', 'ref'])
    expectEntity(w, d.ref, 'evenement', `date clé « ${d.evenement} »`)
  }

  const dynastyIds = new Set()
  if (civ.dynasties !== undefined && !isArr(civ.dynasties)) err(w, '« dynasties » doit être un tableau')
  for (const dy of isArr(civ.dynasties) ? civ.dynasties : []) {
    const dw = `${w} (dynastie « ${dy.id ?? '?'} »)`
    onlyFields(dw, dy, ['id', 'nom', 'debut', 'fin', 'regime', 'note'])
    if (dy.regime !== undefined && !regimeIds.has(dy.regime)) err(dw, `régime « ${dy.regime} » absent de « regimes »`)
    optional(dw, dy, 'note', isStr, 'un texte')
    if (!isStr(dy.id) || !ID.test(dy.id)) err(dw, 'id manquant ou mal formé')
    else if (dynastyIds.has(dy.id)) err(dw, 'id dupliqué')
    dynastyIds.add(dy.id)
    if (!isStr(dy.nom)) err(dw, 'nom manquant')
    if (!isNum(dy.debut) || !isNum(dy.fin) || dy.debut > dy.fin) err(dw, `dates invalides ${dy.debut} → ${dy.fin}`)
  }
  for (const l of civ.dirigeants ?? []) {
    const lw = `${w} (dirigeant « ${l.nom ?? '?'} »)`
    onlyFields(lw, l, ['nom', 'titre', 'surnom', 'debut', 'fin', 'dynastie', 'personne', 'note', 'cle'])
    optional(lw, l, 'cle', (v) => v === true, 'true (dirigeant clé, retenu pour le quiz) ou absent')
    optional(lw, l, 'note', isStr, 'un texte')
    if (!isStr(l.nom) || !isStr(l.titre)) err(lw, '« nom » et « titre » obligatoires')
    if (!isNum(l.debut) || !isNum(l.fin)) err(lw, '« debut » et « fin » doivent être des nombres')
    else if (l.debut > l.fin) err(lw, `début de règne (${l.debut}) après la fin (${l.fin})`)
    optional(lw, l, 'surnom', isStr, 'un texte')
    if (l.dynastie !== undefined && !dynastyIds.has(l.dynastie)) err(lw, `dynastie « ${l.dynastie} » absente de « dynasties »`)
    expectEntity(w, l.personne, 'personne', `dirigeant « ${l.nom} »`)
  }
  // Questions du quiz sur les dirigeants clés (src/lib/quiz.js) : « qui gouverne de X à Y ? » et
  // « classez du plus ancien au plus récent » (4 premiers) ne doivent pas avoir deux bonnes réponses
  const keyLeaders = (civ.dirigeants ?? []).filter((l) => l.cle)
  const quizLeaders = keyLeaders.length ? keyLeaders : (civ.dirigeants ?? [])
  const reigns = new Map()
  for (const l of quizLeaders) {
    const k = `${l.debut}→${l.fin}`
    if (reigns.has(k) && reigns.get(k) !== l.nom) warn(w, `dirigeants « ${reigns.get(k)} » et « ${l.nom} » : mêmes dates (${k}), la question « qui gouverne ? » serait ambiguë`)
    reigns.set(k, l.nom)
  }
  if (quizLeaders.length >= 3) {
    const firsts = [...quizLeaders].sort((a, b) => a.debut - b.debut).slice(0, 4)
    if (new Set(firsts.map((l) => l.debut)).size < firsts.length)
      warn(w, `dirigeants clés : deux des quatre premiers commencent la même année (${firsts.map((l) => `${l.nom} ${l.debut}`).join(', ')}), la question « classez-les » serait ambiguë`)
  }
  for (const p of civ.personnages ?? []) {
    const pw = `${w} (personnage « ${p.nom ?? '?'} »)`
    onlyFields(pw, p, ['nom', 'role', 'description', 'dates', 'wikiUrl', 'ref'])
    if (!isStr(p.nom)) err(w, 'personnage sans nom')
    if (p.wikiUrl && !isUrl(p.wikiUrl)) warn(w, `lien invalide pour « ${p.nom} »`)
    expectEntity(w, p.ref, 'personne', `personnage « ${p.nom} »`)
  }
  const warKeys = new Set()
  for (const g of civ.guerres ?? []) {
    if (!isStr(g.nom)) {
      err(w, `guerre sans nom : ${JSON.stringify(g).slice(0, 80)}`)
      continue
    }
    // (un script relancé deux fois l'ajoutait en double : la fiche et le quiz montraient la guerre plusieurs fois)
    if (warKeys.has(`${g.nom}|${g.annee}`)) err(w, `guerre en double : « ${g.nom} » (${g.annee})`)
    warKeys.add(`${g.nom}|${g.annee}`)
    onlyFields(`${w} (guerre « ${g.nom} »)`, g, ['nom', 'annee', 'adversaires', 'allies', 'morts', 'vainqueur', 'consequences', 'wikiUrl'])
    if (g.wikiUrl && !isUrl(g.wikiUrl)) warn(w, `lien invalide pour « ${g.nom} »`)
    if (content.conflicts[g.nom]) usedConflicts.add(g.nom)
    else warn(w, `guerre sans lieu sur la carte : « ${g.nom} » (content/conflicts.json)`)
  }
  for (const doc of civ.documentaires ?? []) if (!isUrl(doc.url)) warn(w, `documentaire sans URL valide : ${doc.titre}`)

  if (civ.territories !== undefined && (!isArr(civ.territories) || !civ.territories.every(isStr)))
    err(w, '« territories » doit être une liste de noms de territoires')
  for (const n of civ.territories ?? []) {
    if (mapNames && !mapNames.has(n)) warn(w, `territoire « ${n} » absent de toutes les cartes (public/map/index.json)`)
    if (ignored.has(n)) err(w, `territoire « ${n} » à la fois relié ici et ignoré (content/ignore-territories.json)`)
  }
}

// ── Carte : conflits et territoires ignorés ──────────────────────────────────
for (const [nom, c] of Object.entries(content.conflicts)) {
  const w = `content/conflicts.json « ${nom} »`
  onlyFields(w, c, ['coords', 'lieu'])
  const [lon, lat] = isArr(c.coords) ? c.coords : []
  if (!isNum(lon) || !isNum(lat) || Math.abs(lon) > 180 || Math.abs(lat) > 90) err(w, '« coords » doit valoir [longitude, latitude]')
  optional(w, c, 'lieu', isStr, 'un texte')
  if (!usedConflicts.has(nom)) warn(w, 'aucune guerre de ce nom dans les fiches')
}
if (!isArr(content.ignoreTerritories)) err('content/ignore-territories.json', 'doit être un tableau de groupes { raison, noms }')
else
  for (const group of content.ignoreTerritories) {
    const w = `content/ignore-territories.json « ${group.raison ?? '?'} »`
    onlyFields(w, group, ['raison', 'noms'])
    if (!isStr(group.raison)) err(w, '« raison » manquante')
    if (!isArr(group.noms) || !group.noms.every(isStr)) err(w, '« noms » doit être une liste de noms de territoires')
    else if (mapNames) for (const n of group.noms) if (!mapNames.has(n)) warn(w, `« ${n} » absent de toutes les cartes`)
  }

// ── Liens [[id]] dans tous les textes ─────────────────────────────────────────
function checkLinks(where, value) {
  if (typeof value === 'string') {
    if (!value.includes('[[') && !value.includes(']]')) return
    for (const e of linkSyntaxErrors(value)) err(where, `${e} : « ${value.slice(0, 70)}… »`)
    for (const p of parseLinks(value))
      if (p.id !== undefined && ID.test(p.id) && !content.civs.has(p.id) && !content.entities.has(p.id))
        err(where, `lien vers une fiche inexistante « [[${p.id}]] »`)
  } else if (value && typeof value === 'object') for (const v of Object.values(value)) checkLinks(where, v)
}
for (const { file, data } of content.civs.values()) checkLinks(`content/${file}`, data)
for (const { file, data } of content.entityFiles) checkLinks(`content/${file}`, data)

// ── Bilan ────────────────────────────────────────────────────────────────────
if (warnings.length) {
  console.warn(`\n⚠️  ${warnings.length} alerte(s) de contenu :`)
  for (const m of warnings) console.warn('   · ' + m)
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) bloquante(s) :`)
  for (const m of errors) console.error('   · ' + m)
  process.exit(1)
}
const count = (t) => content.entityFiles.filter((e) => e.type === t).length
console.log(
  `\n✅ Contenu valide : ${content.epochs.length} époques, ${content.civs.size} civilisations, ` +
    `${content.entityFiles.length} fiches liées (${count('personne')} personnes, ${count('evenement')} événements, ${count('decouverte')} découvertes).`
)
