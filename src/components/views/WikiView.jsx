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
              className="p-10 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-[#3d004c]/30 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                {Icon ? <Icon size={24} /> : null}
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
