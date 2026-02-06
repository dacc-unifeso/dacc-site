/**
 * Barra de navegação fixa com logo DACC e itens de menu.
 * Inclui menu mobile (hamburger) e mantém todas as classes Tailwind originais.
 */
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_ITEMS } from '../config'

/**
 * @param {Object} props
 * @param {string} props.activePage - Página ativa (home, wiki, projects, shop, members)
 * @param {(page: string) => void} props.setActivePage - Callback para mudar de página
 * @param {boolean} props.isMenuOpen - Estado do menu mobile
 * @param {(open: boolean) => void} props.setIsMenuOpen - Callback para abrir/fechar menu
 */
export function Navbar({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050507]/90 backdrop-blur-2xl border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActivePage('home')}
          onKeyDown={(e) => e.key === 'Enter' && setActivePage('home')}
          role="button"
          tabIndex={0}
          aria-label="Ir para início"
        >
          <div className="w-12 h-12 bg-black rounded-full border-2 border-[#d4af37] flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shadow-lg relative">
            <img
              src={BRAND.logo}
              alt="Logo DACC"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <div>
            <span className="font-black text-xl tracking-tighter block leading-none">DACC</span>
            <span className="text-[#d4af37] text-[10px] font-mono tracking-widest uppercase">
              Unifeso
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePage(item.id)}
              className={`px-5 py-2 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all ${
                activePage === item.id
                  ? 'bg-[#3d004c] text-[#d4af37] border border-[#d4af37]/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-[#d4af37]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}
