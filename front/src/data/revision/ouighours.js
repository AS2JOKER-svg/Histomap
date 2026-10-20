/** Chapitre rédigé : Khaganat ouïghour (744 – 840). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les successeurs des Turcs',
      body:
        "En 744, les Ouïghours, un peuple turc de Mongolie, s'allient à d'autres tribus et renversent les Göktürks. Leur chef, Kutlug Bilge Köl, prend le titre de khagan. Ils dominent les steppes pendant près d'un siècle.",
      highlight: { value: '744', label: 'fondation du khaganat ouïghour' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire ouïghour',
      years: [800],
      caption: 'Vers 800, les Ouïghours contrôlent la Mongolie et une partie des routes de la soie.',
    },
    {
      id: 'tang',
      tier: 1,
      type: 'war',
      nom: 'Intervention ouïghoure contre les rebelles d’An Lushan',
      annee: 757,
      adversaires: ['Rebelles d’An Lushan'],
      allies: ['Ouïghours', 'Dynastie Tang'],
      vainqueur: 'Tang et Ouïghours',
      consequences:
        "Les cavaliers ouïghours aident la dynastie Tang à reprendre ses capitales, Chang'an et Luoyang. En échange, ils obtiennent de la Chine d'énormes quantités de soie.",
    },
    {
      id: 'chevaux',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Des chevaux contre de la soie',
      body:
        "Chaque année, les Ouïghours vendent des milliers de chevaux à la Chine, à un prix très élevé, payé en pièces de soie. Ils revendent cette soie vers l'ouest grâce aux marchands sogdiens.",
    },
    {
      id: 'manicheisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Une religion venue de Perse',
      body:
        "En 763, le khagan Bögü adopte le manichéisme, une religion fondée en Perse par Mani, qui voit le monde comme un combat entre la Lumière et les Ténèbres. Il en fait la religion de l'État : c'est le seul cas connu dans l'histoire.",
    },
    {
      id: 'bogu',
      tier: 1,
      type: 'person',
      nom: 'Bögü',
      role: 'Khagan des Ouïghours',
      dates: 'règne 759 – 779',
      description:
        "Il aide les Tang à reprendre Luoyang en 762, puis laisse ses troupes piller la ville. Il ramène en Mongolie des prêtres manichéens. Son ministre Tun Baga Tarkhan, opposé à une invasion de la Chine, le fait tuer en 779.",
    },
    {
      id: 'ville',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une capitale dans la steppe',
      body:
        "Les Ouïghours bâtissent une vraie ville fortifiée, Ordu-Baliq, sur la rivière Orkhon, avec palais, temples et entrepôts. Un voyageur arabe raconte qu'elle a douze portes de fer et qu'elle est entourée de champs cultivés.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Un siècle d’empire',
      items: [
        { year: 744, label: 'Fondation du khaganat' },
        { year: 757, label: 'Aide aux Tang contre les rebelles' },
        { year: 763, label: 'Adoption du manichéisme' },
        { year: 795, label: 'Nouvelle dynastie Ädiz' },
        { year: 840, label: 'Les Kirghiz détruisent Ordu-Baliq' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'L’exil vers les oasis',
      body:
        "Affaibli par les querelles, une épidémie et des hivers terribles, le khaganat est attaqué en 840 par les Kirghiz, qui détruisent Ordu-Baliq. Les Ouïghours quittent la Mongolie et fondent de nouveaux royaumes dans les oasis du Gansu et du bassin du Tarim.",
    },

    // ── Niveau 2 ──
    {
      id: 'princesses',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des princesses chinoises',
      body:
        "Pour sceller l'alliance, les empereurs Tang donnent leurs filles en mariage aux khagans : la princesse Ningguo en 758, la princesse Taihe en 821. Capturée par les Kirghiz en 840, Taihe est ensuite ramenée en Chine.",
    },
    {
      id: 'alphabet',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un alphabet voyageur',
      body:
        "Les Ouïghours adoptent un alphabet tiré de celui des marchands sogdiens. Au XIIIe siècle, les Mongols le reprennent pour écrire leur langue : l'écriture mongole traditionnelle en descend encore.",
    },
    {
      id: 'inscription',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Une stèle en trois langues',
      body:
        "À Karabalgasun, l'ancienne Ordu-Baliq, une stèle célèbre les khagans et leur conversion au manichéisme en trois langues : vieux turc, sogdien et chinois.",
    },
    {
      id: 'kirghiz',
      tier: 2,
      type: 'war',
      nom: 'Destruction du khaganat ouïghour',
      annee: 840,
      adversaires: ['Kirghiz du Ienisseï'],
      allies: ['Ouïghours'],
      vainqueur: 'Kirghiz',
      consequences: "Ordu-Baliq est détruite et le khagan tué. Les Ouïghours se dispersent vers le sud et l'ouest.",
    },
    {
      id: 'aujourdhui',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Ouïghours d’aujourd’hui',
      body:
        "Le peuple ouïghour actuel, qui vit surtout au Xinjiang, dans l'ouest de la Chine, se rattache à ces Ouïghours partis de Mongolie au IXe siècle. Ils sont aujourd'hui en grande majorité musulmans.",
    },
  ],

  quiz: [
    { id: 'avant', type: 'mcq', prompt: 'Quel empire les Ouïghours renversent-ils en 744 ?', options: ['L’empire des Göktürks', 'L’empire mongol', 'L’Empire perse', 'L’Empire byzantin'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve le cœur du khaganat ouïghour ?', options: ['La Mongolie', 'Le Japon', 'L’Iran', 'La Russie d’Europe'], answer: 0 },
    { id: 'tang', type: 'mcq', prompt: 'Quelle dynastie chinoise les Ouïghours aident-ils contre la révolte d’An Lushan ?', options: ['Les Tang', 'Les Song', 'Les Han', 'Les Ming'], answer: 0 },
    { id: 'echange', type: 'mcq', prompt: 'Qu’échangent les Ouïghours contre la soie chinoise ?', options: ['Des chevaux', 'Du thé', 'De la porcelaine', 'Des épices'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion devient religion d’État en 763 ?', options: ['Le manichéisme', 'Le bouddhisme', 'L’islam', 'Le judaïsme'], answer: 0 },
    { id: 'mani', type: 'mcq', prompt: 'Où le manichéisme est-il né ?', options: ['En Perse', 'En Inde', 'En Chine', 'En Grèce'], answer: 0 },
    { id: 'unique', type: 'tf', prompt: 'Le khaganat ouïghour est le seul État connu à avoir fait du manichéisme sa religion officielle.', answer: true },
    { id: 'bogu', type: 'mcq', prompt: 'Quel khagan adopte le manichéisme ?', options: ['Bögü', 'Bumin', 'Attila', 'Kubilai'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Comment s’appelle la capitale des Ouïghours ?', options: ['Ordu-Baliq', 'Karakorum', 'Samarcande', 'Itil'], answer: 0 },
    { id: 'portes', type: 'mcq', prompt: 'Selon un voyageur arabe, combien de portes de fer compte Ordu-Baliq ?', options: ['12', '2', '100', '1'], answer: 0 },
    { id: 'kirghiz', type: 'mcq', prompt: 'Quel peuple détruit le khaganat ouïghour en 840 ?', options: ['Les Kirghiz', 'Les Chinois', 'Les Arabes', 'Les Tibétains'], answer: 0 },
    { id: 'exil', type: 'mcq', prompt: 'Où les Ouïghours se réfugient-ils après 840 ?', options: ['Dans les oasis du Gansu et du Tarim', 'En Europe', 'En Inde', 'Au Japon'], answer: 0 },
    { id: 'alphabet', type: 'mcq', prompt: 'Quel peuple reprend l’alphabet ouïghour au XIIIe siècle ?', options: ['Les Mongols', 'Les Arabes', 'Les Grecs', 'Les Coréens'], answer: 0 },
    { id: 'princesse', type: 'tf', prompt: 'Des princesses chinoises épousent des khagans ouïghours.', answer: true, explanation: 'Ningguo en 758 et Taihe en 821, par exemple.' },
    { id: 'xinjiang', type: 'mcq', prompt: 'Où vivent surtout les Ouïghours aujourd’hui ?', options: ['Au Xinjiang, en Chine', 'En Mongolie', 'En Turquie', 'En Sibérie'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation du khaganat', 'Aide aux Tang contre An Lushan', 'Adoption du manichéisme', 'Destruction par les Kirghiz'] },
  ],

  recap: [
    '744 : les Ouïghours remplacent les Göktürks en Mongolie',
    'Alliés indispensables des Tang : chevaux contre soie',
    '763 : le manichéisme, religion d’État (cas unique)',
    '840 : les Kirghiz détruisent Ordu-Baliq ; exil vers les oasis',
  ],
}
