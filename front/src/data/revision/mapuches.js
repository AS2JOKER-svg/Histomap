/** Chapitre rédigé : Mapuches (vers 1450 – 1883). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'gens',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les gens de la terre',
      body:
        "« Mapuche » signifie « gens de la terre ». Ce peuple du centre-sud du Chili actuel vit en communautés indépendantes, dirigées par des chefs, les lonkos.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Wallmapu',
      years: [1492, 1878],
      caption: 'Comparez : le pays mapuche, le Wallmapu, reste indépendant pendant plus de trois siècles après l’arrivée des Espagnols.',
    },
    {
      id: 'incas',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Les Incas arrêtés',
      body:
        "À la fin du XVe siècle, selon les chroniques, les guerriers du Sud arrêtent l'avancée de l'Empire inca près du fleuve Maule. L'empire ne va pas plus loin vers le sud.",
    },
    {
      id: 'lautaro',
      tier: 1,
      type: 'person',
      nom: 'Lautaro',
      role: 'Chef de guerre mapuche',
      dates: 'vers 1534 – 1557',
      description:
        "Capturé jeune et employé par le conquistador Pedro de Valdivia, il apprend la façon de combattre des Espagnols. Revenu parmi les siens, il les bat à Tucapel en 1553 ; Valdivia est tué.",
    },
    {
      id: 'arauco',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’Arauco',
      annee: 1550,
      adversaires: ['Empire espagnol'],
      allies: ['Mapuches'],
      vainqueur: 'Mapuches (frontière du Biobío reconnue)',
      consequences:
        "Après les victoires de Tucapel (1553) et de Curalaba (1598), les Mapuches détruisent les villes espagnoles au sud du fleuve Biobío. L'Espagne doit reconnaître leur autonomie en 1641.",
    },
    {
      id: 'frontiere',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'La frontière du Biobío',
      body:
        "Pendant près de trois siècles, le fleuve Biobío sépare le Chili espagnol du pays mapuche. Les deux camps se rencontrent lors de grands parlements, où l'on négocie et échange des cadeaux.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Mapuches en dates',
      items: [
        { year: 1553, label: 'Victoire de Tucapel' },
        { year: 1598, label: 'Victoire de Curalaba' },
        { year: 1641, label: 'Parlement de Quilín' },
        { year: 1861, label: 'Début de l’occupation de l’Araucanie' },
        { year: 1883, label: 'Annexion des terres mapuches' },
      ],
    },
    {
      id: 'occupation',
      tier: 1,
      type: 'war',
      nom: 'Occupation de l’Araucanie',
      annee: 1861,
      adversaires: ['Chili'],
      allies: ['Mapuches'],
      vainqueur: 'Chili',
      consequences:
        "De 1861 à 1883, l'armée chilienne conquiert les terres mapuches, distribuées ensuite à des colons ; les Mapuches sont regroupés dans des réserves. En Argentine, la « conquête du désert » soumet les Mapuches de la pampa.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Mapuches aujourd’hui',
      body:
        "En 2017, environ 1,7 million de Chiliens se déclaraient mapuches. Leur langue, le mapudungun, est toujours parlée, et leurs revendications sur les terres perdues restent une question politique importante.",
    },

    // ── Niveau 2 ──
    {
      id: 'cheval',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des cavaliers redoutables',
      body:
        "Les Mapuches adoptent rapidement le cheval, introduit par les Espagnols, et deviennent d'excellents cavaliers. Ils s'installent aussi dans la pampa argentine.",
    },
    {
      id: 'machi',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les machi',
      body:
        "Les machi, le plus souvent des femmes, sont des guérisseuses et des guides spirituelles. Elles officient près du rewe, un tronc sculpté en escalier.",
    },
    {
      id: 'araucana',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'La Araucana',
      body:
        "En 1569, le soldat espagnol Alonso de Ercilla publie « La Araucana », un poème épique qui fait des chefs mapuches de véritables héros.",
    },
    {
      id: 'argent',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les bijoux d’argent',
      body:
        "Les orfèvres mapuches fabriquent de grands bijoux d'argent, portés par les femmes lors des fêtes et des cérémonies.",
    },
    {
      id: 'palin',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le palin',
      body:
        "Le palin, un jeu de crosse collectif, sert à la fois de sport, de fête et de rituel entre communautés.",
    },
  ],

  quiz: [
    { id: 'sens', type: 'mcq', prompt: 'Que signifie « Mapuche » ?', options: ['Gens de la terre', 'Peuple du soleil', 'Enfants de la mer', 'Guerriers du ciel'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quels pays actuels vivent les Mapuches ?', options: ['Le Chili et l’Argentine', 'Le Mexique et le Guatemala', 'Le Pérou et la Bolivie', 'Le Canada et les États-Unis'], answer: 0 },
    { id: 'lonko', type: 'mcq', prompt: 'Comment s’appelle un chef de communauté mapuche ?', options: ['Un lonko', 'Un cacique', 'Un sachem', 'Un zipa'], answer: 0 },
    { id: 'incas', type: 'mcq', prompt: 'Quel empire les Mapuches arrêtent-ils à la fin du XVe siècle ?', options: ['L’Empire inca', 'L’Empire aztèque', 'L’Empire espagnol', 'L’Empire portugais'], answer: 0 },
    { id: 'lautaro', type: 'mcq', prompt: 'Quel chef mapuche bat les Espagnols à Tucapel en 1553 ?', options: ['Lautaro', 'Caupolicán', 'Tascalusa', 'Hatuey'], answer: 0 },
    { id: 'valdivia', type: 'mcq', prompt: 'Quel conquistador est tué après la bataille de Tucapel ?', options: ['Pedro de Valdivia', 'Francisco Pizarro', 'Hernán Cortés', 'Diego de Almagro'], answer: 0 },
    { id: 'arauco', type: 'mcq', prompt: 'Comment s’appelle la longue guerre contre les Espagnols ?', options: ['La guerre d’Arauco', 'La guerre de Cent Ans', 'La guerre des Castors', 'La guerre du Pacifique'], answer: 0 },
    { id: 'biobio', type: 'mcq', prompt: 'Quel fleuve sert de frontière entre les Espagnols et les Mapuches ?', options: ['Le Biobío', 'L’Amazone', 'Le Rio Grande', 'Le Maule'], answer: 0 },
    { id: 'independance', type: 'tf', prompt: 'Le pays mapuche reste indépendant pendant plus de trois siècles après l’arrivée des Espagnols.', answer: true },
    { id: 'parlements', type: 'mcq', prompt: 'Comment Espagnols et Mapuches négocient-ils ?', options: ['Lors de grands parlements', 'Par lettres', 'Devant le pape', 'Ils ne négocient jamais'], answer: 0 },
    { id: 'cheval', type: 'mcq', prompt: 'Quel animal, introduit par les Espagnols, les Mapuches adoptent-ils rapidement ?', options: ['Le cheval', 'Le chameau', 'L’éléphant', 'Le lama'], answer: 0 },
    { id: 'machi', type: 'mcq', prompt: 'Qui sont les machi ?', options: ['Des guérisseuses et guides spirituelles', 'Des chefs de guerre', 'Des marchands', 'Des soldats espagnols'], answer: 0 },
    { id: 'occupation', type: 'mcq', prompt: 'Quel pays conquiert les terres mapuches entre 1861 et 1883 ?', options: ['Le Chili', 'L’Espagne', 'Le Pérou', 'Le Brésil'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Comment s’appelle la langue mapuche ?', options: ['Le mapudungun', 'Le quechua', 'Le nahuatl', 'Le guarani'], answer: 0 },
    { id: 'araucana', type: 'mcq', prompt: 'Quel poème épique espagnol célèbre le courage des Mapuches ?', options: ['La Araucana', 'Don Quichotte', 'L’Odyssée', 'La Chanson de Roland'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Victoire de Tucapel', 'Victoire de Curalaba', 'Parlement de Quilín', 'Annexion des terres mapuches'] },
  ],

  recap: [
    'Les Mapuches, « gens de la terre », du centre-sud du Chili',
    'Ils arrêtent les Incas, puis battent les Espagnols (Lautaro, 1553)',
    'Près de trois siècles d’indépendance au sud du fleuve Biobío',
    '1861-1883 : conquête par le Chili ; un peuple qui revendique toujours ses terres',
  ],
}
