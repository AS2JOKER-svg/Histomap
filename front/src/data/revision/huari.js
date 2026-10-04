/** Chapitre rédigé : Empire huari ou wari (≈ 600 – 1000 apr. J.-C.). */
export default {
  readingTime: 3,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'premier-empire',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le premier empire des Andes ?',
      body:
        "Vers 600, depuis la ville de Huari (ou Wari), près de l'actuelle Ayacucho dans les Andes du Pérou, un État étend son pouvoir sur une grande partie du pays. Beaucoup de chercheurs y voient le premier empire des Andes, huit siècles avant les Incas.",
      highlight: { value: '≈ 600', label: "début de l'expansion huari" },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'espace huari",
      years: [700, 900],
      caption: "Des hautes terres du centre du Pérou vers le nord, la côte et la région de Cuzco ; au sud-est, le domaine de Tiwanaku.",
    },
    {
      id: 'capitale',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Huari, une grande capitale',
      body:
        "La capitale couvre plusieurs kilomètres carrés. Elle est formée d'enclos aux hauts murs de pierre, de cours, de temples et de tombes souterraines pour l'élite. Sa population est mal connue : selon les estimations, de 10 000 à plusieurs dizaines de milliers d'habitants.",
    },
    {
      id: 'pikillacta',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Expansion',
      value: '700',
      label: 'bâtiments environ à Pikillacta, près de Cuzco',
      caption: "Pour contrôler les régions soumises, Huari bâtit des centres administratifs au plan quadrillé très régulier, avec des entrepôts, des logements et des cours. Pikillacta en est le plus célèbre.",
    },
    {
      id: 'routes',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Routes et terrasses',
      body:
        "Des routes relient la capitale à ses centres de province. Les Incas réutiliseront plus tard certains de ces chemins. Les Huaris développent aussi les terrasses agricoles à flanc de montagne et l'irrigation, pour cultiver notamment le maïs.",
    },
    {
      id: 'quipus',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Des quipus avant les Incas',
      body:
        "Les Huaris utilisent déjà des quipus, des cordelettes à nœuds de couleurs, sans doute pour tenir des comptes. Les plus anciens quipus bien datés leur appartiennent. Les Incas perfectionneront cet outil des siècles plus tard.",
    },
    {
      id: 'textiles',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'Des tissus extraordinaires',
      body:
        "Les tisserands huaris fabriquent des tuniques en tapisserie d'une finesse exceptionnelle, aux fils si serrés qu'elles comptent parmi les plus fins tissages du monde ancien. Leurs motifs géométriques, étirés et répétés, ressemblent parfois à de l'art abstrait moderne.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Un empire qui se défait',
      body:
        "Vers 1000, l'empire se désagrège : la capitale et les centres de province sont abandonnés. Les causes restent discutées : sécheresses, révoltes, rivalités au sein de l'élite. Les Andes se divisent alors en royaumes régionaux, jusqu'à l'essor des Incas.",
      highlight: { value: '≈ 1000', label: "fin de l'Empire huari" },
    },

    // ── Niveau 2 ──
    {
      id: 'tiwanaku',
      tier: 2,
      type: 'text',
      kicker: 'Monde',
      title: 'Huari et Tiwanaku',
      body:
        "Au sud-est, autour du lac Titicaca, se trouve l'autre grande puissance de l'époque : Tiwanaku. Les deux partagent des images religieuses, comme le dieu aux bâtons. On ne connaît pas de grande guerre entre elles ; à Moquegua, au sud du Pérou, leurs colonies se côtoient.",
    },
    {
      id: 'cerro-baul',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Cerro Baúl et ses banquets',
      body:
        "Sur le plateau de Cerro Baúl, avant-poste huari face au territoire de Tiwanaku, les archéologues ont découvert une brasserie de chicha, une bière locale. Les banquets offerts par les chefs servaient à gagner la fidélité des populations. Le site est incendié lors de son abandon.",
    },
    {
      id: 'huarmey',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'La tombe des nobles dames',
      body:
        "En 2012, à El Castillo de Huarmey, sur la côte nord du Pérou, des archéologues polonais et péruviens découvrent une tombe huari intacte, jamais pillée. Elle abrite des dizaines de femmes de l'élite, avec des bijoux en or et en argent.",
    },
    {
      id: 'chronologie',
      tier: 2,
      type: 'dates',
      kicker: 'Durée',
      title: "De Huari à l'Inca",
      items: [
        { year: 600, label: "Début de l'expansion huari" },
        { year: 650, label: 'La région de Nazca passe sous influence huari' },
        { year: 1000, label: "Désagrégation de l'empire" },
        { year: 1438, label: "Début de l'expansion inca avec Pachacútec" },
      ],
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve la capitale huari ?', options: ['Le Pérou', 'La Bolivie', 'Le Mexique', "L'Équateur"], answer: 0 },
    { id: 'ville', type: 'mcq', prompt: 'Près de quelle ville actuelle se trouve Huari ?', options: ['Ayacucho', 'Mexico', 'La Paz', 'Bogota'], answer: 0 },
    { id: 'periode', type: 'mcq', prompt: "À quelle période l'Empire huari existe-t-il ?", options: ['Vers 600 – 1000', 'Vers 1438 – 1533', 'Vers 2600 – 1800 av. J.-C.', 'Vers 1200 – 400 av. J.-C.'], answer: 0 },
    { id: 'premier', type: 'tf', prompt: 'Beaucoup de chercheurs considèrent Huari comme le premier empire des Andes.', answer: true },
    { id: 'pikillacta', type: 'mcq', prompt: 'Quel centre administratif huari se trouve près de Cuzco ?', options: ['Pikillacta', 'Machu Picchu', 'Cahuachi', 'Caral'], answer: 0 },
    { id: 'plan', type: 'mcq', prompt: 'Comment sont construits les centres administratifs huaris ?', options: ['Selon un plan quadrillé régulier', 'Sur des îles flottantes', 'En bois et en paille', 'Sous terre uniquement'], answer: 0 },
    { id: 'routes', type: 'tf', prompt: 'Les Incas ont réutilisé certaines routes construites par les Huaris.', answer: true },
    { id: 'quipus', type: 'mcq', prompt: 'Quel outil de comptage les Huaris utilisent-ils déjà ?', options: ['Le quipu', "L'abaque romain", 'La tablette d’argile', 'Le papyrus'], answer: 0 },
    { id: 'quipus-incas', type: 'tf', prompt: 'Les quipus ont été inventés par les Incas.', answer: false, explanation: 'Les Huaris en utilisaient déjà des siècles avant les Incas.' },
    { id: 'textiles', type: 'mcq', prompt: 'Dans quel art les Huaris excellent-ils particulièrement ?', options: ['Les tuniques en tapisserie', 'La peinture à l’huile', 'La sculpture en marbre', 'Les vitraux'], answer: 0 },
    { id: 'terrasses', type: 'mcq', prompt: 'Quels aménagements agricoles les Huaris développent-ils ?', options: ['Des terrasses à flanc de montagne', 'Des chinampas sur un lac', 'Des rizières inondées', 'Des polders'], answer: 0 },
    { id: 'voisin', type: 'mcq', prompt: 'Quelle autre grande puissance andine est contemporaine de Huari ?', options: ['Tiwanaku', 'Caral', 'Chavín', 'Teotihuacán'], answer: 0 },
    { id: 'dieu', type: 'mcq', prompt: 'Quelle image religieuse Huari partage-t-il avec Tiwanaku ?', options: ['Le dieu aux bâtons', 'Le serpent à plumes', "L'aigle sur le cactus", 'Le Lanzón'], answer: 0 },
    { id: 'chicha', type: 'mcq', prompt: 'Que découvre-t-on à Cerro Baúl ?', options: ['Une brasserie de chicha', 'Une mine d’or', 'Un port', 'Une bibliothèque de quipus'], answer: 0 },
    { id: 'huarmey', type: 'mcq', prompt: 'Que découvre-t-on à El Castillo de Huarmey en 2012 ?', options: ['Une tombe huari intacte de femmes nobles', 'Le palais de Pachacútec', 'Une flotte de radeaux', 'Des lignes géantes'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: "Vers quelle date l'Empire huari se désagrège-t-il ?", options: ['Vers 1000', 'Vers 1532', 'Vers 300', 'Vers 1800 av. J.-C.'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fin de la culture Nazca', "Désagrégation de l'Empire huari", 'Pachacútec lance l’expansion inca', 'Découverte de la tombe de Huarmey'] },
  ],

  recap: [
    'Vers 600 – 1000 : Huari, sans doute le premier empire des Andes (Pérou)',
    'Centres administratifs quadrillés (Pikillacta), routes et terrasses',
    'Quipus et tapisseries très fines, bien avant les Incas',
    'Désagrégation vers 1000 ; voisin de Tiwanaku, sans grande guerre connue',
  ],
}
