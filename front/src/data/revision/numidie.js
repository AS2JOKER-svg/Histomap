/** Chapitre rédigé : Royaume de Numidie (202 – 46 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'numides',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Des cavaliers berbères',
      body:
        "Les Numides sont des peuples berbères d'Afrique du Nord, dans l'actuelle Algérie. Cavaliers réputés, ils montent sans selle ni mors. À la fin du IIIe siècle av. J.-C., ils forment deux royaumes, pris entre deux grandes puissances : Carthage et Rome.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La Numidie vers 100 av. J.-C.',
      years: [-100],
      caption: 'Le royaume s’étend sur l’est de l’Algérie et l’ouest de la Tunisie, entre la Maurétanie et la province romaine d’Afrique.',
    },
    {
      id: 'massinissa',
      tier: 1,
      type: 'person',
      nom: 'Massinissa',
      role: 'Roi de Numidie',
      dates: 'vers 238 – 148 av. J.-C.',
      description:
        "Prince berbère élevé à Carthage, il passe du côté de Rome en 206 av. J.-C. Après la victoire de Zama, il unifie la Numidie et la gouverne pendant 54 ans, en développant l'agriculture et les villes.",
    },
    {
      id: 'zama',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Zama',
      annee: -202,
      adversaires: ['Carthage (Hannibal)'],
      allies: ['République romaine (Scipion)', 'Numides de Massinissa'],
      vainqueur: 'Rome et les Numides de Massinissa',
      consequences:
        "La cavalerie numide de Massinissa joue un rôle décisif dans la défaite d'Hannibal. Carthage perd la deuxième guerre punique ; Massinissa devient roi de toute la Numidie.",
    },
    {
      id: 'jugurtha',
      tier: 1,
      type: 'person',
      nom: 'Jugurtha',
      role: 'Roi de Numidie',
      dates: 'vers 160 – 104 av. J.-C.',
      description:
        "Petit-fils de Massinissa, il élimine ses cousins pour régner seul et défie Rome pendant sept ans. Trahi par son beau-père, le roi de Maurétanie, il est livré aux Romains et meurt dans une prison de Rome.",
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'text',
      kicker: 'Guerres',
      title: 'La guerre de Jugurtha',
      body:
        "De 112 à 105 av. J.-C., Jugurtha mène contre Rome une guerre de mouvement dans les montagnes et le désert. L'historien Salluste la raconte ; il prête à Jugurtha ce jugement sur Rome : « Ville à vendre, et qui périra bientôt, si elle trouve un acheteur ! »",
      highlight: { value: '7 ans', label: 'de guerre contre Rome' },
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'La Numidie en dates',
      items: [
        { year: -206, label: 'Massinissa s’allie à Rome' },
        { year: -202, label: 'Bataille de Zama' },
        { year: -148, label: 'Mort de Massinissa' },
        { year: -112, label: 'Début de la guerre de Jugurtha' },
        { year: -46, label: 'Bataille de Thapsus' },
      ],
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Une province romaine',
      body:
        "Pendant la guerre civile romaine, le roi Juba Ier s'allie à Pompée contre César. Vaincu à Thapsus en 46 av. J.-C., il se donne la mort. La Numidie devient une province romaine, l'Africa Nova.",
    },
    {
      id: 'heritage',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des héros berbères',
      body:
        "Massinissa et Jugurtha sont aujourd'hui célébrés en Algérie comme des héros. L'alphabet libyque des Numides est l'ancêtre du tifinagh, utilisé pour écrire les langues berbères.",
    },

    // ── Niveau 2 ──
    {
      id: 'sophonisbe',
      tier: 2,
      type: 'text',
      kicker: 'Personnages',
      title: 'Sophonisbe',
      body:
        "Noble carthaginoise, elle épouse le roi numide Syphax, allié de Carthage, puis Massinissa après la défaite de Syphax. Selon Tite-Live, elle s'empoisonne en 203 av. J.-C. pour ne pas être livrée aux Romains.",
    },
    {
      id: 'medracen',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le Medracen',
      body:
        "Dans l'est de l'Algérie, ce grand mausolée royal en forme de cône à gradins, entouré de colonnes, date du IIIe siècle av. J.-C. Il mêle traditions berbères et influences grecques et puniques.",
    },
    {
      id: 'juba',
      tier: 2,
      type: 'person',
      nom: 'Juba II',
      role: 'Roi savant de Maurétanie',
      dates: 'vers 52 av. J.-C. – 23 apr. J.-C.',
      description: "Fils de Juba Ier, élevé à Rome, il devient roi de Maurétanie et écrit de nombreux livres en grec. Il épouse Cléopâtre Séléné, fille de Cléopâtre et de Marc Antoine.",
    },
    {
      id: 'ble',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Du blé pour la Méditerranée',
      body:
        "Selon les auteurs anciens, Massinissa transforme des terres d'élevage en champs de blé. La Numidie exporte ses céréales en Méditerranée, et l'Afrique du Nord deviendra plus tard un grenier à blé de Rome.",
    },
    {
      id: 'cavaliers',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Armée',
      value: 'Sans selle',
      label: 'ni mors : la cavalerie numide',
      caption: "Les cavaliers numides guident leur cheval avec une simple corde et la voix. Rapides et insaisissables, ils harcèlent l'ennemi puis se retirent.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: 'Qui sont les Numides ?', options: ['Des peuples berbères d’Afrique du Nord', 'Des Grecs de Sicile', 'Des Gaulois', 'Des Égyptiens'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve surtout la Numidie ?', options: ['L’Algérie', 'L’Égypte', 'L’Espagne', 'La Grèce'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de la Numidie ?', options: ['Cirta', 'Carthage', 'Alexandrie', 'Rome'], answer: 0 },
    { id: 'massinissa', type: 'mcq', prompt: 'Qui unifie la Numidie après 202 av. J.-C. ?', options: ['Massinissa', 'Jugurtha', 'Hannibal', 'Syphax'], answer: 0 },
    { id: 'allie', type: 'mcq', prompt: 'Avec qui Massinissa s’allie-t-il contre Carthage ?', options: ['Rome', 'L’Égypte', 'Les Gaulois', 'La Perse'], answer: 0 },
    { id: 'zama', type: 'mcq', prompt: 'Quel général carthaginois est vaincu à Zama ?', options: ['Hannibal', 'Hamilcar', 'Hasdrubal', 'Magon'], answer: 0 },
    { id: 'regne', type: 'mcq', prompt: 'Combien de temps environ Massinissa règne-t-il ?', options: ['54 ans', '5 ans', '200 ans', '12 ans'], answer: 0 },
    { id: 'jugurtha', type: 'mcq', prompt: 'Quel roi numide défie Rome de 112 à 105 av. J.-C. ?', options: ['Jugurtha', 'Massinissa', 'Juba II', 'Micipsa'], answer: 0 },
    { id: 'salluste', type: 'mcq', prompt: 'Quel historien romain raconte la guerre de Jugurtha ?', options: ['Salluste', 'Tacite', 'Hérodote', 'Plutarque'], answer: 0 },
    { id: 'trahison', type: 'tf', prompt: 'Jugurtha est livré aux Romains par son beau-père, le roi de Maurétanie.', answer: true },
    { id: 'thapsus', type: 'mcq', prompt: 'Qui bat le roi Juba Ier à Thapsus en 46 av. J.-C. ?', options: ['Jules César', 'Pompée', 'Scipion', 'Auguste'], answer: 0 },
    { id: 'province', type: 'tf', prompt: 'Après Thapsus, la Numidie devient une province romaine.', answer: true },
    { id: 'cavalerie', type: 'mcq', prompt: 'Comment montent les cavaliers numides ?', options: ['Sans selle ni mors', 'Avec des étriers d’or', 'Sur des éléphants', 'Sur des chameaux cuirassés'], answer: 0 },
    { id: 'tifinagh', type: 'mcq', prompt: 'Quelle écriture actuelle descend de l’alphabet libyque des Numides ?', options: ['Le tifinagh', 'L’alphabet arabe', 'Le latin', 'Le grec'], answer: 0 },
    { id: 'juba', type: 'mcq', prompt: 'Qui épouse Juba II, roi savant de Maurétanie ?', options: ['La fille de Cléopâtre', 'Sophonisbe', 'La fille d’Hannibal', 'Une princesse perse'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Massinissa s’allie à Rome', 'Bataille de Zama', 'Guerre de Jugurtha', 'Bataille de Thapsus'] },
  ],

  recap: [
    'Royaume berbère de cavaliers, entre Carthage et Rome',
    'Massinissa, allié de Rome, vainqueur à Zama (202 av. J.-C.), unifie la Numidie',
    'Jugurtha défie Rome pendant sept ans (112-105 av. J.-C.)',
    'Thapsus (46 av. J.-C.) : la Numidie devient province romaine',
  ],
}
