import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getCivilization } from '../lib/data'
import { PASS_MARK, composeQuiz, prepareQuestion, questionPool } from '../lib/quiz'
import { chapterSize } from '../lib/revision'
import { haptic } from '../lib/haptics'
import { useProgress } from '../store/progress'
import useDocumentTitle from '../lib/useDocumentTitle'
import Icon from '../components/ui/Icon'
import QuestionView from '../components/quiz/QuestionView'
import NotFoundPage from './NotFoundPage'

/**
 * Quiz d'un chapitre (plein écran) : 20 questions, correction immédiate,
 * note sur 20. Sous 15 : on conseille de reprendre le chapitre ; au quiz
 * suivant, 5 questions ratées reviennent avec 15 nouvelles.
 */
export default function QuizPage() {
  const { epochId, civId } = useParams()
  const ref = getCivilization(epochId, civId)
  useDocumentTitle(ref ? `Quiz · ${ref.civ.label}` : 'Quiz introuvable')
  if (!ref) return <NotFoundPage title="Quiz introuvable" />
  return createPortal(<Quiz key={civId} refCiv={ref} />, document.body)
}

function Quiz({ refCiv }) {
  const { epoch, civ } = refCiv
  const navigate = useNavigate()
  const quiz = useProgress((s) => s.quizzes[civ.id])
  const startQuiz = useProgress((s) => s.startQuiz)
  const answerQuestion = useProgress((s) => s.answerQuestion)
  const finishQuiz = useProgress((s) => s.finishQuiz)
  const setLast = useProgress((s) => s.setLast)
  const [result, setResult] = useState(null)
  const [step, setStep] = useState(null) // question affichée (peut être en retard d'une sur les réponses : temps de lire la correction)

  const pool = useMemo(() => questionPool(refCiv), [refCiv])
  const byId = useMemo(() => Object.fromEntries(pool.map((q) => [q.id, q])), [pool])

  const begin = () => {
    const ids = composeQuiz(pool, { failed: quiz?.failed ?? [], asked: quiz?.asked ?? [], attempt: quiz?.attempts ?? 0 })
    startQuiz(civ.id, ids)
    setStep(0)
  }
  useEffect(() => {
    if (!quiz?.current && !result) begin()
    else if (quiz?.current && step === null) setStep(quiz.current.answers.length)
  }, [quiz?.current, result]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = quiz?.current
  const questions = useMemo(
    () => (current?.ids ?? []).map((id) => byId[id] && prepareQuestion(byId[id], current.attempt)).filter(Boolean),
    [current?.ids, current?.attempt, byId]
  )
  const answers = current?.answers ?? []
  const index = Math.min(step ?? 0, Math.max(questions.length - 1, 0))
  const q = questions[index]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    if (!current) return
    setLast({ path: `/reviser/${epoch.id}/${civ.id}/quiz`, kind: 'quiz', title: civ.label, subtitle: `Quiz · question ${index + 1} / ${questions.length}`, color: civ.color })
  }, [index, questions.length, current, epoch.id, civ, setLast])

  const next = () => {
    if (index < questions.length - 1) setStep(index + 1)
    else {
      const r = finishQuiz(civ.id)
      const mistakes = answers.filter((a) => !a.correct).map((a) => questions.find((x) => x.id === a.id)).filter(Boolean)
      haptic(r.score >= PASS_MARK ? 'complete' : 'error')
      setResult({ ...r, mistakes })
    }
  }

  const score = answers.filter((a) => a.correct).length

  return (
    <div className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label={`Quiz : ${civ.label}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-15" style={{ background: civ.color }} />

      <div className="relative shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 max-w-[600px] w-full mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(`/reviser/${epoch.id}`)} className="btn-icon -ml-2" aria-label="Quitter le quiz (il est gardé)" title="Quitter (le quiz est gardé)">
            <Icon name="close" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <p className="text-sm font-semibold text-ink truncate">Quiz · {civ.label}</p>
            <p className="text-[11px] text-muted">{epoch.label}{quiz?.best != null ? ` · meilleur score ${quiz.best}/20` : ''}</p>
          </div>
          {!result && (
            <span className="w-12 text-right text-xs font-semibold tabular-nums text-success" title="Bonnes réponses">
              {score} ✓
            </span>
          )}
        </div>
        {!result && (
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {questions.map((x, i) => {
              const a = answers.find((y) => y.id === x.id)
              return (
                <span
                  key={x.id}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${a ? (a.correct ? 'bg-success' : 'bg-danger') : i === index ? 'bg-ink/40' : 'bg-line'}`}
                />
              )
            })}
          </div>
        )}
      </div>

      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {result ? (
          <QuizResult refCiv={refCiv} result={result} onRetry={() => setResult(null)} />
        ) : q ? (
          <AnimatePresence mode="wait">
            <QuestionView
              key={q.id}
              question={q}
              index={index}
              total={questions.length}
              civ={civ}
              answered={answers.find((a) => a.id === q.id)}
              onAnswer={(response, correct) => answerQuestion(civ.id, q.id, response, correct)}
              onNext={next}
              isLast={index === questions.length - 1}
            />
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  )
}

/** Écran de résultat : note, conseil, erreurs à revoir. */
function QuizResult({ refCiv, result, onRetry }) {
  const { epoch, continent, civ } = refCiv
  const quiz = useProgress((s) => s.quizzes[civ.id])
  const chapter = useProgress((s) => s.chapters[civ.id])
  const passed = result.score >= PASS_MARK
  const tone = passed ? 'success' : result.score >= 10 ? 'warning' : 'danger'
  const color = `rgb(var(--c-${tone}))`
  const size = chapterSize(refCiv)
  const next = civ.lineage?.next
  const sibling = continent.civilizations[continent.civilizations.findIndex((c) => c.id === civ.id) + 1]
  const title = result.score >= 18 ? 'Excellent !' : passed ? 'Chapitre validé !' : result.score >= 10 ? 'Encore un effort' : 'On reprend le chapitre ?'
  const r = 54
  const c = 2 * Math.PI * r

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[480px] mx-auto overflow-y-auto overscroll-contain">
      <div className="text-center pt-2">
        {passed && <Confetti />}
        <div className="relative inline-grid place-items-center">
          <svg width="136" height="136" className="-rotate-90" aria-hidden="true">
            <circle cx="68" cy="68" r={r} fill="none" stroke="rgb(var(--c-line))" strokeWidth="10" />
            <motion.circle
              cx="68" cy="68" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: c * (1 - result.score / 20) }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            />
          </svg>
          <span className="absolute text-center">
            <span className="block font-display text-4xl font-bold text-ink tabular-nums leading-none">{result.score}</span>
            <span className="block text-sm text-muted">/ 20</span>
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold text-ink mt-4">{title}</h2>
        <p className="text-muted mt-1">
          {result.correct} bonne{result.correct > 1 ? 's' : ''} réponse{result.correct > 1 ? 's' : ''} sur {result.total}
          {quiz?.attempts > 1 && ` · meilleur score ${quiz.best}/20`}
        </p>
      </div>

      {/* Conseil */}
      <div className={`mt-5 p-4 rounded-2xl border-2 text-sm leading-relaxed ${passed ? 'border-success/30 bg-success/5' : 'border-warning/40 bg-warning/10'}`}>
        {passed ? (
          <p className="text-ink">
            <strong>✓ {civ.label} est validé.</strong> Votre meilleur score est enregistré ; vous pouvez passer à la suite ou retenter pour faire mieux.
          </p>
        ) : (
          <p className="text-ink">
            <strong>Sous {PASS_MARK}/20, on vous conseille de reprendre le chapitre.</strong>{' '}
            {chapter?.rounds === 1 && size.tier2 > 0 ? `${size.tier2} nouvelles cartes vous attendent. ` : ''}
            Au prochain quiz, {Math.min(result.mistakes.length, 5)} question{result.mistakes.length > 1 ? 's' : ''} ratée{result.mistakes.length > 1 ? 's' : ''} reviendront, avec de nouvelles questions.
          </p>
        )}
      </div>

      <div className="mt-5 grid gap-2.5">
        {passed ? (
          <>
            {next ? (
              <Link to={`/reviser/${next.epochId}/${next.civId}`} className="btn-primary h-12 w-full">La suite : {next.label} <Icon name="arrowRight" size={18} /></Link>
            ) : sibling ? (
              <Link to={`/reviser/${epoch.id}/${sibling.id}`} className="btn-primary h-12 w-full">Chapitre suivant : {sibling.label} <Icon name="arrowRight" size={18} /></Link>
            ) : null}
            <button onClick={onRetry} className="btn-secondary h-12 w-full">Refaire un quiz</button>
          </>
        ) : (
          <>
            <Link to={`/reviser/${epoch.id}/${civ.id}`} className="btn-primary h-12 w-full" style={{ background: civ.color }}>
              <Icon name="cards" size={18} /> Reprendre le chapitre
            </Link>
            <button onClick={onRetry} className="btn-secondary h-12 w-full">Refaire un quiz maintenant</button>
          </>
        )}
        <Link to={`/reviser/${epoch.id}`} className="btn-ghost h-11 w-full">Retour aux chapitres</Link>
      </div>

      {/* Erreurs à revoir */}
      {result.mistakes.length > 0 && (
        <section className="mt-7 pb-6" aria-labelledby="mistakes-title">
          <h3 id="mistakes-title" className="eyebrow mb-3">À revoir ({result.mistakes.length})</h3>
          <ul className="space-y-2.5">
            {result.mistakes.map((m) => (
              <li key={m.id} className="card p-3.5 text-sm">
                <p className="text-ink leading-snug">{m.prompt}</p>
                <p className="mt-1.5 text-success font-medium flex items-start gap-1.5">
                  <Icon name="check" size={15} strokeWidth={2.6} className="mt-0.5 shrink-0" />
                  {m.type === 'tf' ? (m.answer ? 'Vrai' : 'Faux') : m.type === 'order' ? m.items.join(' → ') : m.options[m.answer]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </motion.div>
  )
}

/** Petite pluie de confettis (CSS) pour un chapitre validé. */
function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => i)
  const colors = ['#4f7cff', '#16a36a', '#f0ac3c', '#e74c3c', '#9c27b0']
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 h-0 z-10">
      {pieces.map((i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${(i * 37) % 100}%`,
            background: colors[i % colors.length],
            animationDelay: `${(i % 7) * 0.08}s`,
            animationDuration: `${1.6 + (i % 5) * 0.25}s`,
            transform: `rotate(${i * 29}deg)`,
          }}
        />
      ))}
    </div>
  )
}
