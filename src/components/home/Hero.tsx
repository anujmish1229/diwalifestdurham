import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Download } from "lucide-react";
import { StringLights, BuntingStrip, RangoliMotif } from "../decorative";

const FLYER_PDF = "/Durham%20Diwali%20-%20Event%20Flyer.pdf";

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
            Join us for a free community celebration with a spectacular drone
            show, food, and culture &mdash; the first Festival of Lights this
            region has ever hosted.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-semibold text-saffron-50/70">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} className="text-marigold-300" /> Saturday, October 24, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} className="text-marigold-300" /> 5:30 PM &ndash; 8:30 PM
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-marigold-300" /> J. Clarke Richardson / Notre Dame HS grounds &amp; adjacent Sun City development lands, Ajax
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

        {/* The flyer, pinned up like a poster on the stall wall. */}
        <figure className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs lg:mx-0 lg:justify-self-end">
          <a
            href={FLYER_PDF}
            target="_blank"
            rel="noopener"
            aria-label="Open the event flyer (PDF)"
            className="group block rotate-2 transition duration-300 hover:rotate-0 hover:-translate-y-1 motion-reduce:transition-none"
          >
            <img
              src="/flyer.jpg"
              alt="Durham Diwali Festival flyer: Saturday, October 24, 5:30 PM to 8:30 PM at J. Clarke Richardson / Notre Dame HS grounds and adjacent Sun City development lands, Ajax. Spectacular drone show, food, culture. Free community celebration."
              width={787}
              height={1400}
              className="w-full rounded-2xl shadow-lantern ring-1 ring-marigold-400/30"
            />
          </a>
          <figcaption className="mt-5 flex justify-center">
            <a
              href={FLYER_PDF}
              download="Durham Diwali Festival Flyer.pdf"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-marigold-400 transition hover:text-saffron-200"
            >
              <Download size={14} aria-hidden="true" /> Download the flyer
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="relative border-t border-white/10 bg-black/25 pt-2">
        <BuntingStrip className="h-9 w-full text-saffron-400" count={18} height={38} />
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-2 pb-5 pt-1 text-xs font-bold uppercase tracking-[0.2em] text-saffron-50/60">
          <span>Music</span>
          <span>Dance</span>
          <span>Food</span>
          <span>Marketplace</span>
          <span>Drone Show</span>
        </div>
      </div>
    </section>
  );
}
