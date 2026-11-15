/** Chapitre rédigé : Empire durrani (1747 – 1826). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'jirga',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'Un roi élu par les chefs',
      body:
        "En 1747, le conquérant perse Nader Shah est assassiné. Les chefs des tribus pachtounes se réunissent en jirga, une grande assemblée, près de Kandahar. Ils élisent roi l'un des leurs, Ahmad Khan, qui prend le nom de Durrani, « perle des perles ».",
      highlight: { value: '1747', label: 'élection d’Ahmad Shah' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'L’empire durrani',
      years: [1783, 1815],
      caption: 'Comparez : de l’est de l’Iran au Pendjab vers 1783, l’empire perd ensuite ses provinces de l’Inde.',
    },
    {
      id: 'ahmad',
      tier: 1,
      type: 'person',
      nom: 'Ahmad Shah Durrani',
      role: 'Roi fondateur',
      dates: 'vers 1722 – 1772',
      description:
        "Ancien commandant de Nader Shah, il conquiert le Khorassan, le Cachemire et le Pendjab et mène huit expéditions en Inde. Il écrit aussi des poèmes en pachto. Les Afghans l'appellent « Ahmad Shah Baba », le père.",
    },
    {
      id: 'panipat',
      tier: 1,
      type: 'war',
      nom: 'Troisième bataille de Panipat',
      annee: 1761,
      adversaires: ['Confédération marathe'],
      allies: ['Empire durrani', 'Rohillas', 'Nawab d’Awadh'],
      vainqueur: 'Empire durrani',
      consequences:
        "Au nord de Delhi, l'armée afghane écrase la grande armée des Marathes. C'est l'une des batailles les plus meurtrières du XVIIIe siècle ; l'expansion marathe est brisée, ce qui profitera aux Britanniques.",
    },
    {
      id: 'kaboul',
      tier: 1,
      type: 'text',
      kicker: 'Pouvoir',
      title: 'Kaboul capitale',
      body:
        "Le fils d'Ahmad Shah, Timur Shah, transfère la capitale de Kandahar à Kaboul en 1776. Kaboul est restée depuis la capitale de l'Afghanistan.",
    },
    {
      id: 'sikhs',
      tier: 1,
      type: 'text',
      kicker: 'Déclin',
      title: 'L’essor des Sikhs',
      body:
        "Au Pendjab, les Sikhs résistent aux Afghans. En 1762, Ahmad Shah détruit le Temple d'or d'Amritsar, le lieu le plus sacré des Sikhs, qui le reconstruisent ensuite. En 1799, le chef sikh Ranjit Singh prend Lahore et enlève peu à peu aux Afghans le Pendjab, le Cachemire et Peshawar.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'L’empire durrani en dates',
      items: [
        { year: 1747, label: 'Élection d’Ahmad Shah' },
        { year: 1761, label: 'Victoire de Panipat' },
        { year: 1776, label: 'Kaboul devient capitale' },
        { year: 1799, label: 'Les Sikhs prennent Lahore' },
        { year: 1826, label: 'Les Barakzaï au pouvoir' },
      ],
    },
    {
      id: 'tribus',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Un royaume de tribus',
      body:
        "La société afghane est organisée en tribus pachtounes, dirigées par leurs chefs. Le roi doit sans cesse ménager les grandes familles, qui se disputent le pouvoir. Après la mort de Timur Shah, ses nombreux fils se déchirent pour le trône.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Le fondateur de l’Afghanistan',
      body:
        "En 1826, une autre famille pachtoune, les Barakzaï, prend le pouvoir à Kaboul. L'empire est fini, mais Ahmad Shah reste considéré comme le fondateur de l'Afghanistan moderne.",
    },

    // ── Niveau 2 ──
    {
      id: 'koh-i-noor',
      tier: 2,
      type: 'text',
      kicker: 'Trésors',
      title: 'Le voyage du Koh-i-Noor',
      body:
        "Ce diamant célèbre, emporté de Delhi par Nader Shah, passe aux rois durrani. Shah Shuja doit le céder à Ranjit Singh en 1813 ; il finira dans les joyaux de la couronne britannique.",
    },
    {
      id: 'zamburak',
      tier: 2,
      type: 'text',
      kicker: 'Armée',
      title: 'Des canons à dos de chameau',
      body:
        "L'armée afghane utilise des zamburaks, de petits canons fixés sur la selle d'un chameau, qui permettent de tirer tout en restant très mobile.",
    },
    {
      id: 'britanniques',
      tier: 2,
      type: 'text',
      kicker: 'Diplomatie',
      title: 'Premiers contacts avec les Britanniques',
      body:
        "En 1809, le roi Shah Shuja reçoit un envoyé britannique, Mountstuart Elphinstone, et signe un traité d'amitié avec la Compagnie des Indes, inquiète d'une possible avancée française ou russe vers l'Inde.",
    },
    {
      id: 'mausolee',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le mausolée de Kandahar',
      body:
        "Ahmad Shah repose à Kandahar, dans un mausolée coiffé d'une coupole turquoise, toujours visité par les Afghans.",
    },
    {
      id: 'loya-jirga',
      tier: 2,
      type: 'keyfigure',
      kicker: 'Pouvoir',
      value: 'Jirga',
      label: 'l’assemblée des chefs, institution toujours vivante',
      caption: "La grande assemblée des chefs, la loya jirga, reste une institution importante de la vie politique afghane.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Quel pays actuel l’empire durrani a-t-il fondé ?', options: ['L’Afghanistan', 'L’Iran', 'L’Inde', 'La Turquie'], answer: 0 },
    { id: 'jirga', type: 'mcq', prompt: 'Comment Ahmad Shah devient-il roi en 1747 ?', options: ['Élu par une assemblée de chefs', 'Par héritage de son père', 'Nommé par le sultan ottoman', 'Après un tirage au sort'], answer: 0 },
    { id: 'durrani', type: 'mcq', prompt: 'Que signifie « Durrani » ?', options: ['Perle des perles', 'Lion des montagnes', 'Fils du ciel', 'Roi des rois'], answer: 0 },
    { id: 'peuple', type: 'mcq', prompt: 'Quel peuple domine l’empire durrani ?', options: ['Les Pachtounes', 'Les Arabes', 'Les Mongols', 'Les Kurdes'], answer: 0 },
    { id: 'nader', type: 'mcq', prompt: 'Après l’assassinat de quel conquérant l’empire est-il fondé ?', options: ['Nader Shah', 'Tamerlan', 'Babur', 'Akbar'], answer: 0 },
    { id: 'panipat', type: 'mcq', prompt: 'Qui Ahmad Shah bat-il à Panipat en 1761 ?', options: ['Les Marathes', 'Les Britanniques', 'Les Perses', 'Les Moghols'], answer: 0 },
    { id: 'kaboul', type: 'mcq', prompt: 'Quelle ville devient capitale en 1776 ?', options: ['Kaboul', 'Kandahar', 'Hérat', 'Lahore'], answer: 0 },
    { id: 'sikhs', type: 'mcq', prompt: 'Quel chef sikh prend Lahore en 1799 ?', options: ['Ranjit Singh', 'Shivaji', 'Gandhi', 'Akbar'], answer: 0 },
    { id: 'temple', type: 'tf', prompt: 'Ahmad Shah détruit le Temple d’or d’Amritsar en 1762.', answer: true },
    { id: 'poete', type: 'tf', prompt: 'Ahmad Shah Durrani écrit des poèmes en pachto.', answer: true },
    { id: 'baba', type: 'mcq', prompt: 'Comment les Afghans surnomment-ils Ahmad Shah ?', options: ['Ahmad Shah Baba, le père', 'Ahmad le Terrible', 'Ahmad le Boiteux', 'Ahmad le Saint'], answer: 0 },
    { id: 'diamant', type: 'mcq', prompt: 'Quel célèbre diamant passe aux rois durrani ?', options: ['Le Koh-i-Noor', 'Le Régent', 'Le Hope', 'Le Cullinan'], answer: 0 },
    { id: 'zamburak', type: 'mcq', prompt: 'Que sont les zamburaks ?', options: ['De petits canons à dos de chameau', 'Des épées courbes', 'Des forteresses', 'Des poèmes'], answer: 0 },
    { id: 'britanniques', type: 'mcq', prompt: 'Avec qui Shah Shuja signe-t-il un traité en 1809 ?', options: ['La Compagnie britannique des Indes', 'Napoléon', 'Le tsar de Russie', 'Le sultan ottoman'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Quelle famille prend le pouvoir à Kaboul en 1826 ?', options: ['Les Barakzaï', 'Les Moghols', 'Les Safavides', 'Les Timourides'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Élection d’Ahmad Shah', 'Bataille de Panipat', 'Kaboul devient capitale', 'Les Sikhs prennent Lahore'] },
  ],

  recap: [
    '1747 : une jirga élit Ahmad Shah Durrani, roi des Afghans',
    'Conquêtes de l’est de l’Iran au Pendjab ; Panipat (1761)',
    '1776 : Kaboul capitale ; les Sikhs reprennent le Pendjab',
    '1826 : fin de la dynastie ; Ahmad Shah, père de l’Afghanistan',
  ],
}
