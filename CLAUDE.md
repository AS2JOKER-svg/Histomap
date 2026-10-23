# HistoMap — contexte pour l'agent

## Le produit
Site éducatif d'histoire en français (public : 13 ans et +), mobile d'abord, installable (PWA), 100 % statique (aucun serveur, aucune API, aucune clé). Objectif : publication commerciale (Play Store, KnightBorn Studio) → le contenu doit être **irréprochable**.
Trois espaces :
- **Frise** : époques → continents → civilisations (fiches).
- **Carte du monde** : 54 cartes historiques datées, curseur temporel, clic sur un territoire → fiche, conflits affichés.
- **« On avance »** (révisions) : époque → civilisation → chapitre de cartes à faire glisser (niveau 1 puis niveau 2 quand on reprend) → quiz de 20 questions, validé à 15/20 ; sous 15, 5 questions ratées reviennent au quiz suivant.
La progression est sauvegardée dans le navigateur (localStorage). Vibrations sur mobile aux bonnes réponses.

## Pile technique
React 18, Vite 4, Tailwind 3 (couleurs = variables CSS, thèmes clair/sombre), framer-motion, zustand (état + persistance), react-router-dom 6 en **HashRouter** (URLs `#/frise/...`), d3-geo + topojson pour la carte.
Tout le code est dans `front/`. Commandes (depuis `front/`, ou depuis la racine : le `package.json` racine les relaie vers `front/`) :
- `npm run dev` : compile le contenu puis lance le serveur (http://localhost:5173/Histomap/)
- `npm run data` : compile le contenu + valide tout (**À LANCER APRÈS CHAQUE MODIFICATION DE CONTENU** : 0 erreur, 0 alerte)
- `npm run validate` : valide seulement
- `npm run coverage` : rapport de couverture (région × siècle, territoires des cartes sans fiche) → `front/reports/couverture.md`
- `npm run links` : vérifie que tous les liens Wikipédia de `content/` mènent à une page existante (réseau requis ; à lancer après chaque lot de fiches)
- `npm run territoires -- <mot> [<mot>…]` : cherche des noms de territoires dans les cartes historiques (années, fiche déjà reliée) pour remplir `territories`
- `npm run build` : compile, valide puis construit `dist/` (+ service worker)
- `npm run preview` : sert le build (tester le hors-ligne ici, pas en dev)

## Où sont les choses
- **`front/content/` = la source de tout le contenu** (JSON, un fichier par unité) :
  - `epochs.json` : époques → continents → **liste ordonnée des ids** de civilisations (le plan du site) ;
  - `civs/<id>.json` : une fiche par civilisation (105 aujourd'hui) ;
  - `people/`, `events/`, `discoveries/` : fiches liées (personnes, événements, découvertes), cliquables depuis les textes ;
  - `lineages.json` (même civilisation sur plusieurs époques : couleur commune, « La suite »), `regions.json` (régions actuelles normalisées), `conflicts.json` (lieu des guerres sur la carte), `ignore-territories.json` (territoires des cartes volontairement sans fiche).
- `front/scripts/build-content.mjs` compile `content/` → `front/src/data/` (**généré, ignoré par git, ne jamais éditer**) : `index.json` (index léger chargé au démarrage), `civs/<id>.json` (détail chargé à la demande), `entities/`, `territories.json`, `conflicts.json`, `quiz-context.json`, `map-presence.json`. `scripts/lib/content.mjs` = lecture/assemblage partagés ; `scripts/lib/json.mjs` = écriture JSON lisible pour `content/`.
- `front/scripts/validate-content.mjs` (contenu) et `validate-revision.mjs` (chapitres) : lancés par `data` et `build`.
- `front/public/map/` : cartes historiques (projet historical-basemaps, **licence GPL-3.0**, garder LICENSE et NOTICE.md). `src/data/map-years.json` : généré par `npm run map` (rare), versionné.
- `front/src/data/revision/<id>.js` : **un chapitre de révision par civilisation** (cartes + quiz + bilan). `index.js` et `revision-meta.json` sont **générés** par `scripts/build-revision-index.mjs`.
- `front/src/lib/` : `data.js` (index léger : getEpochs, getCivilization… ; détail : `loadCiv(id)` / `useCiv(id)`), `links.js` (syntaxe des liens `[[id|texte]]`), `revision.js`, `chapters.js`, `quiz.js`, `questions.js` (affichage/correction d'une question, léger), `random.js` (hasard reproductible, aussi utilisé par les scripts), `map.js`, `color.js`, `storage.js`, `haptics.js`, `pwa.js`.
- Quiz express des fiches liées : généré au build par `front/scripts/lib/express.mjs` (champ `express` de `src/data/entities/<id>.json`), joué par `src/components/quiz/ExpressQuiz.jsx`. Règle : une seule bonne réponse possible (leurres d'autres continents/familles, question écartée si la réponse se lit dans le nom, dates en siècles exclues des questions de date et d'ordre).
- `front/src/store/` : `progress.js` (progression, clé `histomap_progress`, version 2 : + `express`), `ui.js`, `app.js`.
- `front/src/pages/` : une page par écran. `front/src/components/` : composants (ui/ = briques de base, dont `RichText` pour les textes à liens ; fiche/ = briques communes des fiches ; `RefSheet` = aperçu d'une fiche ouvert de partout via `useUI().openSheet`).
- Routes : `/` accueil, `/frise…`, `/frise/:epoque/:civ?onglet=…` (fiche à 6 onglets), `/fiche/:id` (fiche liée), `/carte`, `/guerres`, `/recherche`, `/reviser…`.
- `front/GUIDE_EDITION.md` : **formats détaillés du contenu** (à lire avant d'écrire une fiche ou un chapitre).

## Formats de contenu (résumé — détail dans GUIDE_EDITION.md)
- **Fiche de civilisation** `content/civs/<id>.json` : id (= nom du fichier), label, tier (1 majeure, 2 secondaire, 3 mineure), region (id de `regions.json`), period, start, end (années, négatives av. J.-C.), color (absente si la civilisation est dans une lignée), trackId/row (piste sur la frise), isRiver, capitale, description, territories, datesCles [{annee, evenement, info, ref?}], dirigeants [{nom, titre, debut, fin, surnom?, dynastie?, personne?}], dynasties? [{id, nom, debut, fin}], personnages [{nom, role, description, dates, wikiUrl, ref?}], guerres [{nom, annee, adversaires[], allies[], morts, vainqueur, consequences, wikiUrl}], sciences, croyancesText, diplomatie, documentaires [{titre, url}], sources? [urls]. Champ inconnu = erreur.
- **Ajouter une civilisation** = créer `content/civs/<id>.json` + ajouter son id dans `content/epochs.json` (continent voulu, à la place voulue).
- **Fiches liées** : `content/people/<id>.json` {id, nom, description, role?, dates?, naissance?, mort?, wikiUrl?, sources?} ; `events/` {id, nom, annee, description, fin?, lieu?…} ; `discoveries/` {id, nom, description, annee?, domaine?…}. Les ids sont uniques dans tout le site (civilisations comprises).
- **Liens dans les textes** : `[[id]]` (affiche le nom de la fiche) ou `[[id|texte affiché]]`, dans n'importe quel texte de `content/`. Un lien vers une fiche inexistante bloque le build.
- **Chapitre** `src/data/revision/<id>.js` : modèle = `carthage.js`. ≈ 9 cartes tier 1 + 5 tier 2 ; types : text, keyfigure, dates, steps, map, war, person, leaders ; quiz 15-18 questions (mcq : bonne réponse en position 0, mélangées à l'affichage ; tf ; order : éléments dans le bon ordre) ; recap : 4 lignes. Carte `map` : années prises UNIQUEMENT dans `src/data/map-presence.json` pour cette civilisation.
- Les `id` de questions et de cartes ne doivent jamais être renommés (ils servent à mémoriser la progression).

## Règles à respecter
1. Après toute modification de contenu : `npm run data` doit afficher 0 erreur et 0 alerte. Après toute modification de code : `npm run build` doit passer.
2. **Exactitude historique d'abord** : faits consensuels, dates prudentes (« vers », « selon la tradition »), ton neutre sur les sujets sensibles, pas d'anachronisme. Ne jamais inventer un chiffre ou un nom. Sources : liens Wikipédia (ou mieux) dans `sources` ; ne jamais **recopier** un texte de Wikipédia (licence CC BY-SA, incompatible avec une app commerciale fermée) : reformuler.
3. **Un fichier par unité de contenu**, et ne jamais éditer les fichiers générés (`src/data/` sauf `revision/<id>.js` et `map-years.json`).
4. **Rédiger puis relire** : après avoir écrit un lot de contenu, faire une passe de relecture factuelle séparée et lister les corrections.
5. Couleurs : utiliser les classes de thème (`text-ink`, `text-muted`, `bg-surface`…), jamais `bg-white`/`text-gray-500`. Couleur d'une civilisation en texte : `className="civ-text" style={civTextStyle(color)}` ; fond sous texte blanc : `solidBg(color)` (`src/lib/color.js`). Accessibilité : contraste AA, boutons ≥ 44 px, `aria-label` sur les boutons-icônes.
6. `localStorage` : toujours via `src/lib/storage.js`. Si la forme de `histomap_progress` change : incrémenter `VERSION` et compléter `migrate()` dans `store/progress.js`.
7. Garder les anciens liens (`#/frise/...`, `#/carte`, `#/reviser/...`) fonctionnels.
8. Ne pas ajouter de serveur, de compte utilisateur ni de pistage.
9. Petits pas : à la fin de chaque sprint, **un commit** (branche de travail, jamais de push sans accord) et un résumé : ce qui a été fait, vérifié, et ce qui reste douteux. Les sprints dont le but est une validation (liste d'une vague, pilote) attendent la réponse de l'utilisateur.
10. Refonte des données ou du code de calcul : comparer avant/après ce que l'app produit (questions de quiz, cartes de révision, conflits, territoires) — aucune différence non voulue.

## Feuille de route (v3)
- ✅ Sprints 0 à 8 : app complète (frise, carte, révisions, quiz, PWA).
- ✅ Sprint 9 : fondations des données (content/ en JSON, index léger + détail à la demande, fiches liées et liens `[[id]]`, dirigeants structurés, régions, rapport de couverture, validateurs).
- ✅ Sprint 10A : maquettes validées le 19/10/2026 (`front/maquettes/index.html`, tableau des décisions). Décisions : barre du bas à **5 onglets** (Accueil, Frise, Carte, Guerres, Réviser — Frise et Carte restent séparées) ; « On avance » devient « Réviser » ; fiche civilisation à **6 onglets** (Résumé, Histoire, Dirigeants, Société, Guerres, Carte) + bouton fixe « Réviser » ; **9 repères** (capitale, régimes, langues, religion, apogée, population, monnaie, durée, aujourd'hui) ; **pas d'images** (initiales + liens Wikipédia) ; action principale des fiches liées : « Voir sur la frise ».
- ✅ Sprint 10B : implémentation (5 onglets, présentation en 3 écrans, accueil « Continuer », fiche à 6 onglets, fiches liées + aperçu, recherche, Guerres, Réviser). Les fiches s'adaptent au contenu présent : elles s'enrichissent dès que les champs de la structure « béton » sont remplis (sprints 11-12).
- ✅ Sprint 11 (en attente de validation) : pilote « fiches en béton » sur Rome, Égypte, France capétienne, Chine Tang-Song, Aztèques : structure complète, 190 dirigeants (marqués `cle` pour le quiz), 53 fiches liées, relecture factuelle séparée. Modèle à suivre : ces 5 fiches + `front/GUIDE_EDITION.md`.
- ✅ Sprint 12 : les 105 fiches au format « béton » (22 lots, relecture factuelle séparée, liens Wikipédia vérifiés par `npm run links`). Corrections faites : documentaires trompeurs → `sources`, dates coupées aux bornes d'époque (+ Dahomey), `isRiver`, personnages qui n'étaient pas des personnes, Isabelle & Ferdinand, formulations non neutres, faux surnoms retirés. 519 fiches liées.
- ✅ Sprint 13 : quiz express sur les fiches liées (3 questions générées au build, 2 quand les données ne permettent pas une 3e question sûre, aucun quiz pour 9 fiches datées en siècles), meilleur score gardé (`histomap_progress` v2, migration v1 → v2).
- Sprints 14+ : nouvelles civilisations (~110), validées le 20/10/2026, par vagues et lots de 5, format complet + chapitre rédigé dans le même lot, ton strictement factuel (sujets sensibles compris). ✅ Étape 0 (préparation : continent Océanie testé, densité de la frise testée à 25 fiches par continent, `npm run territoires`, liste de contrôle dans GUIDE_EDITION.md). ✅ Vague 1 (steppes et Russie, 10 fiches : Sarmates, Huns, Göktürks, Khazars, Khaganat ouïghour, Horde d'or, Moscovie, Russie des tsars, Khanat de Crimée, Hetmanat cosaque ; lignée Russie complétée). ✅ Vague 2 (Perse, Asie centrale, Caucase, Arabie, 15 fiches : Ourartou, Arménie antique, Saba et Himyar, Nabatéens, Séleucides, Parthes, Gréco-bactriens, Kouchans, Sassanides, Samanides, Seldjoukides, Khwarezm, Géorgie médiévale, Timourides, Empire durrani ; lignée Perse complétée). ✅ Vague 3 (Afrique, 14 fiches : Numidie, Nubie chrétienne, Almoravides et Almohades, Kanem-Bornou, Mamelouks, Cités swahilies, Royaume du Bénin, Monomotapa, Buganda, Royaume merina, Maroc saadien et alaouite, Califat de Sokoto, Royaume zoulou, Empire wassoulou ; lignée Zimbabwe créée). ✅ Vague 4 (Asie du Sud, de l'Est et du Sud-Est, 14 fiches : Empire gupta, Anuradhapura, Sultanat de Delhi, Vijayanagara, Empire marathe, Trois Royaumes de Corée, Six Dynasties, Japon ancien, Champa, Đại Việt, Pagan, Majapahit, Ayutthaya, Sultanat de Malacca ; lignées Inde, Chine, Corée, Japon complétées, lignée Indonésie créée). Vagues : 1 steppes et Russie ; 2 Perse, Asie centrale, Caucase, Arabie ; 3 Afrique ; 4 Asie du Sud, de l'Est et du Sud-Est ; 5 Océanie ; 6 Amériques ; 7 Europe antique, médiévale et moderne ; 8 États contemporains.
- Guerres A (prototype Seconde Guerre mondiale) puis B (extension).
- Play Store (TWA sur le domaine du studio, knightborn-studio.fr).
