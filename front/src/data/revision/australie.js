/** Chapitre rédigé : Australie (1788 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'premiere-flotte',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La Première Flotte',
      body:
        "En 1788, onze navires britanniques débarquent à Sydney avec des centaines de forçats : c'est le début d'une colonie pénitentiaire, sur une terre habitée depuis au moins 50 000 ans par les Aborigènes.",
      highlight: { value: '1788', label: 'arrivée de la Première Flotte' },
    },
    {
      id: 'frontiere',
      tier: 1,
      type: 'war',
      nom: 'Guerres de la frontière australienne',
      annee: 1788,
      adversaires: ['Peuples aborigènes'],
      allies: ['Colons britanniques', 'Police coloniale'],
      vainqueur: 'Colons britanniques',
      consequences:
        "Raids, massacres et représailles accompagnent l'avancée des colons pendant plus d'un siècle. Avec les épidémies, ils font chuter fortement la population aborigène, qui perd la plupart de ses terres.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Des colonies à la fédération',
      years: [1880, 1960],
      caption: 'Comparez : en 1880, plusieurs colonies britanniques ; à partir de 1901, une seule fédération, le Commonwealth d’Australie.',
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'La ruée vers l’or',
      body:
        "En 1851, de l'or est découvert dans le sud-est. Des centaines de milliers d'immigrants arrivent ; la laine des moutons et l'or enrichissent les colonies.",
    },
    {
      id: 'federation',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La fédération de 1901',
      body:
        "En 1901, les six colonies s'unissent dans le Commonwealth d'Australie. Le nouveau pays adopte la politique de l'« Australie blanche », qui limite l'immigration non européenne jusqu'en 1973.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Australie en dates',
      items: [
        { year: 1788, label: 'Première Flotte' },
        { year: 1851, label: 'Ruée vers l’or' },
        { year: 1901, label: 'Fédération' },
        { year: 1915, label: 'Gallipoli' },
        { year: 1967, label: 'Référendum sur les Aborigènes' },
        { year: 2008, label: 'Excuses aux générations volées' },
      ],
    },
    {
      id: 'gallipoli',
      tier: 1,
      type: 'war',
      nom: 'Bataille des Dardanelles',
      annee: 1915,
      adversaires: ['Empire ottoman'],
      allies: ['Australie et Nouvelle-Zélande (ANZAC)', 'Royaume-Uni', 'France'],
      vainqueur: 'Empire ottoman',
      consequences:
        "Le débarquement du 25 avril 1915 à Gallipoli échoue. Ce jour, l'ANZAC Day, est devenu une grande journée de mémoire nationale.",
    },
    {
      id: 'generations-volees',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les générations volées',
      body:
        "Pendant des décennies, des dizaines de milliers d'enfants aborigènes sont retirés à leurs familles pour être assimilés. En 2008, le Premier ministre présente des excuses officielles.",
    },
    {
      id: 'droits',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les droits des Aborigènes',
      body:
        "En 1967, un référendum permet de compter les Aborigènes dans la population nationale. En 1992, la justice reconnaît qu'ils avaient des droits sur leurs terres avant 1788 (arrêt Mabo).",
    },

    // ── Niveau 2 ──
    {
      id: 'forcats',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les forçats',
      body:
        "Entre 1788 et 1868, environ 160 000 condamnés sont déportés de Grande-Bretagne et d'Irlande vers l'Australie, souvent pour de petits vols.",
    },
    {
      id: 'pacifique',
      tier: 2,
      type: 'text',
      kicker: 'Guerre',
      title: 'Face au Japon',
      body:
        "En 1942, l'aviation japonaise bombarde Darwin. Les soldats australiens arrêtent l'avancée japonaise en Nouvelle-Guinée, sur la piste de Kokoda.",
    },
    {
      id: 'vote',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des pionniers du vote',
      body:
        "L'Australie adopte le vote à bulletin secret dans les années 1850 et accorde le droit de vote aux femmes dès 1902. Mais la plupart des Aborigènes ne peuvent voter aux élections fédérales qu'à partir de 1962.",
    },
    {
      id: 'opera',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'L’opéra de Sydney',
      body:
        "Inauguré en 1973, avec ses toits en forme de voiles, l'opéra de Sydney est devenu le symbole du pays.",
    },
    {
      id: 'uluru',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Uluru',
      body:
        "Le grand rocher sacré d'Uluru a été rendu à ses propriétaires aborigènes, les Anangu, en 1985. Depuis 2019, il est interdit de l'escalader.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Australie ?', options: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], answer: 0 },
    { id: 'colonisateur', type: 'mcq', prompt: 'Quel pays colonise l’Australie à partir de 1788 ?', options: ['Le Royaume-Uni', 'Les Pays-Bas', 'La France', 'L’Espagne'], answer: 0 },
    { id: 'forcats', type: 'mcq', prompt: 'Qui sont les premiers colons arrivés en 1788 ?', options: ['Surtout des forçats et leurs gardiens', 'Des chercheurs d’or', 'Des missionnaires', 'Des marchands chinois'], answer: 0 },
    { id: 'sydney', type: 'mcq', prompt: 'Où débarque la Première Flotte ?', options: ['À Sydney', 'À Melbourne', 'À Perth', 'À Darwin'], answer: 0 },
    { id: 'aborigenes', type: 'mcq', prompt: 'Depuis combien de temps environ les Aborigènes vivent-ils en Australie ?', options: ['Au moins 50 000 ans', 'Environ 2 000 ans', 'Environ 500 ans', 'Environ 5 000 ans'], answer: 0 },
    { id: 'or', type: 'mcq', prompt: 'Quelle découverte de 1851 attire des centaines de milliers d’immigrants ?', options: ['L’or', 'Le pétrole', 'Le charbon', 'Le diamant'], answer: 0 },
    { id: 'federation', type: 'mcq', prompt: 'En quelle année les colonies forment-elles le Commonwealth d’Australie ?', options: ['1901', '1788', '1851', '1945'], answer: 0 },
    { id: 'australie-blanche', type: 'tf', prompt: 'La politique de l’« Australie blanche » limitait l’immigration non européenne.', answer: true },
    { id: 'gallipoli', type: 'mcq', prompt: 'Où les soldats de l’ANZAC débarquent-ils le 25 avril 1915 ?', options: ['À Gallipoli', 'En Normandie', 'À Pearl Harbor', 'À Dunkerque'], answer: 0 },
    { id: 'japon', type: 'mcq', prompt: 'Quel pays bombarde Darwin en 1942 ?', options: ['Le Japon', 'L’Allemagne', 'La Chine', 'L’Italie'], answer: 0 },
    { id: 'generations', type: 'mcq', prompt: 'Comment appelle-t-on les enfants aborigènes retirés à leurs familles ?', options: ['Les générations volées', 'Les forçats', 'Les ANZAC', 'Les pionniers'], answer: 0 },
    { id: 'excuses', type: 'mcq', prompt: 'En quelle année le gouvernement présente-t-il des excuses officielles aux générations volées ?', options: ['2008', '1967', '1901', '1992'], answer: 0 },
    { id: 'mabo', type: 'mcq', prompt: 'Que reconnaît l’arrêt Mabo en 1992 ?', options: ['Les droits des autochtones sur leurs terres', 'Le vote des femmes', 'L’indépendance de l’Australie', 'La fin de la déportation des forçats'], answer: 0 },
    { id: 'opera', type: 'mcq', prompt: 'Quel monument de Sydney a des toits en forme de voiles ?', options: ['L’opéra', 'La cathédrale', 'Le Parlement', 'Le pont du port'], answer: 0 },
    { id: 'uluru', type: 'mcq', prompt: 'Qu’est-ce qu’Uluru ?', options: ['Un grand rocher sacré des Aborigènes', 'Une ville minière', 'Un fleuve', 'Une île'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Première Flotte', 'Ruée vers l’or', 'Fédération', 'Gallipoli'] },
  ],

  recap: [
    '1788 : colonie pénitentiaire britannique à Sydney, sur la terre des Aborigènes',
    'Dépossession et violences contre les Aborigènes ; ruée vers l’or (1851)',
    '1901 : fédération et « Australie blanche » ; Gallipoli (1915), guerre contre le Japon',
    'Pays d’immigration multiculturel ; droits aborigènes (1967, 1992) et excuses de 2008',
  ],
}
