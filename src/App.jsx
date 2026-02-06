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

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  const View = VIEW_MAP[activePage] ?? HomeView

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#d4af37] selection:text-black font-sans antialiased overflow-x-hidden">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-sm pt-24 px-6"
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
                    ? 'bg-[#3d004c] text-[#d4af37] border border-[#d4af37]/30'
                    : 'text-gray-400 hover:text-white'
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
