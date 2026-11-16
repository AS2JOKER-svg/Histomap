# Guide d'édition HistoMap

Petit mode d'emploi pour ajouter ou modifier du contenu et des pages sans rien casser.

---

## 1. Le contenu : `front/content/`

Tout le contenu vit dans **`front/content/`**, en JSON, **un fichier par unité** (une civilisation, une personne…).
Le site ne lit jamais ces fichiers directement : `scripts/build-content.mjs` les compile dans `src/data/`
(**fichiers générés, ignorés par git : ne jamais les éditer**). `npm run dev`, `npm run data` et `npm run build` le font automatiquement.

| Fichier | Rôle |
|---|---|
| `content/epochs.json` | Le plan du site : époques → continents → **liste ordonnée des ids** des civilisations |
| `content/civs/<id>.json` | Une fiche par civilisation |
| `content/people/<id>.json` | Fiches liées : personnes |
| `content/events/<id>.json` | Fiches liées : événements |
| `content/discoveries/<id>.json` | Fiches liées : découvertes, inventions, œuvres |
| `content/lineages.json` | Même civilisation sur plusieurs époques (couleur commune, « La suite ») |
| `content/regions.json` | Régions actuelles normalisées (champ `region` des fiches) |
| `content/conflicts.json` | Lieu de chaque guerre sur la carte |
| `content/ignore-territories.json` | Territoires des cartes volontairement sans fiche |
| `content/wars/<id>.json` | Dossiers de guerre (page complète d'une grande guerre : `/guerres/<id>`) |

### Ajouter une civilisation
1. Créer `content/civs/<id>.json` (copier une fiche existante, par exemple `carthage.json`). Le nom du fichier **est** l'id.
2. Ajouter l'id dans `content/epochs.json`, dans la liste `civs` du bon continent, à la place voulue (l'ordre est celui des listes et des quiz).
3. Compiler **et valider** :
   ```bash
   cd front && npm run data
   ```
4. Vérifier dans le navigateur (`npm run dev`), puis `npm run coverage` pour voir le trou comblé.
5. Lancer `npm run links` pour vérifier les liens Wikipédia ajoutés.

#### Liste de contrôle d'une nouvelle civilisation (format complet, comme les 105 fiches actuelles)
- [ ] **Place** : époque = celle où elle **commence** (une fiche qui déborde est gérée par la frise ‹ ›) ; continent ;
      `region` (voir `content/regions.json`) ; `start`/`end` = vraies dates, et `period` qui les affiche.
- [ ] **Lignée** : si c'est la même civilisation qu'une fiche d'une autre époque (Parthes → Sassanides…), l'ajouter
      dans `content/lineages.json` (pas de `color` sur la fiche) ; sinon une `color` propre, lisible et distincte de ses voisines.
- [ ] **Titres des dates clés** : un intitulé explicite de 2 à 6 mots (« Indépendance de l’Algérie », « Bataille de Bouvines »), jamais un seul mot (« Indépendance », « Fin ») ni l’année ; « selon la tradition » si la date est traditionnelle ; le titre ne doit pas répéter mot pour mot l’`info`. Ces titres servent aussi de réponses et de leurres dans les quiz : un titre d’un seul mot est ignoré par le générateur.
- [ ] **Fiche** : `reperes` (les 9), `essentiel` (4-5 points), `datesCles` (6-10), `periodes`, `regimes`, `dynasties`,
      liste **complète** des `dirigeants` (dirigeants clés `cle: true`, dates de début non ambiguës), `personnages`,
      `guerres` (+ lieu dans `content/conflicts.json`), `sciences`/`croyancesText`/`diplomatie` (1re phrase ≥ 40 caractères),
      `societe`, `economie`, `arts`, `quotidien`, `heritage`, `aSavoir`, `sources`.
- [ ] **Fiches liées** : 5 à 8 (personnes, événements, découvertes) avec des dates **précises** et un `lieu` précis
      quand c'est possible (le quiz express en dépend) ; liens `[[id]]` dans les textes.
- [ ] **Carte** : `npm run territoires -- <mot>` pour trouver les noms de territoires des cartes, puis `territories`.
      Un même nom peut servir à deux fiches : la carte choisit, chaque année, la fiche active la plus récente.
- [ ] **Chapitre de révision** rédigé dans le même lot : `src/data/revision/<id>.js` (modèle : `carthage.js`).
      Chaque question porte sa carte (`carte`, posé par `npm run relier` puis relu) ; au moins 15 questions sur les
      cartes de Découvrir pour une salle du tronc, 10 pour une annexe (rédigées + générées : `npm run questions-cartes`).
- [ ] **Ton** : faits établis, dates prudentes (« vers »), aucun jugement ; sujets sensibles présentés de façon
      factuelle, avec les points de vue des acteurs attribués à leurs auteurs. Jamais de texte copié de Wikipédia.
- [ ] **Vérifier** : `npm run data` (0 erreur, 0 alerte), `npm run links`, `npm run build`, puis relecture factuelle séparée.

### Structure d'une fiche de civilisation
```jsonc
{
  "id": "france-capet",            // OBLIGATOIRE = nom du fichier, unique dans tout le site (sert dans l'URL)
  "label": "France (Capétiens)",
  "tier": 1,                       // 1 majeure, 2 secondaire, 3 mineure
  "region": "europe-ouest",        // id de content/regions.json (région ACTUELLE du cœur de la civilisation)
  "period": "987 à 1492",          // texte affiché
  "start": 987,                    // NOMBRE (négatif = av. J.-C.)
  "end": 1492,                     // NOMBRE, strictement > start
  "color": "#2c6fd1",              // SAUF si la civilisation est dans une lignée (la couleur vient alors de la lignée)
  "trackId": "france",             // optionnel : civilisations qui partagent une même ligne de frise
  "row": 1,                        // optionnel : ordre vertical dans le continent
  "isRiver": false,
  "capitale": "Paris",
  "description": "…",
  "territories": ["Kingdom of France", "France"],   // noms ANGLAIS des territoires sur les cartes (voir plus bas)
  "datesCles":   [{ "annee": 1214, "evenement": "Bataille de Bouvines", "info": "…", "ref": "bataille-de-bouvines" }],  // titre explicite, sans année
  "dirigeants":  [{ "nom": "Philippe II", "titre": "Roi", "surnom": "Auguste", "debut": 1180, "fin": 1223,
                    "dynastie": "capetiens-directs", "personne": "philippe-auguste" }],
  "dynasties":   [{ "id": "capetiens-directs", "nom": "Capétiens directs", "debut": 987, "fin": 1328 }],
  "personnages": [{ "nom": "…", "role": "…", "description": "…", "dates": "1412 à 1431", "wikiUrl": "https://…", "ref": "jeanne-d-arc" }],
  "guerres":     [{ "nom": "…", "annee": 1337, "adversaires": [], "allies": [], "morts": "…", "vainqueur": "…", "consequences": "…", "wikiUrl": "https://…" }],
                 // "camp" (facultatif) : nom affiché à la place de la fiche dans « X contre Y », pour une fiche
                 // qui couvre plusieurs peuples (ex. Israël et Palestine : "camp": "Israël" ou "Palestiniens")
  "sciences": "texte…",
  "croyancesText": "texte…",
  "diplomatie": "texte…",
  "documentaires": [{ "titre": "…", "url": "https://…" }],
  "sources": ["https://fr.wikipedia.org/wiki/…", { "titre": "Britannica — …", "url": "https://…" }],

  // ── Structure « fiche en béton » (sprint 10B) : tout est facultatif, la fiche s'adapte ──
  "reperes": {                     // les 9 repères (capitale et durée ont une valeur par défaut)
    "capitale":  { "valeur": "Paris", "precision": "…" },   // un texte, ou { valeur, precision }
    "regimes": "Monarchie féodale", "langues": "…", "religion": "…", "apogee": "…",
    "population": "…", "monnaie": "…", "duree": "…", "aujourdhui": "…"
  },
  "essentiel": ["5 points maximum, ce qu'il faut retenir"],
  "periodes": [{ "nom": "…", "debut": 987, "fin": 1180, "resume": "…",
                 "evenements": [{ "annee": 1214, "evenement": "Bataille de Bouvines", "ref": "bataille-de-bouvines" }] }],
  "regimes": [{ "id": "republique", "nom": "République", "debut": -509, "fin": -27, "note": "Pas de chef unique : …" }],
  "societe": "…", "economie": "…", "arts": "…", "quotidien": "…",   // onglet Société (avec croyancesText, sciences, diplomatie)
  "decouvertes": ["calendrier-julien"],                              // ids de content/discoveries/
  "heritage": [{ "titre": "Nos langues", "texte": "…" }],
  "aSavoir": ["légendes, débats d'historiens, idées reçues"]
}
```
**Où s'affiche quoi** (fiche à 6 onglets) : Résumé = mini-carte, repères, essentiel, dates clés, personnages, héritage,
à savoir, lignée, sources · Histoire = `periodes` (sinon les dates clés avec leur explication) · Dirigeants = `regimes`
(bandeau) + `dirigeants` groupés par `dynasties` (barre de règne proportionnelle) · Société = société, économie, religions
(`croyancesText`), sciences (+ `decouvertes`), arts, vie quotidienne, diplomatie · Guerres = `guerres` · Carte = territoire.
- Dynastie : `{ id, nom, debut, fin, regime?, note? }` ; dirigeant : `note` facultative (ex. « selon la tradition »).
- **Liste complète des dirigeants** : marquer les 5 à 8 plus importants avec `"cle": true`. Seuls ceux-là font l'objet de
  questions de quiz (sinon, 80 empereurs romains donneraient des centaines de questions) ; ils sont aussi cités dans le
  résumé des groupes fermés (« dont Khéops, Hatchepsout… »).
- `documentaires` : les anciens liens portaient des titres d'émissions mais pointaient tous vers Wikipédia. Ne plus en
  ajouter : mettre les références dans `sources` (liste vide `[]` dans les fiches mises à niveau).
- Régime sans chef unique (République romaine, cités marchandes…) : l'expliquer dans `note` et ne lister que les grandes figures.
- Dirigeants clés : deux d'entre eux ne doivent pas avoir les mêmes dates, et les quatre plus anciens doivent commencer des années différentes (sinon les questions « qui gouverne ? » et « classez-les » auraient deux bonnes réponses ; le validateur prévient).
- `surnom` : uniquement un vrai surnom historique (« le Chauve », « Barberousse ») ; le quiz demande « Quel est le surnom de… ? ».
- `sciences`, `croyancesText`, `diplomatie` : le quiz cite leur **première phrase** (« à quelle civilisation correspond ce
  passage ? ») ; elle doit faire au moins 40 caractères et ne pas citer le nom de la civilisation (le validateur prévient).
- Champs facultatifs : `trackId`, `row`, `surnom`, `dynastie`, `personne`, `dynasties`, `ref`, `sources`.
- `ref` (date clé → événement, personnage → personne) et `personne` (dirigeant → personne) relient la ligne à une **fiche liée** : elle deviendra cliquable.
- `dynastie` doit exister dans `dynasties` de la même fiche.
- **Un champ inconnu est une erreur** (une faute de frappe comme `dirigeant` au lieu de `dirigeants` ne passe pas).

### Fiches liées (personnes, événements, découvertes)
Une fiche liée est **partagée** : Jules César a une seule fiche, citée par Rome, les Celtes, l'Égypte…
```jsonc
// content/people/jules-cesar.json
{ "id": "jules-cesar", "nom": "Jules César", "nomComplet": "Caius Julius Caesar",
  "role": "Général et homme d'État", "roles": ["Général", "Homme politique", "Écrivain"],
  "dates": "−100 → −44", "naissance": -100, "mort": -44,
  "description": "En une phrase : qui est-ce ?",
  "reperes": [{ "label": "Naissance", "valeur": "12 ou 13 juillet −100", "precision": "Rome" }],
  "essentiel": ["Pourquoi il compte : 3 points"],
  "chronologie": [{ "annee": -49, "texte": "Passage du Rubicon", "detail": "…", "ref": "rubicon" }],
  "liens": [{ "ref": "pompee", "relation": "Allié, puis rival" }],
  "aSavoir": ["…"], "wikiUrl": "https://…", "sources": ["https://…"] }
// content/events/<id>.json : { id, nom, annee (obligatoire), fin?, dates?, lieu?, description,
//    sections: [{ titre: "Contexte" | "Déroulement" | "Conséquences", texte }], liens (acteurs), avant?, apres?, … }
// content/discoveries/<id>.json : { id, nom, annee?, domaine?, description,
//    sections: [{ titre: "Comment ça marche", texte }], heritage: [{ titre, texte }], avant?, apres?, … }
// Champs communs : nomComplet, dates, roles, reperes, essentiel, sections, chronologie, liens, avant, apres,
//                  heritage, aSavoir, wikiUrl, sources. Page : #/fiche/<id> ; aperçu : depuis tout lien [[id]].
```
Les ids sont **uniques dans tout le site**, civilisations comprises (minuscules, chiffres, tirets).
« Apparaît dans » (les fiches qui citent celle-ci) est calculé automatiquement.

#### Quiz express (3 questions en bas de chaque fiche liée)
Il est **généré au build** (`scripts/lib/express.mjs`), rien à rédiger. Les questions viennent des champs :
`naissance`/`mort` ou `annee` (date), `dates` d'un seul siècle (« XIIIe siècle »), `role`, `lieu`, `domaine`,
`liens`/`avant`/`apres` (fiche liée), la civilisation dont la fiche fait partie, l'ordre chronologique avec
d'autres fiches de la même civilisation. Règle d'or : **une seule bonne réponse possible** — les leurres
viennent d'autres continents, d'autres familles de rôles ou de domaines, et une question est écartée si la
réponse se lit dans le nom (« Baptême de Clovis » → Clovis). Pour qu'une fiche ait un bon quiz :
- des dates **précises** (`annee`, `naissance`, `mort`) : une date en siècles (« IXe-XIIe siècles ») est jugée
  trop floue pour une question de date ou d'ordre ;
- un `lieu` **précis** (« Pékin », « Adoua (nord de l'Éthiopie) ») plutôt que « Europe » ou « …, puis le monde » ;
- un `role` court (« Pharaon », « Général carthaginois ») ;
- des `liens` vers les acteurs.
`npm run data` affiche le bilan (fiches à 3 questions, à 2, sans quiz). Les ids (`x-date`, `x-role`…) sont
stables : le meilleur score de chaque fiche est gardé dans la progression (`express`).

### Liens dans les textes
Dans **n'importe quel texte** de `content/` (description, info d'une date, sciences, description d'une personne…) :
- `[[jules-cesar]]` → affiche le nom de la fiche (« Jules César ») ;
- `[[jules-cesar|César]]` → affiche « César ».

L'id peut être une civilisation ou une fiche liée. Un lien vers une fiche inexistante, ou des crochets mal fermés, **bloquent le build**.
Les quiz et les cartes générées utilisent le texte brut (sans les crochets).

### Le validateur (`npm run validate`)
Il tourne avant **chaque build** (en local et sur GitHub Actions). Objectif : **0 erreur et 0 alerte**.
- **Erreur** ❌ → le build s'arrête : id dupliqué, fiche absente de `epochs.json`, date non numérique, `start ≥ end`, région ou tier invalide,
  champ inconnu, lien ou référence vers une fiche inexistante, couleur en double avec une lignée…
- **Alerte** ⚠️ → le build continue, mais le contenu mérite un coup d'œil (date clé hors de la période, guerre sans lieu sur la carte…).
- Les messages donnent le fichier exact (`content/civs/rome.json (dirigeant « Auguste ») — …`).

### Relier une civilisation d'une époque à l'autre (lignées)
Dans `content/lineages.json` : une lignée = une couleur + la liste des ids dans l'ordre chronologique.
```json
{ "id": "france", "label": "France", "color": "#3f6fd1", "members": ["francs", "france-capet", "france-mod", "france-contemp"] }
```
Tous les membres prennent la couleur de la lignée (leurs fiches n'ont donc **pas** de `color`) et gagnent les liens
« ← Avant / La suite → ». Une civilisation n'appartient qu'à une lignée.

### Rapport de couverture (`npm run coverage`)
Affiche le tableau **région × siècle** (combien de civilisations actives, où sont les trous) et la liste des **territoires des
cartes sans fiche**, classés par nombre de cartes. Rapport complet : `reports/couverture.md` (généré).
Pour exclure volontairement un territoire (mode de vie générique, colonie, micro-État) : `content/ignore-territories.json`.

### Écrire un chapitre de révision (« On avance »)
**Les 105 civilisations ont un chapitre rédigé** (cartes + quiz + bilan) dans `src/data/revision/<id>.js`.
Sans fichier, une civilisation aurait un chapitre **généré automatiquement** à partir de ses données
(c'est le cas d'une nouvelle civilisation ajoutée aux données, tant qu'on n'a pas écrit son chapitre).

Pour écrire ou réécrire un chapitre : copier `src/data/revision/carthage.js` sous le nom `<id de la civilisation>.js`
et l'adapter. **Pas d'enregistrement à faire** : `scripts/build-revision-index.mjs` (lancé par `npm run data` et avant
chaque build) régénère `src/data/revision/index.js` et `src/data/revision-meta.json`. Sur le site, chaque chapitre est
un petit fichier chargé seulement quand on l'ouvre (`src/lib/chapters.js`).
- `tier: 1` = premier passage (l'essentiel) ; `tier: 2` = nouvelles cartes quand on reprend le chapitre.
- Types de cartes : `text` (titre + texte + chiffre mis en avant), `keyfigure` (grand chiffre), `dates`,
  `steps` (schéma en étapes), `map` (mini-carte, `years: [...]`), `war`, `person`, `leaders`.
- La couverture, la carte « avant / après » (lignée) et le bilan (`recap`) sont ajoutés automatiquement.
- `npm run validate` vérifie les chapitres rédigés (`scripts/validate-revision.mjs`) : ids uniques, types de cartes,
  bonne réponse existante, années de carte disponibles, **carte de chaque question** et **nombre de questions sur les
  cartes de Découvrir** (voir « Relier les questions aux cartes »). Une erreur bloque le build.
- Pour vérifier un nouveau fichier avant de l'enregistrer : `node scripts/validate-revision.mjs src/data/revision/mon-chapitre.js`.
- Carte `map` : prendre des années listées pour la civilisation dans `src/data/map-presence.json` (généré par `npm run data`) (sinon la mini-carte n'a rien à colorer).

### Questions de quiz
Chaque chapitre a un réservoir de questions **générées automatiquement depuis la fiche complète** (≈ 38 en moyenne,
de 20 à 67) : dates, ordre chronologique, capitale, dirigeants, personnages, guerres, carte, lignée, vrai/faux…
(`src/lib/quiz.js`). La V3.1 les retire de l'Aventure (sprint 29) : elle ne pose que des questions sur les cartes vues,
rédigées ou **générées depuis les cartes** (voir « Relier les questions aux cartes » plus bas).
Pour ajouter des questions rédigées à la main, compléter le tableau `quiz` du chapitre
(voir `src/data/revision/france-capet.js`) :
```js
{ id: 'saint-louis', carte: 'louis9', type: 'mcq', prompt: 'Quel roi est surnommé « Saint Louis » ?',
  options: ['Louis IX', 'Louis VI', 'Louis XI', 'Louis VII'], answer: 0, explanation: '…' },
{ id: 'sorbonne', carte: 'universite', type: 'tf', prompt: 'Robert de Sorbon fonde la Sorbonne en 1257.', answer: true },
{ id: 'ordre', carte: ['chronologie', 'bouvines'], type: 'order', prompt: 'Remettez dans l’ordre…', items: ['A', 'B', 'C'] } // items dans le BON ordre
```
(une question par ligne, `carte` juste après l'`id` : c'est ainsi que `npm run relier` l'écrit)
- `answer` = position de la bonne réponse dans `options` (elles sont mélangées à l'affichage).
- **Ne jamais réutiliser ou renommer un `id`** : il sert à mémoriser les questions ratées.
- Règles (V3.1, `src/lib/epreuve.js`) : l'**Épreuve** d'une salle du tronc = 12 questions sur les cartes de Découvrir (+ Approfondir s'il est fait), ★ 9, ★★ 11, ★★★ 12 ; la **mini-épreuve** d'une annexe = 8 questions sur ses cartes de Découvrir, ★ 6, ★★ 7, ★★★ 8 ; ≈ 70 % de questions rédigées, le reste généré depuis les cartes ; après une épreuve, 3 questions ratées reviennent (2 pour une annexe). Défis, quiz infini et « À revoir » : cartes de Découvrir et d'Approfondir.
- **Questions éclair** (Découvrir, Approfondir) : seulement des questions rédigées dont **la carte a été lue** dans la séance (la question du milieu : dans la 1re moitié du paquet), d'après le champ `carte` (`src/lib/eclairs.js`). `npm run eclairs` → `reports/questions-eclair.md` (questions posées, salle par salle).

### Relier les questions aux cartes (champ `carte`, sprint 28)
Règle de la V3.1 : **toute question porte sur une carte déjà vue**. Chaque question rédigée porte donc l'id de la carte
où se lit sa bonne réponse :
- `carte: 'hamilcar'` : une carte ;
- `carte: ['chronologie', 'gaulois']` : il faut avoir lu **toutes** ces cartes (une question d'ordre dont les éléments
  sont sur deux cartes, un vrai / faux qui croise deux cartes) ;
- `carte: null` : **hors cartes** — la réponse ne se lit dans aucune carte (« Quelle est la capitale du Canada ? » sans
  carte qui cite Ottawa). La question reste dans le fichier mais n'est jamais posée dans l'Aventure. Mieux : ajouter
  l'information à une carte, ou réécrire la question sur une carte (même `id`).

Une question est « sur » une carte si un joueur qui a lu cette carte avec attention peut répondre : la réponse y est
écrite, ou se déduit sans connaissance extérieure (« Les Mycéniens parlent une forme de grec » ne suffit pas pour
« Quelle langue note le linéaire B ? » si la carte ne parle pas du linéaire B). On préfère une carte de **Découvrir**
(niveau 1) quand la réponse se lit aux deux niveaux : la question sert ainsi dès la première séance.

Pour poser le champ : `npm run relier` (bilan), `npm run relier -- <id>` (détail d'un chapitre : cartes candidates et
notes), `npm run relier -- --ecrire` (écrit les liaisons **sûres**). Les liaisons **douteuses** (« probable »,
« introuvable ») ne sont jamais écrites seules : les relire une par une, puis écrire la carte à la main dans le chapitre,
ou dans un fichier de décisions (`civ/question = carte`, `= carte1,carte2`, `= -` pour hors cartes) passé à
`npm run relier -- --decisions <fichier>`. Le validateur refuse une question sans `carte` ou une carte inconnue.

**Questions générées depuis les cartes** (`src/lib/questionsCartes.js`) : en plus des questions rédigées, chaque
carte `dates`/`steps` donne une question par élément (« En quelle année situe-t-on « … » ? » ou « Que se passe-t-il
en … ? ») et une question d'ordre ; chaque carte `person`, un « Qui est-ce ? » (description, nom masqué) ; chaque
carte `war`, l'année et, si le vainqueur désigne un seul camp, un vrai / faux sur le vainqueur. Une seule bonne
réponse possible : pour qu'une carte en donne de bonnes questions,
- `dates`/`steps` : années **différentes** (deux éléments de la même année ne donnent aucune question) ; libellé
  qui ne contient pas l'année (« Vers 1730 : … » est accepté, la date de tête est retirée) ; « Vers … » ou « selon la
  tradition » dans le libellé pour une date approximative ;
- `person` : description d'au moins une phrase, qui ne cite pas la personne par un autre nom que `nom` ;
- `war` : `vainqueur` écrit avec les **mêmes mots** que l'un des camps (« Hannibal » si `allies` dit « Armée
  d'Hannibal ») ; « Aucun », « Compromis » ou un vainqueur nuancé ne donnent pas de question (c'est voulu).
Les ids générés (`carte-<carte>-annee-<année>`, `-evenement-<année>`, `-ordre`, `-qui`, `-annee`, `-vainqueur`) sont
stables ; changer l'année d'un élément change sa question.

**Seuils** (validateur, bloquant) : une salle du **tronc** a au moins **15** questions sur ses cartes de Découvrir
(Épreuve de 12 + une marge), une **annexe** au moins **10** (mini-épreuve de 8 + marge), en comptant les questions
rédigées reliées aux cartes de niveau 1 et les questions générées depuis ces cartes. `npm run questions-cartes` →
`reports/questions-cartes.md` : par salle, questions rédigées (Découvrir / Approfondir / hors cartes), générées,
marge, cartes de Découvrir sans question, et la liste des questions hors cartes ; `npm run questions-cartes -- <id>`
affiche les questions générées d'une salle pour les relire.

### Relier une civilisation à la carte
- `territories` dans la fiche = noms **anglais** des territoires sur les cartes historiques (ex. `"Kingdom of France"`).
  La liste des noms disponibles par année est dans `public/map/index.json` ; `npm run coverage` liste ceux qui n'ont pas de fiche.
- `content/conflicts.json` : `"Nom exact de la guerre": { "coords": [longitude, latitude], "lieu": "Cannes" }` (lieu facultatif).
- Le validateur signale un nom de territoire introuvable ou une guerre sans coordonnées.

### Le parcours de l'Aventure (`content/parcours.json`)
```jsonc
{
  "mondes": [{ "epoque": "antiquite", "titre": "Grand savant de l’Antiquité", "theme": "papyrus",
               "tronc": ["mesopotamie", "egypte", "…"] }],            // un monde par époque, dans l'ordre de epochs.json
  "branches": { "koush": "egypte", "aksoum": "koush" },               // toutes les autres civilisations → leur parent
  "courts": { "chine-imperiale": "Qin et Han" },                       // noms courts (carte du parcours), ≤ 16 caractères
  "filsRouges": { "egypte": "Maître de l’Égypte" },                    // un titre par lignée de lineages.json
  "titreUltime": "Historien universel"
}
```
- Chaque civilisation est **une seule fois** dans le parcours : dans le tronc de son époque, ou dans `branches`.
- Une branche dépend d'une civilisation de son monde ou d'un monde **précédent** ; une branche qui fait partie d'une lignée
  dépend de la **civilisation précédente de sa lignée** (ex. Empire d'Éthiopie ← Aksoum).
- **Ajouter une civilisation** = aussi l'ajouter ici (dans un tronc ou dans `branches`), sinon `npm run data` échoue.
- Thèmes possibles : `silex`, `papyrus`, `enluminure`, `lapis`, `neon` (un par monde).
- **Noms courts** (`courts`, V3.1) : obligatoires pour chaque salle qui peut être sur le chemin d'un joueur (salle du tronc,
  ou membre d'une lignée = salle de fil rouge) dont le nom dépasse 16 caractères ; 16 caractères au plus ; les noms affichés
  sur le chemin (nom court, sinon nom) sont tous différents. Les initiales des pastilles et des bulles en sont tirées
  (`initiales` dans `src/lib/aventure.js`). Une annexe hors des fils n'en a pas besoin (bulle à initiales).
- Chemin d'un joueur (V3.1) : le tronc + les annexes de son fil rouge, placées juste après leur parent, sinon (parent dans
  un monde précédent) avant la première salle de leur monde qui commence plus tard qu'elles (date de début de la fiche).
- Règles du jeu (chemin, ouverture des salles, « à rattraper », étoiles) : `src/lib/aventure.js` ; XP, niveaux, rangs :
  `src/lib/xp.js` ; progression et migrations : `src/lib/progression.js` ; questions de l'Épreuve : `src/lib/epreuve.js` ;
  tests : `npm test` (aussi lancés par `npm run validate`) ; `npm run simulation` : temps et XP par monde d'un joueur simulé.

### Écrire un dossier de guerre (`content/wars/<id>.json`)
Modèles : `content/wars/seconde-guerre-mondiale.json` (Guerres A), puis `guerres-puniques`, `guerre-de-cent-ans`, `guerres-napoleoniennes`, `premiere-guerre-mondiale` (Guerres B). Page : `/guerres/<id>`.
```jsonc
{
  "id": "…", "nom": "…", "debut": 1939, "fin": 1945, "dates": "1er septembre 1939 → 2 septembre 1945",
  "description": "en une phrase", "essentiel": ["5 points au plus"], "chiffres": [{ "valeur": "…", "label": "…" }],
  "camps": [{ "id": "rome", "nom": "…", "legende": "… et ses alliés (facultatif)", "couleur": "#…", "description": "…", "membres": ["…"] }],  // 2 camps ou plus, ids libres
  "carte": {
    "annee": 1938,                          // une année de public/map/index.json (négative av. J.-C. : -300)
    "occupant": "axe",                      // camp occupant, obligatoire si le statut « occupe » est utilisé
    "noms": { "Germany": "Allemagne" },      // nom français de chaque territoire coloré (bulle de la carte)
    "note": "…",                            // avertissement sous la carte
    "statuts": { "Germany": "axe", "Poland": { "statut": "occupe", "note": "…" } }  // état de départ (id d'un camp, « occupe » ou « neutre »)
  },
  "phases": [{ "id", "nom", "debut": "1939-09", "fin": "1940-03", "resume", "texte",
               "carte": { "cadre": [[lon, lat], [lon, lat]], "rotation": -150, "statuts": { /* seulement ce qui change */ } },
               "batailles": ["id"], "evenements": [{ "date": "1939-09-03", "texte": "…", "ref": "fiche-liée?" }] }],
  "batailles": [{ "id", "nom", "debut": "1942-08", "fin": "1943-02", "lieu", "coords": [lon, lat], "vainqueur": "allies", "resume", "ref": "événement?", "wikiUrl" }],
  "personnages": [{ "nom", "camp": "<id d'un camp>" | "autres", "role", "dates", "description", "ref": "personne?", "wikiUrl" }],
  "sections": [{ "titre": "Les causes", "texte": "…" }],
  "quiz": [ /* format des quiz express : mcq (bonne réponse en 0), tf, order ; au moins 10 questions */ ],
  "guerresLiees": ["Nom exact d'une guerre de fiche|année"],   // ces guerres renvoient vers le dossier
  "sources": ["…"]
}
```
- **Statuts** : l'id d'un camp, `occupe` (occupé par le camp `carte.occupant`), `neutre`. Ils s'accumulent de phase en phase ; un territoire sans statut
  prend celui de sa métropole (`SUBJECTO` des cartes : les colonies suivent leur pays), sinon `neutre`.
- **Attention aux cartes** : un nom peut cacher plusieurs morceaux (sur la carte de 1938, « Denmark » = Islande et Groenland, le Danemark
  lui-même manque). Vérifier les territoires à colorer et le dire dans `note`.
- Dates au format `AAAA`, `AAAA-MM` ou `AAAA-MM-JJ`, négatives avant J.-C. (`-216-08-02`). Les ids de questions ne doivent jamais être renommés (meilleur score mémorisé).

---

## 2. Où se trouve quoi dans le code ?

| Je veux modifier… | Fichier |
|---|---|
| Le plan du site (URLs) | `src/App.jsx` |
| L'en-tête, la barre d'onglets mobile | `src/layouts/AppShell.jsx` |
| L'Aventure (onglet par défaut : parcours, étape du jour) | `src/pages/AventurePage.jsx` ; règles : `src/lib/aventure.js`, `src/lib/xp.js`, `src/lib/progression.js`, `src/lib/epreuve.js` |
| Le Profil | `src/pages/ProfilPage.jsx` (séance « À revoir » : `src/pages/ARevoirPage.jsx`) |
| Le premier lancement (bienvenue, fil rouge, 3 questions) | `src/pages/BienvenuePage.jsx` |
| Les Défis (par lien, à deux, quiz infini) | `src/pages/DefisPage.jsx`, `DefiPage.jsx`, `DeuxJoueursPage.jsx`, `EntrainementPage.jsx` + `src/components/defi/` ; règles (graine, lien, choix des 10 questions) : `src/lib/defi.js` |
| Les sons d'interface | `src/lib/sons.js` (déclenchés par `haptic()` : table `SON` de `src/lib/haptics.js`) |
| La musique d'ambiance | `src/lib/musique.js` (`AMBIANCES`, choix par région : `ambianceDe`, dans une page : `useAmbiance(civId)`) + `src/store/audio.js` |
| La bascule Frise / Carte de l'Atlas | `src/components/AtlasSwitch.jsx` |
| La flèche des époques | `src/pages/TimelinePage.jsx` + `src/components/timeline/EpochRibbon.jsx` |
| La frise d'une époque (toile, zoom, filtres) | `src/pages/EpochPage.jsx` + `src/components/timeline/EpochTimeline.jsx` |
| Le rangement des barres en lignes | `src/components/timeline/layout.js` |
| L'aperçu d'une civilisation (tiroir) | `src/components/timeline/CivPreview.jsx` |
| Les échelles de temps (linéaire / log) | `src/lib/time.js` (`createEpochScale`) |
| La fiche d'une civilisation (6 onglets) | `src/pages/CivilizationPage.jsx` + `src/components/fiche/` |
| Les fiches liées (personne, événement, découverte) | `src/pages/EntityPage.jsx` + `src/lib/entities.js` |
| L'aperçu d'une fiche (feuille du bas) | `src/components/RefSheet.jsx` + `useUI().openSheet(...)` |
| La recherche globale | `src/pages/SearchPage.jsx` + `src/lib/search.js` (index : `src/data/search.json`, généré) |
| L'onglet Guerres | `src/pages/WarsPage.jsx` (liste : `src/data/wars.json`, générée) |
| Un dossier de guerre (phases, carte animée, quiz) | `src/pages/WarDossierPage.jsx` + `src/components/war/WarMap.jsx` + `src/lib/dossiers.js` ; compilation et validation : `scripts/lib/dossiers.mjs` |
| Accès aux données (index léger, détail à la demande) | `src/lib/data.js` (`loadCiv`, `useCiv`) |
| Compilation et validation du contenu | `scripts/build-content.mjs`, `scripts/validate-content.mjs`, `scripts/lib/` |
| Liens `[[id]]` dans les textes | `src/lib/links.js` + `src/components/ui/RichText.jsx` |
| La carte du monde | `src/pages/MapPage.jsx` + `src/components/map/` + `src/lib/map.js` |
| Relier une civilisation à la carte, placer un conflit | `content/civs/<id>.json` (`territories`, trouver les noms : `npm run territoires -- <mot>`) + `content/conflicts.json` |
| Lignées (même civilisation sur plusieurs époques) | `content/lineages.json` + `src/components/LineageTrail.jsx` |
| Progression (fiches lues, reprendre, série) | `src/store/progress.js` + `src/components/progress/` |
| Messages éphémères (toasts) | `useUI().showToast({ text, tone })` dans `src/store/ui.js` |
| Une étape d'une salle (Découvrir, Approfondir, Épreuve) | `src/pages/SallePage.jsx` (cartes : `components/revision/CardDeck.jsx` ; questions : `components/quiz/QuestionView.jsx`) |
| Cartes de révision (paquet, types de cartes) | `src/components/revision/` + `src/lib/revision.js` |
| Chapitres rédigés à la main (cartes + questions) | `src/data/revision/` |
| Quiz : génération des questions, règles | `src/lib/quiz.js` + `src/pages/QuizPage.jsx` + `src/components/quiz/` |
| Affichage et correction d'une question (partagé) | `src/lib/questions.js` + `src/components/quiz/QuestionView.jsx` |
| Quiz express des fiches liées | `scripts/lib/express.mjs` (génération au build) + `src/components/quiz/ExpressQuiz.jsx` |
| Questions reliées aux cartes (champ `carte`), questions générées depuis les cartes | `src/lib/questionsCartes.js` + `src/lib/eclairs.js` ; outil `scripts/relier-questions.mjs` (rapprochement : `scripts/lib/rapprochement.mjs`) ; seuils et rapport : `scripts/lib/questions-cartes.mjs`, `scripts/rapport-questions-cartes.mjs` |
| Les couleurs, le mode sombre | `src/index.css` (variables `--c-…`) |
| Les icônes | `src/components/ui/Icon.jsx` |

### À garder en tête
- **Les pages ne lisent pas le JSON directement** : elles passent par `src/lib/data.js`. `getEpoch`, `getCivilization`… renvoient la version **légère** (frise, listes) ; le détail (dates, dirigeants, textes…) se charge avec `useCiv(id)` / `loadCiv(id)`.
- **Couleurs** : utiliser les classes de thème (`text-ink`, `text-muted`, `bg-surface`, `bg-surface2`, `border-line`, `text-accent`…) plutôt que `bg-white` ou `text-gray-500`, sinon le mode sombre casse.
- **Boutons** : classes prêtes à l'emploi `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-icon` (zone tactile ≥ 44 px).
- **`localStorage`** : toujours passer par `src/lib/storage.js` (protégé contre la navigation privée).
- **Progression** : clé `histomap_progress` (version 3 depuis l'Aventure). Si vous changez sa forme, incrémentez `VERSION` et complétez `migrate()` dans `store/progress.js`, sinon les utilisateurs perdent leur avancement.
- **Couleur d'une civilisation en texte** : ne pas écrire `style={{ color: civ.color }}` (certaines couleurs, comme l'or de l'Égypte, sont illisibles sur fond blanc) mais `className="civ-text" style={civTextStyle(civ.color)}` ; pour un fond portant du texte blanc : `style={{ background: solidBg(civ.color) }}` (`src/lib/color.js`). Le contraste AA (4,5:1) est alors garanti dans les deux thèmes.
- **Application installable / hors ligne** : `public/manifest.webmanifest` (nom, icônes, raccourcis), `sw/sw.js` (service worker, complété au build par le plugin de `vite.config.js`), `src/lib/pwa.js` + `src/store/app.js` (connexion, installation, mise à jour). Le service worker n'est actif qu'après `npm run build` (pas en `npm run dev`). Icônes : `public/icons/`.
- **Vibrations et sons** : `haptic('success')` depuis `src/lib/haptics.js` : vibration (Android uniquement, Safari iOS ne le permet pas) + son court synthétisé (`src/lib/sons.js`, coupé si l'utilisateur l'a désactivé). `haptic('tap')` reste silencieux.
- Frise d'une époque : `LANE_H`, `LANE_GAP`, `MIN_W`, `ZOOM_MAX` en tête de `EpochTimeline.jsx`. Les époques de plus de 20 000 ans passent automatiquement en échelle logarithmique (`LOG_THRESHOLD` dans `time.js`).
- `trackId` : des civilisations successives d'une même piste (Ghana → Mali) restent sur la même ligne ; si elles se chevauchent nettement, elles sont séparées automatiquement.
