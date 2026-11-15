/**
 * progression.js — Progression de l'Aventure (V3), en fonctions pures
 * =====================================================================
 * Le store (src/store/progress.js, clé `histomap_progress`, version 3) garde un objet
 * `aventure` et le fait évoluer avec ces fonctions. Chacune prend l'état et renvoie
 * { av, evenements } : les événements (xp, médaille, niveau, coffre, titre, série…)
 * serviront aux écrans de célébration (sprints 21-22). Rien ici ne touche au navigateur :
 * tout est testé par scripts/test-aventure.mjs.
 *
 * aventure = {
 *   xp,                                   XP totale
 *   salles: { [civId]: { medaille, meilleur, essais, enCours } }   (voir lib/aventure.js)
 *   serie: { jours, record, dernier, jokers }     série de jours, jokers en réserve
 *   niveauCredite,                        dernier niveau dont les récompenses ont été données
 *   titres: [id], titreAffiche,           titres de collection obtenus (lib/aventure.js) / affiché
 *   recompenses: [id],                    sceaux, cadres, effets, thèmes… obtenus (lib/xp.js)
 *   cosmetiques: { sceau, cadre, effet, theme }   choisis dans le Profil (null = par défaut)
 *   coffres: [id],                        coffres déjà ouverts (un coffre ne s'ouvre qu'une fois)
 *   semaine: { debut, xp, objectif, coffre }      objectif d'XP de la semaine (lundi → dimanche)
 *   filRouge,                             lignée choisie à l'onboarding (objectif personnel)
 *   bonusJour, aRevoirJour,               derniers jours où ces bonus ont été donnés
 *   onboarding,                           true une fois le premier lancement terminé (ou passé)
 * }
 */
import { MEDAILLE, estOuvert, etoiles, mondeOuvert, titresObtenus } from './aventure.js'
import { BAREME, PALIERS_SERIE, emplacementsJokers, gainReponse, jokerDeSerie, niveau, petitCoffre, recompensesNiveau } from './xp.js'

export const OBJECTIFS_SEMAINE = [300, 600, 1000]

export const aventureVide = () => ({
  xp: 0,
  salles: {},
  serie: { jours: 0, record: 0, dernier: null, jokers: 0 },
  niveauCredite: 1,
  titres: [],
  titreAffiche: null,
  recompenses: [],
  cosmetiques: { sceau: null, cadre: null, effet: null, theme: null },
  coffres: [],
  semaine: { debut: null, xp: 0, objectif: 600, coffre: false },
  filRouge: null,
  bonusJour: null,
  aRevoirJour: null,
  onboarding: false,
})

// ── Dates (« AAAA-MM-JJ », calculées en UTC pour éviter les surprises d'heure d'été) ──
const utc = (jour) => {
  const [y, m, d] = jour.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}
export const ecartJours = (a, b) => Math.round((utc(b) - utc(a)) / 86400000)
export function lundi(jour) {
  const t = new Date(utc(jour))
  const dow = (t.getUTCDay() + 6) % 7 // lundi = 0
  t.setUTCDate(t.getUTCDate() - dow)
  return t.toISOString().slice(0, 10)
}

const medal = (av, id) => av.salles[id]?.medaille ?? MEDAILLE.AUCUNE
const ouvertes = (P, av) => P.ordre.filter((id) => estOuvert(P, av.salles, id))

// ── XP, niveaux, semaine ───────────────────────────────────────────────────────

/** Ajoute de l'XP (et gère semaine, passages de niveau, récompenses et coffres de niveau). */
export function gagnerXp(av, montant, raison, jour) {
  if (!montant) return { av, evenements: [] }
  const evenements = [{ type: 'xp', montant, raison }]
  let semaine = av.semaine.debut === lundi(jour) ? av.semaine : { ...av.semaine, debut: lundi(jour), xp: 0, coffre: false }
  semaine = { ...semaine, xp: semaine.xp + montant }
  let next = { ...av, xp: av.xp + montant, semaine }

  // Objectif de la semaine atteint : coffre de la semaine (bonus d'XP + 1 joker)
  if (!semaine.coffre && semaine.xp >= semaine.objectif) {
    next = { ...next, semaine: { ...semaine, coffre: true } }
    const c = petitCoffre(`semaine:${semaine.debut}`)
    evenements.push({ type: 'coffre', id: `semaine:${semaine.debut}`, sorte: 'semaine', xp: c.xp, joker: true })
    next = ajouterJokers(next, 1, evenements)
    const r = gagnerXp(next, c.xp, 'coffre', jour)
    next = r.av
    evenements.push(...r.evenements)
  }
  return crediterNiveaux(next, evenements)
}

/** Donne les récompenses des niveaux atteints depuis le dernier crédit. */
function crediterNiveaux(av, evenements) {
  let next = av
  let n = niveau(next.xp).niveau
  while (next.niveauCredite < n) {
    const k = next.niveauCredite + 1
    const recompenses = recompensesNiveau(k)
    next = { ...next, niveauCredite: k }
    evenements.push({ type: 'niveau', niveau: k, recompenses })
    for (const r of recompenses) {
      if (r.type === 'joker') next = ajouterJokers(next, 1, evenements)
      else if (r.type === 'coffre') {
        const c = petitCoffre(r.id)
        evenements.push({ type: 'coffre', id: r.id, sorte: 'niveau', xp: c.xp, joker: c.joker })
        if (c.joker) next = ajouterJokers(next, 1, evenements)
        next = { ...next, xp: next.xp + c.xp, semaine: { ...next.semaine, xp: next.semaine.xp + c.xp }, coffres: [...next.coffres, r.id] }
      } else if (r.type !== 'rang' && !next.recompenses.includes(r.id)) next = { ...next, recompenses: [...next.recompenses, r.id] }
    }
    n = niveau(next.xp).niveau // un coffre de niveau peut faire passer un niveau de plus
  }
  return { av: next, evenements }
}

/** Ajoute des jokers dans la limite des emplacements du niveau actuel. */
function ajouterJokers(av, nombre, evenements) {
  const max = emplacementsJokers(niveau(av.xp).niveau)
  const jokers = Math.min(max, av.serie.jokers + nombre)
  if (jokers > av.serie.jokers) evenements.push({ type: 'joker', gagnes: jokers - av.serie.jokers })
  return { ...av, serie: { ...av.serie, jokers } }
}

// ── Série de jours ───────────────────────────────────────────────────────────

/**
 * Activité un jour donné (étape terminée, séance « À revoir ») : prolonge la série.
 * Un ou plusieurs jours manqués consomment des jokers ; sans assez de jokers, la série repart à 1
 * (le record reste). Un joker est gagné tous les 7 jours ; les paliers ouvrent un petit coffre.
 */
export function enregistrerActivite(av, jour) {
  const evenements = []
  const s = av.serie
  if (s.dernier === jour) return { av, evenements }
  let jours = 1
  let jokers = s.jokers
  if (s.dernier) {
    const manques = ecartJours(s.dernier, jour) - 1
    if (manques <= 0) jours = s.jours + 1
    else if (jokers >= manques) {
      jokers -= manques
      jours = s.jours + 1
      evenements.push({ type: 'joker-utilise', nombre: manques })
    } else if (s.jours > 0) evenements.push({ type: 'serie-perdue', jours: s.jours })
  }
  let next = { ...av, serie: { ...s, jours, jokers, dernier: jour, record: Math.max(s.record, jours) } }
  evenements.push({ type: 'serie', jours })
  if (jokerDeSerie(jours)) next = ajouterJokers(next, 1, evenements)
  const id = `serie:${jours}`
  if (PALIERS_SERIE.includes(jours) && !next.coffres.includes(id)) {
    const c = petitCoffre(id)
    next = { ...next, coffres: [...next.coffres, id] }
    evenements.push({ type: 'coffre', id, sorte: 'serie', xp: c.xp, joker: c.joker })
    if (c.joker) next = ajouterJokers(next, 1, evenements)
    const r = gagnerXp(next, c.xp, 'coffre', jour)
    next = r.av
    evenements.push(...r.evenements)
  }
  return { av: next, evenements }
}

/** Bonus du jour (+20 XP) à la 1re étape terminée de la journée, et série. */
function activiteDuJour(av, jour) {
  const evenements = []
  let r = enregistrerActivite(av, jour)
  let next = r.av
  evenements.push(...r.evenements)
  if (next.bonusJour !== jour) {
    next = { ...next, bonusJour: jour }
    r = gagnerXp(next, BAREME.bonusJour, 'bonus-jour', jour)
    next = r.av
    evenements.push(...r.evenements)
  }
  return { av: next, evenements }
}

// ── Étapes d'une salle ───────────────────────────────────────────────────────

/** Note le début d'une étape (pour « Reprendre » dans l'étape du jour). */
export function commencerEtape(av, civId, etape) {
  return { ...av, salles: { ...av.salles, [civId]: { medaille: 0, meilleur: null, essais: 0, ...av.salles[civId], enCours: etape } } }
}

/** Ce qui change autour d'une salle (ouvertures, mondes, titres) entre deux états. */
function consequences(P, avant, apres, jour) {
  const evenements = []
  const etaient = new Set(ouvertes(P, avant))
  const nouvelles = ouvertes(P, apres).filter((id) => !etaient.has(id))
  if (nouvelles.length) evenements.push({ type: 'ouverture', salles: nouvelles })
  P.mondes.forEach((m, w) => {
    if (w > 0 && !mondeOuvert(P, avant.salles, w) && mondeOuvert(P, apres.salles, w)) evenements.push({ type: 'monde-ouvert', monde: w, epoque: m.epoque })
  })
  let next = apres
  for (const t of titresObtenus(P, apres.salles)) {
    if (next.titres.includes(t.id)) continue
    next = { ...next, titres: [...next.titres, t.id] }
    const xp = t.type === 'monde' ? BAREME.monde : t.type === 'filRouge' ? BAREME.filRouge : 0
    evenements.push({ type: 'titre', id: t.id, titre: t.titre, sorte: t.type, xp, ...(t.theme ? { theme: t.theme } : {}) })
    if (t.theme && !next.recompenses.includes(`theme:${t.theme}`)) next = { ...next, recompenses: [...next.recompenses, `theme:${t.theme}`] }
    next = { ...next, coffres: [...next.coffres, `titre:${t.id}`] }
    const r = gagnerXp(next, xp, 'coffre', jour)
    next = r.av
    evenements.push(...r.evenements)
  }
  return { av: next, evenements }
}

/**
 * Découvrir ou Approfondir terminé. `eclairs` = questions éclair justes.
 * 1re fois : 40 / 60 XP + 5 par question éclair ; ensuite 10 XP.
 */
export function terminerEtape(av, P, civId, etape, { eclairs = 0 } = {}, jour) {
  const cible = etape === 'decouvrir' ? MEDAILLE.BRONZE : MEDAILLE.ARGENT
  const avant = medal(av, civId)
  const premiere = avant < cible
  const salle = { medaille: 0, meilleur: null, essais: 0, ...av.salles[civId] }
  let next = { ...av, salles: { ...av.salles, [civId]: { ...salle, medaille: Math.max(avant, cible), enCours: null } } }
  const evenements = []
  if (premiere) evenements.push({ type: 'medaille', civId, medaille: cible })
  const xp = premiere ? BAREME[etape] + BAREME.eclair * eclairs : BAREME.rejouerEtape
  let r = gagnerXp(next, xp, etape, jour)
  next = r.av
  evenements.push(...r.evenements)
  r = activiteDuJour(next, jour)
  next = r.av
  evenements.push(...r.evenements)
  r = consequences(P, av, next, jour)
  return { av: r.av, evenements: [...evenements, ...r.evenements] }
}

/** XP des réponses d'une épreuve, combo compris (`justes` : liste de booléens dans l'ordre). */
export function xpReponses(justes, { rejeu = false } = {}) {
  let serie = 0
  let xp = 0
  for (const ok of justes) {
    serie = ok ? serie + 1 : 0
    if (ok) xp += gainReponse(serie, { rejeu })
  }
  return xp
}

/**
 * Épreuve terminée : `note` sur 20, `justes` = réponses dans l'ordre (pour le combo).
 * Réussie (≥ 15) : or (1re fois : +50 XP et petit coffre), +25 XP par nouvelle étoile.
 */
export function terminerEpreuve(av, P, civId, note, justes, jour) {
  const salle = { medaille: 0, meilleur: null, essais: 0, ...av.salles[civId] }
  const rejeu = salle.essais > 0
  const evenements = []
  let next = {
    ...av,
    salles: { ...av.salles, [civId]: { ...salle, essais: salle.essais + 1, meilleur: Math.max(salle.meilleur ?? 0, note), enCours: null } },
  }
  // Épreuve ratée : gain fortement réduit (2 XP par bonne réponse, sans combo)
  const xpRep = note >= 15 ? xpReponses(justes, { rejeu }) : BAREME.reponseEchec * justes.filter(Boolean).length
  let r = gagnerXp(next, xpRep, 'epreuve', jour)
  next = r.av
  evenements.push(...r.evenements)
  if (note >= 15) {
    if (salle.medaille < MEDAILLE.OR) {
      next = { ...next, salles: { ...next.salles, [civId]: { ...next.salles[civId], medaille: MEDAILLE.OR } } }
      evenements.push({ type: 'medaille', civId, medaille: MEDAILLE.OR })
      r = gagnerXp(next, BAREME.or, 'or', jour)
      next = r.av
      evenements.push(...r.evenements)
      const id = `or:${civId}`
      if (!next.coffres.includes(id)) {
        const c = petitCoffre(id)
        next = { ...next, coffres: [...next.coffres, id] }
        evenements.push({ type: 'coffre', id, sorte: 'salle', xp: c.xp, joker: c.joker })
        if (c.joker) next = ajouterJokers(next, 1, evenements)
        r = gagnerXp(next, c.xp, 'coffre', jour)
        next = r.av
        evenements.push(...r.evenements)
      }
    }
    const nouvelles = etoiles(note) - etoiles(salle.meilleur ?? 0)
    if (nouvelles > 0) {
      evenements.push({ type: 'etoiles', civId, etoiles: etoiles(note) })
      r = gagnerXp(next, BAREME.etoile * nouvelles, 'etoiles', jour)
      next = r.av
      evenements.push(...r.evenements)
    }
  }
  r = activiteDuJour(next, jour)
  next = r.av
  evenements.push(...r.evenements)
  r = consequences(P, av, next, jour)
  return { av: r.av, evenements: [...evenements, ...r.evenements] }
}

// ── Autres gains ─────────────────────────────────────────────────────────────

/** Fiche lue pour la 1re fois dans l'Atlas : +5 XP. */
export const ficheLue = (av, premiereFois, jour) => (premiereFois ? gagnerXp(av, BAREME.ficheLue, 'fiche', jour) : { av, evenements: [] })

/** Quiz express : 5 XP par bonne réponse au-delà du meilleur score précédent. */
export const quizExpress = (av, ancienMeilleur, justes, jour) => gagnerXp(av, BAREME.express * Math.max(0, justes - (ancienMeilleur ?? 0)), 'express', jour)

/** Séance « À revoir » : +20 XP une fois par jour, et compte pour la série. */
export function seanceARevoir(av, jour) {
  let { av: next, evenements } = enregistrerActivite(av, jour)
  if (next.aRevoirJour === jour) return { av: next, evenements }
  next = { ...next, aRevoirJour: jour }
  const r = gagnerXp(next, BAREME.aRevoir, 'a-revoir', jour)
  return { av: r.av, evenements: [...evenements, ...r.evenements] }
}

/**
 * Premier lancement terminé (fil rouge choisi, 3 questions éclair) : +50 XP et 1er jour de série,
 * une seule fois. Passé ou revu plus tard : marqué terminé, sans récompense.
 */
export function finOnboarding(av, { filRouge = null, recompense = true } = {}, jour) {
  let next = { ...av, onboarding: true, filRouge: filRouge ?? av.filRouge }
  if (!recompense || av.coffres.includes('onboarding')) return { av: next, evenements: [] }
  next = { ...next, coffres: [...next.coffres, 'onboarding'] }
  const r1 = enregistrerActivite(next, jour)
  const r2 = gagnerXp(r1.av, BAREME.onboarding, 'onboarding', jour)
  return { av: r2.av, evenements: [...r1.evenements, ...r2.evenements] }
}

/** Objectif de la semaine (300, 600 ou 1 000 XP). */
export const choisirObjectif = (av, objectif) => (OBJECTIFS_SEMAINE.includes(objectif) ? { ...av, semaine: { ...av.semaine, objectif } } : av)

// ── Migration depuis la version 2 (avant la V3) ──────────────────────────────

/**
 * Crédite ce qui a déjà été fait, sans célébrations rétroactives :
 *   chapitre terminé une fois → bronze ; deux fois (cartes de niveau 2 vues) → argent ;
 *   quiz réussi (meilleure note ≥ 15) → or. XP : 40 / 60 / 50 + 10 par point de la meilleure
 *   note + 25 par étoile ; 5 par fiche lue et par bonne réponse de quiz express.
 *   Série reprise des jours d'activité, jokers des niveaux atteints, titres déjà mérités notés.
 */
export function migrerV2(ancien, P, jour) {
  const av = aventureVide()
  let xp = 0
  const ids = new Set([...Object.keys(ancien.chapters ?? {}), ...Object.keys(ancien.quizzes ?? {})])
  for (const id of ids) {
    if (!P.monde.has(id)) continue
    const rounds = ancien.chapters?.[id]?.rounds ?? 0
    const q = ancien.quizzes?.[id]
    let medaille = rounds >= 2 ? MEDAILLE.ARGENT : rounds >= 1 ? MEDAILLE.BRONZE : MEDAILLE.AUCUNE
    if ((q?.best ?? 0) >= 15) medaille = MEDAILLE.OR
    if (medaille >= MEDAILLE.BRONZE) xp += BAREME.decouvrir
    if (medaille >= MEDAILLE.ARGENT) xp += BAREME.approfondir
    if (medaille === MEDAILLE.OR) xp += BAREME.or + 10 * q.best + BAREME.etoile * etoiles(q.best)
    if (medaille || q?.attempts) {
      av.salles[id] = { medaille, meilleur: q?.best ?? null, essais: q?.attempts ?? 0, enCours: null }
      if (medaille === MEDAILLE.OR) av.coffres.push(`or:${id}`)
    }
  }
  xp += BAREME.ficheLue * Object.keys(ancien.fiches ?? {}).length
  xp += BAREME.express * Object.values(ancien.express ?? {}).reduce((n, e) => n + (e?.best ?? 0), 0)
  av.xp = xp

  // Série : jours consécutifs jusqu'à aujourd'hui ou hier
  const jours = [...new Set(ancien.days ?? [])].sort()
  let serie = 0
  if (jours.length && ecartJours(jours.at(-1), jour) <= 1) {
    serie = 1
    for (let i = jours.length - 1; i > 0 && ecartJours(jours[i - 1], jours[i]) === 1; i--) serie++
  }
  av.serie = { jours: serie, record: serie, dernier: serie ? jours.at(-1) : null, jokers: 0 }

  // Récompenses des niveaux déjà atteints, sans célébration ni coffre rétroactif
  const n = niveau(xp).niveau
  let jokers = 0
  for (let k = 2; k <= n; k++)
    for (const r of recompensesNiveau(k)) {
      if (r.type === 'joker') jokers++
      else if (r.type !== 'rang' && r.type !== 'coffre') av.recompenses.push(r.id)
    }
  av.serie.jokers = Math.min(jokers, emplacementsJokers(n))
  av.niveauCredite = n
  av.titres = titresObtenus(P, av.salles).map((t) => t.id)
  for (const t of titresObtenus(P, av.salles)) if (t.theme) av.recompenses.push(`theme:${t.theme}`)
  // Un utilisateur qui a déjà joué ne repasse pas par l'onboarding
  av.onboarding = Boolean(ids.size || Object.keys(ancien.fiches ?? {}).length)
  return av
}
