/** Chapitre rédigé : Saba et Himyar, Arabie du Sud (vers 800 av. J.-C. – 525). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'arabie-heureuse',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'L’« Arabie heureuse »',
      body:
        "Dans le sud-ouest de l'Arabie, dans l'actuel Yémen, les pluies de mousson rendent les vallées fertiles. Des royaumes s'y développent, comme Saba, Qataban et le Hadramaout. Les Romains appellent ce pays l'« Arabie heureuse ».",
      highlight: { value: '> 1 300 ans', label: 'de royaumes sudarabiques' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les royaumes de l’Arabie du Sud',
      years: [-500, -100, 300, 500],
      caption: 'Comparez : plusieurs royaumes se partagent le sud de l’Arabie, avant l’unification par Himyar.',
    },
    {
      id: 'encens',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'L’or parfumé',
      body:
        "L'encens et la myrrhe sont des résines d'arbres qui poussent dans le sud de l'Arabie. Brûlés dans tous les temples du monde antique, ils valent très cher. Des caravanes de chameaux les transportent jusqu'à la Méditerranée par la route de l'encens.",
    },
    {
      id: 'barrage',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découvertes',
      value: '≈ 600 m',
      label: 'de long pour le barrage de Marib',
      caption: "Ce barrage retient les eaux de crue pour irriguer l'oasis de Marib, capitale de Saba. Réparé plusieurs fois, il cède définitivement vers 570.",
    },
    {
      id: 'reine',
      tier: 1,
      type: 'person',
      nom: 'La reine de Saba',
      role: 'Reine légendaire',
      dates: 'Xe siècle av. J.-C. selon la tradition',
      description:
        "La Bible et le Coran racontent qu'elle rend visite au roi Salomon avec de l'or et des aromates. Aucune inscription ne permet de dire qui elle était : son existence n'est pas prouvée.",
    },
    {
      id: 'gallus',
      tier: 1,
      type: 'war',
      nom: 'Expédition d’Aelius Gallus',
      annee: -25,
      adversaires: ['Empire romain (Aelius Gallus)'],
      allies: ['Royaumes d’Arabie du Sud'],
      vainqueur: 'Royaumes d’Arabie du Sud',
      consequences:
        "L'empereur Auguste envoie une armée conquérir le pays de l'encens. Épuisée par la chaleur, la soif et la maladie, elle échoue devant Marib. Rome préfère ensuite commercer par la mer.",
    },
    {
      id: 'himyar',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Himyar unifie le Sud',
      body:
        "Le royaume de Himyar, né vers 110 av. J.-C. dans les hautes terres, conquiert Saba à la fin du IIIe siècle, puis tout le sud de l'Arabie. Sa capitale est Zafar. Vers 380, ses rois abandonnent les anciens dieux pour un dieu unique.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’Arabie du Sud en dates',
      items: [
        { year: -700, label: 'Karib’il Watar domine le Sud' },
        { year: -25, label: 'Échec de l’expédition romaine' },
        { year: 275, label: 'Himyar unifie le Sud' },
        { year: 380, label: 'Les rois adoptent un dieu unique' },
        { year: 525, label: 'Conquête par Aksoum' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La conquête aksoumite',
      body:
        "En 523, le roi de Himyar, converti au judaïsme, fait massacrer les chrétiens de la ville de Najran. Avec le soutien de Byzance, le roi chrétien d'Aksoum, en Éthiopie, envahit le pays en 525 : le royaume de Himyar disparaît.",
    },

    // ── Niveau 2 ──
    {
      id: 'almaqah',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le dieu Almaqah',
      body:
        "À Saba, le dieu principal est Almaqah. Son grand temple de Marib, appelé aujourd'hui « Mahram Bilqis », reçoit des pèlerins et de riches offrandes. Chaque royaume a son propre dieu protecteur.",
    },
    {
      id: 'ecriture',
      tier: 2,
      type: 'text',
      kicker: 'Langue',
      title: 'Des milliers d’inscriptions',
      body:
        "Les Sudarabiques écrivent leur langue dans un alphabet aux lettres géométriques. Ils ont laissé des milliers d'inscriptions sur pierre et, plus tard, sur des bâtonnets de bois, qui racontent les guerres, les travaux et les offrandes.",
    },
    {
      id: 'maisons',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Des maisons à étages',
      body:
        "Dès l'Antiquité, les Sudarabiques bâtissent des maisons de pierre à plusieurs étages. Cette tradition se retrouve aujourd'hui dans les « gratte-ciel » de terre de la ville de Shibam, au Yémen.",
    },
    {
      id: 'mer',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'La concurrence de la mer',
      body:
        "Au Ier siècle, les marins grecs et romains apprennent à utiliser les vents de mousson pour naviguer directement vers l'Inde. La route maritime concurrence les caravanes : les royaumes de l'intérieur s'appauvrissent, tandis que Himyar, tourné vers la mer, s'enrichit.",
    },
    {
      id: 'aksoum',
      tier: 2,
      type: 'war',
      nom: 'Conquête aksoumite de Himyar',
      annee: 525,
      adversaires: ['Royaume d’Aksoum (Kaleb)'],
      allies: ['Himyar (Yusuf)'],
      vainqueur: 'Royaume d’Aksoum',
      consequences: "Le roi Yusuf est tué. Le Yémen passe sous la domination de chefs chrétiens venus d'Aksoum, puis des Perses en 570.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvent Saba et Himyar ?', options: ['Le Yémen', 'L’Égypte', 'L’Irak', 'La Turquie'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'Comment les Romains appellent-ils cette région ?', options: ['L’Arabie heureuse', 'Le Croissant fertile', 'La Terre promise', 'Le pays des Pharaons'], answer: 0 },
    { id: 'encens', type: 'mcq', prompt: 'Quelle résine fait la richesse de l’Arabie du Sud ?', options: ['L’encens', 'Le caoutchouc', 'La cire', 'La sève d’érable'], answer: 0 },
    { id: 'transport', type: 'mcq', prompt: 'Comment l’encens est-il transporté vers la Méditerranée ?', options: ['Par caravanes de chameaux', 'Par chemin de fer', 'Par avion', 'Par charrettes à bœufs'], answer: 0 },
    { id: 'marib', type: 'mcq', prompt: 'Quelle était la capitale de Saba ?', options: ['Marib', 'Pétra', 'Babylone', 'La Mecque'], answer: 0 },
    { id: 'barrage', type: 'mcq', prompt: 'À quoi sert le grand barrage de Marib ?', options: ['À irriguer l’oasis', 'À produire de l’électricité', 'À protéger des invasions', 'À stocker l’encens'], answer: 0 },
    { id: 'reine', type: 'mcq', prompt: 'Selon la Bible et le Coran, quel roi la reine de Saba visite-t-elle ?', options: ['Salomon', 'David', 'Cyrus', 'Pharaon Ramsès'], answer: 0 },
    { id: 'reine-preuve', type: 'tf', prompt: 'Des inscriptions de Saba prouvent l’existence de la reine de Saba.', answer: false, explanation: 'Son existence n’est pas prouvée.' },
    { id: 'gallus', type: 'mcq', prompt: 'Quel empereur envoie une armée en Arabie du Sud en 25 av. J.-C. ?', options: ['Auguste', 'Néron', 'Trajan', 'Constantin'], answer: 0 },
    { id: 'gallus-echec', type: 'tf', prompt: 'L’armée romaine conquiert l’Arabie du Sud.', answer: false, explanation: 'Elle échoue devant Marib, épuisée par la chaleur et la maladie.' },
    { id: 'himyar', type: 'mcq', prompt: 'Quel royaume unifie le sud de l’Arabie à la fin du IIIe siècle ?', options: ['Himyar', 'Les Nabatéens', 'L’Assyrie', 'L’Égypte'], answer: 0 },
    { id: 'monotheisme', type: 'mcq', prompt: 'Que décident les rois de Himyar vers 380 ?', options: ['Adorer un dieu unique', 'Adorer le Soleil', 'Devenir bouddhistes', 'Abandonner l’écriture'], answer: 0 },
    { id: 'almaqah', type: 'mcq', prompt: 'Quel est le grand dieu de Saba ?', options: ['Almaqah', 'Baal', 'Osiris', 'Zeus'], answer: 0 },
    { id: 'aksoum', type: 'mcq', prompt: 'Quel royaume chrétien conquiert Himyar en 525 ?', options: ['Aksoum', 'Byzance', 'L’Arménie', 'Rome'], answer: 0 },
    { id: 'shibam', type: 'mcq', prompt: 'Quelle ville yéménite est célèbre pour ses « gratte-ciel » de terre ?', options: ['Shibam', 'Dubaï', 'Djeddah', 'Mascate'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Karib’il Watar domine le Sud', 'Expédition d’Aelius Gallus', 'Himyar unifie le Sud', 'Conquête aksoumite'] },
  ],

  recap: [
    'Les royaumes de l’« Arabie heureuse » s’enrichissent de l’encens et de la myrrhe',
    'Le barrage de Marib irrigue l’oasis de Saba pendant plus d’un millénaire',
    'La reine de Saba : une figure de la Bible et du Coran, non prouvée',
    'Himyar unifie le Sud, adopte le monothéisme, conquis par Aksoum en 525',
  ],
}
