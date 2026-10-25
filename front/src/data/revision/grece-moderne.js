/** Chapitre rédigé : Grèce moderne (1821 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'soulevement',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le soulèvement de 1821',
      body:
        "Après près de quatre siècles de domination ottomane, les Grecs se soulèvent en 1821. Le 25 mars, jour de la fête nationale, rappelle le début de cette guerre d'indépendance.",
      highlight: { value: '1821', label: 'début de la guerre d’indépendance' },
    },
    {
      id: 'independance',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’indépendance grecque',
      annee: 1821,
      adversaires: ['Empire ottoman', 'Égypte de Méhémet Ali'],
      allies: ['Insurgés grecs', 'Royaume-Uni, France et Russie (à partir de 1827)'],
      vainqueur: 'Grèce et ses alliés',
      consequences:
        "Des massacres sont commis dans les deux camps. Après la bataille de Navarin (1827), l'Empire ottoman doit accepter l'indépendance grecque, reconnue en 1830.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Grèce s’agrandit',
      years: [1878, 1914, 1960],
      caption: 'Comparez : par étapes, la Grèce gagne la Thessalie, puis la Macédoine, l’Épire, la Crète et les îles.',
    },
    {
      id: 'grande-idee',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La « Grande Idée »',
      body:
        "Le nouveau royaume ne compte qu'une partie des Grecs. Ses dirigeants veulent rassembler dans un même État tous les territoires peuplés de Grecs : c'est la « Grande Idée ».",
    },
    {
      id: 'venizelos',
      tier: 1,
      type: 'person',
      nom: 'Eleftherios Venizélos',
      role: 'Premier ministre',
      dates: '1864 – 1936',
      description:
        "Né en Crète, il agrandit fortement la Grèce lors des guerres balkaniques (1912-1913) et la fait entrer dans la Première Guerre mondiale aux côtés des Alliés.",
    },
    {
      id: 'echange',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'L’échange de populations',
      body:
        "Après la défaite contre la Turquie en 1922, le traité de Lausanne (1923) organise un échange : environ 1,2 million de chrétiens orthodoxes quittent la Turquie, environ 400 000 musulmans quittent la Grèce.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Grèce moderne en dates',
      items: [
        { year: 1821, label: 'Début de la guerre d’indépendance' },
        { year: 1830, label: 'Indépendance reconnue' },
        { year: 1896, label: 'Jeux olympiques d’Athènes' },
        { year: 1923, label: 'Échange de populations' },
        { year: 1967, label: 'Coup d’État des colonels' },
        { year: 1981, label: 'Entrée dans la Communauté européenne' },
      ],
    },
    {
      id: 'guerres',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Occupation et guerre civile',
      body:
        "De 1941 à 1944, l'Allemagne, l'Italie et la Bulgarie occupent la Grèce. Une guerre civile oppose ensuite le gouvernement aux communistes (1946-1949) ; le gouvernement l'emporte.",
    },
    {
      id: 'democratie',
      tier: 1,
      type: 'text',
      kicker: 'Démocratie',
      title: 'Des colonels à l’Europe',
      body:
        "De 1967 à 1974, une dictature militaire, celle des « colonels », gouverne le pays. Après sa chute, un référendum abolit la monarchie ; la Grèce démocratique entre dans la Communauté européenne en 1981.",
    },

    // ── Niveau 2 ──
    {
      id: 'navarin',
      tier: 2,
      type: 'text',
      kicker: 'Guerres',
      title: 'Navarin',
      body:
        "En 1827, dans la baie de Navarin, les flottes française, britannique et russe détruisent la flotte ottomane et égyptienne.",
    },
    {
      id: 'byron',
      tier: 2,
      type: 'person',
      nom: 'Lord Byron',
      role: 'Poète anglais',
      dates: '1788 – 1824',
      description: "Comme beaucoup d'Européens, il soutient les insurgés grecs. Il meurt de maladie à Missolonghi.",
    },
    {
      id: 'othon',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un roi venu de Bavière',
      body:
        "Le premier roi de la Grèce moderne, Othon, est un prince bavarois choisi par les grandes puissances. Il arrive en 1833, à 17 ans.",
    },
    {
      id: 'jeux',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Jeux olympiques',
      body:
        "Les premiers Jeux olympiques modernes ont lieu à Athènes en 1896. Lors des cérémonies d'ouverture, la délégation grecque ouvre toujours le défilé.",
    },
    {
      id: 'crise',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'La crise de la dette',
      body:
        "À partir de 2010, la Grèce, très endettée, traverse une crise économique grave. Elle reçoit des prêts européens en échange de fortes économies budgétaires.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Grèce moderne ?', options: ['Athènes', 'Thessalonique', 'Sparte', 'Nauplie'], answer: 0 },
    { id: 'contre', type: 'mcq', prompt: 'Contre quel empire les Grecs se soulèvent-ils en 1821 ?', options: ['L’Empire ottoman', 'L’Empire russe', 'L’Empire autrichien', 'L’Empire britannique'], answer: 0 },
    { id: 'fete', type: 'mcq', prompt: 'Quel jour la Grèce célèbre-t-elle sa fête nationale ?', options: ['Le 25 mars', 'Le 14 juillet', 'Le 1er mai', 'Le 11 novembre'], answer: 0 },
    { id: 'navarin', type: 'mcq', prompt: 'Quelle bataille navale de 1827 aide les Grecs à gagner leur indépendance ?', options: ['Navarin', 'Trafalgar', 'Salamine', 'Lépante'], answer: 0 },
    { id: 'allies', type: 'tf', prompt: 'La France, le Royaume-Uni et la Russie aident les Grecs à obtenir leur indépendance.', answer: true },
    { id: 'byron', type: 'mcq', prompt: 'Quel poète anglais meurt à Missolonghi en soutenant les Grecs ?', options: ['Lord Byron', 'Shakespeare', 'Dickens', 'Victor Hugo'], answer: 0 },
    { id: 'othon', type: 'mcq', prompt: 'D’où vient Othon, premier roi de la Grèce moderne ?', options: ['De Bavière', 'D’Angleterre', 'De France', 'De Russie'], answer: 0 },
    { id: 'idee', type: 'mcq', prompt: 'Que veut la « Grande Idée » ?', options: ['Rassembler tous les Grecs dans un même État', 'Reconstruire le Parthénon', 'Fonder une république', 'Quitter l’Europe'], answer: 0 },
    { id: 'jeux', type: 'mcq', prompt: 'Où ont lieu les premiers Jeux olympiques modernes, en 1896 ?', options: ['À Athènes', 'À Paris', 'À Londres', 'À Olympie'], answer: 0 },
    { id: 'venizelos', type: 'mcq', prompt: 'Quel Premier ministre agrandit la Grèce pendant les guerres balkaniques ?', options: ['Venizélos', 'Metaxas', 'Kapodistrias', 'Caramanlis'], answer: 0 },
    { id: 'lausanne', type: 'mcq', prompt: 'Quel traité organise en 1923 l’échange de populations avec la Turquie ?', options: ['Le traité de Lausanne', 'Le traité de Versailles', 'Le traité de Rome', 'Le traité de Londres'], answer: 0 },
    { id: 'occupation', type: 'mcq', prompt: 'Quel pays occupe la Grèce avec l’Italie et la Bulgarie de 1941 à 1944 ?', options: ['L’Allemagne', 'La Turquie', 'L’URSS', 'Le Royaume-Uni'], answer: 0 },
    { id: 'civile', type: 'tf', prompt: 'Après la Seconde Guerre mondiale, une guerre civile oppose le gouvernement grec aux communistes.', answer: true },
    { id: 'colonels', type: 'mcq', prompt: 'Comment appelle-t-on la dictature militaire de 1967 à 1974 ?', options: ['La dictature des colonels', 'La Restauration', 'La Grande Idée', 'Le régime de Vichy'], answer: 0 },
    { id: 'europe', type: 'mcq', prompt: 'En quelle année la Grèce entre-t-elle dans la Communauté européenne ?', options: ['1981', '1957', '1830', '2004'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Début de la guerre d’indépendance', 'Jeux olympiques d’Athènes', 'Échange de populations', 'Coup d’État des colonels'] },
  ],

  recap: [
    '1821-1830 : guerre d’indépendance contre l’Empire ottoman, Navarin (1827)',
    'La « Grande Idée » : la Grèce s’agrandit jusqu’à la défaite de 1922',
    'Échange de populations (1923), occupation, guerre civile (1946-1949)',
    'Dictature des colonels (1967-1974), puis démocratie européenne (1981)',
  ],
}
