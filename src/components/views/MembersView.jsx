/**
 * View Equipe DACC: grid de membros da gestão com avatar placeholder e cargo.
 * Mantém gradientes e bordas originais.
 */
import { Users } from 'lucide-react'
import { Badge } from '../Badge'
import { SectionHeader } from '../SectionHeader'
import { MEMBERS } from '../../config'

export function MembersView() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <SectionHeader badge={<Badge>Gestão 26/28</Badge>} title="Equipe DACC" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {MEMBERS.map((m, i) => (
          <div key={i} className="text-center group">
            {m.ln ? (
              <a
                href={m.ln}
                target="_blank"
                rel="noreferrer"
                aria-label={`LinkedIn de ${m.n}`}
                className="w-full aspect-square rounded-full mb-8 border border-[var(--border)] group-hover:border-[var(--accent-gold)] transition-all flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: 'var(--accent-purple-soft)' }}
              >
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.n}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Users
                    size={64}
                    className="opacity-20 group-hover:opacity-100 transition-colors"
                    style={{ color: 'var(--accent-gold)' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-purple)]/40 to-transparent" />
              </a>
            ) : (
              <div
                className="w-full aspect-square rounded-full mb-8 border border-[var(--border)] group-hover:border-[var(--accent-gold)] transition-all flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: 'var(--accent-purple-soft)' }}
              >
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.n}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Users
                    size={64}
                    className="opacity-20 group-hover:opacity-100 transition-colors"
                    style={{ color: 'var(--accent-gold)' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-purple)]/40 to-transparent" />
              </div>
            )}
            <h4 className="text-2xl font-black text-[var(--text)]">{m.n}</h4>
            <p className="text-[var(--accent-gold)] font-mono text-[10px] uppercase tracking-widest mt-1 font-bold">
              {m.r}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
