/** Chapitre rédigé : Japon ancien (vers 250 – 794). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'himiko',
      tier: 1,
      type: 'person',
      nom: 'Himiko',
      role: 'Reine du pays de Wa',
      dates: 'IIIe siècle',
      description:
        "Les plus anciennes descriptions du Japon viennent de chroniques chinoises. Elles parlent du « pays de Wa » et de sa reine-chamane, Himiko, qui envoie une ambassade en Chine en 239.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Japon de Yamato',
      years: [500, 700],
      caption: 'Comparez : le pouvoir de Yamato s’étend peu à peu sur une grande partie de l’archipel.',
    },
    {
      id: 'kofun',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Les grands tombeaux',
      body:
        "À partir du IIIe siècle, des chefs puissants se font enterrer dans d'immenses tertres en forme de trou de serrure, les kofun. Le plus grand mesure environ 486 mètres de long.",
      highlight: { value: '486 m', label: 'le plus grand kofun' },
    },
    {
      id: 'bouddhisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le bouddhisme arrive de Corée',
      body:
        "Au VIe siècle, le royaume coréen de Paekche envoie au Japon des statues et des textes bouddhistes. Après une lutte entre grands clans, la cour adopte la nouvelle religion, à côté du culte des kami, les esprits de la nature.",
    },
    {
      id: 'shotoku',
      tier: 1,
      type: 'person',
      nom: 'Prince Shōtoku',
      role: 'Régent',
      dates: '574 – 622',
      description:
        "Régent auprès de l'impératrice Suiko, il protège le bouddhisme, fonde le temple Hōryū-ji et envoie des ambassades en Chine. La tradition lui attribue la « Constitution en dix-sept articles ».",
    },
    {
      id: 'modele',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le modèle chinois',
      body:
        "Au VIIe siècle, la cour copie l'organisation de la Chine des Tang : lois écrites, fonctionnaires, recensement et impôts. Le souverain prend le titre d'empereur (tennō), et le pays celui de Nihon, le Japon.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Japon ancien en dates',
      items: [
        { year: 538, label: 'Arrivée du bouddhisme' },
        { year: 645, label: 'Réforme de Taika' },
        { year: 710, label: 'Capitale à Nara' },
        { year: 752, label: 'Grand Bouddha du Tōdai-ji' },
        { year: 794, label: 'Capitale à Heian (Kyoto)' },
      ],
    },
    {
      id: 'nara',
      tier: 1,
      type: 'text',
      kicker: 'Ville',
      title: 'Nara, première capitale fixe',
      body:
        "En 710, la capitale s'installe à Nara, dessinée en damier sur le modèle de Chang'an, la capitale chinoise. L'empereur Shōmu y fait fondre un Bouddha de bronze d'environ 15 mètres, inauguré en 752.",
    },
    {
      id: 'baekgang',
      tier: 1,
      type: 'war',
      nom: 'Bataille de Baekgang',
      annee: 663,
      adversaires: ['Silla', 'Chine des Tang'],
      allies: ['Japon (Yamato)', 'Partisans de Paekche'],
      vainqueur: 'Silla et Tang',
      consequences:
        "La flotte japonaise venue aider Paekche est détruite. Le Japon renonce à intervenir en Corée, fortifie ses côtes et accueille de nombreux réfugiés coréens.",
    },

    // ── Niveau 2 ──
    {
      id: 'haniwa',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Les haniwa',
      body:
        "Sur les tombeaux, on disposait des milliers de figurines de terre cuite, les haniwa : maisons, chevaux, guerriers, musiciens. Elles nous renseignent sur la vie de l'époque.",
    },
    {
      id: 'lettre',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Le pays du soleil levant',
      body:
        "En 607, une lettre japonaise à l'empereur de Chine commence par : « Le fils du Ciel du pays où le soleil se lève au fils du Ciel du pays où le soleil se couche ». L'empereur chinois en fut, dit-on, irrité.",
    },
    {
      id: 'kojiki',
      tier: 2,
      type: 'text',
      kicker: 'Littérature',
      title: 'Les premiers livres',
      body:
        "Le Kojiki (712) et le Nihon shoki (720) racontent les mythes et l'histoire des débuts du Japon. Le Man'yōshū rassemble plus de 4 500 poèmes, dont certains écrits par des soldats et des paysans.",
    },
    {
      id: 'horyuji',
      tier: 2,
      type: 'text',
      kicker: 'Architecture',
      title: 'Le Hōryū-ji',
      body:
        "Certains bâtiments de ce temple, reconstruits vers 700, sont parmi les plus anciens édifices en bois du monde.",
    },
    {
      id: 'heian',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Vers Heian',
      body:
        "En 794, l'empereur Kanmu installe la capitale à Heian-kyō, l'actuelle Kyoto. Elle y restera plus de mille ans.",
    },
  ],

  quiz: [
    { id: 'himiko', type: 'mcq', prompt: 'Quelle reine du Japon est décrite par des chroniques chinoises au IIIe siècle ?', options: ['Himiko', 'Suiko', 'Seondeok', 'Murasaki'], answer: 0 },
    { id: 'kofun', type: 'mcq', prompt: 'Que sont les kofun ?', options: ['De grands tombeaux en tertre', 'Des temples bouddhistes', 'Des épées', 'Des poèmes'], answer: 0 },
    { id: 'forme', type: 'mcq', prompt: 'Quelle forme ont souvent les grands kofun ?', options: ['Un trou de serrure', 'Une pyramide', 'Un cercle parfait', 'Une étoile'], answer: 0 },
    { id: 'bouddhisme', type: 'mcq', prompt: 'D’où le bouddhisme arrive-t-il au Japon au VIe siècle ?', options: ['Du royaume coréen de Paekche', 'De l’Inde directement', 'Du Tibet', 'De Perse'], answer: 0 },
    { id: 'kami', type: 'mcq', prompt: 'Comment s’appellent les esprits de la nature honorés au Japon ?', options: ['Les kami', 'Les djinns', 'Les dieux lares', 'Les devas'], answer: 0 },
    { id: 'shotoku', type: 'mcq', prompt: 'Quel prince régent protège le bouddhisme et fonde le Hōryū-ji ?', options: ['Shōtoku', 'Kanmu', 'Shōmu', 'Tenji'], answer: 0 },
    { id: 'modele', type: 'mcq', prompt: 'Sur quel pays la cour japonaise prend-elle modèle au VIIe siècle ?', options: ['La Chine des Tang', 'L’Inde des Gupta', 'L’Empire romain', 'La Perse'], answer: 0 },
    { id: 'tenno', type: 'mcq', prompt: 'Quel titre prend le souverain du Japon ?', options: ['Tennō (empereur)', 'Shogun', 'Khan', 'Pharaon'], answer: 0 },
    { id: 'nara', type: 'mcq', prompt: 'Quelle ville devient la capitale en 710 ?', options: ['Nara', 'Tokyo', 'Kyoto', 'Osaka'], answer: 0 },
    { id: 'plan', type: 'tf', prompt: 'Nara est dessinée sur le modèle de la capitale chinoise Chang’an.', answer: true },
    { id: 'daibutsu', type: 'mcq', prompt: 'Quelle statue géante l’empereur Shōmu fait-il fondre ?', options: ['Un Bouddha de bronze', 'Un samouraï de pierre', 'Un dragon d’or', 'Une déesse de bois'], answer: 0 },
    { id: 'baekgang', type: 'mcq', prompt: 'Qui détruit la flotte japonaise à Baekgang en 663 ?', options: ['Silla et la Chine des Tang', 'Les Mongols', 'Les Portugais', 'Koguryo seul'], answer: 0 },
    { id: 'kojiki', type: 'mcq', prompt: 'Qu’est-ce que le Kojiki ?', options: ['La plus ancienne chronique japonaise conservée', 'Une épée sacrée', 'Un temple', 'Une loi'], answer: 0 },
    { id: 'soleil', type: 'tf', prompt: 'En 607, une lettre japonaise présente le Japon comme le pays où le soleil se lève.', answer: true },
    { id: 'heian', type: 'mcq', prompt: 'Où la capitale s’installe-t-elle en 794 ?', options: ['À Heian (Kyoto)', 'À Edo (Tokyo)', 'À Kamakura', 'À Nara'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Arrivée du bouddhisme', 'Réforme de Taika', 'Capitale à Nara', 'Capitale à Heian (Kyoto)'] },
  ],

  recap: [
    'IIIe siècle : la reine Himiko, puis l’époque des grands tombeaux (kofun)',
    'Le bouddhisme arrive de Corée ; le prince Shōtoku le protège',
    'Au VIIe siècle, la cour copie la Chine des Tang : le souverain devient empereur',
    '710 : Nara et son Grand Bouddha ; 794 : la capitale part pour Heian (Kyoto)',
  ],
}
