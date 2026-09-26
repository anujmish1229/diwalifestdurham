import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import { sponsorshipTiers } from "../../data/sponsorshipTiers";
import { BuntingStrip } from "../decorative";

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">
            Partners who help bring this festival to life
          </h2>
          <p className="mt-4 text-base leading-relaxed text-saffron-50/60">
            We proudly collaborate with organizations that share our
            commitment to community, culture, and inclusion. Their
            partnership strengthens our work and helps illuminate Durham
            Region.
          </p>
        </div>

        <BuntingStrip className="mx-auto mt-12 h-8 w-full max-w-4xl text-saffron-400" count={14} height={34} />

        <div className="mx-auto -mt-1 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col items-center justify-center gap-2 rounded-b-xl rounded-t-sm border border-t-0 border-white/10 bg-white/5 px-4 py-8 text-center transition hover:border-saffron-400/40 hover:bg-white/10"
            >
              <Award size={22} className="text-marigold-300" />
              <span className="font-display text-sm font-bold text-saffron-50">{tier.name}</span>
              <span className="text-xs text-saffron-50/40">{tier.subtitle}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-saffron-50/60">
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
