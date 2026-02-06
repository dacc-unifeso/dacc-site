/**
 * View Lojinha oficial DACC Wear com nota ética e link WhatsApp.
 * Mantém bordas, hover, badge de tag e preço em R$.
 */
import { ShoppingBag, Send, ShieldCheck } from 'lucide-react'
import { Badge } from '../Badge'
import { SectionHeader } from '../SectionHeader'
import { BRAND, PRODUCTS } from '../../config'

export function ShopView() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto animate-in zoom-in-95 duration-500">
      <div className="mb-16">
        <SectionHeader badge={<Badge>DACC Wear</Badge>} title="Lojinha Oficial" />

        <div className="mt-8 p-6 bg-[#3d004c]/20 border border-[#d4af37]/30 rounded-2xl flex flex-col md:flex-row items-center gap-4 max-w-3xl">
          <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black flex-shrink-0">
            <ShieldCheck size={24} />
          </div>
          <p className="text-sm text-gray-300 font-medium">
            <span className="text-[#d4af37] font-black uppercase tracking-widest mr-2 underline decoration-2 underline-offset-4">
              Compromisso Ético:
            </span>
            Todo o valor arrecadado é integralmente reinvestido em projetos, infraestrutura e
            eventos voltados para os alunos de Ciência da Computação.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {PRODUCTS.map((p, i) => (
          <div
            key={i}
            className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 hover:border-[#d4af37]/50 transition-all"
          >
            <div className="aspect-square bg-black rounded-[1.5rem] mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
              <div className="text-white/5 font-black italic text-center p-6 uppercase tracking-[0.4em] select-none text-[8px]">
                Propriedade do DACC Unifeso
              </div>
              <ShoppingBag
                size={40}
                className="absolute text-[#d4af37]/20 group-hover:scale-110 transition-transform"
              />
              <div className="absolute top-4 left-4 bg-[#3d004c] border border-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full text-[9px] font-black uppercase">
                {p.tag}
              </div>
            </div>
            <h4 className="text-xl font-black mb-1 text-white">{p.name}</h4>
            <p className="text-gray-500 text-[9px] uppercase font-mono tracking-widest mb-6">
              {p.category}
            </p>
            <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-xl font-black text-[#d4af37]">R$ {p.price}</span>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Quero encomendar: ${p.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-lg hover:bg-[#d4af37] transition-all"
                aria-label={`Encomendar ${p.name} via WhatsApp`}
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
