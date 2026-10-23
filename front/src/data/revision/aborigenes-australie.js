/** Chapitre rédigé : Aborigènes d’Australie (il y a au moins 50 000 ans – 1788). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'arrivee',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une traversée il y a 50 000 ans',
      body:
        "Les ancêtres des Aborigènes arrivent en Australie il y a au moins 50 000 ans. Même quand le niveau des mers était plus bas, il fallait traverser la mer depuis l'Asie du Sud-Est : c'est l'une des plus anciennes traversées maritimes connues.",
      highlight: { value: '50 000 ans', label: 'au moins, de présence en Australie' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un continent, des centaines de peuples',
      years: [-3000, 1783],
      caption: 'Comparez : vers 1783, les cartes montrent les territoires de centaines de peuples aborigènes.',
    },
    {
      id: 'peuples',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Plus de 250 langues',
      body:
        "En 1788, l'Australie compte des centaines de peuples et plus de 250 langues. Chaque peuple est attaché à son territoire, son « Country », dont il prend soin et dont il connaît chaque détail.",
    },
    {
      id: 'reve',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le Rêve',
      body:
        "Le Rêve (Dreaming) raconte comment des êtres ancestraux ont façonné les paysages, les animaux et les lois. Ces récits se transmettent par les chants, les danses et les peintures, et relient chaque peuple à ses lieux sacrés, comme Uluru.",
    },
    {
      id: 'feu',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Prendre soin de la terre',
      body:
        "Les Aborigènes brûlent régulièrement la végétation, de façon contrôlée, pour favoriser le gibier et limiter les grands incendies. Dans le sud-est, le peuple gunditjmara construit il y a environ 6 600 ans des canaux et des pièges à anguilles en pierre.",
    },
    {
      id: 'outils',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Boomerang et propulseur',
      body:
        "Le boomerang sert à la chasse ; certains reviennent, d'autres non. Le propulseur (woomera) permet de lancer une sagaie plus loin et plus fort. Des haches de pierre polie australiennes sont parmi les plus anciennes du monde.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Australie aborigène en dates',
      items: [
        { year: -50000, label: 'Arrivée en Australie (au moins)' },
        { year: -40000, label: 'Sépultures du lac Mungo' },
        { year: -10000, label: 'La Tasmanie devient une île' },
        { year: 1770, label: 'James Cook longe la côte est' },
        { year: 1788, label: 'Arrivée de la Première Flotte' },
      ],
    },
    {
      id: 'colonisation',
      tier: 1,
      type: 'war',
      nom: 'Guerres de la frontière australienne',
      annee: 1788,
      adversaires: ['Colons et soldats britanniques'],
      allies: ['Peuples aborigènes'],
      vainqueur: 'Colons britanniques',
      consequences:
        "Après 1788, les peuples aborigènes résistent pendant plus d'un siècle à l'avancée des colons, qui prennent leurs terres. Les violences et surtout les épidémies, comme la variole, font chuter fortement leur population.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des cultures toujours vivantes',
      body:
        "Les cultures aborigènes sont parmi les plus anciennes du monde encore vivantes. En 2021, environ 3 % des Australiens se déclaraient aborigènes ou insulaires du détroit de Torres.",
    },

    // ── Niveau 2 ──
    {
      id: 'songlines',
      tier: 2,
      type: 'text',
      kicker: 'Échanges',
      title: 'Les pistes des chants',
      body:
        "Des itinéraires chantés, les songlines, traversent le continent. Le long de ces routes, les peuples échangent de l'ocre, des pierres à hache, des coquillages et des récits.",
    },
    {
      id: 'makassar',
      tier: 2,
      type: 'text',
      kicker: 'Échanges',
      title: 'Les pêcheurs de Makassar',
      body:
        "Au XVIIIe siècle, des pêcheurs venus de Makassar, en Indonésie, viennent chaque année sur les côtes du nord pêcher des holothuries et commercer avec les peuples locaux.",
    },
    {
      id: 'bennelong',
      tier: 2,
      type: 'person',
      nom: 'Bennelong',
      role: 'Intermédiaire wangal',
      dates: 'vers 1764 – 1813',
      description: "Homme du peuple wangal, il devient l'intermédiaire entre les siens et le premier gouverneur britannique. Il se rend en Angleterre en 1792. L'Opéra de Sydney se dresse sur la pointe qui porte son nom.",
    },
    {
      id: 'tasmanie',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Les Aborigènes de Tasmanie',
      body:
        "Il y a environ 10 000 ans, la montée des mers fait de la Tasmanie une île. Ses habitants vivent alors séparés du continent pendant des milliers d'années, jusqu'à l'arrivée des Européens.",
    },
    {
      id: 'mabo',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'L’affaire Mabo',
      body:
        "En 1992, la Haute Cour d'Australie reconnaît que le pays n'était pas une « terre sans maître » en 1788. Cette décision ouvre la voie à la reconnaissance de droits sur les terres.",
    },
  ],

  quiz: [
    { id: 'anciennete', type: 'mcq', prompt: 'Depuis combien de temps au moins les Aborigènes vivent-ils en Australie ?', options: ['50 000 ans', '500 ans', '5 000 ans', '2 000 ans'], answer: 0 },
    { id: 'mer', type: 'tf', prompt: 'Pour atteindre l’Australie, les premiers habitants ont dû traverser la mer.', answer: true },
    { id: 'langues', type: 'mcq', prompt: 'Combien de langues parle-t-on en Australie en 1788 ?', options: ['Plus de 250', 'Une seule', 'Dix', 'Deux'], answer: 0 },
    { id: 'country', type: 'mcq', prompt: 'Comment appelle-t-on le territoire auquel chaque peuple est attaché ?', options: ['Le « Country »', 'Le « Kingdom »', 'La « Colony »', 'Le « State »'], answer: 0 },
    { id: 'reve', type: 'mcq', prompt: 'Comment s’appellent les récits de la création du monde par les êtres ancestraux ?', options: ['Le Rêve (Dreaming)', 'La Bible', 'Le Coran', 'Les Védas'], answer: 0 },
    { id: 'uluru', type: 'mcq', prompt: 'Quel grand rocher est un lieu sacré pour les Anangu ?', options: ['Uluru', 'L’Everest', 'Le Kilimandjaro', 'Le mont Fuji'], answer: 0 },
    { id: 'feu', type: 'mcq', prompt: 'Pourquoi les Aborigènes brûlent-ils la végétation de façon contrôlée ?', options: ['Pour favoriser le gibier et limiter les grands incendies', 'Pour se chauffer en hiver', 'Pour faire des signaux', 'Pour construire des routes'], answer: 0 },
    { id: 'budjbim', type: 'mcq', prompt: 'Que construisent les Gunditjmara à Budj Bim ?', options: ['Des pièges à anguilles', 'Des pyramides', 'Des temples', 'Des ports'], answer: 0 },
    { id: 'boomerang', type: 'tf', prompt: 'Tous les boomerangs reviennent vers celui qui les lance.', answer: false, explanation: 'Les boomerangs de chasse, lourds, ne reviennent pas.' },
    { id: 'woomera', type: 'mcq', prompt: 'À quoi sert le propulseur (woomera) ?', options: ['À lancer une sagaie plus loin', 'À allumer le feu', 'À pêcher', 'À faire de la musique'], answer: 0 },
    { id: 'mungo', type: 'mcq', prompt: 'Où a-t-on trouvé les plus anciennes sépultures d’Australie ?', options: ['Au lac Mungo', 'À Sydney', 'En Tasmanie', 'À Uluru'], answer: 0 },
    { id: 'cook', type: 'mcq', prompt: 'Quel navigateur revendique la côte est pour la Grande-Bretagne en 1770 ?', options: ['James Cook', 'Christophe Colomb', 'Magellan', 'Abel Tasman'], answer: 0 },
    { id: 'flotte', type: 'mcq', prompt: 'Où s’installent les colons britanniques en 1788 ?', options: ['À Sydney', 'À Melbourne', 'À Perth', 'À Darwin'], answer: 0 },
    { id: 'epidemies', type: 'mcq', prompt: 'Quelle cause fait surtout chuter la population aborigène après 1788 ?', options: ['Les épidémies, comme la variole', 'Une famine due à la sécheresse', 'Un tremblement de terre', 'Une éruption volcanique'], answer: 0 },
    { id: 'mabo', type: 'mcq', prompt: 'Que reconnaît la Haute Cour d’Australie dans l’affaire Mabo (1992) ?', options: ['Le pays n’était pas une « terre sans maître » en 1788', 'L’indépendance de l’Australie', 'La fin de l’esclavage', 'Le droit de vote des femmes'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée en Australie (au moins)', 'Sépultures du lac Mungo', 'La Tasmanie devient une île', 'Arrivée de la Première Flotte'] },
  ],

  recap: [
    'Des ancêtres arrivés par la mer il y a au moins 50 000 ans',
    'Des centaines de peuples, plus de 250 langues, attachés à leur « Country »',
    'Le Rêve, les pistes des chants, le feu maîtrisé, Budj Bim',
    '1788 : début de la colonisation ; des cultures toujours vivantes',
  ],
}
