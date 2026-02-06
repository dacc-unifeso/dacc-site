/**
 * Rodapé com logo, texto institucional e links (Instagram, GitHub, status Online).
 * Mantém as classes Tailwind originais (border dourado, font-mono, tracking).
 */
import { Heart } from 'lucide-react'
import { BRAND } from '../config'

export function Footer() {
  return (
    <footer className="bg-black py-24 px-6 border-t border-[#d4af37]/20 mt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-left">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 border-2 border-[#d4af37] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={BRAND.logo}
                alt="Logo Rodapé"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-black text-3xl tracking-tighter italic uppercase text-white">
              DACC Unifeso
            </span>
          </div>
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.5em] flex items-center gap-2">
            <Heart size={10} className="text-[#d4af37] fill-[#d4af37]" /> Feito por alunos, para
            alunos.
          </p>
        </div>
        <div className="flex gap-10 text-gray-500 font-black text-[11px] uppercase tracking-[0.3em]">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <div className="flex items-center gap-2 text-[#22c55e]">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
