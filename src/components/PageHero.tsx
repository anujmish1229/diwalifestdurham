import type { ReactNode } from "react";
import { RangoliMotif } from "./decorative";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-diya-900 via-diya-800 to-diya-950 bg-diya-radial text-white">
      <RangoliMotif className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 text-white/10" />
      <div className="container-page relative py-20 sm:py-24">
        <span className="section-eyebrow bg-white/10 text-saffron-200">{eyebrow}</span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
