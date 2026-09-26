import type { ReactNode } from "react";
import { RangoliMotif, StringLights } from "./decorative";

interface PageHeroProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night-sky bg-stars">
      <RangoliMotif className="pointer-events-none absolute -right-16 -top-10 h-80 w-80 text-white/5" />
      <StringLights className="h-10 w-full text-saffron-300" count={18} height={40} />
      <div className="container-page relative py-16 sm:py-20">
        <h1 className="max-w-2xl font-marquee text-3xl leading-tight text-saffron-50 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-saffron-50/70">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
