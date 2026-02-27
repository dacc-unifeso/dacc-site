/**
 * Botão acessível para alternar entre tema escuro e claro.
 */
import { Sun, Moon } from 'lucide-react'

/**
 * @param {Object} props
 * @param {'dark'|'light'} props.theme - Tema atual
 * @param {(theme: 'dark'|'light') => void} props.onThemeChange - Callback ao alternar
 */
export function ThemeToggle({ theme, onThemeChange }) {
  const isDark = theme === 'dark'
  const toggle = () => onThemeChange(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-gold)] hover:opacity-90 transition-opacity"
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      {isDark ? <Sun size={22} aria-hidden /> : <Moon size={22} aria-hidden />}
    </button>
  )
}
