import josLogo from '../assets/Jos Plateau_ Home of Peace.png'

export default function Logo({ id, className = '' }) {
  return (
    <span className={`flex items-center gap-3 text-lg font-extrabold ${className}`}>
      <span className="block h-8 w-8 overflow-hidden rounded-md">
        <img src={josLogo} alt="Jos Colour Fest logo" className="h-full w-full object-contain" />
      </span>
      Jos Colour Fest
    </span>
  )
}
