import { Link } from "react-router-dom";
import { Check, Clock, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import { vendorEvents } from "../data/vendorPackages";

export default function VendorPackages() {
  return (
    <>
      <PageHero
        title="Vendor Packages"
        description="One unforgettable evening of culture, food, and community in North Ajax."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="stall-card mx-auto max-w-3xl p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-saffron-200 pb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-saffron-600">
              <Mail size={14} /> Letter to Vendors
            </span>
            <span className="text-xs font-semibold text-ink/70">October 2026 &middot; North Ajax</span>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/90">
            <p>Dear Vendor,</p>
            <p>
              Thank you for your interest in participating in the Durham
              Diwali Festival. Our evening celebration features
              performances, food, vendors, cultural programming, and a
              signature Diwali experience for the community.
            </p>
            <div className="rounded-xl border border-diya-100 bg-diya-50/50 p-4 sm:max-w-sm">
              <p className="font-display font-bold text-diya-900">
                Durham Diwali Festival
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-saffron-600">
                <Clock size={13} /> 5:00 p.m. &ndash; 11:00 p.m.
              </p>
              <p className="mt-2 text-xs text-ink/80">
                Organizer: Durham Diwali Festival Organizing Committee
              </p>
            </div>
            <p>
              We would be delighted to have you join us as a vendor for the
              evening.
            </p>
            <p className="pt-2">
              Warm regards,
              <br />
              Durham Diwali Festival Organizing Team
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="section-heading">Pick your vendor package</h2>
        </div>

        <div className="mt-14 space-y-16">
          {vendorEvents.map((event) => (
            <div key={event.id}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-saffron-50">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-marigold-300">
                    <Clock size={14} /> {event.time}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-saffron-50/60">
                {event.description}
              </p>

              <div className="mt-8 grid gap-x-6 gap-y-10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                {event.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`stall-card relative flex flex-col p-6 ${
                      pkg.featured ? "shadow-lantern ring-2 ring-marigold-400/60" : ""
                    }`}
                  >
                    {pkg.featured && (
                      <span className="absolute -top-3.5 left-6 rounded-full bg-saffron-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                        Most Popular
                      </span>
                    )}
                    <h4 className="font-display text-lg font-bold text-diya-900">
                      {pkg.name}
                    </h4>
                    <p className="mt-2 font-display text-2xl font-extrabold text-diya-900">
                      {pkg.price}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm text-ink/90">
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

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <Mail size={24} className="text-marigold-300" />
          <h3 className="font-display text-xl font-bold text-saffron-50">
            Ready to apply as a vendor?
          </h3>
          <p className="max-w-md text-sm text-saffron-50/60">
            Send us a message with your business name and the package
            you&rsquo;re interested in, and our team will follow up with
            next steps.
          </p>
          <Link to="/#contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
