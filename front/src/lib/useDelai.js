import { useCallback, useRef } from 'react'

const maintenant = () => (typeof performance !== 'undefined' ? performance.now() : Date.now())

/**
 * Verrou anti double toucher (sprint 26) : renvoie `pret()`, vrai une fois `ms` millisecondes écoulées
 * depuis l'affichage du composant. Le 2e toucher d'un double toucher, qui tombe sur l'écran suivant
 * (nouvelle question, mi-temps…), est ainsi ignoré.
 */
export default function useDelai(ms) {
  const debut = useRef(null)
  if (debut.current === null) debut.current = maintenant()
  return useCallback(() => maintenant() - debut.current >= ms, [ms])
}
