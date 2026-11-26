import { Link } from "react-router-dom";

/** An admission-ticket call to action, with a perforated stub on the right. */
export default function CallToAction() {
  return (
    <section className="bg-cream-dark">
      <div className="container-page pb-20 sm:pb-28">
      <div className="ticket grid overflow-hidden rounded-3xl bg-marigold-500 text-night md:grid-cols-[1fr_auto]">
        <div className="px-8 py-12 sm:px-14 sm:py-16">
          <p className="text-sm font-bold text-rani-dark">Admit everyone</p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            Help us light up Durham again.
          </h2>
          <p className="mt-5 max-w-lg text-night/75">
            More than 3,500 people came to the first one. Sponsors and vendors are what make a festival like that
            possible.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 border-t-2 border-dashed border-night/25 px-8 py-10 sm:px-14 md:border-l-2 md:border-t-0">
          <Link to="/sponsorship-packages" className="btn-night">
            Support us
          </Link>
          <Link to="/vendor-packages" className="btn-outline border-night/40">
            Get a booth
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
