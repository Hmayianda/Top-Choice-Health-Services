import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronDown, CheckCircle2, ArrowRight, Heart, Pill, Brain, Shield, ShieldCheck, Star, Award, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { P as PageWrapper, F as FadeUp } from "./FadeUp-BLf91Iec.js";
import { S as ServiceCard, A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CfJgu9Wm.js";
import "./site-BRHCUyRr.js";
import "motion/react";
import "@radix-ui/react-accordion";
import "clsx";
import "tailwind-merge";
const trust = ["24-Hour Care", "Personalized Care Plans", "Medication Management", "Safe Family Environment", "Compassionate Caregivers", "Licensed Adult Family Home"];
const highlightServices = [{
  icon: Heart,
  title: "Personal Care Assistance",
  description: "Dignified help with bathing, grooming, and daily routines."
}, {
  icon: Pill,
  title: "Medication Management",
  description: "Accurate scheduling, refills, and provider coordination."
}, {
  icon: Brain,
  title: "Memory Care Support",
  description: "Calm, structured routines for residents with memory needs."
}, {
  icon: Shield,
  title: "24-Hour Supervision",
  description: "Continuous, attentive presence day and night."
}];
const apart = [{
  icon: Heart,
  title: "Compassion",
  desc: "We treat every resident like a cherished member of our own family."
}, {
  icon: ShieldCheck,
  title: "Safety",
  desc: "A secure, fully equipped environment designed for resident wellbeing."
}, {
  icon: Star,
  title: "Respect",
  desc: "Every individual is honored with dignity, privacy, and personal choice."
}, {
  icon: Award,
  title: "Excellence",
  desc: "We hold ourselves to the highest standards of care and professionalism."
}];
const signs = ["Difficulty managing medications", "Frequent falls or balance issues", "Memory concerns or confusion", "Isolation or loneliness", "Need assistance with daily activities", "Caregiver burnout in the family"];
const testimonials = [{
  quote: "Choosing Top Choice Health Services was the best decision we made for our mother. The staff treats her like family, and we have peace of mind knowing she is safe and loved.",
  name: "Margaret T.",
  role: "Daughter"
}, {
  quote: "The level of personalized attention our father receives is remarkable. They know his preferences, his routines, and they genuinely care about his happiness.",
  name: "James R.",
  role: "Son"
}, {
  quote: "After visiting several facilities, Top Choice stood out immediately. The home environment, the warmth of the staff — it felt right the moment we walked in.",
  name: "Linda K.",
  role: "Family Member"
}, {
  quote: "Our grandmother has thrived since moving in. She's more social, more engaged, and she tells us she feels at home. We couldn't be more grateful.",
  name: "The Smith's Family",
  role: "Family"
}];
function Home() {
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-healthcare-blue text-white", children: [
      /* @__PURE__ */ jsx("img", { src: void 0, alt: "Caregiver assisting senior resident in a warm home environment", className: "absolute inset-0 h-full w-full object-cover opacity-0" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy/70 to-healthcare-blue/75" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-healthcare-blue/30 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 py-24 text-center", children: [
        /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx("p", { className: "mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-gold", children: "Licensed Adult Family Home · Port Orchard, WA" }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl leading-tight sm:text-6xl lg:text-7xl", children: "Quality Care at Our Home" }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 0.3, children: /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-xl font-light text-white/85", children: "Providing compassionate, personalized care in a safe, comfortable, and family-oriented environment." }) }),
        /* @__PURE__ */ jsx(FadeUp, { delay: 0.5, children: /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-xl transition-transform hover:scale-[1.03]", children: "Book Appointment" }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-deep", children: "Learn About Our Services" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#trust", "aria-label": "Scroll down", className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80", children: /* @__PURE__ */ jsx(ChevronDown, { size: 32 }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "trust", className: "bg-light-gray py-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-6 sm:grid-cols-3 lg:grid-cols-6", children: trust.map((t, i) => /* @__PURE__ */ jsxs(FadeUp, { delay: i * 0.05, className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 text-gold" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-navy-deep", children: t })
    ] }, t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(FadeUp, { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "About Us" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Why Families Choose Top Choice" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground", children: "At Top Choice Health Services LLC, we understand that choosing care for a loved one is one of life's most important decisions. Our mission is to provide exceptional care in a warm family setting where residents receive individualized attention, dignity, respect, and comfort." }),
      /* @__PURE__ */ jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-semibold text-navy-deep hover:gap-3 transition-all", children: [
        "Learn More About Us ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "text-gold" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(FadeUp, { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground", children: "Comprehensive care tailored to each resident's unique needs." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: highlightServices.map((s, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 0.08, children: /* @__PURE__ */ jsx(ServiceCard, { ...s }) }, s.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold", children: [
        "View All Services ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-navy-deep py-20 text-white sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs(FadeUp, { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Our Difference" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: "What Sets Us Apart" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-px overflow-hidden rounded-2xl bg-gold/30 sm:grid-cols-2", children: apart.map((a, i) => /* @__PURE__ */ jsxs(FadeUp, { delay: i * 0.08, className: "bg-navy-deep p-8", children: [
        /* @__PURE__ */ jsx(a.icon, { size: 36, className: "text-gold", strokeWidth: 1.75 }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl text-gold", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-white/80", children: a.desc })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#FDF6E3] px-6 py-16 sm:py-24 lg:px-16", children: /* @__PURE__ */ jsxs(FadeUp, { className: "mx-auto max-w-md", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Is It Time For Additional Care?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-navy-deep/80", children: "Recognizing when a loved one needs more support is an act of love." }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.03]", children: "Schedule a Confidential Consultation" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white px-6 py-16 sm:py-24 lg:px-16", children: /* @__PURE__ */ jsx("ul", { className: "mx-auto max-w-md space-y-4", children: signs.map((s, i) => /* @__PURE__ */ jsxs(FadeUp, { delay: i * 0.08, className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 shrink-0 text-gold", size: 22 }),
        /* @__PURE__ */ jsx("span", { className: "text-base text-navy-deep", children: s })
      ] }, s)) }) })
    ] }),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxs(FadeUp, { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Have Questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 0.1, className: "mt-12", children: /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(AccordionItem, { value: "faq-1", className: "rounded-xl border border-border bg-white px-6 shadow-sm", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What is an Adult Family Home?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility." })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "faq-2", className: "rounded-xl border border-border bg-white px-6 shadow-sm", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What services do you provide?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care." })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "faq-3", className: "rounded-xl border border-border bg-white px-6 shadow-sm", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "How do I book an appointment?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "You can call us at 360-443-2310, email info@topchoice-health.com, or fill out our contact form. We welcome family visits by appointment." })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "faq-4", className: "rounded-xl border border-border bg-white px-6 shadow-sm", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "Can family members visit?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your appointment." })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "faq-5", className: "rounded-xl border border-border bg-white px-6 shadow-sm", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What level of care do you provide?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "We provide comprehensive care for adults who need assistance with daily living activities, including personal care, medication management, memory care support, and 24-hour supervision. We work with each resident and their family to develop a personalized care plan that meets their specific needs and comfort level." })
        ] })
      ] }) })
    ] }) })
  ] });
}
function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(FadeUp, { className: "text-center", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "What Families Are Saying" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex transition-transform duration-700 ease-in-out", style: {
      transform: `translateX(-${idx * 100}%)`
    }, children: testimonials.map((t) => /* @__PURE__ */ jsx("div", { className: "w-full shrink-0 px-2", children: /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl h-full rounded-2xl border border-border bg-light-gray p-8 shadow-sm", children: [
      /* @__PURE__ */ jsx(Quote, { size: 36, className: "text-gold" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg italic leading-relaxed text-navy-deep", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-navy-deep", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
      ] })
    ] }) }, t.name)) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center gap-2", children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", { "aria-label": `Go to testimonial ${i + 1}`, onClick: () => setIdx(i), className: `h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2.5 bg-navy/20"}` }, i)) })
  ] }) });
}
export {
  Home as component
};
