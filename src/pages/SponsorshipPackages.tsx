import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import { sponsorshipTiers } from "../data/sponsorshipTiers";

export default function SponsorshipPackages() {
  return (
    <>
      <PageHero
        title="Sponsorship Packages"
        description="Illuminate Durham Region's first-ever Diwali festival: six tiers of partnership designed to fit organizations of every size."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="stall-card mx-auto max-w-3xl p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-saffron-200 pb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-saffron-600">
              <Mail size={14} /> Letter to Potential Sponsors
            </span>
            <span className="text-xs font-semibold text-ink/70">October 2026 &middot; North Ajax</span>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/90">
            <p>Dear Community Partner,</p>
            <p>
              We are pleased to introduce the Durham Diwali Festival, a
              landmark cultural event coming to our region for the very
              first time in October 2026. Founded in partnership with the
              Durham District School Board, this festival will bring the
              spirit, colour, and joy of the Festival of Lights to the heart
              of North Ajax.
            </p>
            <p>
              Diwali is one of the world&rsquo;s most cherished cultural
              festivals, symbolizing light, hope, and the triumph of good.
              Our vision is to create an inclusive, family-friendly event
              that reflects the diversity of Durham Region and offers
              residents a meaningful opportunity to celebrate culture,
              community, and connection.
            </p>
            <p>
              To bring this festival to life, we are seeking partners who
              share our commitment to equity, inclusion, and community
              building. As a sponsor, your organization will play a vital
              role in shaping a new annual tradition while gaining valuable
              visibility and engagement with thousands of residents across
              the region.
            </p>
            <p>
              We offer a range of sponsorship tiers from Presenting and
              Gold-level opportunities to program-specific sponsorships such
              as the Fireworks &amp; Light Show Sponsor. Each tier is
              designed to provide meaningful recognition, brand visibility,
              and opportunities for community impact.
            </p>
            <div>
              <p>Your support will help us deliver:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "A vibrant cultural program featuring music, dance, and artistic performances",
                  "A diverse marketplace of local vendors and food experiences",
                  "Family-friendly activities and youth engagement opportunities",
                  "A safe, accessible, and welcoming environment for all attendees",
                  "A signature fireworks and light show to close the evening",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-saffron-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              We would be honoured to partner with you as we illuminate
              Durham with its first Diwali celebration. Together, we can
              build a festival that brings people together, celebrates our
              region&rsquo;s diversity, and becomes a cherished tradition for
              years to come.
            </p>
            <p className="pt-2">
              Warm regards,
              <br />
              Durham Diwali Festival Organizing Team
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="section-heading">Choose your tier</h2>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`stall-card relative flex flex-col p-7 ${
                tier.featured ? "shadow-lantern ring-2 ring-marigold-400/60" : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 left-7 rounded-full bg-saffron-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                  Top Tier
                </span>
              )}
              <h3 className="font-display text-xl font-extrabold text-diya-900">
                {tier.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wide text-saffron-600">
                {tier.subtitle}
              </p>
              <p className="mt-4 font-display text-3xl font-extrabold text-diya-900">
                {tier.price}
              </p>
              <p className="mt-3 text-sm italic text-ink/80">{tier.tagline}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink/90">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0 text-saffron-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className={tier.featured ? "btn-primary mt-7" : "btn-outline mt-7"}
              >
                Become a {tier.name} Sponsor
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <Mail size={24} className="text-marigold-300" />
          <h3 className="font-display text-xl font-bold text-saffron-50">
            Have questions about sponsorship?
          </h3>
          <p className="max-w-md text-sm text-saffron-50/60">
            Reach out and a member of our organizing team will help you find
            the right fit for your organization.
          </p>
          <Link to="/#contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
