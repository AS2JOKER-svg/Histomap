/** Chapitre rédigé : Empire wassoulou de Samory (1878 – 1898). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'samory',
      tier: 1,
      type: 'person',
      nom: 'Samory Touré',
      role: 'Fondateur de l’empire wassoulou',
      dates: 'vers 1830 – 1900',
      description:
        "Marchand malinké, il apprend le métier des armes après la capture de sa mère par un chef rival, qu'il sert pour la libérer. Devenu chef de guerre, il unifie de nombreux territoires et fonde un empire vers 1878.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire de Samory',
      years: [1880],
      caption: 'Entre la Guinée et le Mali actuels, l’empire contrôle les sources du Niger.',
    },
    {
      id: 'armee',
      tier: 1,
      type: 'text',
      kicker: 'Armée',
      title: 'Une armée moderne',
      body:
        "Samory crée une armée de soldats permanents, les sofas, organisés en partie sur le modèle européen. Il achète des fusils à répétition en Sierra Leone, une colonie britannique, et ses forgerons copient et réparent les armes.",
    },
    {
      id: 'islam',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’almamy',
      body:
        "En 1884, Samory prend le titre religieux d'almamy, chef des croyants. Il ouvre des écoles coraniques et impose parfois l'islam aux populations conquises, ce qui provoque des révoltes.",
      highlight: { value: '1884', label: 'Samory devient almamy' },
    },
    {
      id: 'france',
      tier: 1,
      type: 'war',
      nom: 'Guerres de Samory contre la France',
      annee: 1882,
      adversaires: ['France'],
      allies: ['Empire wassoulou'],
      vainqueur: 'France',
      consequences:
        "Pendant seize ans, Samory combat et négocie avec les Français, qui veulent conquérir l'Afrique de l'Ouest. Il signe plusieurs traités, que chaque camp interprète à sa façon, avant la reprise des combats.",
    },
    {
      id: 'est',
      tier: 1,
      type: 'text',
      kicker: 'Stratégie',
      title: 'Un empire qui se déplace',
      body:
        "Après la prise de sa capitale, Bissandougou, en 1891, Samory déplace tout son empire vers l'est, dans le nord de la Côte d'Ivoire actuelle. Il pratique la terre brûlée et détruit des villes comme Kong, en 1897.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’empire wassoulou en dates',
      items: [
        { year: 1878, label: 'Fondation de l’empire' },
        { year: 1882, label: 'Premiers combats contre la France' },
        { year: 1884, label: 'Samory almamy' },
        { year: 1891, label: 'Prise de Bissandougou' },
        { year: 1898, label: 'Capture de Samory' },
      ],
    },
    {
      id: 'capture',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'La capture',
      body:
        "Le 29 septembre 1898, une colonne française surprend le camp de Samory, dont les soldats affamés sont dispersés. Capturé, il est exilé au Gabon, où il meurt en 1900. Ses territoires sont intégrés à l'Afrique-Occidentale française.",
    },
    {
      id: 'memoire',
      tier: 1,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une mémoire contrastée',
      body:
        "Samory est célébré en Guinée et au Mali comme un héros de la résistance à la colonisation. Dans d'autres régions, comme le nord de la Côte d'Ivoire, on se souvient surtout des destructions et des razzias de ses guerres.",
    },

    // ── Niveau 2 ──
    {
      id: 'razzias',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Des armes contre des captifs',
      body:
        "Pour acheter chevaux et fusils, Samory vend de l'or, du bétail et des captifs faits lors de ses guerres. Ces razzias ont durement frappé les populations de la région.",
    },
    {
      id: 'forges',
      tier: 2,
      type: 'text',
      kicker: 'Techniques',
      title: 'Les ateliers d’armes',
      body:
        "Samory envoie des forgerons observer les armes dans les postes européens. Dans ses ateliers, ils parviennent à fabriquer des copies de fusils et à produire de la poudre.",
    },
    {
      id: 'gouraud',
      tier: 2,
      type: 'person',
      nom: 'Henri Gouraud',
      role: 'Officier français',
      dates: '1867 – 1946',
      description: "Capitaine, il dirige la colonne qui capture Samory en 1898. Il deviendra un général célèbre de la Première Guerre mondiale.",
    },
    {
      id: 'sekou',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Un héritier revendiqué',
      body:
        "Ahmed Sékou Touré, premier président de la Guinée indépendante en 1958, se présentait comme un descendant de Samory et se réclamait de sa résistance.",
    },
    {
      id: 'griots',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'L’épopée des griots',
      body:
        "Les griots, conteurs et musiciens d'Afrique de l'Ouest, racontent encore aujourd'hui l'épopée de Samory dans les villages de Guinée et du Mali.",
    },
  ],

  quiz: [
    { id: 'fondateur', type: 'mcq', prompt: 'Qui fonde l’empire wassoulou ?', options: ['Samory Touré', 'Usman dan Fodio', 'Chaka', 'Mansa Moussa'], answer: 0 },
    { id: 'region', type: 'mcq', prompt: 'Dans quelle région d’Afrique se trouve l’empire wassoulou ?', options: ['L’Afrique de l’Ouest', 'L’Afrique australe', 'L’Afrique du Nord', 'L’Afrique de l’Est'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'À quel peuple appartient Samory Touré ?', options: ['Les Malinkés', 'Les Zoulous', 'Les Peuls', 'Les Edo'], answer: 0 },
    { id: 'capitale', type: 'mcq', prompt: 'Quelle est la capitale de l’empire ?', options: ['Bissandougou', 'Tombouctou', 'Kano', 'Dakar'], answer: 0 },
    { id: 'sofas', type: 'mcq', prompt: 'Comment s’appellent les soldats permanents de Samory ?', options: ['Les sofas', 'Les amabutho', 'Les janissaires', 'Les mamelouks'], answer: 0 },
    { id: 'fusils', type: 'mcq', prompt: 'Où Samory achète-t-il des fusils modernes ?', options: ['En Sierra Leone', 'Au Japon', 'En Russie', 'Au Brésil'], answer: 0 },
    { id: 'almamy', type: 'mcq', prompt: 'Quel titre religieux Samory prend-il en 1884 ?', options: ['Almamy', 'Pharaon', 'Calife', 'Pape'], answer: 0 },
    { id: 'ennemi', type: 'mcq', prompt: 'Contre quel pays européen Samory combat-il ?', options: ['La France', 'L’Allemagne', 'Le Portugal', 'L’Italie'], answer: 0 },
    { id: 'duree', type: 'mcq', prompt: 'Pendant combien de temps environ Samory résiste-t-il ?', options: ['Seize ans', 'Deux mois', 'Un siècle', 'Deux ans'], answer: 0 },
    { id: 'est', type: 'tf', prompt: 'Samory déplace son empire vers l’est pour échapper aux Français.', answer: true },
    { id: 'kong', type: 'mcq', prompt: 'Quelle ville Samory détruit-il en 1897 ?', options: ['Kong', 'Tombouctou', 'Gao', 'Ségou'], answer: 0 },
    { id: 'capture', type: 'mcq', prompt: 'En quelle année Samory est-il capturé ?', options: ['1898', '1798', '1958', '1848'], answer: 0 },
    { id: 'exil', type: 'mcq', prompt: 'Où Samory meurt-il en exil ?', options: ['Au Gabon', 'En France', 'À Madagascar', 'En Algérie'], answer: 0 },
    { id: 'memoire', type: 'tf', prompt: 'Samory est vu partout comme un héros, sans aucune critique.', answer: false, explanation: 'Dans certaines régions, on se souvient surtout des destructions de ses guerres.' },
    { id: 'sekou', type: 'mcq', prompt: 'Quel président de la Guinée se disait descendant de Samory ?', options: ['Sékou Touré', 'Léopold Sédar Senghor', 'Nelson Mandela', 'Kwame Nkrumah'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Fondation de l’empire', 'Samory almamy', 'Prise de Bissandougou', 'Capture de Samory'] },
  ],

  recap: [
    'Vers 1878, le chef malinké Samory Touré fonde un empire en Afrique de l’Ouest',
    'Une armée moderne de sofas, armée de fusils à répétition',
    'Seize ans de résistance à la conquête française ; déplacement vers l’est',
    'Capturé en 1898 ; héros pour les uns, souvenir de destructions pour d’autres',
  ],
}
