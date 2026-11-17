/**
 * Pictogrammes des mondes (carte du parcours, sprint 30) : dessinés en code (viewBox 24 × 24, trait),
 * aucune image. Point 2 des maquettes, validé le 17/11/2026.
 * Clés = thème du monde dans content/parcours.json (silex, papyrus, enluminure, lapis, neon).
 */
export const PICTOS = {
  biface: 'M12 2C7.5 6.5 6 11.5 7 16c.8 3.6 2.8 6 5 6s4.2-2.4 5-6c1-4.5-.5-9.5-5-14zM10 9l2 3 2-3M9.5 14l2.5 2 2.5-2',
  flamme: 'M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z',
  menhir: 'M9 21l1-14c.3-3 3.7-3 4 0l1 14zM4 21h16M11 10l1 2M12 15l1 1',
  colonne: 'M5 4h14M6 6.5h12M8 6.5v12M12 6.5v12M16 6.5v12M6 18.5h12M4 21h16M5 4c-1.5 0-1.5 2.5 0 2.5M19 4c1.5 0 1.5 2.5 0 2.5',
  amphore: 'M10 3h4M10.5 3v3c-3 1.5-4.5 4.5-4 8 .4 3 2.5 5.5 5.5 7 3-1.5 5.1-4 5.5-7 .5-3.5-1-6.5-4-8V3M8 7.5c-2 0-2.5 3-1 4M16 7.5c2 0 2.5 3 1 4M8 12h8',
  pyramide: 'M2 20h20L12 4zM12 4l3 16M7 12l4 1M5 16l5 1',
  chateau: 'M4 21V8h2v2h2V8h2v2h1V5l1-1 1 1v5h1V8h2v2h2V8h2v13zM10 21v-4a2 2 0 0 1 4 0v4',
  ecu: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM12 3v18M4 11h16',
  caravelle: 'M2 15h20l-3 5H5zM9 15V3M15 15V5M9 4c4 1 4 7 0 9M15 6c3 1 3 5 0 6M9 3l3-1',
  rose: 'M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM5 5l3 3M19 5l-3 3M5 19l3-3M19 19l-3-3',
  usine: 'M3 21V11l5 3v-3l5 3v-3l5 3V4h3v17zM7 18h2M12 18h2',
  ampoule: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.6 1.5 1.5 1.5 2.6V17h4v-.5c0-1.1.8-2 1.5-2.6A6 6 0 0 0 12 3z',
  fusee: 'M12 2c3 2.5 4.5 6 4 11l-4 4-4-4c-.5-5 1-8.5 4-11zM8 13l-3 2 1 4 3-1M16 13l3 2-1 4-3-1M12 8.5v.01',
  livre: 'M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14',
}

/** Pictogrammes de chaque monde : les deux premiers ornent sa porte, tous servent de décor. */
export const PICTOS_MONDE = {
  silex: ['biface', 'flamme', 'menhir'],
  papyrus: ['colonne', 'amphore', 'pyramide'],
  enluminure: ['chateau', 'ecu'],
  lapis: ['caravelle', 'rose'],
  neon: ['usine', 'ampoule', 'fusee'],
}

/** Un pictogramme en SVG (décor : masqué aux lecteurs d'écran). */
export function Picto({ nom, taille = 24, trait = 1.4, className = '', style }) {
  return (
    <svg aria-hidden="true" width={taille} height={taille} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={trait} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d={PICTOS[nom]} />
    </svg>
  )
}
