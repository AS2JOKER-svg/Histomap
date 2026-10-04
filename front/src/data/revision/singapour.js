/** Chapitre rédigé : Singapour, du comptoir britannique à la cité-État (1819 – aujourd'hui). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'raffles',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Raffles fonde un port franc',
      body:
        "En 1819, le Britannique Stamford Raffles, de la Compagnie anglaise des Indes orientales, obtient des chefs malais locaux le droit d'installer un comptoir sur l'île de Singapour. Il en fait un port franc, sans taxes sur le commerce, pour attirer les marchands.",
      highlight: { value: '1819', label: 'fondation du comptoir britannique' },
    },
    {
      id: 'lion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La « ville du lion »',
      body:
        "Le nom vient du malais Singapura, « la ville du lion ». Selon la légende, un prince venu de Sumatra aurait aperçu un lion sur l'île. Bien avant Raffles, un port nommé Temasek y existait déjà au XIVe siècle.",
    },
    {
      id: 'carrefour',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'Au carrefour des mers',
      body:
        "Située à la pointe sud de la péninsule malaise, Singapour contrôle le détroit de Malacca, passage obligé entre l'océan Indien et la mer de Chine. En 1867, elle devient une colonie de la Couronne britannique, avec Penang et Malacca (les « Établissements des Détroits »).",
    },
    {
      id: 'peuples',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: '4',
      label: 'langues officielles : anglais, malais, mandarin, tamoul',
      caption: "Le port attire des migrants chinois, malais et indiens. Aujourd'hui, environ trois quarts des citoyens sont d'origine chinoise, les autres surtout d'origine malaise et indienne.",
    },
    {
      id: 'chute',
      tier: 1,
      type: 'war',
      nom: 'Chute de Singapour',
      annee: 1942,
      adversaires: ['Empire du Japon (général Yamashita)'],
      allies: ['Empire britannique (troupes britanniques, indiennes, australiennes)'],
      vainqueur: 'Le Japon',
      consequences: "Le 15 février 1942, la grande base britannique capitule : environ 80 000 soldats alliés sont faits prisonniers. Churchill parle du « pire désastre » de l'histoire militaire britannique. L'occupation dure jusqu'en 1945.",
    },
    {
      id: 'sook-ching',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: "L'occupation japonaise",
      body:
        "Rebaptisée Syonan (« Lumière du Sud »), l'île vit trois ans et demi sous une occupation très dure. Lors du massacre de Sook Ching, en février-mars 1942, des dizaines de milliers d'habitants d'origine chinoise sont exécutés (de 25 000 à 50 000 selon les estimations).",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'dates',
      kicker: 'Création',
      title: "Le chemin vers l'indépendance",
      items: [
        { year: 1959, label: 'Autonomie interne : Lee Kuan Yew devient Premier ministre' },
        { year: 1963, label: 'Singapour rejoint la nouvelle fédération de Malaisie' },
        { year: 1965, label: 'Le 9 août, après de fortes tensions, Singapour quitte la Malaisie et devient indépendante' },
      ],
    },
    {
      id: 'lky',
      tier: 1,
      type: 'person',
      nom: 'Lee Kuan Yew',
      role: 'Premier ministre de Singapour',
      dates: '1923 – 2015 (au pouvoir de 1959 à 1990)',
      description: "Avocat formé en Angleterre, il fonde le Parti d'action populaire (PAP), toujours au pouvoir depuis 1959. Il transforme la petite île sans ressources en pays riche, mais gouverne de façon autoritaire : presse contrôlée, opposition limitée.",
    },
    {
      id: 'miracle',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Un miracle économique',
      body:
        "Sans pétrole ni terres agricoles, Singapour mise sur le port, l'industrie, puis la finance. Elle devient l'un des pays les plus riches du monde par habitant et l'un des plus grands ports à conteneurs de la planète.",
    },

    // ── Niveau 2 ──
    {
      id: 'surface',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Fluctuations',
      value: '≈ 730 km²',
      label: 'de superficie, un peu moins que Paris et sa petite couronne',
      caption: "En gagnant des terres sur la mer avec du sable et des remblais, Singapour a agrandi son territoire d'environ un quart depuis les années 1960.",
    },
    {
      id: 'logement',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Des logements pour tous',
      body:
        "À partir de 1960, l'État construit massivement des immeubles pour remplacer les quartiers insalubres. Aujourd'hui, environ 80 % des habitants vivent dans ces logements publics, dont la plupart sont propriétaires.",
    },
    {
      id: 'eau',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: "Le défi de l'eau",
      body:
        "L'île manque d'eau douce et en achète une partie à la Malaisie. Pour être moins dépendante, elle recycle les eaux usées en eau très pure (« NEWater », depuis 2003), dessale l'eau de mer et recueille l'eau de pluie.",
    },
    {
      id: 'regles',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une société très encadrée',
      body:
        "Singapour est connue pour ses règles strictes : amendes élevées, vente de chewing-gum interdite depuis 1992, châtiments corporels pour certains délits. Le pays est très sûr, mais les libertés d'expression et de manifestation y sont limitées.",
    },
    {
      id: 'dirigeants',
      tier: 2,
      type: 'dates',
      kicker: 'Durée',
      title: 'Les Premiers ministres',
      items: [
        { year: 1959, label: 'Lee Kuan Yew' },
        { year: 1990, label: 'Goh Chok Tong' },
        { year: 2004, label: 'Lee Hsien Loong, fils de Lee Kuan Yew' },
        { year: 2024, label: 'Lawrence Wong' },
      ],
    },
  ],

  quiz: [
    { id: 'raffles', type: 'mcq', prompt: 'Qui fonde le comptoir britannique de Singapour en 1819 ?', options: ['Stamford Raffles', 'Lee Kuan Yew', 'James Cook', 'Robert Clive'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année Raffles fonde-t-il le comptoir ?', options: ['1819', '1867', '1942', '1765'], answer: 0 },
    { id: 'franc', type: 'mcq', prompt: "Qu'est-ce qu'un port franc ?", options: ['Un port sans taxes sur le commerce', 'Un port interdit aux étrangers', 'Un port militaire', 'Un port appartenant à la France'], answer: 0 },
    { id: 'lion', type: 'mcq', prompt: 'Que signifie le nom Singapura ?', options: ['La ville du lion', 'La ville du tigre', 'Le port des épices', "L'île du dragon"], answer: 0 },
    { id: 'detroit', type: 'mcq', prompt: 'Quel détroit Singapour contrôle-t-elle ?', options: ['Le détroit de Malacca', 'Le détroit de Gibraltar', 'Le détroit de Béring', 'Le détroit du Bosphore'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Laquelle de ces langues n’est PAS une langue officielle de Singapour ?', options: ['Le japonais', 'Le tamoul', 'Le malais', 'Le mandarin'], answer: 0 },
    { id: 'chinois', type: 'tf', prompt: "La majorité des citoyens de Singapour sont d'origine chinoise.", answer: true },
    { id: 'chute', type: 'mcq', prompt: 'Quel pays prend Singapour aux Britanniques en 1942 ?', options: ['Le Japon', 'La Chine', 'Les Pays-Bas', "L'Allemagne"], answer: 0 },
    { id: 'sook', type: 'mcq', prompt: 'Qui sont les principales victimes du massacre de Sook Ching ?', options: ["Des habitants d'origine chinoise", 'Des soldats japonais', 'Des marchands indiens', 'Des colons britanniques'], answer: 0 },
    { id: 'malaisie', type: 'mcq', prompt: 'Quelle fédération Singapour rejoint-elle en 1963 ?', options: ['La Malaisie', "L'Indonésie", 'Le Commonwealth australien', 'La Thaïlande'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année Singapour devient-elle indépendante ?', options: ['1965', '1945', '1959', '1963'], answer: 0 },
    { id: 'guerre', type: 'tf', prompt: 'Singapour obtient son indépendance au terme d’une longue guerre contre le Royaume-Uni.', answer: false, explanation: 'Elle devient indépendante en 1965 en quittant la Malaisie, sans guerre.' },
    { id: 'lky', type: 'mcq', prompt: 'Qui est Premier ministre de Singapour de 1959 à 1990 ?', options: ['Lee Kuan Yew', 'Goh Chok Tong', 'Sukarno', 'Lee Hsien Loong'], answer: 0 },
    { id: 'pap', type: 'mcq', prompt: 'Quel parti gouverne Singapour sans interruption depuis 1959 ?', options: ["Le Parti d'action populaire", 'Le Parti communiste', 'Le Parti travailliste', 'Le Kuomintang'], answer: 0 },
    { id: 'logement', type: 'mcq', prompt: 'Quelle part des habitants vit dans des logements publics ?', options: ['Environ 80 %', 'Environ 10 %', 'Environ 30 %', 'Presque personne'], answer: 0 },
    { id: 'eau', type: 'mcq', prompt: 'Quelle ressource manque particulièrement à Singapour ?', options: ["L'eau douce", 'Le sable', 'Le soleil', 'La main-d’œuvre'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation du comptoir par Raffles', 'Colonie de la Couronne britannique', 'Chute de Singapour face au Japon', 'Entrée dans la Malaisie', 'Indépendance'] },
  ],

  recap: [
    '1819 : Raffles fonde un port franc britannique',
    '1942-1945 : occupation japonaise et massacre de Sook Ching',
    '1965 : indépendance après la sortie de la Malaisie',
    'Lee Kuan Yew : une cité-État riche mais très encadrée',
  ],
}
