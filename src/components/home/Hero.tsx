import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Award, Store, ArrowUpRight } from "lucide-react";
import { StringLights, BuntingStrip, RangoliMotif } from "../decorative";

export default function Hero() {
  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-night-sky bg-stars"
    >
      <RangoliMotif className="pointer-events-none absolute -right-16 top-16 h-72 w-72 text-white/5 sm:h-96 sm:w-96" />

      <StringLights className="h-10 w-full text-saffron-300 sm:h-14" count={20} height={40} />

      <div className="container-page relative grid gap-14 pb-20 pt-6 sm:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:pt-10">
        <div className="max-w-2xl">
          <h1 className="font-marquee text-3xl leading-[1.25] text-saffron-50 sm:text-4xl lg:text-[2.65rem]">
            Ajax&rsquo;s first-ever{" "}
            <span className="relative inline-block text-marigold-300">
              Diwali
              <svg
                viewBox="0 0 220 18"
                className="absolute -bottom-2 left-0 h-3 w-full text-saffron-500"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 12 C 50 2, 90 16, 130 8 S 190 2, 218 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            festival lights up Durham Region.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-saffron-50/70">
            Join us in October 2026 for a night market of music, dance, food,
            and community &mdash; the first Festival of Lights this region has
            ever hosted.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-semibold text-saffron-50/70">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} className="text-marigold-300" /> October 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-marigold-300" /> North Ajax, Durham Region
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

        <div className="relative mx-auto flex w-full max-w-sm flex-col gap-5 sm:max-w-md lg:mx-0">
          <Link
            to="/sponsorship-packages"
            className="stall-card group flex -rotate-1 items-start gap-4 px-6 pb-6 pt-8 transition hover:-translate-y-1 hover:rotate-0"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
              <Award size={20} />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between font-display text-base font-bold text-diya-900">
                Become a Sponsor
                <ArrowUpRight size={16} className="text-diya-400 transition group-hover:text-saffron-600" />
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-ink/85">
                Six tiers, from Community Friend to Presenting Sponsor.
              </span>
            </span>
          </Link>

          <Link
            to="/vendor-packages"
            className="stall-card stall-card--diya group flex rotate-1 items-start gap-4 px-6 pb-6 pt-8 transition hover:-translate-y-1 hover:rotate-0 sm:self-end sm:w-[92%]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-diya-100 text-diya-700">
              <Store size={20} />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between font-display text-base font-bold text-diya-900">
                Apply as a Vendor
                <ArrowUpRight size={16} className="text-diya-400 transition group-hover:text-diya-700" />
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-ink/85">
                Food, marketplace, and cultural vendor booths available.
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/25 pt-2">
        <BuntingStrip className="h-9 w-full text-saffron-400" count={18} height={38} />
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-2 pb-5 pt-1 text-xs font-bold uppercase tracking-[0.2em] text-saffron-50/60">
          <span>Music</span>
          <span>Dance</span>
          <span>Food</span>
          <span>Marketplace</span>
          <span>Fireworks &amp; Light Show</span>
        </div>
      </div>
    </section>
  );
}
