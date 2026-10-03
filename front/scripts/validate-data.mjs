// Valide src/data/epochs.json avant chaque build.
//   - ERREUR  → bloque le build (exit 1) : structure cassée, id dupliqué, dates incohérentes…
//   - ALERTE  → affichée mais non bloquante : contenu à vérifier (date hors période, champ vide…)
//
// Usage : npm run validate   (lancé automatiquement par `npm run build`)
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "..", "src", "data", "epochs.json");
const epochs = JSON.parse(readFileSync(file, "utf-8"));

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where} — ${msg}`);
const warn = (where, msg) => warnings.push(`${where} — ${msg}`);

const isNum = (v) => typeof v === "number" && Number.isFinite(v);
const isStr = (v) => typeof v === "string" && v.trim().length > 0;
const isHex = (v) => typeof v === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);
const isUrl = (v) => typeof v === "string" && /^https?:\/\//.test(v);

const CIV_REQUIRED_STR = ["id", "label", "period", "description", "capitale"];
const CIV_REQUIRED_ARR = ["datesCles", "dirigeants", "personnages", "guerres", "documentaires"];
const CIV_TEXT = ["sciences", "croyancesText", "diplomatie"];

if (!Array.isArray(epochs) || epochs.length === 0) {
  err("racine", "epochs.json doit être un tableau non vide d'époques");
}

const epochIds = new Set();
const civIds = new Map(); // id → "epoque/continent"
let civCount = 0;

epochs.forEach((ep, i) => {
  const where = `époque[${i}] ${ep.id ?? "?"}`;
  for (const k of ["id", "label", "description"]) if (!isStr(ep[k])) err(where, `champ « ${k} » manquant`);
  if (!isHex(ep.color)) err(where, `couleur invalide : ${ep.color}`);
  if (!isNum(ep.start) || !isNum(ep.end) || ep.start >= ep.end) err(where, `bornes invalides ${ep.start} → ${ep.end}`);
  if (epochIds.has(ep.id)) err(where, "id d'époque dupliqué");
  epochIds.add(ep.id);

  // Continuité de la frise
  const prev = epochs[i - 1];
  if (prev && prev.end !== ep.start) warn(where, `ne commence pas là où finit « ${prev.id} » (${prev.end} ≠ ${ep.start})`);

  if (!Array.isArray(ep.continents) || ep.continents.length === 0) {
    err(where, "aucun continent");
    return;
  }

  for (const cont of ep.continents) {
    const cWhere = `${ep.id}/${cont.id ?? "?"}`;
    if (!isStr(cont.id) || !isStr(cont.label)) err(cWhere, "continent sans id ou label");
    if (!Array.isArray(cont.civilizations)) {
      err(cWhere, "civilizations doit être un tableau");
      continue;
    }

    for (const civ of cont.civilizations) {
      civCount++;
      const w = `${cWhere}/${civ.id ?? "?"}`;
      for (const k of CIV_REQUIRED_STR) if (!isStr(civ[k])) err(w, `champ « ${k} » manquant`);
      for (const k of CIV_REQUIRED_ARR) if (!Array.isArray(civ[k])) err(w, `champ « ${k} » doit être un tableau`);
      for (const k of CIV_TEXT) if (!isStr(civ[k])) warn(w, `texte « ${k} » vide`);
      if (!isHex(civ.color)) err(w, `couleur invalide : ${civ.color}`);
      if (!isNum(civ.start) || !isNum(civ.end)) err(w, "start/end doivent être des nombres");
      else if (civ.start >= civ.end) err(w, `start (${civ.start}) ≥ end (${civ.end})`);
      else if (civ.start < ep.start || civ.end > ep.end) warn(w, `déborde de l'époque (${civ.start} → ${civ.end})`);

      if (civIds.has(civ.id)) err(w, `id dupliqué (déjà dans ${civIds.get(civ.id)})`);
      civIds.set(civ.id, cWhere);

      for (const d of civ.datesCles ?? []) {
        if (!isNum(d.annee) || !isStr(d.evenement)) err(w, `date clé invalide : ${JSON.stringify(d)}`);
        else if (isNum(civ.start) && (d.annee < civ.start || d.annee > civ.end))
          warn(w, `date clé « ${d.evenement} » (${d.annee}) hors de ${civ.start} → ${civ.end}`);
      }
      for (const g of civ.guerres ?? []) {
        if (!isStr(g.nom)) err(w, `guerre sans nom : ${JSON.stringify(g).slice(0, 80)}`);
        if (g.wikiUrl && !isUrl(g.wikiUrl)) warn(w, `lien invalide pour « ${g.nom} »`);
      }
      for (const p of civ.personnages ?? []) {
        if (!isStr(p.nom)) err(w, "personnage sans nom");
        if (p.wikiUrl && !isUrl(p.wikiUrl)) warn(w, `lien invalide pour « ${p.nom} »`);
      }
      for (const doc of civ.documentaires ?? []) {
        if (!isUrl(doc.url)) warn(w, `documentaire sans URL valide : ${doc.titre}`);
      }
    }
  }
});

// ── Liens avec la carte (src/data/map-links.js + public/map/index.json) ──────
const { TERRITORIES, CONFLICTS } = await import("../src/data/map-links.js");
const mapIndexFile = join(__dirname, "..", "public", "map", "index.json");
let mapNames = null;
try {
  mapNames = new Set(JSON.parse(readFileSync(mapIndexFile, "utf-8")).flatMap((m) => [...m.names, ...(m.powers ?? [])]));
} catch {
  warn("carte", "public/map/index.json introuvable (lancer `npm run map`)");
}
for (const [civId, names] of Object.entries(TERRITORIES)) {
  if (!civIds.has(civId)) err("map-links", `civilisation inconnue : « ${civId} »`);
  if (mapNames) for (const n of names) if (!mapNames.has(n)) warn("map-links", `${civId} : « ${n} » n'existe dans aucune carte`);
}
for (const ep of epochs)
  for (const cont of ep.continents)
    for (const civ of cont.civilizations)
      for (const g of civ.guerres ?? [])
        if (!CONFLICTS[g.nom]) warn("map-links", `guerre sans coordonnées : « ${g.nom} » (${civ.id})`);

if (warnings.length) {
  console.warn(`\n⚠️  ${warnings.length} alerte(s) de contenu :`);
  for (const m of warnings) console.warn("   · " + m);
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) bloquante(s) :`);
  for (const m of errors) console.error("   · " + m);
  process.exit(1);
}
console.log(`\n✅ Données valides : ${epochs.length} époques, ${civCount} civilisations.`);
