import { createFileRoute } from "@tanstack/react-router";
import {
  Heart, Pill, Brain, Activity, UtensilsCrossed, Shield, Users, RefreshCw, CheckCircle2,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/ui/FadeUp";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Top Choice Health Services" },
      {
        name: "description",
        content:
          "Explore the full range of care services at Top Choice Health Services — personal care, medication management, memory support, meal prep, and more in Port Orchard, WA.",
      },
      { property: "og:title", content: "Our Services | Top Choice Health Services" },
      {
        property: "og:description",
        content:
          "Personal care, medication management, memory care, meal prep, and 24-hour supervision in Port Orchard, WA.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Heart, title: "Personal Care Assistance", description: "We provide thoughtful, dignified assistance with bathing, grooming, dressing, and personal hygiene. Our caregivers approach every task with sensitivity and respect for each resident's privacy and independence. The goal is always to preserve dignity while ensuring comfort." },
  { icon: Pill, title: "Medication Management", description: "Proper medication management is critical to health and safety. We maintain careful records, administer medications on schedule, coordinate refills, and communicate with healthcare providers to ensure accuracy and compliance at all times." },
  { icon: Brain, title: "Memory Care Support", description: "We offer compassionate, structured routines for residents living with Alzheimer's, dementia, or other memory-related conditions. Our approach emphasizes familiarity, calm, and consistent engagement to reduce anxiety and support cognitive function." },
  { icon: Activity, title: "Mobility Assistance", description: "Whether it's help with transfers, walking, or gentle physical exercises, our team provides safe and supportive mobility assistance. We work to help residents maintain their independence and reduce the risk of falls." },
  { icon: UtensilsCrossed, title: "Meal Preparation & Nutrition", description: "Every meal is home-cooked and tailored to individual dietary requirements, preferences, and health needs. We believe good nutrition is foundational to wellbeing, and we make mealtimes enjoyable and social experiences." },
  { icon: Shield, title: "24-Hour Supervision", description: "Our caregivers are present around the clock, providing continuous oversight and immediate response to any need. Families can rest assured knowing their loved ones are never alone and always cared for." },
  { icon: Users, title: "Companionship & Social Engagement", description: "Loneliness can be as harmful as physical illness. We prioritize meaningful social interaction, activities, conversation, and engagement to support emotional health and happiness for every resident." },
  { icon: RefreshCw, title: "Respite Care", description: "Family caregivers deserve rest too. Our respite care services provide short-term relief while ensuring your loved one receives the same level of attentive, compassionate care they would receive full-time." },
];

const approach = [
  "Initial Assessment & Family Consultation",
  "Personalized Care Plan Development",
  "Ongoing Caregiver Training",
  "Regular Progress Reviews",
  "Open Family Communication",
];

function Services() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="What We Offer"
        title="Comprehensive Care for Every Need"
        subtitle="Personalized services designed around each resident's comfort and wellbeing."
        image="/src/assets/serviceshero.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">Our Services</h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.05}>
                <ServiceCard {...s} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              How We Care
            </p>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Our Approach to Care
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every resident at Top Choice Health Services receives a fully individualized care
              plan developed in collaboration with their family and healthcare providers. We
              regularly review and update these plans to adapt to changing needs.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <ul className="space-y-4 rounded-2xl bg-white p-8 shadow-md">
              {approach.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-soft text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="font-semibold text-navy-deep">{step}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
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
              <AccordionItem value="faq-1" className="rounded-xl border border-border bg-light-gray px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  What is an Adult Family Home?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  An Adult Family Home is a licensed residential home where a small number of adults (typically 2–6) receive personalized care in a family-style setting, as opposed to a large institutional facility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="rounded-xl border border-border bg-light-gray px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  What services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer personal care, medication management, memory care support, mobility assistance, meal preparation, 24-hour supervision, companionship, and respite care.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="rounded-xl border border-border bg-light-gray px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  How do I book an appointment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can call us at 360-443-2310, email info@topchoice-health.com, or fill out our contact form. We welcome family visits by appointment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="rounded-xl border border-border bg-light-gray px-6 shadow-sm">
                <AccordionTrigger className="text-base font-semibold text-navy-deep hover:no-underline">
                  Can family members visit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We encourage family involvement and welcome visits. We can discuss preferred visiting arrangements during your appointment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="rounded-xl border border-border bg-light-gray px-6 shadow-sm">
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
