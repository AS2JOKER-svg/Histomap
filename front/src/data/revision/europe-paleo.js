/** Chapitre rédigé : Europe paléolithique (≈ 500 000 – 12 000 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'tautavel',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: "L'Homme de Tautavel",
      body:
        "Dans la grotte de la Caune de l'Arago (Pyrénées-Orientales), on a découvert en 1971 un crâne vieux d'environ 450 000 ans. Ces premiers Européens chassent le cheval, le renne et le bison, et taillent des bifaces.",
      highlight: { value: '≈ 450 000 ans', label: "âge du crâne de Tautavel" },
    },
    {
      id: 'feu',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Découverte',
      value: '≈ 400 000 ans',
      label: 'les premiers foyers maîtrisés en Europe',
      caption: "Le feu réchauffe, éclaire, éloigne les bêtes sauvages et permet de cuire la viande. Autour du foyer, le groupe se rassemble : c'est peut-être là que naissent les récits.",
    },
    {
      id: 'neandertal',
      tier: 1,
      type: 'text',
      kicker: 'Peuplement',
      title: 'Néandertal, le premier Européen',
      body:
        "Néandertal apparaît en Europe il y a plus de 300 000 ans. Trapu et adapté au froid, il fabrique des outils perfectionnés, soigne ses blessés et enterre ses morts. Il disparaît il y a environ 40 000 ans.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le monde des Néandertaliens',
      years: [-123000],
      caption: "Il y a environ 125 000 ans, Néandertal occupe l'Europe et le Proche-Orient, tandis qu'Homo sapiens vit encore en Afrique.",
    },
    {
      id: 'sapiens',
      tier: 1,
      type: 'text',
      kicker: 'Peuplement',
      title: 'Homo sapiens arrive en Europe',
      body:
        "Venus d'Afrique, des Homo sapiens arrivent en Europe il y a environ 45 000 ans. On les a longtemps appelés « hommes de Cro-Magnon », du nom d'un abri de Dordogne où des squelettes ont été découverts en 1868. Ce sont nos ancêtres directs.",
    },
    {
      id: 'art',
      tier: 1,
      type: 'dates',
      kicker: "Âge d'or",
      title: "Les chefs-d'œuvre de l'art des cavernes",
      items: [
        { year: -36000, label: 'Grotte Chauvet (Ardèche) : lions, rhinocéros, chevaux' },
        { year: -29500, label: 'Vénus de Willendorf (Autriche)' },
        { year: -17000, label: 'Grotte de Lascaux (Dordogne)' },
      ],
    },
    {
      id: 'glaciation',
      tier: 1,
      type: 'text',
      kicker: 'Climat',
      title: "La dernière glaciation",
      body:
        "Pendant les périodes les plus froides, d'immenses glaciers couvrent le nord de l'Europe. Le niveau de la mer est si bas qu'on peut marcher de la France à l'Angleterre. Mammouths, rennes et rhinocéros laineux peuplent les steppes.",
      highlight: { value: '- 120 m', label: 'niveau de la mer au plus froid' },
    },
    {
      id: 'outils',
      tier: 1,
      type: 'steps',
      kicker: 'Découvertes',
      title: 'Des outils de plus en plus fins',
      items: [
        { year: -500000, label: 'Le biface, outil à tout faire' },
        { year: -300000, label: 'Les éclats préparés des Néandertaliens' },
        { year: -40000, label: 'Lames, os et bois de renne travaillés par Sapiens' },
        { year: -20000, label: "L'aiguille à chas pour coudre des vêtements" },
      ],
    },
    {
      id: 'chasseurs',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des chasseurs-cueilleurs nomades',
      body:
        "Les hommes du Paléolithique vivent en petits groupes qui suivent le gibier au fil des saisons. Ils ne cultivent pas la terre et n'élèvent pas d'animaux : ils chassent, pêchent et cueillent, et s'abritent sous des tentes de peaux ou à l'entrée des grottes.",
    },

    // ── Niveau 2 ──
    {
      id: 'cohabitation',
      tier: 2,
      type: 'text',
      kicker: 'Peuplement',
      title: 'Quand Néandertal et Sapiens se rencontrent',
      body:
        "Pendant plusieurs milliers d'années, les deux espèces vivent en Europe. Elles se sont parfois mélangées : aujourd'hui encore, les humains non africains portent environ 2 % d'ADN néandertalien.",
      highlight: { value: '≈ 2 %', label: "d'ADN néandertalien chez les non-Africains" },
    },
    {
      id: 'lascaux',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Art',
      value: '≈ 600',
      label: 'peintures dans la grotte de Lascaux',
      caption: "Ainsi que près de 1 500 gravures. La grotte a été découverte en 1940 par des adolescents ; fermée au public pour la protéger, elle est visitée à travers des copies.",
    },
    {
      id: 'chauvet',
      tier: 2,
      type: 'text',
      kicker: 'Art',
      title: 'Chauvet, la plus ancienne',
      body:
        "Découverte en 1994 en Ardèche, la grotte Chauvet abrite des peintures d'environ 36 000 ans : lions, rhinocéros, mammouths, chevaux. Leur maîtrise du mouvement et du relief a bouleversé l'idée d'un art « primitif ».",
    },
    {
      id: 'propulseur',
      tier: 2,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Le propulseur',
      body:
        "Ce bâton à crochet allonge le bras du chasseur et permet de lancer une sagaie beaucoup plus loin et plus fort. Certains propulseurs en bois de renne sont sculptés d'animaux : de véritables œuvres d'art.",
    },
    {
      id: 'fin',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: 'La fin de la glaciation',
      body:
        "Vers 12 000 av. J.-C., le climat se réchauffe : les forêts remplacent la steppe, le renne remonte vers le nord. Les hommes s'adaptent ; quelques millénaires plus tard, l'agriculture venue du Proche-Orient arrive en Europe : c'est le Néolithique.",
    },
  ],

  quiz: [
    { id: 'tautavel', type: 'mcq', prompt: "Dans quelle région de France a-t-on trouvé l'Homme de Tautavel ?", options: ['Pyrénées-Orientales', 'Dordogne', 'Ardèche', 'Bretagne'], answer: 0 },
    { id: 'tautavel-age', type: 'mcq', prompt: "Quel âge a environ le crâne de Tautavel ?", options: ['450 000 ans', '45 000 ans', '4 500 ans', '4,5 millions d’années'], answer: 0 },
    { id: 'feu', type: 'tf', prompt: 'Le feu est maîtrisé en Europe depuis environ 400 000 ans.', answer: true },
    { id: 'neandertal-mort', type: 'mcq', prompt: 'Quand Néandertal disparaît-il ?', options: ['Il y a environ 40 000 ans', 'Il y a 4 000 ans', 'Il y a 400 000 ans', 'Au Moyen Âge'], answer: 0 },
    { id: 'neandertal-morts', type: 'tf', prompt: 'Les Néandertaliens enterraient leurs morts.', answer: true },
    { id: 'sapiens-origine', type: 'mcq', prompt: "D'où viennent les Homo sapiens qui arrivent en Europe ?", options: ["D'Afrique", "D'Amérique", "D'Australie", 'Ils sont nés en Europe'], answer: 0 },
    { id: 'cro-magnon', type: 'mcq', prompt: 'Dans quelle région se trouve l’abri de Cro-Magnon ?', options: ['Dordogne', 'Ardèche', 'Provence', 'Alsace'], answer: 0 },
    { id: 'adn', type: 'mcq', prompt: "Quelle part d'ADN néandertalien portent les humains non africains ?", options: ['Environ 2 %', 'Environ 50 %', 'Aucune', 'Environ 25 %'], answer: 0 },
    { id: 'chauvet', type: 'mcq', prompt: 'Quelle grotte abrite des peintures d’environ 36 000 ans ?', options: ['Chauvet', 'Lascaux', 'Altamira', 'Cosquer'], answer: 0 },
    { id: 'lascaux-date', type: 'mcq', prompt: 'En quelle année la grotte de Lascaux est-elle découverte ?', options: ['1940', '1868', '1994', '1971'], answer: 0 },
    { id: 'art-ordre', type: 'order', prompt: "Remettez dans l'ordre chronologique.", items: ['Homme de Tautavel', 'Grotte Chauvet', 'Grotte de Lascaux', 'Fin de la glaciation'] },
    { id: 'mer', type: 'tf', prompt: "Pendant la dernière glaciation, on pouvait marcher de la France à l'Angleterre.", answer: true },
    { id: 'animaux', type: 'mcq', prompt: 'Quel animal ne vit PAS dans les steppes glaciaires d’Europe ?', options: ['Le dromadaire', 'Le mammouth', 'Le renne', 'Le rhinocéros laineux'], answer: 0 },
    { id: 'propulseur', type: 'mcq', prompt: 'À quoi sert le propulseur ?', options: ['Lancer une sagaie plus loin', 'Allumer le feu', 'Coudre des vêtements', 'Peindre les parois'], answer: 0 },
    { id: 'aiguille', type: 'tf', prompt: "L'aiguille à chas apparaît bien avant Néandertal.", answer: false, explanation: "Elle apparaît il y a environ 20 000 ans, chez Homo sapiens." },
    { id: 'nomades', type: 'mcq', prompt: 'Comment vivent les hommes du Paléolithique ?', options: ['En chasseurs-cueilleurs nomades', 'En agriculteurs sédentaires', 'Dans des villes fortifiées', 'En éleveurs de moutons'], answer: 0 },
    { id: 'neolithique', type: 'mcq', prompt: "Quelle période suit le Paléolithique, avec l'arrivée de l'agriculture ?", options: ['Le Néolithique', "L'Antiquité", "L'âge du fer", 'Le Moyen Âge'], answer: 0 },
  ],

  recap: [
    '≈ 450 000 ans : l’Homme de Tautavel ; feu maîtrisé vers 400 000 ans',
    'Néandertal en Europe, disparu il y a environ 40 000 ans',
    'Homo sapiens arrive vers 45 000 ans : art de Chauvet et Lascaux',
    'Chasseurs-cueilleurs nomades jusqu’à la fin de la glaciation',
  ],
}
