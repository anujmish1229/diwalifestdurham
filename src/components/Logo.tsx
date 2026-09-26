interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo({ className = "", glow = true }: LogoProps) {
  return (
    <span className="relative inline-flex shrink-0">
      {glow && (
        <span
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-marigold-400/60 to-saffron-500/40 blur-md"
        />
      )}
      <img
        src="/logo.jpg"
        alt="Durham Diwali Festival"
        className={`relative h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-saffron-300/40 ${className}`}
      />
    </span>
  );
}
