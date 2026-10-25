/** Chapitre rédigé : Serbie médiévale (1166 – 1459). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'nemanja',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Stefan Nemanja',
      body:
        "Vers 1166, Stefan Nemanja unifie les terres serbes et fonde la dynastie des Nemanjić, qui règne pendant deux siècles. À la fin de sa vie, il devient moine.",
      highlight: { value: 'vers 1166', label: 'fondation de la dynastie Nemanjić' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Serbie médiévale',
      years: [1300],
      caption: 'Vers 1300, la Serbie s’étend dans le centre des Balkans.',
    },
    {
      id: 'sava',
      tier: 1,
      type: 'person',
      nom: 'Saint Sava',
      role: 'Premier archevêque serbe',
      dates: 'vers 1175 – 1236',
      description:
        "Fils de Stefan Nemanja, il devient moine au mont Athos. En 1219, il obtient l'autonomie de l'Église serbe, dont il est le premier archevêque, et fonde des écoles.",
    },
    {
      id: 'royaume',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le royaume',
      body:
        "En 1217, un autre fils de Nemanja, Étienne, est couronné roi : on l'appelle « le Premier Couronné ». La Serbie devient un royaume reconnu.",
    },
    {
      id: 'monasteres',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Des monastères peints',
      body:
        "Les rois serbes bâtissent de grands monastères, comme Studenica ou Sopoćani, dont les fresques comptent parmi les chefs-d'œuvre de l'art médiéval.",
    },
    {
      id: 'dusan',
      tier: 1,
      type: 'person',
      nom: 'Étienne Dušan',
      role: 'Empereur des Serbes',
      dates: 'règne 1331 – 1355',
      description:
        "Il conquiert une grande partie des Balkans sur les Byzantins, se fait couronner « empereur des Serbes et des Grecs » en 1346 et donne à son empire un code de lois.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Serbie médiévale en dates',
      items: [
        { year: 1166, label: 'Stefan Nemanja' },
        { year: 1219, label: 'Église serbe autonome' },
        { year: 1346, label: 'Dušan empereur' },
        { year: 1389, label: 'Bataille de Kosovo' },
        { year: 1459, label: 'Chute de Smederevo' },
      ],
    },
    {
      id: 'kosovo',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Kosovo (1389)',
      annee: 1389,
      adversaires: ['Empire ottoman (Murad Ier)'],
      allies: ['Serbes et Bosniens (prince Lazar)'],
      vainqueur: 'Empire ottoman (victoire coûteuse)',
      consequences:
        "Le prince Lazar et le sultan Murad Ier sont tués. La Serbie devient vassale des Ottomans ; la bataille occupe une place centrale dans la mémoire serbe.",
    },
    {
      id: 'smederevo',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La chute de Smederevo',
      body:
        "Les princes serbes résistent encore quelques décennies et bâtissent la forteresse de Smederevo, au bord du Danube. Elle tombe aux mains des Ottomans en 1459.",
    },

    // ── Niveau 2 ──
    {
      id: 'argent',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Les mines d’argent',
      body:
        "Grâce à des mineurs venus de Saxe, la Serbie exploite de riches mines d'argent, comme Novo Brdo, et devient l'un des grands producteurs d'argent d'Europe.",
    },
    {
      id: 'raguse',
      tier: 2,
      type: 'text',
      kicker: 'Échanges',
      title: 'Raguse (Dubrovnik)',
      body:
        "La Serbie commerce beaucoup avec la république de Raguse, l'actuelle Dubrovnik, dont les marchands s'installent dans les villes minières.",
    },
    {
      id: 'hilandar',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le monastère de Hilandar',
      body:
        "En 1198, Stefan Nemanja, devenu moine, et son fils Sava fondent le monastère de Hilandar, au mont Athos, en Grèce. Il reste un grand centre de l'orthodoxie serbe.",
    },
    {
      id: 'ange',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'L’ange blanc',
      body:
        "La fresque de l'ange blanc du monastère de Mileševa, peinte vers 1235, est l'une des images les plus célèbres de l'art serbe.",
    },
    {
      id: 'vidovdan',
      tier: 2,
      type: 'text',
      kicker: 'Mémoire',
      title: 'Vidovdan',
      body:
        "La bataille de Kosovo est commémorée chaque 28 juin, le jour de la Saint-Guy (Vidovdan), et chantée par de nombreux poèmes épiques serbes.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région d’Europe se trouve la Serbie ?', options: ['Les Balkans', 'La Scandinavie', 'La péninsule Ibérique', 'Les îles Britanniques'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde la dynastie des Nemanjić ?', options: ['Stefan Nemanja', 'Étienne Dušan', 'Lazar', 'Saint Sava'], answer: 0 },
    { id: 'sava', type: 'mcq', prompt: 'Qui fonde l’Église serbe autonome en 1219 ?', options: ['Saint Sava', 'Stefan Nemanja', 'Étienne Dušan', 'Cyrille'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion de la Serbie médiévale ?', options: ['Le christianisme orthodoxe', 'L’islam', 'Le catholicisme', 'Le judaïsme'], answer: 0 },
    { id: 'premier', type: 'mcq', prompt: 'Comment surnomme-t-on le premier roi de Serbie ?', options: ['Le Premier Couronné', 'Le Grand', 'Le Vaillant', 'Le Saint'], answer: 0 },
    { id: 'dusan', type: 'mcq', prompt: 'Quel souverain se fait couronner empereur en 1346 ?', options: ['Étienne Dušan', 'Stefan Nemanja', 'Lazar', 'Milutin'], answer: 0 },
    { id: 'code', type: 'tf', prompt: 'Étienne Dušan donne à son empire un code de lois.', answer: true },
    { id: 'monasteres', type: 'mcq', prompt: 'Pour quoi les monastères serbes sont-ils célèbres ?', options: ['Leurs fresques', 'Leurs bibliothèques de papyrus', 'Leurs pyramides', 'Leurs vitraux'], answer: 0 },
    { id: 'hilandar', type: 'mcq', prompt: 'Où se trouve le monastère de Hilandar ?', options: ['Au mont Athos', 'À Belgrade', 'À Rome', 'À Constantinople'], answer: 0 },
    { id: 'argent', type: 'mcq', prompt: 'Quel métal fait la richesse de la Serbie médiévale ?', options: ['L’argent', 'L’or', 'Le fer', 'L’étain'], answer: 0 },
    { id: 'kosovo', type: 'mcq', prompt: 'Contre qui les Serbes combattent-ils à Kosovo en 1389 ?', options: ['Les Ottomans', 'Les Hongrois', 'Les Byzantins', 'Les Mongols'], answer: 0 },
    { id: 'chefs', type: 'tf', prompt: 'À la bataille de Kosovo, le prince Lazar et le sultan Murad Ier sont tous deux tués.', answer: true },
    { id: 'smederevo', type: 'mcq', prompt: 'Quelle est la dernière capitale de la Serbie médiévale ?', options: ['Smederevo', 'Belgrade', 'Skopje', 'Ras'], answer: 0 },
    { id: 'raguse', type: 'mcq', prompt: 'Avec quelle république la Serbie commerce-t-elle beaucoup ?', options: ['Raguse (Dubrovnik)', 'Florence', 'Gênes', 'Novgorod'], answer: 0 },
    { id: 'vidovdan', type: 'mcq', prompt: 'Comment s’appelle le jour de commémoration de la bataille de Kosovo ?', options: ['Vidovdan', 'Noël', 'Pâques', 'Saint-Sava'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Stefan Nemanja', 'Église serbe autonome', 'Dušan empereur', 'Chute de Smederevo'] },
  ],

  recap: [
    'Vers 1166, Stefan Nemanja fonde la dynastie des Nemanjić',
    'Saint Sava fonde l’Église serbe (1219) ; des monastères aux célèbres fresques',
    'Apogée sous Étienne Dušan, empereur en 1346',
    'Bataille de Kosovo (1389), puis chute de Smederevo (1459)',
  ],
}
