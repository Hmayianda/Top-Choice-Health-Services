import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart, Pill, Brain, Shield, CheckCircle2, ChevronDown,
  ShieldCheck, Star, Award, Users, Activity, Quote, ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeUp } from "@/components/ui/FadeUp";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Choice Health Services" },
      {
        name: "description",
        content:
          "Top Choice Health Services offers compassionate, personalized adult family home care in Port Orchard, WA. 24-hour care, medication management, memory support, and more.",
      },
      { property: "og:title", content: "Top Choice Health Services" },
      {
        property: "og:description",
        content:
          "Compassionate, licensed adult family home care in Port Orchard, WA.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthcareProvider",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2763 Grand Fir Pl SE",
            addressLocality: "Port Orchard",
            addressRegion: "WA",
            postalCode: "98366",
            addressCountry: "US",
          },
          serviceType: "Adult Family Home",
        }),
      },
    ],
  }),
  component: Home,
});

const trust = [
  "24-Hour Care",
  "Personalized Care Plans",
  "Medication Management",
  "Safe Family Environment",
  "Compassionate Caregivers",
  "Licensed Adult Family Home",
];

const highlightServices = [
  { icon: Heart, title: "Personal Care Assistance", description: "Dignified help with bathing, grooming, and daily routines." },
  { icon: Pill, title: "Medication Management", description: "Accurate scheduling, refills, and provider coordination." },
  { icon: Brain, title: "Memory Care Support", description: "Calm, structured routines for residents with memory needs." },
  { icon: Shield, title: "24-Hour Supervision", description: "Continuous, attentive presence day and night." },
];

const apart = [
  { icon: Heart, title: "Compassion", desc: "We treat every resident like a cherished member of our own family." },
  { icon: ShieldCheck, title: "Safety", desc: "A secure, fully equipped environment designed for resident wellbeing." },
  { icon: Star, title: "Respect", desc: "Every individual is honored with dignity, privacy, and personal choice." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of care and professionalism." },
];

const signs = [
  "Difficulty managing medications",
  "Frequent falls or balance issues",
  "Memory concerns or confusion",
  "Isolation or loneliness",
  "Need assistance with daily activities",
  "Caregiver burnout in the family",
];

const testimonials = [
  { quote: "Choosing Top Choice Health Services was the best decision we made for our mother. The staff treats her like family, and we have peace of mind knowing she is safe and loved.", name: "Margaret T.", role: "Daughter" },
  { quote: "The level of personalized attention our father receives is remarkable. They know his preferences, his routines, and they genuinely care about his happiness.", name: "James R.", role: "Son" },
  { quote: "After visiting several facilities, Top Choice stood out immediately. The home environment, the warmth of the staff — it felt right the moment we walked in.", name: "Linda K.", role: "Family Member" },
  { quote: "Our grandmother has thrived since moving in. She's more social, more engaged, and she tells us she feels at home. We couldn't be more grateful.", name: "The Smith's Family", role: "Family" },
];

function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-healthcare-blue text-white">
        {/* Drop-in photo slot */}
        <img
          src={undefined}
          alt="Caregiver assisting senior resident in a warm home environment"
          className="absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy/70 to-healthcare-blue/75" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-healthcare-blue/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <FadeUp>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Licensed Adult Family Home · Port Orchard, WA
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Quality Care at Our Home
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-light text-white/85">
              Providing compassionate, personalized care in a safe, comfortable, and
              family-oriented environment.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-xl transition-transform hover:scale-[1.03]"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-deep"
              >
                Learn About Our Services
              </Link>
            </div>
          </FadeUp>
        </div>

        <a
          href="#trust"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* Trust */}
      <section id="trust" className="bg-light-gray py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-6 sm:grid-cols-3 lg:grid-cols-6">
          {trust.map((t, i) => (
            <FadeUp key={t} delay={i * 0.05} className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-gold" />
              <span className="text-sm font-semibold text-navy-deep">{t}</span>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About Us
            </p>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Why Families Choose Top Choice
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              At Top Choice Health Services LLC, we understand that choosing care for a loved
              one is one of life's most important decisions. Our mission is to provide
              exceptional care in a warm family setting where residents receive individualized
              attention, dignity, respect, and comfort.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-semibold text-navy-deep hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight size={16} className="text-gold" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive care tailored to each resident's unique needs.
            </p>
          </FadeUp>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlightServices.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <ServiceCard {...s} />
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-navy-deep py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Difference
            </p>
            <h2 className="font-display text-4xl sm:text-5xl">What Sets Us Apart</h2>
          </FadeUp>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-gold/30 sm:grid-cols-2">
            {apart.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.08} className="bg-navy-deep p-8">
                <a.icon size={36} className="text-gold" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-2xl text-gold">{a.title}</h3>
                <p className="mt-2 text-white/80">{a.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Is It Time */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#FDF6E3] px-6 py-16 sm:py-24 lg:px-16">
          <FadeUp className="mx-auto max-w-md">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Is It Time For Additional Care?
            </h2>
            <p className="mt-5 text-lg text-navy-deep/80">
              Recognizing when a loved one needs more support is an act of love.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.03]"
            >
              Schedule a Confidential Consultation
            </Link>
          </FadeUp>
        </div>
        <div className="bg-white px-6 py-16 sm:py-24 lg:px-16">
          <ul className="mx-auto max-w-md space-y-4">
            {signs.map((s, i) => (
              <FadeUp key={s} delay={i * 0.08} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={22} />
                <span className="text-base text-navy-deep">{s}</span>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Have Questions?
            </p>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="rounded-xl border border-border bg-white px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  What is an Adult Family Home?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="rounded-xl border border-border bg-white px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  What services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="rounded-xl border border-border bg-white px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  How do I book an appointment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can call us at 360-443-2310, email info@topchoice-health.com, or fill out our contact form. We welcome family visits by appointment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="rounded-xl border border-border bg-white px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  Can family members visit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your appointment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="rounded-xl border border-border bg-white px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  What level of care do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide comprehensive care for adults who need assistance with daily living activities, including personal care, medication management, memory care support, and 24-hour supervision. We work with each resident and their family to develop a personalized care plan that meets their specific needs and comfort level.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeUp>
        </div>
      </section>
    </PageWrapper>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="text-center">
          <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
            What Families Are Saying
          </h2>
        </FadeUp>
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-2">
                <article className="mx-auto max-w-3xl h-full rounded-2xl border border-border bg-light-gray p-8 shadow-sm">
                  <Quote size={36} className="text-gold" />
                  <p className="mt-4 text-lg italic leading-relaxed text-navy-deep">
                    "{t.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-navy-deep">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-gold" : "w-2.5 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
