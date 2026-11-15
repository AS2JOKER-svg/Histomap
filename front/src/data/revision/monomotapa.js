/** Chapitre rédigé : Empire du Monomotapa (vers 1430 – 1760). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les héritiers du Grand Zimbabwe',
      body:
        "Vers 1430, selon la tradition shona, le prince Nyatsimba Mutota quitte la région du Grand Zimbabwe et conquiert le nord du plateau, près du fleuve Zambèze. Il fonde un empire dont le souverain porte le titre de Mwenemutapa : les Portugais en feront « Monomotapa ».",
      highlight: { value: '≈ 1430', label: 'fondation selon la tradition' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Monomotapa',
      years: [1500, 1600],
      caption: 'Entre le Zambèze et le Limpopo, l’empire contrôle les mines d’or du plateau.',
    },
    {
      id: 'or',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Le royaume de l’or',
      body:
        "Le Mwenemutapa contrôle des mines d'or, de cuivre et le commerce de l'ivoire. Ces richesses sont échangées sur la côte de l'océan Indien avec les marchands swahilis, puis avec les Portugais, contre des tissus et des perles.",
    },
    {
      id: 'ancetres',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'La voix des ancêtres',
      body:
        "Les Shonas honorent leurs ancêtres. Les esprits des rois défunts parlent par la bouche de médiums, que le souverain consulte avant les grandes décisions.",
    },
    {
      id: 'portugais',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Les Portugais arrivent',
      body:
        "Au XVIe siècle, les Portugais s'installent sur la côte, puis le long du Zambèze. En 1561, le missionnaire jésuite Gonçalo da Silveira baptise le roi, mais il est mis à mort peu après, accusé d'espionnage.",
    },
    {
      id: 'barreto',
      tier: 1,
      type: 'war',
      nom: 'Expédition de Francisco Barreto',
      annee: 1569,
      adversaires: ['Royaume de Portugal (Francisco Barreto)'],
      allies: ['Monomotapa'],
      vainqueur: 'Échec portugais',
      consequences:
        "Le roi de Portugal envoie une armée pour s'emparer des mines d'or. Décimés par les fièvres, le manque de vivres et les combats, les soldats portugais échouent.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Monomotapa en dates',
      items: [
        { year: 1430, label: 'Fondation par Mutota (tradition)' },
        { year: 1505, label: 'Les Portugais à Sofala' },
        { year: 1561, label: 'Mort du missionnaire Silveira' },
        { year: 1569, label: 'Expédition de Barreto' },
        { year: 1629, label: 'Le roi devient vassal du Portugal' },
        { year: 1693, label: 'Les Rozvi chassent les Portugais' },
      ],
    },
    {
      id: 'vassal',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Vassal du Portugal',
      body:
        "Affaibli par les guerres de succession, l'empire passe sous influence portugaise. En 1629, le Mwenemutapa Mavura, installé grâce aux Portugais, se reconnaît leur vassal et se fait baptiser.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le déclin',
      body:
        "À la fin du XVIIe siècle, le roi des Rozvi, Changamire Dombo, chasse les Portugais du plateau. Le Monomotapa ne domine plus qu'une partie de la vallée du Zambèze et devient un petit État.",
    },

    // ── Niveau 2 ──
    {
      id: 'mutota',
      tier: 2,
      type: 'person',
      nom: 'Nyatsimba Mutota',
      role: 'Fondateur du Monomotapa',
      dates: 'XVe siècle',
      description: "Selon la tradition, il part à la recherche de sel avant de conquérir le nord du plateau. Son fils Matope étend l'empire jusqu'à l'océan Indien.",
    },
    {
      id: 'mines',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les chercheurs d’or',
      body:
        "Les Shonas lavent le sable des rivières et creusent des puits dans la roche, parfois sur plusieurs dizaines de mètres, pendant la saison sèche. L'or est fondu en lingots ou transporté en poudre.",
    },
    {
      id: 'ophir',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'Le pays d’Ophir ?',
      body:
        "Les Européens imaginaient que le Monomotapa était Ophir, le pays d'où le roi Salomon tirait son or dans la Bible. Le Monomotapa devient en Europe un royaume fabuleux : La Fontaine commence une fable par « Deux vrais amis vivaient au Monomotapa ».",
    },
    {
      id: 'rozvi',
      tier: 2,
      type: 'war',
      nom: 'Expulsion des Portugais par les Rozvi',
      annee: 1693,
      adversaires: ['Portugais du Zambèze'],
      allies: ['Royaume rozvi (Changamire Dombo)'],
      vainqueur: 'Royaume rozvi',
      consequences: "Changamire Dombo chasse les Portugais des foires de l'or du plateau. Le Monomotapa perd sa puissance au profit des Rozvi.",
    },
    {
      id: 'shona',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Les Shonas aujourd’hui',
      body:
        "Les Shonas, héritiers du Grand Zimbabwe et du Monomotapa, forment aujourd'hui le principal peuple du Zimbabwe. Le nom du pays vient du Grand Zimbabwe, « maisons de pierre » en shona.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quels pays actuels se trouve le Monomotapa ?', options: ['Le Zimbabwe et le Mozambique', 'Le Maroc et l’Algérie', 'Le Nigeria et le Ghana', 'L’Égypte et le Soudan'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Quel peuple fonde le Monomotapa ?', options: ['Les Shonas', 'Les Zoulous', 'Les Edo', 'Les Berbères'], answer: 0 },
    { id: 'heritage', type: 'mcq', prompt: 'De quelle grande cité de pierre les fondateurs sont-ils les héritiers ?', options: ['Le Grand Zimbabwe', 'Tombouctou', 'Pétra', 'Méroé'], answer: 0 },
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’empire vers 1430 selon la tradition ?', options: ['Nyatsimba Mutota', 'Mansa Moussa', 'Chaka', 'Mutesa'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: 'Quel titre du souverain a donné le nom « Monomotapa » ?', options: ['Mwenemutapa', 'Mansa', 'Oba', 'Négus'], answer: 0 },
    { id: 'richesse', type: 'mcq', prompt: 'Quelle richesse fait la puissance de l’empire ?', options: ['L’or', 'Le pétrole', 'Le sel de mer', 'La soie'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Près de quel grand fleuve se trouve le Monomotapa ?', options: ['Le Zambèze', 'Le Nil', 'Le Niger', 'Le Congo'], answer: 0 },
    { id: 'ancetres', type: 'tf', prompt: 'Les Shonas consultent les esprits des rois défunts par l’intermédiaire de médiums.', answer: true },
    { id: 'europeens', type: 'mcq', prompt: 'Quels Européens cherchent à contrôler l’or du Monomotapa ?', options: ['Les Portugais', 'Les Anglais', 'Les Français', 'Les Espagnols'], answer: 0 },
    { id: 'silveira', type: 'mcq', prompt: 'Que fait le missionnaire Gonçalo da Silveira en 1561 ?', options: ['Il baptise le roi', 'Il découvre une mine', 'Il fonde une ville', 'Il dessine une carte'], answer: 0 },
    { id: 'barreto', type: 'tf', prompt: 'L’expédition de Francisco Barreto conquiert les mines d’or.', answer: false, explanation: 'Elle échoue, décimée par les maladies et les combats.' },
    { id: 'vassal', type: 'mcq', prompt: 'En 1629, de qui le Mwenemutapa se reconnaît-il vassal ?', options: ['Du Portugal', 'De l’Empire ottoman', 'De l’Angleterre', 'Du sultan de Kilwa'], answer: 0 },
    { id: 'rozvi', type: 'mcq', prompt: 'Quel roi chasse les Portugais du plateau à la fin du XVIIe siècle ?', options: ['Changamire Dombo', 'Chaka', 'Ranavalona', 'Mutesa'], answer: 0 },
    { id: 'fontaine', type: 'mcq', prompt: 'Quel écrivain français évoque le Monomotapa dans une fable ?', options: ['La Fontaine', 'Molière', 'Victor Hugo', 'Voltaire'], answer: 0 },
    { id: 'ophir', type: 'mcq', prompt: 'Quel pays biblique les Européens croyaient-ils retrouver au Monomotapa ?', options: ['Ophir', 'Babylone', 'Canaan', 'L’Égypte'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation par Mutota', 'Mort du missionnaire Silveira', 'Le roi devient vassal du Portugal', 'Les Rozvi chassent les Portugais'] },
  ],

  recap: [
    'Vers 1430 : un empire shona, héritier du Grand Zimbabwe',
    'L’or et l’ivoire échangés sur la côte de l’océan Indien',
    'Les Portugais échouent à conquérir les mines, puis imposent leur influence (1629)',
    'Les Rozvi chassent les Portugais ; le Monomotapa décline',
  ],
}
