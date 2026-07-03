// Époque : Moyen Âge (476 - 1492)
export default {
  id: "moyen-age",
  label: "Moyen Âge",
  start: 476,
  end: 1492,
  color: "#7c8bbf",
  description: "Empires médiévaux, essor de l'islam, féodalité européenne et grandes dynasties asiatiques.",
  continents: [
    {
      id: "europe", label: "Europe",
      civilizations: [
        {
          id: "byzance", label: "Empire byzantin",
          period: "395 à 1453", start: 476, end: 1453,
          color: "#8e44ad", isRiver: true, capitale: "Constantinople",
          description: "Héritier de Rome à l'Est, rempart chrétien pendant mille ans.",
          regimes: [{ type: "Empire chrétien", start: 476, end: 1453, chef: "Justinien, Basile II" }],
          technologies: ["Feu grégeois", "Droit (Code Justinien)", "Architecture (Sainte-Sophie)", "Mosaïque"],
          croyances: ["Christianisme orthodoxe", "Césaropapisme"],
          personnages: [
            { nom: "Justinien Ier", role: "Empereur codificateur", dates: "482 à 565" },
            { nom: "Basile II", role: "Le Bulgaroctone", dates: "958 à 1025" }
          ],
          guerres: [
            { nom: "Guerres gothiques", annee: 535, contre: "Ostrogoths", issue: "Reconquête de l'Italie" },
            { nom: "Chute de Constantinople", annee: 1453, contre: "Ottomans", issue: "Fin de l'Empire" }
          ],
          events: [
            { year: 537, label: "Sainte-Sophie", importance: "haute", info: "Chef-d'œuvre de Justinien." },
            { year: 1054, label: "Schisme d'Orient", importance: "haute", info: "Séparation des Églises." },
            { year: 1453, label: "Chute de Constantinople", importance: "haute", info: "Prise par Mehmed II." }
          ],
          relations: [{ type: "conflit", with: "ottomans", label: "Siège de Constantinople", start: 1451, end: 1453 }],
          liens: [{ label: "Wikipédia — Empire byzantin", url: "https://fr.wikipedia.org/wiki/Empire_byzantin" }]
        },
        {
          id: "francs", label: "Royaume franc / Empire carolingien",
          period: "481 à 987", start: 481, end: 987,
          color: "#2980b9", isRiver: false, capitale: "Aix-la-Chapelle",
          description: "Des Mérovingiens à Charlemagne, matrice de l'Europe médiévale.",
          regimes: [
            { type: "Royaume mérovingien", start: 481, end: 751, chef: "Clovis" },
            { type: "Empire carolingien", start: 800, end: 987, chef: "Charlemagne" }
          ],
          technologies: ["Minuscule caroline", "Étrier", "Assolement", "Renaissance carolingienne"],
          croyances: ["Christianisme latin", "Alliance trône-Église"],
          personnages: [
            { nom: "Clovis", role: "Roi fondateur", dates: "466 à 511" },
            { nom: "Charlemagne", role: "Empereur d'Occident", dates: "742 à 814" }
          ],
          guerres: [{ nom: "Guerres saxonnes", annee: 772, contre: "Saxons", issue: "Christianisation forcée" }],
          events: [
            { year: 496, label: "Baptême de Clovis", importance: "haute", info: "Conversion des Francs." },
            { year: 800, label: "Charlemagne empereur", importance: "haute", info: "Couronné à Rome." },
            { year: 843, label: "Traité de Verdun", importance: "haute", info: "Partage de l'empire." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Empire carolingien", url: "https://fr.wikipedia.org/wiki/Empire_carolingien" }]
        },
        {
          id: "france-capet", label: "Royaume de France (Capétiens)",
          period: "987 à 1492", start: 987, end: 1492,
          color: "#3f6fd1", isRiver: false, capitale: "Paris",
          description: "Consolidation du royaume de France sous les Capétiens et Valois.",
          regimes: [
            { type: "Monarchie capétienne", start: 987, end: 1328, chef: "Philippe Auguste, Saint Louis" },
            { type: "Dynastie des Valois", start: 1328, end: 1492, chef: "Charles VII" }
          ],
          technologies: ["Cathédrales gothiques", "Université de Paris", "Administration royale"],
          croyances: ["Catholicisme", "Roi thaumaturge"],
          personnages: [
            { nom: "Philippe Auguste", role: "Roi bâtisseur", dates: "1165 à 1223" },
            { nom: "Jeanne d'Arc", role: "Héroïne", dates: "1412 à 1431" }
          ],
          guerres: [{ nom: "Guerre de Cent Ans", annee: 1337, contre: "Angleterre", issue: "Victoire française" }],
          events: [
            { year: 1214, label: "Bouvines", importance: "haute", info: "Victoire de Philippe Auguste." },
            { year: 1431, label: "Jeanne d'Arc", importance: "haute", info: "Brûlée à Rouen." }
          ],
          relations: [{ type: "conflit", with: "angleterre", label: "Guerre de Cent Ans", start: 1337, end: 1453 }],
          liens: [{ label: "Wikipédia — Capétiens", url: "https://fr.wikipedia.org/wiki/Cap%C3%A9tiens" }]
        },
        {
          id: "angleterre", label: "Royaume d'Angleterre",
          period: "927 à 1492", start: 927, end: 1492,
          color: "#c0392b", isRiver: false, capitale: "Londres",
          description: "De l'unification anglo-saxonne aux Plantagenêts.",
          regimes: [
            { type: "Royaume anglo-saxon", start: 927, end: 1066, chef: "Alfred le Grand" },
            { type: "Monarchie normande/Plantagenêt", start: 1066, end: 1492, chef: "Guillaume, Richard Cœur de Lion" }
          ],
          technologies: ["Common law", "Magna Carta", "Château fort normand"],
          croyances: ["Catholicisme"],
          personnages: [{ nom: "Guillaume le Conquérant", role: "Roi normand", dates: "1028 à 1087" }],
          guerres: [{ nom: "Guerre de Cent Ans", annee: 1337, contre: "France", issue: "Défaite finale" }],
          events: [
            { year: 1066, label: "Bataille de Hastings", importance: "haute", info: "Conquête normande." },
            { year: 1215, label: "Magna Carta", importance: "haute", info: "Limite le pouvoir royal." }
          ],
          relations: [{ type: "conflit", with: "france-capet", label: "Guerre de Cent Ans", start: 1337, end: 1453 }],
          liens: [{ label: "Wikipédia — Royaume d'Angleterre", url: "https://fr.wikipedia.org/wiki/Royaume_d%27Angleterre" }]
        },
        {
          id: "vikings",
          label: "Scandinavie médiévale (Vikings)",
          period: "793 à 1066",
          start: 793,
          end: 1066,
          color: "#00838f", // Bleu canard/océanique pour cette civilisation de grands marins
          isRiver: false,
          capitale: "Ribe / Jelling / Roskilde",
          description: "Peuples navigateurs, commerçants et guerriers d'Europe du Nord dont les raids mémorables, les explorations transatlantiques et les réseaux marchands continentaux ont profondément bouleversé et remodelé les royaumes de l'Europe médiévale.",
          regimes: [
            { type: "Sociétés de chefferies et clans rivaux", start: 793, end: 960, chef: "Ragnar Lodbrok (semi-légendaire)" },
            { type: "Royaumes scandinaves unifiés et chrétiens", start: 960, end: 1066, chef: "Harald à la Dent bleue, Knut le Grand" }
          ],
          technologies: [
            "Le Langskip (drakkar) à faible tirant d'eau, capable de naviguer en haute mer et de remonter les fleuves",
            "Outils d'orientation astronomique avancés (pierre de soleil, compas solaire)",
            "Métallurgie d'élite pour la forge des épées d'acier (type Ulfberht)",
            "Réseaux d'échanges de longue distance connectant l'Atlantique Nord à Constantinople et Bagdad"
          ],
          croyances: [
            "Mythologie nordique polythéiste (cultes d'Odin, Thor, Freyr et Freyja)",
            "Christianisation progressive et politique des élites scandinaves (Xe et XIe s.)"
          ],
          personnages: [
            { nom: "Knut le Grand", role: "Souverain bâtisseur d'un Empire du Nord éphémère unissant le Danemark, l'Angleterre et la Norvège", dates: "≈ 995 à 1035" },
            { nom: "Harald Hardrada", role: "Roi de Norvège, figure de proue de la garde varangienne de Byzance, considéré comme le dernier roi viking", dates: "1015 à 1066" }
          ],
          guerres: [
            { nom: "Grand Armée païenne en Angleterre", annee: 865, contre: "Royaumes anglo-saxons", issue: "Conquête viking et établissement de la zone de lois du Danelaw" }
          ],
          events: [
            { year: 793, label: "Pillage de Lindisfarne", importance: "haute", info: "Le saccage d'un monastère insulaire anglais marque traditionnellement le début de l'Ére Viking." },
            { year: 911, label: "Traité de Saint-Clair-sur-Epte", importance: "haute", info: "Le chef viking Rollon obtient le territoire de la future Normandie du roi des Francs en échange de sa protection." },
            { year: 1066, label: "Bataille de Stamford Bridge", importance: "haute", info: "La défaite et la mort d'Harald Hardrada marquent la clôture de l'âge d'or des raids vikings." }
          ],
          relations: [
            { type: "conflit", with: "francs", label: "Raids fluviaux réguliers et sièges répétés de Paris", start: 845, end: 911 },
            { type: "conflit", with: "angleterre", label: "Invasions territoriales, tributs (Danegeld) et vagues de colonisation", start: 927, end: 1066 }
          ],
          liens: [
            { label: "Wikipédia — Âge des Vikings", url: "https://fr.wikipedia.org/wiki/%C3%82ge_des_Vikings" }
          ]
        },
        {
          id: "serg",
          label: "Saint-Empire Romain Germanique",
          period: "962 à 1492",
          start: 962,
          end: 1492,
          color: "#f57f17", // Jaune d'or impérial pour cette grande puissance centrale
          isRiver: false,
          capitale: "Pas de capitale fixe (Diètes itinérantes : Aix-la-Chapelle, Ratisbonne, Nuremberg)",
          description: "Structure politique et territoriale majeure de l'Europe centrale, née de la dislocation de l'Empire carolingien, régie par une monarchie élective et le théâtre permanent de luttes d'influence avec la Papauté.",
          regimes: [
            { type: "Monarchie élective féodale (Dynasties Ottonienne, Salienne, Hohenstaufen)", start: 962, end: 1438, chef: "Otton Ier, Henri IV, Frédéric Ier Barberousse" },
            { type: "Monarchie sous hégémonie de la Maison de Habsbourg", start: 1438, end: 1492, chef: "Frédéric III" }
          ],
          technologies: [
            "Architecture monumentale d'Europe centrale (cathédrales impériales romanes puis gothiques)",
            "Création de chartes urbaines de franchises et essor de la Ligue Hanséatique marchande",
            "Codification juridique territoriale d'envergure (Miroir des Saxons)",
            "Invention de l'imprimerie typographique à caractères mobiles par Gutenberg à Mayence (vers 1450)"
          ],
          croyances: [
            "Catholicisme romain",
            "Conflits théologiques et politiques majeurs avec le Saint-Siège (Querelle des Investitures)"
          ],
          personnages: [
            { nom: "Otton Ier le Grand", role: "Fondateur et restaurateur de la dignité impériale germanique à Rome", dates: "912 à 973" },
            { nom: "Frédéric II de Hohenstaufen", role: "Souverain intellectuel et polyglotte, surnommé Stupor Mundi (Stupeur du monde)", dates: "1194 à 1250" }
          ],
          guerres: [
            { nom: "Guerres contre la Ligue Lombarde", annee: 1176, contre: "Communes italiennes insurgées", issue: "Défaite impériale à Legnano, autonomie garantie des cités d'Italie du Nord" }
          ],
          events: [
            { year: 962, label: "Fondation du Saint-Empire", importance: "haute", info: "Le roi de Germanie Otton Ier est sacré empereur à Rome par le pape." },
            { year: 1077, label: "Pénitence de Canossa", importance: "haute", info: "L'empereur Henri IV attend trois jours nu-pieds dans la neige pour obtenir le pardon du pape Grégoire VII." },
            { year: 1356, label: "Bulle d'Or", importance: "haute", info: "Décret impérial fixant définitivement les modalités d'élection de l'empereur par sept Princes-Électeurs." }
          ],
          relations: [
            { type: "conflit", with: "france-capet", label: "Tensions frontalières chroniques et affrontements indirects (Bataille de Bouvines)", start: 1214, end: 1492 }
          ],
          liens: [
            { label: "Wikipédia — Saint-Empire romain germanique", url: "https://fr.wikipedia.org/wiki/Saint-Empire_romain_germanique" }
          ]
        },
        {
          id: "rus-kiev",
          label: "Rus' de Kiev",
          period: "862 à 1240",
          start: 862,
          end: 1240,
          color: "#1565c0", // Bleu azur impérial pour la lignée slave orientale
          isRiver: true,
          capitale: "Kiev",
          description: "Vaste fédération médiévale de principautés slaves, née de l'alliance entre les populations autochtones et les commerçants varangiens, formant le berceau politique, culturel et orthodoxe de l'Europe de l'Est.",
          regimes: [
            { type: "Grand-principauté féodale de Kiev", start: 862, end: 1240, chef: "Oleg le Sage, Vladimir le Grand, Iaroslav le Sage" }
          ],
          technologies: [
            "Maîtrise de la route commerciale fluviale 'des Varangiens aux Grecs' (liaison Baltique-mer Noire)",
            "Architecture ecclésiastique monumentale en brique d'inspiration byzantine (Sainte-Sophie de Kiev)",
            "Codification juridique slave unifiée (le code Rousskaïa Pravda)",
            "Adoption précoce et diffusion de l'alphabétisation en alphabet cyrillique"
          ],
          croyances: [
            "Paganisme slave (culte du dieu du tonnerre Peroun et des esprits de la nature)",
            "Christianisme orthodoxe d'État (conversion officielle sous l'influence byzantine en 988)"
          ],
          personnages: [
            { nom: "Vladimir Ier le Grand", role: "Grand-prince qui scelle l'intégration chrétienne et européenne de la Rus'", dates: "≈ 958 à 1015" },
            { nom: "Iaroslav le Sage", role: "Législateur et diplomate ayant porté la principauté à son apogée culturel et territorial", dates: "978 à 1054" }
          ],
          guerres: [
            { nom: "Invasion mongole de la Rus'", annee: 1237, contre: "Empire mongol", issue: "Destruction des cités, éclatement définitif de la fédération et vassalité envers la Horde d'Or" }
          ],
          events: [
            { year: 988, label: "Baptême de la Rus'", importance: "haute", info: "Vladimir Ier adopte solennellement l'orthodoxie et épouse la sœur de l'empereur byzantin." },
            { year: 1240, label: "Destruction de Kiev", importance: "haute", info: "Les armées mongoles de Batu assiègent et rasent la capitale, mettant fin à l'unité politique." }
          ],
          relations: [
            { type: "alliance", with: "byzance", label: "Partenariat religieux, culturel et économique avec Constantinople", start: 988, end: 1204 },
            { type: "conflit", with: "mongols", label: "Guerres de résistance face aux invasions des Tatars-Mongols", start: 1223, end: 1240 }
          ],
          liens: [
            { label: "Wikipédia — Rus' de Kiev", url: "https://fr.wikipedia.org/wiki/Rus%27_de_Kiev" }
          ]
        },
        {
          id: "italie-maritime",
          label: "Républiques maritimes (Venise & Gênes)",
          period: "697 à 1492",
          start: 697,
          end: 1492,
          color: "#d32f2f", // Rouge vénitien martial pour cette lignée de thalassocrates
          isRiver: false,
          capitale: "Venise / Gênes",
          description: "Cités-États marchandes et oligarchiques d'Italie du Nord qui, grâce à leur suprématie navale, ont monopolisé le commerce entre l'Orient et l'Occident, financé les Croisades et développé les outils du capitalisme moderne.",
          regimes: [
            { type: "Républiques oligarchiques marchandes", start: 697, end: 1492, chef: "Doges de Venise, Doges de Gênes" }
          ],
          technologies: [
            "L'Arsenal de Venise (premier grand complexe industriel mondial basé sur la préfabrication en série de navires)",
            "Création de la comptabilité en partie double et généralisation des lettres de change (banque moderne)",
            "Conception de la galère marchande armée (Galea Grossa)",
            "Réseau cartographique maritime d'extrême précision (les cartes portolans)"
          ],
          croyances: [
            "Catholicisme romain (place fondamentale accordée à la sacralisation de la cité par le vol de reliques, ex: Saint-Marc à Venise)"
          ],
          personnages: [
            { nom: "Enrico Dandolo", role: "Doge de Venise, stratège aveugle ayant orchestré le détournement de la quatrième croisade", dates: "1107 à 1205" },
            { nom: "Marco Polo", role: "Marchand vénitien dont le voyage à la cour de Kubilai Khan a ouvert l'horizon géographique européen", dates: "1254 à 1324" }
          ],
          guerres: [
            { nom: "Guerre de Chioggia", annee: 1378, contre: "République de Gênes", issue: "Victoire de Venise qui verrouille son hégémonie maritime en mer Adriatique" }
          ],
          events: [
            { year: 1204, label: "Sac de Constantinople", importance: "haute", info: "La quatrième croisade, financée et transportée par Venise, pille la métropole byzantine." },
            { year: 1298, label: "Bataille navale de Curzola", importance: "moyenne", info: "Affrontement majeur entre flottes génoises et vénitiennes ; Marco Polo y est fait prisonnier." }
          ],
          relations: [
            { type: "conflit", with: "byzance", label: "Rivalités commerciales, détournement de la IVe Croisade et démantèlement de l'Empire", start: 1202, end: 1261 },
            { type: "conflit", with: "ottomans", label: "Guerres navales chroniques pour la défense des comptoirs du Levant", start: 1453, end: 1492 }
          ],
          liens: [
            { label: "Wikipédia — Républiques maritimes", url: "https://fr.wikipedia.org/wiki/R%C3%A9publiques_maritimes" }
          ]
        },
        {
          id: "al-andalus",
          label: "Al-Andalus (Civilisation islamique d'Espagne)",
          period: "711 à 1492",
          start: 711,
          end: 1492,
          color: "#1b5e20", // Vert islamique profond pour cette lignée culturelle et religieuse
          isRiver: false,
          capitale: "Cordoue puis Grenade",
          description: "Splendide civilisation arabo-berbère de la péninsule Ibérique, devenue l'un des plus grands pôles scientifiques, philosophiques, poétiques et architecturaux du monde médiéval, servant de pont culturel entre l'Orient et l'Occident.",
          regimes: [
            { type: "Émirat puis Califat de Cordoue (Dynastie Omeyyade)", start: 711, end: 1031, chef: "Abd al-Rahman Ier, Abd al-Rahman III" },
            { type: "Périodes des Taïfas (Royaumes fragmentés et dynasties berbères Almoravide/Almohade)", start: 1031, end: 1238, chef: "Youssef ben Tachfine" },
            { type: "Royaume Nasride de Grenade", start: 1238, end: 1492, chef: "Mohammed Ier, Boabdil" }
          ],
          technologies: [
            "Systèmes perfectionnés d'irrigation agricole (acequias, norias et gestion fine de l'eau)",
            "Introduction et fabrication de pointe du papier en Europe occidentale (Xàtiva)",
            "Agronomie avancée (acclimatation d'espèces : agrumes, riz, canne à sucre, coton)",
            "Sciences universelles (médecine chirurgicale d'Al-Zahrawi, mathématiques et astronomie)",
            "Architecture d'art hispano-mauresque d'élite (Grande Mosquée de Cordoue, Alhambra de Grenade)"
          ],
          croyances: [
            "Islam sunnite (de rite malékite)",
            "Périodes de coexistence culturelle et religieuse encadrée (Convivencia) des Juifs et Chrétiens sous le statut de Dhimmi"
          ],
          personnages: [
            { nom: "Averroès (Ibn Rushd)", role: "Philosophe, juriste et médecin, célèbre pour ses commentaires d'Aristote ayant révolutionné la pensée médiévale", dates: "1126 à 1198" },
            { nom: "Abd al-Rahman III", role: "Calife bâtisseur ayant proclamé le Califat de Cordoue et fondé la cité palatiale de Madinat al-Zahra", dates: "891 à 961" }
          ],
          guerres: [
            { nom: "Invasion omeyyade de l'Hispanie", annee: 711, contre: "Royaume Wisigoth", issue: "Victoire arabo-berbère fulgurante à la bataille de Guadalete" },
            { nom: "Bataille de Las Navas de Tolosa", annee: 1212, contre: "Coalition chrétienne", issue: "Défaite almohade décisive, ouvrant la voie au déclin d'Al-Andalus" },
            { nom: "Guerre de Grenade", annee: 1482, contre: "Royaumes de Castille et d'Aragon", issue: "Capitulation de Grenade, fin de la souveraineté islamique en Espagne" }
          ],
          events: [
            { year: 756, label: "Fondation de l'Émirat de Cordoue", importance: "haute", info: "L'émir rescapé Abd al-Rahman Ier fonde un État indépendant du califat abbasside de Bagdad." },
            { year: 929, label: "Proclamation du Califat", importance: "haute", info: "Abd al-Rahman III rompt définitivement les liens spirituels avec l'Orient et s'érige en Commandeur des croyants." },
            { year: 1492, label: "Chute de Grenade", importance: "haute", info: "Le dernier émir Boabdil remet les clés de l'Alhambra aux Rois Catholiques." }
          ],
          relations: [
            { type: "conflit", with: "francs", label: "Affrontements frontaliers de sédition et création de la Marche d'Espagne", start: 732, end: 814 },
            { type: "conflit", with: "reconquista-royaumes", label: "Guerres séculaires de frontières et de territoires (Reconquista)", start: 718, end: 1492 }
          ],
          liens: [
            { label: "Wikipédia — Al-Andalus", url: "https://fr.wikipedia.org/wiki/Al-Andalus" }
          ]
        },
        {
          id: "reconquista-royaumes",
          label: "Royaumes de la Reconquista",
          period: "718 à 1492",
          start: 718,
          end: 1492,
          color: "#b71c1c", // Rouge écarlate espagnol pour cette lignée de monarchies chrétiennes martialles
          isRiver: false,
          capitale: "Tolède / Valladolid / Barcelone",
          description: "Émergence, expansion et unification progressive des monarchies chrétiennes du nord de la péninsule Ibérique (Royaumes des Asturies, de Léon, de Castille, d'Aragon, et Comté de Barcelone) engagées dans la reconquête militaire du territoire face à Al-Andalus.",
          regimes: [
            { type: "Monarchies féodales fragmentées", start: 718, end: 1469, chef: "Alphonse VI, Alphonse VIII, Pierre IV d'Aragon" },
            { type: "Union des Couronnes de Castille et d'Aragon (Rois Catholiques)", start: 1469, end: 1492, chef: "Isabelle Ire de Castille, Ferdinand II d'Aragon" }
          ],
          technologies: [
            "Architecture militaire fortifiée de hauteur (châteaux de Castille, terre des châteaux)",
            "Tactiques d'infanterie et de cavalerie légère adaptées à la guérilla (tactique des Ginetes)",
            "Codification juridique d'envergure (les Siete Partidas d'Alphonse X le Sage)",
            "Développement de l'école de cartographie majorquine et de la construction navale pré-océanique"
          ],
          croyances: [
            "Catholicisme romain",
            "Ferveur idéologique de la Croisade incarnée par les ordres militaires nationaux (Calatrava, Alcántara) et le culte de Saint-Jacques (Santiago Matamoros)"
          ],
          personnages: [
            { nom: "Le Cid (Rodrigo Díaz de Vivar)", role: "Chevalier et mercenaire castillan mythique, figure centrale des guerres frontalières", dates: "1043 à 1099" },
            { nom: "Isabelle Ire de Castille (La Catholique)", role: "Reine de Castille, elle unifie l'Espagne moderne par son mariage et achève la Reconquista", dates: "1451 à 1504" }
          ],
          guerres: [
            { nom: "Guerre de Reconquista", annee: 718, contre: "Al-Andalus", issue: "Victoires chrétiennes successives étalées sur près de huit siècles" }
          ],
          events: [
            { year: 718, label: "Bataille de Covadonga", importance: "moyenne", info: "Pélage le Conquérant repousse un détachement musulman dans les Asturies, point de départ mythique de la Reconquista." },
            { year: 1212, label: "Bataille de Las Navas de Tolosa", importance: "haute", info: "Une alliance historique des rois chrétiens brise définitivement l'hégémonie militaire des Almohades." },
            { year: 1469, label: "Mariage des Rois Catholiques", importance: "haute", info: "L'union d'Isabelle de Castille et de Ferdinand d'Aragon scelle la naissance politique du Royaume d'Espagne." }
          ],
          relations: [
            { type: "conflit", with: "al-andalus", label: "Guerres séculaires pour le contrôle territorial de la péninsule", start: 718, end: 1492 },
            { type: "alliance", with: "france-capet", label: "Alliances dynastiques récurrentes et soutien de la chevalerie française contre les Maures", start: 987, end: 1492 }
          ],
          liens: [
            { label: "Wikipédia — Reconquista", url: "https://fr.wikipedia.org/wiki/Reconquista" }
          ]
        }
      ]
    },
    {
      id: "asie", label: "Asie / Moyen-Orient",
      civilizations: [
        {
          id: "califat", label: "Califat islamique",
          period: "632 à 1258", start: 632, end: 1258,
          color: "#27ae60", isRiver: false, capitale: "Damas puis Bagdad",
          description: "Expansion fulgurante de l'islam et âge d'or scientifique.",
          regimes: [
            { type: "Califat des Rachidoune", start: 632, end: 661, chef: "Abou Bakr, Omar" },
            { type: "Califat omeyyade", start: 661, end: 750, chef: "Mu'awiya" },
            { type: "Califat abbasside", start: 750, end: 1258, chef: "Haroun al-Rachid" }
          ],
          technologies: ["Algèbre (al-Khwarizmi)", "Médecine (Avicenne)", "Papier", "Astronomie", "Chiffres arabes"],
          croyances: ["Islam"],
          personnages: [
            { nom: "Haroun al-Rachid", role: "Calife de l'âge d'or", dates: "766 à 809" },
            { nom: "Averroès", role: "Philosophe", dates: "1126 à 1198" }
          ],
          guerres: [{ nom: "Sac de Bagdad", annee: 1258, contre: "Mongols", issue: "Fin du califat abbasside" }],
          events: [
            { year: 632, label: "Mort de Mahomet", importance: "haute", info: "Début des conquêtes." },
            { year: 762, label: "Fondation de Bagdad", importance: "haute", info: "Capitale abbasside." },
            { year: 1258, label: "Chute de Bagdad", importance: "haute", info: "Prise par les Mongols." }
          ],
          relations: [{ type: "conflit", with: "mongols", label: "Invasion mongole", start: 1256, end: 1258 }],
          liens: [{ label: "Wikipédia — Califat", url: "https://fr.wikipedia.org/wiki/Califat" }]
        },
        {
          id: "mongols", label: "Empire mongol",
          period: "1206 à 1368", start: 1206, end: 1368,
          color: "#e67e22", isRiver: false, capitale: "Karakorum",
          description: "Le plus vaste empire terrestre contigu de l'histoire.",
          regimes: [{ type: "Khanat", start: 1206, end: 1368, chef: "Gengis Khan, Kubilai Khan" }],
          technologies: ["Arc composite", "Poste (Yam)", "Cavalerie mobile", "Tolérance religieuse"],
          croyances: ["Tengrisme", "Tolérance des religions"],
          personnages: [
            { nom: "Gengis Khan", role: "Fondateur", dates: "1162 à 1227" },
            { nom: "Kubilai Khan", role: "Empereur de Chine", dates: "1215 à 1294" }
          ],
          guerres: [{ nom: "Conquêtes mongoles", annee: 1211, contre: "Chine, Perse", issue: "Empire immense" }],
          events: [
            { year: 1206, label: "Gengis Khan unifie les Mongols", importance: "haute", info: "Naissance de l'empire." },
            { year: 1258, label: "Sac de Bagdad", importance: "haute", info: "Fin du califat abbasside." }
          ],
          relations: [{ type: "conflit", with: "califat", label: "Invasion du califat", start: 1256, end: 1258 }],
          liens: [{ label: "Wikipédia — Empire mongol", url: "https://fr.wikipedia.org/wiki/Empire_mongol" }]
        },
        {
          id: "chine-tang-song", label: "Chine (Tang & Song)",
          period: "618 à 1279", start: 618, end: 1279,
          color: "#d35400", isRiver: true, capitale: "Chang'an, Kaifeng",
          description: "Apogée culturelle et technique de la Chine médiévale.",
          regimes: [
            { type: "Dynastie Tang", start: 618, end: 907, chef: "Taizong" },
            { type: "Dynastie Song", start: 960, end: 1279, chef: "Taizu" }
          ],
          technologies: ["Imprimerie", "Poudre à canon", "Boussole nautique", "Billet de banque"],
          croyances: ["Bouddhisme", "Confucianisme", "Taoïsme"],
          personnages: [{ nom: "Wu Zetian", role: "Seule impératrice", dates: "624 à 705" }],
          guerres: [{ nom: "Invasions mongoles", annee: 1234, contre: "Mongols", issue: "Chute des Song" }],
          events: [
            { year: 868, label: "1er livre imprimé", importance: "haute", info: "Le Sûtra du Diamant." },
            { year: 1088, label: "Boussole décrite", importance: "moyenne", info: "Usage nautique." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Dynastie Tang", url: "https://fr.wikipedia.org/wiki/Dynastie_Tang" }]
        },
        {
          id: "khmer",
          label: "Empire Khmer",
          period: "802 à 1431",
          start: 802,
          end: 1431,
          color: "#ff9800", // Doré/Orange pour la lignée monumentale d'Asie du Sud-Est
          isRiver: true,
          capitale: "Angkor",
          description: "Splendide empire d'Asie du Sud-Est, célèbre pour son architecture sacrée en pierre, ses systèmes hydrauliques géants et sa domination politique et culturelle sur la péninsule indochinoise.",
          regimes: [
            { type: "Monarchie théocratique (Culte du Roi-Dieu ou Devaraja)", start: 802, end: 1431, chef: "Jayavarman II, Suryavarman II, Jayavarman VII" }
          ],
          technologies: [
            "Réseau hydraulique urbain géant (Barays de dizaines de millions de m³ pour réguler la mousson)",
            "Architecture monumentale de pierre sèche ajustée et sculptée avec une précision d'orfèvre",
            "Gestion agricole intensive de la riziculture permettant jusqu'à trois récoltes annuelles",
            "Réseau routier impérial surélevé reliant les provinces avec ponts en pierre et gîtes d'étape"
          ],
          croyances: [
            "Hindouisme (shivaïsme d'État fusionné avec le culte impérial, puis vishnouïsme)",
            "Bouddhisme mahayana (sous Jayavarman VII) évoluant vers le bouddhisme theravada populaire"
          ],
          personnages: [
            { nom: "Suryavarman II", role: "Roi bâtisseur ayant ordonné la construction du complexe monumental d'Angkor Wat", dates: "Règne de 1113 à 1150" },
            { nom: "Jayavarman VII", role: "Le plus grand souverain khmer, libérateur du pays face au Champa et bâtisseur d'Angkor Thom", dates: "1125 à 1218" }
          ],
          guerres: [
            { nom: "Guerres contre le Champa", annee: 1177, contre: "Royaume de Champa", issue: "Sac initial d'Angkor par le Champa, suivi d'une contre-offensive khmère et d'une annexion temporaire" }
          ],
          events: [
            { year: 802, label: "Fondation de l'Empire", importance: "haute", info: "Jayavarman II unifie les principautés et proclame l'indépendance du royaume sur le mont Kulen." },
            { year: 1150, label: "Achèvement d'Angkor Wat", importance: "haute", info: "Consécration du temple funéraire impérial, plus grande structure religieuse au monde." },
            { year: 1431, label: "Sac d'Angkor par Ayutthaya", importance: "haute", info: "Les armées siamoises s'emparent de la métropole, provoquant le déplacement de la cour et l'abandon progressif du site." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Empire khmer", url: "https://fr.wikipedia.org/wiki/Empire_khmer" }
          ]
        },
        {
          id: "chola",
          label: "Empire Chola",
          period: "848 à 1279",
          start: 848,
          end: 1279,
          color: "#e65100", // Orange safran profond pour la lignée navale et hindoue du sud de l'Inde
          isRiver: true,
          capitale: "Thanjavur / Gangaikonda Cholapuram",
          description: "L'un des plus puissants et durables empires maritimes de l'Inde du Sud, dont la thalassocratie militaire, les réseaux marchands et l'art du bronze ont rayonné sur toute l'Asie du Sud-Est et la Chine.",
          regimes: [
            { type: "Monarchie impériale centralisée et bureaucratique", start: 848, end: 1279, chef: "Rajaraja Ier, Rajendra Ier" }
          ],
          technologies: [
            "Ingénierie navale hauturière avancée et création d'une marine de guerre hégémonique",
            "Systèmes d'irrigation d'envergure (barrages, canaux de dérivation et réservoirs géants sur la Kaveri)",
            "Art de la statuaire de bronze à la cire perdue de réputation mondiale",
            "Architecture de granit massif de style dravidien (vimanams de très grande hauteur)"
          ],
          croyances: [
            "Hindouisme (essor majeur du shivaïsme et dévotion Bhakti)",
            "Tolérance et mécénat de fondations bouddhistes et jaïnes pour sécuriser les alliances commerciales"
          ],
          personnages: [
            { nom: "Rajaraja Ier", role: "Souverain conquérant, réformateur du cadastre et bâtisseur du grand temple Brihadisvara", dates: "Règne de 985 à 1014" },
            { nom: "Rajendra Ier", role: "Empereur maritime ayant mené l'armée jusqu'au Gange et lancé des expéditions navales outre-mer", dates: "Règne de 1014 à 1044" }
          ],
          guerres: [
            { nom: "Expédition maritime contre Srivijaya", annee: 1025, contre: "Empire de Srivijaya (Indonésie/Malaisie)", issue: "Victoire navale chola totale, soumission des détroits et pillage des comptoirs rivaux" }
          ],
          events: [
            { year: 1010, label: "Inauguration du Brihadisvara", importance: "haute", info: "Achèvement du temple impérial de Thanjavur, exploit technique d'assemblage de granit monolithique." },
            { year: 1025, label: "Raids sur l'Asie du Sud-Est", importance: "haute", info: "L'armada de Rajendra Ier sécurise militairement les routes maritimes du commerce de la soie et des épices." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Dynastie Chola", url: "https://fr.wikipedia.org/wiki/Dynastie_Chola" }
          ]
        },
        {
          id: "japon-feodal",
          label: "Japon féodal (Samouraïs & Shogunats)",
          period: "794 à 1492 (Moyen Âge)",
          start: 794,
          end: 1492,
          color: "#c0392b", // Rouge écarlate impérial, aligné sur la lignée nippone contemporaine
          isRiver: false,
          capitale: "Heian-kyō (Kyoto) / Kamakura / Muromachi",
          description: "Ère d'émergence de la classe guerrière des samouraïs et d'instauration des premiers gouvernements militaires d'élite (shogunats), caractérisée par un immense raffinement culturel de cour et le rejet victorieux des invasions mongoles.",
          regimes: [
            { type: "Époque de Heian (Régence civile du clan Fujiwara)", start: 794, end: 1185, chef: "Empereur Kanmu, Fujiwara no Michinaga" },
            { type: "Shogunat de Kamakura (Premier gouvernement militaire ou Bakufu)", start: 1185, end: 1333, chef: "Minamoto no Yoritomo, Clan Hōjō" },
            { type: "Shogunat d'Ashikaga (Époque de Muromachi)", start: 1336, end: 1492, chef: "Ashikaga Takauji" }
          ],
          technologies: [
            "Forge d'élite des sabres de guerre (Katana, technique de pliage et de cémentation de l'acier)",
            "Architecture défensive complexe de châteaux-forts et de temples en bois résistant aux séismes",
            "Développement des arts martiaux traditionnels et du code de conduite des guerriers (Bushi)",
            "Littérature de cour monumentale et poésie classique (Waka, Le Dit du Genji)"
          ],
          croyances: [
            "Shintoïsme (religion spirituelle autochtone animiste)",
            "Bouddhisme Zen (courant philosophique et méditatif adopté massivement par les samouraïs)",
            "Bouddhisme de la Terre Pure (Amidisme populaire)"
          ],
          personnages: [
            { nom: "Minamoto no Yoritomo", role: "Grand vainqueur de la guerre de Genpei, premier Shogun héréditaire et fondateur du pouvoir des guerriers", dates: "1147 à 1199" },
            { nom: "Murasaki Shikibu", role: "Dame d'honneur et femme de lettres, autrice du 'Dit du Genji', considéré comme le premier roman de l'histoire mondiale", dates: "≈ 973 à 1014" }
          ],
          guerres: [
            { nom: "Invasions mongoles du Japon", annee: 1274, contre: "Empire mongol (Dynastie Yuan)", issue: "Victoire japonaise défensive absolue facilitée par des tempêtes cycloniques" }
          ],
          events: [
            { year: 1185, label: "Bataille navale de Dan-no-ura", importance: "haute", info: "Le clan Minamoto écrase les Taira, sonnant le glas de l'ère antique et ouvrant le Moyen Âge féodal des samouraïs." },
            { year: 1281, label: "Le typhon Kamikaze", importance: "haute", info: "Le 'vent divin' détruit la seconde armada d'invasion géante de Kubilai Khan, préservant l'indépendance de l'archipel." }
          ],
          relations: [
            { type: "conflit", with: "mongols", label: "Résistance militaire acharnée contre les deux tentatives d'invasions de Kubilai Khan", start: 1274, end: 1281 }
          ],
          liens: [
            { label: "Wikipédia — Histoire du Japon", url: "https://fr.wikipedia.org/wiki/Histoire_du_Japon" }
          ]
        },
        {
          id: "tibet-empire",
          label: "Empire du Tibet",
          period: "618 à 842",
          start: 618,
          end: 842,
          color: "#b8860b", // Bronze/Or ancien pour la lignée spirituelle et militaire du plateau tibétain
          isRiver: false,
          capitale: "Lhassa",
          description: "Redoutable et puissante puissance impériale d'altitude de la Haute Asie, rivale géopolitique directe de la dynastie Tang, dont l'unification territoriale a permis l'introduction et l'ancrage institutionnel du bouddhisme tibétain.",
          regimes: [
            { type: "Monarchie impériale militarisée (Dynastie Yarlung)", start: 618, end: 842, chef: "Songtsen Gampo, Trisong Detsen" }
          ],
          technologies: [
            "Cavalerie lourde d'altitude dotée d'armures de fer complètes maillées de réputation mondiale",
            "Création de l'alphabet et de l'écriture tibétaine classique (dérivée des modèles scripts de l'Inde)",
            "Architecture monumentale de forteresses de pierre sèche adaptées aux escarpements montagneux",
            "Codification de la médecine traditionnelle tibétaine (synthèse des savoirs indiens, chinois et perses)"
          ],
          croyances: [
            "Religion Bön (paganisme, chamanisme et animisme autochtone du plateau)",
            "Bouddhisme Vajrayāna (qui s'impose comme religion d'État au VIIIe s. après de vifs débats théologiques)"
          ],
          personnages: [
            { nom: "Songtsen Gampo", role: "33e roi de la dynastie et grand unificateur du plateau tibétain, fondateur de Lhassa", dates: "≈ 604 à 650" },
            { nom: "Padmasambhava (Guru Rinpoche)", role: "Maître spirituel mystique indien ayant converti les divinités locales et ancré le bouddhisme tantrique", dates: "VIIIe siècle" }
          ],
          guerres: [
            { nom: "Guerres sino-tibétaines", annee: 763, contre: "Chine (Tang & Song)", issue: "Prise et pillage temporaire de la capitale impériale chinoise Chang'an par les forces tibétaines" }
          ],
          events: [
            { year: 763, label: "Prise de Chang'an", importance: "haute", info: "Profitant des ravages exténuants de la révolte d'An Lushan en Chine, l'armée tibétaine s'empare de la capitale des Tang." },
            { year: 822, label: "Traité de paix de Lhassa", importance: "haute", info: "Signature d'un traité d'amitié et de délimitation des frontières gravé sur un pilier bilingue devant le temple du Jokhang." }
          ],
          relations: [
            { type: "conflit", with: "chine-tang-song", label: "Rivalités frontalières intenses et luttes armées pour le contrôle stratégique des oasis de la Route de la Soie", start: 618, end: 842 }
          ],
          liens: [
            { label: "Wikipédia — Empire du Tibet", url: "https://fr.wikipedia.org/wiki/Empire_du_Tibet" }
          ]
        },
        {
          id: "goryeo",
          label: "Corée médiévale (Dynastie Goryeo)",
          period: "918 à 1392",
          start: 918,
          end: 1392,
          color: "#bf360c", // Continuité parfaite avec le rouge brique de la lignée coréenne
          isRiver: false,
          capitale: "Gaegyeong (Kaesong)",
          description: "État unifié de la péninsule coréenne qui a donné son nom moderne au pays, caractérisé par un immense raffinement bouddhique, l'invention des caractères mobiles en métal et une résistance acharnée face aux vagues d'invasions mongoles.",
          regimes: [
            { type: "Monarchie centralisée de Goryeo", start: 918, end: 1170, chef: "Roi Taejo, Roi Gwangjong" },
            { type: "Dictature militaire du clan Choe (sous suzeraineté nominale royale)", start: 1170, end: 1258, chef: "Choe Chung-heon" },
            { type: "Période de subordination et d'alliances forcées avec la dynastie Yuan", start: 1258, end: 1392, chef: "Roi Gongmin" }
          ],
          technologies: [
            "Invention de l'imprimerie à caractères mobiles métalliques (le Jikji, imprimé en 1377, bien avant Gutenberg)",
            "Production d'élite du Céladon de Goryeo (céramique d'un vert de jade unique au monde)",
            "Gravures monumentales des tablettes de bois du Tripitaka Koreana (81 000 blocs de canons bouddhiques)",
            "Développement des premières manufactures de poudre à canon coréennes pour lutter contre la piraterie navale (Choe Museon)"
          ],
          croyances: [
            "Bouddhisme (religion d'État et ciment spirituel de la cour)",
            "Confucianisme (socle de l'administration et du système des examens impériaux Kwago)",
            "Chamanisme traditionnel persistant dans les rituels populaires"
          ],
          personnages: [
            { nom: "Roi Taejo (Wang Geon)", role: "Fondateur de la dynastie, il unifie les Trois Royaumes tardifs et pacifie la péninsule", dates: "877 à 943" },
            { nom: "Roi Gongmin", role: "Souverain réformateur ayant mené une politique d'expulsion des forces mongoles pour restaurer la souveraineté", dates: "1330 à 1374" }
          ],
          guerres: [
            { nom: "Invasions mongoles de la Corée", annee: 1231, contre: "Empire mongol", issue: "Résistance héroïque de la cour exilée sur l'île de Ganghwa, suivie d'un traité de paix et de vassalité" }
          ],
          events: [
            { year: 1231, label: "Première invasion mongole", importance: "haute", info: "L'armée de l'index mongol franchit le fleuve Yalu, déclenchant 30 ans de conflits dévastateurs." },
            { year: 1377, label: "Impression du Jikji", importance: "haute", info: "Plus ancien ouvrage conservé imprimé à l'aide de caractères métalliques mobiles." }
          ],
          relations: [
            { type: "conflit", with: "mongols", label: "Guerres de résistance et d'usure face aux armées de la dynastie Yuan", start: 1231, end: 1356 }
          ],
          liens: [
            { label: "Wikipédia — Goryeo", url: "https://fr.wikipedia.org/wiki/Goryeo" }
          ]
        },
        {
          id: "srivijaya",
          label: "Empire de Srivijaya",
          period: "650 à 1377",
          start: 650,
          end: 1377,
          color: "#009688", // Vert émeraude/maritime pour cette thalassocratie insulaire
          isRiver: false,
          capitale: "Palembang (Sumatra)",
          description: "Puissante thalassocratie bouddhiste basée sur l'île de Sumatra, dont le contrôle hégémonique des détroits de Malacca et de la Sonde en a fait le carrefour commercial obligatoire entre la Chine, l'Inde et le monde islamique.",
          regimes: [
            { type: "Thalassocratie impériale et confédération de comptoirs (Emporiums)", start: 650, end: 1377, chef: "Jayanasa, Balaputradewa" }
          ],
          technologies: [
            "Construction de flottes de commerce et de guerre adaptées à la navigation dans les archipels",
            "Maîtrise de la logistique de stockage et de redistribution des épices fines (clou de girofle, noix de muscade)",
            "Système d'écriture sur dalles de pierre et chartes de fidélité à l'empereur (Inscriptions de Kota Kapur)"
          ],
          croyances: [
            "Bouddhisme Vajrayāna et Mahāyāna (centre d'études théologiques mondial de premier ordre, fréquenté par le pèlerin chinois I Ching)"
          ],
          personnages: [
            { nom: "Roi Balaputradewa", role: "Souverain à l'apogée de l'empire, il noue des alliances majeures avec les dynasties indiennes", dates: "Règne vers 860" }
          ],
          guerres: [
            { nom: "Raid naval des Chola", annee: 1025, contre: "Empire Chola", issue: "Pillage des principaux ports de Srivijaya et affaiblissement durable du monopole maritime" }
          ],
          events: [
            { year: 683, label: "Expédition de Jayanasa", importance: "moyenne", info: "La plus ancienne inscription atteste de la fondation sacrée de l'empire après une marche militaire victorieuse." },
            { year: 1025, label: "Sac des ports de Sumatra", importance: "haute", info: "L'armada indienne du roi Rajendra Chola brise l'hégémonie économique de Srivijaya." }
          ],
          relations: [
            { type: "conflit", with: "chola", label: "Rivalités aiguës pour le contrôle des taxes marchandes de l'océan Indien", start: 1017, end: 1025 }
          ],
          liens: [
            { label: "Wikipédia — Srivijaya", url: "https://fr.wikipedia.org/wiki/Srivijaya" }
          ]
        }
      ]
    },
    {
      id: "afrique", label: "Afrique",
      civilizations: [
        {
          id: "mali", label: "Empire du Mali",
          period: "1235 à 1670", start: 1235, end: 1492,
          color: "#f39c12", isRiver: true, capitale: "Niani, Tombouctou",
          description: "Riche empire ouest-africain, célèbre pour son or et Tombouctou.",
          regimes: [{ type: "Empire", start: 1235, end: 1492, chef: "Soundiata, Mansa Moussa" }],
          technologies: ["Commerce transsaharien", "Universités (Sankoré)", "Architecture de terre"],
          croyances: ["Islam", "Traditions animistes"],
          personnages: [{ nom: "Mansa Moussa", role: "Empereur le plus riche", dates: "1280 à 1337" }],
          guerres: [],
          events: [
            { year: 1235, label: "Fondation par Soundiata", importance: "haute", info: "Bataille de Kirina." },
            { year: 1324, label: "Pèlerinage de Mansa Moussa", importance: "haute", info: "Éblouit Le Caire par son or." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Empire du Mali", url: "https://fr.wikipedia.org/wiki/Empire_du_Mali" }]
        },
        {
          id: "ghana-med",
          label: "Empire du Ghana",
          period: "≈ 500 à 1240",
          start: 500,
          end: 1240,
          color: "#c59b27", // Ocre doré harmonisé avec la lignée de l'or transsaharien
          isRiver: false,
          capitale: "Koumbi Saleh",
          description: "Le premier des grands empires du Soudan occidental, enrichi par le contrôle absolu du commerce de l'or et du sel entre l'Afrique subsaharienne et le Maghreb.",
          regimes: [
            { type: "Royaume / Empire du Wagadou", start: 500, end: 1240, chef: "Kaya Magan Cissé, Tunka Manin" }
          ],
          technologies: [
            "Monopoly d'État sur les pépites d'or (Bambouk)",
            "Armée de métier dotée d'armes en fer",
            "Système de taxes douanières centralisé",
            "Architecture de pierre sèche (quartier commerçant d'al-Bakri)"
          ],
          croyances: [
            "Religions traditionnelles soninkées (culte mythologique du serpent Bida)",
            "Introduction pacifique et encadrée de l'Islam sunnite (quartiers lettrés)"
          ],
          personnages: [
            { nom: "Tunka Manin", role: "Souverain à l'apogée de l'empire, célèbre pour la magnificence de sa cour", dates: "Règne vers 1062 à 1076" }
          ],
          guerres: [
            { nom: "Invasions almoravides", annee: 1076, contre: "Mouvement Almoravide", issue: "Pillage de la capitale et éclatement de l'hégémonie" }
          ],
          events: [
            { year: 1068, label: "Chronique d'al-Bakri", importance: "moyenne", info: "Le géographe arabe al-Bakri documente la puissance et l'opulence du Ghana." },
            { year: 1240, label: "Annexion par le Mali", importance: "haute", info: "Soundiata Keïta s'empare des derniers vestiges du Wagadou." }
          ],
          relations: [
            { type: "conflit", with: "mali", label: "Rivalités territoriales et absorption par le Mali naissant", start: 1230, end: 1240 }
          ],
          liens: [
            { label: "Wikipédia — Empire du Ghana", url: "https://fr.wikipedia.org/wiki/Empire_du_Ghana" }
          ]
        },
        {
          id: "songhai",
          label: "Empire Songhaï (Période médiévale)",
          period: "1464 à 1492 (Moyen Âge)",
          start: 1464,
          end: 1492,
          color: "#b83b1d", // Rouge brique / latérite pour la lignée sahélienne militaire
          isRiver: true,
          capitale: "Gao",
          description: "Puissant État riverain du Niger qui s'émancipe de la tutelle chancelante du Mali pour fonder la plus grande machine militaire du Sahel médiéval.",
          regimes: [
            { type: "Dynastie des Sonni", start: 1464, end: 1492, chef: "Sonni Ali Ber" }
          ],
          technologies: [
            "Flotte de guerre fluviale organisée sur le Niger",
            "Cavalerie lourde sahélienne",
            "Administration impériale décentralisée par provinces"
          ],
          croyances: [
            "Islam sunnite (religion politique des élites urbaines)",
            "Religions traditionnelles songhaïes (cultes des génies du fleuve et de la terre)"
          ],
          personnages: [
            { nom: "Sonni Ali Ber", role: "Roi conquérant, fondateur de l'assise territoriale impériale", dates: "Règne de 1464 à 1492" }
          ],
          guerres: [
            { nom: "Campagnes d'unification sahélienne", annee: 1468, contre: "Touaregs et forces du Mali", issue: "Conquêtes successives de Tombouctou et Djenné" }
          ],
          events: [
            { year: 1468, label: "Prise de Tombouctou", importance: "haute", info: "Sonni Ali Ber expulse les Touaregs et intègre la métropole intellectuelle à son empire." },
            { year: 1492, label: "Mort de Sonni Ali", importance: "haute", info: "Fin de l'ère médiévale songhaïe suite à la noyade mystérieuse du souverain." }
          ],
          relations: [
            { type: "conflit", with: "mali", label: "Guerres d'émancipation et conquêtes des territoires du Mali", start: 1464, end: 1492 }
          ],
          liens: [
            { label: "Wikipédia — Empire songhaï", url: "https://fr.wikipedia.org/wiki/Empire_songha%C3%AF" }
          ]
        },
        {
          id: "kongo",

          label: "Royaume du Kongo (Période médiévale)",
          period: "≈ 1390 à 1492 (Moyen Âge)",
          start: 1390,
          end: 1492,
          color: "#2e7d32", // Vert forêt pour la lignée de l'Afrique centrale
          isRiver: true,
          capitale: "Mbanza Kongo",
          description: "Puissant État hautement centralisé d'Afrique centrale, structuré autour du bassin du fleuve Congo avant l'arrivée des premiers explorateurs européens.",
          regimes: [
            { type: "Monarchie élective du Kongo", start: 1390, end: 1492, chef: "Nimi a Lukeni, Nzinga a Nkuwu" }
          ],
          technologies: [
            "Monnaie de coquillages standardisée (Nzimbu)",
            "Métallurgie avancée du fer et du cuivre",
            "Tissage complexe de fibres de raphia (utilisé comme étoffe et valeur d'échange)",
            "Réseau routier provincial et système de messagerie pour le Manikongo"
          ],
          croyances: [
            "Religions traditionnelles kikongo (cultes des esprits de la terre Nkisi et des ancêtres)",
            "Premiers contacts et introduction diplomatique du catholicisme (fin XVe s.)"
          ],
          personnages: [
            { nom: "Nimi a Lukeni", role: "Fondateur mythique et premier Manikongo", dates: "Règne vers 1390" },
            { nom: "Nzinga a Nkuwu", role: "Souverain qui accueille le navigateur Diogo Cão et initie les alliances", dates: "Règne vers 1470 à 1506" }
          ],
          guerres: [],
          events: [
            { year: 1390, label: "Fondation du Royaume", importance: "haute", info: "Alliance politique et mariage entre les chefferies Mbundu et Kongo, unifiant la région." },
            { year: 1482, label: "Arrivée de Diogo Cão", importance: "haute", info: "Le navigateur portugais entre en contact avec la cour du Manikongo, ouvrant l'ère des échanges transatlantiques." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Royaume du Kongo", url: "https://fr.wikipedia.org/wiki/Royaume_du_Kongo" }
          ]
        },
        {
          id: "zimbabwe-civilisation",
          label: "Civilisation du Grand Zimbabwe",
          period: "≈ 1100 à 1450",
          start: 1100,
          end: 1450,
          color: "#795548", // Brun pierre pour cette culture architecturale monumentale
          isRiver: false,
          capitale: "Grand Zimbabwe",
          description: "Splendide civilisation d'Afrique australe, célèbre pour ses citadelles de pierre sèche et son rôle de plaque tournante du commerce de l'or avec les comptoirs de l'océan Indien.",
          regimes: [
            { type: "Royaume Shona du Zimbabwe", start: 1100, end: 1450, chef: "—" }
          ],
          technologies: [
            "Architecture monumentale de pierre sèche sans mortier (la Grande Enceinte)",
            "Extraction, raffinage et métallurgie de l'or à grande échelle",
            "Élevage bovin intensif et gestion avancée des pâturages",
            "Joaillerie et artisanat de luxe (or, ivoire, stéatite)"
          ],
          croyances: [
            "Religion traditionnelle Shona (culte du dieu suprême Mwari et des esprits protecteurs royaux Mhondoro)"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: 1200, label: "Construction de la Grande Enceinte", importance: "haute", info: "Édification de murailles de granit s'élevant jusqu'à 11 mètres de haut sans aucun ciment." },
            { year: 1450, label: "Abandon du site", importance: "haute", info: "Déclin de la cité suite à la saturation des ressources locales et au déplacement des routes de l'or vers le nord." }
          ],
          relations: [],
          liens: [
            { label: "Wikipédia — Grand Zimbabwe", url: "https://fr.wikipedia.org/wiki/Grand_Zimbabwe" }
          ]
        }
      ]
    },
    {
      id: "amerique", label: "Amérique",
      civilizations: [
        {
          id: "maya", label: "Civilisation maya",
          period: "250 à 1500", start: 476, end: 1492,
          color: "#16a085", isRiver: false, capitale: "Tikal, Chichén Itzá",
          description: "Cités-États mésoaméricaines, maîtres de l'astronomie et de l'écriture.",
          regimes: [{ type: "Cités-États", start: 476, end: 1492, chef: "Rois divins (K'uhul Ajaw)" }],
          technologies: ["Écriture glyphique", "Calendrier précis", "Zéro mathématique", "Astronomie"],
          croyances: ["Polythéisme", "Sacrifices", "Cycles cosmiques"],
          personnages: [{ nom: "Pakal le Grand", role: "Roi de Palenque", dates: "603 à 683" }],
          guerres: [],
          events: [
            { year: 800, label: "Apogée classique", importance: "haute", info: "Grandes cités mayas." },
            { year: 900, label: "Effondrement classique", importance: "haute", info: "Abandon de nombreuses cités." }
          ],
          relations: [],
          liens: [{ label: "Wikipédia — Civilisation maya", url: "https://fr.wikipedia.org/wiki/Civilisation_maya" }]
        },
        {
          id: "tiwanaku",

          label: "Empire de Tiwanaku",
          period: "≈ 500 à 1000",
          start: 500,
          end: 1000,
          color: "#d4ac0d", // Continuité parfaite de la lignée andine ocre/or
          isRiver: false, // Centré sur le lac Titicaca
          capitale: "Tiwanaku",
          description: "Puissant empire théocratique et culturel des hautes terres andines, centré autour du lac sacré Titicaca, célèbre pour son architecture de pierre cyclopéenne et son immense influence religieuse sur le monde andin.",
          regimes: [
            { type: "Théocracie impériale andine", start: 500, end: 1000, chef: "—" }
          ],
          technologies: [
            "Architecture monumentale de blocs de pierre cyclopéens ajustés avec des agrafes en cuivre",
            "Système agricole surélevé des Sukakollos (champs surélevés protégeant les cultures du gel d'altitude)",
            "Métallurgie avancée du bronze arsenic et de l'or",
            "Logistique de transport de longue distance par caravanes de lamas à travers l'Altiplano"
          ],
          croyances: [
            "Culte du Dieu aux Sceptres (première représentation monumentale de Viracocha)",
            "Sacralisation cosmologique du lac Titicaca et des sommets montagneux (Apus)",
            "Rituels de décapitation et culte des têtes-trophées inscrits dans l'architecture sacrée"
          ],
          personnages: [],
          guerres: [],
          events: [
            { year: 600, label: "Apogée monumental de la cité", importance: "haute", info: "Construction de la Porte du Soleil et de la pyramide d'Akapana au cœur de la capitale." },
            { year: 1000, label: "Effondrement par mégasécheresse", importance: "haute", info: "Un changement climatique de longue durée assèche les Sukakollos, entraînant la famine et la dislocation de l'empire." }
          ],
          relations: [
            { type: "alliance", with: "huari", label: "Coexistence pacifique et partage des codes iconographiques et religieux", start: 600, end: 900 }
          ],
          liens: [
            { label: "Wikipédia — Tiwanaku", url: "https://fr.wikipedia.org/wiki/Tiwanaku" }
          ]
        },
        {
          id: "huari",
          label: "Empire Huari (Wari)",
          period: "≈ 600 à 1050",
          start: 600,
          end: 1050,
          color: "#ba9c07", // Nuance de la lignée andine pour la continuité visuelle
          isRiver: false,
          capitale: "Huari",
          description: "Le premier grand empire militaire et expansionniste des Andes centrales, qui unifia de vastes territoires grâce à un réseau routier pionnier et des centres administratifs fortifiés préfigurant l'organisation inca.",
          regimes: [
            { type: "Empire militaire et administratif centralisé", start: 600, end: 1050, chef: "—" }
          ],
          technologies: [
            "Réseau routier impérial andin planifié (qui servira de fondement direct au futur réseau inca)",
            "Ingénierie de terrasses agricoles suspendues (Andenes) pour maximiser la culture en pente",
            "Architecture administrative modulaire et forteresses de garnison standardisées (Pikillacta)",
            "Utilisation précoce des Quipus (système de cordlettes à nœuds pour la comptabilité et les données)"
          ],
          croyances: [
            "Culte du Dieu aux Sceptres (influencé par l'iconographie de Tiwanaku)",
            "Pratiques funéraires d'élite complexes avec momification et sépultures royales collectives cachées"
          ],
          personnages: [],
          guerres: [
            { nom: "Campagnes d'unification andine", annee: 650, contre: "Cultures régionales côtières et serrations", issue: "Victoire Huari, soumission et intégration administrative des territoires" }
          ],
          events: [
            { year: 600, label: "Fondation des centres provinciaux", importance: "haute", info: "Construction de métropoles fortifiées de garnison pour sécuriser les ressources impériales." },
            { year: 1050, label: "Abandon de la capitale", importance: "haute", info: " Fragmentation politique interne et révoltes régionales, entraînant l'effondrement de l'appareil d'État." }
          ],
          relations: [
            { type: "alliance", with: "tiwanaku", label: "Partage de la sphère d'influence religieuse et frontières stables", start: 600, end: 900 }
          ],
          liens: [
            { label: "Wikipédia — Culture Wari", url: "https://fr.wikipedia.org/wiki/Culture_Wari" }
          ]
        }
      ]
    }
  ]
};
