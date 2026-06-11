import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">
          Ready to Learn More?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/80">
          We'd love to welcome your family.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep shadow-lg transition-transform hover:scale-[1.03]"
          >
            Book Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-deep"
          >
            Call Us: {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
