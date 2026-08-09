import { DiyaRow } from "../decorative";

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 bg-diya-50/60 py-20 sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="section-eyebrow">Our Vision</span>
          <h2 className="mt-5 text-3xl font-bold text-diya-900 sm:text-4xl">
            A signature annual celebration that illuminates our region
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70">
            <p>
              Our vision is to establish the Durham Diwali Festival as a
              signature annual celebration that illuminates our region with
              culture, connection, and community pride. We aspire to create
              a festival that grows each year into a unifying tradition — one
              that reflects the diversity of Durham, strengthens
              intercultural understanding, and offers a joyful space where
              every resident feels seen, welcomed, and included.
            </p>
            <p>
              Guided by the leadership of{" "}
              <span className="font-semibold text-diya-800">
                H.A.N.D., the Educators&rsquo; Hindu Affinity Network of Durham
              </span>
              , we envision a future where Diwali in Ajax becomes a vibrant
              regional gathering that inspires youth, uplifts families, and
              showcases the richness of South Asian heritage through light,
              art, food, and shared experiences.
            </p>
            <p>
              The Durham Diwali Festival aims to shine as a beacon of hope,
              belonging, and celebration for generations to come.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-diya-800 to-diya-950 p-10 text-white shadow-glow">
            <DiyaRow className="h-8 w-full text-saffron-300" />
            <blockquote className="mt-8 font-display text-xl font-medium leading-snug sm:text-2xl">
              &ldquo;A beacon of hope, belonging, and celebration for
              generations to come.&rdquo;
            </blockquote>
            <div className="mt-8 h-px w-16 bg-saffron-400" />
            <p className="mt-6 text-sm text-white/60">
              Presented by H.A.N.D. — Educators&rsquo; Hindu Affinity Network
              of Durham, in partnership with the Durham District School
              Board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
