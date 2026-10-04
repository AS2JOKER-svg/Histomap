/** Chapitre rédigé : Olmèques (≈ 1200 – 400 av. J.-C.). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'origines',
      tier: 1,
      type: 'text',
      kicker: 'Création',
      title: 'La première grande civilisation du Mexique',
      body:
        "Vers 1200 av. J.-C., sur la côte du golfe du Mexique, naît la civilisation olmèque. C'est l'une des plus anciennes d'Amérique. On ignore comment ces gens s'appelaient eux-mêmes : le nom « Olmèques » leur a été donné bien plus tard, d'après un mot aztèque qui signifie « gens du pays du caoutchouc ».",
      highlight: { value: '≈ 1200 av. J.-C.', label: 'essor de San Lorenzo' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Le pays olmèque',
      years: [-1000, -700, -500],
      caption: "Un territoire de plaines chaudes, humides et marécageuses, traversées de rivières, dans les actuels États de Veracruz et de Tabasco.",
    },
    {
      id: 'centres',
      tier: 1,
      type: 'dates',
      kicker: 'Durée',
      title: 'Deux grandes capitales',
      items: [
        { year: -1200, label: 'Vers 1200 av. J.-C. : essor de San Lorenzo' },
        { year: -900, label: 'Vers 900 av. J.-C. : déclin de San Lorenzo, essor de La Venta' },
        { year: -400, label: 'Vers 400 av. J.-C. : abandon de La Venta' },
      ],
    },
    {
      id: 'tetes',
      tier: 1,
      type: 'keyfigure',
      kicker: 'Culture',
      value: '17',
      label: 'têtes colossales découvertes à ce jour',
      caption: "Sculptées dans des blocs de basalte de plusieurs tonnes, hautes de 1,5 à plus de 3 m, elles représentent sans doute des souverains. La pierre venait de montagnes situées à des dizaines de kilomètres.",
    },
    {
      id: 'transport',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Sans roue ni animal de trait',
      body:
        "Les Olmèques ne connaissent ni la roue pour le transport ni les animaux de trait. Pour déplacer des blocs de basalte de plusieurs tonnes, ils ont sans doute utilisé la force humaine et des radeaux sur les rivières. On ignore encore leur technique exacte.",
    },
    {
      id: 'jaguar',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'Le culte du jaguar',
      body:
        "Le jaguar, grand félin de la forêt, occupe une place centrale dans l'art olmèque. Les sculpteurs représentent souvent des êtres mi-humains, mi-jaguars, à la bouche tombante. Les souverains jouaient probablement un rôle religieux, entre les hommes et les dieux.",
    },
    {
      id: 'caoutchouc',
      tier: 1,
      type: 'text',
      kicker: 'Découvertes',
      title: 'Les balles de caoutchouc',
      body:
        "Les habitants de la région savent transformer la sève de l'hévéa en caoutchouc. Sur le site d'El Manatí, on a retrouvé parmi les plus anciennes balles de caoutchouc connues. Elles servaient sans doute au jeu de balle, un rituel pratiqué ensuite dans toute la Mésoamérique.",
    },
    {
      id: 'jade',
      tier: 1,
      type: 'text',
      kicker: 'Société',
      title: 'Le jade, pierre précieuse',
      body:
        "Les Olmèques font venir de loin des matières précieuses : jade vert, obsidienne pour les lames, minerais de fer polis pour faire des miroirs. Ils sculptent le jade en masques, en figurines et en haches cérémonielles, qu'ils enterrent parfois en offrande.",
    },
    {
      id: 'fin',
      tier: 1,
      type: 'text',
      kicker: 'Fin',
      title: 'Une disparition mystérieuse',
      body:
        "Vers 400 av. J.-C., La Venta est abandonnée et la civilisation olmèque s'efface. Les causes restent inconnues : changements du cours des rivières, éruptions volcaniques, troubles politiques ? Les chercheurs en débattent encore.",
      highlight: { value: '≈ 400 av. J.-C.', label: 'abandon de La Venta' },
    },

    // ── Niveau 2 ──
    {
      id: 'la-venta',
      tier: 2,
      type: 'text',
      kicker: 'Apogée',
      title: 'La Venta, centre cérémoniel',
      body:
        "Sur une île au milieu des marais, La Venta possède une grande pyramide de terre d'environ 30 m de haut, l'une des plus anciennes de Mésoamérique. Sous ses places, les archéologues ont trouvé des mosaïques de pierre verte et des offrandes enterrées.",
    },
    {
      id: 'stirling',
      tier: 2,
      type: 'person',
      nom: 'Matthew Stirling',
      role: 'Archéologue américain',
      dates: '1896 – 1975',
      description: "Dans les années 1930-1940, il fouille Tres Zapotes, La Venta et San Lorenzo. Il dégage plusieurs têtes colossales et soutient que les Olmèques sont plus anciens que les Mayas, ce que confirment ensuite les datations au carbone 14.",
    },
    {
      id: 'ecriture',
      tier: 2,
      type: 'text',
      kicker: 'Connaissance',
      title: 'Une écriture olmèque ?',
      body:
        "En 2006, des chercheurs ont publié l'étude du bloc de Cascajal, une pierre couverte de 62 signes, datée d'environ 900 av. J.-C. Ce pourrait être la plus ancienne écriture d'Amérique, mais l'idée est encore discutée et les signes ne sont pas déchiffrés.",
    },
    {
      id: 'culture-mere',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Une « culture mère » ?',
      body:
        "On a longtemps appelé les Olmèques la « culture mère » de la Mésoamérique. Aujourd'hui, beaucoup de chercheurs pensent qu'ils ont plutôt échangé avec d'autres peuples. Mais le jeu de balle, les pyramides et le prestige du jade se retrouvent ensuite chez les Mayas, les Zapotèques et les Aztèques.",
    },
    {
      id: 'villahermosa',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Des sculptures sauvées',
      body:
        "Dans les années 1950, l'exploitation du pétrole menace le site de La Venta. Ses plus grandes sculptures, dont des têtes colossales, sont transportées dans un parc-musée de la ville voisine de Villahermosa, où on peut encore les admirer.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Dans quel pays actuel se trouvait la civilisation olmèque ?', options: ['Le Mexique', 'Le Pérou', 'Le Brésil', 'Le Chili'], answer: 0 },
    { id: 'cote', type: 'mcq', prompt: 'Près de quelle mer vivaient les Olmèques ?', options: ['Le golfe du Mexique', "L'océan Pacifique", 'La mer des Caraïbes', 'La mer Méditerranée'], answer: 0 },
    { id: 'anciennete', type: 'tf', prompt: "Les Olmèques sont plus anciens que les Aztèques.", answer: true },
    { id: 'nom', type: 'tf', prompt: "« Olmèques » est le nom que ce peuple se donnait lui-même.", answer: false, explanation: 'Ce nom vient bien plus tard d’un mot aztèque ; on ignore comment ils se nommaient.' },
    { id: 'san-lorenzo', type: 'mcq', prompt: 'Quel est le premier grand centre olmèque, vers 1200 av. J.-C. ?', options: ['San Lorenzo', 'Tenochtitlan', 'Teotihuacan', 'Chichén Itzá'], answer: 0 },
    { id: 'la-venta', type: 'mcq', prompt: 'Quel grand centre olmèque prend la relève vers 900 av. J.-C. ?', options: ['La Venta', 'Cuzco', 'Palenque', 'Monte Albán'], answer: 0 },
    { id: 'tetes', type: 'mcq', prompt: 'Quelles sont les sculptures olmèques les plus célèbres ?', options: ['Des têtes colossales', 'Des statues de chevaux', 'Des pyramides en verre', 'Des colonnes grecques'], answer: 0 },
    { id: 'basalte', type: 'mcq', prompt: 'Dans quelle pierre les têtes colossales sont-elles sculptées ?', options: ['Le basalte', 'Le marbre', 'Le granit rose', 'Le calcaire blanc'], answer: 0 },
    { id: 'nombre', type: 'mcq', prompt: 'Combien de têtes colossales olmèques connaît-on à ce jour ?', options: ['17', '3', '120', '1 000'], answer: 0 },
    { id: 'roue', type: 'tf', prompt: 'Les Olmèques utilisaient des chariots à roues tirés par des bœufs.', answer: false, explanation: 'Ils ne connaissaient ni la roue pour le transport ni les animaux de trait.' },
    { id: 'jaguar', type: 'mcq', prompt: "Quel animal occupe une place centrale dans l'art olmèque ?", options: ['Le jaguar', "L'aigle", 'Le lama', 'Le cheval'], answer: 0 },
    { id: 'caoutchouc', type: 'mcq', prompt: 'Avec quelle matière les Olmèques fabriquaient-ils des balles ?', options: ['Le caoutchouc', 'Le cuir', 'Le bois', 'La laine'], answer: 0 },
    { id: 'jeu', type: 'mcq', prompt: 'À quoi servaient sans doute ces balles ?', options: ['Au jeu de balle rituel', 'Au commerce comme monnaie', 'À la guerre', 'À la pêche'], answer: 0 },
    { id: 'jade', type: 'mcq', prompt: 'Quelle pierre verte les Olmèques considèrent-ils comme précieuse ?', options: ['Le jade', "L'ambre", 'Le rubis', 'Le lapis-lazuli'], answer: 0 },
    { id: 'cascajal', type: 'tf', prompt: 'Les signes du bloc de Cascajal ont été entièrement déchiffrés.', answer: false, explanation: "Ils ne sont pas déchiffrés et on discute encore pour savoir s'il s'agit d'une écriture." },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Essor de San Lorenzo', 'Essor de La Venta', 'Abandon de La Venta', 'Fouilles de Matthew Stirling'] },
    { id: 'heritiers', type: 'mcq', prompt: 'Quels peuples reprennent ensuite certaines traditions olmèques ?', options: ['Les Mayas et les Zapotèques', 'Les Incas et les Mapuches', 'Les Vikings et les Celtes', 'Les Iroquois et les Inuits'], answer: 0 },
    { id: 'fin', type: 'mcq', prompt: 'Pourquoi la civilisation olmèque disparaît-elle vers 400 av. J.-C. ?', options: ['On ne le sait pas avec certitude', 'Elle est conquise par les Espagnols', 'Elle est détruite par les Aztèques', 'Elle est conquise par les Incas'], answer: 0 },
  ],

  recap: [
    'Vers 1200 av. J.-C. : naissance des Olmèques sur la côte du golfe du Mexique',
    'San Lorenzo puis La Venta, grands centres religieux et politiques',
    'Têtes colossales, jaguar, jade et balles de caoutchouc',
    'Vers 400 av. J.-C. : disparition encore mystérieuse',
  ],
}
