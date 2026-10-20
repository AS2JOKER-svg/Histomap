/** Chapitre rédigé : Empire timouride (1370 – 1507). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'tamerlan',
      tier: 1,
      type: 'person',
      nom: 'Tamerlan',
      role: 'Émir et conquérant',
      dates: '1336 – 1405',
      description:
        "Émir turco-mongol de Transoxiane, il prend le pouvoir à Samarcande en 1370. Blessé jeune, il boite : son surnom persan, Timour-e Lang, « Timour le Boiteux », a donné « Tamerlan ».",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire de Tamerlan',
      years: [1400, 1500],
      caption: 'Comparez : immense à la mort de Tamerlan, l’empire se divise ensuite entre ses descendants.',
    },
    {
      id: 'conquetes',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'Trente-cinq ans de campagnes',
      body:
        "Tamerlan ravage l'Iran, bat la Horde d'or (1395), pille Delhi (1398) et Bagdad (1401). Ses conquêtes s'accompagnent de massacres : les chroniqueurs racontent qu'il faisait élever des pyramides de crânes après la prise de certaines villes.",
    },
    {
      id: 'ankara',
      tier: 1,
      type: 'war',
      nom: 'Bataille d’Ankara',
      annee: 1402,
      adversaires: ['Empire ottoman (Bayezid Ier)'],
      allies: ['Armée de Tamerlan'],
      vainqueur: 'Tamerlan',
      consequences:
        "Le sultan ottoman Bayezid Ier est capturé et meurt en captivité. L'Empire ottoman traverse une crise de onze ans, qui retarde la prise de Constantinople d'un demi-siècle.",
    },
    {
      id: 'samarcande',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Samarcande la bleue',
      body:
        "Tamerlan fait de Samarcande une capitale grandiose, avec la mosquée Bibi-Khanym et son mausolée, le Gour Emir. Il y fait venir de force des milliers d'artisans, d'architectes et de savants des pays conquis. Les coupoles sont couvertes de céramique bleue.",
    },
    {
      id: 'ulugh-beg',
      tier: 1,
      type: 'person',
      nom: 'Ulugh Beg',
      role: 'Prince astronome',
      dates: '1394 – 1449',
      description:
        "Petit-fils de Tamerlan, il gouverne Samarcande pendant quarante ans. Il fait construire un immense observatoire et dresse un catalogue de plus de 1 000 étoiles. Il est assassiné sur ordre de son propre fils.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’empire timouride en dates',
      items: [
        { year: 1370, label: 'Tamerlan maître de Samarcande' },
        { year: 1398, label: 'Sac de Delhi' },
        { year: 1402, label: 'Victoire d’Ankara' },
        { year: 1405, label: 'Mort de Tamerlan' },
        { year: 1428, label: 'Observatoire d’Ulugh Beg' },
        { year: 1507, label: 'Les Ouzbeks prennent Hérat' },
      ],
    },
    {
      id: 'renaissance',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'La renaissance timouride',
      body:
        "Les descendants de Tamerlan, comme Shah Rukh à Hérat, protègent poètes, peintres et calligraphes. Hérat devient la capitale de l'art du livre : le peintre Behzad y réalise des miniatures célèbres.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Des Ouzbeks aux Moghols',
      body:
        "Divisé entre princes rivaux, l'empire tombe aux mains des Ouzbeks, qui prennent Samarcande (1500) puis Hérat (1507). Un descendant de Tamerlan, Babur, part conquérir l'Inde, où il fonde l'Empire moghol en 1526.",
    },

    // ── Niveau 2 ──
    {
      id: 'emir',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Pourquoi « émir » et non « khan » ?',
      body:
        "Dans le monde mongol, seuls les descendants de Gengis Khan peuvent porter le titre de khan. Tamerlan, qui n'en descend pas, se contente du titre d'émir. Il épouse une princesse gengiskhanide et se fait appeler « gendre ».",
    },
    {
      id: 'clavijo',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un ambassadeur espagnol',
      body:
        "En 1404, l'ambassadeur du roi de Castille, Ruy González de Clavijo, arrive à Samarcande. Il décrit Tamerlan, vieux et presque aveugle, recevant ses visiteurs dans des jardins plantés de tentes de soie.",
    },
    {
      id: 'ibn-khaldoun',
      tier: 2,
      type: 'text',
      kicker: 'Rencontre',
      title: 'L’historien et le conquérant',
      body:
        "En 1401, devant Damas assiégée, le grand historien maghrébin Ibn Khaldoun rencontre Tamerlan. Il raconte leurs longues conversations sur l'histoire et la géographie.",
    },
    {
      id: 'tombe',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'La tombe ouverte',
      body:
        "En 1941, des savants soviétiques ouvrent la tombe de Tamerlan au Gour Emir. Son squelette confirme qu'il boitait, comme l'indique son surnom.",
    },
    {
      id: 'navoi',
      tier: 2,
      type: 'person',
      nom: 'Ali-Shir Navaï',
      role: 'Poète et ministre',
      dates: '1441 – 1501',
      description: "Ministre du souverain d'Hérat Husayn Bayqara, il est le plus grand poète en langue turque tchaghataï. En Ouzbékistan, il est considéré comme le père de la littérature nationale.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’Empire timouride ?', options: ['Tamerlan', 'Gengis Khan', 'Babur', 'Soliman'], answer: 0 },
    { id: 'surnom', type: 'mcq', prompt: 'Que signifie le surnom « Timour-e Lang » ?', options: ['Timour le Boiteux', 'Timour le Grand', 'Timour le Sage', 'Timour le Cruel'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville Tamerlan choisit-il pour capitale ?', options: ['Samarcande', 'Bagdad', 'Delhi', 'Istanbul'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Samarcande ?', options: ['L’Ouzbékistan', 'L’Iran', 'L’Inde', 'La Turquie'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Pourquoi Tamerlan ne prend-il pas le titre de khan ?', options: ['Il ne descend pas de Gengis Khan', 'Il est trop jeune', 'Le calife le lui interdit', 'Il n’est pas musulman'], answer: 0 },
    { id: 'delhi', type: 'mcq', prompt: 'Quelle ville de l’Inde Tamerlan pille-t-il en 1398 ?', options: ['Delhi', 'Bombay', 'Calcutta', 'Madras'], answer: 0 },
    { id: 'ankara', type: 'mcq', prompt: 'Quel sultan ottoman Tamerlan capture-t-il à Ankara en 1402 ?', options: ['Bayezid Ier', 'Mehmed II', 'Soliman', 'Osman Ier'], answer: 0 },
    { id: 'massacres', type: 'tf', prompt: 'Les conquêtes de Tamerlan s’accompagnent de massacres.', answer: true },
    { id: 'artisans', type: 'tf', prompt: 'Tamerlan fait venir de force à Samarcande des artisans des pays conquis.', answer: true },
    { id: 'ulugh-beg', type: 'mcq', prompt: 'Pour quoi le prince Ulugh Beg est-il célèbre ?', options: ['L’astronomie', 'La navigation', 'La peinture', 'La médecine'], answer: 0 },
    { id: 'etoiles', type: 'mcq', prompt: 'Combien d’étoiles compte environ le catalogue d’Ulugh Beg ?', options: ['Plus de 1 000', '12', '50', 'Un million'], answer: 0 },
    { id: 'herat', type: 'mcq', prompt: 'Quelle ville devient la capitale de l’art du livre sous les Timourides ?', options: ['Hérat', 'Paris', 'Venise', 'Kyoto'], answer: 0 },
    { id: 'behzad', type: 'mcq', prompt: 'Quel peintre de miniatures travaille à Hérat ?', options: ['Behzad', 'Rembrandt', 'Michel-Ange', 'Hokusai'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui prend Samarcande et Hérat au début du XVIe siècle ?', options: ['Les Ouzbeks', 'Les Mongols', 'Les Russes', 'Les Chinois'], answer: 0 },
    { id: 'babur', type: 'mcq', prompt: 'Quel empire fonde Babur, descendant de Tamerlan ?', options: ['L’Empire moghol', 'L’Empire ottoman', 'L’Empire safavide', 'L’Empire russe'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Tamerlan maître de Samarcande', 'Sac de Delhi', 'Bataille d’Ankara', 'Les Ouzbeks prennent Hérat'] },
  ],

  recap: [
    '1370 : Tamerlan, émir turco-mongol, prend le pouvoir à Samarcande',
    'Conquêtes dévastatrices : Horde d’or, Delhi (1398), Ankara (1402)',
    'Samarcande et Hérat, capitales des arts et des sciences (Ulugh Beg)',
    'Les Ouzbeks prennent l’empire ; Babur fonde l’Empire moghol',
  ],
}
