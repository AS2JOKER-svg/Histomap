/** Chapitre rédigé : Hetmanat cosaque (1648 – 1764). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'cosaques',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Les hommes libres de la steppe',
      body:
        "Depuis le XVe siècle, des paysans fuyant le servage et des aventuriers s'installent dans les steppes du Dniepr, en Ukraine. Ces Cosaques forment des communautés de cavaliers et de soldats qui élisent leurs chefs. Leur centre est la Sitch zaporogue, une forteresse au-delà des rapides du Dniepr.",
    },
    {
      id: 'khmelnytsky',
      tier: 1,
      type: 'person',
      nom: 'Bohdan Khmelnytsky',
      role: 'Hetman des Cosaques',
      dates: 'vers 1595 – 1657',
      description:
        "Officier cosaque, il prend en 1648 la tête d'un immense soulèvement contre la noblesse polonaise. Allié aux Tatars de Crimée, il bat les armées polonaises et fonde un État cosaque, l'Hetmanat.",
    },
    {
      id: 'soulevement',
      tier: 1,
      type: 'war',
      nom: 'Soulèvement de Khmelnytsky',
      annee: 1648,
      adversaires: ['République des Deux Nations (Pologne-Lituanie)'],
      allies: ['Cosaques et paysans', 'Khanat de Crimée (jusqu’en 1651)'],
      vainqueur: 'Aucun vainqueur net',
      consequences:
        "Les Cosaques fondent un État mais ne peuvent l'emporter seuls. Le soulèvement s'accompagne de terribles violences contre les civils : des dizaines de milliers de Juifs sont massacrés, ainsi que des nobles et des prêtres catholiques.",
    },
    {
      id: 'pereiaslav',
      tier: 1,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'L’accord de Pereïaslav',
      body:
        "En 1654, Khmelnytsky place l'Hetmanat sous la protection du tsar de Russie. Pour les Cosaques, c'est une alliance qui garantit leur autonomie ; pour Moscou, c'est une soumission. Ukrainiens et Russes en discutent encore le sens.",
      highlight: { value: '1654', label: 'accord de Pereïaslav' },
    },
    {
      id: 'ruine',
      tier: 1,
      type: 'text',
      kicker: 'Crise',
      title: 'La Ruine',
      body:
        "Après la mort de Khmelnytsky, des hetmans rivaux, soutenus par la Pologne, la Russie ou les Ottomans, se déchirent. Le pays est dévasté. En 1667, l'Ukraine est partagée le long du Dniepr : la rive gauche et Kiev reviennent à la Russie.",
    },
    {
      id: 'mazepa',
      tier: 1,
      type: 'person',
      nom: 'Ivan Mazepa',
      role: 'Hetman des Cosaques',
      dates: '1639 – 1709',
      description:
        "Hetman pendant plus de vingt ans, d'abord allié fidèle de Pierre le Grand, il se rallie en 1708 au roi de Suède Charles XII, espérant libérer l'Hetmanat. Vaincu avec lui à Poltava en 1709, il meurt en exil.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Un siècle d’Hetmanat',
      items: [
        { year: 1648, label: 'Soulèvement de Khmelnytsky' },
        { year: 1654, label: 'Accord de Pereïaslav' },
        { year: 1667, label: 'Partage de l’Ukraine' },
        { year: 1709, label: 'Défaite de Mazepa à Poltava' },
        { year: 1764, label: 'Suppression de l’Hetmanat' },
      ],
    },
    {
      id: 'rada',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Des chefs élus',
      body:
        "Les Cosaques élisent leur hetman et leurs officiers lors d'assemblées, les radas. Peu à peu, les officiers cosaques deviennent de grands propriétaires, une sorte de noblesse, tandis que les paysans retombent dans la dépendance.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Absorbé par l’empire russe',
      body:
        "Après Poltava, Saint-Pétersbourg contrôle de plus en plus l'Hetmanat. En 1764, Catherine II supprime la charge d'hetman ; en 1775, ses troupes détruisent la Sitch zaporogue.",
    },

    // ── Niveau 2 ──
    {
      id: 'orlyk',
      tier: 2,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Une constitution en exil',
      body:
        "En 1710, Pylyp Orlyk, successeur de Mazepa réfugié dans l'Empire ottoman, rédige un texte qui limite les pouvoirs de l'hetman et prévoit des assemblées régulières des Cosaques. Il n'a jamais été appliqué.",
    },
    {
      id: 'academie',
      tier: 2,
      type: 'text',
      kicker: 'Savoirs',
      title: 'L’Académie de Kiev',
      body:
        "Fondée par le métropolite Pierre Mohyla, l'Académie de Kiev est alors le principal établissement d'enseignement supérieur du monde orthodoxe. Les hetmans, comme Mazepa, la soutiennent.",
    },
    {
      id: 'baroque',
      tier: 2,
      type: 'text',
      kicker: 'Arts',
      title: 'Le baroque cosaque',
      body:
        "Mazepa et les officiers cosaques font construire de nombreuses églises aux coupoles en forme de poire, mêlant traditions orthodoxes et baroque européen : on parle de « baroque cosaque ».",
    },
    {
      id: 'lettre',
      tier: 2,
      type: 'text',
      kicker: 'Légende',
      title: 'La lettre au sultan',
      body:
        "Une légende raconte que les Cosaques zaporogues auraient répondu au sultan ottoman par une lettre pleine d'insultes. Le peintre Ilia Répine en a tiré un tableau célèbre, où l'on voit les Cosaques éclater de rire en l'écrivant.",
    },
    {
      id: 'nom',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Mots',
      value: 'Cosaque',
      label: 'un mot d’origine turque',
      caption: "Le mot « cosaque » vient d'un mot turc qui signifie « homme libre » ou « vagabond ».",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouve l’Hetmanat cosaque ?', options: ['L’Ukraine', 'La Pologne', 'La Turquie', 'La Hongrie'], answer: 0 },
    { id: 'fleuve', type: 'mcq', prompt: 'Le long de quel fleuve vivent les Cosaques zaporogues ?', options: ['Le Dniepr', 'La Volga', 'Le Danube', 'Le Rhin'], answer: 0 },
    { id: 'sitch', type: 'mcq', prompt: 'Comment s’appelle la forteresse centrale des Cosaques zaporogues ?', options: ['La Sitch', 'Le Kremlin', 'Le Wawel', 'La Bastille'], answer: 0 },
    { id: 'chef', type: 'mcq', prompt: 'Comment s’appelle le chef élu des Cosaques ?', options: ['L’hetman', 'Le khan', 'Le doge', 'Le tsar'], answer: 0 },
    { id: 'khmelnytsky', type: 'mcq', prompt: 'Qui mène le soulèvement de 1648 ?', options: ['Bohdan Khmelnytsky', 'Ivan Mazepa', 'Ermak', 'Pougatchev'], answer: 0 },
    { id: 'contre', type: 'mcq', prompt: 'Contre quel État les Cosaques se soulèvent-ils en 1648 ?', options: ['La Pologne-Lituanie', 'La Russie', 'L’Empire ottoman', 'La Suède'], answer: 0 },
    { id: 'victimes', type: 'tf', prompt: 'Le soulèvement de 1648 s’accompagne de massacres de très nombreux Juifs.', answer: true },
    { id: 'pereiaslav', type: 'mcq', prompt: 'Sous la protection de quel souverain l’Hetmanat se place-t-il en 1654 ?', options: ['Le tsar de Russie', 'Le roi de Pologne', 'Le sultan ottoman', 'Le roi de Suède'], answer: 0 },
    { id: 'partage', type: 'mcq', prompt: 'Le long de quel fleuve l’Ukraine est-elle partagée en 1667 ?', options: ['Le Dniepr', 'La Vistule', 'Le Don', 'L’Oural'], answer: 0 },
    { id: 'mazepa', type: 'mcq', prompt: 'À quel roi l’hetman Mazepa s’allie-t-il en 1708 ?', options: ['Charles XII de Suède', 'Louis XIV', 'Jean Sobieski', 'Frédéric II'], answer: 0 },
    { id: 'poltava', type: 'mcq', prompt: 'Où Mazepa est-il vaincu en 1709 ?', options: ['À Poltava', 'À Koulikovo', 'À Vienne', 'À Narva'], answer: 0 },
    { id: 'orlyk', type: 'mcq', prompt: 'Qui rédige en exil une constitution en 1710 ?', options: ['Pylyp Orlyk', 'Bohdan Khmelnytsky', 'Pierre le Grand', 'Voltaire'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Qui supprime la charge d’hetman en 1764 ?', options: ['Catherine II', 'Pierre le Grand', 'Ivan le Terrible', 'Napoléon'], answer: 0 },
    { id: 'radas', type: 'tf', prompt: 'Les Cosaques élisent leurs chefs lors d’assemblées.', answer: true },
    { id: 'repine', type: 'mcq', prompt: 'Quel peintre représente les Cosaques écrivant une lettre au sultan ?', options: ['Ilia Répine', 'Andreï Roublev', 'Rembrandt', 'Picasso'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Soulèvement de Khmelnytsky', 'Accord de Pereïaslav', 'Bataille de Poltava', 'Suppression de l’Hetmanat'] },
  ],

  recap: [
    'Les Cosaques, communautés libres du Dniepr, élisent leurs chefs',
    '1648 : soulèvement de Khmelnytsky contre la Pologne, avec des massacres de civils',
    '1654 : protection du tsar ; 1667 : partage de l’Ukraine',
    'Mazepa vaincu à Poltava (1709) ; Hetmanat supprimé en 1764',
  ],
}
