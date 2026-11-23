import { FAQ } from '../data/content.js'

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="section-title">Questions and answers</h2>
        <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 text-lg font-bold">
                {q}
                <span className="text-3xl font-light text-magenta transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-black/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
