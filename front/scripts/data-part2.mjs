// Époque : Antiquité (schéma enrichi, nombreuses civilisations)
export default {
  id: "antiquite",
  label: "Antiquité",
  start: -3000,
  end: 476,
  color: "#d4a373",
  description: "Grandes civilisations méditerranéennes, proche-orientales et asiatiques ; empires grec et romain.",
  continents: [
    {
      id: "afrique", label: "Afrique",
      civilizations: [
        {
          id: "egypte", label: "Égypte antique",
          period: "-3 000 à -30", start: -3000, end: -30,
          color: "#e6c229", isRiver: true, capitale: "Memphis puis Thèbes",
          description: "Trois millénaires de civilisation pharaonique le long du Nil.",
          regimes: [
            { type: "Ancien Empire", start: -2700, end: -2200, chef: "Khéops, Khéphren" },
            { type: "Moyen Empire", start: -2050, end: -1710, chef: "Amenemhat I" },
            { type: "Nouvel Empire", start: -1550, end: -1070, chef: "Ramsès II, Toutânkhamon" },
            { type: "Époque ptolémaïque (grecque)", start: -305, end: -30, chef: "Cléopâtre VII" }
          ],
          technologies: ["Écriture hiéroglyphique", "Calendrier solaire", "Momification", "Architecture pyramidale", "Papyrus"],
          croyances: ["Polythéisme (Rê, Osiris, Isis)", "Culte des morts", "Pharaon-dieu vivant"],
          personnages: [
            { nom: "Khéops", role: "Pharaon bâtisseur", dates: "-2589 à -2566" },
            { nom: "Ramsès II", role: "Pharaon conquérant", dates: "-1303 à -1213" },
            { nom: "Cléopâtre VII", role: "Dernière reine", dates: "-69 à -30" }
          ],
          guerres: [
            { nom: "Bataille de Qadesh", annee: -1274, contre: "Hittites", issue: "Traité de paix" },
            { nom: "Conquête romaine", annee: -30, contre: "Rome", issue: "Fin de l'Égypte indépendante" }
          ],
          events: [
            { year: -2560, label: "Grande Pyramide de Gizeh", importance: "haute", info: "Tombeau de Khéops, 146 m de haut." },
            { year: -1274, label: "Bataille de Qadesh", importance: "moyenne", info: "Affrontement avec les Hittites." },
            { year: -30, label: "Mort de Cléopâtre", importance: "haute", info: "L'Égypte devient province romaine." }
          ],
          relations: [
            { type: "conflit", with: "hittites", label: "Guerres contre les Hittites", start: -1300, end: -1258 },
            { type: "conflit", with: "rome", label: "Annexion par Rome", start: -31, end: -30 }
          ],
          liens: [{ label: "Wikipédia — Égypte antique", url: "https://fr.wikipedia.org/wiki/%C3%89gypte_antique" }]
        },
        {
          id: "carthage", label: "Carthage",
          period: "-814 à -146", start: -814, end: -146,
          color: "#bc6c25", isRiver: false, capitale: "Carthage",
          description: "Puissance commerciale phénicienne de Méditerranée occidentale.",
          regimes: [
            { type: "Colonie phénicienne", start: -814, end: -650, chef: "Élite marchande" },
            { type: "République oligarchique", start: -650, end: -146, chef: "Suffètes" }
          ],
          technologies: ["Navigation hauturière", "Commerce maritime", "Agronomie (Magon)"],
          croyances: ["Baal Hammon", "Tanit", "Sacrifices rituels"],
          personnages: [
            { nom: "Hannibal Barca", role: "Général de génie", dates: "-247 à -183" },
            { nom: "Hamilcar Barca", role: "Général", dates: "-275 à -228" }
          ],
          guerres: [
            { nom: "1re Guerre punique", annee: -264, contre: "Rome", issue: "Défaite, perte de la Sicile" },
            { nom: "2e Guerre punique", annee: -218, contre: "Rome", issue: "Défaite à Zama" },
            { nom: "3e Guerre punique", annee: -149, contre: "Rome", issue: "Destruction totale" }
          ],
          events: [
            { year: -814, label: "Fondation de Carthage", importance: "haute", info: "Fondée par les Phéniciens de Tyr." },
            { year: -218, label: "Hannibal franchit les Alpes", importance: "haute", info: "Invasion de l'Italie." },
            { year: -146, label: "Destruction de Carthage", importance: "haute", info: "Rome rase la ville." }
          ],
          relations: [{ type: "conflit", with: "rome", label: "Guerres puniques", start: -264, end: -146 }],
          liens: [{ label: "Wikipédia — Carthage", url: "https://fr.wikipedia.org/wiki/Carthage" }]
        },
        {
          id: "koush", label: "Royaume de Koush (Nubie)",
          period: "-1 070 à 350", start: -1070, end: 350,
          color: "#a0522d", isRiver: true, capitale: "Napata puis Méroé",
          description: "Puissance nubienne du haut Nil, rivale et héritière de l'Égypte.",
          regimes: [
            { type: "Royaume de Napata", start: -1070, end: -300, chef: "Piânkhy" },
            { type: "Royaume de Méroé", start: -300, end: 350, chef: "Candaces (reines)" }
          ],
          technologies: ["Métallurgie du fer", "Pyramides nubiennes", "Écriture méroïtique"],
          croyances: ["Amon", "Apédémak (dieu-lion)"],
          personnages: [{ nom: "Piânkhy", role: "Roi conquérant de l'Égypte", dates: "-747 à -716" }],
          guerres: [{ nom: "Conquête de l'Égypte", annee: -727, contre: "Égypte", issue: "25e dynastie nubienne" }],
          events: [
            { year: -727, label: "Dynastie nubienne d'Égypte", importance: "moyenne", info: "Les rois de Koush règnent sur l'Égypte." },
            { year: -300, label: "Capitale à Méroé", importance: "moyenne", info: "Âge d'or de la métallurgie du fer." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Royaume de Koush", url: "https://fr.wikipedia.org/wiki/Koush" }]
        },
        {
          id: "aksoum",
          label: "Royaume d'Aksoum",
          period: "≈ 100 à 476 (Antiquité)",
          start: 100,
          end: 476,
          color: "#7b1fa2", // Violet impérial pour la lignée de la Corne de l'Afrique
          isRiver: false,
          capitale: "Aksoum",
          description: "Puissance commerciale et maritime majeure reliant l'Empire romain à l'Inde, devenue l'un des premiers États chrétiens au monde.",
          regimes: [
            { type: "Royaume d'Aksoum (Période classique)", start: 100, end: 476, chef: "Zoskales, Ézana" }
          ],
          technologies: [
            "Monnaie aksoumite autonome (or et argent)",
            "Architecture monumentale (Stèles d'Aksoum)",
            "Écriture guèze",
            "Agriculture en terrasses",
            "Navigation hauturière en mer Rouge"
          ],
          croyances: [
            "Polythéisme sémitique pré-chrétien (Astar, Beher)",
            "Christianisme orthodoxe tewahedo (religion d'État vers 330)"
          ],
          personnages: [
            { nom: "Roi Ézana", role: "Souverain bâtisseur et convertisseur", dates: "≈ 320 à 360" },
            { nom: "Frumence de Tyr", role: "Premier évêque d'Aksoum et conseiller royal", dates: "≈ 300 à 383" }
          ],
          guerres: [
            { nom: "Campagne contre Koush", annee: 350, contre: "Royaume de Koush", issue: "Victoire aksoumite, destruction de Méroé" }
          ],
          events: [
            { year: 330, label: "Conversion au christianisme", importance: "haute", info: "Le roi Ézana adopte le christianisme comme religion officielle." },
            { year: 350, label: "Soumission de Koush", importance: "haute", info: "Aksoum détruit la capitale nubienne et établit son hégémonie." }
          ],
          relations: [
            { type: "conflit", with: "koush", label: "Rivalité et conquête de la Nubie", start: 300, end: 350 },
            { type: "alliance", with: "rome", label: "Partenariat commercial et religieux avec l'Empire romain", start: 313, end: 476 }
          ],
          liens: [
            { label: "Wikipédia — Royaume d'Aksoum", url: "https://fr.wikipedia.org/wiki/Royaume_d%27Aksoum" }
          ]
        }, 
        {
          id: "nok",
          label: "Civilisation Nok",
          period: "-1500 à 200",
          start: -1500,
          end: 200,
          color: "#d35400", // Teinte terre cuite/orangée caractéristique de leur art
          isRiver: false,
          capitale: "Inconnue (Région du Plateau de Jos)",
          description: "Culture majeure d'Afrique de l'Ouest, célèbre pour son art artistique raffiné et son développement précoce et autonome de la métallurgie du fer.",
          regimes: [
            { type: "Sociétés de chefferies complexes", start: -1500, end: 200, chef: "—" }
          ],
          technologies: [
            "Métallurgie du fer (technologie de hauts fourneaux directs)",
            "Statuaires et sculptures anthropomorphes complexes en terre cuite",
            "Agriculture sélective (mil, niébé)",
            "Combinaison d'outils en pierre polie et en fer"
          ],
          croyances: [
            "Animisme",
            "Culte des ancêtres matérialisé par la statuaire rituelle"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: -1000, label: "Révolution du fer", importance: "haute", info: "Apparition et maîtrise de la fonte du fer sans transition par un âge du bronze." },
            { year: -500, label: "Apogée de l'art Nok", importance: "haute", info: "Production massive des célèbres têtes en terre cuite stylisées aux yeux triangulaires." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Civilisation Nok", url: "https://fr.wikipedia.org/wiki/Civilisation_Nok" }
          ]
        },
        {
          id: "pount",
          label: "Royaume de Pount",
          period: "-2500 à -1000",
          start: -2500,
          end: -1000,
          color: "#dfb134", // Jaune d'or pour rappeler les richesses exportées vers le Nil
          isRiver: false,
          capitale: "Inconnue (Corne de l'Afrique / Périphérie Sud de la mer Rouge)",
          description: "Royaume légendaire d'Afrique de l'Est, partenaire commercial privilégié et mystique de l'Égypte antique pour l'approvisionnement en produits précieux.",
          regimes: [
            { type: "Monarchie commerciale de Pount", start: -2500, end: -1000, chef: "Parahou, Reine Ati" }
          ],
          technologies: [
            "Exploitation et raffinage des résines aromatiques (myrrhe, encens)",
            "Élevage de bétail à cornes courtes",
            "Réseaux d'échanges marchands maritimes"
          ],
          croyances: [
            "Divinités locales de la nature",
            "Influences culturelles et religieuses croisées avec la vallée du Nil"
          ],
          personnages: [
            { nom: "Roi Parahou", role: "Souverain de Pount accueillant la grande expédition égyptienne", dates: "≈ -1473" },
            { nom: "Reine Ati", role: "Reine de Pount, immortalisée sur les bas-reliefs de Deir el-Bahari", dates: "≈ -1473" }
          ],
          guerres: [],
          events: [
            { year: -1473, label: "Expédition de la reine Hatchepsout", importance: "haute", info: "Cinq grands navires égyptiens accostent à Pount pour ramener des arbres à myrrhe vivants." }
          ],
          relations: [
            { type: "alliance", with: "egypte", label: "Échanges commerciaux majeurs de matières précieuses", start: -2500, end: -1000 }
          ],
          liens: [
            { label: "Wikipédia — Pays de Pount", url: "https://fr.wikipedia.org/wiki/Pays_de_Pount" }
          ]
        }
      ]
    },
    {
      id: "europe", label: "Europe",
      civilizations: [
        {
          id: "grece", label: "Grèce antique",
          period: "-800 à -146", start: -800, end: -146,
          color: "#4a90d9", isRiver: false, capitale: "Athènes, Sparte",
          description: "Berceau de la démocratie, de la philosophie et de l'art classique.",
          regimes: [
            { type: "Cités aristocratiques", start: -800, end: -510, chef: "Aristocrates" },
            { type: "Démocratie athénienne", start: -508, end: -322, chef: "Périclès" },
            { type: "Royaume de Macédoine", start: -359, end: -146, chef: "Alexandre le Grand" }
          ],
          technologies: ["Philosophie", "Géométrie (Euclide)", "Théâtre", "Démocratie", "Médecine (Hippocrate)"],
          croyances: ["Panthéon olympien (Zeus, Athéna)", "Oracles", "Mystères d'Éleusis"],
          personnages: [
            { nom: "Périclès", role: "Stratège d'Athènes", dates: "-495 à -429" },
            { nom: "Alexandre le Grand", role: "Conquérant", dates: "-356 à -323" },
            { nom: "Socrate", role: "Philosophe", dates: "-470 à -399" }
          ],
          guerres: [
            { nom: "Guerres médiques", annee: -490, contre: "Perse", issue: "Victoire grecque" },
            { nom: "Guerre du Péloponnèse", annee: -431, contre: "Sparte/Athènes", issue: "Victoire de Sparte" }
          ],
          events: [
            { year: -490, label: "Bataille de Marathon", importance: "haute", info: "Les Athéniens repoussent les Perses." },
            { year: -447, label: "Le Parthénon", importance: "haute", info: "Chef-d'œuvre de l'Acropole." },
            { year: -323, label: "Mort d'Alexandre", importance: "haute", info: "Début de l'époque hellénistique." }
          ],
          relations: [
            { type: "conflit", with: "perse", label: "Guerres médiques", start: -490, end: -449 }
          ],
          liens: [{ label: "Wikipédia — Grèce antique", url: "https://fr.wikipedia.org/wiki/Gr%C3%A8ce_antique" }]
        },
        {
          id: "rome", label: "Rome antique",
          period: "-753 à 476", start: -753, end: 476,
          color: "#c1272d", isRiver: true, capitale: "Rome",
          description: "De la royauté à l'Empire, la plus grande puissance de l'Antiquité.",
          regimes: [
            { type: "Royauté", start: -753, end: -509, chef: "Rois étrusques" },
            { type: "République", start: -509, end: -27, chef: "Sénat & consuls" },
            { type: "Empire", start: -27, end: 476, chef: "Auguste, Trajan, Constantin" }
          ],
          technologies: ["Béton romain", "Aqueducs", "Routes pavées", "Droit romain", "Arc et voûte"],
          croyances: ["Polythéisme romain", "Culte impérial", "Christianisation (IVe s.)"],
          personnages: [
            { nom: "Jules César", role: "Dictateur", dates: "-100 à -44" },
            { nom: "Auguste", role: "1er empereur", dates: "-63 à 14" },
            { nom: "Constantin", role: "Empereur chrétien", dates: "272 à 337" }
          ],
          guerres: [
            { nom: "Guerres puniques", annee: -264, contre: "Carthage", issue: "Domination de la Méditerranée" },
            { nom: "Guerre des Gaules", annee: -58, contre: "Gaulois", issue: "Conquête par César" }
          ],
          events: [
            { year: -509, label: "Naissance de la République", importance: "haute", info: "Fin de la royauté." },
            { year: -27, label: "Auguste, 1er empereur", importance: "haute", info: "Début du Principat et de la Pax Romana." },
            { year: 313, label: "Édit de Milan", importance: "haute", info: "Liberté de culte pour les chrétiens." },
            { year: 476, label: "Chute de Rome", importance: "haute", info: "Fin de l'Empire d'Occident." }
          ],
          relations: [
            { type: "conflit", with: "carthage", label: "Guerres puniques", start: -264, end: -146 },
            { type: "conflit", with: "egypte", label: "Annexion de l'Égypte", start: -31, end: -30 }
          ],
          liens: [{ label: "Wikipédia — Rome antique", url: "https://fr.wikipedia.org/wiki/Rome_antique" }]
        },
        {
          id: "celtes", label: "Celtes / Gaulois",
          period: "-800 à -50", start: -800, end: -50,
          color: "#5b8c5a", isRiver: false, capitale: "Oppida (Bibracte)",
          description: "Peuples celtiques d'Europe, guerriers et artisans du fer.",
          regimes: [{ type: "Confédérations tribales", start: -800, end: -50, chef: "Vercingétorix" }],
          technologies: ["Travail du fer (La Tène)", "Char de guerre", "Émaillerie", "Tonneau"],
          croyances: ["Druidisme", "Panthéon celte", "Culte des sources"],
          personnages: [{ nom: "Vercingétorix", role: "Chef gaulois", dates: "-82 à -46" }],
          guerres: [{ nom: "Guerre des Gaules", annee: -58, contre: "Rome", issue: "Défaite à Alésia" }],
          events: [
            { year: -387, label: "Sac de Rome", importance: "moyenne", info: "Les Gaulois de Brennus pillent Rome." },
            { year: -52, label: "Alésia", importance: "haute", info: "Vercingétorix se rend à César." }
          ],
          relations: [{ type: "conflit", with: "rome", label: "Guerre des Gaules", start: -58, end: -51 }],
          liens: [{ label: "Wikipédia — Celtes", url: "https://fr.wikipedia.org/wiki/Celtes" }]
        },
        {
          id: "minoen-mycenien",
          label: "Civilisations Égéennes (Minoens & Mycéniens)",
          period: "-3000 à -1100",
          start: -3000,
          end: -1100,
          color: "#00bcd4", // Cyan azur pour marquer la thalassocratie maritime de la mer Égée
          isRiver: false,
          capitale: "Knossos (Crète) / Mycènes (Grèce continentale)",
          description: "Les premières grandes civilisations lettrées et urbaines d'Europe, nées de l'âge du bronze, fondatrices des structures culturelles, mythologiques et architecturales du monde grec classique.",
          regimes: [
            { type: "Thalassocratie minoenne (Période des palais)", start: -3000, end: -1450, chef: "Roi Minos (légendaire)" },
            { type: "Monarchies guerrières mycéniennes (Cités-palais)", start: -1600, end: -1100, chef: "Agamemnon (légendaire)" }
          ],
          technologies: [
            "Architecture de palais monumentaux à étages et systèmes d'évacuation d'eau (Knossos)",
            "Écritures syllabiques anciennes (Linéaire A non déchiffré, Linéaire B déchiffré)",
            "Art de la fresque murale polychrome et orfèvrerie de haute précision",
            "Métallurgie avancée du bronze et construction de citadelles aux murs cyclopéens",
            "Maîtrise de la navigation hauturière et réseaux de commerce d'étain et de cuivre"
          ],
          croyances: [
            "Culte de la Grande Déesse-Mère (Déesse aux serpents de Crète)",
            "Sacralité du taureau et rituels de sauts acrobatiques sacrés (tauromachie minoenne)",
            "Prémices du panthéon olympien classique (mentions de Poséidon, Zeus et Héra en Linéaire B)"
          ],
          personnages: [],
          guerres: [
            { nom: "Guerre de Troie (noyau historique)", annee: -1200, contre: "Troie / Coalition anatolienne", issue: "Victoire mycénienne, destruction et pillage de Troie" }
          ],
          events: [
            { year: -1450, label: "Effondrement minoen", importance: "haute", info: "L'éruption du volcan de Santorin affaiblit la Crète, facilitant son assimilation par les Mycéniens." },
            { year: -1200, label: "Guerre de Troie", importance: "moyenne", info: "Conflit commercial et militaire majeur chanté plus tard par Homère dans l'Iliade." },
            { year: -1100, label: "Effondrement de l'âge du bronze", importance: "haute", info: "Destruction mystérieuse des citadelles mycéniennes, ouvrant les siècles obscurs de la Grèce." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Civilisation mycénienne", url: "https://fr.wikipedia.org/wiki/Civilisation_myc%C3%A9nienne" }
          ]
        },
        {
          id: "etrusques",
          label: "Civilisation Étrusque",
          period: "-900 à -264",
          start: -900,
          end: -264,
          color: "#e91e63", // Teinte terracotta / pourpre étrusque distinctive
          isRiver: false,
          capitale: "Dodécapole étrusque (Tarquinia, Cerveteri, Véies, Volsinies)",
          description: "Civilisation florissante et raffinée de l'Italie préromaine, organisée en cités-États commerçantes, dont la culture, l'art, la religion et l'ingénierie ont profondément façonné la Rome primitive.",
          regimes: [
            { type: "Cités-États indépendantes (Royautés théocratiques)", start: -900, end: -509, chef: "Lars Porsenna" },
            { type: "Confédérations oligarchiques et déclin", start: -509, end: -264, chef: "Magistrats collégiaux (Zilath)" }
          ],
          technologies: [
            "Ingénierie hydraulique de pointe (assèchement de marais, cuniculi et création de la Cloaca Maxima de Rome)",
            "Architecture monumentale introduisant l'arc en pierre et la voûte en Europe occidentale",
            "Art funéraire exceptionnel (fresques polychromes, sarcophages en terre cuite)",
            "Savoir religieux et technique de la divination d'État (Haruspicine)",
            "Métallurgie avancée du fer et du bronze (mines d'Elbe et de Toscane)"
          ],
          croyances: [
            "Panthéon polythéiste structuré en triade divine (Tinia, Uni, Menrva, ancêtres directs de Jupiter, Junon, Minerve)",
            "Culte des morts et des ancêtres extrêmement développé (nécropoles monumentales organisées comme des villes)",
            "Croyance absolue dans le destin (Fatum) décodable par les prodiges de la nature"
          ],
          personnages: [
            { nom: "Tarquin le Superbe", role: "Dernier roi de Rome, d'origine étrusque, dont l'expulsion fonde la République", dates: "Exilé en -509" },
            { nom: "Lars Porsenna", role: "Roi de Clusium ayant assiégé Rome pour tenter d'y restaurer l'hégémonie étrusque", dates: "Règne vers -508" }
          ],
          guerres: [
            { nom: "Guerre contre Rome (Prise de Véies)", annee: -396, contre: "Rome antique", issue: "Victoire romaine après un long siège, début de l'annexion de l'Étrurie" }
          ],
          events: [
            { year: -509, label: "Chute de la monarchie étrusque à Rome", importance: "haute", info: "Le Sénat romain renverse Tarquin, mettant fin à la domination politique étrusque sur le Latium." },
            { year: -264, label: "Chute de Volsinies", importance: "haute", info: "La destruction de la dernière cité étrusque libre scelle l'unification de l'Italie sous la coupe de Rome." }
          ],
          relations: [
            { type: "conflit", with: "rome", label: "Guerres romano-étrusques et assimilation progressive", start: -509, end: -264 }
          ],
          liens: [
            { label: "Wikipédia — Étrusques", url: "https://fr.wikipedia.org/wiki/%C3%89trusques" }
          ]
        },
        {
          id: "thraces",
          label: "Peuples Thraces",
          period: "-1200 à 46",
          start: -1200,
          end: 46,
          color: "#a1887f", // Teinte bronze/métallique pour cette culture d'orfèvres et de guerriers
          isRiver: false,
          capitale: "Seuthopolis (Période hellénistique)",
          description: "Vaste ensemble de tribus indo-européennes d'Europe du Sud-Est (Balkans), célèbres pour leur maîtrise exceptionnelle de l'orfèvrerie d'or, leur culture guerrière redoutable et leurs cultes mystiques qui influencèrent la mythologie grecque.",
          regimes: [
            { type: "Confédérations tribales indépendantes", start: -1200, end: -460, chef: "—" },
            { type: "Royaume des Odryses (unification partielle)", start: -460, end: 46, chef: "Térès Ier, Seuthès III" }
          ],
          technologies: [
            "Orfèvrerie et dinanderie d'or et d'argent de réputation mondiale (Trésors de Panagyurishte et de Rogozen)",
            "Tactiques d'infanterie légère hautement mobiles (création des peltastes thraces)",
            "Élevage équin de guerre et cavalerie d'élite",
            "Architecture funéraire monumentale (tombeaux à coupole en brique et pierre)"
          ],
          croyances: [
            "Dionysisme primitif et développement de l'Orphisme (lié au mythe d'Orphée)",
            "Culte du Cavalier Thrace (divinité héroïque universelle)",
            "Croyance profonde en l'immortalité de l'âme et rituels chamaniques (culte de Zalmoxis)"
          ],
          personnages: [
            { nom: "Spartacus", role: "Gladiateur d'origine thrace, chef de la plus grande révolte d'esclaves contre la République romaine", dates: "≈ -111 à -71" },
            { nom: "Seuthès III", role: "Roi des Odryses ayant rebâti la puissance thrace face à l'hégémonie de la Macédoine", dates: "Règne vers -331 à -300" }
          ],
          guerres: [
            { nom: "Guerres de Thrace", annee: -340, contre: "Royaume de Macédoine puis Rome", issue: "Soumission progressive et annexion par l'Empire romain" }
          ],
          events: [
            { year: -460, label: "Fondation du Royaume des Odryses", importance: "moyenne", info: "Le roi Térès Ier unifie les tribus face à la menace de l'expansionnisme perse achéménide." },
            { year: 46, label: "Province romaine de Thrace", importance: "haute", info: "L'empereur romain Claude dissout le royaume client des Odryses et l'annexe définitivement." }
          ],
          relations: [
            { type: "conflit", with: "rome", label: "Révoltes et résistance contre les légions romaines", start: -73, end: 46 },
            { type: "conflit", with: "grece", label: "Rivalités frontalières et vagues de mercenariat avec les cités grecques", start: -500, end: -146 }
          ],
          liens: [
            { label: "Wikipédia — Thraces", url: "https://fr.wikipedia.org/wiki/Thraces" }
          ]
        },
        {
          id: "iberes",
          label: "Peuples Ibères",
          period: "-600 à -19",
          start: -600,
          end: -19,
          color: "#bcaaa4", // Couleur argile/terracotta pour rappeler leurs célèbres sculptures et poteries
          isRiver: false,
          capitale: "Oppida fortifiés (Ullastret, Elche, Azaila)",
          description: "Peuples autochtones du sud et de l'est de la péninsule Ibérique, caractérisés par une riche culture urbaine, une métallurgie du fer remarquable et un art sculptural unique, pris en étau lors des guerres de conquête de Carthage et de Rome.",
          regimes: [
            { type: "Cités-États et chefferies oligarchiques", start: -600, end: -19, chef: "Indíbil, Mandonio" }
          ],
          technologies: [
            "Forge et traitement thermique de la Falcata (épée ibérique redoutable adoptée par les Romains)",
            "Urbanisme fortifié d'oppida sur éperons rocheux avec systèmes de courtines",
            "Écritures paléohispaniques ibériques (système syllabique et alphabétique)",
            "Céramique fine peinte à décors complexes géométriques et figuratifs"
          ],
          croyances: [
            "Culte des divinités de la nature, des sources sacrées et des animaux totémiques (taureau, loup)",
            "Rites funéraires de crémation avec dépôts d'armes volontairement brisées ou ployées",
            "Vénération de figures féminines sacrées agissant comme intercesseuses (Dames ibères)"
          ],
          personnages: [
            { nom: "Indíbil", role: "Chef de la tribu des Ilergètes, figure majeure de la résistance hispanique contre Carthage puis contre Rome", dates: "Mort en -205" }
          ],
          guerres: [
            { nom: "Conquête romaine de l'Hispanie", annee: -218, contre: "Carthage puis Rome antique", issue: "Assimilation romaine complète après deux siècles de guérilla" }
          ],
          events: [
            { year: -218, label: "Débarquement romain à Ampurias", importance: "haute", info: "L'ouverture du front espagnol de la deuxième guerre punique embrase le territoire des Ibères." },
            { year: -19, label: "Fin des Guerres Cantabres", importance: "haute", info: "L'empereur Auguste achève la pacification complète de la péninsule, scellant la romanisation des Ibères." }
          ],
          relations: [
            { type: "conflit", with: "rome", label: "Guerres d'Hispanie et résistance acharnée contre les légions", start: -218, end: -19 },
            { type: "conflit", with: "carthage", label: "Soumission à l'empire baracide et enrôlement forcé comme mercenaires", start: -237, end: -206 }
          ],
          liens: [
            { label: "Wikipédia — Ibères", url: "https://fr.wikipedia.org/wiki/Ib%C3%A8res" }
          ]
        },
        {
          id: "scythes",
          label: "Cavaliers Scythes",
          period: "-800 à -300",
          start: -800,
          end: -300,
          color: "#7d6608", // Or sombre / moutarde évoquant les steppes et leur maîtrise des métaux précieux
          isRiver: false,
          capitale: "Nomades (Campements mobiles d'Europe de l'Est)",
          description: "Puissante confédération de tribus nomades indo-européennes dominant les steppes d'Europe de l'Est et de la mer Noire, réputés comme d'invincibles archers à cheval et de brillants orfèvres.",
          regimes: [
            { type: "Confédérations tribales nomades", start: -800, end: -300, chef: "Idanthyrse, Ateas" }
          ],
          technologies: [
            "Arc composite scythe à double courbure de haute puissance",
            "Maîtrise absolue de la cavalerie légère et des tactiques d'archerie montée",
            "Orfèvrerie d'art animalier des steppes (chef-d'œuvres d'or repoussé et ciselé)",
            "Invention du pantalon en cuir adapté à la monte équestre intensive",
            "Techniques avancées de momification funéraire pour l'élite royale"
          ],
          croyances: [
            "Chamanisme des steppes et cultes des éléments naturels",
            "Vénération de Tabiti (déesse du feu et du foyer) et de Papaios (père céleste)",
            "Rites funéraires monumentaux au sein de kourganes (tumulus) avec sacrifices de chevaux"
          ],
          personnages: [
            { nom: "Roi Ateas", role: "Souverain ayant unifié la Scythie européenne et étendu sa puissance jusqu'au Danube", dates: "≈ -429 à -339" }
          ],
          guerres: [
            { nom: "Campagne perse contre les Scythes", annee: -513, contre: "Empire perse achéménide", issue: "Victoire scythe par la stratégie de la terre brûlée" }
          ],
          events: [
            { year: -513, label: "Invasion de Darius Ier", importance: "haute", info: "L'empereur perse traverse le Danube mais doit battre en retraite face au refus des Scythes d'engager une bataille rangée." },
            { year: -339, label: "Bataille du Danube", importance: "moyenne", info: "Défaite scythe et mort du roi Ateas à 90 ans face aux phalanges de Philippe II de Macédoine." }
          ],
          relations: [
            { type: "conflit", with: "perse", label: "Résistance nomade victorieuse face à l'expansionnisme achéménide", start: -514, end: -513 }
          ],
          liens: [
            { label: "Wikipédia — Scythes", url: "https://fr.wikipedia.org/wiki/Scythes" }
          ]
        },
        {
          id: "illyriens",
          label: "Peuples Illyriens",
          period: "-700 à -168",
          start: -700,
          end: -168,
          color: "#455a64", // Teinte gris ardoise/maritime pour cette culture de marins de l'Adriatique
          isRiver: false,
          capitale: "Scodra (Scutari)",
          description: "Ensemble de tribus indo-européennes farouches installées sur la côte adriatique des Balkans, redoutables marins et guerriers dont la piraterie endémique poussa Rome à intervenir hors d'Italie.",
          regimes: [
            { type: "Royaumes et confédérations tribales autonomes", start: -700, end: -168, chef: "Bardylis, Reine Teuta, Genthios" }
          ],
          technologies: [
            "Construction de la Lembos (navire de guerre léger, rapide et maniable, idéal pour les raids)",
            "Architecture de forteresses de hauteur en pierre sèche (Gradine)",
            "Métallurgie de l'argent et du bronze de haute qualité (mines de Damastion)",
            "Création de la Sica (poignard recourbé illyrien, redoutable au corps à corps)"
          ],
          croyances: [
            "Polythéisme balkanique avec une place centrale accordée au serpent, symbole de fertilité et de protection",
            "Rituels de sacrifices animaliers précédant les campagnes de guerre",
            "Vénération de divinités guerrières locales comme Medaurus"
          ],
          personnages: [
            { nom: "Reine Teuta", role: "Souveraine et régente célèbre pour avoir défié le Sénat romain en protégeant les flottes de corsaires", dates: "Règne de -231 à -227" }
          ],
          guerres: [
            { nom: "Guerres d'Illyrie", annee: -229, contre: "Rome antique", issue: "Défaite illyrienne, soumission progressive et contrôle romain sur l'Adriatique" }
          ],
          events: [
            { year: -229, label: "Première Guerre d'Illyrie", importance: "haute", info: "L'assassinat d'un ambassadeur romain par Teuta déclenche l'envoi d'une armada romaine sur leurs côtes." },
            { year: -168, label: "Troisième Guerre d'Illyrie", importance: "haute", info: "Le roi Genthios est vaincu à Scodra, entraînant le démantèlement de l'État illyrien par les légions." }
          ],
          relations: [
            { type: "conflit", with: "rome", label: "Guerres d'Illyrie et annexion territoriale par les Romains", start: -229, end: -168 }
          ],
          liens: [
            { label: "Wikipédia — Illyriens", url: "https://fr.wikipedia.org/wiki/Illyriens" }
          ]
        } 
      ]
    },
    {
      id: "asie", label: "Asie",
      civilizations: [
        {
          id: "mesopotamie", label: "Mésopotamie (Sumer, Babylone)",
          period: "-3 500 à -539", start: -3500, end: -539,
          color: "#d9a066", isRiver: true, capitale: "Our, Babylone",
          description: "Berceau de l'écriture et des premières cités-États.",
          regimes: [
            { type: "Cités sumériennes", start: -3500, end: -2334, chef: "Rois-prêtres" },
            { type: "Empire d'Akkad", start: -2334, end: -2154, chef: "Sargon" },
            { type: "Empire babylonien", start: -1894, end: -539, chef: "Hammurabi, Nabuchodonosor" }
          ],
          technologies: ["Écriture cunéiforme", "Roue", "Code de lois", "Astronomie", "Irrigation"],
          croyances: ["Polythéisme (Marduk, Ishtar)", "Ziggourats"],
          personnages: [
            { nom: "Hammurabi", role: "Roi législateur", dates: "-1810 à -1750" },
            { nom: "Nabuchodonosor II", role: "Roi de Babylone", dates: "-634 à -562" }
          ],
          guerres: [{ nom: "Prise de Babylone", annee: -539, contre: "Perse", issue: "Fin de l'indépendance" }],
          events: [
            { year: -3300, label: "Invention de l'écriture", importance: "haute", info: "Premiers signes cunéiformes à Ourouk." },
            { year: -1750, label: "Code d'Hammurabi", importance: "haute", info: "L'un des plus anciens codes de lois." },
            { year: -539, label: "Chute de Babylone", importance: "haute", info: "Conquête par Cyrus le Grand." }
          ],
          relations: [{ type: "conflit", with: "perse", label: "Conquête perse", start: -540, end: -539 }],
          liens: [{ label: "Wikipédia — Mésopotamie", url: "https://fr.wikipedia.org/wiki/M%C3%A9sopotamie" }]
        },
        {
          id: "perse", label: "Empire perse achéménide",
          period: "-550 à -330", start: -550, end: -330,
          color: "#9b59b6", isRiver: false, capitale: "Persépolis",
          description: "Le plus vaste empire du monde antique, de l'Indus à l'Égypte.",
          regimes: [{ type: "Monarchie achéménide", start: -550, end: -330, chef: "Cyrus, Darius, Xerxès" }],
          technologies: ["Routes royales", "Poste impériale", "Système de satrapies", "Monnaie (darique)"],
          croyances: ["Zoroastrisme", "Ahura Mazda"],
          personnages: [
            { nom: "Cyrus le Grand", role: "Fondateur", dates: "-600 à -530" },
            { nom: "Darius Ier", role: "Organisateur de l'empire", dates: "-550 à -486" }
          ],
          guerres: [
            { nom: "Guerres médiques", annee: -490, contre: "Grèce", issue: "Échec" },
            { nom: "Conquête d'Alexandre", annee: -334, contre: "Macédoine", issue: "Chute de l'empire" }
          ],
          events: [
            { year: -539, label: "Prise de Babylone", importance: "haute", info: "Cyrus libère les Hébreux." },
            { year: -331, label: "Bataille de Gaugamèles", importance: "haute", info: "Alexandre vainc Darius III." }
          ],
          relations: [{ type: "conflit", with: "grece", label: "Guerres médiques", start: -490, end: -449 }],
          liens: [{ label: "Wikipédia — Empire achéménide", url: "https://fr.wikipedia.org/wiki/Empire_ach%C3%A9m%C3%A9nide" }]
        },
        {
          id: "hittites", label: "Empire hittite",
          period: "-1 650 à -1 178", start: -1650, end: -1178,
          color: "#b5651d", isRiver: false, capitale: "Hattusa",
          description: "Grande puissance d'Anatolie, rivale de l'Égypte.",
          regimes: [{ type: "Royaume puis Empire", start: -1650, end: -1178, chef: "Hattushili, Muwatalli" }],
          technologies: ["Métallurgie du fer précoce", "Chars de guerre", "Traités diplomatiques"],
          croyances: ["Panthéon des mille dieux", "Culte de la Tempête"],
          personnages: [{ nom: "Muwatalli II", role: "Roi à Qadesh", dates: "-1295 à -1272" }],
          guerres: [{ nom: "Bataille de Qadesh", annee: -1274, contre: "Égypte", issue: "1er traité de paix connu" }],
          events: [
            { year: -1274, label: "Bataille de Qadesh", importance: "haute", info: "Contre Ramsès II." },
            { year: -1178, label: "Effondrement", importance: "haute", info: "Chute face aux Peuples de la mer." }
          ],
          relations: [{ type: "conflit", with: "egypte", label: "Guerre de Qadesh", start: -1300, end: -1258 }],
          liens: [{ label: "Wikipédia — Hittites", url: "https://fr.wikipedia.org/wiki/Hittites" }]
        },
        {
          id: "chine-imperiale", label: "Chine (Qin & Han)",
          period: "-221 à 220", start: -221, end: 220,
          color: "#e67e22", isRiver: true, capitale: "Xianyang, Chang'an",
          description: "Unification impériale et âge d'or des Han.",
          regimes: [
            { type: "Dynastie Qin", start: -221, end: -206, chef: "Qin Shi Huang" },
            { type: "Dynastie Han", start: -206, end: 220, chef: "Liu Bang, Wudi" }
          ],
          technologies: ["Papier", "Boussole", "Sismographe", "Grande Muraille", "Fonte du fer"],
          croyances: ["Confucianisme", "Taoisme", "Culte des ancêtres"],
          personnages: [
            { nom: "Qin Shi Huang", role: "1er empereur", dates: "-259 à -210" },
            { nom: "Wudi des Han", role: "Empereur expansionniste", dates: "-156 à -87" }
          ],
          guerres: [{ nom: "Guerres contre les Xiongnu", annee: -133, contre: "Xiongnu", issue: "Repli des nomades" }],
          events: [
            { year: -221, label: "Unification de la Chine", importance: "haute", info: "Qin Shi Huang, 1er empereur." },
            { year: -130, label: "Route de la Soie", importance: "haute", info: "Ouverture des échanges avec l'Ouest." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Dynastie Han", url: "https://fr.wikipedia.org/wiki/Dynastie_Han" }]
        },
        {
          id: "maurya", label: "Empire Maurya (Inde)",
          period: "-322 à -185", start: -322, end: -185,
          color: "#16a085", isRiver: true, capitale: "Pataliputra",
          description: "Premier grand empire indien, apogée sous Ashoka.",
          regimes: [{ type: "Empire Maurya", start: -322, end: -185, chef: "Chandragupta, Ashoka" }],
          technologies: ["Administration centralisée", "Édits gravés", "Métallurgie", "Urbanisme"],
          croyances: ["Bouddhisme (Ashoka)", "Hindouisme", "Jaïnisme"],
          personnages: [{ nom: "Ashoka", role: "Empereur bouddhiste", dates: "-304 à -232" }],
          guerres: [{ nom: "Guerre du Kalinga", annee: -261, contre: "Kalinga", issue: "Conversion d'Ashoka" }],
          events: [
            { year: -261, label: "Guerre du Kalinga", importance: "haute", info: "Ashoka renonce à la violence." },
            { year: -250, label: "Diffusion du bouddhisme", importance: "haute", info: "Missions bouddhistes vers l'Asie." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Empire Maurya", url: "https://fr.wikipedia.org/wiki/Empire_Maurya" }]
        },
        {
          id: "pheniciens",
          label: "Civilisation Phénicienne",
          period: "-1200 à -64",
          start: -1200,
          end: -64,
          color: "#6a1b29", // Pourpre de Tyr caractéristique de leur industrie de luxe
          isRiver: false,
          capitale: "Cités-États indépendantes (Tyr, Sidon, Byblos)",
          description: "Peuple de marins et de marchands d'élite du Levant, inventeurs de l'alphabet phonétique moderne et fondateurs d'un immense réseau de comptoirs maritimes tout autour de la Méditerranée.",
          regimes: [
            { type: "Cités-États autonomes gouvernées par des rois et des conseils de marchands", start: -1200, end: -64, chef: "Roi Hiram Ier" }
          ],
          technologies: [
            "Invention de l'alphabet phénicien consonantique (ancêtre de presque tous les alphabets modernes)",
            "Navigation hauturière nocturne (utilisation de l'Étoile Polaire, dite 'Étoile phénicienne')",
            "Artisanat de luxe mondialisé : teinture de la pourpre de Tyr et soufflage du verre transparent",
            "Ingénierie navale de pointe (invention de la trirème à double rang de rameurs et navires ronds de charge Gaulos)"
          ],
          croyances: [
            "Polythéisme sémitique (cultes de Baal, Melqart à Tyr, et de la déesse de la fertilité Astarté)",
            "Rituels de sacrifices et dépôts votifs complexes dans les sanctuaires de hauteur"
          ],
          personnages: [
            { nom: "Roi Hiram Ier", role: "Souverain de Tyr, célèbre pour ses alliances politiques, maritimes et commerciales de longue distance", dates: "Règne de -969 à -936" }
          ],
          guerres: [],
          events: [
            { year: -814, label: "Fondation de Carthage", importance: "haute", info: "Des colons tyriens menés par la princesse Émira/Didon fondent la colonie qui deviendra la superpuissance d'Afrique du Nord." },
            { year: -64, label: "Annexion par Pompée", importance: "haute", info: "Le général romain Pompée le Grand intègre définitivement les dernières cités phéniciennes à la province romaine de Syrie." }
          ],
          relations: [
            { type: "alliance", with: "carthage", label: "Fondation, liens religieux et protectorat culturel de la cité-mère", start: -814, end: -146 },
            { type: "conflit", with: "mesopotamie", label: "Sièges successifs et destructions par les empires assyrien et néo-babylonien", start: -701, end: -573 }
          ],
          liens: [
            { label: "Wikipédia — Phéniciens", url: "https://fr.wikipedia.org/wiki/Ph%C3%A9niciens" }
          ]
        },
        {
          id: "hebreux",
          label: "Israël et Juda antiques (Hébreux)",
          period: "-1200 à 70",
          start: -1200,
          end: 70,
          color: "#af9b63", // Teinte pierre/sable du Proche-Orient pour cette lignée textuelle
          isRiver: false,
          capitale: "Jérusalem",
          description: "Peuple sémitique du Levant dont l'unification politique et la formalisation textuelle du monothéisme éthique au sein de la Bible ont profondément façonné l'histoire religieuse et culturelle universelle.",
          regimes: [
            { type: "Période tribale (Époque des Juges)", start: -1200, end: -1020, chef: "Débora, Samuel" },
            { type: "Monarchie unifiée puis Royaumes divisés (Israël et Juda)", start: -1020, end: -587, chef: "David, Salomon, Ézéchias" },
            { type: "Province théocratique sous dominations successives (Perse, Grecque, Romaine)", start: -538, end: 70, chef: "Hérode le Grand" }
          ],
          technologies: [
            "Codification textuelle et scripturale monumentale de la Torah en hébreu carré",
            "Ingénierie hydraulique urbaine de défense (tunnel d'Ézéchias à Jérusalem)",
            "Architecture monumentale de type temple à plan tripartite syro-phénicien (Temple de Salomon)"
          ],
          croyances: [
            "Monothéisme exclusif (Yahwisme se structurant en Judaïsme rabbinique et textuel)",
            "Centralisation absolue du culte autour du Temple unique de Jérusalem et refus strict de l'iconographie divine"
          ],
          personnages: [
            { nom: "Roi David", role: "Souverain guerrier et poète, fondateur de la dynastie royale de Juda et conquérant de Jérusalem", dates: "Règne de -1010 à -970" },
            { nom: "Roi Salomon", role: "Bâtisseur du Premier Temple, célèbre dans la littérature universelle pour sa sagesse et sa richesse", dates: "Règne de -970 à -931" }
          ],
          guerres: [
            { nom: "Siège de Jérusalem (-587)", annee: -587, contre: "Empire babylonien (Mésopotamie)", issue: "Défaite hébraïque, destruction du Premier Temple et déportation de l'élite à Babylone" },
            { nom: "Grande révolte juive contre Rome", annee: 66, contre: "Rome antique", issue: "Désastre total, destruction de Jérusalem et début de la Diaspora majeure" }
          ],
          events: [
            { year: -587, label: "Exil à Babylone", importance: "haute", info: "La destruction du royaume de Juda pousse les élites à consigner par écrit les traditions textuelles sacrées." },
            { year: -538, label: "Édit de Cyrus", importance: "haute", info: "L'empereur perse Cyrus le Grand autorise le retour des exilés et la reconstruction du Second Temple." },
            { year: 70, label: "Destruction du Second Temple", importance: "haute", info: "Les légions de Titus incendient le sanctuaire central, mettant fin au judaïsme sacerdotal." }
          ],
          relations: [
            { type: "conflit", with: "mesopotamie", label: "Guerres frontalières, invasions et déportation forcée à Babylone", start: -722, end: -539 },
            { type: "alliance", with: "perse", label: "Restauration territoriale et autonomie religieuse accordée par les Achéménides", start: -539, end: -330 },
            { type: "conflit", with: "rome", label: "Guerres judéo-romaines, résistance zélote et écrasement de la Judée", start: -63, end: 70 }
          ],
          liens: [
            { label: "Wikipédia — Histoire du peuple hébreu", url: "https://fr.wikipedia.org/wiki/Histoire_du_peuple_h%C3%A9breu" }
          ]
        },
        {
          id: "xiongnu",
          label: "Confédération des Xiongnu",
          period: "-209 à 46",
          start: -209,
          end: 46,
          color: "#795548", // Brun nomade / steppe pour cette lignée de cavaliers
          isRiver: false,
          capitale: "Ordo (Campement impérial mobile de Mongolie)",
          description: "Immense et redoutable confédération de peuples nomades des steppes de Mongolie, dont la puissance cavalière et les raids destructeurs poussèrent la Chine impériale à s'unifier et à ériger la Grande Muraille.",
          regimes: [
            { type: "Confédération impériale nomade (Régime du Chanyu)", start: -209, end: 46, chef: "Modu Chanyu" }
          ],
          technologies: [
            "Maîtrise absolue de la cavalerie légère et du tir à l'arc inversé en pleine course",
            "Invention de la flèche sifflante tactique (utilisée pour diriger les tirs de masse)",
            "Art animalier des steppes haut de gamme en bronze, or et métaux précieux",
            "Logistique nomade d'armées mobiles sans lignes de ravitaillement fixes"
          ],
          croyances: [
            "Tengrisme (culte du Ciel bleu éternel Tengri)",
            "Chamanisme et cultes des montagnes sacrées",
            "Rituels de sacrifices d'animaux sacrés (chevaux) lors des assemblées saisonnières"
          ],
          personnages: [
            { nom: "Modu Chanyu", role: "Fondateur et grand unificateur de l'empire nomade xiongnu", dates: "Règne de -209 à -174" }
          ],
          guerres: [
            { nom: "Guerre Han-Xiongnu", annee: -133, contre: "Chine (Qin & Han)", issue: "Guerre d'usure séculaire, repli progressif des nomades face à l'expansionnisme Han" }
          ],
          events: [
            { year: -200, label: "Bataille de Baideng", importance: "haute", info: "Modu Chanyu encercle l'empereur Han Gaozu et force la Chine à lui verser un tribut annuel de soie et de grains." },
            { year: -121, label: "Campagnes du corridor du Gansu", importance: "moyenne", info: "Les armées chinoises repoussent les Xiongnu, sécurisant les prémices de la Route de la Soie." }
          ],
          relations: [
            { type: "conflit", with: "chine-imperiale", label: "Raids nomades incessants et conflits frontaliers majeurs", start: -209, end: 46 }
          ],
          liens: [
            { label: "Wikipédia — Xiongnu", url: "https://fr.wikipedia.org/wiki/Xiongnu" }
          ]
        },
        {
          id: "gojoseon",
          label: "Royaume de Gojoseon (Corée antique)",
          period: "-1000 à -108",
          start: -1000,
          end: -108,
          color: "#bf360c", // Rouge brique / rouille pour la lignée de la péninsule coréenne
          isRiver: false,
          capitale: "Asadal / Wanggeom-seong (Pyongyang)",
          description: "Le premier royaume historique de la péninsule coréenne, développé à partir de l'âge du bronze, formant le socle de l'identité et de la culture coréenne avant d'être annexé par la dynastie Han.",
          regimes: [
            { type: "Royaume confédéré de Gojoseon", start: -1000, end: -194, chef: "Dangun (légendaire)" },
            { type: "Royaume de Gojoseon (Période Wiman)", start: -194, end: -108, chef: "Roi Wiman, Roi Ugeo" }
          ],
          technologies: [
            "Métallurgie du bronze distinctive (poignards de type mandoliniforme typiquement coréens)",
            "Architecture mégalithique monumentale (la plus forte densité de dolmens funéraires au monde)",
            "Poterie sans motif (culture Mumun) et outils en pierre polie",
            "Agriculture sédentaire avancée du riz et du millet"
          ],
          croyances: [
            "Chamanisme coréen primitif (importance des prêtresses de cour et de la divination)",
            "Culte du Ciel et totémisme animalier (mythe fondateur liant le prince céleste Hwanung et l'ours)",
            "Vénération des esprits des montagnes (Sanshin)"
          ],
          personnages: [
            { nom: "Roi Wiman", role: "Général exilé de la région du Yan qui s'empare du trône et modernise militairement l'État", dates: "Règne de -194 à -160" }
          ],
          guerres: [
            { nom: "Guerre Gojoseon-Han", annee: -109, contre: "Chine (Qin & Han)", issue: "Chute de la capitale, dissolution du royaume et création des Commanderies chinoises" }
          ],
          events: [
            { year: -108, label: "Chute de Wanggeom-seong", importance: "haute", info: "La capitale capitule après un an de résistance acharnée face aux armées de l'empereur Han Wudi." }
          ],
          relations: [
            { type: "conflit", with: "chine-imperiale", label: "Rivalités commerciales pour le contrôle du fer et invasions militaires des Han", start: -206, end: -108 }
          ],
          liens: [
            { label: "Wikipédia — Gojoseon", url: "https://fr.wikipedia.org/wiki/Gojoseon" }
          ]
        }
      ]
    },
    {
      id: "amerique", label: "Amérique",
      civilizations: [
        {
          id: "olmeques",
          label: "Civilisation Olmèque",
          period: "-1200 à -400",
          start: -1200,
          end: -400,
          color: "#16a085", // Alignement sur la lignée émeraude/jade de la Mésoamérique
          isRiver: true,
          capitale: "San Lorenzo puis La Venta",
          description: "La culture mère de la Mésoamérique, célèbre pour ses têtes colossales monolithiques en basalte, ses complexes cérémoniels précoces et l'invention des fondements du calendrier, de l'écriture et du jeu de balle rituel.",
          regimes: [
            { type: "Chefferies théocratiques centralisées", start: -1200, end: -400, chef: "—" }
          ],
          technologies: [
            "Sculpture monumentale de très haute précision (têtes colossales pesant jusqu'à 25 tonnes)",
            "Travail et polissage d'élite du jade, de la magnétite et de la serpentine",
            "Ingénierie hydraulique de drainage urbain (premiers aqueducs en basalte assemblés)",
            "Architecture monumentale de monticules pyramidaux en terre battue (Grande Pyramide de La Venta)",
            "Éléments primitifs d'écriture glyphique mésoaméricaine (Stèle de Cascajal)"
          ],
          croyances: [
            "Culte du Dieu-Jaguar (divinité centrale de la pluie, du sol et de la fertilité agricole)",
            "Rituels de transformation chamanique et sacralité des grottes, des sources et des reliefs",
            "Pratique rituelle et architecturale du jeu de balle mésoaméricain",
            "Offrandes massives d'objets précieux enterrés lors de rites de désécration"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: -1200, label: "Essor de San Lorenzo", importance: "haute", info: "Émergence du premier grand centre urbain et politique majeur de la côte du Golfe." },
            { year: -900, label: "Destruction de San Lorenzo et essor de La Venta", importance: "haute", info: "Le centre de gravité olmèque se déplace suite à des destructions rituelles ou politiques des monuments." },
            { year: -400, label: "Déclin de La Venta", importance: "haute", info: "Abandon définitif des grands sites cérémoniels olmèques, dispersant les populations et enseignant leurs structures aux cultures émergeantes (Mayas, Zapotèques)." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Olmèques", url: "https://fr.wikipedia.org/wiki/Olm%C3%A8ques" }
          ]
        },
        {
          id: "chavin",
          label: "Civilisation de Chavín",
          period: "-900 à -200",
          start: -900,
          end: -200,
          color: "#d4ac0d", // Teinte or/ocre, en continuité visuelle avec la future lignée andine des Incas
          isRiver: true,
          capitale: "Chavín de Huántar",
          description: "La culture mère des Andes péruviennes, structurée autour d'un immense sanctuaire de pèlerinage pan-andin caractérisé par une architecture de pierre complexe et une iconographie religieuse mystique fusionnant traits félins et rapaces.",
          regimes: [
            { type: "Théocracie cléricale et centre de pèlerinage", start: -900, end: -200, chef: "Élite sacerdotale (Prêtres-Devins)" }
          ],
          technologies: [
            "Architecture monumentale de temples en terrasses avec galeries intérieures sombres et complexes",
            "Ingénierie acoustique de conduits d'air et d'eau simulant des rugissements au cœur des temples",
            "Orfèvrerie et métallurgie précoce de l'or et de l'argent (techniques de martelage et de soudure)",
            "Sculpture sur pierre en bas-relief de monolithes sacrés (Lanzón, Stèle Raimondi, Obélisque Tello)",
            "Tissage complexe de fibres de coton et d'élevage intensif de lamas pour le transport vertical"
          ],
          croyances: [
            "Culte du Dieu aux Sceptres (divinité anthropomorphe majeure des sommets)",
            "Rituels chamaniques d'ingestion de plantes psychotropes (cactus San Pedro) pour la transe divinatoire",
            "Acoustique sacrée via des trompes de grands coquillages marins (Pututos)",
            "Vénération d'animaux prédateurs sacrés (jaguar, caïman, harpie huppée)"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: -900, label: "Construction du Vieux Temple", importance: "haute", info: "Édification de la structure cérémonielle en U abritant la statue cultuelle monolithique du Lanzón." },
            { year: -500, label: "Extension du Nouveau Temple", importance: "moyenne", info: "Agrandissement architectural majeur (Le Château) pour accueillir des flux croissants de pèlerins andins." },
            { year: -200, label: "Effondrement du centre religieux", importance: "haute", info: "Fragmentation de l'hégémonie spirituelle de Chavín au profit de cultures régionales militarisées (Paracas, Nazca, Moche)." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Civilisation de Chavín", url: "https://fr.wikipedia.org/wiki/Chav%C3%ADn_(culture)" }
          ]
        },
        {
          id: "teotihuacan",
          label: "Civilisation de Teotihuacán",
          period: "-100 à 476 (Antiquité)",
          start: -100,
          end: 476,
          color: "#117a65", // Alignement sur la lignée émeraude/jade de la Mésoamérique
          isRiver: false,
          capitale: "Teotihuacán",
          description: "L'une des plus grandes et influentes cités-États du monde antique, célèbre pour ses pyramides monumentales et son plan d'urbanisme géométrique en grille, exerçant une hégémonie commerciale absolue sur toute la Mésoamérique.",
          regimes: [
            { type: "Théocracie et gouvernement oligarchique corporatif", start: -100, end: 476, chef: "—" }
          ],
          technologies: [
            "Urbanisme de masse planifié en grille orthogonale autour de l'Allée des Morts",
            "Architecture monumentale talud-tablero (Pyramide du Soleil, Pyramide de la Lune)",
            "Monopole d'extraction et de taille industrielle de l'obsidienne verte",
            "Production massive de masques funéraires en pierre dure et fresques polychromes",
            "Complexes d'habitation multifamiliaux standardisés avec cours intérieures"
          ],
          croyances: [
            "Culte du Serpent à Plumes (Quetzalcoatl) et du Dieu de la Pluie (Tlaloc)",
            "Sacralisation cosmologique de l'espace urbain aligné sur les mouvements stellaires",
            "Pratique de sacrifices humains et animaliers d'envergure lors de la consécration des temples"
          ],
          personnages: [],
          guerres: [
            { nom: "Expansion et influence maya", annee: 378, contre: "Dynasties Mayas (Tikal)", issue: "Intervention politique de Teotihuacán, installation d'une dynastie alliée à Tikal" }
          ],
          events: [
            { year: 150, label: "Construction de la Pyramide du Soleil", importance: "haute", info: "Édification du monument central de la cité, haut de 65 mètres." },
            { year: 378, label: "L'événement Siyaj K'ak'", importance: "haute", info: "Le général de Teotihuacán arrive à Tikal, renverse le roi local et restructure la géopolitique maya." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Teotihuacán", url: "https://fr.wikipedia.org/wiki/Teotihuac%C3%A1n" }
          ]
        },
        {
          id: "nazca",
          label: "Culture Nazca",
          period: "-200 à 476 (Antiquité)",
          start: -200,
          end: 476,
          color: "#ba9c07", // Teinte ocre/or pour la lignée andine
          isRiver: true,
          capitale: "Cahuachi (Centre cérémoniel)",
          description: "Civilisation côtière ingénieuse du désert péruvien, célèbre mondialement pour ses géoglyphes géants tracés dans le sol et ses systèmes d'aqueducs souterrains révolutionnaires.",
          regimes: [
            { type: "Théocracie et confédération de chefferies d'oasis", start: -200, end: 476, chef: "—" }
          ],
          technologies: [
            "Tracé de géoglyphes géants (Lignes de Nazca) par enlèvement de la couche superficielle d'oxydes de fer",
            "Les Puquios : aqueducs souterrains en pierre avec cheminées d'accès en spirale pour capter les nappes phréatiques",
            "Céramique polychrome d'élite avec application des couleurs avant cuisson (jusqu'à 15 pigments différents)",
            "Techniques avancées de tissage de la laine de camélidés et déformation crânienne rituelle"
          ],
          croyances: [
            "Culte des divinités de l'eau, de la fertilité agricole et des montagnes protectrices",
            "Pratique intensive des têtes-trophées (momification et perforation de crânes d'ennemis pour capter leur force vital)",
            "Pèlerinages de masse vers les pyramides en briques de terre crue (adobe) de Cahuachi"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: 300, label: "Apogée de Cahuachi", importance: "haute", info: "Le site devient le pôle spirituel majeur des Andes côtières, servant de point de convergence pour les rituels de désert." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Civilisation Nazca", url: "https://fr.wikipedia.org/wiki/Nazca_(culture)" }
          ]
        }
      ]
    }
  ]
};
