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
      <h2 className="mt-4 text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white">
        {title}
        <span className="text-[#d4af37]">.</span>
      </h2>
      <div className="h-1.5 w-24 bg-gradient-to-r from-[#3d004c] to-[#d4af37] mt-6 rounded-full" />
    </div>
  )
}
