import { V as jsxRuntimeExports } from "./worker-entry-By8uyDs-.js";
import { L as Link } from "./router-BpjsfuxZ.js";
import { c as createLucideIcon, P as PageWrapper, F as FadeUp, M as MapPin } from "./FadeUp-CL5QtVML.js";
import { P as PageHero } from "./PageHero-CWY6cEqv.js";
import { S as SITE } from "./site-D-SU5DUN.js";
import { H as House } from "./house-DP9eOxqb.js";
import { U as UtensilsCrossed } from "./utensils-crossed-Baky9zY0.js";
import { S as ShieldCheck } from "./shield-check-BUIiuGgL.js";
import { C as Clock } from "./clock-CSuRtf_b.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "1qyhux"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
];
const Armchair = createLucideIcon("armchair", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
];
const TreePine = createLucideIcon("tree-pine", __iconNode);
const ourhomeHero = "/assets/safety-CugXfLD1.jpg";
const galleryBedrooms = "/assets/bedroom-CkpnEnOn.jpg";
const galleryLiving = "/assets/livingarea-IZCXnmNF.jpg";
const galleryDining = "/assets/kitchen-B7p65dRs.jpg";
const galleryOutdoor = "/assets/outdoor-BnIXsfxO.jpg";
const galleryGathering = "/assets/common%20area-DnYrBrOb.jpg";
const gallery = [{
  label: "Comfortable Bedrooms",
  img: galleryBedrooms
}, {
  label: "Spacious Living Areas",
  img: galleryLiving
}, {
  label: "Dining & Kitchen Spaces",
  img: galleryDining
}, {
  label: "Outdoor & Garden Areas",
  img: galleryOutdoor
}, {
  label: "Common Gathering Rooms",
  img: galleryGathering
}, {
  label: "Safety & Accessibility Features",
  img: ourhomeHero
}];
const features = [{
  icon: House,
  title: "Private Bedrooms",
  desc: "Each resident enjoys a private, personalized space they can truly call their own."
}, {
  icon: UtensilsCrossed,
  title: "Home-Cooked Meals",
  desc: "Fresh, nutritious meals prepared daily in our home kitchen, tailored to every resident."
}, {
  icon: TreePine,
  title: "Outdoor Access",
  desc: "A safe, accessible outdoor area for fresh air, light activity, and peaceful moments."
}, {
  icon: ShieldCheck,
  title: "Safety Equipment",
  desc: "Grab bars, non-slip surfaces, emergency call systems, and monitored entry for complete security."
}, {
  icon: Armchair,
  title: "Common Living Areas",
  desc: "Warm, welcoming shared spaces for social time, TV, reading, and family visits."
}, {
  icon: Clock,
  title: "24/7 Caregiver Presence",
  desc: "A caregiver is always present, day and night, ensuring immediate support whenever needed."
}];
function OurHome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Home", title: "A Safe Place to Call Home", subtitle: "Thoughtfully designed spaces where comfort, safety, and warmth come together.", image: ourhomeHero }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Inside Our Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground", children: "Every space is designed with our residents' comfort and dignity in mind." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: gallery.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative aspect-video overflow-hidden rounded-2xl shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-5 left-5 font-display text-2xl font-semibold text-white drop-shadow-md", children: item.label })
      ] }) }, item.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Designed for Comfort & Safety" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl border border-border bg-light-gray p-7 transition-shadow hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 32, className: "text-gold", strokeWidth: 1.75 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl text-navy-deep", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: f.desc })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Visit Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Located in Port Orchard, WA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Our home is nestled in a peaceful residential neighborhood in Port Orchard, Washington — close to medical facilities, parks, and services, yet quiet and comfortable for our residents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-white p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 shrink-0 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-navy-deep", children: SITE.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.mapsUrl, target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]", children: "Get Directions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://maps.google.com/maps?q=2763+Grand+Fir+Pl+SE%2C+Port+Orchard%2C+WA+98366&z=15&ie=UTF8&output=embed", title: "Top Choice Health Services Location", className: "h-full w-full", style: {
        border: 0
      }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", allowFullScreen: true }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy-deep py-20 text-center text-white sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: "See It For Yourself" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/85", children: "We invite you to visit, ask questions, and experience the warmth of our home firsthand." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-lg transition-transform hover:scale-[1.03]", children: "Book Appointment" })
    ] }) }) })
  ] });
}
export {
  OurHome as component
};
