import { DiyaRow } from "../decorative";

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 border-y border-white/5 bg-black/20 py-20 sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="section-heading">
            A signature annual celebration that illuminates our region
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-saffron-50/65">
            <p>
              Our vision is to establish the Durham Diwali Festival as a
              signature annual celebration that illuminates our region with
              culture, connection, and community pride. We aspire to create
              a festival that grows each year into a unifying tradition, one
              that reflects the diversity of Durham, strengthens
              intercultural understanding, and offers a joyful space where
              every resident feels seen, welcomed, and included.
            </p>
            <p>
              We envision a future where Diwali in Ajax becomes a vibrant
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
          <div className="rounded-[2rem] bg-gradient-to-br from-diya-800 to-diya-950 p-10 text-white shadow-lantern">
            <DiyaRow className="h-8 w-full text-marigold-300" />
            <blockquote className="mt-8 font-display text-xl font-bold leading-snug sm:text-2xl">
              &ldquo;A beacon of hope, belonging, and celebration for
              generations to come.&rdquo;
            </blockquote>
            <div className="mt-8 h-px w-16 bg-saffron-400" />
            <p className="mt-6 text-sm text-white/60">
              Presented by the Durham Diwali Festival Organizing Committee,
              in partnership with the Durham District School Board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
