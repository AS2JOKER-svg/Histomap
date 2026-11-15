/** Chapitre rédigé : Maoris (vers 1250 – 1840). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'arrivee',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les derniers grands voyages',
      body:
        "Vers 1250-1300, des pirogues venues de Polynésie orientale atteignent la Nouvelle-Zélande. C'est l'une des dernières grandes terres du monde à être peuplée par les humains.",
      highlight: { value: 'vers 1250', label: 'arrivée des premiers habitants' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Aotearoa',
      years: [1300, 1783],
      caption: 'Les Maoris occupent les deux grandes îles de la Nouvelle-Zélande, qu’ils appellent Aotearoa.',
    },
    {
      id: 'moas',
      tier: 1,
      type: 'text',
      kicker: 'Environnement',
      title: 'La fin des moas',
      body:
        "Les premiers habitants chassent les moas, d'immenses oiseaux incapables de voler, dont certains dépassaient trois mètres le cou tendu. En un ou deux siècles, les moas disparaissent.",
    },
    {
      id: 'iwi',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Tribus et chefs',
      body:
        "La société s'organise en familles (whānau), sous-tribus (hapū) et tribus (iwi). Chaque tribu descend d'un ancêtre arrivé sur une des grandes pirogues. Les chefs, les rangatira, tirent leur autorité de leur généalogie.",
    },
    {
      id: 'pa',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les pā',
      body:
        "Les Maoris fortifient le sommet des collines avec des fossés, des terrasses et des palissades : ce sont les pā. On en compte des milliers en Nouvelle-Zélande.",
    },
    {
      id: 'culture',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Moko, sculpture et haka',
      body:
        "Le tatouage du visage (moko), la sculpture sur bois des maisons de réunion et des pirogues, et le haka, une danse collective, expriment l'identité de chaque tribu.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Maoris en dates',
      items: [
        { year: 1250, label: 'Arrivée en Nouvelle-Zélande' },
        { year: 1642, label: 'Passage d’Abel Tasman' },
        { year: 1769, label: 'Arrivée de James Cook' },
        { year: 1807, label: 'Début des guerres des mousquets' },
        { year: 1840, label: 'Traité de Waitangi' },
      ],
    },
    {
      id: 'mousquets',
      tier: 1,
      type: 'war',
      nom: 'Guerres des mousquets',
      annee: 1807,
      adversaires: ['Tribus maories rivales'],
      allies: ['Tribus maories'],
      vainqueur: 'Aucun (guerres entre tribus)',
      consequences:
        "Les tribus qui obtiennent les premières des mousquets auprès des Européens attaquent leurs rivales. Ces guerres, jusqu'à la fin des années 1830, font peut-être 20 000 morts ou plus.",
    },
    {
      id: 'waitangi',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le traité de Waitangi',
      body:
        "Le 6 février 1840, plus de 500 chefs et la Couronne britannique signent le traité de Waitangi. Les versions anglaise et maorie ne disent pas la même chose sur la souveraineté : il est toujours discuté aujourd'hui.",
    },

    // ── Niveau 2 ──
    {
      id: 'hongihika',
      tier: 2,
      type: 'person',
      nom: 'Hongi Hika',
      role: 'Chef des Ngāpuhi',
      dates: 'vers 1772 – 1828',
      description: "En 1820, il rencontre le roi George IV en Angleterre. À son retour, il échange les cadeaux reçus contre des centaines de mousquets et attaque les tribus rivales.",
    },
    {
      id: 'pounamu',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'La pierre verte',
      body:
        "Le pounamu, une pierre verte très dure trouvée dans l'île du Sud, sert à fabriquer des herminettes, des armes et des pendentifs, les hei-tiki. Il est échangé dans tout le pays.",
    },
    {
      id: 'tapu',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Dieux et tapu',
      body:
        "Les Maoris honorent des dieux comme Tāne, dieu des forêts, et Tangaroa, dieu de la mer. Les personnes, les choses et les lieux peuvent être tapu, c'est-à-dire sacrés et interdits.",
    },
    {
      id: 'marae',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le marae',
      body:
        "L'espace devant la maison de réunion, le marae, est le cœur de la communauté : on y accueille les visiteurs, on y débat et on y pleure les morts.",
    },
    {
      id: 'aujourdhui',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Maoris aujourd’hui',
      body:
        "Près d'un Néo-Zélandais sur cinq est maori. Le maori est une langue officielle depuis 1987, et le 6 février, jour du traité, est la fête nationale.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays vivent les Maoris ?', options: ['La Nouvelle-Zélande', 'L’Australie', 'Hawaï', 'Le Japon'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'D’où viennent les ancêtres des Maoris ?', options: ['De Polynésie orientale', 'D’Europe', 'D’Afrique', 'D’Amérique du Sud'], answer: 0 },
    { id: 'date', type: 'mcq', prompt: 'Vers quand les premiers habitants arrivent-ils en Nouvelle-Zélande ?', options: ['Vers 1250-1300', 'Vers −50 000', 'Vers 1800', 'Vers l’an 0'], answer: 0 },
    { id: 'aotearoa', type: 'mcq', prompt: 'Comment les Maoris appellent-ils la Nouvelle-Zélande ?', options: ['Aotearoa', 'Hawaiki', 'Rapa Nui', 'Tonga'], answer: 0 },
    { id: 'moa', type: 'mcq', prompt: 'Qu’est-ce que le moa ?', options: ['Un immense oiseau disparu', 'Une pirogue', 'Un dieu', 'Un village fortifié'], answer: 0 },
    { id: 'iwi', type: 'mcq', prompt: 'Comment s’appelle une tribu maorie ?', options: ['Un iwi', 'Un clan écossais', 'Un ayllu', 'Un calpulli'], answer: 0 },
    { id: 'pa', type: 'mcq', prompt: 'Qu’est-ce qu’un pā ?', options: ['Un village fortifié', 'Un chef', 'Une danse', 'Une pierre'], answer: 0 },
    { id: 'moko', type: 'mcq', prompt: 'Comment s’appelle le tatouage du visage maori ?', options: ['Le moko', 'Le haka', 'Le tiki', 'Le tapu'], answer: 0 },
    { id: 'haka', type: 'tf', prompt: 'Le haka sert aussi à accueillir des invités ou à rendre hommage à un mort.', answer: true },
    { id: 'pounamu', type: 'mcq', prompt: 'Que fabrique-t-on avec le pounamu, la pierre verte ?', options: ['Des outils, des armes et des bijoux', 'Des maisons', 'Des pirogues', 'Des vêtements'], answer: 0 },
    { id: 'cook', type: 'mcq', prompt: 'Quel navigateur britannique fait le tour de la Nouvelle-Zélande en 1769 ?', options: ['James Cook', 'Abel Tasman', 'Magellan', 'Vasco de Gama'], answer: 0 },
    { id: 'mousquets', type: 'mcq', prompt: 'Quelle arme bouleverse les guerres entre tribus au début du XIXe siècle ?', options: ['Le mousquet', 'L’arc', 'Le canon', 'L’épée'], answer: 0 },
    { id: 'hongihika', type: 'mcq', prompt: 'Quel chef maori rencontre le roi George IV en 1820 ?', options: ['Hongi Hika', 'Kupe', 'Te Rauparaha', 'Tupaia'], answer: 0 },
    { id: 'waitangi', type: 'mcq', prompt: 'Quel traité est signé en 1840 entre des chefs maoris et la Couronne britannique ?', options: ['Le traité de Waitangi', 'Le traité de Versailles', 'Le traité de Paris', 'Le traité de Tordesillas'], answer: 0 },
    { id: 'versions', type: 'tf', prompt: 'Les versions anglaise et maorie du traité de Waitangi disent exactement la même chose.', answer: false, explanation: 'Elles diffèrent sur la souveraineté, ce qui est toujours discuté.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée en Nouvelle-Zélande', 'Passage d’Abel Tasman', 'Arrivée de James Cook', 'Traité de Waitangi'] },
  ],

  recap: [
    'Vers 1250-1300, des Polynésiens peuplent la Nouvelle-Zélande (Aotearoa)',
    'Chasse aux moas, tribus (iwi), villages fortifiés (pā)',
    'Moko, sculpture, haka ; puis guerres des mousquets après l’arrivée des Européens',
    '1840 : traité de Waitangi, toujours au cœur de la vie du pays',
  ],
}
