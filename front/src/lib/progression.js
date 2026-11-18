/**
 * progression.js — Progression de l'Aventure (V3.1, sprint 29), en fonctions pures
 * =================================================================================
 * Le store (src/store/progress.js, clé `histomap_progress`, version 5) garde un objet `aventure`
 * et le fait évoluer avec ces fonctions. Chacune prend l'état et renvoie { av, evenements } :
 * les événements (xp, découverte, étoiles, niveau, rang, titre, fil terminé, série…) servent aux
 * écrans de fin d'étape et de célébration. Rien ici ne touche au navigateur : tout est testé par
 * scripts/test-aventure.mjs.
 *
 * aventure = {
 *   xp,                                   XP totale
 *   salles: { [civId]: { decouverte, approfondi, etoiles, essais, enCours } }   (voir lib/aventure.js)
 *   serie: { jours, record, dernier, jokers }     série de jours, jokers en réserve
 *   joursJoues,                           nombre de jours où l'on a joué (Profil, v5)
 *   niveauCredite,                        dernier niveau dont les récompenses ont été données
 *   titres: [id], titreAffiche,           titres de collection obtenus (lib/aventure.js) / affiché
 *   filRouge,                             lignée choisie : ses annexes entrent dans le chemin du joueur
 *   ouvertes: [id],                       salles gardées ouvertes lors d'un changement de fil (rien ne se referme)
 *   jalons: [id],                         récompenses uniques déjà données (« onboarding »)
 *   bonusJour, aRevoirJour,               derniers jours où ces bonus ont été donnés
 *   onboarding,                           true une fois le premier lancement terminé (ou passé)
 * }
 */
import {
  SALLE_VIDE,
  estOuvert,
  estTronc,
  etoilesEpreuve,
  etoilesSur20,
  filDe,
  filTermine,
  mondeOuvert,
  salleDe,
  titresObtenus,
} from './aventure.js'
import { BAREME, PALIERS_SERIE, emplacementsJokers, gainReponse, jokerDeSerie, niveau, recompensesNiveau } from './xp.js'

export const aventureVide = () => ({
  xp: 0,
  salles: {},
  serie: { jours: 0, record: 0, dernier: null, jokers: 0 },
  joursJoues: 0,
  niveauCredite: 1,
  titres: [],
  titreAffiche: null,
  filRouge: null,
  ouvertes: [],
  jalons: [],
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

const ouvertes = (P, av) => P.ordre.filter((id) => estOuvert(P, av, id))

// ── XP, niveaux, rangs ─────────────────────────────────────────────────────────

/** Ajoute de l'XP et donne les récompenses des niveaux atteints (rangs, jokers). */
export function gagnerXp(av, montant, raison) {
  if (!montant) return { av, evenements: [] }
  return crediterNiveaux({ ...av, xp: av.xp + montant }, [{ type: 'xp', montant, raison }])
}

/** Donne les récompenses des niveaux atteints depuis le dernier crédit : un événement par niveau, un par nouveau rang. */
function crediterNiveaux(av, evenements) {
  let next = av
  const n = niveau(next.xp).niveau
  while (next.niveauCredite < n) {
    const k = next.niveauCredite + 1
    const recompenses = recompensesNiveau(k)
    next = { ...next, niveauCredite: k }
    evenements.push({ type: 'niveau', niveau: k, recompenses })
    const r = recompenses.find((x) => x.type === 'rang')
    if (r) evenements.push({ type: 'rang', niveau: k, rang: r.nom })
    for (const x of recompenses) if (x.type === 'joker') next = ajouterJokers(next, 1, evenements)
  }
  return { av: next, evenements }
}

/** Ajoute des jokers dans la limite des places du niveau actuel. */
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
 * (le record reste). Un joker tous les 7 jours ; un palier (3, 7, 14… jours) atteint pour la
 * première fois rapporte 50 XP.
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
  let next = { ...av, serie: { ...s, jours, jokers, dernier: jour, record: Math.max(s.record, jours) }, joursJoues: (av.joursJoues ?? 0) + 1 }
  evenements.push({ type: 'serie', jours })
  if (jokerDeSerie(jours)) next = ajouterJokers(next, 1, evenements)
  if (PALIERS_SERIE.includes(jours) && jours > s.record) {
    evenements.push({ type: 'palier', jours })
    const r = gagnerXp(next, BAREME.palierSerie, 'palier')
    next = r.av
    evenements.push(...r.evenements)
  }
  return { av: next, evenements }
}

/**
 * État de la série un jour donné (Profil ; rappel « série en danger » au sprint 33). La série enregistrée
 * n'est mise à jour qu'à l'activité suivante : elle peut déjà être perdue, ou ne tenir qu'à des jokers.
 *   → { statut, jours, jokers }
 *   statut : 'aucune' (jamais commencée) · 'faite' (déjà jouée ce jour-là) · 'a-prolonger' (jouée la veille)
 *            · 'a-sauver' (jours manqués couverts par les jokers, qui seront utilisés) · 'perdue'
 *   jours  : la série qui compte encore (0 si elle est perdue) ; jokers : jokers qu'il faudra utiliser
 */
export function etatSerie(serie, jour) {
  const s = serie ?? {}
  if (!s.dernier || !s.jours) return { statut: 'aucune', jours: 0, jokers: 0 }
  const ecart = ecartJours(s.dernier, jour)
  if (ecart <= 0) return { statut: 'faite', jours: s.jours, jokers: 0 }
  if (ecart === 1) return { statut: 'a-prolonger', jours: s.jours, jokers: 0 }
  if ((s.jokers ?? 0) >= ecart - 1) return { statut: 'a-sauver', jours: s.jours, jokers: ecart - 1 }
  return { statut: 'perdue', jours: 0, jokers: 0 }
}

/** Bonus du jour (+20 XP) à la 1re étape terminée de la journée, et série. */
function activiteDuJour(av, jour) {
  let { av: next, evenements } = enregistrerActivite(av, jour)
  if (next.bonusJour !== jour) {
    next = { ...next, bonusJour: jour }
    const r = gagnerXp(next, BAREME.bonusJour, 'bonus-jour')
    next = r.av
    evenements = [...evenements, ...r.evenements]
  }
  return { av: next, evenements }
}

// ── Étapes d'une salle ───────────────────────────────────────────────────────

/** Note le début d'une étape (« Reprendre » ; pour une annexe, la mini-épreuve après les cartes). */
export function commencerEtape(av, civId, etape) {
  return { ...av, salles: { ...av.salles, [civId]: { ...salleDe(av, civId), enCours: etape } } }
}

/** Ce qui change autour d'une action (ouvertures, mondes, fil terminé, titres) entre deux états. */
function consequences(P, avant, apres) {
  const evenements = []
  const etaient = new Set(ouvertes(P, avant))
  const nouvelles = ouvertes(P, apres).filter((id) => !etaient.has(id))
  if (nouvelles.length) evenements.push({ type: 'ouverture', salles: nouvelles })
  P.mondes.forEach((m, w) => {
    if (w > 0 && !mondeOuvert(P, avant, w) && mondeOuvert(P, apres, w)) evenements.push({ type: 'monde-ouvert', monde: w, epoque: m.epoque })
  })
  // Fil rouge du joueur terminé (toutes ses salles découvertes) : célébration, titre s'il est déjà mérité
  const fil = filDe(P, apres.filRouge)
  if (fil && !filTermine(avant, fil) && filTermine(apres, fil)) {
    const manque = fil.membres.filter((id) => (apres.salles[id]?.etoiles ?? 0) < 1).length
    evenements.push({ type: 'fil-termine', fil: fil.id, label: fil.label, titre: fil.titre, merite: manque === 0, manque })
  }
  let next = apres
  for (const t of titresObtenus(P, apres)) {
    if (next.titres.includes(t.id)) continue
    next = { ...next, titres: [...next.titres, t.id] }
    const xp = t.type === 'monde' ? BAREME.monde : t.type === 'filRouge' ? BAREME.filRouge : 0
    evenements.push({ type: 'titre', id: t.id, titre: t.titre, sorte: t.type, xp })
    const r = gagnerXp(next, xp, 'titre')
    next = r.av
    evenements.push(...r.evenements)
  }
  return { av: next, evenements }
}

/** Fin commune d'une étape : bonus du jour, série, conséquences. */
function finEtape(P, avant, next, evenements, jour) {
  let r = activiteDuJour(next, jour)
  const evs = [...evenements, ...r.evenements]
  r = consequences(P, avant, r.av)
  return { av: r.av, evenements: [...evs, ...r.evenements] }
}

/**
 * Découvrir ou Approfondir terminé dans une salle du tronc. `eclairs` = questions éclair justes.
 * 1re fois : 40 / 60 XP + 5 par question éclair ; ensuite 10 XP. Découvrir ouvre la salle suivante.
 */
export function terminerEtape(av, P, civId, etape, { eclairs = 0 } = {}, jour) {
  const s = salleDe(av, civId)
  const champ = etape === 'decouvrir' ? 'decouverte' : 'approfondi'
  const premiere = !s[champ]
  let next = { ...av, salles: { ...av.salles, [civId]: { ...s, [champ]: true, enCours: null } } }
  const evenements = premiere ? [{ type: etape === 'decouvrir' ? 'decouverte' : 'approfondi', civId }] : []
  const r = gagnerXp(next, premiere ? BAREME[etape] + BAREME.eclair * eclairs : BAREME.rejouerEtape, etape)
  return finEtape(P, av, r.av, [...evenements, ...r.evenements], jour)
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
 * Épreuve (tronc, 12 questions) ou mini-épreuve d'annexe (8) terminée : `correct` sur `total`,
 * `justes` = réponses dans l'ordre (combo).
 *   - annexe : la séance est terminée → annexe découverte (1re fois : +30 XP), quelle que soit la note ;
 *   - réussie (au moins ★) : XP des réponses avec le combo, moitié en rejeu (salle déjà étoilée) ;
 *     1re réussite +50 (annexe +30) ; +25 par nouvelle étoile (annexe +15) ;
 *   - ratée : 2 XP par bonne réponse, sans combo.
 */
export function terminerEpreuve(av, P, civId, { correct, total, justes = [] }, jour) {
  const annexe = !estTronc(P, civId)
  const s = salleDe(av, civId)
  const nb = etoilesEpreuve(correct, total)
  const rejeu = s.etoiles >= 1
  let next = { ...av, salles: { ...av.salles, [civId]: { ...s, decouverte: true, essais: s.essais + 1, etoiles: Math.max(s.etoiles, nb), enCours: null } } }
  const evenements = []
  const gagner = (montant, raison) => {
    const r = gagnerXp(next, montant, raison)
    next = r.av
    evenements.push(...r.evenements)
  }
  if (annexe && !s.decouverte) {
    evenements.push({ type: 'decouverte', civId })
    gagner(BAREME.annexe, 'annexe')
  }
  gagner(nb >= 1 ? xpReponses(justes, { rejeu }) : BAREME.reponseEchec * correct, 'epreuve')
  if (nb >= 1 && s.etoiles === 0) {
    evenements.push({ type: 'reussite', civId })
    gagner(annexe ? BAREME.reussiteAnnexe : BAREME.reussite, 'reussite')
  }
  if (nb > s.etoiles) {
    evenements.push({ type: 'etoiles', civId, etoiles: nb, nouvelles: nb - s.etoiles })
    gagner((annexe ? BAREME.etoileAnnexe : BAREME.etoile) * (nb - s.etoiles), 'etoiles')
  }
  return finEtape(P, av, next, evenements, jour)
}

// ── Fil rouge ────────────────────────────────────────────────────────────────

/**
 * Choisir (ou changer de) fil rouge : ses annexes entrent dans le chemin. Rien ne se referme :
 * les salles ouvertes qui se refermeraient avec le nouveau chemin sont gardées dans `ouvertes` ;
 * les salles du nouveau fil placées derrière le joueur deviennent « à rattraper » (lib/aventure.js).
 */
export function changerFil(av, P, filId = null) {
  if ((av.filRouge ?? null) === (filId ?? null)) return { av, evenements: [] }
  const avant = ouvertes(P, av)
  let next = { ...av, filRouge: filId }
  const fermees = avant.filter((id) => !estOuvert(P, next, id))
  if (fermees.length) next = { ...next, ouvertes: [...new Set([...(av.ouvertes ?? []), ...fermees])] }
  const etaient = new Set(avant)
  const nouvelles = ouvertes(P, next).filter((id) => !etaient.has(id))
  return { av: next, evenements: nouvelles.length ? [{ type: 'ouverture', salles: nouvelles }] : [] }
}

// ── Autres gains ─────────────────────────────────────────────────────────────

/** Fiche lue pour la 1re fois dans l'Atlas : +5 XP. */
export const ficheLue = (av, premiereFois) => (premiereFois ? gagnerXp(av, BAREME.ficheLue, 'fiche') : { av, evenements: [] })

/** Quiz express : 5 XP par bonne réponse au-delà du meilleur score précédent. */
export const quizExpress = (av, ancienMeilleur, justes) => gagnerXp(av, BAREME.express * Math.max(0, justes - (ancienMeilleur ?? 0)), 'express')

/** Séance « À revoir » : +20 XP une fois par jour, et compte pour la série. */
export function seanceARevoir(av, jour) {
  let { av: next, evenements } = enregistrerActivite(av, jour)
  if (next.aRevoirJour === jour) return { av: next, evenements }
  next = { ...next, aRevoirJour: jour }
  const r = gagnerXp(next, BAREME.aRevoir, 'a-revoir')
  return { av: r.av, evenements: [...evenements, ...r.evenements] }
}

/**
 * Premier lancement terminé (fil rouge choisi, 3 questions éclair) : +50 XP et 1er jour de série,
 * une seule fois. Passé ou revu plus tard : marqué terminé, sans récompense.
 */
export function finOnboarding(av, P, { filRouge = null, recompense = true } = {}, jour) {
  let next = { ...av, onboarding: true }
  if (filRouge && filRouge !== av.filRouge) next = changerFil(next, P, filRouge).av
  if (!recompense || next.jalons.includes('onboarding')) return { av: next, evenements: [] }
  next = { ...next, jalons: [...next.jalons, 'onboarding'] }
  const r1 = enregistrerActivite(next, jour)
  const r2 = gagnerXp(r1.av, BAREME.onboarding, 'onboarding')
  return { av: r2.av, evenements: [...r1.evenements, ...r2.evenements] }
}

// ── Migrations ───────────────────────────────────────────────────────────────

/** Jokers des niveaux de..à (sans célébration). */
function jokersDesNiveaux(de, a) {
  let jokers = 0
  for (let k = de; k <= a; k++) jokers += recompensesNiveau(k).filter((r) => r.type === 'joker').length
  return jokers
}

/** Titres déjà mérités, fil rouge (avec les salles à rattraper) : derniers réglages d'une migration. */
function finMigration(av, P, filRouge) {
  let next = { ...av, filRouge: null }
  next = changerFil(next, P, filRouge && filDe(P, filRouge) ? filRouge : null).av
  const titres = titresObtenus(P, next).map((t) => t.id)
  return { ...next, titres: [...new Set([...next.titres, ...titres])] }
}

/**
 * Migration v4 → v5 (sprint 32) : nombre de jours joués, affiché dans le Profil. Il n'était pas compté :
 * estimation prudente = le plus grand du record de série et des jours d'activité gardés (`days`, 60 au plus).
 */
export function migrerV4(av, days = []) {
  return { ...av, joursJoues: Math.max(av.joursJoues ?? 0, av.serie?.record ?? 0, new Set(days ?? []).size) }
}

/**
 * Migration v3 → v4 (V3 → V3.1), décision 27 : médaille ≥ bronze → salle découverte ; argent dans le
 * tronc → Approfondir fait ; meilleure note d'épreuve sur 20 → étoiles (15 → ★, 17 → ★★, 19 → ★★★) ;
 * XP, série, jokers, niveau crédité, titres, titre affiché, fil rouge et bonus du jour gardés ;
 * coffres, cosmétiques, récompenses et objectif de la semaine retirés. Une étape en cours repart à zéro.
 * La courbe des niveaux est plus douce qu'en V3 : les niveaux gagnés ainsi sont crédités sans célébration
 * (leurs jokers compris).
 */
export function migrerV3(ancien = {}, P) {
  const av = aventureVide()
  for (const [id, s] of Object.entries(ancien.salles ?? {})) {
    if (!P.monde.has(id)) continue
    const medaille = s?.medaille ?? 0
    const salle = {
      ...SALLE_VIDE,
      decouverte: medaille >= 1,
      approfondi: estTronc(P, id) && medaille >= 2,
      etoiles: etoilesSur20(s?.meilleur),
      essais: s?.essais ?? 0,
    }
    if (salle.decouverte || salle.essais) av.salles[id] = salle
  }
  av.xp = Math.max(0, ancien.xp ?? 0)
  const serie = ancien.serie ?? {}
  av.serie = { jours: serie.jours ?? 0, record: serie.record ?? 0, dernier: serie.dernier ?? null, jokers: serie.jokers ?? 0 }
  const n = niveau(av.xp).niveau
  const credite = Math.max(1, ancien.niveauCredite ?? n)
  if (n > credite) av.serie.jokers = Math.min(emplacementsJokers(n), av.serie.jokers + jokersDesNiveaux(credite + 1, n))
  av.niveauCredite = Math.max(credite, n)
  av.titres = (ancien.titres ?? []).filter((t) => typeof t === 'string')
  av.bonusJour = ancien.bonusJour ?? null
  av.aRevoirJour = ancien.aRevoirJour ?? null
  av.onboarding = Boolean(ancien.onboarding)
  av.jalons = (ancien.coffres ?? []).includes('onboarding') ? ['onboarding'] : []
  const next = finMigration(av, P, ancien.filRouge ?? null)
  next.titreAffiche = next.titres.includes(ancien.titreAffiche) ? ancien.titreAffiche : null
  return next
}

/**
 * Migration v2 → v4 (avant la V3) : crédite ce qui a déjà été fait, sans célébrations rétroactives.
 *   chapitre terminé une fois → salle découverte ; deux fois (cartes de niveau 2 vues) → Approfondir fait ;
 *   quiz réussi (meilleure note ≥ 15/20) → étoiles (15 → ★, 17 → ★★, 19 → ★★★).
 *   XP : 40 / 60 / 50 + 10 par point de la meilleure note + 25 par étoile ; 5 par fiche lue et par
 *   bonne réponse de quiz express. Série reprise des jours d'activité, jokers des niveaux atteints.
 */
export function migrerV2(ancien, P, jour) {
  const av = aventureVide()
  let xp = 0
  const ids = new Set([...Object.keys(ancien.chapters ?? {}), ...Object.keys(ancien.quizzes ?? {})])
  for (const id of ids) {
    if (!P.monde.has(id)) continue
    const rounds = ancien.chapters?.[id]?.rounds ?? 0
    const q = ancien.quizzes?.[id]
    const etoiles = etoilesSur20(q?.best)
    const salle = { ...SALLE_VIDE, decouverte: rounds >= 1 || etoiles >= 1, approfondi: estTronc(P, id) && rounds >= 2, etoiles, essais: q?.attempts ?? 0 }
    if (salle.decouverte) xp += BAREME.decouvrir
    if (salle.approfondi) xp += BAREME.approfondir
    if (etoiles) xp += BAREME.reussite + 10 * q.best + BAREME.etoile * etoiles
    if (salle.decouverte || salle.essais) av.salles[id] = salle
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
  const n = niveau(xp).niveau
  av.serie = { jours: serie, record: serie, dernier: serie ? jours.at(-1) : null, jokers: Math.min(jokersDesNiveaux(2, n), emplacementsJokers(n)) }
  av.niveauCredite = n
  // Un utilisateur qui a déjà joué ne repasse pas par l'onboarding
  av.onboarding = Boolean(ids.size || Object.keys(ancien.fiches ?? {}).length)
  return finMigration(av, P, null)
}
