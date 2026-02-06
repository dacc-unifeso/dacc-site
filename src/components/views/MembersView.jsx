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
                className="w-full aspect-square bg-[#3d004c]/10 rounded-full mb-8 border border-white/10 group-hover:border-[#d4af37] transition-all flex items-center justify-center relative overflow-hidden"
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
                    className="text-[#d4af37]/20 group-hover:text-[#d4af37] transition-colors"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d004c]/40 to-transparent" />
              </a>
            ) : (
              <div className="w-full aspect-square bg-[#3d004c]/10 rounded-full mb-8 border border-white/10 group-hover:border-[#d4af37] transition-all flex items-center justify-center relative overflow-hidden">
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
                    className="text-[#d4af37]/20 group-hover:text-[#d4af37] transition-colors"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d004c]/40 to-transparent" />
              </div>
            )}
            <h4 className="text-2xl font-black text-white">{m.n}</h4>
            <p className="text-[#d4af37] font-mono text-[10px] uppercase tracking-widest mt-1 font-bold">
              {m.r}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
