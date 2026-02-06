/**
 * View Hub de Projetos: cards com tech, descrição e estrelas.
 * Mantém as classes Tailwind originais (border, hover, Code icon, Star).
 */
import { Code, Star, ExternalLink } from 'lucide-react'
import { Badge } from '../Badge'
import { SectionHeader } from '../SectionHeader'
import { PROJECTS } from '../../config'

export function ProjectsView() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
      <SectionHeader badge={<Badge>Colaboração</Badge>} title="Projetos do Curso" />
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-[#d4af37]/40 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <Code size={32} className="text-[#d4af37]" />
              <div className="flex items-center gap-1 text-[#d4af37] text-xs font-bold">
                <Star size={14} fill="#d4af37" /> {p.stars}
              </div>
            </div>
            <h4 className="text-xl font-black mb-2 uppercase text-white">{p.title}</h4>
            <p className="text-[#d4af37] text-[10px] font-mono mb-4 uppercase font-bold">{p.tech}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.desc}</p>
            <button
              type="button"
              className="flex items-center gap-2 text-white font-black text-[10px] tracking-widest uppercase hover:text-[#d4af37] transition"
            >
              Saber Mais <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
