/** Chapitre rédigé : Chine des Ming et des Qing (1368 – 1789). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'hongwu',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: "D'un paysan à l'empereur",
      body:
        "Zhu Yuanzhang, fils de paysans pauvres, a été moine bouddhiste puis chef rebelle. Il chasse les Mongols qui dominaient la Chine et fonde en 1368 la dynastie Ming (« lumineuse »). Devenu l'empereur Hongwu, il installe sa capitale à Nankin et gouverne d'une main de fer.",
      highlight: { value: '1368', label: 'fondation de la dynastie Ming' },
    },
    {
      id: 'cite-interdite',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Pékin et la Cité interdite',
      body:
        "L'empereur Yongle transfère la capitale à Pékin, plus proche de la frontière mongole. Il y fait construire la Cité interdite, achevée en 1420 : un immense palais où vit l'empereur, le « Fils du Ciel », et où personne n'entre sans autorisation.",
    },
    {
      id: 'zheng-he',
      tier: 1,
      type: 'person',
      nom: 'Zheng He',
      role: 'Amiral et eunuque de la cour',
      dates: 'vers 1371 – 1433',
      description: "Entre 1405 et 1433, il commande sept grandes expéditions maritimes, avec des dizaines, parfois plus de deux cents navires selon les sources, jusqu'en Inde, en Arabie et en Afrique de l'Est. Après sa mort, la cour arrête ces voyages coûteux.",
    },
    {
      id: 'muraille',
      tier: 1,
      type: 'text',
      kicker: 'Territoire',
      title: 'La Grande Muraille des Ming',
      body:
        "Pour se protéger des Mongols, les Ming reconstruisent la Grande Muraille en briques et en pierre, avec des tours de guet. La plupart des tronçons que les touristes visitent aujourd'hui datent de cette époque, surtout du XVIe siècle.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Des Ming aux Qing',
      years: [1530, 1783],
      caption: "Comparez : sous les Qing, l'empire double presque de surface avec la Mongolie, le Tibet et le Xinjiang.",
    },
    {
      id: 'qing',
      tier: 1,
      type: 'dates',
      kicker: 'Crise',
      title: 'Des Ming aux Qing',
      items: [
        { year: 1616, label: 'Nurhaci unifie les Mandchous au nord-est' },
        { year: 1644, label: 'Des rebelles prennent Pékin ; le dernier empereur Ming se pend' },
        { year: 1644, label: 'Les Mandchous entrent dans Pékin : début des Qing' },
        { year: 1683, label: 'Conquête de Taïwan, dernier refuge des fidèles Ming' },
      ],
    },
    {
      id: 'natte',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des Mandchous sur le trône',
      body:
        "Les Qing sont des Mandchous, un peuple venu du nord-est. Ils gardent les rites, les lois et les examens chinois pour recruter les fonctionnaires lettrés, les mandarins. Mais ils imposent à tous les hommes la coiffure mandchoue : le devant du crâne rasé et une longue natte.",
    },
    {
      id: 'kangxi',
      tier: 1,
      type: 'person',
      nom: 'Kangxi',
      role: 'Empereur Qing',
      dates: 'règne 1661 – 1722',
      description: "Monté sur le trône enfant, il règne 61 ans, l'un des plus longs règnes de l'histoire chinoise. Il écrase une grande révolte dans le Sud, signe avec la Russie le traité de Nertchinsk (1689) et s'intéresse aux sciences enseignées par les jésuites.",
    },
    {
      id: 'population',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Apogée',
      value: '≈ 300 millions',
      label: "d'habitants vers 1790 (estimation)",
      caption: "La population a environ doublé au cours du XVIIIe siècle grâce à la paix et à des plantes venues d'Amérique, comme le maïs et la patate douce. La Chine est alors le pays le plus peuplé du monde.",
    },

    // ── Niveau 2 ──
    {
      id: 'porcelaine',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: "Porcelaine, soie et thé contre l'argent",
      body:
        "Les fours de Jingdezhen produisent la célèbre porcelaine « bleu et blanc ». Européens et Japonais achètent porcelaine, soie et, plus tard, thé, et paient en argent, souvent extrait des mines d'Amérique et transporté via Manille. À partir de 1757, les Européens ne peuvent commercer qu'à Canton.",
    },
    {
      id: 'ricci',
      tier: 2,
      type: 'person',
      nom: 'Matteo Ricci',
      role: 'Missionnaire jésuite italien',
      dates: '1552 – 1610',
      description: "Arrivé en Chine en 1582, il apprend le chinois, s'habille en lettré et est admis à Pékin en 1601. Il traduit en chinois la géométrie d'Euclide et dessine une carte du monde pour les Chinois.",
    },
    {
      id: 'qianlong',
      tier: 2,
      type: 'person',
      nom: 'Qianlong',
      role: 'Empereur Qing',
      dates: 'règne 1735 – 1796',
      description: "Petit-fils de Kangxi, il porte l'empire à sa plus grande taille en écrasant les Dzoungars, un peuple mongol, et en annexant le Xinjiang (1759). Grand collectionneur, il fait copier des milliers de livres dans une immense bibliothèque, mais en fait aussi censurer beaucoup.",
    },
    {
      id: 'romans',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'Les grands romans classiques',
      body:
        "Les Ming voient naître des romans célèbres, comme La Pérégrination vers l'Ouest, où le Roi des singes accompagne un moine vers l'Inde, ou Au bord de l'eau. Au XVIIIe siècle, Le Rêve dans le pavillon rouge raconte le déclin d'une grande famille.",
    },
    {
      id: 'macartney',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: "L'empire qui se croit au centre du monde",
      body:
        "La Chine se voit comme l'« Empire du Milieu » : les pays voisins comme la Corée lui envoient un tribut. En 1793, l'ambassadeur anglais Macartney demande d'ouvrir le commerce ; Qianlong répond que la Chine n'a besoin de rien. Au XIXe siècle, les Européens imposeront l'ouverture par la force.",
    },
  ],

  quiz: [
    { id: 'fondation', type: 'mcq', prompt: 'En quelle année la dynastie Ming est-elle fondée ?', options: ['1368', '1644', '1420', '1271'], answer: 0 },
    { id: 'chasses', type: 'mcq', prompt: 'Quel peuple les Ming chassent-ils du pouvoir en Chine ?', options: ['Les Mongols', 'Les Mandchous', 'Les Japonais', 'Les Coréens'], answer: 0 },
    { id: 'hongwu', type: 'tf', prompt: 'Le fondateur de la dynastie Ming est né dans une famille de paysans pauvres.', answer: true },
    { id: 'cite', type: 'mcq', prompt: 'Dans quelle ville se trouve la Cité interdite ?', options: ['Pékin', 'Nankin', 'Canton', "Xi'an"], answer: 0 },
    { id: 'yongle', type: 'mcq', prompt: 'Quel empereur fait construire la Cité interdite ?', options: ['Yongle', 'Kangxi', 'Qianlong', 'Hongwu'], answer: 0 },
    { id: 'zheng-he', type: 'mcq', prompt: "Quel amiral mène de grandes expéditions jusqu'en Afrique de l'Est ?", options: ['Zheng He', 'Marco Polo', 'Vasco de Gama', 'Matteo Ricci'], answer: 0 },
    { id: 'muraille', type: 'tf', prompt: "La plupart des tronçons de la Grande Muraille visités aujourd'hui ont été construits sous les Ming.", answer: true },
    { id: 'qing', type: 'mcq', prompt: 'Quel peuple fonde la dynastie Qing ?', options: ['Les Mandchous', 'Les Mongols', 'Les Tibétains', 'Les Ouïghours'], answer: 0 },
    { id: 'chute-ming', type: 'mcq', prompt: 'En quelle année Pékin tombe-t-elle, mettant fin au pouvoir des Ming ?', options: ['1644', '1368', '1689', '1793'], answer: 0 },
    { id: 'natte', type: 'mcq', prompt: 'Quelle coiffure les Qing imposent-ils aux hommes ?', options: ['Le crâne rasé à l’avant et une natte', 'Un chignon', 'Les cheveux courts', 'La tête entièrement rasée'], answer: 0 },
    { id: 'mandarins', type: 'mcq', prompt: 'Comment sont recrutés les mandarins, fonctionnaires de l’empire ?', options: ['Par des examens', 'Par tirage au sort', 'Par élection', 'Uniquement par naissance'], answer: 0 },
    { id: 'kangxi', type: 'mcq', prompt: 'Combien d’années environ dure le règne de Kangxi ?', options: ['61 ans', '20 ans', '35 ans', '100 ans'], answer: 0 },
    { id: 'nertchinsk', type: 'mcq', prompt: 'Avec quel pays la Chine signe-t-elle le traité de Nertchinsk en 1689 ?', options: ['La Russie', 'Le Japon', "L'Angleterre", 'Le Portugal'], answer: 0 },
    { id: 'ricci', type: 'mcq', prompt: 'Quel jésuite italien est admis à Pékin en 1601 ?', options: ['Matteo Ricci', 'François Xavier', 'Marco Polo', 'Ignace de Loyola'], answer: 0 },
    { id: 'porcelaine', type: 'mcq', prompt: 'Avec quel métal les Européens paient-ils surtout les produits chinois ?', options: ["L'argent", 'Le fer', 'Le cuivre', "L'étain"], answer: 0 },
    { id: 'canton', type: 'tf', prompt: 'À partir de 1757, les Européens peuvent commercer dans tous les ports chinois.', answer: false, explanation: 'Le commerce avec les Européens est limité au seul port de Canton.' },
    { id: 'roi-singes', type: 'mcq', prompt: 'Dans quel roman apparaît le Roi des singes ?', options: ["La Pérégrination vers l'Ouest", "Au bord de l'eau", 'Le Rêve dans le pavillon rouge', 'Le Livre des rois'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de la dynastie Ming', 'Achèvement de la Cité interdite', 'Les Mandchous entrent dans Pékin', 'Traité de Nertchinsk avec la Russie'] },
  ],

  recap: [
    '1368 : Zhu Yuanzhang chasse les Mongols et fonde les Ming',
    'Cité interdite, Grande Muraille et voyages de Zheng He',
    '1644 : les Mandchous fondent la dynastie Qing',
    'Kangxi et Qianlong : un empire immense et très peuplé',
  ],
}
