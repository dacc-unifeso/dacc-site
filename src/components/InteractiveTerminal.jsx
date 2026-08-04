/**
 * Terminal interativo (CLI) na Home com comandos de ajuda e navegação.
 */
import { useState, useEffect, useRef } from 'react'

const INITIAL_HISTORY = [
  'DACC Shell v1.0.0 initialized.',
  'User: Aluno@unifeso.com.vc | Status: Logged in.',
  "Digite 'help' para listar os comandos.",
]

/**
 * @param {string} cmd
 * @returns {string|null}
 */
function resolveCommand(cmd) {
  switch (cmd) {
    case 'help':
      return 'Comandos: sobre, cafe, localizacao, clear'
    case 'sobre':
      return 'D.A. de Ciência da Computação no Unifeso. Gestão focada no aluno.'
    case 'localizacao':
      return 'Unifeso - Campus Quinta do Paraíso: Av. Delfim Moreira, 2486 — Prata, Teresópolis/RJ.'
    case 'cafe':
    case 'café':
      return 'Na sala da Coordenação de Ciência da Computação.'
    case 'clear':
      return null
    default:
      return `Comando '${cmd}' não reconhecido. Digite 'help'.`
  }
}

export function InteractiveTerminal() {
  const [history, setHistory] = useState(INITIAL_HISTORY)
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = input.toLowerCase().trim()
    const res = resolveCommand(cmd)

    if (res === null) {
      setHistory([])
      setInput('')
      return
    }
    setHistory([...history, `λ ${input}`, res])
    setInput('')
  }

  return (
    <div
      className="w-full max-w-xl mx-auto border border-[var(--border)] rounded-xl overflow-hidden shadow-[var(--shadow-md)] font-mono text-xs text-left"
      style={{ backgroundColor: 'var(--terminal-bg)' }}
    >
      <div
        className="px-4 py-2.5 flex items-center justify-between border-b border-[var(--border)]"
        style={{ backgroundColor: 'color-mix(in srgb, var(--terminal-bg) 85%, white 8%)' }}
      >
        <div className="flex gap-1.5" aria-hidden>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest font-bold">
          terminal@dacc-unifeso
        </span>
      </div>
      <div
        ref={scrollRef}
        className="p-5 sm:p-6 h-44 overflow-y-auto custom-scrollbar text-zinc-300"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.startsWith('λ') ? 'text-[var(--accent-gold)]' : ''}`}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2 mt-2">
          <span className="text-[var(--accent-gold)] font-bold">λ</span>
          <input
            className="bg-transparent border-none outline-none flex-1 text-zinc-100 caret-[var(--accent-gold)]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            aria-label="Comando do terminal"
          />
        </form>
      </div>
    </div>
  )
}
