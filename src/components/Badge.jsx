/**
 * Badge de destaque para seções (Guia do Campus, DACC Wear, etc.).
 * Mantém as classes Tailwind originais para identidade visual (roxo/dourado).
 * @param {Object} props
 * @param {React.ReactNode} props.children - Texto do badge
 * @param {'gold'|'purple'} [props.variant='gold'] - Variante visual
 */
export function Badge({ children, variant = 'gold' }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border shadow-sm ${
        variant === 'gold'
          ? 'bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]'
          : 'bg-[#3d004c]/20 border-[#3d004c]/40 text-purple-300'
      }`}
    >
      {children}
    </span>
  )
}
