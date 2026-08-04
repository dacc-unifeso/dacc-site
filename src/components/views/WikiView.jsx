/**
 * View Wiki de Sobrevivência: guia do campus em cards com ícones.
 */
import { Cpu, Coffee, Info, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../Badge'
import { SectionHeader } from '../SectionHeader'
import { SURVIVAL_GUIDE } from '../../config'

const ICON_MAP = { Cpu, Coffee, Info, MapPin }

export function ClickableHeading({ type: Tag = 'h2', url, children }) {
  const hasLink = Boolean(url) && url !== '#'
  const isInternal = url?.startsWith('/')

  const className = 'group relative inline-block pb-1 text-[var(--text)]'
  const underline = (
    <span
      className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[var(--text)] transition-transform duration-300 ease-out group-hover:scale-x-100"
    />
  )

  return (
    <Tag className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tighter text-[var(--text)]">
      {hasLink && isInternal ? (
        <Link to={url} className={className}>
          {children}
          {underline}
        </Link>
      ) : hasLink ? (
        <a href={url} className={className}>
          {children}
          {underline}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </Tag>
  )
}

export function WikiView() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto animate-in slide-in-from-right duration-500">
      <SectionHeader badge={<Badge>Guia do Campus</Badge>} title="Wiki de Sobrevivência" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {SURVIVAL_GUIDE.map((item, i) => {
          const Icon = ICON_MAP[item.icon]
          return (
            <article
              key={i}
              className="p-8 md:p-10 border border-[var(--border)] rounded-3xl hover:border-[var(--border-strong)] transition-all group shadow-[var(--shadow-sm)]"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-[var(--accent-gold)] mb-6 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: 'var(--accent-purple-soft)' }}
              >
                {Icon ? <Icon size={24} aria-hidden /> : null}
              </div>
              <ClickableHeading type="h2" url={item.url}>
                {item.title}
              </ClickableHeading>
              <p className="text-[var(--text-muted)] leading-relaxed font-medium text-sm md:text-base">
                {item.desc}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
