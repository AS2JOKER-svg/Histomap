/** Chapitre rédigé : Royaume du Buganda (vers 1300 – 1966). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'lac',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un royaume au bord du lac Victoria',
      body:
        "Selon la tradition, le royaume du Buganda est fondé au XIVe siècle par Kintu, ancêtre mythique, sur la rive nord du lac Victoria. Son roi porte le titre de kabaka. La population est organisée en clans, chacun associé à un animal ou à une plante emblème.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Buganda au XIXe siècle',
      years: [1815, 1900],
      caption: 'Au nord du lac Victoria, le Buganda domine la région des Grands Lacs au XIXe siècle.',
    },
    {
      id: 'expansion',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un roi tout-puissant',
      body:
        "Aux XVIIIe et XIXe siècles, le Buganda s'agrandit aux dépens du royaume voisin du Bunyoro. Le kabaka nomme et révoque lui-même ses chefs de province et dispose d'une flotte de grandes pirogues sur le lac.",
    },
    {
      id: 'mutesa',
      tier: 1,
      type: 'person',
      nom: 'Mutesa Ier',
      role: 'Kabaka du Buganda',
      dates: 'règne 1856 – 1884',
      description:
        "Le plus célèbre des kabakas reçoit des marchands venus de Zanzibar, les explorateurs Speke (1862) et Stanley (1875), puis des missionnaires. Il joue les uns contre les autres pour garder son indépendance.",
    },
    {
      id: 'religions',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Trois religions à la cour',
      body:
        "L'islam arrive dans les années 1840 avec les marchands de la côte, le christianisme avec les missionnaires protestants (1877) puis catholiques (1879). De nombreux jeunes de la cour se convertissent, ce qui inquiète le pouvoir royal.",
    },
    {
      id: 'martyrs',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les martyrs de l’Ouganda',
      body:
        "Le kabaka Mwanga II, qui voit dans les convertis une menace pour son autorité, fait exécuter des chrétiens. Le 3 juin 1886, une trentaine de jeunes pages sont brûlés vifs à Namugongo. Ils sont honorés chaque année par un immense pèlerinage.",
      highlight: { value: '3 juin', label: 'pèlerinage de Namugongo' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Buganda en dates',
      items: [
        { year: 1856, label: 'Avènement de Mutesa Ier' },
        { year: 1875, label: 'Visite de Stanley' },
        { year: 1886, label: 'Martyrs de Namugongo' },
        { year: 1894, label: 'Protectorat britannique' },
        { year: 1962, label: 'Indépendance de l’Ouganda' },
        { year: 1966, label: 'Crise de Mengo' },
      ],
    },
    {
      id: 'protectorat',
      tier: 1,
      type: 'text',
      kicker: 'Colonisation',
      title: 'Le cœur de l’Ouganda',
      body:
        "Après des guerres de religion, le Buganda passe sous protectorat britannique en 1894. Il garde son kabaka et son assemblée, et devient le cœur de l'Ouganda. Le nom « Ouganda » vient d'ailleurs de la forme swahilie de « Buganda ».",
    },
    {
      id: 'mengo',
      tier: 1,
      type: 'war',
      nom: 'Crise de Mengo',
      annee: 1966,
      adversaires: ['Gouvernement de l’Ouganda (Milton Obote)'],
      allies: ['Buganda (kabaka Mutesa II)'],
      vainqueur: 'Gouvernement ougandais',
      consequences:
        "Quatre ans après l'indépendance, le Premier ministre fait attaquer le palais du kabaka, qui s'exile au Royaume-Uni. Les royaumes traditionnels sont abolis en 1967 ; le Buganda est rétabli en 1993, avec un rôle culturel.",
    },

    // ── Niveau 2 ──
    {
      id: 'lukiiko',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le Lukiiko',
      body:
        "Le kabaka gouverne avec un premier ministre, le katikiro, et une assemblée de chefs, le Lukiiko. Cette assemblée existe toujours dans le royaume rétabli.",
    },
    {
      id: 'ecorce',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Le tissu d’écorce',
      body:
        "Les Baganda fabriquent des vêtements avec l'écorce d'un figuier, battue jusqu'à devenir souple comme du tissu. Ce savoir-faire est inscrit au patrimoine culturel immatériel de l'humanité.",
    },
    {
      id: 'kasubi',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Les tombeaux de Kasubi',
      body:
        "À Kampala, quatre kabakas reposent dans une immense hutte de bois, de roseaux et de chaume, bâtie en 1882. Inscrite au patrimoine mondial, elle a brûlé en 2010 et a été reconstruite selon les techniques traditionnelles.",
    },
    {
      id: 'stanley',
      tier: 2,
      type: 'person',
      nom: 'Henry Morton Stanley',
      role: 'Explorateur',
      dates: '1841 – 1904',
      description: "Reçu par Mutesa Ier en 1875, il publie dans un journal britannique un appel aux missionnaires à venir au Buganda, ce qui déclenche l'arrivée des missions.",
    },
    {
      id: 'matoke',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le matoke',
      body:
        "La banane plantain, cuite à la vapeur dans ses feuilles puis écrasée en purée, le matoke, est la base de l'alimentation des Baganda.",
    },
  ],

  quiz: [
    { id: 'lac', type: 'mcq', prompt: 'Au bord de quel lac se trouve le Buganda ?', options: ['Le lac Victoria', 'Le lac Tchad', 'Le lac Tanganyika', 'Le lac Léman'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le Buganda ?', options: ['L’Ouganda', 'Le Kenya', 'Le Rwanda', 'L’Éthiopie'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre porte le roi du Buganda ?', options: ['Kabaka', 'Oba', 'Négus', 'Sultan'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Quel ancêtre mythique fonde le royaume selon la tradition ?', options: ['Kintu', 'Mutota', 'Eweka', 'Soundiata'], answer: 0 },
    { id: 'rival', type: 'mcq', prompt: 'Aux dépens de quel royaume voisin le Buganda s’agrandit-il ?', options: ['Le Bunyoro', 'Le Kongo', 'Le Mali', 'Le Dahomey'], answer: 0 },
    { id: 'mutesa', type: 'mcq', prompt: 'Quel kabaka reçoit les explorateurs Speke et Stanley ?', options: ['Mutesa Ier', 'Mwanga II', 'Mutesa II', 'Daudi Chwa'], answer: 0 },
    { id: 'religions', type: 'tf', prompt: 'Au XIXe siècle, l’islam et le christianisme arrivent au Buganda.', answer: true },
    { id: 'martyrs', type: 'mcq', prompt: 'Que commémore le pèlerinage de Namugongo ?', options: ['Les martyrs chrétiens de 1886', 'La fondation du royaume', 'L’indépendance', 'Une victoire militaire'], answer: 0 },
    { id: 'mwanga', type: 'mcq', prompt: 'Quel kabaka fait exécuter des chrétiens en 1885-1887 ?', options: ['Mwanga II', 'Mutesa Ier', 'Suna II', 'Mutesa II'], answer: 0 },
    { id: 'protectorat', type: 'mcq', prompt: 'Quel pays établit un protectorat sur le Buganda en 1894 ?', options: ['Le Royaume-Uni', 'La France', 'L’Allemagne', 'La Belgique'], answer: 0 },
    { id: 'nom', type: 'tf', prompt: 'Le nom « Ouganda » vient du nom « Buganda ».', answer: true },
    { id: 'mengo', type: 'mcq', prompt: 'Que se passe-t-il en 1966 ?', options: ['Le palais du kabaka est attaqué', 'Le royaume est fondé', 'Stanley arrive', 'Le pays devient britannique'], answer: 0 },
    { id: 'retour', type: 'mcq', prompt: 'En quelle année le royaume du Buganda est-il rétabli ?', options: ['1993', '1900', '1966', '1856'], answer: 0 },
    { id: 'ecorce', type: 'mcq', prompt: 'Avec quoi les Baganda fabriquent-ils un tissu traditionnel ?', options: ['De l’écorce de figuier', 'De la soie', 'Du coton', 'De la laine de mouton'], answer: 0 },
    { id: 'matoke', type: 'mcq', prompt: 'Quel est l’aliment de base des Baganda ?', options: ['La banane plantain', 'Le riz', 'Le blé', 'Le maïs'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Avènement de Mutesa Ier', 'Martyrs de Namugongo', 'Protectorat britannique', 'Crise de Mengo'] },
  ],

  recap: [
    'Un royaume du lac Victoria dirigé par le kabaka, fondé selon la tradition au XIVe siècle',
    'Au XIXe siècle, grande puissance des Grands Lacs ; Mutesa Ier s’ouvre au monde',
    'Martyrs chrétiens (1886), guerres de religion, protectorat britannique (1894)',
    'Cœur de l’Ouganda ; monarchie abolie en 1966-1967, rétablie en 1993',
  ],
}
