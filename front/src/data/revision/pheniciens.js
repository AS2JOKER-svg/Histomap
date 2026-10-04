/** Chapitre rédigé : Phéniciens (≈ 1200 – 64 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cites',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Des cités au bord de la mer',
      body:
        "Vers 1200 av. J.-C., sur une étroite bande côtière correspondant à peu près à l'actuel Liban, des cités prospèrent : Byblos, Sidon, Tyr, Arwad. Les Grecs appellent leurs habitants « Phéniciens », peut-être à cause de la couleur pourpre de leurs tissus.",
      highlight: { value: '≈ 1200 av. J.-C.', label: 'essor des cités phéniciennes' },
    },
    {
      id: 'pouvoir',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Des cités-États indépendantes',
      body:
        "La Phénicie n'est pas un pays unifié : chaque cité a son propre roi et ses intérêts, et les cités sont souvent rivales. Coincées entre la mer et les montagnes, avec peu de terres à cultiver, elles se tournent vers le commerce maritime.",
    },
    {
      id: 'alphabet',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Héritage',
      value: '22 lettres',
      label: "dans l'alphabet phénicien, uniquement des consonnes",
      caption: "Au lieu de centaines de signes, quelques lettres suffisent pour noter les sons. Les Grecs l'adoptent vers le VIIIe siècle av. J.-C. et y ajoutent les voyelles ; notre alphabet latin en descend.",
    },
    {
      id: 'pourpre',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le secret de la pourpre',
      body:
        "Les Phéniciens extraient d'un coquillage, le murex, une teinture rouge violacé qui ne passe pas au lavage. Il faut des milliers de coquillages pour teindre un seul vêtement : la pourpre devient la couleur des rois, puis des empereurs romains.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Les marchands de la Méditerranée',
      body:
        "Leurs navires transportent le bois de cèdre du Liban, les tissus pourpres, le verre, l'ivoire sculpté, les métaux et le vin. Byblos est si connue pour le commerce du papyrus que les Grecs en tirent le mot biblion, « livre », d'où vient le mot « Bible ».",
    },
    {
      id: 'comptoirs',
      tier: 1,
      type: 'text',
      kicker: 'Expansion',
      title: 'Des comptoirs jusqu’à l’Atlantique',
      body:
        "Les Phéniciens fondent des comptoirs tout autour de la Méditerranée : à Chypre, en Sicile, en Sardaigne, en Afrique du Nord et en Espagne, jusqu'à Gadir (Cadix), au-delà du détroit de Gibraltar. La plus célèbre de ces colonies est Carthage, fondée par Tyr vers 814 av. J.-C. selon la tradition.",
    },
    {
      id: 'dieux',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Baal, Astarté et Melqart',
      body:
        "Chaque cité honore ses propres dieux. On prie Baal, « le Seigneur », la déesse Astarté et Melqart, protecteur de Tyr, que les Grecs comparent à Héraclès. Les marins emportent ces cultes dans les colonies.",
    },
    {
      id: 'tyr',
      tier: 1,
      type: 'war',
      nom: 'Siège de Tyr',
      annee: -332,
      adversaires: ['Alexandre le Grand (Macédoine)', 'Flottes de Sidon, de Byblos et de Chypre ralliées à Alexandre'],
      allies: ['Habitants de Tyr'],
      vainqueur: 'Alexandre le Grand',
      consequences: "Tyr, bâtie sur une île, résiste sept mois. Alexandre fait construire une digue pour l'atteindre, puis prend la ville : des milliers d'habitants sont tués ou vendus comme esclaves. Depuis, le sable accumulé le long de la digue a rattaché l'ancienne île au continent.",
    },
    {
      id: 'dominations',
      tier: 1,
      type: 'dates',
      kicker: 'Fin',
      title: 'Sous la domination des empires',
      items: [
        { year: -814, label: 'Fondation de Carthage par Tyr (selon la tradition)' },
        { year: -539, label: 'Les cités passent sous domination perse' },
        { year: -332, label: 'Alexandre le Grand prend Tyr' },
        { year: -64, label: 'La Phénicie est intégrée à la province romaine de Syrie' },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'hiram',
      tier: 2,
      type: 'person',
      nom: 'Hiram Ier',
      role: 'Roi de Tyr',
      dates: 'Xe siècle av. J.-C.',
      description: "D'après la Bible, il envoie au roi Salomon du bois de cèdre et des artisans pour bâtir le Temple de Jérusalem. Sous son règne, Tyr devient la cité phénicienne la plus puissante.",
    },
    {
      id: 'navigation',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Des marins hors pair',
      body:
        "Les auteurs grecs rapportent que les marins phéniciens se repèrent la nuit grâce à la Petite Ourse, la constellation de l'étoile Polaire. Selon l'historien grec Hérodote, des Phéniciens envoyés par un pharaon auraient même fait le tour de l'Afrique vers 600 av. J.-C. ; ce récit reste discuté.",
    },
    {
      id: 'empires',
      tier: 2,
      type: 'text',
      kicker: 'Fluctuations',
      title: 'Payer pour rester libres',
      body:
        "Face aux grands empires, Assyriens, Babyloniens puis Perses, les cités phéniciennes paient souvent un tribut pour garder une certaine autonomie. Sous les Perses, leur flotte forme une grande partie de la marine du Grand Roi, notamment contre les Grecs.",
    },
    {
      id: 'byblos',
      tier: 2,
      type: 'text',
      kicker: 'Durée',
      title: 'Byblos, une ville très ancienne',
      body:
        "Byblos est habitée depuis le Néolithique et commerce avec l'Égypte des pharaons dès le IIIe millénaire av. J.-C., bien avant l'âge d'or phénicien. C'est l'une des plus anciennes villes du monde habitées sans interruption.",
    },
    {
      id: 'carthage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Carthage prend le relais',
      body:
        "Alors que les cités de Phénicie tombent sous la domination d'empires étrangers, Carthage, leur ancienne colonie, devient la grande puissance phénicienne de Méditerranée occidentale, jusqu'à sa destruction par Rome en 146 av. J.-C.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'À quel pays actuel correspond à peu près la Phénicie ?', options: ['Le Liban', "L'Égypte", 'La Grèce', "L'Italie"], answer: 0 },
    { id: 'villes', type: 'mcq', prompt: 'Laquelle de ces villes est une cité phénicienne ?', options: ['Tyr', 'Athènes', 'Babylone', 'Memphis'], answer: 0 },
    { id: 'unifie', type: 'tf', prompt: 'La Phénicie est un royaume unifié dirigé par un seul roi.', answer: false, explanation: "C'est un ensemble de cités-États indépendantes, chacune avec son roi." },
    { id: 'activite', type: 'mcq', prompt: 'Quelle est la principale activité des Phéniciens ?', options: ['Le commerce maritime', "L'élevage de chevaux", 'La conquête de grands territoires', "L'agriculture de céréales"], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Combien de lettres compte l’alphabet phénicien ?', options: ['22', '26', '5', 'Plus de 600'], answer: 0 },
    { id: 'voyelles', type: 'mcq', prompt: 'Que les Grecs ajoutent-ils à l’alphabet phénicien ?', options: ['Les voyelles', 'Les chiffres', 'Les hiéroglyphes', 'La ponctuation'], answer: 0 },
    { id: 'murex', type: 'mcq', prompt: 'De quel animal les Phéniciens tirent-ils la teinture pourpre ?', options: ['Un coquillage, le murex', 'Un insecte, la cochenille', 'Une pieuvre', 'Un poisson, le thon'], answer: 0 },
    { id: 'pourpre-rois', type: 'tf', prompt: 'Très coûteuse, la pourpre devient une couleur réservée aux puissants, comme les rois et les empereurs romains.', answer: true },
    { id: 'cedre', type: 'mcq', prompt: 'Quel bois précieux les Phéniciens exportent-ils ?', options: ['Le cèdre', "L'ébène", "L'acajou", 'Le bambou'], answer: 0 },
    { id: 'bible', type: 'mcq', prompt: 'Quelle cité phénicienne a donné son nom au mot grec biblion, « livre » ?', options: ['Byblos', 'Sidon', 'Tyr', 'Carthage'], answer: 0 },
    { id: 'carthage', type: 'mcq', prompt: 'Quelle cité fonde Carthage vers 814 av. J.-C. selon la tradition ?', options: ['Tyr', 'Rome', 'Athènes', 'Alexandrie'], answer: 0 },
    { id: 'gadir', type: 'mcq', prompt: 'Quelle ville d’Espagne actuelle était le comptoir phénicien de Gadir ?', options: ['Cadix', 'Madrid', 'Barcelone', 'Tolède'], answer: 0 },
    { id: 'melqart', type: 'mcq', prompt: 'Quel dieu protège la cité de Tyr ?', options: ['Melqart', 'Osiris', 'Mars', 'Mardouk'], answer: 0 },
    { id: 'hiram', type: 'mcq', prompt: 'Selon la Bible, à quel roi Hiram de Tyr fournit-il du cèdre pour bâtir le Temple de Jérusalem ?', options: ['Salomon', 'Nabuchodonosor', 'Ramsès II', 'Cyrus'], answer: 0 },
    { id: 'tyr', type: 'mcq', prompt: 'Qui s’empare de Tyr en 332 av. J.-C. après un long siège ?', options: ['Alexandre le Grand', 'Jules César', 'Hannibal', 'Darius Ier'], answer: 0 },
    { id: 'digue', type: 'tf', prompt: 'Pour atteindre Tyr, bâtie sur une île, Alexandre fait construire une digue.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Fondation de Carthage', 'Domination perse sur les cités phéniciennes', 'Prise de Tyr par Alexandre', 'Intégration à la province romaine de Syrie'] },
    { id: 'herodote', type: 'tf', prompt: 'Il est prouvé avec certitude que les Phéniciens ont fait le tour de l’Afrique.', answer: false, explanation: "Ce voyage est raconté par Hérodote, mais il reste discuté par les historiens." },
  ],

  recap: [
    '≈ 1200 av. J.-C. : essor des cités de Byblos, Sidon et Tyr',
    'Marchands et marins : cèdre, pourpre, comptoirs jusqu’à Cadix',
    "L'alphabet de 22 lettres, ancêtre du nôtre",
    '332 av. J.-C. : Alexandre prend Tyr ; 64 av. J.-C. : Rome',
  ],
}
