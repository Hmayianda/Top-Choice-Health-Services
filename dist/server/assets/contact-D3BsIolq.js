import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle2, MapPin, Phone, Printer, Mail, Clock, ChevronDown } from "lucide-react";
import { P as PageWrapper, F as FadeUp } from "./FadeUp-BLf91Iec.js";
import { P as PageHero } from "./PageHero-BZLK06Zm.js";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, a as createServerFn } from "./server-Dp-sIaLP.js";
import { z } from "zod";
import { S as SITE } from "./site-BRHCUyRr.js";
import "@tanstack/react-router";
import "motion/react";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  source: z.string().min(1),
  message: z.string().min(1)
});
const sendContactMessage = createServerFn({
  method: "POST"
}).validator(() => contactSchema).handler(createSsrRpc("fbd394cc9fa4af3080fc71bce795b650ae4ce5bc0cb7fdb09c73ce183438bcb8"));
const faqs = [{
  q: "What is an Adult Family Home?",
  a: "An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility."
}, {
  q: "What services do you provide?",
  a: "We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care."
}, {
  q: "How do I schedule a tour?",
  a: "Call us at 360-443-2310, email info@topchoice-health.com, or use the contact form above. We welcome family visits by appointment."
}, {
  q: "Can family members visit?",
  a: "Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your tour."
}, {
  q: "What level of care do you provide?",
  a: "We provide non-medical personal care, supervision, and support. Care plans are individualized and reviewed regularly to adapt to each resident's needs."
}, {
  q: "Is Top Choice Health Services licensed?",
  a: "Yes. We are a fully licensed Adult Family Home operating under Washington State Department of Social and Health Services (DSHS) regulations."
}];
function Contact() {
  return /* @__PURE__ */ jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "We're Here For You", title: "Get In Touch", subtitle: "We'd love to answer your questions and welcome your family.", height: "sm" }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx(ContactForm, {}) }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 0.15, children: /* @__PURE__ */ jsx(ContactInfo, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-light-gray py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsx(FadeUp, { className: "text-center", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-navy-deep sm:text-5xl", children: "Common Questions" }) }),
      /* @__PURE__ */ jsx(FaqList, {})
    ] }) })
  ] });
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      source: String(fd.get("source") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim()
    };
    try {
      await sendContactMessage({
        data
      });
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "There was a problem sending your message. Please try again later.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-navy-deep", children: "Send Us a Message" }),
    sent && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: "Thank you! We've received your message and will be in touch shortly." })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800", children: [
      /* @__PURE__ */ jsx("p", { children: "Unable to send your message." }),
      /* @__PURE__ */ jsx("p", { children: error })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-6 space-y-5", children: [
      /* @__PURE__ */ jsx(Field, { label: "Full Name", name: "name", required: true }),
      /* @__PURE__ */ jsx(Field, { label: "Phone Number", name: "phone", type: "tel", required: true }),
      /* @__PURE__ */ jsx(Field, { label: "Email Address", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "source", className: "mb-1.5 block text-sm font-semibold text-navy-deep", children: "How did you hear about us?" }),
        /* @__PURE__ */ jsxs("select", { id: "source", name: "source", defaultValue: "Google", className: "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-deep focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30", children: [
          /* @__PURE__ */ jsx("option", { children: "Google" }),
          /* @__PURE__ */ jsx("option", { children: "Referral" }),
          /* @__PURE__ */ jsx("option", { children: "Social Media" }),
          /* @__PURE__ */ jsx("option", { children: "Other" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "mb-1.5 block text-sm font-semibold text-navy-deep", children: "Message" }),
        /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", rows: 5, required: true, className: "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30" })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full rounded-xl bg-gold py-4 text-base font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.01]", children: "Send Message" })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "mb-1.5 block text-sm font-semibold text-navy-deep", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-gold", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, required, className: "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30" })
  ] });
}
function ContactInfo() {
  const items = [{
    Icon: MapPin,
    text: SITE.address
  }, {
    Icon: Phone,
    text: SITE.phone,
    href: SITE.phoneHref
  }, {
    Icon: Printer,
    text: `Fax: ${SITE.phone}`
  }, {
    Icon: Mail,
    text: SITE.email,
    href: `mailto:${SITE.email}`
  }, {
    Icon: Clock,
    text: "Available 24 hours, 7 days a week"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    items.map(({
      Icon,
      text,
      href
    }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-light-gray p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
      href ? /* @__PURE__ */ jsx("a", { href, className: "self-center font-semibold text-navy-deep hover:text-gold", children: text }) : /* @__PURE__ */ jsx("p", { className: "self-center font-medium text-navy-deep", children: text })
    ] }, text)),
    /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "block rounded-xl bg-gold py-4 text-center text-base font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.01]", children: [
      "Call Now: ",
      SITE.phone
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative h-[300px] overflow-hidden rounded-2xl bg-light-gray", children: /* @__PURE__ */ jsx("iframe", { src: "https://maps.google.com/maps?q=2763+Grand+Fir+Pl+SE%2C+Port+Orchard%2C+WA+98366&z=15&ie=UTF8&output=embed", title: "Top Choice Health Services Location", className: "h-full w-full", style: {
      border: 0
    }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", allowFullScreen: true }) })
  ] });
}
function FaqList() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: faqs.map((f, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-white", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(isOpen ? null : i), "aria-expanded": isOpen, className: "flex w-full items-center justify-between gap-4 p-5 text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-lg text-navy-deep", children: f.q }),
        /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: `shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `grid overflow-hidden transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`, children: /* @__PURE__ */ jsx("div", { className: "min-h-0", children: /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 text-muted-foreground", children: f.a }) }) })
    ] }, f.q);
  }) });
}
export {
  Contact as component
};
