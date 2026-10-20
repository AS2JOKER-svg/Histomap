/** Chapitre rédigé : Sarmates (vers 400 av. J.-C. – 375 apr. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'qui',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les héritiers des Scythes',
      body:
        "Les Sarmates sont des peuples nomades de langue iranienne venus des steppes entre la Volga et l'Oural. Aux IIIe et IIe siècles av. J.-C., ils s'avancent vers l'ouest et remplacent les Scythes au nord de la mer Noire. Ils ne forment pas un État unique, mais plusieurs peuples : Iazyges, Roxolans, Aorses, Alains…",
      highlight: { value: '≈ 750 ans', label: 'de présence dans les steppes' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les maîtres des steppes',
      years: [-100, 100],
      caption: 'Des bords du Danube à la Volga, les Sarmates dominent les grandes plaines au nord de la mer Noire.',
    },
    {
      id: 'cataphractes',
      tier: 1,
      type: 'text',
      kicker: 'Armée',
      title: 'Des cavaliers cuirassés',
      body:
        "Les cavaliers sarmates portent des armures d'écailles de métal ou de corne et chargent avec une très longue lance tenue à deux mains, le kontos. Les Romains, impressionnés, créent à leur tour des unités de cavaliers cuirassés, les cataphractaires.",
    },
    {
      id: 'amazones',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des femmes guerrières',
      body:
        "L'historien grec Hérodote raconte que les Sauromates, ancêtres des Sarmates, descendent des Amazones, des femmes guerrières de la légende. Les archéologues ont en effet trouvé de nombreuses tombes de femmes enterrées avec des armes.",
    },
    {
      id: 'chariots',
      tier: 1,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Une maison sur roues',
      body:
        "Les familles sarmates vivent dans de grands chariots couverts tirés par des bœufs, qui leur servent de maisons. Elles suivent leurs troupeaux de chevaux, de moutons et de bovins d'un pâturage à l'autre.",
    },
    {
      id: 'roxolans',
      tier: 1,
      type: 'war',
      nom: 'Raid des Roxolans en Mésie',
      annee: 69,
      adversaires: ['Empire romain'],
      allies: ['Cavaliers roxolans'],
      vainqueur: 'Empire romain',
      consequences:
        "Surpris par le dégel, alourdis par leur butin et leurs armures, environ 9 000 cavaliers roxolans sont écrasés par une légion romaine, selon Tacite.",
    },
    {
      id: 'marc-aurele',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des ennemis devenus soldats de Rome',
      body:
        "Pendant les guerres marcomanes, les Iazyges franchissent le Danube aux côtés de peuples germaniques. Vaincus, ils font la paix avec l'empereur Marc Aurèle en 175 et lui fournissent 8 000 cavaliers. 5 500 d'entre eux sont envoyés dans la lointaine province de Bretagne.",
      highlight: { value: '175', label: 'paix entre Rome et les Iazyges' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Sarmates en dates',
      items: [
        { year: -250, label: 'Les Sarmates passent à l’ouest du Don' },
        { year: 69, label: 'Raid des Roxolans écrasé en Mésie' },
        { year: 135, label: 'Arrien repousse les Alains en Cappadoce' },
        { year: 175, label: 'Paix entre Marc Aurèle et les Iazyges' },
        { year: 370, label: 'Les Huns soumettent les Alains' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Balayés par les Huns',
      body:
        "Vers 370, les Huns battent les Alains, le dernier grand peuple sarmate. Une partie se soumet et combat pour eux ; une autre fuit vers l'ouest. En 406, des Alains franchissent le Rhin avec les Vandales et les suivent jusqu'en Afrique du Nord.",
    },

    // ── Niveau 2 ──
    {
      id: 'epee',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Une épée plantée en terre',
      body:
        "Selon l'historien romain Ammien Marcellin, les Alains vénèrent une épée nue plantée dans le sol, symbole du dieu de la guerre. Les Sarmates enterrent leurs chefs dans des tertres funéraires, les kourganes, avec leurs armes et leurs bijoux.",
    },
    {
      id: 'or',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'L’or et les pierres de couleur',
      body:
        "Les orfèvres sarmates incrustent l'or de turquoises, de grenats et de verre coloré. Ce « style polychrome », éclatant, se diffusera ensuite chez d'autres peuples, comme les Goths.",
    },
    {
      id: 'ovide',
      tier: 2,
      type: 'person',
      nom: 'Ovide',
      role: 'Poète romain exilé',
      dates: '43 av. J.-C. – vers 17 apr. J.-C.',
      description:
        "Exilé par l'empereur Auguste à Tomis, sur la côte de la mer Noire, le grand poète se plaint dans ses lettres en vers du froid et des cavaliers sarmates qui traversent le Danube gelé pour piller la région.",
    },
    {
      id: 'ossetes',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une langue toujours vivante',
      body:
        "Les Ossètes, qui vivent dans le Caucase, parlent une langue descendant de celle des Alains : c'est le dernier écho vivant des langues des Sarmates et des Scythes.",
    },
    {
      id: 'sarmatisme',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les nobles polonais « sarmates »',
      body:
        "Du XVIe au XVIIIe siècle, la noblesse polonaise se dit descendante des Sarmates. Ce « sarmatisme » inspire ses vêtements, ses armes et ses valeurs guerrières, et la distingue des paysans.",
    },
  ],

  quiz: [
    { id: 'langue', type: 'mcq', prompt: 'À quelle famille appartiennent les langues des Sarmates ?', options: ['Langues iraniennes', 'Langues turques', 'Langues germaniques', 'Langues sémitiques'], answer: 0 },
    { id: 'predecesseurs', type: 'mcq', prompt: 'Quels nomades les Sarmates remplacent-ils au nord de la mer Noire ?', options: ['Les Scythes', 'Les Huns', 'Les Mongols', 'Les Khazars'], answer: 0 },
    { id: 'lance', type: 'mcq', prompt: 'Comment s’appelle la très longue lance des cavaliers sarmates ?', options: ['Le kontos', 'Le pilum', 'La sarisse', 'Le katana'], answer: 0 },
    { id: 'cataphractes', type: 'tf', prompt: 'Les Romains ont imité les cavaliers cuirassés des Sarmates.', answer: true, explanation: 'Ils créent des unités de cataphractaires.' },
    { id: 'amazones', type: 'mcq', prompt: 'Selon Hérodote, de qui descendent les Sauromates ?', options: ['Des Amazones', 'Des Troyens', 'Des Égyptiens', 'Des Vikings'], answer: 0 },
    { id: 'tombes', type: 'tf', prompt: 'Les archéologues ont trouvé des tombes de femmes sarmates enterrées avec des armes.', answer: true },
    { id: 'maisons', type: 'mcq', prompt: 'Où vivent les familles sarmates ?', options: ['Dans des chariots couverts', 'Dans des maisons de pierre', 'Dans des pyramides', 'Sur des bateaux'], answer: 0 },
    { id: 'roxolans', type: 'mcq', prompt: 'Qui écrase les cavaliers roxolans en 69 ?', options: ['Les Romains', 'Les Perses', 'Les Chinois', 'Les Huns'], answer: 0 },
    { id: 'empereur', type: 'mcq', prompt: 'Quel empereur fait la paix avec les Iazyges en 175 ?', options: ['Marc Aurèle', 'Auguste', 'Néron', 'Constantin'], answer: 0 },
    { id: 'bretagne', type: 'mcq', prompt: 'Où Rome envoie-t-elle 5 500 cavaliers iazyges ?', options: ['En Bretagne', 'En Égypte', 'En Inde', 'En Espagne'], answer: 0 },
    { id: 'huns', type: 'mcq', prompt: 'Quel peuple soumet les Alains vers 370 ?', options: ['Les Huns', 'Les Romains', 'Les Grecs', 'Les Arabes'], answer: 0 },
    { id: 'epee', type: 'mcq', prompt: 'Que vénèrent les Alains, selon Ammien Marcellin ?', options: ['Une épée plantée en terre', 'Un taureau sacré', 'Le soleil levant', 'Un arbre géant'], answer: 0 },
    { id: 'ovide', type: 'mcq', prompt: 'Quel poète romain exilé décrit les Sarmates au bord de la mer Noire ?', options: ['Ovide', 'Virgile', 'Homère', 'Horace'], answer: 0 },
    { id: 'ossetes', type: 'mcq', prompt: 'Quel peuple actuel parle une langue issue de celle des Alains ?', options: ['Les Ossètes', 'Les Hongrois', 'Les Finlandais', 'Les Basques'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: 'Les Sarmates ont laissé de nombreux textes écrits sur leur histoire.', answer: false, explanation: 'Ils n’écrivaient pas : on les connaît par l’archéologie et leurs voisins grecs et romains.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Les Sarmates passent à l’ouest du Don', 'Raid des Roxolans en Mésie', 'Paix avec Marc Aurèle', 'Les Huns soumettent les Alains'] },
  ],

  recap: [
    'Nomades de langue iranienne, successeurs des Scythes dans les steppes',
    'Cavaliers cuirassés à longue lance, imités par Rome',
    'Ennemis puis soldats de Rome sur le Danube (paix de 175)',
    'Vers 370, les Huns soumettent les Alains',
  ],
}
