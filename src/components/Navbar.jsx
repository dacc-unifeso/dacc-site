/**
 * Barra de navegação fixa com logo DACC e itens de menu.
 * Layout de botões com alvos de toque ≥44px e hierarquia clara.
 */
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_ITEMS } from '../config'
import { ThemeToggle } from './ThemeToggle'

/**
 * @param {Object} props
 * @param {string} props.activePage
 * @param {(page: string) => void} props.setActivePage
 * @param {boolean} props.isMenuOpen
 * @param {(open: boolean) => void} props.setIsMenuOpen
 * @param {'dark'|'light'} props.theme
 * @param {(theme: 'dark'|'light') => void} props.onThemeChange
 */
export function Navbar({ activePage, setActivePage, isMenuOpen, setIsMenuOpen, theme = 'dark', onThemeChange }) {
  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-[var(--border)]"
      style={{ backgroundColor: 'color-mix(in srgb, var(--page-bg) 88%, transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-3 cursor-pointer group shrink-0"
          onClick={() => setActivePage('home')}
          onKeyDown={(e) => e.key === 'Enter' && setActivePage('home')}
          role="button"
          tabIndex={0}
          aria-label="Ir para início"
        >
          <div
            className="w-11 h-11 rounded-full border-2 border-[var(--accent-gold)] flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shadow-[var(--shadow-sm)] relative"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <img
              src={BRAND.logo}
              alt="Logo DACC"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-[var(--accent-gold)]">
              DACC
            </span>
          </div>
          <div className="hidden xs:block sm:block">
            <span className="font-black text-xl tracking-tighter block leading-none text-[var(--text)]">
              DACC
            </span>
            <span className="text-[var(--accent-gold)] text-[10px] font-mono tracking-widest uppercase">
              Unifeso
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="hidden lg:flex items-center gap-1 p-1 rounded-2xl border border-[var(--border)]"
            style={{ backgroundColor: 'var(--surface)' }}
            role="navigation"
            aria-label="Menu principal"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePage(item.id)}
                className={`nav-link ${activePage === item.id ? 'nav-link-active' : ''}`}
                aria-current={activePage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />

          <button
            type="button"
            className="btn btn-icon lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
