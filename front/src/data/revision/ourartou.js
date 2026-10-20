/** Chapitre rédigé : Ourartou (vers 860 – 590 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'royaume',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le royaume du lac de Van',
      body:
        "Au IXe siècle av. J.-C., les peuples des montagnes autour du lac de Van, dans l'est de la Turquie actuelle, s'unissent en un royaume : l'Ourartou. Il devient le grand rival de l'Assyrie, la puissance qui domine alors le Proche-Orient.",
      highlight: { value: '≈ 270 ans', label: 'd’existence' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Ourartou vers 700 av. J.-C.',
      years: [-700],
      caption: 'Le royaume s’étend sur les hauts plateaux entre le lac de Van, le lac Sevan et le lac d’Ourmia.',
    },
    {
      id: 'forteresses',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un pays de forteresses',
      body:
        "Les rois ourartéens couvrent le pays de citadelles perchées sur des éperons rocheux. On y stocke le grain et le vin dans d'immenses jarres enterrées. La capitale, Tushpa, domine le lac de Van.",
    },
    {
      id: 'canal',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le canal de Menua',
      body:
        "Vers 800 av. J.-C., le roi Menua fait creuser un canal long de plusieurs dizaines de kilomètres pour amener l'eau des montagnes jusqu'à la région de Van. Près de 2 800 ans plus tard, il irrigue encore des jardins.",
    },
    {
      id: 'argishti',
      tier: 1,
      type: 'person',
      nom: 'Argishti Ier',
      role: 'Roi d’Ourartou',
      dates: 'règne vers 786 – 764 av. J.-C.',
      description:
        "Grand conquérant, il étend le royaume jusqu'au lac Sevan. En 782 av. J.-C., il fonde la forteresse d'Erebuni, où il installe des milliers de prisonniers de guerre : c'est l'ancêtre d'Erevan, capitale de l'Arménie.",
    },
    {
      id: 'erebuni',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: '782 av. J.-C.',
      label: 'fondation d’Erebuni, l’ancienne Erevan',
      caption: "Une inscription retrouvée sur place en 1950 raconte cette fondation. Erevan a fêté ses 2 800 ans en 2018.",
    },
    {
      id: 'sargon',
      tier: 1,
      type: 'war',
      nom: 'Huitième campagne de Sargon II',
      annee: -714,
      adversaires: ['Assyrie (Sargon II)'],
      allies: ['Ourartou (Rusa Ier)'],
      vainqueur: 'Assyrie',
      consequences:
        "Le roi d'Assyrie bat Rusa Ier et pille le grand temple du dieu Haldi à Musasir. Il raconte sa victoire dans une longue lettre au dieu Assur, qui énumère des tonnes d'or, d'argent et de bronze.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Ourartou en dates',
      items: [
        { year: -858, label: 'Aramé, premier roi connu' },
        { year: -800, label: 'Canal de Menua' },
        { year: -782, label: 'Fondation d’Erebuni' },
        { year: -714, label: 'Campagne de Sargon II' },
        { year: -590, label: 'Fin du royaume' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un royaume disparu',
      body:
        "Affaibli par l'Assyrie et par les invasions des Cimmériens, l'Ourartou disparaît vers 590 av. J.-C., sans doute conquis par les Mèdes. Les Arméniens s'installent ensuite sur ses terres. Le royaume est oublié jusqu'à la redécouverte de ses inscriptions au XIXe siècle.",
    },

    // ── Niveau 2 ──
    {
      id: 'haldi',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le dieu Haldi',
      body:
        "Le grand dieu de l'Ourartou est Haldi, dieu de la guerre et protecteur du roi. Il forme une triade avec Teisheba, dieu de l'orage, et Shivini, dieu du soleil. Les rois lui attribuent toutes leurs victoires dans leurs inscriptions.",
    },
    {
      id: 'ecriture',
      tier: 2,
      type: 'text',
      kicker: 'Langue',
      title: 'Une écriture empruntée',
      body:
        "Les Ourartéens parlent une langue proche du hourrite, mais ils l'écrivent avec le cunéiforme emprunté à leurs ennemis assyriens. Ils gravent de longues inscriptions sur les rochers et les murs de leurs forteresses.",
    },
    {
      id: 'bronze',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Des maîtres du bronze',
      body:
        "Les artisans ourartéens fabriquent des boucliers, des casques, des ceintures et des chaudrons de bronze décorés d'animaux et de scènes de chasse. Ils exportent leurs œuvres jusqu'en Grèce et en Italie.",
    },
    {
      id: 'ararat',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Ourartou et Ararat',
      body:
        "Le nom d'Ararat, que la Bible donne aux montagnes où s'échoue l'arche de Noé, viendrait du nom de l'Ourartou. Le mont Ararat domine aujourd'hui la frontière entre la Turquie et l'Arménie.",
    },
    {
      id: 'sarduri',
      tier: 2,
      type: 'person',
      nom: 'Sarduri II',
      role: 'Roi d’Ourartou',
      dates: 'règne vers 764 – 735 av. J.-C.',
      description:
        "Il porte l'Ourartou à son apogée et dispute la Syrie à l'Assyrie. En 743 av. J.-C., il est battu par le roi assyrien Teglath-Phalasar III, qui assiège ensuite Tushpa.",
    },
  ],

  quiz: [
    { id: 'lac', type: 'mcq', prompt: 'Autour de quel lac se trouve le cœur de l’Ourartou ?', options: ['Le lac de Van', 'Le lac Léman', 'Le lac Victoria', 'Le lac Baïkal'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout l’Ourartou ?', options: ['La Turquie', 'L’Égypte', 'La Grèce', 'L’Inde'], answer: 0 },
    { id: 'rival', type: 'mcq', prompt: 'Quel empire est le grand rival de l’Ourartou ?', options: ['L’Assyrie', 'Rome', 'La Chine', 'Carthage'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Ourartou ?', options: ['Tushpa', 'Babylone', 'Ninive', 'Persépolis'], answer: 0 },
    { id: 'canal', type: 'mcq', prompt: 'Quel roi fait creuser un canal encore utilisé aujourd’hui ?', options: ['Menua', 'Sargon II', 'Argishti Ier', 'Rusa Ier'], answer: 0 },
    { id: 'erebuni', type: 'mcq', prompt: 'Quelle capitale actuelle est l’héritière d’Erebuni ?', options: ['Erevan', 'Téhéran', 'Bagdad', 'Ankara'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Quel roi fonde Erebuni en 782 av. J.-C. ?', options: ['Argishti Ier', 'Menua', 'Tigrane', 'Sargon II'], answer: 0 },
    { id: 'haldi', type: 'mcq', prompt: 'Quel est le grand dieu de l’Ourartou ?', options: ['Haldi', 'Zeus', 'Amon', 'Odin'], answer: 0 },
    { id: 'ecriture', type: 'mcq', prompt: 'Quelle écriture les Ourartéens utilisent-ils ?', options: ['Le cunéiforme', 'Les hiéroglyphes', 'L’alphabet latin', 'Les runes'], answer: 0 },
    { id: 'sargon', type: 'mcq', prompt: 'Quel roi d’Assyrie ravage l’Ourartou en 714 av. J.-C. ?', options: ['Sargon II', 'Nabuchodonosor', 'Hammurabi', 'Cyrus'], answer: 0 },
    { id: 'musasir', type: 'tf', prompt: 'En 714 av. J.-C., les Assyriens pillent le temple de Musasir.', answer: true },
    { id: 'bronze', type: 'mcq', prompt: 'Dans quel métal les artisans ourartéens excellent-ils ?', options: ['Le bronze', 'Le plastique', 'L’aluminium', 'Le verre'], answer: 0 },
    { id: 'ararat', type: 'mcq', prompt: 'Quel nom biblique viendrait de « Ourartou » ?', options: ['Ararat', 'Eden', 'Canaan', 'Babel'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Vers quand l’Ourartou disparaît-il ?', options: ['Vers 590 av. J.-C.', 'Vers 1500 av. J.-C.', 'Vers 100 apr. J.-C.', 'Vers 1000 apr. J.-C.'], answer: 0 },
    { id: 'oubli', type: 'tf', prompt: 'L’Ourartou a été redécouvert au XIXe siècle grâce à ses inscriptions.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Aramé, premier roi connu', 'Canal de Menua', 'Fondation d’Erebuni', 'Campagne de Sargon II'] },
  ],

  recap: [
    'Royaume des montagnes autour du lac de Van, rival de l’Assyrie',
    'Forteresses, canaux (canal de Menua) et maîtrise du bronze',
    '782 av. J.-C. : Argishti Ier fonde Erebuni, l’ancienne Erevan',
    '714 : campagne de Sargon II ; disparition vers 590 av. J.-C.',
  ],
}
