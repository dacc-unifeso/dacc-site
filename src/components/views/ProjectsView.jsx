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
            className="p-8 border border-[var(--border)] rounded-3xl hover:border-[var(--accent-gold)]/40 transition-all"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="flex justify-between items-start mb-6">
              <Code size={32} className="text-[var(--accent-gold)]" />
              <div className="flex items-center gap-1 text-[var(--accent-gold)] text-xs font-bold">
                <Star size={14} style={{ fill: 'var(--accent-gold)' }} /> {p.stars}
              </div>
            </div>
            <h4 className="text-xl font-black mb-2 uppercase text-[var(--text)]">{p.title}</h4>
            <p className="text-[var(--accent-gold)] text-[10px] font-mono mb-4 uppercase font-bold">{p.tech}</p>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">{p.desc}</p>
            <a
              href="https://github.com/dacc-unifeso/dacc-site"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[var(--text)] font-black text-[10px] tracking-widest uppercase hover:text-[var(--accent-gold)] transition"
            >
              Saber Mais <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
