/** Chapitre rédigé : Danemark-Norvège (1523 – 1814). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'union',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Deux royaumes, un roi',
      body:
        "En 1523, la Suède quitte l'union de Kalmar, qui réunissait les trois royaumes scandinaves. Le Danemark et la Norvège restent unis sous le même roi, qui gouverne depuis Copenhague.",
      highlight: { value: '1523', label: 'naissance du Danemark-Norvège' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Danemark-Norvège',
      years: [1600, 1800],
      caption: 'Comparez : le royaume perd au XVIIe siècle ses provinces du sud de la Suède actuelle.',
    },
    {
      id: 'reforme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La Réforme',
      body:
        "En 1536, le roi Christian III impose la Réforme luthérienne. Les biens de l'Église sont confisqués, et le roi devient le chef de l'Église. La Norvège est gouvernée depuis Copenhague.",
    },
    {
      id: 'christian',
      tier: 1,
      type: 'person',
      nom: 'Christian IV',
      role: 'Roi de Danemark et de Norvège',
      dates: 'règne 1588 – 1648',
      description:
        "Grand bâtisseur, il fonde des villes comme Christiania (Oslo) et fait construire à Copenhague le château de Rosenborg et la Tour ronde. Mais il perd plusieurs guerres.",
    },
    {
      id: 'sund',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le péage du Sund',
      body:
        "Le royaume contrôle le détroit du Sund, à l'entrée de la mer Baltique. Tous les navires qui le traversent doivent payer un péage, qui enrichit le roi.",
    },
    {
      id: 'roskilde',
      tier: 1,
      type: 'war',
      nom: 'Guerre dano-suédoise (1657-1658)',
      annee: 1657,
      adversaires: ['Empire suédois (Charles X Gustave)'],
      allies: ['Danemark-Norvège'],
      vainqueur: 'Suède',
      consequences:
        "L'armée suédoise traverse à pied les détroits gelés et menace Copenhague. Par le traité de Roskilde (1658), le Danemark cède à la Suède ses provinces du sud, comme la Scanie.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Danemark-Norvège en dates',
      items: [
        { year: 1523, label: 'Fin de l’union de Kalmar' },
        { year: 1536, label: 'Réforme luthérienne' },
        { year: 1658, label: 'Traité de Roskilde' },
        { year: 1660, label: 'Monarchie absolue' },
        { year: 1814, label: 'Traité de Kiel' },
      ],
    },
    {
      id: 'colonies',
      tier: 1,
      type: 'text',
      kicker: 'Empire',
      title: 'Des colonies lointaines',
      body:
        "Le royaume possède des colonies aux Antilles, en Inde et en Afrique, et participe à la traite. En 1792, il est le premier pays à décider l'interdiction de la traite transatlantique, effective en 1803.",
    },
    {
      id: 'kiel',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le traité de Kiel',
      body:
        "Allié de Napoléon, le Danemark est vaincu. Par le traité de Kiel (1814), il cède la Norvège à la Suède, mais garde l'Islande, les îles Féroé et le Groenland.",
    },

    // ── Niveau 2 ──
    {
      id: 'tycho',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'Tycho Brahe',
      body:
        "Dans son observatoire de l'île de Ven, l'astronome Tycho Brahe mesure la position des astres avec une précision inégalée. Ses mesures permettront à Kepler de découvrir les lois du mouvement des planètes.",
    },
    {
      id: 'romer',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'La vitesse de la lumière',
      body:
        "En 1676, l'astronome danois Ole Rømer démontre pour la première fois que la lumière a une vitesse finie.",
    },
    {
      id: 'absolue',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'La monarchie absolue',
      body:
        "En 1660, le roi Frédéric III devient monarque absolu et héréditaire. Il gouverne seul, sans les nobles, avec des fonctionnaires.",
    },
    {
      id: 'copenhague',
      tier: 2,
      type: 'text',
      kicker: 'Guerres',
      title: 'Copenhague bombardée',
      body:
        "En 1807, pour empêcher Napoléon de s'emparer de la flotte danoise, les Britanniques bombardent Copenhague et emmènent les navires. Le Danemark s'allie alors à la France.",
    },
    {
      id: '17mai',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le 17 mai',
      body:
        "Le 17 mai 1814, juste après le traité de Kiel, les Norvégiens adoptent leur propre constitution. C'est aujourd'hui leur fête nationale.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quels royaumes sont unis sous un même roi de 1523 à 1814 ?', options: ['Le Danemark et la Norvège', 'La Suède et la Finlande', 'L’Angleterre et l’Écosse', 'L’Espagne et le Portugal'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale du Danemark-Norvège ?', options: ['Copenhague', 'Oslo', 'Stockholm', 'Bergen'], answer: 0 },
    { id: 'kalmar', type: 'mcq', prompt: 'Quel pays quitte l’union de Kalmar en 1523 ?', options: ['La Suède', 'La Norvège', 'L’Islande', 'La Finlande'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion le roi impose-t-il en 1536 ?', options: ['Le protestantisme luthérien', 'Le catholicisme', 'L’orthodoxie', 'Le calvinisme'], answer: 0 },
    { id: 'christian', type: 'mcq', prompt: 'Quel roi bâtisseur fonde Christiania (Oslo) ?', options: ['Christian IV', 'Christian III', 'Frédéric III', 'Gustave Vasa'], answer: 0 },
    { id: 'sund', type: 'mcq', prompt: 'Que doivent payer les navires qui passent le détroit du Sund ?', options: ['Un péage', 'Rien', 'Un tribut en esclaves', 'Une part de leurs armes'], answer: 0 },
    { id: 'rival', type: 'mcq', prompt: 'Quelle est la grande rivale du Danemark-Norvège ?', options: ['La Suède', 'La France', 'L’Espagne', 'La Pologne'], answer: 0 },
    { id: 'glace', type: 'tf', prompt: 'En 1658, l’armée suédoise traverse à pied les détroits gelés.', answer: true },
    { id: 'roskilde', type: 'mcq', prompt: 'Quelle province le Danemark cède-t-il à la Suède en 1658 ?', options: ['La Scanie', 'Le Jutland', 'L’Islande', 'La Norvège'], answer: 0 },
    { id: 'absolue', type: 'mcq', prompt: 'Que devient la monarchie danoise en 1660 ?', options: ['Une monarchie absolue', 'Une république', 'Une monarchie élective', 'Une théocratie'], answer: 0 },
    { id: 'tycho', type: 'mcq', prompt: 'Quel astronome observe le ciel depuis l’île de Ven ?', options: ['Tycho Brahe', 'Galilée', 'Copernic', 'Newton'], answer: 0 },
    { id: 'romer', type: 'mcq', prompt: 'Que démontre Ole Rømer en 1676 ?', options: ['Que la lumière a une vitesse finie', 'Que la Terre est ronde', 'Que la Lune tourne autour de la Terre', 'L’existence des atomes'], answer: 0 },
    { id: 'traite', type: 'tf', prompt: 'Le Danemark est le premier pays à décider l’interdiction de la traite transatlantique.', answer: true },
    { id: 'kiel', type: 'mcq', prompt: 'Par quel traité le Danemark cède-t-il la Norvège en 1814 ?', options: ['Le traité de Kiel', 'Le traité de Vienne', 'Le traité de Paris', 'Le traité de Roskilde'], answer: 0 },
    { id: 'garde', type: 'mcq', prompt: 'Quelle île le Danemark garde-t-il après 1814 ?', options: ['Le Groenland', 'La Sicile', 'La Corse', 'Malte'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fin de l’union de Kalmar', 'Réforme luthérienne', 'Traité de Roskilde', 'Traité de Kiel'] },
  ],

  recap: [
    '1523 : le Danemark et la Norvège restent unis sous un roi à Copenhague',
    'Réforme luthérienne (1536) ; Christian IV, le roi bâtisseur',
    'Rivalité avec la Suède : perte de la Scanie (1658) ; monarchie absolue (1660)',
    'Colonies, interdiction de la traite (1792) ; traité de Kiel et perte de la Norvège (1814)',
  ],
}
