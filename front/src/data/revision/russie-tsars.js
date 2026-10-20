/** Chapitre rédigé : Russie des tsars (1547 – 1789). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'ivan',
      tier: 1,
      type: 'person',
      nom: 'Ivan IV le Terrible',
      role: 'Premier tsar de Russie',
      dates: 'règne 1533 – 1584',
      description:
        "Couronné tsar en 1547, il conquiert les khanats tatars de Kazan et d'Astrakhan. À partir de 1565, il fait régner la terreur avec sa police, l'opritchnina, et tue même son fils aîné dans un accès de colère.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Un empire qui s’étend',
      years: [1600, 1700, 1783],
      caption: 'Comparez : de la Volga au Pacifique, la Russie devient le plus vaste pays du monde.',
    },
    {
      id: 'siberie',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'Jusqu’au Pacifique',
      body:
        "En 1582, le chef cosaque Ermak prend la capitale du khanat de Sibérie. Cosaques, chasseurs de fourrures et marchands avancent ensuite vers l'est, de fleuve en fleuve : vers 1639, ils atteignent l'océan Pacifique.",
      highlight: { value: '≈ 1639', label: 'les Russes atteignent le Pacifique' },
    },
    {
      id: 'troubles',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Le temps des troubles',
      body:
        "De 1598 à 1613, la Russie traverse une grave crise : plus d'héritier, famine, imposteurs se disant fils d'Ivan IV, invasion polonaise jusqu'à Moscou. En 1613, une assemblée élit tsar Michel Romanov : sa dynastie régnera jusqu'en 1917.",
    },
    {
      id: 'pierre',
      tier: 1,
      type: 'person',
      nom: 'Pierre le Grand',
      role: 'Tsar puis empereur',
      dates: 'règne 1682 – 1725',
      description:
        "Ce géant de plus de deux mètres voyage en Europe et y travaille même comme charpentier. Il crée une flotte, une armée moderne et des manufactures, et impose aux nobles de se raser la barbe et de s'habiller à l'européenne.",
    },
    {
      id: 'poltava',
      tier: 1,
      type: 'war',
      nom: 'Grande Guerre du Nord',
      annee: 1700,
      adversaires: ['Empire suédois (Charles XII)'],
      allies: ['Russie', 'Danemark-Norvège', 'Saxe et Pologne-Lituanie'],
      vainqueur: 'Russie et ses alliés',
      consequences:
        "Battu à Narva (1700), Pierre réorganise son armée et écrase Charles XII à Poltava (1709). La paix de 1721 donne à la Russie les rives de la Baltique : elle devient une grande puissance européenne.",
    },
    {
      id: 'petersbourg',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une capitale sur la Baltique',
      body:
        "En 1703, Pierre fonde Saint-Pétersbourg sur des marais, au bord de la Baltique, pour ouvrir la Russie sur l'Europe. Des dizaines de milliers d'ouvriers et de serfs y travaillent dans des conditions très dures. La ville devient capitale en 1712.",
    },
    {
      id: 'catherine',
      tier: 1,
      type: 'person',
      nom: 'Catherine II la Grande',
      role: 'Impératrice',
      dates: 'règne 1762 – 1796',
      description:
        "Princesse allemande, elle prend le pouvoir en renversant son mari. Amie des philosophes des Lumières, elle agrandit l'empire aux dépens des Ottomans et de la Pologne, mais le servage s'aggrave sous son règne.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Deux siècles et demi de tsars',
      items: [
        { year: 1547, label: 'Ivan IV couronné tsar' },
        { year: 1613, label: 'Michel Romanov élu tsar' },
        { year: 1703, label: 'Fondation de Saint-Pétersbourg' },
        { year: 1709, label: 'Victoire de Poltava' },
        { year: 1721, label: 'La Russie devient un empire' },
        { year: 1783, label: 'Annexion de la Crimée' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'servage',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le servage',
      body:
        "En 1649, un code de lois attache définitivement les paysans à la terre de leur seigneur : ils deviennent des serfs, qui peuvent être vendus avec la terre. Au XVIIIe siècle, la majorité des Russes sont des serfs.",
    },
    {
      id: 'pougatchev',
      tier: 2,
      type: 'text',
      kicker: 'Révoltes',
      title: 'Le faux tsar Pougatchev',
      body:
        "En 1773, le Cosaque Emelian Pougatchev se fait passer pour l'empereur Pierre III, mort en réalité, et soulève Cosaques, serfs et peuples de la Volga. C'est la plus grande révolte de l'histoire russe avant le XXe siècle. Il est exécuté à Moscou en 1775.",
    },
    {
      id: 'vieux-croyants',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le schisme des vieux-croyants',
      body:
        "Au XVIIe siècle, le patriarche Nikon réforme les rites de l'Église, par exemple la façon de faire le signe de croix. Ceux qui refusent ces changements, les « vieux-croyants », sont persécutés ; certains préfèrent mourir plutôt que d'obéir.",
    },
    {
      id: 'barbe',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Quotidien',
      value: 'Impôt',
      label: 'sur la barbe, créé par Pierre le Grand (1705)',
      caption: "Pour obliger les Russes à adopter la mode européenne, Pierre taxe ceux qui veulent garder leur barbe ; ils doivent porter un jeton prouvant qu'ils ont payé.",
    },
    {
      id: 'lomonossov',
      tier: 2,
      type: 'person',
      nom: 'Mikhaïl Lomonossov',
      role: 'Savant et poète',
      dates: '1711 – 1765',
      description:
        "Fils de pêcheur du Grand Nord, il part à pied étudier à Moscou. Chimiste, physicien, poète et grammairien, il participe à la fondation de l'université de Moscou en 1755.",
    },
  ],

  quiz: [
    { id: 'premier', type: 'mcq', prompt: 'Qui est le premier souverain couronné tsar de Russie ?', options: ['Ivan IV', 'Pierre le Grand', 'Michel Romanov', 'Ivan III'], answer: 0 },
    { id: 'surnom', type: 'mcq', prompt: 'Quel est le surnom d’Ivan IV ?', options: ['le Terrible', 'le Grand', 'le Bref', 'le Pieux'], answer: 0 },
    { id: 'kazan', type: 'mcq', prompt: 'Quel khanat tatar Ivan IV conquiert-il en 1552 ?', options: ['Kazan', 'La Crimée', 'La Horde d’or', 'Le Khwarezm'], answer: 0 },
    { id: 'ermak', type: 'mcq', prompt: 'Quel chef cosaque lance la conquête de la Sibérie ?', options: ['Ermak', 'Pougatchev', 'Mazepa', 'Khmelnytsky'], answer: 0 },
    { id: 'pacifique', type: 'tf', prompt: 'Au XVIIe siècle, les Russes atteignent l’océan Pacifique.', answer: true },
    { id: 'romanov', type: 'mcq', prompt: 'Quelle dynastie monte sur le trône en 1613 ?', options: ['Les Romanov', 'Les Riourikides', 'Les Habsbourg', 'Les Bourbons'], answer: 0 },
    { id: 'charpentier', type: 'mcq', prompt: 'Quel métier Pierre le Grand exerce-t-il pendant son voyage en Europe ?', options: ['Charpentier de marine', 'Boulanger', 'Imprimeur', 'Peintre'], answer: 0 },
    { id: 'poltava', type: 'mcq', prompt: 'Quel roi Pierre le Grand bat-il à Poltava en 1709 ?', options: ['Charles XII de Suède', 'Louis XIV', 'Frédéric II', 'Gustave II Adolphe'], answer: 0 },
    { id: 'petersbourg', type: 'mcq', prompt: 'Sur quelle mer Pierre le Grand fonde-t-il Saint-Pétersbourg ?', options: ['La mer Baltique', 'La mer Noire', 'La mer Caspienne', 'La mer Blanche'], answer: 0 },
    { id: 'barbe', type: 'mcq', prompt: 'Que taxe Pierre le Grand pour imposer la mode européenne ?', options: ['La barbe', 'Les chapeaux', 'Les bottes', 'Le thé'], answer: 0 },
    { id: 'catherine', type: 'mcq', prompt: 'De quel pays vient Catherine II ?', options: ['D’Allemagne', 'De France', 'D’Angleterre', 'De Suède'], answer: 0 },
    { id: 'lumieres', type: 'mcq', prompt: 'Avec quel philosophe Catherine II correspond-elle ?', options: ['Voltaire', 'Platon', 'Confucius', 'Karl Marx'], answer: 0 },
    { id: 'serfs', type: 'tf', prompt: 'Au XVIIIe siècle, la majorité des Russes sont des serfs.', answer: true },
    { id: 'pougatchev', type: 'mcq', prompt: 'Pour qui Pougatchev se fait-il passer ?', options: ['L’empereur Pierre III', 'Ivan le Terrible', 'Le khan de Crimée', 'Napoléon'], answer: 0 },
    { id: 'crimee', type: 'mcq', prompt: 'Quelle région Catherine II annexe-t-elle en 1783 ?', options: ['La Crimée', 'La Sibérie', 'La Finlande', 'L’Alaska'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Ivan IV couronné tsar', 'Michel Romanov élu tsar', 'Bataille de Poltava', 'Annexion de la Crimée'] },
  ],

  recap: [
    '1547 : Ivan IV le Terrible, premier tsar ; conquête de la Volga et de la Sibérie',
    '1613 : après le temps des troubles, les Romanov',
    'Pierre le Grand : Poltava (1709), Saint-Pétersbourg, l’empire (1721)',
    'Catherine II : expansion vers la mer Noire, mais servage aggravé',
  ],
}
