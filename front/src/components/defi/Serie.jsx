import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Icon from '../ui/Icon'
import QuestionView from '../quiz/QuestionView'

/**
 * Une série de questions jouée d'une traite (défis, quiz infini) : barre de progression,
 * score courant, correction après chaque réponse. `onFin(justes)` reçoit les réponses dans l'ordre.
 */
export default function Serie({ questions, civ, titre, onFin, onQuitter, cle = '' }) {
  const [i, setI] = useState(0)
  const [justes, setJustes] = useState([])
  useEffect(() => {
    setI(0)
    setJustes([])
  }, [cle])
  const q = questions[i]
  const bonnes = justes.filter(Boolean).length
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto">
        <div className="flex items-center gap-2">
          <button onClick={onQuitter} className="btn-icon -ml-2" aria-label="Quitter">
            <Icon name="close" />
          </button>
          <div className="flex-1 flex gap-[2px]" aria-hidden="true">
            {questions.map((_, k) => (
              <span key={k} className={`h-[6px] flex-1 ${k < justes.length ? (justes[k] ? 'bg-accent2' : 'bg-accent') : k === i ? 'bg-ink' : 'bg-line'}`} />
            ))}
          </div>
          <span className="h-8 px-2.5 inline-flex items-center text-[13px] font-bold tabular-nums" style={{ background: '#2a2118', color: '#e0c27a' }} aria-label={`${bonnes} bonne(s) réponse(s)`}>
            {bonnes} / {questions.length}
          </span>
        </div>
        <p className="eyebrow mt-2">{titre}</p>
      </div>
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        {q && (
          <AnimatePresence mode="wait">
            <QuestionView
              key={`${cle}-${q.id}`}
              question={q}
              index={i}
              total={questions.length}
              civ={civ}
              onAnswer={(_, ok) => setJustes((j) => [...j, ok])}
              onNext={() => (i < questions.length - 1 ? setI(i + 1) : onFin(justes))}
              isLast={i === questions.length - 1}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
