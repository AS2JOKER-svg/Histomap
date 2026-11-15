/** Chapitre rédigé : Canada (1867 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'confederation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La Confédération',
      body:
        "Après la conquête britannique de la Nouvelle-France (1763), des colonies britanniques se forment en Amérique du Nord. Le 1er juillet 1867, quatre d'entre elles s'unissent dans une fédération : le Canada.",
      highlight: { value: '1867', label: 'naissance du Canada' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'D’un océan à l’autre',
      years: [1880, 1960],
      caption: 'Comparez : le Canada s’étend de l’Atlantique au Pacifique ; Terre-Neuve le rejoint en 1949.',
    },
    {
      id: 'ouest',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'La conquête de l’Ouest',
      body:
        "Le chemin de fer transcontinental, achevé en 1885, relie l'Atlantique au Pacifique. Des colons s'installent dans les Prairies ; les peuples autochtones perdent la plus grande partie de leurs terres.",
    },
    {
      id: 'riel',
      tier: 1,
      type: 'person',
      nom: 'Louis Riel',
      role: 'Chef métis',
      dates: '1844 – 1885',
      description:
        "Il défend les Métis francophones de l'Ouest et obtient la création du Manitoba (1870). Après une nouvelle rébellion en 1885, il est pendu, ce qui divise francophones et anglophones.",
    },
    {
      id: 'pensionnats',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les pensionnats autochtones',
      body:
        "Jusqu'en 1996, environ 150 000 enfants autochtones sont placés dans des pensionnats pour être assimilés ; beaucoup y subissent des mauvais traitements. En 2015, une commission officielle parle de « génocide culturel ».",
    },
    {
      id: 'guerres',
      tier: 1,
      type: 'war',
      nom: 'Première Guerre mondiale',
      annee: 1914,
      adversaires: ['Empire allemand', 'Autriche-Hongrie', 'Empire ottoman'],
      allies: ['Canada', 'Royaume-Uni', 'France'],
      vainqueur: 'Alliés',
      consequences:
        "Environ 60 000 soldats canadiens meurent. La prise de la crête de Vimy (1917) renforce le sentiment national ; le Canada obtient sa pleine souveraineté en 1931.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Canada en dates',
      items: [
        { year: 1867, label: 'Confédération' },
        { year: 1885, label: 'Chemin de fer transcontinental' },
        { year: 1917, label: 'Vimy' },
        { year: 1931, label: 'Statut de Westminster' },
        { year: 1982, label: 'Rapatriement de la Constitution' },
        { year: 1995, label: 'Référendum au Québec' },
      ],
    },
    {
      id: 'quebec',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Le Québec',
      body:
        "Dans les années 1960, la « Révolution tranquille » modernise la société québécoise francophone. Les Québécois rejettent l'indépendance de leur province par référendum en 1980, puis de justesse en 1995.",
    },
    {
      id: 'bilinguisme',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Bilingue et multiculturel',
      body:
        "Depuis 1969, l'anglais et le français sont les deux langues officielles du pays. Pays d'immigration, le Canada adopte en 1971 une politique de multiculturalisme.",
    },

    // ── Niveau 2 ──
    {
      id: 'juno',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Juno Beach',
      body:
        "Le 6 juin 1944, les soldats canadiens débarquent en Normandie sur la plage de Juno. Ils participent ensuite à la libération des Pays-Bas.",
    },
    {
      id: 'insuline',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'L’insuline',
      body:
        "En 1921-1922, à Toronto, Frederick Banting et Charles Best isolent l'insuline, qui permet de soigner le diabète et sauve des millions de vies.",
    },
    {
      id: 'pearson',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les casques bleus',
      body:
        "En 1956, le diplomate canadien Lester B. Pearson propose d'envoyer une force de l'ONU pour séparer les armées pendant la crise de Suez. Il reçoit le prix Nobel de la paix.",
    },
    {
      id: 'nunavut',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le Nunavut',
      body:
        "En 1999, un nouveau territoire est créé dans le Grand Nord : le Nunavut, peuplé et gouverné en majorité par des Inuits.",
    },
    {
      id: 'kanata',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Kanata',
      body:
        "Le nom « Canada » viendrait du mot iroquoien « kanata », qui signifie « village ».",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du Canada ?', options: ['Ottawa', 'Toronto', 'Montréal', 'Québec'], answer: 0 },
    { id: 'naissance', type: 'mcq', prompt: 'En quelle année naît la Confédération canadienne ?', options: ['1867', '1763', '1931', '1982'], answer: 0 },
    { id: 'avant', type: 'mcq', prompt: 'Quelle colonie française les Britanniques conquièrent-ils en 1763 ?', options: ['La Nouvelle-France', 'La Louisiane', 'Saint-Domingue', 'La Nouvelle-Calédonie'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Quelles sont les deux langues officielles du Canada ?', options: ['L’anglais et le français', 'L’anglais et l’espagnol', 'Le français et l’inuktitut', 'L’anglais et l’allemand'], answer: 0 },
    { id: 'train', type: 'mcq', prompt: 'Que relie le chemin de fer achevé en 1885 ?', options: ['L’Atlantique et le Pacifique', 'Le Canada et le Mexique', 'Montréal et New York', 'Le Québec et l’Alaska'], answer: 0 },
    { id: 'riel', type: 'mcq', prompt: 'Quel chef métis est pendu en 1885 ?', options: ['Louis Riel', 'René Lévesque', 'John A. Macdonald', 'Jacques Cartier'], answer: 0 },
    { id: 'pensionnats', type: 'tf', prompt: 'Des enfants autochtones ont été placés dans des pensionnats pour être assimilés.', answer: true },
    { id: 'vimy', type: 'mcq', prompt: 'Quelle crête les Canadiens prennent-ils en 1917 ?', options: ['Vimy', 'Verdun', 'La Somme', 'Gallipoli'], answer: 0 },
    { id: 'juno', type: 'mcq', prompt: 'Sur quelle plage de Normandie les Canadiens débarquent-ils en 1944 ?', options: ['Juno', 'Omaha', 'Utah', 'Gold'], answer: 0 },
    { id: 'quebec', type: 'mcq', prompt: 'Quelle province organise des référendums sur l’indépendance ?', options: ['Le Québec', 'L’Ontario', 'La Colombie-Britannique', 'Le Manitoba'], answer: 0 },
    { id: 'tranquille', type: 'mcq', prompt: 'Comment appelle-t-on la modernisation du Québec dans les années 1960 ?', options: ['La Révolution tranquille', 'La Grande Noirceur', 'La Confédération', 'La Conquête'], answer: 0 },
    { id: 'insuline', type: 'mcq', prompt: 'Quel médicament est découvert à Toronto en 1921-1922 ?', options: ['L’insuline', 'La pénicilline', 'L’aspirine', 'Le vaccin contre la variole'], answer: 0 },
    { id: 'pearson', type: 'mcq', prompt: 'Quel Canadien imagine les forces de paix de l’ONU en 1956 ?', options: ['Lester B. Pearson', 'Pierre Elliott Trudeau', 'Wilfrid Laurier', 'Louis Riel'], answer: 0 },
    { id: 'nunavut', type: 'mcq', prompt: 'Quel peuple gouverne en majorité le Nunavut ?', options: ['Les Inuits', 'Les Métis', 'Les Cris', 'Les Iroquois'], answer: 0 },
    { id: 'hockey', type: 'mcq', prompt: 'Quel est le sport national d’hiver du Canada ?', options: ['Le hockey sur glace', 'Le ski', 'Le curling', 'Le patinage artistique'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Confédération', 'Vimy', 'Statut de Westminster', 'Rapatriement de la Constitution'] },
  ],

  recap: [
    '1867 : quatre colonies britanniques forment le Canada',
    'Expansion vers l’ouest : chemin de fer, Louis Riel, dépossession des autochtones',
    'Deux guerres mondiales (Vimy, Juno) ; souveraineté en 1931, Constitution en 1982',
    'Bilinguisme, multiculturalisme et question du Québec (référendums de 1980 et 1995)',
  ],
}
