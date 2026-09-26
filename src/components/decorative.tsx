function curvePoint(t: number, w: number, sag: number) {
  const p0 = { x: 0, y: 0 };
  const p1 = { x: w / 2, y: sag };
  const p2 = { x: w, y: 0 };
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
  return { x, y };
}

const BULB_COLORS = ["#ffd166", "#ff9d32", "#ffc233", "#ff7f0d"];

export function StringLights({
  className = "",
  count = 16,
  height = 56,
}: {
  className?: string;
  count?: number;
  height?: number;
}) {
  const width = 800;
  const sag = height - 14;
  const bulbs = Array.from({ length: count }).map((_, i) => {
    const t = 0.02 + (i / (count - 1)) * 0.96;
    const { x, y } = curvePoint(t, width, sag);
    const color = BULB_COLORS[i % BULB_COLORS.length];
    const big = i % 5 === 0;
    return { x, y, color, big, delay: (i * 0.37) % 2.6 };
  });
  const wireD = `M0,0 Q${width / 2},${sag} ${width},0`;

  return (
    <svg
      viewBox={`0 -6 ${width} ${height}`}
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d={wireD} fill="none" stroke="rgba(0,0,0,0.55)" strokeWidth={1.5} />
      {bulbs.map((b, i) => (
        <g key={i} transform={`translate(${b.x}, ${b.y})`}>
          <circle
            r={b.big ? 10 : 7}
            fill={b.color}
            opacity={0.35}
            filter="blur(4px)"
            style={{
              animation: `twinkle 2.6s ease-in-out ${b.delay}s infinite`,
              transformOrigin: "center",
            }}
          />
          <circle
            r={b.big ? 4.5 : 3}
            fill={b.color}
            style={{
              animation: `twinkle 2.6s ease-in-out ${b.delay}s infinite`,
              transformOrigin: "center",
            }}
          />
          <line x1={0} y1={-3} x2={0} y2={0} stroke="rgba(0,0,0,0.5)" strokeWidth={1} />
        </g>
      ))}
    </svg>
  );
}

const FLAG_COLORS = ["#ff7f0d", "#a238e8", "#ffc233", "#ce4805"];

export function BuntingStrip({
  className = "",
  count = 12,
  height = 46,
}: {
  className?: string;
  count?: number;
  height?: number;
}) {
  const width = 800;
  const sag = height - 20;
  const flags = Array.from({ length: count }).map((_, i) => {
    const t = 0.03 + (i / (count - 1)) * 0.94;
    const { x, y } = curvePoint(t, width, sag);
    return { x, y, color: FLAG_COLORS[i % FLAG_COLORS.length] };
  });
  const wireD = `M0,0 Q${width / 2},${sag} ${width},0`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d={wireD} fill="none" stroke="rgba(255,209,102,0.35)" strokeWidth={1.5} />
      {flags.map((f, i) => (
        <polygon
          key={i}
          points={`${f.x - 11},${f.y} ${f.x + 11},${f.y} ${f.x},${f.y + 22}`}
          fill={f.color}
          opacity={0.9}
        />
      ))}
    </svg>
  );
}

export function RangoliMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
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

export function LanternGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute rounded-full blur-2xl ${className}`} aria-hidden="true" />
  );
}
