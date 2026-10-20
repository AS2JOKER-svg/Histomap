import { parseLinks } from '../../lib/links'
import { useUI } from '../../store/ui'

/**
 * Texte pouvant contenir des liens vers d'autres fiches : [[id|texte]] (voir lib/links.js).
 * Chaque lien est un mot souligné en pointillé : il ouvre l'aperçu de la fiche (RefSheet).
 */
export default function RichText({ text, as: Tag = 'span', className }) {
  const openSheet = useUI((s) => s.openSheet)
  if (!text) return null
  if (!text.includes('[[')) return <Tag className={className}>{text}</Tag>
  return (
    <Tag className={className}>
      {parseLinks(text).map((part, i) =>
        part.id === undefined ? (
          part.text
        ) : (
          <button key={i} type="button" className="ref-link" onClick={() => openSheet({ id: part.id, title: part.text })}>
            {part.text ?? part.id}
          </button>
        )
      )}
    </Tag>
  )
}
