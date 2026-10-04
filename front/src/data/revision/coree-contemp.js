/** Chapitre rédigé : les deux Corées, de la fin de Joseon à nos jours (1789 – aujourd'hui). */
export default {
  readingTime: 5,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'ermite',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Le « royaume ermite »',
      body:
        "Au début du XIXe siècle, la Corée est gouvernée par la dynastie Joseon. Elle limite ses contacts avec l'étranger, sauf avec la Chine. En 1876, le Japon l'oblige par la menace à ouvrir ses ports. La Corée devient alors l'enjeu des rivalités entre la Chine, le Japon et la Russie.",
    },
    {
      id: 'colonie',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'Une colonie japonaise (1910 – 1945)',
      body:
        "Annexée par le Japon en 1910, la Corée perd son indépendance. Le 1er mars 1919, des centaines de milliers de Coréens manifestent pacifiquement pour l'indépendance ; le mouvement est durement réprimé. À partir de la fin des années 1930, le coréen est chassé des écoles, ils doivent prendre des noms japonais, et beaucoup sont soumis au travail forcé.",
      highlight: { value: '1919', label: 'mouvement du 1er mars' },
    },
    {
      id: 'partition',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Un pays coupé en deux',
      items: [
        { year: 1945, label: "Défaite du Japon : l'URSS occupe le nord, les États-Unis le sud, de part et d'autre du 38e parallèle" },
        { year: 1948, label: 'Deux États naissent : la Corée du Sud (Séoul) et la Corée du Nord (Pyongyang)' },
      ],
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Une péninsule, deux pays',
      years: [1900, 1960],
      caption: "Comparez : un seul royaume en 1900 ; en 1960, deux États séparés par une zone démilitarisée, tracée près du 38e parallèle.",
    },
    {
      id: 'guerre',
      tier: 1,
      type: 'war',
      nom: 'Guerre de Corée',
      annee: 1950,
      adversaires: ['Corée du Nord', 'Chine (à partir de fin 1950)', "Soutien de l'URSS"],
      allies: ['Corée du Sud', "Forces de l'ONU dirigées par les États-Unis (dont la France)"],
      vainqueur: "Aucun : retour à peu près à la frontière de départ",
      consequences: "Le 25 juin 1950, l'armée du Nord envahit le Sud. Le front avance et recule plusieurs fois ; Séoul change quatre fois de mains. Un armistice est signé à Panmunjom le 27 juillet 1953, mais aucun traité de paix n'a jamais été signé.",
    },
    {
      id: 'morts',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Guerre',
      value: '≈ 2,5 à 3 millions',
      label: 'de morts pendant la guerre de Corée',
      caption: "Selon les estimations, une grande partie des victimes sont des civils. Des millions de familles sont séparées par la nouvelle frontière.",
    },
    {
      id: 'kim',
      tier: 1,
      type: 'person',
      nom: 'Kim Il-sung',
      role: 'Dirigeant de la Corée du Nord',
      dates: '1912 – 1994 (au pouvoir de 1948 à 1994)',
      description: "Ancien combattant contre les Japonais, installé au pouvoir avec l'appui soviétique, il fonde un régime communiste à parti unique et un culte de la personnalité. Son fils Kim Jong-il (1994-2011), puis son petit-fils Kim Jong-un lui succèdent.",
    },
    {
      id: 'nord',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le Nord, un pays fermé',
      body:
        "La Corée du Nord suit l'idéologie du Juche (« compter sur ses propres forces »). Les libertés y sont très limitées. Dans les années 1990, une famine fait des centaines de milliers de morts selon les estimations. Le pays réalise son premier essai nucléaire en 2006.",
    },
    {
      id: 'miracle',
      tier: 1,
      type: 'text',
      kicker: "Âge d'or",
      title: 'Le Sud : du miracle économique à la démocratie',
      body:
        "Ruinée en 1953, la Corée du Sud devient l'un des pays les plus riches d'Asie : c'est le « miracle du fleuve Han ». Mais elle est longtemps dirigée par des régimes autoritaires. Après de grandes manifestations, elle devient une démocratie en 1987, juste avant les Jeux olympiques de Séoul (1988).",
      highlight: { value: '1988', label: 'Jeux olympiques de Séoul' },
    },

    // ── Niveau 2 ──
    {
      id: 'park',
      tier: 2,
      type: 'person',
      nom: 'Park Chung-hee',
      role: 'Dirigeant de la Corée du Sud',
      dates: '1917 – 1979 (au pouvoir de 1961 à 1979)',
      description: "Ce général prend le pouvoir par un coup d'État en 1961. Il lance l'industrialisation rapide du pays (acier, navires, automobiles) mais gouverne de façon autoritaire. Il est assassiné en 1979.",
    },
    {
      id: 'gwangju',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: 'Gwangju, 1980',
      body:
        "En mai 1980, l'armée réprime un soulèvement pour la démocratie dans la ville de Gwangju : au moins 200 personnes sont tuées, bien davantage selon certaines estimations. Ce drame nourrit le mouvement démocratique qui triomphe en 1987.",
    },
    {
      id: 'chaebols',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les chaebols',
      body:
        "L'économie sud-coréenne repose sur de grands groupes familiaux, les chaebols, comme Samsung, Hyundai ou LG. La Corée du Sud est aujourd'hui l'un des premiers producteurs mondiaux de puces électroniques, de navires et d'écrans.",
    },
    {
      id: 'hallyu',
      tier: 2,
      type: 'text',
      kicker: 'Culture',
      title: 'La « vague coréenne »',
      body:
        "Depuis les années 2000, la culture sud-coréenne conquiert le monde : séries, cinéma, K-pop. En 2020, le film « Parasite » de Bong Joon-ho est le premier film non anglophone à remporter l'Oscar du meilleur film.",
    },
    {
      id: 'sommets',
      tier: 2,
      type: 'dates',
      kicker: 'Monde',
      title: 'Des tentatives de rapprochement',
      items: [
        { year: 1991, label: "Les deux Corées entrent à l'ONU" },
        { year: 2000, label: 'Premier sommet entre les dirigeants du Nord et du Sud à Pyongyang' },
        { year: 2018, label: 'Nouvelles rencontres au sommet, sans accord de paix durable' },
      ],
    },
  ],

  quiz: [
    { id: 'joseon', type: 'mcq', prompt: 'Quelle dynastie règne sur la Corée au début du XIXe siècle ?', options: ['Joseon', 'Goryeo', 'Qing', 'Meiji'], answer: 0 },
    { id: 'annexion', type: 'mcq', prompt: 'Quel pays annexe la Corée en 1910 ?', options: ['Le Japon', 'La Chine', 'La Russie', 'Les États-Unis'], answer: 0 },
    { id: 'mars', type: 'tf', prompt: 'Le mouvement du 1er mars 1919 réclame l’indépendance de la Corée.', answer: true },
    { id: 'parallele', type: 'mcq', prompt: 'Le long de quel parallèle la Corée est-elle partagée en 1945 ?', options: ['Le 38e parallèle', 'Le 17e parallèle', "L'équateur", 'Le 49e parallèle'], answer: 0 },
    { id: 'occupants', type: 'mcq', prompt: 'Qui occupe le nord de la Corée en 1945 ?', options: ["L'URSS", 'Les États-Unis', 'Le Japon', 'Le Royaume-Uni'], answer: 0 },
    { id: 'capitales', type: 'mcq', prompt: 'Quelle est la capitale de la Corée du Nord ?', options: ['Pyongyang', 'Séoul', 'Busan', 'Panmunjom'], answer: 0 },
    { id: 'debut', type: 'mcq', prompt: 'En quelle année commence la guerre de Corée ?', options: ['1950', '1945', '1953', '1948'], answer: 0 },
    { id: 'chine', type: 'mcq', prompt: 'Quel pays envoie des troupes aider la Corée du Nord pendant la guerre ?', options: ['La Chine', 'Le Japon', 'La France', 'Le Royaume-Uni'], answer: 0 },
    { id: 'onu', type: 'mcq', prompt: 'Sous quel drapeau combattent les troupes qui défendent la Corée du Sud ?', options: ["Celui de l'ONU", "Celui de l'OTAN", "Celui de l'URSS", 'Celui de la Société des Nations'], answer: 0 },
    { id: 'paix', type: 'tf', prompt: 'Un traité de paix a mis fin à la guerre de Corée en 1953.', answer: false, explanation: "Seul un armistice a été signé ; aucun traité de paix n'a jamais suivi." },
    { id: 'kim', type: 'mcq', prompt: 'Qui fonde le régime de la Corée du Nord ?', options: ['Kim Il-sung', 'Kim Jong-un', 'Park Chung-hee', 'Mao Zedong'], answer: 0 },
    { id: 'juche', type: 'mcq', prompt: "Comment s'appelle l'idéologie officielle de la Corée du Nord ?", options: ['Le Juche', 'Le Pancasila', 'Le Bushido', 'Le maoïsme'], answer: 0 },
    { id: 'park', type: 'mcq', prompt: 'Comment Park Chung-hee arrive-t-il au pouvoir en 1961 ?', options: ["Par un coup d'État", 'Par une élection libre', 'Par héritage', "Nommé par l'ONU"], answer: 0 },
    { id: 'demo', type: 'mcq', prompt: 'En quelle année la Corée du Sud devient-elle une démocratie ?', options: ['1987', '1953', '1961', '2000'], answer: 0 },
    { id: 'jo', type: 'mcq', prompt: 'Quelle ville accueille les Jeux olympiques de 1988 ?', options: ['Séoul', 'Tokyo', 'Pékin', 'Pyongyang'], answer: 0 },
    { id: 'samsung', type: 'mcq', prompt: 'Comment appelle-t-on les grands groupes familiaux sud-coréens comme Samsung ?', options: ['Les chaebols', 'Les zaibatsu', 'Les haciendas', 'Les kolkhozes'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Annexion par le Japon', 'Mouvement du 1er mars', 'Partition au 38e parallèle', 'Armistice de Panmunjom', 'Jeux olympiques de Séoul'] },
  ],

  recap: [
    'Colonie japonaise de 1910 à 1945',
    '1945 : partage au 38e parallèle ; deux États en 1948',
    'Guerre de Corée (1950-1953) : armistice, mais pas de paix',
    'Nord fermé de la dynastie Kim ; Sud riche et démocratique depuis 1987',
  ],
}
