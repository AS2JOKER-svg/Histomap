/** Chapitre rédigé : Europe néolithique (≈ 6000 – 2200 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'revolution',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'La révolution néolithique',
      body:
        "L'agriculture et l'élevage naissent au Proche-Orient, dans le Croissant fertile, il y a plus de 11 000 ans. Ils arrivent en Grèce vers 6500 av. J.-C., puis gagnent peu à peu toute l'Europe. Les chasseurs-cueilleurs nomades laissent la place à des paysans sédentaires.",
      highlight: { value: '≈ 6500 av. J.-C.', label: "premiers paysans en Europe (Grèce)" },
    },
    {
      id: 'courants',
      tier: 1,
      type: 'dates',
      kicker: 'Expansion',
      title: "Deux routes pour l'agriculture",
      items: [
        { year: -6500, label: 'Premiers villages agricoles en Grèce' },
        { year: -5800, label: 'Courant cardial : les paysans longent les côtes de la Méditerranée' },
        { year: -5500, label: 'Courant danubien : la culture rubanée remonte le Danube' },
        { year: -5000, label: "L'agriculture atteint le Bassin parisien" },
      ],
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'Europe des premiers paysans",
      years: [-5000],
      caption: "Vers 5000 av. J.-C., les villages d'agriculteurs se sont installés dans une grande partie de l'Europe centrale et méditerranéenne.",
    },
    {
      id: 'village',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'La vie au village',
      body:
        "Les paysans cultivent le blé, l'orge et les lentilles, et élèvent moutons, chèvres, bœufs et porcs. Ils vivent dans de grandes maisons en bois et en terre. Pour créer des champs, ils défrichent la forêt avec des haches en pierre polie.",
    },
    {
      id: 'inventions',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Poterie, tissage, pierre polie',
      body:
        "Le Néolithique est aussi appelé « âge de la pierre polie ». Les hommes fabriquent des poteries pour conserver les grains, tissent le lin puis la laine et tressent des paniers. Plus tard, ils apprennent à travailler le cuivre.",
    },
    {
      id: 'carnac',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Croyances',
      value: '≈ 3 000',
      label: 'menhirs alignés à Carnac, en Bretagne',
      caption: "Menhirs, dolmens (tombes collectives) et cercles de pierres dressées : ces monuments en grosses pierres, les mégalithes, sont élevés à partir du Ve millénaire av. J.-C. Leur rôle exact reste en partie un mystère.",
    },
    {
      id: 'stonehenge',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Stonehenge',
      body:
        "En Angleterre, le site de Stonehenge est aménagé à partir de 3000 av. J.-C. environ ; les grands blocs sont dressés vers 2500 av. J.-C. Le monument est aligné sur le lever du soleil au solstice d'été : on y célébrait sans doute le cycle des saisons.",
    },
    {
      id: 'otzi',
      tier: 1,
      type: 'person',
      nom: 'Ötzi',
      role: "L'homme des glaces",
      dates: 'mort vers 3300 av. J.-C.',
      description: "Découvert en 1991 dans un glacier des Alpes, à la frontière entre l'Italie et l'Autriche, ce corps momifié par la glace portait ses vêtements, un arc et une hache en cuivre. Une pointe de flèche dans l'épaule montre qu'il a été tué.",
    },
    {
      id: 'violence',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Richesses et conflits',
      body:
        "Avec les champs, les troupeaux et les réserves de grain apparaissent la propriété et les inégalités. Certains villages s'entourent de fossés et de palissades. À Talheim, en Allemagne, on a retrouvé les squelettes de 34 personnes massacrées vers 5000 av. J.-C.",
    },

    // ── Niveau 2 ──
    {
      id: 'migrations',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: "Ce que révèle l'ADN",
      body:
        "L'étude de l'ADN ancien montre que l'agriculture ne s'est pas seulement diffusée comme une idée : des populations de paysans venues d'Anatolie (l'actuelle Turquie) se sont installées en Europe et se sont mêlées aux chasseurs-cueilleurs locaux.",
    },
    {
      id: 'varna',
      tier: 2,
      type: 'text',
      kicker: 'Découverte',
      title: "L'or de Varna",
      body:
        "Dans une nécropole de Varna, en Bulgarie, datée d'environ 4500 av. J.-C., certaines tombes contiennent des bijoux en or et des haches en cuivre, alors que d'autres sont presque vides. C'est l'un des plus anciens ensembles d'objets en or travaillé au monde, et la preuve d'une société déjà très inégalitaire.",
    },
    {
      id: 'lacustres',
      tier: 2,
      type: 'text',
      kicker: 'Territoire',
      title: 'Les villages au bord des lacs',
      body:
        "Autour des Alpes, des villages sont bâtis sur pilotis au bord des lacs. Grâce à l'humidité, le bois, les tissus et même des restes de repas se sont conservés. Ces sites palafittiques sont inscrits au patrimoine mondial de l'UNESCO.",
    },
    {
      id: 'roue',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: 'IVe millénaire',
      label: 'av. J.-C. : apparition de la roue',
      caption: "Les premiers chariots tirés par des bœufs apparaissent à peu près en même temps en Mésopotamie et en Europe de l'Est. Ils facilitent le transport des récoltes et des matériaux.",
    },
    {
      id: 'bronze',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: "Vers l'âge du bronze",
      body:
        "Après le cuivre, les artisans découvrent qu'en le mélangeant à l'étain, on obtient le bronze, plus dur. Vers 2200 av. J.-C., l'Europe de l'Ouest entre dans l'âge du bronze : le Néolithique s'achève.",
      highlight: { value: '≈ 2200 av. J.-C.', label: "début de l'âge du bronze en Europe de l'Ouest" },
    },
  ],

  quiz: [
    { id: 'origine', type: 'mcq', prompt: "D'où viennent l'agriculture et l'élevage pratiqués en Europe au Néolithique ?", options: ['Du Proche-Orient (Croissant fertile)', "D'Amérique", 'De Chine', "D'Afrique australe"], answer: 0 },
    { id: 'grece', type: 'mcq', prompt: 'Dans quelle région d’Europe apparaissent les premiers villages agricoles ?', options: ['En Grèce', 'En Bretagne', 'En Scandinavie', 'En Irlande'], answer: 0 },
    { id: 'sedentaire', type: 'tf', prompt: 'Au Néolithique, beaucoup d’hommes deviennent sédentaires : ils vivent dans des villages fixes.', answer: true },
    { id: 'pierre-polie', type: 'mcq', prompt: 'Comment appelle-t-on aussi le Néolithique ?', options: ["L'âge de la pierre polie", "L'âge de la pierre taillée", "L'âge du fer", "L'âge du bronze"], answer: 0 },
    { id: 'danube', type: 'mcq', prompt: 'Quel fleuve les premiers paysans remontent-ils pour gagner l’Europe centrale ?', options: ['Le Danube', 'Le Nil', 'La Tamise', 'Le Tibre'], answer: 0 },
    { id: 'cardial', type: 'mcq', prompt: 'Par quelle voie le courant cardial diffuse-t-il l’agriculture ?', options: ['Le long des côtes de la Méditerranée', 'À travers les steppes de Sibérie', 'Le long des côtes de la mer du Nord', 'Par le désert du Sahara'], answer: 0 },
    { id: 'poterie', type: 'mcq', prompt: 'À quoi servent surtout les poteries néolithiques ?', options: ['À conserver les grains et les aliments', 'À fondre le fer', 'À écrire des textes', 'À frapper la monnaie'], answer: 0 },
    { id: 'carnac', type: 'mcq', prompt: 'Dans quelle région se trouvent les alignements de menhirs de Carnac ?', options: ['En Bretagne', 'En Provence', 'En Alsace', 'En Corse'], answer: 0 },
    { id: 'dolmen', type: 'mcq', prompt: 'À quoi servaient la plupart des dolmens ?', options: ['De tombes collectives', 'De maisons', 'De greniers à blé', 'De fortifications'], answer: 0 },
    { id: 'stonehenge', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Stonehenge ?', options: ['Au Royaume-Uni', 'En France', 'En Allemagne', 'En Espagne'], answer: 0 },
    { id: 'solstice', type: 'tf', prompt: 'Stonehenge est aligné sur le lever du soleil au solstice d’été.', answer: true },
    { id: 'otzi', type: 'mcq', prompt: 'Où a-t-on retrouvé Ötzi en 1991 ?', options: ['Dans un glacier des Alpes', 'Dans une tourbière du Danemark', 'Dans une grotte des Pyrénées', 'Dans le désert égyptien'], answer: 0 },
    { id: 'otzi-mort', type: 'tf', prompt: 'Ötzi est mort de froid, sans aucune trace de violence.', answer: false, explanation: "Une pointe de flèche a été retrouvée dans son épaule : il a été tué." },
    { id: 'hache', type: 'mcq', prompt: 'En quel métal est la lame de la hache d’Ötzi ?', options: ['Le cuivre', 'Le fer', "L'or", "L'acier"], answer: 0 },
    { id: 'inegalites', type: 'tf', prompt: 'L’accumulation de réserves (grain, bétail) favorise l’apparition d’inégalités entre les hommes.', answer: true },
    { id: 'anatolie', type: 'mcq', prompt: 'D’après l’ADN ancien, d’où venaient de nombreux premiers paysans d’Europe ?', options: ["D'Anatolie (actuelle Turquie)", "D'Égypte", "D'Inde", "D'Islande"], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Premiers villages agricoles en Grèce', 'Massacre de Talheim', 'Mort d’Ötzi', 'Début de l’âge du bronze en Europe de l’Ouest'] },
    { id: 'bronze', type: 'mcq', prompt: 'Le bronze est un mélange de cuivre et de…', options: ["Étain", 'Fer', 'Plomb', 'Argent'], answer: 0 },
  ],

  recap: [
    "≈ 6500 av. J.-C. : l'agriculture venue du Proche-Orient arrive en Grèce",
    'Paysans sédentaires : champs, élevage, poterie, pierre polie',
    'Mégalithes : menhirs de Carnac, dolmens, Stonehenge',
    '≈ 2200 av. J.-C. : le bronze met fin au Néolithique',
  ],
}
