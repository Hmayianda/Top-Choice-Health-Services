import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoUrl from "@/assets/top-choice-logo.png?url";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logoUrl}
              alt="Top Choice Health Services LLC"
              className="h-20 w-auto"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="mt-4 font-display text-lg italic text-gold">Quality Care at Our Home</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              A licensed Adult Family Home in Port Orchard, WA providing compassionate,
              personalized care in a warm family setting.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/our-home", label: "Our Home" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/80 transition-colors hover:text-gold">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-1 shrink-0 text-gold" />
                <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-1 shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/40 pt-6 text-center text-xs text-white/60">
          © 2026 Top Choice Health Services LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
