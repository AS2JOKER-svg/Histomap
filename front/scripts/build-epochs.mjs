// Assemble les 4 parties de données en un seul epochs.json
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import part1 from "./data-part1.mjs"; // [Préhistoire]
import part2 from "./data-part2.mjs"; // [Antiquité]
import part3 from "./data-part3.mjs"; // [Moyen Âge]
import part4 from "./data-part4.mjs"; // [Moderne, Contemporaine]

const __dirname = dirname(fileURLToPath(import.meta.url));

// CRUCIAL : On utilise ... pour TOUS les fichiers car ils exportent tous des tableaux désormais
const epochs = [...part1, ...part2, ...part3, ...part4];

const out = join(__dirname, "..", "src", "data", "epochs.json");
writeFileSync(out, JSON.stringify(epochs, null, 2), "utf-8");

const civCount = epochs.reduce(
  (n, e) => n + e.continents.reduce((m, c) => m + c.civilizations.length, 0),
  0
);
console.log(`OK → ${epochs.length} époques, ${civCount} civilisations écrites dans ${out}`);