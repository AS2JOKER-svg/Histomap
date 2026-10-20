// Quiz express : 3 questions par fiche liée (personne, événement, découverte), générées au build
// à partir des données et écrites dans src/data/entities/<id>.json (champ « express »).
//
// Règle d'or : une seule bonne réponse possible. Les leurres viennent donc d'AUTRES continents
// (un lieu, un rôle ou une fiche liée d'un autre continent ne peut pas être aussi juste) et ne
// partagent ni mot important ni « famille » avec la bonne réponse (pas « Empereur » contre
// « Empereur romain », ni « Astronomie » contre « Calendrier »).
//
// Les ids (« x-date », « x-role »…) sont stables : la progression les mémorise.
// Format des questions = celui de src/lib/quiz.js (mcq : bonne réponse en position 0, mélangées à l'affichage).
import { stripLinks } from '../../src/lib/links.js'
import { rng, shuffle } from '../../src/lib/random.js'
import { formatYear } from '../../src/lib/time.js'

export const EXPRESS_LENGTH = 3
const LAST_YEAR = 2020 // pas de leurre dans le futur

const norm = (t) => stripLinks(String(t ?? '')).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const STOP = new Set(['dans', 'avec', 'sous', 'pour', 'entre', 'vers', 'apres', 'avant', 'puis', 'leur', 'leurs', 'des', 'les', 'une', 'aux', 'surtout', 'notamment', 'pres', 'nord', 'sud', 'est', 'ouest', 'centre', 'actuel', 'actuelle', 'region', 'regions'])
const words = (t) => new Set(norm(t).split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !STOP.has(w)))
const shareWord = (a, b) => {
  const wb = words(b)
  return [...words(a)].some((w) => wb.has(w))
}

// Familles de rôles et de domaines : deux réponses de la même famille pourraient être justes toutes les deux
const ROLE_FAMILIES = {
  pouvoir: /\b(roi|reine|pharaon|empereur|imperatrice|souverain|souveraine|sultan|sultane|shah|chah|tsar|tsarine|khan|khagan|calife|monarque|prince|princesse|president|presidente|premier ministre|premiere ministre|dirigeant|dirigeante|regent|regente|chef|negus|negusa|mansa|asantehene|alaafin|manikongo|tlatoani|consul|dictateur|doge|stathouder|chancelier|chanceliere|gouverneur|vice-roi|shogun|fondateur|fondatrice|seigneur|duc|duchesse|comte|tyran|archonte|lugal|ensi|chanyu|inca|sapa|tribun|senateur|homme d.etat|femme d.etat|ministre|vizir|grand vizir|magistrat|legislateur|monarchie|depute|maire)\b/,
  guerre: /\b(general|generale|chef de guerre|militaire|amiral|conquerant|conquerante|guerrier|guerriere|stratege|commandant|marechal|soldat|capitaine|condottiere|rebelle|resistant|resistante|gladiateur|chevalier|samourai|chef militaire|heroine|heros|insurge|corsaire|pirate|mercenaire)\b/,
  religion: /\b(pretre|pretresse|moine|moniale|religieux|religieuse|prophete|pape|eveque|archeveque|saint|sainte|missionnaire|theologien|imam|rabbin|lama|dalai|bouddha|predicateur|predicatrice|reformateur|reformatrice|mystique|ascete|grand pretre|divinite|dieu|deesse|patriarche|cardinal|abbe|abbesse|sage)\b/,
  savoir: /\b(philosophe|savant|savante|scientifique|mathematicien|mathematicienne|astronome|medecin|physicien|physicienne|chimiste|ingenieur|inventeur|inventrice|penseur|historien|historienne|geographe|naturaliste|biologiste|pharmacologue|paleontologue|paleoanthropologue|archeologue|juriste|economiste|erudit|lettre|chercheur|chercheuse|astrophysicien|botaniste|pedagogue|enseignant|professeur|traducteur|scribe|chroniqueur|grammairien)\b/,
  arts: /\b(poete|poetesse|ecrivain|ecrivaine|peintre|sculpteur|sculptrice|architecte|musicien|musicienne|compositeur|compositrice|chanteur|chanteuse|cineaste|realisateur|realisatrice|dramaturge|romancier|romanciere|artiste|acteur|actrice|danseur|danseuse|photographe|calligraphe|conteur|griot|auteur|autrice|createur|creatrice|animation)\b/,
  voyage: /\b(navigateur|navigatrice|explorateur|exploratrice|voyageur|voyageuse|marchand|marchande|commercant|negociant|negrier|cartographe|pelerin|ambassadeur|diplomate|aventurier)\b/,
  engagement: /\b(militant|militante|revolutionnaire|homme politique|femme politique|syndicaliste|opposant|opposante|abolitionniste|leader|avocat|avocate|reformateur|reformatrice|pionniere|pionnier|journaliste|activiste|independance)\b/,
  sport: /\b(athlete|sportif|sportive|champion|championne|coureur|joueur|joueuse)\b/,
}
const DOMAIN_FAMILIES = {
  sciences: /(mathemat|astronom|calendrier|temps|physique|biolog|chimie|medecine|savoir|enseignement|cartograph|paleo|archeolog|calcul|espace)/,
  ecrit: /(ecriture|livre|litterature|imprimerie|communication|savoir|enseignement|droit)/,
  batir: /(architecture|urbanisme|artisanat|art\b|technique)/,
  arts: /(art\b|art |litterature|artisanat|architecture|sport)/,
  technique: /(technique|transport|navigation|espace|armement|militaire|armee|communication|imprimerie|agriculture|chimie)/,
  societe: /(droit|politique|economie|pouvoir|religion|armee|sport|enseignement)/,
  religion: /(religion|pouvoir)/,
}
const familiesOf = (texts, families) => {
  const t = norm(texts.filter(Boolean).join(' · '))
  return new Set(Object.entries(families).filter(([, re]) => re.test(t)).map(([k]) => k))
}
const disjoint = (a, b) => ![...a].some((x) => b.has(x))

// Grands espaces : un lieu « Europe » contient « Paris » → jamais en question ni en leurre
// (on juge le lieu principal, avant parenthèse ou virgule : « Théra (Santorin), mer Égée » est précis ;
// « …, puis le monde » ne l'est pas)
const BROAD = /(monde|ocean|\bmer\b|mediterranee|europe|asie|afrique|amerique|pacifique|atlantique|empire|plusieurs|nombreux|divers)/
const isBroad = (lieu) => BROAD.test(norm(lieu.split(/[(,]/)[0])) || /monde|plusieurs|nombreux/.test(norm(lieu))

// « de » et « à » devant un nom : d’Akhénaton, du Cid, au Cid
const de = (n) => (/^Le /.test(n) ? `du ${n.slice(3)}` : /^Les /.test(n) ? `des ${n.slice(4)}` : /^[AEIOUÉÈÊÀÂÎÔŒH]/.test(n) ? `d’${n}` : `de ${n}`)
const a = (n) => (/^Le /.test(n) ? `au ${n.slice(3)}` : /^Les /.test(n) ? `aux ${n.slice(4)}` : `à ${lower(n)}`)
// article en minuscule au milieu d'une phrase (« le Cid », « la Malinche »), sauf nom de famille (La Fayette)
const lower = (n) => (/^(Le|La|Les) (?!Fayette)/.test(n) ? n[0].toLowerCase() + n.slice(1) : n)

// Mots génériques des noms de civilisations (« Empire », « Peuples »…) : ne disent rien du lieu
const GENERIC_CIV = new Set(['empire', 'royaume', 'royaumes', 'peuples', 'civilisation', 'culture', 'antique', 'grand', 'grande', 'dynastie', 'dynasties', 'epoque', 'republique', 'populaire', 'siecle', 'moderne', 'contemporain', 'contemporaine', 'projet', 'politique', 'superpuissance', 'fondation', 'deux', 'premier', 'premiers', 'nouvel', 'nouveau', 'christianise', 'cavaliers', 'medievale', 'medieval', 'maritime', 'maritimes', 'cites', 'pays', 'etat', 'etats', 'puis', 'nord', 'sud'])
/** Une civilisation est-elle évoquée dans un texte (« Rome » dans la fiche de Spartacus, « chinois » pour la Chine) ? */
const mentions = (text, label) =>
  [...words(label)].filter((w) => !GENERIC_CIV.has(w)).some((w) => new RegExp(`\\b${w.slice(0, Math.max(4, w.length - 2))}`).test(text))

/** Première phrase d'un texte (sans couper « av. J.-C. »). */
function firstSentence(text) {
  const t = stripLinks(text ?? '')
  const re = /\.\s+(?=[A-ZÀ-ÖØ-Ý«])/g
  let m
  while ((m = re.exec(t))) if (!/\bav$/.test(t.slice(0, m.index))) return t.slice(0, m.index + 1)
  return t
}

/** Date exprimée en siècles (« IXe-XIIe siècles ») : trop floue pour une question de date ou d'ordre. */
const fuzzy = (d) => /si[eè]cle|mill[ée]naire/i.test(d.dates ?? '')

// Siècle unique (« XIIIe siècle », « IVe siècle av. J.-C. ») : question « en quel siècle », leurres à 2 siècles ou plus
const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
const toRoman = (n) => ROMAN.reduce((out, [v, r]) => { while (n >= v) { out += r; n -= v } return out }, '')
const fromRoman = (r) => { let n = 0; for (const [v, sym] of ROMAN) while (r.startsWith(sym)) { n += v; r = r.slice(sym.length) } return r ? null : n }
const century = (n, bc) => `${toRoman(n)}${n === 1 ? 'er' : 'e'} siècle${bc ? ' av. J.-C.' : ''}`
function singleCentury(dates) {
  const m = /^([IVXL]+)(?:e|er) siècle( av\. J\.-C\.)?$/.exec((dates ?? '').trim())
  const n = m && fromRoman(m[1])
  return n ? { n, bc: !!m[2] } : null
}

/** Écart entre la bonne date et les leurres, selon l'ancienneté. */
function yearStep(y) {
  if (y >= 1800) return 30
  if (y >= 1500) return 50
  if (y >= 0) return 100
  if (y >= -1000) return 200
  if (y >= -5000) return 500
  return Math.max(1000, Math.round((-y * 0.2) / 1000) * 1000)
}
/**
 * Décalages des leurres (k × pas) : jamais dans le futur, et sans passer de « av. J.-C. »
 * à « apr. J.-C. » quand la bonne réponse ne le fait pas (sinon la réponse se devine).
 */
function offsets(seed, step, minYear, maxYear) {
  const ks = shuffle([-3, -2, -1, 1, 2, 3, -4, 4], rng(seed))
  const sign = (y) => Math.sign(y) || 1
  return ks
    .map((k) => k * step)
    .filter((o) => maxYear + o <= LAST_YEAR && sign(minYear + o) === sign(minYear) && sign(maxYear + o) === sign(maxYear))
    .slice(0, 3)
}

/** QCM : bonne réponse + les 3 premiers leurres (déjà classés du plus au moins souhaitable). */
function mcq(id, prompt, correct, distractors, explanation) {
  const wrong = [...new Set(distractors)].filter((d) => d && norm(d) !== norm(correct)).slice(0, 3)
  if (wrong.length < 3) return null
  return { id, type: 'mcq', prompt, options: [correct, ...wrong], answer: 0, ...(explanation ? { explanation } : {}) }
}

/** Leurres sans mot important en commun entre eux (pas « Poète » et « Dramaturge et poète »). */
function distinctHeads(list, skip = []) {
  const out = []
  for (const x of list) if (![...skip, ...out].some((y) => norm(y) === norm(x) || shareWord(x, y))) out.push(x)
  return out
}

/**
 * Questions express de toutes les fiches liées.
 *   content   : loadContent() (content.entities : Map id → { type, data })
 *   byId      : assemble().byId (civId → { epoch, continent, civ })
 *   backlinks : Map id → { civs: Set, fiches: Set } (qui cite la fiche)
 * → Map id → [question] (EXPRESS_LENGTH questions, ou moins si les données ne suffisent pas)
 */
export function expressQuestions({ content, byId, backlinks }) {
  const entities = content.entities
  const nameOf = (id) => entities.get(id)?.data.nom

  // Civilisations dont la fiche est « membre » (dirigeant, personnage, date clé, découverte), avec un poids
  const members = new Map() // id → Map civId → poids
  const addMember = (id, civId, w) => {
    if (!id || !entities.has(id)) return
    if (!members.has(id)) members.set(id, new Map())
    const m = members.get(id)
    m.set(civId, (m.get(civId) ?? 0) + w)
  }
  for (const { civ } of byId.values()) {
    for (const d of civ.dirigeants ?? []) addMember(d.personne, civ.id, 2)
    for (const p of civ.personnages ?? []) addMember(p.ref, civ.id, 2)
    for (const d of civ.datesCles ?? []) addMember(d.ref, civ.id, 2)
    for (const p of civ.periodes ?? []) for (const e of p.evenements ?? []) addMember(e.ref, civ.id, 1)
    for (const id of civ.decouvertes ?? []) addMember(id, civ.id, 2)
  }
  // les mentions dans les textes départagent (la reine Victoria : Royaume-Uni plutôt qu'Inde)
  for (const [id, m] of members) for (const civId of m.keys()) m.set(civId, m.get(civId) + (JSON.stringify(byId.get(civId).civ).split(`[[${id}`).length - 1))
  const homeOf = (id) => {
    const m = members.get(id)
    if (!m?.size) return null
    return [...m.entries()].reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0]
  }

  const civsOf = (id) => new Set([...(backlinks.get(id)?.civs ?? []), ...(members.get(id)?.keys() ?? [])])
  const continentsOf = (id) => new Set([...civsOf(id)].map((c) => byId.get(c)?.continent.id).filter(Boolean))
  // Fiches directement liées (dans les deux sens)
  const directLinks = (id) => {
    const d = entities.get(id).data
    const out = new Set([
      ...(d.liens ?? []).map((l) => l.ref),
      d.avant,
      d.apres,
      ...(backlinks.get(id)?.fiches ?? []),
      ...[...JSON.stringify(d).matchAll(/\[\[([a-z0-9-]+)/g)].map((m) => m[1]),
    ])
    return new Set([...out].filter((x) => x && x !== id && entities.has(x)))
  }
  const linksOf = new Map([...entities.keys()].map((id) => [id, directLinks(id)]))
  const related = (a, b) => linksOf.get(a).has(b) || linksOf.get(b).has(a)

  const yearOf = (d) => (typeof d.annee === 'number' ? d.annee : typeof d.naissance === 'number' ? d.naissance : typeof d.mort === 'number' ? d.mort : null)
  const all = [...entities.entries()].map(([id, { type, data }]) => ({ id, type, data, conts: continentsOf(id), year: yearOf(data) }))
  /** Leurres classés : tirage parmi les plus proches dans le temps (plus crédibles), puis les autres du plus proche au plus lointain. */
  const nearest = (x, list, kind, n = 6) => {
    const sorted = [...list].sort((a, b) => Math.abs((a.year ?? 1e7) - (x.year ?? 0)) - Math.abs((b.year ?? 1e7) - (x.year ?? 0)))
    return [...shuffle(sorted.slice(0, n), rng(`${x.id}:${kind}:near`)), ...sorted.slice(n)]
  }
  const elsewhere = (x, list) => list.filter((o) => o.id !== x.id && o.conts.size && disjoint(o.conts, x.conts))

  const EPOCHS = [...new Set([...byId.values()].map((w) => w.epoch))].sort((p, q) => p.start - q.start)

  const out = new Map()
  for (const x of all) {
    const { id, type, data: d } = x
    const name = d.nom
    const quoted = type === 'personne' ? lower(name) : `« ${name} »`
    const explanation = firstSentence(d.description)
    const fullText = norm(JSON.stringify(d))
    const seed = (kind) => `${id}:${kind}`
    const qs = []
    // la bonne réponse ne doit pas se lire dans le nom (« Baptême de Clovis » → Clovis, « Révolution iranienne » → Iran)
    const givenAway = (q) =>
      q.type === 'mcq' && q.id !== 'x-date' && q.id !== 'x-regne' &&
      (mentions(norm(name), q.options[0]) || new RegExp(`\\b${norm(q.options[0]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(norm(name)))
    const push = (q) => q && !givenAway(q) && qs.length < EXPRESS_LENGTH && !qs.some((o) => o.id === q.id) && qs.push(q)

    // ── Date ──
    const dateQ = () => {
      if (type === 'personne') {
        const born = typeof d.naissance === 'number'
        const died = typeof d.mort === 'number'
        // naissance seule : seulement pour une personne vivante (« née en 1930 »), pas pour une date d'activité (« vers −2650 »)
        if (born && !died && !/^n[ée]/.test(d.dates ?? '')) return null
        if (born !== died) {
          // une seule date connue : l'année de naissance (personne vivante) ou de mort
          const y = born ? d.naissance : d.mort
          const offs = offsets(seed('x-date'), Math.min(yearStep(y), y >= 0 ? 100 : 150), y, y)
          const prompt = born ? `Quelle est l’année de naissance ${de(name)} ?` : `Quelle est l’année de la mort ${de(name)} ?`
          return mcq('x-date', prompt, formatYear(y), offs.map((o) => formatYear(y + o)), explanation)
        }
        if (!born || d.mort <= d.naissance) return null
        const fmt = (a, b) => `${formatYear(a)} → ${formatYear(b)}`
        // pas plus serré que pour un événement : une vie dure moins d'un siècle
        const step = Math.min(yearStep(d.naissance), d.naissance >= 0 ? 100 : 150)
        const offs = offsets(seed('x-date'), step, d.naissance, d.mort)
        return mcq('x-date', `Quelles sont les dates de naissance et de mort ${de(name)} ?`, fmt(d.naissance, d.mort), offs.map((o) => fmt(d.naissance + o, d.mort + o)), explanation)
      }
      if (typeof d.annee !== 'number' || fuzzy(d)) return null
      // l'année est déjà dans le nom (« Massacres de 1965-1966 ») : la question se répondrait toute seule
      if (name.includes(String(Math.abs(d.annee)))) return null
      const approx = /vers|siècle|millénaire/i.test(d.dates ?? '') || d.annee < -1000
      const verb = type === 'evenement' ? (d.fin != null && d.fin !== d.annee ? 'commence' : 'a lieu') : 'apparaît'
      const prompt = approx ? `Vers quelle date ${verb} ${quoted} ?` : `En quelle année ${verb} ${quoted} ?`
      const offs = offsets(seed('x-date'), yearStep(d.annee), d.annee, d.annee)
      return mcq('x-date', prompt, formatYear(d.annee), offs.map((o) => formatYear(d.annee + o)), explanation)
    }

    // ── Siècle (date connue au siècle près) ──
    const siecleQ = () => {
      const c = singleCentury(d.dates)
      if (!c) return null
      const ks = shuffle([-4, -3, -2, 2, 3, 4], rng(seed('x-siecle')))
      const wrong = ks.map((k) => c.n + k).filter((n) => n >= 1 && (c.bc || n <= 21)).map((n) => century(n, c.bc))
      const verb = type === 'personne' ? 'vit' : type === 'evenement' ? 'a lieu' : 'apparaît'
      return mcq('x-siecle', `En quel siècle ${verb} ${quoted} ?`, century(c.n, c.bc), wrong, explanation)
    }

    // ── Rôle (personnes) ──
    const roleQ = () => {
      if (type !== 'personne' || !d.role) return null
      const fam = familiesOf([d.role, ...(d.roles ?? [])], ROLE_FAMILIES)
      const pool = elsewhere(x, all.filter((o) => o.type === 'personne' && o.data.role))
        .filter((o) => {
          const of = familiesOf([o.data.role, ...(o.data.roles ?? [])], ROLE_FAMILIES)
          return (
            of.size > 0 && disjoint(of, fam) && !shareWord(o.data.role, d.role) && ![...(d.roles ?? [])].some((r) => shareWord(o.data.role, r)) &&
            // pas de nom propre dans un leurre (« Principal ministre de Louis XIII ») : il trahirait l'époque
            !/[A-ZÀ-Ý]/.test(o.data.role.slice(1))
          )
        })
      const prompt = /^n[ée]/.test(d.dates ?? '') ? `Qui est ${lower(name)} ?` : `Qui était ${lower(name)} ?`
      return mcq('x-role', prompt, d.role, distinctHeads(nearest(x, pool, 'x-role').map((o) => o.data.role), [d.role]), explanation)
    }

    // ── Civilisation (personnes et découvertes : fiche dont elles font partie) ──
    const civQ = () => {
      if (type === 'evenement') return null // un événement concerne souvent plusieurs peuples (la peste noire, une guerre)
      const home = homeOf(id)
      if (!home) return null
      const { epoch, continent, civ } = byId.get(home)
      const linked = civsOf(id)
      const lineage = (c) => c.lineage?.id
      const candidates = [...byId.values()].filter(
        (w) => w.epoch.id === epoch.id && !linked.has(w.civ.id) && (!lineage(civ) || lineage(w.civ) !== lineage(civ)) &&
          // découvertes : autre continent (une technique se diffuse chez les voisins)
          (type === 'personne' || w.continent.id !== continent.id) &&
          // pas une civilisation évoquée dans la fiche (Spartacus : « Rome »)
          !mentions(fullText, w.civ.label)
      )
      // personnes : de préférence le même continent (plus instructif), sinon toute l'époque
      const near = candidates.filter((w) => w.continent.id === continent.id)
      const pick = shuffle(type === 'personne' && near.length >= 3 ? near : candidates, rng(seed('x-civ'))).map((w) => w.civ.label)
      const prompt = type === 'personne' ? `À quelle civilisation se rattache ${lower(name)} ?` : `À quelle civilisation associer ${quoted} ?`
      return mcq('x-civ', prompt, civ.label, pick, explanation)
    }

    // ── Règne (personnes qui figurent dans une liste de dirigeants) ──
    const regneQ = () => {
      if (type !== 'personne') return null
      const home = homeOf(id)
      const reign = [home, ...civsOf(id)]
        .filter(Boolean)
        .flatMap((c) => byId.get(c).civ.dirigeants ?? [])
        .find((l) => l.personne === id && typeof l.debut === 'number' && typeof l.fin === 'number' && l.fin > l.debut)
      if (!reign) return null
      const fmt = (a, b) => `${formatYear(a)} → ${formatYear(b)}`
      const offs = offsets(seed('x-regne'), Math.min(yearStep(reign.debut), reign.debut >= 0 ? 100 : 150), reign.debut, reign.fin)
      return mcq('x-regne', `Quelles sont les dates du règne ou du mandat ${de(name)} ?`, fmt(reign.debut, reign.fin), offs.map((o) => fmt(reign.debut + o, reign.fin + o)), `${name} : ${reign.titre}, ${fmt(reign.debut, reign.fin)}.`)
    }

    // ── Lieu (événements) ──
    const lieuQ = () => {
      // lieu déjà dans le nom (« Bataille d’Adoua » → « Adoua ») : la question se répondrait toute seule
      if (type !== 'evenement' || !d.lieu || isBroad(d.lieu) || shareWord(d.lieu, name)) return null
      const pool = elsewhere(x, all.filter((o) => o.type === 'evenement' && o.data.lieu)).filter(
        (o) => !isBroad(o.data.lieu) && !shareWord(o.data.lieu, d.lieu) && o.data.lieu.length <= 60 && !mentions(fullText, o.data.lieu)
      )
      return mcq('x-lieu', `Où se déroule ${quoted} ?`, d.lieu, distinctHeads(nearest(x, pool, 'x-lieu').map((o) => o.data.lieu), [d.lieu]), explanation)
    }

    // ── Domaine (découvertes) ──
    const domaineQ = () => {
      if (type !== 'decouverte' || !d.domaine) return null
      const fam = familiesOf([d.domaine], DOMAIN_FAMILIES)
      const pool = [...new Set(all.filter((o) => o.type === 'decouverte' && o.data.domaine).map((o) => o.data.domaine))].filter(
        (dom) => !shareWord(dom, d.domaine) && disjoint(familiesOf([dom], DOMAIN_FAMILIES), fam)
      )
      return mcq('x-domaine', `Dans quel domaine se range ${quoted} ?`, d.domaine, distinctHeads(shuffle(pool, rng(seed('x-domaine'))), [d.domaine]), explanation)
    }

    // ── Fiche liée ──
    const lienQ = () => {
      const linked = [...linksOf.get(id)]
      if (!linked.length) return null
      // de préférence une personne liée (« liens ») ou un événement voisin
      const target = linked.find((l) => (d.liens ?? []).some((x) => x.ref === l)) ?? linked[0]
      const tType = entities.get(target).type
      const pool = nearest(
        x,
        elsewhere(x, all.filter((o) => o.type === tType && o.id !== target)).filter(
          (o) => !related(o.id, id) && disjoint(o.conts, continentsOf(target)) && !fullText.includes(norm(o.data.nom)) && !norm(JSON.stringify(o.data)).includes(norm(name))
        ),
        'x-lien'
      ).map((o) => o.data.nom)
      const what = { personne: 'Quelle personne est liée à', evenement: 'Quel événement est lié à', decouverte: 'Quelle découverte est liée à' }[tType]
      const rel = (d.liens ?? []).find((l) => l.ref === target)?.relation
      const why = rel ? `${nameOf(target)} : ${rel.charAt(0).toLowerCase()}${rel.slice(1)}.` : explanation
      return mcq('x-lien', `${what.replace(/ à$/, '')} ${a(quoted)} ?`, nameOf(target), pool, why)
    }

    // ── Ordre chronologique : la fiche et d'autres fiches de la même civilisation ──
    const orderQ = () => {
      const key = type === 'personne' ? 'naissance' : 'annee'
      if (typeof d[key] !== 'number' || fuzzy(d)) return null
      const mine = civsOf(id)
      const approx = (o) => /vers/i.test(o.data.dates ?? '')
      // dates bien distinctes (beaucoup plus d'écart si l'une est « vers ») : pas d'ex aequo discutable
      const gapWith = (o) => Math.max(2, yearStep(d[key]) / (approx(x) || approx(o) ? 1 : 20))
      // ni date en siècles, ni nom qui donne la date (« Famine de 1983-1985 »)
      const dated = all.filter((o) => o.type === type && o.id !== id && typeof o.data[key] === 'number' && !fuzzy(o.data) && !/\d{3,4}/.test(o.data.nom))
      const sameCiv = dated.filter((o) => [...civsOf(o.id)].some((c) => mine.has(c)))
      // à défaut : même continent, à moins de 500 ans
      const sameArea = dated.filter((o) => !sameCiv.includes(o) && !disjoint(o.conts, x.conts) && Math.abs(o.data[key] - d[key]) <= 500)
      const others = [...shuffle(sameCiv, rng(seed('x-ordre'))), ...shuffle(sameArea, rng(seed('x-ordre') + ':area'))]
      const picked = [x]
      for (const o of others) if (picked.length < 4 && picked.every((p) => Math.abs(p.data[key] - o.data[key]) >= Math.max(gapWith(o), gapWith(p)))) picked.push(o)
      if (picked.length < 3) return null
      const sorted = picked.sort((a, b) => a.data[key] - b.data[key])
      const prompt = type === 'personne' ? 'Remettez ces personnes dans l’ordre de leur naissance.' : type === 'evenement' ? 'Remettez ces événements dans l’ordre chronologique.' : 'Remettez ces découvertes dans l’ordre chronologique.'
      return {
        id: 'x-ordre',
        type: 'order',
        prompt,
        items: sorted.map((o) => o.data.nom),
        explanation: sorted.map((o) => `${o.data.nom} (${formatYear(o.data[key])})`).join(', ') + '.',
      }
    }

    // ── Époque de la frise (dernier recours) : jamais à moins de 10 ans d’une borne (476, 1492…) ──
    const epoqueQ = () => {
      const y = type === 'personne' ? (typeof d.naissance === 'number' && typeof d.mort === 'number' ? (d.naissance + d.mort) / 2 : null) : d.annee
      if (typeof y !== 'number' || /\d{3,4}/.test(name)) return null // « Massacres de 1965 » : trop facile
      const ep = EPOCHS.find((e) => y >= e.start && y < e.end)
      // date en siècles : marge de 500 ans (« XVe-XVIe siècles » chevauche Moyen Âge et Temps modernes)
      if (!ep || EPOCHS.slice(1).some((e) => Math.abs(y - e.start) < (fuzzy(d) ? 500 : 10))) return null
      const prompt = type === 'personne' ? `À quelle grande époque vit ${lower(name)} ?` : `À quelle grande époque appartient ${quoted} ?`
      return mcq('x-epoque', prompt, ep.label, shuffle(EPOCHS.filter((e) => e !== ep), rng(seed('x-epoque'))).map((e) => e.label), `${ep.label} : de ${formatYear(ep.start)} à ${formatYear(ep.end)}.`)
    }

    const order = {
      personne: [dateQ, siecleQ, roleQ, civQ, regneQ, lienQ, orderQ, epoqueQ],
      evenement: [dateQ, siecleQ, lieuQ, lienQ, orderQ, epoqueQ],
      decouverte: [dateQ, siecleQ, domaineQ, civQ, lienQ, orderQ, epoqueQ],
    }[type] ?? []
    for (const make of order) push(make())
    out.set(id, qs)
  }
  return out
}
