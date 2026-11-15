/** Chapitre rédigé : Maroc des Saadiens et des Alaouites (1549 – 1912). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cherifs',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des sultans descendants du Prophète',
      body:
        "Au XVIe siècle, le Maroc est menacé par les Portugais, qui ont pris des ports sur sa côte. Les Saadiens, une famille qui se dit descendante du prophète Mahomet, prennent la tête de la résistance et s'emparent de Fès en 1549. Leurs successeurs, les Alaouites, règnent encore aujourd'hui.",
      highlight: { value: '1549', label: 'les Saadiens à Fès' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Maroc dans le temps',
      years: [1600, 1783, 1900],
      caption: 'Comparez : le Maroc garde son indépendance pendant plus de trois siècles, jusqu’au protectorat de 1912.',
    },
    {
      id: 'trois-rois',
      tier: 1,
      type: 'war',
      nom: 'Bataille des Trois Rois',
      annee: 1578,
      adversaires: ['Royaume de Portugal (Sébastien Ier)'],
      allies: ['Saadiens'],
      vainqueur: 'Saadiens',
      consequences:
        "Le jeune roi du Portugal débarque pour conquérir le Maroc ; son armée est écrasée. Trois souverains meurent dans la bataille, d'où son nom. Sans héritier, le Portugal passe en 1580 sous la couronne d'Espagne.",
    },
    {
      id: 'mansour',
      tier: 1,
      type: 'person',
      nom: 'Ahmad al-Mansour',
      role: 'Sultan saadien',
      dates: 'règne 1578 – 1603',
      description:
        "Devenu sultan le jour de la bataille des Trois Rois, il envoie une armée de fusiliers à travers le Sahara, qui bat l'Empire songhaï à Tondibi (1591). L'or ramené lui vaut le surnom de « Doré ».",
    },
    {
      id: 'ismail',
      tier: 1,
      type: 'person',
      nom: 'Moulay Ismaïl',
      role: 'Sultan alaouite',
      dates: 'règne 1672 – 1727',
      description:
        "Pendant 55 ans de règne, il impose un pouvoir très fort, crée une armée d'esclaves soldats qui lui sont fidèles et fait de Meknès une ville impériale aux remparts immenses. Il échange des ambassades avec Louis XIV.",
    },
    {
      id: 'independance',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Un pays indépendant',
      body:
        "Le Maroc est le seul pays d'Afrique du Nord à échapper à la domination ottomane. En 1777, le sultan Mohammed III est même l'un des premiers souverains au monde à reconnaître l'indépendance des États-Unis.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Maroc en dates',
      items: [
        { year: 1549, label: 'Les Saadiens prennent Fès' },
        { year: 1578, label: 'Bataille des Trois Rois' },
        { year: 1591, label: 'Victoire de Tondibi' },
        { year: 1666, label: 'Les Alaouites au pouvoir' },
        { year: 1777, label: 'Reconnaissance des États-Unis' },
        { year: 1912, label: 'Traité de Fès' },
      ],
    },
    {
      id: 'protectorat',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le protectorat',
      body:
        "Au XIXe siècle, la France, installée en Algérie, et l'Espagne augmentent leur pression. Par le traité de Fès (1912), le Maroc devient un protectorat français, avec des zones espagnoles. Le sultan reste en place, mais le pouvoir réel passe aux Français jusqu'à l'indépendance de 1956.",
    },
    {
      id: 'heritage',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une dynastie toujours régnante',
      body:
        "Le roi actuel du Maroc appartient à la dynastie alaouite, au pouvoir depuis le XVIIe siècle. Les villes impériales de Marrakech, Fès et Meknès, avec leurs médinas, sont inscrites au patrimoine mondial.",
    },

    // ── Niveau 2 ──
    {
      id: 'tondibi',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Tondibi',
      annee: 1591,
      adversaires: ['Empire songhaï (askia Ishaq II)'],
      allies: ['Armée marocaine (Djouder)'],
      vainqueur: 'Saadiens',
      consequences: "Les fusiliers marocains écrasent l'armée songhaï, qui n'a presque pas d'armes à feu. Gao et Tombouctou sont prises, mais le Maroc ne parvient pas à contrôler durablement la région.",
    },
    {
      id: 'badi',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le palais El Badi',
      body:
        "Ahmad al-Mansour fait construire à Marrakech le palais El Badi, « l'Incomparable », décoré de marbre italien et d'or. Il sera démonté un siècle plus tard par Moulay Ismaïl pour orner Meknès.",
    },
    {
      id: 'mellah',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Les mellahs',
      body:
        "Une importante communauté juive vit dans les villes marocaines, dans des quartiers appelés mellahs. Commerçants, artisans et diplomates juifs jouent un grand rôle dans les échanges avec l'Europe.",
    },
    {
      id: 'isly',
      tier: 2,
      type: 'text',
      kicker: 'Guerres',
      title: 'La bataille d’Isly',
      body:
        "En 1844, le Maroc soutient l'émir algérien Abd el-Kader contre la conquête française. L'armée française bat l'armée marocaine sur l'oued Isly ; le sultan doit cesser son aide.",
    },
    {
      id: 'louis',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le sultan et le Roi-Soleil',
      body:
        "Moulay Ismaïl et Louis XIV échangent des ambassades. Selon un récit célèbre, le sultan aurait même demandé en mariage une fille du roi de France, qui refusa.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'De quel pays parle cette fiche ?', options: ['Le Maroc', 'L’Algérie', 'La Tunisie', 'L’Égypte'], answer: 0 },
    { id: 'cherif', type: 'mcq', prompt: 'De qui les sultans saadiens et alaouites disent-ils descendre ?', options: ['Du prophète Mahomet', 'Des pharaons', 'De Charlemagne', 'D’Alexandre le Grand'], answer: 0 },
    { id: 'portugais', type: 'mcq', prompt: 'Contre quels Européens les Saadiens luttent-ils au XVIe siècle ?', options: ['Les Portugais', 'Les Anglais', 'Les Russes', 'Les Suédois'], answer: 0 },
    { id: 'trois-rois', type: 'mcq', prompt: 'Pourquoi parle-t-on de la bataille des « Trois Rois » ?', options: ['Trois souverains y meurent', 'Trois rois s’y allient', 'Elle dure trois jours', 'Trois royaumes y naissent'], answer: 0 },
    { id: 'sebastien', type: 'mcq', prompt: 'Quel roi européen meurt à la bataille des Trois Rois ?', options: ['Sébastien de Portugal', 'Louis XIV', 'Philippe II d’Espagne', 'Henri VIII'], answer: 0 },
    { id: 'tondibi', type: 'mcq', prompt: 'Quel empire africain l’armée marocaine bat-elle à Tondibi en 1591 ?', options: ['L’Empire songhaï', 'L’empire du Mali', 'Le royaume du Kongo', 'L’Éthiopie'], answer: 0 },
    { id: 'mansour', type: 'mcq', prompt: 'Quel sultan saadien conquiert Tombouctou ?', options: ['Ahmad al-Mansour', 'Moulay Ismaïl', 'Mohammed III', 'Moulay Rachid'], answer: 0 },
    { id: 'ismail', type: 'mcq', prompt: 'De quelle ville Moulay Ismaïl fait-il sa capitale ?', options: ['Meknès', 'Casablanca', 'Tanger', 'Agadir'], answer: 0 },
    { id: 'louis', type: 'mcq', prompt: 'Avec quel roi de France Moulay Ismaïl échange-t-il des ambassades ?', options: ['Louis XIV', 'François Ier', 'Napoléon', 'Henri IV'], answer: 0 },
    { id: 'ottomans', type: 'tf', prompt: 'Le Maroc échappe à la domination ottomane.', answer: true },
    { id: 'usa', type: 'mcq', prompt: 'Quel pays le Maroc reconnaît-il très tôt, en 1777 ?', options: ['Les États-Unis', 'La France', 'Le Brésil', 'Le Canada'], answer: 0 },
    { id: 'isly', type: 'mcq', prompt: 'Contre qui le Maroc est-il battu à Isly en 1844 ?', options: ['La France', 'L’Espagne', 'L’Angleterre', 'Le Portugal'], answer: 0 },
    { id: 'fes', type: 'mcq', prompt: 'Quel traité fait du Maroc un protectorat en 1912 ?', options: ['Le traité de Fès', 'Le traité de Versailles', 'Le traité de Tordesillas', 'Le traité de Paris'], answer: 0 },
    { id: 'alaouites', type: 'tf', prompt: 'La dynastie alaouite règne toujours au Maroc.', answer: true },
    { id: 'mellah', type: 'mcq', prompt: 'Comment s’appellent les quartiers juifs des villes marocaines ?', options: ['Les mellahs', 'Les souks', 'Les kasbahs', 'Les riads'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Les Saadiens prennent Fès', 'Bataille des Trois Rois', 'Les Alaouites au pouvoir', 'Traité de Fès'] },
  ],

  recap: [
    'Les Saadiens, descendants du Prophète, prennent le pouvoir en 1549',
    'Victoire des Trois Rois (1578) ; conquête de Tombouctou (1591)',
    'Les Alaouites : Moulay Ismaïl fait de Meknès sa capitale ; le Maroc reste indépendant',
    '1912 : traité de Fès et protectorat ; la dynastie alaouite règne toujours',
  ],
}
