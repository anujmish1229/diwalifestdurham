import { HandHeart, Users, Sparkle } from "lucide-react";

const pillars = [
  {
    icon: HandHeart,
    title: "Inclusive by design",
    text: "A community-centred celebration built to welcome every resident of Durham Region, regardless of background.",
    rotate: "-rotate-2",
    width: "sm:w-72",
    lift: "sm:translate-y-0",
    color: "#ff9d32",
  },
  {
    icon: Sparkle,
    title: "Rooted in culture",
    text: "Honouring the true cultural significance of Diwali — light, hope, and the triumph of good — through authentic programming.",
    rotate: "rotate-1",
    width: "sm:w-80",
    lift: "sm:translate-y-6",
    color: "#ffc233",
  },
  {
    icon: Users,
    title: "Built on community",
    text: "Fostering unity, belonging, and shared joy by bringing families, youth, educators, and organizations together.",
    rotate: "-rotate-1",
    width: "sm:w-72",
    lift: "sm:-translate-y-2",
    color: "#a238e8",
  },
];

export default function Mission() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="section-heading">Our Mission</h2>
        <p className="mt-6 text-xl leading-relaxed text-saffron-50/75 sm:text-2xl">
          The Durham Diwali Festival is committed to creating an inclusive,
          community-centered celebration that brings the Festival of Lights
          to Ajax for the first time in 2026. Our mission is to honour the
          cultural significance of Diwali while fostering unity, belonging,
          and shared joy across Durham Region.
        </p>
      </div>

      <div className="hanging-string mx-auto mt-20 flex max-w-4xl flex-wrap items-start justify-center gap-x-6 gap-y-10 pt-10 sm:gap-x-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`relative w-full ${p.width} ${p.lift} ${p.rotate} flex-none transition hover:-translate-y-1 hover:rotate-0`}
          >
            <span
              aria-hidden="true"
              className="absolute -top-10 left-8 flex w-0 flex-col items-center"
            >
              <span
                className="h-3 w-3 rounded-full border-2 border-white/50"
                style={{ background: p.color, boxShadow: `0 0 10px ${p.color}99` }}
              />
              <span
                className="h-7 w-[2px]"
                style={{ background: `linear-gradient(180deg, ${p.color}, ${p.color}33)` }}
              />
            </span>
            <div className="price-tag border-2 bg-[#1f0e2b] py-7 pl-10 pr-6 shadow-stall" style={{ borderColor: `${p.color}55` }}>
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: `${p.color}22`, color: p.color }}
              >
                <p.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-saffron-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-saffron-50/60">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
