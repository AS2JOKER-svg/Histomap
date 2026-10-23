/** Chapitre rédigé : Lapita et premiers Polynésiens (vers −1350 – 1000). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des marins venus d’Asie',
      body:
        "Les Lapita descendent de peuples parlant des langues austronésiennes, partis de Taïwan des milliers d'années plus tôt. Vers −1350, ils apparaissent au nord-est de la Nouvelle-Guinée, dans l'archipel Bismarck.",
      highlight: { value: 'vers −1350', label: 'premières poteries lapita' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Pacifique vers l’an 1000',
      years: [1000],
      caption: 'Vers l’an 1000, les descendants des Lapita, les Polynésiens, s’apprêtent à peupler les îles les plus lointaines.',
    },
    {
      id: 'poterie',
      tier: 1,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Des poteries comme indices',
      body:
        "Les Lapita décorent leurs poteries de motifs imprimés avec un petit peigne dentelé. Partout où les archéologues en trouvent, ils savent que des Lapita sont passés. Le nom vient d'un site de Nouvelle-Calédonie.",
    },
    {
      id: 'expansion',
      tier: 1,
      type: 'text',
      kicker: 'Voyages',
      title: '4 000 km en trois siècles',
      body:
        "En deux ou trois siècles, ils traversent plus de 4 000 km d'océan jusqu'à Fidji, Tonga et Samoa, des îles où personne n'avait jamais vécu. Ils emportent porcs, chiens, poulets et plantes à cultiver.",
      highlight: { value: '4 000 km', label: 'parcourus en quelques siècles' },
    },
    {
      id: 'navigation',
      tier: 1,
      type: 'text',
      kicker: 'Sciences',
      title: 'Naviguer sans instrument',
      body:
        "Sur leurs pirogues à balancier, ils se repèrent au lever des étoiles, à la direction de la houle, aux nuages qui se forment au-dessus des îles et au vol des oiseaux qui rentrent à terre le soir.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Lapita en dates',
      items: [
        { year: -1350, label: 'Archipel Bismarck' },
        { year: -1000, label: 'Cimetière de Teouma (Vanuatu)' },
        { year: -850, label: 'Arrivée à Tonga' },
        { year: -800, label: 'Arrivée à Samoa' },
        { year: 1000, label: 'Départ vers la Polynésie orientale' },
      ],
    },
    {
      id: 'pause',
      tier: 1,
      type: 'text',
      kicker: 'Histoire',
      title: 'La longue pause',
      body:
        "Après Samoa, les voyages vers l'est s'arrêtent pendant près de deux mille ans. À Tonga et à Samoa, les descendants des Lapita développent la culture polynésienne.",
    },
    {
      id: 'triangle',
      tier: 1,
      type: 'text',
      kicker: 'Voyages',
      title: 'Le triangle polynésien',
      body:
        "Vers l'an 1000, les Polynésiens repartent vers l'est. En quelques siècles, ils peuplent Tahiti, les Marquises, Hawaï, l'île de Pâques et la Nouvelle-Zélande : un triangle d'environ 7 000 km de côté.",
    },
    {
      id: 'langues',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des langues cousines',
      body:
        "Du maori de Nouvelle-Zélande au hawaïen, les langues polynésiennes descendent de celles des Lapita et se ressemblent encore beaucoup.",
    },

    // ── Niveau 2 ──
    {
      id: 'teouma',
      tier: 2,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Le cimetière de Teouma',
      body:
        "Au Vanuatu, ce cimetière vieux d'environ 3 000 ans montre que les morts recevaient des soins particuliers : certains crânes étaient retirés et déposés à part, et des os étaient placés dans des poteries décorées.",
    },
    {
      id: 'obsidienne',
      tier: 2,
      type: 'text',
      kicker: 'Échanges',
      title: 'L’obsidienne voyageuse',
      body:
        "On retrouve sur des îles très éloignées de l'obsidienne, une pierre volcanique tranchante venue de Nouvelle-Bretagne : les communautés lapita restent reliées par des voyages.",
    },
    {
      id: 'tatouage',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Des motifs aux tatouages',
      body:
        "Les motifs des poteries lapita ressemblent à ceux des tatouages polynésiens. Certains chercheurs pensent qu'ils en sont l'origine.",
    },
    {
      id: 'tupaia',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'La carte de Tupaia',
      body:
        "En 1769, le navigateur tahitien Tupaia dessine pour James Cook une carte de dizaines d'îles du Pacifique : la preuve des immenses connaissances des navigateurs polynésiens.",
    },
    {
      id: 'hokulea',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le voyage de Hōkūleʻa',
      body:
        "En 1976, une pirogue double, Hōkūleʻa, relie Hawaï à Tahiti sans instrument, guidée par le navigateur Mau Piailug. Elle prouve que les voyages anciens étaient possibles.",
    },
  ],

  quiz: [
    { id: 'ocean', type: 'mcq', prompt: 'Quel océan les Lapita explorent-ils ?', options: ['Le Pacifique', 'L’Atlantique', 'L’océan Indien', 'L’océan Arctique'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'De quelle île sont partis, des milliers d’années plus tôt, les ancêtres des Lapita ?', options: ['Taïwan', 'Madagascar', 'L’Islande', 'Cuba'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'À quelle famille appartiennent les langues des Lapita ?', options: ['Austronésienne', 'Indo-européenne', 'Sémitique', 'Bantoue'], answer: 0 },
    { id: 'poterie', type: 'mcq', prompt: 'Grâce à quels objets reconnaît-on les sites lapita ?', options: ['Des poteries décorées', 'Des pyramides', 'Des pièces de monnaie', 'Des statues géantes'], answer: 0 },
    { id: 'nom', type: 'mcq', prompt: 'D’où vient le nom « Lapita » ?', options: ['D’un site de Nouvelle-Calédonie', 'D’un roi', 'D’un dieu', 'D’un bateau'], answer: 0 },
    { id: 'iles', type: 'mcq', prompt: 'Jusqu’à quelles îles les Lapita parviennent-ils vers −800 ?', options: ['Tonga et Samoa', 'Hawaï', 'L’île de Pâques', 'La Nouvelle-Zélande'], answer: 0 },
    { id: 'vierges', type: 'tf', prompt: 'Tonga et Samoa étaient inhabitées avant l’arrivée des Lapita.', answer: true },
    { id: 'reperes', type: 'mcq', prompt: 'Comment les navigateurs se repèrent-ils en mer ?', options: ['Aux étoiles, à la houle et aux oiseaux', 'Avec une boussole', 'Avec un GPS', 'Avec des cartes imprimées'], answer: 0 },
    { id: 'pirogue', type: 'mcq', prompt: 'Sur quel type de bateau voyagent-ils ?', options: ['Des pirogues à balancier', 'Des galères', 'Des caravelles', 'Des bateaux à vapeur'], answer: 0 },
    { id: 'animaux', type: 'mcq', prompt: 'Quels animaux emportent-ils dans leurs pirogues ?', options: ['Porcs, chiens et poulets', 'Chevaux et vaches', 'Chameaux et ânes', 'Lamas et alpagas'], answer: 0 },
    { id: 'pause', type: 'mcq', prompt: 'Combien de temps environ dure la « longue pause » avant les voyages vers l’est ?', options: ['Près de deux mille ans', 'Dix ans', 'Un siècle', 'Cinquante mille ans'], answer: 0 },
    { id: 'triangle', type: 'mcq', prompt: 'Quelles îles forment les pointes du triangle polynésien ?', options: ['Hawaï, la Nouvelle-Zélande et l’île de Pâques', 'Tahiti, Fidji et Samoa', 'Java, Bornéo et Sumatra', 'Le Japon, Taïwan et les Philippines'], answer: 0 },
    { id: 'teouma', type: 'mcq', prompt: 'Dans quel pays se trouve le cimetière lapita de Teouma ?', options: ['Le Vanuatu', 'La France', 'Le Chili', 'Le Japon'], answer: 0 },
    { id: 'obsidienne', type: 'mcq', prompt: 'Qu’est-ce que l’obsidienne ?', options: ['Une pierre volcanique tranchante', 'Un poisson', 'Une plante', 'Un tissu'], answer: 0 },
    { id: 'hokulea', type: 'tf', prompt: 'En 1976, la pirogue Hōkūleʻa relie Hawaï à Tahiti sans instrument.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Archipel Bismarck', 'Cimetière de Teouma (Vanuatu)', 'Arrivée à Samoa', 'Départ vers la Polynésie orientale'] },
  ],

  recap: [
    'Vers −1350, les Lapita, marins austronésiens, apparaissent près de la Nouvelle-Guinée',
    'En trois siècles, ils peuplent les îles jusqu’à Tonga et Samoa',
    'Poteries décorées et navigation aux étoiles, à la houle et aux oiseaux',
    'Leurs descendants, les Polynésiens, peuplent ensuite tout le triangle polynésien',
  ],
}
