# V3 « Aventure » — Vérification de conformité (15/11/2026)

Comparaison entre ce qui a été demandé au départ (analyse produit du 13/11, tes réponses des 13-15/11, règles de
`CLAUDE.md`) et ce que fait l'app sur la branche `v3-aventure`, après le sprint 24.

✅ conforme · ⚠️ conforme avec une réserve · ❌ non fait

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
