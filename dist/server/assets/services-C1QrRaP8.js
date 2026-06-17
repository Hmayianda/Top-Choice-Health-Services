import { V as jsxRuntimeExports } from "./worker-entry-By8uyDs-.js";
import { c as createLucideIcon, P as PageWrapper, F as FadeUp } from "./FadeUp-CL5QtVML.js";
import { P as PageHero } from "./PageHero-CWY6cEqv.js";
import { P as Pill, B as Brain, S as ServiceCard, A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DBIGI6wq.js";
import { H as Heart, S as Shield } from "./shield-Dd-ek9ra.js";
import { U as UtensilsCrossed } from "./utensils-crossed-Baky9zY0.js";
import { U as Users } from "./users-BeKzwU_1.js";
import { C as CircleCheck } from "./circle-check-DwLvuCYX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BpjsfuxZ.js";
import "./site-D-SU5DUN.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$1);
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
const servicesHero = "/assets/serviceshero-G2o5TN8l.jpg";
const services = [{
  icon: Heart,
  title: "Personal Care Assistance",
  description: "We provide thoughtful, dignified assistance with bathing, grooming, dressing, and personal hygiene. Our caregivers approach every task with sensitivity and respect for each resident's privacy and independence. The goal is always to preserve dignity while ensuring comfort."
}, {
  icon: Pill,
  title: "Medication Management",
  description: "Proper medication management is critical to health and safety. We maintain careful records, administer medications on schedule, coordinate refills, and communicate with healthcare providers to ensure accuracy and compliance at all times."
}, {
  icon: Brain,
  title: "Memory Care Support",
  description: "We offer compassionate, structured routines for residents living with Alzheimer's, dementia, or other memory-related conditions. Our approach emphasizes familiarity, calm, and consistent engagement to reduce anxiety and support cognitive function."
}, {
  icon: Activity,
  title: "Mobility Assistance",
  description: "Whether it's help with transfers, walking, or gentle physical exercises, our team provides safe and supportive mobility assistance. We work to help residents maintain their independence and reduce the risk of falls."
}, {
  icon: UtensilsCrossed,
  title: "Meal Preparation & Nutrition",
  description: "Every meal is home-cooked and tailored to individual dietary requirements, preferences, and health needs. We believe good nutrition is foundational to wellbeing, and we make mealtimes enjoyable and social experiences."
}, {
  icon: Shield,
  title: "24-Hour Supervision",
  description: "Our caregivers are present around the clock, providing continuous oversight and immediate response to any need. Families can rest assured knowing their loved ones are never alone and always cared for."
}, {
  icon: Users,
  title: "Companionship & Social Engagement",
  description: "Loneliness can be as harmful as physical illness. We prioritize meaningful social interaction, activities, conversation, and engagement to support emotional health and happiness for every resident."
}, {
  icon: RefreshCw,
  title: "Respite Care",
  description: "Family caregivers deserve rest too. Our respite care services provide short-term relief while ensuring your loved one receives the same level of attentive, compassionate care they would receive full-time."
}];
const approach = ["Initial Assessment & Family Consultation", "Personalized Care Plan Development", "Ongoing Caregiver Training", "Regular Progress Reviews", "Open Family Communication"];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "What We Offer", title: "Comprehensive Care for Every Need", subtitle: "Personalized services designed around each resident's comfort and wellbeing.", image: servicesHero }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Our Services" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...s }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "How We Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Our Approach to Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Every resident at Top Choice Health Services receives a fully individualized care plan developed in collaboration with their family and healthcare providers. We regularly review and update these plans to adapt to changing needs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 rounded-2xl bg-white p-8 shadow-md", children: approach.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-soft text-sm font-bold text-gold", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy-deep", children: step })
        ] })
      ] }, step)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Have Questions?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.1, className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq-1", className: "rounded-xl border border-border bg-light-gray px-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What is an Adult Family Home?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq-2", className: "rounded-xl border border-border bg-light-gray px-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What services do you provide?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq-3", className: "rounded-xl border border-border bg-light-gray px-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "How do I book an appointment?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "You can call us at 360-443-2310, email info@topchoice-health.com, or fill out our contact form. We welcome family visits by appointment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq-4", className: "rounded-xl border border-border bg-light-gray px-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "Can family members visit?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your appointment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "faq-5", className: "rounded-xl border border-border bg-light-gray px-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-semibold text-navy-deep hover:no-underline", children: "What level of care do you provide?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: "We provide comprehensive care for adults who need assistance with daily living activities, including personal care, medication management, memory care support, and 24-hour supervision. We work with each resident and their family to develop a personalized care plan that meets their specific needs and comfort level." })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Services as component
};
