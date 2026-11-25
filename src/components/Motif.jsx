export default function Motif({ id }) {
  return (
    <svg
      id={id}
      viewBox="0 0 600 600"
      className="h-full w-full"
      role="img"
      aria-label="Colourful festival artwork"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="600" fill="#ffc21a" />
      <circle cx="430" cy="145" r="118" fill="#f26a1b" />
      <path d="M0 415 140 270l110 110 112-180 238 260v140H0Z" fill="#0aa5b5" />
      <path d="m0 475 144-115 116 100 120-124 220 160v104H0Z" fill="#0a9b62" />
      <path d="M0 520c100-68 165-68 265 0s165 68 335 0v80H0Z" fill="#d6006f" />
      <circle cx="150" cy="155" r="48" fill="#fff" />
      <circle cx="150" cy="155" r="25" fill="#d6006f" />
      <path d="M72 250h115m-90-34v68m330 78h110m-82-32v64" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
    </svg>
  )
}
