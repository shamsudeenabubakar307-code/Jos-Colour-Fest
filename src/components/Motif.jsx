// Ankara-inspired circle and diamond pattern used as the festival's brand mark.
export default function Motif({ id, className = '' }) {
  return (
    <svg className={`h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id={id} width="96" height="96" patternUnits="userSpaceOnUse">
          <rect width="96" height="96" fill="#1d1f6e" />
          <circle cx="48" cy="48" r="42" fill="#d6006f" />
          <circle cx="48" cy="48" r="30" fill="#ffc21a" />
          <circle cx="48" cy="48" r="19" fill="#0a9b62" />
          <circle cx="48" cy="48" r="8" fill="#f26a1b" />
          <path d="M0 0H16L0 16Z M96 0H80L96 16Z M0 96H16L0 80Z M96 96H80L96 80Z" fill="#0aa5b5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
