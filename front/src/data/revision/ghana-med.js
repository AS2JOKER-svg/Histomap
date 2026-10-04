/** Chapitre rédigé : Empire du Ghana (Wagadou), vers le VIe siècle – vers 1240. */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'wagadou',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le Wagadou des Soninkés',
      body:
        "L'Empire du Ghana est fondé par les Soninkés, qui l'appellent Wagadou. Ses débuts sont mal connus : il existe sans doute dès le VIe ou le VIIe siècle, peut-être avant. Au VIIIe siècle, un savant de Bagdad, al-Fazari, le mentionne déjà comme le « pays de l'or ».",
      highlight: { value: 'VIIIe siècle', label: "première mention écrite, par al-Fazari" },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Aux portes du Sahara',
      years: [800, 1200],
      caption: "Le Ghana s'étend dans le Sahel, au sud de l'actuelle Mauritanie et à l'ouest de l'actuel Mali. Comparez son étendue vers 800 et vers 1200.",
    },
    {
      id: 'nom',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Rien à voir avec le Ghana actuel ?',
      body:
        "« Ghana » était à l'origine un titre du roi, qui a fini par désigner tout le pays. L'État actuel du Ghana, situé bien plus au sud-est, sur le golfe de Guinée, a pris ce nom à son indépendance en 1957 en souvenir de cet ancien empire.",
      highlight: { value: '1957', label: "l'ancienne Gold Coast devient le Ghana" },
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: "Le roi de l'or",
      body:
        "L'or ne vient pas du Ghana lui-même mais de régions plus au sud, comme le Bambouk. Le roi contrôle son passage vers le nord. Selon le géographe al-Bakri, toutes les pépites trouvées appartiennent au roi : les marchands n'ont droit qu'à la poudre d'or. Ainsi, l'or reste rare et précieux.",
    },
    {
      id: 'douane',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: '1 dinar',
      label: "d'or pour chaque charge d'âne de sel qui entre dans le pays",
      caption: "Selon al-Bakri, le roi taxe les marchandises : un dinar pour une charge de sel qui entre, deux dinars pour une charge qui sort. Le cuivre et les autres produits sont taxés aussi. Ces droits de douane font la richesse du royaume.",
    },
    {
      id: 'villes',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Une capitale, deux villes',
      body:
        "D'après al-Bakri, la capitale est formée de deux villes séparées d'environ dix kilomètres. L'une est habitée par les marchands musulmans venus d'Afrique du Nord, avec une douzaine de mosquées. L'autre est la ville du roi, qui garde la religion traditionnelle, entourée de bois sacrés.",
    },
    {
      id: 'al-bakri',
      tier: 1,
      type: 'person',
      nom: 'Al-Bakri',
      role: 'Géographe andalou',
      dates: 'vers 1014 – 1094',
      description: "Installé à Cordoue, il n'est jamais allé au Ghana. En 1068, il rédige une grande description du monde à partir des récits de marchands et de voyageurs. Son texte est la principale source sur l'Empire du Ghana et sur son roi Tunka Manin.",
    },
    {
      id: 'almoravides',
      tier: 1,
      type: 'war',
      nom: 'Offensive des Almoravides',
      annee: 1076,
      adversaires: ['Almoravides (Berbères musulmans du Sahara)'],
      allies: ['Royaume du Ghana'],
      vainqueur: 'Almoravides',
      consequences: "Les Almoravides prennent Aoudaghost, ville marchande soumise au Ghana, vers 1054. Selon des auteurs arabes plus tardifs, ils s'emparent de la capitale du Ghana vers 1076. Des historiens discutent aujourd'hui de cette conquête, mais le Ghana en sort affaibli.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: "Du Ghana au Mali",
      items: [
        { year: 1054, label: 'Vers 1054 : les Almoravides prennent Aoudaghost' },
        { year: 1076, label: 'Vers 1076 : prise de la capitale selon la tradition' },
        { year: 1200, label: 'Vers 1200 : le royaume de Sosso domine la région' },
        { year: 1240, label: 'Vers 1240 : les restes du Ghana passent sous le contrôle du Mali' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'cour',
      tier: 2,
      type: 'text',
      kicker: 'Apogée',
      title: 'Une cour couverte d’or',
      body:
        "Al-Bakri décrit les audiences du roi : il siège sous un pavillon, entouré de chevaux couverts d'étoffes d'or et de pages portant des boucliers et des épées décorés d'or. Même les chiens de garde portent des colliers d'or et d'argent ! Le roi pouvait, dit-il, réunir 200 000 guerriers.",
    },
    {
      id: 'bida',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'La légende du serpent Bida',
      body:
        "Selon une légende soninké, le serpent Bida protégeait le Wagadou et faisait pleuvoir l'or, en échange d'une jeune fille offerte chaque année. Un jour, un jeune homme tue le serpent pour sauver sa fiancée. Le pays est alors frappé par la sécheresse et les Soninkés se dispersent.",
    },
    {
      id: 'koumbi',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Koumbi Saleh, la capitale ?',
      body:
        "Dans le sud-est de la Mauritanie, les ruines de Koumbi Saleh sont fouillées depuis le début du XXe siècle : maisons de pierre, mosquée, cimetières. La plupart des historiens y voient la ville des marchands de la capitale du Ghana, mais la ville royale n'a jamais été retrouvée avec certitude.",
    },
    {
      id: 'tunka',
      tier: 2,
      type: 'person',
      nom: 'Tunka Manin',
      role: 'Roi du Ghana',
      dates: 'règne à partir de 1063',
      description: "Neveu du roi précédent, il hérite du trône car la succession passe par le fils de la sœur du roi. Al-Bakri le décrit comme un roi puissant et redouté. Il n'est pas musulman, mais plusieurs de ses ministres le sont.",
    },
    {
      id: 'islam',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: "L'islam arrive par les caravanes",
      body:
        "Les marchands musulmans apportent l'islam dans le Sahel. Le roi garde sa religion mais emploie des musulmans comme ministres, car ils savent écrire en arabe. Au XIIe siècle, selon des auteurs arabes, les souverains du Ghana sont devenus musulmans.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: "Quel peuple fonde l'Empire du Ghana ?", options: ['Les Soninkés', 'Les Mandingues', 'Les Songhaï', 'Les Yorubas'], answer: 0 },
    { id: 'wagadou', type: 'mcq', prompt: 'Comment les Soninkés appellent-ils leur royaume ?', options: ['Wagadou', 'Manden', 'Kongo', 'Sosso'], answer: 0 },
    { id: 'localisation', type: 'mcq', prompt: "Dans quels pays actuels se trouvait l'Empire du Ghana ?", options: ['La Mauritanie et le Mali', 'Le Ghana et le Togo', 'Le Nigeria et le Cameroun', "L'Égypte et le Soudan"], answer: 0 },
    { id: 'meme-lieu', type: 'tf', prompt: "L'Empire du Ghana se trouvait au même endroit que l'État actuel du Ghana.", answer: false, explanation: "L'État actuel, sur le golfe de Guinée, a seulement repris le nom de l'empire en 1957." },
    { id: 'titre', type: 'mcq', prompt: "Que désignait d'abord le mot « Ghana » ?", options: ['Un titre du roi', 'Un fleuve', 'Une montagne', 'Une monnaie'], answer: 0 },
    { id: 'surnom', type: 'mcq', prompt: 'Quel surnom les auteurs arabes donnent-ils au Ghana ?', options: ["Le pays de l'or", 'Le pays du sel', 'Le pays des pyramides', "Le pays de l'encens"], answer: 0 },
    { id: 'pepites', type: 'mcq', prompt: 'Selon al-Bakri, à qui appartiennent toutes les pépites d’or ?', options: ['Au roi', 'Aux marchands', 'Aux mosquées', 'Aux mineurs'], answer: 0 },
    { id: 'origine-or', type: 'tf', prompt: "L'or vient de régions situées au sud du Ghana, comme le Bambouk.", answer: true },
    { id: 'douane', type: 'mcq', prompt: "D'où le roi du Ghana tire-t-il surtout sa richesse ?", options: ['Des taxes sur le commerce', 'De la pêche en mer', 'Du commerce de la soie', 'Des mines de diamants'], answer: 0 },
    { id: 'bakri', type: 'mcq', prompt: 'Quel géographe décrit le Ghana en 1068 ?', options: ['Al-Bakri', 'Ibn Battuta', 'Hérodote', 'Marco Polo'], answer: 0 },
    { id: 'visite', type: 'tf', prompt: "Al-Bakri a visité lui-même la capitale du Ghana.", answer: false, explanation: "Il vivait en Andalousie et s'appuyait sur les récits de marchands." },
    { id: 'villes', type: 'mcq', prompt: 'Qui habite la seconde ville de la capitale, à côté de la ville du roi ?', options: ['Des marchands musulmans', 'Des soldats romains', 'Des moines chrétiens', 'Des pêcheurs'], answer: 0 },
    { id: 'tunka', type: 'mcq', prompt: 'Quel roi du Ghana est décrit par al-Bakri ?', options: ['Tunka Manin', 'Soundiata Keïta', 'Mansa Moussa', 'Sonni Ali'], answer: 0 },
    { id: 'almoravides', type: 'mcq', prompt: 'Quel mouvement berbère musulman attaque le Ghana au XIe siècle ?', options: ['Les Almoravides', 'Les Mamelouks', 'Les Ottomans', 'Les Fatimides'], answer: 0 },
    { id: 'koumbi', type: 'mcq', prompt: 'Quel site de Mauritanie est souvent identifié à la capitale du Ghana ?', options: ['Koumbi Saleh', 'Tombouctou', 'Gao', 'Djenné'], answer: 0 },
    { id: 'bida', type: 'mcq', prompt: 'Quel animal protège le Wagadou dans la légende soninké ?', options: ['Le serpent Bida', 'Le lion Soundiata', 'Le crocodile Sobek', "L'aigle d'or"], answer: 0 },
    { id: 'successeur', type: 'mcq', prompt: 'Quel empire contrôle la région du Ghana vers 1240 ?', options: ["L'Empire du Mali", "L'Empire songhaï", "L'Empire ottoman", 'Le royaume du Kongo'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Al-Fazari mentionne le « pays de l’or »', 'Al-Bakri décrit le Ghana', 'Le royaume de Sosso domine la région', 'Le Mali contrôle la région'] },
  ],

  recap: [
    'Le Wagadou des Soninkés, au sud de la Mauritanie et à l’ouest du Mali',
    "Le « pays de l'or » : le roi taxe le commerce de l'or et du sel",
    'Une capitale double, ville du roi et ville des marchands musulmans',
    'Affaibli au XIe siècle, il passe sous le contrôle du Mali vers 1240',
  ],
}
