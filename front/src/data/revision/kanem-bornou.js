/** Chapitre rédigé : Kanem-Bornou (vers 700 – 1893). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'lac',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Un royaume autour du lac Tchad',
      body:
        "Vers le VIIIe siècle, un royaume se forme au Kanem, au nord-est du lac Tchad. Il s'enrichit grâce au commerce à travers le Sahara : il vend des esclaves, de l'ivoire et des plumes d'autruche, et achète des chevaux, du sel, du cuivre et des armes.",
      highlight: { value: '> 1 000 ans', label: 'd’existence' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Du Kanem au Bornou',
      years: [800, 1300, 1600, 1880],
      caption: 'Comparez : le royaume se déplace de l’est à l’ouest du lac Tchad et change de forme au fil des siècles.',
    },
    {
      id: 'islam',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’un des premiers États musulmans d’Afrique noire',
      body:
        "Vers 1085, le roi Hummay se convertit à l'islam. Plusieurs de ses successeurs font le pèlerinage à La Mecque, et le royaume entretient au Caire une maison pour ses étudiants et ses pèlerins.",
    },
    {
      id: 'bornou',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le déménagement vers le Bornou',
      body:
        "Au XIVe siècle, chassée du Kanem par des rivaux, la dynastie des Sefuwa s'installe à l'ouest du lac, au Bornou. Vers 1470, le roi Ali Gaji y fonde une capitale fortifiée en brique, Ngazargamu.",
    },
    {
      id: 'idris',
      tier: 1,
      type: 'person',
      nom: 'Idris Alaoma',
      role: 'Mai (roi) du Bornou',
      dates: 'règne vers 1564 – 1596',
      description:
        "Le plus célèbre souverain du Bornou fait venir des fusils et des instructeurs de l'Empire ottoman. Il mène de nombreuses campagnes et fait le pèlerinage à La Mecque. Son imam raconte ses exploits en arabe.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le commerce transsaharien',
      body:
        "Les caravanes relient le lac Tchad à la Libye et à l'Égypte. Le Bornou échange des ambassades avec Tripoli, le Caire et l'Empire ottoman. La traite des esclaves vers le nord du Sahara est une source importante de revenus.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Mille ans de royaume',
      items: [
        { year: 1085, label: 'Conversion du roi Hummay' },
        { year: 1380, label: 'Installation au Bornou' },
        { year: 1470, label: 'Fondation de Ngazargamu' },
        { year: 1564, label: 'Règne d’Idris Alaoma' },
        { year: 1808, label: 'Chute de Ngazargamu' },
        { year: 1893, label: 'Conquête par Rabih' },
      ],
    },
    {
      id: 'djihad',
      tier: 1,
      type: 'war',
      nom: 'Djihad peul contre le Bornou',
      annee: 1808,
      adversaires: ['Califat de Sokoto (combattants peuls)'],
      allies: ['Bornou'],
      vainqueur: 'Bornou (grâce à al-Kanemi)',
      consequences:
        "Les combattants peuls incendient la capitale, Ngazargamu. Le lettré al-Kanemi repousse les assaillants et sauve le royaume ; sa famille finit par remplacer la vieille dynastie des Sefuwa.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Rabih et la colonisation',
      body:
        "En 1893, le conquérant Rabih az-Zubayr, venu du Soudan, s'empare du Bornou. Il est tué par les Français en 1900, et le Bornou est partagé entre les colonies britannique, française et allemande.",
    },

    // ── Niveau 2 ──
    {
      id: 'mai',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Un roi caché',
      body:
        "Le mai est un roi sacré. Il vit retiré dans son palais et, lors des audiences, il parle souvent caché derrière un rideau. Il s'appuie sur des officiers et une aristocratie de cavaliers.",
    },
    {
      id: 'cavaliers',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Des cavaliers en cotte de mailles',
      body:
        "La cavalerie du Bornou porte des cottes de mailles et des vêtements matelassés, et les chevaux sont protégés par des caparaçons. Les chevaux, achetés au nord du Sahara, valent très cher.",
    },
    {
      id: 'kanemi',
      tier: 2,
      type: 'person',
      nom: 'Muhammad al-Amin al-Kanemi',
      role: 'Shehu du Bornou',
      dates: 'vers 1776 – 1837',
      description: "Lettré musulman, il sauve le Bornou en 1808, fonde une nouvelle capitale, Kukawa, et échange avec le chef de Sokoto des lettres célèbres sur la légitimité de la guerre sainte.",
    },
    {
      id: 'barth',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Un explorateur à Kukawa',
      body:
        "Dans les années 1850, l'explorateur allemand Heinrich Barth séjourne à Kukawa. Il décrit en détail le royaume, ses marchés et ses habitants, et recopie l'histoire de ses rois.",
    },
    {
      id: 'shehu',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le shehu de Bornou aujourd’hui',
      body:
        "Le titre de shehu de Bornou existe toujours au Nigeria. Son titulaire est une autorité traditionnelle respectée, sans pouvoir politique officiel.",
    },
  ],

  quiz: [
    { id: 'lac', type: 'mcq', prompt: 'Autour de quel lac se trouve le Kanem-Bornou ?', options: ['Le lac Tchad', 'Le lac Victoria', 'Le lac Léman', 'Le lac Titicaca'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quels pays actuels se trouve surtout le Kanem-Bornou ?', options: ['Le Tchad et le Nigeria', 'Le Maroc et l’Algérie', 'Le Kenya et la Tanzanie', 'L’Égypte et le Soudan'], answer: 0 },
    { id: 'duree', type: 'mcq', prompt: 'Combien de temps environ dure le royaume ?', options: ['Plus de 1 000 ans', '50 ans', '200 ans', '10 ans'], answer: 0 },
    { id: 'commerce', type: 'mcq', prompt: 'Quel commerce enrichit le royaume ?', options: ['Le commerce à travers le Sahara', 'Le commerce des épices par la mer', 'Le commerce du pétrole', 'Le commerce de la soie chinoise'], answer: 0 },
    { id: 'chevaux', type: 'mcq', prompt: 'Que le royaume achète-t-il au nord du Sahara ?', options: ['Des chevaux', 'Du riz', 'Des éléphants', 'Du thé'], answer: 0 },
    { id: 'islam', type: 'mcq', prompt: 'Vers quand le roi Hummay se convertit-il à l’islam ?', options: ['Vers 1085', 'Vers 600', 'Vers 1800', 'Vers 1500'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre portent les rois du Kanem-Bornou ?', options: ['Mai', 'Pharaon', 'Négus', 'Mansa'], answer: 0 },
    { id: 'bornou', type: 'tf', prompt: 'Au XIVe siècle, la dynastie royale s’installe à l’ouest du lac Tchad, au Bornou.', answer: true },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle capitale fortifiée Ali Gaji fonde-t-il vers 1470 ?', options: ['Ngazargamu', 'Tombouctou', 'Kano', 'Gao'], answer: 0 },
    { id: 'idris', type: 'mcq', prompt: 'Quel souverain fait venir des fusils de l’Empire ottoman ?', options: ['Idris Alaoma', 'Hummay', 'Rabih', 'Mansa Moussa'], answer: 0 },
    { id: 'rideau', type: 'tf', prompt: 'Le mai parle souvent caché derrière un rideau.', answer: true },
    { id: 'djihad', type: 'mcq', prompt: 'Qui attaque le Bornou en 1808 ?', options: ['Les combattants peuls de Sokoto', 'Les Portugais', 'Les Mamelouks', 'Les Zoulous'], answer: 0 },
    { id: 'kanemi', type: 'mcq', prompt: 'Quel lettré sauve le Bornou en 1808 ?', options: ['Al-Kanemi', 'Averroès', 'Ibn Battuta', 'Ahmad Baba'], answer: 0 },
    { id: 'rabih', type: 'mcq', prompt: 'Quel conquérant s’empare du Bornou en 1893 ?', options: ['Rabih az-Zubayr', 'Samory Touré', 'Chaka', 'Napoléon'], answer: 0 },
    { id: 'barth', type: 'mcq', prompt: 'Quel explorateur allemand décrit le Bornou dans les années 1850 ?', options: ['Heinrich Barth', 'David Livingstone', 'René Caillié', 'Marco Polo'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Conversion du roi Hummay', 'Fondation de Ngazargamu', 'Règne d’Idris Alaoma', 'Conquête par Rabih'] },
  ],

  recap: [
    'Un royaume né au VIIIe siècle autour du lac Tchad, enrichi par le commerce saharien',
    'Islam vers 1085 ; installation au Bornou au XIVe siècle',
    'Apogée sous Idris Alaoma, armé de fusils ottomans',
    'Djihad peul (1808), dynastie d’al-Kanemi, conquête de Rabih (1893)',
  ],
}
