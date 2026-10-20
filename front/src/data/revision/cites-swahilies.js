/** Chapitre rédigé : Cités swahilies (vers 800 – 1505). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cote',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les villes de la côte',
      body:
        "Sur la côte de l'Afrique de l'Est, du sud de la Somalie au Mozambique, des villages de pêcheurs et d'agriculteurs bantous deviennent, à partir du VIIIe siècle, des ports de commerce. Chaque ville est un petit État indépendant : Kilwa, Mombasa, Malindi, Lamu, Zanzibar…",
      highlight: { value: '≈ 700 ans', label: 'de cités swahilies' },
    },
    {
      id: 'mousson',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Les vents de la mousson',
      body:
        "Les vents de mousson soufflent vers l'Afrique en hiver et vers l'Inde en été. Ils amènent sur la côte les marins arabes, persans et indiens. Les cités vendent l'or, l'ivoire et des esclaves, et achètent des tissus de l'Inde, des perles et de la porcelaine de Chine.",
    },
    {
      id: 'swahili',
      tier: 1,
      type: 'text',
      kicker: 'Langue',
      title: 'Une culture métissée',
      body:
        "De ces rencontres naît la culture swahilie : une langue bantoue enrichie de mots arabes, écrite en caractères arabes, l'islam et une architecture en pierre de corail. « Swahili » vient d'un mot arabe qui signifie « gens de la côte ».",
    },
    {
      id: 'kilwa',
      tier: 1,
      type: 'text',
      kicker: 'Villes',
      title: 'Kilwa, la ville de l’or',
      body:
        "Au XIVe siècle, Kilwa, sur une île de Tanzanie, contrôle le commerce de l'or venu du Zimbabwe. Ses sultans frappent leurs propres pièces de cuivre et bâtissent une grande mosquée à coupoles et un immense palais, Husuni Kubwa.",
    },
    {
      id: 'ibn-battuta',
      tier: 1,
      type: 'person',
      nom: 'Ibn Battuta',
      role: 'Voyageur marocain',
      dates: '1304 – vers 1369',
      description:
        "En 1331, il visite Mogadiscio, Mombasa et Kilwa. Il trouve Kilwa « parmi les plus belles villes du monde » et décrit la générosité de son sultan.",
    },
    {
      id: 'chine',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Une girafe pour l’empereur de Chine',
      body:
        "Au début du XVe siècle, les flottes chinoises de l'amiral Zheng He atteignent la côte. En 1415, une ambassade de Malindi offre une girafe à l'empereur de Chine, qui y voit un animal de bon augure.",
      highlight: { value: '1415', label: 'une girafe de Malindi en Chine' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les cités swahilies en dates',
      items: [
        { year: 800, label: 'Premières mosquées sur la côte' },
        { year: 1331, label: 'Visite d’Ibn Battuta' },
        { year: 1415, label: 'Une girafe de Malindi en Chine' },
        { year: 1498, label: 'Vasco de Gama à Malindi' },
        { year: 1505, label: 'Sac de Kilwa et de Mombasa' },
      ],
    },
    {
      id: 'portugais',
      tier: 1,
      type: 'war',
      nom: 'Sac de Kilwa et de Mombasa',
      annee: 1505,
      adversaires: ['Royaume de Portugal (Francisco de Almeida)'],
      allies: ['Kilwa et Mombasa'],
      vainqueur: 'Portugal',
      consequences:
        "En 1498, Vasco de Gama fait escale à Malindi, qui lui fournit un pilote pour gagner l'Inde. Sept ans plus tard, une flotte portugaise pille Kilwa et Mombasa pour contrôler le commerce de l'océan Indien : les cités déclinent.",
    },
    {
      id: 'heritage',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le swahili aujourd’hui',
      body:
        "Le swahili est devenu la grande langue commune de l'Afrique de l'Est, parlée par des dizaines de millions de personnes au Kenya, en Tanzanie, en Ouganda et au-delà. Les ruines de Kilwa et la vieille ville de Lamu sont inscrites au patrimoine mondial.",
    },

    // ── Niveau 2 ──
    {
      id: 'corail',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Bâtir en corail',
      body:
        "Les Swahilis taillent des blocs de corail ou le réduisent en chaux pour construire mosquées, palais et maisons à plusieurs pièces. Les portes de bois sculpté des maisons de Lamu et de Zanzibar sont célèbres.",
    },
    {
      id: 'dhow',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les boutres',
      body:
        "Les marins de l'océan Indien naviguent sur des boutres, ou dhows, des voiliers en bois à voile triangulaire. Certains sont faits de planches cousues avec des cordes en fibre de coco.",
    },
    {
      id: 'husuni',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Architecture',
      value: '> 100',
      label: 'pièces dans le palais de Husuni Kubwa, à Kilwa',
      caption: "Bâti au XIVe siècle au bord de la mer, ce palais avait des cours, des salles d'audience et une piscine taillée dans la roche.",
    },
    {
      id: 'rivalites',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des cités rivales',
      body:
        "Les cités swahilies se font souvent concurrence. Malindi, rivale de Mombasa, choisit de s'allier aux Portugais, tandis que Mombasa leur résiste et est pillée à plusieurs reprises.",
    },
    {
      id: 'vasco',
      tier: 2,
      type: 'person',
      nom: 'Vasco de Gama',
      role: 'Navigateur portugais',
      dates: 'vers 1469 – 1524',
      description: "En 1497-1498, il contourne l'Afrique, remonte la côte swahilie et, grâce à un pilote obtenu à Malindi, atteint Calicut, en Inde : la route maritime vers l'Asie est ouverte.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Sur quelle côte se trouvent les cités swahilies ?', options: ['La côte de l’Afrique de l’Est', 'La côte méditerranéenne', 'La côte atlantique de l’Afrique', 'La côte de la mer Rouge'], answer: 0 },
    { id: 'ocean', type: 'mcq', prompt: 'Sur quel océan commercent les cités swahilies ?', options: ['L’océan Indien', 'L’océan Atlantique', 'L’océan Pacifique', 'L’océan Arctique'], answer: 0 },
    { id: 'mousson', type: 'mcq', prompt: 'Quels vents permettent aux marins de traverser l’océan Indien ?', options: ['Les vents de mousson', 'Les alizés de l’Atlantique', 'Le mistral', 'Les vents polaires'], answer: 0 },
    { id: 'mot', type: 'mcq', prompt: 'Que signifie le mot « swahili » ?', options: ['Gens de la côte', 'Hommes libres', 'Marchands d’or', 'Fils du désert'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion domine les cités swahilies ?', options: ['L’islam', 'Le christianisme', 'Le bouddhisme', 'L’hindouisme'], answer: 0 },
    { id: 'kilwa', type: 'mcq', prompt: 'Quelle cité contrôle le commerce de l’or au XIVe siècle ?', options: ['Kilwa', 'Tombouctou', 'Venise', 'Calicut'], answer: 0 },
    { id: 'or', type: 'mcq', prompt: 'D’où vient l’or vendu par Kilwa ?', options: ['Du Zimbabwe', 'Du Pérou', 'De Chine', 'D’Égypte'], answer: 0 },
    { id: 'corail', type: 'mcq', prompt: 'Avec quel matériau les Swahilis bâtissent-ils leurs mosquées ?', options: ['La pierre de corail', 'Le marbre', 'La brique crue', 'Le bambou'], answer: 0 },
    { id: 'battuta', type: 'mcq', prompt: 'Quel voyageur visite Kilwa en 1331 ?', options: ['Ibn Battuta', 'Marco Polo', 'Christophe Colomb', 'Zheng He'], answer: 0 },
    { id: 'girafe', type: 'mcq', prompt: 'Quel animal Malindi offre-t-elle à l’empereur de Chine en 1415 ?', options: ['Une girafe', 'Un éléphant', 'Un lion', 'Un zèbre'], answer: 0 },
    { id: 'gama', type: 'mcq', prompt: 'Quel navigateur fait escale à Malindi en 1498 ?', options: ['Vasco de Gama', 'Magellan', 'Christophe Colomb', 'James Cook'], answer: 0 },
    { id: 'sac', type: 'tf', prompt: 'En 1505, les Portugais pillent Kilwa et Mombasa.', answer: true },
    { id: 'malindi', type: 'tf', prompt: 'Toutes les cités swahilies s’unissent contre les Portugais.', answer: false, explanation: 'Malindi, rivale de Mombasa, s’allie aux Portugais.' },
    { id: 'langue', type: 'mcq', prompt: 'À quelle famille appartient la langue swahilie ?', options: ['Les langues bantoues', 'Les langues romanes', 'Les langues turques', 'Les langues slaves'], answer: 0 },
    { id: 'dhow', type: 'mcq', prompt: 'Comment s’appellent les voiliers de l’océan Indien ?', options: ['Les boutres (dhows)', 'Les drakkars', 'Les jonques', 'Les galères'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premières mosquées sur la côte', 'Visite d’Ibn Battuta', 'Vasco de Gama à Malindi', 'Sac de Kilwa et de Mombasa'] },
  ],

  recap: [
    'Des cités-États marchandes sur la côte de l’Afrique de l’Est',
    'Culture swahilie : langue bantoue, islam, maisons de corail',
    'Kilwa, ville de l’or ; visite d’Ibn Battuta (1331) ; girafe pour la Chine (1415)',
    'Les Portugais pillent Kilwa et Mombasa en 1505',
  ],
}
