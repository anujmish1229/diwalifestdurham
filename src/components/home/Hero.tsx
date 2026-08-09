import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { RangoliMotif } from "../decorative";

export default function Hero() {
  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-gradient-to-br from-diya-900 via-diya-800 to-diya-950 bg-diya-radial text-white"
    >
      <RangoliMotif className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-white/10" />
      <RangoliMotif className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] text-saffron-500/10" />

      <div className="container-page relative py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="section-eyebrow bg-white/10 text-saffron-200">
            <Sparkles size={14} /> First-ever Diwali festival in Ajax
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Experience the Joy of{" "}
            <span className="bg-gradient-to-r from-saffron-300 to-marigold-400 bg-clip-text text-transparent">
              Diwali
            </span>{" "}
            in Ajax
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Join us in 2026 for a vibrant Festival of Lights featuring music,
            dance, food, and community celebration across Durham Region.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} className="text-saffron-300" /> October 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-saffron-300" /> North Ajax, Durham Region
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/#newsletter" className="btn-primary">
              Get Event Updates
            </Link>
            <Link to="/sponsorship-packages" className="btn-secondary">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/20">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-3 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          <span>Music</span>
          <span className="text-saffron-400">&bull;</span>
          <span>Dance</span>
          <span className="text-saffron-400">&bull;</span>
          <span>Food</span>
          <span className="text-saffron-400">&bull;</span>
          <span>Marketplace</span>
          <span className="text-saffron-400">&bull;</span>
          <span>Fireworks &amp; Light Show</span>
        </div>
      </div>
    </section>
  );
}
