import { TICKETS } from '../data/content.js'

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#0a9b62" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TicketCard({ name, price, features, featured }) {
  return (
    <div className={`relative flex flex-col rounded-2xl bg-white p-8 ${featured ? 'border-2 border-magenta shadow-xl' : 'border border-black/10'}`}>
      {featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-magenta px-3 py-1 text-sm font-bold text-white">Best value</span>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-3 text-5xl font-extrabold">{price}</p>
      <ul className="my-6 grow space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-black/75"><Check />{f}</li>
        ))}
      </ul>
      <button className={`${featured ? 'btn-primary' : 'btn-night'} w-full`}>Choose {name.toLowerCase()}</button>
    </div>
  )
}

export default function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="section-title">Tickets</h2>
      <p className="mt-4 text-lg text-black/65">Prices are in naira and include all fees.</p>
      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {TICKETS.map((t) => <TicketCard key={t.name} {...t} />)}
      </div>
    </section>
  )
}
