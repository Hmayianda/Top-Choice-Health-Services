import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Printer, Mail, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/ui/FadeUp";
import { sendContactMessage } from "@/lib/api/contact.functions";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Top Choice Health Services | Port Orchard, WA" },
      {
        name: "description",
        content:
          "Contact Top Choice Health Services to schedule a tour, ask questions, or learn more about our adult family home in Port Orchard, WA. Call 360-443-2310.",
      },
      { property: "og:title", content: "Contact Us | Top Choice Health Services" },
      {
        property: "og:description",
        content: "Schedule a tour or ask questions. Call 201-724-3675.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const faqs = [
  { q: "What is an Adult Family Home?", a: "An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility." },
  { q: "What services do you provide?", a: "We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care." },
  { q: "How do I schedule a tour?", a: "Call us at 201-724-3675, email info@topchoice-health.com, or use the contact form above. We welcome family visits by appointment." },
  { q: "Can family members visit?", a: "Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your tour." },
  { q: "What level of care do you provide?", a: "We provide non-medical personal care, supervision, and support. Care plans are individualized and reviewed regularly to adapt to each resident's needs." },
  { q: "Is Top Choice Health Services licensed?", a: "Yes. We are a fully licensed Adult Family Home operating under Washington State Department of Social and Health Services (DSHS) regulations." },
];

function Contact() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="We're Here For You"
        title="Get In Touch"
        subtitle="We'd love to answer your questions and welcome your family."
        height="sm"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <FadeUp>
            <ContactForm />
          </FadeUp>
          <FadeUp delay={0.15}>
            <ContactInfo />
          </FadeUp>
        </div>
      </section>

      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">Common Questions</h2>
          </FadeUp>
          <FaqList />
        </div>
      </section>
    </PageWrapper>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      source: String(fd.get("source") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      await sendContactMessage({ data });
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "There was a problem sending your message. Please try again later.",
      );
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
      <h2 className="font-display text-3xl text-navy-deep">Send Us a Message</h2>
      {sent && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
          <span>Thank you! We've received your message and will be in touch shortly.</span>
        </div>
      )}
      {error && (
        <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <p>Unable to send your message.</p>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Email Address" name="email" type="email" required />
        <div>
          <label htmlFor="source" className="mb-1.5 block text-sm font-semibold text-navy-deep">
            How did you hear about us?
          </label>
          <select
            id="source"
            name="source"
            defaultValue="Google"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-deep focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          >
            <option>Google</option>
            <option>Referral</option>
            <option>Social Media</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-deep">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-gold py-4 text-base font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.01]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy-deep">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
      />
    </div>
  );
}

function ContactInfo() {
  const items = [
    { Icon: MapPin, text: SITE.address },
    { Icon: Phone, text: SITE.phone, href: SITE.phoneHref },
    { Icon: Printer, text: `Fax: ${SITE.phone}` },
    { Icon: Mail, text: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: Clock, text: "Available 24 hours, 7 days a week" },
  ];
  return (
    <div className="space-y-4">
      {items.map(({ Icon, text, href }) => (
        <div key={text} className="flex items-start gap-4 rounded-2xl bg-light-gray p-5">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
            <Icon size={20} />
          </div>
          {href ? (
            <a href={href} className="self-center font-semibold text-navy-deep hover:text-gold">
              {text}
            </a>
          ) : (
            <p className="self-center font-medium text-navy-deep">{text}</p>
          )}
        </div>
      ))}
      <a
        href={SITE.phoneHref}
        className="block rounded-xl bg-gold py-4 text-center text-base font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.01]"
      >
        Call Now: {SITE.phone}
      </a>
      <div className="relative h-[300px] overflow-hidden rounded-2xl bg-light-gray">
        <iframe
          src="https://maps.google.com/maps?q=2763+Grand+Fir+Pl+SE%2C+Port+Orchard%2C+WA+98366&z=15&ie=UTF8&output=embed"
          title="Top Choice Health Services Location"
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-display text-lg text-navy-deep">{f.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
