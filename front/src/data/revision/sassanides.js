/** Chapitre rédigé : Empire sassanide (224 – 651). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'ardachir',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Ardachir, roi des rois',
      body:
        "En 224, Ardachir, roi de la Perside, dans le sud de l'Iran, bat et tue le dernier roi parthe. Il fonde la dynastie sassanide, qui gouvernera l'Iran pendant plus de quatre siècles : le dernier grand empire iranien avant l'islam.",
      highlight: { value: '≈ 430 ans', label: 'de dynastie sassanide' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Empire sassanide',
      years: [300, 500, 600],
      caption: 'De la Mésopotamie à l’Asie centrale, l’empire tient tête à Rome puis à Byzance.',
    },
    {
      id: 'valerien',
      tier: 1,
      type: 'war',
      nom: 'Bataille d’Édesse',
      annee: 260,
      adversaires: ['Empire romain (Valérien)'],
      allies: ['Empire sassanide (Shapur Ier)'],
      vainqueur: 'Empire sassanide',
      consequences:
        "Le roi Shapur Ier capture l'empereur romain Valérien, le seul empereur romain fait prisonnier par un ennemi étranger. Il fait graver la scène sur les rochers de Naqsh-e Rostam.",
    },
    {
      id: 'zoroastrisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le zoroastrisme, religion d’État',
      body:
        "Les Sassanides font du zoroastrisme, religion du dieu Ahura Mazda et du feu sacré, la religion officielle de l'empire. Des chrétiens, des juifs et des manichéens vivent aussi dans l'empire, parfois tolérés, parfois persécutés.",
    },
    {
      id: 'khosro',
      tier: 1,
      type: 'person',
      nom: 'Khosro Ier Anushirvan',
      role: 'Roi des rois',
      dates: 'règne 531 – 579',
      description:
        "Il réforme l'impôt et l'armée et fait de sa cour un grand centre de savoir, où il accueille des philosophes grecs, des médecins et des savants indiens. La tradition en fait le modèle du roi juste.",
    },
    {
      id: 'echecs',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les échecs arrivent d’Inde',
      body:
        "C'est à la cour des rois sassanides qu'arrive, depuis l'Inde, l'ancêtre du jeu d'échecs. Le mot « échec et mat » viendrait du persan « shah mat », « le roi est impuissant ».",
    },
    {
      id: 'byzance',
      tier: 1,
      type: 'war',
      nom: 'Guerre perso-byzantine de 602-628',
      annee: 602,
      adversaires: ['Empire byzantin (Héraclius)'],
      allies: ['Empire sassanide (Khosro II)'],
      vainqueur: 'Empire byzantin',
      consequences:
        "Les Perses conquièrent la Syrie, Jérusalem (614) et l'Égypte, puis sont battus par l'empereur Héraclius. Les deux empires sortent épuisés de cette guerre, quelques années avant les conquêtes arabes.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Quatre siècles d’empire',
      items: [
        { year: 224, label: 'Ardachir renverse les Parthes' },
        { year: 260, label: 'Capture de l’empereur Valérien' },
        { year: 531, label: 'Avènement de Khosro Ier' },
        { year: 614, label: 'Prise de Jérusalem' },
        { year: 636, label: 'Défaite d’al-Qadisiyya' },
        { year: 651, label: 'Mort du dernier roi' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La conquête arabe',
      body:
        "Venues d'Arabie, les armées du califat battent les Perses à al-Qadisiyya (636) et à Nahavand (642). Le dernier roi, Yazdegerd III, est tué en fuite en 651. L'Iran entre dans le monde musulman, mais sa langue et sa culture survivent.",
    },

    // ── Niveau 2 ──
    {
      id: 'mani',
      tier: 2,
      type: 'person',
      nom: 'Mani',
      role: 'Fondateur du manichéisme',
      dates: '216 – vers 276',
      description:
        "Né en Mésopotamie, il fonde une religion qui voit le monde comme un combat entre la Lumière et les Ténèbres. D'abord protégé par Shapur Ier, il meurt en prison sous Bahram Ier.",
    },
    {
      id: 'ctesiphon',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Architecture',
      value: '≈ 35 m',
      label: 'de haut pour la voûte du palais de Ctésiphon',
      caption: "La grande salle du palais des rois, le Taq Kasra, est couverte de l'une des plus grandes voûtes de brique jamais construites. Elle se dresse toujours au sud de Bagdad.",
    },
    {
      id: 'boran',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Boran, reine des reines',
      body:
        "En pleine crise, après la défaite face à Byzance, Boran, fille de Khosro II, gouverne l'empire en 629-630 et tente de faire la paix. Elle est l'une des deux seules femmes à avoir régné sur l'Empire sassanide.",
    },
    {
      id: 'talmud',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le Talmud de Babylone',
      body:
        "Dans les académies juives de Mésopotamie, sous les Sassanides, les rabbins rédigent le Talmud de Babylone, un immense recueil de lois et de commentaires qui reste un texte fondamental du judaïsme.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Mille et Une Nuits',
      body:
        "L'histoire de Shéhérazade, qui raconte un conte chaque nuit au roi Shahriar pour sauver sa vie, viendrait d'un recueil persan ancien, sans doute d'époque sassanide.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’Empire sassanide en 224 ?', options: ['Ardachir', 'Cyrus', 'Arsace', 'Khosro'], answer: 0 },
    { id: 'avant', type: 'mcq', prompt: 'Quelle dynastie les Sassanides renversent-ils ?', options: ['Les Parthes', 'Les Séleucides', 'Les Achéménides', 'Les Abbassides'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale des Sassanides ?', options: ['Ctésiphon', 'Rome', 'Bagdad', 'Persépolis'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion est officielle dans l’Empire sassanide ?', options: ['Le zoroastrisme', 'L’islam', 'Le christianisme', 'Le bouddhisme'], answer: 0 },
    { id: 'valerien', type: 'mcq', prompt: 'Quel empereur romain Shapur Ier capture-t-il en 260 ?', options: ['Valérien', 'Auguste', 'Constantin', 'Néron'], answer: 0 },
    { id: 'valerien-seul', type: 'tf', prompt: 'Valérien est le seul empereur romain capturé par un ennemi étranger.', answer: true },
    { id: 'khosro', type: 'mcq', prompt: 'Quel roi est considéré comme le modèle du roi juste ?', options: ['Khosro Ier', 'Yazdegerd III', 'Bahram Ier', 'Shapur II'], answer: 0 },
    { id: 'echecs', type: 'mcq', prompt: 'Quel jeu arrive d’Inde à la cour sassanide ?', options: ['Les échecs', 'Les dés', 'Le football', 'Le go'], answer: 0 },
    { id: 'shah-mat', type: 'mcq', prompt: 'De quelle expression persane viendrait « échec et mat » ?', options: ['Shah mat', 'Salam aleikoum', 'Inch’Allah', 'Bakchich'], answer: 0 },
    { id: 'mani', type: 'mcq', prompt: 'Quelle religion fonde le prophète Mani ?', options: ['Le manichéisme', 'Le zoroastrisme', 'Le bouddhisme', 'L’islam'], answer: 0 },
    { id: 'byzance', type: 'mcq', prompt: 'Quel empereur byzantin bat les Perses en 627 ?', options: ['Héraclius', 'Justinien', 'Constantin', 'Basile II'], answer: 0 },
    { id: 'jerusalem', type: 'tf', prompt: 'En 614, les Perses prennent Jérusalem.', answer: true },
    { id: 'qadisiyya', type: 'mcq', prompt: 'Qui bat les Sassanides à al-Qadisiyya en 636 ?', options: ['Les armées arabes', 'Les Romains', 'Les Mongols', 'Les Turcs'], answer: 0 },
    { id: 'dernier', type: 'mcq', prompt: 'Qui est le dernier roi sassanide ?', options: ['Yazdegerd III', 'Khosro II', 'Ardachir', 'Shapur Ier'], answer: 0 },
    { id: 'talmud', type: 'mcq', prompt: 'Quel grand texte juif est rédigé en Mésopotamie sous les Sassanides ?', options: ['Le Talmud de Babylone', 'La Torah', 'Les manuscrits de la mer Morte', 'Le Zohar'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Ardachir renverse les Parthes', 'Capture de Valérien', 'Règne de Khosro Ier', 'Conquête arabe'] },
  ],

  recap: [
    '224 : Ardachir fonde le dernier grand empire iranien avant l’islam',
    '260 : Shapur Ier capture l’empereur romain Valérien',
    'Zoroastrisme religion d’État ; Khosro Ier, roi réformateur et savant',
    'Épuisé par la guerre contre Byzance, l’empire tombe face aux Arabes (636-651)',
  ],
}
