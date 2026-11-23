import Logo from './Logo.jsx'
import { NAV_LINKS } from '../data/content.js'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top"><Logo id="logo-header" /></a>
        <nav className="hidden items-center gap-8 text-[15px] font-semibold md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-magenta">{label}</a>
          ))}
        </nav>
        <a href="#tickets" className="btn-primary !py-2.5">Get tickets</a>
      </div>
    </header>
  )
}
