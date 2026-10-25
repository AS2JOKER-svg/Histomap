/** Chapitre rédigé : Arabie saoudite (1744 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'pacte',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le pacte de 1744',
      body:
        "Vers 1744, à Diriyah, l'émir Mohammed ben Saoud s'allie au prédicateur Mohammed ben Abdelwahhab, qui prône un islam rigoriste. Leur alliance fonde le premier État saoudien.",
      highlight: { value: '1744', label: 'alliance des Saoud et du wahhabisme' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Du Nejd à l’Arabie saoudite',
      years: [1800, 1960],
      caption: 'Comparez : parti du Nejd, au centre de la péninsule, l’État saoudien finit par en couvrir la plus grande partie.',
    },
    {
      id: 'chute',
      tier: 1,
      type: 'war',
      nom: 'Guerre ottomano-wahhabite',
      annee: 1811,
      adversaires: ['Égypte de Méhémet Ali, pour l’Empire ottoman'],
      allies: ['Premier État saoudien'],
      vainqueur: 'Égypte et Empire ottoman',
      consequences:
        "Après sept ans de guerre, les troupes égyptiennes détruisent Diriyah en 1818. Les Saoud reconstruisent ensuite un deuxième État autour de Riyad.",
    },
    {
      id: 'ibn-saoud',
      tier: 1,
      type: 'person',
      nom: 'Abdelaziz ibn Saoud',
      role: 'Fondateur du royaume',
      dates: 'vers 1875 – 1953',
      description:
        "En 1902, il reprend Riyad avec quelques dizaines de compagnons. Il conquiert ensuite La Mecque et Médine (1924-1925) et proclame en 1932 le royaume d'Arabie saoudite.",
    },
    {
      id: 'petrole',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le pétrole',
      body:
        "En 1938, du pétrole est découvert en grande quantité. Le pays possède parmi les plus grandes réserves de la planète ; le pétrole fournit l'essentiel des revenus de l'État.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Arabie saoudite en dates',
      items: [
        { year: 1744, label: 'Pacte de Diriyah' },
        { year: 1818, label: 'Chute de Diriyah' },
        { year: 1902, label: 'Ibn Saoud reprend Riyad' },
        { year: 1932, label: 'Royaume d’Arabie saoudite' },
        { year: 1938, label: 'Découverte du pétrole' },
        { year: 1973, label: 'Embargo pétrolier' },
      ],
    },
    {
      id: 'lieux-saints',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les lieux saints',
      body:
        "Le roi porte le titre de « Gardien des deux saintes mosquées », celles de La Mecque et de Médine. Des millions de musulmans viennent chaque année y faire le pèlerinage.",
    },
    {
      id: 'monarchie',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une monarchie absolue',
      body:
        "Le roi gouverne sans parlement élu, selon la loi islamique. Il n'y a pas de partis politiques, et la pratique publique des autres religions est interdite.",
    },
    {
      id: 'reformes',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des réformes récentes',
      body:
        "Depuis 2017, le prince héritier Mohammed ben Salmane mène des réformes : en 2018, les femmes obtiennent le droit de conduire. Dans le même temps, les opposants sont durement réprimés.",
    },

    // ── Niveau 2 ──
    {
      id: 'embargo',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’arme du pétrole',
      body:
        "En 1973, l'Arabie saoudite et d'autres pays arabes cessent de vendre du pétrole aux pays qui soutiennent Israël : le prix du pétrole est multiplié par quatre.",
    },
    {
      id: 'golfe',
      tier: 2,
      type: 'war',
      nom: 'Guerre du Golfe',
      annee: 1990,
      adversaires: ['Irak de Saddam Hussein'],
      allies: ['Arabie saoudite', 'Coalition menée par les États-Unis', 'Koweït'],
      vainqueur: 'Coalition',
      consequences: "Après l'invasion du Koweït par l'Irak, le royaume accueille des centaines de milliers de soldats étrangers ; le Koweït est libéré en 1991.",
    },
    {
      id: 'mosquee',
      tier: 2,
      type: 'text',
      kicker: 'Histoire',
      title: 'La prise de la Grande Mosquée',
      body:
        "En 1979, des extrémistes armés occupent pendant deux semaines la Grande Mosquée de La Mecque. Après leur défaite, le pouvoir renforce l'influence des religieux.",
    },
    {
      id: 'espace',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Un prince dans l’espace',
      body:
        "En 1985, le prince Sultan ben Salmane devient le premier Arabe à voler dans l'espace, à bord de la navette américaine Discovery.",
    },
    {
      id: 'nom',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Le nom d’une famille',
      body:
        "L'Arabie saoudite est l'un des rares pays au monde à porter le nom de sa famille régnante, les Saoud.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Arabie saoudite ?', options: ['Riyad', 'La Mecque', 'Djeddah', 'Médine'], answer: 0 },
    { id: 'famille', type: 'mcq', prompt: 'Quelle famille règne sur l’Arabie saoudite ?', options: ['Les Saoud', 'Les Hachémites', 'Les Ottomans', 'Les Abbassides'], answer: 0 },
    { id: 'wahhab', type: 'mcq', prompt: 'Avec quel prédicateur les Saoud s’allient-ils vers 1744 ?', options: ['Mohammed ben Abdelwahhab', 'Saladin', 'Ibn Battuta', 'Averroès'], answer: 0 },
    { id: 'diriyah', type: 'mcq', prompt: 'Quelle est la capitale du premier État saoudien ?', options: ['Diriyah', 'Riyad', 'Bagdad', 'Damas'], answer: 0 },
    { id: 'chute', type: 'mcq', prompt: 'Qui détruit le premier État saoudien en 1818 ?', options: ['L’armée égyptienne, pour l’Empire ottoman', 'Les Britanniques', 'Les Perses', 'Les Portugais'], answer: 0 },
    { id: 'riyad', type: 'mcq', prompt: 'Quelle ville Ibn Saoud reprend-il en 1902 ?', options: ['Riyad', 'La Mecque', 'Koweït', 'Bagdad'], answer: 0 },
    { id: 'royaume', type: 'mcq', prompt: 'En quelle année le royaume d’Arabie saoudite est-il proclamé ?', options: ['1932', '1744', '1902', '1973'], answer: 0 },
    { id: 'petrole', type: 'mcq', prompt: 'En quelle année du pétrole est-il découvert en grande quantité ?', options: ['1938', '1902', '1973', '1818'], answer: 0 },
    { id: 'villes-saintes', type: 'mcq', prompt: 'Quelles sont les deux villes saintes de l’islam situées en Arabie saoudite ?', options: ['La Mecque et Médine', 'Jérusalem et Damas', 'Bagdad et Le Caire', 'Riyad et Djeddah'], answer: 0 },
    { id: 'regime', type: 'mcq', prompt: 'Quel est le régime de l’Arabie saoudite ?', options: ['Une monarchie absolue', 'Une république', 'Une démocratie parlementaire', 'Une monarchie constitutionnelle'], answer: 0 },
    { id: 'embargo', type: 'tf', prompt: 'En 1973, l’Arabie saoudite participe à un embargo pétrolier contre les pays qui soutiennent Israël.', answer: true },
    { id: 'allie', type: 'mcq', prompt: 'Quel pays est le grand allié de l’Arabie saoudite depuis 1945 ?', options: ['Les États-Unis', 'L’URSS', 'L’Iran', 'La Chine'], answer: 0 },
    { id: 'golfe', type: 'mcq', prompt: 'Quel pays envahi par l’Irak est libéré en 1991 ?', options: ['Le Koweït', 'Le Yémen', 'Oman', 'Le Qatar'], answer: 0 },
    { id: 'conduire', type: 'mcq', prompt: 'Quel droit les Saoudiennes obtiennent-elles en 2018 ?', options: ['Le droit de conduire', 'Le droit de voter aux élections nationales', 'Le droit d’aller à l’école', 'Le droit de travailler'], answer: 0 },
    { id: 'rival', type: 'mcq', prompt: 'Quel pays est le grand rival de l’Arabie saoudite au Moyen-Orient ?', options: ['L’Iran', 'L’Égypte', 'Le Maroc', 'La Jordanie'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Pacte de Diriyah', 'Chute de Diriyah', 'Royaume d’Arabie saoudite', 'Embargo pétrolier'] },
  ],

  recap: [
    'Vers 1744 : alliance des Saoud et du prédicateur Abdelwahhab ; premier État saoudien',
    '1818 : chute de Diriyah ; deuxième État saoudien autour de Riyad',
    'Ibn Saoud reprend Riyad (1902), prend La Mecque et fonde le royaume (1932)',
    'Pétrole (1938), monarchie absolue gardienne des lieux saints, alliée des États-Unis',
  ],
}
