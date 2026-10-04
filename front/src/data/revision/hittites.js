/** Chapitre rédigé : Empire hittite (≈ 1650 – 1180 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'hattusa',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume en Anatolie',
      body:
        "Vers 1650 av. J.-C., le roi Hattusili Ier fait de Hattusa, au centre de l'Anatolie (l'actuelle Turquie), la capitale d'un royaume puissant. Les Hittites parlent une langue indo-européenne, de la même famille que le grec, le latin ou le français. C'est la plus ancienne langue de cette famille connue par écrit.",
      highlight: { value: '≈ 1650 av. J.-C.', label: 'naissance du royaume hittite' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume du plateau anatolien',
      years: [-1500],
      caption: "Au cœur de l'Anatolie, sur un haut plateau aux hivers rudes, les Hittites cherchent à contrôler la Syrie, riche carrefour commercial.",
    },
    {
      id: 'babylone',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'Le raid sur Babylone',
      body:
        "Vers 1595 av. J.-C., le roi Mursili Ier mène une expédition à des centaines de kilomètres de chez lui et pille Babylone, mettant fin à la dynastie d'Hammurabi. Mais il ne garde pas la ville et rentre en Anatolie.",
    },
    {
      id: 'chars',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Guerre',
      value: '3',
      label: 'soldats sur chaque char de guerre hittite',
      caption: "Un conducteur, un combattant armé d'une lance et un porteur de bouclier : les chars hittites, plus lourds que les chars égyptiens à deux hommes, servent à enfoncer les lignes ennemies.",
    },
    {
      id: 'qadesh',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Qadesh',
      annee: -1274,
      adversaires: ['Égypte de Ramsès II'],
      allies: ['Hittites de Muwatalli II', 'Vassaux anatoliens et syriens'],
      vainqueur: 'Aucun vainqueur net',
      consequences: "C'est l'une des plus grandes batailles de chars de l'Antiquité, en Syrie. Ramsès II la célèbre comme un triomphe sur les murs de ses temples, mais les Hittites gardent le contrôle de la région.",
    },
    {
      id: 'traite',
      tier: 1,
      type: 'text',
      kicker: 'Droits',
      title: 'Un des plus anciens traités de paix',
      body:
        "Vers 1259 av. J.-C., le roi hittite Hattusili III et Ramsès II signent un traité de paix : ils promettent de ne plus s'attaquer, de s'aider en cas d'invasion et de se rendre les fugitifs. Une copie de la tablette est exposée au siège de l'ONU, à New York.",
      highlight: { value: '≈ 1259 av. J.-C.', label: 'traité de paix avec l’Égypte' },
    },
    {
      id: 'mille-dieux',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le peuple aux mille dieux',
      body:
        "Les Hittites accueillent dans leur religion les dieux des peuples qu'ils soumettent : on parle des « mille dieux du Hatti ». Le plus important est le dieu de l'Orage. Dans le sanctuaire rocheux de Yazılıkaya, près de Hattusa, des dizaines de divinités sont sculptées dans la pierre.",
    },
    {
      id: 'fer',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Les maîtres du fer ?',
      body:
        "On a longtemps dit que les Hittites avaient le secret du fer. En réalité, ils savent le travailler, mais il reste rare et précieux : on l'offre en cadeau aux rois étrangers. Leurs soldats combattent surtout avec des armes en bronze.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La disparition de Hattusa',
      body:
        "Vers 1180 av. J.-C., l'empire s'effondre : famines, révoltes de vassaux et attaques, dans le contexte des raids des « Peuples de la mer ». Hattusa est abandonnée et incendiée. Quelques petits royaumes « néo-hittites » survivent en Syrie, jusqu'à leur conquête par l'Assyrie.",
    },

    // ── Niveau 2 ──
    {
      id: 'suppiluliuma',
      tier: 2,
      type: 'person',
      nom: 'Suppiluliuma Ier',
      role: 'Grand roi hittite',
      dates: 'règne vers 1350 – 1322 av. J.-C.',
      description: "Il fait des Hittites un empire en conquérant le royaume du Mitanni et le nord de la Syrie. Une reine d'Égypte veuve lui demande même un fils pour l'épouser ; mais le prince hittite est tué en route vers l'Égypte.",
    },
    {
      id: 'puduhepa',
      tier: 2,
      type: 'person',
      nom: 'Puduhepa',
      role: 'Reine hittite',
      dates: 'XIIIe siècle av. J.-C.',
      description: "Épouse de Hattusili III, elle joue un grand rôle politique : elle juge des affaires, scelle des documents officiels et correspond avec la cour d'Égypte, au moment de la paix avec Ramsès II.",
    },
    {
      id: 'lois',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: 'Des lois qui préfèrent les amendes',
      body:
        "Les lois hittites prévoient surtout des compensations : celui qui blesse ou vole doit payer ou rendre plusieurs fois ce qu'il a pris. La peine de mort y est plus rare que dans le code d'Hammurabi.",
    },
    {
      id: 'dates',
      tier: 2,
      type: 'dates',
      kicker: 'Durée',
      title: 'Cinq siècles de puissance',
      items: [
        { year: -1650, label: 'Hattusili Ier règne depuis Hattusa' },
        { year: -1595, label: 'Mursili Ier pille Babylone' },
        { year: -1274, label: 'Bataille de Qadesh' },
        { year: -1259, label: 'Traité de paix avec Ramsès II' },
        { year: -1180, label: 'Abandon de Hattusa' },
      ],
    },
    {
      id: 'redecouverte',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un empire redécouvert',
      body:
        "Longtemps, on ne connaissait les Hittites que par la Bible et les textes égyptiens. Au début du XXe siècle, les fouilles de Hattusa mettent au jour des milliers de tablettes d'argile. En 1915, le savant tchèque Bedřich Hrozný déchiffre leur langue.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région vivent les Hittites ?', options: ["En Anatolie (actuelle Turquie)", 'En Égypte', 'En Grèce', 'En Perse'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Hittites ?', options: ['Hattusa', 'Babylone', 'Ninive', 'Memphis'], answer: 0 },
    { id: 'langue', type: 'tf', prompt: 'La langue hittite est la plus ancienne langue indo-européenne connue par écrit.', answer: true },
    { id: 'babylone', type: 'mcq', prompt: 'Quelle grande ville le roi Mursili Ier pille-t-il vers 1595 av. J.-C. ?', options: ['Babylone', 'Thèbes', 'Jérusalem', 'Troie'], answer: 0 },
    { id: 'babylone-garde', type: 'tf', prompt: 'Après l’avoir pillée, Mursili Ier fait de Babylone sa nouvelle capitale.', answer: false, explanation: 'Il ne garde pas la ville et rentre en Anatolie.' },
    { id: 'qadesh', type: 'mcq', prompt: 'Contre quel pharaon les Hittites combattent-ils à Qadesh ?', options: ['Ramsès II', 'Toutânkhamon', 'Khéops', 'Akhenaton'], answer: 0 },
    { id: 'qadesh-annee', type: 'mcq', prompt: 'En quelle année a lieu la bataille de Qadesh ?', options: ['Vers 1274 av. J.-C.', 'Vers 1595 av. J.-C.', 'Vers 753 av. J.-C.', 'Vers 2500 av. J.-C.'], answer: 0 },
    { id: 'qadesh-issue', type: 'mcq', prompt: 'Quelle est l’issue de la bataille de Qadesh ?', options: ['Aucun vainqueur net', 'Une victoire écrasante de l’Égypte', 'La destruction de Hattusa', 'La conquête de l’Égypte par les Hittites'], answer: 0 },
    { id: 'chars', type: 'mcq', prompt: 'Combien de soldats montent sur un char de guerre hittite ?', options: ['Trois', 'Un', 'Deux', 'Six'], answer: 0 },
    { id: 'traite', type: 'mcq', prompt: 'Quel roi hittite signe la paix avec Ramsès II vers 1259 av. J.-C. ?', options: ['Hattusili III', 'Mursili Ier', 'Suppiluliuma Ier', 'Hammurabi'], answer: 0 },
    { id: 'onu', type: 'mcq', prompt: 'Où une copie du traité de paix égypto-hittite est-elle exposée aujourd’hui ?', options: ["Au siège de l'ONU, à New York", 'Au château de Versailles', 'Au Colisée de Rome', 'Au Parlement européen'], answer: 0 },
    { id: 'orage', type: 'mcq', prompt: 'Quel est le dieu le plus important des Hittites ?', options: ["Le dieu de l'Orage", 'Le dieu Soleil Râ', 'Zeus', 'Yahvé'], answer: 0 },
    { id: 'mille', type: 'tf', prompt: 'Les Hittites intègrent à leur religion les dieux des peuples qu’ils soumettent.', answer: true },
    { id: 'fer', type: 'tf', prompt: 'Les soldats hittites sont tous équipés d’armes en fer.', answer: false, explanation: 'Le fer reste rare et précieux ; les armes sont surtout en bronze.' },
    { id: 'lois', type: 'mcq', prompt: 'Que prévoient surtout les lois hittites contre les coupables ?', options: ['Des compensations (amendes, restitutions)', 'La peine de mort pour presque tout', "L'exil systématique", 'Aucune punition'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Pillage de Babylone par Mursili Ier', 'Bataille de Qadesh', 'Traité de paix avec Ramsès II', 'Abandon de Hattusa'] },
    { id: 'fin', type: 'mcq', prompt: 'Vers quelle date l’empire hittite s’effondre-t-il ?', options: ['Vers 1180 av. J.-C.', 'Vers 1650 av. J.-C.', 'Vers 500 av. J.-C.', 'Vers 30 av. J.-C.'], answer: 0 },
    { id: 'hrozny', type: 'mcq', prompt: 'Qui a déchiffré la langue hittite en 1915 ?', options: ['Bedřich Hrozný', 'Michael Ventris', 'Jean-François Champollion', 'Heinrich Schliemann'], answer: 0 },
  ],

  recap: [
    '≈ 1650 av. J.-C. : royaume hittite autour de Hattusa, en Anatolie',
    "1274 av. J.-C. : Qadesh contre l'Égypte de Ramsès II, sans vainqueur net",
    '≈ 1259 av. J.-C. : un des plus anciens traités de paix connus',
    '≈ 1180 av. J.-C. : effondrement et abandon de Hattusa',
  ],
}
