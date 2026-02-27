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

        <div className="mt-8 p-6 border rounded-2xl flex flex-col md:flex-row items-center gap-4 max-w-3xl" style={{ backgroundColor: 'var(--accent-purple-soft)', borderColor: 'var(--border)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--selection-text)]" style={{ backgroundColor: 'var(--accent-gold)' }}>
            <ShieldCheck size={24} />
          </div>
          <p className="text-sm text-[var(--text-muted)] font-medium">
            <span className="text-[var(--accent-gold)] font-black uppercase tracking-widest mr-2 underline decoration-2 underline-offset-4">
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
            className="group border border-[var(--border)] rounded-[2.5rem] p-6 hover:border-[var(--accent-gold)]/50 transition-all"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="aspect-square rounded-[1.5rem] mb-6 flex items-center justify-center border border-[var(--border)] relative overflow-hidden" style={{ backgroundColor: 'var(--overlay-bg)' }}>
              <div className="font-black italic text-center p-6 uppercase tracking-[0.4em] select-none text-[8px] opacity-20" style={{ color: 'var(--text)' }}>
                Propriedade do DACC Unifeso
              </div>
              <ShoppingBag
                size={40}
                className="absolute opacity-20 group-hover:scale-110 transition-transform"
                style={{ color: 'var(--accent-gold)' }}
              />
              <div className="absolute top-4 left-4 border px-3 py-1 rounded-full text-[9px] font-black uppercase" style={{ backgroundColor: 'var(--accent-purple)', borderColor: 'var(--border)', color: 'var(--accent-gold)' }}>
                {p.tag}
              </div>
            </div>
            <h4 className="text-xl font-black mb-1 text-[var(--text)]">{p.name}</h4>
            <p className="text-[var(--text-muted)] text-[9px] uppercase font-mono tracking-widest mb-6">
              {p.category}
            </p>
            <div className="flex justify-between items-center p-4 rounded-xl border border-[var(--border)]" style={{ backgroundColor: 'var(--card-bg)' }}>
              <span className="text-xl font-black text-[var(--accent-gold)]">R$ {p.price}</span>
              <a
                href={`https://wa.me/${BRAND.whatsappContact}?text=Quero encomendar: ${p.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg transition-all text-[var(--selection-text)] hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-gold)' }}
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
