/**
 * View da página inicial: hero com mascote, título e terminal interativo.
 * Mantém gradientes de fundo, textura de circuitos e glow idênticos ao design original.
 */
import { InteractiveTerminal } from '../InteractiveTerminal'
import { BRAND } from '../../config'

export function HomeView() {
  return (
    <section className="animate-in fade-in duration-1000">
      <header className="relative py-32 text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ backgroundColor: 'var(--accent-purple)' }} />

        <div className="relative z-10 px-6">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-10 rounded-full border-4 border-[var(--accent-gold)] p-2 shadow-[0_0_30px_rgba(212,175,55,0.2)]" style={{ backgroundColor: 'var(--page-bg)' }}>
            <img
              src={BRAND.logo}
              alt="Mascote DACC"
              className="w-full h-full object-cover rounded-full"
            />  
          </div>
          <h1 className="hero-title-glow text-5xl md:text-8xl font-black text-[var(--text)] mb-6 tracking-tighter leading-none uppercase italic">
            Diretório <br /> Acadêmico<span className="text-[var(--accent-gold)]">.</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
            Ciência da Computação no Unifeso. <br />
            Representando o futuro, cuidando do presente.
          </p>
          <InteractiveTerminal />
        </div>
      </header>
    </section>
  )
}
