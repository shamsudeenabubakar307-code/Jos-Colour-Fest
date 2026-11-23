import Logo from './Logo.jsx'
import { NAV_LINKS } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <Logo id="logo-footer" className="text-white" />
          <p className="mt-3">22 to 24 December 2026<br />Mees Palace, Eliel Centre</p>
        </div>
        <div>
          <p className="font-bold text-white">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white">About this site</p>
          <p className="mt-3">Jos Colour Fest is a fictional event created as a design demo. Dates, prices and numbers are placeholders.</p>
        </div>
      </div>
    </footer>
  )
}
