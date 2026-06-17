import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home, UtensilsCrossed, TreePine, ShieldCheck, Armchair, Clock, MapPin,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/site";
import ourhomeHero from "@/assets/safety.jpg";
import galleryBedrooms from "@/assets/bedroom.jpg";
import galleryLiving from "@/assets/livingarea.jpg";
import galleryDining from "@/assets/kitchen.jpg";
import galleryOutdoor from "@/assets/outdoor.jpg";
import galleryGathering from "@/assets/common area.jpg";
import gallerySafety from "@/assets/safety.jpg";

export const Route = createFileRoute("/our-home")({
  head: () => ({
    meta: [
      { title: "Our Home | Top Choice Health Services | Port Orchard, WA" },
      {
        name: "description",
        content:
          "Take a virtual look inside Top Choice Health Services — comfortable bedrooms, safe living spaces, and a warm home environment in Port Orchard, WA.",
      },
      { property: "og:title", content: "Our Home | Top Choice Health Services" },
      {
        property: "og:description",
        content:
          "Comfortable bedrooms, safe living spaces, and a warm home environment in Port Orchard, WA.",
      },
      { property: "og:url", content: "/our-home" },
    ],
    links: [{ rel: "canonical", href: "/our-home" }],
  }),
  component: OurHome,
});

/*const gallery = [
  "Comfortable Bedrooms",
  "Spacious Living Areas",
  "Dining & Kitchen Spaces",
  "Outdoor & Garden Areas",
  "Common Gathering Rooms",
  "Safety & Accessibility Features",
];*/

const gallery = [
  { label: "Comfortable Bedrooms",            img: galleryBedrooms },
  { label: "Spacious Living Areas",           img: galleryLiving },
  { label: "Dining & Kitchen Spaces",         img: galleryDining },
  { label: "Outdoor & Garden Areas",          img: galleryOutdoor },
  { label: "Common Gathering Rooms",          img: galleryGathering },
  { label: "Safety & Accessibility Features", img: gallerySafety },
];

const features = [
  { icon: Home, title: "Private Bedrooms", desc: "Each resident enjoys a private, personalized space they can truly call their own." },
  { icon: UtensilsCrossed, title: "Home-Cooked Meals", desc: "Fresh, nutritious meals prepared daily in our home kitchen, tailored to every resident." },
  { icon: TreePine, title: "Outdoor Access", desc: "A safe, accessible outdoor area for fresh air, light activity, and peaceful moments." },
  { icon: ShieldCheck, title: "Safety Equipment", desc: "Grab bars, non-slip surfaces, emergency call systems, and monitored entry for complete security." },
  { icon: Armchair, title: "Common Living Areas", desc: "Warm, welcoming shared spaces for social time, TV, reading, and family visits." },
  { icon: Clock, title: "24/7 Caregiver Presence", desc: "A caregiver is always present, day and night, ensuring immediate support whenever needed." },
];

function OurHome() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Our Home"
        title="A Safe Place to Call Home"
        subtitle="Thoughtfully designed spaces where comfort, safety, and warmth come together."
        image={ourhomeHero}
      />

      {/* Gallery */}
      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">Inside Our Home</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every space is designed with our residents' comfort and dignity in mind.
            </p>
          </FadeUp>
          {/* Replace gradient backgrounds with real photos — img tags are ready */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.05}>
                <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" />
                  <p className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-white drop-shadow-md">
                    {item.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Designed for Comfort & Safety
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-light-gray p-7 transition-shadow hover:shadow-lg">
                  <f.icon size={32} className="text-gold" strokeWidth={1.75} />
                  <h3 className="mt-5 font-display text-xl text-navy-deep">{f.title}</h3>
                  <p className="mt-2 text-muted-foreground">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-light-gray py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Visit Us
            </p>
            <h2 className="font-display text-4xl text-navy-deep sm:text-5xl">
              Located in Port Orchard, WA
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our home is nestled in a peaceful residential neighborhood in Port Orchard,
              Washington — close to medical facilities, parks, and services, yet quiet and
              comfortable for our residents.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-white p-5">
              <MapPin className="mt-0.5 shrink-0 text-gold" />
              <p className="font-semibold text-navy-deep">{SITE.address}</p>
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
            >
              Get Directions
            </a>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
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
          </FadeUp>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="bg-navy-deep py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <h2 className="font-display text-4xl sm:text-5xl">See It For Yourself</h2>
            <p className="mt-5 text-lg text-white/85">
              We invite you to visit, ask questions, and experience the warmth of our home firsthand.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-lg transition-transform hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageWrapper>
  );
}
