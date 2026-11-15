/** Chapitre rédigé : Monarchie des Habsbourg (1526 – 1804). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'mohacs',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'L’héritage de Mohács',
      body:
        "En 1526, le roi Louis II de Hongrie et de Bohême meurt à la bataille de Mohács contre les Ottomans. Son beau-frère, le Habsbourg Ferdinand Ier, devient roi de Bohême et d'une partie de la Hongrie.",
      highlight: { value: '1526', label: 'naissance de la monarchie danubienne' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les terres des Habsbourg',
      years: [1650, 1783],
      caption: 'Comparez : après avoir repris la Hongrie aux Ottomans, les Habsbourg dominent une grande partie de l’Europe centrale.',
    },
    {
      id: 'mariages',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: '« Heureuse Autriche, marie-toi »',
      body:
        "Les Habsbourg agrandissent leur domaine surtout par des mariages. Leur monarchie réunit des pays très différents (Autriche, Bohême, Hongrie…) qui gardent leurs lois, sous un même souverain installé à Vienne.",
    },
    {
      id: 'vienne1529',
      tier: 1,
      type: 'war',
      nom: 'Siège de Vienne (1529)',
      annee: 1529,
      adversaires: ['Empire ottoman (Soliman le Magnifique)'],
      allies: ['Monarchie des Habsbourg'],
      vainqueur: 'Habsbourg (les Ottomans se retirent)',
      consequences:
        "Freinée par les pluies et l'hiver qui approche, l'armée ottomane lève le siège : l'avance ottomane en Europe s'arrête aux portes de Vienne.",
    },
    {
      id: 'trente',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La guerre de Trente Ans',
      body:
        "Les Habsbourg défendent l'Église catholique. En 1618, à Prague, des nobles protestants jettent par la fenêtre des représentants de l'empereur : c'est le début de la guerre de Trente Ans, qui ravage l'Allemagne jusqu'en 1648.",
    },
    {
      id: 'vienne1683',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Vienne',
      annee: 1683,
      adversaires: ['Empire ottoman (Kara Mustafa)'],
      allies: ['Monarchie des Habsbourg', 'Pologne (Jean III Sobieski)', 'Princes allemands'],
      vainqueur: 'Coalition chrétienne',
      consequences:
        "La charge de la cavalerie polonaise brise le second siège de Vienne. Au traité de Karlowitz (1699), les Ottomans cèdent presque toute la Hongrie aux Habsbourg.",
    },
    {
      id: 'marie-therese',
      tier: 1,
      type: 'person',
      nom: 'Marie-Thérèse',
      role: 'Souveraine des Habsbourg',
      dates: 'règne 1740 – 1780',
      description:
        "Dès son avènement, la Prusse lui prend la Silésie, mais elle sauve le reste de son héritage. Elle réforme l'armée, les impôts et rend l'école obligatoire en 1774.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Habsbourg en dates',
      items: [
        { year: 1526, label: 'Ferdinand Ier roi de Bohême et de Hongrie' },
        { year: 1529, label: 'Premier siège de Vienne' },
        { year: 1618, label: 'Défenestration de Prague' },
        { year: 1683, label: 'Bataille de Vienne' },
        { year: 1740, label: 'Avènement de Marie-Thérèse' },
        { year: 1804, label: 'Empire d’Autriche' },
      ],
    },
    {
      id: 'joseph',
      tier: 1,
      type: 'text',
      kicker: 'Réformes',
      title: 'Joseph II, le réformateur',
      body:
        "Fils de Marie-Thérèse, Joseph II accorde en 1781 la liberté de culte aux protestants et aux orthodoxes et abolit le servage personnel. Ses réformes, imposées trop vite, provoquent des révoltes.",
    },

    // ── Niveau 2 ──
    {
      id: 'partage',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Deux branches',
      body:
        "En 1556, l'empereur Charles Quint abdique : l'Espagne revient à son fils Philippe II, les terres autrichiennes à son frère Ferdinand. Il y a désormais des Habsbourg d'Espagne et des Habsbourg d'Autriche.",
    },
    {
      id: 'prague',
      tier: 2,
      type: 'text',
      kicker: 'Sciences',
      title: 'La cour de Rodolphe II',
      body:
        "L'empereur Rodolphe II installe sa cour à Prague, où il accueille des artistes et des savants, comme les astronomes Tycho Brahe et Johannes Kepler.",
    },
    {
      id: 'eugene',
      tier: 2,
      type: 'person',
      nom: 'Eugène de Savoie',
      role: 'Général',
      dates: '1663 – 1736',
      description: "Le plus grand général des Habsbourg écrase les Ottomans à Zenta en 1697, puis combat la France de Louis XIV.",
    },
    {
      id: 'musique',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Vienne, capitale de la musique',
      body:
        "À la fin du XVIIIe siècle, Haydn, Mozart puis Beethoven travaillent à Vienne, qui devient la capitale de la musique classique.",
    },
    {
      id: 'thaler',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Le thaler de Marie-Thérèse',
      body:
        "Cette pièce d'argent à l'effigie de l'impératrice a servi de monnaie pendant près de deux siècles, jusqu'en Éthiopie et en Arabie.",
    },
  ],

  quiz: [
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la monarchie des Habsbourg ?', options: ['Vienne', 'Berlin', 'Budapest', 'Munich'], answer: 0 },
    { id: 'mohacs', type: 'mcq', prompt: 'Après quelle bataille Ferdinand Ier devient-il roi de Bohême et de Hongrie ?', options: ['Mohács', 'Lépante', 'Marignan', 'Pavie'], answer: 0 },
    { id: 'mariages', type: 'mcq', prompt: 'Comment les Habsbourg agrandissent-ils surtout leur domaine ?', options: ['Par des mariages', 'Par des colonies en Amérique', 'Par l’achat de terres', 'Par des élections'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Lequel de ces pays fait partie de la monarchie des Habsbourg ?', options: ['La Bohême', 'La Suède', 'Le Portugal', 'L’Écosse'], answer: 0 },
    { id: 'ottomans', type: 'mcq', prompt: 'Qui assiège Vienne en 1529 et en 1683 ?', options: ['Les Ottomans', 'Les Mongols', 'Les Suédois', 'Les Français'], answer: 0 },
    { id: 'sobieski', type: 'mcq', prompt: 'Quel roi mène l’armée qui délivre Vienne en 1683 ?', options: ['Jean III Sobieski, roi de Pologne', 'Louis XIV, roi de France', 'Pierre le Grand, tsar de Russie', 'Gustave II Adolphe, roi de Suède'], answer: 0 },
    { id: 'karlowitz', type: 'tf', prompt: 'Au traité de Karlowitz (1699), les Ottomans cèdent presque toute la Hongrie aux Habsbourg.', answer: true },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion les Habsbourg défendent-ils ?', options: ['Le catholicisme', 'Le protestantisme', 'L’orthodoxie', 'L’islam'], answer: 0 },
    { id: 'defenestration', type: 'mcq', prompt: 'Quel événement déclenche la guerre de Trente Ans en 1618 ?', options: ['La défenestration de Prague', 'Le siège de Vienne', 'Le sac de Rome', 'La mort de Charles Quint'], answer: 0 },
    { id: 'silesie', type: 'mcq', prompt: 'Quelle région la Prusse prend-elle à Marie-Thérèse ?', options: ['La Silésie', 'La Bohême', 'Le Tyrol', 'La Hongrie'], answer: 0 },
    { id: 'ecole', type: 'tf', prompt: 'Marie-Thérèse rend l’école obligatoire en 1774.', answer: true },
    { id: 'antoinette', type: 'mcq', prompt: 'Laquelle des filles de Marie-Thérèse devient reine de France ?', options: ['Marie-Antoinette', 'Anne d’Autriche', 'Marie de Médicis', 'Catherine de Médicis'], answer: 0 },
    { id: 'joseph', type: 'mcq', prompt: 'Que fait Joseph II en 1781 ?', options: ['Il accorde la liberté de culte aux protestants', 'Il interdit le protestantisme', 'Il déclare la guerre à la France', 'Il s’installe à Prague'], answer: 0 },
    { id: 'kepler', type: 'mcq', prompt: 'Quel astronome travaille à la cour de Rodolphe II à Prague ?', options: ['Johannes Kepler', 'Galilée', 'Copernic', 'Isaac Newton'], answer: 0 },
    { id: 'mozart', type: 'mcq', prompt: 'Quel compositeur compose à Vienne une grande partie de son œuvre ?', options: ['Mozart', 'Vivaldi', 'Bach', 'Chopin'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Premier siège de Vienne', 'Défenestration de Prague', 'Bataille de Vienne', 'Avènement de Marie-Thérèse'] },
  ],

  recap: [
    '1526 : après Mohács, les Habsbourg réunissent l’Autriche, la Bohême et une partie de la Hongrie',
    'Vienne, rempart face aux Ottomans (1529, 1683) ; la Hongrie reprise en 1699',
    'Champions de la Contre-Réforme : la guerre de Trente Ans part de Prague (1618)',
    'Marie-Thérèse et Joseph II réforment l’État ; 1804 : Empire d’Autriche',
  ],
}
