// Époque : Moyen Âge (476 - 1492)
export default [
  {
    id: "moyen-age",
    label: "Moyen Âge",
    start: 476,
    end: 1492,
    color: "#7c8bbf",
    description: "Empires médiévaux, essor fulgurant de l'Islam, féodalité européenne, grandes dynasties asiatiques et thalassocraties.",
    continents: [
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "byzance",
            trackId: "rome_orient", row: 1,
            label: "Empire byzantin",
            period: "395 à 1453", start: 476, end: 1453,
            color: "#8e44ad", isRiver: true, capitale: "Constantinople",
            description: "Le survivant de l'Empire romain d'Orient, forteresse imprenable de la chrétienté orthodoxe et phare culturel du Moyen Âge.",
            datesCles: [
              { annee: 532, evenement: "Sédition Nika", info: "Révolte matée dans le sang par Justinien et Théodora." },
              { annee: 537, evenement: "Sainte-Sophie", info: "Inauguration de la plus grande basilique chrétienne du monde." },
              { annee: 1054, evenement: "Schisme d'Orient", info: "Rupture définitive entre le Pape de Rome et le Patriarche de Constantinople." },
              { annee: 1204, evenement: "Sac de Constantinople", info: "Les croisés catholiques pillent la ville, brisant la puissance byzantine." },
              { annee: 1453, evenement: "Chute finale", info: "Mehmed II (Ottomans) s'empare de la ville. Fin de l'Empire romain." }
            ],
            dirigeants: [
              { titre: "Basileus (Empereur)", nom: "Justinien Ier", surnom: "Le Grand", debut: 527, fin: 565 },
              { titre: "Basileus", nom: "Basile II", surnom: "Le Bulgaroctone", debut: 976, fin: 1025 },
              { titre: "Dernier Empereur", nom: "Constantin XI", surnom: "Paléologue", debut: 1449, fin: 1453 }
            ],
            personnages: [
              { nom: "Impératrice Théodora", role: "Co-régente", description: "Ancienne actrice devenue l'épouse de Justinien, elle sauva le trône lors de la sédition Nika et influença les lois en faveur des femmes.", dates: "≈ 500 à 548", wikiUrl: "https://fr.wikipedia.org/wiki/Th%C3%A9odora_(imp%C3%A9ratrice)" }
            ],
            sciences: "Outre la préservation vitale de la littérature et de la philosophie grecque antique, Byzance a inventé l'une des armes les plus terrifiantes de l'histoire : le feu grégeois. Ce liquide incendiaire indextinguible, projeté par des siphons en bronze sur les navires ennemis, brûlait même sur l'eau. Sur le plan civil, Justinien compile le droit romain (Corpus Juris Civilis), fondement de la justice européenne moderne.",
            croyancesText: "Le Césaropapisme est la règle : l'Empereur (Basileus) est le lieutenant de Dieu sur terre, il nomme le Patriarche et convoque les conciles. La religion byzantine (le christianisme orthodoxe) est marquée par de violentes querelles théologiques, notamment la crise iconoclaste (destruction des images pieuses aux VIIIe-IXe siècles) et sa liturgie éclatante magnifiée par un art inégalé de la mosaïque d'or.",
            diplomatie: "Enfermée entre l'Europe barbare, les Bulgares, l'Islam naissant et les Turcs, Byzance survit pendant 1000 ans grâce à une diplomatie machiavélique (le terme 'byzantin' en est resté). Le 'Bureau des Barbares' orchestrait l'espionnage, les versements massifs d'or pour monter les ennemis les uns contre les autres, et l'éblouissement des ambassadeurs dans le Grand Palais de Constantinople.",
            guerres: [
              { nom: "Chute de Constantinople", annee: 1453, adversaires: ["Empire Ottoman (Mehmed II)"], allies: ["Génois, Vénitiens"], morts: "Massacre de la population", vainqueur: "Ottomans", consequences: "Choc mondial. La basilique Sainte-Sophie devient une mosquée. Les savants byzantins fuient vers l'Italie, déclenchant la Renaissance.", wikiUrl: "https://fr.wikipedia.org/wiki/Chute_de_Constantinople" }
            ],
            documentaires: [{ titre: "Arte : Byzance, l'Empire romain d'Orient", url: "https://fr.wikipedia.org/wiki/Empire_byzantin" }]
          },
          {
            id: "francs",
            trackId: "francs", row: 2,
            label: "Royaume franc",
            period: "481 à 987", start: 481, end: 987,
            color: "#2980b9", isRiver: false, capitale: "Aix-la-Chapelle",
            description: "De la conversion de Clovis au sacre de Charlemagne, le royaume qui a forgé la matrice féodale et chrétienne de l'Europe occidentale.",
            datesCles: [
              { annee: 496, evenement: "Baptême de Clovis", info: "L'alliance fondatrice entre la royauté franque et l'Église catholique." },
              { annee: 732, evenement: "Bataille de Poitiers", info: "Charles Martel stoppe l'expansion omeyyade (arabo-berbère) en Gaule." },
              { annee: 800, evenement: "Sacre de Charlemagne", info: "Le Pape Léon III le couronne Empereur d'Occident à Rome le jour de Noël." },
              { annee: 843, evenement: "Traité de Verdun", info: "Partage de l'Empire entre les petits-fils de Charlemagne (naissance de la France et de la Germanie)." }
            ],
            dirigeants: [
              { titre: "Roi des Francs (Mérovingien)", nom: "Clovis Ier", surnom: "", debut: 481, fin: 511 },
              { titre: "Empereur d'Occident (Carolingien)", nom: "Charlemagne", surnom: "Carolus Magnus", debut: 768, fin: 814 }
            ],
            personnages: [
              { nom: "Charles Martel", role: "Maire du Palais", description: "Grand-père de Charlemagne, il réorganise l'armée franque et arrête les Omeyyades.", dates: "690 à 741", wikiUrl: "https://fr.wikipedia.org/wiki/Charles_Martel" }
            ],
            sciences: "La 'Renaissance carolingienne' stoppe le déclin culturel post-romain. Charlemagne crée des écoles monastiques et impose la 'minuscule caroline', une écriture standardisée claire qui unifie la diffusion des textes en Europe (et dont dérive notre typographie moderne). Sur le plan militaire, l'adoption de l'étrier donne naissance à la redoutable chevalerie lourde franque.",
            croyancesText: "C'est l'alliance indéfectible du Trône et de l'Autel. Les Francs ne sont pas des hérétiques ariens mais des catholiques romains, devenant le bras armé de la Papauté. Charlemagne procède à des conversions forcées d'une brutalité extrême (massacre de Verden) contre les tribus germaniques païennes, instaurant la dîme obligatoire pour financer le clergé.",
            diplomatie: "L'administration impériale est assurée par un réseau de fidélités personnelles (vassalité) et contrôlée par les 'Missi Dominici' (les envoyés du maître) qui parcourent l'empire à cheval pour surveiller les comtes et rendre la justice. Le Traité de Verdun (843) scinde cette diplomatie en créant les futures frontières de la France, de l'Allemagne et de l'Italie.",
            guerres: [
              { nom: "Guerres saxonnes", annee: 772, adversaires: ["Tribus saxonnes païennes (Widukind)"], allies: [], morts: "Dizaines de milliers de Saxons", vainqueur: "Francs (Charlemagne)", consequences: "Soumission et baptême forcé de la Saxe, étendant la chrétienté jusqu'à l'Elbe.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_des_Saxons" }
            ],
            documentaires: [{ titre: "Charlemagne, le prince à cheval", url: "https://fr.wikipedia.org/wiki/Empire_carolingien" }]
          },
          {
            id: "france-capet",
            trackId: "france", row: 2,
            label: "France (Capétiens)",
            period: "987 à 1492", start: 987, end: 1492,
            color: "#3f6fd1", isRiver: false, capitale: "Paris",
            description: "La lente construction de l'État français, l'essor des cathédrales gothiques et le traumatisme fondateur de la Guerre de Cent Ans.",
            datesCles: [
              { annee: 987, evenement: "Hugues Capet", info: "Élection de Hugues Capet au trône, début d'une dynastie ininterrompue de 8 siècles." },
              { annee: 1214, evenement: "Bataille de Bouvines", info: "Philippe Auguste écrase une coalition impériale et anglaise, sauvant la nation." },
              { annee: 1307, evenement: "Arrestation des Templiers", info: "Philippe le Bel détruit le puissant ordre financier et militaire du Temple." },
              { annee: 1429, evenement: "Siège d'Orléans", info: "Jeanne d'Arc libère la ville et inverse le cours de la guerre de Cent Ans." }
            ],
            dirigeants: [
              { titre: "Roi de France", nom: "Philippe II", surnom: "Auguste", debut: 1180, fin: 1223 },
              { titre: "Roi de France", nom: "Louis IX", surnom: "Saint Louis", debut: 1226, fin: 1270 },
              { titre: "Roi de France", nom: "Charles VII", surnom: "Le Victorieux", debut: 1422, fin: 1461 }
            ],
            personnages: [
              { nom: "Jeanne d'Arc", role: "Chef de guerre et sainte", description: "Paysanne visionnaire qui mena victorieusement les troupes françaises contre l'Angleterre avant d'être brûlée vive à 19 ans.", dates: "1412 à 1431", wikiUrl: "https://fr.wikipedia.org/wiki/Jeanne_d'Arc" }
            ],
            sciences: "Le temps des bâtisseurs de cathédrales : la France invente l'art gothique (arc brisé, croisée d'ogives, arcs-boutants) permettant des bâtiments vertigineux baignés de lumière (Notre-Dame, Reims). Paris devient la capitale intellectuelle de la chrétienté avec la fondation de l'Université de la Sorbonne (1257).",
            croyancesText: "Le roi de France est sacré à Reims avec l'huile de la Sainte Ampoule, faisant de lui un 'Roi Thaumaturge' (censé guérir les écrouelles par simple toucher). La foi est omniprésente, poussant la monarchie à financer de grandes croisades en Orient, mais aussi à mener la brutale Croisade des Albigeois contre les hérétiques cathares dans le sud du royaume.",
            diplomatie: "Au départ, le roi de France n'est qu'un seigneur parmi d'autres, moins puissant que ses propres vassaux (comme les Ducs de Normandie). La diplomatie capétienne (notamment sous Philippe Auguste et Philippe le Bel) est une politique de centralisation féroce : mariages arrangés, confiscation de fiefs et guerres pour remplacer la féodalité éclatée par un État royal fort doté d'impôts permanents.",
            guerres: [
              { nom: "Guerre de Cent Ans", annee: 1337, adversaires: ["Royaume d'Angleterre", "Duché de Bourgogne"], allies: ["Royaume d'Écosse"], morts: "Des millions (guerre + peste noire)", vainqueur: "France (Dynastie des Valois)", consequences: "Les Anglais sont expulsés du continent (sauf Calais). L'armée française devient permanente et professionnelle (Francs-archers, artillerie de bureau).", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Cent_Ans" }
            ],
            documentaires: [{ titre: "La Guerre de Cent Ans (Série Documentaire)", url: "https://fr.wikipedia.org/wiki/Cap%C3%A9tiens" }]
          },
          {
            id: "serg",
            trackId: "serg", row: 3,
            label: "Saint-Empire Romain Germanique",
            period: "962 à 1492", start: 962, end: 1492,
            color: "#f57f17", isRiver: false, capitale: "Diètes itinérantes",
            description: "Un labyrinthe féodal d'Europe centrale, dirigé par un empereur élu, théâtre du grand choc de pouvoir entre le trône et la Papauté.",
            datesCles: [
              { annee: 962, evenement: "Sacre d'Otton Ier", info: "Création officielle du Saint-Empire à Rome." },
              { annee: 1077, evenement: "Pénitence de Canossa", info: "L'Empereur, excommunié, supplie le Pape nu-pieds dans la neige." },
              { annee: 1356, evenement: "La Bulle d'Or", info: "Fixe l'élection impériale par sept princes-électeurs." },
              { annee: 1450, evenement: "Invention de l'imprimerie", info: "Gutenberg invente la typographie à Mayence." }
            ],
            dirigeants: [
              { titre: "Empereur des Romains", nom: "Otton Ier", surnom: "Le Grand", debut: 936, fin: 973 },
              { titre: "Empereur", nom: "Frédéric Ier", surnom: "Barberousse", debut: 1152, fin: 1190 }
            ],
            personnages: [
              { nom: "Frédéric II", role: "Empereur", description: "Surnommé la 'Stupeur du monde', souverain polyglotte, scientifique et excommunié deux fois par la papauté.", dates: "1194 à 1250", wikiUrl: "https://fr.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_II_(empereur_du_Saint-Empire)" }
            ],
            sciences: "Le génie germanique culmine à la fin du Moyen Âge avec Johannes Gutenberg, qui invente l'imprimerie à caractères mobiles en métal, révolutionnant la diffusion du savoir mondial. Sur le plan économique, les cités marchandes du nord (Lübeck, Hambourg) fondent la Ligue Hanséatique, une superpuissance maritime commerciale dotée de sa propre flotte et de ses lois.",
            croyancesText: "L'histoire de l'Empire est déchirée par la 'Querelle des Investitures' : qui a le pouvoir suprême sur terre, le Pape ou l'Empereur ? L'Empereur se voit comme le successeur des Césars, chef de la chrétienté. Cette tension fracture l'Allemagne et l'Italie en deux factions haineuses (les Guelfes soutenant le Pape, les Gibelins soutenant l'Empereur).",
            diplomatie: "Le Saint-Empire n'est pas une nation, mais un patchwork ingouvernable de plus de 300 principautés, duchés, comtés et villes libres. L'Empereur, au lieu d'hériter du trône, doit être élu et corrompre massivement les Princes-Électeurs pour garder le pouvoir (qui finira par être monopolisé par la Maison des Habsbourg).",
            guerres: [
              { nom: "Guerres d'Italie / Ligue Lombarde", annee: 1176, adversaires: ["Communes d'Italie du Nord (Milan)"], allies: ["Princes germaniques fidèles"], morts: "Fortes pertes chevaleresques", vainqueur: "Ligue Lombarde (Paix de Constance)", consequences: "Frédéric Barberousse est vaincu à Legnano, l'Italie du Nord gagne son indépendance de fait face à l'Empire.", wikiUrl: "https://fr.wikipedia.org/wiki/Ligue_lombarde" }
            ],
            documentaires: [{ titre: "Le Saint-Empire, le cœur de l'Europe", url: "https://fr.wikipedia.org/wiki/Saint-Empire_romain_germanique" }]
          },
          {
            id: "angleterre",
            trackId: "angleterre", row: 4,
            label: "Angleterre",
            period: "927 à 1492", start: 927, end: 1492,
            color: "#c0392b", isRiver: false, capitale: "Londres",
            description: "Une île marquée par l'invasion normande, forgeant l'une des royautés les plus structurées d'Europe et les bases du parlementarisme moderne.",
            datesCles: [
              { annee: 1066, evenement: "Bataille de Hastings", info: "Guillaume le Conquérant écrase les Anglo-Saxons et prend la couronne." },
              { annee: 1170, evenement: "Meurtre de Thomas Becket", info: "L'archevêque de Cantorbéry est assassiné dans sa cathédrale sur ordre du roi." },
              { annee: 1215, evenement: "Magna Carta", info: "Les barons forcent Jean sans Terre à signer la 'Grande Charte', limitant l'absolutisme royal." },
              { annee: 1485, evenement: "Fin de la Guerre des Deux-Roses", info: "La Maison Tudor s'empare du trône." }
            ],
            dirigeants: [
              { titre: "Roi (Normand)", nom: "Guillaume", surnom: "Le Conquérant", debut: 1066, fin: 1087 },
              { titre: "Roi (Plantagenêt)", nom: "Richard Ier", surnom: "Cœur de Lion", debut: 1189, fin: 1199 },
              { titre: "Roi", nom: "Henri V", surnom: "", debut: 1413, fin: 1422 }
            ],
            personnages: [
              { nom: "Éléonore d'Aquitaine", role: "Reine", description: "L'une des femmes les plus puissantes d'Europe, reine de France puis d'Angleterre, mère de Richard Cœur de Lion.", dates: "1122 à 1204", wikiUrl: "https://fr.wikipedia.org/wiki/%C3%89l%C3%A9onore_d'Aquitaine" }
            ],
            sciences: "Le génie anglais est d'abord juridique et administratif. Ils conçoivent la 'Common Law' (jurisprudence remplaçant les lois féodales locales par un droit royal commun) et rédigent le Domesday Book (1086), le premier grand recensement de toutes les propriétés du royaume. Sur le plan militaire, ils adoptent l'arc long (longbow) gallois, une arme capable de percer les armures de la chevalerie française.",
            croyancesText: "Royaume farouchement catholique, l'Angleterre médiévale est marquée par un contrôle royal strict sur l'Église, provoquant des clashs violents (l'assassinat de l'archevêque Thomas Becket en 1170). Vers la fin du Moyen Âge, des théologiens comme John Wyclif (les Lollards) commencent à critiquer la richesse de Rome et traduisent la Bible en anglais, préparant le terrain au schisme anglican.",
            diplomatie: "La diplomatie anglaise (l'Empire Plantagenêt) est un paradoxe : le roi d'Angleterre possède la moitié de la France (Normandie, Aquitaine) et est donc, techniquement, le vassal du roi de France. Ce casse-tête diplomatique, couplé à des revendications dynastiques croisées, va dégénérer dans l'un des conflits les plus longs de l'histoire humaine : la Guerre de Cent Ans.",
            guerres: [
              { nom: "Guerre de Cent Ans", annee: 1337, adversaires: ["Royaume de France"], allies: ["Bourguignons (temporairement)"], morts: "Catastrophe démographique", vainqueur: "France", consequences: "L'Angleterre perd tous ses territoires continentaux. Repliée sur son île, elle sombre dans une violente guerre civile (la guerre des Deux-Roses).", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Cent_Ans" }
            ],
            documentaires: [{ titre: "L'Empire des Plantagenêts", url: "https://fr.wikipedia.org/wiki/Royaume_d%27Angleterre" }]
          },
          {
            id: "vikings",
            trackId: "scandinavie", row: 5,
            label: "Scandinavie (Vikings)",
            period: "793 à 1066", start: 793, end: 1066,
            color: "#00838f", isRiver: false, capitale: "Roskilde / Jelling",
            description: "Navigateurs, pirates et marchands d'élite nordiques qui ont pillé, colonisé et redessiné la carte politique de l'Europe médiévale.",
            datesCles: [
              { annee: 793, evenement: "Pillage de Lindisfarne", info: "Premier grand raid documenté sur un monastère anglais." },
              { annee: 911, evenement: "Fondation de la Normandie", info: "Le chef Rollon reçoit des terres du roi franc en échange de l'arrêt des pillages." },
              { annee: 1000, evenement: "Découverte de l'Amérique", info: "Leif Erikson atteint Terre-Neuve (Vinland) 5 siècles avant Colomb." },
              { annee: 1066, evenement: "Bataille de Stamford Bridge", info: "Mort d'Harald Hardrada, marquant la fin de l'ère viking." }
            ],
            dirigeants: [
              { titre: "Roi du Danemark et d'Angleterre", nom: "Knut", surnom: "Le Grand", debut: 1016, fin: 1035 },
              { titre: "Roi de Norvège", nom: "Harald", surnom: "Hardrada", debut: 1046, fin: 1066 }
            ],
            personnages: [
              { nom: "Ragnar Lodbrok", role: "Chef légendaire", description: "Héros mythique des sagas, il unifie les raids et aurait mené le premier sac de Paris en 845.", dates: "≈ IXe siècle", wikiUrl: "https://fr.wikipedia.org/wiki/Ragnar_Lodbrok" }
            ],
            sciences: "Leur suprématie navale absolue repose sur le 'Langskip' (Drakkar). Ces navires à bordages à clin, symétriques (on ne fait pas demi-tour, on inverse simplement les rameurs) et à très faible tirant d'eau, peuvent naviguer en plein océan et remonter les fleuves de la Seine ou de la Volga. Ils naviguent en haute mer grâce au 'compas solaire' et aux pierres de soleil (spath d'Islande) repérant la lumière polarisée par temps couvert.",
            croyancesText: "Le paganisme nordique est centré sur le Valhalla : seuls les guerriers mourant avec bravoure, l'arme à la main, rejoignent le palais d'Odin pour s'entraîner en vue du Ragnarök (la fin du monde). Le panthéon inclut Thor (dieu du tonnerre) et Freyja (fertilité). Aux Xe et XIe siècles, l'élite viking est politiquement christianisée pour s'intégrer au réseau diplomatique européen.",
            diplomatie: "Le terme 'Viking' n'est pas un peuple, mais une action (partir en expédition, 'i viking'). D'abord pilleurs d'abbayes, ils développent une diplomatie de l'extorsion systématique : le 'Danegeld', un tribut d'argent massif payé par les rois d'Angleterre et de France pour qu'ils s'en aillent. Ils se transforment ensuite en colons fondateurs d'États (Normandie, Rus' de Kiev, Danelaw).",
            guerres: [
              { nom: "Invasion de la Grande Armée païenne", annee: 865, adversaires: ["Royaumes Anglo-Saxons"], allies: [], morts: "Importantes destructions", vainqueur: "Vikings", consequences: "Chute des royaumes de Mercie et de Northumbrie, création du Danelaw (zone sous loi danoise en Angleterre).", wikiUrl: "https://fr.wikipedia.org/wiki/Grande_Arm%C3%A9e" }
            ],
            documentaires: [{ titre: "L'épopée des Vikings", url: "https://fr.wikipedia.org/wiki/%C3%82ge_des_Vikings" }]
          },
          {
            id: "rus-kiev",
            trackId: "rus", row: 6,
            label: "Rus' de Kiev",
            period: "862 à 1240", start: 862, end: 1240,
            color: "#1565c0", isRiver: true, capitale: "Kiev",
            description: "Matrice de la Russie moderne, gigantesque fédération slave encadrée par des guerriers-marchands scandinaves et illuminée par l'influence byzantine.",
            datesCles: [
              { annee: 862, evenement: "Arrivée de Riourik", info: "Le chef varangien (viking) prend le contrôle de Novgorod." },
              { annee: 988, evenement: "Le Baptême de Kiev", info: "Le prince Vladimir choisit la religion orthodoxe, liant son destin à Constantinople." },
              { annee: 1019, evenement: "L'Âge d'or", info: "Iaroslav le Sage rédige le premier code de lois et embellit Kiev." },
              { annee: 1240, evenement: "Invasion Mongole", info: "La Horde d'Or détruit Kiev, brisant l'unité de la Rus'." }
            ],
            dirigeants: [
              { titre: "Grand Prince de Kiev", nom: "Vladimir Ier", surnom: "Le Grand", debut: 980, fin: 1015 },
              { titre: "Grand Prince", nom: "Iaroslav", surnom: "Le Sage", debut: 1019, fin: 1054 }
            ],
            personnages: [
              { nom: "Olga de Kiev", role: "Princesse régente", description: "Venge l'assassinat de son mari par les Drevliens d'une manière effroyable, puis devient la première convertie au christianisme.", dates: "≈ 890 à 969", wikiUrl: "https://fr.wikipedia.org/wiki/Olga_Kievan" }
            ],
            sciences: "Leur réussite économique réside dans la maîtrise logistique de la 'Route des Varègues aux Grecs', un réseau de fleuves, de lacs et de portages terrestres (tirer les bateaux sur des rondins) reliant la mer Baltique à la mer Noire et Constantinople. Ils exportent vers le Sud le miel, la cire, les fourrures et les esclaves slaves (terme qui donnera le mot esclave en Europe).",
            croyancesText: "Initialement fidèles au paganisme slave (Peroun, dieu du tonnerre), la géopolitique dicte la conversion. Selon la Chronique des Temps Passés, Vladimir a étudié l'islam (rejeté car interdisant l'alcool), le judaïsme (rejeté car nation en exil) et le catholicisme romain (trop triste). Subjugués par l'or de Sainte-Sophie à Byzance, ils choisissent l'orthodoxie grecque.",
            diplomatie: "La Rus' de Kiev fonctionne comme une fédération de cités dirigées par les fils de la famille princière, selon un complexe système de succession tournante ('lestvitchnaïa') qui provoque des guerres civiles permanentes. Iaroslav le Sage marie ses filles aux rois de France (Anne de Kiev), de Norvège et de Hongrie, insérant la Russie dans la cour des grands d'Europe.",
            guerres: [
              { nom: "Guerre contre la Horde d'Or (Mongols)", annee: 1237, adversaires: ["Empire Mongol (Batu Khan)"], allies: [], morts: "Holocauste urbain et démographique", vainqueur: "Mongols", consequences: "Chute apocalyptique de Kiev. La Rus' est soumise au 'joug tatar' (versement d'impôts aux Khans) pour plus de deux siècles.", wikiUrl: "https://fr.wikipedia.org/wiki/Invasion_mongole_de_la_Rous'_de_Kiev" }
            ],
            documentaires: [{ titre: "Les origines de la Russie : La Rus' de Kiev", url: "https://fr.wikipedia.org/wiki/Rus%27_de_Kiev" }]
          },
          {
            id: "italie-maritime",
            trackId: "italie", row: 7,
            label: "Républiques Maritimes",
            period: "697 à 1492", start: 697, end: 1492,
            color: "#d32f2f", isRiver: false, capitale: "Venise, Gênes, Amalfi",
            description: "Génies du capitalisme primitif et maîtres des mers, ces cités-États d'Italie ont financé les croisades et raflé le commerce des épices d'Orient.",
            datesCles: [
              { annee: 828, evenement: "Reliques de Saint Marc", info: "Les Vénitiens volent le corps du saint à Alexandrie, justifiant leur suprématie spirituelle." },
              { annee: 1204, evenement: "4e Croisade", info: "Venise détourne la croisade pour saccager sa rivale commerciale, Constantinople." },
              { annee: 1298, evenement: "Bataille de Curzola", info: "Gênes écrase la flotte de Venise. Marco Polo y est fait prisonnier." },
              { annee: 1380, evenement: "Guerre de Chioggia", info: "Venise prend sa revanche sur Gênes et devient l'hégémonie absolue de Méditerranée." }
            ],
            dirigeants: [
              { titre: "Doge de Venise", nom: "Enrico Dandolo", surnom: "", debut: 1192, fin: 1205 }
            ],
            personnages: [
              { nom: "Marco Polo", role: "Marchand explorateur", description: "Vénitien ayant traversé l'Asie, devenu ambassadeur du Khan mongol. Son 'Livre des Merveilles' a fasciné l'Europe.", dates: "1254 à 1324", wikiUrl: "https://fr.wikipedia.org/wiki/Marco_Polo" }
            ],
            sciences: "Elles ont inventé la banque moderne, la comptabilité en partie double, la lettre de change (chèque), l'assurance maritime et le premier système de brevet industriel. L'Arsenal de Venise est l'usine la plus sophistiquée du Moyen Âge : avec un travail à la chaîne de charpentiers, de voiliers et de forgerons, ils pouvaient assembler et armer une galère de guerre complète en une seule journée.",
            croyancesText: "Malgré un catholicisme affiché de façade, le véritable dieu des Républiques est le commerce. La Papauté menaçait souvent Venise d'excommunication pour son commerce impie (bois, fer, esclaves) avec le monde musulman, ce à quoi les sénateurs vénitiens répondaient : 'Nous sommes d'abord Vénitiens, ensuite Chrétiens'.",
            diplomatie: "Plutôt que de conquérir de lourds empires continentaux, Venise et Gênes créent des 'empires de comptoirs'. Ce sont des réseaux ininterrompus de ports fortifiés (Crète, Chypre, Crimée) sécurisant la route des épices et de la soie. Elles sont gouvernées par un patriciat oligarchique (le Grand Conseil), élisant un Doge surveillé par le terrible et redouté Conseil des Dix.",
            guerres: [
              { nom: "Guerre de Saint-Sabas / Guerre de Chioggia", annee: 1256, adversaires: ["République de Gênes"], allies: ["Empire Byzantin (pour Gênes)"], morts: "Destruction des flottes de combat", vainqueur: "Venise", consequences: "Venise purge Gênes de la Méditerranée orientale et s'assure le monopole du commerce du poivre et de la soie.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Chioggia" }
            ],
            documentaires: [{ titre: "Venise : La Cité des Doges", url: "https://fr.wikipedia.org/wiki/R%C3%A9publique_de_Venise" }]
          },
          {
            id: "al-andalus",
            trackId: "iberie_sud", row: 8,
            label: "Al-Andalus",
            period: "711 à 1492", start: 711, end: 1492,
            color: "#1b5e20", isRiver: false, capitale: "Cordoue puis Grenade",
            description: "Splendeur islamique d'Espagne, pôle de tolérance religieuse et intellectuelle, traduisant et transmettant le savoir antique à l'Europe engourdie.",
            datesCles: [
              { annee: 711, evenement: "Conquête musulmane", info: "Les troupes arabo-berbères de Tariq ibn Ziyad écrasent les Wisigoths." },
              { annee: 929, evenement: "Califat de Cordoue", info: "L'émir Abd al-Rahman III se proclame Calife, coupant les ponts avec Bagdad." },
              { annee: 1031, evenement: "Chute du Califat", info: "L'empire implose en dizaines de petits royaumes rivaux (les Taïfas)." },
              { annee: 1212, evenement: "Las Navas de Tolosa", info: "Défaite décisive contre les rois catholiques." },
              { annee: 1492, evenement: "Chute de Grenade", info: "Fin de huit siècles de présence politique de l'Islam en péninsule Ibérique." }
            ],
            dirigeants: [
              { titre: "Calife Omeyyade", nom: "Abd al-Rahman III", surnom: "", debut: 912, fin: 961 },
              { titre: "Émir de Grenade", nom: "Boabdil", surnom: "", debut: 1482, fin: 1492 }
            ],
            personnages: [
              { nom: "Averroès (Ibn Rushd)", role: "Philosophe et Médecin", description: "Le grand commentateur d'Aristote, tentant de concilier rationalisme philosophique et révélation islamique.", dates: "1126 à 1198", wikiUrl: "https://fr.wikipedia.org/wiki/Averro%C3%A8s" },
              { nom: "Maïmonide", role: "Philosophe juif", description: "Grand médecin et théologien de la diaspora séfarade de Cordoue.", dates: "1138 à 1204", wikiUrl: "https://fr.wikipedia.org/wiki/Mo%C3%AFse_Ma%C3%AFmonide" }
            ],
            sciences: "Al-Andalus est le laboratoire de l'Europe. Ils introduisent les moulins à vent, le papier, l'astrolabe, et révolutionnent l'agriculture par de vastes réseaux d'irrigation (acclimatant le riz, les agrumes, le coton). La chirurgie fait un bond avec Abulcasis (créateur de centaines d'instruments médicaux). La bibliothèque de Cordoue compte 400 000 manuscrits (quand les monastères français en comptaient 400).",
            croyancesText: "Terre de la 'Convivencia' (coexistence). Sous le droit islamique, les Chrétiens et les Juifs ont le statut de 'Dhimmis' : ils sont libres de pratiquer leur foi et de se gouverner, en échange d'un impôt spécifique de soumission (la Jizya). Bien que n'étant pas une société égalitaire au sens moderne, cette tolérance a permis une effervescence théologique, poétique et scientifique unique au monde.",
            diplomatie: "La politique andalouse est minée par les clivages ethniques internes (Arabes de souche, Berbères d'Afrique du Nord, Slaves mercenaires, Espagnols convertis). Après la dislocation du Califat puissant, les roitelets des Taïfas préfèrent souvent s'allier avec les rois chrétiens du Nord et payer des tributs (Parias) pour faire la guerre à leurs frères musulmans voisins.",
            guerres: [
              { nom: "Bataille de Las Navas de Tolosa", annee: 1212, adversaires: ["Coalition des rois d'Espagne", "Croisés européens"], allies: ["Empire Almohade"], morts: "Boucherie dans les rangs almohades", vainqueur: "Chrétiens (Reconquista)", consequences: "La puissance militaire islamique est brisée définitivement. Le sud de l'Espagne s'ouvre à la reconquête chrétienne.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Las_Navas_de_Tolosa" }
            ],
            documentaires: [{ titre: "Al-Andalus, l'Espagne et le temps des califes", url: "https://fr.wikipedia.org/wiki/Al-Andalus" }]
          },
          {
            id: "reconquista-royaumes",
            trackId: "iberie_nord", row: 9,
            label: "Royaumes de la Reconquista",
            period: "718 à 1492", start: 718, end: 1492,
            color: "#b71c1c", isRiver: false, capitale: "Léon / Tolède / Burgos",
            description: "Les petits royaumes chrétiens réfugiés dans les montagnes du nord (Castille, Aragon) devenant peu à peu la féroce machine de guerre de l'Espagne moderne.",
            datesCles: [
              { annee: 718, evenement: "Bataille de Covadonga", info: "L'étincelle : Pélage repousse un raid musulman dans les montagnes des Asturies." },
              { annee: 1085, evenement: "Prise de Tolède", info: "Alphonse VI reprend l'ancienne capitale wisigothe au centre de la péninsule." },
              { annee: 1212, evenement: "Las Navas de Tolosa", info: "La coalition chrétienne écrase les troupes almohades." },
              { annee: 1469, evenement: "Le Mariage", info: "Isabelle de Castille épouse Ferdinand d'Aragon, unifiant géopolitiquement l'Espagne." },
              { annee: 1492, evenement: "La prise de Grenade", info: "Fin de la Reconquista chrétienne. (La même année, Colomb part pour les Amériques)." }
            ],
            dirigeants: [
              { titre: "Roi de Castille", nom: "Alphonse VIII", surnom: "Le Noble", debut: 1158, fin: 1214 },
              { titre: "Reine et Roi (Catholiques)", nom: "Isabelle & Ferdinand", surnom: "", debut: 1474, fin: 1504 }
            ],
            personnages: [
              { nom: "Le Cid (Rodrigo Díaz de Vivar)", role: "Chevalier / Mercenaire", description: "Héros de l'épopée espagnole, il servit autant les rois chrétiens que les émirs musulmans, se taillant une principauté à Valence.", dates: "1048 à 1099", wikiUrl: "https://fr.wikipedia.org/wiki/Rodrigo_D%C3%ADaz_de_Vivar" }
            ],
            sciences: "Leur génie est poliorcétique (guerre de siège) et naval. Aragon et la Catalogne développent une flotte puissante (les galères catalanes) et l'une des cartographies les plus précises du monde. En reprenant les villes musulmanes (comme Tolède), ils mettent la main sur les immenses bibliothèques arabes et créent l'École de traduction de Tolède, transférant les mathématiques et la philosophie vers le latin.",
            croyancesText: "C'est une société de frontière justifiant sa violence territoriale par la théologie de la Croisade perpétuelle. L'Église structure la société autour du culte de Santiago Matamoros (Saint Jacques le Tueur de Maures), patron protecteur, et de la création de violents ordres militaires nationaux de moines-soldats (Ordre de Calatrava et de Santiago) inspirés des Templiers.",
            diplomatie: "La Reconquista n'est pas un front uni continu. Les royaumes chrétiens (Léon, Castille, Navarre, Portugal, Aragon) se font la guerre entre eux autant qu'aux musulmans, via des successions dynastiques empoisonnées. Ce n'est qu'avec le mariage secret des 'Rois Catholiques' (Isabelle et Ferdinand) en 1469 que l'Espagne forge un État moderne, centralisé et diplomatiquement craint dans toute l'Europe.",
            guerres: [
              { nom: "Guerre de Grenade", annee: 1482, adversaires: ["Royaume nasride de Grenade (Boabdil)"], allies: ["Artillerie du Saint-Empire"], morts: "Fin de l'Al-Andalus", vainqueur: "Rois Catholiques", consequences: "Capitulation par traité. L'Espagne est réunifiée. Peu après, la monarchie expulsera les Juifs et forcera la conversion des musulmans (Morisques).", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Grenade" }
            ],
            documentaires: [{ titre: "La Reconquista : La fabrique de l'Espagne", url: "https://fr.wikipedia.org/wiki/Reconquista" }]
          }
        ]
      },
      {
        id: "asie", label: "Asie / Moyen-Orient",
        civilizations: [
          {
            id: "califat",
            trackId: "moyen_orient", row: 1,
            label: "Califat islamique",
            period: "632 à 1258", start: 632, end: 1258,
            color: "#27ae60", isRiver: true, capitale: "Damas / Bagdad",
            description: "La foudroyante expansion arabe unifiant le Moyen-Orient sous le sceau de l'Islam et fondant, sous les Abbassides de Bagdad, l'Âge d'Or scientifique.",
            datesCles: [
              { annee: 632, evenement: "Mort du Prophète", info: "Début des grandes conquêtes des Califes Bien-Guidés hors d'Arabie." },
              { annee: 661, evenement: "Dynastie Omeyyade", info: "Déplacement de la capitale à Damas (Syrie)." },
              { annee: 750, evenement: "Révolution Abbasside", info: "Fondation de la nouvelle dynastie et construction de Bagdad (la Ville Ronde)." },
              { annee: 1258, evenement: "Saccage de Bagdad", info: "Les armées mongoles détruisent la ville, fin politique de l'Empire arabe." }
            ],
            dirigeants: [
              { titre: "Calife Omeyyade", nom: "Mu'awiya Ier", surnom: "", debut: 661, fin: 680 },
              { titre: "Calife Abbasside", nom: "Haroun al-Rachid", surnom: "", debut: 786, fin: 809 }
            ],
            personnages: [
              { nom: "Al-Khwârizmî", role: "Mathématicien", description: "Savant de la Maison de la Sagesse, père fondateur de l'algèbre et introducteur des chiffres 'arabes' (indiens).", dates: "≈ 780 à 850", wikiUrl: "https://fr.wikipedia.org/wiki/Al-Khw%C3%A2rizm%C3%AE" },
              { nom: "Avicenne (Ibn Sina)", role: "Médecin et Philosophe", description: "Son 'Canon de la médecine' fut la bible médicale de l'Europe et de l'Islam jusqu'au XVIIe siècle.", dates: "980 à 1037", wikiUrl: "https://fr.wikipedia.org/wiki/Avicenne" }
            ],
            sciences: "C'est la civilisation de la synthèse et de la traduction. À Bagdad, la 'Maison de la Sagesse' réunit des savants traduisant en arabe le savoir perse, indien et grec. Ils inventent les hôpitaux publics (bimaristan), révolutionnent l'optique, raffinent la trigonométrie et la distillation en chimie, et diffusent l'usage de la pâte à papier acquise auprès des Chinois.",
            croyancesText: "L'Islam ('soumission à Dieu') est la matrice de l'Empire. Cependant, l'histoire du Califat est marquée par le schisme sanglant et définitif entre le Sunnisme (axé sur la tradition et l'élection) et le Chiisme (axé sur la descendance sanguine d'Ali, le gendre du prophète). L'empire est également jalonné de l'émergence de sectes millénaristes redoutables, comme les Assassins (Nizârites).",
            diplomatie: "La légitimité du souverain réside dans son titre de 'Commandeur des Croyants' (Calife). Au début, l'expansion est militaire, brisant l'Empire Perse Sassanide affaibli. Sous les Abbassides, le califat devient trop vaste à gouverner. Les gouverneurs de province (Émirs) et les vizirs perses ou turcs prennent le pouvoir réel, laissant au Calife un simple rôle de pape religieux à Bagdad.",
            guerres: [
              { nom: "Invasion Mongole et Sac de Bagdad", annee: 1258, adversaires: ["Empire Mongol (Hülegü Khan)"], allies: ["Contingents chrétiens géorgiens"], morts: "Entre 200 000 et 800 000 morts civils", vainqueur: "Mongols", consequences: "Le fleuve Tigre devient noir d'encre (livres jetés à l'eau) puis rouge de sang. Le Calife est mis à mort enroulé dans un tapis piétiné par des chevaux.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Bagdad_(1258)" }
            ],
            documentaires: [{ titre: "L'Islam : L'Empire de la Foi", url: "https://fr.wikipedia.org/wiki/Califat_abbasside" }]
          },
          {
            id: "mongols",
            trackId: "steppe_asie", row: 2,
            label: "Empire mongol",
            period: "1206 à 1368", start: 1206, end: 1368,
            color: "#e67e22", isRiver: false, capitale: "Karakorum",
            description: "La plus foudroyante conquête de l'histoire humaine, unifiant l'Eurasie de la Corée à la Hongrie sous le sabot de la cavalerie des steppes.",
            datesCles: [
              { annee: 1206, evenement: "Le Qurultay", info: "L'assemblée nomade élit Temüjin comme chef suprême sous le nom de Gengis Khan." },
              { annee: 1215, evenement: "Chute de Pékin", info: "Les armées mongoles s'emparent de la capitale de la Chine du Nord (dynastie Jin)." },
              { annee: 1241, evenement: "Victoires en Europe", info: "Les Mongols écrasent les armées polonaises, allemandes et hongroises." },
              { annee: 1258, evenement: "Sac de Bagdad", info: "Destruction du cœur de l'Empire arabo-musulman." }
            ],
            dirigeants: [
              { titre: "Khagan (Grand Khan)", nom: "Gengis Khan", surnom: "Le Fléau de Dieu", debut: 1206, fin: 1227 },
              { titre: "Khagan / Empereur de Chine", nom: "Kubilai Khan", surnom: "", debut: 1260, fin: 1294 }
            ],
            personnages: [
              { nom: "Subötaï", role: "Le Stratège", description: "Général suprême de Gengis Khan. Considéré comme l'un des plus grands tacticiens militaires de tous les temps, vainqueur dans plus de 65 batailles.", dates: "1176 à 1248", wikiUrl: "https://fr.wikipedia.org/wiki/Sub%C3%B6ta%C3%AF" }
            ],
            sciences: "Ils n'inventent ni architecture monumentale ni philosophie, mais révolutionnent la logistique militaire et civile. Ils créent le 'Yam', le premier système postal relais continental : un cavalier mongol porteur du sceau d'or (Païza) pouvait parcourir 300 km par jour. En asservissant des ingénieurs chinois et musulmans, ils maîtrisent l'artillerie de siège (trébuchets géants, bombes à poudre).",
            croyancesText: "Fidèles au Tengrisme chamanique (le Ciel éternel), les Mongols croient que leur destinée divine est de dominer le monde entier. Paradoxalement, c'est l'empire le plus tolérant du monde sur le plan religieux (Pax Mongolica) : chrétiens nestoriens, bouddhistes, taoïstes et musulmans siègent ensemble à la cour de Karakorum sans subir de persécution (tant qu'ils paient leurs taxes).",
            diplomatie: "La politique de la terreur pragmatique. Une ville qui se rend sans combattre est épargnée et taxée ; une ville qui résiste est rasée, ses habitants massacrés à l'exception des artisans qualifiés déportés en Mongolie. Après la mort de Gengis Khan, l'empire, devenu trop grand, se fragmente en quatre immenses Khanats (La Horde d'Or en Russie, l'Ilkhanat en Perse, Djaghataï en Asie centrale, et les Yuan en Chine).",
            guerres: [
              { nom: "Campagne de la Rus' et de l'Europe", annee: 1237, adversaires: ["Principautés russes", "Royaume de Hongrie", "Pologne"], allies: [], morts: "La moitié de la population russe", vainqueur: "Mongols (Batu Khan et Subötaï)", consequences: "Écrasement total des armées chevaleresques européennes (batailles de Legnica et Mohi). Seule la mort du Grand Khan Ögödei stoppe l'invasion mongole vers Vienne et Paris.", wikiUrl: "https://fr.wikipedia.org/wiki/Invasions_mongoles_de_l%27Europe" }
            ],
            documentaires: [{ titre: "Gengis Khan, le loup mongol", url: "https://fr.wikipedia.org/wiki/Empire_mongol" }]
          },
          {
            id: "chine-tang-song",
            trackId: "chine", row: 3,
            label: "Chine (Tang & Song)",
            period: "618 à 1279", start: 618, end: 1279,
            color: "#d35400", isRiver: true, capitale: "Chang'an, Kaifeng, Hangzhou",
            description: "Les ères dynastiques les plus brillantes de l'humanité médiévale, inventant les piliers de la modernité (imprimerie, boussole, monnaie papier, poudre à canon).",
            datesCles: [
              { annee: 618, evenement: "Fondation des Tang", info: "Âge d'or de l'expansionnisme militaire chinois et de la poésie classique." },
              { annee: 690, evenement: "Impératrice Wu", info: "Wu Zetian fonde sa propre dynastie éphémère (unique femme empereur régnante)." },
              { annee: 960, evenement: "Fondation des Song", info: "L'État devient un empire bureaucratique, urbain et marchand (Renaissance chinoise)." },
              { annee: 1279, evenement: "Chute des Song", info: "Détruite lors d'une terrible bataille navale (Yamen) contre la flotte de Kubilai Khan." }
            ],
            dirigeants: [
              { titre: "Empereur Tang", nom: "Taizong", surnom: "", debut: 626, fin: 649 },
              { titre: "Impératrice (Auguste et Céleste)", nom: "Wu Zetian", surnom: "", debut: 690, fin: 705 },
              { titre: "Empereur Song", nom: "Taizu", surnom: "", debut: 960, fin: 976 }
            ],
            personnages: [
              { nom: "Li Bai", role: "Le Poète immortel", description: "Le plus célèbre poète de l'histoire chinoise, génie taoïste, buveur invétéré, légende de la dynastie Tang.", dates: "701 à 762", wikiUrl: "https://fr.wikipedia.org/wiki/Li_Bai" }
            ],
            sciences: "Ils opèrent quatre révolutions technologiques mondiales (des siècles avant l'Europe) : la poudre à canon (utilisée pour les roquettes et lances de feu sous les Song), la boussole nautique (permettant une marine marchande géante), l'imprimerie (par blocs de bois gravés, multipliant la diffusion des savoirs) et l'invention du papier-monnaie (billet de banque) pour soutenir un boom économique pré-capitaliste colossal.",
            croyancesText: "Trois doctrines cohabitent et s'affrontent. Sous les Tang, le Bouddhisme, importé d'Inde via la Route de la Soie, devient ultrapuissant et florissant, s'intégrant à la cour. Sous la dynastie Song, en réaction, l'État finance le 'Néo-Confucianisme', une refonte rationnelle et morale très stricte, insistant sur le devoir civique, la loyauté absolue à l'État et la redéfinition du rôle de la femme (début de la coutume des pieds bandés).",
            diplomatie: "La cour Tang est la plus cosmopolite du monde (Chang'an compte un million d'habitants). Ils gèrent l'Eurasie en employant des généraux étrangers turcs, ce qui conduira au désastre de la Révolte d'An Lushan. Les Song, au contraire, méprisent la classe militaire et confient le pouvoir politique entier aux civils Lettrés, ayant réussi des concours impériaux extrêmement difficiles, créant une puissante méritocratie administrative.",
            guerres: [
              { nom: "Révolte d'An Lushan", annee: 755, adversaires: ["Généraux frontaliers rebelles"], allies: ["Tribus Ouïghours mercenaires"], morts: "Jusqu'à 30 millions de victimes (famines)", vainqueur: "Dynastie Tang (affaiblie)", consequences: "L'une des guerres les plus meurtrières de toute l'histoire humaine. L'Empire Tang est ruiné et perdra le contrôle de l'Asie Centrale.", wikiUrl: "https://fr.wikipedia.org/wiki/R%C3%A9volte_d'An_Lushan" }
            ],
            documentaires: [{ titre: "L'Âge d'or de la Chine (Série Arte)", url: "https://fr.wikipedia.org/wiki/Dynastie_Song" }]
          },
          {
            id: "tibet-empire",
            trackId: "tibet", row: 4,
            label: "Empire du Tibet",
            period: "618 à 842", start: 618, end: 842,
            color: "#b8860b", isRiver: false, capitale: "Lhassa",
            description: "Une redoutable puissance militaire d'altitude qui terrorisa l'Empire chinois, tout en se convertissant massivement au bouddhisme mystique.",
            datesCles: [
              { annee: 630, evenement: "Unification du Plateau", info: "Songtsen Gampo fonde l'empire et crée la ville de Lhassa." },
              { annee: 763, evenement: "Prise de Chang'an", info: "L'armée tibétaine profite d'une rébellion chinoise pour envahir et piller la capitale des Tang." },
              { annee: 842, evenement: "Effondrement", info: "L'assassinat du dernier roi, Langdarma, précipite le pays dans la guerre civile féodale." }
            ],
            dirigeants: [
              { titre: "Tsenpo (Empereur)", nom: "Songtsen Gampo", surnom: "", debut: 604, fin: 650 },
              { titre: "Tsenpo", nom: "Trisong Detsen", surnom: "", debut: 755, fin: 797 }
            ],
            personnages: [
              { nom: "Padmasambhava", role: "Maître tantrique", description: "Gourou indien invité au Tibet pour dompter par magie les démons locaux, fondateur spirituel du bouddhisme tibétain.", dates: "≈ VIIIe siècle", wikiUrl: "https://fr.wikipedia.org/wiki/Padmasambhava" }
            ],
            sciences: "Leur suprématie est militaire. Ils développent une cavalerie cataphractaire (lourde) terrifiante : le cavalier et sa monture sont entièrement recouverts d'armures de mailles métalliques. C'est sous cet empire que la langue tibétaine est dotée d'une écriture alphabetique et d'une grammaire complexe (adaptée du sanskrit indien) spécifiquement pour traduire massivement les textes sacrés bouddhistes d'Inde.",
            croyancesText: "À l'origine, le Tibet pratique le 'Bön', un animisme de haute montagne axé sur le culte des esprits protecteurs et de la royauté divine. Sous le patronage des rois (les Rois du Dharma), un débat épique (le Concile de Lhassa) est organisé entre des moines zen chinois et des moines mystiques indiens. Les rois choisissent l'école indienne (Vajrayana), qui va fusionner avec la magie locale pour créer le Bouddhisme tantrique tibétain.",
            diplomatie: "Situé stratégiquement sur le Toit du Monde, le Tibet verrouille les routes commerciales de la Soie sud. Pour sécuriser sa paix, le roi Songtsen Gampo force diplomatiquement la Chine (Princesse Wencheng) et le Népal (Princesse Bhrikuti) à lui donner des épouses royales, lesquelles auraient apporté avec elles les premières idoles bouddhistes au Tibet.",
            guerres: [
              { nom: "Guerres arabo-tibétaines / sino-tibétaines", annee: 751, adversaires: ["Empire Tang", "Califat Abbasside"], allies: ["Tribus Turques"], morts: "Pertes militaires frontalières", vainqueur: "Empire Tibétain", consequences: "L'Empire s'étend jusqu'au Turkestan et au Bengale, contrôlant un espace géopolitique immense avant de s'effondrer de l'intérieur.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_du_Tibet" }
            ],
            documentaires: [{ titre: "L'Histoire occulte du Tibet", url: "https://fr.wikipedia.org/wiki/Empire_du_Tibet" }]
          },
          {
            id: "japon-feodal",
            trackId: "japon", row: 5,
            label: "Japon féodal (Samouraïs)",
            period: "794 à 1492", start: 794, end: 1492,
            color: "#c0392b", isRiver: false, capitale: "Kyoto / Kamakura",
            description: "La lente agonie du pouvoir impérial et poétique de cour, remplacé par l'ascension brutale du Shogunat et de la caste des guerriers samouraïs.",
            datesCles: [
              { annee: 794, evenement: "Période Heian", info: "Installation de la capitale impériale à Kyoto. Âge d'or de la littérature de cour." },
              { annee: 1185, evenement: "Guerre de Genpei", info: "Le clan Minamoto écrase les Taira et fonde le Shogunat de Kamakura, un gouvernement militaire." },
              { annee: 1281, evenement: "Les vents divins (Kamikaze)", info: "Un typhon détruit providentiellement la monstrueuse flotte d'invasion mongole." },
              { annee: 1467, evenement: "Guerre d'Ōnin", info: "Destruction de Kyoto, plongeant le Japon dans un siècle de guerre civile totale (Sengoku Jidai)." }
            ],
            dirigeants: [
              { titre: "Premier Shogun", nom: "Minamoto no Yoritomo", surnom: "", debut: 1192, fin: 1199 },
              { titre: "Régent et Tyran", nom: "Hōjō Tokimune", surnom: "", debut: 1268, fin: 1284 }
            ],
            personnages: [
              { nom: "Murasaki Shikibu", role: "Femme de lettres", description: "Dame de la cour impériale de Heian, elle a écrit 'Le Dit du Genji', le premier grand roman psychologique de l'histoire de l'humanité.", dates: "≈ 973 à 1014", wikiUrl: "https://fr.wikipedia.org/wiki/Murasaki_Shikibu" }
            ],
            sciences: "Leur génie métallurgique culmine avec la forge du Nihonto (Katana). Une technique nécessitant de plier des milliers de fois deux aciers différents : un cœur d'acier doux et souple pour empêcher la lame de se casser, enveloppé d'une gaine d'acier dur (traité au carbone et trempé à l'argile) pour un tranchant indestructible et courbe. Architecturalement, ils maîtrisent les constructions en bois capables d'encaisser des séismes majeurs.",
            croyancesText: "Le Bouddhisme venu de Chine se divise. La secte Zen (pure méditation et autodiscipline) séduit totalement la caste guerrière, influençant l'art du sabre, les jardins de pierres et la cérémonie du thé. La noblesse ruinée et la paysannerie se tournent vers le Bouddhisme de la Terre Pure (le salut par la simple récitation du nom du Bouddha Amida). Le Shinto (religion animiste locale) persiste comme rite impérial exclusif.",
            diplomatie: "Le Japon est un isolat protégé par la mer. Le système politique du Bakufu (gouvernement sous la tente) est un système où l'Empereur (descendant de la déesse du Soleil Amaterasu) vit enfermé à Kyoto dans l'impuissance politique totale, mais conserve l'autorité divine. Le pouvoir réel est détenu par le Shogun, dictateur militaire héréditaire siégeant à Kamakura puis Muromachi.",
            guerres: [
              { nom: "Invasions mongoles", annee: 1274, adversaires: ["Empire Mongol (Kubilai Khan)"], allies: [], morts: "La flotte mongole est engloutie", vainqueur: "Japon (et les typhons)", consequences: "Le Japon, sauvé par les vents divins, se convainc de son invincibilité sacrée. Mais le coût défensif ruine le Shogunat de Kamakura, causant sa propre chute interne.", wikiUrl: "https://fr.wikipedia.org/wiki/Invasions_mongoles_du_Japon" }
            ],
            documentaires: [{ titre: "Le Japon : Histoire des samouraïs", url: "https://fr.wikipedia.org/wiki/Samoura%C3%AF" }]
          },
          {
            id: "goryeo",
            trackId: "coree", row: 6,
            label: "Corée (Dynastie Goryeo)",
            period: "918 à 1392", start: 918, end: 1392,
            color: "#bf360c", isRiver: false, capitale: "Gaegyeong",
            description: "Un riche empire bouddhiste de la péninsule asiatique, reconnu pour son céramisme d'art, qui dut survivre à un siècle d'occupation barbare.",
            datesCles: [
              { annee: 918, evenement: "Fondation", info: "Wang Geon unifie la péninsule et lui donne le nom de 'Goryeo' (qui deviendra le mot 'Corée')." },
              { annee: 1170, evenement: "Coup d'état militaire", info: "Les généraux massacrent les nobles civils et instaurent une dictature d'un siècle." },
              { annee: 1231, evenement: "Invasion Mongole", info: "Début d'une guerre de terre brûlée forçant le roi à se réfugier sur une île fortifiée." },
              { annee: 1377, evenement: "L'Imprimerie métallique", info: "Impression du Jikji avec des caractères mobiles en métal." }
            ],
            dirigeants: [
              { titre: "Taejo (Fondateur)", nom: "Wang Geon", surnom: "", debut: 918, fin: 943 },
              { titre: "Dictateur Militaire", nom: "Choe Chung-heon", surnom: "", debut: 1196, fin: 1219 }
            ],
            personnages: [
              { nom: "Gongmin", role: "Roi réformateur", description: "Lutte héroïquement et victorieusement pour se débarrasser de la tutelle mongole déclinante.", dates: "1351 à 1374", wikiUrl: "https://fr.wikipedia.org/wiki/Gongmin_(roi_de_Goryeo)" }
            ],
            sciences: "Le génie technique coréen devance le monde sur deux points. D'abord, l'imprimerie : les Coréens inventent et utilisent des caractères mobiles fondus en métal (bronze) 78 ans avant le premier livre de l'allemand Gutenberg. Ensuite, le Céladon, une céramique d'un éclat vert émeraude incrustée d'argile blanche et noire si parfaite que même les empereurs de la Chine Song l'achetaient à prix d'or.",
            croyancesText: "L'état dépense une fortune dans le patronage du Bouddhisme, y voyant une armure mystique pour protéger la nation. Lors des invasions mongoles, l'État a financé la gravure du Tripitaka Koreana : 81 258 panneaux de bois massifs contenant l'intégralité du canon bouddhiste gravé à l'envers, sans la moindre erreur, pour invoquer l'aide divine (ils sont toujours intacts aujourd'hui).",
            diplomatie: "Goryeo est un acteur pivot entre les puissantes dynasties nordiques mandchoues (Khitan, Jurchen) et la Chine. Son régime vacille lors des purges internes, passant d'un pouvoir civil à une junte militaire impitoyable (le clan Choe). Pour survivre à l'invasion mongole, la royauté coréenne devra se résoudre à marier ses princes aux princesses gengiskhanides pendant près d'un siècle.",
            guerres: [
              { nom: "Guerre Mongol-Goryeo", annee: 1231, adversaires: ["Empire Mongol"], allies: [], morts: "Massacre civil par la cavalerie mongole", vainqueur: "Empire Mongol", consequences: "Le Goryeo devient un État vassal des Mongols, qui l'utiliseront comme base forcée de construction navale pour attaquer le Japon.", wikiUrl: "https://fr.wikipedia.org/wiki/Invasions_mongoles_de_la_Cor%C3%A9e" }
            ],
            documentaires: [{ titre: "La dynastie Goryeo et le Tripitaka Koreana", url: "https://fr.wikipedia.org/wiki/Goryeo" }]
          },
          {
            id: "khmer",
            trackId: "indochine", row: 7,
            label: "Empire Khmer",
            period: "802 à 1431", start: 802, end: 1431,
            color: "#ff9800", isRiver: true, capitale: "Angkor",
            description: "Cité d'eau, de pierre et de jungle : le grand empire d'Indochine aux temples démesurés, anéanti par les caprices de la mousson et la guerre.",
            datesCles: [
              { annee: 802, evenement: "Fondation sur la montagne", info: "Jayavarman II se proclame roi-dieu de l'Univers sur le Mont Kulen." },
              { annee: 1150, evenement: "Angkor Wat", info: "Suryavarman II bâtit la plus grande structure religieuse mondiale en grès massif." },
              { annee: 1181, evenement: "La Revanche", info: "Jayavarman VII écrase les envahisseurs du Champa et bâtit la grande Angkor Thom." },
              { annee: 1431, evenement: "Le Sacre et la Fuite", info: "Invasion thaï (Ayutthaya). La cour khmère abandonne Angkor à la jungle." }
            ],
            dirigeants: [
              { titre: "Devaraja (Roi-Dieu)", nom: "Suryavarman II", surnom: "", debut: 1113, fin: 1150 },
              { titre: "Devaraja", nom: "Jayavarman VII", surnom: "Le Roi bâtisseur", debut: 1181, fin: 1218 }
            ],
            personnages: [],
            sciences: "Angkor n'est pas seulement un temple, c'est la plus grande mégalopole pré-industrielle du monde (environ un million d'habitants). Pour survivre à l'alternance mousson/sécheresse, ils créent une 'Cité Hydraulique' folle : des Barays. Des lacs artificiels de 8 km sur 2 km, construits non pas en creusant, mais en érigeant des digues titanesques, capables d'irriguer les rizières permettant 3 à 4 récoltes par an.",
            croyancesText: "Initialement fondé sur le culte de Shiva et Vishnu, le roi n'est pas seulement représentant, il 'est' le dieu (Devaraja). L'architecture des temples, comme Angkor Wat entouré de douves, est une réplique terrestre parfaite de la cosmologie hindoue (le mythique mont Meru entouré de l'océan cosmique). Plus tard, le roi Jayavarman VII impose le Bouddhisme du Grand Véhicule (Mahayana) en faisant sculpter d'immenses visages sereins sur ses tours (Bayon).",
            diplomatie: "L'Empire s'étend du Vietnam au Myanmar. Il relie ses provinces vassales par un réseau d'autoroutes de latérite surélevées pour échapper aux inondations, ponctuées de ponts à arches en encorbellement et d'hôpitaux royaux. La diplomatie extérieure est brutale, reposant sur l'utilisation d'infanterie légère naviguant sur le grand lac du Tonlé Sap, et de brigades massives d'éléphants de guerre.",
            guerres: [
              { nom: "Guerres Khméro-Chams", annee: 1177, adversaires: ["Royaume de Champa (Sud-Vietnam actuel)"], allies: [], morts: "Saccage initial d'Angkor", vainqueur: "Empire Khmer (Contre-attaque)", consequences: "Après un raid naval dévastateur des Chams remontant le lac, le prince khmer Jayavarman VII prend le pouvoir, envahit le Champa et le réduit en province.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_khmer" }
            ],
            documentaires: [{ titre: "Le génie hydraulique d'Angkor", url: "https://fr.wikipedia.org/wiki/Empire_khmer" }]
          },
          {
            id: "srivijaya",
            trackId: "indonesie", row: 8,
            label: "Empire de Srivijaya",
            period: "650 à 1377", start: 650, end: 1377,
            color: "#009688", isRiver: false, capitale: "Palembang (Sumatra)",
            description: "Puissante confédération maritime (Indonésie/Malaisie) tenant en otage le détroit de Malacca et s'enrichissant du commerce mondial des épices fines.",
            datesCles: [
              { annee: 683, evenement: "Serment de l'empereur", info: "L'inscription de Kedukan Bukit prouve l'organisation d'une marine de 20 000 hommes." },
              { annee: 850, evenement: "Pôle d'éducation", info: "Le pèlerin chinois I-Tsing y décrit une université bouddhiste accueillant plus de 1000 moines." },
              { annee: 1025, evenement: "Le raid indien", info: "L'empire Chola ravage 14 ports d'Indonésie, brisant le monopole naval de Srivijaya." }
            ],
            dirigeants: [
              { titre: "Maharaja", nom: "Balaputradewa", surnom: "", debut: 850, fin: 860 }
            ],
            personnages: [],
            sciences: "Empire de navigateurs d'élite, ils utilisent des 'outriggers' (bateaux à balanciers) cousus avec de la fibre de palme (sans clous de métal, qui rouilleraient sous les tropiques). Ils maîtrisent parfaitement la complexe logistique des vents de mousson, stockant les marchandises chinoises et indiennes dans d'énormes entrepôts pendant les mois d'attente du changement de vent.",
            croyancesText: "L'État parraine lourdement le Bouddhisme Vajrayana. Palembang devient le centre international obligatoire où les moines de l'Inde orientale, du Tibet et de la Chine viennent séjourner des années pour y étudier la traduction des écritures sacrées sanskrites avant de continuer leur voyage mystique.",
            diplomatie: "C'est une hégémonie fondée sur la 'Thalassocratie d'extorsion'. Srivijaya ne possède pas de terres arables. Son pouvoir consiste à positionner des flottes armées dans le détroit de Malacca et de la Sonde, forçant physiquement tous les navires marchands naviguant entre la Perse, l'Inde et la Chine à s'arrêter dans ses ports pour payer des taxes portuaires exorbitantes en or.",
            guerres: [
              { nom: "Invasion des Chola", annee: 1025, adversaires: ["Empire Chola (Inde du Sud)"], allies: [], morts: "Effondrement économique du réseau", vainqueur: "Empire Chola", consequences: "Exaspérés par les taxes de Srivijaya, les navires de guerre de l'Inde du sud attaquent par surprise et pillent la capitale, marquant le déclin de l'Indonésie médiévale.", wikiUrl: "https://fr.wikipedia.org/wiki/Srivijaya" }
            ],
            documentaires: [{ titre: "L'Empire marchand de Srivijaya", url: "https://fr.wikipedia.org/wiki/Srivijaya" }]
          },
          {
            id: "chola",
            trackId: "inde", row: 9,
            label: "Empire Chola",
            period: "848 à 1279", start: 848, end: 1279,
            color: "#e65100", isRiver: true, capitale: "Thanjavur",
            description: "La superpuissance tamoule de l'Inde du Sud, à la marine conquérante et à l'architecture monumentale inébranlable.",
            datesCles: [
              { annee: 848, evenement: "L'ascension", info: "Vijayalaya Chola s'empare de la ville de Thanjavur et fonde la dynastie impériale." },
              { annee: 1010, evenement: "Le Brihadisvara", info: "Achèvement du monumental temple impérial taillé dans un seul bloc de granit géant." },
              { annee: 1025, evenement: "Hégémonie navale", info: "La flotte Chola traverse le golfe du Bengale pour écraser l'Empire de Srivijaya." }
            ],
            dirigeants: [
              { titre: "Raja (Roi)", nom: "Rajaraja Ier", surnom: "Le Grand", debut: 985, fin: 1014 },
              { titre: "Raja", nom: "Rajendra Ier", surnom: "", debut: 1014, fin: 1044 }
            ],
            personnages: [],
            sciences: "Leur génie culmine avec la gestion hydraulique (réseau de canaux colossaux sur le fleuve Kaveri pour prévenir les inondations). Ils produisent la plus belle statuaire de bronze à cire perdue de l'humanité, particulièrement la figure du Shiva Nataraja (le danseur cosmique entouré de flammes), fondue d'une seule pièce et d'une fluidité de mouvement spectaculaire.",
            croyancesText: "Farouchement hindous de rite shivaïte, les souverains Chola construisent des temples-villes massifs (les Vimana), conçus pour fonctionner comme de véritables banques et centres de redistribution agricole. Ils réinvestissent l'immense butin de leurs guerres en Asie du Sud-Est pour recouvrir les toits de leurs temples d'or pur, transformant la caste des brahmanes (prêtres) en riche administrateurs d'État.",
            diplomatie: "C'est l'un des très rares empires de l'histoire indienne à se tourner vers la conquête navale étrangère. Ils entretiennent de formelles ambassades diplomatiques et commerciales jusqu'à la cour de la dynastie Song en Chine. Quand le monopole malaisien de Srivijaya menace leurs marchands en bloquant le détroit, l'empereur indien lève une flotte armée pour aller les détruire.",
            guerres: [
              { nom: "Campagnes navales d'Asie du Sud-Est", annee: 1025, adversaires: ["Empire de Srivijaya", "Royaumes malais"], allies: [], morts: "Pillage systématique", vainqueur: "Empire Chola", consequences: "Le roi Rajendra Ier s'empare de dizaines de ports exotiques et ramène l'empereur malais enchaîné en Inde.", wikiUrl: "https://fr.wikipedia.org/wiki/Dynastie_Chola" }
            ],
            documentaires: [{ titre: "L'art du bronze et l'Empire Chola", url: "https://fr.wikipedia.org/wiki/Dynastie_Chola" }]
          }
        ]
      },
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "ghana-med",
            trackId: "afrique_ouest", row: 1,
            label: "Empire du Ghana",
            period: "500 à 1240", start: 500, end: 1240,
            color: "#c59b27", isRiver: false, capitale: "Koumbi Saleh",
            description: "Le 'Pays de l'Or'. Premier grand empire subsaharien s'enrichissant follement en taxant la plus grande route caravanière du monde (le commerce transsaharien).",
            datesCles: [
              { annee: 1068, evenement: "Description d'al-Bakri", info: "Le géographe andalou décrit la cour royale : le roi siège couvert d'or massif." },
              { annee: 1076, evenement: "Pillage Almoravide", info: "Des tribus nomades militarisées venues de Mauritanie détruisent la capitale." },
              { annee: 1240, evenement: "L'annexion", info: "Les ruines du royaume sont absorbées par un nouvel empire émergeant : le Mali." }
            ],
            dirigeants: [
              { titre: "Kaya Magan (Roi de l'Or)", nom: "Tunka Manin", surnom: "", debut: 1062, fin: 1076 }
            ],
            personnages: [],
            sciences: "Ils ne produisent pas d'or, ils le prélèvent en transit. L'ingénierie de l'État repose sur l'invention de la douane impériale. Ils s'installent à la lisière absolue du désert du Sahara, là où les caravaniers nord-africains (venant d'arriver avec du sel et du cuivre) sont obligés de s'arrêter. Les fonctionnaires du roi prélèvent un impôt lourd sur chaque charge de dromadaire entrant et sortant du royaume.",
            croyancesText: "L'État est divisé en deux villes parallèles séparées de dix kilomètres : la ville royale, pratiquant la religion animiste traditionnelle (culte du serpent mythique Bida, garant de la fertilité en or des mines du sud) et la ville marchande, intégralement peuplée de commerçants arabo-berbères de confession musulmane sunnite dotés de multiples mosquées.",
            diplomatie: "Le pouvoir royal réside dans le monopole : toute pépite d'or brute trouvée sur le territoire appartient au roi, les marchands ne pouvant faire commerce que de poudre d'or. L'armée impériale, très lourdement armée grâce à la maîtrise de la fonte du fer, comptait selon les chroniqueurs jusqu'à 200 000 fantassins pour maintenir la paix commerciale sur l'immense savane.",
            guerres: [
              { nom: "Guerre Almoravide", annee: 1076, adversaires: ["Mouvement Almoravide"], allies: [], morts: "Inconnu", vainqueur: "Almoravides", consequences: "Chute de la capitale Koumbi Saleh. Le contrôle des routes de l'or est déstabilisé, fragmentant l'empire du Wagadou en petites principautés vassales.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_du_Ghana" }
            ],
            documentaires: [{ titre: "Le Ghana, l'Empire de l'Or Noir", url: "https://fr.wikipedia.org/wiki/Empire_du_Ghana" }]
          },
          {
            id: "mali",
            trackId: "afrique_ouest", row: 1,
            label: "Empire du Mali",
            period: "1235 à 1670", start: 1235, end: 1492,
            color: "#f39c12", isRiver: true, capitale: "Niani / Tombouctou",
            description: "Sur les cendres du Ghana, le conquérant épique Soundiata fonde un État immense, mondialement célèbre pour le pèlerinage fastueux de l'homme le plus riche de l'Histoire.",
            datesCles: [
              { annee: 1235, evenement: "Bataille de Kirina", info: "Victoire fondatrice de Soundiata Keïta contre le roi forgeron Soumaoro Kanté." },
              { annee: 1236, evenement: "Charte du Manden", info: "Proclamation de l'une des toutes premières déclarations des droits humains orales (abolition de l'esclavage interne)." },
              { annee: 1324, evenement: "Pèlerinage à La Mecque", info: "L'empereur Mansa Moussa dépense tellement d'or en Égypte qu'il y provoque une hyper-inflation." }
            ],
            dirigeants: [
              { titre: "Mansa (Roi des Rois)", nom: "Soundiata Keïta", surnom: "Le Lion du Mandingue", debut: 1235, fin: 1255 },
              { titre: "Mansa", nom: "Moussa Ier", surnom: "Kankou Moussa", debut: 1312, fin: 1337 }
            ],
            personnages: [],
            sciences: "Le Mali développe l'architecture en banco (mélange de terre argileuse, de paille et de beurre de karité) avec des armatures en bois palmier pointant hors des murs de mosquées spectaculaires (comme à Djenné) permettant aux maçons de crépir les murs chaque année après les pluies estivales. Tombouctou devient une véritable université (Sankoré) abritant des milliers de manuscrits (mathématiques, astronomie, droit islamique).",
            croyancesText: "L'islam est la religion officielle de la cour et de l'administration des villes marchandes, permettant d'intégrer le Mali dans le système diplomatique et bancaire musulman nord-africain. Cependant, l'immense majorité des populations rurales de l'empire reste profondément attachée aux religions animistes traditionnelles et au culte des ancêtres fondateurs.",
            diplomatie: "La légende rapporte qu'avant Mansa Moussa, l'empereur Aboubakri II aurait abdiqué son trône en 1311 pour lancer une flotte de deux mille navires afin de traverser l'Océan Atlantique (qui ne sont jamais revenus). L'empereur Mansa Moussa a financé un afflux massif de savants andalous et égyptiens vers Tombouctou, y développant un puissant soft-power intellectuel.",
            guerres: [
              { nom: "Bataille de Kirina", annee: 1235, adversaires: ["Empire Sosso (Soumaoro Kanté)"], allies: ["Coalition des tribus mandingues"], morts: "Pertes militaires lourdes", vainqueur: "Mali", consequences: "Soundiata prend le pouvoir absolu, rédige la constitution de l'empire et fixe les droits de la confrérie des chasseurs.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Kirina" }
            ],
            documentaires: [{ titre: "Soundiata Keïta, la naissance de l'Empire du Mali", url: "https://fr.wikipedia.org/wiki/Empire_du_Mali" }]
          },
          {
            id: "songhai",
            trackId: "afrique_ouest", row: 1,
            label: "Empire Songhaï",
            period: "1464 à 1591", start: 1464, end: 1492,
            color: "#b83b1d", isRiver: true, capitale: "Gao",
            description: "Anciens vassaux du Mali s'émancipant pour fonder le plus vaste et le plus militarisé des empires de l'histoire de l'Afrique subsaharienne occidentale.",
            datesCles: [
              { annee: 1464, evenement: "Prise de pouvoir", info: "Sonni Ali Ber s'empare du trône et entame des conquêtes fulgurantes et sans merci." },
              { annee: 1468, evenement: "Prise de Tombouctou", info: "L'armée Songhaï chasse les Touaregs et pille brutalement la ville des lettrés." },
              { annee: 1473, evenement: "Siège de Djenné", info: "Chute de la cité-État marchande imprenable après un long blocus naval sur le Niger." }
            ],
            dirigeants: [
              { titre: "Empereur (Sonni)", nom: "Ali Ber", surnom: "Ali le Grand / Le Tyran", debut: 1464, fin: 1492 }
            ],
            personnages: [],
            sciences: "Leur suprématie est tactique. L'Empire possède la première véritable flotte de guerre d'Afrique de l'Ouest : des milliers de pirogues immenses patrouillant sur les 2000 kilomètres du fleuve Niger. L'armée de terre, ultra-organisée, est scindée entre une infanterie lourde, une cavalerie en armure matelassée et un service de renseignement et de logistique structuré comme un état-major moderne.",
            croyancesText: "Contrairement à l'empire du Mali, Sonni Ali Ber déteste le clergé musulman de Tombouctou qu'il accuse de trahison. Il règne comme un monarque animiste magicien traditionnel, sacrifiant ouvertement et ne gardant de l'Islam qu'un vernis utilitaire, ce qui lui valut d'être maudit et traité de 'sanguinaire païen' par tous les chroniques musulmans de l'époque (Tarikh al-Sudan).",
            diplomatie: "L'État est d'une efficacité fiscale redoutable. Le territoire est divisé en provinces dirigées par des 'Fari' (gouverneurs) amovibles nommés directement par l'empereur, détruisant l'ancien système de chefferies héréditaires du Mali. Un système de poids et mesures uniformisé garantit les rentrées d'impôts.",
            guerres: [
              { nom: "Expansion contre les royaumes Mossis", annee: 1483, adversaires: ["Cavaleries Mossis"], allies: [], morts: "Inconnu", vainqueur: "Songhaï", consequences: "Sécurisation totale du sud du fleuve Niger, repoussant les redoutables pillards Mossis hors des zones agricoles vitales.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_songha%C3%AF" }
            ],
            documentaires: [{ titre: "La suprématie de l'Empire Songhaï", url: "https://fr.wikipedia.org/wiki/Empire_songha%C3%AF" }]
          },
          {
            id: "kongo",
            trackId: "afrique_centrale", row: 2,
            label: "Royaume du Kongo",
            period: "1390 à 1914", start: 1390, end: 1492,
            color: "#2e7d32", isRiver: true, capitale: "Mbanza Kongo",
            description: "État hautement centralisé du bassin du Congo, riche en cuivre et en ivoire, bouleversé par le choc diplomatique de l'arrivée des navires portugais à la fin du Moyen Âge.",
            datesCles: [
              { annee: 1390, evenement: "Fondation mythique", info: "L'union politique entre le forgeron chasseur Nimi et les populations locales." },
              { annee: 1482, evenement: "Arrivée de Diogo Cão", info: "Le premier explorateur européen franchit l'embouchure du fleuve Congo." },
              { annee: 1491, evenement: "Le grand baptême", info: "Le roi Nzinga a Nkuwu se convertit volontairement au catholicisme (prenant le nom de João Ier)." }
            ],
            dirigeants: [
              { titre: "Manikongo (Roi)", nom: "Nimi a Lukeni", surnom: "", debut: 1390, fin: 1420 },
              { titre: "Manikongo", nom: "Nzinga a Nkuwu", surnom: "João Ier du Kongo", debut: 1470, fin: 1506 }
            ],
            personnages: [],
            sciences: "Le Kongo produit des œuvres d'artisanat si complexes qu'elles impressionneront les rois d'Europe : les velours du Kasaï, des étoffes royales tissées avec du raphia. L'économie est monétarisée avec une incroyable précision grâce au 'Nzimbu', des petits coquillages pêchés exclusivement sur l'île de Luanda (appartenant personnellement au roi), faisant office de monnaie divisionnaire contrôlée par l'État pour éviter l'inflation.",
            croyancesText: "Avant le baptême royal de 1491, le roi est le maître des esprits 'Nkisi' : des forces de la nature et de l'au-delà contenues dans des statues magiques (les fétiches à clous) capables de guérir ou de foudroyer les criminels. Le passage au christianisme par les souverains n'est pas vu comme une soumission, mais comme l'absorption d'une nouvelle 'magie blanche' très puissante venue de l'océan.",
            diplomatie: "À la fin de notre période médiévale, l'arrivée des Portugais déclenche une diplomatie d'égal à égal rarissime dans l'histoire coloniale. Le roi du Kongo et le roi du Portugal s'envoient des ambassades, s'appellent 'Frères' dans leurs correspondances royales. Le Kongo expédie de l'ivoire et des captifs de guerre (début de la traite), en échange de maîtres d'école, d'imprimeurs, de tailleurs de pierre et d'arquebuses.",
            guerres: [
              { nom: "Unification du bassin", annee: 1400, adversaires: ["Chefferies Mbundu"], allies: [], morts: "Faibles", vainqueur: "Royaume du Kongo", consequences: "L'intégration des petits États voisins fait du Kongo l'entité politique la plus étendue d'Afrique centrale précoloniale.", wikiUrl: "https://fr.wikipedia.org/wiki/Royaume_du_Kongo" }
            ],
            documentaires: [{ titre: "Le Royaume du Kongo : la Croix et le Nzimbu", url: "https://fr.wikipedia.org/wiki/Royaume_du_Kongo" }]
          },
          {
            id: "zimbabwe-civilisation",
            trackId: "afrique_australe", row: 3,
            label: "Civilisation du Grand Zimbabwe",
            period: "1100 à 1450", start: 1100, end: 1450,
            color: "#795548", isRiver: false, capitale: "Grand Zimbabwe",
            description: "Au milieu de la brousse, un royaume d'architectes mégalithiques bâtissant des murailles colossales de granit sans aucun ciment, enrichi par des mines d'or abondantes.",
            datesCles: [
              { annee: 1100, evenement: "Fondation du royaume", info: "L'ethnie Shona abandonne Mapungubwe pour s'installer plus au nord, au Zimbabwe." },
              { annee: 1250, evenement: "Apogée d'Or", info: "La ville compte jusqu'à 20 000 habitants (la plus grande d'Afrique australe précoloniale)." },
              { annee: 1450, evenement: "Abandon mystérieux", info: "Épuisement écologique du sol et migration du pouvoir vers l'Empire du Monomotapa." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Le mot Zimbabwe signifie 'Les maisons de pierre' (Dzimba Dza Mabwe). Leurs architectes ont conçu la 'Grande Enceinte', un mur elliptique de 11 mètres de haut et 250 mètres de long, composé d'un million de blocs de granit retaillés et ajustés en chevron avec une telle perfection technique qu'ils n'ont besoin d'aucun mortier ou liant d'argile pour tenir debout. Ils maîtrisaient le coulage de l'or par gravitaire.",
            croyancesText: "La religion Shona s'articule autour de Mwari, le dieu créateur universel, et d'un culte assidu des esprits (Mhondoro). À l'intérieur de l'Enceinte se trouve une mystérieuse tour conique massive de 9 mètres, symbole possible de la fécondité masculine ou du grenier à grain cosmique garantissant l'abondance de l'Empire.",
            diplomatie: "Ils pratiquent une politique d'exportation discrète mais massive. Isolés à l'intérieur des terres, les monarques expédient l'or fondu, l'ivoire et des peaux rares par caravanes de porteurs jusqu'aux cités commerciales arabo-swahilies de la côte de l'Océan Indien (comme Kilwa au Mozambique). En échange, l'archéologie a retrouvé dans les ruines du Zimbabwe des assiettes de porcelaine Ming chinoise, des perles indiennes en verre et du corail.",
            guerres: [],
            documentaires: [{ titre: "Le mystère du Grand Zimbabwe", url: "https://fr.wikipedia.org/wiki/Grand_Zimbabwe" }]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "maya",
            trackId: "mesoamerique", row: 1,
            label: "Civilisation maya (Époque classique)",
            period: "250 à 900", start: 476, end: 1492,
            color: "#16a085", isRiver: false, capitale: "Tikal, Calakmul, Copán",
            description: "Les 'Grecs de l'Amérique' : une constellation de cités-États en guerre perpétuelle dans la jungle, dotées des mathématiques et de l'astronomie les plus précises du monde.",
            datesCles: [
              { annee: 562, evenement: "Défaite de Tikal", info: "La reine de la superpuissance rivale (Calakmul) écrase et sacrifie le roi de Tikal." },
              { annee: 695, evenement: "Revanche de Tikal", info: "Tikal bat définitivement Calakmul, amorçant l'ultime essor architectural maya." },
              { annee: 830, evenement: "L'Effondrement", info: "Début d'une sécheresse systémique couplée à une surpopulation causant l'abandon des grandes capitales." },
              { annee: 1000, evenement: "Période postclassique", info: "Renaissance dans la péninsule aride du Yucatán autour de Chichén Itzá et Mayapán." }
            ],
            dirigeants: [
              { titre: "K'uhul Ajaw (Saint Seigneur)", nom: "Pakal", surnom: "Le Grand (Roi de Palenque)", debut: 615, fin: 683 }
            ],
            personnages: [
              { nom: "Jasaw Chan K'awiil Ier", role: "Roi de Tikal", description: "Le grand souverain qui releva Tikal de la ruine, écrasa ses ennemis et finança les immenses temples jumeaux de la cité.", dates: "Règne de 682 à 734", wikiUrl: "https://fr.wikipedia.org/wiki/Jasaw_Chan_K%27awiil_I" }
            ],
            sciences: "Leur système d'écriture (les glyphes mayas) est l'unique véritable alphabet complet des Amériques précolombiennes. Inventeurs du concept mathématique du Zéro (base 20), ils atteignent une précision astronomique terrifiante sans télescope : ils calculent l'année solaire à 365,242 jours (soit une erreur de 17 secondes par rapport au calcul satellitaire moderne) et prédisent avec exactitude les éclipses et les cycles de Vénus.",
            croyancesText: "Le cosmos Maya nécessite un sang royal régulier pour ne pas s'arrêter. Les souverains ('K'uhul Ajaw') pratiquent l'autosacrifice rituel (saignée de la langue avec des cordes épineuses ou du sexe avec des épines de raie) pour ouvrir des portails de communication avec les divinités (le Serpent-Vision). Les prisonniers de guerre capturés sont torturés puis décapités ou précipités en bas des grands temples-pyramides à degrés.",
            diplomatie: "Il n'y a jamais eu d'Empire Maya. La jungle abrite un écosystème géopolitique à la grecque, avec près de 60 royaumes et cités-États s'alliant ou se massacrant en une 'guerre des Étoiles' (guerres déclarées selon la position de Vénus). Tikal (soutenue par l'héritage de Teotihuacán) et Calakmul (l'Empire du Serpent) passent des siècles dans une guerre froide et chaude de procuration, épuisant finalement les ressources de la forêt.",
            guerres: [
              { nom: "Première et Seconde Guerre Tikal-Calakmul", annee: 537, adversaires: ["Cité-État de Calakmul (et vassaux)"], allies: ["Cité-État de Tikal (et vassaux)"], morts: "Très lourd tribut en élites décapitées", vainqueur: "Calakmul (puis Tikal)", consequences: "Un basculement constant de l'hégémonie Maya. La guerre épuise la paysannerie obligée de construire de massives fortifications dans la forêt tropicale.", wikiUrl: "https://fr.wikipedia.org/wiki/Royaume_du_Serpent" }
            ],
            documentaires: [{ titre: "L'apocalypse des Mayas", url: "https://fr.wikipedia.org/wiki/Civilisation_maya" }]
          },
          {
            id: "tiwanaku",
            trackId: "andes", row: 2,
            label: "Empire de Tiwanaku",
            period: "500 à 1000", start: 500, end: 1000,
            color: "#d4ac0d", isRiver: false, capitale: "Tiwanaku (Bolivie)",
            description: "Sur les rives glaciales du lac sacré Titicaca, un empire monstrueux de pierre s'élève à près de 4000 mètres d'altitude, fondant la grande mythologie des montagnes andines.",
            datesCles: [
              { annee: 500, evenement: "Pôle régional", info: "L'agglomération devient un centre administratif et cultuel urbain dépassant les 30 000 habitants." },
              { annee: 600, evenement: "Monuments monolithes", info: "Érection de la mystérieuse Porte du Soleil et de l'Akapana." },
              { annee: 1000, evenement: "La Méga-Sécheresse", info: "L'effondrement hydrologique assèche l'agriculture et tue l'Empire." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Survivre au gel et à l'aridité d'une telle altitude est un miracle agronomique : ils inventent les 'Sukakollos' (champs surélevés). Ces monticules de terre, cernés de canaux d'eau, absorbent la chaleur du soleil andin le jour et créent un brouillard chaud la nuit, empêchant les cultures de pomme de terre et de quinoa de geler. Leurs murs cyclopéens (Puma Punku) sont scellés par d'ingénieuses agrafes en cuivre fondu sur place.",
            croyancesText: "C'est la matrice du grand mythe créateur des Incas. Le Lac Titicaca est la source du monde. Leur divinité suprême est le Dieu aux Sceptres (figure fondatrice de Viracocha, créateur du soleil, de la lune et des hommes). L'architecture comprend des temples semi-souterrains tapissés de dizaines de têtes clouées en pierre, évoquant probablement des sacrifices ennemis ou des ancêtres mythiques.",
            diplomatie: "Tiwanaku est un prédateur commercial. Sans armée de conquête documentée à grande échelle, la cité envoie des centaines de caravanes de lamas descendre la Cordillère vers la côte (Pérou) ou les jungles de l'est (Amazonie) pour imposer son monopole sur les feuilles de coca, le sel, le piment et les plumes d'oiseaux exotiques, s'imposant comme la métropole suprême des Andes sud.",
            guerres: [],
            documentaires: [{ titre: "Tiwanaku, la cité des dieux des Andes", url: "https://fr.wikipedia.org/wiki/Tiwanaku" }]
          },
          {
            id: "huari",
            trackId: "andes_nord", row: 3,
            label: "Empire Huari (Wari)",
            period: "600 à 1050", start: 600, end: 1050,
            color: "#ba9c07", isRiver: false, capitale: "Huari (Pérou central)",
            description: "Les véritables 'Romains des Andes'. L'empire militaire et bureaucratique implacable qui a préparé les infrastructures routières des futurs Incas.",
            datesCles: [
              { annee: 600, evenement: "L'Expansion Militaire", info: "Huari lance une conquête fulgurante vers le Nord et la côte de Nazca." },
              { annee: 700, evenement: "Standardisation", info: "L'empire impose sa langue (probablement le proto-Aymara) et l'usage des terrasses agricoles." },
              { annee: 1050, evenement: "Fragmentation", info: "La capitale est incendiée et abandonnée suite aux famines climatiques et révoltes vassales." }
            ],
            dirigeants: [],
            personnages: [],
            sciences: "Excellents géomètres d'État, les Huari détruisent les habitats côtiers dispersés pour forcer les populations conquises à s'installer dans de nouveaux centres administratifs (Pikillaqta), conçus sur un plan quadrillé rigide, avec des murs s'élevant jusqu'à 12 mètres de haut. Ils imposent les terrasses agricoles (Andenes) à flanc de montagne et amorcent le réseau routier monumental ('Qhapaq Ñan') pour y faire circuler l'armée.",
            croyancesText: "La religion Huari s'inspire du Dieu aux Sceptres de Tiwanaku, mais dans un style militaire, strict et géométrique. Leurs tapisseries funéraires sont des chefs-d'œuvre mondiaux de complexité optique (abstraction pure avec un nombre ahurissant de fils au centimètre carré). Leurs rites incluent des tombes royales souterraines labyrinthiques pour protéger les momies sacrées des hauts dignitaires de l'État.",
            diplomatie: "C'est l'anti-thèse de l'empire culturel de Tiwanaku. Les Huari sont des conquérants purs et durs, imposant par la force militaire une centralisation absolue des excédents agricoles dans des greniers d'État. Pour éviter la confrontation avec le géant Tiwanaku au Sud, un accord implicite ou une guerre froide fige la frontière andine, permettant aux Huari de soumettre sans pitié tout le Nord et l'Ouest péruvien.",
            guerres: [
              { nom: "Conquête de la culture Moche", annee: 650, adversaires: ["Culture Moche (Nord du Pérou)"], allies: [], morts: "Inconnu", vainqueur: "Empire Huari", consequences: "L'assimilation brutale des cultures régionales, centralisant pour la première fois les Andes côtières et montagneuses en un seul empire proto-Inca.", wikiUrl: "https://fr.wikipedia.org/wiki/Culture_Wari" }
            ],
            documentaires: [{ titre: "L'Empire Wari : les prédécesseurs des Incas", url: "https://fr.wikipedia.org/wiki/Culture_Wari" }]
          }
        ]
      }
    ]
  }
];