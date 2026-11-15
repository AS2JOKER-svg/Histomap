/** Chapitre rédigé : Pays nordiques (1814 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cinq',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Cinq pays',
      body:
        "Les pays nordiques sont le Danemark, la Suède, la Norvège, la Finlande et l'Islande. Ils partagent une histoire, une tradition protestante luthérienne et des langues proches, sauf le finnois.",
      highlight: { value: '5', label: 'pays nordiques' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'De nouvelles frontières',
      years: [1815, 1930],
      caption: 'Comparez : en 1815, la Norvège est unie à la Suède et la Finlande appartient à la Russie ; en 1930, toutes deux sont indépendantes.',
    },
    {
      id: 'norvege',
      tier: 1,
      type: 'text',
      kicker: 'Indépendances',
      title: 'La Norvège',
      body:
        "En 1814, le Danemark cède la Norvège à la Suède. La Norvège adopte le 17 mai sa propre constitution, puis se sépare pacifiquement de la Suède en 1905.",
    },
    {
      id: 'duches',
      tier: 1,
      type: 'war',
      nom: 'Guerre des Duchés',
      annee: 1864,
      adversaires: ['Royaume de Prusse', 'Empire d’Autriche'],
      allies: ['Danemark'],
      vainqueur: 'Prusse et Autriche',
      consequences:
        "Le Danemark perd les duchés de Schleswig, de Holstein et de Lauenbourg. Le nord du Schleswig redevient danois après un vote en 1920.",
    },
    {
      id: 'finlande',
      tier: 1,
      type: 'text',
      kicker: 'Indépendances',
      title: 'La Finlande et l’Islande',
      body:
        "Rattachée à l'Empire russe depuis 1809, la Finlande proclame son indépendance le 6 décembre 1917. L'Islande se sépare du Danemark et devient une république en 1944.",
    },
    {
      id: 'hiver',
      tier: 1,
      type: 'war',
      nom: 'Guerre d’Hiver',
      annee: 1939,
      adversaires: ['URSS'],
      allies: ['Finlande'],
      vainqueur: 'URSS (paix de Moscou)',
      consequences:
        "La Finlande résiste plus de trois mois dans le froid, puis cède environ un dixième de son territoire, mais garde son indépendance.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les pays nordiques en dates',
      items: [
        { year: 1814, label: 'Constitution norvégienne' },
        { year: 1864, label: 'Guerre des Duchés' },
        { year: 1905, label: 'Indépendance de la Norvège' },
        { year: 1917, label: 'Indépendance de la Finlande' },
        { year: 1944, label: 'Indépendance de l’Islande' },
      ],
    },
    {
      id: 'nobel',
      tier: 1,
      type: 'person',
      nom: 'Alfred Nobel',
      role: 'Chimiste et industriel suédois',
      dates: '1833 – 1896',
      description:
        "L'inventeur de la dynamite (1867) lègue sa fortune pour créer des prix récompensant la physique, la chimie, la médecine, la littérature et la paix. Ils sont remis depuis 1901.",
    },
    {
      id: 'modele',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Le modèle nordique',
      body:
        "Au XXe siècle, les pays nordiques construisent un « État-providence » : les impôts sont élevés, mais l'école, les soins et les aides sociales sont garantis à tous.",
    },

    // ── Niveau 2 ──
    {
      id: 'femmes',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le vote des femmes',
      body:
        "En 1906, la Finlande est le premier pays d'Europe à donner aux femmes le droit de voter et d'être élues. La Norvège suit en 1913, le Danemark et l'Islande en 1915.",
    },
    {
      id: 'occupation',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Occupation et neutralité',
      body:
        "Le 9 avril 1940, l'Allemagne envahit le Danemark et la Norvège, dont le roi part en exil à Londres. La Suède reste neutre.",
    },
    {
      id: 'juifs-danois',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Le sauvetage des Juifs du Danemark',
      body:
        "En octobre 1943, la résistance danoise fait passer en Suède, en bateau, la plupart des Juifs du Danemark, environ 7 000 personnes.",
    },
    {
      id: 'amundsen',
      tier: 2,
      type: 'person',
      nom: 'Roald Amundsen',
      role: 'Explorateur norvégien',
      dates: '1872 – 1928',
      description: "En décembre 1911, il est le premier à atteindre le pôle Sud, avec ses compagnons et leurs chiens de traîneau.",
    },
    {
      id: 'bernadotte',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un maréchal devenu roi',
      body:
        "Jean-Baptiste Bernadotte, maréchal de Napoléon né à Pau, est choisi comme héritier du trône de Suède en 1810. Il devient roi en 1818 : ses descendants règnent toujours.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Lequel de ces pays est un pays nordique ?', options: ['La Finlande', 'Les Pays-Bas', 'La Pologne', 'L’Irlande'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la tradition religieuse des pays nordiques ?', options: ['Le protestantisme luthérien', 'Le catholicisme', 'L’orthodoxie', 'L’islam'], answer: 0 },
    { id: 'norvege', type: 'mcq', prompt: 'À quel pays la Norvège est-elle unie de 1814 à 1905 ?', options: ['La Suède', 'Le Danemark', 'La Russie', 'Le Royaume-Uni'], answer: 0 },
    { id: '17mai', type: 'mcq', prompt: 'Que célèbre la fête nationale norvégienne du 17 mai ?', options: ['La constitution de 1814', 'L’indépendance de 1905', 'La fin de la guerre', 'La naissance du roi'], answer: 0 },
    { id: 'duches', type: 'mcq', prompt: 'Contre qui le Danemark perd-il les duchés en 1864 ?', options: ['La Prusse et l’Autriche', 'La Suède et la Norvège', 'La Russie', 'La France'], answer: 0 },
    { id: 'finlande', type: 'mcq', prompt: 'À quel empire la Finlande est-elle rattachée avant 1917 ?', options: ['L’Empire russe', 'L’Empire allemand', 'L’Empire ottoman', 'L’Empire britannique'], answer: 0 },
    { id: 'islande', type: 'mcq', prompt: 'De quel pays l’Islande se sépare-t-elle en 1944 ?', options: ['Le Danemark', 'La Norvège', 'La Suède', 'Le Royaume-Uni'], answer: 0 },
    { id: 'hiver', type: 'mcq', prompt: 'Quel pays attaque la Finlande pendant la guerre d’Hiver ?', options: ['L’URSS', 'L’Allemagne', 'La Suède', 'La Norvège'], answer: 0 },
    { id: 'neutre', type: 'tf', prompt: 'La Suède reste neutre pendant la Seconde Guerre mondiale.', answer: true },
    { id: 'occupes', type: 'mcq', prompt: 'Quels pays l’Allemagne envahit-elle le 9 avril 1940 ?', options: ['Le Danemark et la Norvège', 'La Suède et la Finlande', 'L’Islande et le Danemark', 'La Finlande et la Norvège'], answer: 0 },
    { id: 'nobel', type: 'mcq', prompt: 'Quelle invention a fait la fortune d’Alfred Nobel ?', options: ['La dynamite', 'Le téléphone', 'La machine à vapeur', 'L’ampoule électrique'], answer: 0 },
    { id: 'femmes', type: 'mcq', prompt: 'Quel est le premier pays d’Europe à accorder aux femmes le droit de vote et d’être élues ?', options: ['La Finlande (1906)', 'La France (1944)', 'Le Royaume-Uni (1928)', 'La Suisse (1971)'], answer: 0 },
    { id: 'providence', type: 'mcq', prompt: 'Comment appelle-t-on le système de protection sociale des pays nordiques ?', options: ['L’État-providence', 'Le libéralisme', 'Le féodalisme', 'Le mercantilisme'], answer: 0 },
    { id: 'amundsen', type: 'mcq', prompt: 'Quel explorateur norvégien atteint le premier le pôle Sud en 1911 ?', options: ['Roald Amundsen', 'Robert Scott', 'Fridtjof Nansen', 'Ernest Shackleton'], answer: 0 },
    { id: 'andersen', type: 'mcq', prompt: 'Quel écrivain danois a écrit La Petite Sirène ?', options: ['Hans Christian Andersen', 'Henrik Ibsen', 'Selma Lagerlöf', 'Les frères Grimm'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Constitution norvégienne', 'Guerre des Duchés', 'Indépendance de la Finlande', 'Indépendance de l’Islande'] },
  ],

  recap: [
    '1814 : la Norvège passe du Danemark à la Suède, puis devient indépendante en 1905',
    'Indépendance de la Finlande (1917) et de l’Islande (1944)',
    'Seconde Guerre mondiale : guerre d’Hiver, occupation, neutralité suédoise',
    'Le modèle nordique : État-providence, droits des femmes, prix Nobel',
  ],
}
