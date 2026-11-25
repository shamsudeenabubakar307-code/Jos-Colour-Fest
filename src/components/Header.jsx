import { useState } from 'react'
import Logo from './Logo.jsx'
import { NAV_LINKS } from '../data/content.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-3.5">
          <a href="#top" onClick={() => setMenuOpen(false)}><Logo id="logo-header" /></a>
          <nav className="hidden items-center gap-8 text-[15px] font-semibold md:flex">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-magenta">{label}</a>
            ))}
          </nav>
          <a href="#tickets" className="btn-primary !py-2.5 hidden md:inline-flex">Get tickets</a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/10 px-3 text-ink hover:bg-black/5 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="text-sm font-semibold">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="flex flex-col gap-1 border-t border-black/10 py-3 text-[15px] font-semibold md:hidden">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 hover:bg-black/5 hover:text-magenta">
                {label}
              </a>
            ))}
            <a href="#tickets" onClick={() => setMenuOpen(false)} className="btn-primary mt-2">Get tickets</a>
          </nav>
        )}
      </div>
    </header>
  )
}
