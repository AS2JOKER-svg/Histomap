/** Chapitre rédigé : Celtes et Gaulois (≈ 800 – 50 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Des peuples, pas un empire',
      body:
        "Les Celtes ne forment ni un État ni un empire : ce sont des dizaines de peuples qui parlent des langues proches et partagent une même culture. Les archéologues distinguent deux grandes périodes : Hallstatt (à partir de 800 av. J.-C. environ) puis La Tène (à partir de 450 av. J.-C. environ).",
      highlight: { value: '≈ 800 av. J.-C.', label: 'début de la culture de Hallstatt' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "Les Celtes en Europe",
      years: [-500, -200, -100],
      caption: "De l'Atlantique au Danube, les peuples celtes occupent une grande partie de l'Europe, avant d'être soumis par Rome au Ier siècle av. J.-C.",
    },
    {
      id: 'trois-parties',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Société',
      value: '3',
      label: 'parties : « Toute la Gaule est divisée en trois parties »',
      caption: "C'est la première phrase de La Guerre des Gaules de Jules César : Belges au nord, Aquitains au sud-ouest et Celtes (que les Romains appellent Gaulois) au centre.",
    },
    {
      id: 'brennus',
      tier: 1,
      type: 'person',
      nom: 'Brennus',
      role: 'Chef des Gaulois Sénons',
      dates: 'vers 390 av. J.-C.',
      description: "Selon la tradition romaine, il bat les Romains sur l'Allia puis prend et pille Rome. Pendant la pesée de la rançon en or, il jette son épée dans la balance en criant « Vae victis ! » (« Malheur aux vaincus ! »).",
    },
    {
      id: 'druides',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les druides',
      body:
        "Les druides sont à la fois prêtres, juges et savants. Selon César, leur enseignement se transmet uniquement à l'oral et peut durer vingt ans. Les Gaulois honorent de nombreux dieux, comme Taranis, Ésus ou Toutatis, et vénèrent les forêts et les sources.",
    },
    {
      id: 'oppida',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les oppida, villes fortifiées',
      body:
        "À partir du IIe siècle av. J.-C., les Gaulois bâtissent des oppida : de grandes villes perchées, protégées par des remparts de bois, de terre et de pierre. Bibracte, capitale des Éduens, et Gergovie, chez les Arvernes, en sont des exemples célèbres.",
    },
    {
      id: 'guerre-gaules',
      tier: 1,
      type: 'dates',
      kicker: 'Guerre',
      title: 'La guerre des Gaules',
      items: [
        { year: -58, label: 'Jules César entre en Gaule' },
        { year: -52, label: 'Soulèvement général mené par Vercingétorix' },
        { year: -52, label: 'Victoire gauloise à Gergovie, puis défaite à Alésia' },
        { year: -51, label: 'Les dernières résistances sont écrasées' },
      ],
    },
    {
      id: 'alesia',
      tier: 1,
      type: 'war',
      nom: "Siège d'Alésia",
      annee: -52,
      adversaires: ['Rome (Jules César)'],
      allies: ['Coalition gauloise de Vercingétorix', 'Armée de secours gauloise'],
      vainqueur: 'Rome',
      consequences: "César encercle la ville de deux lignes de fortifications. L'armée de secours échoue et Vercingétorix se rend. La Gaule devient romaine.",
    },
    {
      id: 'vercingetorix',
      tier: 1,
      type: 'person',
      nom: 'Vercingétorix',
      role: 'Chef des Arvernes',
      dates: 'mort en 46 av. J.-C.',
      description: "En 52 av. J.-C., il unit de nombreux peuples gaulois contre César et le bat à Gergovie. Assiégé à Alésia, il se rend. Emmené à Rome, il est exhibé lors du triomphe de César puis exécuté.",
    },

    // ── Niveau 2 ──
    {
      id: 'galates',
      tier: 2,
      type: 'text',
      kicker: 'Expansion',
      title: "Jusqu'en Grèce et en Asie Mineure",
      body:
        "En 279 av. J.-C., des bandes celtes envahissent la Grèce et attaquent le sanctuaire de Delphes. Une partie d'entre elles passe ensuite en Asie Mineure (l'actuelle Turquie) : on les appelle les Galates.",
    },
    {
      id: 'artisans',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Des artisans du fer',
      body:
        "Les Celtes sont d'excellents forgerons et orfèvres : épées, bijoux en or comme le torque (un collier rigide). Les auteurs romains leur attribuent le tonneau en bois cerclé et une moissonneuse tirée par un animal, le vallus.",
    },
    {
      id: 'vix',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'La Dame de Vix',
      body:
        "En Bourgogne, on a découvert la tombe d'une princesse celte morte vers 500 av. J.-C. Elle contenait un immense vase grec en bronze de 1,64 m : la preuve d'échanges avec les Grecs de Marseille (Massalia).",
    },
    {
      id: 'eduens',
      tier: 2,
      type: 'text',
      kicker: 'Crise',
      title: 'Des peuples divisés',
      body:
        "Les peuples gaulois sont souvent rivaux. Les Éduens, alliés de Rome depuis longtemps, appellent César à l'aide contre les Helvètes en 58 av. J.-C. C'est le prétexte qui lance la conquête.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des langues encore vivantes',
      body:
        "En Gaule, les Celtes se mêlent aux Romains : ce sont les Gallo-Romains. L'Irlande, jamais conquise par Rome, reste celtique. Aujourd'hui encore, on parle des langues celtiques : irlandais, gaélique écossais, gallois et breton.",
    },
  ],

  quiz: [
    { id: 'empire', type: 'tf', prompt: 'Les Celtes forment un seul empire dirigé par un roi.', answer: false, explanation: "Ce sont des dizaines de peuples indépendants, souvent rivaux, qui partagent une même culture." },
    { id: 'periodes', type: 'mcq', prompt: 'Comment s’appelle la seconde grande période de la culture celte, à partir de 450 av. J.-C. environ ?', options: ['La Tène', 'Hallstatt', 'Lascaux', 'Villanova'], answer: 0 },
    { id: 'brennus', type: 'mcq', prompt: 'Quel chef gaulois prend Rome vers 390 av. J.-C. ?', options: ['Brennus', 'Vercingétorix', 'Ambiorix', 'Hannibal'], answer: 0 },
    { id: 'vae-victis', type: 'mcq', prompt: 'Que signifie « Vae victis » ?', options: ['Malheur aux vaincus', 'Gloire aux vainqueurs', 'Tous à Rome', 'Paix aux vaincus'], answer: 0 },
    { id: 'galates', type: 'mcq', prompt: 'Comment appelle-t-on les Celtes installés en Asie Mineure ?', options: ['Les Galates', 'Les Gaëls', 'Les Sénons', 'Les Helvètes'], answer: 0 },
    { id: 'druides', type: 'mcq', prompt: 'Qui sont les druides ?', options: ['Des prêtres, juges et savants', 'Des guerriers à cheval', 'Des marchands grecs', 'Des rois élus'], answer: 0 },
    { id: 'oral', type: 'tf', prompt: "Selon César, l'enseignement des druides se transmet uniquement à l'oral.", answer: true },
    { id: 'dieu', type: 'mcq', prompt: 'Lequel de ces dieux est un dieu gaulois ?', options: ['Taranis', 'Jupiter', 'Osiris', 'Odin'], answer: 0 },
    { id: 'oppidum', type: 'mcq', prompt: 'Qu’est-ce qu’un oppidum ?', options: ['Une ville fortifiée gauloise', 'Un temple romain', 'Un bijou celte', 'Une épée gauloise'], answer: 0 },
    { id: 'bibracte', type: 'mcq', prompt: 'Bibracte est la capitale de quel peuple gaulois ?', options: ['Les Éduens', 'Les Arvernes', 'Les Sénons', 'Les Belges'], answer: 0 },
    { id: 'cesar', type: 'mcq', prompt: 'Quel général romain conquiert la Gaule ?', options: ['Jules César', 'Scipion l’Africain', 'Auguste', 'Pompée'], answer: 0 },
    { id: 'arvernes', type: 'mcq', prompt: 'De quel peuple Vercingétorix est-il le chef ?', options: ['Les Arvernes', 'Les Éduens', 'Les Helvètes', 'Les Carnutes'], answer: 0 },
    { id: 'gergovie', type: 'tf', prompt: 'Vercingétorix bat Jules César à Gergovie en 52 av. J.-C.', answer: true },
    { id: 'alesia', type: 'mcq', prompt: 'Où Vercingétorix se rend-il à César en 52 av. J.-C. ?', options: ['Alésia', 'Gergovie', 'Bibracte', 'Lutèce'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Début de la culture de Hallstatt', 'Prise de Rome par Brennus', 'Attaque celte contre Delphes', 'Siège d’Alésia'] },
    { id: 'vix', type: 'mcq', prompt: 'Quel objet célèbre a été retrouvé dans la tombe de la Dame de Vix ?', options: ['Un immense vase grec en bronze', 'Une tête colossale en pierre', 'Un char de guerre romain', 'Un sarcophage égyptien'], answer: 0 },
    { id: 'tonneau', type: 'mcq', prompt: 'Quel objet les auteurs romains attribuent-ils aux Celtes ?', options: ['Le tonneau en bois', 'La boussole', 'Le papier', 'La poudre à canon'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Laquelle de ces langues est une langue celtique ?', options: ['Le breton', 'Le basque', 'Le latin', 'Le grec'], answer: 0 },
  ],

  recap: [
    'Des dizaines de peuples sans unité politique, de Hallstatt à La Tène',
    'Vers 390 av. J.-C. : Brennus prend Rome',
    'Druides, oppida et artisans du fer',
    '52 av. J.-C. : Vercingétorix se rend à César à Alésia',
  ],
}
