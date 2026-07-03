// Époques : Préhistoire + Antiquité (schéma enrichi)
export default [
  {
    id: "prehistoire",
    label: "Préhistoire",
    start: -3000000,
    end: -3000,
    color: "#8b9d83",
    description: "De l'apparition des premiers hominidés à l'invention de l'écriture.",
    continents: [
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "hominides-est", label: "Hominidés d'Afrique de l'Est",
            period: "-3 000 000 à -200 000", start: -3000000, end: -200000,
            color: "#a8b89a", isRiver: true, capitale: "Vallée du Grand Rift",
            description: "Berceau de l'humanité : apparition des premiers hominidés puis d'Homo sapiens.",
            regimes: [{ type: "Bandes de chasseurs-cueilleurs", start: -3000000, end: -200000, chef: "—" }],
            technologies: ["Premiers outils de pierre taillée (Oldowan)", "Maîtrise progressive du feu", "Bipédie"],
            croyances: ["Premières sépultures", "Pensée symbolique naissante"],
            personnages: [{ nom: "Lucy (Australopithèque)", role: "Fossile emblématique", dates: "≈ -3,2 M" }],
            guerres: [],
            events: [
              { year: -3000000, label: "Premiers hominidés", importance: "haute", info: "Les australopithèques peuplent la vallée du Grand Rift." },
              { year: -200000, label: "Apparition d'Homo sapiens", importance: "haute", info: "Les plus anciens Homo sapiens connus proviennent d'Afrique." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Préhistoire", url: "https://fr.wikipedia.org/wiki/Pr%C3%A9histoire" }]
          },
          {
            id: "sahara-pasteurs", label: "Pasteurs du Sahara vert",
            period: "-10 000 à -3 000", start: -10000, end: -3000,
            color: "#c2b280", isRiver: false, capitale: "Sahara néolithique",
            description: "Pasteurs et premiers agriculteurs d'un Sahara alors verdoyant.",
            regimes: [{ type: "Sociétés tribales de pasteurs", start: -10000, end: -3000, chef: "—" }],
            technologies: ["Élevage bovin", "Poterie", "Art rupestre du Tassili"],
            croyances: ["Cultes animaliers", "Peintures rituelles"],
            personnages: [],
            guerres: [],
            events: [
              { year: -10000, label: "Domestication du bétail", importance: "moyenne", info: "Élevage dans un Sahara verdoyant." },
              { year: -7000, label: "Néolithique au Nil", importance: "moyenne", info: "L'agriculture atteint la vallée du Nil." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Sahara préhistorique", url: "https://fr.wikipedia.org/wiki/Sahara" }]
          }
        ]
      },
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "europe-paleo", label: "Europe paléolithique",
            period: "-500 000 à -12 000", start: -500000, end: -12000,
            color: "#9aa8c2", isRiver: false, capitale: "Vallées d'Europe de l'Ouest",
            description: "Des premiers bifaces à l'art pariétal de Chauvet et Lascaux.",
            regimes: [{ type: "Bandes de chasseurs-cueilleurs", start: -500000, end: -12000, chef: "—" }],
            technologies: ["Bifaces acheuléens", "Propulseur", "Aiguilles en os", "Art pariétal"],
            croyances: ["Rites funéraires néandertaliens", "Art symbolique des grottes"],
            personnages: [{ nom: "Homme de Néandertal", role: "Espèce humaine", dates: "-400 000 à -30 000" }],
            guerres: [],
            events: [
              { year: -40000, label: "Grotte Chauvet", importance: "haute", info: "L'un des plus anciens arts pariétaux connus." },
              { year: -17000, label: "Lascaux", importance: "haute", info: "Chef-d'œuvre de l'art magdalénien." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Paléolithique", url: "https://fr.wikipedia.org/wiki/Pal%C3%A9olithique" }]
          },
          {
            id: "europe-neo", label: "Europe néolithique",
            period: "-6 000 à -2 200", start: -6000, end: -2200,
            color: "#8fae9a", isRiver: false, capitale: "Villages agricoles",
            description: "Révolution néolithique, mégalithes (Stonehenge, Carnac).",
            regimes: [{ type: "Communautés villageoises", start: -6000, end: -2200, chef: "—" }],
            technologies: ["Agriculture", "Élevage", "Céramique", "Mégalithisme"],
            croyances: ["Cultes solaires", "Alignements mégalithiques"],
            personnages: [],
            guerres: [],
            events: [
              { year: -3100, label: "Stonehenge", importance: "haute", info: "Édification du grand cercle mégalithique." },
              { year: -4500, label: "Alignements de Carnac", importance: "moyenne", info: "Milliers de menhirs en Bretagne." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Néolithique", url: "https://fr.wikipedia.org/wiki/N%C3%A9olithique" }]
          },
          {
            id: "megalithes-europe",
            label: "Culture Mégalithique Européenne",
            period: "-4500 à -2500",
            start: -4500,
            end: -3000, // Coupé à -3000 pour la borne du fichier (la suite va en Part 2)
            color: "#78909c", // Gris pierre/granit pour les bâtisseurs de menhirs
            isRiver: false,
            capitale: "Centres rituels régionaux (Carnac, Temples de Malte, ébauches de Stonehenge)",
            description: "Vaste horizon culturel maritime et terrestre d'Europe occidentale caractérisé par l'érection de monuments géants en pierre brute, témoignant d'une organisation sociale structurée et d'une maîtrise géométrique avancée.",
            regimes: [
              { type: "Sociétés de chefferies et clans agro-pastoraux", start: -4500, end: -3000, chef: "Chefs de clans / Sages" }
            ],
            technologies: [
              "Ingénierie de déplacement, levage et calage de pierres monumentales (jusqu'à plusieurs dizaines de tonnes)",
              "Architecture funéraire avancée (dolmens à couloir, cairns voûtés à encorbellement)",
              "Astronomie de terrain (alignements précis des pierres sur les solstices et les cycles lunaires)",
              "Métallurgie précoce du cuivre et production de grandes haches de prestige en jadéite polie"
            ],
            croyances: [
              "Culte agraire et solaire lié à la régénération de la nature et au passage des saisons",
              "Vénération monumentale des ancêtres via des sépultures collectives et des rituels de déposition"
            ],
            personnages: [],
            guerres: [],
            events: [
              { year: -4500, label: "Essor du mégalithisme atlantique", importance: "haute", info: "Émergence des premières architectures de pierre en façade atlantique et en Bretagne." },
              { year: -3600, label: "Temples de Ġgantija à Malte", importance: "haute", info: "Édification de structures temples autoportantes en pierre parmi les plus anciennes d'Europe." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Mégalithisme en Europe", url: "https://fr.wikipedia.org/wiki/M%C3%A9galithisme_en_Europe" }
            ]
          }
        ]
      },
      {
        id: "asie", label: "Asie",
        civilizations: [
          {
            id: "chine-neo", label: "Chine néolithique",
            period: "-1 700 000 à -2 000", start: -1700000, end: -2000,
            color: "#c2a09a", isRiver: true, capitale: "Bassins du Fleuve Jaune",
            description: "D'Homo erectus aux cultures de Yangshao et Longshan.",
            regimes: [{ type: "Cultures néolithiques", start: -7000, end: -2000, chef: "—" }],
            technologies: ["Céramique peinte", "Riziculture", "Soie primitive", "Jade travaillé"],
            croyances: ["Culte des ancêtres", "Divination"],
            personnages: [],
            guerres: [],
            events: [
              { year: -5000, label: "Culture de Yangshao", importance: "moyenne", info: "Céramiques peintes du Fleuve Jaune." },
              { year: -3000, label: "Culture de Longshan", importance: "moyenne", info: "Poteries noires et premières cités." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Chine néolithique", url: "https://fr.wikipedia.org/wiki/N%C3%A9olithique_chinois" }]
          },
          {
            id: "mesopotamie-prehist", label: "Mésopotamie pré-urbaine",
            period: "-10 000 à -3 500", start: -10000, end: -3500,
            color: "#d9b38c", isRiver: true, capitale: "Croissant fertile",
            description: "Premiers villages et cités du Croissant fertile, prélude aux Sumériens.",
            regimes: [{ type: "Villages puis proto-cités", start: -10000, end: -3500, chef: "—" }],
            technologies: ["Irrigation", "Poterie", "Premières briques", "Roue naissante"],
            croyances: ["Temples primitifs", "Déesses-mères"],
            personnages: [],
            guerres: [],
            events: [
              { year: -9000, label: "Göbekli Tepe", importance: "haute", info: "Plus ancien sanctuaire monumental connu." },
              { year: -4000, label: "Cité d'Ourouk", importance: "moyenne", info: "Première grande ville du monde." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Croissant fertile", url: "https://fr.wikipedia.org/wiki/Croissant_fertile" }]
          },
          {
            id: "gobekli-tepe",
            label: "Néolithique du Proche-Orient (Göbekli Tepe)",
            period: "-10000 à -8000",
            start: -10000,
            end: -8000,
            color: "#8d6e63", // Brun terre/pierre pour l'aube de l'architecture
            isRiver: false,
            capitale: "Göbekli Tepe / Karahan Tepe",
            description: "Le plus ancien complexe monumental et sanctuaire mégalithique connu au monde, érigé par des chasseurs-cueilleurs au début de la sédentarisation, révolutionnant notre compréhension de la naissance des religions et des sociétés complexes.",
            regimes: [
              { type: "Sociétés tribales sédentaires et communautés de culte", start: -10000, end: -8000, chef: "Élites chamaniques / Prêtres" }
            ],
            technologies: [
              "Taille et transport de piliers monolithiques en calcaire en forme de T pesant jusqu'à 20 tonnes",
              "Haut-reliefs et bas-reliefs animaliers d'une extrême précision (renards, scorpions, lions, vautours)",
              "Prémices de la domestication des plantes sauvages (engrain, blé amidonnier) à proximité du site"
            ],
            croyances: [
              "Culte des ancêtres et animisme complexe avec une place centrale accordée aux prédateurs sacrés",
              "Rituels chamaniques collectifs et rassemblements saisonniers inter-tribaux autour de sanctuaires circulaires"
            ],
            personnages: [],
            guerres: [],
            events: [
              { year: -9600, label: "Érection des premiers enclos", importance: "haute", info: "Début des constructions monumentales en pierre, bien avant l'invention de la poterie ou de la métallurgie." },
              { year: -8000, label: "Enfouissement volontaire du site", importance: "haute", info: "Les structures sont délibérément enterrées sous de la terre par leurs créateurs pour des raisons rituelles inconnues, figeant le site pour l'éternité." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Göbekli Tepe", url: "https://fr.wikipedia.org/wiki/G%C3%B6bekli_Tepe" }
            ]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "caral-supe",
            label: "Civilisation de Caral-Supe (Norte Chico)",
            period: "-3500 à -1800",
            start: -3500,
            end: -3000, // Coupé à -3000 pour respecter la borne du fichier
            color: "#f4d03f", // Or/Ocre pour la lignée mère andine
            isRiver: true,
            capitale: "Caral",
            description: "La plus ancienne civilisation connue des Amériques, développée dans les vallées côtières du Pérou, caractérisée par l'érection de pyramides massives en pierre sans aucune trace d'artillerie militaire ou de guerre.",
            regimes: [
              { type: "Théocracie centralisée pacifique", start: -3500, end: -3000, chef: "Gouvernement clérical" }
            ],
            technologies: [
              "Architecture monumentale de plateformes pyramidales en maçonnerie de pierre sèche",
              "Invention des Shicras (sacs en roseau tressé remplis de pierres servant d'amortisseurs parasismiques sous les structures)",
              "Création du premier prototype de Quipu (système de cordes à nœuds comptable retrouvé sur site)",
              "Irrigation agricole avancée pour la culture à grande échelle du coton de couleur naturelle"
            ],
            croyances: [
              "Culte du Dieu aux Sceptres (prémices de la grande divinité andine)",
              "Rituels architecturaux centrés sur de grands amphithéâtres circulaires enfouis avec feux sacrés musicaux (flûtes en os de condor)"
            ],
            personnages: [],
            guerres: [],
            events: [
              { year: -3500, label: "Fondation des premiers centres urbains", importance: "haute", info: "Sédentarisation massive et début des travaux collectifs de terrassement dans la vallée de Supe." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Civilisation de Caral", url: "https://fr.wikipedia.org/wiki/Civilisation_de_Caral" }
            ]
          }
        ]
      }
    ]
  }
];
