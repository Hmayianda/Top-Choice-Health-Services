import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <span className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-gold">
        <Icon size={24} strokeWidth={2.25} />
      </div>
      <h3 className="font-display text-xl text-navy-deep">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
