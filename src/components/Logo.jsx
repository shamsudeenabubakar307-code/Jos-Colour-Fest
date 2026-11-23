import Motif from './Motif.jsx'

export default function Logo({ id, className = '' }) {
  return (
    <span className={`flex items-center gap-3 text-lg font-extrabold ${className}`}>
      <span className="block h-8 w-8 overflow-hidden rounded-md"><Motif id={id} /></span>
      Jos Colour Fest
    </span>
  )
}
