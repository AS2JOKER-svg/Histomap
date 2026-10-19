import { parseLinks } from '../../lib/links'

/**
 * Texte pouvant contenir des liens vers d'autres fiches : [[id|texte]] (voir lib/links.js).
 * Pour l'instant, les liens s'affichent comme du texte simple ; ils deviendront
 * cliquables avec les pages des fiches liées (personnes, événements, découvertes).
 */
export default function RichText({ text, as: Tag = 'span', className }) {
  if (!text) return null
  if (!text.includes('[[')) return <Tag className={className}>{text}</Tag>
  return (
    <Tag className={className}>
      {parseLinks(text).map((part, i) =>
        part.id === undefined ? part.text : <span key={i} data-ref={part.id}>{part.text ?? part.id}</span>
      )}
    </Tag>
  )
}
