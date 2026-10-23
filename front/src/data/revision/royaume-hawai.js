/** Chapitre rédigé : Royaume d’Hawaï (1795 – 1893). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'polynesiens',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des îles polynésiennes',
      body:
        "Des navigateurs polynésiens peuplent l'archipel d'Hawaï vers l'an 1000. Pendant des siècles, les îles sont partagées entre des chefs rivaux, jusqu'à l'arrivée de James Cook en 1778.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume d’Hawaï',
      years: [1815, 1880],
      caption: 'L’archipel d’Hawaï, au milieu du Pacifique nord, unifié par Kamehameha Ier.',
    },
    {
      id: 'kamehameha',
      tier: 1,
      type: 'person',
      nom: 'Kamehameha Ier',
      role: 'Roi d’Hawaï',
      dates: 'vers 1758 – 1819',
      description:
        "Chef de l'île d'Hawaï, il conquiert les autres îles avec l'aide d'armes à feu et de conseillers européens. En 1795, il fonde le royaume ; Kauaʻi le reconnaît en 1810.",
    },
    {
      id: 'nuuanu',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Nuʻuanu',
      annee: 1795,
      adversaires: ['Royaume d’Oʻahu'],
      allies: ['Kamehameha Ier'],
      vainqueur: 'Kamehameha Ier',
      consequences:
        "Les guerriers de Kamehameha repoussent l'armée d'Oʻahu jusqu'aux falaises du Pali. Kamehameha domine désormais presque tout l'archipel.",
    },
    {
      id: 'kapu',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La fin du kapu',
      body:
        "L'ancienne religion impose des interdits stricts, le kapu : par exemple, les femmes ne peuvent pas manger avec les hommes. En 1819, le roi et la reine Kaʻahumanu l'abolissent ; des missionnaires protestants arrivent l'année suivante.",
    },
    {
      id: 'modernisation',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un royaume moderne',
      body:
        "Kamehameha III donne au royaume une constitution (1840) et autorise la propriété privée de la terre (1848). Le royaume est reconnu par les grandes puissances, et son palais est éclairé à l'électricité dès 1886.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le royaume d’Hawaï en dates',
      items: [
        { year: 1795, label: 'Bataille de Nuʻuanu' },
        { year: 1819, label: 'Abolition du kapu' },
        { year: 1840, label: 'Première constitution' },
        { year: 1887, label: 'Constitution « de la baïonnette »' },
        { year: 1893, label: 'Renversement de la reine' },
      ],
    },
    {
      id: 'sucre',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le roi sucre',
      body:
        "Les plantations de canne à sucre, souvent tenues par des Américains, attirent des milliers de travailleurs venus de Chine, du Japon et du Portugal. Pendant ce temps, les épidémies font chuter la population hawaïenne.",
    },
    {
      id: 'renversement',
      tier: 1,
      type: 'war',
      nom: 'Renversement du royaume d’Hawaï',
      annee: 1893,
      adversaires: ['Hommes d’affaires américains et européens, soutenus par des Marines américains'],
      allies: ['Reine Liliʻuokalani'],
      vainqueur: 'Comité de sécurité',
      consequences:
        "En janvier 1893, la reine cède pour éviter un bain de sang. Une république est proclamée, puis les États-Unis annexent Hawaï en 1898 ; Hawaï devient un État américain en 1959.",
    },

    // ── Niveau 2 ──
    {
      id: 'liliuokalani',
      tier: 2,
      type: 'person',
      nom: 'Liliʻuokalani',
      role: 'Reine d’Hawaï',
      dates: '1838 – 1917',
      description: "Dernière souveraine d'Hawaï, elle voulait rendre le pouvoir aux Hawaïens. Après son renversement, elle lutte pacifiquement pour son royaume. Elle compose plus de 150 chansons, dont « Aloha ʻOe ».",
    },
    {
      id: 'cook',
      tier: 2,
      type: 'text',
      kicker: 'Contacts',
      title: 'La mort de James Cook',
      body:
        "James Cook arrive à Hawaï en 1778. L'année suivante, lors d'un nouveau séjour, un conflit éclate avec les Hawaïens à propos d'une chaloupe volée : Cook est tué dans la baie de Kealakekua.",
    },
    {
      id: 'kalakaua',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Le « joyeux monarque »',
      body:
        "Le roi Kalākaua fait revivre le hula, la danse traditionnelle, et devient en 1881 le premier souverain à faire le tour du monde.",
    },
    {
      id: 'surf',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le surf',
      body:
        "Le surf est un loisir très ancien à Hawaï : rois et gens du peuple glissent sur les vagues avec de longues planches de bois.",
    },
    {
      id: 'excuses',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des excuses cent ans après',
      body:
        "En 1993, cent ans après le renversement de la reine, le Congrès des États-Unis présente des excuses officielles aux Hawaïens.",
    },
  ],

  quiz: [
    { id: 'ocean', type: 'mcq', prompt: 'Dans quel océan se trouve Hawaï ?', options: ['Le Pacifique', 'L’Atlantique', 'L’océan Indien', 'La Méditerranée'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Quel peuple s’installe le premier à Hawaï ?', options: ['Les Polynésiens', 'Les Japonais', 'Les Espagnols', 'Les Incas'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui unifie l’archipel et fonde le royaume ?', options: ['Kamehameha Ier', 'Kalākaua', 'George Tupou Ier', 'James Cook'], answer: 0 },
    { id: 'annee', type: 'mcq', prompt: 'En quelle année le royaume est-il fondé ?', options: ['1795', '1492', '1898', '1959'], answer: 0 },
    { id: 'cook', type: 'mcq', prompt: 'Quel navigateur est tué à Hawaï en 1779 ?', options: ['James Cook', 'Magellan', 'Abel Tasman', 'Vasco de Gama'], answer: 0 },
    { id: 'kapu', type: 'mcq', prompt: 'Comment s’appelle l’ancien système d’interdits religieux ?', options: ['Le kapu', 'Le mana', 'Le hula', 'Le luau'], answer: 0 },
    { id: 'abolition', type: 'tf', prompt: 'Le kapu est aboli en 1819 par la cour hawaïenne elle-même.', answer: true },
    { id: 'constitution', type: 'mcq', prompt: 'Quel roi donne à Hawaï sa première constitution en 1840 ?', options: ['Kamehameha III', 'Kamehameha Ier', 'Kalākaua', 'Lunalilo'], answer: 0 },
    { id: 'sucre', type: 'mcq', prompt: 'Quelle culture domine l’économie à la fin du XIXe siècle ?', options: ['La canne à sucre', 'Le café', 'Le coton', 'Le blé'], answer: 0 },
    { id: 'travailleurs', type: 'mcq', prompt: 'D’où viennent beaucoup de travailleurs des plantations ?', options: ['De Chine, du Japon et du Portugal', 'D’Australie', 'D’Afrique du Sud', 'De Russie'], answer: 0 },
    { id: 'reine', type: 'mcq', prompt: 'Qui est la dernière souveraine d’Hawaï ?', options: ['Liliʻuokalani', 'Kaʻahumanu', 'Victoria', 'Ranavalona III'], answer: 0 },
    { id: 'aloha', type: 'mcq', prompt: 'Quelle chanson célèbre la reine Liliʻuokalani a-t-elle composée ?', options: ['Aloha ʻOe', 'La Marseillaise', 'God Save the Queen', 'Waltzing Matilda'], answer: 0 },
    { id: 'renversement', type: 'mcq', prompt: 'Qui renverse la reine en 1893 ?', options: ['Des hommes d’affaires soutenus par des Marines américains', 'L’armée japonaise', 'Les Britanniques', 'Le peuple hawaïen'], answer: 0 },
    { id: 'annexion', type: 'mcq', prompt: 'Quel pays annexe Hawaï en 1898 ?', options: ['Les États-Unis', 'Le Japon', 'Le Royaume-Uni', 'La France'], answer: 0 },
    { id: 'excuses', type: 'tf', prompt: 'En 1993, le Congrès américain présente des excuses officielles pour le renversement de la reine.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Bataille de Nuʻuanu', 'Abolition du kapu', 'Première constitution', 'Renversement de la reine'] },
  ],

  recap: [
    '1795 : Kamehameha Ier unifie l’archipel polynésien d’Hawaï',
    '1819 : fin du kapu ; missionnaires, constitution (1840), partage des terres (1848)',
    'Plantations de sucre, immigration asiatique, épidémies',
    '1893 : renversement de la reine Liliʻuokalani ; annexion par les États-Unis (1898)',
  ],
}
