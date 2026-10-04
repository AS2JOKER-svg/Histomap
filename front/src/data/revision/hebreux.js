/** Chapitre rédigé : Israël et Juda, les Hébreux (≈ 1200 av. J.-C. – 70 apr. J.-C.). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un peuple de Canaan',
      body:
        "La Bible raconte l'histoire des Hébreux depuis Abraham et Moïse, mais ces récits relèvent de la tradition religieuse. Pour les historiens, le peuple d'Israël se forme vers 1200 av. J.-C. dans les collines de Canaan. Une stèle du pharaon Mérenptah, vers 1208 av. J.-C., est le plus ancien document à citer le nom « Israël ».",
      highlight: { value: '≈ 1208 av. J.-C.', label: 'première mention d’« Israël » (stèle égyptienne)' },
    },
    {
      id: 'monotheisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un seul Dieu',
      body:
        "Les Hébreux finissent par adorer un dieu unique, Yahvé : c'est le monothéisme. Ce Dieu ne doit pas être représenté par des images. Il impose des règles morales, comme les Dix Commandements, et un jour de repos chaque semaine, le shabbat.",
    },
    {
      id: 'david',
      tier: 1,
      type: 'person',
      nom: 'David',
      role: "Roi d'Israël selon la Bible",
      dates: 'vers 1000 av. J.-C. (selon la tradition)',
      description: "D'après la Bible, ce berger, vainqueur du géant Goliath, devient roi et fait de Jérusalem sa capitale. Une inscription du IXe siècle av. J.-C. mentionne la « maison de David », mais l'étendue réelle de son royaume est discutée par les archéologues.",
    },
    {
      id: 'temple',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Salomon et le Temple',
      body:
        "Selon la Bible, Salomon, fils de David, fait bâtir à Jérusalem le Temple dédié à Yahvé, avec l'aide du roi phénicien Hiram de Tyr. Le Temple devient le cœur de la religion des Hébreux. Aucun vestige de ce premier Temple n'a été retrouvé avec certitude.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un petit pays entre les empires',
      years: [-1000, -700],
      caption: "Entre l'Égypte et la Mésopotamie, le pays des Hébreux est un passage obligé pour les armées. Comparez : vers 700 av. J.-C., il est divisé et menacé par l'Assyrie.",
    },
    {
      id: 'deux-royaumes',
      tier: 1,
      type: 'dates',
      kicker: 'Crise',
      title: 'Deux royaumes face aux empires',
      items: [
        { year: -931, label: 'Division en deux royaumes : Israël au nord, Juda au sud (date traditionnelle)' },
        { year: -722, label: "L'Assyrie prend Samarie : fin du royaume d'Israël" },
        { year: -587, label: 'Nabuchodonosor II détruit Jérusalem et le Temple' },
        { year: -538, label: 'Le Perse Cyrus autorise le retour des exilés' },
      ],
    },
    {
      id: 'exil',
      tier: 1,
      type: 'text',
      kicker: 'Fluctuations',
      title: "L'exil à Babylone",
      body:
        "En 587 av. J.-C., le roi de Babylone Nabuchodonosor II prend Jérusalem, détruit le Temple et déporte une partie des habitants. Loin de leur terre, les exilés rassemblent et mettent par écrit une grande partie de leurs textes sacrés. Après leur retour, un second Temple est bâti vers 515 av. J.-C.",
      highlight: { value: '587 av. J.-C.', label: 'destruction du premier Temple' },
    },
    {
      id: 'revolte',
      tier: 1,
      type: 'war',
      nom: 'Première guerre judéo-romaine',
      annee: 66,
      adversaires: ['Empire romain (Vespasien puis son fils Titus)'],
      allies: ['Insurgés juifs de Judée'],
      vainqueur: 'Rome',
      consequences: "En 70, Titus prend Jérusalem après un terrible siège : la ville et le second Temple sont détruits. La forteresse de Massada tombe quelques années plus tard. De plus en plus de Juifs vivent dispersés hors de Judée : c'est la diaspora.",
    },
    {
      id: 'bible',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'La Bible, un livre qui a changé le monde',
      body:
        "La Bible hébraïque, dont les cinq premiers livres forment la Torah, est le texte fondateur du judaïsme. Elle devient l'Ancien Testament des chrétiens et inspire aussi l'islam. Le monothéisme des Hébreux est ainsi à l'origine des trois grandes religions monothéistes.",
    },

    // ── Niveau 2 ──
    {
      id: 'ezechias',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: '≈ 533 m',
      label: "de tunnel creusé dans la roche sous Jérusalem",
      caption: "Vers 700 av. J.-C., face à la menace assyrienne, le roi Ézéchias fait creuser un tunnel pour amener l'eau d'une source à l'intérieur de la ville. Une inscription raconte que deux équipes, parties de chaque bout, se sont rejointes au milieu.",
    },
    {
      id: 'maccabees',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: 'La révolte des Maccabées',
      body:
        "En 167 av. J.-C., le roi grec séleucide Antiochos IV interdit les pratiques juives. Les Maccabées se révoltent et reprennent le Temple, qui est de nouveau consacré : la fête de Hanoukka en garde le souvenir. Leurs descendants dirigent un royaume juif indépendant.",
    },
    {
      id: 'herode',
      tier: 2,
      type: 'person',
      nom: 'Hérode le Grand',
      role: 'Roi de Judée, allié de Rome',
      dates: 'règne 37 – 4 av. J.-C.',
      description: "Placé sur le trône par les Romains, qui contrôlent la région depuis 63 av. J.-C., il agrandit magnifiquement le second Temple. Le « mur des Lamentations » (mur occidental) est un vestige de ses travaux. Il est aussi connu pour sa cruauté.",
    },
    {
      id: 'jesus',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Jésus, un Juif de Galilée',
      body:
        "Jésus de Nazareth naît à la fin du règne d'Hérode et prêche en Galilée. Il est crucifié à Jérusalem vers 30 sous l'autorité du gouverneur romain Ponce Pilate. Ses disciples fondent le christianisme, issu du judaïsme.",
    },
    {
      id: 'qumran',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Les manuscrits de la mer Morte',
      body:
        "En 1947, des bergers découvrent dans des grottes près de Qumran des jarres contenant des rouleaux très anciens. Copiés entre le IIIe siècle av. J.-C. et le Ier siècle apr. J.-C., ils comptent parmi les plus anciens manuscrits connus de la Bible hébraïque.",
    },
  ],

  quiz: [
    { id: 'monotheisme', type: 'mcq', prompt: 'Comment appelle-t-on la croyance en un seul Dieu ?', options: ['Le monothéisme', 'Le polythéisme', "L'animisme", 'Le paganisme'], answer: 0 },
    { id: 'dieu', type: 'mcq', prompt: 'Quel est le nom du Dieu des Hébreux ?', options: ['Yahvé', 'Baal', 'Mardouk', 'Zeus'], answer: 0 },
    { id: 'merenptah', type: 'tf', prompt: 'Le plus ancien document qui cite le nom « Israël » est une stèle égyptienne.', answer: true },
    { id: 'capitale', type: 'mcq', prompt: 'Selon la Bible, quelle ville le roi David choisit-il comme capitale ?', options: ['Jérusalem', 'Babylone', 'Tyr', 'Damas'], answer: 0 },
    { id: 'goliath', type: 'mcq', prompt: 'Selon la Bible, quel géant le jeune David affronte-t-il ?', options: ['Goliath', 'Hercule', 'Gilgamesh', 'Polyphème'], answer: 0 },
    { id: 'salomon', type: 'mcq', prompt: 'Selon la Bible, quel roi fait construire le premier Temple de Jérusalem ?', options: ['Salomon', 'Hérode', 'Cyrus', 'Ézéchias'], answer: 0 },
    { id: 'shabbat', type: 'mcq', prompt: 'Comment s’appelle le jour de repos hebdomadaire des Hébreux ?', options: ['Le shabbat', 'Le ramadan', 'Le dimanche', 'Hanoukka'], answer: 0 },
    { id: 'images', type: 'tf', prompt: 'Les Hébreux représentent Yahvé par de grandes statues dans le Temple.', answer: false, explanation: 'Leur religion interdit de représenter Dieu par des images.' },
    { id: 'samarie', type: 'mcq', prompt: "Quel empire détruit le royaume d'Israël en 722 av. J.-C. ?", options: ["L'Assyrie", 'Rome', "L'Égypte", 'La Perse'], answer: 0 },
    { id: 'nabuchodonosor', type: 'mcq', prompt: 'Quel roi de Babylone détruit Jérusalem et le Temple en 587 av. J.-C. ?', options: ['Nabuchodonosor II', 'Hammurabi', 'Cyrus II', 'Ramsès II'], answer: 0 },
    { id: 'cyrus', type: 'mcq', prompt: 'Quel roi perse autorise les exilés à rentrer à Jérusalem ?', options: ['Cyrus', 'Darius III', 'Xerxès', 'Alexandre'], answer: 0 },
    { id: 'torah', type: 'mcq', prompt: 'Comment s’appellent les cinq premiers livres de la Bible hébraïque ?', options: ['La Torah', 'Le Coran', "L'Iliade", 'Les Évangiles'], answer: 0 },
    { id: 'hanoukka', type: 'mcq', prompt: 'Quelle fête juive rappelle la nouvelle consécration du Temple par les Maccabées ?', options: ['Hanoukka', 'Pâques', 'Noël', 'Le Nouvel An'], answer: 0 },
    { id: 'mur', type: 'mcq', prompt: 'Le mur des Lamentations est un vestige des travaux de quel roi ?', options: ['Hérode le Grand', 'David', 'Salomon', 'Nabuchodonosor'], answer: 0 },
    { id: 'titus', type: 'mcq', prompt: 'Quel général romain détruit Jérusalem et le second Temple en 70 ?', options: ['Titus', 'Jules César', 'Pompée', 'Auguste'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ["Prise de Samarie par l'Assyrie", 'Destruction du premier Temple par Nabuchodonosor II', 'Retour des exilés autorisé par Cyrus', 'Destruction du second Temple par Titus'] },
    { id: 'religions', type: 'tf', prompt: 'Le monothéisme des Hébreux est à l’origine du judaïsme, et il a inspiré le christianisme et l’islam.', answer: true },
    { id: 'qumran', type: 'mcq', prompt: 'Près de quelle mer ont été découverts en 1947 de très anciens manuscrits bibliques ?', options: ['La mer Morte', 'La mer Rouge', 'La mer Noire', 'La mer Égée'], answer: 0 },
  ],

  recap: [
    '≈ 1200 av. J.-C. : le peuple d’Israël se forme en Canaan',
    'Monothéisme : un seul Dieu, Yahvé, et la Bible hébraïque',
    '587 av. J.-C. : destruction du Temple et exil à Babylone',
    '70 apr. J.-C. : Rome détruit le second Temple ; la diaspora s’étend',
  ],
}
