// Époques : Moderne (1492-1789) + Contemporaine (1789-2020)
export default [
  {
    id: "moderne",
    label: "Époque moderne",
    start: 1492,
    end: 1789,
    color: "#c98bb9",
    description: "Le désenclavement du monde : les grandes découvertes, la Renaissance, la révolution scientifique et la mise en place des premiers empires coloniaux globaux.",
    continents: [
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "espagne",
            trackId: "espagne", row: 1,
            label: "Empire espagnol",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#d4ac0d", isRiver: false, capitale: "Madrid",
            description: "Le premier empire sur lequel 'le soleil ne se couche jamais', inondant l'Europe de l'or et de l'argent des Amériques tout en s'épuisant dans les guerres de religion.",
            datesCles: [
              { annee: 1492, evenement: "Découverte de l'Amérique", info: "Christophe Colomb débarque aux Bahamas. La même année, chute de Grenade (fin de la Reconquista)." },
              { annee: 1521, evenement: "Conquête du Mexique", info: "Hernán Cortés anéantit l'Empire Aztèque." },
              { annee: 1588, evenement: "Désastre de l'Invincible Armada", info: "La flotte espagnole est décimée par les tempêtes et les Anglais, marquant la fin de l'hégémonie navale." },
              { annee: 1700, evenement: "Guerre de Succession", info: "Extinction des Habsbourg d'Espagne, la France y place un roi Bourbon." }
            ],
            dirigeants: [
              { titre: "Empereur du Saint-Empire et Roi", nom: "Charles Quint", surnom: "", debut: 1516, fin: 1556 },
              { titre: "Roi d'Espagne", nom: "Philippe II", surnom: "Le Prudent", debut: 1556, fin: 1598 }
            ],
            personnages: [
              { nom: "Miguel de Cervantes", role: "Écrivain", description: "Auteur de Don Quichotte, considéré comme le premier roman moderne de la littérature mondiale.", dates: "1547 à 1616", wikiUrl: "https://fr.wikipedia.org/wiki/Miguel_de_Cervantes" }
            ],
            sciences: "Le Siècle d'or espagnol (Siglo de Oro) brille par les arts (peinture de Velázquez, El Greco) mais aussi par l'ingénierie navale. Ils conçoivent le Galion, navire océanique massif armé de canons, capable de traverser l'Atlantique chargé de tonnes de lingots d'argent extraits des mines de Potosí (Bolivie) grâce à un nouveau procédé chimique d'amalgamation au mercure.",
            croyancesText: "L'Espagne est le fer de lance armé de la Contre-Réforme catholique face au protestantisme naissant. La redoutable Inquisition espagnole (fondée par les Rois Catholiques) traque l'hérésie, les juifs et musulmans convertis secrètement (Marranes et Morisques) avec une intransigeance absolue, instaurant la doctrine de la 'Limpieza de sangre' (pureté de sang).",
            diplomatie: "Leur diplomatie est dynastique et matrimoniale, résumée par la devise des Habsbourg : 'Que les autres fassent la guerre, toi, heureuse Autriche, marie-toi'. Par le jeu des héritages, Charles Quint règne sur l'Espagne, l'Allemagne, les Pays-Bas et l'Amérique. Pour sécuriser ses flottes, l'Espagne met en place le système des 'Flottes des Indes', des convois armés gigantesques annuels.",
            guerres: [
              { nom: "Guerre de Quatre-Vingts Ans", annee: 1568, adversaires: ["Provinces-Unies (Pays-Bas)"], allies: ["Saint-Empire"], morts: "Pertes économiques et militaires colossales", vainqueur: "Provinces-Unies", consequences: "L'Espagne perd les riches Pays-Bas, ruinant son trésor royal et déclenchant plusieurs banqueroutes d'État successives.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Quatre-Vingts_Ans" }
            ],
            documentaires: [{ titre: "Charles Quint, les rouages d'un empire", url: "https://fr.wikipedia.org/wiki/Empire_espagnol" }]
          },
          {
            id: "france-mod",
            trackId: "france", row: 2,
            label: "France (Ancien Régime)",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#3f6fd1", isRiver: false, capitale: "Paris / Versailles",
            description: "De la Renaissance italienne importée par François Ier jusqu'à l'absolutisme solaire de Louis XIV, forgeant le modèle de l'État centralisé moderne.",
            datesCles: [
              { annee: 1515, evenement: "Bataille de Marignan", info: "Victoire de François Ier en Italie, signature d'une paix perpétuelle avec les Suisses." },
              { annee: 1598, evenement: "L'Édit de Nantes", info: "Henri IV met fin à 30 ans de guerres de religion en accordant la tolérance aux Protestants." },
              { annee: 1685, evenement: "Installation à Versailles", info: "Louis XIV enferme la noblesse dans une 'prison dorée', apogée de l'absolutisme." },
              { annee: 1751, evenement: "L'Encyclopédie", info: "Diderot et d'Alembert publient l'œuvre majeure des Lumières." }
            ],
            dirigeants: [
              { titre: "Roi de France", nom: "François Ier", surnom: "Le Père des Lettres", debut: 1515, fin: 1547 },
              { titre: "Roi de France", nom: "Henri IV", surnom: "Le Vert Galant", debut: 1589, fin: 1610 },
              { titre: "Roi de France", nom: "Louis XIV", surnom: "Le Roi-Soleil", debut: 1643, fin: 1715 }
            ],
            personnages: [
              { nom: "Cardinal de Richelieu", role: "Principal Ministre", description: "Théoricien de la 'Raison d'État', il détruit le pouvoir politique des protestants et mate la haute noblesse pour Louis XIII.", dates: "1585 à 1642", wikiUrl: "https://fr.wikipedia.org/wiki/Armand_Jean_du_Plessis_de_Richelieu" },
              { nom: "Voltaire", role: "Philosophe", description: "Figure de proue des Lumières, défenseur acharné de la liberté d'expression et critique féroce du fanatisme religieux.", dates: "1694 à 1778", wikiUrl: "https://fr.wikipedia.org/wiki/Voltaire" }
            ],
            sciences: "Le mercantilisme d'État (Colbertisme) stimule l'industrie : création de manufactures royales (Gobelins, Saint-Gobain). Sur le plan civil, la France réalise des prouesses techniques comme le Canal du Midi (reliant l'Atlantique à la Méditerranée, conçu par Riquet). Descartes invente la géométrie analytique, et Pascal pose les bases du rationalisme scientifique moderne.",
            croyancesText: "Le royaume est ravagé par l'apparition du calvinisme. Après le massacre de la Saint-Barthélemy (1572), le royaume se fracture avant d'être réconcilié par Henri IV. Sous Louis XIV, l'absolutisme dicte 'Un roi, une loi, une foi' : l'Édit de Nantes est révoqué en 1685, forçant l'exode massif des élites protestantes (les Huguenots) vers la Prusse et les Pays-Bas, ruinant une partie de l'économie française.",
            diplomatie: "La diplomatie française obéit au principe de l'encerclement : pour briser l'hégémonie des Habsbourg (qui entourent la France en Espagne et en Allemagne), François Ier s'allie de manière jugée 'scandaleuse' avec l'Empire Ottoman musulman (l'alliance des Lys et du Croissant). Plus tard, la France déploiera un vaste empire colonial ('Nouvelle-France' au Québec, Louisiane).",
            guerres: [
              { nom: "Guerre de Trente Ans", annee: 1618, adversaires: ["Saint-Empire (Habsbourg)", "Espagne"], allies: ["Suède", "Princes protestants allemands"], morts: "Des millions de morts en Allemagne (famine, peste)", vainqueur: "France et Alliés (Traités de Westphalie)", consequences: "La France devient la première puissance militaire du continent, la carte de l'Europe moderne est dessinée.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Trente_Ans" }
            ],
            documentaires: [{ titre: "Louis XIV, le roi est mort, vive le roi", url: "https://fr.wikipedia.org/wiki/Ancien_R%C3%A9gime" }]
          },
          {
            id: "angleterre-mod",
            trackId: "angleterre", row: 3,
            label: "Angleterre / Grande-Bretagne",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#c0392b", isRiver: false, capitale: "Londres",
            description: "La nation qui, par la décapitation de son roi et son schisme religieux, a inventé la monarchie parlementaire moderne et dominé le commerce maritime mondial.",
            datesCles: [
              { annee: 1534, evenement: "L'Acte de Suprématie", info: "Henri VIII rompt avec le Pape pour divorcer, fondant l'Église anglicane." },
              { annee: 1649, evenement: "Guerre Civile", info: "Exécution du roi Charles Ier, Cromwell instaure une sanglante république puritaine." },
              { annee: 1688, evenement: "La Glorieuse Révolution", info: "Renversement pacifique du roi catholique, adoption du 'Bill of Rights' garantissant le pouvoir du Parlement." },
              { annee: 1707, evenement: "Acte d'Union", info: "L'Angleterre et l'Écosse fusionnent pour former le Royaume-Uni de Grande-Bretagne." }
            ],
            dirigeants: [
              { titre: "Roi d'Angleterre", nom: "Henri VIII", surnom: "", debut: 1509, fin: 1547 },
              { titre: "Reine", nom: "Élisabeth Ire", surnom: "La Reine Vierge", debut: 1558, fin: 1603 },
              { titre: "Lord Protecteur", nom: "Oliver Cromwell", surnom: "", debut: 1653, fin: 1658 }
            ],
            personnages: [
              { nom: "Isaac Newton", role: "Physicien", description: "L'un des plus grands scientifiques de tous les temps, il formule la loi de la gravitation universelle.", dates: "1643 à 1727", wikiUrl: "https://fr.wikipedia.org/wiki/Isaac_Newton" },
              { nom: "William Shakespeare", role: "Dramaturge", description: "Auteur immense (Hamlet, Roméo et Juliette) dont l'œuvre a littéralement forgé la langue anglaise moderne.", dates: "1564 à 1616", wikiUrl: "https://fr.wikipedia.org/wiki/William_Shakespeare" }
            ],
            sciences: "Leur stabilité politique précoce permet le déclenchement de la première Révolution industrielle à la fin du XVIIIe siècle. L'invention de la machine à vapeur (Newcomen puis perfectionnée par Watt) permet de pomper l'eau des mines de charbon, puis de motoriser les métiers à tisser. C'est également la naissance de la finance moderne avec la création de la Banque d'Angleterre (1694) pour financer les guerres contre la France.",
            croyancesText: "Le pays est traversé par une tension religieuse extrême entre Anglicans (religion d'État modérée), Catholiques (persécutés et exclus des fonctions publiques) et Puritains (calvinistes radicaux). Ces derniers, fuyant les persécutions, embarqueront sur le Mayflower pour coloniser l'Amérique du Nord, important leur éthique de travail et de prédestination divine.",
            diplomatie: "La politique étrangère britannique ('L'Équilibre des puissances') consiste à refuser qu'un seul État continental (France ou Espagne) ne domine l'Europe. Protégée par sa flotte royale (la Royal Navy), elle finance les ennemis de ses ennemis et s'assure le contrôle des détroits maritimes, fondant l'expansion colossale de l'East India Company en Asie.",
            guerres: [
              { nom: "Guerre de Sept Ans (Guerre de la Conquête)", annee: 1756, adversaires: ["Royaume de France", "Autriche"], allies: ["Prusse"], morts: "Guerre mondiale avant l'heure", vainqueur: "Grande-Bretagne", consequences: "Les Britanniques expulsent la France d'Amérique du Nord (chute du Québec) et des Indes, s'assurant le monopole colonial mondial.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Sept_Ans" }
            ],
            documentaires: [{ titre: "Les Tudor : Une dynastie de sang et de passion", url: "https://fr.wikipedia.org/wiki/P%C3%A9riode_Tudor" }]
          },
          {
            id: "provinces-unies",
            trackId: "pays_bas", row: 4,
            label: "Provinces-Unies (Siècle d'Or)",
            period: "1581 à 1789", start: 1581, end: 1789,
            color: "#ff9800", isRiver: false, capitale: "Amsterdam / La Haye",
            description: "La première république marchande et capitaliste au monde. Une petite nation ayant arraché son indépendance à l'Espagne pour devenir le banquier et le transporteur de l'Europe.",
            datesCles: [
              { annee: 1581, evenement: "Acte de La Haye", info: "Les provinces du Nord se déclarent indépendantes de l'Empire espagnol." },
              { annee: 1602, evenement: "Fondation de la VOC", info: "Création de la Compagnie Néerlandaise des Indes Orientales, première société par actions de l'histoire." },
              { annee: 1637, evenement: "La crise de la Tulipe", info: "Premier krach boursier de l'histoire mondiale, basé sur la spéculation des bulbes de tulipes." }
            ],
            dirigeants: [
              { titre: "Stathouder", nom: "Guillaume Ier d'Orange", surnom: "Le Taciturne", debut: 1559, fin: 1584 },
              { titre: "Grand Pensionnaire", nom: "Johan de Witt", surnom: "", debut: 1653, fin: 1672 }
            ],
            personnages: [
              { nom: "Baruch Spinoza", role: "Philosophe", description: "Penseur rationaliste majeur, précurseur des Lumières. Ses idées sur la séparation de l'Église et de l'État lui valurent l'excommunication juive.", dates: "1632 à 1677", wikiUrl: "https://fr.wikipedia.org/wiki/Baruch_Spinoza" },
              { nom: "Rembrandt", role: "Peintre", description: "Le grand maître du clair-obscur, symbolisant la richesse bourgeoise et la profondeur spirituelle néerlandaise.", dates: "1606 à 1669", wikiUrl: "https://fr.wikipedia.org/wiki/Rembrandt" }
            ],
            sciences: "Leur génie logistique repose sur la création de la 'Flûte' (Fluyt), un navire marchand au ventre bombé pouvant transporter des charges colossales avec un équipage réduit, cassant tous les prix du fret mondial. En physique, Christiaan Huygens invente l'horloge à pendule et étudie les anneaux de Saturne grâce aux formidables lentilles polies par les artisans d'Amsterdam.",
            croyancesText: "Le Calvinisme rigoriste est le ciment national face à l'Espagne catholique. Cependant, la nécessité du commerce pousse les Hollandais à une tolérance religieuse inédite : ils accueillent à bras ouverts les Juifs séfarades fuyant l'Inquisition, et les Protestants français fuyant Louis XIV, absorbant ainsi les capitaux et les cerveaux fuyant l'intolérance européenne.",
            diplomatie: "C'est un État hybride. Les États Généraux (bourgeois, marchands) dirigent l'économie, tandis que le Stathouder (issu de la maison d'Orange) dirige les armées en temps de guerre. La VOC (leur compagnie privée) dispose du droit souverain de battre monnaie, de déclarer la guerre aux rois d'Asie et de bâtir ses propres forteresses (Batavia/Jakarta), agissant comme un État dans l'État.",
            guerres: [
              { nom: "Guerre de Hollande", annee: 1672, adversaires: ["Royaume de France", "Angleterre"], allies: ["Espagne", "Saint-Empire"], morts: "Pertes économiques graves", vainqueur: "Provinces-Unies (survie stratégique)", consequences: "L'Année du Désastre (Rampjaar). Pour stopper l'invasion de Louis XIV, les Hollandais détruisent volontairement leurs digues et inondent leur propre pays.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Hollande" }
            ],
            documentaires: [{ titre: "Le Siècle d'Or hollandais", url: "https://fr.wikipedia.org/wiki/Si%C3%A8cle_d%27or_n%C3%A9erlandais" }]
          },
          {
            id: "suede-empire",
            trackId: "suede", row: 5,
            label: "Empire suédois",
            period: "1561 à 1721", start: 1561, end: 1721,
            color: "#1976d2", isRiver: false, capitale: "Stockholm",
            description: "Une nation glaciale et peu peuplée qui se militarise à l'extrême pour s'ériger en hégémonie absolue de la mer Baltique.",
            datesCles: [
              { annee: 1630, evenement: "Intervention en Allemagne", info: "Le roi Gustave Adolphe débarque en Allemagne pour sauver le protestantisme face aux armées impériales." },
              { annee: 1648, evenement: "Traités de Westphalie", info: "La Suède est reconnue comme l'une des grandes puissances garantes de la paix en Europe." },
              { annee: 1709, evenement: "Désastre de Poltava", info: "L'armée suédoise est anéantie en Ukraine par le tsar Pierre le Grand de Russie." }
            ],
            dirigeants: [
              { titre: "Roi de Suède", nom: "Gustave II Adolphe", surnom: "Le Lion du Nord", debut: 1611, fin: 1632 },
              { titre: "Reine", nom: "Christine", surnom: "La Minerve du Nord", debut: 1632, fin: 1654 },
              { titre: "Roi", nom: "Charles XII", surnom: "Le Météore", debut: 1697, fin: 1718 }
            ],
            personnages: [
              { nom: "Axel Oxenstierna", role: "Chancelier", description: "L'architecte administratif de la Suède moderne, gérant l'empire pendant les minorités et la guerre de Trente Ans.", dates: "1583 à 1654", wikiUrl: "https://fr.wikipedia.org/wiki/Axel_Oxenstierna" }
            ],
            sciences: "Le 'miracle suédois' est purement logistique et militaire. Gustave II Adolphe invente la guerre moderne combinée : il allège les mousquets et l'artillerie de campagne (canons en cuir bouilli maniables par deux hommes), permettant aux fantassins de tirer en salves roulantes ultra-rapides, pulvérisant les massives et lentes formations (les Tercios) espagnoles ou impériales.",
            croyancesText: "Le luthéranisme n'est pas seulement une religion, c'est l'ossature de l'État. Les pasteurs font office de fonctionnaires civils, tenant un registre précis des naissances et de l'alphabétisation (la Suède est le premier pays à lier le droit au mariage à la capacité de lire la Bible). C'est ce clergé qui assure l'implacable recrutement local des soldats pour les guerres du roi.",
            diplomatie: "Riche en bois, en cuivre et en fer de haute qualité, la Suède exporte massivement ses canons dans toute l'Europe. Pour briser la puissance des Habsbourg, le cardinal français de Richelieu finance secrètement avec de l'or français l'armée protestante suédoise. La Suède annexe la Poméranie et les pays baltes, transformant la mer Baltique en un 'lac suédois'.",
            guerres: [
              { nom: "Grande Guerre du Nord", annee: 1700, adversaires: ["Empire Russe", "Danemark", "Pologne-Lituanie"], allies: ["Empire Ottoman (temporairement)"], morts: "Effondrement démographique suédois", vainqueur: "Russie", consequences: "Le roi Charles XII mène une guerre brillante mais épuise son pays. La Suède perd son statut d'empire au profit de la nouvelle Russie de Pierre le Grand.", wikiUrl: "https://fr.wikipedia.org/wiki/Grande_guerre_du_Nord" }
            ],
            documentaires: [{ titre: "L'Empire suédois, la terreur du Nord", url: "https://fr.wikipedia.org/wiki/Empire_su%C3%A9dois" }]
          },
          {
            id: "prusse",
            trackId: "allemagne", row: 6,
            label: "Royaume de Prusse",
            period: "1701 à 1789", start: 1701, end: 1789,
            color: "#263238", isRiver: false, capitale: "Berlin / Potsdam",
            description: "D'un duché pauvre et sablonneux à l'armée la plus craintes d'Europe : 'La Prusse n'est pas un État avec une armée, mais une armée avec un État'.",
            datesCles: [
              { annee: 1701, evenement: "Royaume de Prusse", info: "L'électeur de Brandebourg se couronne lui-même Roi avec l'accord de l'Empereur." },
              { annee: 1740, evenement: "Guerres de Silésie", info: "Frédéric II arrache cette riche province à l'Autriche de Marie-Thérèse." },
              { annee: 1756, evenement: "Guerre de Sept Ans", info: "La Prusse affronte victorieusement seule les trois plus grandes armées du continent." }
            ],
            dirigeants: [
              { titre: "Roi en Prusse", nom: "Frédéric-Guillaume Ier", surnom: "Le Roi-Sergent", debut: 1713, fin: 1740 },
              { titre: "Roi de Prusse", nom: "Frédéric II", surnom: "Frédéric le Grand", debut: 1740, fin: 1786 }
            ],
            personnages: [],
            sciences: "Invention du système des 'Cantons' (Kantonssystem), une proto-conscription obligatoire très en avance sur son temps. Les soldats prussiens s'entraînent avec une baguette de fer (invention de Dessauer) leur permettant de tirer 4 coups à la minute contre 2 pour les armées ennemies. La Prusse est également le premier pays d'Europe à rendre l'école primaire obligatoire (Generallandschulreglement de 1763) pour forger l'obéissance civique.",
            croyancesText: "L'État est officiellement calviniste gouvernant une population luthérienne, mais il applique la vision de l'Absolutisme éclairé : une tolérance religieuse utilitariste absolue. Frédéric II fait construire une cathédrale catholique en plein Berlin protestant et accueille plus de 20 000 protestants français (Huguenots) et les Jésuites bannis d'ailleurs, absorbant leur précieux savoir-faire artisanal et intellectuel.",
            diplomatie: "Sa géographie éclatée l'oblige à l'agressivité militaire préventive. Pour relier la Prusse-Orientale au Brandebourg, Frédéric II n'hésitera pas à organiser avec la Russie et l'Autriche le dépeçage pur et simple du Royaume de Pologne (Partages de la Pologne). Il invite Voltaire à sa cour (Palais de Sanssouci) pour donner un vernis philosophique à sa politique machiavélique.",
            guerres: [
              { nom: "Guerre de Sept Ans (Front Européen)", annee: 1756, adversaires: ["France", "Autriche", "Russie", "Suède"], allies: ["Grande-Bretagne (soutien financier)"], morts: "Près d'un million en Europe centrale", vainqueur: "Prusse", consequences: "Sauvée in extremis par le retrait miracle de la Russie (Le 'Miracle de la maison de Brandebourg'), la Prusse conserve la Silésie et s'impose comme une puissance majeure.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Sept_Ans" }
            ],
            documentaires: [{ titre: "Frédéric le Grand, l'énigme prussienne", url: "https://fr.wikipedia.org/wiki/Royaume_de_Prusse" }]
          },
          {
            id: "pologne-lituanie",
            trackId: "pologne", row: 7,
            label: "République des Deux Nations (Pologne)",
            period: "1569 à 1789", start: 1569, end: 1789,
            color: "#880e4f", isRiver: false, capitale: "Cracovie puis Varsovie",
            description: "Le plus vaste État d'Europe au 17ème siècle, paradoxe démocratique et nobiliaire (la Liberté dorée), balayé de la carte par la rapacité de ses voisins.",
            datesCles: [
              { annee: 1569, evenement: "Union de Lublin", info: "La Pologne et la Lituanie fusionnent officiellement pour contrer la Russie." },
              { annee: 1683, evenement: "Bataille de Vienne", info: "Le roi polonais sauve l'Europe d'une conquête ottomane." },
              { annee: 1772, evenement: "Premier Partage", info: "La Prusse, la Russie et l'Autriche commencent à s'annexer le pays." },
              { annee: 1795, evenement: "Disparition", info: "Troisième partage, la Pologne est effacée de la carte politique européenne pour 123 ans." }
            ],
            dirigeants: [
              { titre: "Roi et Grand-Duc", nom: "Jean III Sobieski", surnom: "Le Lion de Lehistan", debut: 1674, fin: 1696 },
              { titre: "Dernier Roi", nom: "Stanislas II", surnom: "Poniatowski", debut: 1764, fin: 1795 }
            ],
            personnages: [
              { nom: "Nicolas Copernic", role: "Astronome (pré-union)", description: "Le moine polonais qui, en plaçant le Soleil au centre de l'univers, a déclenché la révolution scientifique moderne.", dates: "1473 à 1543", wikiUrl: "https://fr.wikipedia.org/wiki/Nicolas_Copernic" }
            ],
            sciences: "Leur génie est militaire et équestre : l'invention des Hussards Ailés (Husaria). C'est une cavalerie lourde de choc, dotée d'armures resplendissantes et d'immenses 'ailes' en plumes d'aigle fixées dans le dos (pour terrifier les chevaux ennemis par le bruit du vent et empêcher la capture au lasso). Ils constituent l'unité d'élite la plus redoutée et invaincue d'Europe pendant un siècle.",
            croyancesText: "En pleine époque des bûchers européens, la Pologne vote en 1573 la 'Confédération de Varsovie', la première loi constitutionnelle de tolérance religieuse de l'Histoire. Elle devient l'asile de l'Europe : Catholiques, Orthodoxes, Luthériens, et la plus grande communauté Juive du monde (Ashkénazes) y cohabitent en paix, protégés par des lois d'autonomie (le Conseil des Quatre Terres).",
            diplomatie: "Leur système politique inédit (le 'Sarmatisme') causera leur ruine. C'est une monarchie élective : le roi est élu par le parlement des nobles (la Diète, ou Sejm). Pire, ils inventent le 'Liber Veto' : un seul noble (souvent soudoyé par la Russie ou la France) peut crier son veto pour annuler n'importe quelle loi ou déclaration de guerre, paralysant totalement l'État face aux absolutismes voisins centralisés.",
            guerres: [
              { nom: "Le Déluge (Potop)", annee: 1655, adversaires: ["Empire Suédois", "Tsarat de Russie"], allies: ["Saint-Empire (tardivement)"], morts: "Destruction d'un tiers de la population", vainqueur: "Statu Quo (Ruine totale)", consequences: "Invasion généralisée. Bien que la Pologne survive, ses villes et son économie sont rasées, amorçant son déclin fatal.", wikiUrl: "https://fr.wikipedia.org/wiki/D%C3%A9luge_(Pologne)" }
            ],
            documentaires: [{ titre: "L'âge d'or et la tragédie de la Pologne", url: "https://fr.wikipedia.org/wiki/R%C3%A9publique_des_Deux_Nations" }]
          }
        ]
      },
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "songhai-mod",
            trackId: "afrique_ouest", row: 1,
            label: "Empire Songhaï (Apogée)",
            period: "1492 à 1591", start: 1492, end: 1591,
            color: "#b83b1d", isRiver: true, capitale: "Gao",
            description: "L'âge d'or intellectuel et impérial de l'Afrique de l'Ouest, brisé par l'arrivée des armes à feu traversant le Sahara.",
            datesCles: [
              { annee: 1493, evenement: "Dynastie des Askia", info: "L'empereur Sonni Ali Ber meurt. Askia Mohammed s'empare du pouvoir et islamise l'État." },
              { annee: 1512, evenement: "Soutien universitaire", info: "Apogée des universités de Tombouctou et Djenné financées par la couronne." },
              { annee: 1591, evenement: "L'Invasion marocaine", info: "Fin de l'Empire suite à la bataille de Tondibi." }
            ],
            dirigeants: [
              { titre: "Empereur (Askia)", nom: "Askia Mohammed Ier", surnom: "Le Grand", debut: 1493, fin: 1528 }
            ],
            personnages: [
              { nom: "Ahmed Baba", role: "Savant et Grand Mufti", description: "Le plus grand intellectuel de Tombouctou, auteur de dizaines de traités de droit et d'astronomie, déporté lors de l'invasion marocaine.", dates: "1556 à 1627", wikiUrl: "https://fr.wikipedia.org/wiki/Ahmed_Baba" }
            ],
            sciences: "Le règne d'Askia Mohammed voit une standardisation d'État exceptionnelle pour l'époque : introduction de poids et mesures officiels unifiés pour sécuriser le commerce de l'or et du sel, création d'un corps d'inspecteurs des marchés, et approfondissement d'un réseau complexe de canaux d'irrigation sur les rives du fleuve Niger.",
            croyancesText: "L'empire renoue pleinement avec l'Islam diplomatique et sunnite. Le pèlerinage de l'Askia Mohammed à La Mecque, accompagné d'une fortune de 300 000 pièces d'or distribuées en aumône, a pour but d'obtenir la validation du Calife du Caire pour être reconnu comme 'Lieutenant du Calife au Soudan', asseyant son autorité légale sur tous les musulmans de la région.",
            diplomatie: "Le pouvoir royal passe d'une tyrannie militaire (sous les Sonni) à une vaste bureaucratie avec des ministères spécialisés (Finances, Agriculture, Eaux et Forêts). Toutefois, la puissance du Songhaï attire la convoitise du redoutable Sultanat Saadien du Maroc, désireux de s'emparer des mines d'or et des mines de sel gemme de Teghazza pour renflouer ses caisses après la bataille des Trois Rois.",
            guerres: [
              { nom: "Bataille de Tondibi", annee: 1591, adversaires: ["Sultanat Saadien (Maroc, mené par le mercenaire ibérique Djouder Pacha)"], allies: [], morts: "La cavalerie d'élite Songhaï est fauchée", vainqueur: "Sultanat du Maroc", consequences: "Les arquebuses marocaines détruisent les lances et les épées de la cavalerie Songhaï. Tombouctou et Gao sont saccagées, l'Empire est démembré.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Tondibi" }
            ],
            documentaires: [{ titre: "La chute de l'Empire Songhaï", url: "https://fr.wikipedia.org/wiki/Empire_songha%C3%AF" }]
          },
          {
            id: "ashanti",
            trackId: "ashanti", row: 2,
            label: "Empire Ashanti",
            period: "1701 à 1789", start: 1701, end: 1789,
            color: "#dfb134", isRiver: false, capitale: "Kumasi",
            description: "Une redoutable fédération militaire forestière née autour d'une relique sacrée (le Trône d'or), monopolisant l'or et la traite sur la Côte de l'Or (Ghana).",
            datesCles: [
              { annee: 1701, evenement: "Le Mythe Fondateur", info: "Bataille de Feyiase : Osei Tutu écrase les oppresseurs Denkyira et proclame l'Empire." },
              { annee: 1744, evenement: "Expansion du Nord", info: "L'armée soumet le puissant royaume de Dagbon." }
            ],
            dirigeants: [
              { titre: "Asantehene (Empereur)", nom: "Osei Tutu Ier", surnom: "", debut: 1675, fin: 1717 },
              { titre: "Asantehene", nom: "Opoku Ware Ier", surnom: "", debut: 1720, fin: 1750 }
            ],
            personnages: [
              { nom: "Okomfo Anokye", role: "Grand prêtre et cofondateur", description: "Le magicien légendaire qui fit descendre le Trône d'Or du ciel et dicta les lois inviolables de la constitution Ashanti.", dates: "≈ 1655 à 1717", wikiUrl: "https://fr.wikipedia.org/wiki/Okomfo_Anokye" }
            ],
            sciences: "Leur métallurgie de la poudre et de l'or est d'une sophistication inouïe. Ils fabriquent les 'Poids Akans', de minuscules sculptures géométriques et figuratives en laiton d'une précision au milligramme près, servant d'étalon universel pour la pesée des pépites d'or dans toute l'Afrique de l'Ouest. Militairement, ils adoptent très tôt le mousquet européen, modifiant radicalement les tactiques de guerre en forêt dense.",
            croyancesText: "Toute la nation, pourtant composée de chefferies fières et indépendantes, est unifiée par l'âme religieuse de l'empire : le 'Sika Dwa Kofi' (Le Trône d'Or). Il ne représente pas le pouvoir d'un homme, mais contient l'esprit spirituel de la nation Ashanti toute entière. Même le roi n'a pas le droit de s'y asseoir, et sa simple profanation justifie une guerre totale.",
            diplomatie: "C'est une confédération stricte : le roi de Kumasi (Asantehene) préside un parlement des rois provinciaux (Asantemanhyiamu). Leur économie diplomatique est impitoyable : ils lancent des razzias constantes contre les tribus intérieures pour faire des captifs qu'ils échangent aux forts côtiers des Européens (Britanniques, Hollandais) contre des fusils, alimentant un cycle infini d'expansion impérialiste.",
            guerres: [
              { nom: "Guerre d'indépendance Ashanti", annee: 1701, adversaires: ["Royaume de Denkyira"], allies: [], morts: "Mort du roi ennemi", vainqueur: "Confédération Ashanti", consequences: "Les Ashanti arrachent le contrôle des routes commerciales menant aux forts européens de la côte, assurant la fortune de l'empire.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_ashanti" }
            ],
            documentaires: [{ titre: "Le Trône d'Or des Ashanti", url: "https://fr.wikipedia.org/wiki/Empire_ashanti" }]
          },
          {
            id: "kongo-mod",
            trackId: "afrique_centrale", row: 3,
            label: "Royaume du Kongo (Christianisé)",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#2e7d32", isRiver: true, capitale: "Mbanza Kongo (San Salvador)",
            description: "Un royaume subsaharien choisissant librement de se christianiser, tentant de traiter d'égal à égal avec l'Europe avant d'être broyé par les trafiquants d'esclaves portugais.",
            datesCles: [
              { annee: 1512, evenement: "Ambassade à Rome", info: "Le propre fils du roi du Kongo (Henrique) est sacré évêque par le Pape (le premier d'Afrique noire)." },
              { annee: 1526, evenement: "Les lettres d'Afonso", info: "L'empereur implore le roi du Portugal de stopper la capture illégale de ses nobles par les esclavagistes." },
              { annee: 1665, evenement: "Bataille d'Ambuila", info: "Le roi du Kongo est décapité par les colons portugais d'Angola." },
              { annee: 1704, evenement: "Révolution Antonianiste", info: "Kimpa Vita tente de refonder le royaume par une guerre sainte prophétique." }
            ],
            dirigeants: [
              { titre: "Manikongo (Roi)", nom: "Afonso Ier", surnom: "Nzinga Mvemba", debut: 1509, fin: 1542 },
              { titre: "Manikongo", nom: "António Ier", surnom: "Nvita a Nkanga", debut: 1661, fin: 1665 }
            ],
            personnages: [
              { nom: "Kimpa Vita (Dona Beatriz)", role: "Prophétesse", description: "Sorte de Jeanne d'Arc congolaise. Se disant possédée par Saint Antoine, elle prêche un christianisme africain (où le Christ serait né au Kongo) pour réunifier l'État, avant d'être brûlée vive en 1706.", dates: "1684 à 1706", wikiUrl: "https://fr.wikipedia.org/wiki/Kimpa_Vita" }
            ],
            sciences: "Le royaume crée un véritable syncrétisme intellectuel afro-européen. Une partie de la haute noblesse s'alphabétise en portugais et en latin. Ils réorganisent l'administration de l'État en copiant les titres de noblesse européens (Ducs, Comtes, Marquis) plaqués sur les structures de parenté matriarcales traditionnelles bantoues.",
            croyancesText: "Le christianisme du Kongo n'est pas imposé par la force, c'est une appropriation d'État. Les anciens esprits (Nkisi) sont assimilés aux saints catholiques, et la Croix devient le nouveau symbole suprême de la magie protectrice royale. Cependant, les missionnaires jésuites et capucins accompagnant les navires commerciaux servent très souvent d'agents de renseignement pour la couronne portugaise.",
            diplomatie: "Le drame du Kongo est la cupidité européenne. Initialement un partenariat, la relation dégénère car la monnaie d'échange exigée par les Portugais pour les armes à feu n'est plus l'ivoire ou le cuivre, mais les esclaves pour les plantations du Brésil. La couronne du Kongo s'épuise à lancer des guerres frontalières interminables pour fournir des captifs, finissant par détruire l'équilibre démographique et moral de son propre royaume.",
            guerres: [
              { nom: "Bataille d'Ambuila", annee: 1665, adversaires: ["Colonie portugaise d'Angola"], allies: [], morts: "Anéantissement de la noblesse", vainqueur: "Portugal", consequences: "Refusant de céder des mines d'or, le roi António est vaincu et décapité. Sa tête est ramenée en triomphe à Luanda. Le royaume sombre dans une anarchie féodale de 40 ans.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_d'Ambuila" }
            ],
            documentaires: [{ titre: "L'Afrique des grands lacs : le Royaume de Kongo", url: "https://fr.wikipedia.org/wiki/Royaume_du_Kongo" }]
          },
          {
            id: "oyo",
            trackId: "oyo", row: 4,
            label: "Empire d'Oyo",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#9e9d24", isRiver: false, capitale: "Oyo-Ile",
            description: "La puissance politique suprême du peuple Yoruba, structurée par une armée de cavaliers et une constitution complexe prévenant la tyrannie.",
            datesCles: [
              { annee: 1550, evenement: "Création de la Cavalerie", info: "Orompoto sécurise l'importation de chevaux du Nord, donnant la suprématie militaire à l'empire." },
              { annee: 1748, evenement: "Soumission du Dahomey", info: "L'armée d'Oyo oblige le puissant royaume du Dahomey à lui verser un tribut annuel en or et en captifs." }
            ],
            dirigeants: [
              { titre: "Alaafin (Empereur)", nom: "Orompoto", surnom: "", debut: 1550, fin: 1560 },
              { titre: "Alaafin", nom: "Abiodun", surnom: "", debut: 1770, fin: 1789 }
            ],
            personnages: [
              { nom: "Bashorun Gaa", role: "Premier ministre (Chef des Oyo Mesi)", description: "Le faiseur de rois. Tyran politique qui organisa l'assassinat rituel de 4 empereurs successifs avant d'être exécuté.", dates: "Mort en 1774", wikiUrl: "https://fr.wikipedia.org/wiki/Gaa_(Oyo)" }
            ],
            sciences: "Leur génie politique réside dans l'invention d'un système de contre-pouvoirs impitoyable, très rare pour l'époque. Ils maîtrisent un artisanat textile de luxe (le tissage de l'Aso Oke) et la sculpture sur bois sacrée utilisée lors des intenses rituels urbains.",
            croyancesText: "Centre spirituel et politique du polythéisme Yoruba. L'Alaafin est le représentant terrestre et le descendant divin de Shango (l'Orisha et dieu de la foudre). Le culte justifie le pouvoir impérial et cimente la loyauté des royaumes vassaux, qui doivent envoyer des délégations aux grands festivals religieux de la capitale.",
            diplomatie: "La constitution non-écrite d'Oyo est stricte : l'Empereur (Alaafin) a droit de vie ou de mort, mais s'il devient tyrannique, le conseil des 7 nobles (Oyo Mesi) peut lui présenter une calebasse vide (ou des œufs de perroquet), l'obligeant à un suicide rituel par poison. Le chef militaire suprême (l'Are-Ona-Kakanfo) devait obligatoirement se suicider si son armée perdait une bataille, assurant une motivation absolue.",
            guerres: [
              { nom: "Guerres contre le Dahomey", annee: 1726, adversaires: ["Royaume du Dahomey (Roi Agadja)"], allies: [], morts: "Pertes d'infanterie dahoméenne", vainqueur: "Empire d'Oyo", consequences: "La cavalerie lourde d'Oyo anéantit l'armée du Dahomey à plusieurs reprises en zone de savane, les forçant à devenir un État tributaire pendant un siècle.", wikiUrl: "https://fr.wikipedia.org/wiki/Empire_d'Oyo" }
            ],
            documentaires: [{ titre: "L'Empire d'Oyo, la gloire des Yorubas", url: "https://fr.wikipedia.org/wiki/Empire_d'Oyo" }]
          }
        ]
      },
      {
        id: "asie", label: "Asie / Moyen-Orient",
        civilizations: [
          {
            id: "ottomans",
            trackId: "ottomans", row: 1,
            label: "Empire ottoman",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#27ae60", isRiver: false, capitale: "Istanbul (Constantinople)",
            description: "Superpuissance islamique turque dominant la Méditerranée, l'Europe de l'Est et l'Afrique du Nord, terrifiant les rois chrétiens par sa redoutable armée de Janissaires.",
            datesCles: [
              { annee: 1517, evenement: "Prise de l'Égypte et du Califat", info: "Selim Ier s'empare du Caire et rapatrie le titre sacré de Calife à Istanbul." },
              { annee: 1529, evenement: "Premier siège de Vienne", info: "L'armée de Soliman fait trembler l'Europe mais doit rebrousser chemin avant l'hiver." },
              { annee: 1571, evenement: "Bataille de Lépante", info: "La Sainte-Ligue (Sainte-Alliance chrétienne) détruit la flotte ottomane, freinant leur expansion maritime." },
              { annee: 1683, evenement: "Deuxième siège de Vienne", info: "Défaite décisive face à la Pologne, marquant l'arrêt total des conquêtes territoriales." }
            ],
            dirigeants: [
              { titre: "Sultan et Calife", nom: "Selim Ier", surnom: "Le Terrible", debut: 1512, fin: 1520 },
              { titre: "Sultan et Calife", nom: "Soliman", surnom: "Le Magnifique / Le Législateur", debut: 1520, fin: 1566 }
            ],
            personnages: [
              { nom: "Mimar Sinan", role: "L'Architecte impérial", description: "Le Michel-Ange ottoman, ingénieur de génie ayant construit plus de 300 ponts, aqueducs et les sublimes mosquées à grand dôme (Mosquée Bleue, Süleymaniye).", dates: "1489 à 1588", wikiUrl: "https://fr.wikipedia.org/wiki/Mimar_Sinan" },
              { nom: "Roxelane (Hürrem Sultan)", role: "Sultane (Haseki)", description: "Esclave ruthène devenue l'épouse légitime et conseillère politique toute puissante de Soliman.", dates: "≈ 1502 à 1558", wikiUrl: "https://fr.wikipedia.org/wiki/Roxelane" }
            ],
            sciences: "Leur génie est poliorcétique et balistique : ils industrialisent la fonte d'immenses canons de siège ('Les Basilics') capables d'abattre les murailles médiévales. Sur le plan institutionnel, Soliman rédige le 'Kanun' (le code de droit séculier) modernisant l'administration fiscale et pénale en parallèle de la Sharia religieuse.",
            croyancesText: "Bastion de l'Islam sunnite, l'Empire est d'une très grande diversité. Pour gouverner chrétiens des Balkans et juifs, ils officialisent le 'Système des Millets' : chaque communauté religieuse gère son propre droit civil, ses écoles et son clergé, en échange d'un impôt de capitation (Jizya). La Cour de Topkapi est elle-même un creuset ethnique, la plupart des mères de sultans et des Grands Vizirs étant d'origine européenne balkanique (convertis).",
            diplomatie: "Leur outil de pouvoir absolu est le 'Devşirme' (le ramassage) : des enfants chrétiens des Balkans sont arrachés à leur famille, islamisés, et éduqués dans l'ascèse totale pour devenir soit de hauts fonctionnaires fidèles, soit les 'Janissaires' (l'infanterie d'élite au mousquet, l'armée la plus disciplinée d'Europe). Sur le plan international, la France de François Ier est leur grand allié stratégique contre les Habsbourg.",
            guerres: [
              { nom: "Bataille de Mohács", annee: 1526, adversaires: ["Royaume de Hongrie"], allies: [], morts: "La chevalerie hongroise anéantie", vainqueur: "Ottomans (Soliman)", consequences: "Le roi de Hongrie Louis II meurt noyé dans un marécage. La Hongrie est rayée de la carte et absorbée, ouvrant la route vers Vienne.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Moh%C3%A1cs_(1526)" }
            ],
            documentaires: [{ titre: "Soliman le Magnifique, le sultan qui fit trembler l'Europe", url: "https://fr.wikipedia.org/wiki/Soliman_le_Magnifique" }]
          },
          {
            id: "moghols",
            trackId: "inde", row: 2,
            label: "Empire moghol",
            period: "1526 à 1789", start: 1526, end: 1789,
            color: "#16a085", isRiver: true, capitale: "Delhi / Agra / Lahore",
            description: "Dynastie turco-mongole islamique régnant sur la majorité hindoue de l'Inde, offrant au monde l'une de ses architectures et orfèvreries les plus resplendissantes.",
            datesCles: [
              { annee: 1526, evenement: "Bataille de Panipat", info: "Babur (descendant de Gengis Khan et Tamerlan) défait le sultan de Delhi grâce à ses canons." },
              { annee: 1556, evenement: "L'Âge d'or", info: "Début du long règne d'Akbar, pacifiant et unifiant l'Inde septentrionale." },
              { annee: 1653, evenement: "Achèvement du Taj Mahal", info: "Chef-d'œuvre commandé par Shah Jahan en mémoire de son épouse bien-aimée Mumtaz Mahal." },
              { annee: 1739, evenement: "Sac de Delhi", info: "Le Perse Nader Chah pille la capitale et vole le mythique Trône du Paon, sonnant le glas de l'Empire." }
            ],
            dirigeants: [
              { titre: "Empereur (Padichah)", nom: "Babur", surnom: "Le Tigre", debut: 1526, fin: 1530 },
              { titre: "Empereur", nom: "Akbar", surnom: "Le Grand", debut: 1556, fin: 1605 },
              { titre: "Empereur", nom: "Shah Jahan", surnom: "Le Bâtisseur", debut: 1628, fin: 1658 }
            ],
            personnages: [
              { nom: "Aurangzeb", role: "Empereur intégriste", description: "Il a étendu l'empire à sa superficie maximale mais sa stricte intolérance islamique a provoqué des révoltes (Marathes, Sikhs) détruisant l'État de l'intérieur.", dates: "1618 à 1707", wikiUrl: "https://fr.wikipedia.org/wiki/Aurangzeb" }
            ],
            sciences: "Leur apport mondial est l'architecture moghole, une fusion inouïe des styles perses, islamiques et hindous (coupoles à bulbe, minarets, arcades festonnées, symétrie parfaite des jardins d'eau ou 'Chahar bagh'). Ils atteignent des sommets dans le travail du marbre blanc incrusté de pierres précieuses (pietra dura) et la création de miniatures (peintures enluminées).",
            croyancesText: "Le règne d'Akbar est un miracle de tolérance : musulman gouvernant des millions d'hindous, il abolit l'impôt sur les non-musulmans (la Jizya), épouse des princesses hindoues et invite des moines jésuites portugais à débattre avec les mollahs. Il tente même de fonder une religion syncrétique universelle (le Dîn-i-Ilâhî). Un siècle plus tard, son descendant Aurangzeb fera le chemin inverse en persécutant la majorité, provoquant la ruine de l'empire.",
            diplomatie: "C'est l'un des 'Empires de la poudre à canon' (avec les Ottomans et Safavides). L'armée moghole repose sur de lourds canons importés de Turquie et fixés sur des chars tirés par des bœufs, protégés par des arquebusiers. Pour contrôler les hindous (les Rajputs), ils intègrent massivement leurs nobles dans l'administration fiscale centralisée (le système des Mansabdars).",
            guerres: [
              { nom: "Guerres Marathes", annee: 1680, adversaires: ["Empire Marathe (Shivaji)"], allies: [], morts: "Guerre de guérilla interminable", vainqueur: "Marathes", consequences: "Les hindous du sud se rebellent contre l'intolérance d'Aurangzeb, déclenchant une guérilla de 27 ans qui ruine le trésor moghol et prépare l'invasion britannique.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerres_marathes" }
            ],
            documentaires: [{ titre: "L'Empire moghol, les seigneurs de l'Inde", url: "https://fr.wikipedia.org/wiki/Empire_moghol" }]
          },
          {
            id: "safavides",
            trackId: "perse", row: 3,
            label: "Empire Safavide",
            period: "1501 à 1736", start: 1501, end: 1736,
            color: "#9c27b0", isRiver: false, capitale: "Tabriz puis Ispahan",
            description: "L'éclatante renaissance de la Perse (Iran). Ils ont imposé le chiisme comme religion d'État et transformé leur capitale en 'Moitié du monde'.",
            datesCles: [
              { annee: 1501, evenement: "Couronnement", info: "Ismaïl Ier prend Tabriz et se proclame Chah (Roi), instaurant le Chiisme d'État." },
              { annee: 1514, evenement: "Bataille de Tchaldiran", info: "Défaite traumatisante face à l'artillerie ottomane, figeant la frontière turco-perse." },
              { annee: 1598, evenement: "Ispahan", info: "Le grand roi Abbas Ier fait de la ville sa nouvelle capitale flamboyante." },
              { annee: 1722, evenement: "Siège par les Afghans", info: "Chute de la dynastie après un long siège de la capitale provoquant une famine." }
            ],
            dirigeants: [
              { titre: "Chah", nom: "Ismaïl Ier", surnom: "", debut: 1501, fin: 1524 },
              { titre: "Chah", nom: "Abbas Ier", surnom: "Le Grand", debut: 1588, fin: 1629 }
            ],
            personnages: [
              { nom: "Molla Sadra Chirazi", role: "Philosophe théologien", description: "Le plus grand philosophe iranien de l'époque moderne, théoricien de la théosophie transcendante.", dates: "1571 à 1640", wikiUrl: "https://fr.wikipedia.org/wiki/Molla_Sadra_Chirazi" }
            ],
            sciences: "Leur génie urbain culmine à Ispahan. La place Naqsh-e Jahan est l'une des plus grandes du monde, cernée de bazars, de la colossale Mosquée Royale aux dômes couverts de céramiques émaillées bleues turquoises, et du palais royal surplombant des parties de polo. Leur artisanat devient l'exportation suprême : naissance du grand art mondial du 'tapis persan' en soie et brocart, tissé dans des manufactures d'État.",
            croyancesText: "C'est l'événement géopolitique fondateur du Moyen-Orient moderne. Les souverains safavides forcent massivement la conversion de la population sunnite iranienne au Chiisme duodécimain, invoquant la figure de l'Imam caché. Cette décision crée une ligne de fracture étatique, culturelle et militaire définitive (toujours active aujourd'hui) avec l'empire voisin sunnite des Ottomans.",
            diplomatie: "Isolés au milieu d'empires sunnites hostiles (Ottomans à l'ouest, Ouzbeks à l'est), les Chahs perses déploient une intense diplomatie vers l'Europe chrétienne (France, Angleterre, Vatican) espérant former une alliance de revers ('une attaque en tenaille') contre les Turcs. Pour moderniser son armée, Abbas Ier emploie même des mercenaires anglais (les frères Shirley) pour créer son propre corps de canonniers et d'arquebusiers.",
            guerres: [
              { nom: "Guerres Ottomano-Persanes", annee: 1603, adversaires: ["Empire Ottoman"], allies: [], morts: "Des dizaines de milliers, terres ravagées", vainqueur: "Empire Safavide", consequences: "Abbas le Grand prend sa revanche sur les Ottomans, reconquérant Bagdad et le Caucase, rétablissant la puissance militaire perse.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerres_ottomano-persanes" }
            ],
            documentaires: [{ titre: "L'art et la gloire de la Perse Safavide", url: "https://fr.wikipedia.org/wiki/Safavides" }]
          },
          {
            id: "chine-mod",
            trackId: "chine", row: 4,
            label: "Chine (Ming & Qing)",
            period: "1492 à 1789", start: 1492, end: 1789,
            color: "#e67e22", isRiver: true, capitale: "Pékin",
            description: "La reconstruction d'une muraille de pierre contre le monde extérieur sous les Ming, avant de devenir l'empire le plus vaste, riche et peuplé de la Terre sous les Qing.",
            datesCles: [
              { annee: 1420, evenement: "La Cité Interdite", info: "L'empereur Yongle achève le palais et déplace la capitale définitivement à Pékin." },
              { annee: 1644, evenement: "La Chute des Ming", info: "Une révolte paysanne prend Pékin. Le dernier empereur Ming se pend à un arbre." },
              { annee: 1644, evenement: "L'Invasion Mandchoue", info: "Les guerriers des steppes franchissent la Grande Muraille et fondent la dynastie Qing." },
              { annee: 1689, evenement: "Traité de Nertchinsk", info: "Premier traité officiel avec un pays européen (la Russie de Pierre le Grand)." }
            ],
            dirigeants: [
              { titre: "Empereur (Ming)", nom: "Wanli", surnom: "", debut: 1572, fin: 1620 },
              { titre: "Empereur (Qing)", nom: "Kangxi", surnom: "", debut: 1661, fin: 1722 },
              { titre: "Empereur (Qing)", nom: "Qianlong", surnom: "", debut: 1735, fin: 1796 }
            ],
            personnages: [
              { nom: "Matteo Ricci", role: "Missionnaire Jésuite", description: "Prêtre italien, génie des mathématiques, l'un des très rares étrangers admis à la cour Ming pour avoir traduit la géométrie européenne en chinois.", dates: "1552 à 1610", wikiUrl: "https://fr.wikipedia.org/wiki/Matteo_Ricci" }
            ],
            sciences: "Bien que techniquement stagnante comparée à l'essor européen, la Chine gère une logistique sidérante : le 'Grand Canal', long de 1700 kilomètres, permet d'acheminer via des milliers de barges l'impôt en grain du Sud fertile vers l'aride capitale (Pékin). Ils inondent l'Europe de biens manufacturés de très grand luxe : la porcelaine 'bleu et blanc', la soie, et plus tard le thé.",
            croyancesText: "Le Confucianisme règne en maître : la piété filiale, l'obéissance aux supérieurs et les rites impériaux dictent l'ordre social. L'Empereur est le 'Fils du Ciel' garant de l'harmonie de l'univers. Les envahisseurs Qing (d'ethnie mandchoue) vont s'empresser d'adopter ces rituels chinois pour prouver qu'ils détiennent le Mandat Céleste, tout en imposant brutalement à tous les hommes la coupe de cheveux mandchoue (le crâne rasé avec la natte).",
            diplomatie: "La Chine se considère littéralement comme 'L'Empire du Milieu', le centre absolu de la civilisation, entouré de 'barbares'. Ils n'ont pas de 'diplomatie' ou de ministres des affaires étrangères, mais un 'Système de Tributs' : les pays étrangers (Corée, Vietnam) et même les marchands européens (les Anglais) doivent faire le 'Kowtow' (se prosterner face contre terre) et offrir des cadeaux pour avoir l'insigne honneur de commercer.",
            guerres: [
              { nom: "Campagnes de l'empereur Qianlong", annee: 1755, adversaires: ["Tribus mongoles Zounghares"], allies: [], morts: "Massacre (quasi génocide des Zounghares)", vainqueur: "Dynastie Qing", consequences: "Les armées Qing à feu doublent la taille de la Chine, annexant définitivement le Tibet, la Mongolie et le Turkestan (l'actuel Xinjiang).", wikiUrl: "https://fr.wikipedia.org/wiki/Dix_Grandes_Campagnes" }
            ],
            documentaires: [{ titre: "L'apogée de l'Empire Qing", url: "https://fr.wikipedia.org/wiki/Dynastie_Qing" }]
          },
          {
            id: "japon-mod",
            trackId: "japon", row: 5,
            label: "Japon (Époque d'Edo)",
            period: "1603 à 1868", start: 1603, end: 1789,
            color: "#c0392b", isRiver: false, capitale: "Edo (Tokyo)",
            description: "Après un siècle de massacres, la dictature de Tokugawa verrouille l'archipel dans une paix de fer. Plus d'étrangers, plus d'armes à feu, place à l'art et au sabre.",
            datesCles: [
              { annee: 1600, evenement: "Bataille de Sekigahara", info: "Ieyasu Tokugawa écrase la coalition de l'Ouest, marquant la fin des guerres civiles." },
              { annee: 1603, evenement: "Shogunat Tokugawa", info: "L'Empereur nomme Tokugawa shogun (dictateur militaire héréditaire) du Japon." },
              { annee: 1635, evenement: "Fermeture du pays (Sakoku)", info: "Les navires espagnols et portugais sont expulsés, les Japonais ont interdiction de quitter l'île sous peine de mort." }
            ],
            dirigeants: [
              { titre: "Shogun", nom: "Tokugawa Ieyasu", surnom: "", debut: 1603, fin: 1605 },
              { titre: "Shogun", nom: "Tokugawa Yoshimune", surnom: "Le Shogun des Chiens", debut: 1680, fin: 1709 }
            ],
            personnages: [
              { nom: "Miyamoto Musashi", role: "Le Saint au Sabre", description: "Samouraï errant (rōnin) invaincu en 60 duels mortels, fondateur d'une école d'escrime à deux sabres et auteur du célèbre 'Traité des cinq roues'.", dates: "1584 à 1645", wikiUrl: "https://fr.wikipedia.org/wiki/Miyamoto_Musashi" },
              { nom: "Katsushika Hokusai", role: "Artiste peintre", description: "Le maître incontesté de l'estampe japonaise, auteur au début du 19ème de 'La Grande Vague de Kanagawa'.", dates: "1760 à 1849", wikiUrl: "https://fr.wikipedia.org/wiki/Hokusai" }
            ],
            sciences: "Sans guerre, la société s'urbanise. Edo (Tokyo) devient en 1700 la plus grande ville du monde (1 million d'habitants), hyper-propre et sans épidémie grâce à un système sophistiqué de recyclage des déchets (transformés en engrais payant pour les paysans). Ils maîtrisent parfaitement la xilographie polychrome (gravure sur bois permettant d'imprimer l'art Ukiyo-e) et un enseignement mathématique unique et esthétique (le Sangaku).",
            croyancesText: "L'ordre social est sanctifié par le Néo-confucianisme (Système Shinōkōshō) classant la société : Samouraïs (seuls autorisés à porter deux sabres), Paysans, Artisans, puis Marchands (au bas de l'échelle car vus comme parasites). Le Christianisme est considéré comme une arme politique occidentale : après la révolte catholique de Shimabara en 1637, il est brutalement interdit, les prêtres martyrisés (Fumi-e).",
            diplomatie: "C'est l'époque du 'Sakoku' (le pays enchaîné). Seuls les marchands de la VOC (Hollande) ont le droit de commercer une fois par an sur la minuscule île artificielle de Dejima à Nagasaki, car ils ne font pas de prosélytisme catholique. Pour ruiner et empêcher ses seigneurs (Daimyos) de se rebeller, le Shogun crée le 'Sankin-kōtai' : ils sont obligés de vivre une année sur deux à Edo, laissant leurs familles en otage le reste du temps.",
            guerres: [
              { nom: "Bataille de Sekigahara", annee: 1600, adversaires: ["L'Armée de l'Ouest (Fidèles de Toyotomi)"], allies: ["L'Armée de l'Est (Tokugawa)"], morts: "Environ 30 000 morts au combat", vainqueur: "Tokugawa Ieyasu", consequences: "La plus grande bataille de l'histoire du Japon. La paix de Tokugawa fige la classe des samouraïs, qui se transforme en caste de bureaucrates lettrés.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Sekigahara" }
            ],
            documentaires: [{ titre: "Le Japon : Les heures de gloire d'Edo", url: "https://fr.wikipedia.org/wiki/%C3%89poque_d%27Edo" }]
          },
          {
            id: "joseon",
            trackId: "coree", row: 6,
            label: "Dynastie Joseon (Corée)",
            period: "1392 à 1897", start: 1492, end: 1789,
            color: "#bf360c", isRiver: false, capitale: "Hanseong (Séoul)",
            description: "Le 'Royaume Ermite' : 500 ans de paix confucéenne, d'inventions brillantes (le Hangeul) et de survie héroïque face aux invasions japonaises et mandchoues.",
            datesCles: [
              { annee: 1443, evenement: "Invention du Hangeul", info: "L'Empereur Sejong le Grand promulgue l'alphabet coréen, le plus scientifique du monde." },
              { annee: 1592, evenement: "Invasions japonaises (Guerre d'Imjin)", info: "160 000 soldats de Toyotomi Hideyoshi débarquent pour envahir la Chine via la Corée." },
              { annee: 1636, evenement: "Invasion Qing", info: "Les Mandchous écrasent le roi coréen et forcent le pays à se soumettre à la nouvelle dynastie chinoise." }
            ],
            dirigeants: [
              { titre: "Roi", nom: "Sejong", surnom: "Le Grand", debut: 1418, fin: 1450 },
              { titre: "Roi", nom: "Seonjo", surnom: "", debut: 1567, fin: 1608 }
            ],
            personnages: [
              { nom: "Amiral Yi Sun-sin", role: "Héros militaire", description: "Le 'Nelson asiatique'. Un génie naval invaincu qui a détruit la flotte japonaise à lui seul avec ses navires-tortues lors de la guerre d'Imjin.", dates: "1545 à 1598", wikiUrl: "https://fr.wikipedia.org/wiki/Yi_Sun-sin" }
            ],
            sciences: "Le roi Sejong invente le 'Hangeul', un alphabet phonétique où la forme de la lettre montre littéralement la position de la langue dans la bouche, conçu pour que même le paysan le plus humble puisse apprendre à lire en quelques jours. Militairement, Yi Sun-sin crée le Geobukseon (Navire-tortue), le premier cuirassé à propulsion mixte de l'histoire, couvert de piques en fer pour empêcher l'abordage et doté de canons crachant feu et gaz toxiques (soufre) par une tête de dragon.",
            croyancesText: "Le Bouddhisme est chassé du pouvoir. Joseon devient le pays le plus rigoriste du monde selon les préceptes du Néo-confucianisme de Zhu Xi. Le culte des ancêtres devient obligatoire, la société est cloisonnée et les moines bouddhistes sont bannis des villes et forcés de s'exiler dans les montagnes.",
            diplomatie: "Prise en tenaille entre la Chine et le Japon, la politique étrangère coréenne s'appelle le 'Sadae' (servir le grand). Joseon se déclare volontairement et respectueusement l'État vassal et le 'petit frère' de l'Empire Chinois (Ming puis Qing), garantissant ainsi un parapluie militaire et l'accès exclusif aux marchés commerciaux de Pékin tout en verrouillant ses propres côtes aux barbares occidentaux.",
            guerres: [
              { nom: "Bataille de Myeongnyang (Guerre d'Imjin)", annee: 1597, adversaires: ["Empire du Japon"], allies: ["Empire Ming (Chine)"], morts: "Destruction de l'armada nippone", vainqueur: "Joseon (Amiral Yi)", consequences: "Avec seulement 13 navires rescapés des trahisons de cour, l'Amiral Yi Sun-sin attire 133 navires de guerre japonais dans un détroit à forts courants et les anéantit, sauvant la nation.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Myeongnyang" }
            ],
            documentaires: [{ titre: "Amiral Yi, le sauveur de la Corée", url: "https://fr.wikipedia.org/wiki/Yi_Sun-sin" }]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "azteque",
            trackId: "mesoamerique", row: 1,
            label: "Empire aztèque",
            period: "1428 à 1521", start: 1492, end: 1521,
            color: "#e74c3c", isRiver: false, capitale: "Tenochtitlan (Mexico)",
            description: "Un peuple de mercenaires devenu la superpuissance mésoaméricaine d'une ville lacustre féérique, foudroyé à son apogée par le choc viral et militaire des conquistadors espagnols.",
            datesCles: [
              { annee: 1428, evenement: "La Triple Alliance", info: "Tenochtitlan s'allie avec Texcoco et Tlacopan, formant l'Empire aztèque." },
              { annee: 1487, evenement: "Inauguration du Templo Mayor", info: "L'Empereur Ahuitzotl sacrifie des milliers de captifs en quatre jours." },
              { annee: 1519, evenement: "L'Arrivée de Cortés", info: "Les Espagnols entrent dans la métropole d'eau et sont éblouis par sa propreté et sa taille (200 000 hab)." },
              { annee: 1521, evenement: "La Chute", info: "Siège, famine, variole et assaut final. La ville est rasée pour construire Mexico." }
            ],
            dirigeants: [
              { titre: "Tlatoani (Empereur)", nom: "Ahuitzotl", surnom: "", debut: 1486, fin: 1502 },
              { titre: "Tlatoani", nom: "Moctezuma II", surnom: "", debut: 1502, fin: 1520 },
              { titre: "Dernier Tlatoani", nom: "Cuauhtémoc", surnom: "L'Aigle qui tombe", debut: 1520, fin: 1521 }
            ],
            personnages: [
              { nom: "Hernán Cortés", role: "Conquistador", description: "Aventurier castillan impitoyable et stratège de génie, qui exploita les haines locales pour renverser l'Empire.", dates: "1485 à 1547", wikiUrl: "https://fr.wikipedia.org/wiki/Hern%C3%A1n_Cort%C3%A9s" },
              { nom: "La Malinche (Doña Marina)", role: "Interprète", description: "Esclave indigène offerte à Cortés. Maîtrisant le nahuatl et le maya, son rôle fut déterminant dans la chute de son propre peuple.", dates: "≈ 1500 à 1529", wikiUrl: "https://fr.wikipedia.org/wiki/La_Malinche" }
            ],
            sciences: "Construite au milieu d'un lac d'altitude, Tenochtitlan est la 'Venise du Nouveau Monde'. L'ingénierie aztèque invente les 'Chinampas' (jardins flottants) : d'immenses radeaux d'osier recouverts de boue fertile fixés au fond du lac par des racines de saule, permettant d'obtenir jusqu'à 7 récoltes annuelles de maïs pour nourrir une mégalopole gargantuesque traversée de canaux et d'aqueducs d'eau douce.",
            croyancesText: "C'est la religion de l'Apocalypse (le mythe du 5ème Soleil). L'univers est voué à mourir si le soleil (Huitzilopochtli) s'arrête. Le seul 'carburant' cosmique capable de nourrir l'astre est l'eau précieuse (le sang humain). Cette terreur eschatologique justifie l'institutionnalisation des sacrifices humains : l'arrachage du cœur palpitant au couteau d'obsidienne en haut du Templo Mayor. La mort au combat ou sacrifié est la seule garantissant le paradis.",
            diplomatie: "Pour maintenir le stock de prisonniers nécessaires aux sacrifices (et l'apport en cacao, coton et jade), les Aztèques mènent des 'Guerres Fleuries' (Xochiyaoyotl). Des batailles arrangées ritualisées contre des royaumes vassaux (Tlaxcala) où le but n'est pas de tuer, mais de capturer vivant. Ces peuples opprimés, haïssant la tyrannie de Tenochtitlan, fourniront les dizaines de milliers d'alliés indispensables à la victoire espagnole.",
            guerres: [
              { nom: "Siège de Tenochtitlan", annee: 1521, adversaires: ["Conquistadors Espagnols"], allies: ["Centaines de milliers de Tlaxcaltèques et Totonaques"], morts: "Anéantissement démographique aztèque (glaive + variole)", vainqueur: "Espagne (Hernán Cortés)", consequences: "Chute définitive du monde précolombien. Sur les ruines du Templo Mayor sanglant, les prêtres catholiques édifient la future cathédrale de Mexico.", wikiUrl: "https://fr.wikipedia.org/wiki/Chute_de_l%27Empire_azt%C3%A8que" }
            ],
            documentaires: [{ titre: "Le dernier jour des Aztèques", url: "https://fr.wikipedia.org/wiki/Azt%C3%A8ques" }]
          },
          {
            id: "inca",
            trackId: "andes", row: 2,
            label: "Empire inca",
            period: "1438 à 1533", start: 1492, end: 1533,
            color: "#f39c12", isRiver: false, capitale: "Cuzco",
            description: "Le 'Tahuantinsuyu' (l'Empire des 4 quartiers). Un prodige administratif de 4000 kilomètres étiré sur la cordillère des Andes, administré sans aucune monnaie ni écriture.",
            datesCles: [
              { annee: 1438, evenement: "Pachacutec", info: "L'empereur transforme un petit royaume de Cuzco en un empire continental foudroyant." },
              { annee: 1450, evenement: "Machu Picchu", info: "Construction du mystérieux sanctuaire et domaine royal perché dans les nuages." },
              { annee: 1529, evenement: "Guerre Civile Inca", info: "Guerre de succession fraternelle entre Atahualpa et Huascar, affaiblissant mortellement l'empire." },
              { annee: 1532, evenement: "Massacre de Cajamarca", info: "Pizarro capture par surprise le Sapa Inca, sonnant l'hallali de l'empire andin." }
            ],
            dirigeants: [
              { titre: "Sapa Inca (Empereur)", nom: "Pachacútec", surnom: "Celui qui bouleverse le monde", debut: 1438, fin: 1471 },
              { titre: "Dernier Empereur", nom: "Atahualpa", surnom: "", debut: 1532, fin: 1533 }
            ],
            personnages: [
              { nom: "Francisco Pizarro", role: "Conquistador", description: "Ancien porcher espagnol illettré, analphabète mais stratège impitoyable, il s'empara du plus grand empire d'Amérique avec seulement 168 soldats.", dates: "1478 à 1541", wikiUrl: "https://fr.wikipedia.org/wiki/Francisco_Pizarro" }
            ],
            sciences: "Leur génie réside dans l'organisation étatique, la logistique et l'architecture antisismique de pointe. Dénués d'écriture, ils administrent des millions de sujets via les Quipus (système complexe de cordelettes à nœuds colorés tenu par les Quipucamayocs) pour la comptabilité et le recensement. Le Qhapaq Ñan est un prodigieux réseau de routes pavées de 30 000 km d'altitude, franchissant les précipices grâce à des ponts suspendus en fibres végétales tressées.",
            croyancesText: "Le Sapa Inca ('Inca Unique') est le fils vivant du dieu Soleil (Inti). À sa mort, le souverain est éviscéré, séché, et sa momie (le Mallqui) continue 'réellement' à régner, participant aux banquets, aux défilés rituels sur la place d'armes de Cuzco (l'Auccaypata), et conservant la propriété de tous ses palais et de ses terres, ce qui force ses successeurs à toujours conquérir de nouvelles terres pour financer leur propre cour.",
            diplomatie: "C'est l'État providence et centralisé ultime (la Mita). Pas d'argent : l'impôt se paie en force de travail manuel pour l'État. En échange, les immenses greniers impériaux (Qollqas) redistribuent nourriture et vêtements à la population lors des famines (sécheresses andines). L'expansion diplomatique inca privilégiait d'abord l'offre d'assimilation douce avec échanges de cadeaux somptueux. Si l'ennemi refusait, l'armée impériale andine écrasait son royaume.",
            guerres: [
              { nom: "Bataille de Cajamarca", annee: 1532, adversaires: ["Espagne (Pizarro)"], allies: ["Tribus locales anti-incas"], morts: "Plus de 2000 dignitaires incas massacrés sans défense", vainqueur: "Espagne", consequences: "En un coup de poker sidérant, Pizarro capture l'Inca-Dieu Atahualpa au milieu de son armée de 80 000 hommes. Il encaisse la 'Rançon de l'Inca' (une pièce remplie d'or massif) puis le fait étrangler, provoquant l'effondrement pyramidal de l'État.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Cajamarca" }
            ],
            documentaires: [{ titre: "L'empire Inca, le secret des nuages", url: "https://fr.wikipedia.org/wiki/Empire_inca" }]
          },
          {
            id: "usa-moderne",
            trackId: "usa", row: 3,
            label: "États-Unis d'Amérique (Fondation)",
            period: "1776 à 1789", start: 1776, end: 1789,
            color: "#1a237e", isRiver: false, capitale: "Philadelphie",
            description: "La rébellion politique de treize colonies britanniques qui, aidées par la France, vont inventer la démocratie constitutionnelle moderne.",
            datesCles: [
              { annee: 1773, evenement: "Boston Tea Party", info: "Les colons jettent les cargaisons de thé à l'eau pour protester contre les impôts anglais ('No taxation without representation')." },
              { annee: 1776, evenement: "Déclaration d'Indépendance", info: "Le 4 juillet, rédigée par Thomas Jefferson, proclamant le droit au 'bonheur' et l'égalité des hommes (blancs)." },
              { annee: 1781, evenement: "Bataille de Yorktown", info: "Washington et l'armée française de Rochambeau/Lafayette obligent l'Angleterre à capituler." },
              { annee: 1787, evenement: "La Constitution", info: "Les pères fondateurs instaurent la première république fédérale présidentielle moderne." }
            ],
            dirigeants: [
              { titre: "1er Président", nom: "George Washington", surnom: "", debut: 1789, fin: 1797 }
            ],
            personnages: [
              { nom: "Benjamin Franklin", role: "Polymathe et Diplomate", description: "L'incarnation des Lumières américaines. Physicien (le paratonnerre), imprimeur, c'est son génie diplomatique qui convaincra le roi de France de financer la Révolution américaine.", dates: "1706 à 1790", wikiUrl: "https://fr.wikipedia.org/wiki/Benjamin_Franklin" },
              { nom: "Marquis de La Fayette", role: "Général", description: "Le 'Héros des deux mondes'. Ce jeune noble français finança son propre navire pour venir libérer l'Amérique, forgeant l'alliance éternelle franco-américaine.", dates: "1757 à 1834", wikiUrl: "https://fr.wikipedia.org/wiki/Gilbert_du_Motier_de_La_Fayette" }
            ],
            sciences: "Outre les inventions pratiques de Franklin (paratonnerre, lunettes à double foyer), l'innovation majeure de la jeune nation est la 'Science politique'. La Constitution (1787) met en pratique stricte la théorie européenne de Montesquieu sur la séparation des pouvoirs : Législatif (Congrès), Exécutif (Président), Judiciaire (Cour Suprême), avec un système d'équilibre ('Checks and Balances').",
            croyancesText: "Profondément marqués par le puritanisme de la Nouvelle-Angleterre (le Mayflower, le mythe de la 'Cité sur la Colline'), les Pères fondateurs (majoritairement déistes ou protestants) accomplissent une révolution absolue : le Premier Amendement interdit formellement à l'État d'établir une religion officielle, instaurant une laïcité stricte de l'État mais une totale ferveur de la société (In God We Trust).",
            diplomatie: "La guerre d'indépendance était ingagnable militairement seule. Les miliciens et 'Minutemen' de Washington, mal équipés, survivaient dans les hivers de Valley Forge. Le salut vint du Traité d'alliance franco-américain de 1778. L'envoi par Louis XVI de millions de livres d'or, d'armes, de l'escadre de l'amiral de Grasse et de l'armée de Rochambeau a coulé la couronne française mais sauvé l'Amérique naissante.",
            guerres: [
              { nom: "Guerre d'indépendance des États-Unis", annee: 1775, adversaires: ["Empire Britannique (George III)"], allies: ["Royaume de France", "Royaume d'Espagne"], morts: "Env. 25 000 patriotes américains", vainqueur: "États-Unis d'Amérique", consequences: "Traité de Paris (1783) reconnaissant l'indépendance. Le fardeau financier de cette guerre précipitera la France dans sa propre Révolution de 1789.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_d'ind%C3%A9pendance_des_%C3%89tats-Unis" }
            ],
            documentaires: [{ titre: "La Révolution américaine : Naissance d'une nation", url: "https://fr.wikipedia.org/wiki/R%C3%A9volution_am%C3%A9ricaine" }]
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
    description: "L'effondrement des rois, la révolution industrielle et fossile, l'horreur des totalitarismes mondiaux et l'ère du capitalisme libéral, technologique et nucléaire.",
    continents: [
      {
        id: "europe", label: "Europe",
        civilizations: [
          {
            id: "france-contemp",
            trackId: "france", row: 1,
            label: "France",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#3f6fd1", isRiver: false, capitale: "Paris",
            description: "La nation révolutionnaire (5 républiques, 2 empires, 2 monarchies en deux siècles), accouchant des droits de l'homme et du Code civil au prix d'un sanglant accouchement.",
            datesCles: [
              { annee: 1789, evenement: "La Révolution", info: "Prise de la Bastille, Déclaration des Droits de l'Homme, chute de la monarchie absolue de Louis XVI." },
              { annee: 1804, evenement: "L'Empire", info: "Napoléon Bonaparte se sacre Empereur des Français et soumet la majorité de l'Europe." },
              { annee: 1914, evenement: "Première Guerre mondiale", info: "La victoire héroïque dans les tranchées (Verdun) ruine le pays." },
              { annee: 1940, evenement: "La Seconde Guerre", info: "Débâcle face à l'Allemagne nazie. Régime de Vichy contre Résistance (De Gaulle)." },
              { annee: 1958, evenement: "Ve République", info: "Le Général de Gaulle crée un régime présidentiel fort." }
            ],
            dirigeants: [
              { titre: "L'Incorruptible", nom: "Robespierre", surnom: "", debut: 1793, fin: 1794 },
              { titre: "Empereur des Français", nom: "Napoléon Ier", surnom: "L'Aigle", debut: 1804, fin: 1815 },
              { titre: "Président de la République", nom: "Charles de Gaulle", surnom: "Le Général", debut: 1958, fin: 1969 }
            ],
            personnages: [
              { nom: "Marie Curie", role: "Scientifique", description: "Pionnière absolue de la radioactivité. Première femme (et seule personne) ayant reçu deux Prix Nobel dans deux sciences (Physique et Chimie).", dates: "1867 à 1934", wikiUrl: "https://fr.wikipedia.org/wiki/Marie_Curie" },
              { nom: "Victor Hugo", role: "Écrivain et Homme d'État", description: "Auteur monumental (Les Misérables), conscience morale de la République et farouche opposant à la peine de mort et à Napoléon III.", dates: "1802 à 1885", wikiUrl: "https://fr.wikipedia.org/wiki/Victor_Hugo" }
            ],
            sciences: "Puissance d'ingénierie majeure : Louis Pasteur révolutionne la médecine mondiale avec le vaccin contre la rage et le concept des microbes. Au XXe siècle, la France se dote d'une infrastructure d'État souveraine : l'indépendance énergétique par l'édification du plus vaste réseau de centrales nucléaires d'Europe, la suprématie ferroviaire avec l'invention du TGV, et de l'avion supersonique civil Concorde (avec le Royaume-Uni).",
            croyancesText: "Le grand choc est la Loi de séparation des Églises et de l'État de 1905, accouchant du concept unique de 'Laïcité' à la française : la religion relève strictement du domaine privé. La 'Religion Républicaine' d'État s'appuie sur la trilogie 'Liberté, Égalité, Fraternité', transmise d'abord par les 'hussards noirs' (les instituteurs de l'école laïque, gratuite et obligatoire de Jules Ferry).",
            diplomatie: "Durant le 19ème, c'est l'Empire colonial : avec l'Afrique et l'Indochine, la France bâtit le 2ème plus vaste empire mondial derrière les Anglais (la 'Mission civilisatrice'). Après l'humiliation de 1940 et les sanglantes guerres de décolonisation (Algérie, Indochine), la diplomatie gaullienne vise l'indépendance (bombe atomique, sortie du commandement de l'OTAN) et cofonde, avec l'ennemi d'hier (l'Allemagne), le projet européen pacifique.",
            guerres: [
              { nom: "Première Guerre mondiale (La Grande Guerre)", annee: 1914, adversaires: ["Empire Allemand", "Autriche-Hongrie"], allies: ["Empire Britannique", "Empire Russe", "États-Unis"], morts: "1,4 million de soldats français tués", vainqueur: "La France et ses alliés", consequences: "Victoire pyrrhique. Le Traité de Versailles (1919) humilie l'Allemagne, jetant les graines du ressentiment qui mènera au nazisme et à la Seconde Guerre mondiale.", wikiUrl: "https://fr.wikipedia.org/wiki/Premi%C3%A8re_Guerre_mondiale" }
            ],
            documentaires: [{ titre: "De Gaulle et l'histoire de la Ve République", url: "https://fr.wikipedia.org/wiki/Cinqui%C3%A8me_R%C3%A9publique_(France)" }]
          },
          {
            id: "royaume-uni",
            trackId: "angleterre", row: 2,
            label: "Royaume-Uni",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#c0392b", isRiver: false, capitale: "Londres",
            description: "Le pays qui a allumé la chaudière du monde moderne (la Révolution Industrielle), avant d'être le seul d'Europe à résister seul au nazisme en 1940.",
            datesCles: [
              { annee: 1815, evenement: "Bataille de Waterloo", info: "Le duc de Wellington vainc définitivement Napoléon, assurant l'hégémonie britannique." },
              { annee: 1837, evenement: "L'Ère Victorienne", info: "Apogée du plus grand empire de l'histoire, la 'Pax Britannica'." },
              { annee: 1940, evenement: "La Bataille d'Angleterre", info: "Churchill promet 'du sang et des larmes' : la Royal Air Force sauve le pays de l'invasion hitlérienne." },
              { annee: 2016, evenement: "Le Brexit", info: "Par référendum choc, le peuple britannique décide de sortir de l'Union Européenne." }
            ],
            dirigeants: [
              { titre: "Reine et Impératrice des Indes", nom: "Victoria", surnom: "La Grand-mère de l'Europe", debut: 1837, fin: 1901 },
              { titre: "Premier Ministre", nom: "Winston Churchill", surnom: "Le Vieux Lion", debut: 1940, fin: 1945 },
              { titre: "Reine", nom: "Élisabeth II", surnom: "", debut: 1952, fin: 2022 }
            ],
            personnages: [
              { nom: "Charles Darwin", role: "Biologiste", description: "Publication de 'L'Origine des espèces'. La théorie de l'évolution par la sélection naturelle détruit la vision biblique de la création.", dates: "1809 à 1882", wikiUrl: "https://fr.wikipedia.org/wiki/Charles_Darwin" },
              { nom: "Alan Turing", role: "Mathématicien", description: "Père de l'informatique moderne. A brisé la machine de codage nazie (Enigma) puis condamné par l'État pour son homosexualité.", dates: "1912 à 1954", wikiUrl: "https://fr.wikipedia.org/wiki/Alan_Turing" }
            ],
            sciences: "Le Royaume-Uni est l'usine du monde du 19ème siècle. Abondamment fourni en charbon, ils exploitent la machine à vapeur (James Watt) dans des usines textiles géantes (Manchester, Birmingham). Ils révolutionnent le transport mondial par l'invention de la locomotive à vapeur (Stephenson) et du télégraphe. Sous la Seconde guerre mondiale, ils inventent le Radar militaire.",
            croyancesText: "L'Anglicanisme perd de sa ferveur absolue au profit d'un pragmatisme économique : le Libéralisme (théorisé par l'écossais Adam Smith dans 'La Richesse des nations'). La foi dans le libre-échange, le capitalisme industriel et la 'Main invisible' devient la nouvelle religion d'État, au détriment des conditions de vie horrifiques des ouvriers (théorisées par Marx, exilé à Londres).",
            diplomatie: "La 'Splendide Solitude' du 19ème : isolés du continent, ils règnent sur l'Inde, l'Australie, le Canada et une partie de l'Afrique par la domination navale totale de la Royal Navy. Avec le 20ème siècle (WW1 et WWII), l'Empire s'effondre économiquement, les colonies prennent leur indépendance (Commonwealth). Londres devient alors le plus proche allié indéfectible de la superpuissance américaine (La Relation Spéciale).",
            guerres: [
              { nom: "Bataille d'Angleterre (WWII)", annee: 1940, adversaires: ["Allemagne Nazie (Luftwaffe)"], allies: ["Pilotes polonais, tchèques, français libres"], morts: "40 000 civils sous le Blitz (bombardements)", vainqueur: "Royaume-Uni", consequences: "Échec total du plan d'invasion de Hitler (Opération Lion de Mer). C'est le grand tournant psychologique mondial : le nazisme n'est pas invincible.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_d'Angleterre" }
            ],
            documentaires: [{ titre: "L'Empire où le soleil ne se couche jamais", url: "https://fr.wikipedia.org/wiki/Empire_britannique" }]
          },
          {
            id: "allemagne",
            trackId: "allemagne", row: 3,
            label: "Allemagne",
            period: "1871 à 2020", start: 1871, end: 2020,
            color: "#34495e", isRiver: false, capitale: "Berlin (Bonn pendant scission)",
            description: "Unification fulgurante par le sang et le fer, effondrement dans l'abysse génocidaire nazi, puis renaissance en tant que moteur démocratique et économique de l'Europe.",
            datesCles: [
              { annee: 1871, evenement: "L'Unification", info: "Bismarck fonde l'Empire allemand (IIe Reich) dans la Galerie des Glaces à Versailles." },
              { annee: 1933, evenement: "La Tragédie", info: "La crise de 1929 détruit la République de Weimar, Hitler est nommé démocratiquement Chancelier." },
              { annee: 1945, evenement: "L'Année Zéro", info: "Le pays, en ruines totales, est vaincu, dénazifié et divisé en deux (RFA à l'ouest, RDA communiste à l'est)." },
              { annee: 1989, evenement: "Chute du Mur de Berlin", info: "Effondrement du bloc soviétique, réunification pacifique de l'Allemagne." }
            ],
            dirigeants: [
              { titre: "Le Chancelier de Fer", nom: "Otto von Bismarck", surnom: "", debut: 1871, fin: 1890 },
              { titre: "Dictateur (Führer)", nom: "Adolf Hitler", surnom: "", debut: 1933, fin: 1945 },
              { titre: "Chancelière Fédérale", nom: "Angela Merkel", surnom: "Mutti", debut: 2005, fin: 2021 }
            ],
            personnages: [
              { nom: "Albert Einstein", role: "Physicien", description: "Révolutionne la conception de l'espace, du temps et de la gravité avec ses théories de la relativité. Fuit le nazisme en 1933.", dates: "1879 à 1955", wikiUrl: "https://fr.wikipedia.org/wiki/Albert_Einstein" },
              { nom: "Karl Marx", role: "Philosophe et économiste", description: "Co-auteur du Manifeste du parti communiste, dénonçant l'exploitation capitaliste et appelant à la révolution prolétarienne mondiale.", dates: "1818 à 1883", wikiUrl: "https://fr.wikipedia.org/wiki/Karl_Marx" }
            ],
            sciences: "Génie mondial de la chimie (invention de l'aspirine, des engrais de synthèse BASF), de la physique quantique et de l'ingénierie automobile (Moteur à explosion de Benz et Daimler). Cependant, ce génie fut tragiquement exploité pendant le IIIe Reich : invention d'une terrifiante ingénierie de la mort (chambres à gaz, camps d'extermination industriels comme Auschwitz) et invention de la première fusée balistique (V2) par Wernher von Braun.",
            croyancesText: "Après les ravages de l'idéologie nazie axée sur le racisme pseudo-scientifique (supériorité de la race 'Aryenne') et de l'Antisémitisme génocidaire de l'État (la Shoah), l'Allemagne de l'Ouest (puis réunifiée) se refonde sur la notion indéfectible d'État de Droit, le libéralisme économique 'rhénan', l'anti-militarisme et la culpabilité historique reconnue ('Erinnerungskultur' ou culture de la mémoire).",
            diplomatie: "Du Weltpolitik (politique mondiale) belliqueuse du Kaiser Guillaume II menant à WWI, à l'expansionnisme vital fanatique (Lebensraum) d'Hitler déclenchant WWII, l'Allemagne s'est heurtée au monde entier. Depuis 1945, la politique étrangère (Ostpolitik) est radicalement pacifique : l'ancrage pro-européen et le pacifisme absolu priment, l'Allemagne devenant le géant économique (puissance exportatrice) de l'Union Européenne sans ses ambitions militaires.",
            guerres: [
              { nom: "Seconde Guerre mondiale (Front de l'Est/Ouest)", annee: 1939, adversaires: ["URSS", "États-Unis", "Royaume-Uni", "France"], allies: ["Italie fasciste", "Empire du Japon (L'Axe)"], morts: "Plus de 60 millions au total (dont la Shoah)", vainqueur: "Les Alliés", consequences: "Anéantissement du totalitarisme nazi. Début de l'ère atomique. Le monde se fracture en deux lors de la Guerre froide naissante.", wikiUrl: "https://fr.wikipedia.org/wiki/Seconde_Guerre_mondiale" }
            ],
            documentaires: [{ titre: "Apocalypse : La Seconde Guerre mondiale", url: "https://fr.wikipedia.org/wiki/Seconde_Guerre_mondiale" }]
          },
          {
            id: "russie",
            trackId: "rus", row: 4,
            label: "Russie / URSS",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#8e44ad", isRiver: false, capitale: "Saint-Pétersbourg / Moscou",
            description: "Des fastes de l'autocratie tsariste à la création sanglante de la première puissance communiste mondiale, effondrée puis ressuscitée dans un nationalisme fort.",
            datesCles: [
              { annee: 1812, evenement: "Guerre Patriotique", info: "L'hiver russe et la terre brûlée anéantissent la Grande Armée de Napoléon." },
              { annee: 1917, evenement: "La Révolution d'Octobre", info: "Lénine et les Bolchéviques instaurent le premier État communiste (l'Union Soviétique)." },
              { annee: 1943, evenement: "Bataille de Stalingrad", info: "Point d'arrêt sanglant du nazisme, l'Armée rouge gagne au prix de 27 millions de morts." },
              { annee: 1991, evenement: "Chute de l'URSS", info: "Gorbatchev démissionne, fin pacifique du bloc de l'Est." }
            ],
            dirigeants: [
              { titre: "Tsar", nom: "Nicolas II", surnom: "", debut: 1894, fin: 1917 },
              { titre: "Secrétaire Général (Dictateur)", nom: "Joseph Staline", surnom: "Le Petit Père des Peuples", debut: 1922, fin: 1953 },
              { titre: "Président Fédéral", nom: "Vladimir Poutine", surnom: "", debut: 1999, fin: 2020 }
            ],
            personnages: [
              { nom: "Vladimir Ilitch Lénine", role: "Révolutionnaire", description: "Théoricien marxiste, fondateur de l'Union des républiques socialistes soviétiques (URSS).", dates: "1870 à 1924", wikiUrl: "https://fr.wikipedia.org/wiki/Vladimir_Ilitch_L%C3%A9nine" },
              { nom: "Iouri Gagarine", role: "Cosmonaute", description: "Le 12 avril 1961, il devient le premier homme de l'histoire à voyager dans l'espace.", dates: "1934 à 1968", wikiUrl: "https://fr.wikipedia.org/wiki/Iouri_Gagarine" }
            ],
            sciences: "Le rattrapage scientifique sous le communisme stalinien fut forcé et spectaculaire : d'une nation agricole misérable à une superpuissance d'industrie lourde et nucléaire en 20 ans. La course à l'espace soviétique offre à l'humanité le premier satellite artificiel (Sputnik), le premier animal et le premier homme dans l'espace. Ils inventent également la légendaire arme d'assaut (AK-47 Kalachnikov).",
            croyancesText: "Sous l'URSS, l'athéisme d'État scientifique fut imposé avec force : fermeture des églises orthodoxes, goulag pour les dissidents et effacement complet des religions, remplacées par le culte idéologique quasi-religieux de Staline et Lénine. Après l'effondrement soviétique de 1991, l'État russe post-communiste s'appuie à nouveau lourdement sur l'Église orthodoxe russe du patriarche Kirill pour légitimer son autorité nationale et morale.",
            diplomatie: "Après la Seconde Guerre, l'URSS impose le 'Rideau de Fer' sur les pays d'Europe de l'Est (Pacte de Varsovie). C'est la Guerre Froide face aux États-Unis : un duel idéologique mondial par conflits interposés sans affrontement militaire direct (Équilibre de la terreur nucléaire). L'économie planifiée soviétique s'écroule en 1991. La Russie contemporaine mène une politique de reconquête d'influence farouche sur son 'étranger proche'.",
            guerres: [
              { nom: "Grande Guerre patriotique (Front de l'Est WWII)", annee: 1941, adversaires: ["Allemagne Nazie (Opération Barbarossa)"], allies: ["États-Unis", "Royaume-Uni"], morts: "27 millions de Soviétiques", vainqueur: "URSS", consequences: "L'Armée Rouge détruit plus de 80% des troupes d'élite de la Wehrmacht, prend Berlin et installe le communisme sur la moitié de l'Europe.", wikiUrl: "https://fr.wikipedia.org/wiki/Front_de_l'Est_(Seconde_Guerre_mondiale)" }
            ],
            documentaires: [{ titre: "Staline, le Tyran rouge", url: "https://fr.wikipedia.org/wiki/Joseph_Staline" }]
          },
          {
            id: "autriche-hongrie",
            trackId: "autriche", row: 5,
            label: "Autriche-Hongrie",
            period: "1804 à 1918", start: 1789, end: 1918,
            color: "#fbc02d", isRiver: false, capitale: "Vienne",
            description: "La 'Mosaïque de peuples'. L'imposant empire conservateur des Habsbourg abritant la plus brillante ébullition intellectuelle d'Europe centrale, foudroyé par les nationalismes.",
            datesCles: [
              { annee: 1815, evenement: "Le Congrès de Vienne", info: "L'Autriche de Metternich redessine la carte de l'Europe après la chute de Napoléon." },
              { annee: 1867, evenement: "Le Compromis", info: "Pour éviter l'implosion, l'empire se divise en 'Double Monarchie' : l'Autriche et la Hongrie à parts égales." },
              { annee: 1914, evenement: "Attentat de Sarajevo", info: "L'héritier de l'Empire est assassiné par un nationaliste serbe, déclenchant l'apocalypse mondiale." },
              { annee: 1918, evenement: "Démantèlement", info: "La défaite disloque l'Empire en plusieurs pays : Autriche, Hongrie, Tchécoslovaquie, Yougoslavie." }
            ],
            dirigeants: [
              { titre: "Empereur d'Autriche (Roi de Hongrie)", nom: "François-Joseph Ier", surnom: "", debut: 1848, fin: 1916 },
              { titre: "Dernier Empereur", nom: "Charles Ier", surnom: "", debut: 1916, fin: 1918 }
            ],
            personnages: [
              { nom: "Impératrice Élisabeth", role: "Sissi", description: "L'impératrice martyre et dépressive, refusant le protocole archaïque de Vienne, grande protectrice de la nation hongroise.", dates: "1837 à 1898", wikiUrl: "https://fr.wikipedia.org/wiki/%C3%89lisabeth_en_Bavi%C3%A8re" },
              { nom: "Sigmund Freud", role: "Médecin et Neurologue", description: "Inventeur de la psychanalyse au sein de la foisonnante Vienne de la fin de siècle.", dates: "1856 à 1939", wikiUrl: "https://fr.wikipedia.org/wiki/Sigmund_Freud" }
            ],
            sciences: "La 'Vienne fin de siècle' est la capitale mondiale de la modernité artistique et scientifique, un bouillon de culture (Klimt, Mahler, Freud, Zweig). Scientifiquement, Gregor Mendel (un moine morave de l'Empire) fonde la génétique moderne avec ses lois sur les petits pois, et Ignaz Semmelweis impose l'asepsie (lavage des mains) en médecine.",
            croyancesText: "L'Empire est le bastion catholique conservateur. Mais sa fragilité et sa richesse viennent de ses formidables minorités. Vienne est l'une des grandes capitales du judaïsme européen, berceau intellectuel du Sionisme théorisé par Theodor Herzl (visant à créer un État juif face à la montée de l'antisémitisme en Europe).",
            diplomatie: "Diriger 50 millions d'habitants parlant 11 langues officielles différentes (Allemands, Magyars, Tchèques, Croates, Polonais) sous une monarchie germanophone est un numéro d'équilibriste mortel. L'éveil de l'idée de 'Nation' en Europe rend ce système caduc. En s'alliant militairement avec l'Allemagne (La Duplice), Vienne condamne son destin à celui de Berlin lors de la Première Guerre mondiale.",
            guerres: [
              { nom: "Bataille de Sadowa", annee: 1866, adversaires: ["Royaume de Prusse (Bismarck)"], allies: ["Saxe, Bavière"], morts: "Pertes stratégiques catastrophiques", vainqueur: "Prusse", consequences: "Bismarck expulse définitivement l'Autriche des affaires allemandes, laissant le champ libre à la création de l'Empire Allemand quelques années plus tard.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_austro-prussienne" }
            ],
            documentaires: [{ titre: "L'Empire Austro-Hongrois, le crépuscule des Habsbourg", url: "https://fr.wikipedia.org/wiki/Autriche-Hongrie" }]
          },
          {
            id: "italie-contemp",
            trackId: "italie", row: 6,
            label: "Italie (Unification à la République)",
            period: "1861 à 2020", start: 1861, end: 2020,
            color: "#4caf50", isRiver: false, capitale: "Rome",
            description: "L'émergence difficile d'un seul pays sur un territoire fracturé (Le Risorgimento), l'invention du Fascisme, et la refondation d'une puissance économique pro-européenne.",
            datesCles: [
              { annee: 1861, evenement: "Le Risorgimento", info: "Garibaldi et Cavour réussissent l'unification politique de l'Italie du Nord et du Sud." },
              { annee: 1922, evenement: "Marche sur Rome", info: "Le Roi, effrayé, cède le pouvoir aux 'Chemises noires', fondation de la première dictature fasciste." },
              { annee: 1943, evenement: "La Chute du Duce", info: "Les Alliés débarquent au Sud. Le Roi fait arrêter Mussolini, l'Italie bascule dans la guerre civile." },
              { annee: 1946, evenement: "La République", info: "Par référendum, l'Italie abolit la royauté, responsable de l'alliance avec Hitler." }
            ],
            dirigeants: [
              { titre: "Roi d'Italie", nom: "Victor-Emmanuel II", surnom: "Le Père de la Patrie", debut: 1861, fin: 1878 },
              { titre: "Duce du Fascisme", nom: "Benito Mussolini", surnom: "Le Duce", debut: 1922, fin: 1943 }
            ],
            personnages: [
              { nom: "Giuseppe Garibaldi", role: "Général Républicain", description: "Le mercenaire au maillot rouge de la liberté. Héros charismatique de la guérilla ayant offert le sud (Les Deux-Siciles) au roi pour unifier le pays.", dates: "1807 à 1882", wikiUrl: "https://fr.wikipedia.org/wiki/Giuseppe_Garibaldi" },
              { nom: "Enrico Fermi", role: "Physicien théoricien", description: "L'un des pionniers de la physique nucléaire et créateur du premier réacteur nucléaire. Prix Nobel exilé aux États-Unis.", dates: "1901 à 1954", wikiUrl: "https://fr.wikipedia.org/wiki/Enrico_Fermi" }
            ],
            sciences: "Le génie italien moderne s'illustre avec Guglielmo Marconi, co-inventeur de la radio (liaisons TSF), révolutionnant les communications mondiales. Après 1945, c'est le 'Miracle économique italien', soutenu par une industrie de design, de mécanique de précision et d'automobile (Fiat) dans le nord prospère (Triangle industriel de Milan-Turin-Gênes), contrastant avec le Mezzogiorno agraire au sud.",
            croyancesText: "L'unification italienne a un prix : annexer militairement les États du Pape. Pie IX s'enferme au Vatican et se déclare 'prisonnier politique', interdisant aux catholiques de voter. Le problème sera cyniquement réglé par le fasciste Mussolini lors des Accords du Latran (1929), qui font de la minuscule Cité du Vatican un État indépendant. Après la guerre, la démocratie chrétienne ('Democrazia Cristiana') gouvernera le pays pendant 50 ans.",
            diplomatie: "Hantée par le mythe de la grandeur de l'Empire Romain, l'Italie fasciste tente d'édifier un empire colonial en Libye et en Éthiopie (guerre au gaz moutarde en 1935). L'alliance désastreuse avec l'Allemagne nazie (Pacte d'Acier) mène le pays à la ruine en 1945. L'Italie d'après-guerre choisit la diplomatie pacifiste de coopération : elle est l'un des 6 grands membres fondateurs du Traité de Rome (1957) instaurant la CEE (future Europe).",
            guerres: [
              { nom: "Troisième guerre d'Indépendance italienne", annee: 1866, adversaires: ["Autriche-Hongrie"], allies: ["Royaume de Prusse"], morts: "Pertes modérées", vainqueur: "Italie et Prusse", consequences: "Grâce à l'aide tactique prussienne, le jeune royaume d'Italie arrache enfin la Vénétie et la ville de Venise à la tutelle autrichienne.", wikiUrl: "https://fr.wikipedia.org/wiki/Troisi%C3%A8me_guerre_d'Ind%C3%A9pendance_italienne" }
            ],
            documentaires: [{ titre: "Mussolini, l'ascension et la chute", url: "https://fr.wikipedia.org/wiki/Benito_Mussolini" }]
          },
          {
            id: "union-europeenne",
            trackId: "europe_unie", row: 7,
            label: "Union Européenne (Projet Politique)",
            period: "1951 à 2020", start: 1951, end: 2020,
            color: "#003399", isRiver: false, capitale: "Bruxelles / Strasbourg / Francfort",
            description: "Le miracle diplomatique inédit de l'histoire humaine : lier les économies des belligérants de deux guerres mondiales pour rendre le retour à la guerre matériellement impossible.",
            datesCles: [
              { annee: 1951, evenement: "Traité CECA", info: "Communauté européenne du charbon et de l'acier (France, Allemagne, Italie, Benelux)." },
              { annee: 1957, evenement: "Traité de Rome", info: "Création de la CEE, instaurant la libre circulation des marchandises et des travailleurs." },
              { annee: 1992, evenement: "Traité de Maastricht", info: "L'institution prend le nom formel d'Union Européenne." },
              { annee: 2002, evenement: "L'Euro", info: "Mise en circulation matérielle de la monnaie commune remplaçant les devises nationales (Franc, Mark)." }
            ],
            dirigeants: [
              { titre: "Président de la Commission", nom: "Jacques Delors", surnom: "", debut: 1985, fin: 1995 }
            ],
            personnages: [
              { nom: "Jean Monnet & Robert Schuman", role: "Les Pères de l'Europe", description: "Des hauts fonctionnaires visionnaires pariant sur l'intégration économique progressive (méthode des petits pas) plutôt que la politique.", dates: "XXe siècle", wikiUrl: "https://fr.wikipedia.org/wiki/P%C3%A8res_de_l%27Europe" },
              { nom: "Simone Veil", role: "Présidente du Parlement", description: "Survivante d'Auschwitz, elle devient la première présidente (élue au suffrage universel) du Parlement européen en 1979.", dates: "1927 à 2017", wikiUrl: "https://fr.wikipedia.org/wiki/Simone_Veil" }
            ],
            sciences: "Le bloc consolide les puissances par des collaborations industrielles massives de pointe que les États nations seuls ne pourraient plus financer : l'entreprise d'aéronautique Airbus (contre le monopole de l'américain Boeing), le programme spatial européen Arianespace et l'Agence Spatiale Européenne (ESA), ou l'accélérateur géant de particules du CERN.",
            croyancesText: "L'Union Européenne repose sur un dogme politique inviolable : les 'Critères de Copenhague'. Pour y adhérer, une nation doit obligatoirement prouver qu'elle possède des institutions démocratiques stables, qu'elle respecte les Droits de l'Homme, abolit la peine de mort, respecte les minorités de son pays, et adhère à l'économie de marché viable.",
            diplomatie: "C'est l'anti-Empire. L'UE n'est pas construite par la force militaire (elle n'a d'ailleurs aucune véritable armée commune), mais par l'adhésion volontaire au Droit par traités. Elle utilise son immense marché de 450 millions de consommateurs parmi les plus riches au monde (Le Marché Unique) comme 'Soft Power' pour imposer des normes économiques et écologiques mondiales (RGPD).",
            guerres: [
              { nom: "Guerres de Yougoslavie", annee: 1991, adversaires: ["Factions nationalistes balkaniques"], allies: ["Intervention OTAN/Casques Bleus"], morts: "Environ 140 000 morts (épuration ethnique)", vainqueur: "Communauté Internationale", consequences: "Impuissante politiquement et militairement à gérer l'horreur à ses propres frontières, l'Europe dut faire appel aux bombardiers américains de l'OTAN pour stopper le conflit.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerres_de_Yougoslavie" }
            ],
            documentaires: [{ titre: "La construction européenne : De la CECA à l'UE", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Union_europ%C3%A9enne" }]
          }
        ]
      },
      {
        id: "amerique", label: "Amérique",
        civilizations: [
          {
            id: "etats-unis",
            trackId: "usa", row: 1,
            label: "États-Unis d'Amérique (Superpuissance)",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#1a237e", isRiver: false, capitale: "Washington D.C.",
            description: "D'une république rurale s'entre-déchirant sur l'esclavage à l'hégémonie économique, militaire, spatiale et culturelle de l'histoire du monde moderne.",
            datesCles: [
              { annee: 1861, evenement: "Guerre de Sécession", info: "Guerre civile totale, victoire de l'Union, 13ème Amendement abolissant l'esclavage des Noirs." },
              { annee: 1929, evenement: "Jeudi Noir (Wall Street)", info: "Krach boursier menant à la Grande Dépression et aux réformes sociales du 'New Deal' par F.D. Roosevelt." },
              { annee: 1945, evenement: "Bombes Atomiques", info: "L'utilisation de l'arme nucléaire sur le Japon installe l'Amérique comme hyperpuissance du 'Monde Libre'." },
              { annee: 1969, evenement: "Apollo 11", info: "Neil Armstrong pose le pied sur la Lune, couronnant la victoire technologique de la Guerre Froide." }
            ],
            dirigeants: [
              { titre: "Le Libérateur", nom: "Abraham Lincoln", surnom: "Honest Abe", debut: 1861, fin: 1865 },
              { titre: "Président Fédéral", nom: "Franklin D. Roosevelt", surnom: "FDR", debut: 1933, fin: 1945 },
              { titre: "Président", nom: "John F. Kennedy", surnom: "JFK", debut: 1961, fin: 1963 }
            ],
            personnages: [
              { nom: "Thomas Edison", role: "Inventeur Industriel", description: "Père de l'ampoule électrique et du phonographe, il révolutionne la gestion de l'innovation (Laboratoire de Menlo Park).", dates: "1847 à 1931", wikiUrl: "https://fr.wikipedia.org/wiki/Thomas_Edison" },
              { nom: "Martin Luther King", role: "Pasteur et Activiste", description: "Icône pacifique du mouvement des Droits Civiques luttant contre la ségrégation raciale (Jim Crow). Assassiné en 1968.", dates: "1929 à 1968", wikiUrl: "https://fr.wikipedia.org/wiki/Martin_Luther_King" }
            ],
            sciences: "Leur industrie du XXe siècle est la plus spectaculaire : Henry Ford invente le fordisme (travail à la chaîne), démocratisant l'automobile. Ils abritent le Projet Manhattan (1942), mobilisant les meilleurs physiciens (Oppenheimer, Fermi) pour contrôler la fission nucléaire. Plus tard, via des financements de la Défense (ARPANET), la Californie donne naissance à Internet, au PC et au smartphone (Silicon Valley), numérisant la planète entière.",
            croyancesText: "Le socle identitaire est le 'Rêve Américain' et la 'Destinée Manifeste' (l'idée qu'ils ont reçu de Dieu la mission providentielle de propager la liberté sur Terre). Pendant la Guerre Froide contre les Soviétiques ('l'Empire du Mal' athée), ils ajoutent officiellement la devise 'In God We Trust' sur tous les billets de banque pour marquer la primauté chrétienne capitaliste face au marxisme.",
            diplomatie: "Du repli sur soi de la Doctrine Monroe (l'Amérique aux Américains, refusant d'intervenir en Europe), le pays devient l'hyperpuissance mondiale post-1945. Les États-Unis façonnent l'ordre international libéral (Création de l'ONU, du FMI, de l'OTAN). Ils interviennent militairement à travers le monde (Corée, Vietnam, Irak) pour contenir le communisme puis sécuriser les ressources énergétiques et combattre le terrorisme.",
            guerres: [
              { nom: "La Guerre de Sécession (Civil War)", annee: 1861, adversaires: ["États Confédérés du Sud (Général Lee)"], allies: ["Les États de l'Union du Nord (Général Grant)"], morts: "Plus de 620 000 soldats américains tués", vainqueur: "Le Nord (Lincoln)", consequences: "La guerre la plus sanglante de l'histoire du pays, menée à l'origine pour préserver la nation et achevée par l'émancipation de 4 millions d'esclaves afro-américains.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_S%C3%A9cession" },
              { nom: "Guerre Froide (Guerre du Viêt Nam)", annee: 1955, adversaires: ["Nord Viêt Nam Communiste (Viet Cong)"], allies: ["Sud Viêt Nam"], morts: "58 000 Américains, 3 Millions de Vietnamiens", vainqueur: "Nord Viêt Nam", consequences: "Défaite diplomatique et traumatisme moral total pour l'Amérique, entraînant un syndrome de rejet militaire pour toute une génération.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_du_Vi%C3%AAt_Nam" }
            ],
            documentaires: [{ titre: "L'histoire des États-Unis : The Civil War (Ken Burns)", url: "https://fr.wikipedia.org/wiki/Histoire_des_%C3%89tats-Unis" }]
          },
          {
            id: "mexique",
            trackId: "mesoamerique", row: 2,
            label: "Mexique",
            period: "1810 à 2020", start: 1789, end: 2020,
            color: "#e74c3c", isRiver: false, capitale: "Mexico",
            description: "Sur les cendres du plus riche vice-royaume espagnol, une nation métissée forgeant son identité par les larmes d'une gigantesque Révolution agraire.",
            datesCles: [
              { annee: 1810, evenement: "Cri de Dolores", info: "L'appel du prêtre Miguel Hidalgo déclenchant la sanglante guerre d'indépendance." },
              { annee: 1848, evenement: "Guerre Américano-Mexicaine", info: "Catastrophe territoriale, le Mexique perd la moitié de son pays (Californie, Texas)." },
              { annee: 1862, evenement: "L'Intervention Française", info: "Napoléon III tente de placer l'empereur Maximilien sur le trône, mais les Mexicains le fusillent en 1867." },
              { annee: 1910, evenement: "Révolution Mexicaine", info: "Explosion de violence pour la réforme agraire et la justice sociale, chassant le dictateur Porfirio Díaz." }
            ],
            dirigeants: [
              { titre: "Dictateur 'Modernisateur'", nom: "Porfirio Díaz", surnom: "", debut: 1876, fin: 1911 },
              { titre: "Président (PRI)", nom: "Lázaro Cárdenas", surnom: "", debut: 1934, fin: 1940 }
            ],
            personnages: [
              { nom: "Emiliano Zapata", role: "Chef de guérilla agraire", description: "Héros pur et dur de la Révolution au cri de 'Tierra y Libertad', luttant pour rendre les terres aux paysans indigènes volés par les haciendas.", dates: "1879 à 1919", wikiUrl: "https://fr.wikipedia.org/wiki/Emiliano_Zapata" },
              { nom: "Frida Kahlo", role: "Artiste peintre", description: "L'icône absolue de l'art et du féminisme mexicain du 20ème siècle, revendiquant sa culture indigène et communiste.", dates: "1907 à 1954", wikiUrl: "https://fr.wikipedia.org/wiki/Frida_Kahlo" }
            ],
            sciences: "Sous le 'Porfiriato' (la longue dictature de Díaz), le pays se modernise techniquement de force grâce aux capitaux étrangers (Royaume-Uni, USA) avec 19 000 km de chemins de fer et l'extraction massive d'argent et de pétrole, mais au prix de la misère paysanne. En 1938, le gouvernement nationalise le pétrole (PEMEX), affirmant sa souveraineté industrielle moderne face aux multinationales américaines.",
            croyancesText: "Le 'Mestizaje' (métissage) de la foi est la colonne vertébrale du pays, symbolisé par Notre-Dame de Guadalupe (la vierge catholique au teint brun, apparue sur la colline de l'ancien temple aztèque de Tonantzin). La Révolution de 1910 adopte une Constitution violemment laïque et anticommuniste, entraînant une sanglante guerre civile religieuse dans les années 20 ('La Guerre des Cristeros' où les paysans armés meurent pour le Christ-Roi).",
            diplomatie: "Le traumatisme fondamental de l'État mexicain est d'avoir été amputé de moitié par la force de son surpuissant voisin du nord, les États-Unis. Après la Révolution, le pays opte pour une politique étrangère pacifiste stricte (La Doctrine Estrada : non-intervention dans les affaires des autres États). Le pays devient gouverné par un 'parti unique' autoritaire mais stable, le PRI, pendant soixante-dix ans.",
            guerres: [
              { nom: "La Révolution Mexicaine", annee: 1910, adversaires: ["Armées Fédérales"], allies: ["Armées de Zapata (Sud) et de Pancho Villa (Nord)"], morts: "Entre 1 et 2 millions (guerre et grippe espagnole)", vainqueur: "La faction constitutionnaliste (Carranza)", consequences: "L'une des guerres les plus atroces du XXe siècle. Elle accouche de la Constitution de 1917, garantissant les droits sociaux, le droit du travail et la séparation de l'Église et de l'État.", wikiUrl: "https://fr.wikipedia.org/wiki/R%C3%A9volution_mexicaine" }
            ],
            documentaires: [{ titre: "Le Mexique : De l'indépendance à la Révolution", url: "https://fr.wikipedia.org/wiki/Histoire_du_Mexique" }]
          },
          {
            id: "bresil",
            trackId: "bresil", row: 3,
            label: "Brésil",
            period: "1822 à 2020", start: 1822, end: 2020,
            color: "#1b5e20", isRiver: true, capitale: "Rio de Janeiro / Brasília",
            description: "Le géant de l'Amérique latine, seule monarchie impériale stable issue d'une colonie, forgeant un métissage unique de cultures européennes, africaines et indigènes.",
            datesCles: [
              { annee: 1822, evenement: "L'Indépendance", info: "Le prince Dom Pedro refuse de rentrer au Portugal et se proclame Empereur du Brésil." },
              { annee: 1888, evenement: "Abolition de l'esclavage", info: "La Loi d'Or ('Lei Áurea') fait du Brésil le tout dernier pays occidental à libérer ses esclaves." },
              { annee: 1889, evenement: "La République", info: "L'armée et l'élite foncière, furieuses de l'abolition, expulsent l'Empereur pacifique." },
              { annee: 1960, evenement: "Brasília", info: "Inauguration de la nouvelle capitale futuriste surgie de la jungle." }
            ],
            dirigeants: [
              { titre: "Empereur du Brésil", nom: "Pierre II (Pedro II)", surnom: "Le Magnanime", debut: 1831, fin: 1889 },
              { titre: "Président populiste dictateur", nom: "Getúlio Vargas", surnom: "", debut: 1930, fin: 1954 },
              { titre: "Président", nom: "Lula da Silva", surnom: "", debut: 2003, fin: 2010 }
            ],
            personnages: [
              { nom: "Oscar Niemeyer", role: "Architecte", description: "Le visionnaire communiste aux lignes courbes, bâtisseur monumental des palais de Brasília.", dates: "1907 à 2012", wikiUrl: "https://fr.wikipedia.org/wiki/Oscar_Niemeyer" }
            ],
            sciences: "Puissance d'ingénierie d'altitude et hydroélectrique. Ils construisent le Barrage d'Itaipu (fournissant 20% de l'électricité de la nation). Le Brésil investit lourdement dans les biotechnologies : confronté aux chocs pétroliers, il devient le leader mondial de la production de biocarburant à l'éthanol (extrait de sa production géante de canne à sucre) pour faire fonctionner son parc automobile et développe la compagnie aéronautique Embraer.",
            croyancesText: "La plus grande nation catholique du monde est le laboratoire des syncrétismes religieux liés à la cruelle importation de millions d'esclaves africains (Yoruba, Kongos). Les divinités africaines (Orixás) furent masquées derrière les noms des saints catholiques pour échapper aux colons, donnant naissance au puissant rite spirituel et musical du Candomblé (culte d'Iemanja la déesse des mers) très pratiqué à Bahia.",
            diplomatie: "Son unité territoriale gigantesque a été maintenue sans éclatement (contrairement à l'Amérique espagnole) car la famille royale de Lisbonne s'y était installée pour fuir Napoléon. Politiquement, le pays oscille entre des dictatures militaires (les Juntes de 1964 à 1985 protégées par Washington) et des périodes de démocratie vibrante et exportatrice (Café, Soja, Fer), affirmant aujourd'hui son statut de pilier des BRICS (pays émergents).",
            guerres: [
              { nom: "Guerre de la Triple Alliance", annee: 1864, adversaires: ["Dictature du Paraguay"], allies: ["Argentine", "Uruguay"], morts: "Anéantissement du peuple paraguayen", vainqueur: "Brésil et ses alliés", consequences: "Le conflit le plus meurtrier de l'Amérique du Sud moderne. Le Brésil sécurise le contrôle stratégique des immenses fleuves d'Amérique du Sud mais l'endettement affaiblit la monarchie.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_la_Triple-Alliance" }
            ],
            documentaires: [{ titre: "L'Empire du Brésil, exception sud-américaine", url: "https://fr.wikipedia.org/wiki/Empire_du_Br%C3%A9sil" }]
          }
        ]
      },
      {
        id: "asie", label: "Asie / Moyen-Orient",
        civilizations: [
          {
            id: "turquie",
            trackId: "ottomans", row: 1,
            label: "Turquie",
            period: "1923 à 2020", start: 1789, end: 2020,
            color: "#27ae60", isRiver: false, capitale: "Ankara",
            description: "Sur les ruines de l'empire ottoman, la révolution kémaliste impose par la poigne une république moderne, laïque et occidentale reliant l'Europe à l'Asie.",
            datesCles: [
              { annee: 1915, evenement: "Génocide Arménien", info: "Extermination de plus d'un million d'arméniens chrétiens par le régime des Jeunes-Turcs." },
              { annee: 1920, evenement: "Traité de Sèvres", info: "Démantèlement de l'Empire Ottoman par la France et l'Angleterre." },
              { annee: 1923, evenement: "La République", info: "Mustafa Kemal rejette les traités occidentaux et sauve le cœur de la nation." },
              { annee: 1928, evenement: "L'Alphabet Latin", info: "L'État abandonne en une nuit l'alphabet arabe pour occidentaliser la société." }
            ],
            dirigeants: [
              { titre: "Le Père des Turcs (Président)", nom: "Mustafa Kemal", surnom: "Atatürk", debut: 1923, fin: 1938 },
              { titre: "Président (AKP)", nom: "Recep Tayyip Erdoğan", surnom: "", debut: 2003, fin: 2020 }
            ],
            personnages: [],
            sciences: "Le rattrapage des années 20 est un modèle de dirigisme étatique et militaire : construction expresse de l'industrie textile, d'aciéries, laïcisation massive des universités, et l'un des premiers droits de vote accordé aux femmes au monde (1934).",
            croyancesText: "Le 'Kémalisme' impose une laïcité absolue et agressive en pays musulman : le vêtement religieux islamique (le fez, le voile) est interdit dans l'espace public de force, l'appel à la prière doit se faire en turc, l'alphabet arabe est proscrit. Plus tard (années 2000), le gouvernement d'Erdoğan remettra progressivement l'Islam sunnite politique au cœur du discours de l'État.",
            diplomatie: "Devenue le flanc Est stratégique de l'OTAN face à l'URSS pendant la guerre froide (abritant des missiles nucléaires américains), la diplomatie turque est pragmatique : candidat de longue date à l'entrée dans l'Union Européenne, c'est aussi un acteur militarisé incontournable au Moyen-Orient (conflits avec la Grèce pour Chypre, opposition armée au nationalisme kurde).",
            guerres: [
              { nom: "Guerre d'Indépendance Turque", annee: 1919, adversaires: ["Grèce", "Arménie", "Alliés occidentaux"], allies: ["Russie bolchévique"], morts: "Pertes civiles et militaires lourdes", vainqueur: "Turquie (Gouvernement d'Ankara)", consequences: "Atatürk écrase l'armée grecque qui tentait d'occuper la côte ouest. Annulation de la partition de la Turquie et immense échange forcé de populations chrétiennes et musulmanes.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_d'ind%C3%A9pendance_turque" }
            ],
            documentaires: [{ titre: "Atatürk, père de la Turquie moderne", url: "https://fr.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk" }]
          },
          {
            id: "iran",
            trackId: "perse", row: 2,
            label: "Iran",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#9c27b0", isRiver: false, capitale: "Téhéran",
            description: "Dernière puissance perse, passée de la dictature moderne pétrolière pro-américaine (les Chahs) à l'instauration de l'unique République Islamique chiite du monde.",
            datesCles: [
              { annee: 1908, evenement: "Pétrole de Masjed Soleyman", info: "Découverte historique bouleversant la géopolitique (Anglo-Persian Oil Company)." },
              { annee: 1953, evenement: "Opération Ajax", info: "La CIA et les Britanniques renversent le gouvernement Mossadegh pour récupérer le pétrole." },
              { annee: 1979, evenement: "La Révolution Islamique", info: "L'Ayatollah Khomeini chasse le Chah, fondant une théocratie anti-occidentale radicale." },
              { annee: 1980, evenement: "Guerre Iran-Irak", info: "Saddam Hussein attaque, soudant le nouveau régime idéologique par les martyrs de guerre." }
            ],
            dirigeants: [
              { titre: "Chah", nom: "Mohammad Reza", surnom: "Pahlavi", debut: 1941, fin: 1979 },
              { titre: "Guide de la Révolution (Ayatollah)", nom: "Rouhollah Khomeini", surnom: "", debut: 1979, fin: 1989 }
            ],
            personnages: [
              { nom: "Mohammad Mossadegh", role: "Premier ministre démocratique", description: "L'homme qui nationalisa le pétrole iranien en 1951, entraînant son renversement par le MI6 britannique et la CIA.", dates: "1882 à 1967", wikiUrl: "https://fr.wikipedia.org/wiki/Mohammad_Mossadegh" }
            ],
            sciences: "La 'Révolution blanche' du Chah (années 60) force l'industrialisation, la réforme agraire et l'éradication du féodalisme par les revenus de l'or noir. Sous la République islamique, malgré de lourds embargos, le pays réussit à développer en autarcie un très controversé programme d'enrichissement d'uranium (nucléaire) et un puissant programme balistique.",
            croyancesText: "Le basculement de 1979 ('Le velayat-e faqih' ou gouvernement du juriste islamique) donne le pouvoir absolu au clergé chiite. Le pays est gouverné selon la stricte charia religieuse (voile obligatoire, gardiens de la révolution), bien qu'enfermant une société civile jeune, lettrée et très éloignée idéologiquement de l'autorité religieuse suprême.",
            diplomatie: "Du grand gendarme pro-américain du golfe (sous le Chah) à 'l'Axe du mal' (sous la République Islamique). La diplomatie de Téhéran s'articule autour de la confrontation existentielle contre les USA ('le Grand Satan') et Israël, ainsi qu'une guerre d'influence de l'Ombre contre l'Arabie Saoudite (sunnite) en finançant des milices (Hezbollah au Liban, Houthis au Yémen).",
            guerres: [
              { nom: "Guerre Iran-Irak", annee: 1980, adversaires: ["Irak (Saddam Hussein)"], allies: ["Syrie (Hafez al-Assad)"], morts: "Au moins 1 million de morts", vainqueur: "Statu Quo (Ruine économique)", consequences: "Guerre de tranchées terrifiante utilisant des armes chimiques irakiennes et des vagues d'assaut de très jeunes martyrs iraniens.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_Iran-Irak" }
            ],
            documentaires: [{ titre: "Iran 1979 : Anatomie d'une révolution", url: "https://fr.wikipedia.org/wiki/R%C3%A9volution_iranienne" }]
          },
          {
            id: "chine-contemp",
            trackId: "chine", row: 3,
            label: "Chine (République & Populaire)",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#e67e22", isRiver: true, capitale: "Pékin",
            description: "Le pays a survécu à un 'siècle de la honte' colonial pour fonder un communisme absolu et affamé, devenu depuis les années 80 l'atelier du monde libéralisé.",
            datesCles: [
              { annee: 1839, evenement: "Guerres de l'Opium", info: "L'Empire britannique détruit l'armée Qing pour forcer les Chinois à acheter leur opium." },
              { annee: 1911, evenement: "Chute de l'Empire", info: "Sun Yat-sen met fin à 2000 ans de domination dynastique impériale (République)." },
              { annee: 1949, evenement: "Victoire de Mao", info: "Fin de la guerre civile. Tchang Kaï-chek (les nationalistes) fuit à Taïwan." },
              { annee: 1958, evenement: "Le Grand Bond en Avant", info: "Planification maoïste délirante générant la plus grande famine de l'histoire humaine." },
              { annee: 1978, evenement: "Quatre Modernisations", info: "Deng Xiaoping ouvre au capitalisme l'économie du pays ('Économie socialiste de marché')." }
            ],
            dirigeants: [
              { titre: "Le Grand Timonier (Dictateur)", nom: "Mao Zedong", surnom: "", debut: 1949, fin: 1976 },
              { titre: "Leader Paramount", nom: "Deng Xiaoping", surnom: "", debut: 1978, fin: 1989 }
            ],
            personnages: [
              { nom: "Sun Yat-sen", role: "Révolutionnaire", description: "Père de la Chine moderne, auteur des 'Trois principes du peuple' respecté tant par les communistes que par Taïwan.", dates: "1866 à 1925", wikiUrl: "https://fr.wikipedia.org/wiki/Sun_Yat-sen" }
            ],
            sciences: "Leur rattrapage après 1978 est ahurissant. Partis du vélo et de la boue, ils bâtissent en trente ans les villes côtières géantes de l'exportation mondiale (Shenzhen). Puissance spatiale et technologique ultra-surveillée (reconnaissance faciale et pare-feu d'État), la Chine produit l'essentiel des terres rares mondiales et le plus vaste réseau de trains à grande vitesse jamais construit.",
            croyancesText: "Sous Mao, la terrible 'Révolution Culturelle' mobilise la jeunesse (Les Gardes Rouges) via le Petit Livre Rouge pour détruire la mémoire passée : ils saccagent les temples, brûlent l'art ancien et torturent tous les intellectuels et opposants idéologiques (lutte des classes absolue). Aujourd'hui, l'Athéisme du Parti Communiste règne, couplé à une tolérance religieuse très strictement subordonnée à l'ordre public (camps de rééducation de la minorité musulmane Ouïghoure).",
            diplomatie: "Effacer l'humiliation des Traités Inégaux du 19ème siècle (où les Européens pillaient leurs ports de la côte est). Après l'isolement maoïste (et la rupture de leur alliance avec l'URSS soviétique), le pays a rejoint l'OMC (2001) et utilise les milliards de ses excédents commerciaux pour le projet monumental des 'Nouvelles routes de la soie', visant la suprématie géopolitique en Asie et en Afrique.",
            guerres: [
              { nom: "Seconde Guerre sino-japonaise", annee: 1937, adversaires: ["Empire du Japon"], allies: ["Alliés de la Seconde Guerre Mondiale"], morts: "20 millions de morts chinois", vainqueur: "République de Chine (et Alliés)", consequences: "L'horreur de l'invasion impériale nippone (Massacre de Nankin). Les communistes de Mao utiliseront l'épuisement des forces du gouvernement nationaliste de l'époque pour gagner la guerre civile.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_sino-japonaise_(1937-1945)" }
            ],
            documentaires: [{ titre: "La Chine : Le Siècle de l'humiliation et la vengeance", url: "https://fr.wikipedia.org/wiki/Histoire_de_la_R%C3%A9publique_populaire_de_Chine" }]
          },
          {
            id: "japon",
            trackId: "japon", row: 4,
            label: "Japon (Meiji à nos jours)",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#c0392b", isRiver: false, capitale: "Tokyo",
            description: "D'un archipel isolé du temps à l'imitation foudroyante de l'Occident, sombrant dans l'impérialisme avant de devenir le miracle économique pacifiste de la Tech.",
            datesCles: [
              { annee: 1853, evenement: "Les Navires Noirs", info: "L'amiral américain Perry force le Japon à s'ouvrir au commerce sous la menace de ses canons." },
              { annee: 1868, evenement: "Restauration Meiji", info: "L'Empereur reprend le pouvoir au Shogun. Le Japon s'occidentalise et s'industrialise de force." },
              { annee: 1905, evenement: "Guerre Russo-Japonaise", info: "Pour la première fois, une nation asiatique moderne écrase militairement un grand empire européen." },
              { annee: 1945, evenement: "Cataclysme Atomique", info: "Frappes nucléaires américaines (Hiroshima et Nagasaki) forçant la capitulation sans condition du dieu-empereur." }
            ],
            dirigeants: [
              { titre: "Empereur", nom: "Meiji", surnom: "", debut: 1867, fin: 1912 },
              { titre: "Empereur", nom: "Hirohito", surnom: "Shōwa", debut: 1926, fin: 1989 }
            ],
            personnages: [
              { nom: "Isoroku Yamamoto", role: "Amiral de la Flotte", description: "Architecte brillant de l'attaque surprise sur Pearl Harbor, bien qu'il ait prédit que le Japon ne pourrait tenir face à la puissance industrielle américaine à long terme.", dates: "1884 à 1943", wikiUrl: "https://fr.wikipedia.org/wiki/Isoroku_Yamamoto" }
            ],
            sciences: "Le miracle économique japonais de l'après-guerre est vertigineux : ils passent des ruines calcinées à la deuxième économie mondiale en 20 ans. Inventeurs de la miniaturisation technologique (le Walkman Sony, le magnétoscope), du Toyotisme industriel, et du premier train à grande vitesse du monde fonctionnant au millimètre près (Le Shinkansen, en 1964).",
            croyancesText: "Durant l'ère Meiji, le Shintoïsme d'État devient une religion guerrière où l'Empereur est officiellement considéré comme un descendant sacré de la divinité solaire. Les soldats (kamikazes) fanatisés mouraient de gaieté de cœur pour lui. Fin 1945, les Américains forceront l'Empereur Hirohito à déclarer officiellement à la radio : 'Je ne suis qu'un être humain', détruisant le mythe religieux de l'État.",
            diplomatie: "Pour ne pas être colonisé comme la Chine, le Japon colonial de la fin du 19ème siècle conquiert Taiwan et annexe la Corée pour ses ressources en acier. Entré dans l'Axe fasciste pendant la guerre, leur expansionnisme brutal (La Sphère de coprospérité de la grande Asie orientale) s'effondre face au pacifique. En 1947, le général américain MacArthur rédige la nouvelle constitution nippone interdisant à jamais au pays d'avoir une armée offensive, transformant l'archipel en forteresse économique américaine.",
            guerres: [
              { nom: "La Guerre du Pacifique", annee: 1941, adversaires: ["États-Unis d'Amérique (Flotte du Pacifique)"], allies: ["Allemagne Nazie"], morts: "Environ 3 millions de Japonais, villes rasées au napalm", vainqueur: "États-Unis", consequences: "L'attaque de Pearl Harbor réveille le géant industriel américain. Le Japon perd son empire maritime bataille par bataille (Midway, Okinawa).", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_du_Pacifique" }
            ],
            documentaires: [{ titre: "L'ère Meiji, l'entrée du Japon dans le monde moderne", url: "https://fr.wikipedia.org/wiki/%C3%88re_Meiji" }]
          },
          {
            id: "coree-contemp",
            trackId: "coree", row: 5,
            label: "Les deux Corées",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#bf360c", isRiver: false, capitale: "Séoul (Sud) / Pyongyang (Nord)",
            description: "Une tragédie nationale. Trente-cinq ans de brutale occupation japonaise, suivie d'une guerre civile destructrice figeant deux nations que tout sépare sur le 38ème parallèle.",
            datesCles: [
              { annee: 1910, evenement: "Annexion par le Japon", info: "L'Empire nippon asservit la Corée (travail forcé, 'femmes de réconfort', interdiction de la langue)." },
              { annee: 1945, evenement: "La Libération et Partition", info: "L'URSS libère le nord et les USA le sud, créant deux zones d'occupation." },
              { annee: 1950, evenement: "L'Invasion de la Guerre de Corée", info: "L'armée de Kim Il-sung attaque le Sud pour réunifier le pays par la force militaire." },
              { annee: 1988, evenement: "Jeux Olympiques de Séoul", info: "Marque la consécration mondiale du miracle économique du Sud et sa transition en démocratie." }
            ],
            dirigeants: [
              { titre: "Dictateur (Nord)", nom: "Kim Il-sung", surnom: "Le Président Éternel", debut: 1948, fin: 1994 },
              { titre: "Dictateur militaire (Sud)", nom: "Park Chung-hee", surnom: "", debut: 1961, fin: 1979 }
            ],
            personnages: [],
            sciences: "Le contraste est vertigineux : Le Sud réalise 'Le Miracle sur le fleuve Han', des chaebols (immenses conglomérats nationaux comme Samsung, Hyundai) propulsant un pays ravagé dans la domination mondiale des écrans, bateaux et de la mémoire électronique, et sa K-Culture musicale. Le Nord se militarise à outrance au prix de grandes famines, sacrifiant tout à l'obtention de la dissuasion balistique et nucléaire autonome.",
            croyancesText: "Le Nord vit sous l'idéologie politique quasi-religieuse absolue du 'Juche' (L'Autosuffisance totale militaire et économique). Des milliers de statues monumentales à la gloire de la dynastie totalitaire des Kim dominent chaque ville. Le Sud, profondément dynamique religieusement, abrite d'immenses mega-églises évangéliques (christianisme) et une grande part de laïcs pragmatiques et matérialistes.",
            diplomatie: "Techniquement, la guerre de Corée n'est pas terminée (seul un Armistice de Cessez-le-feu fut signé à Panmunjom en 1953). Le Nord, soutenu par la Chine communiste, est le pays le plus isolé et sanctionné diplomatiquement du monde. Le Sud, bastion géopolitique armé indispensable des États-Unis en Asie de l'Est, déploie sa diplomatie économique libre-échangiste.",
            guerres: [
              { nom: "Guerre de Corée", annee: 1950, adversaires: ["Corée du Nord", "Volontaires de la Chine Maoïste"], allies: ["Corée du Sud", "Force de Coalition de l'ONU (États-Unis)"], morts: "Plus de 2,5 millions de civils (Séoul rasée 4 fois)", vainqueur: "Statu Quo (Match nul sanglant)", consequences: "La guerre la plus destructrice de l'ère de la Guerre Froide. Le Général américain MacArthur voulut y utiliser la bombe atomique contre la Chine mais fut limogé.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e" }
            ],
            documentaires: [{ titre: "Guerre de Corée : Le grand affrontement", url: "https://fr.wikipedia.org/wiki/Histoire_de_la_Cor%C3%A9e" }]
          },
          {
            id: "inde-contemp",
            trackId: "inde", row: 6,
            label: "Inde (Raj et Indépendance)",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#16a085", isRiver: true, capitale: "New Delhi",
            description: "Le 'Joyau de la Couronne britannique' spolié économiquement pendant 150 ans, gagnant la liberté par la non-violence avant de se fracturer violemment avec le Pakistan.",
            datesCles: [
              { annee: 1857, evenement: "La Révolte des Cipayes", info: "L'armée indienne au service des Anglais se mutine. L'insurrection est noyée dans le sang." },
              { annee: 1930, evenement: "La Marche du Sel", info: "Le coup de maître de la désobéissance civile pacifique de Gandhi contre le monopole anglais." },
              { annee: 1947, evenement: "L'Indépendance et la Partition", info: "Les Britanniques s'en vont. Le pays est fracturé selon des lignes religieuses." },
              { annee: 1974, evenement: "L'arme nucléaire", info: "L'Inde (Opération Bouddha Souriant) fait exploser sa première bombe pour contrer la Chine." }
            ],
            dirigeants: [
              { titre: "Impératrice des Indes", nom: "Reine Victoria", surnom: "", debut: 1876, fin: 1901 },
              { titre: "1er Premier ministre", nom: "Jawaharlal Nehru", surnom: "", debut: 1947, fin: 1964 }
            ],
            personnages: [
              { nom: "Mahatma Gandhi", role: "Guide Politique et Spirituel", description: "L'apôtre mondial de l'Ahimsa (la non-violence) dont le jeûne politique et le boycott des textiles anglais brisèrent la légitimité coloniale.", dates: "1869 à 1948", wikiUrl: "https://fr.wikipedia.org/wiki/Mahatma_Gandhi" }
            ],
            sciences: "Pour extraire les immenses ressources (coton, thé) vers Londres, les Anglais arment l'Inde du plus gigantesque réseau ferroviaire et télégraphique d'Asie. Au XXème siècle, libérée des horribles famines britanniques par la 'Révolution verte' agricole (nouveaux engrais et hybrides), l'Inde contemporaine devient une superpuissance de services informatiques mondialisés, avec son propre programme spatial abouti sur Mars.",
            croyancesText: "Ce sont les croyances qui ont dicté les frontières modernes. Les Anglais refusaient l'indépendance sans séparer les territoires : le nouvel État libre est dramatiquement fracturé en deux. L'Inde (majoritairement hindoue laïque) et le Pakistan Occidental et Oriental (États musulmans, et le futur Bangladesh). Cette ligne de séparation, l'une des pires tragédies de l'Histoire, engendra 15 millions de déplacés jetés sur les routes au milieu des massacres inter-religieux.",
            diplomatie: "Durant la Guerre Froide, refusant l'alignement sur les Américains ou les Soviétiques, l'Inde invente le 'Mouvement des non-alignés' pour donner une voix au Tiers-Monde en développement. Sa diplomatie du XXIe siècle est focalisée sur le duel territorial brûlant au nord sur les neiges du Cachemire, une poudrière face au Pakistan (soutenu par les Chinois).",
            guerres: [
              { nom: "Guerres Indo-Pakistanaises", annee: 1947, adversaires: ["République Islamique du Pakistan"], allies: ["(L'Inde sera soutenue logistiquement par l'URSS)"], morts: "Pertes militaires lourdes", vainqueur: "Victoires indiennes", consequences: "En 1971, l'armée indienne écrase le Pakistan pour assurer la sécession d'un nouvel État musulman séparé : le Bangladesh.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerres_indo-pakistanaises" }
            ],
            documentaires: [{ titre: "Gandhi, la libération sans les armes", url: "https://fr.wikipedia.org/wiki/Mahatma_Gandhi" }]
          },
          {
            id: "indonesie",
            trackId: "indonesie", row: 7,
            label: "Indes Orientales puis Indonésie",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#009688", isRiver: false, capitale: "Batavia puis Jakarta",
            description: "Une gigantesque entreprise coloniale néerlandaise, conquise et mutilée par l'Empire du Soleil Levant, libérée dans le sang pour forger la plus grande nation musulmane de la planète.",
            datesCles: [
              { annee: 1800, evenement: "Nationalisation", info: "L'entreprise privée ruinée VOC disparaît, l'État néerlandais prend le contrôle brutal de l'archipel." },
              { annee: 1942, evenement: "Invasion japonaise", info: "Les forces nippones éjectent les Hollandais pour s'emparer du très convoité pétrole indonésien." },
              { annee: 1945, evenement: "Indépendance de force", info: "Au départ des Japonais, Sukarno lit la déclaration de souveraineté d'Indonésie (Revolusi)." },
              { annee: 1965, evenement: "Purges anticommunistes", info: "La dictature du général Suharto (L'Ordre Nouveau) massacre au moins 500 000 communistes présumés." }
            ],
            dirigeants: [
              { titre: "Président de la République", nom: "Sukarno", surnom: "", debut: 1945, fin: 1967 },
              { titre: "Président militaire (Dictateur)", nom: "Suharto", surnom: "Le Père du développement", debut: 1967, fin: 1998 }
            ],
            personnages: [],
            sciences: "Le colonialisme hollandais fut d'une terrible rentabilité avec le 'Cultuurstelsel' (Système de cultures forcées) obligeant les paysans indigènes à cultiver (tabac, café, canne à sucre, indigo) pour les marchands européens en les affamant de leur propre riz. Devenue indépendante, la géographie volcanique du pays la contraint à une ingénierie complexe pour extraire les minerais, et a géré d'immenses catastrophes sismiques (Tsunami géant de 2004 en Aceh).",
            croyancesText: "C'est un État laïque abritant l'immense majorité musulmane sunnite de la planète (près de 230 millions d'habitants). Pour lier ses 17 000 îles ethniquement disparates, le pays est cimenté par le principe du 'Pancasila' : l'obligation philosophique d'État (la croyance en un seul Dieu, une humanité juste, une démocratie unifiée). L'hindouisme reste vivace et concentré (Bali).",
            diplomatie: "C'est le fer de lance de l'anticolonialisme du Tiers-Monde. Sukarno accueille la fameuse Conférence de Bandung (1955), réunissant pour la première fois les leaders africains et asiatiques non-alignés. Suharto plus tard alignera l'économie militarisée du pays sur les capitaux de la Guerre Froide américaine, en annexant violemment le Timor oriental et la Papouasie.",
            guerres: [
              { nom: "Guerre d'indépendance indonésienne", annee: 1945, adversaires: ["Pays-Bas", "Empire Britannique (en appui)"], allies: ["Soutien diplomatique États-Unis/ONU"], morts: "100 000 Indonésiens", vainqueur: "Indonésie", consequences: "Les Hollandais tentèrent violemment de reconquérir leurs anciennes colonies pendant 4 ans après la WWII, mais cédèrent face au coût militaire et à l'embargo menacé par les Américains.", wikiUrl: "https://fr.wikipedia.org/wiki/R%C3%A9volution_nationale_indon%C3%A9sienne" }
            ],
            documentaires: [{ titre: "La Naissance de l'Indonésie : Bandung", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Indon%C3%A9sie" }]
          },
          {
            id: "singapour",
            trackId: "singapour", row: 8,
            label: "Singapour",
            period: "1819 à 2020", start: 1819, end: 2020,
            color: "#e53935", isRiver: false, capitale: "Singapour",
            description: "D'un simple port colonial anti-pirates à la cité-État utopiste, le seul État de l'Histoire à avoir obtenu son indépendance contre sa propre volonté pour devenir l'hyper-hub de la mondialisation asiatique.",
            datesCles: [
              { annee: 1819, evenement: "Comptoir Franc", info: "L'Anglais Stamford Raffles fonde le port, libérant les taxes pour attirer les marchands de toute l'Asie." },
              { annee: 1942, evenement: "La Chute", info: "La forteresse navale britannique réputée inexpugnable est foudroyée à vélo par la jungle par l'armée japonaise." },
              { annee: 1965, evenement: "Indépendance Forcée", info: "Jetée hors de la Fédération de Malaisie pour des raisons ethniques, l'île de pêcheurs doit survivre seule." }
            ],
            dirigeants: [
              { titre: "Père Fondateur (Premier ministre)", nom: "Lee Kuan Yew", surnom: "", debut: 1959, fin: 1990 }
            ],
            personnages: [],
            sciences: "Le miracle de la survie logistique de la Tech et de la finance. Dénuée d'eau douce, Singapour met en œuvre une politique d'ingénierie stricte de recyclage hydrique ('NEWater') rendant les égouts potables. Son industrie a littéralement poldérisé l'île (sable gagné sur l'océan), érigeant un système d'algorithmes et de grues géantes pilotant le premier grand port logistique de fret conteneurisé mondial en temps réel (le Port de Singapour, PSA).",
            croyancesText: "Société multiconfessionnelle (Bouddhistes, Musulmans, Hindous et Chrétiens) dominée historiquement par l'ethnie migratoire chinoise Hakka et Hokkien. La doctrine fondatrice n'est pas religieuse mais autoritaire et morale : le confucianisme asiatique de la discipline, de l'harmonie raciale et du travail acharné. Les sanctions judiciaires et corporelles (coups de fouet en rotin) y sont rigoureusement appliquées (tolérance zéro de l'État).",
            diplomatie: "C'est la Suisse d'Asie. Pour assurer la survie de cette minuscule île très riche (1ère place de banques et de puces électroniques) coincée entre des géants malais et indonésiens plus pauvres, le pays base sa sécurité sur d'excellentes forces armées (Air Force), le libre-échange capitaliste global, et une coopération diplomatique fine sans aucun positionnement sur les droits de l'homme internes de ses partenaires.",
            guerres: [
              { nom: "L'Occupation Japonaise", annee: 1942, adversaires: ["Empire Japonais"], allies: ["Empire Britannique", "Milices chinoises malaises"], morts: "Massacre (Sook Ching) de 50 000 civils chinois", vainqueur: "Japon (temporairement)", consequences: "Les troupes impériales de Yamashita soumettent les généraux britanniques stupéfaits. Le traumatisme des persécutions montre aux peuples de la région que les colons blancs ne sont pas invincibles.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_de_Singapour" }
            ],
            documentaires: [{ titre: "Le grand miracle de Singapour", url: "https://fr.wikipedia.org/wiki/Singapour" }]
          }
        ]
      },
      {
        id: "afrique", label: "Afrique",
        civilizations: [
          {
            id: "ethiopie-contemp",
            trackId: "corne_afrique", row: 1,
            label: "Empire d'Éthiopie (Abyssinie)",
            period: "1789 à 2020", start: 1789, end: 2020,
            color: "#7b1fa2", isRiver: false, capitale: "Addis-Abeba",
            description: "La grande fierté noire. Seul grand royaume d'Afrique, encerclé par les colonies, ayant militairement défait une armée moderne européenne pour maintenir son indépendance trimillénaire.",
            datesCles: [
              { annee: 1896, evenement: "Bataille d'Adoua", info: "Un coup de tonnerre mondial : l'empereur Ménélik II écrase avec des fusils l'armée coloniale d'invasion de l'Italie." },
              { annee: 1935, evenement: "Invasion Fasciste", info: "L'Italie de Mussolini venge son orgueil en envahissant le pays à coup d'armes chimiques et de bombardiers." },
              { annee: 1974, evenement: "Fin de la dynastie de Salomon", info: "Une junte militaire communiste (le Derg) renverse le divin et dernier Empereur Haïlé Sélassié." },
              { annee: 1991, evenement: "République Fédérale", info: "Chute de la dictature du Derg." }
            ],
            dirigeants: [
              { titre: "Négus (Roi des rois)", nom: "Ménélik II", surnom: "", debut: 1889, fin: 1913 },
              { titre: "Négus", nom: "Haïlé Sélassié", surnom: "Le Lion conquérant", debut: 1930, fin: 1974 },
              { titre: "Général de Junte", nom: "Mengistu", surnom: "Le Négus rouge", debut: 1977, fin: 1991 }
            ],
            personnages: [],
            sciences: "Leur génie du XIXe siècle est la clairvoyance géopolitique de modernisation. Réalisant l'ampleur du partage de l'Afrique par les Européens, les monarques achètent de formidables stocks de fusils modernes et d'artillerie (notamment aux Français de Djibouti et aux Russes orthodoxes) pour créer une infanterie qui s'avéra inarrêtable. Ils lancèrent la création de l'impressionnante ligne de chemin de fer franco-éthiopienne.",
            croyancesText: "L'empereur est légitimé par son sang, descendant légendairement en ligne directe du roi biblique Salomon et de la reine de Saba. Haïlé Sélassié (Tafari Makonnen) deviendra d'ailleurs la figure du messie réincarné (Jah) pour le mouvement spirituel noir de libération pacifique naissant en Jamaïque : les Rastafaris. La population musulmane reste marginalisée au profit du cœur chrétien orthodoxe.",
            diplomatie: "Auréolée de sa victoire sacrée face aux Blancs colonisateurs, l'Éthiopie de la guerre froide utilise sa respectabilité immense en se positionnant comme la capitale morale de tout le continent noir désaliéné, entraînant le siège physique de l'Organisation de l'Unité Africaine (OUA) à Addis-Abeba.",
            guerres: [
              { nom: "Bataille d'Adoua", annee: 1896, adversaires: ["Royaume d'Italie"], allies: ["Artillerie moderne (achats)"], morts: "7000 soldats italiens massacrés", vainqueur: "Éthiopie", consequences: "Honte géopolitique pour l'Italie, forçant le pape et l'Europe à signer un traité de paix et à reconnaître le pays comme une véritable Nation.", wikiUrl: "https://fr.wikipedia.org/wiki/Bataille_d'Adoua" }
            ],
            documentaires: [{ titre: "Adoua 1896, l'indépendance de l'Éthiopie", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27%C3%89thiopie" }]
          },
          {
            id: "dahomey",
            trackId: "afrique_ouest_2", row: 2,
            label: "Royaume du Dahomey (Bénin)",
            period: "1789 à 1894", start: 1789, end: 1894,
            color: "#b22222", isRiver: false, capitale: "Abomey",
            description: "Une redoutable puissance militaire d'Afrique de l'Ouest du golfe de Guinée, au Palais et rites fascinants, dirigée par la seule armée de femmes régulières recensée dans l'histoire mondiale.",
            datesCles: [
              { annee: 1818, evenement: "Libération du joug d'Oyo", info: "L'État se renforce financièrement et refuse de payer le tribut de soumission (d'esclaves) aux Yorubas d'Oyo." },
              { annee: 1892, evenement: "Les guerres coloniales", info: "Refus du Roi de plier le genou : les troupes de marine françaises du Général Dodds marchent vers la capitale." }
            ],
            dirigeants: [
              { titre: "Roi du Dahomey", nom: "Ghézo", surnom: "", debut: 1818, fin: 1858 },
              { titre: "Roi Exilé", nom: "Béhanzin", surnom: "Le Requin", debut: 1889, fin: 1894 }
            ],
            personnages: [
              { nom: "Les Amazones (Les Mino)", role: "Corps d'infanterie d'élite féminine", description: "Célibataires dévouées au roi. De 4 000 femmes entraînées à la machette puis aux armes à feu, souvent utilisées en premier rideau d'assaut sacrificiel terrifiant.", dates: "Dissolution en 1894", wikiUrl: "https://fr.wikipedia.org/wiki/Amazones_du_Dahomey" }
            ],
            sciences: "Société agricole structurée pour la discipline et le prélèvement strict d'impôts par les hauts dignitaires pour l'effort de guerre. Quand l'Europe abolit la traite négrière, le roi Ghézo restructure magistralement l'économie du pays en forçant les prisonniers de guerre à planter massivement la palmeraie : le 'Commerce légitime' de l'huile de palme vendu à l'Europe industrielle pour lubrifier les usines et faire du savon remplacera la traite.",
            croyancesText: "Religion panthéoniste polythéiste (Le culte Vaudou / Vodun) d'une extrême richesse où les rois morts veillent sur la terre. L'effroi européen provint des 'Coutumes annuelles', où le roi en grande cérémonie ordonnait l'immolation et la décapitation de dizaines (parfois centaines à la mort d'un monarque) de prisonniers de guerre et de criminels sur une plateforme devant les ambassadeurs de la côte pour les envoyer comme serviteurs royaux dans l'Au-delà.",
            diplomatie: "C'est l'archétype cruel des états prédateurs militaires et de l'encerclement. Il est haï par les petits royaumes pacifiques voisins car les guerres 'annuelles' systématiques de Dahomey servent à capturer et revendre d'innombrables esclaves aux ports européens de Ouidah, pour acheter la poudre et l'artillerie anglaise et portugaise permettant leur souveraineté brutale de s'accroître.",
            guerres: [
              { nom: "Seconde Guerre du Dahomey", annee: 1892, adversaires: ["Troupes coloniales françaises (A. Dodds)"], allies: ["Troupes et canonnières de marine"], morts: "Pertes totales de l'armée des Amazones au corps à corps", vainqueur: "France", consequences: "Les baïonnettes et obus français éventrent l'infanterie des Amazones armées de winchesters. Béhanzin incendie lui-même ses magnifiques palais d'Abomey et s'enfuit. Déporté à la Martinique, son pays est colonisé.", wikiUrl: "https://fr.wikipedia.org/wiki/Seconde_guerre_du_Dahomey" }
            ],
            documentaires: [{ titre: "Le Royaume du Dahomey : Rois et Amazones", url: "https://fr.wikipedia.org/wiki/Royaume_du_Dahomey" }]
          },
          {
            id: "afrique-sud",
            trackId: "afrique_australe", row: 3,
            label: "Afrique du Sud",
            period: "1806 à 2020", start: 1789, end: 2020,
            color: "#ffc107", isRiver: false, capitale: "Pretoria / Le Cap",
            description: "De la colonisation impitoyable de l'Empire britannique à l'instauration de l'Apartheid de la minorité blanche, transcendé par l'avènement pacificateur de la Nation Arc-en-ciel.",
            datesCles: [
              { annee: 1886, evenement: "Ruée vers l'Or", info: "La découverte de gisements géants dans le Transvaal attise les haines coloniales entre Boers (paysans blancs d'origine hollandaise) et Anglais." },
              { annee: 1899, evenement: "Guerre des Boers", info: "L'Empire britannique vainc les républiques Boers et y déploie les tout premiers camps de concentration pour civils." },
              { annee: 1948, evenement: "L'Apartheid", info: "Le Parti national impose la terrible ségrégation raciale étatique stricte pour isoler les Noirs." },
              { annee: 1994, evenement: "Démocratie universelle", info: "Élection libre : le pays frôle la guerre civile mais s'apaise." }
            ],
            dirigeants: [
              { titre: "Chef de la nation Zouloue", nom: "Chaka Zoulou", surnom: "", debut: 1816, fin: 1828 },
              { titre: "Président d'Afrique du Sud", nom: "Nelson Mandela", surnom: "Madiba", debut: 1994, fin: 1999 }
            ],
            personnages: [
              { nom: "F. W. de Klerk", role: "Président afrikaner", description: "Le dernier chef d'État de l'apartheid, partageant le Prix Nobel avec Mandela pour avoir organisé les premières élections multiraciales.", dates: "1936 à 2021", wikiUrl: "https://fr.wikipedia.org/wiki/Frederik_de_Klerk" }
            ],
            sciences: "Le territoire est une mine d'extraction titanesque mondiale des richesses minières lourdes (Or de Johannesburg et des diamants de Kimberley par la firme De Beers). Cette industrialisation extractive faramineuse s'est construite sur le sang de l'exploitation systématique des populations noires bantoues parquées et encartées ('les pass') dans des 'Bantoustans'. C'est en Afrique du Sud que le premier cœur humain fut chirurgicalement transplanté (Christian Barnard, 1967).",
            croyancesText: "L'Apartheid n'est pas qu'un système politique. Les dirigeants Boers (d'origine calviniste hollandaise très fondamentaliste de l'Église réformée hollandaise) s'identifiaient à un Peuple Élu de la Bible (le Grand Trek) justifiant religieusement et moralement la ségrégation des races comme ordre divin protecteur de la civilisation blanche face à l'Océan africain. En retour, les Églises noires et la philosophie ubuntu de la réconciliation (M. Tutu) briseront cette haine.",
            diplomatie: "Sous l'apartheid et la Guerre Froide, Pretoria (farouchement anticommuniste) possédait son propre armement atomique (qu'elle démantela plus tard en 1989) pour intimider les insurrections d'Angola et les pays de la ligne de front (soutenus par Fidel Castro au nom de l'URSS). Isolé et boycotté sportivement et financièrement par le monde entier, le gouvernement finira par céder aux pressions économiques des banques étrangères et internes (ANC).",
            guerres: [
              { nom: "Guerre Anglo-Zouloue", annee: 1879, adversaires: ["Empire Britannique"], allies: ["Contingents coloniaux"], morts: "Victoire de choc initiale, puis l'Empire", vainqueur: "Empire Britannique", consequences: "Malgré l'humiliation sanglante initiale d'Isandhlwana par les formidables lances zouloues (sagaies Assegai), l'artillerie anglaise exécute méthodiquement les Zoulous et anéantit leur souveraineté.", wikiUrl: "https://fr.wikipedia.org/wiki/Guerre_anglo-zouloue" }
            ],
            documentaires: [{ titre: "L'Afrique du Sud de Mandela et la fin de l'Apartheid", url: "https://fr.wikipedia.org/wiki/Histoire_de_l%27Afrique_du_Sud" }]
          }
        ]
      }
    ]
  }
];