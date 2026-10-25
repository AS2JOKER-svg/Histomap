/** Chapitre rédigé : Pologne contemporaine (1918 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'renaissance',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La Pologne renaît',
      body:
        "Partagée à la fin du XVIIIe siècle entre la Russie, la Prusse et l'Autriche, la Pologne a disparu de la carte pendant 123 ans. Elle renaît le 11 novembre 1918.",
      highlight: { value: '1918', label: 'renaissance de la Pologne' },
    },
    {
      id: 'varsovie1920',
      tier: 1,
      type: 'war',
      nom: 'Guerre soviéto-polonaise',
      annee: 1919,
      adversaires: ['Russie soviétique'],
      allies: ['Pologne', 'République populaire ukrainienne (1920)'],
      vainqueur: 'Pologne',
      consequences:
        "En août 1920, l'armée de Józef Piłsudski arrête l'Armée rouge devant Varsovie : c'est le « miracle de la Vistule ». La paix de Riga (1921) fixe la frontière orientale.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Une Pologne déplacée',
      years: [1930, 1960],
      caption: 'Comparez : après 1945, les frontières de la Pologne sont déplacées vers l’ouest.',
    },
    {
      id: 'invasion',
      tier: 1,
      type: 'war',
      nom: 'Campagne de Pologne (1939)',
      annee: 1939,
      adversaires: ['Allemagne nazie', 'URSS (à partir du 17 septembre)'],
      allies: ['Pologne'],
      vainqueur: 'Allemagne et URSS',
      consequences:
        "La Pologne est partagée entre l'Allemagne et l'URSS. Le Royaume-Uni et la France déclarent la guerre à l'Allemagne : la Seconde Guerre mondiale commence.",
    },
    {
      id: 'shoah',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'L’occupation et la Shoah',
      body:
        "Près de 6 millions de citoyens polonais meurent pendant la guerre, dont environ 3 millions de Juifs tués dans la Shoah. Les nazis installent en Pologne occupée des camps d'extermination comme Auschwitz-Birkenau.",
    },
    {
      id: 'communisme',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La Pologne communiste',
      body:
        "Après 1945, un régime communiste contrôlé par l'URSS s'installe. Les Polonais se révoltent plusieurs fois, en 1956, 1970 et 1980.",
    },
    {
      id: 'walesa',
      tier: 1,
      type: 'person',
      nom: 'Lech Wałęsa',
      role: 'Syndicaliste, puis président',
      dates: 'né en 1943',
      description:
        "Électricien des chantiers navals de Gdańsk, il dirige en 1980 le syndicat libre Solidarność. Prix Nobel de la paix en 1983, il est élu président en 1990.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Pologne contemporaine en dates',
      items: [
        { year: 1918, label: 'Renaissance de la Pologne' },
        { year: 1939, label: 'Invasion allemande et soviétique' },
        { year: 1944, label: 'Insurrection de Varsovie' },
        { year: 1980, label: 'Naissance de Solidarność' },
        { year: 1989, label: 'Élections du 4 juin' },
        { year: 2004, label: 'Entrée dans l’Union européenne' },
      ],
    },
    {
      id: '1989',
      tier: 1,
      type: 'text',
      kicker: 'Démocratie',
      title: 'La fin du communisme',
      body:
        "Le 4 juin 1989, Solidarność remporte presque tous les sièges ouverts à la libre élection. La Pologne devient une démocratie, puis entre dans l'OTAN (1999) et dans l'Union européenne (2004).",
    },

    // ── Niveau 2 ──
    {
      id: 'insurrection',
      tier: 2,
      type: 'war',
      nom: 'Insurrection de Varsovie',
      annee: 1944,
      adversaires: ['Allemagne nazie'],
      allies: ['Armia Krajowa (résistance polonaise)'],
      vainqueur: 'Allemagne',
      consequences: "Après deux mois de combats, les Allemands détruisent méthodiquement la ville. Environ 150 000 à 200 000 civils sont tués.",
    },
    {
      id: 'ghetto',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Le ghetto de Varsovie',
      body:
        "En avril 1943, les derniers Juifs du ghetto de Varsovie se révoltent contre les nazis qui veulent les déporter. Le soulèvement est écrasé après près d'un mois.",
    },
    {
      id: 'enigma',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le secret d’Enigma',
      body:
        "Dans les années 1930, des mathématiciens polonais percent les secrets de la machine de chiffrement allemande Enigma. En 1939, ils transmettent leurs travaux aux Français et aux Britanniques.",
    },
    {
      id: 'pape',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un pape polonais',
      body:
        "En 1978, le cardinal polonais Karol Wojtyła est élu pape sous le nom de Jean-Paul II. Son élection encourage l'opposition au régime communiste.",
    },
    {
      id: 'etat-de-guerre',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'L’état de guerre',
      body:
        "Le 13 décembre 1981, le général Jaruzelski proclame l'état de guerre : Solidarność est interdit et des milliers de militants sont arrêtés.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Pologne ?', options: ['Varsovie', 'Cracovie', 'Gdańsk', 'Prague'], answer: 0 },
    { id: 'partages', type: 'tf', prompt: 'Avant 1918, la Pologne avait disparu de la carte pendant plus d’un siècle.', answer: true },
    { id: 'date', type: 'mcq', prompt: 'Quel jour la Pologne renaît-elle en 1918 ?', options: ['Le 11 novembre', 'Le 14 juillet', 'Le 1er septembre', 'Le 4 juin'], answer: 0 },
    { id: 'pilsudski', type: 'mcq', prompt: 'Qui arrête l’Armée rouge devant Varsovie en 1920 ?', options: ['Józef Piłsudski', 'Lech Wałęsa', 'Jaruzelski', 'Jean-Paul II'], answer: 0 },
    { id: 'invasion', type: 'mcq', prompt: 'Quels pays envahissent la Pologne en septembre 1939 ?', options: ['L’Allemagne et l’URSS', 'L’Allemagne et l’Italie', 'La Russie et l’Autriche', 'La France et le Royaume-Uni'], answer: 0 },
    { id: 'seconde', type: 'mcq', prompt: 'Quelle guerre commence avec l’invasion de la Pologne ?', options: ['La Seconde Guerre mondiale', 'La Première Guerre mondiale', 'La guerre froide', 'La guerre de Trente Ans'], answer: 0 },
    { id: 'auschwitz', type: 'mcq', prompt: 'Qui installe le camp d’extermination d’Auschwitz-Birkenau ?', options: ['Les nazis', 'Les Soviétiques', 'Le gouvernement polonais', 'Les Autrichiens'], answer: 0 },
    { id: 'juifs', type: 'mcq', prompt: 'Combien de Juifs polonais environ sont tués pendant la Shoah ?', options: ['Environ 3 millions', 'Environ 30 000', 'Environ 300 000', 'Environ 30 millions'], answer: 0 },
    { id: 'insurrection', type: 'mcq', prompt: 'Quelle ville se soulève contre les Allemands en 1944 ?', options: ['Varsovie', 'Cracovie', 'Berlin', 'Gdańsk'], answer: 0 },
    { id: 'frontieres', type: 'tf', prompt: 'Après 1945, les frontières de la Pologne sont déplacées vers l’ouest.', answer: true },
    { id: 'solidarnosc', type: 'mcq', prompt: 'Comment s’appelle le syndicat libre né à Gdańsk en 1980 ?', options: ['Solidarność', 'Perestroïka', 'Komintern', 'Glasnost'], answer: 0 },
    { id: 'walesa', type: 'mcq', prompt: 'Qui dirige Solidarność ?', options: ['Lech Wałęsa', 'Józef Piłsudski', 'Wojciech Jaruzelski', 'Edward Gierek'], answer: 0 },
    { id: 'pape', type: 'mcq', prompt: 'Sous quel nom le Polonais Karol Wojtyła devient-il pape en 1978 ?', options: ['Jean-Paul II', 'Benoît XVI', 'Pie XII', 'Jean XXIII'], answer: 0 },
    { id: 'curie', type: 'mcq', prompt: 'Quelle scientifique née à Varsovie découvre le polonium ?', options: ['Marie Curie', 'Irène Joliot-Curie', 'Rosalind Franklin', 'Lise Meitner'], answer: 0 },
    { id: 'ue', type: 'mcq', prompt: 'En quelle année la Pologne entre-t-elle dans l’Union européenne ?', options: ['2004', '1989', '1995', '2013'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Renaissance de la Pologne', 'Invasion allemande et soviétique', 'Naissance de Solidarność', 'Entrée dans l’Union européenne'] },
  ],

  recap: [
    '1918 : la Pologne renaît après 123 ans de partages ; 1920 : victoire devant Varsovie',
    '1939 : invasion allemande et soviétique ; occupation et Shoah',
    'Régime communiste (1945-1989) contesté par Solidarność et Lech Wałęsa',
    '1989 : démocratie ; OTAN (1999) et Union européenne (2004)',
  ],
}
