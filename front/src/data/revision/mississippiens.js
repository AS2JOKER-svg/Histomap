/** Chapitre rédigé : Mississippiens (vers 800 – 1600). Pas de carte : la culture n’a pas de territoire propre sur les cartes. */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mais',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le maïs dans la vallée du Mississippi',
      body:
        "À partir de 800 environ, les peuples de la vallée du Mississippi et du sud-est des États-Unis cultivent de plus en plus le maïs. Ils peuvent nourrir de grands villages, dirigés par des chefs.",
      highlight: { value: 'vers 800', label: 'début de la culture mississippienne' },
    },
    {
      id: 'tertres',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Des pyramides de terre',
      body:
        "Les Mississippiens bâtissent des tertres de terre en forme de pyramides tronquées. Au sommet se dressent les temples et les maisons des chefs, au-dessus des grandes places.",
    },
    {
      id: 'cahokia',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Cahokia',
      body:
        "Vers 1050-1200, Cahokia, près de l'actuelle Saint-Louis, devient une véritable ville de 10 000 à 20 000 habitants peut-être : la plus grande au nord du Mexique avant l'arrivée des Européens.",
      highlight: { value: '10 000 à 20 000', label: 'habitants à Cahokia, selon les estimations' },
    },
    {
      id: 'monks',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le Monks Mound',
      body:
        "Le grand tertre de Cahokia, haut d'environ 30 mètres, est le plus grand ouvrage de terre des Amériques. Il a fallu des millions de paniers de terre pour le construire.",
    },
    {
      id: 'religion',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’homme-oiseau',
      body:
        "Les chefs sont associés au Soleil et au feu sacré. Sur les objets de cuivre et de coquillage apparaissent des personnages ailés, comme l'« homme-oiseau », signes d'une religion partagée dans tout le sud-est.",
    },
    {
      id: 'echanges',
      tier: 1,
      type: 'text',
      kicker: 'Échanges',
      title: 'Du cuivre aux coquillages',
      body:
        "Les chefferies échangent sur de très longues distances : le cuivre des Grands Lacs et les coquillages du golfe du Mexique arrivent jusqu'à Cahokia.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Mississippiens en dates',
      items: [
        { year: 800, label: 'Débuts de la culture mississippienne' },
        { year: 1050, label: 'Essor de Cahokia' },
        { year: 1350, label: 'Abandon de Cahokia' },
        { year: 1540, label: 'Bataille de Mabila' },
      ],
    },
    {
      id: 'mabila',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Mabila',
      annee: 1540,
      adversaires: ['Expédition espagnole d’Hernando de Soto'],
      allies: ['Chefferie de Tascalusa'],
      vainqueur: 'Espagnols',
      consequences:
        "Les guerriers du chef Tascalusa attaquent les Espagnols dans la ville fortifiée de Mabila ; les Espagnols l'incendient. Leur expédition sème la violence et les maladies dans tout le sud-est.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La fin des grandes chefferies',
      body:
        "Cahokia est abandonnée vers 1350. D'autres centres, comme Moundville ou Etowah, prospèrent encore, mais au XVIe siècle les épidémies venues d'Europe font disparaître la plupart des grandes chefferies.",
    },

    // ── Niveau 2 ──
    {
      id: 'woodhenge',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le « Woodhenge »',
      body:
        "À Cahokia, des cercles de grands poteaux de bois servaient sans doute de calendrier : le Soleil se levait derrière certains poteaux aux solstices et aux équinoxes.",
    },
    {
      id: 'chunkey',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le jeu de chunkey',
      body:
        "Dans ce jeu, les joueurs lancent des perches vers une pierre en forme de disque qui roule. Il attirait de nombreux spectateurs et faisait l'objet de paris.",
    },
    {
      id: 'mound72',
      tier: 2,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Le tertre 72',
      body:
        "Sous le tertre 72 de Cahokia, les archéologues ont retrouvé un personnage important enterré sur des milliers de perles de coquillage, accompagné de nombreux sacrifiés.",
    },
    {
      id: 'heritiers',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les héritiers',
      body:
        "Des peuples comme les Creeks, les Choctaws ou les Natchez sont en partie les héritiers des chefferies mississippiennes.",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Cahokia aujourd’hui',
      body:
        "Le site de Cahokia, avec plus d'une centaine de tertres, est inscrit au patrimoine mondial de l'UNESCO depuis 1982.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Mississippiens ?', options: ['Les États-Unis', 'Le Mexique', 'Le Canada', 'Le Brésil'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Le long de quel fleuve s’est développée cette culture ?', options: ['Le Mississippi', 'L’Amazone', 'Le Saint-Laurent', 'Le Rio Grande'], answer: 0 },
    { id: 'mais', type: 'mcq', prompt: 'Quelle plante permet de nourrir de grands villages ?', options: ['Le maïs', 'Le blé', 'Le riz', 'La pomme de terre'], answer: 0 },
    { id: 'tertres', type: 'mcq', prompt: 'Que bâtissent les Mississippiens ?', options: ['Des tertres de terre', 'Des pyramides de pierre', 'Des cathédrales', 'Des murailles de brique'], answer: 0 },
    { id: 'sommet', type: 'mcq', prompt: 'Que trouve-t-on au sommet des tertres ?', options: ['Les temples et les maisons des chefs', 'Des tombeaux de pharaons', 'Des phares', 'Des moulins'], answer: 0 },
    { id: 'cahokia', type: 'mcq', prompt: 'Quelle est la plus grande ville des Mississippiens ?', options: ['Cahokia', 'Chaco', 'Tula', 'Mexico'], answer: 0 },
    { id: 'stlouis', type: 'mcq', prompt: 'Près de quelle ville actuelle se trouve Cahokia ?', options: ['Saint-Louis', 'New York', 'Los Angeles', 'Miami'], answer: 0 },
    { id: 'monks', type: 'mcq', prompt: 'Quelle hauteur atteint environ le Monks Mound ?', options: ['30 mètres', '3 mètres', '300 mètres', '3 000 mètres'], answer: 0 },
    { id: 'record', type: 'tf', prompt: 'Le Monks Mound est le plus grand ouvrage de terre des Amériques.', answer: true },
    { id: 'homme-oiseau', type: 'mcq', prompt: 'Quel personnage ailé apparaît sur les objets mississippiens ?', options: ['L’homme-oiseau', 'Le Serpent à plumes', 'Le dragon', 'Le griffon'], answer: 0 },
    { id: 'cuivre', type: 'mcq', prompt: 'D’où vient le cuivre utilisé à Cahokia ?', options: ['De la région des Grands Lacs', 'D’Espagne', 'Du Pérou', 'De Chine'], answer: 0 },
    { id: 'woodhenge', type: 'mcq', prompt: 'À quoi servait sans doute le « Woodhenge » ?', options: ['De calendrier solaire', 'De prison', 'De marché', 'De port'], answer: 0 },
    { id: 'abandon', type: 'mcq', prompt: 'Vers quand Cahokia est-elle abandonnée ?', options: ['Vers 1350', 'Vers 1900', 'Vers 500', 'Vers 1776'], answer: 0 },
    { id: 'desoto', type: 'mcq', prompt: 'Quel conquistador traverse le sud-est des États-Unis de 1539 à 1542 ?', options: ['Hernando de Soto', 'Hernán Cortés', 'Francisco Pizarro', 'Jacques Cartier'], answer: 0 },
    { id: 'epidemies', type: 'tf', prompt: 'Les épidémies venues d’Europe ont fait disparaître la plupart des grandes chefferies.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Débuts de la culture mississippienne', 'Essor de Cahokia', 'Abandon de Cahokia', 'Bataille de Mabila'] },
  ],

  recap: [
    'À partir de 800, des chefferies de la vallée du Mississippi cultivent le maïs',
    'Elles bâtissent des tertres de terre ; Cahokia et son Monks Mound',
    'Une religion commune (homme-oiseau) et des échanges à longue distance',
    'Abandon de Cahokia (vers 1350) ; épidémies après l’arrivée des Espagnols',
  ],
}
