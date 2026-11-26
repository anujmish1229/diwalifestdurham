import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageHero from "../components/PageHero";
import { sponsorshipTiers } from "../data/sponsorshipTiers";

const deliverables = [
  "A vibrant cultural program featuring music, dance, and artistic performances",
  "A diverse marketplace of local vendors and food experiences",
  "Family-friendly activities and youth engagement opportunities",
  "A safe, accessible, and welcoming environment for all attendees",
  "A signature fireworks and light show to close the evening",
];

export default function SponsorshipPackages() {
  return (
    <>
      <PageHero
        title="Support us"
        description="Six ways to back the festival, from presenting sponsor to community friend."
        image="/media/drone-om.jpg"
        imageAlt="An Om and a diya drawn in the sky by drones at the 2026 festival"
      />

      {/* Letter */}
      <section className="bg-cream text-night">
        <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="section-heading">A letter to potential sponsors</h2>
            <p className="mt-5 text-sm text-ink/60">From the organizing team, October 2026</p>
          </div>
          <article className="space-y-4 rounded-3xl bg-white p-8 leading-relaxed text-ink/85 shadow-card sm:p-12 lg:col-span-8">
            <p>Dear Community Partner,</p>
            <p>
              We are pleased to introduce the Durham Diwali Festival, a landmark cultural event coming to our region
              for the very first time in October 2026. Founded in partnership with the Durham District School Board,
              this festival will bring the spirit, colour, and joy of the Festival of Lights to the heart of North
              Ajax.
            </p>
            <p>
              Diwali is one of the world&rsquo;s most cherished cultural festivals, symbolizing light, hope, and the
              triumph of good. Our vision is to create an inclusive, family-friendly event that reflects the diversity
              of Durham Region and offers residents a meaningful opportunity to celebrate culture, community, and
              connection.
            </p>
            <p>
              To bring this festival to life, we are seeking partners who share our commitment to equity, inclusion,
              and community building. As a sponsor, your organization will play a vital role in shaping a new annual
              tradition while gaining valuable visibility and engagement with thousands of residents across the
              region.
            </p>
            <p>
              We offer a range of sponsorship tiers from Presenting and Gold-level opportunities to program-specific
              sponsorships such as the Fireworks &amp; Light Show Sponsor. Each tier is designed to provide
              meaningful recognition, brand visibility, and opportunities for community impact.
            </p>
            <div>
              <p>Your support will help us deliver:</p>
              <ul className="mt-3 space-y-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-1 shrink-0 text-rani-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              We would be honoured to partner with you as we illuminate Durham with its first Diwali celebration.
              Together, we can build a festival that brings people together, celebrates our region&rsquo;s diversity,
              and becomes a cherished tradition for years to come.
            </p>
            <p className="pt-2">
              Warm regards,
              <br />
              <span className="font-display text-lg font-bold text-night">Durham Diwali Festival Organizing Team</span>
            </p>
          </article>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-cream-dark text-night">
        <div className="container-page py-20 sm:py-24">
          <h2 className="section-heading">
            Choose your <span className="text-saffron-600">tier.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorshipTiers.map((tier) => {
              const dark = tier.featured;
              return (
                <div
                  key={tier.id}
                  className={`flex flex-col rounded-3xl p-8 ${
                    dark ? "bg-marigold-500 text-night" : "bg-white text-ink shadow-card"
                  }`}
                >
                  {dark && <p className="mb-3 text-xs font-bold text-rani-dark">Top tier</p>}
                  <h3 className={`font-display text-3xl font-extrabold leading-none `}>
                    {tier.name}
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${dark ? "text-rani-dark" : "text-rani-dark"}`}>
                    {tier.subtitle}
                  </p>
                  <p className={`mt-5 font-display text-4xl font-extrabold ${dark ? "text-night" : "text-night"}`}>
                    {tier.price}
                  </p>
                  <p className={`mt-3 text-sm ${dark ? "text-night/70" : "text-ink/65"}`}>{tier.tagline}</p>
                  <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 text-sm ${dark ? "border-night/20" : "border-night/10"}`}>
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check size={15} className={`mt-0.5 shrink-0 ${dark ? "text-rani-dark" : "text-saffron-600"}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/#contact" className={`mt-8 ${dark ? "btn-night" : "btn-outline"}`}>
                    Become a {tier.name} sponsor
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="container-page pb-20">
        <div className="ticket flex flex-col justify-between gap-6 rounded-3xl bg-rani px-8 py-12 sm:px-14 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight">Questions about sponsorship?</h2>
            <p className="mt-3 max-w-md text-white/85">
              A member of our organizing team will help you find the right fit for your organization.
            </p>
          </div>
          <Link to="/#contact" className="btn-primary self-start lg:self-auto">
            Contact the team
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
