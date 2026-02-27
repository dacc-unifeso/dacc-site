/**
 * Cabeçalho de secção com Badge, título e barra em gradiente.
 * @param {Object} props
 * @param {React.ReactNode} props.badge - Conteúdo do badge
 * @param {string} props.title - Título da seção
 */
export function SectionHeader({ badge, title }) {
  return (
    <div className="mb-16">
      {badge}
      <h2 className="mt-4 text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-[var(--text)]">
        {title}
        <span className="text-[var(--accent-gold)]">.</span>
      </h2>
      <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-gold)] mt-6 rounded-full" />
    </div>
  )
}
