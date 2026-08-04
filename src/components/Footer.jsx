/**
 * Rodapé com logo, texto institucional e links (Instagram, GitHub, status Online).
 */
import { Heart } from 'lucide-react'
import { BRAND } from '../config'

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-[var(--border)] mt-24 md:mt-40" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
            <div className="w-12 h-12 border-2 border-[var(--accent-gold)] rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
              <img src={BRAND.logo} alt="Logo DACC" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-2xl md:text-3xl tracking-tighter italic uppercase text-[var(--text)]">
              DACC Unifeso
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-[10px] font-mono uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-2">
            <Heart size={10} className="text-[var(--accent-gold)] fill-[var(--accent-gold)]" /> Feito por alunos, para alunos.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[var(--text-muted)] font-black text-[11px] uppercase tracking-[0.2em]" aria-label="Redes sociais">
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors min-h-11 inline-flex items-center">
            Instagram
          </a>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors min-h-11 inline-flex items-center">
            WhatsApp
          </a>
          <a href={BRAND.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors min-h-11 inline-flex items-center">
            GitHub
          </a>
          <a href={BRAND.discord} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors min-h-11 inline-flex items-center">
            Discord
          </a>
          <div className="flex items-center gap-2 text-[var(--status-online)] min-h-11">
            <div className="w-2 h-2 rounded-full bg-[var(--status-online)] animate-pulse" />
            <span>Online</span>
          </div>
        </nav>
      </div>
    </footer>
  )
}
