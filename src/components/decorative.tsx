export function RangoliMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g opacity="0.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="55"
            rx="10"
            ry="26"
            fill="currentColor"
            transform={`rotate(${i * 30} 100 100)`}
            opacity={0.55}
          />
        ))}
        <circle cx="100" cy="100" r="14" fill="currentColor" />
        <circle cx="100" cy="100" r="34" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}

export function DiyaRow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} aria-hidden="true" fill="none">
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 40}, 0)`}>
          <path d="M6 26 C6 22 12 21 20 21 C28 21 34 22 34 26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 8 C16 14 16 18 20 20 C24 18 24 14 20 8 Z" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function SparkleField({ className = "" }: { className?: string }) {
  const sparkles = [
    { x: 20, y: 30, s: 6 },
    { x: 340, y: 60, s: 4 },
    { x: 120, y: 15, s: 5 },
    { x: 260, y: 20, s: 3 },
    { x: 400, y: 100, s: 5 },
    { x: 60, y: 120, s: 4 },
  ];
  return (
    <svg viewBox="0 0 440 160" className={className} aria-hidden="true" fill="none">
      {sparkles.map((sp, i) => (
        <path
          key={i}
          d={`M${sp.x} ${sp.y - sp.s} L${sp.x + sp.s * 0.3} ${sp.y - sp.s * 0.3} L${sp.x + sp.s} ${sp.y} L${sp.x + sp.s * 0.3} ${sp.y + sp.s * 0.3} L${sp.x} ${sp.y + sp.s} L${sp.x - sp.s * 0.3} ${sp.y + sp.s * 0.3} L${sp.x - sp.s} ${sp.y} L${sp.x - sp.s * 0.3} ${sp.y - sp.s * 0.3} Z`}
          fill="currentColor"
          opacity={0.7}
        />
      ))}
    </svg>
  );
}
