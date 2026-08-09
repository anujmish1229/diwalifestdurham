import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" aria-label="Durham Diwali Festival home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-ink/70 transition hover:text-diya-800"
          >
            Home
          </Link>
          {sectionLinks.map((link) => (
            <Link
              key={link.hash}
              to={`/#${link.hash}`}
              className="text-sm font-medium text-ink/70 transition hover:text-diya-800"
            >
              {link.label}
            </Link>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-ink/70 transition hover:text-diya-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/#newsletter" className="btn-primary">
            Get Event Updates
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-diya-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-diya-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            <Link to="/" className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-diya-50">
              Home
            </Link>
            {sectionLinks.map((link) => (
              <Link
                key={link.hash}
                to={`/#${link.hash}`}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-diya-50"
              >
                {link.label}
              </Link>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-diya-50"
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
