import { useState } from 'react'

const isEmail = (v) => /\S+@\S+\.\S+/.test(v)

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // Replace this with a real API call to your mailing list.
  const subscribe = () => { if (isEmail(email)) setSent(true) }

  return (
    <section className="bg-magenta text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Get festival updates</h2>
          <p className="mt-2 text-lg text-white/85">Line-up news and ticket releases, once a month.</p>
        </div>
        {sent ? (
          <p className="rounded-lg bg-white px-5 py-3 text-lg font-bold text-ink">Subscribed. We will write to {email}.</p>
        ) : (
          <div className="flex w-full max-w-md gap-2">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 grow rounded-lg px-4 py-3 text-lg text-ink placeholder:text-black/40"
            />
            <button onClick={subscribe} className="btn-night">Subscribe</button>
          </div>
        )}
      </div>
    </section>
  )
}
