/** Chapitre rédigé : Royaume d’Anuradhapura (vers −377 – 1017). */
export default {
  readingTime: 4,
  cards: [
    // ── Niveau 1 ──
    {
      id: 'capitale',
      tier: 1,
      type: 'text',
      kicker: 'Origines',
      title: 'Une capitale pour mille ans',
      body:
        "Selon les chroniques de l'île, le roi Pandukabhaya fait d'Anuradhapura sa capitale au IVe siècle av. J.-C. Elle reste la capitale de Sri Lanka pendant plus de mille ans.",
      highlight: { value: 'plus de 1 000 ans', label: 'comme capitale' },
    },
    {
      id: 'carte',
      tier: 1,
      type: 'map',
      kicker: 'Territoire',
      title: 'Les royaumes de Sri Lanka',
      years: [800],
      caption: 'L’île de Sri Lanka, au sud de l’Inde, vers 800.',
    },
    {
      id: 'bouddhisme',
      tier: 1,
      type: 'text',
      kicker: 'Croyances',
      title: 'L’arrivée du bouddhisme',
      body:
        "Au IIIe siècle av. J.-C., selon la tradition, le moine Mahinda, fils de l'empereur indien Ashoka, convertit le roi Devanampiya Tissa. Le bouddhisme theravada devient la religion du royaume.",
    },
    {
      id: 'bodhi',
      tier: 1,
      type: 'text',
      kicker: 'Lieu sacré',
      title: 'L’arbre sacré',
      body:
        "La sœur de Mahinda aurait apporté une bouture de l'arbre sous lequel le Bouddha a atteint l'Éveil. L'arbre qui en serait issu, le Sri Maha Bodhi, est toujours vénéré à Anuradhapura.",
    },
    {
      id: 'reservoirs',
      tier: 1,
      type: 'text',
      kicker: 'Techniques',
      title: 'Des lacs creusés par l’homme',
      body:
        "Les rois font creuser d'immenses réservoirs, reliés par des canaux, pour irriguer les rizières pendant la saison sèche. Des puits de vanne permettent de régler le débit de l'eau.",
    },
    {
      id: 'stupas',
      tier: 1,
      type: 'text',
      kicker: 'Architecture',
      title: 'Des stupas géants',
      body:
        "Les rois bâtissent en brique d'énormes stupas, des monuments en forme de dôme qui abritent des reliques. Le Jetavanaramaya mesurait environ 120 mètres : l'un des plus hauts édifices du monde antique.",
    },
    {
      id: 'chronologie',
      tier: 1,
      type: 'dates',
      kicker: 'Repères',
      title: 'Anuradhapura en dates',
      items: [
        { year: -377, label: 'Anuradhapura capitale' },
        { year: -250, label: 'Arrivée du bouddhisme' },
        { year: -29, label: 'Le canon pali mis par écrit' },
        { year: 477, label: 'Sigiriya' },
        { year: 1017, label: 'Capture du dernier roi par les Chola' },
      ],
    },
    {
      id: 'canon',
      tier: 1,
      type: 'text',
      kicker: 'Savoirs',
      title: 'Les textes mis par écrit',
      body:
        "Au Ier siècle av. J.-C., selon la tradition, des moines écrivent pour la première fois les enseignements du Bouddha, jusque-là transmis de mémoire. C'est le canon pali, texte de référence du bouddhisme theravada.",
    },
    {
      id: 'chola',
      tier: 1,
      type: 'war',
      nom: 'Conquête chola de Sri Lanka',
      annee: 993,
      adversaires: ['Empire chola (Rajaraja Ier, puis Rajendra Ier)'],
      allies: ['Royaume d’Anuradhapura'],
      vainqueur: 'Empire chola',
      consequences:
        "Les Chola, venus du sud de l'Inde, prennent et pillent Anuradhapura. En 1017, ils capturent le dernier roi, Mahinda V. La capitale de l'île passe à Polonnaruwa.",
    },

    // ── Niveau 2 ──
    {
      id: 'sigiriya',
      tier: 2,
      type: 'text',
      kicker: 'Récit',
      title: 'Le palais du rocher',
      body:
        "Vers 477, le roi Kassapa Ier, qui a tué son père, fait bâtir un palais au sommet du rocher de Sigiriya, presque imprenable. On y voit encore des fresques et une entrée en forme de pattes de lion.",
    },
    {
      id: 'dutugemunu',
      tier: 2,
      type: 'war',
      nom: 'Guerre de Dutugemunu contre Elara',
      annee: -161,
      adversaires: ['Elara, roi venu du sud de l’Inde'],
      allies: ['Dutugemunu'],
      vainqueur: 'Dutugemunu',
      consequences: "Selon la chronique du Mahavamsa, Dutugemunu bat Elara et réunit l'île. La même chronique décrit pourtant Elara comme un roi juste, dont le vainqueur fait honorer le tombeau.",
    },
    {
      id: 'commerce',
      tier: 2,
      type: 'text',
      kicker: 'Économie',
      title: 'Une île au carrefour des mers',
      body:
        "Les ports de l'île commercent avec l'Inde, la Perse, le monde romain et la Chine. On y vend des pierres précieuses, des perles et des épices ; des pièces romaines ont été retrouvées sur l'île.",
    },
    {
      id: 'faxian',
      tier: 2,
      type: 'text',
      kicker: 'Sources',
      title: 'Un pèlerin chinois',
      body:
        "Au début du Ve siècle, le moine chinois Faxian séjourne deux ans sur l'île. Il décrit les monastères d'Anuradhapura, où vivent des milliers de moines.",
    },
    {
      id: 'aujourdhui',
      tier: 2,
      type: 'text',
      kicker: 'Héritage',
      title: 'Le bouddhisme aujourd’hui',
      body:
        "Environ 70 % des Sri-Lankais sont bouddhistes. Depuis Sri Lanka, le bouddhisme theravada s'est diffusé en Birmanie, en Thaïlande, au Laos et au Cambodge.",
    },
  ],

  quiz: [
    { id: 'pays', type: 'mcq', prompt: 'Sur quelle île se trouve le royaume d’Anuradhapura ?', options: ['Sri Lanka', 'Java', 'Madagascar', 'Sumatra'], answer: 0 },
    { id: 'duree', type: 'mcq', prompt: 'Pendant combien de temps environ Anuradhapura est-elle capitale ?', options: ['Plus de mille ans', 'Dix ans', 'Un siècle', 'Cinquante ans'], answer: 0 },
    { id: 'religion', type: 'mcq', prompt: 'Quelle religion devient celle du royaume ?', options: ['Le bouddhisme', 'L’islam', 'Le christianisme', 'Le zoroastrisme'], answer: 0 },
    { id: 'mahinda', type: 'mcq', prompt: 'Selon la tradition, qui apporte le bouddhisme à Sri Lanka ?', options: ['Mahinda, fils d’Ashoka', 'Faxian', 'Alexandre le Grand', 'Marco Polo'], answer: 0 },
    { id: 'ashoka', type: 'mcq', prompt: 'De quel empire indien vient le moine Mahinda ?', options: ['L’empire maurya', 'L’empire moghol', 'L’empire gupta', 'L’empire chola'], answer: 0 },
    { id: 'bodhi', type: 'tf', prompt: 'Un arbre sacré, lié selon la tradition à l’Éveil du Bouddha, est toujours vénéré à Anuradhapura.', answer: true },
    { id: 'reservoirs', type: 'mcq', prompt: 'À quoi servent les grands réservoirs creusés par les rois ?', options: ['À irriguer les rizières', 'À élever des poissons rares', 'À défendre la ville', 'À produire du sel'], answer: 0 },
    { id: 'stupa', type: 'mcq', prompt: 'Qu’est-ce qu’un stupa ?', options: ['Un monument en dôme qui abrite des reliques', 'Une forteresse', 'Un bateau', 'Un réservoir'], answer: 0 },
    { id: 'jetavana', type: 'mcq', prompt: 'Quelle hauteur atteignait environ le stupa Jetavanaramaya ?', options: ['120 mètres', '12 mètres', '1 200 mètres', '30 mètres'], answer: 0 },
    { id: 'canon', type: 'mcq', prompt: 'Que font les moines au Ier siècle av. J.-C., selon la tradition ?', options: ['Ils mettent par écrit les textes bouddhistes', 'Ils inventent le papier', 'Ils fondent un empire', 'Ils partent pour la Chine'], answer: 0 },
    { id: 'sigiriya', type: 'mcq', prompt: 'Quel roi fait bâtir un palais sur le rocher de Sigiriya ?', options: ['Kassapa Ier', 'Dutugemunu', 'Mahasena', 'Pandukabhaya'], answer: 0 },
    { id: 'chola', type: 'mcq', prompt: 'Quel empire du sud de l’Inde prend Anuradhapura en 993 ?', options: ['L’empire chola', 'L’empire moghol', 'Vijayanagara', 'L’empire gupta'], answer: 0 },
    { id: 'polonnaruwa', type: 'mcq', prompt: 'Quelle ville devient la capitale après la chute d’Anuradhapura ?', options: ['Polonnaruwa', 'Colombo', 'Delhi', 'Kandy'], answer: 0 },
    { id: 'faxian', type: 'tf', prompt: 'Le moine chinois Faxian visite Sri Lanka au début du Ve siècle.', answer: true },
    { id: 'theravada', type: 'mcq', prompt: 'Vers quels pays le bouddhisme theravada s’est-il diffusé depuis Sri Lanka ?', options: ['Birmanie, Thaïlande, Laos, Cambodge', 'Japon et Corée', 'Perse et Arabie', 'Égypte et Éthiopie'], answer: 0 },
    { id: 'ordre', type: 'order', prompt: "Remettez dans l'ordre.", items: ['Anuradhapura capitale', 'Arrivée du bouddhisme', 'Sigiriya', 'Capture du dernier roi par les Chola'] },
  ],

  recap: [
    'Anuradhapura, capitale de Sri Lanka pendant plus de mille ans',
    'Le bouddhisme arrive de l’Inde d’Ashoka au IIIe siècle av. J.-C.',
    'Réservoirs d’irrigation, stupas géants, canon pali mis par écrit',
    'Conquise par les Chola (993-1017) ; la capitale passe à Polonnaruwa',
  ],
}
