/** Chapitre rédigé : Royaume d’Ayutthaya (1351 – 1767). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une capitale sur une île',
      body:
        "En 1351, le roi Ramathibodi Ier fonde Ayutthaya sur une île, au confluent de trois rivières, dans la vallée de la Chao Phraya. Le royaume siamois va dominer la région pendant quatre siècles.",
      highlight: { value: '1351', label: 'fondation' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume d’Ayutthaya',
      years: [1400, 1700],
      caption: 'Comparez : le royaume s’étend sur l’essentiel de la Thaïlande actuelle.',
    },
    {
      id: 'angkor',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'La chute d’Angkor',
      body:
        "En 1431, les armées d'Ayutthaya prennent Angkor, la capitale de l'Empire khmer. La cour khmère part s'installer plus au sud. Ayutthaya absorbe aussi le royaume voisin de Sukhothai.",
    },
    {
      id: 'port',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Un grand port d’Asie',
      body:
        "Ayutthaya accueille des marchands chinois, japonais, perses, portugais, hollandais et français, chacun dans son quartier. Le royaume exporte du riz, des bois précieux et des peaux de cerf.",
    },
    {
      id: 'naresuan',
      tier: 1,
      type: 'person',
      nom: 'Naresuan',
      role: 'Roi d’Ayutthaya',
      dates: '1555 – 1605',
      description:
        "En 1569, la Birmanie prend Ayutthaya. Le prince Naresuan, otage en Birmanie dans son enfance, proclame l'indépendance en 1584. Devenu roi, il est honoré comme l'un des plus grands souverains thaïs.",
    },
    {
      id: 'versailles',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Des Siamois à Versailles',
      body:
        "Le roi Narai échange des ambassades avec Louis XIV. En 1686, les ambassadeurs siamois sont reçus à Versailles et fascinent la cour de France.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Ayutthaya en dates',
      items: [
        { year: 1351, label: 'Fondation' },
        { year: 1431, label: 'Prise d’Angkor' },
        { year: 1569, label: 'Prise d’Ayutthaya par les Birmans' },
        { year: 1686, label: 'Ambassade à Versailles' },
        { year: 1767, label: 'Destruction d’Ayutthaya' },
      ],
    },
    {
      id: 'chute',
      tier: 1,
      type: 'war',
      nom: 'Chute d’Ayutthaya (1767)',
      annee: 1767,
      adversaires: ['Birmanie (dynastie Konbaung)'],
      allies: ['Ayutthaya'],
      vainqueur: 'Birmanie',
      consequences:
        "Après un siège de plus d'un an, la capitale est prise, pillée et incendiée. Le général Taksin chasse ensuite les Birmans et refonde le royaume, dont la capitale deviendra Bangkok.",
    },
    {
      id: 'thailande',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le Siam, devenu Thaïlande',
      body:
        "Le Siam, appelé Thaïlande depuis 1939, est le seul pays d'Asie du Sud-Est à n'avoir jamais été colonisé par les Européens. Les ruines d'Ayutthaya sont inscrites au patrimoine mondial de l'UNESCO.",
    },

    // ── Niveau 2 ──
    {
      id: 'elephants',
      tier: 2,
      type: 'war',
      nom: 'Bataille de Nong Sarai',
      annee: 1593,
      adversaires: ['Royaume birman de Toungoo'],
      allies: ['Ayutthaya (Naresuan)'],
      vainqueur: 'Ayutthaya',
      consequences: "Selon les chroniques siamoises, Naresuan tue le prince héritier birman en duel, à dos d'éléphant. La Birmanie renonce pour longtemps à attaquer le Siam.",
    },
    {
      id: 'canaux',
      tier: 2,
      type: 'text',
      kicker: 'Ville',
      title: 'Une Venise d’Asie',
      body:
        "La capitale est sillonnée de canaux, si nombreux que des voyageurs européens la comparent à Venise. À la saison des pluies, beaucoup d'habitants vivent et commercent sur des bateaux.",
    },
    {
      id: 'sakdina',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Le sakdina',
      body:
        "Chaque personne a un rang mesuré en unités de terre, le sakdina, du roi jusqu'aux esclaves. Les hommes libres doivent chaque année plusieurs mois de travail ou de service militaire au roi.",
    },
    {
      id: 'phaulkon',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Un Grec ministre du Siam',
      body:
        "L'aventurier grec Constantin Phaulkon devient ministre du roi Narai et favorise l'alliance avec la France. En 1688, une révolution de palais le renverse et chasse les Français.",
    },
    {
      id: 'bouddha',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'La tête dans les racines',
      body:
        "Dans les ruines du temple Wat Mahathat, une tête de Bouddha est prise dans les racines d'un arbre : c'est l'une des images les plus célèbres de Thaïlande.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Ayutthaya ?', options: ['La Thaïlande', 'Le Cambodge', 'Le Vietnam', 'La Malaisie'], answer: 0 },
    { id: 'ancien', type: 'mcq', prompt: 'Quel est l’ancien nom de la Thaïlande ?', options: ['Le Siam', 'L’Annam', 'Le Champa', 'Le Tonkin'], answer: 0 },
    { id: 'ile', type: 'tf', prompt: 'Ayutthaya est construite sur une île entre trois rivières.', answer: true },
    { id: 'religion', type: 'mcq', prompt: 'Quelle est la religion du royaume ?', options: ['Le bouddhisme theravada', 'L’islam', 'Le christianisme', 'Le confucianisme'], answer: 0 },
    { id: 'angkor', type: 'mcq', prompt: 'Quelle capitale les armées d’Ayutthaya prennent-elles en 1431 ?', options: ['Angkor', 'Pagan', 'Hanoï', 'Malacca'], answer: 0 },
    { id: 'marchands', type: 'mcq', prompt: 'Qui vient commercer à Ayutthaya ?', options: ['Des marchands d’Asie et d’Europe', 'Seulement des Chinois', 'Personne', 'Seulement des Portugais'], answer: 0 },
    { id: 'birmanie', type: 'mcq', prompt: 'Quel voisin Ayutthaya affronte-t-il souvent ?', options: ['La Birmanie', 'Le Japon', 'La Chine', 'L’Inde'], answer: 0 },
    { id: 'naresuan', type: 'mcq', prompt: 'Quel roi libère Ayutthaya de la domination birmane ?', options: ['Naresuan', 'Narai', 'Taksin', 'Anawrahta'], answer: 0 },
    { id: 'elephant', type: 'mcq', prompt: 'Selon les chroniques, comment Naresuan bat-il le prince birman en 1593 ?', options: ['En duel à dos d’éléphant', 'En duel à l’épée à pied', 'Sur un navire', 'Aux échecs'], answer: 0 },
    { id: 'versailles', type: 'mcq', prompt: 'Quel roi de France reçoit une ambassade siamoise en 1686 ?', options: ['Louis XIV', 'François Ier', 'Napoléon', 'Henri IV'], answer: 0 },
    { id: 'venise', type: 'mcq', prompt: 'À quelle ville européenne compare-t-on Ayutthaya pour ses canaux ?', options: ['Venise', 'Paris', 'Londres', 'Rome'], answer: 0 },
    { id: 'sakdina', type: 'mcq', prompt: 'Qu’est-ce que le sakdina ?', options: ['Un rang mesuré en unités de terre', 'Une danse', 'Un temple', 'Une monnaie'], answer: 0 },
    { id: 'chute', type: 'mcq', prompt: 'Qui détruit Ayutthaya en 1767 ?', options: ['L’armée birmane', 'L’armée française', 'L’armée chinoise', 'L’armée khmère'], answer: 0 },
    { id: 'bangkok', type: 'mcq', prompt: 'Quelle ville devient ensuite la capitale du Siam ?', options: ['Bangkok', 'Chiang Mai', 'Phnom Penh', 'Vientiane'], answer: 0 },
    { id: 'colonise', type: 'tf', prompt: 'La Thaïlande a été une colonie européenne.', answer: false, explanation: 'C’est le seul pays d’Asie du Sud-Est à n’avoir jamais été colonisé.' },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation', 'Prise d’Angkor', 'Ambassade à Versailles', 'Destruction d’Ayutthaya'] },
  ],

  recap: [
    '1351 : fondation d’Ayutthaya, capitale du Siam, sur une île',
    '1431 : prise d’Angkor ; un grand port ouvert à l’Asie et à l’Europe',
    'Guerres contre la Birmanie ; Naresuan ; ambassade à Versailles (1686)',
    '1767 : destruction par les Birmans ; le royaume renaît autour de Bangkok',
  ],
}
