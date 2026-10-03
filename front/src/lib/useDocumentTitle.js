import { useEffect } from 'react'

/** Met à jour le titre de l'onglet : « Page · HistoMap ». */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · HistoMap` : "HistoMap — l'histoire du monde, en un coup d'œil"
  }, [title])
}
