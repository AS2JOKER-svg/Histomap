# V3 « Aventure » — Vérification de conformité (15/11/2026)

Comparaison entre ce qui a été demandé au départ (analyse produit du 13/11, tes réponses des 13-15/11, règles de
`CLAUDE.md`) et ce que fait l'app sur la branche `v3-aventure`, après le sprint 24.

✅ conforme · ⚠️ conforme avec une réserve · ❌ non fait

> **Depuis la V3.1 « Allègement » (16-20/11/2026)**, plusieurs décisions des sections 1 à 5 sont remplacées
> (médailles → étoiles, Épreuve de 12 sans mi-temps, coffres, cosmétiques et objectif de la semaine retirés,
> carte du parcours…). L'état de sortie de la V3.1 est au **§ 9**.

## Méthode

- Tests automatiques : `npm run data` (0 erreur, 0 alerte, 26 tests des règles de l'Aventure).
- Recette dans un vrai navigateur (Chromium, téléphone 390 × 844, app compilée servie par `npm run preview`) :
  - nouvel utilisateur ;
  - joueur avancé (ancienne sauvegarde v2 migrée) ;
  - épreuve complète avec mi-temps et résultat ;
  - thème sombre ;
  - **hors-ligne** (réseau coupé après la 1re visite).
  
  Aucune erreur de console.
- Audit d'accessibilité axe-core (WCAG 2 A et AA) sur 14 écrans × 2 thèmes : **0 violation** après corrections.
- Simulation d'un joueur type sur tout le contenu (1 étape par jour) pour régler le barème.

## 1. Les demandes du départ (analyse produit validée le 13/11)

| Demande | Statut | Où / comment |
|---|---|---|
| Un parcours guidé « Aventure », onglet par défaut | ✅ | `#/` : 5 mondes, rail des salles, médailles, verrous expliqués |
| Une seule action évidente à l'ouverture | ✅ | Étape du jour collée en bas ; elle suit la boucle d'une salle (sprint 24) |
| Parcours d'apprentissage avec étapes et récompenses | ✅ | 51 salles de tronc, 163 annexes, 5 mondes |
| Boucle courte : découverte → vérification → célébration | ✅ | Découvrir = les cartes essentielles du chapitre (≈ 9) + 3 questions : le contenu existant est gardé tel quel (décision du 13/11). Depuis le sprint 25, au-delà de 8 cartes, une question arrive au milieu du paquet : on ne lit jamais plus de 4 ou 5 cartes sans être interrogé. |
| Atlas = Frise + Carte, bascule en un geste | ✅ | `AtlasSwitch`, dernière vue mémorisée |
| Récits et guerres | ✅ | Onglet Guerres, 5 dossiers |
| Profil et maîtrise : statistiques, série, trophées, révision | ✅ | Profil complet, « À revoir » |
| Révision **espacée** | ✅ | Version simple (sprint 25) : les erreurs reviennent d'elles-mêmes dans l'étape du jour dès qu'une salle en compte 5, ou quand la plus ancienne a 3 jours ; une fois par jour, 6 cartes et 6 questions au plus ; une erreur réussie sort de la liste. Pas de calendrier J+1, J+3, J+7 question par question. |
| Maîtrise bronze, argent, or par civilisation | ✅ | Découvrir → bronze, Approfondir → argent, Épreuve ≥ 15 → or |
| Jauges de complétion par époque | ✅ | Bandeau du monde, page des cinq mondes, Profil |
| Célébrations : animations, vibrations, récap partageable | ✅ | Sprint 22. Vibrations et partage natif **à vérifier sur un vrai téléphone** |
| Série sans punir | ✅ | Jokers (gagnés tous les 7 jours et aux niveaux), record conservé |
| Design chaleureux « musée » | ✅ | Direction B, clair et « Musée de nuit » |
| Fiches condensées et respirantes | ✅ | Écarté par décision (15/11/2026) : l'Atlas est l'espace « pour aller plus loin », les fiches gardent un maximum d'informations (6 onglets). Seul leur bouton devient le bandeau « Dans l'Aventure ». |
| Sessions de 2 à 4 minutes | ✅ | Découvrir et Approfondir ≈ 3 min, Épreuve ≈ 5 min |
| Onboarding interactif de 30 s, mini-quiz de 3 questions, 1re récompense | ✅ | `#/bienvenue`. Adapté à ta décision : on choisit un fil rouge, et tout le monde commence à la Préhistoire |

## 2. Tes décisions

| Décision | Statut | Vérification |
|---|---|---|
| Section Aventure avec un parcours clair | ✅ | Recette visuelle |
| Atlas qui réunit Frise et Carte | ✅ | Recette visuelle, anciens liens `#/frise`, `#/carte` intacts |
| Gamification poussée, gratification à chaque étape | ✅ | XP, niveaux (1-50), rangs, coffres, titres, cosmétiques, objectif de la semaine (pas de ligues : pas de serveur) |
| Tronc verrouillé, Atlas libre pour fouiller | ✅ | Fiches lisibles même verrouillées ; seules les salles ouvertes sont créditées (test) |
| Épreuve de 20 questions rendue gratifiante, sans vies | ✅ | XP en direct, combo ×1 à ×5, mi-temps, étoiles 15/17/19 |
| Cosmétiques et titres simples gratifiants, pas de monétisation | ✅ | 9 thèmes, 8 sceaux, 6 cadres, 6 effets |
| Titres variés, drôles, créatifs | ✅ | 31 titres de fils rouges réécrits (« Tous les chemins mènent à toi »…) |
| Tronc par époque + fils rouges | ✅ | `content/parcours.json`, validé au build |
| ≈ 50 salles de tronc, le reste en bonus | ✅ | 51 salles, 163 annexes |
| Annexes débloquées une par une, règle du fil rouge | ✅ | Validateur + test (Éthiopie ← Aksoum ← Koush) |
| Avancer au bronze et à l'argent, pas trop dur | ✅ | Salle suivante au bronze, monde suivant à l'argent ; l'or jamais obligatoire (tests) |
| Système de niveaux avec récompenses par palier | ✅ | Une récompense à chaque niveau jusqu'au 20, puis tous les 5 |
| Direction B, récompense plus éclatante, nouvelles polices | ✅ | Écrans de récompense sur fond encre animé |
| Échec : diminution drastique de l'XP | ✅ | 2 XP par bonne réponse, sans combo (test) |
| Revoir ses erreurs | ✅ | Liste repliée sous le résultat de l'épreuve |
| Guerres B terminé avant la V3, nouvelle branche | ✅ | `refonte-v2` fusionnée dans `v3-aventure` |

## 3. Règles du projet (`CLAUDE.md`)

| Règle | Statut | Vérification |
|---|---|---|
| 0 erreur, 0 alerte ; build qui passe | ✅ | `npm run build` |
| Contraste AA, boutons ≥ 44 px, `aria-label` des boutons-icônes | ✅ | axe-core : 0 violation (28 pages). axe ne mesure pas le texte posé sur un dégradé : la couverture des chapitres a été corrigée à la main (fond assombri garanti, texte blanc ≥ 4,5:1) |
| Anciens liens fonctionnels | ✅ | `#/reviser/…/quiz` → bonne étape ou panneau de la salle (recette) |
| Pas de serveur, de compte ni de pistage | ✅ | L'image partagée est dessinée sur le téléphone |
| Hors-ligne | ✅ | Recette réseau coupé : Aventure, Profil, une salle (chapitre compris), une fiche |
| `localStorage` via `storage.js`, migration si le schéma change | ✅ | v2 → v3 testée (et sur une vraie sauvegarde) |
| Avant / après identiques pour les cartes et les quiz | ✅ | Mêmes fonctions (`buildDeck`, `composeQuiz`) ; seules les questions éclair sont nouvelles |
| Un commit par sprint, jamais de push | ✅ | Sprints 15 à 24 commités sur `v3-aventure` |

## 4. Corrigé pendant cette vérification (sprint 24)

- **Bug** : les 3 questions de la bienvenue ne s'affichaient pas (cachées sous l'écran).
- **Étape du jour** : elle proposait Découvrir et Approfondir de toutes les salles avant la moindre Épreuve. Le joueur stagnait au milieu du parcours (niveau 10 au jour 47, niveau 20 au jour 237). Elle suit maintenant la boucle d'une salle. Après correction : niveau 5 au jour 6, 10 au jour 18, 15 au jour 51, 20 au jour 93, 25 au jour 141.
- **Barème** : réussir une épreuve après un échec rapporte l'XP entière. Seule une salle déjà en or (rejouée pour les étoiles) est divisée par deux.
- **Épreuve** :
  - quand l'or n'est plus atteignable, le compteur montre l'XP réelle ;
  - la mi-temps encourage au lieu d'afficher trois fois « plus possible » ;
  - un échec sur une salle déjà en or ne dit plus « encore N points pour l'or ».
- **Contrastes** :
  - pastilles des fils rouges (Profil, bienvenue) ;
  - compteurs de la frise ;
  - camps des dossiers de guerre ;
  - couverture des chapitres ;
  - attribut ARIA invalide sur la bienvenue.
- **Lisibilité** :
  - titres de l'étape du jour et noms d'annexes sur 2 lignes au lieu d'être coupés ;
  - annexes repliées au-delà de 2 par salle ;
  - fils rouges du Profil repliés au-delà de 5 ;
  - doublon « question N / 20 » retiré de l'épreuve.

## 5. Ce qui reste à vérifier ou à décider

1. **Sur un vrai téléphone Android** : vibrations, partage natif de l'image, fluidité des animations, installation de l'app. Je n'ai pu tester que dans un navigateur automatisé.
2. **L'écran de réussite d'épreuve** (rayons, médaille, coffre) n'a pas été vu en recette automatique, car il faut répondre juste. Il est vérifié par rendu hors navigateur seulement.
3. ✅ **Questions générées à partir des dates clés** : corrigé le 15/11/2026, voir le § 6.
4. ✅ **Révision espacée** : version simple faite au sprint 25 (voir § 7). Les fiches restent détaillées, par décision du 15/11/2026.
5. **Niveau 50** : atteint vers 80 % du contenu total. C'est voulu (il reste des annexes à finir pour les titres), mais réglable.
6. **Sons et musique sur un vrai téléphone** : volume, équilibre entre la musique et les sons, coupure quand l'app passe en arrière-plan. Vérifiés seulement dans un navigateur automatisé (des notes sont bien jouées, plus aucune après la coupure).
7. **Lien de défi** : il ouvre le site (ou l'app installée si le système le propose). Les deux joueurs doivent avoir la même version de l'app pour recevoir exactement les mêmes questions.

## 6. Correctif des questions générées (15/11/2026)

**Constat.** Les 3 613 questions rédigées à la main étaient bonnes. Le problème venait des questions générées à partir des dates clés : 350 titres sur 1 546 tenaient en un seul mot. Résultat : 41 % des questions sur les dates clés avaient une réponse ou un leurre faible, voire ambigu. Des leurres venaient aussi d'autres continents (« James Cook » pour l'Europe paléolithique). Enfin, les Épreuves ne comptaient que 22 % de questions rédigées.

**Correctifs.**
- **Générateur** (`src/lib/quiz.js`) :
  - les titres d'un seul mot ne servent plus, ni comme question, ni comme réponse, ni comme leurre ;
  - les leurres d'événements viennent d'abord de la même civilisation, puis du même continent ;
  - une description qui répète le titre ne donne plus de question vide ;
  - l'Épreuve vise environ 14 questions rédigées sur 20.
- **Contenu** : les 350 titres sont renommés en intitulés explicites, dans 144 fiches. Ils sont tirés du champ `info`, sans année, avec « selon la tradition » quand il le faut. Une relecture séparée a donné 25 corrections (prudence, neutralité, titres encore vagues). La règle est ajoutée au guide d'édition.

**Avant / après (règle 10).**
- Les 17 639 identifiants de questions sont tous conservés : aucune progression perdue.
- Seuls les 6 types de questions sur les dates clés changent, et 4 questions vides disparaissent.

| | Avant | Après |
|---|---|---|
| Questions sur les dates clés avec un titre d'un seul mot | 41 % | 0 % |
| Questions rédigées à la main dans les Épreuves | 22 % | 70 % |
| Leurres hors du continent pour les questions d'événements | oui | non |

## 7. Sprint 25 : finitions de sortie (15/11/2026)

**Ajouté.**
- **Erreurs à revoir dans l'étape du jour** (`listeARevoir`, `etapeDuJour` dans `src/lib/aventure.js`) : proposées dès 5 erreurs dans une salle, ou quand la plus ancienne date de 3 jours ; une seule fois par jour ; séance plafonnée à 6 cartes et 6 questions.
- **Question au milieu de Découvrir** : au-delà de 8 cartes, la 1re question éclair arrive à mi-paquet.
- **Sons d'interface** (`src/lib/sons.js`) : carte, bonne réponse (de plus en plus aiguë avec le combo), erreur (douce), fin d'étape, médaille, niveau, coffre. Tout est synthétisé dans le navigateur, sans fichier son.
- **Musique d'ambiance** (`src/lib/musique.js`) : 12 ambiances (Préhistoire, Orient, Méditerranée, Moyen Âge européen, Asie de l'Est, Inde, gamelan, Afrique, Amériques, Océanie, baroque, contemporain), choisies selon la région et l'époque de la salle ou de la fiche ouverte ; boucles d'environ 48 s ; **désactivée par défaut**, bouton dans l'en-tête et réglage dans le Profil.
- **Défis**, sans serveur ni compte (`/defis`) :
  - défi par lien : on joue 10 questions, on envoie le lien (partage natif, sinon copie) ; la graine dans l'URL donne exactement les mêmes questions à l'ami, qui voit le score à battre puis le verdict ;
  - à deux sur le même téléphone : chacun son tour, écran « Passe le téléphone » qui cache le premier score, revanche avec de nouvelles questions ;
  - quiz infini : questions sans fin sur les salles découvertes, série et record.
  - Aucun défi ne rapporte d'XP ni ne change la progression.

**Vérifié.**
- Recette dans un navigateur automatisé (390 × 844) : étape du jour « 7 erreurs à revoir », question au milieu de Découvrir (Carthage), musique activée sur une fiche, défi créé et joué, défi reçu avec verdict, défi à deux jusqu'à la revanche, quiz infini et sa pause : **0 erreur de console**.
- Audio : la musique joue des notes en continu (9 en 4 s) et plus aucune après la coupure ; une réponse déclenche son son.
- axe-core WCAG AA : 17 écrans × 2 thèmes. Une violation trouvée et corrigée : le bouton vert « Compris » des cartes manquait de contraste en sombre (texte passé à la couleur du fond).
- Tournures corrigées : « 10 questions sur Égypte antique » (article manquant) ; champ prénom avec un vrai repère de focus.
- `npm run build` : contenu valide, 214 chapitres, 29 tests (dont l'étape du jour « À revoir » et les défis : même graine = mêmes questions, lien lu et nettoyé).


## 8. Sprint 33 : notifications (18/11/2026)

Décision 25 du cadrage V3.1 : on reste en PWA / TWA, sans serveur. Les notifications sont donc **locales et « au mieux »**.

**Ce que voit le joueur** (Profil › Réglages › Notifications, maquette 16).
- « Rappel du jour » : si tu n'as pas encore joué ce jour-là.
- « À partir de » : 17 h, 18 h (par défaut), 19 h ou 20 h. L'heure vaut pour les deux rappels.
- « Série en danger » : le soir, si ta série va s'arrêter.
- Tout est éteint au départ. Allumer un interrupteur demande l'autorisation du téléphone : c'est le seul endroit de l'app où elle est demandée.
- Les interrupteurs sont grisés, avec une phrase d'explication, quand les rappels sont impossibles : navigateur sans synchronisation périodique (iPhone, Firefox), application pas installée, notifications bloquées.
- Toucher une notification ouvre l'app sur la salle en cours (`#/?salle=…`). Les rappels restés dans le tiroir du téléphone disparaissent quand on ouvre l'app.

**Les textes.**
- Rappel du jour : un titre par jour, à tour de rôle (« Une petite séance d'histoire ? », « L'Aventure continue », « Quelques minutes d'histoire ? »), puis « Prochaine salle : Carthage. » ou « Reprends ta séance : Carthage. ».
- Série en danger : « Ta série de 6 jours va s'arrêter », puis « Termine une étape avant minuit pour la garder. Prochaine salle : Carthage. ».

**Les règles** (`src/lib/rappels.js`, testées).
- Rien entre 21 h et 8 h, ni avant l'heure choisie.
- Rien si l'on a déjà joué ce jour-là. « Joué » veut dire la même chose que pour la série : une étape terminée ou une séance « À revoir ».
- Rien si l'app est à l'écran.
- « Série en danger » passe d'abord : série d'au moins 2 jours, dernier jour pour la garder, aucun joker pour la couvrir. Sinon, c'est le rappel du jour.
- Chacune une fois par jour, pas de rappel après une alerte de série : 2 notifications par jour au plus.

**Comment ça marche.**
1. L'app écrit un petit état dans IndexedDB (base `histomap`, magasin `rappels`, clé `etat`) : réglages, dernier jour joué, série, salle en cours. Elle le réécrit dès qu'il change.
2. Chrome réveille le service worker de temps en temps (événement `periodicsync`, étiquette `histomap-rappels`).
3. Le service worker choisit la notification, la montre, et le note (clé `journal`).

Les règles sont écrites une seule fois, dans `src/lib/rappels.js`. Le build les recopie dans `dist/sw.js` (`scripts/lib/service-worker.mjs`).

**L'heure n'est pas garantie : pourquoi, et ce qu'on y fait.**
- Chrome réveille une application au plus toutes les 12 h. Il arrondit les délais à 12 h si le site est très utilisé, à 24 h ou plus sinon (code de Chromium). Les délais partent du moment où l'app s'inscrit.
- On ne peut donc pas demander « 18 h ». L'app se réinscrit, une fois par jour au plus, quand on l'ouvre entre l'heure choisie et 21 h. Les réveils suivants tombent alors vers cette heure-là, les jours où l'on ne vient pas.
- Conséquence : le rappel marche bien pour qui joue d'habitude le soir. Pour qui n'ouvre jamais l'app dans cette plage, il peut ne jamais tomber au bon moment.
- Chrome ne réveille l'app qu'avec une connexion réseau. Il peut aussi retarder le réveil (économiseur de batterie, téléphone en veille profonde), ou ne jamais réveiller un site qui n'a pas été utilisé.

**Vérifié.**
- `npm test` : 72 tests, dont 7 nouveaux :
  - « dernière chance » d'accord avec `etatSerie` et `enregistrerActivite` (6 écarts × 4 nombres de jokers × 3 séries × 7 jours) ;
  - nuit, heure et déjà joué, sur les 24 heures × 4 heures de rappel ;
  - priorité de la série, plafond de 2 par jour, textes ;
  - réinscription ;
  - `sw.js` assemblé : script classique valide, qui prend les mêmes décisions que le module.
- Recette dans Chrome sans tête : app compilée, 390 × 844, clair et sombre, fuseau horaire réglé pour qu'il soit 19 h. **41 vérifications**, dont :
  - le vrai réveil du service worker par les outils de développement (`ServiceWorker.dispatchPeriodicSyncEvent`) : notification « Ta série de 6 jours va s'arrêter » relue (texte, adresse, badge), journal écrit ;
  - un 2e réveil le même soir ne montre rien ;
  - rien la nuit, le matin, avant l'heure choisie, après avoir joué, ni avec l'app à l'écran ;
  - clic sur la notification → panneau de la salle ;
  - tiroir vidé à l'ouverture ;
  - désinscription quand tout est éteint ;
  - autorisation refusée, notifications bloquées, app non installée.
- 0 erreur de console ; axe-core WCAG AA sur 4 écrans : 0 violation.

**Tester à la main avec les outils de développement de Chrome.**
1. `npm run build`, puis `npm run preview`. Ouvrir l'adresse dans Chrome et installer l'app (icône d'installation dans la barre d'adresse). Sur un téléphone, passer par `chrome://inspect` depuis un ordinateur.
2. Profil › Réglages › Notifications : allumer « Rappel du jour », accepter l'autorisation, choisir une heure déjà passée.
3. Ouvrir `chrome://serviceworker-internals` et inspecter le service worker de HistoMap. Fermer ensuite l'app : rien n'est montré tant qu'elle est à l'écran.
4. Dans la console du service worker :
   - `await rappelDuMoment()` montre la notification du moment, s'il y en a une, et la renvoie ;
   - `await rappelDuMoment(new Date('2026-11-18T19:30'))` simule une heure ;
   - `await lireRappels('etat')` affiche l'état écrit par l'app ;
   - `await ecrireRappels('journal', null)` efface le journal du jour, pour recommencer.
5. Le vrai événement se déclenche aussi depuis Application › Service workers › « Periodic sync », avec l'étiquette `histomap-rappels`. L'app doit être cachée.

**Note pour la TWA (Play Store).**
- Bubblewrap : mettre `enableNotifications: true` dans `twa-manifest.json`. C'est la délégation des notifications : elles s'affichent au nom de l'app, avec son icône, et l'autorisation devient celle de l'app Android.
- Sur Android 13 et plus, la demande de Réglages doit faire apparaître la fenêtre système d'Android (autorisation `POST_NOTIFICATIONS`). Utiliser une version récente de Bubblewrap (`targetSdk` 33 ou plus).
- Si c'est la fenêtre de Chrome qui s'affiche à la place, la délégation ne marche pas. La cause est souvent le fichier `assetlinks.json` (Digital Asset Links) du domaine.
- Icône de la barre d'état : `monochromeIconUrl` → `icons/badge-96.png` (blanc sur transparent).
- La synchronisation périodique marche dans une TWA installée : Chrome l'accorde aux origines qui ont une TWA (fonction `IsTwaInstalled` de Chromium).

**À vérifier sur un vrai téléphone** (sprint 35).
- La notification arrive dans la soirée, un jour sans jouer, après avoir ouvert l'app la veille vers l'heure choisie.
- La fenêtre d'autorisation d'Android 13.
- Le badge dans la barre d'état.
- Le clic quand l'app est fermée : il ouvre l'app via `clients.openWindow`, non testable sans tête.

## 9. V3.1 « Allègement » : recette de sortie (sprint 35, 20/11/2026)

Recette de toute l'app après les sprints 26 à 34, sur la branche `v3-1`, avant la fusion dans `main`.

### Méthode

- `npm run build` : contenu valide (214 chapitres, 3 672 questions rédigées toutes reliées à une carte, 2 106 générées),
  **73 tests**, 0 erreur, 0 alerte.
- Recette dans un navigateur automatisé : Chrome piloté par Playwright, app compilée servie par `vite preview`.
  **4 configurations** : 390 × 844 et 360 × 640, en clair et en « Musée de nuit ».
  - **427 vérifications automatiques, 0 échec.**
  - **0 erreur de console** sur toute la recette.
- Audit d'accessibilité axe-core (WCAG 2.1 A et AA) : **219 passages, 0 violation** après les corrections du § 9.4.
- Simulation d'un joueur (`npm run simulation`), voir le § 9.2.

### 9.1 Ce qui a été joué

**Parcours de jeu, dans les 4 configurations**
- **Premier lancement** :
  - `#/` mène à la bienvenue : fil Égypte, 3 questions, +50 XP, sauvegarde v5 ;
  - puis la carte : un seul « Jouer », pas de défilement horizontal.
- **Boucle d'une salle** :
  - panneau, puis « Jouer », qui mène à Découvrir : 9 cartes et les questions éclair ;
  - fin de Découvrir (« Passer l'épreuve », « Salle suivante ») ;
  - Épreuve de 12 questions différentes : 10/12 donne ★ ;
  - retour sur la carte : la salle suivante est la salle en cours ;
  - Épreuve rejouée : **les 2 questions ratées reviennent**, 12/12 donne ★★★.
- **Approfondir** (bonus), puis « Revoir les cartes » dans le panneau.
- **Annexe** : séance d'un seul tenant, mini-épreuve de 8 questions, 7/8 donne ★★.
- **Fil terminé** :
  - dernière salle du fil Chine, célébration et titre ;
  - choix du fil, puis fil Corée suivi.
- **Joueur en route** :
  - bulle « À revoir », séance, +20 XP ;
  - les erreurs réussies sortent des listes ;
  - « Ma salle » apparaît loin de la salle en cours et y ramène.

**27 écrans, dans les 4 configurations**
- Liste : carte, panneau verrouillé, « +N » du Califat, frise, époque, fiche (6 onglets), fiche liée, carte du monde,
  recherche, Guerres et 2 dossiers, Profil et ses sous-pages, À propos, Défis, défi à deux, quiz infini, choix du
  fil, page introuvable.
- Tous s'affichent, sans défilement horizontal, avec 0 violation axe.

**Atlas**
- Les 6 onglets d'une fiche.
- Un lien d'un texte ouvre l'aperçu d'une fiche liée.
- Quiz express joué, meilleur score gardé.
- Curseur de la carte du monde.
- Recherche « Napoléon ».

**Défis**
- Défi par lien : 10 questions, lien copié avec le prénom.
- L'ami qui ouvre le lien reçoit **exactement les mêmes questions, dans le même ordre**.
- Aucune XP gagnée.
- Quiz infini.

**Anciens liens**
- `#/reviser`, `#/reviser/antiquite`, `#/reviser/antiquite/egypte`, `…/quiz`.
- `#/aventure`, `#/aventure/mondes`.
- `#/frise/…`, `#/carte`.

**Sauvegardes anciennes**
- v2 (avant l'Aventure) migrée en v5 : salles découvertes, 18/20 → ★★, XP rétroactive.
- v3 (testeurs de la 3.0) migrée en v5, en clair et en sombre :
  - 19/20 → ★★★, 15/20 → ★ ;
  - XP, série et jokers gardés ;
  - coffres, cosmétiques et objectif retirés ;
  - thème « Indigo » remplacé par le thème par défaut ;
  - l'épreuve de 20 en cours est abandonnée, et une Épreuve de 12 se joue normalement.

**Hors-ligne** (réseau coupé après une 1re visite)
- 1 303 fichiers mis en cache.
- Tout fonctionne : carte, panneau, Découvrir d'une salle jamais ouverte, fiche et fiche liée jamais ouvertes,
  dossier de guerre, carte du monde déjà vue, Profil, Épreuve complète.
- 0 erreur pendant la coupure.

**Divers**
- **« Réduire les animations »** : résultat ★★★ affiché sans aucune animation.
- **Fluidité** (processeur ralenti ×4, comme un téléphone moyen) :
  - carte affichée en 257 ms ;
  - défilement de 8 500 px à 16 ms par image, 0 image lente.
- **Réglages › Notifications** : éteintes au départ. Dans un navigateur (app non installée), elles sont grisées
  avec une explication.

### 9.2 Simulation d'un joueur : durée de chaque monde

Joueur type, 80 % de bonnes réponses, tronc seul. Chiffres inchangés depuis le sprint 29.

| Monde | Salles | Temps | Niveau à la fin |
|---|---|---|---|
| Préhistoire | 5 | 37 min | 8 |
| Antiquité | 11 | 1 h 17 | 13 |
| Moyen Âge | 12 | 1 h 35 | 18 |
| Époque moderne | 12 | 1 h 25 | 21 |
| Époque contemporaine | 11 | 1 h 23 | 24 |
| **Total** | **51** | **6 h 18** (≈ 26 jours à 15 min) | **24** (Chroniqueur) |

Autres profils :
- avec le fil Corée (+5 salles) : 6 h 47, niveau 24 ;
- joueur à 60 % de bonnes réponses : 8 h 59, niveau 18 ;
- joueur « complet » (Approfondir et toutes les annexes) : 23 h 35, niveau 41.

### 9.3 Les 27 décisions de la V3.1

| # | Décision | Statut | Vérification |
|---|---|---|---|
| 1 | Découvrir = salle découverte, qui ouvre la suivante | ✅ | Recette (1re salle → 2e salle en cours), tests |
| 2 | Épreuve dès la découverte, 12 questions, ★ 9 · ★★ 11 · ★★★ 12, 3 ratées reviennent | ✅ | Recette : 10/12 → ★, les ratées reviennent, 12/12 → ★★★ |
| 3 | Approfondir = bonus, ses cartes entrent dans l'Épreuve | ✅ | Recette, tests (`epreuve.js`) |
| 4 | Étoiles seulement, seuils affichés au résultat seulement | ✅ | Panneau sans seuils, résultat avec seuils |
| 5 | Chemin continu d'un monde à l'autre | ✅ | Tests : suivre la salle en cours mène au bout pour les 32 fils |
| 6 | Annexe = une séance, puis mini-épreuve de 8 (★ 6 · ★★ 7 · ★★★ 8) | ✅ | Recette : 7/8 → ★★ |
| 7 | Annexe ouverte quand sa salle parente est découverte | ✅ | Tests (règle V3 gardée en plus : son monde doit être atteint) |
| 8 | Toute question porte sur une carte déjà vue | ⚠️ | Aventure, défis, « À revoir » : oui (validateur, tests). **Exception : la bienvenue pose 3 questions sur la 1re salle avant toute carte** (héritée de la V3) |
| 9 | Chaque question reliée à sa carte, questions générées depuis les cartes | ✅ | 3 672 reliées, 0 hors cartes, 0 salle sous le seuil |
| 10 | Combo au-delà de ×5, XP plafonnée à ×5 | ✅ | Recette (12/12 : combo jusqu'à ×12), tests |
| 11 | Carte verticale de bas en haut, ouverte sur la salle en cours, « Ma salle » | ✅ | Recette |
| 12 | Chemin = tronc + fil, pastilles et noms courts, « Jouer » | ✅ | Recette, 990 cartes testées sans chevauchement |
| 13 | Annexes en bulles près de leur salle | ✅ | Recette, tests |
| 14 | Le fil rouge entre dans le chemin, fin de fil, « à rattraper » | ✅ | Recette (fil Chine → Corée), tests |
| 15 | Décor par monde, pictogrammes SVG, aucune image | ✅ | Captures |
| 16 | Bulle « À revoir » dès 5 erreurs ou 3 jours | ✅ | Recette : +20 XP, une fois par jour |
| 17 | Plus de bandeau fixe en bas | ✅ | Captures |
| 18 | En-tête : niveau et XP seulement | ✅ | Recette ; contraste corrigé (§ 9.4) |
| 19 | Panneau court, un seul gros bouton | ✅ | Recette, tests (214 salles × 6 états × 3 fils) |
| 20 | Profil court et 4 sous-pages | ✅ | Recette |
| 21 | Réglages complets | ✅ | Recette ; vibrations et notifications à sentir sur un téléphone |
| 22 | Défis seulement depuis le Profil | ✅ | Recette |
| 23 | Cosmétiques, coffres, objectif de la semaine retirés | ✅ | Recherche dans le code et les textes : plus aucune trace ; migration v3 |
| 24 | XP, rangs, jokers, série, titres, combo, partage gardés | ✅ | Recette, tests |
| 25 | Notifications locales au mieux, 2 par jour au plus, rien la nuit | ⚠️ | Chrome sans tête (sprint 33, 41 vérifications) ; **vrai téléphone : à faire** (§ 9.5) |
| 26 | Vibrations : motifs allongés, interrupteur dédié, mode silencieux expliqué | ⚠️ | Navigateur seulement ; **vrai téléphone : à faire** (§ 9.5) |
| 27 | Migration de la sauvegarde v3 → v4 (puis v5) | ✅ | Recette (v2 et v3 → v5), tests |

### 9.4 Corrigé pendant la recette

1. **Contraste de l'en-tête.**
   - Le problème : depuis le sprint 32, l'en-tête porte le rang et l'XP en petit texte, sur un fond translucide à
     72 %. Au-dessus de certains mondes de la carte, le contraste tombait à 4:1.
   - La correction : l'en-tête est presque opaque (`glass-barre`), comme la barre d'onglets depuis le sprint 30.
2. **Badges « personne »** (recherche, aperçus).
   - Le problème : ils étaient écrits dans l'or de décor (#a8791c), soit 3,1:1 sur leur fond.
   - La correction : un or foncé #70500e, au moins 4,8:1 (jeton `--c-accent-2-texte`). Inchangés en sombre.
3. **Tutoiement partout.** L'app tutoie (« Ta série », « Quel fil rouge te fait envie ? »), mais des textes
   hérités de la V1/V2 vouvoyaient, dès la 1re carte de Découvrir (« Glissez à droite ce que vous avez compris »).
   - Passés au tutoiement :
     - 27 textes d'interface et de générateurs (« Touche les éléments… », « Vérifie ta connexion… », quiz express) ;
     - 327 consignes des chapitres : « Remets dans l'ordre » (×214), « Compare : » (×103), « Change d'année » (×7),
       « Repère » (×3).
   - Les citations historiques n'ont pas été touchées (« Quittez l'Inde », Hérodote, Voltaire).
   - Aucun id n'a changé. Les rapports des questions éclair et des questions par carte sont identiques.
   - La règle est ajoutée à `GUIDE_EDITION.md`.
4. **Question « Qui est-ce ? » sur Toumaï.**
   - Le problème : l'explication écrivait « Toumaï, sahelanthropus tchadensis… », car le générateur met en
     minuscule la 1re lettre du rôle.
   - La correction : le rôle devient « Crâne de Sahelanthropus tchadensis… » (Toumaï est le surnom d'un crâne).
     Le premier mot des 381 autres rôles de cartes `person` a été vérifié : aucun autre ne commence par un nom
     propre ou un nom scientifique.
   - La règle est ajoutée au guide.
5. **Manifeste de l'app.**
   - Le raccourci « Réviser » (V2), visible par un appui long sur l'icône, devient « Aventure ».
   - La description de la V2 est remplacée (manifeste et page).
6. **Simulation.** Elle affichait « 4 h 60 », elle affiche maintenant « 5 h 00 ».

### 9.5 À vérifier sur un vrai téléphone Android (par toi)

Je ne peux pas le faire moi-même. Le plus simple est de tester sur le site des testeurs, une fois `main` déployé.

**Préparation.**
- Chrome à jour sur le téléphone.
- Ouvrir le site, puis menu ⋮ › « Installer l'application ».
- Ouvrir l'app installée, et non l'onglet de Chrome.

**1. Vibrations.**
- En mode **sonnerie** :
  - Profil › Réglages › Vibrations › « Tester » ;
  - puis une bonne réponse, une erreur et un résultat avec étoiles dans une Épreuve.
- Pareil en mode **vibreur**.
- En mode **silencieux**, il ne doit rien se passer : c'est attendu, et c'est expliqué dans Réglages.

**2. Notifications.**
- Réglages › Notifications › allumer « Rappel du jour ». La fenêtre d'autorisation d'Android 13 (ou de Chrome)
  doit apparaître : accepter.
- Garder 18 h et allumer « Série en danger ».
- Ouvrir l'app un soir vers 18-20 h, puis ne pas jouer le lendemain. Une notification devrait arriver dans la
  soirée : c'est Chrome qui choisit l'heure, au mieux.
- À vérifier :
  - le texte de la notification ;
  - la petite icône dans la barre d'état ;
  - le toucher **app fermée** : l'app doit s'ouvrir sur la salle en cours ;
  - jamais plus de 2 notifications par jour, ni la nuit.

**3. Hors-ligne.** En mode avion, ouvrir l'app installée et jouer une salle.

**4. Le reste.**
- Bouton ou geste « retour » d'Android :
  - sur un panneau, il doit le fermer ;
  - pendant une Épreuve, il doit ramener sur la carte.
- Le clavier sur le prénom d'un défi ne doit pas cacher le champ.
- « Partager mon résultat » doit ouvrir la feuille de partage d'Android.
- Un lien de défi ouvert depuis un message doit donner les mêmes questions.
- Sons et musique : volume, et arrêt quand l'app passe en arrière-plan.

Dis-moi ce qui marche et ce qui ne marche pas, et je complète ce paragraphe.

### 9.6 Reste douteux ou à décider

- **La bienvenue** pose 3 questions sur la 1re salle **avant toute carte**. C'est une exception à la décision 8,
  héritée de l'onboarding de la V3. Deux options :
  - la garder comme mise en jambes ;
  - la remplacer par 2 ou 3 cartes, puis 3 questions.
- **Polices** : elles sont chargées depuis Google Fonts. Au 1er lancement, cela fait une requête vers Google, et
  les polices manquent hors-ligne avant une 1re visite. Il vaut mieux les héberger dans l'app avant le Play Store
  (licence OFL).
- **Notifications** : l'heure n'est pas garantie (c'est Chrome qui décide), le réseau est requis, et rien ne
  marche sur iPhone. Délégation de la TWA : voir le § 8.
- **À relire par toi** : les 37 ancres d'annexes (sprint 30) et les 57 noms courts (sprint 29).
- **Jours joués** des sauvegardes d'avant le sprint 32 : c'est une estimation.
- **Thème** : il n'y a que deux choix. Tant qu'on n'a rien choisi, l'app suit le téléphone, mais on ne peut pas
  revenir à ce mode.
