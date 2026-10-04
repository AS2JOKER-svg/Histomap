/** Chapitre rédigé : Peuples thraces (≈ 1200 av. J.-C. – 46 apr. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'peuple',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un peuple des Balkans',
      body:
        "Les Thraces vivent dans l'est des Balkans : l'actuelle Bulgarie, le nord-est de la Grèce, la Turquie d'Europe et une partie de la Roumanie. Ils parlent une langue indo-européenne mais n'écrivent presque pas : nous les connaissons surtout par les auteurs grecs et par l'archéologie. Homère les cite déjà parmi les alliés de Troie.",
      highlight: { value: 'Balkans', label: 'entre le Danube, la mer Noire et la mer Égée' },
    },
    {
      id: 'herodote',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: '« Invincibles s’ils s’unissaient »',
      body:
        "L'historien grec Hérodote (Ve siècle av. J.-C.) écrit que les Thraces sont le peuple le plus nombreux du monde après les Indiens et qu'ils seraient invincibles s'ils obéissaient à un seul chef. Mais ils sont divisés en dizaines de tribus rivales : Odryses, Gètes, Besses, Triballes…",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les terres thraces',
      years: [-700, -1],
      caption: "Comparez : en 700 av. J.-C., des tribus indépendantes ; au Ier siècle av. J.-C., un royaume client entouré par les provinces romaines.",
    },
    {
      id: 'odryses',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Le royaume des Odryses',
      body:
        "Après le recul des Perses en Europe (479 av. J.-C.), le roi Térès Ier unit plusieurs tribus et fonde le royaume des Odryses, vers 470-460 av. J.-C. Son fils Sitalcès, allié d'Athènes, envahit la Macédoine en 429 av. J.-C. avec une armée immense, selon l'historien Thucydide.",
      highlight: { value: '≈ 460 av. J.-C.', label: 'naissance du royaume des Odryses' },
    },
    {
      id: 'peltastes',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'Les peltastes',
      body:
        "Les guerriers thraces combattent à pied, armés de javelots et d'un bouclier léger en osier en forme de croissant, la pelta. Les Grecs imitent ces fantassins rapides, appelés peltastes. En 390 av. J.-C., des peltastes athéniens harcèlent et battent une troupe d'hoplites spartiates à Léchaion.",
    },
    {
      id: 'or',
      tier: 1,
      type: 'keyfigure',
      kicker: "Âge d'or",
      value: '≈ 6 kg',
      label: "d'or pur dans le trésor de Panagyurichté",
      caption: "Découvert par hasard en 1949 en Bulgarie, ce service de neuf vases en or (fin du IVe ou début du IIIe siècle av. J.-C.) mêle styles grec, perse et thrace.",
    },
    {
      id: 'croyances',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Orphée et l’immortalité',
      body:
        "Pour les Grecs, Orphée, le musicien qui descend aux Enfers, est un Thrace. Selon Hérodote, les Gètes vénèrent Zalmoxis et croient qu'après la mort ils rejoignent ce dieu : ce mépris de la mort impressionne les Grecs. Les Thraces honorent aussi un dieu cavalier, souvent sculpté sur des stèles.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Entre Perses, Macédoniens et Romains',
      items: [
        { year: -513, label: 'Darius Ier traverse la Thrace : domination perse' },
        { year: -460, label: 'Royaume des Odryses (date approximative)' },
        { year: -342, label: 'Philippe II de Macédoine conquiert la Thrace' },
        { year: -279, label: 'Invasion des Celtes dans les Balkans' },
        { year: -73, label: 'Révolte du Thrace Spartacus en Italie' },
        { year: 46, label: "L'empereur Claude crée la province de Thrace" },
      ],
    },
    {
      id: 'spartacus',
      tier: 1,
      type: 'person',
      nom: 'Spartacus',
      role: 'Gladiateur thrace, chef de révolte',
      dates: 'mort en 71 av. J.-C.',
      description: "Ancien soldat thrace devenu esclave et gladiateur à Capoue, il s'évade en 73 av. J.-C. et entraîne des dizaines de milliers d'esclaves. Il bat plusieurs armées romaines avant d'être tué face à Crassus. Sa date de naissance est inconnue.",
    },

    // ── Niveau 2 ──
    {
      id: 'seuthopolis',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Seuthopolis, une capitale engloutie',
      body:
        "Vers 320 av. J.-C., le roi odryse Seuthès III fonde Seuthopolis, une ville à plan régulier inspirée des cités grecques. Fouillée dans les années 1950, elle a ensuite été noyée sous le lac d'un barrage, près de Kazanlak (Bulgarie).",
    },
    {
      id: 'tombeaux',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'La vallée des rois thraces',
      body:
        "Les nobles thraces sont enterrés sous des tumulus. Le tombeau de Kazanlak (IVe-IIIe siècle av. J.-C.), aux fresques remarquables, et celui de Svechtari sont inscrits au patrimoine mondial de l'UNESCO. Les fouilles en Bulgarie révèlent encore régulièrement de nouveaux trésors.",
    },
    {
      id: 'mercenaires',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Des soldats très recherchés',
      body:
        "Les Thraces servent comme mercenaires dans les armées des cités grecques, des Perses puis des rois macédoniens. Alexandre le Grand emmène des troupes thraces jusqu'en Asie. Les rois thraces contrôlent aussi des mines d'or et d'argent convoitées.",
    },
    {
      id: 'macedoine',
      tier: 2,
      type: 'war',
      nom: 'Conquête macédonienne de la Thrace',
      annee: -342,
      adversaires: ['Royaumes et tribus thraces'],
      allies: ['Royaume de Macédoine (Philippe II)'],
      vainqueur: 'Macédoine',
      consequences: "Philippe II soumet la Thrace (342-340 av. J.-C.) et fonde Philippopolis, l'actuelle Plovdiv. Les Thraces doivent payer tribut et fournir des soldats.",
    },
    {
      id: 'rome',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'Une province romaine',
      body:
        "Rome contrôle peu à peu les Balkans, mais laisse régner des rois thraces alliés. En 46 apr. J.-C., l'empereur Claude annexe leur royaume, qui devient la province de Thrace. La culture thrace se fond ensuite dans le monde gréco-romain.",
      highlight: { value: '46 apr. J.-C.', label: 'création de la province romaine de Thrace' },
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région vivent les Thraces ?', options: ['Les Balkans', 'La péninsule Ibérique', 'Les steppes d’Asie centrale', 'L’Afrique du Nord'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel correspond au cœur de la Thrace ?', options: ['La Bulgarie', 'Le Portugal', 'La Pologne', "L'Irlande"], answer: 0 },
    { id: 'sources', type: 'tf', prompt: 'Les Thraces ont laissé de nombreux textes écrits dans leur propre langue.', answer: false, explanation: 'Ils écrivent très peu : on les connaît par les auteurs grecs et par l’archéologie.' },
    { id: 'herodote', type: 'mcq', prompt: 'Selon Hérodote, que manque-t-il aux Thraces pour être invincibles ?', options: ['L’unité sous un seul chef', 'Des chevaux', 'Des navires', 'Des armes en fer'], answer: 0 },
    { id: 'odryses', type: 'mcq', prompt: 'Comment s’appelle le grand royaume thrace fondé au Ve siècle av. J.-C. ?', options: ['Le royaume des Odryses', 'Le royaume des Parthes', 'Le royaume de Pergame', 'Le royaume du Pont'], answer: 0 },
    { id: 'teres', type: 'mcq', prompt: 'Quel roi fonde le royaume des Odryses ?', options: ['Térès Ier', 'Seuthès III', 'Philippe II', 'Darius Ier'], answer: 0 },
    { id: 'pelta', type: 'mcq', prompt: 'Qu’est-ce que la pelta ?', options: ['Un bouclier léger en osier', 'Une épée courbe', 'Un casque en bronze', 'Un char de guerre'], answer: 0 },
    { id: 'peltastes', type: 'tf', prompt: 'Les Grecs ont imité les fantassins légers thraces, appelés peltastes.', answer: true },
    { id: 'tresor', type: 'mcq', prompt: 'Quel célèbre trésor d’or thrace a été découvert en Bulgarie en 1949 ?', options: ['Le trésor de Panagyurichté', 'Le trésor de Toutânkhamon', 'Le trésor de Priam', 'Le trésor de Sutton Hoo'], answer: 0 },
    { id: 'orphee', type: 'mcq', prompt: 'Quel musicien de la mythologie grecque est présenté comme un Thrace ?', options: ['Orphée', 'Ulysse', 'Achille', 'Persée'], answer: 0 },
    { id: 'zalmoxis', type: 'mcq', prompt: 'Quel dieu les Gètes vénèrent-ils selon Hérodote ?', options: ['Zalmoxis', 'Tanit', 'Mithra', 'Odin'], answer: 0 },
    { id: 'seuthopolis', type: 'mcq', prompt: 'Quel roi fonde Seuthopolis ?', options: ['Seuthès III', 'Sitalcès', 'Alexandre le Grand', 'Claude'], answer: 0 },
    { id: 'philippe', type: 'mcq', prompt: 'Quel roi macédonien conquiert la Thrace vers 342-340 av. J.-C. ?', options: ['Philippe II', 'Alexandre le Grand', 'Persée', 'Ptolémée Ier'], answer: 0 },
    { id: 'plovdiv', type: 'mcq', prompt: 'Quelle ville actuelle était Philippopolis ?', options: ['Plovdiv', 'Sofia', 'Athènes', 'Istanbul'], answer: 0 },
    { id: 'spartacus', type: 'mcq', prompt: 'Quel gladiateur d’origine thrace se révolte contre Rome en 73 av. J.-C. ?', options: ['Spartacus', 'Vercingétorix', 'Hannibal', 'Viriathe'], answer: 0 },
    { id: 'claude', type: 'mcq', prompt: 'Quel empereur romain fait de la Thrace une province en 46 apr. J.-C. ?', options: ['Claude', 'Auguste', 'Néron', 'Trajan'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Expédition de Darius Ier en Thrace', 'Conquête de Philippe II', 'Révolte de Spartacus', 'Province romaine de Thrace'] },
  ],

  recap: [
    'Un peuple indo-européen des Balkans, divisé en tribus',
    'Ve siècle av. J.-C. : le royaume des Odryses',
    'Peltastes, orfèvrerie en or et tombeaux sous tumulus',
    '46 apr. J.-C. : la Thrace devient province romaine',
  ],
}
