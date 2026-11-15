/** Chapitre rédigé : Empire du Khwarezm (1077 – 1231). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des gouverneurs devenus empereurs',
      body:
        "Le Khwarezm est une région d'oasis autour du delta de l'Amou-Daria, au sud de la mer d'Aral. En 1077, les Seldjoukides y nomment un gouverneur turc. Ses descendants, les Khwarezm-chahs, deviennent peu à peu indépendants.",
      highlight: { value: '1077', label: 'début de la dynastie' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire vers 1200',
      years: [1200],
      caption: 'De la mer d’Aral au golfe Persique, l’empire domine l’Asie centrale et l’Iran à la veille de l’invasion mongole.',
    },
    {
      id: 'expansion',
      tier: 1,
      type: 'text',
      kicker: 'Conquêtes',
      title: 'Un empire géant',
      body:
        "En 1194, le chah Tekish bat le dernier sultan seldjoukide. Son fils Muhammad II conquiert l'Iran et la Transoxiane, avec Boukhara et Samarcande. En quelques années, le Khwarezm devient la première puissance du monde musulman oriental.",
    },
    {
      id: 'otrar',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’incident d’Otrar',
      body:
        "En 1218, Gengis Khan envoie une caravane de marchands pour commercer avec le Khwarezm. Le gouverneur de la ville d'Otrar les fait tuer, les accusant d'espionnage, et le chah fait exécuter un ambassadeur mongol. Gengis Khan décide de se venger.",
      highlight: { value: '1218', label: 'massacre de la caravane' },
    },
    {
      id: 'invasion',
      tier: 1,
      type: 'war',
      nom: 'Invasion mongole du Khwarezm',
      annee: 1219,
      adversaires: ['Empire mongol (Gengis Khan)'],
      allies: ['Empire du Khwarezm'],
      vainqueur: 'Empire mongol',
      consequences:
        "En trois ans, les Mongols prennent Otrar, Boukhara, Samarcande, Gurganj, Merv et Nichapour. Les villes qui résistent sont détruites et leurs habitants massacrés : les destructions sont immenses.",
    },
    {
      id: 'jalal',
      tier: 1,
      type: 'person',
      nom: 'Jalal ad-Din',
      role: 'Dernier Khwarezm-chah',
      dates: 'mort en 1231',
      description:
        "Fils de Muhammad II, il combat les Mongols pendant dix ans. Battu par Gengis Khan sur l'Indus en 1221, il échappe à la capture en sautant avec son cheval dans le fleuve. Il meurt en fuite en 1231.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’empire du Khwarezm en dates',
      items: [
        { year: 1077, label: 'Un gouverneur turc au Khwarezm' },
        { year: 1194, label: 'Victoire sur les Seldjoukides' },
        { year: 1218, label: 'Incident d’Otrar' },
        { year: 1220, label: 'Chute de Boukhara et Samarcande' },
        { year: 1231, label: 'Mort de Jalal ad-Din' },
      ],
    },
    {
      id: 'savants',
      tier: 1,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Une terre de savants',
      body:
        "Le Khwarezm a donné naissance à de grands savants, comme le mathématicien al-Khwarizmi au IXe siècle, dont le nom a donné le mot « algorithme », et le savant al-Biruni. Ses villes sont des centres de commerce et de culture.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La première conquête mongole',
      body:
        "L'invasion du Khwarezm est la première grande campagne de Gengis Khan hors de l'Asie de l'Est. L'Asie centrale passe sous domination mongole ; la région mettra des siècles à se relever.",
    },

    // ── Niveau 2 ──
    {
      id: 'muhammad',
      tier: 2,
      type: 'person',
      nom: 'Muhammad II',
      role: 'Khwarezm-chah',
      dates: 'règne 1200 – 1220',
      description:
        "Il bâtit un immense empire, mais entre en conflit avec le calife de Bagdad et provoque Gengis Khan. Fuyant devant les Mongols, il meurt en 1220 sur une île de la mer Caspienne.",
    },
    {
      id: 'parwan',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Une rare victoire sur les Mongols',
      body:
        "En 1221, à Parwan, en Afghanistan, Jalal ad-Din bat une armée mongole : c'est l'une des rares défaites des Mongols à cette époque. Mais ses alliés se disputent le butin et l'abandonnent.",
    },
    {
      id: 'indus',
      tier: 2,
      type: 'war',
      nom: 'Bataille de l’Indus',
      annee: 1221,
      adversaires: ['Empire mongol (Gengis Khan)'],
      allies: ['Jalal ad-Din'],
      vainqueur: 'Empire mongol',
      consequences: "Jalal ad-Din s'échappe en sautant avec son cheval dans le fleuve et se réfugie en Inde.",
    },
    {
      id: 'kubra',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le maître soufi de Gurganj',
      body:
        "Najm al-Din Kubra, fondateur d'un ordre mystique soufi, refuse de quitter Gurganj quand les Mongols l'assiègent. Il meurt en défendant la ville en 1221.",
    },
    {
      id: 'ruines',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Kounia-Ourguentch',
      body:
        "Les ruines de Gurganj, l'ancienne capitale, se trouvent aujourd'hui au Turkménistan, sous le nom de Kounia-Ourguentch. Ses mausolées et son grand minaret sont inscrits au patrimoine mondial.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Près de quelle mer se trouve le Khwarezm ?', options: ['La mer d’Aral', 'La mer du Nord', 'La mer Rouge', 'La mer Baltique'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre portent les souverains du Khwarezm ?', options: ['Khwarezm-chah', 'Pharaon', 'Tsar', 'Doge'], answer: 0 },
    { id: 'avant', type: 'mcq', prompt: 'Pour quelle dynastie les premiers chahs gouvernent-ils ?', options: ['Les Seldjoukides', 'Les Romains', 'Les Ming', 'Les Abbassides d’Espagne'], answer: 0 },
    { id: 'seldjoukides', type: 'mcq', prompt: 'Quel chah bat le dernier sultan seldjoukide en 1194 ?', options: ['Tekish', 'Jalal ad-Din', 'Atsiz', 'Gengis Khan'], answer: 0 },
    { id: 'villes', type: 'mcq', prompt: 'Quelles grandes villes Muhammad II contrôle-t-il ?', options: ['Boukhara et Samarcande', 'Rome et Athènes', 'Pékin et Nankin', 'Le Caire et Alexandrie'], answer: 0 },
    { id: 'otrar', type: 'mcq', prompt: 'Que se passe-t-il à Otrar en 1218 ?', options: ['Une caravane mongole est massacrée', 'Une grande victoire du chah', 'La fondation d’une université', 'Un tremblement de terre'], answer: 0 },
    { id: 'gengis', type: 'mcq', prompt: 'Quel conquérant envahit le Khwarezm en 1219 ?', options: ['Gengis Khan', 'Tamerlan', 'Alexandre le Grand', 'Attila'], answer: 0 },
    { id: 'destructions', type: 'tf', prompt: 'L’invasion mongole détruit de grandes villes comme Boukhara et Samarcande.', answer: true },
    { id: 'jalal', type: 'mcq', prompt: 'Quel prince résiste aux Mongols pendant dix ans ?', options: ['Jalal ad-Din', 'Muhammad II', 'Tekish', 'Saladin'], answer: 0 },
    { id: 'indus', type: 'mcq', prompt: 'Comment Jalal ad-Din échappe-t-il aux Mongols sur l’Indus ?', options: ['En sautant à cheval dans le fleuve', 'En se déguisant en moine', 'En s’envolant en ballon', 'En se cachant dans un puits'], answer: 0 },
    { id: 'parwan', type: 'tf', prompt: 'À Parwan, en 1221, Jalal ad-Din bat une armée mongole.', answer: true },
    { id: 'muhammad', type: 'mcq', prompt: 'Où meurt le chah Muhammad II en 1220 ?', options: ['Sur une île de la Caspienne', 'À Bagdad', 'À Pékin', 'À Constantinople'], answer: 0 },
    { id: 'algorithme', type: 'mcq', prompt: 'Quel mot vient du nom du savant al-Khwarizmi ?', options: ['Algorithme', 'Algèbre', 'Alchimie', 'Alphabet'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Comment s’appellent aujourd’hui les ruines de Gurganj ?', options: ['Kounia-Ourguentch', 'Persépolis', 'Pétra', 'Babylone'], answer: 0 },
    { id: 'premiere', type: 'tf', prompt: 'L’invasion du Khwarezm est la première grande campagne de Gengis Khan hors de l’Asie de l’Est.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Un gouverneur turc au Khwarezm', 'Victoire sur les Seldjoukides', 'Incident d’Otrar', 'Mort de Jalal ad-Din'] },
  ],

  recap: [
    'Des gouverneurs des Seldjoukides deviennent maîtres d’un immense empire',
    'Muhammad II domine l’Asie centrale et l’Iran vers 1210',
    '1218 : l’incident d’Otrar provoque la vengeance de Gengis Khan',
    '1219-1221 : invasion mongole ; Jalal ad-Din résiste jusqu’en 1231',
  ],
}
