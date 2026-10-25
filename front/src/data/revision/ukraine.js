/** Chapitre rédigé : Ukraine (1917 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'republique',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une première indépendance',
      body:
        "Après les révolutions russes de 1917, un conseil ukrainien, la Rada centrale, proclame à Kyiv la République populaire ukrainienne. Elle se déclare indépendante en janvier 1918.",
      highlight: { value: '1918', label: 'indépendance proclamée' },
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'war',
      nom: 'Guerre soviéto-ukrainienne',
      annee: 1917,
      adversaires: ['Russie soviétique (bolcheviks)'],
      allies: ['République populaire ukrainienne', 'Pologne (1920)'],
      vainqueur: 'Russie soviétique',
      consequences:
        "Plusieurs armées se disputent l'Ukraine. Des pogroms commis par plusieurs d'entre elles font des dizaines de milliers de victimes juives. L'Ukraine devient une république soviétique, fondatrice de l'URSS en 1922.",
    },
    {
      id: 'holodomor',
      tier: 1,
      type: 'text',
      kicker: 'Famine',
      title: 'L’Holodomor',
      body:
        "En 1932-1933, la collectivisation forcée des terres et les réquisitions de céréales ordonnées sous Staline provoquent une famine qui fait environ 4 millions de morts en Ukraine. De nombreux pays la reconnaissent comme un génocide, une qualification discutée par une partie des historiens.",
    },
    {
      id: 'guerre-mondiale',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'La Seconde Guerre mondiale',
      body:
        "Occupée par l'Allemagne de 1941 à 1944, l'Ukraine perd plusieurs millions d'habitants. À Babi Yar, près de Kyiv, plus de 33 000 Juifs sont assassinés en deux jours en septembre 1941.",
    },
    {
      id: 'tchernobyl',
      tier: 1,
      type: 'text',
      kicker: 'Catastrophe',
      title: 'Tchernobyl',
      body:
        "Le 26 avril 1986, un réacteur de la centrale nucléaire de Tchernobyl explose. Plus de 100 000 personnes sont évacuées ; une zone d'environ 30 km reste interdite à l'habitation.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Ukraine en dates',
      items: [
        { year: 1918, label: 'Indépendance proclamée' },
        { year: 1922, label: 'Entrée dans l’URSS' },
        { year: 1932, label: 'Holodomor' },
        { year: 1986, label: 'Tchernobyl' },
        { year: 1991, label: 'Indépendance' },
        { year: 2014, label: 'Annexion de la Crimée par la Russie' },
      ],
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Ukraine',
      years: [1920, 2010],
      caption: 'Comparez : en 1920, l’Ukraine soviétique naissante ; en 2010, l’Ukraine indépendante, avec ses frontières de 1991.',
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Indépendance',
      title: 'L’indépendance de 1991',
      body:
        "Lors de la disparition de l'URSS, l'Ukraine proclame son indépendance le 24 août 1991. Le 1er décembre, plus de 90 % des votants l'approuvent par référendum.",
    },
    {
      id: 'donbass',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Donbass',
      annee: 2014,
      adversaires: ['Séparatistes de Donetsk et de Louhansk, soutenus par la Russie'],
      allies: ['Ukraine'],
      vainqueur: 'Conflit non résolu en 2020',
      consequences:
        "Après le mouvement de Maïdan, la Russie annexe la Crimée en mars 2014, une annexion non reconnue par la plupart des pays. Dans l'est, la guerre fait environ 13 000 morts jusqu'en 2020. En 2022, la Russie lance une invasion à grande échelle.",
    },

    // ── Niveau 2 ──
    {
      id: 'chevtchenko',
      tier: 2,
      type: 'person',
      nom: 'Taras Chevtchenko',
      role: 'Poète',
      dates: '1814 – 1861',
      description: "Né serf, il devient le grand poète national ukrainien. Ses poèmes ont beaucoup compté pour la langue et l'identité ukrainiennes.",
    },
    {
      id: 'tatars',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'La déportation des Tatars de Crimée',
      body:
        "En 1944, le pouvoir soviétique déporte en masse les Tatars de Crimée vers l'Asie centrale. Beaucoup meurent pendant le voyage ou dans les premières années.",
    },
    {
      id: 'budapest',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le mémorandum de Budapest',
      body:
        "En 1994, l'Ukraine renonce aux armes nucléaires héritées de l'URSS en échange de garanties de sécurité données par la Russie, les États-Unis et le Royaume-Uni.",
    },
    {
      id: 'orange',
      tier: 2,
      type: 'text',
      kicker: 'Démocratie',
      title: 'La révolution orange',
      body:
        "En 2004, après une élection présidentielle contestée, des manifestations pacifiques obtiennent l'organisation d'un nouveau vote.",
    },
    {
      id: 'grenier',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Le grenier à blé',
      body:
        "Grâce à ses terres noires très fertiles, l'Ukraine est un grand producteur de céréales et de tournesol : on la surnomme le « grenier à blé de l'Europe ».",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’Ukraine ?', options: ['Kyiv (Kiev)', 'Kharkiv', 'Odessa', 'Lviv'], answer: 0 },
    { id: 'rada', type: 'mcq', prompt: 'Quel conseil proclame la République populaire ukrainienne en 1917 ?', options: ['La Rada centrale', 'La Douma', 'Le Soviet de Petrograd', 'Le Sejm'], answer: 0 },
    { id: 'urss', type: 'mcq', prompt: 'De quel État l’Ukraine soviétique est-elle membre fondateur en 1922 ?', options: ['L’URSS', 'L’Union européenne', 'L’Empire russe', 'La Pologne'], answer: 0 },
    { id: 'holodomor', type: 'mcq', prompt: 'Comment appelle-t-on la grande famine de 1932-1933 en Ukraine ?', options: ['L’Holodomor', 'La Grande Purge', 'Le Goulag', 'La NEP'], answer: 0 },
    { id: 'cause', type: 'mcq', prompt: 'Quelle politique de Staline provoque la famine de 1932-1933 ?', options: ['La collectivisation forcée des terres', 'L’industrialisation de l’Ukraine', 'La guerre contre la Pologne', 'L’abolition du servage'], answer: 0 },
    { id: 'babi-yar', type: 'mcq', prompt: 'Où plus de 33 000 Juifs sont-ils assassinés en septembre 1941 ?', options: ['À Babi Yar, près de Kyiv', 'À Auschwitz', 'À Tchernobyl', 'À Odessa'], answer: 0 },
    { id: 'tchernobyl', type: 'mcq', prompt: 'Que se passe-t-il à Tchernobyl en 1986 ?', options: ['Un réacteur nucléaire explose', 'Un tremblement de terre', 'Une grande bataille', 'Une famine'], answer: 0 },
    { id: 'independance', type: 'mcq', prompt: 'En quelle année l’Ukraine devient-elle indépendante de l’URSS ?', options: ['1991', '1945', '1986', '2004'], answer: 0 },
    { id: 'referendum', type: 'tf', prompt: 'En décembre 1991, plus de 90 % des votants approuvent l’indépendance de l’Ukraine.', answer: true },
    { id: 'nucleaire', type: 'mcq', prompt: 'À quoi l’Ukraine renonce-t-elle en 1994 ?', options: ['Aux armes nucléaires héritées de l’URSS', 'À la Crimée', 'À sa langue', 'À la mer Noire'], answer: 0 },
    { id: 'orange', type: 'mcq', prompt: 'Comment appelle-t-on les manifestations de 2004 en Ukraine ?', options: ['La révolution orange', 'La révolution de Velours', 'Le Printemps de Prague', 'Solidarność'], answer: 0 },
    { id: 'crimee', type: 'mcq', prompt: 'Quelle région la Russie annexe-t-elle en 2014 ?', options: ['La Crimée', 'Le Donbass', 'La Galicie', 'Odessa'], answer: 0 },
    { id: 'reconnue', type: 'tf', prompt: 'L’annexion de la Crimée par la Russie est reconnue par la plupart des pays.', answer: false, explanation: 'La plupart des pays ne la reconnaissent pas.' },
    { id: 'chevtchenko', type: 'mcq', prompt: 'Qui est le grand poète national ukrainien ?', options: ['Taras Chevtchenko', 'Pouchkine', 'Tolstoï', 'Mickiewicz'], answer: 0 },
    { id: 'grenier', type: 'mcq', prompt: 'Quel surnom donne-t-on à l’Ukraine pour ses récoltes ?', options: ['Le grenier à blé de l’Europe', 'Le jardin de la France', 'L’usine du monde', 'Le pays du soleil levant'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Indépendance proclamée', 'Holodomor', 'Tchernobyl', 'Indépendance de 1991'] },
  ],

  recap: [
    '1917-1921 : une République populaire ukrainienne, puis une république soviétique',
    '1932-1933 : l’Holodomor ; 1941-1944 : occupation allemande et Shoah',
    '1986 : catastrophe de Tchernobyl ; 1991 : indépendance',
    'Révolution orange (2004), Maïdan, annexion de la Crimée et guerre du Donbass (2014)',
  ],
}
