/** Chapitre rédigé : Khanat de Crimée (1441 – 1783). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un héritier de la Horde d’or',
      body:
        "En 1441, alors que la Horde d'or éclate, Hacı Giray, un descendant de Gengis Khan, fonde un khanat indépendant en Crimée, la péninsule du nord de la mer Noire. Sa dynastie, les Giray, régnera plus de trois siècles.",
      highlight: { value: '1441', label: 'fondation du khanat' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Crimée et les steppes',
      years: [1500, 1600],
      caption: 'Le khanat domine la péninsule de Crimée et les steppes au nord de la mer Noire.',
    },
    {
      id: 'ottomans',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Vassal des Ottomans',
      body:
        "En 1475, les Ottomans prennent les comptoirs génois de Crimée. Le khan devient leur vassal : le sultan peut le nommer ou le destituer. Mais le khanat garde une grande autonomie et fournit aux sultans une cavalerie redoutable.",
    },
    {
      id: 'razzias',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Les razzias',
      body:
        "Chaque année ou presque, les cavaliers tatars lancent des raids en Pologne-Lituanie et en Russie pour capturer des hommes, des femmes et des enfants. Des centaines de milliers de captifs, surtout ukrainiens, polonais et russes, sont vendus comme esclaves sur les marchés de Crimée.",
    },
    {
      id: 'moscou',
      tier: 1,
      type: 'war',
      nom: 'Incendie de Moscou par les Tatars',
      annee: 1571,
      adversaires: ['Tsarat de Russie (Ivan IV)'],
      allies: ['Khanat de Crimée (Devlet Ier Giray)'],
      vainqueur: 'Khanat de Crimée',
      consequences: "L'armée du khan contourne les défenses russes et met le feu à Moscou ; l'incendie détruit presque toute la ville, à l'exception du Kremlin.",
    },
    {
      id: 'molodi',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Molodi',
      annee: 1572,
      adversaires: ['Tsarat de Russie'],
      allies: ['Khanat de Crimée', 'Troupes ottomanes'],
      vainqueur: 'Tsarat de Russie',
      consequences: "L'année suivante, l'armée tatare revient, mais elle est écrasée au sud de Moscou. La Crimée ne menacera plus jamais la survie de la Russie.",
    },
    {
      id: 'roxelane',
      tier: 1,
      type: 'person',
      nom: 'Hürrem Sultan (Roxelane)',
      role: 'Épouse de Soliman le Magnifique',
      dates: 'vers 1502 – 1558',
      description:
        "Née en Ruthénie, dans l'actuelle Ukraine, elle est capturée lors d'un raid tatar et vendue comme esclave à Istanbul. Elle devient l'épouse du sultan Soliman le Magnifique et l'une des femmes les plus puissantes de l'Empire ottoman.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Trois siècles de khanat',
      items: [
        { year: 1441, label: 'Fondation par Hacı Giray' },
        { year: 1475, label: 'Le khan vassal des Ottomans' },
        { year: 1502, label: 'Le khan détruit Saraï' },
        { year: 1571, label: 'Moscou incendiée' },
        { year: 1774, label: 'Indépendance vis-à-vis des Ottomans' },
        { year: 1783, label: 'Annexion par la Russie' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'L’annexion russe',
      body:
        "Au XVIIIe siècle, la Russie en pleine expansion attaque le khanat. Après sa victoire sur les Ottomans, elle le rend « indépendant » en 1774, puis Catherine II l'annexe en 1783. La Russie y fonde la base navale de Sébastopol.",
    },

    // ── Niveau 2 ──
    {
      id: 'palais',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La fontaine des larmes',
      body:
        "À Bakhtchissaraï, le palais des khans possède une fontaine construite en 1764, où l'eau coule goutte à goutte d'une vasque à l'autre comme des larmes. Le poète russe Pouchkine lui a consacré un poème célèbre.",
    },
    {
      id: 'giray',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Les descendants de Gengis Khan',
      body:
        "Les Giray tirent leur prestige de leur ascendance : ils descendent de Gengis Khan. Le khan partage pourtant le pouvoir avec les grandes familles nobles, les beys, qui peuvent s'opposer à lui.",
    },
    {
      id: 'cosaques',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Ennemis et alliés des Cosaques',
      body:
        "Les Tatars de Crimée et les Cosaques s'affrontent souvent dans les steppes. Pourtant, en 1648, le khan s'allie au chef cosaque Bohdan Khmelnytsky contre la Pologne, avant de l'abandonner en pleine bataille en 1651.",
    },
    {
      id: 'chevaux',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Plusieurs chevaux par cavalier',
      body:
        "Chaque cavalier tatar emmène plusieurs chevaux et change de monture pendant la marche. Cette cavalerie légère peut ainsi parcourir de très grandes distances en peu de temps.",
    },
    {
      id: 'deportation',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Tatars de Crimée aujourd’hui',
      body:
        "Héritiers du khanat, les Tatars de Crimée ont été déportés en masse vers l'Asie centrale sur ordre de Staline en 1944. Beaucoup sont revenus en Crimée à partir de la fin des années 1980.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde le khanat de Crimée en 1441 ?', options: ['Hacı Giray', 'Batu', 'Soliman', 'Ivan III'], answer: 0 },
    { id: 'ancetre', type: 'mcq', prompt: 'De qui descendent les khans Giray ?', options: ['De Gengis Khan', 'D’Attila', 'De Mahomet', 'De Charlemagne'], answer: 0 },
    { id: 'origine', type: 'mcq', prompt: 'De l’éclatement de quel empire naît le khanat de Crimée ?', options: ['La Horde d’or', 'L’Empire byzantin', 'L’Empire romain', 'L’Empire perse'], answer: 0 },
    { id: 'mer', type: 'mcq', prompt: 'Au bord de quelle mer se trouve la Crimée ?', options: ['La mer Noire', 'La mer Baltique', 'La Méditerranée', 'La mer du Nord'], answer: 0 },
    { id: 'suzerain', type: 'mcq', prompt: 'De quel empire le khan devient-il le vassal ?', options: ['L’Empire ottoman', 'L’Empire russe', 'Le Saint-Empire', 'L’Empire perse'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion des Tatars de Crimée ?', options: ['L’islam', 'Le christianisme orthodoxe', 'Le bouddhisme', 'Le judaïsme'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des khans ?', options: ['Bakhtchissaraï', 'Saraï', 'Istanbul', 'Kiev'], answer: 0 },
    { id: 'razzias', type: 'tf', prompt: 'Les Tatars de Crimée capturent des captifs lors de raids et les vendent comme esclaves.', answer: true },
    { id: 'moscou', type: 'mcq', prompt: 'Quelle ville le khan Devlet Ier Giray incendie-t-il en 1571 ?', options: ['Moscou', 'Varsovie', 'Vienne', 'Kiev'], answer: 0 },
    { id: 'molodi', type: 'mcq', prompt: 'Qui remporte la bataille de Molodi en 1572 ?', options: ['La Russie', 'Le khanat de Crimée', 'Les Ottomans', 'La Pologne'], answer: 0 },
    { id: 'roxelane', type: 'mcq', prompt: 'Quel sultan épouse Roxelane, capturée lors d’un raid tatar ?', options: ['Soliman le Magnifique', 'Mehmed II', 'Selim Ier', 'Bayezid II'], answer: 0 },
    { id: 'annexion', type: 'mcq', prompt: 'Quelle souveraine annexe la Crimée en 1783 ?', options: ['Catherine II', 'Élisabeth Ire', 'Marie-Thérèse', 'Victoria'], answer: 0 },
    { id: 'pouchkine', type: 'mcq', prompt: 'Quel poète écrit sur la fontaine de Bakhtchissaraï ?', options: ['Pouchkine', 'Victor Hugo', 'Homère', 'Shakespeare'], answer: 0 },
    { id: 'cosaques', type: 'tf', prompt: 'Le khan de Crimée s’allie en 1648 au chef cosaque Khmelnytsky.', answer: true },
    { id: 'deportation', type: 'mcq', prompt: 'Vers quelle région les Tatars de Crimée sont-ils déportés en 1944 ?', options: ['L’Asie centrale', 'L’Amérique', 'L’Afrique', 'Le Japon'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation du khanat', 'Le khan vassal des Ottomans', 'Incendie de Moscou', 'Annexion par la Russie'] },
  ],

  recap: [
    '1441 : Hacı Giray fonde le khanat lors de l’éclatement de la Horde d’or',
    'Vassal des Ottomans, il lance des razzias de captifs en Pologne et en Russie',
    '1571 : Moscou incendiée ; 1572 : défaite de Molodi',
    '1783 : annexion par la Russie de Catherine II',
  ],
}
