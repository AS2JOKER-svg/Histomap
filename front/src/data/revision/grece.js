/** Chapitre rédigé : Grèce antique (≈ 800 – 146 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cites',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un monde de cités, pas un pays',
      body:
        "La Grèce antique n'est pas un État unifié mais un ensemble de cités indépendantes (poleis) : Athènes, Sparte, Corinthe, Thèbes… Elles se font souvent la guerre, mais partagent la même langue, les mêmes dieux et les mêmes fêtes.",
      highlight: { value: '+ de 1 000', label: 'cités grecques autour de la Méditerranée' },
    },
    {
      id: 'jeux',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Repère',
      value: '776 av. J.-C.',
      label: 'premiers Jeux olympiques (selon la tradition)',
      caption: "Tous les quatre ans, les cités envoient leurs athlètes à Olympie, en l'honneur de Zeus. Une trêve sacrée protège les voyageurs pendant les Jeux.",
    },
    {
      id: 'democratie',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Athènes invente la démocratie',
      body:
        "En 508 av. J.-C., les réformes de Clisthène donnent le pouvoir à l'assemblée des citoyens. Mais seuls les hommes libres nés de parents athéniens sont citoyens : les femmes, les esclaves et les étrangers (métèques) en sont exclus.",
      highlight: { value: '508 av. J.-C.', label: 'réformes de Clisthène' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Fluctuations',
      title: 'Des cités à l’empire d’Alexandre',
      years: [-500, -323],
      caption: "En 500 av. J.-C., la Grèce est un monde de cités. En 323, les conquêtes d'Alexandre ont porté la culture grecque jusqu'à l'Indus.",
    },
    {
      id: 'mediques',
      tier: 1,
      type: 'dates',
      kicker: 'Guerre',
      title: 'Les guerres médiques contre la Perse',
      items: [
        { year: -490, label: 'Marathon : Athènes repousse les Perses' },
        { year: -480, label: 'Thermopyles : Léonidas et ses 300 Spartiates' },
        { year: -480, label: 'Salamine : victoire navale d’Athènes' },
        { year: -479, label: 'Platées : les Perses quittent la Grèce' },
      ],
    },
    {
      id: 'peloponnese',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Péloponnèse',
      annee: -431,
      adversaires: ['Sparte et la ligue du Péloponnèse'],
      allies: ['Athènes et la ligue de Délos'],
      vainqueur: 'Sparte (404 av. J.-C.)',
      consequences: "Une guerre de 27 ans qui épuise les cités grecques et ouvre la voie à la domination de la Macédoine.",
    },
    {
      id: 'philosophes',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Socrate, Platon, Aristote',
      body:
        "Socrate fait réfléchir ses interlocuteurs par des questions ; il est condamné à mort en 399 av. J.-C. Son élève Platon fonde l'Académie, et l'élève de Platon, Aristote, deviendra le précepteur d'Alexandre le Grand.",
    },
    {
      id: 'alexandre',
      tier: 1,
      type: 'person',
      nom: 'Alexandre le Grand',
      role: 'Roi de Macédoine',
      dates: '356 – 323 av. J.-C.',
      description:
        "Roi à 20 ans, il écrase l'Empire perse (Issos, Gaugamèles) et mène son armée jusqu'à l'Indus en une dizaine d'années. Il meurt à Babylone à 32 ans ; ses généraux se partagent l'empire.",
    },

    // ── Niveau 2 ──
    {
      id: 'sparte',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Sparte, la cité-caserne',
      body:
        "À Sparte, les garçons quittent leur famille à 7 ans pour une éducation militaire très dure. Les citoyens sont des soldats d'élite (hoplites) ; le travail de la terre est assuré par des populations asservies, les hilotes.",
    },
    {
      id: 'parthenon',
      tier: 2,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Le siècle de Périclès',
      body:
        "Au Ve siècle av. J.-C., Athènes est au sommet. Périclès fait construire le Parthénon sur l'Acropole (447 – 432 av. J.-C.), décoré par le sculpteur Phidias. Eschyle, Sophocle et Euripide inventent la tragédie au théâtre.",
      highlight: { value: '447 av. J.-C.', label: 'début du chantier du Parthénon' },
    },
    {
      id: 'homere',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: "L'Iliade et l'Odyssée",
      body:
        "Attribuées au poète Homère (VIIIe siècle av. J.-C.), ces deux épopées racontent la guerre de Troie et le long retour d'Ulysse. Tous les Grecs les apprennent : elles sont le socle de leur culture.",
    },
    {
      id: 'sciences',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Mathématiques et sciences',
      body:
        "Pythagore et Euclide posent les bases de la géométrie, Archimède découvre la poussée qui porte son nom, Hippocrate fonde une médecine fondée sur l'observation. Vers 240 av. J.-C., Ératosthène calcule la circonférence de la Terre avec une précision étonnante.",
    },
    {
      id: 'fin',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Des royaumes hellénistiques à Rome',
      body:
        "À la mort d'Alexandre (323 av. J.-C.), ses généraux fondent des royaumes : les Ptolémées en Égypte, les Séleucides en Asie. En 146 av. J.-C., Rome détruit Corinthe : la Grèce devient romaine… mais sa culture conquiert ses vainqueurs.",
    },
  ],

  quiz: [
    { id: 'polis', type: 'mcq', prompt: 'Comment appelle-t-on une cité-État grecque ?', options: ['Une polis', 'Un nome', 'Un municipe', 'Une satrapie'], answer: 0 },
    { id: 'olympie', type: 'mcq', prompt: 'En l’honneur de quel dieu se déroulent les Jeux olympiques ?', options: ['Zeus', 'Apollon', 'Poséidon', 'Arès'], answer: 0 },
    { id: 'jeux-date', type: 'mcq', prompt: 'Date traditionnelle des premiers Jeux olympiques ?', options: ['776 av. J.-C.', '508 av. J.-C.', '323 av. J.-C.', '146 av. J.-C.'], answer: 0 },
    { id: 'clisthene', type: 'mcq', prompt: 'Qui réforme Athènes en 508 av. J.-C. et pose les bases de la démocratie ?', options: ['Clisthène', 'Périclès', 'Socrate', 'Léonidas'], answer: 0 },
    { id: 'citoyens', type: 'tf', prompt: 'À Athènes, les femmes votent à l’assemblée.', answer: false, explanation: 'Seuls les hommes libres nés de parents athéniens sont citoyens.' },
    { id: 'marathon', type: 'mcq', prompt: 'Contre qui Athènes combat-elle à Marathon en 490 av. J.-C. ?', options: ['Les Perses', 'Les Spartiates', 'Les Romains', 'Les Macédoniens'], answer: 0 },
    { id: 'thermopyles', type: 'mcq', prompt: 'Quel roi spartiate défend le défilé des Thermopyles ?', options: ['Léonidas', 'Périclès', 'Philippe II', 'Agamemnon'], answer: 0 },
    { id: 'mediques-ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Marathon', 'Salamine', 'Guerre du Péloponnèse', 'Mort d’Alexandre'] },
    { id: 'peloponnese-vainqueur', type: 'mcq', prompt: 'Qui remporte la guerre du Péloponnèse (431 – 404 av. J.-C.) ?', options: ['Sparte', 'Athènes', 'La Perse', 'Corinthe'], answer: 0 },
    { id: 'socrate', type: 'tf', prompt: 'Socrate est condamné à mort en 399 av. J.-C.', answer: true },
    { id: 'aristote', type: 'mcq', prompt: 'Quel philosophe est le précepteur d’Alexandre le Grand ?', options: ['Aristote', 'Platon', 'Socrate', 'Pythagore'], answer: 0 },
    { id: 'alexandre-mort', type: 'mcq', prompt: 'Où meurt Alexandre le Grand, à 32 ans ?', options: ['Babylone', 'Athènes', 'Alexandrie', 'Pella'], answer: 0 },
    { id: 'alexandre-limite', type: 'mcq', prompt: 'Jusqu’à quel fleuve Alexandre mène-t-il son armée ?', options: ["L'Indus", 'Le Danube', 'Le Nil', 'Le Gange'], answer: 0 },
    { id: 'parthenon', type: 'mcq', prompt: "Sur quelle colline d'Athènes se dresse le Parthénon ?", options: ["L'Acropole", 'Le Palatin', "L'Olympe", 'La Pnyx'], answer: 0 },
    { id: 'hilotes', type: 'tf', prompt: 'À Sparte, les hilotes sont des citoyens soldats.', answer: false, explanation: 'Ce sont des populations asservies qui cultivent la terre.' },
    { id: 'homere', type: 'mcq', prompt: "Quelle épopée raconte le retour d'Ulysse ?", options: ["L'Odyssée", "L'Iliade", "L'Énéide", 'Les Travaux et les Jours'], answer: 0 },
    { id: 'eratosthene', type: 'mcq', prompt: 'Que calcule Ératosthène vers 240 av. J.-C. ?', options: ['La circonférence de la Terre', 'La distance Terre-Lune', 'La valeur exacte de π', 'La durée de l’année'], answer: 0 },
    { id: 'corinthe', type: 'tf', prompt: 'En 146 av. J.-C., Rome détruit Corinthe et soumet la Grèce.', answer: true },
  ],

  recap: [
    'Un monde de cités rivales unies par la langue, les dieux et les Jeux (776 av. J.-C.)',
    '508 av. J.-C. : naissance de la démocratie à Athènes',
    'Guerres médiques (Marathon, Salamine) puis guerre du Péloponnèse',
    'Alexandre le Grand diffuse la culture grecque jusqu’à l’Indus',
  ],
}
