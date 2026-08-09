interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-diya-900";
  const subColor = variant === "light" ? "text-saffron-200" : "text-saffron-600";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="42" height="42" viewBox="0 0 64 64" className="shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logoFlame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#f96204" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
          <linearGradient id="logoBowl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bd63fb" />
            <stop offset="100%" stopColor="#6d17a0" />
          </linearGradient>
        </defs>
        <ellipse cx="32" cy="46" rx="22" ry="9" fill="url(#logoBowl)" />
        <path
          d="M10 46 C10 40 20 38 32 38 C44 38 54 40 54 46"
          fill="none"
          stroke="#33094e"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path d="M32 14 C25 24 25 30 32 34 C39 30 39 24 32 14 Z" fill="url(#logoFlame)" />
        <path d="M32 20 C29 25 29 28 32 30 C35 28 35 25 32 20 Z" fill="#fff3d6" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold tracking-tight ${textColor}`}>
          Durham Diwali
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.25em] ${subColor}`}>
          Festival
        </span>
      </span>
    </div>
  );
}
