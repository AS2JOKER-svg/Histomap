/** Chapitre rédigé : Royaume de Bohême (vers 870 – 1526). Pas de carte : la Bohême n’a pas de territoire propre sur les cartes (elle y est comprise dans le Saint-Empire). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'premyslides',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les Přemyslides',
      body:
        "Vers 870, le duc Bořivoj Ier, de la dynastie des Přemyslides, unit les tribus tchèques autour de Prague et se convertit au christianisme. La Bohême devient un duché, puis un royaume.",
      highlight: { value: 'vers 870', label: 'premier duc historique' },
    },
    {
      id: 'venceslas',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Saint Venceslas',
      body:
        "Le duc Venceslas, assassiné par son frère en 935, devient le saint patron des Tchèques. Sa statue domine aujourd'hui la grande place de Prague qui porte son nom.",
    },
    {
      id: 'empire',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un royaume du Saint-Empire',
      body:
        "La Bohême fait partie du Saint-Empire. Elle devient un royaume héréditaire en 1198, et son roi est l'un des sept princes qui élisent l'empereur.",
    },
    {
      id: 'argent',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'L’argent de Kutná Hora',
      body:
        "Les mines d'argent de Kutná Hora font de la Bohême l'une des régions les plus riches d'Europe. À partir de 1300, on y frappe une pièce célèbre, le gros de Prague.",
    },
    {
      id: 'charles',
      tier: 1,
      type: 'person',
      nom: 'Charles IV',
      role: 'Roi de Bohême et empereur',
      dates: '1316 – 1378',
      description:
        "Roi de Bohême et empereur, il fait de Prague la capitale du Saint-Empire. Il y fonde en 1348 la première université d'Europe centrale et fait construire le célèbre pont Charles.",
    },
    {
      id: 'hus',
      tier: 1,
      type: 'person',
      nom: 'Jan Hus',
      role: 'Réformateur religieux',
      dates: 'vers 1370 – 1415',
      description:
        "Ce prêtre prêche en tchèque et critique la richesse de l'Église. Convoqué au concile de Constance, il est condamné et brûlé en 1415, un siècle avant la Réforme de Luther.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Bohême en dates',
      items: [
        { year: 935, label: 'Mort de saint Venceslas' },
        { year: 1198, label: 'Royaume héréditaire' },
        { year: 1348, label: 'Université de Prague' },
        { year: 1415, label: 'Mort de Jan Hus' },
        { year: 1526, label: 'La couronne passe aux Habsbourg' },
      ],
    },
    {
      id: 'hussites',
      tier: 1,
      type: 'war',
      nom: 'Croisades hussites',
      annee: 1420,
      adversaires: ['Croisés du Saint-Empire (empereur Sigismond)'],
      allies: ['Hussites de Bohême (Jan Žižka)'],
      vainqueur: 'Les hussites repoussent cinq croisades',
      consequences:
        "Les partisans de Jan Hus battent cinq croisades lancées contre eux. En 1436, ils obtiennent le droit de communier avec le pain et le vin : une première brèche dans l'unité de l'Église.",
    },
    {
      id: 'habsbourg',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Les Habsbourg',
      body:
        "En 1526, le roi Louis II meurt à la bataille de Mohács. La couronne de Bohême passe à Ferdinand de Habsbourg ; la Bohême restera aux Habsbourg jusqu'en 1918.",
    },

    // ── Niveau 2 ──
    {
      id: 'zizka',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Les chariots de Žižka',
      body:
        "Le chef hussite Jan Žižka, borgne puis aveugle, invente une tactique : des chariots de guerre reliés entre eux et armés de canons forment une forteresse mobile.",
    },
    {
      id: 'horloge',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'L’horloge astronomique',
      body:
        "Installée en 1410, l'horloge astronomique de Prague fonctionne toujours : chaque heure, des figurines d'apôtres défilent devant les passants.",
    },
    {
      id: 'ottokar',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Marchfeld',
      annee: 1278,
      adversaires: ['Rodolphe de Habsbourg et la Hongrie'],
      allies: ['Bohême (Ottokar II)'],
      vainqueur: 'Rodolphe de Habsbourg',
      consequences: "Le roi Ottokar II, le « roi de fer et d'or », est tué. Les Habsbourg s'emparent de l'Autriche, qui devient le cœur de leur puissance.",
    },
    {
      id: 'podebrady',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un projet de paix européenne',
      body:
        "En 1464, le roi hussite Georges de Poděbrady propose une alliance pacifique des princes chrétiens, parfois vue comme une lointaine idée d'Europe unie.",
    },
    {
      id: 'pont',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le pont Charles',
      body:
        "Selon une tradition, la première pierre du pont Charles aurait été posée le 9 juillet 1357 à 5 h 31, pour former la suite de chiffres 1-3-5-7-9-7-5-3-1.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond à la Bohême ?', options: ['La République tchèque', 'La Hongrie', 'L’Autriche', 'La Pologne'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Bohême ?', options: ['Prague', 'Vienne', 'Budapest', 'Cracovie'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'Comment s’appelle la première dynastie tchèque ?', options: ['Les Přemyslides', 'Les Piast', 'Les Árpád', 'Les Nemanjić'], answer: 0 },
    { id: 'venceslas', type: 'mcq', prompt: 'Qui est le saint patron des Tchèques ?', options: ['Saint Venceslas', 'Saint Étienne', 'Saint Sava', 'Saint Patrick'], answer: 0 },
    { id: 'empire', type: 'mcq', prompt: 'De quel ensemble la Bohême fait-elle partie ?', options: ['Le Saint-Empire', 'L’Empire byzantin', 'L’Empire ottoman', 'L’Empire mongol'], answer: 0 },
    { id: 'electeur', type: 'tf', prompt: 'Le roi de Bohême est l’un des sept électeurs de l’empereur.', answer: true },
    { id: 'argent', type: 'mcq', prompt: 'Quel métal fait la richesse de la Bohême ?', options: ['L’argent', 'L’or', 'Le cuivre', 'Le fer'], answer: 0 },
    { id: 'charles', type: 'mcq', prompt: 'Quel roi et empereur fait de Prague la capitale de l’Empire ?', options: ['Charles IV', 'Charlemagne', 'Otton Ier', 'Rodolphe de Habsbourg'], answer: 0 },
    { id: 'universite', type: 'mcq', prompt: 'En quelle année est fondée l’université de Prague ?', options: ['1348', '1526', '935', '1789'], answer: 0 },
    { id: 'hus', type: 'mcq', prompt: 'Quel réformateur est brûlé en 1415 ?', options: ['Jan Hus', 'Martin Luther', 'Jean Calvin', 'Érasme'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'En quelle langue Jan Hus prêche-t-il ?', options: ['En tchèque', 'En latin', 'En allemand', 'En grec'], answer: 0 },
    { id: 'croisades', type: 'mcq', prompt: 'Combien de croisades les hussites repoussent-ils ?', options: ['Cinq', 'Une', 'Dix', 'Aucune'], answer: 0 },
    { id: 'zizka', type: 'mcq', prompt: 'Quelle tactique invente le chef hussite Jan Žižka ?', options: ['Des chariots de guerre reliés entre eux', 'Le tir à l’arc à cheval', 'Les tranchées', 'Les éléphants de guerre'], answer: 0 },
    { id: 'horloge', type: 'tf', prompt: 'L’horloge astronomique de Prague, installée en 1410, fonctionne toujours.', answer: true },
    { id: 'habsbourg', type: 'mcq', prompt: 'À quelle dynastie passe la couronne de Bohême en 1526 ?', options: ['Les Habsbourg', 'Les Bourbons', 'Les Romanov', 'Les Tudor'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Mort de saint Venceslas', 'Royaume héréditaire', 'Université de Prague', 'Mort de Jan Hus'] },
  ],

  recap: [
    'Vers 870, les Přemyslides fondent l’État tchèque autour de Prague',
    'Un royaume riche de son argent, au sein du Saint-Empire',
    'Charles IV fait de Prague la capitale de l’Empire ; université (1348)',
    'Jan Hus et les guerres hussites ; en 1526, la couronne passe aux Habsbourg',
  ],
}
