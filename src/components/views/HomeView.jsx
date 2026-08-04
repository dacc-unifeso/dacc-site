/**
 * View da página inicial: hero com mascote, CTAs e terminal interativo.
 */
import { ArrowRight, BookOpen, Code2 } from 'lucide-react'
import { InteractiveTerminal } from '../InteractiveTerminal'
import { Button } from '../Button'
import { BRAND } from '../../config'

/**
 * @param {Object} props
 * @param {(page: string) => void} [props.onNavigate]
 */
export function HomeView({ onNavigate }) {
  return (
    <section className="animate-in fade-in duration-1000">
      <header className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-16 md:py-24 text-center">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none" />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(28rem,90vw)] h-[min(28rem,90vw)] rounded-full blur-[140px] opacity-70 pointer-events-none"
          style={{ backgroundColor: 'var(--hero-glow)' }}
        />

        <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
          <div
            className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-8 md:mb-10 rounded-full border-4 border-[var(--accent-gold)] p-1.5 shadow-[var(--shadow-md)]"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <img
              src={BRAND.logo}
              alt="Mascote DACC"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="hero-title-glow text-5xl md:text-7xl lg:text-8xl font-black text-[var(--text)] mb-5 tracking-tighter leading-[0.95] uppercase italic">
            Diretório <br /> Acadêmico<span className="text-[var(--accent-gold)]">.</span>
          </h1>

          <p className="text-[var(--text-muted)] text-base md:text-xl max-w-xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed">
            Ciência da Computação no Unifeso.
            Representando o futuro, cuidando do presente.
          </p>

          <div className="cta-group mb-12 md:mb-14">
            <Button
              type="button"
              variant="primary"
              onClick={() => onNavigate?.('wiki')}
            >
              <BookOpen size={16} aria-hidden />
              Wiki Calouro
              <ArrowRight size={14} aria-hidden />
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => onNavigate?.('projects')}
            >
              <Code2 size={16} aria-hidden />
              Projetos
            </Button>
            <Button
              as="a"
              variant="ghost"
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar no grupo
            </Button>
          </div>

          <InteractiveTerminal />
        </div>
      </header>
    </section>
  )
}
