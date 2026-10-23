/** Chapitre rédigé : Royaume de Champa (192 – 1832). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'chams',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Le peuple cham',
      body:
        "Selon les sources chinoises, un royaume naît en 192 sur la côte du centre du Vietnam actuel. Ses habitants, les Chams, sont des marins qui parlent une langue austronésienne, parente du malais.",
      highlight: { value: '192', label: 'fondation selon les sources chinoises' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le Champa dans le temps',
      years: [600, 1100, 1500],
      caption: 'Comparez : le Champa occupe longtemps la côte du centre et du sud du Vietnam, puis recule vers le sud.',
    },
    {
      id: 'inde',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Une culture venue de l’Inde',
      body:
        "Les rois chams adoptent la culture indienne : ils écrivent en sanskrit et honorent surtout le dieu Shiva. Dans la vallée de Mỹ Sơn, ils bâtissent pendant près de mille ans des tours-sanctuaires de brique.",
    },
    {
      id: 'commerce',
      tier: 1,
      type: 'text',
      kicker: 'Économie',
      title: 'Un royaume de marins',
      body:
        "Le Champa s'enrichit du commerce maritime entre la Chine, l'Asie du Sud-Est et l'océan Indien. Il vend surtout du bois d'aigle, un bois parfumé très recherché, et de l'ivoire.",
    },
    {
      id: 'riz',
      tier: 1,
      type: 'text',
      kicker: 'Agriculture',
      title: 'Le riz de Champa',
      body:
        "Les Chams cultivent un riz qui pousse vite et résiste à la sécheresse. Introduit en Chine au début du XIe siècle, il permet souvent deux récoltes par an et nourrit une population chinoise en forte hausse.",
    },
    {
      id: 'angkor',
      tier: 1,
      type: 'war',
      nom: 'Guerres Khméro-Chams',
      annee: 1177,
      adversaires: ['Empire khmer'],
      allies: ['Champa'],
      vainqueur: 'Empire khmer, après le pillage d’Angkor',
      consequences:
        "En 1177, la flotte chame remonte le Mékong et pille Angkor. Le prince khmer Jayavarman VII la chasse, puis occupe le Champa pendant une vingtaine d'années.",
    },
    {
      id: 'chebongnga',
      tier: 1,
      type: 'person',
      nom: 'Chế Bồng Nga',
      role: 'Roi du Champa',
      dates: 'règne 1360 – 1390',
      description:
        "Ce roi guerrier pille en 1371 Thăng Long (Hanoï), la capitale du Đại Việt, et le menace pendant vingt ans. Sa mort au combat, en 1390, marque la fin de la puissance chame.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Le Champa en dates',
      items: [
        { year: 192, label: 'Fondation' },
        { year: 1177, label: 'Pillage d’Angkor' },
        { year: 1283, label: 'Invasion mongole' },
        { year: 1471, label: 'Chute de Vijaya' },
        { year: 1832, label: 'Annexion par le Vietnam' },
      ],
    },
    {
      id: 'vijaya',
      tier: 1,
      type: 'war',
      nom: 'Prise de Vijaya',
      annee: 1471,
      adversaires: ['Đại Việt (Lê Thánh Tông)'],
      allies: ['Champa'],
      vainqueur: 'Đại Việt',
      consequences:
        "La capitale chame est prise et son roi capturé. Réduit au sud, le Champa devient vassal du Vietnam et disparaît en 1832.",
    },

    // ── Niveau 2 ──
    {
      id: 'mongols',
      tier: 2,
      type: 'war',
      nom: 'Invasion mongole du Champa',
      annee: 1283,
      adversaires: ['Empire mongol de Chine (Kubilai Khan)'],
      allies: ['Champa'],
      vainqueur: 'Champa',
      consequences: "Les Chams abandonnent leur capitale et harcèlent l'envahisseur depuis les montagnes. L'armée mongole, épuisée, se retire en 1285.",
    },
    {
      id: 'bayon',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Une bataille sculptée',
      body:
        "Les combats entre Khmers et Chams sont sculptés sur les murs du temple du Bayon, à Angkor : on y voit des bateaux de guerre et des soldats chams reconnaissables à leur coiffure.",
    },
    {
      id: 'briques',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Le mystère des briques',
      body:
        "Les briques des tours chames sont si bien jointes qu'on discute encore de la façon dont elles étaient collées : résine végétale, cuisson sur place ou autre technique.",
    },
    {
      id: 'islam',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Hindous et musulmans',
      body:
        "Surtout à partir du XVe siècle, une partie des Chams se convertit à l'islam. Aujourd'hui, certains Chams restent fidèles aux anciens cultes, tandis que les Chams du Cambodge sont en majorité musulmans.",
    },
    {
      id: 'myson',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Mỹ Sơn aujourd’hui',
      body:
        "Endommagé par les bombardements pendant la guerre du Vietnam, le sanctuaire de Mỹ Sơn est inscrit au patrimoine mondial de l'UNESCO depuis 1999.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvait le Champa ?', options: ['Le Vietnam', 'Le Japon', 'L’Inde', 'L’Indonésie'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Comment s’appelle le peuple du Champa ?', options: ['Les Chams', 'Les Khmers', 'Les Thaïs', 'Les Malais'], answer: 0 },
    { id: 'langue', type: 'mcq', prompt: 'À quelle famille appartient la langue chame ?', options: ['Austronésienne', 'Indo-européenne', 'Sino-tibétaine', 'Bantoue'], answer: 0 },
    { id: 'dieu', type: 'mcq', prompt: 'Quel dieu les rois chams honorent-ils surtout ?', options: ['Shiva', 'Zeus', 'Bouddha Amida', 'Allah'], answer: 0 },
    { id: 'myson', type: 'mcq', prompt: 'Comment s’appelle le grand sanctuaire du Champa ?', options: ['Mỹ Sơn', 'Angkor Vat', 'Borobudur', 'Bagan'], answer: 0 },
    { id: 'briques', type: 'mcq', prompt: 'En quoi les tours chames sont-elles construites ?', options: ['En brique', 'En bois', 'En marbre', 'En bambou'], answer: 0 },
    { id: 'bois', type: 'mcq', prompt: 'Quel produit précieux le Champa exporte-t-il ?', options: ['Le bois d’aigle, un bois parfumé', 'Le pétrole', 'Le café', 'Le chocolat'], answer: 0 },
    { id: 'riz', type: 'mcq', prompt: 'Quel pays adopte le « riz de Champa » au XIe siècle ?', options: ['La Chine', 'Le Japon', 'L’Inde', 'La Perse'], answer: 0 },
    { id: 'angkor', type: 'mcq', prompt: 'Quelle capitale la flotte chame pille-t-elle en 1177 ?', options: ['Angkor', 'Pékin', 'Delhi', 'Kyoto'], answer: 0 },
    { id: 'mongols', type: 'tf', prompt: 'L’armée de Kubilai Khan doit se retirer du Champa.', answer: true },
    { id: 'chebongnga', type: 'mcq', prompt: 'Quel roi cham pille la capitale du Đại Việt en 1371 ?', options: ['Chế Bồng Nga', 'Jayavarman VII', 'Kubilai Khan', 'Po Rome'], answer: 0 },
    { id: 'hanoi', type: 'mcq', prompt: 'Comment s’appelle aujourd’hui Thăng Long ?', options: ['Hanoï', 'Hô Chi Minh-Ville', 'Phnom Penh', 'Bangkok'], answer: 0 },
    { id: 'vijaya', type: 'mcq', prompt: 'Quel royaume prend la capitale du Champa en 1471 ?', options: ['Le Đại Việt', 'L’Empire khmer', 'L’Empire mongol', 'Le royaume d’Ayutthaya'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'En quelle année le dernier territoire cham est-il annexé ?', options: ['1832', '1471', '1177', '1945'], answer: 0 },
    { id: 'islam', type: 'tf', prompt: 'Une partie des Chams se convertit à l’islam.', answer: true },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation', 'Pillage d’Angkor', 'Invasion mongole', 'Chute de Vijaya'] },
  ],

  recap: [
    'Le Champa, royaume des Chams sur la côte du Vietnam, naît en 192',
    'Culture indienne, temples de brique de Mỹ Sơn, commerce maritime',
    'Guerres contre les Khmers (pillage d’Angkor, 1177), les Mongols et le Đại Việt',
    '1471 : chute de Vijaya ; le Champa est annexé par le Vietnam en 1832',
  ],
}
