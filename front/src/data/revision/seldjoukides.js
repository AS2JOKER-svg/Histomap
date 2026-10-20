/** Chapitre rédigé : Seldjoukides (1037 – 1308). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des Turcs venus des steppes',
      body:
        "Les Seldjoukides sont un clan de Turcs oghouz, des nomades des steppes d'Asie centrale convertis à l'islam. Menés par Tughril Beg, ils prennent les grandes villes du Khorassan en 1037, puis battent les Ghaznévides à Dandanakan (1040) et conquièrent l'Iran.",
      highlight: { value: '1040', label: 'victoire de Dandanakan' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'De l’Iran à l’Anatolie',
      years: [1100, 1279],
      caption: 'Comparez : immense vers 1100, l’empire n’est plus, vers 1279, que le sultanat de Roum en Anatolie.',
    },
    {
      id: 'bagdad',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Protecteurs du calife',
      body:
        "En 1055, Tughril entre à Bagdad. Le calife abbasside, chef religieux des musulmans sunnites, garde son titre, mais c'est le sultan seldjoukide qui exerce le pouvoir. Le mot « sultan » signifie « celui qui a le pouvoir ».",
    },
    {
      id: 'manzikert',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Manzikert',
      annee: 1071,
      adversaires: ['Empire byzantin (Romain IV Diogène)'],
      allies: ['Seldjoukides (Alp Arslan)'],
      vainqueur: 'Seldjoukides',
      consequences:
        "Le sultan Alp Arslan capture l'empereur byzantin, puis le libère contre rançon. Des tribus turques s'installent en Anatolie : c'est le début de la future Turquie.",
    },
    {
      id: 'nizam',
      tier: 1,
      type: 'person',
      nom: 'Nizam al-Mulk',
      role: 'Grand vizir',
      dates: '1018 – 1092',
      description:
        "Ce Persan organise l'empire pendant trente ans pour les sultans Alp Arslan et Malik Shah. Il fonde des écoles financées par l'État, les madrasas Nizamiyya. Il est assassiné en 1092.",
    },
    {
      id: 'calendrier',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un calendrier très précis',
      body:
        "En 1079, à Ispahan, une équipe d'astronomes dont fait partie Omar Khayyam met au point le calendrier Jalali. Il est un peu plus exact que notre calendrier grégorien, adopté cinq siècles plus tard. Le calendrier iranien actuel en descend.",
    },
    {
      id: 'roum',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le sultanat de Roum',
      body:
        "En Anatolie, une branche des Seldjoukides fonde le sultanat de Roum, c'est-à-dire « de Rome », car il occupe des terres prises aux Byzantins, les « Romains ». Sa capitale, Konya, devient un grand centre culturel.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Seldjoukides en dates',
      items: [
        { year: 1040, label: 'Victoire de Dandanakan' },
        { year: 1055, label: 'Tughril à Bagdad' },
        { year: 1071, label: 'Bataille de Manzikert' },
        { year: 1092, label: 'Mort de Malik Shah et de Nizam al-Mulk' },
        { year: 1243, label: 'Défaite de Köse Dağ face aux Mongols' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un empire qui se défait',
      body:
        "Après 1092, l'empire se divise entre princes rivaux. Le dernier grand sultan meurt en 1194. En Anatolie, le sultanat de Roum devient vassal des Mongols après la bataille de Köse Dağ (1243), puis se décompose en principautés turques, dont naîtra l'Empire ottoman.",
    },

    // ── Niveau 2 ──
    {
      id: 'khayyam',
      tier: 2,
      type: 'person',
      nom: 'Omar Khayyam',
      role: 'Mathématicien, astronome et poète',
      dates: '1048 – 1131',
      description:
        "Savant de Nichapour, il résout des équations du troisième degré et participe à la réforme du calendrier. Ses quatrains, les Rubaïyat, qui parlent du vin et du temps qui passe, deviennent célèbres en Europe au XIXe siècle.",
    },
    {
      id: 'croisade',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les croisades',
      body:
        "La progression des Turcs en Anatolie inquiète Byzance, qui demande l'aide de l'Occident. En 1095, le pape appelle à la première croisade. En 1097, les croisés battent le sultan de Roum à Dorylée et poursuivent leur route vers Jérusalem.",
    },
    {
      id: 'caravanserails',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Les caravansérails',
      body:
        "Le long des routes d'Anatolie, les Seldjoukides bâtissent des caravansérails fortifiés, environ tous les 30 à 40 kilomètres. Les marchands y trouvent un abri, de l'eau et de la nourriture pour eux et leurs bêtes.",
    },
    {
      id: 'rumi',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Rumi et les derviches tourneurs',
      body:
        "Au XIIIe siècle, le poète mystique Djalal al-Din Rumi s'installe à Konya. Il écrit en persan une œuvre immense sur l'amour de Dieu. Ses disciples fondent l'ordre des derviches tourneurs, qui prient en tournant sur eux-mêmes.",
    },
    {
      id: 'madrasas',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Les madrasas Nizamiyya',
      body:
        "Le vizir Nizam al-Mulk fonde dans les grandes villes des écoles supérieures où les étudiants sont logés, nourris et instruits gratuitement. On y forme des juges et des fonctionnaires ; le penseur al-Ghazali enseigne à celle de Bagdad.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'Qui sont les Seldjoukides ?', options: ['Des Turcs convertis à l’islam', 'Des Arabes du désert', 'Des Grecs de Byzance', 'Des Mongols bouddhistes'], answer: 0 },
    { id: 'tughril', type: 'mcq', prompt: 'Quel chef seldjoukide entre à Bagdad en 1055 ?', options: ['Tughril Beg', 'Alp Arslan', 'Malik Shah', 'Saladin'], answer: 0 },
    { id: 'calife', type: 'tf', prompt: 'Les Seldjoukides se présentent comme les protecteurs du calife de Bagdad.', answer: true },
    { id: 'sultan', type: 'mcq', prompt: 'Que signifie le mot « sultan » ?', options: ['Celui qui a le pouvoir', 'Le fils du Ciel', 'Le grand prêtre', 'Le roi des rois'], answer: 0 },
    { id: 'manzikert', type: 'mcq', prompt: 'Quel sultan bat l’empereur byzantin à Manzikert en 1071 ?', options: ['Alp Arslan', 'Tughril Beg', 'Sanjar', 'Soliman'], answer: 0 },
    { id: 'anatolie', type: 'mcq', prompt: 'Quelle région les Turcs commencent-ils à peupler après Manzikert ?', options: ['L’Anatolie', 'L’Égypte', 'L’Espagne', 'L’Inde'], answer: 0 },
    { id: 'vizir', type: 'mcq', prompt: 'Quel vizir organise l’empire et fonde des madrasas ?', options: ['Nizam al-Mulk', 'Omar Khayyam', 'Rumi', 'Avicenne'], answer: 0 },
    { id: 'calendrier', type: 'mcq', prompt: 'Quel savant participe à la création du calendrier Jalali ?', options: ['Omar Khayyam', 'Ptolémée', 'Galilée', 'Al-Khwarizmi'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle ville d’Iran est la capitale de Malik Shah ?', options: ['Ispahan', 'Téhéran', 'Bagdad', 'Le Caire'], answer: 0 },
    { id: 'roum', type: 'mcq', prompt: 'Que signifie « Roum » dans « sultanat de Roum » ?', options: ['Rome', 'Rouge', 'Roi', 'Route'], answer: 0 },
    { id: 'konya', type: 'mcq', prompt: 'Quelle est la capitale du sultanat de Roum ?', options: ['Konya', 'Istanbul', 'Bagdad', 'Damas'], answer: 0 },
    { id: 'rumi', type: 'mcq', prompt: 'Quel ordre religieux fondent les disciples de Rumi ?', options: ['Les derviches tourneurs', 'Les templiers', 'Les bénédictins', 'Les samouraïs'], answer: 0 },
    { id: 'croisade', type: 'tf', prompt: 'La progression des Turcs en Anatolie contribue à l’appel à la première croisade.', answer: true },
    { id: 'mongols', type: 'mcq', prompt: 'Qui bat le sultan de Roum à Köse Dağ en 1243 ?', options: ['Les Mongols', 'Les croisés', 'Les Byzantins', 'Les Arabes'], answer: 0 },
    { id: 'ottomans', type: 'mcq', prompt: 'Quel empire naîtra des principautés turques d’Anatolie ?', options: ['L’Empire ottoman', 'L’Empire perse', 'L’Empire mongol', 'L’Empire byzantin'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Victoire de Dandanakan', 'Tughril à Bagdad', 'Bataille de Manzikert', 'Défaite de Köse Dağ'] },
  ],

  recap: [
    'Turcs convertis à l’islam, ils conquièrent l’Iran (1040) et protègent le calife (1055)',
    'Manzikert (1071) : les Turcs s’installent en Anatolie',
    'Nizam al-Mulk, les madrasas et le calendrier d’Omar Khayyam',
    'Le sultanat de Roum, à Konya, soumis par les Mongols en 1243',
  ],
}
