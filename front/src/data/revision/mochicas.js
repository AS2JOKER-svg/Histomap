/** Chapitre rédigé : Mochicas (vers 100 – 800). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'desert',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des oasis dans le désert',
      body:
        "Vers 100, sur la côte désertique du nord du Pérou, les Mochicas creusent des canaux qui amènent l'eau des rivières descendues des Andes. Les vallées deviennent des oasis où poussent maïs, haricots et coton.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La côte mochica',
      years: [200, 600],
      caption: 'Les Mochicas occupent une série de vallées entre l’océan Pacifique et les Andes.',
    },
    {
      id: 'huacas',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Des pyramides de terre',
      body:
        "Les Mochicas bâtissent d'immenses pyramides de briques crues, comme les Huacas du Soleil et de la Lune. Les murs de la Huaca de la Lune ont gardé des peintures aux couleurs vives.",
      highlight: { value: 'des dizaines de millions', label: 'de briques crues pour la Huaca du Soleil' },
    },
    {
      id: 'vases',
      tier: 1,
      type: 'text',
      kicker: 'Art',
      title: 'Des vases-portraits',
      body:
        "Les potiers mochicas fabriquent des vases-portraits si réalistes qu'on reconnaît des individus. D'autres vases montrent la pêche, la guerre, la médecine ou les rituels : une véritable encyclopédie de leur vie.",
    },
    {
      id: 'sipan',
      tier: 1,
      type: 'person',
      nom: 'Seigneur de Sipán',
      role: 'Souverain mochica',
      dates: 'vers 250',
      description:
        "En 1987, l'archéologue Walter Alva découvre sa tombe intacte, remplie de parures d'or et d'argent. C'est l'une des tombes les plus riches jamais trouvées en Amérique.",
    },
    {
      id: 'metal',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des orfèvres de génie',
      body:
        "Les orfèvres mochicas travaillent l'or, l'argent et le cuivre. Ils savent dorer le cuivre par des procédés chimiques et souder des pièces de métal.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Les Mochicas en dates',
      items: [
        { year: 100, label: 'Début de la culture mochica' },
        { year: 250, label: 'Tombe du Seigneur de Sipán' },
        { year: 450, label: 'Tombe de la Dame de Cao' },
        { year: 600, label: 'Catastrophes climatiques' },
        { year: 800, label: 'Fin de la culture mochica' },
      ],
    },
    {
      id: 'sacrifices',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Guerre et sacrifices',
      body:
        "Les vases et les fresques montrent des combats entre guerriers et une cérémonie où des prisonniers sont sacrifiés. Des tombes de sacrifiés ont été retrouvées à la Huaca de la Lune.",
    },
    {
      id: 'declin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le déclin',
      body:
        "À la fin du VIe siècle, des pluies diluviennes puis des sécheresses, liées au phénomène El Niño, frappent la région. Vers 800, la culture mochica disparaît ; d'autres peuples, comme les Chimús, lui succèdent.",
    },

    // ── Niveau 2 ──
    {
      id: 'cao',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'La Dame de Cao',
      body:
        "En 2006, les archéologues découvrent la momie d'une femme tatouée, enterrée vers 450 avec des armes et des parures. C'est la première dirigeante mochica connue.",
    },
    {
      id: 'seigneuries',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Pas un empire unique',
      body:
        "Les Mochicas ne forment sans doute pas un seul État, mais plusieurs seigneuries qui partagent la même culture et se font parfois la guerre.",
    },
    {
      id: 'totora',
      tier: 2,
      type: 'text',
      kicker: 'Quotidien',
      title: 'Les bateaux de roseaux',
      body:
        "Les vases montrent des pêcheurs sur des embarcations de roseaux. Les pêcheurs de la côte nord du Pérou utilisent toujours ces « caballitos de totora ».",
    },
    {
      id: 'moules',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des vases en série',
      body:
        "Les potiers utilisent des moules pour fabriquer de nombreux vases identiques, puis les peignent à la main.",
    },
    {
      id: 'pillage',
      tier: 2,
      type: 'text',
      kicker: 'Histoire',
      title: 'Une pyramide pillée',
      body:
        "Au XVIIe siècle, des Espagnols détournent une rivière pour éroder la Huaca du Soleil et y chercher des trésors. Elle a perdu une grande partie de sa masse.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel vivaient les Mochicas ?', options: ['Le Pérou', 'Le Mexique', 'L’Égypte', 'Le Chili'], answer: 0 },
    { id: 'desert', type: 'mcq', prompt: 'Dans quel milieu vivent les Mochicas ?', options: ['Une côte désertique', 'Une forêt tropicale', 'Des montagnes enneigées', 'Une île'], answer: 0 },
    { id: 'canaux', type: 'mcq', prompt: 'Comment les Mochicas cultivent-ils le désert ?', options: ['Grâce à des canaux d’irrigation', 'Grâce à la pluie abondante', 'Grâce à des serres', 'Ils ne cultivent rien'], answer: 0 },
    { id: 'huacas', type: 'mcq', prompt: 'En quoi sont construites les grandes huacas mochicas ?', options: ['En briques crues', 'En marbre', 'En bois', 'En pierre taillée'], answer: 0 },
    { id: 'vases', type: 'mcq', prompt: 'Pour quel type d’objets les Mochicas sont-ils célèbres ?', options: ['Des vases-portraits réalistes', 'Des statues géantes', 'Des livres', 'Des pièces de monnaie'], answer: 0 },
    { id: 'sipan', type: 'mcq', prompt: 'Quelle tombe intacte est découverte en 1987 ?', options: ['Celle du Seigneur de Sipán', 'Celle de Toutânkhamon', 'Celle de Pachacutec', 'Celle de Moctezuma'], answer: 0 },
    { id: 'metaux', type: 'mcq', prompt: 'Quels métaux travaillent les orfèvres mochicas ?', options: ['L’or, l’argent et le cuivre', 'Le fer et l’acier', 'L’aluminium', 'Le plomb seul'], answer: 0 },
    { id: 'cao', type: 'mcq', prompt: 'Qui est la Dame de Cao ?', options: ['Une dirigeante mochica tatouée', 'Une déesse', 'Une reine inca', 'Une archéologue'], answer: 0 },
    { id: 'etat', type: 'tf', prompt: 'Les Mochicas forment sans doute plusieurs seigneuries plutôt qu’un empire unique.', answer: true },
    { id: 'elnino', type: 'mcq', prompt: 'Quel phénomène climatique a frappé les Mochicas ?', options: ['El Niño', 'La mousson', 'Une glaciation', 'Un ouragan tropical'], answer: 0 },
    { id: 'successeurs', type: 'mcq', prompt: 'Quel peuple succède plus tard aux Mochicas sur la côte nord du Pérou ?', options: ['Les Chimús', 'Les Aztèques', 'Les Mayas', 'Les Zapotèques'], answer: 0 },
    { id: 'sacrifices', type: 'tf', prompt: 'Les vases mochicas montrent des sacrifices de prisonniers.', answer: true },
    { id: 'totora', type: 'mcq', prompt: 'En quoi sont faites les embarcations des pêcheurs mochicas ?', options: ['En roseaux', 'En fer', 'En peau de phoque', 'En écorce de bouleau'], answer: 0 },
    { id: 'moules', type: 'mcq', prompt: 'Comment les potiers fabriquent-ils des vases en série ?', options: ['Avec des moules', 'Avec un tour électrique', 'Avec des imprimantes', 'À la main uniquement'], answer: 0 },
    { id: 'pillage', type: 'mcq', prompt: 'Comment des Espagnols abîment-ils la Huaca du Soleil ?', options: ['En détournant une rivière', 'Avec de la dynamite', 'Par un incendie', 'Avec des canons'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Début de la culture mochica', 'Tombe du Seigneur de Sipán', 'Tombe de la Dame de Cao', 'Fin de la culture mochica'] },
  ],

  recap: [
    'Vers 100, les Mochicas irriguent les vallées désertiques du nord du Pérou',
    'Pyramides de briques crues : Huacas du Soleil et de la Lune',
    'Vases-portraits, orfèvrerie, tombe du Seigneur de Sipán',
    'Catastrophes liées à El Niño ; disparition vers 800',
  ],
}
