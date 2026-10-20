import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { prepareQuestion } from '../../lib/questions'
import { haptic } from '../../lib/haptics'
import { useProgress } from '../../store/progress'
import Icon from '../ui/Icon'
import QuestionView from './QuestionView'

/**
 * Quiz express d'une fiche liée : 2 ou 3 questions générées au build
 * (scripts/lib/express.mjs), jouées sur place, sans quitter la fiche.
 * Seul le meilleur score est gardé (store/progress → express).
 */
export default function ExpressQuiz({ fiche, color }) {
  const record = useProgress((s) => s.express[fiche.id])
  const finishExpress = useProgress((s) => s.finishExpress)
  const [run, setRun] = useState(null) // { attempt, index, answers: [{ id, response, correct }] } | null
  const [result, setResult] = useState(null) // { correct, total }
  const top = useRef(null)

  const pool = fiche.express
  const total = pool.length
  // réponses mélangées différemment à chaque partie (graine propre à la fiche : sinon la bonne
  // réponse de « x-date » serait à la même place sur toutes les fiches)
  const questions = useMemo(
    () => (run ? pool.map((q) => prepareQuestion({ ...q, id: `${fiche.id}/${q.id}` }, run.attempt)) : []),
    [pool, fiche.id, run?.attempt] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const start = () => {
    setResult(null)
    setRun({ attempt: record?.attempts ?? 0, index: 0, answers: [] })
    haptic('tap')
  }
  const answer = (q, response, correct) =>
    setRun((r) => (r.answers.some((a) => a.id === q.id) ? r : { ...r, answers: [...r.answers, { id: q.id, response, correct }] }))
  const next = () => {
    if (run.index < total - 1) {
      setRun((r) => ({ ...r, index: r.index + 1 }))
      top.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      return
    }
    const correct = run.answers.filter((a) => a.correct).length
    finishExpress(fiche.id, correct, total)
    haptic(correct === total ? 'complete' : 'tap')
    setResult({ correct, total })
    setRun(null)
  }

  const q = run && questions[run.index]

  return (
    <div ref={top} className="card p-4 sm:p-5 scroll-mt-20">
      {q ? (
        <>
          <div className="flex gap-1 mb-4" aria-hidden="true">
            {questions.map((x, i) => {
              const a = run.answers.find((y) => y.id === x.id)
              return <span key={x.id} className={`h-1.5 flex-1 rounded-full transition-colors ${a ? (a.correct ? 'bg-success' : 'bg-danger') : i === run.index ? 'bg-ink/40' : 'bg-line'}`} />
            })}
          </div>
          <AnimatePresence mode="wait">
            <QuestionView
              key={q.id}
              question={q}
              index={run.index}
              total={total}
              civ={{ color }}
              answered={run.answers.find((a) => a.id === q.id)}
              onAnswer={(response, correct) => answer(q, response, correct)}
              onNext={next}
              isLast={run.index === total - 1}
            />
          </AnimatePresence>
        </>
      ) : result ? (
        <ExpressResult result={result} best={record?.best} onRetry={start} />
      ) : (
        <div className="flex flex-wrap items-center gap-4">
          <p className="flex-1 min-w-[12rem] text-[15px] text-ink/85 leading-relaxed">
            {total} questions pour vérifier ce que vous avez retenu de cette fiche.
            {record && (
              <span className="block text-sm text-muted mt-1">
                Meilleur score : <strong className={record.best === record.total ? 'text-success' : 'text-ink'}>{record.best} / {record.total}</strong>
                {record.best === record.total && ' ✓'}
              </span>
            )}
          </p>
          <button type="button" onClick={start} className="btn-primary h-12 px-5">
            <Icon name="play" size={18} /> {record ? 'Rejouer' : 'Me tester'}
          </button>
        </div>
      )}
    </div>
  )
}

function ExpressResult({ result, best, onRetry }) {
  const perfect = result.correct === result.total
  const title = perfect ? 'Sans faute !' : result.correct === 0 ? 'Relisez la fiche et retentez' : result.correct === result.total - 1 ? 'Presque !' : 'Encore un effort'
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="text-center" role="status">
      <p className={`font-display text-4xl font-bold tabular-nums ${perfect ? 'text-success' : 'text-ink'}`}>
        {result.correct} <span className="text-xl text-muted font-semibold">/ {result.total}</span>
      </p>
      <p className="font-semibold text-ink mt-1">{title}</p>
      {!perfect && best != null && best > result.correct && <p className="text-sm text-muted mt-0.5">Votre meilleur score reste {best} / {result.total}.</p>}
      <button type="button" onClick={onRetry} className="btn-secondary h-11 px-5 mt-4">
        <Icon name="refresh" size={17} /> Rejouer
      </button>
    </motion.div>
  )
}
