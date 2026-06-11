import { jsxs, jsx } from "react/jsx-runtime";
import { Heart, Sparkles, Shield, Award, Users, Home } from "lucide-react";
import { P as PageWrapper, F as FadeUp } from "./FadeUp-BLf91Iec.js";
import { P as PageHero } from "./PageHero-BZLK06Zm.js";
import "react";
import "@tanstack/react-router";
import "./site-BRHCUyRr.js";
import "motion/react";
const values = [{
  icon: Heart,
  title: "Dignity",
  desc: "Every resident is treated with respect and honor."
}, {
  icon: Sparkles,
  title: "Compassion",
  desc: "Warmth and empathy in every interaction."
}, {
  icon: Shield,
  title: "Integrity",
  desc: "Honest, transparent care you can trust."
}, {
  icon: Award,
  title: "Safety",
  desc: "A secure environment for peace of mind."
}, {
  icon: Users,
  title: "Excellence",
  desc: "Consistently high standards of care."
}, {
  icon: Home,
  title: "Family",
  desc: "A true sense of home and belonging."
}];
function About() {
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Our Story", title: "Compassionate Care Rooted in Family Values", subtitle: "Learn who we are, what we believe, and why families trust us." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-6 text-center", children: /* @__PURE__ */ jsxs(FadeUp, { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Our Mission" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "More Than a Care Home — A Family" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 border-l-4 border-gold pl-5 text-left text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { children: "At Top Choice Health Services LLC, every decision we make is guided by one principle: treat every resident the way we would want our own loved ones to be treated. We are a licensed Adult Family Home committed to providing a warm, safe, dignified, and compassionate living environment." }),
        /* @__PURE__ */ jsx("p", { children: "Our team of dedicated caregivers brings not just skill and training, but genuine heart. We believe that quality care is inseparable from human connection, and that a resident's happiness and wellbeing are just as important as their physical health." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsx(FadeUp, { className: "text-center", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "The Values That Guide Us" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: values.map((v, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 0.06, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx(v.icon, { size: 32, className: "text-gold", strokeWidth: 2 }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl text-navy-deep", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: v.desc })
      ] }) }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Licensed, Trusted, and Committed" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", children: "Top Choice Health Services LLC is a fully licensed Adult Family Home operating under Washington State regulations. Our caregivers are trained, background-checked, and dedicated to delivering the highest standard of personalized care." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-3", children: [{
        n: "24/7",
        l: "Round-the-Clock Care"
      }, {
        n: "100%",
        l: "Personalized Care Plans"
      }, {
        n: "Licensed",
        l: "Washington State AFH"
      }].map((s, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gold/30 bg-light-gray p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-gold sm:text-5xl", children: s.n }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-semibold text-navy-deep", children: s.l })
      ] }) }, s.l)) })
    ] }) })
  ] });
}
export {
  About as component
};
