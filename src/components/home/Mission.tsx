import { HandHeart, Users, Sparkle } from "lucide-react";

const pillars = [
  {
    icon: HandHeart,
    title: "Inclusive by design",
    text: "A community-centred celebration built to welcome every resident of Durham Region, regardless of background.",
  },
  {
    icon: Sparkle,
    title: "Rooted in culture",
    text: "Honouring the true cultural significance of Diwali — light, hope, and the triumph of good — through authentic programming.",
  },
  {
    icon: Users,
    title: "Built on community",
    text: "Fostering unity, belonging, and shared joy by bringing families, youth, educators, and organizations together.",
  },
];

export default function Mission() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-eyebrow">Our Mission</span>
        <p className="mt-6 text-xl leading-relaxed text-ink/80 sm:text-2xl">
          The Durham Diwali Festival is committed to creating an inclusive,
          community-centered celebration that brings the Festival of Lights
          to Ajax for the first time in 2026. Our mission is to honour the
          cultural significance of Diwali while fostering unity, belonging,
          and shared joy across Durham Region.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-diya-100 bg-white p-7 shadow-sm shadow-diya-900/5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-100 text-saffron-600">
              <p.icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-diya-900">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
