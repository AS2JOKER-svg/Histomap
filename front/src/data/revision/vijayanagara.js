/** Chapitre rédigé : Empire de Vijayanagara (1336 – 1646). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La cité de la victoire',
      body:
        "En 1336, selon la tradition, deux frères, Harihara et Bukka, fondent une ville au bord de la rivière Tungabhadra, dans le sud de l'Inde. Ils la nomment Vijayanagara, la « cité de la victoire ».",
      highlight: { value: '1336', label: 'fondation' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire de Vijayanagara',
      years: [1500, 1600],
      caption: 'Comparez : vers 1500, l’empire domine le sud de l’Inde ; après 1565, il recule vers le sud-est.',
    },
    {
      id: 'rivaux',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Face aux sultanats du Dekkan',
      body:
        "Pendant deux siècles, l'empire hindou affronte ses voisins du nord, d'abord le sultanat bahmanide puis les sultanats qui lui succèdent. Les deux camps se disputent les forteresses et les terres fertiles entre deux rivières.",
    },
    {
      id: 'krishnadevaraya',
      tier: 1,
      type: 'person',
      nom: 'Krishnadevaraya',
      role: 'Empereur',
      dates: 'règne 1509 – 1529',
      description:
        "Sous son règne, l'empire est à son apogée. Il bat le sultan de Bijapur à Raichur (1520), s'entend avec les Portugais de Goa et écrit lui-même des poèmes en télougou.",
    },
    {
      id: 'capitale',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Une ville immense',
      body:
        "Vers 1500, la capitale aurait compté plusieurs centaines de milliers d'habitants. Le voyageur portugais Domingo Paes la juge aussi grande que Rome, et s'étonne de la richesse de ses marchés.",
    },
    {
      id: 'temples',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Des temples de granit',
      body:
        "Les rois font tailler dans le granit des temples géants, comme celui de Vittala, avec son char de pierre et ses piliers qui résonnent comme des notes de musique quand on les frappe.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Vijayanagara en dates',
      items: [
        { year: 1336, label: 'Fondation' },
        { year: 1347, label: 'Naissance du sultanat bahmanide' },
        { year: 1509, label: 'Krishnadevaraya empereur' },
        { year: 1565, label: 'Bataille de Talikota' },
        { year: 1646, label: 'Fin de l’empire' },
      ],
    },
    {
      id: 'talikota',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Talikota',
      annee: 1565,
      adversaires: ['Sultanats de Bijapur, Ahmadnagar, Golconde et Bidar'],
      allies: ['Vijayanagara (régent Rama Raya)'],
      vainqueur: 'Coalition des sultanats du Dekkan',
      consequences:
        "Le régent Rama Raya est tué. La capitale, sans défense, est pillée pendant des mois puis abandonnée. L'empire survit, affaibli, plus au sud jusque vers 1646.",
    },
    {
      id: 'hampi',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Hampi',
      body:
        "Les ruines de la capitale, au milieu d'un paysage de rochers, forment le site de Hampi, inscrit au patrimoine mondial de l'UNESCO depuis 1986.",
    },

    // ── Niveau 2 ──
    {
      id: 'chevaux',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le commerce des chevaux',
      body:
        "Les bons chevaux de guerre s'élèvent mal dans le sud de l'Inde. L'empire achète des chevaux de guerre arabes et persans, vendus après 1510 par les Portugais installés à Goa.",
    },
    {
      id: 'nayaks',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les nayaks',
      body:
        "Le roi confie les provinces à des chefs militaires, les nayaks, qui lèvent des troupes pour lui. Après 1565, beaucoup d'entre eux deviennent indépendants.",
    },
    {
      id: 'mahanavami',
      tier: 2,
      type: 'text',
      kicker: 'Fêtes',
      title: 'La fête de Mahanavami',
      body:
        "Chaque année, le roi préside une grande fête de plusieurs jours, avec défilés d'éléphants, de cavaliers et de danseuses, que décrivent les voyageurs étrangers.",
    },
    {
      id: 'madras',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Les Anglais à Madras',
      body:
        "En 1639, un gouverneur de l'empire affaibli cède aux Anglais un terrain sur la côte. Ils y bâtissent un fort, à l'origine de la ville de Madras, aujourd'hui Chennai.",
    },
    {
      id: 'poesie',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Un âge d’or du télougou',
      body:
        "À la cour de Krishnadevaraya, des poètes écrivent en télougou, en kannada et en sanskrit. Ce règne est considéré comme un âge d'or de la littérature télougoue.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où se trouve l’empire de Vijayanagara ?', options: ['Dans le sud de l’Inde', 'Dans le nord de la Chine', 'En Perse', 'Au Japon'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Que signifie « Vijayanagara » ?', options: ['La cité de la victoire', 'La ville du roi', 'Le port des épices', 'La montagne sacrée'], answer: 0 },
    { id: 'fondateurs', type: 'mcq', prompt: 'Qui fonde Vijayanagara selon la tradition ?', options: ['Deux frères, Harihara et Bukka', 'Le sultan de Delhi', 'Les Portugais', 'Shivaji'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion des rois de Vijayanagara ?', options: ['L’hindouisme', 'L’islam', 'Le christianisme', 'Le bouddhisme'], answer: 0 },
    { id: 'rivaux', type: 'mcq', prompt: 'Quels voisins l’empire affronte-t-il pendant deux siècles ?', options: ['Les sultanats du Dekkan', 'Les Mongols', 'Les Chinois', 'Les Britanniques'], answer: 0 },
    { id: 'apogee', type: 'mcq', prompt: 'Sous quel empereur Vijayanagara est-il à son apogée ?', options: ['Krishnadevaraya', 'Harihara Ier', 'Akbar', 'Samudragupta'], answer: 0 },
    { id: 'poete', type: 'tf', prompt: 'Krishnadevaraya écrit lui-même des poèmes.', answer: true },
    { id: 'portugais', type: 'mcq', prompt: 'Quels Européens vendent des chevaux à l’empire ?', options: ['Les Portugais', 'Les Suédois', 'Les Russes', 'Les Italiens'], answer: 0 },
    { id: 'paes', type: 'mcq', prompt: 'À quelle ville le voyageur Domingo Paes compare-t-il la capitale ?', options: ['Rome', 'Paris', 'Londres', 'Pékin'], answer: 0 },
    { id: 'piliers', type: 'tf', prompt: 'Certains piliers du temple de Vittala résonnent comme des notes de musique.', answer: true },
    { id: 'talikota', type: 'mcq', prompt: 'Quelle défaite entraîne la destruction de la capitale en 1565 ?', options: ['Talikota', 'Panipat', 'Plassey', 'Raichur'], answer: 0 },
    { id: 'raichur', type: 'mcq', prompt: 'Quelle forteresse Krishnadevaraya prend-il en 1520 ?', options: ['Raichur', 'Delhi', 'Goa', 'Agra'], answer: 0 },
    { id: 'hampi', type: 'mcq', prompt: 'Comment s’appelle aujourd’hui le site des ruines de la capitale ?', options: ['Hampi', 'Nalanda', 'Ajanta', 'Sigiriya'], answer: 0 },
    { id: 'nayaks', type: 'mcq', prompt: 'Comment s’appellent les chefs militaires qui gouvernent les provinces ?', options: ['Les nayaks', 'Les peshwas', 'Les émirs', 'Les daimyos'], answer: 0 },
    { id: 'madras', type: 'mcq', prompt: 'Quelle ville naît d’un fort anglais bâti en 1639 ?', options: ['Madras (Chennai)', 'Bombay', 'Delhi', 'Goa'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation', 'Naissance du sultanat bahmanide', 'Krishnadevaraya empereur', 'Bataille de Talikota'] },
  ],

  recap: [
    '1336 : fondation de Vijayanagara, la « cité de la victoire », dans le sud de l’Inde',
    'Deux siècles de guerres contre les sultanats du Dekkan',
    'Apogée sous Krishnadevaraya : une capitale immense et des temples de granit',
    '1565 : défaite de Talikota ; les ruines forment aujourd’hui le site de Hampi',
  ],
}
