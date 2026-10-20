/** Chapitre rédigé : Empire kouchan (vers 30 – 375). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'yuezhi',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des nomades venus de Chine',
      body:
        "Au IIe siècle av. J.-C., les Yuezhi, des nomades du nord-ouest de la Chine, sont chassés par les Xiongnu. Ils migrent vers l'ouest et s'installent en Bactriane. Vers 30, Kujula Kadphisès, chef de la tribu des Kouchans, unifie les Yuezhi et fonde un empire.",
      highlight: { value: '≈ 30', label: 'fondation de l’empire' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’Empire kouchan vers 100',
      years: [100],
      caption: 'De l’Asie centrale au nord de l’Inde, l’empire contrôle les grandes routes entre la Chine, l’Inde, la Perse et Rome.',
    },
    {
      id: 'kanishka',
      tier: 1,
      type: 'person',
      nom: 'Kanishka',
      role: 'Roi des rois kouchan',
      dates: 'règne vers 127 – 150',
      description:
        "Le plus puissant des rois kouchans règne de l'Asie centrale à la vallée du Gange. Selon la tradition, il réunit un grand concile bouddhiste et fait bâtir près de Peshawar un immense stupa.",
    },
    {
      id: 'carrefour',
      tier: 1,
      type: 'text',
      kicker: 'Commerce',
      title: 'Un carrefour de l’Asie',
      body:
        "Les Kouchans commercent avec Rome par les ports de l'Inde, avec la Chine par la route de la soie et avec la Perse. À Begram, en Afghanistan, un trésor réunit des verres romains, des ivoires indiens et des laques chinoises.",
    },
    {
      id: 'bouddha',
      tier: 1,
      type: 'text',
      kicker: 'Arts',
      title: 'Le visage du Bouddha',
      body:
        "Sous les Kouchans, les sculpteurs du Gandhara et de Mathura sont parmi les premiers à représenter le Bouddha sous forme humaine. Au Gandhara, il a un visage inspiré des statues grecques et un manteau aux plis drapés.",
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Des pièces d’or',
      body:
        "Les Kouchans frappent une abondante monnaie d'or, au poids des pièces romaines. On y voit des dieux grecs, iraniens et indiens, et même le Bouddha.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Trois siècles et demi d’empire',
      items: [
        { year: 30, label: 'Kujula Kadphisès unifie les Kouchans' },
        { year: 90, label: 'Défaite face au général chinois Ban Chao' },
        { year: 127, label: 'Avènement de Kanishka' },
        { year: 240, label: 'Les Sassanides prennent la Bactriane' },
        { year: 375, label: 'Fin de l’empire' },
      ],
    },
    {
      id: 'religions',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Tous les dieux à la fois',
      body:
        "Les Kouchans honorent des dieux iraniens, comme le Soleil, des dieux grecs, comme Héraclès, des dieux indiens, comme Shiva, et protègent le bouddhisme. Le bouddhisme se diffuse alors vers l'Asie centrale et la Chine.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le déclin',
      body:
        "Au IIIe siècle, les Perses sassanides conquièrent la Bactriane et y installent des princes vassaux. Les derniers rois kouchans ne gardent que des principautés dans le nord de l'Inde, qui disparaissent vers 375.",
    },

    // ── Niveau 2 ──
    {
      id: 'rabatak',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'L’inscription de Rabatak',
      body:
        "En 1993, on découvre en Afghanistan une inscription écrite en bactrien avec des lettres grecques. Elle donne la liste des rois kouchans et a permis de mieux comprendre leur histoire.",
    },
    {
      id: 'ban-chao',
      tier: 2,
      type: 'war',
      nom: 'Guerre kouchane contre Ban Chao',
      annee: 90,
      adversaires: ['Chine des Han (Ban Chao)'],
      allies: ['Empire kouchan'],
      vainqueur: 'Chine des Han',
      consequences: "Selon les annales chinoises, l'armée kouchane, affamée dans le bassin du Tarim, doit se retirer devant le général Ban Chao.",
    },
    {
      id: 'ashvaghosha',
      tier: 2,
      type: 'person',
      nom: 'Ashvaghosha',
      role: 'Poète bouddhiste',
      dates: 'Ier – IIe siècles',
      description: "Selon la tradition, ce poète vit à la cour de Kanishka. Il écrit en sanskrit une vie du Bouddha en vers, l'un des chefs-d'œuvre de la poésie indienne.",
    },
    {
      id: 'tenue',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Des rois en bottes',
      body:
        "Même sur les statues trouvées en Inde, les rois kouchans sont représentés en manteau de nomade, pantalons et lourdes bottes, souvenir de leurs origines dans les steppes.",
    },
    {
      id: 'chine',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le bouddhisme vers la Chine',
      body:
        "Des moines venus de l'empire kouchan sont parmi les premiers à traduire des textes bouddhistes en chinois, au IIe siècle. Le bouddhisme deviendra l'une des grandes religions de l'Asie de l'Est.",
    },
  ],

  quiz: [
    { id: 'origine', type: 'mcq', prompt: 'De quel peuple nomade les Kouchans font-ils partie ?', options: ['Les Yuezhi', 'Les Huns', 'Les Mongols', 'Les Scythes'], answer: 0 },
    { id: 'chasses', type: 'mcq', prompt: 'Par qui les Yuezhi sont-ils chassés de Chine ?', options: ['Les Xiongnu', 'Les Romains', 'Les Perses', 'Les Japonais'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’Empire kouchan vers 30 ?', options: ['Kujula Kadphisès', 'Kanishka', 'Ashoka', 'Gengis Khan'], answer: 0 },
    { id: 'kanishka', type: 'mcq', prompt: 'Quel est le plus puissant roi kouchan ?', options: ['Kanishka', 'Darius', 'Akbar', 'Tamerlan'], answer: 0 },
    { id: 'region', type: 'mcq', prompt: 'Où se trouve l’Empire kouchan ?', options: ['De l’Asie centrale au nord de l’Inde', 'En Europe de l’Ouest', 'En Afrique du Nord', 'En Amérique du Sud'], answer: 0 },
    { id: 'carrefour', type: 'tf', prompt: 'Les Kouchans commercent avec Rome, la Perse, l’Inde et la Chine.', answer: true },
    { id: 'begram', type: 'mcq', prompt: 'Que contient le trésor de Begram ?', options: ['Des verres romains et des ivoires indiens', 'Des pyramides miniatures', 'Des armes vikings', 'Des manuscrits mayas'], answer: 0 },
    { id: 'bouddha', type: 'mcq', prompt: 'Qui les sculpteurs du Gandhara représentent-ils sous forme humaine ?', options: ['Le Bouddha', 'Zeus', 'Confucius', 'Jésus'], answer: 0 },
    { id: 'grec', type: 'mcq', prompt: 'De quelles statues s’inspire le visage du Bouddha au Gandhara ?', options: ['Des statues grecques', 'Des statues égyptiennes', 'Des statues mayas', 'Des statues africaines'], answer: 0 },
    { id: 'or', type: 'mcq', prompt: 'En quel métal les Kouchans frappent-ils une abondante monnaie ?', options: ['L’or', 'Le plastique', 'Le fer', 'Le bois'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'Avec quelles lettres le bactrien est-il écrit ?', options: ['Des lettres grecques', 'Des hiéroglyphes', 'Des idéogrammes chinois', 'Des runes'], answer: 0 },
    { id: 'ban-chao', type: 'mcq', prompt: 'Quel général chinois repousse une armée kouchane en 90 ?', options: ['Ban Chao', 'Sun Tzu', 'Zheng He', 'Cao Cao'], answer: 0 },
    { id: 'sassanides', type: 'mcq', prompt: 'Qui conquiert la Bactriane au IIIe siècle ?', options: ['Les Sassanides', 'Les Romains', 'Les Arabes', 'Les Mongols'], answer: 0 },
    { id: 'chine', type: 'tf', prompt: 'Des moines venus de l’empire kouchan traduisent des textes bouddhistes en chinois.', answer: true },
    { id: 'rabatak', type: 'mcq', prompt: 'En quelle année a-t-on découvert l’inscription de Rabatak ?', options: ['1993', '1789', '1066', '1453'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Kujula Kadphisès unifie les Kouchans', 'Défaite face à Ban Chao', 'Avènement de Kanishka', 'Les Sassanides prennent la Bactriane'] },
  ],

  recap: [
    'Des nomades yuezhi chassés de Chine fondent l’empire vers 30',
    'Kanishka règne de l’Asie centrale au Gange et protège le bouddhisme',
    'Un carrefour entre Rome, la Perse, l’Inde et la Chine',
    'L’art du Gandhara donne au Bouddha un visage humain',
  ],
}
