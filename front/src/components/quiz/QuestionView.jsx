import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isCorrect } from '../../lib/quiz'
import { haptic } from '../../lib/haptics'
import Icon from '../ui/Icon'
import MiniMap from '../revision/MiniMap'

const LETTERS = ['A', 'B', 'C', 'D']
const TYPE_LABEL = { mcq: 'QCM', tf: 'Vrai ou faux', order: 'Remettre dans l’ordre', map: 'Carte' }

/**
 * Une question + sa correction.
 *   onAnswer(response, correct) : enregistre la réponse (une seule fois)
 *   onNext()                    : question suivante (ou résultat)
 *   answered                    : réponse déjà donnée (reprise d'un quiz)
 */
export default function QuestionView({ question: q, index, total, civ, answered, onAnswer, onNext, isLast }) {
  const [response, setResponse] = useState(answered?.response ?? null)
  const [order, setOrder] = useState([]) // sélection en cours (type « order »)
  const done = response !== null
  const correct = done && isCorrect(q, response)

  const submit = (r) => {
    if (done) return
    const ok = isCorrect(q, r)
    setResponse(r)
    haptic(ok ? 'success' : 'error')
    onAnswer(r, ok)
  }

  // Raccourcis : 1-4 / A-D pour répondre, V/F, Entrée pour continuer
  useEffect(() => {
    const onKey = (e) => {
      if (done && e.key === 'Enter') return onNext()
      if (done) return
      if ((q.type === 'mcq' || q.type === 'map') && /^[1-4]$/.test(e.key) && q.options[+e.key - 1] !== undefined) submit(+e.key - 1)
      if (q.type === 'tf' && (e.key === 'v' || e.key === 'f')) submit(e.key === 'v')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <motion.div
      key={q.id}
      initial={{ opacity: 0, x: 40 }}
      animate={done && !correct ? { opacity: 1, x: [0, -10, 10, -6, 6, 0] } : { opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: done && !correct ? 0.45 : 0.3 }}
      className="w-full max-w-[560px] mx-auto flex flex-col min-h-0 flex-1"
    >
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain pb-4">
        <p className="eyebrow mb-2" style={{ color: civ.color }}>
          Question {index + 1} / {total} · {TYPE_LABEL[q.type]}
        </p>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug text-balance">{q.prompt}</h2>

        {q.type === 'map' && (
          <div className="mt-4">
            <MiniMap civ={civ} years={[q.year]} quiz />
          </div>
        )}

        <div className="mt-5">
          {(q.type === 'mcq' || q.type === 'map') && (
            <ul className="grid gap-2.5">
              {q.options.map((opt, i) => {
                const state = !done ? 'idle' : i === q.answer ? 'right' : i === response ? 'wrong' : 'dim'
                return (
                  <li key={i}>
                    <OptionButton state={state} onClick={() => submit(i)} disabled={done} letter={LETTERS[i]}>
                      {opt}
                    </OptionButton>
                  </li>
                )
              })}
            </ul>
          )}

          {q.type === 'tf' && (
            <div className="grid grid-cols-2 gap-3">
              {[true, false].map((v) => {
                const state = !done ? 'idle' : v === q.answer ? 'right' : v === response ? 'wrong' : 'dim'
                return (
                  <OptionButton key={String(v)} state={state} onClick={() => submit(v)} disabled={done} big>
                    {v ? 'Vrai' : 'Faux'}
                  </OptionButton>
                )
              })}
            </div>
          )}

          {q.type === 'order' && (
            <OrderQuestion q={q} order={done ? response : order} setOrder={setOrder} done={done} onSubmit={() => submit(order)} />
          )}
        </div>
      </div>

      {/* Correction */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className={`shrink-0 rounded-2xl p-4 border-2 ${correct ? 'border-success/40 bg-success/10' : 'border-danger/40 bg-danger/10'}`}
            role="status"
          >
            <p className={`flex items-center gap-2 font-semibold ${correct ? 'text-success' : 'text-danger'}`}>
              <span className={`grid place-items-center w-7 h-7 rounded-full text-white ${correct ? 'bg-success' : 'bg-danger'}`}>
                <Icon name={correct ? 'check' : 'close'} size={15} strokeWidth={2.8} />
              </span>
              {correct ? pickPraise(q.id) : 'Pas tout à fait…'}
            </p>
            {!correct && q.type === 'order' && <p className="text-sm text-ink mt-2"><strong>Bon ordre :</strong> {q.items.join(' → ')}</p>}
            {!correct && q.type === 'tf' && <p className="text-sm text-ink mt-2">C'était <strong>{q.answer ? 'vrai' : 'faux'}</strong>.</p>}
            {q.explanation && <p className="text-sm text-ink/80 mt-2 leading-relaxed">{q.explanation}</p>}
            <button onClick={onNext} className="btn-primary w-full h-12 mt-3" autoFocus>
              {isLast ? 'Voir mon résultat' : 'Question suivante'} <Icon name="arrowRight" size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function OptionButton({ state, letter, big, children, ...props }) {
  const styles = {
    idle: 'bg-surface border-line hover:border-muted/50 hover:bg-surface2 active:scale-[.98]',
    right: 'bg-success/10 border-success text-ink',
    wrong: 'bg-danger/10 border-danger text-ink',
    dim: 'bg-surface border-line opacity-50',
  }[state]
  return (
    <button
      type="button"
      {...props}
      className={`w-full flex items-center gap-3 text-left rounded-2xl border-2 px-4 transition ${big ? 'h-20 justify-center text-lg font-semibold' : 'min-h-[56px] py-3'} ${styles}`}
    >
      {letter && (
        <span
          className={`grid place-items-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${
            state === 'right' ? 'bg-success text-white' : state === 'wrong' ? 'bg-danger text-white' : 'bg-surface2 text-muted'
          }`}
        >
          {state === 'right' ? <Icon name="check" size={16} strokeWidth={2.8} /> : state === 'wrong' ? <Icon name="close" size={16} strokeWidth={2.8} /> : letter}
        </span>
      )}
      <span className="text-[15px] text-ink leading-snug">{children}</span>
    </button>
  )
}

/** Remettre dans l'ordre : on touche les éléments dans l'ordre voulu. */
function OrderQuestion({ q, order, setOrder, done, onSubmit }) {
  const toggle = (item) => {
    if (done) return
    haptic('tap')
    setOrder((o) => (o.includes(item) ? o.filter((x) => x !== item) : [...o, item]))
  }
  return (
    <div>
      <p className="text-sm text-muted mb-3">Touchez les éléments du plus ancien au plus récent. Touchez à nouveau pour retirer.</p>
      <ul className="grid gap-2.5">
        {q.shuffled.map((item) => {
          const rank = order.indexOf(item)
          const rightRank = q.items.indexOf(item)
          const state = !done ? (rank >= 0 ? 'picked' : 'idle') : rank === rightRank ? 'right' : 'wrong'
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(item)}
                disabled={done}
                className={`w-full min-h-[56px] py-3 px-4 flex items-center gap-3 text-left rounded-2xl border-2 transition ${
                  state === 'picked' ? 'border-ink bg-surface2' : state === 'right' ? 'border-success bg-success/10' : state === 'wrong' ? 'border-danger bg-danger/10' : 'border-line bg-surface hover:border-muted/50'
                }`}
              >
                <span className={`grid place-items-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${rank >= 0 ? 'bg-ink text-bg' : 'bg-surface2 text-muted'}`}>
                  {rank >= 0 ? rank + 1 : '·'}
                </span>
                <span className="text-[15px] text-ink leading-snug flex-1">{item}</span>
                {done && <span className="text-xs text-muted shrink-0">n° {rightRank + 1}</span>}
              </button>
            </li>
          )
        })}
      </ul>
      {!done && (
        <button onClick={onSubmit} disabled={order.length !== q.items.length} className="btn-primary w-full h-12 mt-4">
          Valider l'ordre
        </button>
      )}
    </div>
  )
}

const PRAISES = ['Bonne réponse !', 'Exact !', 'Bien vu !', 'Parfait !', 'Bravo !']
function pickPraise(id) {
  let h = 0
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return PRAISES[h % PRAISES.length]
}
