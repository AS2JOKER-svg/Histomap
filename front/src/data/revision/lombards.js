/** Chapitre rédigé : Royaume lombard (568 – 774). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'arrivee',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'L’arrivée en Italie',
      body:
        "En 568, le roi Alboin conduit le peuple germanique des Lombards de la Pannonie, l'actuelle Hongrie, jusqu'en Italie. Le pays sort de vingt ans de guerres entre Byzantins et Ostrogoths.",
      highlight: { value: '568', label: 'les Lombards entrent en Italie' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Italie lombarde',
      years: [600, 700],
      caption: 'Comparez : l’Italie est partagée entre les Lombards et les Byzantins.',
    },
    {
      id: 'partage',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une Italie partagée',
      body:
        "Les Lombards conquièrent le nord et le centre de l'Italie et font de Pavie leur capitale. Les Byzantins gardent Ravenne, Rome, Naples et le Sud. L'Italie restera divisée pendant plus de mille ans.",
    },
    {
      id: 'theodelinde',
      tier: 1,
      type: 'person',
      nom: 'Théodelinde',
      role: 'Reine des Lombards',
      dates: 'vers 570 – 628',
      description:
        "Princesse bavaroise et catholique, épouse de deux rois lombards, elle correspond avec le pape et fait baptiser son fils. Elle joue un grand rôle dans la conversion des Lombards.",
    },
    {
      id: 'rothari',
      tier: 1,
      type: 'text',
      kicker: 'Droit',
      title: 'L’édit de Rothari',
      body:
        "En 643, le roi Rothari fait mettre par écrit, en latin, les lois des Lombards. Pour éviter les vengeances, chaque blessure ou dommage a un prix à payer à la victime.",
    },
    {
      id: 'liutprand',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Le règne de Liutprand',
      body:
        "Au début du VIIIe siècle, le roi Liutprand renforce le royaume. En 728, il donne au pape le château de Sutri : c'est l'une des origines des États pontificaux.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Lombards en dates',
      items: [
        { year: 568, label: 'Arrivée en Italie' },
        { year: 572, label: 'Pavie capitale' },
        { year: 643, label: 'Édit de Rothari' },
        { year: 751, label: 'Prise de Ravenne' },
        { year: 774, label: 'Chute de Pavie' },
      ],
    },
    {
      id: 'pavie',
      tier: 1,
      type: 'war',
      nom: 'Siège de Pavie (773-774)',
      annee: 773,
      adversaires: ['Royaume franc (Charlemagne)'],
      allies: ['Royaume lombard (Didier)'],
      vainqueur: 'Francs (Charlemagne)',
      consequences:
        "Appelé par le pape, que les Lombards menacent, Charlemagne assiège Pavie pendant près d'un an. Le roi Didier se rend, et Charlemagne devient roi des Lombards.",
    },
    {
      id: 'lombardie',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'La Lombardie',
      body:
        "La région de Milan, la Lombardie, porte toujours le nom des Lombards. Leurs lieux de pouvoir en Italie sont inscrits au patrimoine mondial de l'UNESCO.",
    },

    // ── Niveau 2 ──
    {
      id: 'barbes',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Les longues barbes',
      body:
        "Selon une légende rapportée par l'historien Paul Diacre, les Lombards, ou « Longobards », devraient leur nom à leurs longues barbes.",
    },
    {
      id: 'couronne',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La couronne de fer',
      body:
        "La couronne de fer de Monza contiendrait, selon la tradition, un clou de la croix du Christ. Elle a servi à couronner plusieurs rois d'Italie, dont Napoléon en 1805.",
    },
    {
      id: 'paul',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Paul Diacre',
      body:
        "Vers 790, le moine Paul Diacre écrit une Histoire des Lombards. C'est la principale source sur ce peuple.",
    },
    {
      id: 'ducs',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des ducs puissants',
      body:
        "Les ducs lombards, comme ceux de Spolète et de Bénévent, gouvernent de grandes régions et défient souvent le roi. Le duché de Bénévent reste indépendant jusqu'au XIe siècle.",
    },
    {
      id: 'bobbio',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Le monastère de Bobbio',
      body:
        "Fondé en 614 avec le soutien du roi lombard, le monastère de Bobbio copie et conserve de nombreux manuscrits antiques.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays s’installent les Lombards en 568 ?', options: ['L’Italie', 'L’Espagne', 'La Grèce', 'L’Angleterre'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Les Lombards sont un peuple…', options: ['Germanique', 'Arabe', 'Slave', 'Celte'], answer: 0 },
    { id: 'alboin', type: 'mcq', prompt: 'Quel roi conduit les Lombards en Italie ?', options: ['Alboin', 'Charlemagne', 'Clovis', 'Rothari'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Lombards ?', options: ['Pavie', 'Rome', 'Ravenne', 'Naples'], answer: 0 },
    { id: 'byzantins', type: 'mcq', prompt: 'Avec qui les Lombards partagent-ils l’Italie ?', options: ['Les Byzantins', 'Les Vikings', 'Les Huns', 'Les Arabes'], answer: 0 },
    { id: 'theodelinde', type: 'mcq', prompt: 'Quelle reine favorise la conversion des Lombards au catholicisme ?', options: ['Théodelinde', 'Clotilde', 'Brunehaut', 'Aliénor'], answer: 0 },
    { id: 'rothari', type: 'mcq', prompt: 'Que fait écrire le roi Rothari en 643 ?', options: ['Les lois des Lombards', 'La Bible', 'Une histoire de Rome', 'Une carte de l’Italie'], answer: 0 },
    { id: 'prix', type: 'tf', prompt: 'Dans l’édit de Rothari, chaque blessure a un prix à payer à la victime.', answer: true },
    { id: 'sutri', type: 'mcq', prompt: 'Quel roi lombard donne au pape le château de Sutri ?', options: ['Liutprand', 'Alboin', 'Didier', 'Agilulf'], answer: 0 },
    { id: 'ravenne', type: 'mcq', prompt: 'Quelle ville byzantine les Lombards prennent-ils en 751 ?', options: ['Ravenne', 'Constantinople', 'Venise', 'Milan'], answer: 0 },
    { id: 'charlemagne', type: 'mcq', prompt: 'Qui prend Pavie en 774 ?', options: ['Charlemagne', 'Clovis', 'Otton Ier', 'Napoléon'], answer: 0 },
    { id: 'pape', type: 'tf', prompt: 'C’est le pape qui appelle les Francs contre les Lombards.', answer: true },
    { id: 'nom', type: 'mcq', prompt: 'Selon la légende, d’où vient le nom des Longobards ?', options: ['De leurs longues barbes', 'De leurs longues épées', 'D’un fleuve', 'D’une montagne'], answer: 0 },
    { id: 'lombardie', type: 'mcq', prompt: 'Quelle région d’Italie porte leur nom ?', options: ['La Lombardie', 'La Toscane', 'La Sicile', 'La Vénétie'], answer: 0 },
    { id: 'couronne', type: 'mcq', prompt: 'Quel objet célèbre est conservé à Monza ?', options: ['La couronne de fer', 'Le saint suaire', 'La Joconde', 'L’épée de Charlemagne'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée en Italie', 'Édit de Rothari', 'Prise de Ravenne', 'Chute de Pavie'] },
  ],

  recap: [
    '568 : les Lombards d’Alboin entrent en Italie',
    'L’Italie est partagée entre Lombards (capitale Pavie) et Byzantins',
    'Conversion au catholicisme (Théodelinde) ; édit de Rothari (643)',
    '774 : Charlemagne prend Pavie et devient roi des Lombards',
  ],
}
