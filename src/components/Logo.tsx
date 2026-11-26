import { useId } from "react";

interface LogoProps {
  className?: string;
}

/**
 * The festival mark: a diya whose flame runs from rani pink to marigold, with
 * three drone lights rising above it for the 2026 drone show. Same artwork as
 * public/favicon.svg; gradient ids are made unique so two marks can share a page.
 */
export default function Logo({ className = "h-12 w-12" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const flame = `${id}-flame`;
  const bowl = `${id}-bowl`;
  const glow = `${id}-glow`;

  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} role="img" aria-label="Durham Diwali Festival">
      <defs>
        <linearGradient id={flame} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff6aa6" />
          <stop offset="0.5" stopColor="#ffc233" />
          <stop offset="1" stopColor="#ff7f0d" />
        </linearGradient>
        <linearGradient id={bowl} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff9d32" />
          <stop offset="1" stopColor="#ce4805" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffc233" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffc233" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="25" r="19" fill={`url(#${glow})`} />
      <circle cx="19" cy="8.5" r="2.2" fill="#ff6aa6" />
      <circle cx="32" cy="4" r="2.2" fill="#ffd166" />
      <circle cx="45" cy="8.5" r="2.2" fill="#ff6aa6" />
      <path
        d="M32 9.5c6.8 8.6 11 14.6 11 21.6 0 6.4-4.9 11.4-11 11.4s-11-5-11-11.4c0-7 4.2-13 11-21.6z"
        fill={`url(#${flame})`}
      />
      <path d="M32 23.5c3 4.1 4.8 6.9 4.8 9.8 0 3-2.2 5-4.8 5s-4.8-2-4.8-5c0-2.9 1.8-5.7 4.8-9.8z" fill="#fff8ed" />
      <path
        d="M10 41.5h42.5c1.8 0 3.5-.6 4.5-1.8-.3 2.7-1.7 4.8-3.8 5.9C50.6 51.4 42.3 56 32 56c-11.2 0-19.8-5.8-22-14.5z"
        fill={`url(#${bowl})`}
      />
      <ellipse cx="31.5" cy="41.6" rx="21.5" ry="2.4" fill="#ffd166" />
    </svg>
  );
}
