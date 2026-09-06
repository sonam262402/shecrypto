export function GridPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="1" fill="currentColor" className="text-deep-purple" />
            <path d="M 48 24 L 24 24 M 24 0 L 24 48" stroke="currentColor" strokeWidth="0.5" className="text-electric" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-deep-purple/10 to-electric/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-coral/10 to-blush blur-3xl" />
    </div>
  );
}
