import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import { sponsorshipTiers } from "../data/sponsorshipTiers";

export default function SponsorshipPackages() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Sponsorship Packages"
        description="Illuminate Durham Region's first-ever Diwali festival — six tiers of partnership designed to fit organizations of every size."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-diya-100 bg-diya-50/50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600">
            Letter to Potential Sponsors
          </p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70">
            <p>Dear Community Partner,</p>
            <p>
              We are pleased to introduce the Durham Diwali Festival, a
              landmark cultural event coming to our region for the very
              first time in October 2026. Founded by H.A.N.D. — the
              Educators&rsquo; Hindu Affinity Network of Durham — with the
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
              <br />
              H.A.N.D. — Educators&rsquo; Hindu Affinity Network of Durham
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <span className="section-eyebrow">Sponsorship Packages</span>
          <h2 className="mt-5 text-3xl font-bold text-diya-900 sm:text-4xl">
            Choose your tier
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                tier.featured
                  ? "border-saffron-400 bg-gradient-to-b from-saffron-50 to-white shadow-lg shadow-saffron-500/10"
                  : "border-diya-100 bg-white shadow-sm shadow-diya-900/5"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-saffron-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Top Tier
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-diya-900">
                {tier.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-saffron-600">
                {tier.subtitle}
              </p>
              <p className="mt-4 font-display text-3xl font-extrabold text-diya-900">
                {tier.price}
              </p>
              <p className="mt-3 text-sm italic text-ink/50">{tier.tagline}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink/70">
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

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-diya-950 p-10 text-center text-white">
          <Mail size={24} className="text-saffron-300" />
          <h3 className="font-display text-xl font-semibold">
            Have questions about sponsorship?
          </h3>
          <p className="max-w-md text-sm text-white/60">
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
