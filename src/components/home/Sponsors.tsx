import { Link } from "react-router-dom";
import { sponsorshipTiers } from "../../data/sponsorshipTiers";
import { sponsors } from "../../data/festival";

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-20 bg-cream-dark py-20 text-night sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="section-heading">
            Thank you to our <span className="text-saffron-600">sponsors.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
            Organizations that share our commitment to community, culture and inclusion made the first festival
            possible.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {sponsors.map((s) => (
            <div key={s.name} className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-card">
              <img src={s.logo} alt={`${s.name} logo`} className="h-24 w-auto object-contain" />
              <p className="mt-6 font-display text-lg font-bold tracking-tight text-night">{s.name}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-12">
          <div className="flex flex-wrap items-center gap-3 border-t border-night/10 pt-10">
            <span className="mr-2 font-display text-xl font-bold">Want to join them? Sponsor the next festival:</span>
            {sponsorshipTiers.map((t) => (
              <Link
                key={t.id}
                to="/sponsorship-packages"
                className="rounded-full border border-night/15 bg-white/60 px-4 py-2 text-sm transition-colors hover:border-saffron-600 hover:text-saffron-700"
              >
                <span className="font-bold">{t.name}</span> <span className="text-ink/55">{t.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
