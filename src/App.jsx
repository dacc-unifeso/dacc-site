/**
 * @file App.jsx
 * @description Portal Oficial do Diretório Acadêmico de Ciência da Computação - Unifeso.
 */
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { NAV_ITEMS, SURVIVAL_GUIDE } from './config'
import { Navbar, Footer } from './components'
import {
  HomeView,
  WikiView,
  ProjectsView,
  ShopView,
  MembersView,
  IntroductionArticle,
} from './components/views'

const VIEW_MAP = {
  home: HomeView,
  wiki: WikiView,
  projects: ProjectsView,
  shop: ShopView,
  members: MembersView,
}

const STORAGE_KEY = 'dacc-theme'
const CONTEUDO_TECNICO_URL =
  SURVIVAL_GUIDE.find((item) => item.url?.startsWith('/'))?.url ?? '/conteudo-tecnico'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem(STORAGE_KEY) || 'dark') === 'light' ? 'light' : 'dark'
}

function Main() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  const isArticlePage = location.pathname === CONTEUDO_TECNICO_URL

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage, location.pathname])

  const handleSetActivePage = (page) => {
    setActivePage(page)
    if (location.pathname !== '/') navigate('/')
  }

  const View = VIEW_MAP[activePage] ?? HomeView

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] font-sans antialiased overflow-x-hidden">
      <Navbar
        activePage={isArticlePage ? null : activePage}
        setActivePage={handleSetActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        onThemeChange={setTheme}
      />

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-md pt-24 px-5"
          style={{ backgroundColor: 'var(--overlay-bg)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div
            className="flex flex-col gap-1.5 p-3 rounded-2xl border border-[var(--border)] shadow-[var(--shadow-md)] max-w-md mx-auto"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  handleSetActivePage(id)
                  setIsMenuOpen(false)
                }}
                className={`nav-link w-full justify-start min-h-12 px-5 ${
                  !isArticlePage && activePage === id ? 'nav-link-active' : ''
                }`}
                aria-current={!isArticlePage && activePage === id ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="relative pt-20">
        {isArticlePage ? (
          <IntroductionArticle />
        ) : activePage === 'home' ? (
          <HomeView onNavigate={handleSetActivePage} />
        ) : (
          <View />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={CONTEUDO_TECNICO_URL} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
