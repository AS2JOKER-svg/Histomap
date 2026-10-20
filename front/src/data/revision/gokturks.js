/** Chapitre rédigé : Empire turc des Göktürks (552 – 744). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les premiers « Turcs »',
      body:
        "En 552, Bumin, chef du clan Ashina, se révolte contre ses maîtres, les Ruanruan, et prend le titre de khagan. Son peuple se nomme « Türk » : c'est le premier empire à porter ce nom. On l'appelle aussi empire des Göktürks, les « Turcs célestes ».",
      highlight: { value: '552', label: 'Bumin devient khagan' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un empire immense',
      years: [600, 700],
      caption: 'Vers 600, l’empire est déjà divisé en deux : les Turcs de l’Est en Mongolie, ceux de l’Ouest en Asie centrale.',
    },
    {
      id: 'soie',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Les maîtres de la soie',
      body:
        "Les Turcs reçoivent de grandes quantités de soie de la Chine et veulent la revendre vers l'ouest. Comme la Perse refuse, ils envoient en 568 une ambassade, menée par le marchand sogdien Maniakh, jusqu'à Constantinople pour s'allier avec Byzance.",
    },
    {
      id: 'tengri',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le Ciel donne le pouvoir',
      body:
        "Les Turcs honorent Tengri, le Ciel, qui accorde le pouvoir au khagan, ainsi que la déesse Umay, protectrice des femmes et des enfants. Certains khagans soutiennent aussi le bouddhisme.",
    },
    {
      id: 'tang',
      tier: 1,
      type: 'war',
      nom: 'Campagne des Tang contre les Turcs de l’Est',
      annee: 629,
      adversaires: ['Dynastie Tang (Taizong)'],
      allies: ['Turcs de l’Est (khagan Illig)'],
      vainqueur: 'Dynastie Tang',
      consequences:
        "Le général chinois Li Jing surprend le camp du khagan Illig, capturé en 630. Pendant plus de cinquante ans, les Turcs de l'Est vivent sous la domination de la Chine.",
    },
    {
      id: 'renaissance',
      tier: 1,
      type: 'steps',
      kicker: 'Pouvoir',
      title: 'La renaissance turque',
      items: [
        { year: 682, label: 'Ilterish se révolte contre les Tang' },
        { year: 691, label: 'Qapaghan étend l’empire' },
        { year: 716, label: 'Bilge Khagan, conseillé par Tonyukuk' },
      ],
    },
    {
      id: 'orkhon',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les inscriptions de l’Orkhon',
      body:
        "En 732 et 735, de grandes stèles sont élevées en Mongolie pour le prince Kül Tegin et pour Bilge Khagan. Écrites en alphabet runique, elles racontent l'histoire des Turcs : ce sont les plus anciens textes longs connus en langue turque.",
      highlight: { value: '1893', label: 'déchiffrement par Vilhelm Thomsen' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Deux siècles d’empire',
      items: [
        { year: 552, label: 'Fondation par Bumin' },
        { year: 568, label: 'Ambassade turque à Constantinople' },
        { year: 630, label: 'Les Turcs de l’Est soumis par les Tang' },
        { year: 682, label: 'Second khaganat' },
        { year: 732, label: 'Stèle de Kül Tegin' },
        { year: 744, label: 'Victoire des Ouïghours' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Remplacés par les Ouïghours',
      body:
        "Après la mort de Bilge Khagan en 734, l'empire est déchiré par les querelles. En 744, une coalition menée par les Ouïghours renverse le dernier khagan. Mais le nom « turc » survit : il désigne aujourd'hui une grande famille de peuples et de langues.",
    },

    // ── Niveau 2 ──
    {
      id: 'tonyukuk',
      tier: 2,
      type: 'person',
      nom: 'Tonyukuk',
      role: 'Conseiller des khagans',
      dates: 'VIIe – VIIIe siècles',
      description:
        "Élevé en Chine, il conseille trois khagans. Il dissuade Bilge Khagan de bâtir des villes et des temples, pour que les Turcs restent mobiles et libres. Il fait graver le récit de sa vie sur deux stèles.",
    },
    {
      id: 'avertissement',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Méfiez-vous de la soie !',
      body:
        "Sur les stèles de l'Orkhon, le khagan met son peuple en garde : les paroles douces et les belles soieries de la Chine ont déjà attiré des Turcs, qui ont perdu leur liberté. Il les invite à rester dans leur forêt sacrée d'Ötüken.",
    },
    {
      id: 'byzance',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un Byzantin chez le khagan',
      body:
        "En 569, l'ambassadeur byzantin Zémarque se rend chez le khagan Istämi, dans les montagnes d'Asie centrale. Il raconte qu'il a dû passer entre deux feux pour être purifié avant d'être reçu sous une tente ornée de soie.",
    },
    {
      id: 'perse',
      tier: 2,
      type: 'war',
      nom: 'Première guerre perso-turque',
      annee: 588,
      adversaires: ['Empire sassanide (Bahram Chobin)'],
      allies: ['Turcs de l’Ouest'],
      vainqueur: 'Empire sassanide',
      consequences: "Le général perse Bahram Chobin bat une grande armée turque près d'Hérat, dans l'actuel Afghanistan.",
    },
    {
      id: 'fer',
      tier: 2,
      type: 'text',
      kicker: 'Origines',
      title: 'Des forgerons de l’Altaï',
      body:
        "Selon les historiens chinois, avant de fonder leur empire, les Ashina travaillaient le fer pour les Ruanruan dans les monts Altaï. Le fer leur donne des armes et des armures de qualité.",
    },
  ],

  quiz: [
    { id: 'nom', type: 'mcq', prompt: 'Que signifie « Göktürk » ?', options: ['Turcs célestes', 'Turcs de la mer', 'Turcs du désert', 'Turcs du fer'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’empire des Göktürks en 552 ?', options: ['Bumin', 'Attila', 'Gengis Khan', 'Bilge'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre porte le souverain turc ?', options: ['Khagan', 'Pharaon', 'Calife', 'Tsar'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le cœur de l’empire turc ?', options: ['La Mongolie', 'La Turquie', 'L’Inde', 'L’Égypte'], answer: 0 },
    { id: 'dieu', type: 'mcq', prompt: 'Quel dieu donne le pouvoir au khagan ?', options: ['Tengri, le Ciel', 'Zeus', 'Amon-Rê', 'Odin'], answer: 0 },
    { id: 'soie', type: 'mcq', prompt: 'Quelle marchandise les Turcs veulent-ils vendre vers l’ouest ?', options: ['La soie', 'Le pétrole', 'Le café', 'Le coton'], answer: 0 },
    { id: 'ambassade', type: 'mcq', prompt: 'Avec quel empire les Turcs s’allient-ils contre la Perse ?', options: ['L’Empire byzantin', 'L’Empire romain d’Occident', 'L’Empire inca', 'L’Empire du Mali'], answer: 0 },
    { id: 'sogdiens', type: 'mcq', prompt: 'Quels marchands servent d’intermédiaires et d’ambassadeurs aux Turcs ?', options: ['Les Sogdiens', 'Les Vikings', 'Les Phéniciens', 'Les Vénitiens'], answer: 0 },
    { id: 'tang', type: 'mcq', prompt: 'Quelle dynastie chinoise soumet les Turcs de l’Est en 630 ?', options: ['Les Tang', 'Les Han', 'Les Ming', 'Les Qing'], answer: 0 },
    { id: 'second', type: 'tf', prompt: 'Après la domination chinoise, un second empire turc renaît en 682.', answer: true },
    { id: 'orkhon', type: 'mcq', prompt: 'Que sont les inscriptions de l’Orkhon ?', options: ['Les plus anciens textes longs en langue turque', 'Des lois chinoises', 'Des poèmes perses', 'Des cartes de la route de la soie'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Avec quel type d’alphabet les stèles de l’Orkhon sont-elles écrites ?', options: ['Un alphabet runique', 'Des hiéroglyphes', 'L’alphabet latin', 'Le cunéiforme'], answer: 0 },
    { id: 'tonyukuk', type: 'mcq', prompt: 'Que conseille Tonyukuk à Bilge Khagan ?', options: ['Ne pas bâtir de villes ni de temples', 'Conquérir la Chine', 'Se convertir au christianisme', 'Construire une flotte'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Quel peuple renverse les Göktürks en 744 ?', options: ['Les Ouïghours', 'Les Mongols', 'Les Huns', 'Les Arabes'], answer: 0 },
    { id: 'division', type: 'tf', prompt: 'L’empire turc est resté uni pendant toute son histoire.', answer: false, explanation: 'Vers 600, il se divise en Turcs de l’Est et Turcs de l’Ouest.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bumin devient khagan', 'Ambassade turque à Constantinople', 'Soumission aux Tang', 'Inscriptions de l’Orkhon'] },
  ],

  recap: [
    '552 : Bumin fonde le premier empire « turc »',
    'Les Turcs contrôlent le commerce de la soie et s’allient à Byzance',
    'Soumis aux Tang (630-682), ils fondent un second khaganat',
    'Inscriptions de l’Orkhon (732-735) : premiers textes turcs ; chute en 744',
  ],
}
