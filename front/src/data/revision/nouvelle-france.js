/** Chapitre rédigé : Nouvelle-France (1534 – 1763). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cartier',
      tier: 1,
      type: 'person',
      nom: 'Jacques Cartier',
      role: 'Navigateur français',
      dates: '1491 – 1557',
      description:
        "En 1534, ce navigateur de Saint-Malo prend possession de la Gaspésie au nom du roi François Ier. L'année suivante, il remonte le fleuve Saint-Laurent jusqu'au village iroquoien d'Hochelaga, où se trouve aujourd'hui Montréal.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Nouvelle-France',
      years: [1650, 1715],
      caption: 'Comparez : de la vallée du Saint-Laurent, la Nouvelle-France s’étend jusqu’à la Louisiane.',
    },
    {
      id: 'quebec',
      tier: 1,
      type: 'text',
      kicker: 'Fondation',
      title: 'Québec, 1608',
      body:
        "En 1608, Samuel de Champlain fonde Québec au bord du Saint-Laurent. Montréal suit en 1642. Champlain est surnommé le « père de la Nouvelle-France ».",
      highlight: { value: '1608', label: 'fondation de Québec' },
    },
    {
      id: 'fourrures',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le commerce des fourrures',
      body:
        "La colonie vit surtout du commerce des fourrures de castor, très recherchées en Europe pour faire des chapeaux. Les coureurs des bois partent les chercher loin vers l'ouest.",
    },
    {
      id: 'allies',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des alliances autochtones',
      body:
        "Les Français s'allient aux Innus, aux Algonquins et aux Hurons-Wendats. Ces alliances les entraînent dans de longues guerres contre les Haudenosaunee, jusqu'à la Grande Paix de Montréal, en 1701.",
    },
    {
      id: 'louisiane',
      tier: 1,
      type: 'text',
      kicker: 'Explorations',
      title: 'Jusqu’à la Louisiane',
      body:
        "En 1682, Cavelier de La Salle descend le Mississippi jusqu'à son embouchure et nomme la région Louisiane, en l'honneur de Louis XIV. La Nouvelle-Orléans est fondée en 1718.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Nouvelle-France en dates',
      items: [
        { year: 1534, label: 'Jacques Cartier à Gaspé' },
        { year: 1608, label: 'Fondation de Québec' },
        { year: 1701, label: 'Grande Paix de Montréal' },
        { year: 1759, label: 'Bataille des plaines d’Abraham' },
        { year: 1763, label: 'Traité de Paris' },
      ],
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'war',
      nom: 'Guerre de Sept Ans (Guerre de la Conquête)',
      annee: 1756,
      adversaires: ['Grande-Bretagne et ses colonies d’Amérique'],
      allies: ['Nouvelle-France et ses alliés autochtones'],
      vainqueur: 'Grande-Bretagne',
      consequences:
        "La Nouvelle-France compte environ 70 000 colons, contre plus d'un million dans les colonies britanniques. Québec tombe en 1759, Montréal en 1760 ; en 1763, la France cède le Canada.",
    },
    {
      id: 'francais',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le français en Amérique',
      body:
        "Plus de 7 millions de Québécois, ainsi que des Acadiens, des Franco-Ontariens et des Cajuns de Louisiane, parlent aujourd'hui français : c'est l'héritage de la Nouvelle-France.",
    },

    // ── Niveau 2 ──
    {
      id: 'abraham',
      tier: 2,
      type: 'text',
      kicker: 'Guerres',
      title: 'Les plaines d’Abraham',
      body:
        "Le 13 septembre 1759, devant Québec, l'armée britannique du général Wolfe bat celle de Montcalm en moins d'une heure. Les deux généraux meurent de leurs blessures.",
    },
    {
      id: 'acadiens',
      tier: 2,
      type: 'text',
      kicker: 'Histoire',
      title: 'Le Grand Dérangement',
      body:
        "En 1755, les Britanniques déportent la population de l'Acadie, devenue britannique en 1713. Des milliers d'Acadiens sont dispersés ; certains finissent en Louisiane, où ils deviendront les Cajuns.",
    },
    {
      id: 'filles',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les filles du roi',
      body:
        "Entre 1663 et 1673, environ 800 jeunes femmes, les « filles du roi », traversent l'Atlantique avec l'aide du roi pour se marier et s'établir dans la colonie.",
    },
    {
      id: 'scorbut',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le remède contre le scorbut',
      body:
        "Pendant l'hiver 1535-1536, les marins de Cartier meurent du scorbut. Des Iroquoiens leur apprennent à préparer une infusion de conifère qui les guérit.",
    },
    {
      id: 'cartes',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Une monnaie de cartes à jouer',
      body:
        "En 1685, faute de pièces pour payer les soldats, l'intendant fait circuler des cartes à jouer découpées et signées, qui servent de monnaie.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays européen fonde la Nouvelle-France ?', options: ['La France', 'L’Espagne', 'L’Angleterre', 'Le Portugal'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Quel fleuve Jacques Cartier remonte-t-il ?', options: ['Le Saint-Laurent', 'Le Mississippi', 'L’Hudson', 'L’Amazone'], answer: 0 },
    { id: 'cartier', type: 'mcq', prompt: 'Qui prend possession de la Gaspésie en 1534 ?', options: ['Jacques Cartier', 'Samuel de Champlain', 'Christophe Colomb', 'James Cook'], answer: 0 },
    { id: 'quebec', type: 'mcq', prompt: 'Qui fonde Québec en 1608 ?', options: ['Samuel de Champlain', 'Jacques Cartier', 'Louis XIV', 'Cavelier de La Salle'], answer: 0 },
    { id: 'montreal', type: 'mcq', prompt: 'Quelle ville est fondée en 1642 ?', options: ['Montréal', 'Québec', 'La Nouvelle-Orléans', 'Toronto'], answer: 0 },
    { id: 'fourrures', type: 'mcq', prompt: 'De quoi vit surtout la colonie ?', options: ['Du commerce des fourrures', 'De l’or', 'Du sucre', 'Du coton'], answer: 0 },
    { id: 'castor', type: 'mcq', prompt: 'Quel animal fournit les fourrures les plus recherchées ?', options: ['Le castor', 'Le loup', 'L’ours', 'Le renard'], answer: 0 },
    { id: 'allies', type: 'mcq', prompt: 'Quels peuples sont alliés aux Français ?', options: ['Les Innus, Algonquins et Hurons-Wendats', 'Les Aztèques', 'Les Mapuches', 'Les Taïnos'], answer: 0 },
    { id: 'paix', type: 'mcq', prompt: 'Quel traité met fin aux guerres contre les Haudenosaunee en 1701 ?', options: ['La Grande Paix de Montréal', 'Le traité de Paris', 'Le traité d’Utrecht', 'Le traité de Tordesillas'], answer: 0 },
    { id: 'louisiane', type: 'mcq', prompt: 'En l’honneur de qui la Louisiane est-elle nommée ?', options: ['Louis XIV', 'Louis IX', 'Saint Louis de Gonzague', 'Louis XVI'], answer: 0 },
    { id: 'colons', type: 'tf', prompt: 'La Nouvelle-France compte beaucoup plus de colons que les colonies britanniques.', answer: false, explanation: 'Environ 70 000 colons, contre plus d’un million dans les colonies britanniques.' },
    { id: 'abraham', type: 'mcq', prompt: 'Quelle bataille de 1759 décide de la chute de Québec ?', options: ['Les plaines d’Abraham', 'Waterloo', 'Trafalgar', 'Fontenoy'], answer: 0 },
    { id: 'traite', type: 'mcq', prompt: 'Par quel traité la France cède-t-elle le Canada en 1763 ?', options: ['Le traité de Paris', 'Le traité de Versailles', 'Le traité de Westphalie', 'Le traité de Vienne'], answer: 0 },
    { id: 'acadiens', type: 'mcq', prompt: 'Quel peuple est déporté lors du Grand Dérangement de 1755 ?', options: ['Les Acadiens', 'Les Hurons', 'Les Québécois', 'Les Cajuns'], answer: 0 },
    { id: 'filles', type: 'mcq', prompt: 'Qui sont les « filles du roi » ?', options: ['Des jeunes femmes venues s’établir dans la colonie', 'Les filles de Louis XIV', 'Des religieuses', 'Des navires'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Jacques Cartier à Gaspé', 'Fondation de Québec', 'Grande Paix de Montréal', 'Traité de Paris'] },
  ],

  recap: [
    '1534 : Jacques Cartier ; 1608 : Champlain fonde Québec',
    'Une colonie de fourrures, alliée à de nombreux peuples autochtones',
    'Du Saint-Laurent à la Louisiane ; Grande Paix de Montréal (1701)',
    'Guerre de Sept Ans : défaite des plaines d’Abraham (1759), cession en 1763',
  ],
}
