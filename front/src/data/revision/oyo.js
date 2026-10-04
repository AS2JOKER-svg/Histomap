/** Chapitre rédigé : Empire d'Oyo (XVIe – XVIIIe siècle). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'yoruba',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un royaume yoruba de la savane',
      body:
        "Oyo est l'un des royaumes du peuple yoruba, dans l'actuel Nigeria. Selon la tradition, il est fondé par Oranyan, un prince venu d'Ife, la ville sainte des Yoruba. Sa capitale, Oyo-Ile, se trouve dans la savane, au nord de la forêt.",
      highlight: { value: 'Oyo-Ile', label: 'capitale, dans la savane' },
    },
    {
      id: 'exil',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: "L'exil et le retour",
      body:
        "Au début du XVIe siècle, les Nupe, un peuple voisin du nord, prennent et pillent Oyo-Ile. Les rois s'installent pendant plusieurs règnes à Igboho. Ils reconstruisent leur armée et reviennent finalement dans leur capitale, vers la fin du XVIe siècle.",
    },
    {
      id: 'cavalerie',
      tier: 1,
      type: 'text',
      kicker: 'Guerre',
      title: 'La force des cavaliers',
      body:
        "Oyo achète des chevaux aux peuples du nord et bâtit une puissante cavalerie, qui domine les plaines de la savane. Mais dans la forêt, les chevaux meurent des maladies transmises par la mouche tsé-tsé : l'empire s'étend donc surtout dans les zones découvertes.",
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: "L'empire à son apogée",
      years: [1600, 1700, 1783],
      caption: "Au XVIIIe siècle, Oyo domine une grande partie du pays yoruba et reçoit le tribut de royaumes voisins, jusqu'à la côte.",
    },
    {
      id: 'alaafin',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: "L'alaafin et l'Oyo Mesi",
      body:
        "Le roi porte le titre d'alaafin, « le maître du palais ». Il est très puissant, mais il est surveillé par l'Oyo Mesi, un conseil de sept grands chefs. Si le conseil juge le roi indigne, il peut lui envoyer une calebasse vide ou des œufs de perroquet : le roi doit alors se donner la mort.",
    },
    {
      id: 'shango',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Shango, dieu de la foudre',
      body:
        "Les Yoruba vénèrent de nombreuses divinités, les orisha. Selon la tradition, Shango, dieu de la foudre et du tonnerre, aurait été un ancien alaafin d'Oyo. Son culte renforce le prestige des rois et s'est diffusé jusqu'aux Amériques, au Brésil et à Cuba.",
    },
    {
      id: 'dahomey',
      tier: 1,
      type: 'war',
      nom: 'Invasions du Dahomey',
      annee: 1726,
      adversaires: ['Royaume du Dahomey (roi Agadja)'],
      allies: ["Cavalerie d'Oyo"],
      vainqueur: "L'Empire d'Oyo",
      consequences: "Après plusieurs campagnes entre 1726 et 1730, le Dahomey doit payer un tribut annuel à Oyo. Un accord de 1748 confirme cette soumission, qui dure jusqu'au début du XIXe siècle.",
    },
    {
      id: 'traite',
      tier: 1,
      type: 'text',
      kicker: 'Monde',
      title: 'Oyo et la traite atlantique',
      body:
        "Au XVIIIe siècle, Oyo contrôle des routes vers les ports de la côte, comme Porto-Novo et Badagry. Il y vend des captifs, souvent des prisonniers de guerre, aux négriers européens, en échange de tissus, de cauris et d'autres marchandises.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: "Grandeur et chute d'Oyo",
      items: [
        { year: 1730, label: 'Vers 1730 : le Dahomey devient tributaire' },
        { year: 1754, label: 'Le bashorun Gaa prend le contrôle du pouvoir' },
        { year: 1774, label: "L'alaafin Abiodun renverse Gaa" },
        { year: 1817, label: 'Révolte du chef militaire Afonja à Ilorin' },
        { year: 1835, label: "Vers 1835 : abandon d'Oyo-Ile" },
      ],
    },

    // ── Niveau 2 ──
    {
      id: 'gaa',
      tier: 2,
      type: 'person',
      nom: 'Gaa',
      role: "Bashorun (chef de l'Oyo Mesi)",
      dates: 'mort en 1774',
      description: "Chef du conseil à partir de 1754, il détourne la règle de la calebasse pour forcer plusieurs alaafin à se suicider et gouverner à leur place. En 1774, l'alaafin Abiodun le renverse et le fait exécuter.",
    },
    {
      id: 'abiodun',
      tier: 2,
      type: 'person',
      nom: 'Abiodun',
      role: 'Alaafin',
      dates: 'règne vers 1770 – 1789',
      description: "Après avoir éliminé Gaa, il rétablit l'autorité royale. Son règne est une période de paix et de prospérité commerciale, mais il néglige l'armée, ce qui affaiblit l'empire.",
    },
    {
      id: 'contre-pouvoirs',
      tier: 2,
      type: 'text',
      kicker: 'Droits',
      title: 'Un équilibre des pouvoirs',
      body:
        "Le pouvoir est partagé : l'alaafin, l'Oyo Mesi, et la société secrète Ogboni, liée au culte de la Terre, qui sert d'arbitre. Le chef de l'armée, l'are-ona-kakanfo, devait selon la tradition vaincre ou mourir.",
    },
    {
      id: 'fin',
      tier: 2,
      type: 'text',
      kicker: 'Fin',
      title: "L'effondrement",
      body:
        "Après la révolte d'Afonja (1817), la ville d'Ilorin passe sous le contrôle de musulmans liés au califat de Sokoto. Vers 1835, Oyo-Ile est abandonnée. Un nouvel Oyo est fondé plus au sud, où réside toujours un alaafin aujourd'hui.",
    },
    {
      id: 'heritage',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une culture qui a traversé l’océan',
      body:
        "Beaucoup de Yoruba ont été déportés vers les Amériques. Leur religion a donné naissance au candomblé au Brésil et à la santería à Cuba, où l'on honore encore les orisha comme Shango ou Yemanja.",
    },
  ],

  quiz: [
    { id: 'peuple', type: 'mcq', prompt: "Quel peuple fonde l'Empire d'Oyo ?", options: ['Les Yoruba', 'Les Ashanti', 'Les Shona', 'Les Fon'], answer: 0 },
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvait Oyo ?', options: ['Le Nigeria', 'Le Ghana', "L'Angola", 'Le Mali'], answer: 0 },
    { id: 'titre', type: 'mcq', prompt: "Quel est le titre du roi d'Oyo ?", options: ["L'alaafin", "L'asantehene", 'Le manikongo', 'Le mansa'], answer: 0 },
    { id: 'ife', type: 'mcq', prompt: 'De quelle ville sainte viendrait le fondateur légendaire d’Oyo ?', options: ['Ife', 'Tombouctou', 'Kumasi', 'Abomey'], answer: 0 },
    { id: 'nupe', type: 'mcq', prompt: 'Quel peuple pille Oyo-Ile au début du XVIe siècle ?', options: ['Les Nupe', 'Les Portugais', 'Les Marocains', 'Les Ashanti'], answer: 0 },
    { id: 'cheval', type: 'mcq', prompt: "Sur quelle arme repose la puissance militaire d'Oyo ?", options: ['La cavalerie', 'La flotte de guerre', 'Les éléphants', 'Les canons'], answer: 0 },
    { id: 'tsetse', type: 'tf', prompt: 'Les chevaux résistent bien dans la forêt grâce à l’absence de mouches tsé-tsé.', answer: false, explanation: 'La mouche tsé-tsé transmet des maladies mortelles aux chevaux : la cavalerie est efficace surtout dans la savane.' },
    { id: 'conseil', type: 'mcq', prompt: "Comment s'appelle le conseil des sept chefs qui surveille le roi ?", options: ["L'Oyo Mesi", 'Le Sénat', "L'Asantemanhyiamu", 'Le Divan'], answer: 0 },
    { id: 'calebasse', type: 'mcq', prompt: 'Que reçoit un alaafin jugé indigne ?', options: ['Une calebasse vide ou des œufs de perroquet', 'Une couronne', 'Un cheval blanc', 'Un sabre brisé'], answer: 0 },
    { id: 'shango', type: 'mcq', prompt: 'Shango est le dieu…', options: ['de la foudre', 'de la mer', 'des récoltes', 'de la forge'], answer: 0 },
    { id: 'dahomey', type: 'mcq', prompt: "Quel royaume devient tributaire d'Oyo au XVIIIe siècle ?", options: ['Le Dahomey', 'Le Kongo', 'Le Mali', "L'Éthiopie"], answer: 0 },
    { id: 'gaa', type: 'mcq', prompt: 'Quel bashorun force plusieurs alaafin au suicide ?', options: ['Gaa', 'Afonja', 'Abiodun', 'Agadja'], answer: 0 },
    { id: 'abiodun', type: 'mcq', prompt: 'Quel alaafin renverse Gaa en 1774 ?', options: ['Abiodun', 'Orompoto', 'Oranyan', 'Ghézo'], answer: 0 },
    { id: 'ports', type: 'mcq', prompt: 'Par quel port Oyo vend-il des captifs aux Européens ?', options: ['Porto-Novo', 'Zanzibar', 'Alexandrie', 'Mombasa'], answer: 0 },
    { id: 'ogboni', type: 'tf', prompt: "La société Ogboni joue un rôle d'arbitre dans le pouvoir d'Oyo.", answer: true },
    { id: 'abandon', type: 'mcq', prompt: 'Vers quelle date Oyo-Ile est-elle abandonnée ?', options: ['Vers 1835', 'Vers 1500', 'Vers 1700', 'Vers 1960'], answer: 0 },
    { id: 'heritage', type: 'mcq', prompt: 'Quelle religion du Brésil est en partie issue des croyances yoruba ?', options: ['Le candomblé', 'Le shintoïsme', "L'hindouisme", 'Le protestantisme'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Pillage d’Oyo-Ile par les Nupe', 'Le Dahomey devient tributaire', 'Abiodun renverse Gaa', 'Révolte d’Afonja'] },
  ],

  recap: [
    'Un royaume yoruba de la savane, capitale Oyo-Ile',
    'Une puissante cavalerie qui domine la région et soumet le Dahomey',
    "L'alaafin, contrôlé par le conseil de l'Oyo Mesi",
    'Révolte d’Afonja (1817), puis abandon d’Oyo-Ile vers 1835',
  ],
}
