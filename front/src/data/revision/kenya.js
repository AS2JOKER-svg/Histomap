/** Chapitre rédigé : Kenya (1895 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'protectorat',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un protectorat britannique',
      body:
        "En 1895, le Royaume-Uni fait de la région un protectorat. Un chemin de fer est construit de Mombasa, sur la côte, jusqu'au lac Victoria ; Nairobi naît en 1899 comme étape de cette ligne.",
      highlight: { value: '1895', label: 'protectorat britannique' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Kenya',
      years: [1914, 1960],
      caption: 'Comparez : l’Afrique-Orientale britannique de 1914 devient la colonie, puis l’État du Kenya.',
    },
    {
      id: 'colons',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les terres des colons',
      body:
        "Des colons européens s'installent sur les terres fertiles des hauts plateaux. De nombreux Kikuyus et Maasaï en sont écartés ; beaucoup deviennent ouvriers agricoles chez les colons.",
    },
    {
      id: 'mau-mau',
      tier: 1,
      type: 'war',
      nom: 'Révolte des Mau Mau',
      annee: 1952,
      adversaires: ['Royaume-Uni (autorités coloniales et Kényans loyalistes)'],
      allies: ['Rebelles Mau Mau'],
      vainqueur: 'Royaume-Uni sur le plan militaire',
      consequences:
        "La révolte est écrasée : plus de 10 000 rebelles sont tués et des dizaines de milliers de Kényans détenus dans des camps, où sont pratiquées des tortures. Les rebelles tuent environ 2 000 civils, surtout africains.",
    },
    {
      id: 'kenyatta',
      tier: 1,
      type: 'person',
      nom: 'Jomo Kenyatta',
      role: 'Premier président',
      dates: 'vers 1897 – 1978',
      description:
        "Emprisonné par les Britanniques pendant la révolte des Mau Mau, il devient le premier dirigeant du Kenya indépendant et gouverne jusqu'à sa mort.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Kenya en dates',
      items: [
        { year: 1895, label: 'Protectorat britannique' },
        { year: 1899, label: 'Fondation de Nairobi' },
        { year: 1952, label: 'Révolte des Mau Mau' },
        { year: 1963, label: 'Indépendance' },
        { year: 2010, label: 'Nouvelle Constitution' },
      ],
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Indépendance',
      title: 'L’indépendance',
      body:
        "Le Kenya devient indépendant le 12 décembre 1963. Après Jomo Kenyatta, Daniel arap Moi impose un parti unique de 1982 à 1991.",
    },
    {
      id: 'crise',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La crise de 2007',
      body:
        "Après une élection présidentielle contestée fin 2007, des violences font plus de 1 100 morts. Une nouvelle Constitution est adoptée par référendum en 2010.",
    },
    {
      id: 'economie',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Thé, safaris et téléphones',
      body:
        "Le Kenya exporte du thé, du café et des fleurs. Les touristes viennent voir les animaux des parcs nationaux, et le pays est pionnier du paiement par téléphone portable (M-Pesa, 2007).",
    },

    // ── Niveau 2 ──
    {
      id: 'maathai',
      tier: 2,
      type: 'person',
      nom: 'Wangari Maathai',
      role: 'Militante écologiste',
      dates: '1940 – 2011',
      description: "Son Mouvement de la ceinture verte fait planter des dizaines de millions d'arbres. En 2004, elle est la première Africaine à recevoir le prix Nobel de la paix.",
    },
    {
      id: 'turkana',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le garçon de Turkana',
      body:
        "En 1984, près du lac Turkana, des chercheurs découvrent le squelette presque complet d'un jeune homme fossile vieux d'environ 1,5 million d'années.",
    },
    {
      id: 'coureurs',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Les coureurs des hauts plateaux',
      body:
        "Depuis les années 1960, les coureurs kényans des hauts plateaux brillent dans les courses de fond et le marathon.",
    },
    {
      id: 'excuses',
      tier: 2,
      type: 'text',
      kicker: 'Mémoire',
      title: 'La reconnaissance de 2013',
      body:
        "En 2013, le gouvernement britannique reconnaît les mauvais traitements infligés aux détenus pendant la révolte des Mau Mau et indemnise plus de 5 000 victimes.",
    },
    {
      id: 'safari',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'Safari',
      body:
        "Le mot « safari » vient du swahili, l'une des deux langues officielles du Kenya : il signifie simplement « voyage ».",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du Kenya ?', options: ['Nairobi', 'Mombasa', 'Dar es Salaam', 'Kampala'], answer: 0 },
    { id: 'colonisateur', type: 'mcq', prompt: 'Quel pays colonise le Kenya ?', options: ['Le Royaume-Uni', 'La France', 'L’Allemagne', 'L’Italie'], answer: 0 },
    { id: 'nairobi', type: 'mcq', prompt: 'Pourquoi Nairobi est-elle fondée en 1899 ?', options: ['Comme étape du chemin de fer', 'Comme port de commerce', 'Comme mine d’or', 'Comme ville sainte'], answer: 0 },
    { id: 'plateaux', type: 'mcq', prompt: 'Où s’installent les colons européens ?', options: ['Sur les terres fertiles des hauts plateaux', 'Dans le désert du nord', 'Sur les îles de la côte', 'Au bord du lac Turkana'], answer: 0 },
    { id: 'mau-mau', type: 'mcq', prompt: 'Comment s’appelle la révolte de 1952-1960 contre les Britanniques ?', options: ['La révolte des Mau Mau', 'La guerre du Biafra', 'La révolte des Boxers', 'Le Hirak'], answer: 0 },
    { id: 'camps', type: 'tf', prompt: 'Pendant la révolte des Mau Mau, des dizaines de milliers de Kényans sont détenus dans des camps.', answer: true },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année le Kenya devient-il indépendant ?', options: ['1963', '1895', '1952', '1990'], answer: 0 },
    { id: 'kenyatta', type: 'mcq', prompt: 'Qui est le premier dirigeant du Kenya indépendant ?', options: ['Jomo Kenyatta', 'Daniel arap Moi', 'Nelson Mandela', 'Julius Nyerere'], answer: 0 },
    { id: 'parti', type: 'mcq', prompt: 'Quel président impose un parti unique de 1982 à 1991 ?', options: ['Daniel arap Moi', 'Jomo Kenyatta', 'Mwai Kibaki', 'Uhuru Kenyatta'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Quelles sont les langues officielles du Kenya ?', options: ['Le swahili et l’anglais', 'Le français et l’arabe', 'L’anglais et le portugais', 'Le swahili et le français'], answer: 0 },
    { id: 'constitution', type: 'mcq', prompt: 'En quelle année une nouvelle Constitution est-elle adoptée par référendum ?', options: ['2010', '1963', '1991', '2002'], answer: 0 },
    { id: 'maathai', type: 'mcq', prompt: 'Pour quelle action Wangari Maathai est-elle célèbre ?', options: ['Elle fait planter des millions d’arbres', 'Elle court le marathon', 'Elle écrit des romans', 'Elle découvre des fossiles'], answer: 0 },
    { id: 'turkana', type: 'mcq', prompt: 'Quel fossile est découvert près du lac Turkana en 1984 ?', options: ['Un jeune homme fossile vieux d’environ 1,5 million d’années', 'Un dinosaure', 'Un mammouth', 'Une momie égyptienne'], answer: 0 },
    { id: 'mpesa', type: 'mcq', prompt: 'Qu’est-ce que M-Pesa, lancé au Kenya en 2007 ?', options: ['Un système de paiement par téléphone portable', 'Un parc national', 'Un parti politique', 'Une course de fond'], answer: 0 },
    { id: 'safari', type: 'mcq', prompt: 'Que signifie le mot swahili « safari » ?', options: ['Voyage', 'Lion', 'Chasse', 'Savane'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Protectorat britannique', 'Révolte des Mau Mau', 'Indépendance', 'Nouvelle Constitution'] },
  ],

  recap: [
    '1895 : protectorat britannique ; chemin de fer et fondation de Nairobi',
    'Les colons prennent les hauts plateaux ; révolte des Mau Mau (1952-1960)',
    '1963 : indépendance ; Jomo Kenyatta, puis Daniel arap Moi',
    'Crise de 2007, Constitution de 2010, Wangari Maathai',
  ],
}
