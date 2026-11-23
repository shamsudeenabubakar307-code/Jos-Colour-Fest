import { PROGRAMMES } from '../data/content.js'

function ProgrammeCard({ title, tag, color, text }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="h-2" style={{ background: color }} />
      <div className="p-6">
        <span className="rounded-full px-3 py-1 text-sm font-bold text-white" style={{ background: color }}>{tag}</span>
        <h3 className="mt-4 text-2xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-black/65">{text}</p>
      </div>
    </article>
  )
}

export default function Programmes() {
  return (
    <section id="programme" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="section-title max-w-2xl">Six programmes, one park</h2>
      <p className="mt-4 max-w-2xl text-lg text-black/65">
        Each programme has its own space, so you can move between them or stay for the whole day.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMMES.map((p) => <ProgrammeCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
