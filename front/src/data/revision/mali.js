/** Chapitre rédigé : Empire du Mali (vers 1235 – XVIIe siècle). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'soundiata',
      tier: 1,
      type: 'person',
      nom: 'Soundiata Keïta',
      role: "Fondateur de l'Empire du Mali",
      dates: 'mort vers 1255',
      description: "Selon l'épopée transmise par les griots, cet enfant infirme, longtemps moqué, finit par marcher et devient un grand chasseur. Exilé, il revient à la tête des Mandingues pour libérer son peuple du roi Soumaoro Kanté. On le surnomme le « Lion du Mandingue ».",
    },
    {
      id: 'kirina',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Kirina',
      annee: 1235,
      adversaires: ['Royaume de Sosso (Soumaoro Kanté)'],
      allies: ['Coalition des clans mandingues (Soundiata Keïta)'],
      vainqueur: 'Soundiata Keïta',
      consequences: "Vers 1235, la victoire de Kirina marque la naissance de l'Empire du Mali. Soundiata prend le titre de mansa, « roi des rois ». La date exacte reste incertaine.",
    },
    {
      id: 'charte',
      tier: 1,
      type: 'text',
      kicker: 'Droits',
      title: 'La charte du Manden',
      body:
        "Selon la tradition orale, Soundiata réunit les chefs à Kouroukan Fouga et proclame des règles pour organiser la société : respect de la vie, rôle de chaque clan, devoirs envers les voisins. Ce texte n'a été mis par écrit qu'au XXe siècle et son contenu exact est débattu. L'UNESCO l'a inscrit au patrimoine immatériel en 2009.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un empire du Sahel',
      years: [1300, 1400],
      caption: "Comparez : de l'océan Atlantique à la boucle du Niger, l'empire contrôle les routes de l'or et du sel, avant de reculer au XVe siècle.",
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: "L'or contre le sel",
      body:
        "Le Mali contrôle les régions aurifères du Bambouk et du Bouré. Des caravanes de dromadaires traversent le Sahara : elles apportent le sel des mines de Taghaza, des tissus et des chevaux, et repartent vers le nord avec de l'or et des esclaves.",
    },
    {
      id: 'moussa',
      tier: 1,
      type: 'person',
      nom: 'Mansa Moussa',
      role: 'Empereur du Mali',
      dates: 'règne vers 1312 – vers 1337',
      description: "Sous son règne, le Mali atteint son apogée. Musulman pieux, il fait le pèlerinage à La Mecque en 1324 avec une suite immense. Il est souvent présenté comme l'un des hommes les plus riches de l'histoire.",
    },
    {
      id: 'pelerinage',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Un pèlerinage qui fait chuter le prix de l’or',
      body:
        "En 1324, Mansa Moussa passe par Le Caire avec des milliers de serviteurs et des chameaux chargés d'or. Il en distribue tant que, selon l'historien arabe al-Umari, le cours de l'or au Caire baisse pendant des années. Le monde méditerranéen découvre la richesse du Mali.",
      highlight: { value: '1324', label: 'pèlerinage de Mansa Moussa à La Mecque' },
    },
    {
      id: 'tombouctou',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Tombouctou, ville de savoir',
      body:
        "À son retour, Mansa Moussa ramène des savants et l'architecte et poète andalou as-Sahili. À Tombouctou est bâtie la mosquée de Djingareyber, en terre crue (banco). La ville devient un grand centre d'études islamiques, riche en manuscrits.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un lent déclin',
      body:
        "Au XVe siècle, les Touaregs prennent Tombouctou (vers 1433), puis l'Empire songhaï s'empare des grandes villes du Niger. Le Mali se réduit peu à peu à son cœur mandingue et disparaît au XVIIe siècle.",
    },

    // ── Niveau 2 ──
    {
      id: 'islam',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Islam des villes, croyances des campagnes',
      body:
        "Les mansas et les marchands sont musulmans, ce qui facilite le commerce et les relations avec l'Afrique du Nord. Mais la plupart des paysans continuent d'honorer les esprits et les ancêtres. Les souverains mêlent souvent les deux traditions.",
    },
    {
      id: 'griots',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les griots, mémoire du Mali',
      body:
        "L'histoire de Soundiata nous est parvenue par les griots, conteurs et musiciens qui se transmettent les récits de génération en génération. En 1960, l'historien guinéen Djibril Tamsir Niane publie une version écrite de cette épopée.",
    },
    {
      id: 'ibn-battuta',
      tier: 2,
      type: 'person',
      nom: 'Ibn Battuta',
      role: 'Voyageur marocain',
      dates: '1304 – vers 1377',
      description: "En 1352-1353, il visite le Mali sous le règne de Mansa Souleymane, frère de Mansa Moussa. Il décrit la sécurité des routes, la justice du roi et les cérémonies de la cour.",
    },
    {
      id: 'atlas',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Monde',
      value: '1375',
      label: 'Mansa Moussa apparaît sur l’Atlas catalan',
      caption: "Sur cette carte réalisée à Majorque, l'empereur du Mali est représenté couronné, tenant une pépite d'or : sa richesse est connue jusqu'en Europe.",
    },
    {
      id: 'atlantique',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: "L'expédition vers l'océan, une légende ?",
      body:
        "D'après un récit attribué à Mansa Moussa et rapporté par al-Umari, son prédécesseur aurait lancé des centaines de pirogues sur l'océan Atlantique, puis serait parti lui-même sans jamais revenir. Aucune preuve ne confirme cette histoire.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: "Qui fonde l'Empire du Mali ?", options: ['Soundiata Keïta', 'Mansa Moussa', 'Soumaoro Kanté', 'Sonni Ali'], answer: 0 },
    { id: 'kirina', type: 'mcq', prompt: 'Quelle bataille, vers 1235, marque la naissance de l’Empire du Mali ?', options: ['Kirina', 'Zama', 'Tondibi', 'Poitiers'], answer: 0 },
    { id: 'soumaoro', type: 'mcq', prompt: 'Quel roi de Sosso Soundiata affronte-t-il ?', options: ['Soumaoro Kanté', 'Mansa Souleymane', 'Askia Mohammed', 'Sonni Ali'], answer: 0 },
    { id: 'lion', type: 'mcq', prompt: 'Quel est le surnom de Soundiata Keïta ?', options: ['Le Lion du Mandingue', 'Le Roi Soleil', 'Le Conquérant', 'Le Roi d’or'], answer: 0 },
    { id: 'mansa', type: 'mcq', prompt: 'Que signifie le titre de mansa ?', options: ['Roi des rois', 'Chef des marchands', 'Grand prêtre', 'Général'], answer: 0 },
    { id: 'charte', type: 'tf', prompt: 'La charte du Manden a été transmise oralement avant d’être écrite au XXe siècle.', answer: true },
    { id: 'griots', type: 'mcq', prompt: 'Qui transmet l’épopée de Soundiata de génération en génération ?', options: ['Les griots', 'Les moines', 'Les scribes royaux', 'Les marchands arabes'], answer: 0 },
    { id: 'echange', type: 'mcq', prompt: "Quel produit les caravanes apportent-elles du Sahara en échange de l'or ?", options: ['Le sel', 'Le cacao', 'La soie', 'Le thé'], answer: 0 },
    { id: 'chameaux', type: 'tf', prompt: 'Les caravanes transsahariennes utilisent surtout des dromadaires.', answer: true },
    { id: 'pelerinage', type: 'mcq', prompt: 'En quelle année Mansa Moussa part-il en pèlerinage à La Mecque ?', options: ['1324', '1235', '1492', '1076'], answer: 0 },
    { id: 'caire', type: 'mcq', prompt: 'Dans quelle ville Mansa Moussa distribue-t-il tant d’or que son cours baisse ?', options: ['Le Caire', 'Rome', 'Bagdad', 'Paris'], answer: 0 },
    { id: 'tombouctou', type: 'mcq', prompt: 'Quelle ville devient un grand centre d’études islamiques ?', options: ['Tombouctou', 'Marrakech', 'Zanzibar', 'Dakar'], answer: 0 },
    { id: 'banco', type: 'mcq', prompt: 'En quel matériau est construite la mosquée de Djingareyber ?', options: ['En terre crue (banco)', 'En marbre', 'En bois', 'En brique cuite vernissée'], answer: 0 },
    { id: 'ibn-battuta', type: 'mcq', prompt: 'Quel voyageur marocain visite le Mali en 1352-1353 ?', options: ['Ibn Battuta', 'Marco Polo', 'Ibn Khaldoun', 'Averroès'], answer: 0 },
    { id: 'atlas', type: 'mcq', prompt: 'Sur quelle carte de 1375 Mansa Moussa est-il représenté ?', options: ["L'Atlas catalan", 'La carte de Piri Reis', 'La table de Peutinger', 'Le planisphère de Mercator'], answer: 0 },
    { id: 'religion', type: 'tf', prompt: "Toute la population du Mali est convertie à l'islam au XIVe siècle.", answer: false, explanation: "L'islam est la religion de la cour et des villes ; la plupart des paysans gardent leurs croyances traditionnelles." },
    { id: 'songhai', type: 'mcq', prompt: 'Quel empire supplante le Mali au XVe siècle ?', options: ["L'Empire songhaï", "L'Empire du Ghana", "L'Empire ottoman", "L'Empire almoravide"], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille de Kirina', 'Pèlerinage de Mansa Moussa', "Voyage d'Ibn Battuta au Mali", 'Atlas catalan'] },
  ],

  recap: [
    'Vers 1235 : Soundiata Keïta fonde le Mali après la victoire de Kirina',
    "Un empire riche de l'or, du sel et des caravanes transsahariennes",
    '1324 : le pèlerinage fastueux de Mansa Moussa',
    'XVe siècle : déclin face aux Touaregs et aux Songhaï',
  ],
}
