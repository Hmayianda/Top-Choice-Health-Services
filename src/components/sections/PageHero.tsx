import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  height?: "sm" | "md";
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, height = "md", children }: Props) {
  const h = height === "sm" ? "min-h-[40vh]" : "min-h-[50vh]";
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${h} bg-gradient-to-br from-navy-deep via-navy to-healthcare-blue text-white`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <FadeUp>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        </FadeUp>
        {subtitle && (
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>
          </FadeUp>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
