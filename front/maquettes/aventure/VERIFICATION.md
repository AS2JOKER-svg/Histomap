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

