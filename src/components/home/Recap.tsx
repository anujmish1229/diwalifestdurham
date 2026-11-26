import { DRONE_VIDEO, HCCD_EVENT_PAGE, recognition } from "../../data/festival";

const photos = [
  { src: "/media/dancer.jpg", alt: "A dancer in a pink and gold sari performing on stage", caption: "A dance performance on the main stage", pos: "object-top" },
  { src: "/media/drone-om.jpg", alt: "An Om and a diya drawn in the sky by drones", caption: "The drone show", pos: "object-center" },
  { src: "/media/stage-volunteers.jpg", alt: "A group on the festival stage at night, clapping along", caption: "On the main stage after dark", pos: "object-center" },
];

export default function Recap() {
  return (
    <section id="recap" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="section-heading max-w-2xl">
            The night, <span className="text-marigold-500">in pictures.</span>
          </h2>
          <a
            href={HCCD_EVENT_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Full gallery on hccd.ca ↗
          </a>
        </div>

        <figure className="mt-12">
          <video
            src={DRONE_VIDEO}
            poster="/media/drone-crowd-poster.jpg"
            controls
            playsInline
            preload="none"
            aria-label="Video of the crowd watching the Diwali drone show"
            className="aspect-video w-full rounded-3xl bg-black"
          />
          <figcaption className="mt-3 text-sm text-cream/60">The crowd watching the drone show</figcaption>
        </figure>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {photos.map((p) => (
            <figure key={p.src} className="group">
              <div className="overflow-hidden rounded-3xl bg-black">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover ${p.pos} transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <figcaption className="mt-3 text-sm text-cream/60">{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold">Recognized by</h3>
          <p className="mt-2 text-cream/60">Certificates and letters of congratulations sent for the 2026 festival.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {recognition.map((r) => (
              <li key={r} className="rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5 text-sm font-semibold text-cream/90">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
