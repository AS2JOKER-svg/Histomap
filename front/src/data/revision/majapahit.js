/** Chapitre rédigé : Empire de Majapahit (1293 – vers 1527). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une ruse contre les Mongols',
      body:
        "En 1293, une flotte mongole envoyée par Kubilai Khan débarque à Java. Le prince Raden Wijaya s'allie d'abord aux Mongols pour vaincre un roi rival, puis se retourne contre eux et les chasse. Il fonde Majapahit.",
      highlight: { value: '1293', label: 'fondation de Majapahit' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Majapahit, dans l’est de Java',
      years: [1300, 1400],
      caption: 'Le cœur de l’empire est l’est de Java ; son influence s’étend sur une grande partie de l’archipel.',
    },
    {
      id: 'gajahmada',
      tier: 1,
      type: 'person',
      nom: 'Gajah Mada',
      role: 'Premier ministre',
      dates: '? – 1364',
      description:
        "Selon la tradition, il jure de ne pas goûter au repos avant d'avoir unifié l'archipel. Il étend l'influence de Majapahit à de nombreuses îles. Il est aujourd'hui un héros national en Indonésie.",
    },
    {
      id: 'apogee',
      tier: 1,
      type: 'text',
      kicker: 'Apogée',
      title: 'Le règne de Hayam Wuruk',
      body:
        "Sous le roi Hayam Wuruk (1350-1389), Majapahit domine le commerce du riz et des épices. Un poème de 1365, le Nagarakertagama, énumère près d'une centaine de terres qui reconnaîtraient son autorité.",
    },
    {
      id: 'religions',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Shiva et Bouddha',
      body:
        "À la cour, l'hindouisme et le bouddhisme sont étroitement mêlés, souvent vus comme deux chemins vers la même vérité.",
    },
    {
      id: 'devise',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'L’unité dans la diversité',
      body:
        "Un poème de l'époque contient la formule « Bhinneka Tunggal Ika », « l'unité dans la diversité ». C'est aujourd'hui la devise de l'Indonésie, inscrite sur ses armoiries.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Majapahit en dates',
      items: [
        { year: 1293, label: 'Fondation' },
        { year: 1350, label: 'Hayam Wuruk roi' },
        { year: 1365, label: 'Le poème Nagarakertagama' },
        { year: 1404, label: 'Guerre de Paregreg' },
        { year: 1527, label: 'Fin de l’empire' },
      ],
    },
    {
      id: 'declin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le déclin',
      body:
        "Au XVe siècle, des guerres de succession affaiblissent l'empire, tandis que les ports musulmans de la côte, comme Malacca et Demak, deviennent plus puissants. Majapahit disparaît vers 1527.",
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Invasion mongole de Java',
      annee: 1293,
      adversaires: ['Empire mongol de Chine (Kubilai Khan)', 'Royaume de Kediri'],
      allies: ['Raden Wijaya'],
      vainqueur: 'Raden Wijaya',
      consequences:
        "Après avoir battu le roi de Kediri avec l'aide des Mongols, Raden Wijaya les oblige à rembarquer. L'expédition de Kubilai Khan est un échec.",
    },

    // ── Niveau 2 ──
    {
      id: 'cuivre',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Des pièces venues de Chine',
      body:
        "Majapahit utilise surtout des pièces de cuivre chinoises, importées en très grande quantité. On en retrouve encore beaucoup dans le sol de l'est de Java.",
    },
    {
      id: 'trowulan',
      tier: 2,
      type: 'text',
      kicker: 'Archéologie',
      title: 'Les fouilles de Trowulan',
      body:
        "Sur le site de l'ancienne capitale, les archéologues ont retrouvé des temples de brique, des bassins et des milliers d'objets en terre cuite : tuiles, lampes, jouets et tirelires en forme d'animaux.",
    },
    {
      id: 'bali',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Bali',
      body:
        "Selon la tradition, une partie de la noblesse et des prêtres de Majapahit se réfugie à Bali quand l'islam s'impose à Java. Bali reste aujourd'hui majoritairement hindoue.",
    },
    {
      id: 'paregreg',
      tier: 2,
      type: 'war',
      nom: 'Guerre de Paregreg',
      annee: 1404,
      adversaires: ['Prince Wirabhumi'],
      allies: ['Roi Wikramawardhana'],
      vainqueur: 'Wikramawardhana',
      consequences: "Cette guerre de succession divise et affaiblit Majapahit, au moment où les ports musulmans gagnent en puissance.",
    },
    {
      id: 'nom',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Un nom amer',
      body:
        "Le nom « Majapahit » viendrait d'un fruit amer, le maja, trouvé à l'endroit où la ville fut fondée.",
    },
  ],

  quiz: [
    { id: 'ile', type: 'mcq', prompt: 'Sur quelle île se trouve le cœur de Majapahit ?', options: ['Java', 'Sumatra', 'Bornéo', 'Sri Lanka'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvait Majapahit ?', options: ['L’Indonésie', 'Les Philippines', 'Le Japon', 'L’Inde'], answer: 0 },
    { id: 'mongols', type: 'mcq', prompt: 'Quels envahisseurs Raden Wijaya chasse-t-il de Java en 1293 ?', options: ['Les Mongols', 'Les Portugais', 'Les Hollandais', 'Les Khmers'], answer: 0 },
    { id: 'ruse', type: 'tf', prompt: 'Raden Wijaya s’allie d’abord aux Mongols avant de les chasser.', answer: true },
    { id: 'gajahmada', type: 'mcq', prompt: 'Quel Premier ministre étend l’influence de Majapahit sur l’archipel ?', options: ['Gajah Mada', 'Tun Perak', 'Hayam Wuruk', 'Parameswara'], answer: 0 },
    { id: 'hayam', type: 'mcq', prompt: 'Sous quel roi Majapahit est-il à son apogée ?', options: ['Hayam Wuruk', 'Raden Wijaya', 'Anawrahta', 'Naresuan'], answer: 0 },
    { id: 'poeme', type: 'mcq', prompt: 'Quel poème de 1365 décrit la cour de Majapahit ?', options: ['Le Nagarakertagama', 'Le Ramayana', 'Le Kojiki', 'Le Mahavamsa'], answer: 0 },
    { id: 'religions', type: 'mcq', prompt: 'Quelles religions sont pratiquées à la cour ?', options: ['L’hindouisme et le bouddhisme', 'L’islam et le christianisme', 'Le judaïsme et l’islam', 'Le confucianisme seul'], answer: 0 },
    { id: 'devise', type: 'mcq', prompt: 'Que signifie « Bhinneka Tunggal Ika », la devise de l’Indonésie ?', options: ['L’unité dans la diversité', 'Liberté, égalité, fraternité', 'Dieu est grand', 'La force et l’honneur'], answer: 0 },
    { id: 'epices', type: 'mcq', prompt: 'Quels produits font la richesse de Majapahit ?', options: ['Le riz et les épices', 'Le pétrole et le gaz', 'Le café et le cacao', 'Le thé et la soie'], answer: 0 },
    { id: 'monnaie', type: 'mcq', prompt: 'D’où viennent les pièces utilisées à Majapahit ?', options: ['De Chine', 'De Rome', 'D’Espagne', 'De Perse'], answer: 0 },
    { id: 'declin', type: 'mcq', prompt: 'Quels États gagnent en puissance pendant le déclin de Majapahit ?', options: ['Les sultanats musulmans des ports', 'Les royaumes chrétiens', 'Les cités grecques', 'Les empires africains'], answer: 0 },
    { id: 'paregreg', type: 'mcq', prompt: 'Qu’est-ce que la guerre de Paregreg ?', options: ['Une guerre de succession', 'Une invasion chinoise', 'Une révolte d’esclaves', 'Une guerre contre les Portugais'], answer: 0 },
    { id: 'bali', type: 'tf', prompt: 'Bali est aujourd’hui majoritairement hindoue.', answer: true },
    { id: 'fin', type: 'mcq', prompt: 'Vers quelle année Majapahit disparaît-il ?', options: ['Vers 1527', 'Vers 1293', 'Vers 1789', 'Vers 1945'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation', 'Hayam Wuruk roi', 'Le poème Nagarakertagama', 'Guerre de Paregreg'] },
  ],

  recap: [
    '1293 : Raden Wijaya chasse les Mongols et fonde Majapahit, à Java',
    'Gajah Mada et Hayam Wuruk étendent son influence sur l’archipel',
    'Hindouisme et bouddhisme mêlés ; la devise « l’unité dans la diversité »',
    'Guerres de succession et essor des sultanats : fin vers 1527',
  ],
}
