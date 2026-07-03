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
          }
        ]
      }
    ]
  }
];
