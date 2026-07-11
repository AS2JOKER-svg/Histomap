// Époques : Préhistoire (schéma enrichi)
export default [
  {
    id: "prehistoire",
    label: "Préhistoire",
    start: -3000000,
    end: -3000,
    color: "#8b9d83",
    description: "De l'apparition des premiers hominidés dans la vallée du Rift à la révolution néolithique et l'invention de l'écriture.",
    continents: [
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "hominides-est", 
            trackId: "humanite_berceau",
            row: 1,
            label: "Hominidés d'Afrique de l'Est",
            period: "-3 000 000 à -200 000", start: -3000000, end: -200000,
            color: "#a8b89a", isRiver: true, capitale: "Vallée du Grand Rift",
            description: "Le berceau de l'humanité, théâtre de l'évolution depuis les Australopithèques jusqu'à l'émergence d'Homo sapiens.",
            
            datesCles: [
              { annee: -3200000, evenement: "Lucy l'Australopithèque", info: "Découverte en Éthiopie, elle prouve l'acquisition précoce de la bipédie." },
              { annee: -2500000, evenement: "Homo Habilis", info: "L'« homme habile » crée les premiers outils en pierre taillée (culture oldowayenne)." },
              { annee: -1800000, evenement: "Homo Erectus", info: "Premier hominidé à quitter l'Afrique et à maîtriser la symétrie des outils (bifaces acheuléens)." },
              { annee: -400000, evenement: "Maîtrise du feu", info: "Domestication des foyers, permettant la cuisson de la viande et la protection nocturne." },
              { annee: -300000, evenement: "Apparition d'Homo Sapiens", info: "Les plus anciens fossiles de notre espèce découverts au Maroc (Djebel Irhoud) et en Éthiopie." }
            ],
            dirigeants: [],
            personnages: [
              { nom: "Lucy (Australopithecus afarensis)", role: "Fossile emblématique", description: "Découverte en 1974 par Yves Coppens. Son squelette complet à 40% a révolutionné notre compréhension de la bipédie.", dates: "Vers -3,2 Millions d'années", wikiUrl: "https://fr.wikipedia.org/wiki/Lucy_(australopith%C3%A8que)" },
              { nom: "Toumaï (Sahelanthropus tchadensis)", role: "Plus ancien hominidé", description: "Découvert au Tchad, il est considéré comme l'une des premières espèces de la lignée humaine.", dates: "Vers -7 Millions d'années", wikiUrl: "https://fr.wikipedia.org/wiki/Touma%C3%AF" }
            ],
            sciences: "L'évolution technologique est extrêmement lente mais décisive. La transition de la culture Oldowayenne (galets simplement aménagés) à l'Acheuléen (bifaces symétriques taillés sur les deux faces) témoigne d'une évolution majeure du cortex cérébral : la capacité de conceptualiser la forme de l'outil avant de le fabriquer. La maîtrise du feu transforme ensuite la physiologie humaine, la digestion cuite demandant moins d'énergie, permettant au cerveau de se développer.",
            croyancesText: "Pour cette période reculée, on ne parle pas de religion mais de « pensée symbolique naissante ». Les premières traces de rites funéraires ou de considérations au-delà de la survie immédiate apparaissent tardivement. Des amas d'ossements et des crânes manipulés ou striés suggèrent de possibles rites de décharnement ou un respect particulier accordé aux défunts avant même l'apparition de Sapiens.",
            diplomatie: "Il n'y a pas de géopolitique, mais des logiques de survie et de migration. Les groupes de chasseurs-cueilleurs vivent en bandes nomades (20 à 50 individus). Lorsque les ressources s'épuisent ou que le climat change, ces groupes se scindent ou migrent. C'est le phénomène « Out of Africa », qui verra Erectus puis Sapiens sortir d'Afrique par vagues successives via le couloir levantin pour peupler l'Eurasie.",
            guerres: [],
            documentaires: [
              { titre: "L'Odyssée de l'espèce (France 3)", url: "https://fr.wikipedia.org/wiki/L%27Odyss%C3%A9e_de_l%27esp%C3%A8ce_(t%C3%A9l%C3%A9film)" }
            ]
          },
          {
            id: "sahara-pasteurs", 
            trackId: "afrique_nord",
            row: 2,
            label: "Pasteurs du Sahara vert",
            period: "-10 000 à -3 000", start: -10000, end: -3000,
            color: "#c2b280", isRiver: false, capitale: "Massif du Tassili n'Ajjer",
            description: "Une riche culture pastorale épanouie dans un Sahara verdoyant (optimum climatique de l'Holocène), avant sa désertification.",
            
            datesCles: [
              { annee: -10000, evenement: "Période humide africaine", info: "La fin de la période glaciaire transforme le Sahara en une savane riche en lacs et en faune." },
              { annee: -8000, evenement: "Invention de la céramique", info: "Les populations d'Afrique saharienne fabriquent des poteries pour cuire céréales et tubercules sauvages." },
              { annee: -5000, evenement: "Apogée de l'art rupestre", info: "Multiplication des fresques représentant des troupeaux de bovins dans le Tassili." },
              { annee: -3500, evenement: "Début de la désertification", info: "L'aridification repousse les pasteurs vers la vallée du Nil, contribuant à la naissance de l'Égypte." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Ces populations ne pratiquent pas l'agriculture au sens strict, mais développent une maîtrise avancée de l'élevage bovin et de la céramique (souvent décorée au peigne). Ils exploitent intensivement les ressources lacustres (harpons en os) et savent stocker les graminées sauvages dans de grandes jarres en argile pour pallier les famines.",
            croyancesText: "Leurs croyances nous sont parvenues par le somptueux art rupestre du Tassili n'Ajjer (Algérie). Les parois rocheuses montrent un panthéon animiste complexe : figures de « Grands Dieux Marciens », têtes rondes, chamans masqués et femmes rituellement décorées. Le bétail, omniprésent, semble posséder un statut sacré, préfigurant les cultes bovins de l'Égypte antique (la déesse Hathor).",
            diplomatie: "Ces sociétés tribales semi-nomades suivent les cycles saisonniers des pluies. L'abondance de ressources de la période dite du « Sahara vert » favorise les échanges pacifiques et les rassemblements rituels autour des grands points d'eau.",
            guerres: [],
            documentaires: [
              { titre: "Documentaire : Le Sahara Vert", url: "https://fr.wikipedia.org/wiki/Subpluvial_n%C3%A9olithique" }
            ]
          }
        ]
      },
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "europe-paleo", 
            trackId: "europe_occidentale",
            row: 1,
            label: "Europe paléolithique",
            period: "-500 000 à -12 000", start: -500000, end: -12000,
            color: "#9aa8c2", isRiver: false, capitale: "Grottes et abris sous roche",
            description: "Des ères glaciaires hostiles à l'explosion de l'art pariétal, marquée par la cohabitation entre l'Homme de Néandertal et Homo Sapiens (Cro-Magnon).",
            
            datesCles: [
              { annee: -400000, evenement: "L'Homme de Tautavel", info: "L'un des plus anciens habitants connus du territoire européen (France)." },
              { annee: -250000, evenement: "L'Homme de Néandertal", info: "Une espèce parfaitement adaptée au climat glaciaire européen émerge." },
              { annee: -43000, evenement: "Arrivée d'Homo Sapiens", info: "Les Sapiens (Aurignaciens) arrivent en Europe et cohabitent avec Néandertal." },
              { annee: -36000, evenement: "Grotte Chauvet", info: "Création de la plus ancienne grande fresque d'art pariétal au monde (Ardèche)." },
              { annee: -30000, evenement: "Extinction de Néandertal", info: "Disparition progressive de l'Homme de Néandertal face à la pression démographique de Sapiens." },
              { annee: -17000, evenement: "Grotte de Lascaux", info: "La « Chapelle Sixtine de la préhistoire », apogée de la culture magdalénienne." }
            ],
            dirigeants: [],
            personnages: [
              { nom: "L'Homme de Néandertal", role: "Espèce humaine autochtone", description: "Chasseur de mégafaune, robuste et doté d'un cerveau plus volumineux que le nôtre. Il est le premier à enterrer ses morts.", dates: "-300 000 à -30 000", wikiUrl: "https://fr.wikipedia.org/wiki/Homme_de_N%C3%A9andertal" },
              { nom: "L'Homme de Cro-Magnon", role: "Homo Sapiens européen", description: "Nom donné aux premiers Sapiens d'Europe occidentale. Artistes accomplis et nomades efficaces.", dates: "Dès -43 000", wikiUrl: "https://fr.wikipedia.org/wiki/Homme_de_Cro-Magnon" }
            ],
            sciences: "L'adaptation au froid glaciaire force l'innovation. Néandertal utilise la méthode Levallois pour produire des éclats de silex d'une grande précision. À son arrivée, Sapiens révolutionne la chasse avec le propulseur, qui permet de projeter des sagaies à longue distance et en sécurité, ainsi que l'invention de l'aiguille à chas en os pour coudre des vêtements hermétiques en peau.",
            croyancesText: "L'art pariétal (peintures au fond des grottes) est la manifestation la plus éclatante d'une spiritualité complexe. Ces sanctuaires obscurs (Chauvet, Lascaux, Altamira) ne sont pas des lieux d'habitation, mais probablement des lieux de rites initiatiques ou chamaniques. Les animaux dessinés (mammouths, rhinocéros, lions des cavernes) ne sont pas le reflet du menu quotidien, mais des figures mythologiques.",
            diplomatie: "Il existe des réseaux d'échanges à longue distance sur tout le continent. On retrouve des coquillages marins au centre des terres, et du silex de grande qualité transporté sur des centaines de kilomètres. La génétique prouve également qu'il y a eu des métissages (hybridations) entre Néandertal et Sapiens.",
            guerres: [],
            documentaires: [
              { titre: "Arte : Néandertal, l'énigme", url: "https://fr.wikipedia.org/wiki/Homme_de_N%C3%A9andertal" }
            ]
          },
          {
            id: "europe-neo", 
            trackId: "europe_occidentale",
            row: 1,
            label: "Europe néolithique",
            period: "-6 000 à -2 200", start: -6000, end: -2200,
            color: "#8fae9a", isRiver: false, capitale: "Villages lacustres et agro-pastoraux",
            description: "La « révolution néolithique » : l'Europe adopte l'agriculture, se sédentarise, et voit l'émergence des premières sociétés inégalitaires.",
            
            datesCles: [
              { annee: -6500, evenement: "Courant Danubien", info: "L'agriculture arrive du Proche-Orient via les Balkans et remonte le Danube." },
              { annee: -5500, evenement: "Courant Cardial", info: "Seconde voie de colonisation agricole, par la mer, le long des côtes méditerranéennes." },
              { annee: -4000, evenement: "Invention de la roue", info: "Apparition des premiers chariots en Europe de l'Est et en Mésopotamie." },
              { annee: -3300, evenement: "Mort d'Ötzi", info: "L'homme des glaces, retrouvé momifié dans les Alpes, témoigne des violences de l'époque." }
            ],
            dirigeants: [],
            personnages: [
              { nom: "Ötzi", role: "Témoin archéologique", description: "Momie naturelle extraordinairement bien conservée retrouvée dans un glacier. Son équipement (hache en cuivre, arc) et sa mort violente par flèche renseignent sur la vie au Chalcolithique.", dates: "Mort vers -3300", wikiUrl: "https://fr.wikipedia.org/wiki/%C3%96tzi" }
            ],
            sciences: "Le mode de vie bascule. La forêt européenne est massivement défrichée à la hache de pierre polie pour créer des champs de blé et de lentilles. C'est l'apparition de la poterie utilitaire (pour stocker le grain), de la vannerie, du tissage (lin et laine), et plus tard de la première métallurgie (le cuivre). L'homme modifie pour la première fois son environnement à grande échelle.",
            croyancesText: "Les sociétés agricoles développent un culte fort lié à la fertilité et au cycle des saisons. Les statuettes de « déesses-mères » ou de figures féminines aux formes généreuses se multiplient. Le rapport à la mort change avec l'apparition de nécropoles, marquant l'attachement d'un clan à un territoire fixe.",
            diplomatie: "La sédentarisation entraîne la notion de propriété (terre, bétail, réserves de grain). Cette accumulation de richesses crée les premières tensions territoriales et de classes sociales. On voit apparaître les premières fortifications de villages (palissades, fossés) et l'archéologie révèle des charniers liés à des massacres de villages entiers (comme le site de Talheim en Allemagne).",
            guerres: [],
            documentaires: [
              { titre: "Documentaire : Le mystère de la momie Ötzi", url: "https://fr.wikipedia.org/wiki/%C3%96tzi" }
            ]
          },
          {
            id: "megalithes-europe",
            trackId: "megalithes",
            row: 2,
            label: "Culture Mégalithique",
            period: "-4500 à -3000",
            start: -4500,
            end: -3000,
            color: "#78909c", 
            isRiver: false,
            capitale: "Façade Atlantique (Carnac, Stonehenge)",
            description: "Un vaste réseau culturel maritime d'Europe occidentale caractérisé par l'érection de monuments géants en pierre, démontrant une ingénierie sociale sidérante.",
            
            datesCles: [
              { annee: -4500, evenement: "Débuts du mégalithisme", info: "Émergence des premiers cairns et dolmens sur la façade atlantique (Bretagne, Péninsule ibérique)." },
              { annee: -3600, evenement: "Temples de Ġgantija", info: "À Malte, édification de structures autoportantes colossales, avant les pyramides d'Égypte." },
              { annee: -3100, evenement: "Newgrange", info: "Construction de l'immense tumulus irlandais, parfaitement aligné sur le solstice d'hiver." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Leur génie réside dans l'ingénierie mécanique et astronomique. Déplacer, lever et caler des monolithes pesant jusqu'à 300 tonnes (le Grand Menhir brisé d'Er Grah) implique des centaines d'hommes, des systèmes de rondins, de leviers et une organisation sociale mathématique. Leurs sites servent de calendriers géants pour prédire solstices et équinoxes.",
            croyancesText: "Le mégalithe a une fonction funéraire et territoriale. Les dolmens sont des caveaux collectifs recouverts de terre (tumulus) où reposent les ancêtres. Dresser une pierre monumentale (un menhir), c'est ancrer physiquement et symboliquement un clan sur son territoire face au ciel.",
            diplomatie: "L'uniformité du phénomène mégalithique de la Scandinavie au Portugal prouve l'existence de réseaux maritimes intenses le long des côtes atlantiques. Les élites s'échangent des objets de grand prestige, notamment des haches en jadéite polie extraite des Alpes et exportée jusqu'en Écosse.",
            guerres: [],
            documentaires: [
              { titre: "Wikipédia : Mégalithisme", url: "https://fr.wikipedia.org/wiki/M%C3%A9galithisme_en_Europe" }
            ]
          }
        ]
      },
      {
        id: "asie", label: "Asie",
        civilizations: [
          {
            id: "chine-neo", 
            trackId: "chine",
            row: 1,
            label: "Chine néolithique",
            period: "-1 700 000 à -2 000", start: -1700000, end: -2000,
            color: "#c2a09a", isRiver: true, capitale: "Bassins du Fleuve Jaune et du Yangtsé",
            description: "Des premiers foyers d'Homo erectus aux puissantes cultures agricoles de Yangshao et Longshan, jetant les bases de la civilisation chinoise.",
            
            datesCles: [
              { annee: -750000, evenement: "L'Homme de Pékin", info: "Un Homo erectus maîtrisant le feu, découvert dans la grotte de Zhoukoudian." },
              { annee: -7000, evenement: "Riziculture et Millet", info: "Apparition de la culture du millet au nord (Fleuve Jaune) et du riz au sud (Yangtsé)." },
              { annee: -5000, evenement: "Culture de Yangshao", info: "Sédentarisation massive avec la création de superbes céramiques peintes." },
              { annee: -3000, evenement: "Culture de Longshan", info: "Apparition des murs en pisé, de la poterie noire ultra-fine et des guerres tribales." }
            ],
            dirigeants: [],
            personnages: [
              { nom: "Fuxi et Nuwa", role: "Héros mythologiques", description: "Souverains légendaires de la mythologie chinoise, crédités de l'invention de la chasse, de la pêche, du mariage et de la musique.", dates: "Mythologie (vers -2800)", wikiUrl: "https://fr.wikipedia.org/wiki/Nuwa" }
            ],
            sciences: "Deux pôles d'innovation coexistent : le bassin du fleuve Jaune, aride, spécialisé dans le millet, et le bassin du Yangtsé, inondable, qui invente la riziculture. Dès cette époque, la Chine se distingue par des inventions précoces qui deviendront ses monopoles : l'élevage du ver à soie pour la création de tissus, et le travail rituel du jade, une pierre si dure qu'elle ne se taille pas mais s'use par abrasion.",
            croyancesText: "Le respect fondamental des ancêtres, pilier de la mentalité chinoise, naît ici. On ne vénère pas de dieux olympiens, mais les esprits de la nature et les fondateurs du clan. La culture de Longshan systématise la scapulomancie (divination) : on craquèle des omoplates d'animaux au feu pour y lire l'avenir, une pratique qui donnera directement naissance à l'écriture chinoise.",
            diplomatie: "À la fin de la période (culture de Longshan), l'accroissement démographique provoque une violente compétition pour les terres arables. Les villages se dotent d'immenses remparts en terre damée (pisé). L'archéologie révèle l'apparition d'armes spécialisées (haches d'armes) et de tombes très riches contrastant avec des fosses communes, marquant la naissance des premières aristocraties guerrières.",
            guerres: [],
            documentaires: [
              { titre: "Wikipédia : Néolithique chinois", url: "https://fr.wikipedia.org/wiki/N%C3%A9olithique_chinois" }
            ]
          },
          {
            id: "mesopotamie-prehist", 
            trackId: "mesopotamie",
            row: 2,
            label: "Mésopotamie pré-urbaine",
            period: "-10 000 à -3 500", start: -10000, end: -3500,
            color: "#d9b38c", isRiver: true, capitale: "Croissant fertile (Eridu, Uruk)",
            description: "Le creuset de la civilisation urbaine : du premier village agricole à l'émergence des villes-États colossales de Sumer.",
            
            datesCles: [
              { annee: -9000, evenement: "Révolution agricole", info: "Première domestication du blé et des moutons dans le Croissant fertile." },
              { annee: -6000, evenement: "Culture de Halaf", info: "Villages circulaires et céramique peinte de haute qualité dans le nord de la Mésopotamie." },
              { annee: -5400, evenement: "Période d'Obeïd", info: "Premiers temples, apparition de l'irrigation complexe dans les marécages du Sud." },
              { annee: -4000, evenement: "Fondation d'Uruk", info: "La première véritable métropole du monde, concentrant des dizaines de milliers d'habitants." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Le Sud mésopotamien (le pays de Sumer) est un marécage infertile sans pluie. Le génie de la période d'Obeïd est d'avoir inventé l'irrigation artificielle à grande échelle en canalisant le Tigre et l'Euphrate. Pour gérer cette logistique colossale, ils inventent le sceau-cylindre (pour sceller les marchandises), la roue (pour les transports et la poterie), et le système comptable à jetons d'argile, l'ancêtre direct de l'écriture.",
            croyancesText: "La religion mésopotamienne se structure autour du Temple (l'É). Chaque ville est la propriété d'un dieu tutélaire (Enki à Eridu, Inanna à Uruk). Le temple n'est pas qu'un lieu de culte, c'est le centre économique de la ville : il stocke les récoltes, gère les terres, emploie des artisans et redistribue la nourriture en période de crise.",
            diplomatie: "Durant la fin de cette période (période d'Uruk), la Mésopotamie du Sud devient si puissante qu'elle déploie un vaste réseau de comptoirs coloniaux vers le Nord (Syrie, Anatolie) pour s'approvisionner en bois, pierre et métaux qui font défaut dans leurs plaines de boue. C'est la première mondialisation économique connue.",
            guerres: [],
            documentaires: [
              { titre: "Wikipédia : Période d'Uruk", url: "https://fr.wikipedia.org/wiki/P%C3%A9riode_d%27Uruk" }
            ]
          },
          {
            id: "gobekli-tepe",
            trackId: "proche_orient",
            row: 3,
            label: "Proche-Orient (Göbekli Tepe)",
            period: "-10000 à -8000",
            start: -10000,
            end: -8000,
            color: "#8d6e63", 
            isRiver: false,
            capitale: "Göbekli Tepe / Karahan Tepe",
            description: "Le plus ancien sanctuaire monumental connu, bâti par des chasseurs-cueilleurs avant même l'invention de l'agriculture, renversant notre compréhension de l'histoire.",
            
            datesCles: [
              { annee: -9600, evenement: "Érection des mégalithes", info: "Taille et mise en place des immenses piliers en forme de T ornés de bas-reliefs animaliers." },
              { annee: -8500, evenement: "Domestication végétale précoce", info: "L'engrain (blé sauvage) est domestiqué à quelques kilomètres du site (Karaca Dağ)." },
              { annee: -8000, evenement: "Enfouissement du site", info: "Pour des raisons inexpliquées, les sanctuaires sont volontairement recouverts de milliers de tonnes de gravats, les figeant pour l'éternité." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Le site de Göbekli Tepe détruit l'ancien paradigme archéologique. Il prouve que la capacité à tailler et transporter des piliers monolithes de 20 tonnes n'a pas nécessité une société sédentaire agricole préalable. L'organisation complexe d'un chantier d'une telle ampleur par des chasseurs nomades montre une maîtrise insoupçonnée de la taille de pierre (réalisée sans aucun outil en métal) et de l'ingénierie structurelle.",
            croyancesText: "Le site est exclusivement cultuel (aucune trace d'habitation). L'animisme qui s'y déploie est terrifiant et mystérieux : les bas-reliefs ne montrent aucun animal comestible (gazelles), mais uniquement des prédateurs mortels ou venimeux (scorpions, vautours, renards, lions, sangliers furieux). Les piliers en forme de T, parfois dotés de bras, pourraient représenter des ancêtres déifiés ou des dieux sans visage.",
            diplomatie: "La construction et l'entretien de ce sanctuaire ont nécessité la coopération de plusieurs tribus ou clans de la région d'Anatolie. Göbekli Tepe fonctionnait probablement comme un centre de pèlerinage où des groupes dispersés se réunissaient ponctuellement pour festoyer, échanger des partenaires (pour éviter la consanguinité) et partager des innovations, favorisant ainsi la découverte de l'agriculture.",
            guerres: [],
            documentaires: [
              { titre: "Arte : Göbekli Tepe, le plus vieux temple du monde", url: "https://fr.wikipedia.org/wiki/G%C3%B6bekli_Tepe" }
            ]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "caral-supe",
            trackId: "andes",
            row: 1,
            label: "Civilisation de Caral-Supe",
            period: "-3500 à -1800",
            start: -3500,
            end: -3000, 
            color: "#f4d03f", 
            isRiver: true,
            capitale: "Caral",
            description: "La plus ancienne civilisation des Amériques, ayant érigé d'immenses pyramides dans les vallées péruviennes dans une paix absolue, sans hiéroglyphes ni poterie.",
            
            datesCles: [
              { annee: -3500, evenement: "Sédentarisation côtière", info: "Les populations s'installent dans la vallée de Supe pour exploiter les ressources marines et agricoles." },
              { annee: -2600, evenement: "Âge d'or architectural", info: "Construction de la ville sacrée de Caral et de sa Grande Pyramide (Pirámide Mayor)." },
              { annee: -1800, evenement: "Déclin et abandon", info: "Des changements climatiques (El Niño massif) détruisent l'écosystème, forçant l'exode vers le nord." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Leur développement technologique est unique et atypique : ils ne fabriquent ni armes, ni poteries, mais sont d'exceptionnels architectes. Ils inventent les 'shicras', des sacs en fibre végétale remplis de pierres intégrés dans les fondations des pyramides, créant le premier système parasismique de l'histoire. C'est également à Caral qu'a été retrouvé le plus ancien 'quipu' (système comptable complexe basé sur des cordelettes à nœuds).",
            croyancesText: "La religion de Caral semble axée sur le culte du feu et la musique. Au centre des architectures monumentales se trouvent des amphithéâtres circulaires engloutis contenant des foyers sacrés où des offrandes (quartz, coquillages, cheveux) étaient brûlées. Des fouilles y ont mis au jour d'impressionnants ensembles d'instruments à vent : 32 flûtes taillées dans des os de condor et de pélican.",
            diplomatie: "C'est une anomalie dans l'histoire humaine : la civilisation de Caral est la seule civilisation primitive majeure dont l'archéologie n'a révélé absolument aucune trace de guerre. Pas de murailles, pas d'armes, pas de corps mutilés. Leur économie repose sur un puissant réseau commercial pacifique entre les pêcheurs de la côte (apportant anchois et sardines) et les agriculteurs des terres (cultivant le coton et les courges).",
            guerres: [],
            documentaires: [
              { titre: "Wikipédia : Civilisation de Caral", url: "https://fr.wikipedia.org/wiki/Civilisation_de_Caral" }
            ]
          }
        ]
      }
    ]
  }
];