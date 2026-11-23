import { useState } from 'react'
import { SCHEDULE } from '../data/content.js'

export default function Schedule() {
  const [day, setDay] = useState('Saturday')

  return (
    <section id="schedule" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="section-title">Schedule</h2>
        <div className="mt-8 inline-flex rounded-xl bg-paper p-1" role="tablist">
          {Object.keys(SCHEDULE).map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={d === day}
              onClick={() => setDay(d)}
              className={`rounded-lg px-5 py-2 text-base font-semibold transition-colors ${
                d === day ? 'bg-night text-white shadow' : 'text-black/65 hover:text-black'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <ul className="mt-6 overflow-hidden rounded-2xl border border-black/10">
          {SCHEDULE[day].map(([time, what, tag], i) => (
            <li
              key={time}
              className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:gap-8 ${i ? 'border-t border-black/10' : ''}`}
            >
              <span className="w-28 shrink-0 text-lg font-bold text-magenta">{time}</span>
              <span className="grow text-lg font-semibold">{what}</span>
              <span className="text-sm font-semibold text-black/55">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
