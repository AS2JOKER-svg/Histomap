/** Chapitre rédigé : Peuples ibères (≈ 600 – 19 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'peuples',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Les peuples ibères',
      body:
        "Les Grecs appellent « Ibères » les peuples qui vivent sur les côtes est et sud de l'Espagne actuelle, de la Catalogne à l'Andalousie. Ils ne forment pas un État unique mais de nombreuses tribus (Ilergètes, Indicètes, Edetans…). À l'intérieur des terres vivent d'autres peuples, comme les Celtibères et les Lusitaniens.",
      highlight: { value: '≈ VIe siècle av. J.-C.', label: 'épanouissement de la culture ibère' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'La péninsule Ibérique',
      years: [-700],
      caption: "Repérez la péninsule Ibérique : les Ibères occupent surtout la façade méditerranéenne, tournée vers les marchands phéniciens et grecs.",
    },
    {
      id: 'contacts',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Au contact des Phéniciens et des Grecs',
      body:
        "Les Phéniciens fondent Gadir (Cadix) puis d'autres comptoirs au sud ; les Grecs de Marseille fondent Emporion (Ampurias) vers 575 av. J.-C. Les Ibères leur vendent argent, cuivre et produits agricoles et leur empruntent l'écriture, la monnaie et le tour de potier.",
    },
    {
      id: 'ecriture',
      tier: 1,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Une langue encore mystérieuse',
      body:
        "Les Ibères écrivent sur des plaques de plomb, des céramiques et des monnaies. On sait lire leur écriture depuis le début du XXe siècle, mais leur langue, qui n'est pas indo-européenne, reste en grande partie incomprise : on lit les mots sans savoir ce qu'ils signifient !",
    },
    {
      id: 'dame',
      tier: 1,
      type: 'text',
      kicker: 'Culture',
      title: 'La Dame d’Elche',
      body:
        "Découvert en 1897 près d'Elche, ce buste de pierre (Ve-IVe siècle av. J.-C.) montre une femme aux bijoux somptueux. Il est aujourd'hui au Musée archéologique national de Madrid. La Dame de Baza, trouvée en 1971, servait d'urne funéraire.",
    },
    {
      id: 'falcata',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'La falcata',
      body:
        "Les forgerons ibères fabriquent une épée courbe redoutable, la falcata, qui permet de frapper de taille avec une grande puissance. Les Ibères sont réputés comme guerriers et servent comme mercenaires dans les armées grecques et carthaginoises.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Fluctuations',
      title: 'Entre Carthage et Rome',
      items: [
        { year: -237, label: 'Hamilcar Barca débarque en Espagne' },
        { year: -219, label: 'Hannibal assiège Sagonte' },
        { year: -218, label: 'Les Romains débarquent à Emporion' },
        { year: -206, label: 'Les Carthaginois sont chassés d’Espagne' },
        { year: -197, label: 'Rome crée deux provinces en Hispanie' },
        { year: -19, label: 'Fin de la conquête romaine de la péninsule' },
      ],
    },
    {
      id: 'sagonte',
      tier: 1,
      type: 'war',
      nom: 'Siège de Sagonte',
      annee: -219,
      adversaires: ['Sagonte, cité ibère alliée de Rome'],
      allies: ['Carthage (Hannibal)'],
      vainqueur: 'Carthage',
      consequences: "Après huit mois de siège, Hannibal prend la ville. Rome, alliée de Sagonte, déclare la guerre : c'est le début de la deuxième guerre punique, qui fait de l'Espagne un champ de bataille.",
    },
    {
      id: 'romanisation',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Deux siècles de conquête',
      body:
        "La conquête romaine de la péninsule dure près de deux siècles. Les Ibères de la côte sont soumis assez tôt et se romanisent : ils adoptent le latin, qui donnera l'espagnol, le catalan et le portugais. Les peuples du Nord (Cantabres, Astures) résistent jusqu'en 19 av. J.-C.",
      highlight: { value: '19 av. J.-C.', label: 'fin des guerres cantabres sous Auguste' },
    },

    // ── Niveau 2 ──
    {
      id: 'indibil',
      tier: 2,
      type: 'person',
      nom: 'Indíbil',
      role: 'Chef des Ilergètes',
      dates: 'mort en 205 av. J.-C.',
      description: "Ce chef ibère de la région de Lérida s'allie tour à tour aux Carthaginois puis aux Romains, avant de se révolter contre Rome avec son frère Mandonius. Il meurt au combat ; son nom reste un symbole de résistance en Catalogne.",
    },
    {
      id: 'oppida',
      tier: 2,
      type: 'text',
      kicker: 'Société',
      title: 'Des villages fortifiés',
      body:
        "Les Ibères vivent dans des villages et des petites villes perchés et entourés de murailles, comme Ullastret en Catalogne. Une aristocratie de guerriers domine des paysans qui cultivent céréales, vigne et olivier.",
    },
    {
      id: 'tombes',
      tier: 2,
      type: 'text',
      kicker: 'Croyances',
      title: 'Des guerriers incinérés',
      body:
        "Les Ibères brûlent leurs morts. Dans les tombes de guerriers, les archéologues trouvent souvent des armes volontairement pliées, peut-être pour qu'elles ne servent plus à personne. Des sanctuaires ont livré des milliers de petites statuettes offertes aux dieux.",
    },
    {
      id: 'numance',
      tier: 2,
      type: 'war',
      nom: 'Siège de Numance',
      annee: -133,
      adversaires: ['Numance, cité des Celtibères'],
      allies: ['République romaine (Scipion Émilien)'],
      vainqueur: 'Rome',
      consequences: "Affamés après un long siège, de nombreux habitants se donnent la mort plutôt que de se rendre. Numance n'est pas une cité ibère mais celtibère : elle montre que tous les peuples de la péninsule ont résisté à Rome.",
    },
  ],

  quiz: [
    { id: 'region', type: 'mcq', prompt: 'Où vivent principalement les Ibères ?', options: ['Sur les côtes est et sud de l’Espagne', 'En Irlande', 'Dans les Balkans', 'En Égypte'], answer: 0 },
    { id: 'etat', type: 'tf', prompt: 'Les Ibères forment un grand royaume unifié.', answer: false, explanation: 'Ils sont divisés en nombreuses tribus indépendantes.' },
    { id: 'emporion', type: 'mcq', prompt: 'Qui fonde Emporion (Ampurias) vers 575 av. J.-C. ?', options: ['Des Grecs de Marseille', 'Des Romains', 'Des Égyptiens', 'Des Vikings'], answer: 0 },
    { id: 'gadir', type: 'mcq', prompt: 'Quel peuple fonde Gadir, l’actuelle Cadix ?', options: ['Les Phéniciens', 'Les Celtes', 'Les Perses', 'Les Hittites'], answer: 0 },
    { id: 'langue', type: 'tf', prompt: "On sait lire l'écriture ibère, mais on ne comprend pas la langue.", answer: true },
    { id: 'plomb', type: 'mcq', prompt: 'Sur quel support trouve-t-on souvent des textes ibères ?', options: ['Des plaques de plomb', 'Des tablettes d’argile', 'Des papyrus', 'Des os de tortue'], answer: 0 },
    { id: 'dame', type: 'mcq', prompt: 'Quel célèbre buste ibère a été découvert en 1897 ?', options: ['La Dame d’Elche', 'La Vénus de Milo', 'La Dame de Brassempouy', 'Le buste de Néfertiti'], answer: 0 },
    { id: 'falcata', type: 'mcq', prompt: 'Comment s’appelle l’épée courbe des Ibères ?', options: ['La falcata', 'Le glaive', 'Le katana', 'La rhomphaia'], answer: 0 },
    { id: 'mercenaires', type: 'tf', prompt: 'Des Ibères combattent comme mercenaires dans les armées carthaginoises.', answer: true },
    { id: 'sagonte', type: 'mcq', prompt: 'Quelle cité ibère assiégée par Hannibal déclenche la deuxième guerre punique ?', options: ['Sagonte', 'Carthagène', 'Numance', 'Cadix'], answer: 0 },
    { id: 'hamilcar', type: 'mcq', prompt: 'Quel général carthaginois débarque en Espagne en 237 av. J.-C. ?', options: ['Hamilcar Barca', 'Scipion', 'Indíbil', 'Hannon'], answer: 0 },
    { id: 'indibil', type: 'mcq', prompt: 'De quel peuple Indíbil est-il le chef ?', options: ['Les Ilergètes', 'Les Lusitaniens', 'Les Cantabres', 'Les Numides'], answer: 0 },
    { id: 'numance', type: 'mcq', prompt: 'Quel général romain prend Numance en 133 av. J.-C. ?', options: ['Scipion Émilien', 'Jules César', 'Auguste', 'Hannibal'], answer: 0 },
    { id: 'celtiberes', type: 'tf', prompt: 'Numance était une cité ibère de la côte méditerranéenne.', answer: false, explanation: 'C’était une cité celtibère de l’intérieur des terres.' },
    { id: 'fin', type: 'mcq', prompt: 'Sous quel empereur la conquête de la péninsule s’achève-t-elle en 19 av. J.-C. ?', options: ['Auguste', 'Claude', 'Trajan', 'Néron'], answer: 0 },
    { id: 'langues', type: 'mcq', prompt: 'De quelle langue viennent l’espagnol, le catalan et le portugais ?', options: ['Du latin', 'De l’ibère', 'Du grec', 'Du phénicien'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation d’Emporion par les Grecs', 'Siège de Sagonte par Hannibal', 'Prise de Numance', 'Fin des guerres cantabres'] },
  ],

  recap: [
    'Des tribus de la côte méditerranéenne de l’Espagne',
    'Commerce avec Phéniciens et Grecs ; une langue encore incomprise',
    'Dame d’Elche, falcata, villages fortifiés',
    'Conquis par Rome de 218 à 19 av. J.-C.',
  ],
}
