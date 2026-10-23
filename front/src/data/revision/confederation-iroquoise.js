/** Chapitre rédigé : Confédération iroquoise (vers 1450 – 1784). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cinq',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Cinq nations unies',
      body:
        "Au sud du lac Ontario vivent cinq nations souvent en guerre : Mohawks, Oneidas, Onondagas, Cayugas et Senecas. Selon la tradition, le Pacificateur et Hiawatha les persuadent de s'unir. La date est discutée, souvent placée vers 1450.",
      highlight: { value: '5, puis 6', label: 'nations unies dans la confédération' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le pays des Haudenosaunee',
      years: [1600, 1715],
      caption: 'La confédération occupe le nord de l’actuel État de New York, entre les Grands Lacs et la vallée de l’Hudson.',
    },
    {
      id: 'loi',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La Grande Loi de la paix',
      body:
        "La Grande Loi de la paix organise un Grand Conseil de cinquante chefs, qui se réunit à Onondaga. Les décisions importantes doivent être prises par consensus.",
    },
    {
      id: 'meres',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les mères de clan',
      body:
        "L'appartenance aux clans se transmet par les mères. Les mères de clan choisissent les chefs du Grand Conseil et peuvent les destituer ; les femmes possèdent les maisons et les champs.",
    },
    {
      id: 'maisons',
      tier: 1,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le peuple de la maison longue',
      body:
        "« Haudenosaunee » signifie « peuple de la maison longue ». Dans ces grandes maisons de bois et d'écorce vivent plusieurs familles d'un même clan. Autour, on cultive les « trois sœurs » : maïs, haricots et courges.",
    },
    {
      id: 'france',
      tier: 1,
      type: 'war',
      nom: 'Guerres franco-iroquoises',
      annee: 1609,
      adversaires: ['Nouvelle-France et ses alliés hurons et algonquins'],
      allies: ['Haudenosaunee, alliés aux Hollandais puis aux Anglais'],
      vainqueur: 'Aucun (paix de 1701)',
      consequences:
        "Pendant près d'un siècle, les Haudenosaunee et la Nouvelle-France s'affrontent pour le commerce des fourrures. La Grande Paix de Montréal, en 1701, met fin à ces guerres.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La confédération en dates',
      items: [
        { year: 1450, label: 'Union des cinq nations (date discutée)' },
        { year: 1609, label: 'Premier combat contre Champlain' },
        { year: 1701, label: 'Grande Paix de Montréal' },
        { year: 1722, label: 'Arrivée des Tuscaroras' },
        { year: 1784, label: 'Traité de Fort Stanwix' },
      ],
    },
    {
      id: 'revolution',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Divisés par la révolution américaine',
      body:
        "Pendant la révolution américaine, la plupart des nations soutiennent les Britanniques, mais les Oneidas et les Tuscaroras soutiennent les Américains. Après 1784, une grande partie des terres est cédée.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une confédération toujours vivante',
      body:
        "Le Grand Conseil se réunit toujours à Onondaga. Au Canada, la réserve des Six Nations de la rivière Grand est la plus peuplée du pays.",
    },

    // ── Niveau 2 ──
    {
      id: 'wampum',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les ceintures de wampum',
      body:
        "Les traités sont scellés par des ceintures de perles de coquillage, les wampums, dont les motifs gardent la mémoire des accords. La ceinture de Hiawatha est devenue le drapeau de la confédération.",
    },
    {
      id: 'paix',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'La Grande Paix de Montréal',
      body:
        "En 1701, plus de 1 300 représentants d'une quarantaine de nations se réunissent à Montréal avec le gouverneur de la Nouvelle-France. Ils signent la paix en dessinant l'animal de leur clan.",
    },
    {
      id: 'brant',
      tier: 2,
      type: 'person',
      nom: 'Joseph Brant (Thayendanegea)',
      role: 'Chef mohawk',
      dates: '1743 – 1807',
      description: "Allié des Britanniques pendant la révolution américaine, il rencontre le roi George III à Londres. Il conduit ensuite une partie des Haudenosaunee sur les terres de la rivière Grand, au Canada.",
    },
    {
      id: 'lacrosse',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'L’ancêtre du lacrosse',
      body:
        "Le jeu de crosse, ancêtre du lacrosse moderne, oppose parfois des centaines de joueurs. Il a aussi une valeur religieuse et peut servir à régler des conflits.",
    },
    {
      id: 'constitution',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une influence discutée',
      body:
        "En 1988, le Congrès des États-Unis a reconnu l'influence de la confédération sur les fondateurs du pays. Les historiens débattent de l'importance réelle de cette influence.",
    },
  ],

  quiz: [
    { id: 'nom', type: 'mcq', prompt: 'Que signifie « Haudenosaunee » ?', options: ['Peuple de la maison longue', 'Peuple du soleil', 'Gens de la mer', 'Enfants du maïs'], answer: 0 },
    { id: 'nombre', type: 'mcq', prompt: 'Combien de nations s’unissent au départ ?', options: ['Cinq', 'Deux', 'Douze', 'Cent'], answer: 0 },
    { id: 'region', type: 'mcq', prompt: 'Où vivent les Haudenosaunee ?', options: ['Au sud du lac Ontario', 'En Floride', 'Au Mexique', 'En Californie'], answer: 0 },
    { id: 'fondateurs', type: 'mcq', prompt: 'Selon la tradition, qui unit les nations ?', options: ['Le Pacificateur et Hiawatha', 'Champlain et Cartier', 'Brant et George III', 'Pocahontas et Smith'], answer: 0 },
    { id: 'loi', type: 'mcq', prompt: 'Comment s’appelle la loi qui unit les nations ?', options: ['La Grande Loi de la paix', 'La Magna Carta', 'Le Code noir', 'La Déclaration des droits'], answer: 0 },
    { id: 'conseil', type: 'mcq', prompt: 'Combien de chefs siègent au Grand Conseil ?', options: ['Cinquante', 'Cinq', 'Mille', 'Un seul'], answer: 0 },
    { id: 'meres', type: 'tf', prompt: 'Les mères de clan choisissent les chefs et peuvent les destituer.', answer: true },
    { id: 'soeurs', type: 'mcq', prompt: 'Quelles sont les « trois sœurs » ?', options: ['Maïs, haricots et courges', 'Blé, orge et seigle', 'Riz, thé et soja', 'Pomme, poire et prune'], answer: 0 },
    { id: 'fourrures', type: 'mcq', prompt: 'Pour le contrôle de quel commerce les guerres du XVIIe siècle sont-elles menées ?', options: ['Les fourrures', 'Les épices', 'L’or', 'Le sucre'], answer: 0 },
    { id: 'ennemis', type: 'mcq', prompt: 'Contre quelle colonie européenne la confédération se bat-elle au XVIIe siècle ?', options: ['La Nouvelle-France', 'La Nouvelle-Espagne', 'Le Brésil', 'La Virginie'], answer: 0 },
    { id: 'paix', type: 'mcq', prompt: 'Quel traité met fin à ces guerres en 1701 ?', options: ['La Grande Paix de Montréal', 'Le traité de Paris', 'Le traité d’Utrecht', 'Le traité de Versailles'], answer: 0 },
    { id: 'tuscaroras', type: 'mcq', prompt: 'Quelle nation rejoint la confédération en 1722 ?', options: ['Les Tuscaroras', 'Les Hurons', 'Les Cherokees', 'Les Sioux'], answer: 0 },
    { id: 'wampum', type: 'mcq', prompt: 'Qu’est-ce qu’un wampum ?', options: ['Une ceinture de perles qui garde la mémoire des traités', 'Une arme', 'Une maison', 'Une danse'], answer: 0 },
    { id: 'revolution', type: 'tf', prompt: 'Pendant la révolution américaine, toutes les nations de la confédération combattent du même côté.', answer: false, explanation: 'La plupart soutiennent les Britanniques, mais les Oneidas et les Tuscaroras soutiennent les Américains.' },
    { id: 'lacrosse', type: 'mcq', prompt: 'De quel sport moderne le jeu de crosse est-il l’ancêtre ?', options: ['Le lacrosse', 'Le hockey sur glace', 'Le golf', 'Le baseball'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Union des cinq nations (date discutée)', 'Premier combat contre Champlain', 'Grande Paix de Montréal', 'Traité de Fort Stanwix'] },
  ],

  recap: [
    'Cinq, puis six nations unies par la Grande Loi de la paix',
    'Un Grand Conseil de cinquante chefs, choisis par les mères de clan',
    'Guerres contre la Nouvelle-France, puis Grande Paix de Montréal (1701)',
    'Divisée par la révolution américaine, la confédération existe toujours',
  ],
}
