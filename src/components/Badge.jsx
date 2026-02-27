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
          ? 'bg-[var(--accent-gold-soft)] border-[var(--border)] text-[var(--accent-gold)]'
          : 'bg-[var(--accent-purple-soft)] border-[var(--accent-purple)]/40 text-[var(--accent-purple)]'
      }`}
    >
      {children}
    </span>
  )
}
