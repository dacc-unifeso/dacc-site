/**
 * Botão acessível para alternar entre tema escuro e claro.
 */
import { Sun, Moon } from 'lucide-react'

/**
 * @param {Object} props
 * @param {'dark'|'light'} props.theme
 * @param {(theme: 'dark'|'light') => void} props.onThemeChange
 */
export function ThemeToggle({ theme, onThemeChange }) {
  const isDark = theme === 'dark'
  const toggle = () => onThemeChange(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn btn-icon"
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      {isDark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
    </button>
  )
}
