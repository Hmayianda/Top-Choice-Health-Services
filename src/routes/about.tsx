import { createFileRoute } from "@tanstack/react-router";
import { Heart, Shield, Award, Home, Users, Sparkles } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/ui/FadeUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Top Choice Health Services" },
      {
        name: "description",
        content:
          "Learn about Top Choice Health Services — our mission, values, and the compassionate team behind our licensed adult family home in Port Orchard, WA.",
      },
      { property: "og:title", content: "About Us | Top Choice Health Services" },
      {
        property: "og:description",
        content:
          "Our mission, values, and compassionate team behind our licensed adult family home in Port Orchard, WA.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Dignity", desc: "Every resident is treated with respect and honor." },
  { icon: Sparkles, title: "Compassion", desc: "Warmth and empathy in every interaction." },
  { icon: Shield, title: "Integrity", desc: "Honest, transparent care you can trust." },
  { icon: Award, title: "Safety", desc: "A secure environment for peace of mind." },
  { icon: Users, title: "Excellence", desc: "Consistently high standards of care." },
  { icon: Home, title: "Family", desc: "A true sense of home and belonging." },
];


function About() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Our Story"
        title="Compassionate Care Rooted in Family Values"
        subtitle="Learn who we are, what we believe, and why families trust us."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Mission
            </p>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              More Than a Care Home — A Family
            </h2>
            <div className="mt-6 space-y-5 border-l-4 border-gold pl-5 text-left text-muted-foreground">
              <p>
                At Top Choice Health Services LLC, every decision we make is guided by one
                principle: treat every resident the way we would want our own loved ones to be
                treated. We are a licensed Adult Family Home committed to providing a warm,
                safe, dignified, and compassionate living environment.
              </p>
              <p>
                Our team of dedicated caregivers brings not just skill and training, but
                genuine heart. We believe that quality care is inseparable from human
                connection, and that a resident's happiness and wellbeing are just as
                important as their physical health.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              The Values That Guide Us
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1">
                  <v.icon size={32} className="text-gold" strokeWidth={2} />
                  <h3 className="mt-5 font-display text-2xl text-navy-deep">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Licensed, Trusted, and Committed
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Top Choice Health Services LLC is a fully licensed Adult Family Home operating
              under Washington State regulations. Our caregivers are trained,
              background-checked, and dedicated to delivering the highest standard of
              personalized care.
            </p>
          </FadeUp>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { n: "24/7", l: "Round-the-Clock Care" },
              { n: "100%", l: "Personalized Care Plans" },
              { n: "Licensed", l: "Washington State AFH" },
            ].map((s, i) => (
              <FadeUp key={s.l} delay={i * 0.1}>
                <div className="rounded-2xl border border-gold/30 bg-light-gray p-8">
                  <p className="font-display text-4xl text-gold sm:text-5xl">{s.n}</p>
                  <p className="mt-2 font-semibold text-navy-deep">{s.l}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
