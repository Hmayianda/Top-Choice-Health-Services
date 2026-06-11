import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/top-choice-logo.png?url";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/our-home", label: "Our Home" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy text-white transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Top Choice Health Services home">
          <img
            src={logoUrl}
            alt="Top Choice Health Services LLC"
            className="h-14 w-auto object-contain"
            style={{ mixBlendMode: "screen" }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-white">Top Choice</span>
            <span className="text-sm font-semibold text-gold">Health Services</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-white/90"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.03] hover:bg-gold/90"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-navy-deep transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`block rounded-lg px-3 py-2 text-base font-medium ${
                    pathname === l.to ? "bg-white/5 text-gold" : "text-white/90"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy-deep"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
