import { Link } from "react-router-dom";
import { HCCD_SITE, festival } from "../../data/festival";

const ribbon = [
  "3,500+ people",
  "Durham Region's first Diwali drone show",
  "Music",
  "Dance",
  "Food",
  "Marketplace",
  "October 24, 2026",
  "North Ajax",
];

function Ribbon() {
  // Two identical runs side by side; the track slides by half its width and loops.
  const run = (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {ribbon.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap px-6 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {item}
          <span className="ml-12 inline-block h-2.5 w-2.5 rotate-45 bg-rani" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden bg-marigold-500 py-4 text-night">
      <p className="sr-only">{ribbon.join(", ")}</p>
      <div className="flex w-max animate-marquee">
        {run}
        {run}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="welcome">
      <div className="relative isolate flex min-h-[min(calc(100svh-72px-64px),720px)] items-end overflow-hidden">
        <img
          src="/hero-event.jpg"
          alt="Community leaders, elected officials and police representatives on stage at the Durham Diwali Festival, October 24, 2026"
          width={1600}
          height={1067}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_30%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/75 to-night/10 lg:bg-gradient-to-r lg:from-night lg:via-night/70 lg:to-transparent"
          aria-hidden="true"
        />

        <div className="container-page pb-14 pt-24 sm:pb-16">
          <p className="text-sm font-semibold text-cream/85">
            <span className="text-marigold-400">{festival.date}</span>, {festival.venue}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.5rem,9vw,8.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em]">
            Durham Region&rsquo;s first <span className="text-marigold-500">Diwali</span>{" "}
            <span className="text-rani-light">festival.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
            More than 3,500 people came to North Ajax for a free evening of music, dance, food, a marketplace and
            the region&rsquo;s first Diwali drone show.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/#recap" className="btn-primary">
              See the night
            </Link>
            <Link to="/sponsorship-packages" className="btn-ghost">
              Support us
            </Link>
          </div>
          <p className="mt-8 text-sm text-cream/65">
            Presented by the{" "}
            <a
              href={HCCD_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream underline decoration-rani-light/60 underline-offset-4 hover:text-rani-light"
            >
              Hindu Community Centre of Durham ↗
            </a>
          </p>
        </div>
      </div>

      <Ribbon />
    </section>
  );
}
