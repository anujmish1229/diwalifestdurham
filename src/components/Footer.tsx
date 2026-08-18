import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-diya-950 text-white/80">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Bringing the Festival of Lights to Ajax for the first time in
            2026, an inclusive, community-centred celebration of music,
            dance, food, and connection across Durham Region.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-saffron-500"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-saffron-500"
            >
              <Instagram size={16} />
            </a>
            <a
              href="mailto:info@durhamdiwalifestival.ca"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-saffron-500"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/#vision" className="transition hover:text-saffron-300">Our Vision</Link></li>
            <li><Link to="/#team" className="transition hover:text-saffron-300">Our Team</Link></li>
            <li><Link to="/#sponsors" className="transition hover:text-saffron-300">Sponsors</Link></li>
            <li><Link to="/#contact" className="transition hover:text-saffron-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Get Involved
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/sponsorship-packages" className="transition hover:text-saffron-300">Sponsorship Packages</Link></li>
            <li><Link to="/vendor-packages" className="transition hover:text-saffron-300">Vendor Packages</Link></li>
            <li><Link to="/#newsletter" className="transition hover:text-saffron-300">Newsletter Signup</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Presented By
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            The Durham Diwali Festival Organizing Committee, in partnership
            with the Durham District School Board.
          </p>
          <p className="mt-3 text-sm text-white/60">North Ajax, Durham Region · October 2026</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {year} Durham Diwali Festival. All rights reserved.</p>
          <p>Made with light, colour, and community.</p>
        </div>
      </div>
    </footer>
  );
}
