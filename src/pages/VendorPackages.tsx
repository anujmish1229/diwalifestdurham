import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageHero from "../components/PageHero";
import { vendorEvents } from "../data/vendorPackages";

export default function VendorPackages() {
  return (
    <>
      <PageHero
        title="Get a booth"
        description="Sell food, crafts or culture to a festival crowd in North Ajax."
        image="/media/dancer.jpg"
        imageAlt="A dancer performing on the main stage at the 2026 festival"
        imagePosition="center 22%"
      />

      {/* Letter */}
      <section className="bg-cream text-night">
        <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="section-heading">A letter to vendors</h2>
            <p className="mt-5 text-sm text-ink/60">From the organizing team, October 2026</p>
          </div>
          <article className="space-y-4 rounded-3xl bg-white p-8 leading-relaxed text-ink/85 shadow-card sm:p-12 lg:col-span-8">
            <p>Dear Vendor,</p>
            <p>
              Thank you for your interest in participating in the Durham Diwali Festival. Our evening celebration
              features performances, food, vendors, cultural programming, and a signature Diwali experience for the
              community.
            </p>
            <dl className="grid gap-4 border-y border-night/10 py-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold text-rani-dark">Hours</dt>
                <dd className="font-display text-xl font-bold text-night">5:00 p.m. to 11:00 p.m.</dd>
              </div>
              <div>
                <dt className="text-xs font-bold text-rani-dark">Organizer</dt>
                <dd className="font-display text-xl font-bold text-night">Durham Diwali Festival Organizing Committee</dd>
              </div>
            </dl>
            <p>We would be delighted to have you join us as a vendor for the evening.</p>
            <p className="pt-2">
              Warm regards,
              <br />
              <span className="font-display text-lg font-bold text-night">Durham Diwali Festival Organizing Team</span>
            </p>
          </article>
        </div>
      </section>

      {/* Packages */}
      {vendorEvents.map((event) => (
        <section key={event.id} className="bg-cream-dark text-night">
          <div className="container-page py-20 sm:py-24">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <h2 className="section-heading lg:col-span-6">
                Pick your <span className="text-saffron-600">booth.</span>
              </h2>
              <p className="text-ink/70 lg:col-span-5 lg:col-start-8">{event.description}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {event.packages.map((pkg) => {
                const dark = pkg.featured;
                return (
                  <div
                    key={pkg.id}
                    className={`flex flex-col rounded-3xl p-8 ${
                      dark ? "bg-marigold-500 text-night" : "bg-white text-ink shadow-card"
                    }`}
                  >
                    {dark && <p className="mb-3 text-xs font-bold text-rani-dark">Most popular</p>}
                    <h3 className={`font-display text-2xl font-extrabold leading-tight `}>
                      {pkg.name}
                    </h3>
                    <p className={`mt-3 font-display text-4xl font-extrabold ${dark ? "text-night" : "text-night"}`}>
                      {pkg.price}
                    </p>
                    <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 text-sm ${dark ? "border-night/20" : "border-night/10"}`}>
                      {pkg.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check size={15} className={`mt-0.5 shrink-0 ${dark ? "text-rani-dark" : "text-saffron-600"}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/#contact" className={`mt-8 ${dark ? "btn-night" : "btn-outline"}`}>
                      Apply for this package
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-cream-dark">
        <div className="container-page pb-20">
        <div className="ticket flex flex-col justify-between gap-6 rounded-3xl bg-rani px-8 py-12 sm:px-14 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight">Ready to apply?</h2>
            <p className="mt-3 max-w-md text-white/85">
              Send us your business name and the package you&rsquo;re interested in, and we&rsquo;ll follow up with
              next steps.
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
