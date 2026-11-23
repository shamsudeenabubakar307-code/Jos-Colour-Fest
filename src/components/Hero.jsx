import Motif from './Motif.jsx'
import { STATS } from '../data/content.js'

export default function Hero() {
  return (
    <section className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-lg font-semibold text-sun">12 to 14 December 2026, Freedom Park, Lagos</p>
          <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Three days of art, music and food in Lagos.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Eko Colour Fest brings dyers, tailors, musicians, poets and cooks together in one park for a weekend built around Nigerian craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tickets" className="btn-sun">Buy tickets</a>
            <a href="#schedule" className="btn-outline">View the schedule</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
            <Motif id="motif-hero" />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-5 py-4 text-ink shadow-xl">
            <p className="text-sm font-semibold text-black/60">Expected attendance</p>
            <p className="text-2xl font-extrabold">5,000 guests</p>
          </div>
        </div>
      </div>
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 border-t border-white/15 px-5 py-8 md:grid-cols-4">
        {STATS.map(([n, label]) => (
          <div key={label}>
            <dt className="sr-only">{label}</dt>
            <dd><span className="text-3xl font-extrabold text-sun">{n}</span> <span className="text-white/75">{label}</span></dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
