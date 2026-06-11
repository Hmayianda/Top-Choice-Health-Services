import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
import { X, Menu, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { a as SERVICES, S as SITE } from "./site-BRHCUyRr.js";
import { motion } from "motion/react";
const logoUrl = "/assets/top-choice-logo-GEfzPEH0.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/our-home", label: "Our Home" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 w-full bg-navy text-white transition-shadow ${scrolled ? "shadow-lg" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", "aria-label": "Top Choice Health Services home", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: logoUrl,
                alt: "Top Choice Health Services LLC",
                className: "h-14 w-auto object-contain",
                style: { mixBlendMode: "screen" }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-white", children: "Top Choice" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gold", children: "Health Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-8 lg:flex", children: links.map((l) => {
            const active = pathname === l.to;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: l.to,
                className: `relative text-sm font-medium tracking-wide transition-colors hover:text-gold ${active ? "text-gold" : "text-white/90"}`,
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-0 h-0.5 w-full rounded bg-gold" })
                ]
              }
            ) }, l.to);
          }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.03] hover:bg-gold/90",
              children: "Book Appointment"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              "aria-expanded": open,
              onClick: () => setOpen((v) => !v),
              className: "rounded-md p-2 text-white lg:hidden",
              children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `grid overflow-hidden bg-navy-deep transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
            children: /* @__PURE__ */ jsx("div", { className: "min-h-0", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-1 px-6 py-4", children: [
              links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  className: `block rounded-lg px-3 py-2 text-base font-medium ${pathname === l.to ? "bg-white/5 text-gold" : "text-white/90"}`,
                  children: l.label
                }
              ) }, l.to)),
              /* @__PURE__ */ jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy-deep",
                  children: "Book Appointment"
                }
              ) })
            ] }) })
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-navy text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logoUrl,
            alt: "Top Choice Health Services LLC",
            className: "h-20 w-auto",
            style: { mixBlendMode: "screen" }
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-lg italic text-gold", children: "Quality Care at Our Home" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/75", children: "A licensed Adult Family Home in Port Orchard, WA providing compassionate, personalized care in a warm family setting." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-gold", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/our-home", label: "Our Home" },
          { to: "/contact", label: "Contact" }
        ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "text-white/80 transition-colors hover:text-gold", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-gold", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: SERVICES.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-white/80 transition-colors hover:text-gold", children: s }) }, s)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-wider text-gold", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-1 shrink-0 text-gold" }),
            /* @__PURE__ */ jsx("span", { children: SITE.address })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "mt-1 shrink-0 text-gold" }),
            /* @__PURE__ */ jsx("a", { href: SITE.phoneHref, className: "hover:text-gold", children: SITE.phone })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-1 shrink-0 text-gold" }),
            /* @__PURE__ */ jsx("a", { href: `mailto:${SITE.email}`, className: "hover:text-gold", children: SITE.email })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [
          { Icon: Facebook, label: "Facebook" },
          { Icon: Instagram, label: "Instagram" },
          { Icon: Linkedin, label: "LinkedIn" }
        ].map(({ Icon, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            "aria-label": label,
            className: "grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold",
            children: /* @__PURE__ */ jsx(Icon, { size: 16 })
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 border-t border-gold/40 pt-6 text-center text-xs text-white/60", children: "© 2026 Top Choice Health Services LLC. All Rights Reserved." })
  ] }) });
}
function CTABanner() {
  return /* @__PURE__ */ jsx("section", { className: "bg-navy-deep text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 py-16 text-center sm:py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl sm:text-4xl", children: "Ready to Learn More?" }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-lg text-white/80", children: "We'd love to welcome your family." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep shadow-lg transition-transform hover:scale-[1.03]",
          children: "Book Appointment"
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: SITE.phoneHref,
          className: "inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-deep",
          children: [
            "Call Us: ",
            SITE.phone
          ]
        }
      )
    ] })
  ] }) });
}
function PageWrapper({ children, showCTA = true }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    showCTA && /* @__PURE__ */ jsx(CTABanner, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function FadeUp({ children, delay = 0, ...rest }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.4, ease: "easeOut", delay },
      ...rest,
      children
    }
  );
}
export {
  FadeUp as F,
  PageWrapper as P
};
