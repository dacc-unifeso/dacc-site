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
      return 'Comandos: sobre, cafe, clear'
    case 'sobre':
      return 'D.A. de Ciência da Computação no Unifeso. Gestão focada no aluno.'
    case 'localizacao':
      return 'Unifeso - Campus Quinta do Paraíso está localizada em Av. Delfim Moreira, 2486-3022 - Prata; 25976-340 Teresópolis, Brazil, Rio de Janeiro.'
    case 'cafe':
    case 'café':
      return '☕ Na sala da Coordenação de Ciência da Computação.'
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
    <div className="w-full max-w-xl mx-auto backdrop-blur-md border border-[var(--border)] rounded-xl overflow-hidden shadow-2xl font-mono text-xs text-left" style={{ backgroundColor: 'var(--overlay-bg)' }}>
      <div className="px-4 py-2 flex items-center justify-between border-b border-[var(--border)]" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
        </div>
        <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest font-bold">
          terminal@dacc-unifeso
        </span>
      </div>
      <div ref={scrollRef} className="p-6 h-44 overflow-y-auto custom-scrollbar" style={{ color: 'var(--text-muted)' }}>
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.startsWith('λ') ? 'text-[var(--accent-gold)]' : ''}`}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2 mt-2">
          <span className="text-[var(--accent-gold)] font-bold">λ</span>
          <input
            className="bg-transparent border-none outline-none flex-1 text-[var(--text)] caret-[var(--accent-gold)]"
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
