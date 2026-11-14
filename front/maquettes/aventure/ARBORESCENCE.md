# Refonte « Aventure » — Arborescence (sprint 15)

Document à valider avant les maquettes haute fidélité (sprint 16).
Direction visuelle retenue : **B — Musée vivant**, avec des récompenses plus éclatantes
(maquettes de cadrage : https://claude.ai/artifact/Y3u2FvkWSjENsYDmDTM6kY).

Les points marqués **[À VALIDER]** sont des propositions qui n'ont pas encore été tranchées.

---

## 1. Navigation

Barre du bas, 4 onglets :

| Onglet | Rôle | Écrans |
|---|---|---|
| **Aventure** (par défaut) | Le parcours guidé | Parcours, Mondes, Salle, Découvrir, Approfondir, Épreuve, Récompense, Monde terminé |
| **Atlas** | L'exploration libre | Bascule **Frise / Carte** en haut (2 gros segments, dernier choix mémorisé), fiches de civilisation, fiches liées |
| **Guerres** | Les dossiers de guerre | Inchangé (liste + dossiers) |
| **Profil** | Progression et réglages | Niveau, série, objectif de la semaine, titres, collections, cartes à revoir, réglages |

- **Recherche** : une icône loupe dans l'en-tête de tous les onglets (ouvre l'écran Recherche actuel).
- L'**Accueil** actuel disparaît : son rôle (« Continuer ») est repris par l'étape du jour de l'Aventure.
- La **Révision libre** (« Réviser ») disparaît comme onglet : on révise par l'Aventure, et les cartes ratées se retrouvent dans Profil → « À revoir ».

### Anciens liens (règle 7)

| Ancien lien | Devient |
|---|---|
| `#/` | Aventure |
| `#/frise…`, `#/carte`, `#/fiche/:id` | Inchangés, affichés dans l'onglet Atlas |
| `#/reviser` | Aventure |
| `#/reviser/:epoque` | Aventure, monde correspondant |
| `#/reviser/:epoque/:civ` (chapitre / quiz) | La salle de cette civilisation (étape en cours) |
| `#/guerres…`, `#/recherche` | Inchangés |

Nouvelles routes : `#/aventure`, `#/aventure/:monde`, `#/aventure/salle/:civ`,
`#/aventure/salle/:civ/decouvrir|approfondir|epreuve`, `#/profil`.

---

## 2. L'Aventure

### Structure

- **5 mondes** = les 5 époques : I Préhistoire, II Antiquité, III Moyen Âge, IV Époque moderne, V Époque contemporaine.
- Chaque monde a un **tronc** de salles (civilisations), à faire **dans l'ordre**. 51 au total (liste en partie 6).
- Toutes les autres civilisations (163) sont des **branches bonus**, accrochées au tronc ou à une autre branche.
- Tout le monde commence au Monde I.

### Les 3 étapes d'une salle

On réutilise les chapitres existants, sans réécrire de contenu :

| Étape | Contenu | Durée | Médaille |
|---|---|---|---|
| **Découvrir** | cartes de niveau 1 du chapitre (≈ 9) + 3 questions éclair | ~3 min | **Bronze** |
| **Approfondir** | cartes de niveau 2 (≈ 5) + 5 questions | ~3 min | **Argent** |
| **Épreuve** | quiz de 20 questions, réussi à 15/20 | ~5 min | **Or** |

- Les questions éclair viennent du réservoir de questions de la civilisation : rien à rédiger.
- Elles ne sont pas éliminatoires ; elles rapportent de l'XP et préparent l'Épreuve.
- **Étoiles de l'Épreuve** (raison de la refaire) : 15-16 = ★, 17-18 = ★★, 19-20 = ★★★.
- **Épreuve ratée** (< 15) : écran encourageant (« encore 3 bonnes réponses »), rejouable tout de suite. Comme aujourd'hui, 5 questions ratées reviennent à la tentative suivante.

### Règles de déblocage

**Tronc**

- **[À VALIDER]** La salle suivante du tronc s'ouvre quand la salle en cours a l'**argent** (Découvrir + Approfondir faits). On avance sans être bloqué par une épreuve ratée.
- **[À VALIDER]** Le monde suivant s'ouvre quand **toutes les salles du tronc** du monde ont l'**or**. Changer de monde demande de maîtriser le précédent.

**Branches** (validé)

- Une branche s'ouvre quand la civilisation dont elle dépend a le **bronze** (Découvrir fait). Ce parent peut être une salle du tronc ou une autre branche.
- **Règle du fil rouge** : une civilisation qui fait partie d'une lignée dépend de la civilisation précédente de cette lignée.
  - Exemple : l'Empire d'Éthiopie (Monde V) demande Aksoum (Monde II).
  - Exemple : Aksoum demande Koush.
- Les autres branches dépendent d'une civilisation liée par l'histoire ou la géographie (Nouvelle-France ← France de l'Ancien Régime ; Maoris ← Lapita).
- À défaut, elles dépendent de la salle du tronc du même continent.
- Aucune branche ne dépend d'une civilisation d'un monde plus tardif (vérifié par script).
- Une branche verrouillée affiche sa condition : « Découvre d'abord : Royaume de Koush ».

### L'Atlas reste libre

On peut tout lire dans l'Atlas, même une civilisation verrouillée dans l'Aventure. Seules les étapes de jeu (Découvrir, Approfondir, Épreuve) sont verrouillées.

Une fiche de civilisation affiche un bandeau « Dans l'Aventure : Monde II, salle 6 — ouverte / verrouillée », avec un bouton qui y mène. Ce bouton remplace le bouton « Réviser » actuel.

---

## 3. Écrans de l'Aventure

| Écran | Contenu |
|---|---|
| **Parcours** (accueil) | En-tête : niveau + barre d'XP, série de jours, loupe. Titre du monde + jauge (« 4/11 salles »). Ligne du temps verticale des salles : or / argent / bronze / en cours / verrouillée. Branches en « salles annexes » accrochées à leur parent. Carte « Étape du jour » (une seule action : titre, durée, XP à gagner). |
| **Mondes** | Les 5 mondes, leur jauge (tronc + branches), verrou, titre d'époque obtenu. |
| **Salle** (panneau qui glisse du bas) | Les 3 étapes et leur état, étoiles de l'Épreuve, « Lire la fiche » (→ Atlas), branches qui en dépendent, fil rouge auquel elle appartient. |
| **Découvrir / Approfondir** | Lecteur de cartes actuel, plus XP en direct, questions éclair en fin de série, puis petite récompense (médaille + XP). |
| **Épreuve** | 20 questions, barre en 20 segments, XP en direct, combo, écran de mi-temps à 10/20 (« 8 bonnes, encore 7 pour l'or »). |
| **Récompense** | Médaille + score + étoiles, détail de l'XP, nouveau niveau, coffre ouvert, titre débloqué, « Continuer » et « Partager mon résultat » (image générée sur le téléphone). |
| **Monde terminé** | Grande célébration : titre d'époque, thème débloqué, ouverture du monde suivant. |

### L'étape du jour

C'est toujours **une seule** proposition, choisie dans cet ordre :

1. une étape commencée et pas finie ;
2. l'étape suivante de la salle en cours du tronc ;
3. une Épreuve ratée à retenter ;
4. une branche nouvellement ouverte.

---

## 4. Profil

- Niveau, titre de niveau, XP totale, barre jusqu'au niveau suivant.
- **Série** de jours + **jokers** en réserve.
- **Objectif de la semaine** (XP), avec un coffre à la clé.
- **Titres** : ceux obtenus, et le choix du titre affiché.
- **Collections** :
  - par monde : jauges tronc et branches, médailles ;
  - par fil rouge : les 31 lignées, avec leurs membres et leurs médailles.
- **À revoir** : cartes marquées « à revoir » et questions ratées. On les rejoue en séance courte, avec un petit bonus d'XP.
- **Réglages** : thème (dont les thèmes débloqués), vibrations, réinitialiser la progression, à propos.

---

## 5. Gamification — barème proposé [À VALIDER, réglable au sprint 24]

### XP

| Action | XP |
|---|---|
| Découvrir terminé | 40 |
| Approfondir terminé | 60 |
| Question éclair juste | 5 |
| Question d'Épreuve juste | 10, plus 5 par palier de combo (2e d'affilée : 15 … plafond 30 dès la 5e) |
| Or obtenu (1re fois) | +50 |
| Nouvelle étoile d'Épreuve | +25 par étoile gagnée |
| Fiche lue pour la 1re fois dans l'Atlas | 5 |
| Quiz express d'une fiche liée | 5 par bonne réponse (1re fois) |
| Séance « À revoir » | 20 |

Une civilisation complète rapporte environ 550 à 650 XP. Les 214 civilisations font environ 125 000 XP.

**Niveaux** : il faut 100 × n XP pour passer du niveau n au niveau n+1. Le niveau 10 arrive vers 4 500 XP (≈ 9 civilisations), le niveau 50 environ au bout de tout le contenu.

**Titres de niveau** :

| Niveaux | Titre |
|---|---|
| 1-4 | Curieux |
| 5-9 | Apprenti |
| 10-14 | Explorateur |
| 15-19 | Érudit |
| 20-24 | Chroniqueur |
| 25-34 | Historien |
| 35 et + | Grand historien |

### Série et jokers

- Un jour compte dès qu'une étape est terminée (ou une séance « À revoir »).
- On gagne 1 joker tous les 7 jours de série, 2 en réserve au maximum.
- Un jour manqué consomme un joker automatiquement. La série n'est jamais punie autrement.

### Coffres

Tout est local et calculé de façon reproductible, sans tirage d'argent ni achat.

| Coffre | Quand | Contenu |
|---|---|---|
| Petit coffre | Or d'une civilisation | Bonus d'XP (25, 50 ou 100) ; parfois un joker |
| Coffre de fil rouge | Toutes les civilisations d'une lignée en or | **Titre « Maître de … »** |
| Grand coffre | Tout le tronc d'un monde en or | **Titre d'époque** + **thème** de couleurs |
| Coffre de la semaine | Objectif d'XP de la semaine atteint | Bonus d'XP + 1 joker |

### Titres (≈ 36, rares donc précieux)

- **Époques** (5) :
  - Préhistoire : « Grand savant de la Préhistoire » ;
  - Antiquité : « … de l'Antiquité » ;
  - Moyen Âge : « … du Moyen Âge » ;
  - Époque moderne : « … des Temps modernes » ;
  - Époque contemporaine : « … du monde contemporain ».
- **Fils rouges** (31) : « Maître de … », un par lignée.
  - Exemples : Maître de l'Égypte, Maître de la France, Maître de Rome et Byzance, Maître de la Chine, Maître du Japon, Maître de la Perse et de l'Iran, Maître des Ottomans et de la Turquie…
  - **[À VALIDER]** Toutes les formulations seront relues pour rester neutres. Pas de « Conquérant de … ».
- **Ultime** : « Historien universel » (les 214 civilisations en or).

### Thèmes débloquables (cosmétiques)

Un thème par monde terminé, qui recolore l'app dans les deux modes (clair et sombre) en restant AA :

- Silex (Préhistoire) ;
- Papyrus (Antiquité) ;
- Enluminure (Moyen Âge) ;
- Lapis (Époque moderne) ;
- Néon (Époque contemporaine).

Le thème Musée (direction B) est celui par défaut.

### Onboarding (premier lancement, ~30 s)

1. « Quel fil rouge te fait envie ? » : choix parmi 6 à 8 lignées populaires. Il devient ton objectif personnel, affiché dans le Profil.
2. 3 questions éclair sur la première salle (Hominidés d'Afrique de l'Est).
3. Première récompense : titre « Curieux », +50 XP, et la série commence.

On peut passer l'onboarding.

---

## 6. Le tronc et les branches

Choix du tronc : les civilisations qu'un élève de 13 ans et plus doit connaître (programmes scolaires français et grandes civilisations mondiales), avec au moins une civilisation hors d'Europe par monde. Ordre : chronologique.

- Préhistoire : 5 salles ;
- Antiquité : 11 ;
- Moyen Âge : 12 ;
- Époque moderne : 12 ;
- Époque contemporaine : 11.

**[À VALIDER]** Tu peux échanger n'importe quelle salle avec une branche : le rattachement des branches se recalcule par script.

### Monde I — Préhistoire (5 salles, 5 branches)

**Tronc** (dans l'ordre) :

1. Hominidés d'Afrique de l'Est — Afrique
2. Europe paléolithique — Europe
3. Aborigènes d’Australie — Océanie
4. Proche-Orient (Göbekli Tepe) — Asie
5. Mésopotamie pré-urbaine — Asie · fil rouge Mésopotamie

**Branches bonus** :

| Branche | Continent | S'ouvre après la découverte de | Raison |
|---|---|---|---|
| Pasteurs du Sahara vert | Afrique | Hominidés d'Afrique de l'Est | même continent |
| Europe néolithique | Europe | Proche-Orient (Göbekli Tepe) | lien historique ou géographique |
| Culture Mégalithique | Europe | Europe néolithique *(branche)* | lien historique ou géographique |
| Chine néolithique | Asie | Proche-Orient (Göbekli Tepe) | même continent |
| Civilisation de Caral-Supe | Amériques | Mésopotamie pré-urbaine | lien historique ou géographique |

### Monde II — Antiquité (11 salles, 39 branches)

**Tronc** (dans l'ordre) :

1. Mésopotamie — Asie · fil rouge Mésopotamie
2. Égypte antique — Afrique · fil rouge Égypte
3. Olmèques — Amériques
4. Israël et Juda (Hébreux) — Asie
5. Carthage — Afrique
6. Grèce antique — Europe · fil rouge Monde grec
7. Celtes / Gaulois — Europe
8. Rome antique — Europe · fil rouge Rome et Byzance
9. Empire perse achéménide — Asie · fil rouge Perse et Iran
10. Empire Maurya (Inde) — Asie · fil rouge Inde
11. Chine (Qin & Han) — Asie · fil rouge Chine

**Branches bonus** :

| Branche | Continent | S'ouvre après la découverte de | Raison |
|---|---|---|---|
| Royaume de Numidie | Afrique | Carthage | même continent |
| Royaume de Koush (Nubie) | Afrique | Égypte antique | même continent |
| Royaume d'Aksoum | Afrique | Royaume de Koush (Nubie) *(branche)* | lien historique ou géographique |
| Civilisation Nok | Afrique | Égypte antique | même continent |
| Royaume de Pount | Afrique | Égypte antique | même continent |
| Minoens & Mycéniens | Europe | Grèce antique | même continent |
| Étrusques | Europe | Rome antique | lien historique ou géographique |
| Peuples germaniques | Europe | Rome antique | même continent |
| Peuples Thraces | Europe | Grèce antique | même continent |
| Royaume dace | Europe | Rome antique | même continent |
| Peuples Ibères | Europe | Celtes / Gaulois | lien historique ou géographique |
| Cavaliers Scythes | Europe | Empire perse achéménide | lien historique ou géographique |
| Sarmates | Europe | Cavaliers Scythes *(branche)* | lien historique ou géographique |
| Huns | Europe | Rome antique | même continent |
| Illyriens | Europe | Rome antique | même continent |
| Empire séleucide | Asie | Grèce antique | lien historique ou géographique |
| Empire parthe | Asie | Empire perse achéménide | fil rouge Perse et Iran |
| Royaume gréco-bactrien | Asie | Empire séleucide *(branche)* | lien historique ou géographique |
| Empire kouchan | Asie | Royaume gréco-bactrien *(branche)* | lien historique ou géographique |
| Empire sassanide | Asie | Empire parthe *(branche)* | fil rouge Perse et Iran |
| Empire hittite | Asie | Mésopotamie | même continent |
| Ourartou | Asie | Mésopotamie | lien historique ou géographique |
| Royaume d’Arménie | Asie | Empire perse achéménide | même continent |
| Phéniciens | Asie | Carthage | lien historique ou géographique |
| Saba et Himyar (Arabie du Sud) | Asie | Nabatéens *(branche)* | lien historique ou géographique |
| Nabatéens | Asie | Israël et Juda (Hébreux) | lien historique ou géographique |
| Empire gupta | Asie | Empire Maurya (Inde) | fil rouge Inde |
| Royaume d’Anuradhapura | Asie | Empire Maurya (Inde) | lien historique ou géographique |
| Chine des Six Dynasties | Asie | Chine (Qin & Han) | fil rouge Chine |
| Xiongnu | Asie | Chine (Qin & Han) | même continent |
| Royaume de Gojoseon (Corée) | Asie | Chine (Qin & Han) | lien historique ou géographique |
| Trois Royaumes de Corée et Silla | Asie | Royaume de Gojoseon (Corée) *(branche)* | fil rouge Corée |
| Japon ancien (Yamato) | Asie | Chine (Qin & Han) | même continent |
| Zapotèques | Amériques | Olmèques | même continent |
| Teotihuacán | Amériques | Olmèques | même continent |
| Chavín | Amériques | Olmèques | même continent |
| Culture Nazca | Amériques | Chavín *(branche)* | lien historique ou géographique |
| Mochicas (Moche) | Amériques | Chavín *(branche)* | lien historique ou géographique |
| Lapita et premiers Polynésiens | Océanie | Aborigènes d’Australie — Préhistoire | lien historique ou géographique |

### Monde III — Moyen Âge (12 salles, 62 branches)

**Tronc** (dans l'ordre) :

1. Civilisation maya (Époque classique) — Amériques
2. Empire byzantin — Europe · fil rouge Rome et Byzance
3. Royaume franc — Europe · fil rouge France
4. Chine (Tang & Song) — Asie · fil rouge Chine
5. Califat islamique — Asie
6. Scandinavie (Vikings) — Europe
7. Japon féodal (Samouraïs) — Asie · fil rouge Japon
8. Empire Khmer — Asie
9. Saint-Empire Romain Germanique — Europe · fil rouge Monde germanique
10. France (Capétiens) — Europe · fil rouge France
11. Empire mongol — Asie
12. Empire du Mali — Afrique

**Branches bonus** :

| Branche | Continent | S'ouvre après la découverte de | Raison |
|---|---|---|---|
| Royaume wisigoth | Europe | Royaume franc | lien historique ou géographique |
| Royaume lombard | Europe | Empire byzantin | lien historique ou géographique |
| Khaganat avar | Europe | Empire byzantin | lien historique ou géographique |
| Empire bulgare | Europe | Empire byzantin | lien historique ou géographique |
| Royaume de Hongrie | Europe | Saint-Empire Romain Germanique | lien historique ou géographique |
| Pologne des Piast | Europe | Saint-Empire Romain Germanique | même continent |
| Royaume de Bohême | Europe | Saint-Empire Romain Germanique | lien historique ou géographique |
| Serbie médiévale | Europe | Empire byzantin | lien historique ou géographique |
| État bourguignon | Europe | France (Capétiens) | même continent |
| Angleterre | Europe | Scandinavie (Vikings) | lien historique ou géographique |
| Royaume d’Écosse | Europe | Angleterre *(branche)* | lien historique ou géographique |
| Rus' de Kiev | Europe | Scandinavie (Vikings) | même continent |
| Grande-principauté de Moscou | Europe | Rus' de Kiev *(branche)* | fil rouge Russie |
| Khazars | Europe | Empire byzantin | lien historique ou géographique |
| Horde d’or | Europe | Empire mongol | lien historique ou géographique |
| Khanat de Crimée | Europe | Horde d’or *(branche)* | lien historique ou géographique |
| Républiques Maritimes | Europe | Empire byzantin | lien historique ou géographique |
| États pontificaux | Europe | Royaume franc | lien historique ou géographique |
| Al-Andalus | Europe | Califat islamique | lien historique ou géographique |
| Royaumes de la Reconquista | Europe | Royaume wisigoth *(branche)* | fil rouge Espagne |
| Empire turc (Göktürks) | Asie | Chine (Tang & Song) | même continent |
| Khaganat ouïghour | Asie | Empire turc (Göktürks) *(branche)* | lien historique ou géographique |
| Émirat samanide | Asie | Califat islamique | lien historique ou géographique |
| Seldjoukides | Asie | Califat islamique | lien historique ou géographique |
| Empire du Khwarezm | Asie | Seldjoukides *(branche)* | lien historique ou géographique |
| Royaume de Géorgie | Asie | Empire byzantin | lien historique ou géographique |
| Empire timouride | Asie | Empire mongol | même continent |
| Empire du Tibet | Asie | Chine (Tang & Song) | même continent |
| Corée (Dynastie Goryeo) | Asie | Trois Royaumes de Corée et Silla *(branche)* — Antiquité | fil rouge Corée |
| Royaume de Champa | Asie | Empire Khmer | lien historique ou géographique |
| Đại Việt | Asie | Chine (Tang & Song) | lien historique ou géographique |
| Royaume de Pagan | Asie | Empire Khmer | même continent |
| Royaume d’Ayutthaya | Asie | Empire Khmer | lien historique ou géographique |
| Empire de Srivijaya | Asie | Empire Khmer | lien historique ou géographique |
| Empire de Majapahit | Asie | Empire de Srivijaya *(branche)* | fil rouge Indonésie |
| Sultanat de Malacca | Asie | Empire de Majapahit *(branche)* | lien historique ou géographique |
| Empire Chola | Asie | Empire Maurya (Inde) — Antiquité | lien historique ou géographique |
| Sultanat de Delhi | Asie | Empire gupta *(branche)* — Antiquité | fil rouge Inde |
| Empire de Vijayanagara | Asie | Sultanat de Delhi *(branche)* | lien historique ou géographique |
| Empire du Ghana | Afrique | Califat islamique | lien historique ou géographique |
| Nubie chrétienne (Makurie) | Afrique | Empire byzantin | lien historique ou géographique |
| Almoravides et Almohades | Afrique | Califat islamique | lien historique ou géographique |
| Kanem-Bornou | Afrique | Empire du Mali | même continent |
| Cités swahilies | Afrique | Califat islamique | lien historique ou géographique |
| Royaume du Buganda | Afrique | Cités swahilies *(branche)* | lien historique ou géographique |
| Sultanat mamelouk | Afrique | Égypte antique — Antiquité | fil rouge Égypte |
| Royaume du Bénin | Afrique | Empire du Mali | lien historique ou géographique |
| Empire Songhaï | Afrique | Empire du Mali | même continent |
| Royaume du Kongo | Afrique | Empire du Mali | même continent |
| Civilisation du Grand Zimbabwe | Afrique | Cités swahilies *(branche)* | lien historique ou géographique |
| Empire du Monomotapa | Afrique | Civilisation du Grand Zimbabwe *(branche)* | fil rouge Zimbabwe |
| Toltèques | Amériques | Civilisation maya (Époque classique) | même continent |
| Pueblos ancestraux | Amériques | Civilisation maya (Époque classique) | même continent |
| Mississippiens (Cahokia) | Amériques | Civilisation maya (Époque classique) | même continent |
| Taïnos | Amériques | Civilisation maya (Époque classique) | même continent |
| Empire de Tiwanaku | Amériques | Civilisation maya (Époque classique) | même continent |
| Empire Huari (Wari) | Amériques | Civilisation maya (Époque classique) | même continent |
| Royaume chimú | Amériques | Mochicas (Moche) *(branche)* — Antiquité | lien historique ou géographique |
| Confédération muisca | Amériques | Civilisation maya (Époque classique) | même continent |
| Maoris (Nouvelle-Zélande) | Océanie | Lapita et premiers Polynésiens *(branche)* — Antiquité | lien historique ou géographique |
| Empire Tuʻi Tonga | Océanie | Lapita et premiers Polynésiens *(branche)* — Antiquité | lien historique ou géographique |
| Rapa Nui (île de Pâques) | Océanie | Lapita et premiers Polynésiens *(branche)* — Antiquité | lien historique ou géographique |

### Monde IV — Époque moderne (12 salles, 23 branches)

**Tronc** (dans l'ordre) :

1. Chine (Ming & Qing) — Asie · fil rouge Chine
2. Italie de la Renaissance — Europe · fil rouge Italie
3. Empire aztèque — Amériques · fil rouge Mexique
4. Empire inca — Amériques
5. Empire espagnol — Europe · fil rouge Espagne
6. Empire ottoman — Asie · fil rouge Ottomans et Turquie
7. France (Ancien Régime) — Europe · fil rouge France
8. Empire Songhaï (Apogée) — Afrique · fil rouge Empire songhaï
9. Empire moghol — Asie · fil rouge Inde
10. Russie des tsars — Europe · fil rouge Russie
11. Japon (Époque d'Edo) — Asie · fil rouge Japon
12. États-Unis d'Amérique (Fondation) — Amériques · fil rouge États-Unis

**Branches bonus** :

| Branche | Continent | S'ouvre après la découverte de | Raison |
|---|---|---|---|
| Portugal et son empire | Europe | Empire espagnol | lien historique ou géographique |
| Monarchie des Habsbourg | Europe | Empire espagnol | lien historique ou géographique |
| Angleterre / Grande-Bretagne | Europe | Angleterre *(branche)* — Moyen Âge | fil rouge Angleterre et Royaume-Uni |
| Provinces-Unies (Siècle d'Or) | Europe | Empire espagnol | lien historique ou géographique |
| Empire suédois | Europe | Russie des tsars | lien historique ou géographique |
| Danemark-Norvège | Europe | Empire suédois *(branche)* | lien historique ou géographique |
| Royaume de Prusse | Europe | Saint-Empire Romain Germanique — Moyen Âge | fil rouge Monde germanique |
| République des Deux Nations (Pologne) | Europe | Pologne des Piast *(branche)* — Moyen Âge | fil rouge Pologne |
| Hetmanat cosaque | Europe | Russie des tsars | même continent |
| Maroc (Saadiens et Alaouites) | Afrique | Empire Songhaï (Apogée) | même continent |
| Empire Ashanti | Afrique | Empire Songhaï (Apogée) | même continent |
| Royaume du Kongo (Christianisé) | Afrique | Royaume du Kongo *(branche)* — Moyen Âge | fil rouge Royaume du Kongo |
| Empire d'Oyo | Afrique | Empire Songhaï (Apogée) | même continent |
| Royaume de Madagascar (Merina) | Afrique | Cités swahilies *(branche)* — Moyen Âge | lien historique ou géographique |
| Empire marathe | Asie | Empire moghol | lien historique ou géographique |
| Empire Safavide | Asie | Empire sassanide *(branche)* — Antiquité | fil rouge Perse et Iran |
| Empire durrani (Afghanistan) | Asie | Empire moghol | lien historique ou géographique |
| Dynastie Joseon (Corée) | Asie | Corée (Dynastie Goryeo) *(branche)* — Moyen Âge | fil rouge Corée |
| Nouvelle-Espagne | Amériques | Empire aztèque | fil rouge Mexique |
| Brésil colonial | Amériques | Portugal et son empire *(branche)* | lien historique ou géographique |
| Nouvelle-France | Amériques | France (Ancien Régime) | lien historique ou géographique |
| Confédération iroquoise (Haudenosaunee) | Amériques | Nouvelle-France *(branche)* | lien historique ou géographique |
| Mapuches (Wallmapu) | Amériques | Empire inca | lien historique ou géographique |

### Monde V — Époque contemporaine (11 salles, 34 branches)

**Tronc** (dans l'ordre) :

1. France — Europe · fil rouge France
2. États-Unis d'Amérique (Superpuissance) — Amériques · fil rouge États-Unis
3. Royaume-Uni — Europe · fil rouge Angleterre et Royaume-Uni
4. Mexique — Amériques · fil rouge Mexique
5. Russie / URSS — Europe · fil rouge Russie
6. Japon (Meiji à nos jours) — Asie · fil rouge Japon
7. Allemagne — Europe · fil rouge Monde germanique
8. Afrique du Sud — Afrique
9. Inde (Raj et Indépendance) — Asie · fil rouge Inde
10. Chine (République & Populaire) — Asie · fil rouge Chine
11. Union Européenne (Projet Politique) — Europe

**Branches bonus** :

| Branche | Continent | S'ouvre après la découverte de | Raison |
|---|---|---|---|
| Pays nordiques | Europe | Danemark-Norvège *(branche)* — Époque moderne | fil rouge Scandinavie |
| Ukraine | Europe | Hetmanat cosaque *(branche)* — Époque moderne | fil rouge Ukraine |
| Autriche-Hongrie | Europe | Monarchie des Habsbourg *(branche)* — Époque moderne | fil rouge Autriche |
| Pologne contemporaine | Europe | République des Deux Nations (Pologne) *(branche)* — Époque moderne | fil rouge Pologne |
| Italie (Unification à la République) | Europe | Italie de la Renaissance — Époque moderne | fil rouge Italie |
| Espagne contemporaine | Europe | Empire espagnol — Époque moderne | fil rouge Espagne |
| Grèce moderne | Europe | Grèce antique — Antiquité | fil rouge Monde grec |
| Canada | Amériques | Nouvelle-France *(branche)* — Époque moderne | fil rouge Canada |
| Haïti | Amériques | États-Unis d'Amérique (Superpuissance) | lien historique ou géographique |
| Cuba | Amériques | États-Unis d'Amérique (Superpuissance) | lien historique ou géographique |
| Brésil | Amériques | Brésil colonial *(branche)* — Époque moderne | fil rouge Brésil |
| Argentine | Amériques | Mexique | lien historique ou géographique |
| Turquie | Asie | Empire ottoman — Époque moderne | fil rouge Ottomans et Turquie |
| Israël et Palestine | Asie | Turquie *(branche)* | lien historique ou géographique |
| Arabie saoudite | Asie | Turquie *(branche)* | lien historique ou géographique |
| Iran | Asie | Empire Safavide *(branche)* — Époque moderne | fil rouge Perse et Iran |
| Les deux Corées | Asie | Dynastie Joseon (Corée) *(branche)* — Époque moderne | fil rouge Corée |
| Pakistan et Bangladesh | Asie | Inde (Raj et Indépendance) | lien historique ou géographique |
| Indes Orientales puis Indonésie | Asie | Empire de Majapahit *(branche)* — Moyen Âge | fil rouge Indonésie |
| Viêt Nam | Asie | Đại Việt *(branche)* — Moyen Âge | fil rouge Viêt Nam |
| Thaïlande (Siam) | Asie | Royaume d’Ayutthaya *(branche)* — Moyen Âge | fil rouge Thaïlande |
| Singapour | Asie | Sultanat de Malacca *(branche)* — Moyen Âge | lien historique ou géographique |
| Empire d'Éthiopie (Abyssinie) | Afrique | Royaume d'Aksoum *(branche)* — Antiquité | fil rouge Éthiopie |
| Égypte contemporaine | Afrique | Sultanat mamelouk *(branche)* — Moyen Âge | fil rouge Égypte |
| Algérie | Afrique | Afrique du Sud | lien historique ou géographique |
| Royaume du Dahomey (Bénin) | Afrique | Afrique du Sud | lien historique ou géographique |
| Califat de Sokoto | Afrique | Afrique du Sud | lien historique ou géographique |
| Nigeria | Afrique | Califat de Sokoto *(branche)* | lien historique ou géographique |
| RD Congo | Afrique | Royaume du Kongo (Christianisé) *(branche)* — Époque moderne | lien historique ou géographique |
| Kenya | Afrique | Afrique du Sud | lien historique ou géographique |
| Royaume zoulou | Afrique | Afrique du Sud | lien historique ou géographique |
| Empire wassoulou (Samory) | Afrique | Afrique du Sud | lien historique ou géographique |
| Royaume d’Hawaï | Océanie | Empire Tuʻi Tonga *(branche)* — Moyen Âge | lien historique ou géographique |
| Australie | Océanie | Aborigènes d’Australie — Préhistoire | lien historique ou géographique |
