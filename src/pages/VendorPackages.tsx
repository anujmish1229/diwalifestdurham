import { Link } from "react-router-dom";
import { Check, Clock, Mail, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import { vendorBundle, vendorEvents } from "../data/vendorPackages";

export default function VendorPackages() {
  return (
    <>
      <PageHero
        eyebrow="Sell With Us"
        title="Vendor Packages"
        description="Two major cultural celebrations, one unforgettable day in North Ajax. Join us for one event or both."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-diya-100 bg-diya-50/50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600">
            Letter to Vendors
          </p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70">
            <p>Dear Vendor,</p>
            <p>
              Thank you for your interest in participating in our upcoming
              community celebrations. We are excited to share that two major
              cultural events will be taking place on the same day, and
              vendors are welcome to participate in one or both.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-diya-100 bg-white p-4">
                <p className="font-display font-semibold text-diya-900">
                  Event 1: H.A.N.D. Cultural Celebration
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-saffron-600">
                  <Clock size={13} /> 2 p.m. &ndash; 6:00 p.m.
                </p>
                <p className="mt-2 text-xs text-ink/50">
                  Organizer: H.A.N.D. &ndash; Educators&rsquo; Hindu Affinity
                  Network of Durham
                </p>
              </div>
              <div className="rounded-xl border border-diya-100 bg-white p-4">
                <p className="font-display font-semibold text-diya-900">
                  Event 2: Durham Diwali Festival
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-saffron-600">
                  <Clock size={13} /> 6:00 p.m. &ndash; 11:00 p.m.
                </p>
                <p className="mt-2 text-xs text-ink/50">
                  Organizer: Durham Diwali Festival Organizing Committee
                </p>
              </div>
            </div>
            <p>
              The daytime H.A.N.D. event focuses on cultural education,
              family engagement, and community connection, attracting
              students, families, educators, and community partners from
              across Durham Region. The evening Durham Diwali Festival
              features performances, food, vendors, cultural programming,
              and a signature Diwali experience for the community.
            </p>
            <div>
              <p>Vendors may choose:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-saffron-500" />
                  <span>Option A: Participate in the H.A.N.D. event only</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-saffron-500" />
                  <span>Option B: Participate in the Durham Diwali Festival only</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-saffron-500" />
                  <span>Option C: Participate in both events for full-day visibility and engagement</span>
                </li>
              </ul>
            </div>
            <p>
              Each event will have its own vendor package, pricing, and
              benefits. Vendors selecting Option C will receive a bundled
              rate and priority placement.
            </p>
            <p className="pt-2">
              Warm regards,
              <br />
              Durham Diwali Festival Organizing Team
              <br />
              In partnership with H.A.N.D. &ndash; Educators&rsquo; Hindu
              Affinity Network of Durham
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <span className="section-eyebrow">Vendor Event Packages</span>
          <h2 className="mt-5 text-3xl font-bold text-diya-900 sm:text-4xl">
            Pick your event, pick your package
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {vendorEvents.map((event) => (
            <div key={event.id}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-diya-100 pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-diya-900">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-saffron-600">
                    <Clock size={14} /> {event.time}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60">
                {event.description}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {event.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`flex flex-col rounded-2xl border p-6 ${
                      pkg.featured
                        ? "border-saffron-400 bg-gradient-to-b from-saffron-50 to-white shadow-lg shadow-saffron-500/10"
                        : "border-diya-100 bg-white shadow-sm shadow-diya-900/5"
                    }`}
                  >
                    <h4 className="font-display text-lg font-semibold text-diya-900">
                      {pkg.name}
                    </h4>
                    <p className="mt-2 font-display text-2xl font-extrabold text-diya-900">
                      {pkg.price}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm text-ink/70">
                      {pkg.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check size={14} className="mt-0.5 shrink-0 text-saffron-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#contact"
                      className={pkg.featured ? "btn-primary mt-6" : "btn-outline mt-6"}
                    >
                      Apply for This Package
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-diya-800 to-diya-950 p-10 text-white sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="section-eyebrow bg-white/10 text-saffron-200">
                <Sparkles size={14} /> Best Value
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                {vendorBundle.name}
              </h3>
              <p className="mt-1 text-sm text-saffron-300">{vendorBundle.subtitle}</p>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold">
                  {vendorBundle.price}
                </span>
                <span className="text-sm text-white/60">{vendorBundle.savings}</span>
              </p>
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              {vendorBundle.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-0.5 shrink-0 text-saffron-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/#contact" className="btn-primary mt-8">
            Book the Full-Day Bundle
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-diya-100 bg-diya-50/50 p-10 text-center">
          <Mail size={24} className="text-saffron-600" />
          <h3 className="font-display text-xl font-semibold text-diya-900">
            Ready to apply as a vendor?
          </h3>
          <p className="max-w-md text-sm text-ink/60">
            Send us a message with your business name and the package
            you&rsquo;re interested in, and our team will follow up with
            next steps.
          </p>
          <Link to="/#contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
