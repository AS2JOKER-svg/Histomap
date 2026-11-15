/** Chapitre rédigé : Taïnos (vers 1000 – 1550). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'antilles',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le peuple des Grandes Antilles',
      body:
        "Venus d'Amérique du Sud en pirogue au cours des siècles, les ancêtres des Taïnos peuplent les Grandes Antilles : Hispaniola, Cuba, Porto Rico, la Jamaïque et les Bahamas. Leur culture s'affirme vers l'an 1000.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les îles des Taïnos',
      years: [1100, 1492],
      caption: 'Les Taïnos occupent les Grandes Antilles et les Bahamas.',
    },
    {
      id: 'caciques',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les caciques',
      body:
        "Les villages sont dirigés par des caciques, des chefs qui peuvent être des hommes ou des femmes. En 1492, l'île d'Hispaniola est partagée entre cinq grandes chefferies.",
    },
    {
      id: 'manioc',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le manioc et la cassave',
      body:
        "Les Taïnos cultivent le manioc sur des buttes de terre. Ils savent en retirer le poison pour en faire des galettes, la cassave, qui se conservent longtemps.",
    },
    {
      id: 'zemis',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les zemís',
      body:
        "Les Taïnos honorent des esprits des ancêtres et de la nature, les zemís, représentés par des statuettes de pierre, de bois ou de coton.",
    },
    {
      id: 'colomb',
      tier: 1,
      type: 'text',
      kicker: 'Contacts',
      title: 'L’arrivée de Christophe Colomb',
      body:
        "En 1492, les Taïnos sont le premier peuple des Amériques que rencontre Christophe Colomb. Plusieurs caciques l'accueillent d'abord pacifiquement.",
      highlight: { value: '1492', label: 'arrivée de Christophe Colomb' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Taïnos en dates',
      items: [
        { year: 1000, label: 'Affirmation de la culture taïno' },
        { year: 1492, label: 'Arrivée de Christophe Colomb' },
        { year: 1503, label: 'Massacre de Jaragua' },
        { year: 1512, label: 'Exécution de Hatuey' },
        { year: 1533, label: 'Paix d’Enriquillo' },
      ],
    },
    {
      id: 'conquete',
      tier: 1,
      type: 'war',
      nom: 'Conquête espagnole d’Hispaniola',
      annee: 1495,
      adversaires: ['Espagnols'],
      allies: ['Caciques taïnos'],
      vainqueur: 'Espagnols',
      consequences:
        "Les Espagnols imposent tributs et travail forcé dans les mines d'or. La violence, le travail forcé et surtout les épidémies font presque disparaître les Taïnos en quelques décennies.",
    },
    {
      id: 'mots',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des mots taïnos en français',
      body:
        "Hamac, ouragan, canoë, barbecue, maïs, savane : ces mots viennent de la langue des Taïnos. Et une partie des habitants des Antilles ont aujourd'hui des ancêtres taïnos.",
    },

    // ── Niveau 2 ──
    {
      id: 'anacaona',
      tier: 2,
      type: 'person',
      nom: 'Anacaona',
      role: 'Cacica de Jaragua',
      dates: 'vers 1474 – 1504',
      description: "Poétesse et cheffe d'une région d'Hispaniola, elle est arrêtée lors du massacre de Jaragua, puis pendue. Elle est aujourd'hui un symbole de résistance.",
    },
    {
      id: 'hatuey',
      tier: 2,
      type: 'person',
      nom: 'Hatuey',
      role: 'Cacique',
      dates: '? – 1512',
      description: "Il s'enfuit d'Hispaniola à Cuba pour prévenir les habitants et organise la résistance. Capturé, il est brûlé vif en 1512.",
    },
    {
      id: 'enriquillo',
      tier: 2,
      type: 'text',
      kicker: 'Résistance',
      title: 'La révolte d’Enriquillo',
      body:
        "De 1519 à 1533, le cacique Enriquillo résiste aux Espagnols dans les montagnes d'Hispaniola. Il obtient finalement la paix et la liberté pour ses compagnons.",
    },
    {
      id: 'lascasas',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Bartolomé de las Casas',
      body:
        "Ancien colon devenu religieux, Bartolomé de las Casas dénonce les violences faites aux Taïnos. Ses écrits sont une source essentielle sur leur histoire.",
    },
    {
      id: 'batey',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le jeu de balle',
      body:
        "Sur la place du village, le batey, on joue à un jeu de balle où il faut garder la balle en l'air sans utiliser les mains ni les pieds.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où vivent les Taïnos ?', options: ['Dans les Grandes Antilles', 'Dans les Andes', 'Au Canada', 'En Patagonie'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent leurs ancêtres ?', options: ['D’Amérique du Sud', 'D’Europe', 'D’Afrique', 'D’Asie'], answer: 0 },
    { id: 'cacique', type: 'mcq', prompt: 'Comment s’appellent les chefs taïnos ?', options: ['Les caciques', 'Les pharaons', 'Les sachems', 'Les toquis'], answer: 0 },
    { id: 'femmes', type: 'tf', prompt: 'Chez les Taïnos, une femme peut être cheffe (cacica).', answer: true },
    { id: 'manioc', type: 'mcq', prompt: 'Quelle plante est à la base de leur alimentation ?', options: ['Le manioc', 'Le blé', 'Le riz', 'Le seigle'], answer: 0 },
    { id: 'cassave', type: 'mcq', prompt: 'Comment s’appellent les galettes de manioc ?', options: ['La cassave', 'La tortilla', 'Le chapati', 'La crêpe'], answer: 0 },
    { id: 'zemi', type: 'mcq', prompt: 'Qu’est-ce qu’un zemí ?', options: ['Un esprit représenté par une statuette', 'Une pirogue', 'Un chef', 'Une maison'], answer: 0 },
    { id: 'colomb', type: 'mcq', prompt: 'Quel navigateur rencontre les Taïnos en 1492 ?', options: ['Christophe Colomb', 'Vasco de Gama', 'Magellan', 'Jacques Cartier'], answer: 0 },
    { id: 'travail', type: 'mcq', prompt: 'À quoi les Espagnols forcent-ils les Taïnos ?', options: ['À travailler dans les mines d’or', 'À construire des pyramides', 'À naviguer vers l’Europe', 'À cultiver le blé'], answer: 0 },
    { id: 'epidemies', type: 'mcq', prompt: 'Quelle est la principale cause de la disparition des Taïnos ?', options: ['Les épidémies', 'Les ouragans', 'La famine due à la sécheresse', 'Les éruptions volcaniques'], answer: 0 },
    { id: 'anacaona', type: 'mcq', prompt: 'Quelle cacica poétesse est exécutée par les Espagnols ?', options: ['Anacaona', 'Malinche', 'Pocahontas', 'Seondeok'], answer: 0 },
    { id: 'hatuey', type: 'mcq', prompt: 'Dans quelle île Hatuey organise-t-il la résistance ?', options: ['Cuba', 'Porto Rico', 'La Jamaïque', 'Les Bahamas'], answer: 0 },
    { id: 'enriquillo', type: 'tf', prompt: 'Le cacique Enriquillo obtient la paix avec les Espagnols après une longue révolte.', answer: true },
    { id: 'mots', type: 'mcq', prompt: 'Lequel de ces mots vient de la langue taïno ?', options: ['Hamac', 'Château', 'Fenêtre', 'Vélo'], answer: 0 },
    { id: 'lascasas', type: 'mcq', prompt: 'Quel religieux espagnol dénonce les violences faites aux Taïnos ?', options: ['Bartolomé de las Casas', 'Ignace de Loyola', 'Christophe Colomb', 'Hernán Cortés'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Affirmation de la culture taïno', 'Arrivée de Christophe Colomb', 'Exécution de Hatuey', 'Paix d’Enriquillo'] },
  ],

  recap: [
    'Les Taïnos, peuple des Grandes Antilles venu d’Amérique du Sud',
    'Caciques, manioc et cassave, culte des zemís',
    '1492 : premier peuple rencontré par Colomb ; travail forcé et épidémies',
    'Résistance d’Anacaona, Hatuey, Enriquillo ; des mots et des descendants aujourd’hui',
  ],
}
