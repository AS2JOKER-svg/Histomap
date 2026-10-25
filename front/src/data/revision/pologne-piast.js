/** Chapitre rédigé : Pologne des Piast (966 – 1385). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'bapteme',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le baptême de 966',
      body:
        "En 966, le duc Mieszko Ier, de la dynastie des Piast, se fait baptiser. Les Polonais considèrent cette date comme la naissance de leur État, qui entre dans la chrétienté latine.",
      highlight: { value: '966', label: 'baptême de Mieszko Ier' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Pologne des Piast',
      years: [1000, 1300],
      caption: 'Comparez : le royaume, entre l’Oder et la Vistule, s’étend puis se divise.',
    },
    {
      id: 'roi',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le premier roi',
      body:
        "Le fils de Mieszko, Boleslas Ier le Vaillant, agrandit le pays et devient en 1025 le premier roi de Pologne. En l'an 1000, l'empereur Otton III lui rend visite à Gniezno.",
    },
    {
      id: 'division',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un pays divisé',
      body:
        "En 1138, le roi Boleslas III partage le pays entre ses fils. Pendant près de deux siècles, la Pologne est divisée entre princes rivaux.",
    },
    {
      id: 'legnica',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Legnica',
      annee: 1241,
      adversaires: ['Empire mongol'],
      allies: ['Polonais et chevaliers allemands'],
      vainqueur: 'Mongols',
      consequences:
        "Le duc Henri II le Pieux est tué. Deux jours plus tard, les Mongols écrasent aussi les Hongrois, puis repartent vers l'est en 1242.",
    },
    {
      id: 'teutoniques',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les chevaliers Teutoniques',
      body:
        "En 1226, un prince polonais invite des chevaliers allemands, les chevaliers Teutoniques, à combattre les Prussiens païens. Ils fondent un puissant État au nord et deviennent un dangereux voisin.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Pologne des Piast en dates',
      items: [
        { year: 966, label: 'Baptême de Mieszko Ier' },
        { year: 1025, label: 'Premier roi' },
        { year: 1138, label: 'Division du pays' },
        { year: 1320, label: 'Réunification' },
        { year: 1364, label: 'Université de Cracovie' },
      ],
    },
    {
      id: 'casimir',
      tier: 1,
      type: 'person',
      nom: 'Casimir III le Grand',
      role: 'Roi de Pologne',
      dates: 'règne 1333 – 1370',
      description:
        "Dernier roi Piast, il unifie les lois, fonde l'université de Cracovie en 1364 et fait bâtir des dizaines de châteaux. On dit qu'il a trouvé une Pologne de bois et l'a laissée de pierre.",
    },
    {
      id: 'union',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'L’union avec la Lituanie',
      body:
        "En 1385, un accord prévoit le mariage de la reine Hedwige avec Jogaila, grand-duc de Lituanie. C'est le début de l'union polono-lituanienne, qui fera de la Pologne l'un des plus grands États d'Europe.",
    },

    // ── Niveau 2 ──
    {
      id: 'hedwige',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Hedwige, « roi » de Pologne',
      body:
        "En 1384, Hedwige est couronnée « roi » et non « reine » de Pologne, pour montrer qu'elle règne elle-même et n'est pas seulement l'épouse d'un roi.",
    },
    {
      id: 'kalisz',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le statut de Kalisz',
      body:
        "En 1264, le statut de Kalisz accorde protection et droits aux Juifs, qui s'installent nombreux en Pologne au cours des siècles suivants.",
    },
    {
      id: 'sel',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Les mines de sel',
      body:
        "Les mines de sel de Wieliczka, exploitées depuis le XIIIe siècle, font la richesse du royaume. Elles sont aujourd'hui inscrites au patrimoine mondial de l'UNESCO.",
    },
    {
      id: 'hejnal',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le hejnał de Cracovie',
      body:
        "Chaque heure, une trompette sonne du haut d'une tour de Cracovie et s'interrompt brusquement : selon la tradition, en souvenir d'un trompette tué par une flèche mongole.",
    },
    {
      id: 'copernic',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'L’université de Cracovie',
      body:
        "Fondée en 1364, l'université de Cracovie est l'une des plus anciennes d'Europe centrale. Copernic y étudiera plus tard.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays est né avec le baptême de Mieszko Ier ?', options: ['La Pologne', 'La Hongrie', 'La Bohême', 'La Russie'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année Mieszko Ier se fait-il baptiser ?', options: ['966', '1385', '1000', '1241'], answer: 0 },
    { id: 'dynastie', type: 'mcq', prompt: 'Comment s’appelle la première dynastie polonaise ?', options: ['Les Piast', 'Les Habsbourg', 'Les Jagellon', 'Les Capétiens'], answer: 0 },
    { id: 'roi', type: 'mcq', prompt: 'Qui est le premier roi de Pologne ?', options: ['Boleslas Ier le Vaillant', 'Mieszko Ier', 'Casimir III', 'Jogaila'], answer: 0 },
    { id: 'otton', type: 'mcq', prompt: 'Quel empereur rend visite à Boleslas Ier à Gniezno en l’an 1000 ?', options: ['Otton III', 'Charlemagne', 'Charles IV', 'Frédéric Barberousse'], answer: 0 },
    { id: 'division', type: 'tf', prompt: 'De 1138 à 1320, la Pologne est divisée entre plusieurs princes.', answer: true },
    { id: 'mongols', type: 'mcq', prompt: 'Qui bat les Polonais à Legnica en 1241 ?', options: ['Les Mongols', 'Les Teutoniques', 'Les Hongrois', 'Les Vikings'], answer: 0 },
    { id: 'teutoniques', type: 'mcq', prompt: 'Quels chevaliers s’installent au nord de la Pologne au XIIIe siècle ?', options: ['Les chevaliers Teutoniques', 'Les Templiers', 'Les Hospitaliers', 'Les samouraïs'], answer: 0 },
    { id: 'casimir', type: 'mcq', prompt: 'Quel roi a « trouvé une Pologne de bois et l’a laissée de pierre » ?', options: ['Casimir III le Grand', 'Mieszko Ier', 'Boleslas III', 'Louis de Hongrie'], answer: 0 },
    { id: 'universite', type: 'mcq', prompt: 'Quelle université Casimir III fonde-t-il en 1364 ?', options: ['Celle de Cracovie', 'Celle de Paris', 'Celle de Prague', 'Celle de Bologne'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville devient la capitale de la Pologne médiévale ?', options: ['Cracovie', 'Varsovie', 'Gdańsk', 'Vilnius'], answer: 0 },
    { id: 'hedwige', type: 'mcq', prompt: 'Pourquoi Hedwige est-elle couronnée « roi » ?', options: ['Pour montrer qu’elle règne elle-même', 'Par erreur', 'Parce qu’elle était un homme', 'Pour plaire au pape'], answer: 0 },
    { id: 'lituanie', type: 'mcq', prompt: 'Avec quel pays la Pologne s’unit-elle en 1385-1386 ?', options: ['La Lituanie', 'La Hongrie', 'La Bohême', 'La Russie'], answer: 0 },
    { id: 'sel', type: 'mcq', prompt: 'Quelle ressource est exploitée dans les mines de Wieliczka ?', options: ['Le sel', 'L’or', 'Le charbon', 'Le fer'], answer: 0 },
    { id: 'kalisz', type: 'tf', prompt: 'Le statut de Kalisz (1264) accorde protection et droits aux Juifs.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Baptême de Mieszko Ier', 'Premier roi', 'Division du pays', 'Université de Cracovie'] },
  ],

  recap: [
    '966 : le baptême de Mieszko Ier, naissance symbolique de la Pologne',
    'Boleslas Ier premier roi (1025), puis division du pays (1138-1320)',
    'Invasion mongole (Legnica, 1241) ; arrivée des chevaliers Teutoniques',
    'Casimir le Grand modernise le royaume ; union avec la Lituanie (1385)',
  ],
}
