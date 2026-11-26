import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  children?: ReactNode;
}

/** Inner-page header: a photo across the full width with the title set over it, poster style. */
export default function PageHero({ title, description, image, imageAlt = "", imagePosition = "center", children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/75 to-transparent" aria-hidden="true" />
        </>
      )}
      <div className="container-page pb-16 pt-28 sm:pb-20 sm:pt-36">
        <h1 className="max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">{description}</p>
        {children}
      </div>
    </section>
  );
}
