import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import { sponsorshipTiers } from "../../data/sponsorshipTiers";

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-20 bg-diya-950 py-20 text-white sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow bg-white/10 text-saffron-200">
            Our Valued Sponsors
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Partners who help bring this festival to life
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            We proudly collaborate with organizations that share our
            commitment to community, culture, and inclusion. Their
            partnership strengthens our work and helps illuminate Durham
            Region.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center transition hover:border-saffron-400/40 hover:bg-white/10"
            >
              <Award size={22} className="text-saffron-300" />
              <span className="font-display text-sm font-semibold">{tier.name}</span>
              <span className="text-xs text-white/40">{tier.subtitle}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-white/60">
            Interested in joining them? Explore our sponsorship tiers, from
            Presenting and Gold-level opportunities to program-specific
            sponsorships.
          </p>
          <Link to="/sponsorship-packages" className="btn-primary">
            View Sponsorship Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
