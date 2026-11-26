import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { HCCD_SITE } from "../data/festival";

/** Sections of the home page: scroll links, with the one in view highlighted. */
const sections = [
  { label: "Recap", id: "recap" },
  { label: "About", id: "mission" },
  { label: "Team", id: "team" },
  { label: "Our sponsors", id: "sponsors" },
  { label: "Contact", id: "contact" },
];

/** Separate pages, grouped under one "Get involved" dropdown. */
const pages = [
  { label: "Support us", note: "Sponsorship packages from $500", to: "/sponsorship-packages", accent: "bg-marigold-500" },
  { label: "Get a booth", note: "Vendor spaces from $250", to: "/vendor-packages", accent: "bg-rani" },
];

/** Tracks which home-page section is currently in the middle of the screen. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 300 && setActive(null);
    window.addEventListener("scroll", onTop);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [enabled]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const active = useActiveSection(onHome);
  const [menuHover, setMenuHover] = useState(false);
  const [menuPinned, setMenuPinned] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuOpen = menuPinned || menuHover;
  const onPage = pages.some((p) => p.to === location.pathname);

  // A pinned dropdown closes on an outside click or Escape.
  useEffect(() => {
    if (!menuPinned) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuPinned(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuPinned(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuPinned]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuPinned(false);
    setMenuHover(false);
  }, [location]);

  // Lock the page behind the full-screen mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        // backdrop-blur would trap the fixed mobile menu inside the header, so drop it while open
        scrolled && !open ? "bg-night/95 backdrop-blur" : "bg-night"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Durham Diwali Festival home" className="flex shrink-0 items-center gap-3">
          <Logo />
          <span className="font-display text-lg font-bold leading-[1.05] tracking-tight">
            Durham Diwali
            <br />
            <span className="text-marigold-500">Festival</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {/* On this page: a quiet rail of section links */}
          <ul className="flex items-center rounded-full bg-cream/[0.06] p-1 ring-1 ring-cream/10">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <Link
                    to={`/#${s.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      isActive ? "bg-cream text-night" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Separate pages: one dropdown; opens on hover, click pins it open */}
          <div
            ref={menuRef}
            className="relative"
            onMouseEnter={() => setMenuHover(true)}
            onMouseLeave={() => setMenuHover(false)}
          >
            <button
              type="button"
              onClick={() => setMenuPinned((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                menuOpen || onPage ? "bg-marigold-500 text-night" : "text-cream hover:text-marigold-400"
              }`}
            >
              Get involved
              <ChevronDown size={15} className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute right-0 top-full pt-3 transition-all duration-150 ${
                menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <ul className="w-72 overflow-hidden rounded-2xl bg-cream p-2 text-night shadow-card">
                {pages.map((p) => (
                  <li key={p.to}>
                    <Link
                      to={p.to}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-cream-dark ${
                        location.pathname === p.to ? "bg-cream-dark" : ""
                      }`}
                    >
                      <span className={`h-9 w-1.5 shrink-0 rounded-full ${p.accent}`} aria-hidden="true" />
                      <span className="flex-1">
                        <span className="block font-display text-lg font-bold leading-tight">{p.label}</span>
                        <span className="block text-xs text-ink/60">{p.note}</span>
                      </span>
                      <ArrowRight size={16} className="text-ink/40 transition-transform group-hover:translate-x-0.5 group-hover:text-night" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={HCCD_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-rani-light transition-colors hover:text-rani"
          >
            HCCD ↗
          </a>
        </nav>

        <div className="flex items-center xl:hidden">
          <button
            type="button"
            className="-mr-2 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-night xl:hidden">
          <nav className="container-page flex flex-col py-8" aria-label="Mobile">
            <p className="text-xs font-bold text-cream/50">On this page</p>
            {[{ label: "Home", id: "" }, ...sections].map((s, i) => (
              <Link
                key={s.label}
                to={s.id ? `/#${s.id}` : "/"}
                className="flex items-baseline gap-4 border-b border-cream/10 py-3.5 font-display text-3xl font-extrabold tracking-tight"
              >
                <span className="w-6 text-sm font-semibold text-rani-light">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </Link>
            ))}

            <p className="mt-10 text-xs font-bold text-cream/50">Get involved</p>
            {pages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="flex items-center gap-4 border-b border-cream/10 py-3.5"
              >
                <span className={`h-8 w-1.5 shrink-0 rounded-full ${p.accent}`} aria-hidden="true" />
                <span className="flex-1">
                  <span className="block font-display text-3xl font-extrabold tracking-tight">{p.label}</span>
                  <span className="block text-sm text-cream/55">{p.note}</span>
                </span>
                <ArrowRight size={22} className="text-cream/50" aria-hidden="true" />
              </Link>
            ))}

            <a
              href={HCCD_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 self-start text-sm font-semibold text-rani-light"
            >
              Hindu Community Centre of Durham ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
