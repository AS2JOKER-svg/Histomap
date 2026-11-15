/** Chapitre rédigé : Égypte contemporaine (1805 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mehemet-ali',
      tier: 1,
      type: 'person',
      nom: 'Méhémet Ali',
      role: 'Gouverneur d’Égypte',
      dates: 'au pouvoir 1805 – 1848',
      description:
        "Officier de l'armée ottomane, il prend le pouvoir en 1805. Il modernise l'armée, crée des écoles et des usines, développe le coton et fonde une dynastie qui règne jusqu'en 1953.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Égypte',
      years: [1815, 1960],
      caption: 'Un pays de désert traversé par le Nil, le long duquel vit presque toute la population.',
    },
    {
      id: 'suez',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le canal de Suez',
      body:
        "Ouvert en 1869, le canal de Suez relie la Méditerranée à la mer Rouge : les navires n'ont plus besoin de faire le tour de l'Afrique pour aller en Asie.",
      highlight: { value: '1869', label: 'ouverture du canal' },
    },
    {
      id: 'britanniques',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Sous influence britannique',
      body:
        "Très endettée, l'Égypte passe sous le contrôle des Britanniques, qui l'occupent en 1882. Indépendante en 1922, elle reste sous leur influence jusqu'aux années 1950.",
    },
    {
      id: 'nasser',
      tier: 1,
      type: 'person',
      nom: 'Gamal Abdel Nasser',
      role: 'Président',
      dates: 'au pouvoir 1954 – 1970',
      description:
        "L'un des « officiers libres » qui renversent le roi en 1952. Il nationalise le canal de Suez en 1956 et devient le héros du nationalisme arabe.",
    },
    {
      id: 'suez1956',
      tier: 1,
      type: 'war',
      nom: 'Crise du canal de Suez',
      annee: 1956,
      adversaires: ['Israël', 'Royaume-Uni', 'France'],
      allies: ['Égypte'],
      vainqueur: 'Égypte sur le plan politique',
      consequences:
        "Après la nationalisation du canal, Israël, le Royaume-Uni et la France attaquent l'Égypte. Sous la pression des États-Unis et de l'URSS, ils doivent se retirer.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Égypte contemporaine en dates',
      items: [
        { year: 1805, label: 'Méhémet Ali au pouvoir' },
        { year: 1869, label: 'Ouverture du canal de Suez' },
        { year: 1882, label: 'Occupation britannique' },
        { year: 1952, label: 'Révolution des officiers libres' },
        { year: 1979, label: 'Paix avec Israël' },
        { year: 2011, label: 'Révolution' },
      ],
    },
    {
      id: 'israel',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'De la guerre à la paix avec Israël',
      body:
        "L'Égypte combat Israël en 1948, 1956, 1967 et 1973. En 1967, elle perd le Sinaï. Le président Sadate signe la paix avec Israël en 1979, et le Sinaï est rendu à l'Égypte.",
    },
    {
      id: '2011',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La révolution de 2011',
      body:
        "En 2011, d'immenses manifestations poussent Hosni Moubarak à quitter le pouvoir. En 2013, l'armée renverse le président élu Mohamed Morsi ; son chef, Abdel Fattah al-Sissi, devient président en 2014.",
    },

    // ── Niveau 2 ──
    {
      id: 'assouan',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le barrage d’Assouan',
      body:
        "Achevé en 1970, le haut barrage d'Assouan régule les crues du Nil et produit de l'électricité. Les temples d'Abou Simbel sont découpés en blocs et déplacés pour échapper aux eaux du lac.",
    },
    {
      id: 'kippour',
      tier: 2,
      type: 'war',
      nom: 'Guerre du Kippour',
      annee: 1973,
      adversaires: ['Israël'],
      allies: ['Égypte', 'Syrie'],
      vainqueur: 'Israël sur le plan militaire',
      consequences: "L'Égypte et la Syrie attaquent par surprise le jour de la fête juive de Kippour. Cette guerre ouvre la voie aux négociations de paix.",
    },
    {
      id: 'coptes',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Musulmans et coptes',
      body:
        "La grande majorité des Égyptiens sont musulmans sunnites ; l'université al-Azhar, au Caire, est un grand centre d'enseignement de l'islam. Une importante minorité chrétienne, les coptes, vit aussi en Égypte.",
    },
    {
      id: 'oum',
      tier: 2,
      type: 'person',
      nom: 'Oum Kalthoum',
      role: 'Chanteuse',
      dates: 'morte en 1975',
      description: "La plus célèbre chanteuse du monde arabe au XXe siècle. Ses concerts, diffusés à la radio, étaient écoutés de l'Atlantique au golfe Persique.",
    },
    {
      id: 'mahfouz',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Naguib Mahfouz',
      body:
        "Romancier du Caire, Naguib Mahfouz est en 1988 le premier écrivain de langue arabe à recevoir le prix Nobel de littérature.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Égypte ?', options: ['Le Caire', 'Alexandrie', 'Louxor', 'Assouan'], answer: 0 },
    { id: 'mehemet', type: 'mcq', prompt: 'Qui prend le pouvoir en Égypte en 1805 et modernise le pays ?', options: ['Méhémet Ali', 'Nasser', 'Napoléon', 'Soliman le Magnifique'], answer: 0 },
    { id: 'coton', type: 'mcq', prompt: 'Quelle culture Méhémet Ali développe-t-il ?', options: ['Le coton', 'Le café', 'Le cacao', 'La canne à sucre'], answer: 0 },
    { id: 'canal', type: 'mcq', prompt: 'Quelles mers le canal de Suez relie-t-il ?', options: ['La Méditerranée et la mer Rouge', 'La mer Noire et la Méditerranée', 'La mer Rouge et le golfe Persique', 'La Méditerranée et l’Atlantique'], answer: 0 },
    { id: 'ouverture', type: 'mcq', prompt: 'En quelle année le canal de Suez est-il ouvert ?', options: ['1869', '1805', '1956', '1922'], answer: 0 },
    { id: 'occupation', type: 'mcq', prompt: 'Quel pays occupe l’Égypte à partir de 1882 ?', options: ['Le Royaume-Uni', 'La France', 'L’Italie', 'L’Empire ottoman'], answer: 0 },
    { id: 'officiers', type: 'mcq', prompt: 'Qui renverse le roi Farouk en 1952 ?', options: ['Les « officiers libres »', 'Les Frères musulmans', 'Les Britanniques', 'Les Ottomans'], answer: 0 },
    { id: 'nasser', type: 'mcq', prompt: 'Que nationalise Nasser en 1956 ?', options: ['Le canal de Suez', 'Les pyramides', 'Le barrage d’Assouan', 'Les banques britanniques'], answer: 0 },
    { id: 'suez', type: 'mcq', prompt: 'Quels pays attaquent l’Égypte lors de la crise de Suez ?', options: ['Israël, le Royaume-Uni et la France', 'Les États-Unis et l’URSS', 'La Libye et le Soudan', 'L’Italie et l’Allemagne'], answer: 0 },
    { id: 'sinai', type: 'mcq', prompt: 'Quelle région l’Égypte perd-elle en 1967 ?', options: ['Le Sinaï', 'Le delta du Nil', 'La Nubie', 'Alexandrie'], answer: 0 },
    { id: 'paix', type: 'mcq', prompt: 'Quel président égyptien signe la paix avec Israël en 1979 ?', options: ['Anouar el-Sadate', 'Nasser', 'Moubarak', 'Méhémet Ali'], answer: 0 },
    { id: 'assouan', type: 'mcq', prompt: 'Quel grand barrage est achevé sur le Nil en 1970 ?', options: ['Le haut barrage d’Assouan', 'Le barrage des Trois-Gorges', 'Le barrage Hoover', 'Le barrage de Kariba'], answer: 0 },
    { id: 'coptes', type: 'tf', prompt: 'Une importante minorité chrétienne, les coptes, vit en Égypte.', answer: true },
    { id: 'moubarak', type: 'mcq', prompt: 'Quel président quitte le pouvoir en 2011 après d’immenses manifestations ?', options: ['Hosni Moubarak', 'Anouar el-Sadate', 'Mohamed Morsi', 'Gamal Abdel Nasser'], answer: 0 },
    { id: 'mahfouz', type: 'mcq', prompt: 'Quel écrivain égyptien reçoit le prix Nobel de littérature en 1988 ?', options: ['Naguib Mahfouz', 'Oum Kalthoum', 'Taha Hussein', 'Khalil Gibran'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Méhémet Ali au pouvoir', 'Ouverture du canal de Suez', 'Révolution des officiers libres', 'Paix avec Israël'] },
  ],

  recap: [
    '1805 : Méhémet Ali modernise l’Égypte et fonde une dynastie',
    '1869 : canal de Suez ; 1882 : occupation britannique ; 1922 : indépendance',
    '1952 : révolution ; Nasser nationalise le canal (1956)',
    'Guerres puis paix avec Israël (1979) ; révolution de 2011',
  ],
}
