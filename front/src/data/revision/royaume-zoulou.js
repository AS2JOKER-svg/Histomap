/** Chapitre rédigé : Royaume zoulou (1816 – 1897). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'chaka',
      tier: 1,
      type: 'person',
      nom: 'Chaka',
      role: 'Roi des Zoulous',
      dates: 'règne 1816 – 1828',
      description:
        "Vers 1816, il prend la tête d'un petit peuple, les Zoulous, et en fait l'une des principales puissances d'Afrique australe. Il est assassiné en 1828 par ses demi-frères.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Zoulouland',
      years: [1878],
      caption: 'Le royaume zoulou, entre l’océan Indien et les montagnes du Drakensberg, à la veille de la guerre de 1879.',
    },
    {
      id: 'armee',
      tier: 1,
      type: 'text',
      kicker: 'Armée',
      title: 'Une armée nouvelle',
      body:
        "Chaka renforce le système des régiments de jeunes hommes, les amabutho, et les soumet à une discipline stricte. Selon la tradition, il remplace les longues sagaies de jet par une lance courte pour le combat rapproché et fait attaquer selon la formation des « cornes du buffle », qui encercle l'ennemi.",
    },
    {
      id: 'bouleversements',
      tier: 1,
      type: 'text',
      kicker: 'Conséquences',
      title: 'Une région bouleversée',
      body:
        "Les guerres de l'époque de Chaka provoquent de grands déplacements de peuples dans toute l'Afrique australe. Les historiens débattent de leurs causes et de leur ampleur : certains soulignent aussi le rôle de la traite et de l'expansion des colons.",
    },
    {
      id: 'blood-river',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Blood River',
      annee: 1838,
      adversaires: ['Voortrekkers boers'],
      allies: ['Royaume zoulou (Dingane)'],
      vainqueur: 'Boers',
      consequences:
        "Après le meurtre de leur chef Piet Retief sur ordre du roi Dingane, les Boers du Grand Trek, retranchés derrière leurs chariots, repoussent l'armée zouloue : environ 3 000 Zoulous sont tués.",
    },
    {
      id: 'isandhlwana',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'La victoire d’Isandhlwana',
      body:
        "En 1879, l'Empire britannique envahit le royaume. Le 22 janvier, plus de 20 000 guerriers zoulous anéantissent un camp britannique à Isandhlwana : plus de 1 300 soldats sont tués. C'est l'une des pires défaites de l'armée britannique à l'époque coloniale.",
      highlight: { value: '22 janvier 1879', label: 'victoire d’Isandhlwana' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le royaume zoulou en dates',
      items: [
        { year: 1816, label: 'Chaka roi' },
        { year: 1828, label: 'Assassinat de Chaka' },
        { year: 1838, label: 'Bataille de Blood River' },
        { year: 1879, label: 'Guerre anglo-zouloue' },
        { year: 1887, label: 'Annexion britannique' },
      ],
    },
    {
      id: 'ulundi',
      tier: 1,
      type: 'war',
      nom: 'Guerre Anglo-Zouloue',
      annee: 1879,
      adversaires: ['Royaume-Uni'],
      allies: ['Royaume zoulou (Cetshwayo)'],
      vainqueur: 'Royaume-Uni',
      consequences:
        "Après Isandhlwana, les Britanniques envoient des renforts et écrasent les Zoulous à Ulundi, en juillet. Le roi Cetshwayo est capturé, le royaume divisé, puis annexé en 1887.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Zoulous aujourd’hui',
      body:
        "Les Zoulous sont aujourd'hui le peuple le plus nombreux d'Afrique du Sud, et le zoulou la langue maternelle la plus parlée du pays. Un roi zoulou existe toujours, avec un rôle traditionnel.",
    },

    // ── Niveau 2 ──
    {
      id: 'cetshwayo',
      tier: 2,
      type: 'person',
      nom: 'Cetshwayo',
      role: 'Roi des Zoulous',
      dates: 'règne 1872 – 1879',
      description: "Il refuse un ultimatum britannique qui exige la dissolution de son armée. Vaincu en 1879, il est reçu à Londres par la reine Victoria en 1882, puis brièvement rétabli sur une partie de son royaume.",
    },
    {
      id: 'betail',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le bétail, richesse des Zoulous',
      body:
        "Le bétail est la mesure de la richesse. Il sert aux échanges, aux sacrifices aux ancêtres et à la dot lors des mariages. Les villages, les kraals, sont des cercles de huttes autour de l'enclos des bêtes.",
    },
    {
      id: 'boucliers',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les boucliers des régiments',
      body:
        "Chaque régiment porte des boucliers en peau de vache d'une couleur particulière, qui permettent de le reconnaître au combat.",
    },
    {
      id: 'reconciliation',
      tier: 2,
      type: 'text',
      kicker: 'Mémoire',
      title: 'Le jour de la Réconciliation',
      body:
        "Le 16 décembre, date de la bataille de Blood River, était une fête nationale pour les Afrikaners. Depuis la fin de l'apartheid, c'est en Afrique du Sud le « jour de la Réconciliation ».",
    },
    {
      id: 'nandi',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Nandi, mère de Chaka',
      body:
        "Rejetée avec son fils par le père de Chaka, Nandi l'élève dans des conditions difficiles. Chaka lui reste très attaché ; à sa mort, en 1827, il impose au royaume un deuil extrêmement dur.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve l’ancien royaume zoulou ?', options: ['L’Afrique du Sud', 'Le Nigeria', 'Le Kenya', 'Le Maroc'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fait des Zoulous une grande puissance vers 1816 ?', options: ['Chaka', 'Cetshwayo', 'Mandela', 'Samory'], answer: 0 },
    { id: 'lance', type: 'mcq', prompt: 'Selon la tradition, quelle arme Chaka impose-t-il à ses guerriers ?', options: ['Une lance courte', 'Le fusil', 'L’arc', 'La catapulte'], answer: 0 },
    { id: 'formation', type: 'mcq', prompt: 'Comment s’appelle la formation d’attaque zouloue ?', options: ['Les cornes du buffle', 'La tortue', 'La phalange', 'Le carré'], answer: 0 },
    { id: 'regiments', type: 'mcq', prompt: 'Comment s’appellent les régiments zoulous ?', options: ['Les amabutho', 'Les légions', 'Les sofas', 'Les janissaires'], answer: 0 },
    { id: 'mort', type: 'mcq', prompt: 'Comment meurt Chaka en 1828 ?', options: ['Assassiné par ses demi-frères', 'Au combat contre les Anglais', 'De vieillesse', 'Noyé'], answer: 0 },
    { id: 'blood-river', type: 'mcq', prompt: 'Qui bat les Zoulous à Blood River en 1838 ?', options: ['Les Boers', 'Les Britanniques', 'Les Portugais', 'Les Français'], answer: 0 },
    { id: 'isandhlwana', type: 'mcq', prompt: 'Quelle grande victoire les Zoulous remportent-ils en 1879 ?', options: ['Isandhlwana', 'Ulundi', 'Blood River', 'Adoua'], answer: 0 },
    { id: 'ulundi', type: 'tf', prompt: 'Après Isandhlwana, les Zoulous sont vaincus à Ulundi.', answer: true },
    { id: 'roi-1879', type: 'mcq', prompt: 'Qui est roi des Zoulous pendant la guerre de 1879 ?', options: ['Cetshwayo', 'Chaka', 'Dingane', 'Mpande'], answer: 0 },
    { id: 'victoria', type: 'mcq', prompt: 'Quelle souveraine reçoit Cetshwayo à Londres en 1882 ?', options: ['La reine Victoria', 'Élisabeth Ire', 'Catherine II', 'Marie-Antoinette'], answer: 0 },
    { id: 'betail', type: 'mcq', prompt: 'Quelle est la principale richesse des Zoulous ?', options: ['Le bétail', 'L’or', 'Les épices', 'Le pétrole'], answer: 0 },
    { id: 'annexion', type: 'mcq', prompt: 'Quel pays annexe le royaume zoulou en 1887 ?', options: ['Le Royaume-Uni', 'La France', 'L’Allemagne', 'Le Portugal'], answer: 0 },
    { id: 'reconciliation', type: 'mcq', prompt: 'Comment s’appelle aujourd’hui le 16 décembre en Afrique du Sud ?', options: ['Le jour de la Réconciliation', 'Le jour de l’Indépendance', 'Le jour de Chaka', 'Le jour des Boers'], answer: 0 },
    { id: 'aujourdhui', type: 'tf', prompt: 'Le zoulou est la langue maternelle la plus parlée d’Afrique du Sud.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Chaka roi', 'Bataille de Blood River', 'Bataille d’Isandhlwana', 'Annexion britannique'] },
  ],

  recap: [
    'Vers 1816, Chaka fait des Zoulous une grande puissance militaire',
    'Régiments, lance courte et « cornes du buffle »',
    'Blood River (1838) contre les Boers ; Isandhlwana puis Ulundi (1879) contre les Britanniques',
    'Royaume divisé puis annexé (1887-1897) ; les Zoulous, premier peuple d’Afrique du Sud',
  ],
}
