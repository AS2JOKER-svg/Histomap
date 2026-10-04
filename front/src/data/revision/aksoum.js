/** Chapitre rédigé : Royaume d'Aksoum (Ier – Ve siècle apr. J.-C. sur la frise ; le royaume dure jusqu'au VIIe siècle environ). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume des hauts plateaux',
      body:
        "Le royaume d'Aksoum naît vers le Ier siècle apr. J.-C. sur les hauts plateaux du nord de l'actuelle Éthiopie et de l'Érythrée. Sa capitale, Aksoum, se trouve dans la région du Tigré. Ses habitants parlent le guèze, une langue sémitique proche de celles du sud de l'Arabie.",
      highlight: { value: 'Aksoum', label: 'capitale, dans le Tigré (nord de l’Éthiopie)' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Entre hauts plateaux et mer Rouge',
      years: [300],
      caption: "Vers 300, Aksoum contrôle les plateaux éthiopiens et la côte de la mer Rouge, autour de son port d'Adoulis.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Un carrefour entre Rome et l’Inde',
      body:
        "Par le port d'Adoulis, sur la mer Rouge, Aksoum échange de l'ivoire, de l'or, de l'encens et des esclaves contre des tissus, du vin, des métaux et des objets venus de l'Empire romain, d'Arabie et d'Inde. Les navires profitent des vents de la mousson pour traverser l'océan Indien.",
    },
    {
      id: 'mani',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'L’un des quatre grands royaumes du monde',
      body:
        "Au IIIe siècle, le prophète Mani, fondateur du manichéisme, cite quatre grands royaumes dans le monde : celui de Perse, celui des Romains, celui des Aksoumites et celui des Chinois. Aksoum est alors connue bien au-delà de l'Afrique.",
    },
    {
      id: 'monnaie',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Pouvoir',
      value: '≈ 270',
      label: 'premières pièces d’or, d’argent et de bronze',
      caption: "Aksoum est l'un des rares royaumes de l'époque à frapper sa propre monnaie d'or. Les pièces portent le nom et le portrait du roi, souvent avec des inscriptions en grec, la langue du commerce.",
    },
    {
      id: 'steles',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Des stèles géantes',
      body:
        "À Aksoum, des stèles de granit taillées d'un seul bloc marquent des tombes royales. Elles imitent des palais à plusieurs étages, avec fausses portes et fausses fenêtres. La plus grande, aujourd'hui tombée et brisée, mesurait environ 33 mètres et pesait plus de 500 tonnes.",
      highlight: { value: '≈ 33 m', label: 'hauteur de la plus grande stèle' },
    },
    {
      id: 'ezana',
      tier: 1,
      type: 'person',
      nom: 'Ézana',
      role: "Roi d'Aksoum",
      dates: 'IVe siècle (règne vers 330 – vers 360)',
      description: "Il se fait appeler « roi des rois ». Vers le milieu du IVe siècle, il se convertit au christianisme, qui devient la religion de la cour. Ses inscriptions, en guèze, en grec et en sabéen, racontent ses campagnes militaires.",
    },
    {
      id: 'christianisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'De la lune à la croix',
      body:
        "Les Aksoumites honoraient d'abord des dieux comme Astar et Mahrem, dieu de la guerre et protecteur du roi. Après la conversion d'Ézana, le croissant et le disque qui ornaient les pièces sont remplacés par une croix. Aksoum devient l'un des premiers États chrétiens du monde.",
      highlight: { value: '≈ 330-350', label: 'conversion du roi Ézana' },
    },
    {
      id: 'nubie',
      tier: 1,
      type: 'war',
      nom: 'Expédition vers la Nubie',
      annee: 350,
      adversaires: ['Peuples de la vallée du Nil (Noba, royaume de Méroé)'],
      allies: ["Armée d'Aksoum (roi Ézana)"],
      vainqueur: "Royaume d'Aksoum",
      consequences: "Vers 350, une inscription d'Ézana raconte une campagne jusqu'au Nil. Le royaume de Méroé, déjà très affaibli, disparaît à cette époque, et Aksoum domine le commerce de la région.",
    },

    // ── Niveau 2 ──
    {
      id: 'frumence',
      tier: 2,
      type: 'person',
      nom: 'Frumence',
      role: "Premier évêque d'Aksoum",
      dates: 'IVe siècle',
      description: "Jeune chrétien de Tyr, il est capturé avec son frère lors d'une escale en mer Rouge et emmené à la cour d'Aksoum. Devenu conseiller, il est nommé évêque par Athanase, patriarche d'Alexandrie. Il joue un grand rôle dans la conversion d'Ézana.",
    },
    {
      id: 'gueze',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'L’écriture guèze',
      body:
        "L'écriture guèze dérive de l'alphabet du sud de l'Arabie. Vers le IVe siècle, les Aksoumites y ajoutent des marques pour noter les voyelles. Cette écriture sert encore aujourd'hui, adaptée à l'amharique et au tigrigna, en Éthiopie et en Érythrée.",
    },
    {
      id: 'adoulis',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Un guide de voyage antique',
      body:
        "Au Ier siècle, un marchand grec anonyme rédige le Périple de la mer Érythrée, un guide des ports de la mer Rouge et de l'océan Indien. Il décrit Adoulis et cite un roi, Zoskalès, qui sait lire le grec.",
    },
    {
      id: 'obelisque',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: '2005',
      label: "retour de l'obélisque d'Aksoum",
      caption: "Emportée à Rome en 1937 par l'Italie fasciste, une stèle de 24 mètres est rendue à l'Éthiopie en 2005, puis redressée à Aksoum en 2008. Le site est inscrit au patrimoine mondial de l'UNESCO depuis 1980.",
    },
    {
      id: 'suite',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Après l’Antiquité',
      body:
        "Le royaume survit bien après le Ve siècle : au VIe siècle, le roi Kaleb intervient même au Yémen. Mais à partir du VIIe siècle, Aksoum perd le contrôle du commerce de la mer Rouge et décline. Son héritage chrétien se prolonge dans l'Éthiopie médiévale.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: "Dans quels pays actuels se trouvait le royaume d'Aksoum ?", options: ["L'Éthiopie et l'Érythrée", 'Le Soudan et le Tchad', "L'Égypte et la Libye", 'Le Kenya et la Tanzanie'], answer: 0 },
    { id: 'mer', type: 'mcq', prompt: "Sur quelle mer se trouve le port d'Adoulis ?", options: ['La mer Rouge', 'La mer Méditerranée', 'La mer Noire', 'La mer Caspienne'], answer: 0 },
    { id: 'port', type: 'mcq', prompt: "Comment s'appelle le grand port d'Aksoum ?", options: ['Adoulis', 'Alexandrie', 'Carthage', 'Méroé'], answer: 0 },
    { id: 'mousson', type: 'tf', prompt: "Les navires de l'océan Indien profitent des vents de la mousson.", answer: true },
    { id: 'mani', type: 'mcq', prompt: 'Selon Mani, lequel de ces royaumes fait partie des quatre plus grands du monde avec Aksoum ?', options: ['La Chine', 'Le Mali', 'Carthage', 'Le royaume de Koush'], answer: 0 },
    { id: 'monnaie', type: 'tf', prompt: "Aksoum frappe ses propres pièces d'or.", answer: true },
    { id: 'grec', type: 'mcq', prompt: "Quelle langue du commerce apparaît souvent sur les pièces d'Aksoum ?", options: ['Le grec', 'Le latin', "L'arabe", 'Le chinois'], answer: 0 },
    { id: 'steles', type: 'mcq', prompt: 'Que marquent les grandes stèles de granit d’Aksoum ?', options: ['Des tombes royales', 'Des frontières', 'Des marchés', 'Des ports'], answer: 0 },
    { id: 'monolithe', type: 'tf', prompt: "Les grandes stèles d'Aksoum sont faites de plusieurs blocs empilés.", answer: false, explanation: "Elles sont taillées d'un seul bloc de granit (monolithes)." },
    { id: 'ezana', type: 'mcq', prompt: 'Quel roi d’Aksoum se convertit au christianisme au IVe siècle ?', options: ['Ézana', 'Kaleb', 'Taharqa', 'Piânkhy'], answer: 0 },
    { id: 'croix', type: 'mcq', prompt: "Quel symbole remplace le croissant sur les pièces après la conversion d'Ézana ?", options: ['La croix', "L'aigle", 'Le lion', "L'étoile"], answer: 0 },
    { id: 'frumence', type: 'mcq', prompt: 'Qui devient le premier évêque d’Aksoum ?', options: ['Frumence', 'Athanase', 'Augustin', 'Mani'], answer: 0 },
    { id: 'gueze', type: 'mcq', prompt: "Comment s'appelle la langue et l'écriture d'Aksoum ?", options: ['Le guèze', 'Le méroïtique', 'Le copte', 'Le swahili'], answer: 0 },
    { id: 'ecriture', type: 'tf', prompt: "L'écriture guèze n'est plus utilisée aujourd'hui.", answer: false, explanation: "Adaptée, elle sert encore à écrire l'amharique et le tigrigna." },
    { id: 'meroe', type: 'mcq', prompt: "Quel royaume du Nil disparaît vers 350, à l'époque d'Ézana ?", options: ['Méroé (Koush)', 'Carthage', 'Le Ghana', 'Pount'], answer: 0 },
    { id: 'obelisque', type: 'mcq', prompt: "Dans quelle ville une stèle d'Aksoum a-t-elle été emportée en 1937 ?", options: ['Rome', 'Paris', 'Londres', 'Le Caire'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Rédaction du Périple de la mer Érythrée (Ier s.)', "Premières pièces d'Aksoum (vers 270)", "Conversion d'Ézana (IVe s.)", "Retour de l'obélisque à Aksoum (2005)"] },
  ],

  recap: [
    "Un royaume d'Éthiopie et d'Érythrée, carrefour de la mer Rouge",
    'Monnaie d’or, stèles géantes et écriture guèze',
    'IVe siècle : le roi Ézana adopte le christianisme',
    'Vers 350 : Aksoum supplante Méroé dans la région',
  ],
}
