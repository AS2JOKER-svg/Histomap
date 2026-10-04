/** Chapitre rédigé : Russie et URSS (1789 – aujourd'hui). */
export default {
  readingTime: 6,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'empire',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: "L'empire des tsars",
      body:
        "Vers 1800, la Russie est un immense empire qui s'étend de la mer Baltique à l'océan Pacifique. Le tsar y règne en monarque absolu, depuis la capitale Saint-Pétersbourg. La grande majorité des habitants sont des paysans, dont beaucoup sont des serfs, attachés à la terre de leur seigneur.",
      highlight: { value: 'Tsar', label: 'souverain absolu de la Russie' },
    },
    {
      id: '1812',
      tier: 1,
      type: 'war',
      nom: 'Campagne de Russie',
      annee: 1812,
      adversaires: ['France de Napoléon et ses alliés'],
      vainqueur: 'La Russie',
      consequences:
        "Les Russes reculent et brûlent tout derrière eux ; Moscou est incendiée. Pendant la retraite, dans le froid et la faim, la Grande Armée est presque détruite. En 1814, les troupes du tsar Alexandre Ier entrent dans Paris.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "De l'Empire russe à l'URSS",
      years: [1815, 1914, 1960],
      caption:
        "Changez d'année : l'empire s'étend vers le Caucase et l'Asie centrale au XIXe siècle ; l'URSS reprend ensuite l'essentiel de ces territoires.",
    },
    {
      id: 'revolutions',
      tier: 1,
      type: 'dates',
      kicker: 'Crise',
      title: 'De la révolution à l’URSS',
      items: [
        { year: 1905, label: 'Première révolution : le tsar doit accepter un Parlement, la Douma' },
        { year: 1914, label: "Entrée dans la Première Guerre mondiale contre l'Allemagne" },
        { year: 1917, label: "Février : le tsar Nicolas II abdique ; octobre : les bolcheviks de Lénine prennent le pouvoir" },
        { year: 1918, label: 'Début de la guerre civile ; la famille impériale est exécutée' },
        { year: 1922, label: "Naissance de l'URSS, l'Union soviétique" },
      ],
    },
    {
      id: 'lenine',
      tier: 1,
      type: 'person',
      nom: 'Lénine',
      role: 'Révolutionnaire, fondateur de l’URSS',
      dates: '1870 – 1924',
      description:
        "Chef du parti bolchevik, inspiré par Karl Marx, il dirige la révolution d'Octobre 1917. Il installe le premier État communiste du monde, avec un parti unique et une police politique, et gagne la guerre civile contre les « Blancs ».",
    },
    {
      id: 'staline',
      tier: 1,
      type: 'person',
      nom: 'Joseph Staline',
      role: 'Dirigeant de l’URSS',
      dates: '1878 – 1953',
      description:
        "Maître de l'URSS de la fin des années 1920 à sa mort, il impose les fermes collectives (kolkhozes) et une industrialisation à marche forcée. Son régime totalitaire fait des millions de victimes : famines, exécutions, déportations dans les camps du goulag.",
    },
    {
      id: 'grande-guerre-patriotique',
      tier: 1,
      type: 'war',
      nom: 'Grande Guerre patriotique',
      annee: 1941,
      adversaires: ['Allemagne nazie et ses alliés'],
      allies: ['Royaume-Uni', 'États-Unis'],
      vainqueur: "L'URSS et les Alliés",
      consequences:
        "Le 22 juin 1941, Hitler attaque l'URSS. La victoire de Stalingrad (février 1943) marque le tournant de la guerre. L'Armée rouge prend Berlin en mai 1945, mais l'URSS a perdu environ 27 millions de personnes.",
    },
    {
      id: 'guerre-froide',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Une superpuissance face aux États-Unis',
      body:
        "Après 1945, l'URSS impose des régimes communistes en Europe de l'Est : un « rideau de fer » coupe le continent. C'est la guerre froide contre les États-Unis. Les deux rivaux possèdent la bombe atomique et s'affrontent aussi dans l'espace : en 1957, les Soviétiques lancent Spoutnik, le premier satellite artificiel.",
      highlight: { value: '1957', label: 'Spoutnik, premier satellite' },
    },
    {
      id: 'fin-urss',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: "1991 : la fin de l'URSS",
      body:
        "À partir de 1985, Mikhaïl Gorbatchev tente de réformer le pays (perestroïka) et d'accorder plus de libertés (glasnost). Mais l'économie s'effondre et les peuples réclament leur indépendance. Le 25 décembre 1991, Gorbatchev démissionne : l'URSS disparaît et laisse place à 15 États indépendants, dont la Russie.",
      highlight: { value: '15', label: 'États nés de l’URSS' },
    },

    // ── Niveau 2 ──
    {
      id: 'servage',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'La fin du servage',
      body:
        "En 1861, le tsar Alexandre II abolit le servage : des millions de paysans deviennent libres. Mais ils doivent racheter leurs terres et restent pauvres. Le tsar est assassiné par des révolutionnaires en 1881.",
      highlight: { value: '1861', label: 'abolition du servage' },
    },
    {
      id: 'tolstoi',
      tier: 2,
      type: 'person',
      nom: 'Léon Tolstoï',
      role: 'Écrivain',
      dates: '1828 – 1910',
      description:
        "Son immense roman « Guerre et Paix » raconte la société russe pendant les guerres contre Napoléon. Avec Dostoïevski, Pouchkine ou Tchekhov, il fait du XIXe siècle un âge d'or de la littérature russe.",
    },
    {
      id: 'goulag',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: 'Le goulag',
      body:
        "Le goulag est le système des camps de travail forcé de l'URSS. Sous Staline, des millions de prisonniers, souvent innocents ou simples opposants, y travaillent dans des conditions terribles, parfois en Sibérie. L'écrivain Alexandre Soljenitsyne, ancien détenu, le fait connaître au monde.",
    },
    {
      id: 'gagarine',
      tier: 2,
      type: 'person',
      nom: 'Iouri Gagarine',
      role: 'Cosmonaute',
      dates: '1934 – 1968',
      description:
        "Le 12 avril 1961, à bord de la capsule Vostok 1, il devient le premier humain à voyager dans l'espace : il fait le tour de la Terre en 108 minutes environ. En 1963, Valentina Terechkova est la première femme dans l'espace.",
    },
    {
      id: 'russie-actuelle',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'La Russie depuis 1991',
      body:
        "Boris Eltsine est le premier président de la Russie (1991-1999), dans une période de grave crise économique. Vladimir Poutine, au pouvoir depuis 2000, renforce l'autorité de l'État et réduit les libertés. En 2014, la Russie annexe la Crimée ; en 2022, elle envahit l'Ukraine.",
    },
  ],

  quiz: [
    { id: 'tsar', type: 'mcq', prompt: 'Quel titre porte le souverain de la Russie avant 1917 ?', options: ['Tsar', 'Kaiser', 'Shah', 'Sultan'], answer: 0 },
    { id: 'napoleon', type: 'mcq', prompt: 'Qui envahit la Russie en 1812 ?', options: ['Napoléon Ier', 'Hitler', 'Guillaume II', 'Louis XIV'], answer: 0 },
    { id: 'moscou', type: 'tf', prompt: 'En 1812, Moscou est incendiée.', answer: true },
    { id: 'servage', type: 'mcq', prompt: 'En quelle année le servage est-il aboli en Russie ?', options: ['1861', '1789', '1917', '1905'], answer: 0 },
    { id: 'nicolas', type: 'mcq', prompt: 'Qui est le dernier tsar de Russie ?', options: ['Nicolas II', 'Alexandre II', 'Pierre le Grand', 'Ivan le Terrible'], answer: 0 },
    { id: 'lenine', type: 'mcq', prompt: 'Quel est le chef des bolcheviks qui prennent le pouvoir en octobre 1917 ?', options: ['Lénine', 'Nicolas II', 'Gorbatchev', 'Kerenski'], answer: 0 },
    { id: 'urss', type: 'mcq', prompt: "En quelle année l'URSS est-elle créée ?", options: ['1922', '1917', '1945', '1905'], answer: 0 },
    { id: 'kolkhozes', type: 'mcq', prompt: 'Comment appelle-t-on les fermes collectives imposées par Staline ?', options: ['Les kolkhozes', 'Les soviets', 'Les datchas', 'Les goulags'], answer: 0 },
    { id: 'goulag', type: 'mcq', prompt: "Qu'est-ce que le goulag ?", options: ['Un système de camps de travail forcé', 'Le Parlement russe', 'Un plan de développement économique', 'Une ferme collective'], answer: 0 },
    { id: 'barbarossa', type: 'mcq', prompt: "Comment s'appelle l'invasion allemande de l'URSS en 1941 ?", options: ['Opération Barbarossa', 'Opération Overlord', 'Opération Dynamo', 'Opération Tempête du désert'], answer: 0 },
    { id: 'stalingrad', type: 'mcq', prompt: "Quelle bataille marque le tournant de la guerre sur le front de l'Est ?", options: ['Stalingrad', 'Verdun', 'Borodino', 'Waterloo'], answer: 0 },
    { id: 'berlin', type: 'tf', prompt: "L'Armée rouge prend Berlin en 1945.", answer: true },
    { id: 'spoutnik', type: 'mcq', prompt: 'Quel est le premier satellite artificiel ?', options: ['Spoutnik', 'Apollo 11', 'Hubble', 'Vostok 1'], answer: 0 },
    { id: 'gagarine', type: 'mcq', prompt: "Qui est le premier humain à voyager dans l'espace, en 1961 ?", options: ['Iouri Gagarine', 'Neil Armstrong', 'Valentina Terechkova', 'Buzz Aldrin'], answer: 0 },
    { id: 'gorbatchev', type: 'mcq', prompt: 'Quel dirigeant lance la perestroïka ?', options: ['Mikhaïl Gorbatchev', 'Leonid Brejnev', 'Joseph Staline', 'Vladimir Poutine'], answer: 0 },
    { id: 'fin-urss', type: 'mcq', prompt: "En quelle année l'URSS disparaît-elle ?", options: ['1991', '1989', '1985', '2000'], answer: 0 },
    { id: 'quinze', type: 'tf', prompt: "En disparaissant, l'URSS laisse place à 15 États indépendants.", answer: true },
    { id: 'guerre-froide', type: 'tf', prompt: "Pendant la guerre froide, l'URSS et les États-Unis sont alliés.", answer: false, explanation: "Ils sont rivaux : deux superpuissances opposées, l'une communiste, l'autre capitaliste." },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Campagne de Russie de Napoléon', 'Abolition du servage', "Révolution d'Octobre", 'Bataille de Stalingrad', "Disparition de l'URSS"] },
  ],

  recap: [
    'Un immense empire gouverné par des tsars absolus ; Napoléon y échoue en 1812',
    '1917 : chute du tsar et révolution de Lénine ; l’URSS naît en 1922',
    'Staline : dictature, goulag, puis victoire de Stalingrad contre Hitler',
    'Guerre froide et conquête spatiale, puis fin de l’URSS en 1991',
  ],
}
