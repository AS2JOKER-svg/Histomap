/** Chapitre rédigé : Pakistan et Bangladesh (1947 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'partition',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'La partition de 1947',
      body:
        "En 1947, l'Inde britannique devient indépendante et se divise en deux : l'Inde et le Pakistan, pays créé pour les musulmans. Environ 15 millions de personnes fuient d'un pays à l'autre, et les violences font des centaines de milliers de morts.",
      highlight: { value: '1947', label: 'naissance du Pakistan' },
    },
    {
      id: 'jinnah',
      tier: 1,
      type: 'person',
      nom: 'Mohammed Ali Jinnah',
      role: 'Fondateur du Pakistan',
      dates: '1876 – 1948',
      description:
        "Avocat et chef de la Ligue musulmane, il réclame un État séparé pour les musulmans de l'Inde et devient le premier dirigeant du Pakistan.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un pays, puis deux',
      years: [1960, 2000],
      caption: 'Comparez : en 1960, le Pakistan est fait de deux parties séparées par l’Inde ; en 2000, la partie orientale est devenue le Bangladesh.',
    },
    {
      id: 'cachemire',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'Le Cachemire',
      body:
        "Dès 1947, le Pakistan et l'Inde se disputent le Cachemire, une région montagneuse à majorité musulmane. Ils s'y affrontent en 1947, en 1965 et en 1999.",
    },
    {
      id: 'liberation',
      tier: 1,
      type: 'war',
      nom: 'Guerre de libération du Bangladesh',
      annee: 1971,
      adversaires: ['Armée pakistanaise'],
      allies: ['Indépendantistes bengalis', 'Inde (à partir de décembre 1971)'],
      vainqueur: 'Bangladesh et Inde',
      consequences:
        "L'armée pakistanaise réprime violemment les Bengalis ; la guerre fait entre 300 000 et 3 millions de morts selon les sources, et 10 millions de réfugiés. Le Bangladesh devient indépendant.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Pakistan et le Bangladesh en dates',
      items: [
        { year: 1947, label: 'Partition et naissance du Pakistan' },
        { year: 1952, label: 'Mouvement pour la langue bengalie' },
        { year: 1971, label: 'Indépendance du Bangladesh' },
        { year: 1988, label: 'Benazir Bhutto Première ministre' },
        { year: 1998, label: 'Essais nucléaires pakistanais' },
      ],
    },
    {
      id: 'militaires',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Civils et militaires',
      body:
        "Le Pakistan connaît une alternance de gouvernements civils et de régimes militaires, issus de coups d'État en 1958, 1977 et 1999. Il se dote de l'arme nucléaire en 1998.",
    },
    {
      id: 'benazir',
      tier: 1,
      type: 'person',
      nom: 'Benazir Bhutto',
      role: 'Première ministre du Pakistan',
      dates: '1953 – 2007',
      description:
        "En 1988, elle devient la première femme élue à la tête du gouvernement d'un pays à majorité musulmane. Elle est assassinée en 2007.",
    },
    {
      id: 'bangladesh',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le Bangladesh',
      body:
        "Très peuplé et exposé aux inondations et aux cyclones, le Bangladesh connaît une forte croissance, portée par l'industrie textile, où travaillent des millions de femmes.",
    },

    // ── Niveau 2 ──
    {
      id: 'langue',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le combat pour le bengali',
      body:
        "Le 21 février 1952, à Dacca, des étudiants qui réclament la reconnaissance de la langue bengalie sont tués. Ce jour est devenu la Journée internationale de la langue maternelle.",
    },
    {
      id: 'malala',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Malala',
      body:
        "En 2012, Malala Yousafzai est blessée par balle par les talibans pour avoir défendu l'école pour les filles. En 2014, à 17 ans, elle reçoit le prix Nobel de la paix.",
    },
    {
      id: 'yunus',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le microcrédit',
      body:
        "Au Bangladesh, l'économiste Muhammad Yunus prête de petites sommes aux plus pauvres, surtout aux femmes, pour qu'ils créent leur activité. Il reçoit le prix Nobel de la paix en 2006.",
    },
    {
      id: 'salam',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Abdus Salam',
      body:
        "Le physicien pakistanais Abdus Salam reçoit en 1979 le prix Nobel de physique pour ses travaux sur les forces fondamentales de la nature.",
    },
    {
      id: 'rana-plaza',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le Rana Plaza',
      body:
        "En 2013, près de Dacca, l'immeuble du Rana Plaza, qui abrite des ateliers de vêtements, s'effondre et tue plus de 1 100 ouvriers.",
    },
  ],

  quiz: [
    { id: 'capitale-pk', type: 'mcq', prompt: 'Quelle est la capitale du Pakistan ?', options: ['Islamabad', 'Karachi', 'Lahore', 'New Delhi'], answer: 0 },
    { id: 'capitale-bd', type: 'mcq', prompt: 'Quelle est la capitale du Bangladesh ?', options: ['Dacca', 'Calcutta', 'Islamabad', 'Katmandou'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année le Pakistan est-il créé ?', options: ['1947', '1971', '1857', '1960'], answer: 0 },
    { id: 'pourquoi', type: 'mcq', prompt: 'Pour qui le Pakistan est-il créé ?', options: ['Pour les musulmans de l’Inde britannique', 'Pour les hindous', 'Pour les sikhs', 'Pour les colons britanniques'], answer: 0 },
    { id: 'jinnah', type: 'mcq', prompt: 'Qui est le fondateur du Pakistan ?', options: ['Mohammed Ali Jinnah', 'Gandhi', 'Nehru', 'Mujibur Rahman'], answer: 0 },
    { id: 'deux-parties', type: 'tf', prompt: 'De 1947 à 1971, le Pakistan est formé de deux parties séparées par l’Inde.', answer: true },
    { id: 'cachemire', type: 'mcq', prompt: 'Quelle région l’Inde et le Pakistan se disputent-ils ?', options: ['Le Cachemire', 'Le Bengale', 'Le Pendjab', 'Le Tibet'], answer: 0 },
    { id: 'bangladesh', type: 'mcq', prompt: 'En quelle année le Bangladesh devient-il indépendant ?', options: ['1971', '1947', '1952', '1988'], answer: 0 },
    { id: 'aide', type: 'mcq', prompt: 'Quel pays aide le Bangladesh à obtenir son indépendance ?', options: ['L’Inde', 'La Chine', 'Les États-Unis', 'Le Royaume-Uni'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Quelle langue les étudiants de Dacca défendent-ils en 1952 ?', options: ['Le bengali', 'L’ourdou', 'L’anglais', 'L’hindi'], answer: 0 },
    { id: 'nucleaire', type: 'mcq', prompt: 'En quelle année le Pakistan réalise-t-il ses premiers essais nucléaires ?', options: ['1998', '1971', '1947', '2007'], answer: 0 },
    { id: 'benazir', type: 'mcq', prompt: 'Qui devient en 1988 Première ministre du Pakistan ?', options: ['Benazir Bhutto', 'Indira Gandhi', 'Sheikh Hasina', 'Malala Yousafzai'], answer: 0 },
    { id: 'malala', type: 'mcq', prompt: 'Pour quelle cause Malala Yousafzai reçoit-elle le prix Nobel de la paix ?', options: ['L’éducation des filles', 'La protection des forêts', 'La lutte contre la faim', 'Le désarmement nucléaire'], answer: 0 },
    { id: 'textile', type: 'mcq', prompt: 'Quelle industrie porte la croissance du Bangladesh ?', options: ['Le textile et les vêtements', 'Le pétrole', 'L’automobile', 'L’aéronautique'], answer: 0 },
    { id: 'yunus', type: 'mcq', prompt: 'Qu’a développé Muhammad Yunus au Bangladesh ?', options: ['Le microcrédit', 'L’arme nucléaire', 'Le cricket', 'Le chemin de fer'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Partition et naissance du Pakistan', 'Mouvement pour la langue bengalie', 'Indépendance du Bangladesh', 'Essais nucléaires pakistanais'] },
  ],

  recap: [
    '1947 : partition de l’Inde britannique ; le Pakistan naît en deux parties',
    'Conflit avec l’Inde pour le Cachemire (1947, 1965, 1999)',
    '1971 : guerre de libération et indépendance du Bangladesh',
    'Pakistan : civils et militaires, arme nucléaire ; Bangladesh : croissance par le textile',
  ],
}
