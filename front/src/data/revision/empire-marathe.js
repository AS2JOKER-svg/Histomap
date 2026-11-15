/** Chapitre rédigé : Empire marathe (1674 – 1818). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'shivaji',
      tier: 1,
      type: 'person',
      nom: 'Shivaji',
      role: 'Fondateur du royaume marathe',
      dates: '1630 – 1680',
      description:
        "Chef marathe de l'ouest de l'Inde, il s'empare de forteresses dans les montagnes et défie le sultanat de Bijapur et l'Empire moghol. En 1674, il se fait couronner roi.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les Marathes',
      years: [1715, 1783],
      caption: 'Comparez : en un demi-siècle, le petit royaume de l’ouest devient une confédération qui domine le centre de l’Inde.',
    },
    {
      id: 'couronnement',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le couronnement de 1674',
      body:
        "Le 6 juin 1674, au fort de Raigad, Shivaji est couronné selon les rites hindous et prend le titre de chhatrapati. Il n'est plus un simple chef rebelle, mais un souverain indépendant.",
      highlight: { value: '1674', label: 'couronnement de Shivaji' },
    },
    {
      id: 'forts',
      tier: 1,
      type: 'text',
      kicker: 'Armée',
      title: 'Les forts et la cavalerie',
      body:
        "Les Marathes s'appuient sur des centaines de forteresses de montagne et sur une cavalerie légère très rapide. Shivaji crée aussi une marine pour protéger la côte.",
    },
    {
      id: 'moghols',
      tier: 1,
      type: 'war',
      nom: 'Guerres moghols-marathes',
      annee: 1680,
      adversaires: ['Empire moghol (Aurangzeb)'],
      allies: ['Marathes'],
      vainqueur: 'Marathes',
      consequences:
        "Pendant 27 ans, l'empereur Aurangzeb fait la guerre dans le Dekkan. Il prend de nombreux forts et fait exécuter Sambhaji, le fils de Shivaji, mais meurt en 1707 sans avoir soumis les Marathes.",
    },
    {
      id: 'peshwas',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les peshwas',
      body:
        "Au XVIIIe siècle, le pouvoir réel passe aux Premiers ministres, les peshwas, installés à Pune. Le plus célèbre, Bajirao Ier, conduit ses cavaliers jusqu'à Delhi en 1737.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Marathes en dates',
      items: [
        { year: 1674, label: 'Couronnement de Shivaji' },
        { year: 1707, label: 'Mort d’Aurangzeb' },
        { year: 1720, label: 'Bajirao Ier peshwa' },
        { year: 1761, label: 'Troisième bataille de Panipat' },
        { year: 1818, label: 'Fin du peshwa' },
      ],
    },
    {
      id: 'panipat',
      tier: 1,
      type: 'war',
      nom: 'Troisième bataille de Panipat',
      annee: 1761,
      adversaires: ['Empire durrani (Ahmad Shah Durrani) et ses alliés indiens'],
      allies: ['Confédération marathe'],
      vainqueur: 'Empire durrani',
      consequences:
        "Au nord de Delhi, l'armée afghane écrase la grande armée marathe. L'avance des Marathes vers le nord s'arrête pour une dizaine d'années.",
    },
    {
      id: 'britanniques',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Face aux Britanniques',
      body:
        "Divisés entre de grandes familles, les Marathes affrontent la Compagnie britannique des Indes lors de trois guerres. En 1818, le dernier peshwa se rend : ses terres sont annexées.",
    },

    // ── Niveau 2 ──
    {
      id: 'agra',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'L’évasion d’Agra',
      body:
        "En 1666, Shivaji est retenu à la cour d'Aurangzeb, à Agra. Selon la tradition, il s'échappe caché dans de grands paniers de friandises.",
    },
    {
      id: 'ahilyabai',
      tier: 2,
      type: 'person',
      nom: 'Ahilyabai Holkar',
      role: 'Reine d’Indore',
      dates: '1725 – 1795',
      description: "Veuve, elle gouverne l'État d'Indore de 1767 à 1795. Elle écoute chaque jour les plaintes de ses sujets et fait restaurer des temples dans toute l'Inde.",
    },
    {
      id: 'chauth',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le chauth',
      body:
        "Les Marathes prélèvent un tribut, le chauth, égal à un quart des revenus, sur de nombreuses régions qu'ils ne gouvernent pas directement. Leurs campagnes s'accompagnent aussi de pillages.",
    },
    {
      id: 'familles',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une confédération',
      body:
        "Après Panipat, de grandes familles gouvernent leurs territoires : les Shinde à Gwalior, les Holkar à Indore, les Gaekwad à Baroda et les Bhonsle à Nagpur.",
    },
    {
      id: 'unesco',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les forts au patrimoine mondial',
      body:
        "En 2025, douze forts marathes sont inscrits au patrimoine mondial de l'UNESCO. À Mumbai, l'aéroport et la grande gare portent le nom de Shivaji.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde le royaume marathe ?', options: ['Shivaji', 'Aurangzeb', 'Babur', 'Krishnadevaraya'], answer: 0 },
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région de l’Inde naît le royaume marathe ?', options: ['L’ouest de l’Inde', 'Le Bengale', 'Le Cachemire', 'Le Sri Lanka'], answer: 0 },
    { id: 'couronnement', type: 'mcq', prompt: 'En quelle année Shivaji est-il couronné ?', options: ['1674', '1526', '1761', '1818'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre prend Shivaji ?', options: ['Chhatrapati', 'Sultan', 'Shah', 'Calife'], answer: 0 },
    { id: 'ennemi', type: 'mcq', prompt: 'Quel empereur moghol combat les Marathes pendant 27 ans ?', options: ['Aurangzeb', 'Akbar', 'Babur', 'Shah Jahan'], answer: 0 },
    { id: 'aurangzeb', type: 'tf', prompt: 'Aurangzeb parvient à soumettre les Marathes.', answer: false, explanation: 'Il meurt en 1707 sans les avoir soumis.' },
    { id: 'forts', type: 'mcq', prompt: 'Sur quoi repose la défense des Marathes ?', options: ['Des forteresses de montagne', 'Des châteaux de sable', 'Une grande muraille', 'Des navires à vapeur'], answer: 0 },
    { id: 'peshwa', type: 'mcq', prompt: 'Comment s’appellent les Premiers ministres marathes ?', options: ['Les peshwas', 'Les vizirs', 'Les nayaks', 'Les shoguns'], answer: 0 },
    { id: 'pune', type: 'mcq', prompt: 'Dans quelle ville siègent les peshwas ?', options: ['Pune', 'Delhi', 'Calcutta', 'Goa'], answer: 0 },
    { id: 'bajirao', type: 'mcq', prompt: 'Quel peshwa conduit ses cavaliers jusqu’à Delhi en 1737 ?', options: ['Bajirao Ier', 'Baji Rao II', 'Shahu Ier', 'Sambhaji'], answer: 0 },
    { id: 'panipat', type: 'mcq', prompt: 'Qui bat les Marathes à Panipat en 1761 ?', options: ['L’armée afghane d’Ahmad Shah Durrani', 'Les Britanniques', 'Les Moghols', 'Les Portugais'], answer: 0 },
    { id: 'chauth', type: 'mcq', prompt: 'Quelle part des revenus représente le chauth ?', options: ['Un quart', 'La moitié', 'Un dixième', 'Tout'], answer: 0 },
    { id: 'ahilyabai', type: 'mcq', prompt: 'Quelle reine d’Indore fait restaurer des temples dans toute l’Inde ?', options: ['Ahilyabai Holkar', 'Razia', 'Tarabai', 'Victoria'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui met fin au pouvoir du peshwa en 1818 ?', options: ['Les Britanniques', 'Les Afghans', 'Les Moghols', 'Les Français'], answer: 0 },
    { id: 'agra', type: 'tf', prompt: 'Selon la tradition, Shivaji s’échappe d’Agra caché dans des paniers.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Couronnement de Shivaji', 'Mort d’Aurangzeb', 'Troisième bataille de Panipat', 'Fin du peshwa'] },
  ],

  recap: [
    '1674 : Shivaji, chef de l’ouest de l’Inde, est couronné chhatrapati',
    'Les Marathes résistent 27 ans à l’empereur moghol Aurangzeb',
    'Au XVIIIe siècle, les peshwas dominent une grande partie de l’Inde ; défaite de Panipat (1761)',
    'Vaincus par les Britanniques, ils disparaissent en 1818',
  ],
}
