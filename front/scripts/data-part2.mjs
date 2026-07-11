// Époque : Antiquité (schéma encyclopédique et continu)
export default [
  {
    id: "antiquite",
    label: "Antiquité",
    start: -3000,
    end: 476,
    color: "#d4a373",
    description: "L'émergence des premières grandes cités-États, l'invention de l'écriture et la formation des empires mondiaux (Rome, Han, Maurya, Achéménide).",
    continents: [
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "egypte",
            trackId: "egypte", row: 1,
            label: "Égypte antique",
            period: "-3 000 à -30", start: -3000, end: -30,
            color: "#e6c229", isRiver: true, capitale: "Memphis puis Thèbes",
            description: "Trois millénaires de civilisation pharaonique bâtis sur les crues régulières du Nil, alliant ingénierie colossale et théocratie absolue.",
            datesCles: [
              { annee: -3150, evenement: "Unification de l'Égypte", info: "Le pharaon Narmer unifie la Haute et la Basse-Égypte." },
              { annee: -2560, evenement: "Grande Pyramide de Gizeh", info: "Achevement du tombeau de Khéops (146m), la seule des 7 merveilles du monde encore debout." },
              { annee: -1353, evenement: "Révolution amarnienne", info: "Akhenaton tente d'imposer le culte unique d'Aton." },
              { annee: -30, evenement: "Mort de Cléopâtre VII", info: "Suicide de la dernière reine, l'Égypte devient une simple province romaine." }
            ],
            dirigeants: [
              { titre: "Pharaon (Ancien Empire)", nom: "Khéops", surnom: "Le Bâtisseur", debut: -2589, fin: -2566 },
              { titre: "Pharaon (Nouvel Empire)", nom: "Hatchepsout", surnom: "La Reine-Pharaon", debut: -1478, fin: -1458 },
              { titre: "Pharaon (Nouvel Empire)", nom: "Ramsès II", surnom: "Le Grand", debut: -1279, fin: -1213 }
            ],
            personnages: [
              { nom: "Imhotep", role: "Vizir et architecte", description: "Concepteur de la pyramide à degrés de Djoser, plus tard divinisé comme dieu de la médecine.", dates: "≈ -2650", wikiUrl: "https://fr.wikipedia.org/wiki/Imhotep" }
            ],
            sciences: "L'Égypte antique est la civilisation de la géométrie et de l'hydraulique. Les crues annuelles du Nil effaçant les limites des champs, ils ont inventé l'arpentage et la géométrie de précision. Ils maîtrisent la médecine (papyrus d'Edwin Smith détaillant la chirurgie et la suture), l'architecture monumentale en pierre de taille, et inventent le calendrier solaire de 365 jours ainsi que le papyrus, révolutionnant le support de l'écriture hiéroglyphique.",
            croyancesText: "Le pharaon est l'incarnation d'Horus sur terre, garant de la 'Maât' (l'harmonie et la justice cosmique) contre le chaos (Isefet). La religion est dominée par le mythe d'Osiris, assassiné puis ressuscité, qui promet une vie après la mort à condition de préserver l'intégrité du corps par la momification et d'avoir un cœur plus léger que la plume de la vérité lors de la pesée des âmes.",
            diplomatie: "Longtemps isolée et protégée par ses déserts, l'Égypte adopte une diplomatie d'empire lors du Nouvel Empire, étendant son influence jusqu'en Syrie. Elle utilise un réseau d'ambassadeurs et des mariages diplomatiques pour sceller des alliances, documentés par les fameuses 'Lettres d'Amarna' écrites en cunéiforme diplomatique akkadien.",
            guerres: [
              { nom: "Bataille de Qadesh", annee: -1274, adversaires: ["Empire Hittite (Muwatalli II)"], allies: ["Mercenaires Shardanes"], morts: "Inconnu (chars détruits en masse)", vainqueur: "Statu quo (Revendiqué par Ramsès II)", consequences: "Signature du plus ancien traité de paix paritaire de l'histoire.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Qadesh" }
            ],
            documentaires: [{ titre: "Planète Égypte : La naissance d'un empire", url: "https://fr.wikipedia.org/wiki/%C3%89gypte_antique" }]
          },
          {
            id: "carthage",
            trackId: "carthage", row: 2,
            label: "Carthage",
            period: "-814 à -146", start: -814, end: -146,
            color: "#bc6c25", isRiver: false, capitale: "Carthage",
            description: "Superpuissance marchande et maritime d'Afrique du Nord, fondée par les Phéniciens, devenue le grand cauchemar de la République romaine.",
            datesCles: [
              { annee: -814, evenement: "Fondation", info: "La princesse phénicienne Didon fuit Tyr et fonde Carthage." },
              { annee: -264, evenement: "Première Guerre punique", info: "Premier choc contre Rome pour le contrôle de la Sicile." },
              { annee: -218, evenement: "Franchissement des Alpes", info: "Hannibal envahit l'Italie avec ses éléphants de guerre." },
              { annee: -146, evenement: "Destruction totale", info: "Scipion Émilien rase Carthage et vend les survivants en esclavage." }
            ],
            dirigeants: [
              { titre: "Généralissime", nom: "Hamilcar Barca", surnom: "La Foudre", debut: -247, fin: -228 },
              { titre: "Suffète et Général", nom: "Hannibal Barca", surnom: "Le pire ennemi de Rome", debut: -221, fin: -183 }
            ],
            personnages: [
              { nom: "Magon", role: "Agronome", description: "Auteur d'un traité d'agriculture en 28 volumes, tellement réputé que le Sénat romain ordonna sa traduction après la destruction de la ville.", dates: "≈ -IIIe siècle", wikiUrl: "https://fr.wikipedia.org/wiki/Magon_(agronome)" }
            ],
            sciences: "Carthage est la reine des mers. Son ingénierie navale produit des quinquérèmes construites de manière modulaire (avec des pièces préfabriquées numérotées), permettant d'assembler une flotte en un temps record. Leur port circulaire militaire (le Cothon) est un chef-d'œuvre de logistique camouflée, capable d'abriter 220 navires à l'abri des regards.",
            croyancesText: "Héritière des cultes phéniciens, Carthage vénère Baal Hammon et la déesse lunaire Tanit. La religion carthaginoise a longtemps été diabolisée par les Romains et les Grecs qui les accusaient de pratiquer le 'molk' : des sacrifices rituels d'enfants nobles par le feu dans l'enceinte du sanctuaire du Tophet lors de graves crises de l'État.",
            diplomatie: "C'est une thalassocratie : son pouvoir repose sur une chaîne ininterrompue de comptoirs commerciaux (Ibérie, Baléares, Corse, Sardaigne, Sicile). Les Carthaginois préfèrent payer des mercenaires (Numides, Ibères, Gaulois) avec l'argent du commerce plutôt que de lever une armée de citoyens, sauf pour le corps d'élite de la Phalange sacrée.",
            guerres: [
              { nom: "Deuxième Guerre Punique", annee: -218, adversaires: ["République Romaine"], allies: ["Numidie (Symphax)", "Celtes de Gaule cisalpine"], morts: "Env. 500 000 civils et militaires", vainqueur: "Rome (Scipion l'Africain)", consequences: "Défaite totale à Zama. Carthage perd son empire ibérique, sa flotte de guerre et son statut de puissance.", wikiUrl: "https://fr.wikipedia.org/wiki/Deuxi%C3%A8me_guerre_punique" }
            ],
            documentaires: [{ titre: "Arte : Carthage, la rivale de Rome", url: "https://fr.wikipedia.org/wiki/Carthage" }]
          },
          {
            id: "koush",
            trackId: "nubie", row: 3,
            label: "Royaume de Koush (Nubie)",
            period: "-1070 à 350", start: -1070, end: 350,
            color: "#a0522d", isRiver: true, capitale: "Napata puis Méroé",
            description: "Puissant royaume d'archers du haut Nil, héritier, rival puis conquérant de l'Égypte pharaonique, réputé pour sa métallurgie du fer.",
            datesCles: [
              { annee: -727, evenement: "Conquête de l'Égypte", info: "Le roi nubien Piânkhy s'empare de l'Égypte, fondant la XXVe dynastie ('Pharaons noirs')." },
              { annee: -664, evenement: "Expulsion par les Assyriens", info: "Les Koushites sont chassés d'Égypte par l'invasion assyrienne et se replient vers le sud." },
              { annee: -300, evenement: "Âge d'or de Méroé", info: "Déplacement de la capitale à Méroé et explosion de la sidérurgie du fer." }
            ],
            dirigeants: [
              { titre: "Pharaon (XXVe dynastie)", nom: "Taharqa", surnom: "", debut: -690, fin: -664 },
              { titre: "Candace (Reine)", nom: "Amanirenas", surnom: "La borgne", debut: -40, fin: -10 }
            ],
            personnages: [],
            sciences: "À partir du déplacement de la capitale à Méroé, le royaume devient le plus grand centre de sidérurgie d'Afrique antique. Leurs immenses scories de fonte du fer témoignent d'une production industrielle d'armes et d'outils. Ils développent également l'écriture méroïtique, une écriture alphasyllabaire autonome qui n'est toujours pas totalement déchiffrée aujourd'hui.",
            croyancesText: "Le panthéon est un syncrétisme fascinant entre les divinités traditionnelles égyptiennes (Amon) et les dieux strictement nubiens, comme Apédémak (le dieu-lion guerrier) et Arensnuphis. Ils relancent la construction de pyramides (plus de 200 à Méroé), plus petites et plus pointues que celles d'Égypte, abritant les nécropoles royales.",
            diplomatie: "Leur force militaire repose sur l'archerie (l'Égypte appelait la Nubie 'Ta-Seti', le Pays de l'Arc). Après la domination assyrienne, ils entretiennent une relation commerciale prudente avec l'Égypte ptolémaïque puis romaine. La reine (Candace) Amanirenas a même mené une guerre féroce contre les légions romaines d'Auguste, forçant Rome à signer un traité de paix reconnaissant les frontières de Koush.",
            guerres: [
              { nom: "Guerre Méroïtico-Romaine", annee: -24, adversaires: ["Empire Romain (Préfecture d'Égypte)"], allies: ["Tribus Blemmyes"], morts: "Milliers de légionnaires et nubiens", vainqueur: "Statu Quo (Traité de Samos)", consequences: "Rome abandonne son projet de conquête de la Nubie et annule les tributs imposés.", wikiUrl: "https://fr.wikipedia.org/wiki/Amanirenas" }
            ],
            documentaires: [{ titre: "L'histoire oubliée des Pharaons Noirs", url: "https://fr.wikipedia.org/wiki/Royaume_de_Koush" }]
          },
          {
            id: "aksoum",
            trackId: "corne_afrique", row: 4,
            label: "Royaume d'Aksoum",
            period: "100 à 476", start: 100, end: 476,
            color: "#7b1fa2", isRiver: false, capitale: "Aksoum",
            description: "Puissance commerciale majeure de la mer Rouge et l'un des premiers empires au monde à adopter officiellement le christianisme.",
            datesCles: [
              { annee: 270, evenement: "Frappe de monnaie", info: "Aksoum devient le premier État africain (hors Égypte) à émettre sa propre monnaie d'or." },
              { annee: 330, evenement: "Conversion au Christianisme", info: "Le roi Ézana fait du christianisme la religion d'État, scellant une alliance avec Byzance." },
              { annee: 350, evenement: "Destruction de Méroé", info: "Les armées d'Aksoum écrasent définitivement le royaume de Koush (Nubie)." }
            ],
            dirigeants: [
              { titre: "Négus (Roi des Rois)", nom: "Ézana", surnom: "Le Converti", debut: 320, fin: 360 }
            ],
            personnages: [
              { nom: "Frumence de Tyr", role: "Évêque d'Aksoum", description: "Philosophe syro-grec naufragé, devenu conseiller royal et initiateur de la christianisation du royaume.", dates: "≈ 300 - 383", wikiUrl: "https://fr.wikipedia.org/wiki/Frumence_d'Aksoum" }
            ],
            sciences: "Les Aksoumites sont des maîtres de l'ingénierie navale, naviguant avec les moussons jusqu'en Inde et à Ceylan. Architectes exceptionnels, ils bâtissent des stèles géantes monolithes pesant jusqu'à 500 tonnes, censées représenter des palais à plusieurs étages. Ils créent et utilisent l'alphabet guèze, le seul alphabet indigène africain encore utilisé aujourd'hui de manière continue (en Éthiopie).",
            croyancesText: "D'abord polythéistes (vénérant Astar et le dieu de la guerre Mahrem, assimilé au dieu grec Arès), ils opèrent un basculement géopolitique radical vers 330. Le roi Ézana remplace le croissant et le disque solaire par la Croix sur ses monnaies. L'Église orthodoxe tewahedo qui en naît possède une liturgie unique, fortement imprégnée de judaïsme (revendiquant la possession de l'Arche d'Alliance).",
            diplomatie: "Considéré par le prophète persan Mani (au IIIe siècle) comme l'un des quatre plus grands empires du monde (avec Rome, la Perse et la Chine). Aksoum contrôle le détroit de Bab el-Mandeb, taxant tout le commerce d'ivoire, d'or, d'encens et d'esclaves entre l'Empire romain d'Orient, la Perse sassanide et l'Inde antique.",
            guerres: [
              { nom: "Campagne de Nubie", annee: 350, adversaires: ["Royaume de Koush (Méroé)"], allies: [], morts: "Inconnu", vainqueur: "Royaume d'Aksoum", consequences: "Chute finale de la civilisation nubienne antique de Méroé, Aksoum absorbe son territoire.", wikiUrl: "https://fr.wikipedia.org/wiki/Royaume_d'Aksoum" }
            ],
            documentaires: [{ titre: "Aksoum, la Rome africaine", url: "https://fr.wikipedia.org/wiki/Royaume_d'Aksoum" }]
          },
          {
            id: "nok",
            trackId: "afrique_ouest", row: 5,
            label: "Civilisation Nok",
            period: "-1500 à 200", start: -1500, end: 200,
            color: "#d35400", isRiver: false, capitale: "Plateau de Jos",
            description: "Société pionnière d'Afrique de l'Ouest, ayant maîtrisé la métallurgie du fer sans passer par l'âge du bronze, célèbre pour ses terres cuites saisissantes.",
            datesCles: [
              { annee: -1500, evenement: "Apparition de la culture", info: "Premières traces de sédentarisation agricole sur le plateau central du Nigeria." },
              { annee: -1000, evenement: "Révolution de la forge", info: "Invention de la fonte du fer via des hauts fourneaux en argile." },
              { annee: 200, evenement: "Disparition", info: "Déclin inexpliqué de la production artistique et fragmentation culturelle." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Le mystère Nok réside dans sa métallurgie. Contrairement à l'Eurasie, l'Afrique subsaharienne n'a pas connu d'âge du cuivre et du bronze ; elle est passée directement de la pierre au fer. Les forgerons Nok ont inventé des fourneaux à tirage naturel capables d'atteindre 1200°C. Parallèlement, leur art de la céramique cuite est d'une sophistication anatomique troublante pour la période.",
            croyancesText: "Bien que leurs cités aient été emportées par le temps, il nous reste leur impressionnante statuaire en terre cuite. Ces têtes et corps (souvent à l'échelle humaine), caractérisés par de grands yeux triangulaires ou en amande et des coiffures élaborées, étaient probablement des effigies d'ancêtres, de divinités animistes ou des figures de prestige utilisées lors de rites agraires ou funéraires.",
            diplomatie: "Il semble s'agir d'une culture villageoise fortement décentralisée, fonctionnant par réseaux de chefferies, mais partageant un code esthétique et technologique unifié sur une zone vaste comme la France. Aucune structure défensive de guerre n'a été retrouvée.",
            guerres: [],
            documentaires: [{ titre: "L'art et la culture Nok", url: "https://fr.wikipedia.org/wiki/Civilisation_Nok" }]
          },
          {
            id: "pount",
            trackId: "pount", row: 6,
            label: "Royaume de Pount",
            period: "-2500 à -1000", start: -2500, end: -1000,
            color: "#dfb134", isRiver: false, capitale: "Inconnue",
            description: "L'Eldorado de l'Antiquité, royaume mystérieux de la Corne de l'Afrique fournisseur exclusif de myrrhe et d'encens pour les temples égyptiens.",
            datesCles: [
              { annee: -2480, evenement: "Première expédition égyptienne", info: "Le pharaon Sahourê envoie la première flotte documentée vers Pount." },
              { annee: -1473, evenement: "L'expédition d'Hatchepsout", info: "Mission monumentale immortalisée sur les murs du temple de Deir el-Bahari." }
            ],
            dirigeants: [
              { titre: "Roi", nom: "Parahou", surnom: "", debut: -1480, fin: -1470 }
            ],
            personnages: [
              { nom: "Reine Ati", role: "Souveraine de Pount", description: "Représentée sur les bas-reliefs égyptiens avec une morphologie très particulière (possible stéatopygie), elle accueille l'expédition égyptienne.", dates: "≈ -1473", wikiUrl: "https://fr.wikipedia.org/wiki/Pays_de_Pount" }
            ],
            sciences: "Leur maîtrise de l'extraction, du bouturage et du conditionnement des résines aromatiques d'arbres endémiques (Boswellia pour l'encens, Commiphora pour la myrrhe) en faisait les maîtres d'une proto-industrie du luxe, indispensable à l'embaumement et aux liturgies du monde antique nord-africain.",
            croyancesText: "Pour les Égyptiens, Pount était 'Ta Nétjer', le Pays des Dieux. C'était la terre mythique d'où provenaient les dieux Hathor et Bès, et la patrie de la myrrhe, considérée comme les 'larmes des dieux'. Les rituels de Pount incluaient vraisemblablement un culte animiste axé sur l'abondance des ressources de la savane.",
            diplomatie: "C'est l'un des premiers partenariats commerciaux pacifiques documentés de l'histoire. Les Égyptiens apportaient des armes, des bijoux et des amulettes, échangés contre des arbres à encens avec leurs racines, de l'or, des peaux de panthères, du bois d'ébène et des babouins sacrés. Il n'y a aucune trace de tentative de conquête militaire.",
            guerres: [],
            documentaires: [{ titre: "Le fabuleux pays de Pount", url: "https://fr.wikipedia.org/wiki/Pays_de_Pount" }]
          }
        ]
      },
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "minoen-mycenien",
            trackId: "grece", row: 1,
            label: "Minoens & Mycéniens",
            period: "-3000 à -1100", start: -3000, end: -1100,
            color: "#00bcd4", isRiver: false, capitale: "Knossos / Mycènes",
            description: "Les premières civilisations urbaines et lettrées d'Europe : d'abord la thalassocratie pacifique minoenne en Crète, puis la culture guerrière des Mycéniens.",
            datesCles: [
              { annee: -1900, evenement: "Période des Premiers Palais", info: "Édification de Knossos et Phaistos en Crète (Civilisation Minoenne)." },
              { annee: -1600, evenement: "Émergence de Mycènes", info: "Sur le continent, essor d'une élite guerrière indo-européenne bâtissant des citadelles cyclopéennes." },
              { annee: -1450, evenement: "Éruption de Théra (Santorin)", info: "Cataclysme volcanique qui affaiblit les Minoens, menant à leur conquête par les Mycéniens." },
              { annee: -1200, evenement: "Guerre de Troie", info: "Les coalitions mycéniennes (Achéens) attaquent la cité de Troie (Anatolie)." },
              { annee: -1100, evenement: "Effondrement de l'Âge du Bronze", info: "Destruction de tous les palais mycéniens, oubli de l'écriture (Linéaire B)." }
            ],
            dirigeants: [
              { titre: "Wanax (Roi-Guerrier)", nom: "Agamemnon", surnom: "Roi des Rois (Légendaire)", debut: -1200, fin: -1180 }
            ],
            personnages: [],
            sciences: "Les Minoens sont de formidables architectes civils : Knossos est un palais labyrinthique sans fortifications militaires, doté du premier réseau de plomberie et d'évacuation d'eau courante d'Europe. Les Mycéniens excellent en ingénierie militaire, bâtissant des murs cyclopéens (blocs de pierre pesant des tonnes) et forgeant des armures en plaques de bronze (Panoplie de Dendra).",
            croyancesText: "La religion minoenne est dominée par des figures féminines (la Déesse aux Serpents) et le culte du taureau (rituel acrobatique de saut au-dessus de la bête). Les Mycéniens, eux, posent les bases de la mythologie grecque : les tablettes en argile écrites en Linéaire B mentionnent déjà Zeus, Poséidon, Athéna et Héra.",
            diplomatie: "La Crète minoenne régnait par sa flotte marchande, sécurisant les routes maritimes de la Méditerranée sans avoir besoin de murailles. Les Mycéniens fonctionnent en réseau de royaumes militarisés rivaux mais capables de se coaliser pour des expéditions de pillage lointaines (comme l'expédition historique ayant inspiré la Guerre de Troie).",
            guerres: [
              { nom: "Guerre de Troie", annee: -1200, adversaires: ["Troie (Wilusa Hittite)"], allies: ["Coalition Achéenne"], morts: "Destruction urbaine majeure", vainqueur: "Mycéniens", consequences: "Pillage des routes commerciales anatoliennes, mais épuisement des forces mycéniennes ouvrant la voie à leur propre effondrement.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Troie" }
            ],
            documentaires: [{ titre: "L'effondrement de l'âge du Bronze", url: "https://fr.wikipedia.org/wiki/Effondrement_de_l%27%C3%A2ge_du_bronze_r%C3%A9cent" }]
          },
          {
            id: "grece",
            trackId: "grece", row: 1,
            label: "Grèce antique",
            period: "-800 à -146", start: -800, end: -146,
            color: "#4a90d9", isRiver: false, capitale: "Athènes / Sparte / Pella",
            description: "Un ensemble de cités-États farouchement indépendantes, berceau de la rationalité scientifique, de la démocratie et de l'idéal classique.",
            datesCles: [
              { annee: -776, evenement: "Premiers Jeux Olympiques", info: "Marque le début du calendrier grec, trêve sacrée entre toutes les cités." },
              { annee: -508, evenement: "Invention de la Démocratie", info: "Réformes de Clisthène à Athènes : le pouvoir au peuple (les citoyens)." },
              { annee: -490, evenement: "Bataille de Marathon", info: "Les hoplites athéniens repoussent la première invasion perse." },
              { annee: -399, evenement: "Procès de Socrate", info: "Le père de la philosophie est condamné à boire la ciguë par la démocratie athénienne." },
              { annee: -334, evenement: "L'épopée d'Alexandre", info: "Le jeune roi de Macédoine détruit l'Empire Perse et hellénise l'Orient." }
            ],
            dirigeants: [
              { titre: "Stratège d'Athènes", nom: "Périclès", surnom: "L'Olympien", debut: -461, fin: -429 },
              { titre: "Roi de Macédoine", nom: "Alexandre", surnom: "Le Grand", debut: -336, fin: -323 }
            ],
            personnages: [
              { nom: "Léonidas", role: "Roi de Sparte", description: "Mort héroïquement avec ses 300 Spartiates aux Thermopyles pour ralentir l'armée perse de Xerxès.", dates: "Mort en -480", wikiUrl: "https://fr.wikipedia.org/wiki/L%C3%A9onidas_Ier_de_Sparte" },
              { nom: "Aristote", role: "Philosophe et polymathe", description: "Fondateur du Lycée, précepteur d'Alexandre le Grand, il a systématisé la logique, la politique et la biologie.", dates: "-384 à -322", wikiUrl: "https://fr.wikipedia.org/wiki/Aristote" }
            ],
            sciences: "Le miracle grec, c'est le passage du mythe à la raison (Logos). Hippocrate sépare la médecine de la magie, Thucydide invente l'histoire scientifique sans intervention divine, Pythagore et Euclide posent les théorèmes fondateurs des mathématiques. L'architecture classique atteint la perfection des proportions doriques avec l'édification du Parthénon (-447).",
            croyancesText: "Le panthéon des douze dieux de l'Olympe (Zeus, Athéna, Apollon...) est profondément humanisé : les dieux sont soumis aux mêmes passions (colère, jalousie) et au Destin final (les Moires) que les mortels. La religion est civique : on consulte l'Oracle de Delphes pour les décisions d'État, et les cultes à mystères (comme Éleusis) offrent l'espoir d'une vie après la mort.",
            diplomatie: "Le monde grec est divisé en Polis (cités-États : Athènes la navale, Sparte la militariste, Thèbes l'oligarchique). Elles sont en guerre perpétuelle les unes contre les autres pour l'hégémonie de la Ligue de Délos ou du Péloponnèse. Elles ne s'unissent, au nom de leur culture commune (langue grecque contre les 'barbares'), que face à la menace de l'Empire Perse.",
            guerres: [
              { nom: "Guerre du Péloponnèse", annee: -431, adversaires: ["Ligue du Péloponnèse (Sparte)"], allies: ["Ligue de Délos (Athènes)"], morts: "Plus de 100 000 civils et soldats", vainqueur: "Sparte", consequences: "Fin de l'Âge d'Or athénien et déclin de la Grèce classique, facilitant la future conquête macédonienne.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_du_P%C3%A9loponn%C3%A8se" }
            ],
            documentaires: [{ titre: "L'Antiquité : Au temps de la Grèce antique", url: "https://fr.wikipedia.org/wiki/Gr%C3%A8ce_antique" }]
          },
          {
            id: "etrusques",
            trackId: "etrusques", row: 2,
            label: "Étrusques",
            period: "-900 à -264", start: -900, end: -264,
            color: "#e91e63", isRiver: false, capitale: "Dodécapole étrusque",
            description: "Puissance commerciale, artistique et théocratique raffinée d'Italie centrale qui a gouverné Rome à ses débuts avant d'être engloutie par elle.",
            datesCles: [
              { annee: -800, evenement: "Apogée commerciale", info: "L'Étrurie domine la mer Tyrrhénienne grâce à son alliance avec Carthage." },
              { annee: -616, evenement: "Rois étrusques à Rome", info: "La dynastie des Tarquins prend le trône de Rome et l'urbanise profondément." },
              { annee: -509, evenement: "Perte de Rome", info: "Tarquin le Superbe est chassé, naissance de la République romaine." },
              { annee: -396, evenement: "Chute de Véies", info: "Rome détruit la grande cité étrusque voisine après un siège de 10 ans." }
            ],
            dirigeants: [
              { titre: "Roi de Clusium", nom: "Lars Porsenna", surnom: "", debut: -508, fin: -490 }
            ],
            personnages: [],
            sciences: "Grands ingénieurs hydrauliques, ils enseignent à Rome le drainage des marais (la Cloaca Maxima, l'égout géant de Rome, est une œuvre étrusque) et l'utilisation de l'arc de pierre en architecture (véritable fondement des futurs aqueducs romains). Excellents métallurgistes, ils exploitent le fer de l'île d'Elbe pour armer leurs redoutables flottes de pirates et commerçants.",
            croyancesText: "C'est une religion de la divination obsessionnelle, l'Etrusca disciplina. Les haruspices lisent le destin de l'État dans les foies des animaux sacrifiés (hépatoscopie) ou dans la trajectoire des éclairs. Leur panthéon (Tinia, Uni, Menrva) sera intégralement 'copié-collé' par Rome (Jupiter, Junon, Minerve). Leurs vastes nécropoles monumentales, peintes de banquets joyeux, célèbrent le culte des ancêtres.",
            diplomatie: "L'Étrurie n'est pas un empire centralisé mais une Dodécapole, une ligue religieuse de douze puissantes cités-États (Tarquinia, Cerveteri...). Leur division politique causera leur perte militaire. Ils scellent le traité de l'Alalia (-540) avec Carthage pour interdire aux Grecs de commercer en Méditerranée occidentale.",
            guerres: [
              { nom: "Guerres romano-étrusques", annee: -396, adversaires: ["République Romaine"], allies: [], morts: "Inconnu", vainqueur: "Rome", consequences: "Annexion cité par cité par Rome, pillage des trésors étrusques et assimilation culturelle totale.", wikiUrl: "https://fr.wikipedia.org/wiki/%C3%89trusques" }
            ],
            documentaires: [{ titre: "Les Étrusques, précurseurs de Rome", url: "https://fr.wikipedia.org/wiki/%C3%89trusques" }]
          },
          {
            id: "rome",
            trackId: "rome", row: 3,
            label: "Rome antique",
            period: "-753 à 476", start: -753, end: 476,
            color: "#c1272d", isRiver: true, capitale: "Rome",
            description: "D'une petite bourgade pastorale au plus grand et au plus structuré des empires occidentaux, dictant la loi, l'architecture et la langue (le latin) à toute l'Europe.",
            datesCles: [
              { annee: -753, evenement: "Fondation mythique", info: "Romulus fonde la ville sur le Mont Palatin après avoir tué son frère Rémus." },
              { annee: -509, evenement: "Instauration de la République", info: "Création d'un régime oligarchique dirigé par le Sénat (SPQR)." },
              { annee: -44, evenement: "Assassinat de César", info: "La crise des guerres civiles sonne le glas de la République." },
              { annee: -27, evenement: "L'Empire romain", info: "Octave (Auguste) centralise le pouvoir absolu et instaure la Pax Romana." },
              { annee: 476, evenement: "Chute de l'Occident", info: "Le chef germanique Odoacre dépose le dernier empereur romain d'Occident, Romulus Augustule." }
            ],
            dirigeants: [
              { titre: "Dictateur à vie", nom: "Jules César", surnom: "Imperator", debut: -49, fin: -44 },
              { titre: "Empereur", nom: "Auguste", surnom: "Le Vénérable", debut: -27, fin: 14 },
              { titre: "Empereur", nom: "Trajan", surnom: "L'Optimus Princeps", debut: 98, fin: 117 }
            ],
            personnages: [
              { nom: "Cicéron", role: "Consul et Orateur", description: "Sauveur de la République contre Catilina, ses écrits philosophiques et rhétoriques fondent l'humanisme européen.", dates: "-106 à -43", wikiUrl: "https://fr.wikipedia.org/wiki/Cic%C3%A9ron" },
              { nom: "Constantin", role: "Empereur", description: "Légalise le christianisme et déplace la capitale à Constantinople, assurant la survie de l'Empire en Orient (Byzance).", dates: "272 à 337", wikiUrl: "https://fr.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)" }
            ],
            sciences: "Leur suprématie est ingénierique, pragmatique et militaire. L'invention du béton de pouzzolane, qui durcit sous l'eau, leur permet de bâtir le dôme du Panthéon et des digues massives. Ils quadrillent l'Europe d'un réseau de plus de 100 000 km de routes empierrées, d'aqueducs pour la salubrité urbaine (thermes), et inventent le Droit romain, base absolue de l'organisation juridique occidentale.",
            croyancesText: "Originellement un panthéon civique très influencé par la Grèce (la Triade capitoline : Jupiter, Junon, Minerve), la religion romaine est transactionnelle (do ut des : je donne pour que tu donnes). Le culte devient politique avec la divinisation des empereurs. Face aux crises morales et barbares du IIIe siècle, l'Empire bascule vers le monothéisme, le christianisme devenant la seule religion d'État en 380 (Édit de Thessalonique).",
            diplomatie: "La devise romaine 'Divide et impera' (Diviser pour régner) résume leur stratégie. Les peuples soumis se voient offrir divers statuts (socii, citoyenneté partielle, rois-clients) pour éviter toute rébellion coalisée. C'est le rouleau compresseur de la légion manipulaire puis cohorte (réforme de Marius) qui impose la Paix Romaine, financée par un système d'imposition intraitable et la traite d'esclaves massive.",
            guerres: [
              { nom: "Guerre des Gaules", annee: -58, adversaires: ["Confédération de tribus gauloises (Vercingétorix)"], allies: ["Tribus rèmes et éduennes"], morts: "1 million de morts, 1 million d'esclaves", vainqueur: "Jules César", consequences: "L'annexion totale de la Gaule enrichit démesurément César, qui utilise son armée aguerrie pour franchir le Rubicon et prendre Rome.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_des_Gaules" },
              { nom: "Troisième Guerre Punique", annee: -149, adversaires: ["Carthage"], allies: ["Numidie"], morts: "300 000 morts civils", vainqueur: "Rome (Scipion Émilien)", consequences: "Éradication totale de la rivale carthaginoise de la carte, Rome contrôle incontestablement la Méditerranée.", wikiUrl: "https://fr.wikipedia.org/wiki/Troisi%C3%A8me_guerre_punique" }
            ],
            documentaires: [{ titre: "Nota Bene : L'armée Romaine", url: "https://fr.wikipedia.org/wiki/Rome_antique" }]
          },
          {
            id: "celtes",
            trackId: "celtes", row: 4,
            label: "Celtes / Gaulois",
            period: "-800 à -50", start: -800, end: -50,
            color: "#5b8c5a", isRiver: false, capitale: "Oppida fortifiés (Bibracte, Gergovie)",
            description: "Mosaïque de peuples indo-européens dominant l'Europe continentale (période de La Tène), d'une bravoure absolue, réputés pour leur orfèvrerie et leur sidérurgie supérieures.",
            datesCles: [
              { annee: -390, evenement: "Le Sac de Rome", info: "Le chef sénon Brennus met Rome à sac et exige la fameuse rançon (Vae Victis)." },
              { annee: -279, evenement: "Grande Expédition", info: "Les Celtes pillent Delphes en Grèce et s'installent jusqu'en Anatolie centrale (Galates)." },
              { annee: -52, evenement: "Bataille de Gergovie", info: "Grande victoire tactique de Vercingétorix contre les légions de César." },
              { annee: -52, evenement: "Siège d'Alésia", info: "La capitulation gauloise scelle la fin de l'indépendance celtique sur le continent." }
            ],
            dirigeants: [
              { titre: "Chef des Arvernes", nom: "Vercingétorix", surnom: "", debut: -52, fin: -52 }
            ],
            personnages: [
              { nom: "Brennus", role: "Chef guerrier", description: "Général celte ayant humilié la jeune République romaine en pillant la ville, un traumatisme fondateur pour l'armée romaine.", dates: "≈ -390", wikiUrl: "https://fr.wikipedia.org/wiki/Brennus_(IVe_si%C3%A8cle_av._J.-C.)" }
            ],
            sciences: "Les barbares gaulois de César sont une fiction politique. Les Celtes sont de brillants ingénieurs agricoles : ils inventent la moissonneuse gauloise (vallus), la cotte de mailles en fer, le fer à cheval, le savon et le tonneau en bois (cerclé de fer, remplaçant l'amphore argileuse). Leurs routes de commerce en charriot pavées de rondins parcourent toute l'Europe.",
            croyancesText: "L'autorité suprême appartient à la caste sacerdotale des Druides. Ils sont juges, médecins, gardiens de la mémoire (transmise uniquement à l'oral par interdiction religieuse d'écrire) et de la loi. Ils célèbrent la sacralité de la nature (forêts, sources), décapitent les vaincus pour en conserver la tête (siège de l'âme) et pratiquent des sacrifices (animaux et ponctuellement humains) au dieu Toutatis, Esus ou Taranis.",
            diplomatie: "Il n'y a pas 'un' empire gaulois, mais des dizaines de nations puissantes (Éduens, Arvernes, Carnutes). Leur incapacité à forger une union diplomatique durable est leur talon d'Achille. Les Éduens, rivaux des Arvernes, vont jusqu'à s'allier à Rome et appeler Jules César à l'aide, ouvrant sciemment les portes de la Gaule à la conquête romaine.",
            guerres: [
              { nom: "Bataille d'Alésia", annee: -52, adversaires: ["Rome (Jules César)"], allies: ["Coalition gauloise unifiée"], morts: "Plus de 250 000 morts", vainqueur: "Rome", consequences: "Échec de l'armée de secours, Vercingétorix jette ses armes aux pieds de César, marquant l'intégration définitive de la Gaule à l'Empire romain.", wikiUrl: "https://fr.wikipedia.org/wiki/Si%C3%A8ge_d'Al%C3%A9sia" }
            ],
            documentaires: [{ titre: "Le mythe des Gaulois", url: "https://fr.wikipedia.org/wiki/Gaulois_(peuples)" }]
          },
          {
            id: "thraces",
            trackId: "thraces", row: 5,
            label: "Peuples Thraces",
            period: "-1200 à 46", start: -1200, end: 46,
            color: "#a1887f", isRiver: false, capitale: "Seuthopolis",
            description: "Redoutables guerriers d'infanterie légère et immenses orfèvres des Balkans, dont les cultes à mystère ont façonné la spiritualité antique de la région.",
            datesCles: [
              { annee: -460, evenement: "Royaume des Odryses", info: "Térès Ier unifie brièvement les tribus pour faire face à la menace perse." },
              { annee: 46, evenement: "Annexion par Rome", info: "L'empereur romain Claude annexe définitivement la région." }
            ],
            dirigeants: [
              { titre: "Roi des Odryses", nom: "Seuthès III", surnom: "", debut: -331, fin: -300 }
            ],
            personnages: [
              { nom: "Spartacus", role: "Gladiateur (ancien soldat thrace)", description: "Mène la révolte de la troisième guerre servile, infligeant de lourdes défaites aux armées consulaires romaines avant d'être écrasé par Crassus.", dates: "-111 à -71", wikiUrl: "https://fr.wikipedia.org/wiki/Spartacus" }
            ],
            sciences: "Leur art militaire est renommé. Ils inventent les 'peltastes', des fantassins très mobiles équipés d'un bouclier léger (la pelta) en osier, brisant les lourdes et rigides phalanges grecques par un harcèlement constant au javelot. L'orfèvrerie thrace (trésor de Panagyurichté), mêlant influences perses et grecques, témoigne d'une extrême sophistication technique.",
            croyancesText: "Leur philosophie religieuse méprise la mort physique, perçue comme un simple passage vers une vie meilleure ou immortelle (le culte de Zalmoxis), ce qui explique leur redoutable témérité au combat. Ils sont les créateurs originels du culte de Dionysos et du mythe d'Orphée, qui furent ensuite adoptés et polis par la Grèce classique.",
            diplomatie: "Peuples profondément divisés en tribus rivales, considérés par Hérodote comme 'le peuple le plus nombreux du monde après les Indiens, et invincible s'il s'unissait'. Ils se vendent massivement comme mercenaires de luxe aux Perses, aux cités grecques, puis aux rois hellénistiques (Macédoniens).",
            guerres: [
              { nom: "Troisième Guerre Servile", annee: -73, adversaires: ["République Romaine (Crassus)"], allies: ["Esclaves gladiateurs et ruraux"], morts: "120 000 rebelles massacrés et 6000 crucifiés", vainqueur: "Rome", consequences: "L'armée de Spartacus (d'origine thrace) est détruite, Rome durcit la répression servile.", wikiUrl: "https://fr.wikipedia.org/wiki/Troisi%C3%A8me_Guerre_servile" }
            ],
            documentaires: [{ titre: "L'or des Thraces", url: "https://fr.wikipedia.org/wiki/Thraces" }]
          },
          {
            id: "iberes",
            trackId: "iberes", row: 6,
            label: "Peuples Ibères",
            period: "-600 à -19", start: -600, end: -19,
            color: "#bcaaa4", isRiver: false, capitale: "Oppida",
            description: "Guerriers farouches de la péninsule hispanique, maîtres de la forge, coincés dans l'étau du choc des titans entre Rome et Carthage.",
            datesCles: [
              { annee: -218, evenement: "Débarquement romain", info: "La 2e Guerre punique transforme la péninsule en champ de bataille mondial." },
              { annee: -19, evenement: "Guerres Cantabres", info: "L'empereur Auguste achève dans le sang la pacification de toute l'Hispanie." }
            ],
            dirigeants: [
              { titre: "Chef des Ilergètes", nom: "Indíbil", surnom: "", debut: -220, fin: -205 }
            ],
            personnages: [],
            sciences: "Leur apport technique majeur au monde antique est la sidérurgie de l'acier (les mines d'Hispanie). Ils inventent la redoutable 'Falcata', une épée courte courbée asymétriquement capable de trancher les casques et les boucliers. L'arme est si efficace que l'armée romaine l'adopte et la standardise sous le nom de Gladius Hispaniensis (le glaive romain).",
            croyancesText: "Culture fortement influencée par les Phéniciens et les Grecs installés sur leurs côtes. Ils pratiquent un art sculptural distinctif de figures féminines divines aux parures somptueuses (la Dame d'Elche, la Dame de Baza), associées à des cultes de fécondité, et incinèrent leurs morts héroïques en pliant ou détruisant volontairement leurs armes dans les tombes.",
            diplomatie: "Les Ibères et les Celtibères ne se battent pas en rangs serrés, mais privilégient la guérilla (un terme né sur ces terres). Fortement tribaux, ils scellent des alliances (hospitium) par l'échange de tessères de bronze (jetons de pacte). Ils fournissent la majorité des troupes d'élite à l'armée carthaginoise d'Hannibal contre Rome.",
            guerres: [
              { nom: "Guerres celtibères & numantines", annee: -154, adversaires: ["République Romaine"], allies: [], morts: "Destruction des élites ibères", vainqueur: "Rome (Scipion Émilien)", consequences: "Le siège de Numance et le suicide collectif de ses habitants marquent la fin de la résistance hispanique face à Rome.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Numance" }
            ],
            documentaires: [{ titre: "L'Hispanie avant Rome", url: "https://fr.wikipedia.org/wiki/Ib%C3%A8res" }]
          },
          {
            id: "scythes",
            trackId: "scythes", row: 7,
            label: "Cavaliers Scythes",
            period: "-800 à -300", start: -800, end: -300,
            color: "#7d6608", isRiver: false, capitale: "Campements nomades",
            description: "Insaisissables seigneurs des steppes eurasiatiques, inventeurs de la cavalerie légère tirant à l'arc, qui mirent à genoux l'armée de l'Empire Perse.",
            datesCles: [
              { annee: -513, evenement: "L'invasion de Darius", info: "Darius Ier (Perse) tente de les soumettre mais s'épuise dans les steppes." },
              { annee: -339, evenement: "Défaite face à Philippe II", info: "L'armée macédonienne (père d'Alexandre) bat le roi Ateas, amorçant le déclin scythe." }
            ],
            dirigeants: [
              { titre: "Roi scythe", nom: "Ateas", surnom: "", debut: -429, fin: -339 }
            ],
            personnages: [],
            sciences: "Leur innovation technologique bouleverse l'histoire militaire : l'arc scythe (petit, asymétrique, composite de bois, corne et tendon) permet de tirer à très grande vitesse depuis le dos d'un cheval lancé au galop. Ils inventent également le pantalon, indispensable pour monter à cru, et les étriers primitifs.",
            croyancesText: "Le chamanisme nomade règne. Ils scellent des serments de sang, consomment du cannabis sous des tentes pour entrer en transe purificatrice. La mort des élites (les Kourganes) est accompagnée de sacrifices colossaux d'hommes (serviteurs) et de centaines de chevaux, enterrés sous de gigantesques tumulus de terre avec des parures en or d'art animalier.",
            diplomatie: "Ce peuple ne possède ni villes, ni temples de pierre, ni champs cultivés, ce qui les rend invincibles. Leur tactique stratégique est la 'terre brûlée' : face à une armée impériale lourde (comme les Perses), ils reculent à l'infini dans les steppes, empoisonnent les puits et harcèlent l'ennemi de nuit jusqu'à la mutinerie des troupes adverses.",
            guerres: [
              { nom: "Campagne perse contre les Scythes", annee: -513, adversaires: ["Empire Achéménide (Darius Ier)"], allies: [], morts: "Armée perse décimée par la famine", vainqueur: "Scythes", consequences: "Humiliation diplomatique de l'Empire Perse qui abandonne la conquête des steppes nordiques.", wikiUrl: "https://fr.wikipedia.org/wiki/Scythes" }
            ],
            documentaires: [{ titre: "L'or et les flèches : Les Scythes", url: "https://fr.wikipedia.org/wiki/Scythes" }]
          },
          {
            id: "illyriens",
            trackId: "illyriens", row: 8,
            label: "Illyriens",
            period: "-700 à -168", start: -700, end: -168,
            color: "#455a64", isRiver: false, capitale: "Scutari (Scodra)",
            description: "Marins corsaires intrépides de la mer Adriatique, fondateurs de redoutables petits royaumes militaires, dont la piraterie force Rome à sortir d'Italie.",
            datesCles: [
              { annee: -229, evenement: "1ère Guerre d'Illyrie", info: "Rome envoie 200 navires pour stopper la reine Teuta." },
              { annee: -168, evenement: "Chute de Scodra", info: "L'armée romaine défait le roi Genthios, fin de l'Illyrie libre." }
            ],
            dirigeants: [
              { titre: "Reine (Régente)", nom: "Teuta", surnom: "La Reine des pirates", debut: -231, fin: -227 }
            ],
            personnages: [],
            sciences: "Excellents constructeurs navals, ils inventent la Lembos : une galère légère, asymétrique, sans pont, hyper-rapide et maniable. Les Romains l'étudieront et la copieront pour créer les navires légers de la flotte impériale (les liburnes). Ils exploitent massivement l'argent de Damastion pour frapper monnaie.",
            croyancesText: "Leur religion balkanique reste assez obscure faute d'écrits, mais est fortement marquée par le culte chtonien du serpent, protecteur du foyer domestique et symbole de la terre. Ils vénéraient Medaurus, un dieu monté à cheval armé d'une lance, divinité de la guerre protectrice des citadelles de montagne.",
            diplomatie: "Leur économie politique est basée sur le mercenariat d'élite (gardiens des rois macédoniens) et une piraterie d'État institutionnalisée. L'assassinat d'un ambassadeur romain par la reine Teuta, venue se plaindre des attaques sur les marchands italiens, provoque la toute première traversée de la mer Adriatique par les légions romaines.",
            guerres: [
              { nom: "Guerres d'Illyrie", annee: -229, adversaires: ["République Romaine"], allies: [], morts: "Inconnu", vainqueur: "Rome", consequences: "Ouverture totale de l'Est à la politique expansionniste romaine, conduisant à la future conquête de la Grèce.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerres_d'Illyrie" }
            ],
            documentaires: [{ titre: "Les Illyriens, voisins de la Grèce antique", url: "https://fr.wikipedia.org/wiki/Illyriens" }]
          }
        ]
      },
      {
        id: "asie", label: "Asie",
        civilizations: [
          {
            id: "mesopotamie",
            trackId: "mesopotamie", row: 1,
            label: "Mésopotamie",
            period: "-3500 à -539", start: -3500, end: -539,
            color: "#d9a066", isRiver: true, capitale: "Ourouk, Akkad, Babylone",
            description: "Le berceau des premières villes-États, de l'écriture et du droit, bâti dans l'interfluve du Tigre et de l'Euphrate par les Sumériens et les Babyloniens.",
            datesCles: [
              { annee: -3300, evenement: "L'Écriture", info: "L'argile est marquée de signes cunéiformes (en forme de clous) pour tenir les comptes des temples." },
              { annee: -2334, evenement: "L'Empire d'Akkad", info: "Sargon l'Ancien fonde le premier empire territorial de l'histoire humaine." },
              { annee: -1750, evenement: "Code de Hammurabi", info: "Première transcription écrite du droit ('Œil pour œil, dent pour dent')." },
              { annee: -539, evenement: "Chute de Babylone", info: "Le Perse Cyrus le Grand prend la ville d'un coup de génie stratégique." }
            ],
            dirigeants: [
              { titre: "Roi d'Akkad", nom: "Sargon", surnom: "L'Ancien", debut: -2334, fin: -2279 },
              { titre: "Roi de Babylone", nom: "Hammurabi", surnom: "Le Législateur", debut: -1792, fin: -1750 },
              { titre: "Roi (Empire néo-babylonien)", nom: "Nabuchodonosor II", surnom: "", debut: -605, fin: -562 }
            ],
            personnages: [
              { nom: "Gilgamesh", role: "Roi légendaire d'Uruk", description: "Héros de la première grande épopée littéraire humaine, obsédé par la quête impossible de l'immortalité.", dates: "≈ -2600", wikiUrl: "https://fr.wikipedia.org/wiki/Gilgamesh" }
            ],
            sciences: "Leur génie mathématique structure toujours notre monde. Inventeurs du système sexagésimal (base 60), ils nous ont légué la division de l'heure en 60 minutes et du cercle en 360 degrés. Ils perfectionnent l'irrigation, tracent les premières cartes célestes (astronomie et zodiaque), et utilisent la brique cuite vernissée pour ériger d'immenses Ziggourats (tours à étages).",
            croyancesText: "Le monde a été façonné à partir du sang d'un dieu sacrifié pour libérer les divinités supérieures (Anu, Enlil, Enki) du fardeau du travail, délégué aux hommes. En Mésopotamie, les dieux sont capricieux et terrifiants. Le récit mésopotamien du Déluge (le Mythe d'Atrahasis), racontant la colère divine noyant l'humanité, sera repris plus tard dans la Bible biblique.",
            diplomatie: "La géopolitique babylonienne et assyrienne alterne entre alliances marchandes avec les Anatoliens et guerre de terreur. Les puissants empires militaristes du Nord (Assyrie) dominent par la guerre de siège (béliers, sapeurs) et la déportation massive (exil de la population à des milliers de kilomètres) pour effacer l'identité culturelle des vaincus et éviter les rébellions.",
            guerres: [
              { nom: "Conquête de Babylone par les Perses", annee: -539, adversaires: ["Empire Perse (Cyrus le Grand)"], allies: ["Prêtres mécontents de Marduk"], morts: "Très faibles", vainqueur: "Perses Achéménides", consequences: "Les Perses détournent l'Euphrate et entrent par le lit du fleuve. L'indépendance de Babylone prend fin pour toujours.", wikiUrl: "https://fr.wikipedia.org/wiki/Chute_de_Babylone" }
            ],
            documentaires: [{ titre: "L'épopée de la Mésopotamie", url: "https://fr.wikipedia.org/wiki/M%C3%A9sopotamie" }]
          },
          {
            id: "perse",
            trackId: "perse", row: 2,
            label: "Empire perse achéménide",
            period: "-550 à -330", start: -550, end: -330,
            color: "#9b59b6", isRiver: false, capitale: "Persépolis / Suse / Pasargades",
            description: "Le premier empire global de l'histoire, tolérant et hyper-organisé, s'étendant de la mer Égée jusqu'au fleuve Indus.",
            datesCles: [
              { annee: -539, evenement: "Fin de Babylone", info: "Cyrus libère les déportés hébreux, autorisé à rebâtir le Temple." },
              { annee: -490, evenement: "Guerres Médiques", info: "Darius Ier échoue à soumettre Athènes (Marathon)." },
              { annee: -331, evenement: "Gaugamèles", info: "Alexandre le Grand écrase Darius III, signant la chute de l'Empire." }
            ],
            dirigeants: [
              { titre: "Roi des Rois", nom: "Cyrus II", surnom: "Le Grand", debut: -559, fin: -530 },
              { titre: "Roi des Rois", nom: "Darius Ier", surnom: "Le Grand", debut: -522, fin: -486 }
            ],
            personnages: [],
            sciences: "Pour administrer un empire de 5 millions de km², les Perses révolutionnent la communication logistique. Darius construit la 'Voie Royale' (2500 km) dotée d'un réseau de coursiers à cheval permettant de faire passer un ordre impérial en une semaine au lieu de trois mois. Ils standardisent l'économie mondiale avec une monnaie d'or internationale (la Darique).",
            croyancesText: "L'Empire s'appuie sur le Zoroastrisme, l'une des premières religions dualistes. Elle oppose Ahura Mazda (Dieu créateur, lumière, vérité) à Ahriman (les ténèbres, le mensonge). Cette religion d'État profondément morale influence le développement de la justice persane, tout en maintenant une tolérance politique totale pour les religions des peuples conquis (Égypte, Babylone, Jérusalem).",
            diplomatie: "Leur système d'administration est un modèle de décentralisation tolérante. L'Empire est divisé en 20 provinces (Satrapies). Le Satrape (gouverneur) gère le territoire, mais les inspecteurs du Roi (Les 'Yeux et les Oreilles du Roi') contrôlent l'absence de corruption. Les peuples gardent leurs langues et leurs dieux à la stricte condition de payer le tribut et fournir des soldats.",
            guerres: [
              { nom: "Bataille de Gaugamèles", annee: -331, adversaires: ["Royaume de Macédoine (Alexandre le Grand)"], allies: ["Contingents indiens, bactriens"], morts: "Environ 50 000 morts perses", vainqueur: "Macédoine", consequences: "Fuite puis meurtre de Darius III. Les Macédoniens s'emparent des incommensurables trésors de Babylone et Persépolis.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Gaugam%C3%A8les" }
            ],
            documentaires: [{ titre: "Empire Achéménide : Les maîtres de l'Orient", url: "https://fr.wikipedia.org/wiki/Empire_ach%C3%A9m%C3%A9nide" }]
          },
          {
            id: "hittites",
            trackId: "hittites", row: 3,
            label: "Empire hittite",
            period: "-1650 à -1178", start: -1650, end: -1178,
            color: "#b5651d", isRiver: false, capitale: "Hattusa",
            description: "Géant militarisé du plateau anatolien (Turquie actuelle), pionnier de la métallurgie du fer et grand rival diplomatique de l'Égypte pharaonique.",
            datesCles: [
              { annee: -1595, evenement: "Pillage de Babylone", info: "Le roi Mursili Ier mène un raid éclair à 2000 km de sa base, détruisant la dynastie de Hammurabi." },
              { annee: -1274, evenement: "Bataille de Qadesh", info: "Choc de titans contre l'Égypte de Ramsès II pour le contrôle de la Syrie." },
              { annee: -1178, evenement: "Effondrement brutal", info: "Invasion mystérieuse (Peuples de la mer) et famines, Hattusa est abandonnée." }
            ],
            dirigeants: [
              { titre: "Grand Roi (Labarna)", nom: "Hattushili III", surnom: "", debut: -1267, fin: -1237 },
              { titre: "Grand Roi", nom: "Muwatalli II", surnom: "", debut: -1295, fin: -1272 }
            ],
            personnages: [],
            sciences: "Leur puissance s'appuie sur le monopole initial (jalousement gardé) du travail et de la trempe du fer, produisant des armes plus solides et moins cassantes que le bronze égyptien. Ils révolutionnent la charrerie militaire en construisant des chars à trois places (un conducteur, un lancier, un porte-bouclier), offrant une force de frappe écrasante sur le champ de bataille.",
            croyancesText: "L'État hittite pratique un syncrétisme de 'Le panthéon des Mille Dieux'. Lorsqu'ils conquièrent un peuple, ils intègrent ses dieux aux leurs pour s'attirer leurs faveurs. Le dieu central est Tarhunna (le Dieu de l'Orage), vénéré dans le grand sanctuaire rupestre de Yazılıkaya, symbole de la puissance de la tempête sur les arides plateaux anatoliens.",
            diplomatie: "Ce sont les inventeurs du Droit international antique. Contrairement à l'Assyrie qui rase ses ennemis, les Hittites créent des traités de vassalité extrêmement complexes (avec clauses d'extradition, mariage, et obligations d'assistance militaire) gravés sur l'argile et l'argent. Le Traité de Qadesh (-1259) avec Ramsès II est exposé au siège de l'ONU à New York comme le premier pacte de non-agression.",
            guerres: [
              { nom: "Bataille de Qadesh", annee: -1274, adversaires: ["Nouvel Empire Égyptien"], allies: ["Vassaux anatoliens et syriens"], morts: "Pertes lourdes sur les chars", vainqueur: "Statu Quo (Revendiqué par les Hittites)", consequences: "Les Hittites conservent le contrôle sur la riche région syrienne de l'Amourrou.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Qadesh" }
            ],
            documentaires: [{ titre: "Hittites : L'empire des mille dieux", url: "https://fr.wikipedia.org/wiki/Hittites" }]
          },
          {
            id: "pheniciens",
            trackId: "pheniciens", row: 4,
            label: "Phéniciens",
            period: "-1200 à -64", start: -1200, end: -64,
            color: "#6a1b29", isRiver: false, capitale: "Tyr, Sidon, Byblos",
            description: "Les plus grands navigateurs et marchands de l'Antiquité, créateurs de l'alphabet moderne et tisseurs d'un réseau économique s'étendant jusqu'en Atlantique.",
            datesCles: [
              { annee: -1200, evenement: "L'Alphabet", info: "Apparition et diffusion d'un système à 22 consonnes remplaçant les milliers de signes cunéiformes." },
              { annee: -814, evenement: "Fondation de Carthage", info: "L'expansionnisme de Tyr fonde la future reine de la Méditerranée." },
              { annee: -332, evenement: "Siège de Tyr", info: "Alexandre le Grand construit une digue pour assiéger la cité insulaire réputée imprenable." }
            ],
            dirigeants: [
              { titre: "Roi de Tyr", nom: "Hiram Ier", surnom: "", debut: -969, fin: -936 }
            ],
            personnages: [],
            sciences: "Outre l'invention révolutionnaire de l'alphabet phonétique (diffusé aux Grecs qui y ajouteront les voyelles), les Phéniciens maîtrisent l'industrie chimique du luxe : l'extraction d'un mollusque (le murex) pour créer la pourpre, une teinture violacée inaltérable vendue à prix d'or à toutes les cours royales (jusqu'aux empereurs romains). Ils découvrent également la navigation nocturne via l'étoile Polaire.",
            croyancesText: "Culte polythéiste sémitique, vénérant de puissantes entités locales (Baal, Seigneur ; Melqart, dieu protecteur de Tyr ; Astarté, déesse de la fertilité et de la guerre). La pratique occasionnelle de sacrifices de substitution par le feu lors de crises majeures s'exportera et se systématisera dans leur colonie de Carthage.",
            diplomatie: "Peuple de cités-États rivales, ils préfèrent la diplomatie commerciale à la guerre territoriale (ils manquent de terres agricoles). Ils offrent le savoir-faire de leurs charpentiers marins et architectes à leurs puissants voisins (le roi Hiram aide le roi Salomon d'Israël à construire son Premier Temple) en échange d'alliances ou d'achats de matières premières (le cèdre du Liban).",
            guerres: [
              { nom: "Siège de Tyr par Alexandre", annee: -332, adversaires: ["Macédoine (Alexandre)"], allies: ["Flotte Perse"], morts: "8000 citoyens tués, 30 000 esclaves", vainqueur: "Macédoine", consequences: "Destruction de la ville et massacre. Déclin définitif de la Phénicie au profit d'Alexandrie d'Égypte.", wikiUrl: "https://fr.wikipedia.org/wiki/Si%C3%A8ge_de_Tyr_(332_av._J.-C.)" }
            ],
            documentaires: [{ titre: "L'épopée des Phéniciens", url: "https://fr.wikipedia.org/wiki/Ph%C3%A9niciens" }]
          },
          {
            id: "hebreux",
            trackId: "hebreux", row: 5,
            label: "Israël et Juda (Hébreux)",
            period: "-1200 à 70", start: -1200, end: 70,
            color: "#af9b63", isRiver: false, capitale: "Jérusalem",
            description: "Un petit royaume sous constante pression impériale, dont l'invention du monothéisme radical et du texte biblique va changer l'histoire humaine à l'échelle planétaire.",
            datesCles: [
              { annee: -1000, evenement: "Royaume unifié", info: "Le roi David conquiert Jérusalem et y installe la capitale de Juda et d'Israël." },
              { annee: -960, evenement: "Premier Temple", info: "Salomon construit le Temple abritant l'Arche d'Alliance." },
              { annee: -587, evenement: "L'Exil de Babylone", info: "Nebuchadnetsar détruit le Temple. C'est l'exil qui déclenche l'écriture de la Torah." },
              { annee: 70, evenement: "Destruction du Second Temple", info: "Les Romains écrasent la révolte juive, marquant le début de la grande Diaspora." }
            ],
            dirigeants: [
              { titre: "Roi", nom: "David", surnom: "", debut: -1010, fin: -970 },
              { titre: "Roi", nom: "Salomon", surnom: "Le Sage", debut: -970, fin: -931 },
              { titre: "Tétrarque / Roi client", nom: "Hérode", surnom: "Le Grand", debut: -37, fin: -4 }
            ],
            personnages: [],
            sciences: "Pauvres en ressources naturelles, ils se distinguent par une ingénierie de survie, notamment le système de défense hydrique. Le roi Ézéchias fait creuser un impressionnant tunnel aqueduc (533 mètres sous la roche en partant des deux extrémités) pour garantir l'approvisionnement en eau de Jérusalem lors du siège sanglant mené par les Assyriens.",
            croyancesText: "L'invention révolutionnaire du Yahwisme : le passage progressif de l'hénothéisme (Yahvé est le plus fort des dieux) au monothéisme strict (il est le seul Dieu, incréé, moral, agissant dans l'Histoire). L'aniconisme (refus de représenter Dieu en image) et la sanctification du jour du repos (Shabbat) sont des concepts en rupture totale avec les civilisations voisines.",
            diplomatie: "Placé géographiquement sur le corridor militaire inévitable entre les empires égyptien, hittite et mésopotamien, le royaume oscille constamment entre soumission, révoltes et exils. Leur stratégie politique repose sur le messianisme : l'espoir théologique d'une restauration divine finale de la nation israélite face aux persécutions païennes successives (Séléucides, Romains).",
            guerres: [
              { nom: "Première Guerre judéo-romaine", annee: 66, adversaires: ["Empire Romain (Titus)"], allies: [], morts: "Extrêmement massives, famine", vainqueur: "Rome", consequences: "Incendie et destruction absolue de Jérusalem et du Second Temple par les légions romaines.", wikiUrl: "https://fr.wikipedia.org/wiki/Premi%C3%A8re_Guerre_jud%C3%A9o-romaine" }
            ],
            documentaires: [{ titre: "L'Histoire du peuple hébreu", url: "https://fr.wikipedia.org/wiki/Histoire_du_peuple_h%C3%A9breu" }]
          },
          {
            id: "maurya",
            trackId: "inde", row: 6,
            label: "Empire Maurya (Inde)",
            period: "-322 à -185", start: -322, end: -185,
            color: "#16a085", isRiver: true, capitale: "Pataliputra",
            description: "Le premier empire centralisé du sous-continent indien, célèbre pour le règne d'Ashoka qui transforma une doctrine politique militariste en empire de la tolérance bouddhique.",
            datesCles: [
              { annee: -322, evenement: "Fondation", info: "Chandragupta Maurya unifie le nord de l'Inde dans le chaos post-Alexandre le Grand." },
              { annee: -261, evenement: "Guerre du Kalinga", info: "Victoire si sanglante que l'empereur Ashoka renonce à jamais à la violence." },
              { annee: -250, evenement: "Édits d'Ashoka", info: "L'empereur fait graver des piliers partout en Inde pour diffuser les valeurs bouddhistes du Dharma." }
            ],
            dirigeants: [
              { titre: "Samrat (Empereur)", nom: "Chandragupta", surnom: "", debut: -322, fin: -298 },
              { titre: "Samrat", nom: "Ashoka", surnom: "Le Grand / Le Cruel devenu Le Pieux", debut: -268, fin: -232 }
            ],
            personnages: [
              { nom: "Chanakya (Kautilya)", role: "Ministre et Stratège", description: "L'équivalent indien de Machiavel. Auteur de l'Arthashastra, un traité politique de cynisme et d'espionnage d'État redoutable.", dates: "≈ -350 à -283", wikiUrl: "https://fr.wikipedia.org/wiki/Ch%C3%A2nakya" }
            ],
            sciences: "Sous l'impulsion de l'Arthashastra, l'État maurya est une immense machine bureaucratique. L'Inde standardise les poids, mesures et monnaies. La médecine ayurvédique et la chirurgie de guerre se perfectionnent, et Pataliputra devient l'une des villes les plus immenses et majestueuses du monde, entourée de murailles en bois renforcé (pour résister aux séismes) avec 64 portes.",
            croyancesText: "Le règne d'Ashoka est la plateforme de lancement mondiale du bouddhisme. Choqué par les atrocités de la guerre, l'empereur se convertit et instaure l'Ahimsa (la non-violence absolue envers les humains et les animaux). Il ne persécute pas l'Hindouisme ou le Jaïnisme, imposant au contraire une tolérance religieuse d'État révolutionnaire financée par le trésor impérial.",
            diplomatie: "Avant Ashoka, la diplomatie repose sur l'espionnage paranoïaque et les armées d'éléphants. Après sa conversion, l'expansion militaire s'arrête net. Ashoka envoie alors des missionnaires (ambassadeurs religieux) vers la Perse, la Syrie, l'Égypte gréco-macédonienne et au Sri Lanka pour prêcher le Dharma, substituant la conquête militaire par le soft-power culturel.",
            guerres: [
              { nom: "Guerre du Kalinga", annee: -261, adversaires: ["République du Kalinga"], allies: [], morts: "100 000 soldats, 150 000 civils", vainqueur: "Empire Maurya", consequences: "Traumatisme moral et spirituel majeur d'Ashoka entraînant sa conversion au bouddhisme et la fin des conquêtes.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_du_Kalinga" }
            ],
            documentaires: [{ titre: "Ashoka, l'empereur bouddhiste de l'Inde", url: "https://fr.wikipedia.org/wiki/Empire_Maurya" }]
          },
          {
            id: "chine-imperiale",
            trackId: "chine", row: 7,
            label: "Chine (Qin & Han)",
            period: "-221 à 220", start: -221, end: 220,
            color: "#e67e22", isRiver: true, capitale: "Xianyang / Chang'an",
            description: "La brutale unification impériale de la Chine par Qin, suivie par l'Âge d'Or de la dynastie Han qui ouvrira la Route de la Soie et fixera l'identité chinoise.",
            datesCles: [
              { annee: -221, evenement: "L'Unification", info: "Qin Shi Huang défait le dernier des royaumes combattants et se proclame 1er Empereur." },
              { annee: -206, evenement: "Fondation des Han", info: "Révolte paysanne menée par Liu Bang qui fait chuter la cruelle dynastie Qin." },
              { annee: -130, evenement: "La Route de la Soie", info: "L'empereur Han Wudi envoie des émissaires vers l'Ouest (Bactriane, Parthie)." },
              { annee: 105, evenement: "Invention du papier", info: "Cai Lun standardise le processus de fabrication du papier végétal pour l'administration impériale." }
            ],
            dirigeants: [
              { titre: "Premier Empereur de Chine", nom: "Qin Shi Huang", surnom: "", debut: -221, fin: -210 },
              { titre: "Empereur (Han)", nom: "Wudi", surnom: "Le Martial", debut: -141, fin: -87 }
            ],
            personnages: [
              { nom: "Sima Qian", role: "Grand Historien", description: "Père de l'historiographie chinoise, il a écrit les 'Mémoires historiques' établissant le modèle standard pour tous les empereurs suivants.", dates: "-145 à -86", wikiUrl: "https://fr.wikipedia.org/wiki/Sima_Qian" }
            ],
            sciences: "C'est l'apogée des 'quatre grandes inventions' primitives : le papier, la boussole magnétique (à l'origine pour le Feng Shui), le sismographe (de Zhang Heng), et l'arbalète à répétition, ainsi qu'une maîtrise précoce de la fonte de la fonte de fer (grâce à des soufflets hydrauliques) avec des siècles d'avance sur l'Occident. L'ingénierie de Qin Shi Huang construit les premières bases de la Grande Muraille.",
            croyancesText: "Sous les Qin, la doctrine d'État cruelle du Légisme dicte que la nature humaine est mauvaise et ne répond qu'à la peur des châtiments, amenant l'autodafé (incendie) des livres confucéens. La dynastie Han renverse cette philosophie, faisant du Confucianisme (respect de la hiérarchie, de la famille, moralité des élites) la religion d'État indispensable pour réussir les concours de la fonction publique.",
            diplomatie: "La politique étrangère Han est axée sur le système de 'Heqin' (alliances matrimoniales) et les tributs asymétriques pour pacifier les puissantes tribus nomades du nord (Xiongnu). L'exploration vers l'ouest de l'ambassadeur Zhang Qian (à la recherche de chevaux géants du Ferghana) crée la matrice géopolitique de la Route de la Soie reliant la Chine à l'Empire romain.",
            guerres: [
              { nom: "Campagnes Han contre les Xiongnu", annee: -133, adversaires: ["Confédération nomade Xiongnu"], allies: ["Tribus Yuezhi (partiellement)"], morts: "Très importantes, épuisement économique", vainqueur: "Dynastie Han", consequences: "Les Xiongnu sont repoussés au nord du désert de Gobi, permettant l'extension agricole de la Chine vers l'Ouest.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_Han-Xiongnu" }
            ],
            documentaires: [{ titre: "L'empire des Han : L'Antiquité Chinoise", url: "https://fr.wikipedia.org/wiki/Dynastie_Han" }]
          },
          {
            id: "xiongnu",
            trackId: "steppe_asie", row: 8,
            label: "Xiongnu",
            period: "-209 à 46", start: -209, end: 46,
            color: "#795548", isRiver: false, capitale: "Ordo (Campements mobiles)",
            description: "Immense confédération nomade et militarisée, ancêtres putatifs des Huns, forçant les empereurs chinois à s'humilier ou à se ruiner pour protéger leurs frontières.",
            datesCles: [
              { annee: -209, evenement: "L'Unification des Steppes", info: "Modu Chanyu exécute son père et rassemble tous les clans nomades du nord de la Chine." },
              { annee: -200, evenement: "Bataille de Baideng", info: "Les Xiongnu encerclent le 1er empereur Han et lui imposent de payer un tribut." },
              { annee: 46, evenement: "Guerre civile nomade", info: "La confédération se fracture en deux (Xiongnu du Nord, farouches, et du Sud, soumis à la Chine)." }
            ],
            dirigeants: [
              { titre: "Chanyu (Empereur des Steppes)", nom: "Modu", surnom: "", debut: -209, fin: -174 }
            ],
            personnages: [],
            sciences: "Toute leur technologie est tournée vers la mobilité foudroyante. L'utilisation de l'arc composite à double courbure, décoché en plein galop sans étriers solides, requiert un entraînement dès l'enfance. Ils inventent les 'flèches sifflantes' perforées : le Chanyu tire la première, le son indique la cible, et des milliers de cavaliers abattent instantanément la même cible, offrant une coordination tactique parfaite.",
            croyancesText: "Ils pratiquent le Tengrisme (vénération du 'Ciel Bleu Éternel' Tengri, de la Terre et du Soleil). Le Chanyu est considéré comme 'Né du Ciel et de la Terre'. Lors de grands rassemblements annuels d'automne dans les montagnes sacrées, ils organisent des sacrifices de chevaux blancs, des courses équestres et effectuent un recensement des populations (têtes de bétail et hommes en âge de combattre).",
            diplomatie: "Leur économie n'est pas agricole. Ils dépendent du pillage structurel (pour obtenir céréales, fer et soie de Chine) et d'un système mafieux d'extorsion d'État : le traité impérial de 'Paix et Parenté' (Heqin). La Chine leur donne annuellement des princesses en mariage, de l'or et des soieries massives à la seule condition que les Xiongnu s'abstiennent de raser les villes frontalières.",
            guerres: [
              { nom: "Bataille de Baideng", annee: -200, adversaires: ["Dynastie Han (Gaozu)"], allies: [], morts: "Gelures et famine pour les Han", vainqueur: "Xiongnu", consequences: "L'empereur de Chine est encerclé par 300 000 cavaliers sur une montagne. Il capitule, instaurant une ère de tributs humiliants payés aux nomades.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Baideng" }
            ],
            documentaires: [{ titre: "L'empire des Steppes : Les Xiongnu", url: "https://fr.wikipedia.org/wiki/Xiongnu" }]
          },
          {
            id: "gojoseon",
            trackId: "coree", row: 9,
            label: "Royaume de Gojoseon (Corée)",
            period: "-1000 à -108", start: -1000, end: -108,
            color: "#bf360c", isRiver: false, capitale: "Wanggeom-seong (Pyongyang)",
            description: "Le creuset fondateur de l'identité coréenne (l'ère du bronze et du fer antique), dont l'annexion par les Han va provoquer la diaspora donnant naissance aux Trois Royaumes coréens.",
            datesCles: [
              { annee: -1000, evenement: "Bronze Mumun", info: "Essor de la civilisation de la poterie sans décor, de la culture du riz et des mégalithes (dolmens)." },
              { annee: -194, evenement: "Période Wiman", info: "Un général exilé s'empare du pouvoir, importe le fer et transforme l'État en puissance militaire." },
              { annee: -108, evenement: "L'invasion Han", info: "L'empereur chinois Han Wudi lance une invasion terrestre et navale massive pour annexer la péninsule." }
            ],
            dirigeants: [
              { titre: "Roi Fondateur", nom: "Dangun", surnom: "Le Roi Divin (Légendaire)", debut: -2333, fin: -1000 },
              { titre: "Roi", nom: "Wiman", surnom: "", debut: -194, fin: -160 }
            ],
            personnages: [],
            sciences: "Le paysage préhistorique coréen a laissé une empreinte unique : Gojoseon possède près de 40% de tous les dolmens (sépultures de pierres géantes) du monde. Technologiquement, leur armement se distingue par la maîtrise de la dague (ou poignard) en bronze de type mandoliniforme (en forme de luth), un symbole de statut exclusif aux élites de ce royaume.",
            croyancesText: "Le fondement religieux est le mythe de Dangun. Hwanung (le fils du Ciel) descend sur terre, donne à une ourse désireuse de devenir humaine de l'armoise et de l'ail à manger dans une grotte pendant 100 jours. Transformée en femme, elle épouse le dieu et donne naissance à Dangun, fondant le concept d'un sang coréen béni du Ciel et directement connecté à l'esprit de la montagne sauvage.",
            diplomatie: "Situé au nord de la péninsule et s'étendant en Mandchourie, Gojoseon jouait le rôle d'intermédiaire commercial indispensable et lucratif entre les tribus du sud de la Corée (les Jin) et l'Empire Chinois (les Han). Ce monopole sur le transit du fer fut la cause directe de l'invasion impériale visant à briser leur contrôle économique de la région.",
            guerres: [
              { nom: "Guerre Han-Gojoseon", annee: -109, adversaires: ["Dynastie Han (Wudi)"], allies: [], morts: "Effondrement du gouvernement central", vainqueur: "Dynastie Han", consequences: "Chute de la capitale. La Chine divise le nord de la Corée en 'Quatre Commanderies', forçant les élites coréennes à fuir au sud.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_Han%E2%80%93Gojoseon" }
            ],
            documentaires: [{ titre: "L'origine de la Corée : Gojoseon", url: "https://fr.wikipedia.org/wiki/Gojoseon" }]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "olmeques",
            trackId: "mesoamerique", row: 1,
            label: "Olmèques",
            period: "-1200 à -400", start: -1200, end: -400,
            color: "#16a085", isRiver: true, capitale: "San Lorenzo / La Venta",
            description: "La 'culture mère' de Mésoamérique, inventeurs mystérieux de l'écriture primitive, de la saignée rituelle et du jeu de balle.",
            datesCles: [
              { annee: -1200, evenement: "Essor de San Lorenzo", info: "Émergence du premier grand centre de population structuré d'Amérique centrale." },
              { annee: -900, evenement: "Apogée de La Venta", info: "San Lorenzo décline mystérieusement, La Venta devient la grande capitale cérémonielle." },
              { annee: -400, evenement: "Le Grand Oubli", info: "Dépeuplement inexpliqué de l'aire olmèque, héritage transmis aux Mayas et Zapotèques." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Leur génie logistique frappe encore aujourd'hui : ils ont taillé des 'Têtes Colossales' dans des blocs de basalte de 20 tonnes, et les ont transportées sur des dizaines de kilomètres à travers des jungles marécageuses sans roue ni animaux de trait. Ils inventent les fondements du compte long (le calendrier mésoaméricain basé sur l'observation de Vénus) et vulcanisent de manière empirique la sève de l'hévéa pour fabriquer les premières balles rebondissantes en caoutchouc.",
            croyancesText: "L'art olmèque exprime une cosmologie complexe et chamanique. Le Jaguar y est l'animal suprême de la nuit et de la pluie, souvent représenté en fusion avec les traits d'un enfant humain pleurant (le 'Were-Jaguar'). Le souverain agirait comme un chamane capable de voyager dans le monde des esprits par des transes (trépanation, psychotropes) pour obtenir la clémence des dieux de la pluie.",
            diplomatie: "Il s'agit moins d'un empire militaire que d'un réseau de centres religieux (une hiérarchie de villes et de villages). Les Olmèques opèrent une domination culturelle et commerciale (pour l'importation de jade, d'obsidienne et de magnétite). Leur art devient le standard de prestige copié par toutes les autres tribus émergentes du continent (de la vallée du Mexique jusqu'au Honduras).",
            guerres: [],
            documentaires: [{ titre: "Le mystère des Olmèques", url: "https://fr.wikipedia.org/wiki/Olm%C3%A8ques" }]
          },
          {
            id: "teotihuacan",
            trackId: "mesoamerique", row: 1,
            label: "Teotihuacán",
            period: "-100 à 476", start: -100, end: 476,
            color: "#117a65", isRiver: false, capitale: "Teotihuacán",
            description: "La métropole titanique du plateau mexicain. Cité cosmopolite sans rois identifiés, rayonnant comme le 'Lieu où les dieux sont nés'.",
            datesCles: [
              { annee: 150, evenement: "Pyramide du Soleil", info: "Achevement du monument central de la cité, aligné sur la course astronomique." },
              { annee: 250, evenement: "La Cité État", info: "Teotihuacán compte déjà plus de 100 000 habitants (plus grande ville des Amériques)." },
              { annee: 378, evenement: "Entrée maya (L'Entrada)", info: "Le général Teotihuacano Siyaj K'ak' décapite la royauté de la grande cité Maya Tikal pour y installer un roi fantoche." }
            ],
            dirigeants: [
              { titre: "Seigneur (Général)", nom: "Siyaj K'ak'", surnom: "Le feu est né", debut: 378, fin: 400 }
            ],
            personnages: [],
            sciences: "C'est l'un des premiers triomphes d'urbanisme géométrique de masse. La ville, traversée par 'l'Allée des Morts' longue de 4 km, est divisée en quartiers résidentiels pour étrangers (Zapotèques, Mayas), abritant des ateliers spécialisés. La richesse de la ville repose sur le contrôle absolu et industriel de l'extraction de l'obsidienne (verre volcanique) de Pachuca, utilisée comme l'arme la plus tranchante du monde précolombien.",
            croyancesText: "L'art de la ville est paradoxal : on n'y trouve aucune statue de roi glorieux. L'iconographie est entièrement dévolue à Tlaloc (Dieu à lunettes de la pluie) et au Serpent à Plumes (Quetzalcoatl). La fondation de leurs grands temples s'accompagne de sacrifices horrifiques : des centaines de guerriers étrangers les mains ligotées, ou des animaux prédateurs (pumas, aigles) ont été enterrés vivants au cœur des pyramides pour leur insuffler la vie.",
            diplomatie: "C'est le suzerain brutal et distant de la Mésoamérique. En l'an 378, bien avant les Aztèques, Teotihuacán envoie une expédition militaire à plus de 1000 km dans les jungles mayas. Ils renversent la dynastie de la plus grande cité maya (Tikal) et placent le fils de leur propre souverain (Chouette-Lançe-Dards) sur le trône, imposant leur style architectural et vestimentaire à la civilisation Maya (le style Talud-Tablero).",
            guerres: [
              { nom: "Guerre Civile Interne", annee: 650, adversaires: ["Factions élitistes internes"], allies: [], morts: "Massacre des quartiers nobles", vainqueur: "Effondrement du système", consequences: "Les palais centraux sont incendiés par la population ou une faction rivale. La cité périclite, bien que son influence religieuse ne s'éteigne jamais.", wikiUrl: "https://fr.wikipedia.org/wiki/Teotihuac%C3%A1n" }
            ],
            documentaires: [{ titre: "Teotihuacan : Le mystère de la cité des dieux", url: "https://fr.wikipedia.org/wiki/Teotihuac%C3%A1n" }]
          },
          {
            id: "chavin",
            trackId: "andes", row: 2,
            label: "Chavín",
            period: "-900 à -200", start: -900, end: -200,
            color: "#d4ac0d", isRiver: true, capitale: "Chavín de Huántar",
            description: "Centre de pèlerinage pan-andin, imposant la première unité spirituelle des Andes grâce à son architecture sonore et ses transes.",
            datesCles: [
              { annee: -900, evenement: "Fondation du Vieux Temple", info: "L'élite religieuse construit le grand labyrinthe en U à 3100 mètres d'altitude." },
              { annee: -400, evenement: "L'Apogée du culte", info: "Le style artistique du Dieu-Jaguar irradie toute la côte du Pérou." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Leur temple est une machine théâtrale à subjuguer les esprits. Les architectes Chavín ont créé un réseau de galeries souterraines complètement obscures, traversées par des canaux hydrauliques dissimulés. Lors de la saison des pluies, l'eau s'y engouffre, et la pression de l'air fait rugir l'édifice tout entier, donnant l'illusion parfaite que la montagne et le temple 'respirent' et grognent comme un immense félin.",
            croyancesText: "Le culte est chamanique et terrifiant. Le prêtre absorbe des extraits du cactus hallucinogène San Pedro et guide le pèlerin dans les ténèbres absolues du labyrinthe (le Lanzón). Là, face à une statue de granit féroce d'un monstre mi-humain mi-jaguar (le Dieu aux Sceptres), sous l'effet du bruit d'eau rugissante et des drogues, le croyant vit une expérience de mort et de résurrection mystique assurant sa conversion.",
            diplomatie: "Chavín ne possède pas d'armée conquérante. Son autorité est un 'soft-power' de la peur et de la fascination religieuse. En échange d'oracles et de prophéties (cruciales pour anticiper les ravages climatiques d'El Niño sur les récoltes côtières), les populations de tout le Pérou offrent des lamas, du maïs, de l'or et des textiles brodés précieux aux prêtres du temple.",
            guerres: [],
            documentaires: [{ titre: "Chavin, les maîtres des montagnes", url: "https://fr.wikipedia.org/wiki/Chav%C3%ADn_(culture)" }]
          },
          {
            id: "nazca",
            trackId: "andes", row: 2,
            label: "Culture Nazca",
            period: "-200 à 476", start: -200, end: 476,
            color: "#ba9c07", isRiver: true, capitale: "Cahuachi",
            description: "Société du désert aride péruvien, passée maître dans l'ingénierie hydraulique de survie et le tracé énigmatique de dessins géants.",
            datesCles: [
              { annee: -100, evenement: "Tracé des lignes", info: "Début de la création des immenses géoglyphes (Araignée, Colibri, Singe) dans le désert." },
              { annee: 300, evenement: "Apogée de Cahuachi", info: "Le grand centre de pèlerinage pyramidal attire les offrandes des Andes." },
              { annee: 450, evenement: "Déclin climatique", info: "Une méga-sécheresse, aggravée par la déforestation locale (abattage du Huarango), condamne la culture." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Survivre dans le désert le plus aride du monde implique des prouesses de terrassement. Ils inventent le système des 'Puquios' : de monumentaux aqueducs souterrains empierrés captant l'eau des nappes phréatiques, avec d'impressionnantes cheminées d'aération en spirale pour permettre l'entretien sans que l'eau ne s'évapore sous le soleil mortel. Leur céramique, cuite à ciel ouvert, utilise 15 couleurs minérales fixées chimiquement avant cuisson.",
            croyancesText: "Les fameuses Lignes de Nazca (géoglyphes) ne sont pas des pistes pour extraterrestres, mais des chemins processionnels religieux. Les prêtres marchaient en file indienne sur les tracés du colibri ou du condor pour prier les dieux de la montagne et supplier l'arrivée de la pluie divine. Leurs rites incluent la collection intensive de 'têtes-trophées' momifiées d'ennemis pour voler leur énergie rituelle.",
            diplomatie: "Nazca est une confédération de chefferies de vallées, liées par une religion commune centralisée à Cahuachi (leur capitale théocratique en adobe). La sécheresse permanente et le besoin de ressources rendent les conflits rituels très fréquents, où capturer vivant son adversaire pour l'offrir en sacrifice (ou le décapiter) garantit la gloire et l'approvisionnement mystique en eau.",
            guerres: [],
            documentaires: [{ titre: "Nazca, les messages de la Terre", url: "https://fr.wikipedia.org/wiki/Nazca_(culture)" }]
          }
        ]
      }
    ]
  }
];