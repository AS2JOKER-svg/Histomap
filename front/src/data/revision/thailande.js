/** Chapitre rédigé : Thaïlande (Siam) (1782 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'bangkok',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un royaume refondé',
      body:
        "En 1767, les Birmans détruisent Ayutthaya, la capitale du Siam. Le royaume se reconstruit : en 1782, Rama Ier fonde la dynastie Chakri et fait de Bangkok sa capitale.",
      highlight: { value: '1782', label: 'Bangkok capitale' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Siam rétrécit',
      years: [1800, 1914],
      caption: 'Comparez : pour garder son indépendance, le Siam cède des territoires à la France (Laos, Cambodge occidental) et au Royaume-Uni (sultanats malais).',
    },
    {
      id: 'chulalongkorn',
      tier: 1,
      type: 'person',
      nom: 'Chulalongkorn (Rama V)',
      role: 'Roi de Siam',
      dates: 'règne 1868 – 1910',
      description:
        "Grand réformateur, il abolit l'esclavage, crée des écoles, la poste et des chemins de fer, et voyage en Europe. Il préserve l'indépendance du pays.",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Jamais colonisé',
      body:
        "Entre l'Indochine française et la Birmanie britannique, le Siam joue les Européens les uns contre les autres et cède des territoires. Il reste le seul pays d'Asie du Sud-Est à n'avoir jamais été colonisé.",
    },
    {
      id: 'crise-1893',
      tier: 1,
      type: 'war',
      nom: 'Crise franco-siamoise de 1893',
      annee: 1893,
      adversaires: ['France'],
      allies: ['Siam'],
      vainqueur: 'France',
      consequences:
        "Des canonnières françaises remontent jusqu'à Bangkok ; le Siam doit céder à la France les territoires à l'est du Mékong, l'essentiel du Laos actuel.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Thaïlande en dates',
      items: [
        { year: 1782, label: 'Bangkok capitale' },
        { year: 1868, label: 'Début du règne de Chulalongkorn' },
        { year: 1893, label: 'Crise franco-siamoise' },
        { year: 1932, label: 'Fin de la monarchie absolue' },
        { year: 1939, label: 'Le Siam devient la Thaïlande' },
      ],
    },
    {
      id: '1932',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La révolution de 1932',
      body:
        "En 1932, des officiers et des fonctionnaires mettent fin à la monarchie absolue : le roi doit accepter une constitution. En 1939, le Siam prend le nom de Thaïlande.",
    },
    {
      id: 'coups',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les militaires au pouvoir',
      body:
        "Allié du Japon pendant la Seconde Guerre mondiale, puis des États-Unis, le pays connaît une douzaine de coups d'État militaires réussis, dont les derniers en 2006 et en 2014.",
    },
    {
      id: 'bhumibol',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le roi Bhumibol',
      body:
        "Le roi Bhumibol Adulyadej (Rama IX) règne de 1946 à 2016 : 70 ans, le plus long règne de l'histoire du pays. La monarchie est très respectée, et la critique du roi est sévèrement punie.",
    },

    // ── Niveau 2 ──
    {
      id: 'mongkut',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Le roi astronome',
      body:
        "Le roi Mongkut (Rama IV), passionné d'astronomie, prédit avec précision l'éclipse totale de Soleil de 1868. Il meurt peu après du paludisme, contracté lors de l'expédition pour l'observer.",
    },
    {
      id: 'bouddhisme',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un pays bouddhiste',
      body:
        "La grande majorité des Thaïlandais sont bouddhistes theravada. Beaucoup de jeunes hommes passent traditionnellement un temps comme moines.",
    },
    {
      id: 'asean',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’ASEAN',
      body:
        "En 1967, l'Association des nations de l'Asie du Sud-Est (ASEAN) est fondée à Bangkok par cinq pays, dont la Thaïlande.",
    },
    {
      id: 'songkran',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Songkran',
      body:
        "Lors de Songkran, le Nouvel An thaï, en avril, les habitants s'aspergent d'eau dans les rues.",
    },
    {
      id: 'krung-thep',
      tier: 2,
      type: 'text',
      kicker: 'Mots',
      title: 'La cité des anges',
      body:
        "Les Thaïlandais appellent leur capitale Krung Thep, « la cité des anges » : c'est le début de l'un des noms de ville les plus longs du monde.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Thaïlande ?', options: ['Bangkok', 'Ayutthaya', 'Chiang Mai', 'Vientiane'], answer: 0 },
    { id: 'ancien-nom', type: 'mcq', prompt: 'Quel était l’ancien nom de la Thaïlande ?', options: ['Le Siam', 'L’Annam', 'La Birmanie', 'Le Champa'], answer: 0 },
    { id: 'ayutthaya', type: 'mcq', prompt: 'Qui détruit Ayutthaya en 1767 ?', options: ['Les Birmans', 'Les Français', 'Les Khmers', 'Les Chinois'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'Quelle dynastie règne sur la Thaïlande depuis 1782 ?', options: ['La dynastie Chakri', 'La dynastie Nguyễn', 'La dynastie Ming', 'La dynastie Konbaung'], answer: 0 },
    { id: 'colonise', type: 'tf', prompt: 'Le Siam est le seul pays d’Asie du Sud-Est à n’avoir jamais été colonisé.', answer: true },
    { id: 'chulalongkorn', type: 'mcq', prompt: 'Quel roi réformateur abolit l’esclavage au Siam ?', options: ['Chulalongkorn', 'Rama Ier', 'Bhumibol', 'Taksin'], answer: 0 },
    { id: '1893', type: 'mcq', prompt: 'À quel pays le Siam cède-t-il le Laos en 1893 ?', options: ['La France', 'Le Royaume-Uni', 'La Chine', 'Les Pays-Bas'], answer: 0 },
    { id: '1932', type: 'mcq', prompt: 'Que se passe-t-il en 1932 ?', options: ['La fin de la monarchie absolue', 'La fondation de Bangkok', 'L’invasion japonaise', 'La création de l’ASEAN'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'En quelle année le Siam prend-il le nom de Thaïlande ?', options: ['1939', '1782', '1932', '1967'], answer: 0 },
    { id: 'japon', type: 'mcq', prompt: 'De quel pays la Thaïlande est-elle l’alliée pendant la Seconde Guerre mondiale ?', options: ['Le Japon', 'La France', 'Le Royaume-Uni', 'La Chine'], answer: 0 },
    { id: 'coups', type: 'tf', prompt: 'La Thaïlande a connu de nombreux coups d’État militaires depuis 1932.', answer: true },
    { id: 'bhumibol', type: 'mcq', prompt: 'Quel roi règne de 1946 à 2016 ?', options: ['Bhumibol Adulyadej', 'Chulalongkorn', 'Mongkut', 'Rama Ier'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion de la grande majorité des Thaïlandais ?', options: ['Le bouddhisme', 'L’islam', 'L’hindouisme', 'Le christianisme'], answer: 0 },
    { id: 'asean', type: 'mcq', prompt: 'Quelle organisation est fondée à Bangkok en 1967 ?', options: ['L’ASEAN', 'L’ONU', 'L’OPEP', 'L’OTAN'], answer: 0 },
    { id: 'songkran', type: 'mcq', prompt: 'Que font les Thaïlandais pendant Songkran, le Nouvel An ?', options: ['Ils s’aspergent d’eau', 'Ils allument des feux de joie', 'Ils jeûnent', 'Ils lancent des oranges'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bangkok capitale', 'Début du règne de Chulalongkorn', 'Fin de la monarchie absolue', 'Le Siam devient la Thaïlande'] },
  ],

  recap: [
    '1782 : Rama Ier fonde la dynastie Chakri et la capitale Bangkok',
    'Mongkut et Chulalongkorn modernisent le Siam, jamais colonisé',
    '1932 : fin de la monarchie absolue ; 1939 : le Siam devient la Thaïlande',
    'Coups d’État militaires, long règne de Bhumibol (1946-2016), ASEAN',
  ],
}
