/** Chapitre rédigé : Haïti (1791 – 2020). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'saint-domingue',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Saint-Domingue',
      body:
        "Au XVIIIe siècle, la colonie française de Saint-Domingue est la plus riche colonie sucrière du monde. Sa richesse repose sur le travail forcé de centaines de milliers d'esclaves africains, près de 9 habitants sur 10.",
    },
    {
      id: 'revolte',
      tier: 1,
      type: 'text',
      kicker: 'Révolution',
      title: 'La révolte de 1791',
      body:
        "Dans la nuit du 22 au 23 août 1791, les esclaves du nord se soulèvent. En 1793-1794, l'esclavage est aboli dans la colonie, puis dans toutes les colonies françaises.",
      highlight: { value: '1791', label: 'révolte des esclaves' },
    },
    {
      id: 'toussaint',
      tier: 1,
      type: 'person',
      nom: 'Toussaint Louverture',
      role: 'Chef de la révolution',
      dates: 'vers 1743 – 1803',
      description:
        "Ancien esclave devenu général, il chasse les Britanniques et prend la tête de la colonie. Arrêté sur ordre de Napoléon, il meurt en 1803 dans une prison du Jura.",
    },
    {
      id: 'revolution',
      tier: 1,
      type: 'war',
      nom: 'Révolution haïtienne',
      annee: 1791,
      adversaires: ['France (colons, puis armée de Napoléon)', 'Royaume-Uni et Espagne (1793-1798)'],
      allies: ['Esclaves insurgés et libres de couleur'],
      vainqueur: 'Insurgés haïtiens',
      consequences:
        "En 1802, Napoléon envoie une armée pour reprendre la colonie ; elle est battue à Vertières en 1803. En 1804, sur ordre de Dessalines, la plupart des Français restés dans l'île sont massacrés.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Haïti',
      years: [1815],
      caption: 'Haïti occupe l’ouest de l’île d’Hispaniola, qu’il partage avec la République dominicaine.',
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Indépendance',
      title: 'La première république noire',
      body:
        "Le 1er janvier 1804, Jean-Jacques Dessalines proclame l'indépendance d'Haïti : c'est le premier État né d'une révolte d'esclaves victorieuse.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Haïti en dates',
      items: [
        { year: 1791, label: 'Révolte des esclaves' },
        { year: 1804, label: 'Indépendance' },
        { year: 1825, label: 'Indemnité exigée par la France' },
        { year: 1915, label: 'Occupation américaine' },
        { year: 1957, label: 'Dictature des Duvalier' },
        { year: 2010, label: 'Séisme' },
      ],
    },
    {
      id: 'dette',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Une lourde dette',
      body:
        "En 1825, la France exige 150 millions de francs pour reconnaître l'indépendance d'Haïti. Pour payer, le pays s'endette pendant des décennies.",
    },
    {
      id: 'xxe',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Occupation et dictatures',
      body:
        "Les États-Unis occupent Haïti de 1915 à 1934. François Duvalier, « Papa Doc », puis son fils Jean-Claude, « Baby Doc », gouvernent en dictateurs de 1957 à 1986.",
    },

    // ── Niveau 2 ──
    {
      id: 'dessalines',
      tier: 2,
      type: 'person',
      nom: 'Jean-Jacques Dessalines',
      role: 'Père de l’indépendance',
      dates: '1758 – 1806',
      description: "Ancien esclave, il bat l'armée de Napoléon, proclame l'indépendance en 1804 et se fait couronner empereur. Il est assassiné en 1806.",
    },
    {
      id: 'citadelle',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'La citadelle Laferrière',
      body:
        "Pour défendre l'indépendance contre un retour des Français, le roi Henri Christophe fait bâtir au sommet d'une montagne une immense forteresse, la citadelle Laferrière.",
    },
    {
      id: 'bolivar',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Haïti aide Bolívar',
      body:
        "En 1815-1816, le président Alexandre Pétion aide Simón Bolívar à libérer l'Amérique du Sud, à condition qu'il abolisse l'esclavage.",
    },
    {
      id: 'vaudou',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le vaudou',
      body:
        "Né de croyances africaines mêlées à des rites chrétiens, le vaudou est souvent pratiqué en même temps que le catholicisme. Il est reconnu officiellement en 2003.",
    },
    {
      id: 'seisme',
      tier: 2,
      type: 'text',
      kicker: 'Catastrophe',
      title: 'Le séisme de 2010',
      body:
        "Le 12 janvier 2010, un tremblement de terre dévaste Port-au-Prince et fait entre 100 000 et 300 000 morts selon les estimations.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale d’Haïti ?', options: ['Port-au-Prince', 'Saint-Domingue', 'La Havane', 'Cap-Haïtien'], answer: 0 },
    { id: 'ancien-nom', type: 'mcq', prompt: 'Comment s’appelait Haïti quand c’était une colonie française ?', options: ['Saint-Domingue', 'La Martinique', 'La Louisiane', 'La Guadeloupe'], answer: 0 },
    { id: 'richesse', type: 'mcq', prompt: 'Sur quoi repose la richesse de Saint-Domingue ?', options: ['Le sucre produit par des esclaves', 'Les mines d’or', 'La pêche', 'Le pétrole'], answer: 0 },
    { id: 'revolte', type: 'mcq', prompt: 'En quelle année les esclaves de Saint-Domingue se révoltent-ils ?', options: ['1791', '1804', '1825', '1915'], answer: 0 },
    { id: 'toussaint', type: 'mcq', prompt: 'Quel ancien esclave prend la tête de la colonie ?', options: ['Toussaint Louverture', 'Napoléon', 'Simón Bolívar', 'François Duvalier'], answer: 0 },
    { id: 'napoleon', type: 'mcq', prompt: 'Qui envoie une armée en 1802 pour reprendre la colonie ?', options: ['Napoléon', 'Louis XVI', 'Le roi d’Espagne', 'George Washington'], answer: 0 },
    { id: 'vertieres', type: 'tf', prompt: 'L’armée de Napoléon est battue à Vertières en 1803.', answer: true },
    { id: 'independance', type: 'mcq', prompt: 'Quel jour Haïti proclame-t-il son indépendance ?', options: ['Le 1er janvier 1804', 'Le 14 juillet 1789', 'Le 4 juillet 1776', 'Le 22 août 1791'], answer: 0 },
    { id: 'dessalines', type: 'mcq', prompt: 'Qui proclame l’indépendance d’Haïti ?', options: ['Jean-Jacques Dessalines', 'Toussaint Louverture', 'Alexandre Pétion', 'Henri Christophe'], answer: 0 },
    { id: 'premiere', type: 'mcq', prompt: 'Pourquoi l’indépendance d’Haïti est-elle unique ?', options: ['C’est le premier État né d’une révolte d’esclaves victorieuse', 'C’est la première colonie d’Amérique', 'C’est le premier pays sans armée', 'C’est la première monarchie des Caraïbes'], answer: 0 },
    { id: 'indemnite', type: 'mcq', prompt: 'Qu’exige la France en 1825 pour reconnaître l’indépendance ?', options: ['Une très lourde indemnité', 'Le retour de l’esclavage', 'Une île', 'Un roi français'], answer: 0 },
    { id: 'occupation', type: 'mcq', prompt: 'Quel pays occupe Haïti de 1915 à 1934 ?', options: ['Les États-Unis', 'La France', 'Le Royaume-Uni', 'L’Espagne'], answer: 0 },
    { id: 'duvalier', type: 'mcq', prompt: 'Quel surnom porte le dictateur François Duvalier ?', options: ['« Papa Doc »', '« Baby Doc »', '« Le Libérateur »', '« L’Empereur »'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'Quelles sont les langues officielles d’Haïti ?', options: ['Le créole haïtien et le français', 'L’espagnol et l’anglais', 'Le français et l’espagnol', 'Le créole et l’anglais'], answer: 0 },
    { id: 'seisme', type: 'mcq', prompt: 'Quelle catastrophe frappe Port-au-Prince en 2010 ?', options: ['Un tremblement de terre', 'Un tsunami', 'Une éruption volcanique', 'Une épidémie de peste'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Révolte des esclaves', 'Indépendance', 'Occupation américaine', 'Séisme'] },
  ],

  recap: [
    'Saint-Domingue, riche colonie sucrière fondée sur l’esclavage',
    '1791 : révolte des esclaves ; Toussaint Louverture ; abolition de l’esclavage',
    '1804 : indépendance proclamée par Dessalines, première république noire',
    'Dette envers la France, occupation américaine, dictature des Duvalier, séisme de 2010',
  ],
}
