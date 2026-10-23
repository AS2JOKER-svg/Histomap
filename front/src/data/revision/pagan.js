/** Chapitre rédigé : Royaume de Pagan (849 – 1297). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'fondation',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une ville au bord de l’Irrawaddy',
      body:
        "Selon les chroniques birmanes, la ville de Pagan est entourée de remparts en 849, au bord du grand fleuve Irrawaddy, en Birmanie (Myanmar). D'abord petite principauté, elle va devenir la capitale d'un royaume.",
      highlight: { value: '849', label: 'fondation selon les chroniques' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le royaume de Pagan',
      years: [1000, 1200],
      caption: 'Comparez : de la région de Pagan, le royaume s’étend sur toute la vallée de l’Irrawaddy.',
    },
    {
      id: 'anawrahta',
      tier: 1,
      type: 'person',
      nom: 'Anawrahta',
      role: 'Roi de Pagan',
      dates: 'règne 1044 – 1077',
      description:
        "Il unifie pour la première fois la vallée de l'Irrawaddy et fait du bouddhisme theravada la religion du royaume. Il est considéré comme le fondateur de la Birmanie.",
    },
    {
      id: 'thaton',
      tier: 1,
      type: 'war',
      nom: 'Conquête de Thaton',
      annee: 1057,
      adversaires: ['Royaume môn de Thaton'],
      allies: ['Pagan (Anawrahta)'],
      vainqueur: 'Pagan',
      consequences:
        "Selon les chroniques, Anawrahta prend Thaton et ramène à Pagan des moines, des textes bouddhistes et des artisans. Les historiens discutent aujourd'hui l'importance de cet épisode.",
    },
    {
      id: 'temples',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Une plaine de temples',
      body:
        "En deux siècles et demi, rois, nobles et riches habitants font construire plus de 10 000 temples et stupas dans la plaine de Pagan. Faire bâtir un temple est un acte de mérite pour une meilleure renaissance.",
      highlight: { value: '10 000', label: 'temples et stupas construits' },
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Écriture',
      title: 'Naissance de l’écriture birmane',
      body:
        "L'écriture birmane, aux lettres arrondies, apparaît à cette époque, à partir de celle des Môns. C'est toujours celle de la Birmanie aujourd'hui.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Pagan en dates',
      items: [
        { year: 849, label: 'Fondation de Pagan' },
        { year: 1044, label: 'Anawrahta roi' },
        { year: 1105, label: 'Temple d’Ananda' },
        { year: 1287, label: 'Invasion mongole' },
        { year: 1297, label: 'Fin du royaume' },
      ],
    },
    {
      id: 'mongols',
      tier: 1,
      type: 'war',
      nom: 'Invasions mongoles de la Birmanie',
      annee: 1277,
      adversaires: ['Empire mongol de Chine (Kubilai Khan)'],
      allies: ['Pagan'],
      vainqueur: 'Empire mongol',
      consequences:
        "Pagan refuse de se soumettre à Kubilai Khan. Battu en 1277, il est envahi en 1287 et se disloque ; le dernier roi est renversé en 1297.",
    },
    {
      id: 'aujourdhui',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Bagan aujourd’hui',
      body:
        "Plus de 2 000 temples subsistent dans la plaine de Bagan, inscrite au patrimoine mondial de l'UNESCO en 2019. Beaucoup ont été endommagés par des tremblements de terre.",
    },

    // ── Niveau 2 ──
    {
      id: 'myazedi',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'La stèle de Myazedi',
      body:
        "Gravée en 1113, elle porte le même texte en quatre langues : pyu, môn, birman ancien et pali. Comme la pierre de Rosette, elle a aidé les chercheurs à déchiffrer une langue disparue, le pyu.",
    },
    {
      id: 'ananda',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le temple d’Ananda',
      body:
        "Achevé vers 1105 sous le roi Kyansittha, il a la forme d'une croix et abrite quatre grandes statues du Bouddha debout, tournées vers les quatre points cardinaux.",
    },
    {
      id: 'nats',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Les nats',
      body:
        "À côté du bouddhisme, les Birmans continuent d'honorer les nats, des esprits protecteurs des lieux, des familles et des villages. Ce culte existe toujours.",
    },
    {
      id: 'monasteres',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Trop de dons ?',
      body:
        "Les fidèles donnent aux monastères des terres et des travailleurs qui ne paient pas d'impôts. À la longue, ces dons appauvrissent le trésor royal et affaiblissent le royaume.",
    },
    {
      id: 'fuite',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Le roi qui s’enfuit',
      body:
        "Le roi Narathihapate est resté dans les chroniques sous le surnom de « roi qui s'enfuit devant les Chinois » : il a quitté sa capitale à l'approche des Mongols.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve Pagan ?', options: ['La Birmanie (Myanmar)', 'Le Vietnam', 'La Thaïlande', 'Le Laos'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Au bord de quel fleuve se trouve Pagan ?', options: ['L’Irrawaddy', 'Le Mékong', 'Le Gange', 'Le Yangzi'], answer: 0 },
    { id: 'anawrahta', type: 'mcq', prompt: 'Quel roi unifie la Birmanie au XIe siècle ?', options: ['Anawrahta', 'Naresuan', 'Kubilai Khan', 'Lê Lợi'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion devient celle du royaume ?', options: ['Le bouddhisme theravada', 'L’islam', 'L’hindouisme', 'Le christianisme'], answer: 0 },
    { id: 'thaton', type: 'mcq', prompt: 'Quel royaume môn Anawrahta conquiert-il selon les chroniques ?', options: ['Thaton', 'Ayutthaya', 'Champa', 'Angkor'], answer: 0 },
    { id: 'temples', type: 'mcq', prompt: 'Combien de temples et stupas sont construits à Pagan ?', options: ['Plus de 10 000', 'Une dizaine', 'Une centaine', 'Un million'], answer: 0 },
    { id: 'merite', type: 'tf', prompt: 'Construire un temple est vu comme un acte de mérite.', answer: true },
    { id: 'ecriture', type: 'mcq', prompt: 'De quelle écriture vient l’écriture birmane ?', options: ['De l’écriture môn', 'De l’alphabet latin', 'Des caractères chinois', 'De l’arabe'], answer: 0 },
    { id: 'myazedi', type: 'mcq', prompt: 'En combien de langues est gravée la stèle de Myazedi ?', options: ['Quatre', 'Une', 'Deux', 'Dix'], answer: 0 },
    { id: 'pyu', type: 'mcq', prompt: 'Quelle langue disparue la stèle de Myazedi a-t-elle aidé à déchiffrer ?', options: ['Le pyu', 'Le latin', 'Le sanskrit', 'Le grec'], answer: 0 },
    { id: 'ananda', type: 'mcq', prompt: 'Quel célèbre temple est achevé vers 1105 ?', options: ['Le temple d’Ananda', 'Angkor Vat', 'Borobudur', 'Le Tōdai-ji'], answer: 0 },
    { id: 'nats', type: 'mcq', prompt: 'Que sont les nats ?', options: ['Des esprits protecteurs', 'Des moines', 'Des soldats', 'Des temples'], answer: 0 },
    { id: 'mongols', type: 'mcq', prompt: 'Quels envahisseurs provoquent la chute de Pagan ?', options: ['Les Mongols', 'Les Britanniques', 'Les Khmers', 'Les Portugais'], answer: 0 },
    { id: 'unesco', type: 'tf', prompt: 'Le site de Bagan est inscrit au patrimoine mondial de l’UNESCO.', answer: true },
    { id: 'dons', type: 'mcq', prompt: 'Qu’est-ce qui appauvrit le trésor royal à la longue ?', options: ['Les dons de terres aux monastères', 'Le commerce avec la Chine', 'Les tremblements de terre', 'L’invention de la monnaie'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de Pagan', 'Anawrahta roi', 'Temple d’Ananda', 'Invasion mongole'] },
  ],

  recap: [
    'Pagan, au bord de l’Irrawaddy, fondée en 849 selon les chroniques',
    'Anawrahta unifie la Birmanie et impose le bouddhisme theravada',
    'Plus de 10 000 temples ; naissance de l’écriture birmane',
    'Les invasions mongoles font chuter le royaume (1287-1297)',
  ],
}
