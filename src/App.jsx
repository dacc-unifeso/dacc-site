/**
 * @file App.jsx
 * @description Portal Oficial do Diretório Acadêmico de Ciência da Computação - Unifeso.
 */
import { useState, useEffect } from 'react'
import { NAV_ITEMS } from './config'
import { Navbar, Footer } from './components'
import { HomeView, WikiView, ProjectsView, ShopView, MembersView } from './components/views'

const VIEW_MAP = {
  home: HomeView,
  wiki: WikiView,
  projects: ProjectsView,
  shop: ShopView,
  members: MembersView,
}

const STORAGE_KEY = 'dacc-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem(STORAGE_KEY) || 'dark') === 'light' ? 'light' : 'dark'
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  const View = VIEW_MAP[activePage] ?? HomeView

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] font-sans antialiased overflow-x-hidden">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        onThemeChange={setTheme}
      />

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-sm pt-24 px-6"
          style={{ backgroundColor: 'var(--overlay-bg)' }}
          aria-hidden
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setActivePage(id)
                  setIsMenuOpen(false)
                }}
                className={`px-5 py-3 rounded-xl text-left text-[11px] font-black tracking-widest uppercase w-full ${
                  activePage === id
                    ? 'bg-[var(--accent-purple)] text-[var(--accent-gold)] border border-[var(--border)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="relative pt-20">
        <View />
      </main>

      <Footer />
    </div>
  )
}
