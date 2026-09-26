import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { StringLights } from "./decorative";

const sectionLinks = [
  { label: "Vision", hash: "vision" },
  { label: "Our Team", hash: "team" },
  { label: "Sponsors", hash: "sponsors" },
  { label: "Contact", hash: "contact" },
];

const pageLinks = [
  { label: "Sponsorship Packages", to: "/sponsorship-packages" },
  { label: "Vendor Packages", to: "/vendor-packages" },
];

function NavBulb() {
  return (
    <span
      aria-hidden="true"
      className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-marigold-300 shadow-[0_0_10px_3px_rgba(255,209,102,0.75)]"
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!onHome) {
      setActiveHash(null);
      return;
    }
    const ids = sectionLinks.map((l) => l.hash);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActiveHash(top.target.id);
        } else if (window.scrollY < 200) {
          setActiveHash(null);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  const homeActive = onHome && activeHash === null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#170822]/95 shadow-lg shadow-black/30 backdrop-blur" : "bg-[#170822]/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" aria-label="Durham Diwali Festival home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            aria-current={homeActive ? "page" : undefined}
            className={`relative rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/5 hover:text-marigold-300 ${
              homeActive ? "text-marigold-300" : "text-saffron-50/80"
            }`}
          >
            Home
            {homeActive && <NavBulb />}
          </Link>
          {sectionLinks.map((link) => {
            const active = onHome && activeHash === link.hash;
            return (
              <Link
                key={link.hash}
                to={`/#${link.hash}`}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/5 hover:text-marigold-300 ${
                  active ? "text-marigold-300" : "text-saffron-50/80"
                }`}
              >
                {link.label}
                {active && <NavBulb />}
              </Link>
            );
          })}
          {pageLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/5 hover:text-marigold-300 ${
                  active ? "text-marigold-300" : "text-saffron-50/80"
                }`}
              >
                {link.label}
                {active && <NavBulb />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/#newsletter" className="btn-primary">
            Get Event Updates
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-saffron-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <StringLights
        className="pointer-events-none h-3 w-full text-saffron-300"
        count={22}
        height={16}
      />

      {open && (
        <div className="border-t border-white/10 bg-[#170822] lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            <Link to="/" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-saffron-50/90 hover:bg-white/5">
              Home
            </Link>
            {sectionLinks.map((link) => (
              <Link
                key={link.hash}
                to={`/#${link.hash}`}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-saffron-50/90 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-saffron-50/90 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#newsletter" className="btn-primary mt-2 w-full">
              Get Event Updates
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
