// Assemble les 4 parties de données en un seul epochs.json
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import part1 from "./data-part1.mjs"; // [Préhistoire]
import part2 from "./data-part2.mjs"; // [Antiquité]
import part3 from "./data-part3.mjs"; // [Moyen Âge]
import part4 from "./data-part4.mjs"; // [Moderne, Contemporaine]
import lineages from "./lineages.mjs"; // civilisations reliées d'une époque à l'autre
import { TERRITORIES } from "../src/data/map-links.js"; // territoires sur les cartes historiques

const __dirname = dirname(fileURLToPath(import.meta.url));

// CRUCIAL : On utilise ... pour TOUS les fichiers car ils exportent tous des tableaux désormais
const epochs = [...part1, ...part2, ...part3, ...part4];

// ── Lignées : même couleur + liens « avant / la suite » ────────────────────────
const where = new Map(); // civId → { epoch, civ }
for (const epoch of epochs)
  for (const continent of epoch.continents)
    for (const civ of continent.civilizations) where.set(civ.id, { epoch, civ });

const ref = (id) => {
  const w = where.get(id);
  return { epochId: w.epoch.id, epochLabel: w.epoch.label, civId: id, label: w.civ.label };
};

for (const lineage of lineages) {
  lineage.members.forEach((id, i) => {
    const w = where.get(id);
    if (!w) throw new Error(`Lignée « ${lineage.id} » : civilisation inconnue « ${id} »`);
    if (w.civ.lineage) throw new Error(`« ${id} » appartient déjà à la lignée « ${w.civ.lineage.id} »`);
    w.civ.color = lineage.color;
    w.civ.lineage = {
      id: lineage.id,
      label: lineage.label,
      prev: i > 0 ? ref(lineage.members[i - 1]) : null,
      next: i < lineage.members.length - 1 ? ref(lineage.members[i + 1]) : null,
      members: lineage.members.map(ref),
    };
  });
}

const out = join(__dirname, "..", "src", "data", "epochs.json");
writeFileSync(out, JSON.stringify(epochs, null, 2), "utf-8");

// ── Présence sur la carte : années où chaque civilisation a un territoire ───────
// (utilisé par les mini-cartes des révisions pour ne proposer que des années utiles)
const mapIndexFile = join(__dirname, "..", "public", "map", "index.json");
if (existsSync(mapIndexFile)) {
  const mapIndex = JSON.parse(readFileSync(mapIndexFile, "utf-8"));
  const presence = {};
  for (const { civ } of where.values()) {
    const names = new Set(TERRITORIES[civ.id] ?? []);
    if (!names.size) continue;
    const years = mapIndex.filter((m) => m.names.some((n) => names.has(n))).map((m) => m.year);
    const inside = years.filter((y) => y >= civ.start && y <= civ.end);
    // période sans carte (civilisation brève) : la carte la plus proche où elle apparaît
    const dist = (y) => (y < civ.start ? civ.start - y : y - civ.end);
    const picked = inside.length ? inside : years.length ? [years.reduce((b, y) => (dist(y) < dist(b) ? y : b))] : [];
    if (picked.length) presence[civ.id] = picked;
  }
  writeFileSync(join(__dirname, "..", "src", "data", "map-presence.json"), JSON.stringify(presence) + "\n");
}

const civCount = epochs.reduce(
  (n, e) => n + e.continents.reduce((m, c) => m + c.civilizations.length, 0),
  0
);
console.log(`OK → ${epochs.length} époques, ${civCount} civilisations, ${lineages.length} lignées écrites dans ${out}`);