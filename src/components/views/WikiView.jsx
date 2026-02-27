/**
 * View Wiki de Sobrevivência: guia do campus em cards com ícones.
 * Mantém todas as classes Tailwind (hover, border, bg white/03, etc.).
 */
import { Cpu, Coffee, Info, MapPin } from 'lucide-react'
import { Badge } from '../Badge'
import { SectionHeader } from '../SectionHeader'
import { SURVIVAL_GUIDE } from '../../config'

const ICON_MAP = { Cpu, Coffee, Info, MapPin }

export function WikiView() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto animate-in slide-in-from-right duration-500">
      <SectionHeader badge={<Badge>Guia do Campus</Badge>} title="Wiki de Sobrevivência" />
      <div className="grid md:grid-cols-2 gap-8">
        {SURVIVAL_GUIDE.map((item, i) => {
          const Icon = ICON_MAP[item.icon]
          return (
            <div
              key={i}
              className="p-10 border border-[var(--border)] rounded-3xl hover:border-[var(--accent-gold)]/30 transition-all group"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[var(--accent-gold)] mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--accent-purple-soft)' }}>
                {Icon ? <Icon size={24} /> : null}
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-[var(--text)]">
                {item.title}
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed font-medium">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
