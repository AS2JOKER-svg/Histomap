// Époques : Moderne (1492-1789) + Contemporaine (1789-2020)
export default [
  {
    id: "moderne",
    label: "Époque moderne",
    start: 1492,
    end: 1789,
    color: "#c98bb9",
    description: "Grandes découvertes, Renaissance, empires coloniaux et absolutisme.",
    continents: [
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "espagne", label: "Empire espagnol",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#d4ac0d", isRiver: false, capitale: "Madrid",
            description: "Premier empire mondial, or des Amériques et Siècle d'or.",
            regimes: [
              { type: "Monarchie des Rois catholiques", start: 1492, end: 1516, chef: "Isabelle & Ferdinand" },
              { type: "Empire des Habsbourg", start: 1516, end: 1700, chef: "Charles Quint, Philippe II" },
              { type: "Monarchie des Bourbons", start: 1700, end: 1789, chef: "Philippe V" }
            ],
            technologies: ["Navigation océanique", "Galions", "Cartographie", "Imprimerie"],
            croyances: ["Catholicisme", "Inquisition", "Contre-Réforme"],
            personnages: [
              { nom: "Christophe Colomb", role: "Explorateur", dates: "1451 à 1506" },
              { nom: "Charles Quint", role: "Empereur", dates: "1500 à 1558" }
            ],
            guerres: [{ nom: "Invincible Armada", annee: 1588, contre: "Angleterre", issue: "Désastre naval" }],
            events: [
              { year: 1492, label: "Découverte de l'Amérique", importance: "haute", info: "Colomb atteint les Antilles." },
              { year: 1521, label: "Chute de l'Empire aztèque", importance: "haute", info: "Cortés prend Tenochtitlan." }
            ],
            relations: [{ type: "conflit", with: "angleterre-mod", label: "Guerre anglo-espagnole", start: 1585, end: 1604 }],
            liens: [{ label: "Wikipédia — Empire espagnol", url: "https://fr.wikipedia.org/wiki/Empire_espagnol" }]
          },
          {
            id: "france-mod", label: "Royaume de France (Ancien Régime)",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#3f6fd1", isRiver: false, capitale: "Paris, Versailles",
            description: "Renaissance, guerres de religion et absolutisme de Louis XIV.",
            regimes: [
              { type: "Monarchie de la Renaissance", start: 1492, end: 1589, chef: "François Ier" },
              { type: "Monarchie des Bourbons", start: 1589, end: 1643, chef: "Henri IV, Louis XIII" },
              { type: "Monarchie absolue", start: 1643, end: 1789, chef: "Louis XIV, Louis XV" }
            ],
            technologies: ["Académie des sciences", "Canal du Midi", "Architecture classique"],
            croyances: ["Catholicisme", "Édit de Nantes (tolérance)", "Jansénisme"],
            personnages: [
              { nom: "François Ier", role: "Roi de la Renaissance", dates: "1494 à 1547" },
              { nom: "Louis XIV", role: "Roi-Soleil", dates: "1638 à 1715" }
            ],
            guerres: [{ nom: "Guerres de religion", annee: 1562, contre: "Protestants", issue: "Édit de Nantes" }],
            events: [
              { year: 1598, label: "Édit de Nantes", importance: "haute", info: "Tolérance envers les protestants." },
              { year: 1682, label: "Cour à Versailles", importance: "haute", info: "Apogée de l'absolutisme." }
            ],
            relations: [{ type: "alliance", with: "espagne", label: "Pacte de Famille (Bourbons)", start: 1733, end: 1789 }],
            liens: [{ label: "Wikipédia — Ancien Régime", url: "https://fr.wikipedia.org/wiki/Ancien_R%C3%A9gime" }]
          },
          {
            id: "angleterre-mod", label: "Angleterre / Grande-Bretagne",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#c0392b", isRiver: false, capitale: "Londres",
            description: "Réforme anglicane, révolutions et essor maritime.",
            regimes: [
              { type: "Monarchie Tudor", start: 1492, end: 1603, chef: "Henri VIII, Élisabeth Ire" },
              { type: "Monarchie Stuart / République", start: 1603, end: 1714, chef: "Cromwell, Charles II" },
              { type: "Monarchie parlementaire", start: 1714, end: 1789, chef: "George III" }
            ],
            technologies: ["Marine de guerre", "Banque d'Angleterre", "Machine à vapeur (Newcomen)"],
            croyances: ["Anglicanisme", "Puritanisme"],
            personnages: [
              { nom: "Élisabeth Ire", role: "Reine du Siècle d'or", dates: "1533 à 1603" },
              { nom: "Isaac Newton", role: "Savant", dates: "1643 à 1727" }
            ],
            guerres: [{ nom: "Guerre civile anglaise", annee: 1642, contre: "Royalistes", issue: "République de Cromwell" }],
            events: [
              { year: 1534, label: "Schisme anglican", importance: "haute", info: "Henri VIII rompt avec Rome." },
              { year: 1688, label: "Glorieuse Révolution", importance: "haute", info: "Monarchie parlementaire." }
            ],
            relations: [{ type: "conflit", with: "espagne", label: "Guerre anglo-espagnole", start: 1585, end: 1604 }],
            liens: [{ label: "Wikipédia — Royaume-Uni", url: "https://fr.wikipedia.org/wiki/Royaume_de_Grande-Bretagne" }]
          },
          {
            id: "provinces-unies",
            label: "Provinces-Unies (Pays-Bas du Siècle d'or)",
            period: "1581 à 1789",
            start: 1581,
            end: 1789,
            color: "#ff9800", // Orange Nassau pour cette lignée néerlandaise
            isRiver: false,
            capitale: "Amsterdam / La Haye",
            description: "République marchande et maritime révolutionnaire, berceau du capitalisme financier moderne, dont le Siècle d'or a dominé le commerce mondial, la science et l'art européen au XVIIe siècle.",
            regimes: [
              { type: "République des Sept Provinces-Unies (Régime oligarchique et stathoudérat)", start: 1581, end: 1789, chef: "Guillaume Ier d'Orange, Johan de Witt, Guillaume III" }
            ],
            technologies: [
              "Création de la Bourse d'Amsterdam et de la Banque de change (Wisselbank)",
              "La Flûte hollandaise (navire marchand à forte capacité de chargement et coût de construction minimal)",
              "Cartographie maritime de haute précision (atlasses monumentaux de l'atelier Blaeu)",
              "Inventions optiques majeures : le microscope (Van Leeuwenhoek) et le télescope à lentilles (Huygens)"
            ],
            croyances: [
              "Calvinisme (courant réformé, pilier idéologique et religieux de l'État)",
              "Politique pragmatique de tolérance religieuse relative, favorisant l'accueil des Juifs séfarades et des Huguenots français"
            ],
            personnages: [
              { nom: "Baruch Spinoza", role: "Philosophe rationaliste et excommunié majeur du Siècle d'or", dates: "1632 à 1677" },
              { nom: "Rembrandt van Rijn", role: "Peintre et graveur virtuose, maître absolu du clair-obscur", dates: "1606 à 1669" }
            ],
            guerres: [
              { nom: "Guerre de Quatre-Vingts Ans", annee: 1568, contre: "Empire espagnol", issue: "Victoire hollandaise éclatante, indépendance totale reconnue par l'Espagne" }
            ],
            events: [
              { year: 1602, label: "Fondation de la VOC", importance: "haute", info: "Création de la Compagnie néerlandaise des Indes orientales, première multinationale à capital par actions." },
              { year: 1672, label: "L'Année du Désastre (Rampjaar)", importance: "haute", info: "Invasion conjointe des Provinces-Unies par la France et l'Angleterre, entraînant le lynchage de Johan de Witt." }
            ],
            relations: [
              { type: "conflit", with: "espagne", label: "Guerre de Quatre-Vingts Ans pour l'indépendance politique et religieuse", start: 1581, end: 1648 },
              { type: "conflit", with: "france-mod", label: "Guerre de Hollande face aux ambitions territoriales de Louis XIV", start: 1672, end: 1678 }
            ],
            liens: [
              { label: "Wikipédia — Provinces-Unies", url: "https://fr.wikipedia.org/wiki/Provinces-Unies" }
            ]
          },
          {
            id: "suede-empire",
            label: "Empire suédois (Stormaktstiden)",
            period: "1561 à 1721",
            start: 1561,
            end: 1721,
            color: "#1976d2", // Bleu azur royal suédois pour la continuité de l'Europe du Nord
            isRiver: false,
            capitale: "Stockholm",
            description: "Période de grandeur militaire exceptionnelle où le Royaume de Suède s'est emparé de l'hégémonie totale sur la mer Baltique et s'est érigé en champion de la cause protestante pendant la guerre de Trente Ans.",
            regimes: [
              { type: "Monarchie impériale absolue ou constitutionnelle", start: 1561, end: 1721, chef: "Gustave II Adolphe, Reine Christine, Charles XII" }
            ],
            technologies: [
              "Système militaire révolutionnaire de conscription nationale (Indelningsverket) et tactiques offensives de choc",
              "Développement massif des hauts fourneaux et exportations de fer et de cuivre d'élite pour l'armement européen",
              "Réforme et centralisation bureaucratique moderne de l'État sous l'égide d'Axel Oxenstierna"
            ],
            croyances: [
              "Luthéranisme strict et intransigeant (religion d'État obligatoire, ciment de la cohésion nationale)"
            ],
            personnages: [
              { nom: "Gustave II Adolphe", role: "Roi stratège, surnommé le Lion du Nord, considéré comme le père de la guerre moderne", dates: "1594 à 1632" },
              { nom: "Reine Christine de Suède", role: "Souveraine hautement cultivée, protectrice des arts et philosophes, abdique pour se convertir au catholicisme", dates: "1626 à 1689" }
            ],
            guerres: [
              { nom: "Guerre de Trente Ans", annee: 1618, contre: "Saint-Empire / Habsbourg", issue: "Victoire suédoise et alliée, gains territoriaux stratégiques majeurs en Allemagne" },
              { nom: "Grande guerre du Nord", annee: 1700, contre: "Coalition (Russie, Danemark, Pologne)", issue: "Défaite suédoise finale, effondrement de l'empire au profit de la Russie" }
            ],
            events: [
              { year: 1631, label: "Bataille de Breitenfeld", importance: "haute", info: "L'armée suédoise écrase les forces catholiques impériales, bouleversant le cours de la guerre de Trente Ans." },
              { year: 1709, label: "Bataille de Poltava", importance: "haute", info: "Le désastre militaire face aux troupes de Pierre le Grand en Ukraine brise l'hégémonie suédoise." }
            ],
            relations: [
              { type: "alliance", with: "france-mod", label: "Alliance stratégique et subventions financières françaises contre les Habsbourg", start: 1631, end: 1648 }
            ],
            liens: [
              { label: "Wikipédia — Empire suédois", url: "https://fr.wikipedia.org/wiki/Empire_su%C3%A9dois" }
            ]
          },
          {
            id: "prusse",
            label: "Royaume de Prusse",
            period: "1701 à 1789",
            start: 1701,
            end: 1789,
            color: "#263238", // Noir/Gris anthracite pour la rigueur de la lignée prussienne
            isRiver: false,
            capitale: "Berlin / Königsberg",
            description: "Émergence spectaculaire d'une grande puissance militaire, bureaucratique et administrative hautement centralisée en Europe centrale, célèbre pour sa discipline de fer et l'avènement de l'absolutisme éclairé.",
            regimes: [
              { type: "Royaume de Prusse (Absolutisme éclairé)", start: 1701, end: 1789, chef: "Frédéric Ier, Frédéric-Guillaume Ier, Frédéric II le Grand" }
            ],
            technologies: [
              "Le Système cantonal de conscription militaire (Kantonssystem)",
              "Discipline militaire d'élite et tactiques d'infanterie de ligne ultra-rapides",
              "Réforme et instauration de l'enseignement primaire obligatoire (Generallandschulreglement)",
              "Développement de manufactures d'État (textile, métallurgie et armement à Potsdam)"
            ],
            croyances: [
              "Protestantisme (luthérien et calviniste)",
              "Politique pragmatique de liberté religieuse et d'accueil des minorités (Huguenots français, Jésuites)"
            ],
            personnages: [
              { nom: "Frédéric II le Grand", role: "Roi-philosophe, stratège hors pair et protecteur des Lumières", dates: "1712 à 1786" },
              { nom: "Frédéric-Guillaume Ier", role: "Le 'Roi-Sergent', artisan de la militarisation et de la santé financière de l'État", dates: "1688 à 1740" }
            ],
            guerres: [
              { nom: "Guerre de Sept Ans", annee: 1562, contre: "Coalition (Autriche, France, Russie)", issue: "Victoire prussienne, maintien du contrôle de la Silésie et statut de grande puissance" }
            ],
            events: [
              { year: 1701, label: "Proclamation du Royaume", importance: "haute", info: "L'électeur de Brandebourg se sacre lui-même 'Roi en Prusse' à Königsberg avec l'accord de l'Empereur." },
              { year: 1740, label: "Invasion de la Silésie", importance: "haute", info: "Frédéric II s'empare de la riche province autrichienne sans déclaration de guerre." }
            ],
            relations: [
              { type: "conflit", with: "france-mod", label: "Guerre de Sept Ans et retournement des alliances", start: 1756, end: 1763 }
            ],
            liens: [
              { label: "Wikipédia — Royaume de Prusse", url: "https://fr.wikipedia.org/wiki/Royaume_de_Prusse" }
            ]
          },
          {
            id: "pologne-lituanie",
            label: "République des Deux Nations (Pologne-Lituanie)",
            period: "1569 à 1789",
            start: 1569,
            end: 1789,
            color: "#880e4f", // Pourpre/Amarante, couleur royale de la noblesse polonaise
            isRiver: false,
            capitale: "Cracovie puis Varsovie",
            description: "Immense fédération d'Europe de l'Est unissant le Royaume de Pologne et le Grand-duché de Lituanie, caractérisée par une 'démocratie nobiliaire' unique et une tolérance religieuse d'envergure à l'âge baroque.",
            regimes: [
              { type: "Monarchie élective (Démocratie nobiliaire ou Liberté dorée)", start: 1569, end: 1789, chef: "Sigismond III Vasa, Jean III Sobieski" }
            ],
            technologies: [
              "Tactique de choc de la cavalerie lourde d'élite des Hussards ailés (Husaria)",
              "Législation de tolérance religieuse constitutionnelle (Confédération de Varsovie)",
              "Artillerie à fusées et traités de balistique avancés (Kazimierz Siemienowicz)",
              "Artisanat et culture visuelle unique du 'Sarmatisme' nobiliaire"
            ],
            croyances: [
              "Catholicisme romain (religion majoritaire des élites)",
              "Christianisme orthodoxe, Protestantisme et Judaïsme (paix religieuse constitutionnelle)"
            ],
            personnages: [
              { nom: "Jean III Sobieski", role: "Roi de Pologne et brillant commandant militaire, sauveur de Vienne face aux Turcs", dates: "1629 à 1696" }
            ],
            guerres: [
              { nom: "Bataille de Vienne", annee: 1683, contre: "Empire ottoman", issue: "Victoire coalisée chrétienne décisive menée par les troupes polonaises" }
            ],
            events: [
              { year: 1569, label: "Union de Lublin", importance: "haute", info: "Fusion politique définitive de la Pologne et de la Lituanie en un seul État doté d'un roi et d'un Parlement uniques." },
              { year: 1683, label: "Secours de Vienne", importance: "haute", info: "Sobieski mène la plus grande charge de cavalerie de l'histoire pour briser le siège ottoman de la ville." }
            ],
            relations: [
              { type: "conflit", with: "ottomans", label: "Guerres polono-ottomanes récurrentes pour le contrôle de la Moldavie et de l'Ukraine", start: 1620, end: 1699 }
            ],
            liens: [
              { label: "Wikipédia — République des Deux Nations", url: "https://fr.wikipedia.org/wiki/R%C3%A9publique_des_Deux_Nations" }
            ]
          }
        ]
      },
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "songhai-mod",
            label: "Empire Songhaï (Période moderne)",
            period: "1492 à 1591",
            start: 1492,
            end: 1591,
            color: "#b83b1d",
            isRiver: true,
            capitale: "Gao",
            description: "L'apogée de la superpuissance ouest-africaine sous la dynastie des Askia, devenue un pôle culturel, économique et islamique majeur avant son effondrement brutal face aux armes à feu marocaines.",
            regimes: [
              { type: "Dynastie des Askia", start: 1493, end: 1591, chef: "Askia Mohammed Ier, Askia Daoud" }
            ],
            technologies: [
              "Standardisation des poids et mesures pour le commerce transsaharien",
              "Mise en place d'un code de commerce et d'inspecteurs des marchés",
              "Système d'irrigation et de canaux le long du fleuve Niger",
              "Financement étatique des universités et des corporations de lettrés"
            ],
            croyances: [
              "Islam sunnite (religion d'État, socle juridique et diplomatique)",
              "Religions traditionnelles songhaïes préservées dans les milieux ruraux"
            ],
            personnages: [
              { nom: "Askia Mohammed Ier (Le Grand)", role: "Empereur réformateur, pèlerin et mécène", dates: "Règne de 1493 à 1528" }
            ],
            guerres: [
              { nom: "Bataille de Tondibi", annee: 1591, contre: "Sultanat Saadien du Maroc", issue: "Défaite songhaïe décisive face aux arquebuses, destruction de l'empire" }
            ],
            events: [
              { year: 1493, label: "Avènement de la dynastie Askia", importance: "haute", info: "Askia Mohammed s'empare du pouvoir et réorganise l'administration en provinces centralisées." },
              { year: 1591, label: "Invasion marocaine", importance: "haute", info: "L'armée de mercenaires d'Ioudar Pacha traverse le Sahara et pille la capitale Gao." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Empire songhaï", url: "https://fr.wikipedia.org/wiki/Empire_songha%C3%AF" }
            ]
          },
          {
            id: "ashanti",
            label: "Empire Ashanti (Période moderne)",
            period: "1701 à 1789",
            start: 1701,
            end: 1789,
            color: "#dfb134",
            isRiver: false,
            capitale: "Kumasi",
            description: "Puissante confédération militaire et commerciale unifiée autour du Trône d'Or sacré, dominant l'économie de la côte de l'Or grâce à l'exploitation minière et au commerce transatlantique.",
            regimes: [
              { type: "Confédération impériale ashanti", start: 1701, end: 1789, chef: "Osei Tutu Ier, Opoku Ware Ier" }
            ],
            technologies: [
              "Métallurgie de précision de l'or (artisanat à la cire perdue)",
              "Système de poids akans pour la pesée monétaire de la poudre d'or",
              "Organisation militaire avancée (formations tactiques en ailes et arrière-garde)",
              "Réseau de messagers étatiques et diplomatie centralisée"
            ],
            croyances: [
              "Religion traditionnelle ashanti (culte du dieu Nyame et sacralité absolue du Sika Dwa, le Trône d'Or)"
            ],
            personnages: [
              { nom: "Osei Kofi Tutu Ier", role: "Premier Asantehene (empereur) et unificateur des clans", dates: "≈ 1660 à 1717" },
              { nom: "Okomfo Anokye", role: "Grand prêtre mystique et cofondateur politique de l'empire", dates: "≈ 1655 à 1717" }
            ],
            guerres: [
              { nom: "Bataille de Feyiase", annee: 1701, contre: "Royaume de Denkyira", issue: "Victoire ashanti totale, proclamation de l'indépendance et fondation de l'empire" }
            ],
            events: [
              { year: 1701, label: "Apparition du Trône d'Or", importance: "haute", info: "Selon la tradition, le trône descend du ciel et se pose sur les genoux d'Osei Tutu, scellant l'union nationale." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Empire ashanti", url: "https://fr.wikipedia.org/wiki/Empire_ashanti" }
            ]
          },
          {
            id: "kongo-mod",
            label: "Royaume du Kongo (Période moderne)",
            period: "1492 à 1789",
            start: 1492,
            end: 1789,
            color: "#2e7d32", // Même couleur que le bloc médiéval pour garantir la continuité visuelle
            isRiver: true,
            capitale: "Mbanza Kongo (San Salvador)",
            description: "Mutation du royaume en un État chrétien syncrétique. Carrefour diplomatique et économique majeur, il traverse des crises profondes liées à la traite atlantique et aux guerres coloniales portugaises.",
            regimes: [
              { type: "Monarchie chrétienne du Kongo", start: 1492, end: 1789, chef: "Afonso Ier, António Ier, Reine Beatriz Kimpa Vita" }
            ],
            technologies: [
              "Diplomatie internationale épistolaire (correspondances directes avec Rome et Lisbonne)",
              "Syncrétisme architectural (cathédrales et églises en pierre de style euro-africain)",
              "Alphabétisation d'une partie de l'élite en langue portugaise et latine"
            ],
            croyances: [
              "Catholicisme d'État (mêlé aux structures spirituelles traditionnelles kikongo)",
              "Mouvement antonianiste (révolution religieuse et prophétique menée par Kimpa Vita)"
            ],
            personnages: [
              { nom: "Afonso Ier (Nzinga Mvemba)", role: "Roi modernisateur, il tente de réguler le commerce et d'instruire son peuple", dates: "Règne de 1509 à 1542" },
              { nom: "Kimpa Vita (Dona Beatriz)", role: "Prophétesse et figure de résistance, elle tente de réunifier le royaume divisé", dates: "1684 à 1706" }
            ],
            guerres: [
              { nom: "Bataille d'Ambuila", annee: 1665, contre: "Royaume du Portugal", issue: "Défaite du Kongo, mort du Manikongo et éclatement du pouvoir central en guerres civiles" }
            ],
            events: [
              { year: 1513, label: "Ambassade à Rome", importance: "moyenne", info: "Le fils du Manikongo est élevé au rang d'évêque par le Pape, une première pour l'Afrique subsaharienne." },
              { year: 1665, label: "Bataille d'Ambuila", importance: "haute", info: "Le décapitation du roi António Ier plonge le Kongo dans une anarchie féodale de plusieurs décennies." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Royaume du Kongo", url: "https://fr.wikipedia.org/wiki/Royaume_du_Kongo" }
            ]
          },
          {
            id: "oyo",
            label: "Empire d'Oyo",
            period: "1492 à 1789",
            start: 1492,
            end: 1789,
            color: "#9e9d24", // Vert olive/doré pour la lignée impériale Yoruba
            isRiver: false,
            capitale: "Oyo-Ile",
            description: "Le plus vaste et le plus puissant des États yorubas, structuré par une armée invincible et une constitution oligarchique remarquable qui limitait le pouvoir absolu du souverain.",
            regimes: [
              { type: "Empire constitutionnel d'Oyo", start: 1492, end: 1789, chef: "Alaafin Orompoto, Alaafin Abiodun" }
            ],
            technologies: [
              "Introduction et élevage de la cavalerie lourde en zone forestière",
              "Système politique de contre-pouvoirs (le conseil des Oyo Mesi et la société secrète Ogboni)",
              "Administration fiscale décentralisée via des gouverneurs impériaux (Ajélé)",
              "Artisanat de cour haut de gamme (sculpture sur bois, perles, tissage Aso Oke)"
            ],
            croyances: [
              "Religion traditionnelle Yoruba (culte des Orishas, importance majeure de Shango, dieu du tonnerre et ancêtre des rois d'Oyo)"
            ],
            personnages: [
              { nom: "Alaafin Orompoto", role: "Souveraine/Souverain qui a introduit la cavalerie dans l'armée d'Oyo", dates: "Règne vers 1560" },
              { nom: "Bashorun Gaa", role: "Premier ministre et chef militaire tout-puissant ayant orchestré des régicides", dates: "Mort en 1774" }
            ],
            guerres: [
              { nom: "Invasions du Dahomey", annee: 1726, contre: "Royaume du Dahomey", issue: "Victoire d'Oyo, le Dahomey devient un État tributaire d'Oyo" }
            ],
            events: [
              { year: 1550, label: "Création de la cavalerie impériale", importance: "haute", info: "Oyo achète des chevaux au Nord et devient la seule puissance de cavalerie de la région." },
              { year: 1748, label: "Soumission totale du Dahomey", importance: "moyenne", info: "Le Dahomey accepte de payer un lourd tribut annuel à l'Alaafin d'Oyo." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Empire d'Oyo", url: "https://fr.wikipedia.org/wiki/Empire_d%27Oyo" }
            ]
          }
        ]
      },
      {
        id: "asie", label: "Asie",
        civilizations: [
          {
            id: "ottomans", label: "Empire ottoman",
            period: "1299 à 1922", start: 1492, end: 1789,
            color: "#27ae60", isRiver: false, capitale: "Constantinople",
            description: "Grande puissance musulmane à cheval sur trois continents.",
            regimes: [{ type: "Sultanat", start: 1492, end: 1789, chef: "Soliman le Magnifique" }],
            technologies: ["Artillerie de siège", "Architecture (Sinan)", "Administration des millets"],
            croyances: ["Islam sunnite", "Tolérance encadrée"],
            personnages: [{ nom: "Soliman le Magnifique", role: "Sultan", dates: "1494 à 1566" }],
            guerres: [{ nom: "Siège de Vienne", annee: 1683, contre: "Autriche", issue: "Défaite, recul" }],
            events: [
              { year: 1529, label: "1er siège de Vienne", importance: "haute", info: "Apogée de l'expansion." },
              { year: 1683, label: "2e siège de Vienne", importance: "haute", info: "Début du déclin." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Empire ottoman", url: "https://fr.wikipedia.org/wiki/Empire_ottoman" }]
          },
          {
            id: "moghols", label: "Empire moghol (Inde)",
            period: "1526 à 1857", start: 1526, end: 1789,
            color: "#16a085", isRiver: true, capitale: "Delhi, Agra",
            description: "Empire musulman de l'Inde, splendeur artistique (Taj Mahal).",
            regimes: [{ type: "Empire", start: 1526, end: 1789, chef: "Akbar, Shah Jahan" }],
            technologies: ["Architecture moghole", "Miniature", "Métallurgie"],
            croyances: ["Islam", "Syncrétisme (Akbar)", "Hindouisme"],
            personnages: [{ nom: "Akbar", role: "Empereur tolérant", dates: "1542 à 1605" }],
            guerres: [],
            events: [
              { year: 1556, label: "Règne d'Akbar", importance: "haute", info: "Apogée et tolérance religieuse." },
              { year: 1653, label: "Taj Mahal", importance: "haute", info: "Achèvement du mausolée." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Empire moghol", url: "https://fr.wikipedia.org/wiki/Empire_moghol" }]
          },
          {
            id: "safavides",
            label: "Empire Safavide",
            period: "1501 à 1736",
            start: 1501,
            end: 1736,
            color: "#9c27b0", // Violet pour assurer la continuité de la lignée de la Perse antique
            isRiver: false,
            capitale: "Tabriz puis Qazvin, enfin Ispahan",
            description: "Puissant empire perse moderne marquant la renaissance politique, artistique et philosophique de l'Iran, instaurant le chiisme comme religion d'État et s'érigeant en rival hégémonique des Ottomans.",
            regimes: [
              { type: "Monarchie impériale safavide (Théocratie chiite)", start: 1501, end: 1736, chef: "Chah Ismaïl Ier, Chah Abbas Ier" }
            ],
            technologies: [
              "Urbanisme monumental d'Ispahan (création de la place Naqsh-e Jahan et de la Mosquée du Chah)",
              "Artisanat d'élite mondialisé des tapis persans et des miniatures de l'école d'Ispahan",
              "Militarisation moderne via le corps d'élite des Gholams (soldats armés de mousquets)",
              "Ingénierie de ponts monumentaux complexes à vannes de régulation hydraulique (pont Khaju)"
            ],
            croyances: [
              "Islam chiite duodécimain (imposé comme religion officielle et ciment d'identité de l'État)"
            ],
            personnages: [
              { nom: "Chah Abbas Ier le Grand", role: "Le plus grand souverain safavide, réformateur militaire, diplomate et bâtisseur de la capitale Ispahan", dates: "1571 à 1629" }
            ],
            guerres: [
              { nom: "Guerres ottomano-safavides", annee: 1603, contre: "Empire ottoman", issue: "Victoires de Chah Abbas, reconquête de Tabriz, de Bagdad et du Caucase" }
            ],
            events: [
              { year: 1501, label: "Couronnement d'Ismaïl Ier", importance: "haute", info: "Ismaïl prend Tabriz, se proclame Chah de Perse et fonde la dynastie." },
              { year: 1598, label: "Ispahan capitale", importance: "haute", info: "Chah Abbas déplace le centre du pouvoir et lance de gigantesques travaux d'urbanisme." }
            ],
            relations: [
              { type: "conflit", with: "ottomans", label: "Rivalités territoriales, religieuses et militaires séculaires", start: 1514, end: 1736 }
            ],
            liens: [
              { label: "Wikipédia — Safavides", url: "https://fr.wikipedia.org/wiki/Safavides" }
            ]
          },
          {
            id: "joseon",
            label: "Dynastie Joseon (Corée moderne)",
            period: "1492 à 1789",
            start: 1492,
            end: 1789,
            color: "#bf360c", // Continuité parfaite avec le rouge brique de la lignée de la péninsule coréenne
            isRiver: false,
            capitale: "Hanseong (Séoul)",
            description: "La plus longue dynastie confucéenne de Corée, caractérisée par une immense floraison culturelle, l'invention de l'alphabet national et une fermeture pragmatique au monde extérieur après avoir repoussé les vagues d'invasions japonaises.",
            regimes: [
              { type: "Royaume centralisé de Joseon", start: 1492, end: 1789, chef: "Roi Seonjo, Roi Sukjong, Roi Jeongjo" }
            ],
            technologies: [
              "Le Hangeul (alphabet phonétique coréen créé scientifiquement pour alphabétiser le peuple sous Sejong)",
              "Les Geobukseon (navires-tortues cuirassés à propulsion mixte, blindés de pointes de fer et armés de canons)",
              "Développement de l'artillerie défensive de type Hwacha (lanceur de flèches enflammées multiples)",
              "Avancées en agronomie et réseaux de pluviomètres standardisés d'État (Cheugugi)"
            ],
            croyances: [
              "Néo-confucianisme (érigé en philosophie morale, politique et sociale absolue de l'État)",
              "Chamanisme coréen traditionnel et bouddhisme (relégués en dehors de la cour officielle)"
            ],
            personnages: [
              { nom: "Amiral Yi Sun-sin", role: "Héros national coréen, génie naval ayant sauvé le royaume face aux invasions japonaises", dates: "1545 à 1598" }
            ],
            guerres: [
              { nom: "Guerre d'Imjin", annee: 1592, contre: "Japon (forces de Toyotomi Hideyoshi)", issue: "Victoire défensive sino-coréenne, expulsion complète des armées d'invasion" }
            ],
            events: [
              { year: 1592, label: "Invasions japonaises", importance: "haute", info: "Le Japon débarque en Corée ; l'amiral Yi Sun-sin brise magistralement leurs lignes de ravitaillement maritime." },
              { year: 1776, label: "Règne de Jeongjo", importance: "moyenne", info: "Âge d'or culturel tardif, construction de la forteresse de Hwaseong et réformes sociales de modernisation." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Période Joseon", url: "https://fr.wikipedia.org/wiki/P%C3%A9riode_Joseon" }
            ]
          },
          {
            id: "safavides",
            label: "Empire Safavide",
            period: "1501 à 1736",
            start: 1501,
            end: 1736,
            color: "#9c27b0", // Violet pour assurer la continuité de la lignée de la Perse antique
            isRiver: false,
            capitale: "Tabriz puis Qazvin, enfin Ispahan",
            description: "Puissant empire perse moderne marquant la renaissance politique, artistique et philosophique de l'Iran, instaurant le chiisme comme religion d'État et s'érigeant en rival hégémonique des Ottomans.",
            regimes: [
              { type: "Monarchie impériale safavide (Théocratie chiite)", start: 1501, end: 1736, chef: "Chah Ismaïl Ier, Chah Abbas Ier" }
            ],
            technologies: [
              "Urbanisme monumental d'Ispahan (création de la place Naqsh-e Jahan et de la Mosquée du Chah)",
              "Artisanat d'élite mondialisé des tapis persans et des miniatures de l'école d'Ispahan",
              "Militarisation moderne via le corps d'élite des Gholams (soldats armés de mousquets)",
              "Ingénierie de ponts monumentaux complexes à vannes de régulation hydraulique (pont Khaju)"
            ],
            croyances: [
              "Islam chiite duodécimain (imposé comme religion officielle et ciment d'identité de l'État)"
            ],
            personnages: [
              { nom: "Chah Abbas Ier le Grand", role: "Le plus grand souverain safavide, réformateur militaire, diplomate et bâtisseur de la capitale Ispahan", dates: "1571 à 1629" }
            ],
            guerres: [
              { nom: "Guerres ottomano-safavides", annee: 1603, contre: "Empire ottoman", issue: "Victoires de Chah Abbas, reconquête de Tabriz, de Bagdad et du Caucase" }
            ],
            events: [
              { year: 1501, label: "Couronnement d'Ismaïl Ier", importance: "haute", info: "Ismaïl prend Tabriz, se proclame Chah de Perse et fonde la dynastie." },
              { year: 1598, label: "Ispahan capitale", importance: "haute", info: "Chah Abbas déplace le centre du pouvoir et lance de gigantesques travaux d'urbanisme." }
            ],
            relations: [
              { type: "conflit", with: "ottomans", label: "Rivalités territoriales, religieuses et militaires séculaires", start: 1514, end: 1736 }
            ],
            liens: [
              { label: "Wikipédia — Safavides", url: "https://fr.wikipedia.org/wiki/Safavides" }
            ]
          },
          {
            id: "joseon",
            label: "Dynastie Joseon (Corée moderne)",
            period: "1492 à 1789",
            start: 1492,
            end: 1789,
            color: "#bf360c", // Continuité parfaite avec le rouge brique de la lignée de la péninsule coréenne
            isRiver: false,
            capitale: "Hanseong (Séoul)",
            description: "La plus longue dynastie confucéenne de Corée, caractérisée par une immense floraison culturelle, l'invention de l'alphabet national et une fermeture pragmatique au monde extérieur après avoir repoussé les vagues d'invasions japonaises.",
            regimes: [
              { type: "Royaume centralisé de Joseon", start: 1492, end: 1789, chef: "Roi Seonjo, Roi Sukjong, Roi Jeongjo" }
            ],
            technologies: [
              "Le Hangeul (alphabet phonétique coréen créé scientifiquement pour alphabétiser le peuple sous Sejong)",
              "Les Geobukseon (navires-tortues cuirassés à propulsion mixte, blindés de pointes de fer et armés de canons)",
              "Développement de l'artillerie défensive de type Hwacha (lanceur de flèches enflammées multiples)",
              "Avancées en agronomie et réseaux de pluviomètres standardisés d'État (Cheugugi)"
            ],
            croyances: [
              "Néo-confucianisme (érigé en philosophie morale, politique et sociale absolue de l'État)",
              "Chamanisme coréen traditionnel et bouddhisme (relégués en dehors de la cour officielle)"
            ],
            personnages: [
              { nom: "Amiral Yi Sun-sin", role: "Héros national coréen, génie naval ayant sauvé le royaume face aux invasions japonaises", dates: "1545 à 1598" }
            ],
            guerres: [
              { nom: "Guerre d'Imjin", annee: 1592, contre: "Japon (forces de Toyotomi Hideyoshi)", issue: "Victoire défensive sino-coréenne, expulsion complète des armées d'invasion" }
            ],
            events: [
              { year: 1592, label: "Invasions japonaises", importance: "haute", info: "Le Japon débarque en Corée ; l'amiral Yi Sun-sin brise magistralement leurs lignes de ravitaillement maritime." },
              { year: 1776, label: "Règne de Jeongjo", importance: "moyenne", info: "Âge d'or culturel tardif, construction de la forteresse de Hwaseong et réformes sociales de modernisation." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Période Joseon", url: "https://fr.wikipedia.org/wiki/P%C3%A9riode_Joseon" }
            ]
          },
          {
            id: "chine-mod",
            label: "Chine (Ming & Qing)",
            period: "1492 à 1789",
            start: 1492,
            end: 1789,
            color: "#e67e22", // Orange impérial identique aux blocs antique et contemporain
            isRiver: true,
            capitale: "Pékin (Beijing)",
            description: "Période de reconstruction et de stabilisation monumentale sous les Ming, suivie par l'immense expansion territoriale de la dynastie mandchoue des Qing, érigeant la Chine en premier géant économique et démographique mondial au XVIIIe siècle.",
            regimes: [
              { type: "Dynastie Ming (Monarchie impériale absolue)", start: 1492, end: 1644, chef: "Empereur Yongle, Empereur Wanli" },
              { type: "Dynastie Qing (Empire mandchou)", start: 1644, end: 1789, chef: "Empereur Kangxi, Empereur Qianlong" }
            ],
            technologies: [
              "Urbanisme impérial de très grande envergure (construction de la Cité Interdite et reconstruction de la Grande Muraille en pierre)",
              "Production de masse de la porcelaine Ming 'Bleu et Blanc' pour l'exportation mondiale",
              "Flotte d'exploration et de commerce géante (expéditions de l'amiral Zheng He)",
              "Compilation d'encyclopédies monumentales d'État (Encyclopédie de Yongle et Siku Quanshu)"
            ],
            croyances: [
              "Néo-confucianisme (idéologie orthodoxe d'État régissant les examens impériaux)",
              "Bouddhisme mahayana et Taoïsme",
              "Introduction encadrée du catholicisme scientifique (missions jésuites de Matteo Ricci)"
            ],
            personnages: [
              { nom: "Empereur Kangxi", role: "L'un des plus longs règnes de l'histoire chinoise, stabilisateur de l'empire et protecteur des sciences", dates: "1654 à 1722" },
              { nom: "Empereur Qianlong", role: "Souverain poète et militaire ayant porté le territoire chinois à son apogée historique", dates: "1711 à 1799" }
            ],
            guerres: [
              { nom: "Transition Ming-Qing", annee: 1618, contre: "Forces Mandchoues (Jurchens)", issue: "Chute de Pékin, effondrement des Ming et avènement de la dynastie Qing" }
            ],
            events: [
              { year: 1420, label: "Inauguration de la Cité Interdite", importance: "haute", info: "Pékin devient le cœur symbolique et géopolitique inexpugnable de l'Empire du Milieu." },
              { year: 1689, label: "Traité de Nertchinsk", importance: "moyenne", info: "Premier traité signé entre la Chine et l'Empire russe, fixant la frontière sibérienne." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Dynastie Ming", url: "https://fr.wikipedia.org/wiki/Dynastie_Ming" },
              { label: "Wikipédia — Dynastie Qing", url: "https://fr.wikipedia.org/wiki/Dynastie_Qing" }
            ]
          },
          {
            id: "japon-mod",
            label: "Japon (Époque d'Edo - Tokugawa)",
            period: "1603 à 1789",
            start: 1603,
            end: 1789,
            color: "#c0392b", // Rouge martial pour la continuité de la lignée japonaise
            isRiver: false,
            capitale: "Edo (Tokyo)",
            description: "Période d'unification totale et de paix intérieure durable sous la dictature militaire centralisée des shoguns Tokugawa, caractérisée par la politique d'isolement national (Sakoku) et un splendide essor culturel urbain.",
            regimes: [
              { type: "Shogunat Tokugawa (Gouvernement militaire féodal ou Bakufu)", start: 1603, end: 1789, chef: "Tokugawa Ieyasu, Tokugawa Tsunayoshi" }
            ],
            technologies: [
              "Urbanisme de la métropole d'Edo (devenue l'une des villes les plus peuplées et saines du monde au XVIIe s.)",
              "Réseau routier national ultra-régulé des Cinq Routes (Gokaidō)",
              "Artisanat d'élite de l'estampe japonaise sur bois (Ukiyo-e) et des laques précieux",
              "Développement d'une agriculture de précision (riziculture intensive) sans traction animale lourde"
            ],
            croyances: [
              "Néo-confucianisme d'Edo (socle moral de la stratification sociale en 4 classes)",
              "Shintoïsme et Bouddhisme Zen",
              "Interdiction stricte et éradication clandestine du christianisme (Persécution des Kirishitan)"
            ],
            personnages: [
              { nom: "Tokugawa Ieyasu", role: "Le grand unificateur final du Japon, vainqueur de Sekigahara et fondateur du shogunat héréditaire", dates: "1543 à 1616" }
            ],
            guerres: [
              { nom: "Bataille de Sekigahara", annee: 1600, contre: "Coalition des daimyos de l'Ouest", issue: "Victoire décisive de Tokugawa Ieyasu, ouvrant l'ère de paix d'Edo" }
            ],
            events: [
              { year: 1603, label: "Proclamation du Shogunat", importance: "haute", info: "L'empereur décerne le titre de Shogun à Ieyasu, officialisant le déplacement du pouvoir réel à Edo." },
              { year: 1635, label: "Décrets de fermeture (Sakoku)", importance: "haute", info: "Le Shogunat interdit aux Japonais de quitter l'archipel et expulse les Européens pour préserver la paix." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Époque d'Edo", url: "https://fr.wikipedia.org/wiki/%C3%89poque_d%27Edo" }
            ]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "azteque", label: "Empire aztèque",
            period: "1428 à 1521", start: 1492, end: 1521,
            color: "#e74c3c", isRiver: false, capitale: "Tenochtitlan",
            description: "Puissance mésoaméricaine, détruite par la conquête espagnole.",
            regimes: [{ type: "Empire (Triple Alliance)", start: 1492, end: 1521, chef: "Moctezuma II" }],
            technologies: ["Chinampas (agriculture)", "Calendrier", "Urbanisme lacustre"],
            croyances: ["Polythéisme", "Sacrifices humains", "Huitzilopochtli"],
            personnages: [{ nom: "Moctezuma II", role: "Dernier empereur", dates: "1466 à 1520" }],
            guerres: [{ nom: "Conquête espagnole", annee: 1519, contre: "Espagne", issue: "Destruction" }],
            events: [
              { year: 1519, label: "Arrivée de Cortés", importance: "haute", info: "Début de la conquête." },
              { year: 1521, label: "Chute de Tenochtitlan", importance: "haute", info: "Fin de l'empire." }
            ],
            relations: [{ type: "conflit", with: "espagne", label: "Conquête espagnole", start: 1519, end: 1521 }],
            liens: [{ label: "Wikipédia — Aztèques", url: "https://fr.wikipedia.org/wiki/Azt%C3%A8ques" }]
          },
          {
            id: "inca", label: "Empire inca",
            period: "1438 à 1533", start: 1492, end: 1533,
            color: "#f39c12", isRiver: false, capitale: "Cuzco",
            description: "Vaste empire andin relié par un réseau de routes exceptionnel.",
            regimes: [{ type: "Empire (Tahuantinsuyu)", start: 1492, end: 1533, chef: "Atahualpa" }],
            technologies: ["Routes incas (Qhapaq Ñan)", "Terrasses agricoles", "Quipu", "Architecture cyclopéenne"],
            croyances: ["Culte du Soleil (Inti)", "Momification des souverains"],
            personnages: [{ nom: "Atahualpa", role: "Dernier empereur", dates: "1502 à 1533" }],
            guerres: [{ nom: "Conquête espagnole", annee: 1532, contre: "Espagne", issue: "Chute de l'empire" }],
            events: [
              { year: 1450, label: "Machu Picchu", importance: "haute", info: "Cité royale dans les Andes." },
              { year: 1533, label: "Exécution d'Atahualpa", importance: "haute", info: "Pizarro s'empare de l'empire." }
            ],
            relations: [{ type: "conflit", with: "espagne", label: "Conquête espagnole", start: 1532, end: 1533 }],
            liens: [{ label: "Wikipédia — Empire inca", url: "https://fr.wikipedia.org/wiki/Empire_inca" }]
          },
          {
            id: "usa",
            label: "États-Unis d'Amérique",
            period: "1776 à 2020",
            start: 1776,
            end: 2020,
            color: "#1a237e", // Bleu marine profond républicain
            isRiver: false,
            capitale: "Philadelphie puis Washington D.C. (depuis 1800)",
            description: "Première république constitutionnelle moderne née de l'insurrection des Treize Colonies britanniques, devenue au cours des XIXe et XXe siècles la première puissance économique, militaire et culturelle globale.",
            regimes: [
              { type: "République constitutionnelle fédérale présidentielle", start: 1776, end: 2020, chef: "George Washington, Abraham Lincoln, Franklin D. Roosevelt" }
            ],
            technologies: [
              "Pionniers de l'industrialisation de masse (lignes d'assemblage, fordisme) et de l'électrification (Edison, Tesla)",
              "Développement de l'aviation (Frères Wright) et direction du projet Manhattan (première arme nucléaire)",
              "Ingénierie spatiale de premier ordre (Programme Apollo, premier pas sur la Lune en 1969)",
              "Révolution numérique mondiale et architecture d'Arpanet/Internet (Silicon Valley)"
            ],
            croyances: [
              "Pluralisme chrétien protestant prédominant",
              "Laïcité institutionnelle et liberté religieuse gravées dans le Premier Amendement de la Constitution",
              "Idéologie nationale du Destin Manifeste et de l'American Way of Life"
            ],
            personnages: [
              { nom: "George Washington", role: "Général en chef de la guerre d'indépendance et premier président de la nation", dates: "1732 à 1799" },
              { nom: "Abraham Lincoln", role: "Président ayant préservé l'Union durant la guerre de Sécession et aboli l'esclavage", dates: "1809 à 1865" },
              { nom: "Franklin D. Roosevelt", role: "Artisan du New Deal et commandant en chef durant la Seconde Guerre mondiale", dates: "1882 à 1945" }
            ],
            guerres: [
              { nom: "Guerre de Sécession", annee: 1861, contre: "États confédérés d'Amérique (Sud)", issue: "Victoire de l'Union (Nord), préservation de l'intégrité nationale et abolition de l'esclavage" },
              { nom: "Guerre froide", annee: 1947, contre: "URSS (Russie contemporaine)", issue: "Victoire idéologique et économique américaine suite à l'effondrement du bloc soviétique" }
            ],
            events: [
              { year: 1776, label: "Déclaration d'indépendance", importance: "haute", info: "Les treize colonies rompent solennellement leurs liens avec la Couronne britannique." },
              { year: 1929, label: "Jeudi Noir et Grande Dépression", importance: "haute", info: "Le krach boursier de Wall Street déclenche une crise économique planétaire sans précédent." },
              { year: 1945, label: "Bombardements d'Hiroshima et Nagasaki", importance: "haute", info: "L'utilisation de l'arme atomique force la capitulation du Japon et ouvre l'ère nucléaire." }
            ],
            relations: [
              { type: "conflit", with: "royaume-uni", label: "Guerre d'indépendance contre la domination coloniale britannique", start: 1775, end: 1783 },
              { type: "alliance", with: "france-contemp", label: "Alliance historique lors de la Révolution américaine puis fraternité d'armes mondiale", start: 1778, end: 2020 }
            ],
            liens: [
              { label: "Wikipédia — Histoire des États-Unis", url: "https://fr.wikipedia.org/wiki/Histoire_des_I%C3%89tats-Unis" }
            ]
          },
          {
            id: "bresil",
            label: "Brésil",
            period: "1822 à 2020",
            start: 1822,
            end: 2020,
            color: "#1b5e20", // Vert amazone/impérial de la lignée brésilienne
            isRiver: true, // Axé sur l'immense bassin du fleuve Amazone
            capitale: "Rio de Janeiro puis Brasília (depuis 1960)",
            description: "Unique monarchie impériale durable d'Amérique latine après son indépendance du Portugal, devenue une république fédérale majeure, s'imposant comme le géant démographique et agricole d'Amérique du Sud.",
            regimes: [
              { type: "Empire du Brésil (Monarchie constitutionnelle)", start: 1822, end: 1889, chef: "Pierre Ier, Pierre II" },
              { type: "Vieille République puis Ère Vargas (Dictature populiste)", start: 1889, end: 1964, chef: "Getúlio Vargas" },
              { type: "Dictature militaire", start: 1964, end: 1985, chef: "Humberto Castello Branco" },
              { type: "Nouvelle République (Démocratie)", start: 1985, end: 2020, chef: "Fernando Henrique Cardoso, Lula da Silva" }
            ],
            technologies: [
              "Pionniers mondiaux de l'aviation civile et de l'ingénierie aéronautique (Alberto Santos-Dumont)",
              "Urbanisme et architecture moderniste monumentale d'avant-garde (plan de Brasília par Niemeyer et Costa)",
              "Ingénierie hydroélectrique géante (Barrage d'Itaïpu, l'un des plus puissants au monde)",
              "Développement technologique de pointe pour l'extraction pétrolière en eaux ultra-profondes (pré-sel)"
            ],
            croyances: [
              "Catholicisme romain (plus grande nation catholique du monde), suivi d'une expansion massive du protestantisme évangélique",
              "Syncrétismes religieux afro-brésiliens d'envergure (Candomblé, Umbanda)"
            ],
            personnages: [
              { nom: "Empereur Pierre II", role: "Souverain intellectuel ayant régné 58 ans, modernisateur de l'État et artisan de l'abolition de l'esclavage", dates: "1825 à 1891" },
              { nom: "Getúlio Vargas", role: "Président et dictateur, père de l'industrialisation moderne et du droit du travail brésilien", dates: "1882 à 1954" }
            ],
            guerres: [
              { nom: "Guerre de la Triple-Alliance", annee: 1864, contre: "Paraguay", issue: "Victoire totale de la coalition coalisée (Brésil, Argentine, Uruguay) au prix de lourdes pertes" }
            ],
            events: [
              { year: 1822, label: "Cri d'Ipiranga et Indépendance", importance: "haute", info: "Le prince héritier Pierre rompt avec Lisbonne et proclame l'indépendance de l'Empire du Brésil." },
              { year: 1888, label: "Loi d'Or (Lei Áurea)", importance: "haute", info: "La princesse Isabelle signe l'abolition totale et sans compensation de l'esclavage au Brésil." },
              { year: 1960, label: "Inauguration de Brasília", importance: "moyenne", info: "La capitale est transférée au cœur géographique du pays pour stimuler le développement de l'intérieur." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Histoire du Brésil", url: "https://fr.wikipedia.org/wiki/Histoire_du_Br%C3%A9sil" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "contemporaine",
    label: "Époque contemporaine",
    start: 1789,
    end: 2020,
    color: "#5ab5d6",
    description: "Révolutions, industrialisation, guerres mondiales, décolonisation et mondialisation jusqu'à 2020.",
    continents: [
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "france-contemp", label: "France",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#3f6fd1", isRiver: false, capitale: "Paris",
            description: "De la Révolution aux Ve République : cinq régimes en deux siècles.",
            regimes: [
              { type: "Révolution & Ire République", start: 1789, end: 1804, chef: "Robespierre" },
              { type: "Empire (Napoléon)", start: 1804, end: 1815, chef: "Napoléon Ier" },
              { type: "Monarchies constitutionnelles", start: 1815, end: 1848, chef: "Louis-Philippe" },
              { type: "IIe/IIIe République", start: 1848, end: 1940, chef: "Gambetta, Clemenceau" },
              { type: "IVe & Ve République", start: 1946, end: 2020, chef: "De Gaulle, Mitterrand" }
            ],
            technologies: ["Machine à vapeur", "Chemin de fer", "Électricité", "Nucléaire civil", "TGV", "Minitel"],
            croyances: ["Laïcité (1905)", "Catholicisme", "Libre-pensée"],
            personnages: [
              { nom: "Napoléon Bonaparte", role: "Empereur", dates: "1769 à 1821" },
              { nom: "Charles de Gaulle", role: "Président", dates: "1890 à 1970" }
            ],
            guerres: [
              { nom: "Guerres napoléoniennes", annee: 1803, contre: "Coalitions", issue: "Défaite à Waterloo" },
              { nom: "Première Guerre mondiale", annee: 1914, contre: "Allemagne", issue: "Victoire (1918)" },
              { nom: "Seconde Guerre mondiale", annee: 1939, contre: "Allemagne nazie", issue: "Libération (1944)" }
            ],
            events: [
              { year: 1789, label: "Prise de la Bastille", importance: "haute", info: "Début de la Révolution." },
              { year: 1804, label: "Sacre de Napoléon", importance: "haute", info: "Naissance de l'Empire." },
              { year: 1958, label: "Ve République", importance: "haute", info: "De Gaulle au pouvoir." }
            ],
            relations: [
              { type: "conflit", with: "allemagne", label: "Guerres mondiales", start: 1914, end: 1945 },
              { type: "alliance", with: "royaume-uni", label: "Entente cordiale / Alliés", start: 1904, end: 2020 }
            ],
            liens: [
              { label: "Wikipédia — Révolution française", url: "https://fr.wikipedia.org/wiki/R%C3%A9volution_fran%C3%A7aise" },
              { label: "Wikipédia — Histoire de France", url: "https://fr.wikipedia.org/wiki/Histoire_de_France" }
            ]
          },
          {
            id: "royaume-uni", label: "Royaume-Uni",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#c0392b", isRiver: false, capitale: "Londres",
            description: "Berceau de la révolution industrielle et plus vaste empire de l'histoire.",
            regimes: [
              { type: "Monarchie parlementaire (ère victorienne)", start: 1789, end: 1901, chef: "Victoria" },
              { type: "Monarchie constitutionnelle moderne", start: 1901, end: 2020, chef: "Churchill, Elizabeth II" }
            ],
            technologies: ["Machine à vapeur (Watt)", "Chemin de fer", "Métallurgie", "Télégraphe", "Radar"],
            croyances: ["Anglicanisme", "Libéralisme"],
            personnages: [
              { nom: "Reine Victoria", role: "Souveraine", dates: "1819 à 1901" },
              { nom: "Winston Churchill", role: "Premier ministre", dates: "1874 à 1965" }
            ],
            guerres: [{ nom: "Guerres mondiales", annee: 1914, contre: "Allemagne", issue: "Victoire des Alliés" }],
            events: [
              { year: 1837, label: "Ère victorienne", importance: "haute", info: "Apogée impériale." },
              { year: 1940, label: "Bataille d'Angleterre", importance: "haute", info: "Résistance au nazisme." }
            ],
            relations: [{ type: "alliance", with: "etats-unis", label: "Alliance atlantique", start: 1941, end: 2020 }],
            liens: [{ label: "Wikipédia — Empire britannique", url: "https://fr.wikipedia.org/wiki/Empire_britannique" }]
          },
          {
            id: "allemagne", label: "Allemagne",
            period: "1871 à 2020", start: 1871, end: 2020,
            color: "#34495e", isRiver: false, capitale: "Berlin",
            description: "Unification, deux guerres mondiales, division puis réunification.",
            regimes: [
              { type: "Empire allemand", start: 1871, end: 1918, chef: "Bismarck, Guillaume II" },
              { type: "République de Weimar", start: 1918, end: 1933, chef: "Ebert" },
              { type: "IIIe Reich", start: 1933, end: 1945, chef: "Hitler" },
              { type: "RFA / RDA puis Allemagne unie", start: 1949, end: 2020, chef: "Adenauer, Merkel" }
            ],
            technologies: ["Chimie industrielle", "Automobile", "Fusée V2", "Ingénierie de précision"],
            croyances: ["Protestantisme", "Catholicisme"],
            personnages: [
              { nom: "Otto von Bismarck", role: "Chancelier de fer", dates: "1815 à 1898" },
              { nom: "Angela Merkel", role: "Chancelière", dates: "1954 à —" }
            ],
            guerres: [
              { nom: "Première Guerre mondiale", annee: 1914, contre: "Alliés", issue: "Défaite" },
              { nom: "Seconde Guerre mondiale", annee: 1939, contre: "Alliés", issue: "Défaite totale (1945)" }
            ],
            events: [
              { year: 1871, label: "Unification allemande", importance: "haute", info: "Proclamation de l'Empire." },
              { year: 1989, label: "Chute du mur de Berlin", importance: "haute", info: "Vers la réunification." }
            ],
            relations: [{ type: "conflit", with: "france-contemp", label: "Guerres mondiales", start: 1914, end: 1945 }],
            liens: [{ label: "Wikipédia — Histoire de l'Allemagne", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Allemagne" }]
          },
          {
            id: "russie", label: "Russie / URSS",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#8e44ad", isRiver: false, capitale: "Saint-Pétersbourg, Moscou",
            description: "De l'empire tsariste à l'URSS puis à la Russie contemporaine.",
            regimes: [
              { type: "Empire tsariste", start: 1789, end: 1917, chef: "Catherine II, Nicolas II" },
              { type: "URSS (communiste)", start: 1922, end: 1991, chef: "Lénine, Staline, Gorbatchev" },
              { type: "Fédération de Russie", start: 1991, end: 2020, chef: "Poutine" }
            ],
            technologies: ["Spoutnik / conquête spatiale", "Armement nucléaire", "Industrie lourde"],
            croyances: ["Orthodoxie", "Athéisme d'État (URSS)"],
            personnages: [
              { nom: "Lénine", role: "Révolutionnaire", dates: "1870 à 1924" },
              { nom: "Iouri Gagarine", role: "Cosmonaute", dates: "1934 à 1968" }
            ],
            guerres: [{ nom: "Guerre froide", annee: 1947, contre: "États-Unis", issue: "Fin en 1991" }],
            events: [
              { year: 1917, label: "Révolution russe", importance: "haute", info: "Chute du tsar, prise bolchevique." },
              { year: 1961, label: "Gagarine dans l'espace", importance: "haute", info: "1er homme en orbite." },
              { year: 1991, label: "Dissolution de l'URSS", importance: "haute", info: "Fin de la guerre froide." }
            ],
            relations: [{ type: "conflit", with: "etats-unis", label: "Guerre froide", start: 1947, end: 1991 }],
            liens: [{ label: "Wikipédia — URSS", url: "https://fr.wikipedia.org/wiki/Union_des_r%C3%A9publiques_socialistes_sovi%C3%A9tiques" }]
          },
          {
            id: "autriche-hongrie",
            label: "Empire d'Autriche / Autriche-Hongrie",
            period: "1804 à 1918",
            start: 1804,
            end: 1918,
            color: "#fbc02d", // Jaune d'or impérial de la maison de Habsbourg
            isRiver: false,
            capitale: "Vienne",
            description: "Vaste empire multinational d'Europe centrale gouverné par la maison de Habsbourg-Lorraine, pivot des équilibres diplomatiques et culturels du XIXe siècle jusqu'à son éclatement au lendemain de la Première Guerre mondiale.",
            regimes: [
              { type: "Empire d'Autriche", start: 1804, end: 1867, chef: "François Ier, François-Joseph Ier" },
              { type: "Empire austro-hongrois (Double Monarchie)", start: 1867, end: 1918, chef: "François-Joseph Ier, Charles Ier" }
            ],
            technologies: [
              "Développement des grands réseaux ferroviaires d'Europe centrale (ligne de Semmering)",
              "Avancées médicales majeures (Seconde école de médecine de Vienne) et naissance de la psychanalyse (Freud)",
              "Urbanisme monumental et architecture historiciste (Ringstraße de Vienne)",
              "Industrie lourde, métallurgie et armement de pointe (complexes industriels Škoda)"
            ],
            croyances: [
              "Catholicisme romain (religion de la dynastie et majorité institutionnelle)",
              "Présence importante de minorités protestantes, orthodoxes, juives et musulmanes (en Bosnie)"
            ],
            personnages: [
              { nom: "François-Joseph Ier", role: "Empereur d'Autriche et roi de Hongrie au règne de 68 ans, symbole de la cohésion de l'empire", dates: "1830 à 1916" },
              { nom: "Impératrice Élisabeth (Sissi)", role: "Impératrice d'Autriche, célèbre pour son soutien à la cause hongroise et son influence culturelle", dates: "1837 à 1898" }
            ],
            guerres: [
              { nom: "Première Guerre mondiale", annee: 1914, contre: "Alliés (France, Royaume-Uni, Russie, États-Unis)", issue: "Défaite totale, abdication de l'empereur et démantèlement complet de l'État" }
            ],
            events: [
              { year: 1867, label: "Compromis austro-hongrois", importance: "haute", info: "Restauration de la souveraineté de la Hongrie, scellant la création de la double monarchie." },
              { year: 1914, label: "Attentat de Sarajevo", importance: "haute", info: "L'assassinat de l'archiduc héritier François-Ferdinand déclenche l'engrenage de la Grande Guerre." }
            ],
            relations: [
              { type: "conflit", with: "allemagne", label: "Guerre austro-prussienne pour l'hégémonie au sein de l'espace germanique", start: 1866, end: 1866 },
              { type: "conflit", with: "france-contemp", label: "Guerres napoléoniennes et campagnes d'Italie face aux troupes françaises", start: 1805, end: 1859 }
            ],
            liens: [
              { label: "Wikipédia — Autriche-Hongrie", url: "https://fr.wikipedia.org/wiki/Autriche-Hongrie" }
            ]
          },
          {
            id: "italie-contemp",
            label: "Italie",
            period: "1861 à 2020",
            start: 1861,
            end: 2020,
            color: "#4caf50", // Vert du drapeau national pour la lignée italienne moderne
            isRiver: false,
            capitale: "Turin puis Florence, enfin Rome (depuis 1871)",
            description: "De l'unification nationale (Risorgimento) au XIXe siècle à l'émergence de la dictature fasciste, puis à la reconstruction démocratique d'après-guerre et à la cofondation de l'Union européenne.",
            regimes: [
              { type: "Royaume d'Italie (Monarchie constitutionnelle)", start: 1861, end: 1922, chef: "Victor-Emmanuel II, Humbert Ier" },
              { type: "Régime fasciste (Dictature)", start: 1922, end: 1943, chef: "Benito Mussolini, Victor-Emmanuel III" },
              { type: "République italienne", start: 1946, end: 2020, chef: "Alcide De Gasperi, Giulio Andreotti" }
            ],
            technologies: [
              "Invention et développement de la radio et de la télégraphie sans fil (Marconi)",
              "Industrialisation rapide du triangle Nord (essor des firmes FIAT, Olivetti et du design)",
              "Infrastructures de transport pionnières (premières autoroutes d'Europe au monde)",
              "Avancées en physique nucléaire (Enrico Fermi et l'équipe de la via Panisperna)"
            ],
            croyances: [
              "Catholicisme romain (religion d'État puis historique, officialisation du statut du Vatican par les Accords du Latran en 1929)"
            ],
            personnages: [
              { nom: "Giuseppe Garibaldi", role: "Général et homme politique, figure de proue militaire de l'unification italienne", dates: "1807 à 1882" },
              { nom: "Benito Mussolini", role: "Fondateur du fascisme et dictateur, il entraîne le pays dans l'alliance avec le IIIe Reich", dates: "1883 à 1945" }
            ],
            guerres: [
              { nom: "Seconde Guerre mondiale", annee: 1940, contre: "Alliés", issue: "Effondrement du régime, armistice en 1943 et basculement dans une guerre de libération contre l'occupation nazie" }
            ],
            events: [
              { year: 1861, label: "Proclamation du Royaume d'Italie", importance: "haute", info: "Le premier Parlement national réuni à Turin proclame la naissance de l'Italie unifiée." },
              { year: 1922, label: "Marche sur Rome", importance: "haute", info: "Les chemises noires forcent le roi à nommer Mussolini à la tête du gouvernement." },
              { year: 1957, label: "Traités de Rome", importance: "haute", info: "Signature de l'acte fondateur de la Communauté économique européenne (CEE) au Capitole." }
            ],
            relations: [
              { type: "conflit", with: "allemagne", label: "Affrontements et résistance contre les troupes du IIIe Reich après la rupture de l'Axe", start: 1943, end: 1945 },
              { type: "alliance", with: "france-contemp", label: "Coopération militaire pour l'unification puis cofondation de la construction européenne", start: 1859, end: 2020 }
            ],
            liens: [
              { label: "Wikipédia — Histoire de l'Italie", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Italie" }
            ]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "etats-unis", label: "États-Unis",
            period: "1776 à 2020", start: 1789, end: 2020,
            color: "#2980b9", isRiver: false, capitale: "Washington D.C.",
            description: "De la jeune république à la première puissance mondiale.",
            regimes: [
              { type: "Jeune République", start: 1789, end: 1865, chef: "Washington, Lincoln" },
              { type: "Puissance industrielle", start: 1865, end: 1945, chef: "Roosevelt" },
              { type: "Superpuissance mondiale", start: 1945, end: 2020, chef: "Kennedy, Reagan, Obama" }
            ],
            technologies: ["Ampoule (Edison)", "Aviation (Wright)", "Bombe atomique", "Internet", "Programme Apollo"],
            croyances: ["Protestantisme", "Liberté de culte", "Melting-pot"],
            personnages: [
              { nom: "Abraham Lincoln", role: "Président abolitionniste", dates: "1809 à 1865" },
              { nom: "Martin Luther King", role: "Militant des droits civiques", dates: "1929 à 1968" }
            ],
            guerres: [
              { nom: "Guerre de Sécession", annee: 1861, contre: "États confédérés", issue: "Abolition de l'esclavage" },
              { nom: "Seconde Guerre mondiale", annee: 1941, contre: "Axe", issue: "Victoire alliée" }
            ],
            events: [
              { year: 1863, label: "Abolition de l'esclavage", importance: "haute", info: "Proclamation d'émancipation." },
              { year: 1969, label: "Premier homme sur la Lune", importance: "haute", info: "Apollo 11." }
            ],
            relations: [
              { type: "conflit", with: "russie", label: "Guerre froide", start: 1947, end: 1991 },
              { type: "alliance", with: "royaume-uni", label: "Alliance atlantique", start: 1941, end: 2020 }
            ],
            liens: [{ label: "Wikipédia — Histoire des États-Unis", url: "https://fr.wikipedia.org/wiki/Histoire_des_%C3%89tats-Unis" }]
          }
        ]
      },
      {
        id: "asie", label: "Asie",
        civilizations: [
          {
            id: "chine-contemp", label: "Chine",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#e67e22", isRiver: true, capitale: "Pékin",
            description: "De l'empire Qing déclinant à la puissance mondiale du XXIe siècle.",
            regimes: [
              { type: "Empire Qing", start: 1789, end: 1912, chef: "Cixi" },
              { type: "République de Chine", start: 1912, end: 1949, chef: "Sun Yat-sen, Tchang Kaï-chek" },
              { type: "République populaire (communiste)", start: 1949, end: 2020, chef: "Mao, Deng Xiaoping" }
            ],
            technologies: ["Industrialisation accélérée", "Conquête spatiale", "Réseaux à grande vitesse", "Numérique"],
            croyances: ["Confucianisme", "Bouddhisme", "Athéisme d'État"],
            personnages: [
              { nom: "Mao Zedong", role: "Fondateur de la RPC", dates: "1893 à 1976" },
              { nom: "Deng Xiaoping", role: "Réformateur", dates: "1904 à 1997" }
            ],
            guerres: [{ nom: "Guerres de l'opium", annee: 1839, contre: "Royaume-Uni", issue: "Traités inégaux" }],
            events: [
              { year: 1839, label: "Guerres de l'opium", importance: "haute", info: "Humiliation de la Chine impériale." },
              { year: 1949, label: "République populaire", importance: "haute", info: "Mao proclame la RPC." },
              { year: 1978, label: "Réformes de Deng", importance: "haute", info: "Ouverture économique." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Histoire de la Chine", url: "https://fr.wikipedia.org/wiki/Histoire_de_la_Chine" }]
          },
          {
            id: "japon", label: "Japon",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#c0392b", isRiver: false, capitale: "Edo puis Tokyo",
            description: "Du shogunat isolé à la modernisation Meiji et à la puissance technologique.",
            regimes: [
              { type: "Shogunat Tokugawa", start: 1789, end: 1868, chef: "Shoguns Tokugawa" },
              { type: "Empire de Meiji", start: 1868, end: 1947, chef: "Empereur Meiji, Hirohito" },
              { type: "Démocratie parlementaire", start: 1947, end: 2020, chef: "Premiers ministres" }
            ],
            technologies: ["Industrialisation Meiji", "Électronique", "Automobile", "Robotique", "Shinkansen"],
            croyances: ["Shintoïsme", "Bouddhisme"],
            personnages: [{ nom: "Empereur Meiji", role: "Modernisateur", dates: "1852 à 1912" }],
            guerres: [{ nom: "Seconde Guerre mondiale", annee: 1941, contre: "États-Unis", issue: "Défaite (1945)" }],
            events: [
              { year: 1868, label: "Restauration Meiji", importance: "haute", info: "Modernisation rapide." },
              { year: 1945, label: "Hiroshima et Nagasaki", importance: "haute", info: "Capitulation du Japon." }
            ],
            relations: [],
            liens: [{ label: "Wikipédia — Ère Meiji", url: "https://fr.wikipedia.org/wiki/%C3%88re_Meiji" }]
          },
          {
            id: "coree-contemp",
            label: "Les deux Corées",
            period: "1789 à 2020",
            start: 1789,
            end: 2020,
            color: "#bf360c", // Continuité visuelle absolue avec la lignée de la Corée médiévale et moderne
            isRiver: false,
            capitale: "Séoul (Sud) / Pyongyang (Nord)",
            description: "De la fin de la dynastie Joseon à l'occupation japonaise, jusqu'à la partition de la péninsule en deux États aux modèles idéologiques, politiques et économiques radicalement opposés après la Seconde Guerre mondiale.",
            regimes: [
              { type: "Période Joseon tardive et Empire coréen", start: 1789, end: 1910, chef: "Roi Gojong" },
              { type: "Occupation coloniale japonaise", start: 1910, end: 1945, chef: "Gouverneurs-généraux japonais" },
              { type: "Partition : République de Corée (Sud) & République Populaire Démocratique de Corée (Nord)", start: 1948, end: 2020, chef: "Park Chung-hee, Kim Il-sung, Kim Jong-il" }
            ],
            technologies: [
              "Modernisation technique pré-coloniale (réseaux d'électricité et tramways à Séoul)",
              "L'essor de la K-Tech au Sud (hégémonie mondiale des semi-conducteurs, chantiers navals et électronique avec Samsung et Hyundai)",
              "Développement du nucléaire militaire, de la balistique et de l'industrie lourde fortifiée au Nord"
            ],
            croyances: [
              "Néo-confucianisme historique",
              "Christianisme en expansion rapide et Bouddhisme (Corée du Sud)",
              "Idéologie d'État totalitaire du Juche (Corée du Nord)"
            ],
            personnages: [
              { nom: "Kim Il-sung", role: "Fondateur et 'Président éternel' de la Corée du Nord communiste", dates: "1912 à 1994" },
              { nom: "Park Chung-hee", role: "Général et président du Sud, instigateur contesté mais central du 'Miracle sur le fleuve Han'", dates: "1917 à 1979" }
            ],
            guerres: [
              { nom: "Guerre de Corée", annee: 1950, contre: "Forces onusiennes (Sud) / Volontaires chinois (Nord)", issue: "Armistice de Panmunjom, sanctuarisation de la partition sur le 38e parallèle" }
            ],
            events: [
              { year: 1910, label: "Annexion japonaise", importance: "haute", info: "La signature forcée du traité d'annexion met fin à la souveraineté coréenne pour 35 ans." },
              { year: 1953, label: "Armistice de Panmunjom", importance: "haute", info: "Fin des combats actifs de la guerre de Corée ; aucun traité de paix officiel n'est signé." },
              { year: 1988, label: "Jeux Olympiques de Séoul", importance: "moyenne", info: "Consécration mondiale de la réussite économique, industrielle et démocratique du Sud." }
            ],
            relations: [
              { type: "conflit", with: "japon", label: "Résistance à la colonisation et contentieux mémoriels persistants", start: 1910, end: 1945 }
            ],
            liens: [
              { label: "Wikipédia — Histoire de la Corée", url: "https://fr.wikipedia.org/wiki/Histoire_de_la_Cor%C3%A9e" }
            ]
          },
          {
            id: "inde-contemp",
            label: "Inde",
            period: "1789 à 2020",
            start: 1789,
            end: 2020,
            color: "#16a085", // Alignement sur la lignée impériale des Maurya et des Moghols
            isRiver: true,
            capitale: "Calcutta puis New Delhi (depuis 1911)",
            description: "Du déclin de l'Empire moghol à la mainmise totale de la Compagnie des Indes et du Raj britannique, jusqu'à l'indépendance de 1947 qui propulse le pays au rang de plus grande démocratie du monde.",
            regimes: [
              { type: "Hégémonie de la Compagnie britannique des Indes orientales", start: 1789, end: 1858, chef: "Gouverneurs-généraux" },
              { type: "Raj britannique (Empire des Indes sous la Couronne)", start: 1858, end: 1947, chef: "Reine Victoria (Impératrice), Vice-rois" },
              { type: "République de l'Inde (Union indienne)", start: 1947, end: 2020, chef: "Jawaharlal Nehru, Indira Gandhi, Narendra Modi" }
            ],
            technologies: [
              "Déploiement du gigantesque réseau ferroviaire continental sous l'administration britannique",
              "Révolution verte agricole des années 1960 sécurisant l'autosuffisance alimentaire",
              "Développement d'un programme spatial indépendant (ISRO) et accès au statut de puissance nucléaire",
              "Émergence au rang de pôle mondial des services informatiques et du numérique (Bangalore)"
            ],
            croyances: [
              "Hindouisme (majoritaire), Islam, Sikhisme, Christianisme et Bouddhisme",
              "Laïcité institutionnelle inscrite dans la Constitution de l'indépendance"
            ],
            personnages: [
              { nom: "Mahatma Gandhi", role: "Guide spirituel et politique, théoricien de la désobéissance civile non-violente", dates: "1869 à 1948" },
              { nom: "Jawaharlal Nehru", role: "Premier ministre fondateur de la République, figure centrale du mouvement des Non-Alignés", dates: "1889 à 1964" }
            ],
            guerres: [
              { nom: "Révolte des Cipayes", annee: 1857, contre: "Compagnie des Indes", issue: "Répression britannique féroce, dissolution de la Compagnie et contrôle direct de la Couronne" },
              { nom: "Guerres indo-pakistanaises", annee: 1947, contre: "Pakistan", issue: "Conflits répétés pour le Cachemire et partitions territoriales" }
            ],
            events: [
              { year: 1947, label: "Indépendance et Partition", importance: "haute", info: "Fin de l'Empire des Indes, entraînant la naissance de l'Inde et du Pakistan dans des exodes massifs." }
            ],
            relations: [
              { type: "alliance", with: "royaume-uni", label: "Intégration et pivot au sein du Commonwealth post-colonial", start: 1947, end: 2020 }
            ],
            liens: [
              { label: "Wikipédia — Histoire de l'Inde", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Inde" }
            ]
          },
          {
            id: "indonesie",
            label: "Indonésie",
            period: "1789 à 2020",
            start: 1789,
            end: 2020,
            color: "#009688", // Vert émeraude/archipel, en continuité directe avec Srivijaya
            isRiver: false,
            capitale: "Batavia (Jakarta)",
            description: "Des siècles d'exploitation coloniale des Indes orientales néerlandaises jusqu'à la rupture de l'occupation japonaise, ouvrant la voie à une guerre d'indépendance et à la naissance du plus grand État archipélagique et islamique du monde.",
            regimes: [
              { type: "Indes orientales néerlandaises (Régime colonial d'État)", start: 1789, end: 1942, chef: "Gouverneurs hollandais" },
              { type: "Occupation militaire japonaise", start: 1942, end: 1945, chef: "Forces de la XVIe Armée" },
              { type: "République d'Indonésie (Ordre Ancien, Ordre Nouveau, puis ère Reformasi)", start: 1945, end: 2020, chef: "Sukarno, Suharto, Joko Widodo" }
            ],
            technologies: [
              "Infrastructures de liaisons maritimes et de câbles inter-insulaires complexes",
              "Exploitation de masse des hydrocarbures et ressources minières (compagnie nationale Pertamina)",
              "Aménagements agronomiques d'envergure pour la riziculture intensive sur terres volcaniques"
            ],
            croyances: [
              "Islam sunnite (plus grande population musulmane de la planète)",
              "Minorités chrétiennes, hindouistes (Bali) et bouddhistes",
              "Philosophie d'État de la Pancasila garantissant le pluralisme religieux constitutionnel"
            ],
            personnages: [
              { nom: "Sukarno", role: "Père de l'indépendance, leader nationaliste et premier président de la République", dates: "1901 à 1970" },
              { nom: "Suharto", role: "Général en chef, dictateur de l'Ordre Nouveau pendant plus de trois décennies", dates: "1921 à 2008" }
            ],
            guerres: [
              { nom: "Révolution nationale indonésienne", annee: 1945, contre: "Pays-Bas / Royaume-Uni", issue: "Victoire militaire et diplomatique indonésienne, abandon hollandais en 1949" }
            ],
            events: [
              { year: 1945, label: "Proclamation de l'Indépendance", importance: "haute", info: "Sukarno et Hatta proclament unilatéralement la souveraineté juste après la capitulation japonaise." },
              { year: 1955, label: "Conférence de Bandung", importance: "haute", info: "L'Indonésie accueille le sommet géopolitique fondateur du tiers-monde et de l'émancipation coloniale." },
              { year: 1998, label: "Chute de Suharto", importance: "haute", info: "La crise financière asiatique et d'immenses manifestations populaires forcent le dictateur à démissionner." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Histoire de l'Indonésie", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Indon%C3%A9sie" }
            ]
          },
          {
            id: "singapour",
            label: "Singapour",
            period: "1819 à 2020",
            start: 1819,
            end: 2020,
            color: "#e53935", // Rouge Singapour éclatant
            isRiver: false,
            capitale: "Singapour",
            description: "Comptoir colonial britannique ultra-stratégique devenu, après son expulsion de la Malaisie en 1965, une cité-État souveraine hyper-développée, s'imposant comme l'un des premiers hubs financiers et logistiques mondiaux.",
            regimes: [
              { type: "Établissement colonial britannique (Straits Settlements)", start: 1819, end: 1942, chef: "Stamford Raffles, Gouverneurs" },
              { type: "Occupation japonaise (Syonan-to)", start: 1942, end: 1945, chef: "Armée impériale du Japon" },
              { type: "Autonomie puis intégration éphémère à la Malaisie", start: 1945, end: 1965, chef: "Lee Kuan Yew" },
              { type: "République de Singapour (Cité-État souveraine)", start: 1965, end: 2020, chef: "Lee Kuan Yew, Goh Chok Tong, Lee Hsien Loong" }
            ],
            technologies: [
              "Construction du premier pôle industrialisé et industrialo-portuaire automatisé mondial (PSA)",
              "Ingénierie de poldérisation massive (gain de plus de 20% de superficie sur la mer)",
              "Infrastructures d'autonomie hydraulique avancées (NEWater, recyclage intégral des eaux usées)",
              "Hub technologique mondial de pointe (raffinage, puces électroniques et bio-ingénierie)"
            ],
            croyances: [
              "Bouddhisme, Taoïsme, Christianisme, Islam et Hindouisme (pluralisme multiculturel strict régulé par l'État)"
            ],
            personnages: [
              { nom: "Stamford Raffles", role: "Administrateur colonial, fondateur du comptoir moderne libre de taxes", dates: "1781 à 1826" },
              { nom: "Lee Kuan Yew", role: "Père de la patrie et Premier ministre bâtisseur, architecte du passage 'du tiers-monde au premier monde'", dates: "1923 à 2015" }
            ],
            guerres: [
              { nom: "Bataille de Singapour", annee: 1942, contre: "Empire du Japon", issue: "Capitulation britannique, chute de la forteresse et occupation militaire sanglante" }
            ],
            events: [
              { year: 1819, label: "Fondation du comptoir", importance: "moyenne", info: "Raffles signe un traité avec le Sultan de Johor pour implanter une base marchande de la Compagnie." },
              { year: 1965, label: "Indépendance forcée", importance: "haute", info: "Singapour est exclue de la Malaisie en raison de tensions politiques et ethniques, devenant indépendante malgré elle." }
            ],
            relations: [
              { type: "alliance", with: "royaume-uni", label: "Accords de défense mutuelle et intégration post-coloniale", start: 1965, end: 2020 }
            ],
            liens: [
              { label: "Wikipédia — Singapour", url: "https://fr.wikipedia.org/wiki/Singapour" }
            ]
          }
        ]
      },
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "ethiopie-contemp",
            label: "Éthiopie contemporaine",
            period: "1789 à 2020",
            start: 1789,
            end: 2020,
            color: "#7b1fa2", // Continuité parfaite avec le violet impérial utilisé pour Aksoum
            isRiver: false,
            capitale: "Addis-Abeba (depuis 1889)",
            description: "Seule nation africaine à avoir préservé sa souveraineté millénaire face au dépeçage colonial européen du XIXe siècle, se modernisant de façon endogène avant de s'imposer comme le symbole mondial du panafricanisme.",
            regimes: [
              { type: "Empire d'Éthiopie (Abyssinie)", start: 1789, end: 1974, chef: "Tewodros II, Ménélik II, Haïlé Sélassié Ier" },
              { type: "Régime militaire communiste (Derg)", start: 1974, end: 1991, chef: "Mengistu Haïlé Mariam" },
              { type: "République fédérale démocratique d'Éthiopie", start: 1991, end: 2020, chef: "Meles Zenawi" }
            ],
            technologies: [
              "Modernisation et standardisation de l'armée (artillerie et fusils d'importation au XIXe s.)",
              "Construction de la ligne de chemin de fer internationale Djibouti-Addis-Abeba",
              "Développement d'un réseau de télécommunications et d'infrastructures d'État autonomes",
              "Préservation et institutionnalisation du calendrier et du système horaire éthiopiens uniques"
            ],
            croyances: [
              "Christianisme orthodoxe tewahedo (religion d'État jusqu'en 1974)",
              "Islam sunnite",
              "Judaïsme éthiopien (communauté Beta Israel)",
              "Laïcité institutionnelle (depuis 1994)"
            ],
            personnages: [
              { nom: "Empereur Ménélik II", role: "Vainqueur de la bataille d'Adoua et artisan de la modernisation technique du pays", dates: "1844 à 1913" },
              { nom: "Empereur Haïlé Sélassié Ier", role: "Dernier empereur régnant, figure de proue de la diplomatie mondiale et du panafricanisme", dates: "1892 à 1975" }
            ],
            guerres: [
              { nom: "Première guerre italo-éthiopienne", annee: 1895, contre: "Royaume d'Italie", issue: "Victoire éthiopienne totale, reconnaissance internationale de la souveraineté" },
              { nom: "Seconde guerre italo-éthiopienne", annee: 1935, contre: "Italie fasciste", issue: "Occupation partielle temporaire, libération par la résistance et les Alliés en 1941" }
            ],
            events: [
              { year: 1896, label: "Bataille d'Adoua", importance: "haute", info: "Les forces éthiopiennes écrasent l'armée coloniale italienne, un séisme géopolitique mondial." },
              { year: 1963, label: "Fondation de l'OUA", importance: "haute", info: "Addis-Abeba est choisie comme capitale historique et siège de l'Organisation de l'unité africaine." }
            ],
            relations: [],
            liens: [
              { label: "Wikipédia — Histoire de l'Éthiopie", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27%C3%89thiopie" }
            ]
          },
          {
            id: "dahomey",
            label: "Royaume du Dahomey",
            period: "1789 à 1894",
            start: 1789,
            end: 1894,
            color: "#b22222", // Rouge brique martial pour cet État hautement militarisé
            isRiver: false,
            capitale: "Abomey",
            description: "État militaire et centralisé d'Afrique de l'Ouest, célèbre pour son organisation bureaucratique stricte, son économie royale planifiée et son redoutable corps d'élite de femmes soldats.",
            regimes: [
              { type: "Monarchie absolue centralisée du Dahomey", start: 1789, end: 1894, chef: "Roi Guézo, Roi Glélé, Roi Béhanzin" }
            ],
            technologies: [
              "Création institutionnelle des Mino (corps d'armée d'élite composé exclusivement de femmes)",
              "Réseau de fortifications défensives et palais complexes en terre d'Abomey",
              "Système de recensement démographique, agricole et fiscal via des banques de jetons",
              "Développement d'un réseau de renseignement et d'espionnage militaire (les Agbadjigbeto)"
            ],
            croyances: [
              "Religion traditionnelle Fon (place centrale des Voduns et culte des ancêtres royaux)"
            ],
            personnages: [
              { nom: "Roi Guézo", role: "Souverain réformateur qui affranchit le royaume de la tutelle d'Oyo et restructure l'économie autour du palmier à huile", dates: "Règne de 1818 à 1858" },
              { nom: "Roi Béhanzin", role: "Souverain symbole de la résistance acharnée contre les troupes coloniales françaises", dates: "1845 à 1906" }
            ],
            guerres: [
              { nom: "Guerres du Dahomey", annee: 1890, contre: "France", issue: "Défaite dahoméenne après d'intenses combats d'infanterie, annexion par la France" }
            ],
            events: [
              { year: 1818, label: "Émancipation d'Oyo", importance: "moyenne", info: "Le Dahomey refuse de payer son tribut à l'Empire d'Oyo et gagne sa pleine indépendance militaire." },
              { year: 1892, label: "Campagne de Dodds", importance: "haute", info: "Le général français Dodds marche sur Abomey face aux lignes de défense de Béhanzin." }
            ],
            relations: [
              { type: "conflit", with: "france-contemp", label: "Guerres de résistance contre la conquête coloniale française", start: 1890, end: 1894 }
            ],
            liens: [
              { label: "Wikipédia — Royaume du Dahomey", url: "https://fr.wikipedia.org/wiki/Royaume_du_Dahomey" }
            ]
          }
        ]
      }
    ]
  }
];
