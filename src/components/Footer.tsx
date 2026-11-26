import { Link } from "react-router-dom";
import Logo from "./Logo";
import DroneSky from "./DroneSky";
import { CONTACT_EMAIL, CONTACT_PHONE, FLYER_PDF, HCCD_SITE } from "../data/festival";

const festivalLinks = [
  { label: "2026 recap", to: "/#recap" },
  { label: "About the festival", to: "/#mission" },
  { label: "Organizing team", to: "/#team" },
  { label: "Our 2026 sponsors", to: "/#sponsors" },
];

const involvedLinks = [
  { label: "Support us", to: "/sponsorship-packages" },
  { label: "Get a booth", to: "/vendor-packages" },
  { label: "Contact us", to: "/#contact" },
];

const linkClass = "text-cream/75 transition-colors hover:text-marigold-400";

export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-cream/10 bg-night-mid">
      {/* Drone-show sky: lights assemble into "Diwali" when the footer comes into view */}
      <div className="relative overflow-hidden bg-gradient-to-b from-night to-night-mid">
        <div className="container-page pt-12">
          <DroneSky />
          <div className="flex flex-col items-center justify-between gap-2 border-b border-cream/10 pb-8 text-center text-sm text-cream/55 sm:flex-row sm:text-left">
            <p>In honour of Durham Region&rsquo;s first Diwali drone show, October 24, 2026.</p>
            <p className="hidden sm:block">Move your cursor through the sky.</p>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* Co-branded lockup: the festival and the organization that presents it */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex items-center gap-4">
              <Logo className="h-16 w-16" />
              <p className="font-display text-2xl font-bold leading-[1.05] tracking-tight">
                Durham Diwali
                <br />
                <span className="text-marigold-500">Festival</span>
              </p>
            </div>
            <span className="hidden h-12 w-px bg-cream/20 sm:block" aria-hidden="true" />
            <a href={HCCD_SITE} target="_blank" rel="noopener noreferrer" className="group leading-tight">
              <span className="block text-xs font-semibold text-cream/50">Presented by</span>
              <span className="mt-0.5 block font-display text-base font-bold text-cream transition-colors group-hover:text-rani-light">
                Hindu Community
                <br />
                Centre of Durham <span className="text-rani-light">↗</span>
              </span>
            </a>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            A free, community-centred celebration of the Festival of Lights in North Ajax, first held on October 24,
            2026. HCCD brings Hindu festivals, seniors&rsquo; trips and community programs to Durham Region all year
            round.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="font-display text-base font-bold">Festival</p>
            <ul className="mt-4 space-y-2.5">
              {festivalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-base font-bold">Get involved</p>
            <ul className="mt-4 space-y-2.5">
              {involvedLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={FLYER_PDF} download="Durham Diwali Festival Flyer.pdf" className={linkClass}>
                  2026 flyer (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-base font-bold">Contact</p>
            <ul className="mt-4 space-y-2.5 text-cream/75">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} break-all`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{CONTACT_PHONE}</li>
              <li>North Ajax, Durham Region, Ontario</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col justify-between gap-3 py-5 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>© {year} Durham Diwali Festival Organizing Committee</p>
          <div className="flex items-center gap-6">
            <a
              href="https://anujmishra.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/35 transition-colors hover:text-cream/70"
            >
              Site by Anuj Mishra
            </a>
            <button type="button" onClick={toTop} className="text-cream/70 transition-colors hover:text-marigold-400">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
