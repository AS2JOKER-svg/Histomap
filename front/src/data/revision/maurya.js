/** Chapitre rédigé : Empire maurya (≈ 322 – 185 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Chandragupta unifie le nord de l’Inde',
      body:
        "Peu après le passage d'Alexandre le Grand dans le nord-ouest de l'Inde, un jeune chef, Chandragupta Maurya, renverse la dynastie Nanda qui régnait sur le Magadha, dans la vallée du Gange. Vers 322 av. J.-C., il fonde le premier grand empire de l'Inde.",
      highlight: { value: '≈ 322 av. J.-C.', label: 'fondation par Chandragupta Maurya' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le premier empire indien',
      years: [-300, -200],
      caption: "À son apogée, l'empire couvre presque tout le sous-continent indien, de l'Afghanistan actuel jusqu'au sud du plateau du Deccan. Seule la pointe sud lui échappe.",
    },
    {
      id: 'elephants',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Expansion',
      value: '500',
      label: 'éléphants de guerre offerts à Séleucos',
      caption: "Vers 303 av. J.-C., Chandragupta affronte Séleucos, héritier d'Alexandre. Par la paix, Séleucos lui cède des territoires à l'ouest de l'Indus et reçoit 500 éléphants.",
    },
    {
      id: 'pataliputra',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Pataliputra, la capitale',
      body:
        "La capitale, Pataliputra (l'actuelle Patna), au bord du Gange, est l'une des plus grandes villes du monde. L'ambassadeur grec Mégasthène y vit plusieurs années et décrit ses immenses remparts de bois et son administration très organisée.",
    },
    {
      id: 'ashoka',
      tier: 1,
      type: 'person',
      nom: 'Ashoka',
      role: 'Empereur maurya, petit-fils de Chandragupta',
      dates: 'règne vers 268 – 232 av. J.-C.',
      description: "D'abord conquérant, il est bouleversé par les massacres de la guerre du Kalinga. Il se tourne vers le bouddhisme et veut désormais gouverner selon le dharma : la morale, la non-violence et le respect de toutes les religions.",
    },
    {
      id: 'kalinga',
      tier: 1,
      type: 'war',
      nom: 'Guerre du Kalinga',
      annee: -261,
      adversaires: ['Royaume du Kalinga (côte est de l’Inde)'],
      allies: ['Armée d’Ashoka'],
      vainqueur: 'Empire maurya',
      consequences: "Selon les propres inscriptions d'Ashoka, 100 000 personnes sont tuées et 150 000 déportées. Pris de remords, l'empereur renonce aux conquêtes.",
    },
    {
      id: 'edits',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: "Les édits d'Ashoka",
      body:
        "Ashoka fait graver ses messages sur des rochers et des piliers de pierre dans tout l'empire. Il y demande d'être bon envers les parents, les esclaves et les animaux, et de respecter toutes les religions. Ce sont parmi les plus anciens textes déchiffrés de l'Inde.",
    },
    {
      id: 'bouddhisme',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Le bouddhisme se diffuse',
      body:
        "Ashoka envoie des messagers prêcher le dharma, jusque chez les rois grecs. Selon la tradition, son fils Mahinda convertit l'île de Sri Lanka au bouddhisme. Grâce à lui, cette religion née en Inde commence à se répandre dans toute l'Asie.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: "Un empire qui se défait vite",
      body:
        "Après la mort d'Ashoka, l'empire se divise et s'affaiblit. Vers 185 av. J.-C., le dernier empereur, Brihadratha, est assassiné par son propre général, Pushyamitra, qui fonde la dynastie Shunga.",
      highlight: { value: '≈ 185 av. J.-C.', label: 'fin de la dynastie maurya' },
    },

    // ── Niveau 2 ──
    {
      id: 'chanakya',
      tier: 2,
      type: 'person',
      nom: 'Chanakya (Kautilya)',
      role: 'Conseiller de Chandragupta',
      dates: 'IVe siècle av. J.-C.',
      description: "Selon la tradition, ce brahmane aide Chandragupta à prendre le pouvoir. On lui attribue l'Arthashastra, un traité sur l'art de gouverner : impôts, armée, espionnage. Le texte a sans doute été complété plus tard.",
    },
    {
      id: 'dynastie',
      tier: 2,
      type: 'dates',
      kicker: 'Durée',
      title: 'Trois grands empereurs',
      items: [
        { year: -322, label: 'Vers 322 av. J.-C. : Chandragupta fonde l’empire' },
        { year: -297, label: 'Vers 297 av. J.-C. : règne de son fils Bindusara' },
        { year: -268, label: 'Vers 268 av. J.-C. : début du règne d’Ashoka' },
        { year: -232, label: 'Vers 232 av. J.-C. : mort d’Ashoka' },
      ],
    },
    {
      id: 'chandragupta-fin',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Un empereur devenu moine',
      body:
        "Selon la tradition jaïne, Chandragupta abdique à la fin de sa vie, devient moine jaïn et part vivre dans le sud de l'Inde, à Shravanabelagola, où il se laisse mourir de faim.",
    },
    {
      id: 'brahmi',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Une écriture redécouverte',
      body:
        "La plupart des édits sont écrits en écriture brahmi ; près de l'Afghanistan, certains sont même en grec et en araméen. Oubliée pendant des siècles, la brahmi est déchiffrée en 1837 par le Britannique James Prinsep.",
    },
    {
      id: 'lions',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les lions de Sarnath',
      body:
        "Le chapiteau d'un pilier d'Ashoka à Sarnath montre quatre lions dos à dos au-dessus d'une roue. Depuis 1950, il est l'emblème officiel de l'Inde, et la roue d'Ashoka figure au centre du drapeau indien.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: "Qui fonde l'Empire maurya ?", options: ['Chandragupta Maurya', 'Ashoka', 'Bouddha', 'Alexandre le Grand'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: "Quelle est la capitale de l'Empire maurya ?", options: ['Pataliputra', 'Delhi', 'Bénarès', 'Babylone'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Au bord de quel fleuve se trouve Pataliputra ?', options: ['Le Gange', "L'Indus", 'Le Mékong', 'Le Tigre'], answer: 0 },
    { id: 'nanda', type: 'mcq', prompt: 'Quelle dynastie Chandragupta renverse-t-il ?', options: ['Les Nanda', 'Les Shunga', 'Les Gupta', 'Les Moghols'], answer: 0 },
    { id: 'seleucos', type: 'mcq', prompt: 'Que reçoit Séleucos en échange de territoires cédés à Chandragupta ?', options: ['500 éléphants', '500 navires', '500 kg d’or', '500 chevaux'], answer: 0 },
    { id: 'megasthene', type: 'mcq', prompt: 'Qui est Mégasthène ?', options: ['Un ambassadeur grec à Pataliputra', 'Le fils d’Ashoka', 'Un général maurya', 'Un moine bouddhiste'], answer: 0 },
    { id: 'premier', type: 'tf', prompt: "L'Empire maurya est le premier grand empire unifiant la majeure partie de l'Inde.", answer: true },
    { id: 'kalinga', type: 'mcq', prompt: 'Quelle guerre pousse Ashoka à renoncer aux conquêtes ?', options: ['La guerre du Kalinga', 'La guerre contre Séleucos', 'La guerre contre les Nanda', 'La guerre de Troie'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Vers quelle religion Ashoka se tourne-t-il ?', options: ['Le bouddhisme', "L'islam", 'Le christianisme', 'Le zoroastrisme'], answer: 0 },
    { id: 'tolerance', type: 'tf', prompt: 'Ashoka persécute les religions autres que le bouddhisme.', answer: false, explanation: 'Dans ses édits, il demande au contraire de respecter toutes les religions.' },
    { id: 'edits', type: 'mcq', prompt: "Où Ashoka fait-il graver ses édits ?", options: ['Sur des rochers et des piliers', 'Sur des tablettes d’argile', 'Sur des rouleaux de soie', 'Sur des feuilles de palmier'], answer: 0 },
    { id: 'dharma', type: 'mcq', prompt: 'Comment s’appelle la loi morale qu’Ashoka veut faire respecter ?', options: ['Le dharma', 'Le karma', 'Le nirvana', 'Le yoga'], answer: 0 },
    { id: 'sri-lanka', type: 'mcq', prompt: 'Selon la tradition, quelle île Mahinda, fils d’Ashoka, convertit-il au bouddhisme ?', options: ['Sri Lanka', 'Java', 'Madagascar', 'Chypre'], answer: 0 },
    { id: 'arthashastra', type: 'mcq', prompt: "À qui attribue-t-on l'Arthashastra, traité sur l'art de gouverner ?", options: ['Chanakya (Kautilya)', 'Ashoka', 'Mégasthène', 'Bindusara'], answer: 0 },
    { id: 'jain', type: 'tf', prompt: 'Selon la tradition jaïne, Chandragupta finit sa vie comme moine.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Chandragupta fonde l’empire', 'Paix avec Séleucos', 'Guerre du Kalinga', 'Assassinat du dernier empereur maurya'] },
    { id: 'embleme', type: 'mcq', prompt: "Quel élément d'un pilier d'Ashoka est devenu l'emblème de l'Inde ?", options: ['Les lions de Sarnath', 'Le taureau de Rampurva', 'Le lotus de Sanchi', 'La roue de Konarak'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Quelle dynastie remplace les Maurya vers 185 av. J.-C. ?', options: ['Les Shunga', 'Les Nanda', 'Les Moghols', 'Les Séleucides'], answer: 0 },
  ],

  recap: [
    'Vers 322 av. J.-C. : Chandragupta fonde le premier grand empire de l’Inde',
    'Capitale Pataliputra, sur le Gange ; un État très organisé',
    'Après le Kalinga (≈ 261 av. J.-C.), Ashoka gouverne selon le dharma',
    'Le bouddhisme se diffuse ; l’empire disparaît vers 185 av. J.-C.',
  ],
}
