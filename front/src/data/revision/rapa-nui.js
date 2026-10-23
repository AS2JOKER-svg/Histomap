/** Chapitre rédigé : Rapa Nui (vers 1200 – 1888). Pas de carte : l’île n’a pas de territoire propre sur les cartes avant 1900. */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'ile',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'L’île la plus isolée',
      body:
        "Entre 1150 et 1280 environ, des navigateurs polynésiens atteignent Rapa Nui, une petite île à plus de 2 000 km de toute autre terre habitée. Selon la tradition, ils sont menés par le chef Hotu Matuꞌa.",
      highlight: { value: '2 000 km', label: 'jusqu’à la terre habitée la plus proche' },
    },
    {
      id: 'moai',
      tier: 1,
      type: 'text',
      kicker: 'Art et religion',
      title: 'Les moaï',
      body:
        "Les clans sculptent près d'un millier de statues géantes, les moaï, qui représentent leurs ancêtres. Dressées sur des plateformes de pierre, la plupart regardent vers l'intérieur de l'île, vers les villages qu'elles protègent.",
      highlight: { value: '≈ 1 000', label: 'moaï sculptés' },
    },
    {
      id: 'carriere',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'La carrière de Rano Raraku',
      body:
        "Les moaï sont taillés dans la roche volcanique du Rano Raraku avec des outils de basalte. Selon une hypothèse appuyée par des expériences, ils étaient déplacés debout, en les faisant basculer avec des cordes, comme s'ils « marchaient ».",
    },
    {
      id: 'forets',
      tier: 1,
      type: 'text',
      kicker: 'Environnement',
      title: 'Une île sans forêts',
      body:
        "L'île perd peu à peu ses grands palmiers, abattus par les humains et dont les graines sont mangées par les rats. Les chercheurs débattent encore de la gravité de la crise que cela a provoquée avant l'arrivée des Européens.",
    },
    {
      id: 'hommeoiseau',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le culte de l’homme-oiseau',
      body:
        "Chaque année, à Orongo, des concurrents nagent jusqu'à un îlot pour rapporter le premier œuf de sterne. Le chef du vainqueur devient l'homme-oiseau, sacré pendant un an.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Rapa Nui en dates',
      items: [
        { year: 1200, label: 'Arrivée des Polynésiens (vers)' },
        { year: 1722, label: 'Arrivée de Roggeveen' },
        { year: 1862, label: 'Raids esclavagistes' },
        { year: 1877, label: 'Il reste 111 habitants' },
        { year: 1888, label: 'Annexion par le Chili' },
      ],
    },
    {
      id: 'paques',
      tier: 1,
      type: 'text',
      kicker: 'Contacts',
      title: 'L’île de Pâques',
      body:
        "Le jour de Pâques 1722, le navigateur hollandais Jacob Roggeveen aborde l'île et lui donne ce nom. Dans les décennies suivantes, les visiteurs constatent que de nombreux moaï ont été renversés.",
    },
    {
      id: 'raids',
      tier: 1,
      type: 'text',
      kicker: 'Catastrophe',
      title: 'Les raids de 1862',
      body:
        "En 1862, des navires venus du Pérou enlèvent environ 1 500 habitants pour les faire travailler de force. Les survivants rapatriés rapportent la variole. En 1877, il ne reste que 111 Rapa Nui sur l'île.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Rapa Nui aujourd’hui',
      body:
        "Annexée par le Chili en 1888, l'île est aujourd'hui un parc national inscrit au patrimoine mondial de l'UNESCO. Les Rapa Nui parlent toujours leur langue et défendent leur culture.",
    },

    // ── Niveau 2 ──
    {
      id: 'rongorongo',
      tier: 2,
      type: 'text',
      kicker: 'Écriture',
      title: 'Le rongorongo',
      body:
        "Des signes gravés sur une vingtaine de tablettes de bois forment peut-être une écriture. Personne ne sait les lire : les derniers savants qui les comprenaient ont sans doute disparu lors des raids de 1862.",
    },
    {
      id: 'pukao',
      tier: 2,
      type: 'text',
      kicker: 'Art',
      title: 'Les chapeaux rouges',
      body:
        "Beaucoup de moaï portent sur la tête un cylindre de pierre rouge, le pukao, taillé dans une autre carrière. Le plus grand moaï dressé, Paro, mesurait environ 10 mètres.",
    },
    {
      id: 'jardins',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des jardins de pierres',
      body:
        "Pour protéger les patates douces du vent et de la sécheresse, les habitants entourent leurs cultures de murets et couvrent le sol de cailloux qui gardent l'humidité.",
    },
    {
      id: 'amerique',
      tier: 2,
      type: 'text',
      kicker: 'Voyages',
      title: 'Jusqu’à l’Amérique ?',
      body:
        "La patate douce, plante venue d'Amérique du Sud, était cultivée en Polynésie avant l'arrivée des Européens. C'est l'un des indices que des Polynésiens ont atteint l'Amérique.",
    },
    {
      id: 'tongariki',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les moaï relevés',
      body:
        "Au XIXe siècle, tous les moaï dressés avaient été renversés. Au XXe siècle, plusieurs ont été relevés, comme les quinze statues d'Ahu Tongariki.",
    },
  ],

  quiz: [
    { id: 'nom', type: 'mcq', prompt: 'Quel est le nom européen de Rapa Nui ?', options: ['L’île de Pâques', 'Tahiti', 'Hawaï', 'La Nouvelle-Calédonie'], answer: 0 },
    { id: 'ocean', type: 'mcq', prompt: 'Dans quel océan se trouve Rapa Nui ?', options: ['Le Pacifique', 'L’Atlantique', 'L’océan Indien', 'L’océan Arctique'], answer: 0 },
    { id: 'habitants', type: 'mcq', prompt: 'Qui sont les premiers habitants de l’île ?', options: ['Des Polynésiens', 'Des Incas', 'Des Vikings', 'Des Égyptiens'], answer: 0 },
    { id: 'isolee', type: 'tf', prompt: 'Rapa Nui est l’une des îles habitées les plus isolées du monde.', answer: true },
    { id: 'moai', type: 'mcq', prompt: 'Que représentent les moaï ?', options: ['Les ancêtres des clans', 'Des extraterrestres', 'Des rois européens', 'Des animaux'], answer: 0 },
    { id: 'nombre', type: 'mcq', prompt: 'Combien de moaï environ ont été sculptés ?', options: ['Près d’un millier', 'Une dizaine', 'Cent mille', 'Trois'], answer: 0 },
    { id: 'regard', type: 'mcq', prompt: 'Vers où regardent la plupart des moaï ?', options: ['Vers l’intérieur de l’île', 'Vers la mer', 'Vers le ciel', 'Vers le sol'], answer: 0 },
    { id: 'carriere', type: 'mcq', prompt: 'Dans quelle carrière les moaï sont-ils taillés ?', options: ['Le Rano Raraku', 'Le Vésuve', 'Le Kilimandjaro', 'Uluru'], answer: 0 },
    { id: 'oiseau', type: 'mcq', prompt: 'Que doivent rapporter les concurrents du culte de l’homme-oiseau ?', options: ['Le premier œuf de sterne', 'Un poisson géant', 'Une pierre rouge', 'Une plume d’aigle'], answer: 0 },
    { id: 'roggeveen', type: 'mcq', prompt: 'Pourquoi l’île s’appelle-t-elle île de Pâques ?', options: ['Roggeveen l’aborde le jour de Pâques 1722', 'Elle a la forme d’un œuf', 'On y fête Pâques depuis toujours', 'Un pape l’a nommée ainsi'], answer: 0 },
    { id: 'rongorongo', type: 'mcq', prompt: 'Qu’est-ce que le rongorongo ?', options: ['Des signes gravés jamais déchiffrés', 'Une danse', 'Une statue', 'Un bateau'], answer: 0 },
    { id: 'raids', type: 'mcq', prompt: 'D’où viennent les navires qui enlèvent des habitants en 1862 ?', options: ['Du Pérou', 'Du Japon', 'D’Angleterre', 'De Chine'], answer: 0 },
    { id: '111', type: 'mcq', prompt: 'Combien d’habitants reste-t-il sur l’île en 1877 ?', options: ['111', '11 000', '5', '3 000'], answer: 0 },
    { id: 'chili', type: 'mcq', prompt: 'Quel pays annexe l’île en 1888 ?', options: ['Le Chili', 'La France', 'Les États-Unis', 'Le Pérou'], answer: 0 },
    { id: 'patate', type: 'tf', prompt: 'La patate douce, venue d’Amérique, était cultivée en Polynésie avant l’arrivée des Européens.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée des Polynésiens (vers)', 'Arrivée de Roggeveen', 'Raids esclavagistes', 'Annexion par le Chili'] },
  ],

  recap: [
    'Vers 1150-1280, des Polynésiens peuplent l’île la plus isolée du monde',
    'Près de mille moaï, statues des ancêtres, taillés au Rano Raraku',
    'Perte des forêts, culte de l’homme-oiseau, écriture rongorongo non déchiffrée',
    'Après 1722 : raids esclavagistes (1862), 111 habitants en 1877, annexion par le Chili (1888)',
  ],
}
