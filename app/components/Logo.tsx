export default function Logo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle frame */}
      <circle cx="22" cy="22" r="21" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.3" />

      {/* Geometric cube structure - abstract representation of "code" + "cuboid" */}
      {/* Left face */}
      <path
        d="M 12 16 L 18 12 L 18 28 L 12 32 Z"
        fill="url(#grad1)"
        opacity="0.9"
      />

      {/* Right face */}
      <path
        d="M 32 16 L 26 12 L 26 28 L 32 32 Z"
        fill="url(#grad2)"
        opacity="0.8"
      />

      {/* Top face */}
      <path
        d="M 12 16 L 18 12 L 26 12 L 20 16 Z"
        fill="url(#grad3)"
        opacity="0.7"
      />

      {/* Center accent - code brackets */}
      <g opacity="0.6">
        <line x1="20" y1="18" x2="16" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <line x1="16" y1="22" x2="20" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="18" x2="28" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <line x1="28" y1="22" x2="24" y2="26" stroke="currentColor" strokeWidth="1.5" />
      </g>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b35" />
          <stop offset="100%" stopColor="#ff1744" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff1744" />
          <stop offset="100%" stopColor="#ff6b35" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#004e89" />
          <stop offset="100%" stopColor="#ff6b35" />
        </linearGradient>
      </defs>
    </svg>
  );
}
