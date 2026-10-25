/** Chapitre rédigé : Israël et Palestine (1917 – 2020). Carte : seulement 1920, les cartes suivantes ne distinguent pas la Cisjordanie ni Gaza. */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'deux-peuples',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une terre, deux peuples',
      body:
        "À la fin du XIXe siècle, la région, ottomane, est peuplée en grande majorité d'Arabes. Le sionisme, mouvement né en Europe, veut y créer un foyer national juif, sur la terre des ancêtres des Juifs.",
    },
    {
      id: 'balfour',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'La déclaration Balfour',
      body:
        "En 1917, le Royaume-Uni promet un « foyer national pour le peuple juif » en Palestine, sans porter atteinte aux droits des autres habitants. Il reçoit ensuite le mandat sur la Palestine.",
      highlight: { value: '1917', label: 'déclaration Balfour' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Palestine mandataire',
      years: [1920],
      caption: 'La Palestine sous mandat britannique, entre la Méditerranée et le Jourdain.',
    },
    {
      id: 'mandat',
      tier: 1,
      type: 'text',
      kicker: 'Histoire',
      title: 'Sous le mandat britannique',
      body:
        "L'immigration juive augmente, surtout avec les persécutions nazies en Europe. Les Arabes palestiniens, qui réclament leur indépendance, se révoltent de 1936 à 1939. Les affrontements se multiplient.",
    },
    {
      id: '1948',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: '1948 : indépendance et Nakba',
      body:
        "En 1947, l'ONU vote le partage du pays en deux États, accepté par les dirigeants sionistes et rejeté par les dirigeants arabes. Israël proclame son indépendance le 14 mai 1948. Pendant la guerre, environ 700 000 Palestiniens fuient ou sont expulsés : c'est la Nakba, la « catastrophe ».",
    },
    {
      id: 'six-jours',
      tier: 1,
      type: 'war',
      nom: 'Guerre des Six Jours',
      annee: 1967,
      adversaires: ['Égypte', 'Syrie', 'Jordanie'],
      allies: ['Israël'],
      vainqueur: 'Israël',
      consequences:
        "Israël occupe la Cisjordanie, Jérusalem-Est, Gaza, le Sinaï et le Golan. L'ONU demande le retrait des territoires occupés en échange de la paix (résolution 242).",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Israël et Palestine en dates',
      items: [
        { year: 1917, label: 'Déclaration Balfour' },
        { year: 1947, label: 'Plan de partage de l’ONU' },
        { year: 1948, label: 'Indépendance d’Israël et Nakba' },
        { year: 1967, label: 'Guerre des Six Jours' },
        { year: 1987, label: 'Première intifada' },
        { year: 1993, label: 'Accords d’Oslo' },
      ],
    },
    {
      id: 'intifadas',
      tier: 1,
      type: 'text',
      kicker: 'Conflit',
      title: 'Les intifadas',
      body:
        "Les Palestiniens des territoires occupés se soulèvent en 1987, puis en 2000. La seconde intifada est marquée par des attentats-suicides contre des civils israéliens et par de grandes opérations militaires israéliennes ; elle fait environ 3 000 morts palestiniens et 1 000 morts israéliens.",
    },
    {
      id: 'oslo',
      tier: 1,
      type: 'text',
      kicker: 'Paix',
      title: 'Les accords d’Oslo',
      body:
        "En 1993, Israël et l'OLP se reconnaissent mutuellement ; une Autorité palestinienne est créée. Mais les questions des frontières, de Jérusalem, des réfugiés et des colonies ne sont pas réglées, et le processus de paix échoue.",
    },

    // ── Niveau 2 ──
    {
      id: 'ben-gourion',
      tier: 2,
      type: 'person',
      nom: 'David Ben Gourion',
      role: 'Premier ministre d’Israël',
      dates: '1886 – 1973',
      description: "Dirigeant du mouvement sioniste en Palestine, il proclame l'indépendance d'Israël en 1948 et devient son premier Premier ministre.",
    },
    {
      id: 'arafat',
      tier: 2,
      type: 'person',
      nom: 'Yasser Arafat',
      role: 'Dirigeant palestinien',
      dates: '1929 – 2004',
      description: "Chef de l'OLP de 1969 à sa mort, il mène la lutte armée, puis signe les accords d'Oslo. Il reçoit le prix Nobel de la paix en 1994, avec Yitzhak Rabin et Shimon Peres.",
    },
    {
      id: 'jerusalem',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Jérusalem, ville sainte',
      body:
        "Jérusalem abrite le mur des Lamentations pour les juifs, le dôme du Rocher et la mosquée al-Aqsa pour les musulmans, le Saint-Sépulcre pour les chrétiens. Israéliens et Palestiniens la revendiquent comme capitale.",
    },
    {
      id: 'refugies',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Réfugiés et immigrants',
      body:
        "Des millions de Palestiniens vivent comme réfugiés ou descendants de réfugiés. De leur côté, environ 850 000 Juifs quittent les pays arabes ou en sont chassés après 1948, la plupart pour Israël.",
    },
    {
      id: 'gaza',
      tier: 2,
      type: 'text',
      kicker: 'Conflit',
      title: 'Gaza',
      body:
        "Israël se retire de Gaza en 2005. Le Hamas en prend le contrôle en 2007 ; Israël et l'Égypte imposent un blocus. Plusieurs guerres opposent Israël et le Hamas, en 2008-2009, 2012 et 2014.",
    },
  ],

  quiz: [
    { id: 'balfour', type: 'mcq', prompt: 'Quel pays promet en 1917 un « foyer national pour le peuple juif » en Palestine ?', options: ['Le Royaume-Uni', 'La France', 'Les États-Unis', 'L’Empire ottoman'], answer: 0 },
    { id: 'avant', type: 'mcq', prompt: 'Quel empire domine la région avant la Première Guerre mondiale ?', options: ['L’Empire ottoman', 'L’Empire britannique', 'L’Empire perse', 'L’Empire romain'], answer: 0 },
    { id: 'sionisme', type: 'mcq', prompt: 'Comment s’appelle le mouvement qui veut créer un foyer national juif ?', options: ['Le sionisme', 'Le panarabisme', 'Le nationalisme turc', 'Le socialisme'], answer: 0 },
    { id: 'partage', type: 'mcq', prompt: 'Quelle organisation vote en 1947 un plan de partage de la Palestine ?', options: ['L’ONU', 'La Ligue arabe', 'L’OTAN', 'L’Union européenne'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'Quel jour Israël proclame-t-il son indépendance ?', options: ['Le 14 mai 1948', 'Le 2 novembre 1917', 'Le 5 juin 1967', 'Le 13 septembre 1993'], answer: 0 },
    { id: 'nakba', type: 'mcq', prompt: 'Comment les Palestiniens appellent-ils l’exode de 1948 ?', options: ['La Nakba', 'L’Intifada', 'Le Hirak', 'La Naksa'], answer: 0 },
    { id: 'refugies', type: 'mcq', prompt: 'Combien de Palestiniens environ fuient ou sont expulsés en 1948 ?', options: ['Environ 700 000', 'Environ 7 000', 'Environ 70 000', 'Environ 7 millions'], answer: 0 },
    { id: 'six-jours', type: 'mcq', prompt: 'Lors de quelle guerre Israël occupe-t-il la Cisjordanie et Gaza ?', options: ['La guerre des Six Jours (1967)', 'La guerre de 1948', 'La guerre du Kippour (1973)', 'La guerre du Liban (1982)'], answer: 0 },
    { id: 'olp', type: 'mcq', prompt: 'Qui dirige l’OLP de 1969 à 2004 ?', options: ['Yasser Arafat', 'Mahmoud Abbas', 'Gamal Abdel Nasser', 'Amin al-Husseini'], answer: 0 },
    { id: 'intifada', type: 'mcq', prompt: 'Comment appelle-t-on les soulèvements palestiniens de 1987 et 2000 ?', options: ['Les intifadas', 'Les croisades', 'Les printemps arabes', 'Les Nakbas'], answer: 0 },
    { id: 'oslo', type: 'mcq', prompt: 'Quels accords de 1993 créent une Autorité palestinienne ?', options: ['Les accords d’Oslo', 'Les accords de Camp David', 'Les accords d’Évian', 'Les accords de Genève'], answer: 0 },
    { id: 'rabin', type: 'tf', prompt: 'Le Premier ministre israélien Yitzhak Rabin est assassiné en 1995 par un extrémiste israélien.', answer: true },
    { id: 'jerusalem', type: 'mcq', prompt: 'Quel lieu saint de Jérusalem est vénéré par les juifs ?', options: ['Le mur des Lamentations', 'La mosquée al-Aqsa', 'Le Saint-Sépulcre', 'La Kaaba'], answer: 0 },
    { id: 'hamas', type: 'mcq', prompt: 'Quel mouvement contrôle la bande de Gaza depuis 2007 ?', options: ['Le Hamas', 'Le Fatah', 'Le Hezbollah', 'L’OLP'], answer: 0 },
    { id: 'ben-gourion', type: 'mcq', prompt: 'Qui proclame l’indépendance d’Israël ?', options: ['David Ben Gourion', 'Theodor Herzl', 'Golda Meir', 'Menahem Begin'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Déclaration Balfour', 'Indépendance d’Israël et Nakba', 'Guerre des Six Jours', 'Accords d’Oslo'] },
  ],

  recap: [
    '1917 : déclaration Balfour ; 1920-1948 : mandat britannique, tensions entre Juifs et Arabes',
    '1947 : plan de partage de l’ONU ; 1948 : indépendance d’Israël et Nakba palestinienne',
    '1967 : Israël occupe la Cisjordanie, Jérusalem-Est et Gaza ; intifadas (1987, 2000)',
    '1993 : accords d’Oslo, puis échec du processus de paix ; Gaza contrôlée par le Hamas (2007)',
  ],
}
