const pillars = [
  {
    title: "Inclusive by design",
    text: "A community-centred celebration built to welcome every resident of Durham Region, regardless of background.",
    color: "bg-marigold-500",
  },
  {
    title: "Rooted in culture",
    text: "Honouring the true cultural significance of Diwali (light, hope and the triumph of good) through authentic programming.",
    color: "bg-rani",
  },
  {
    title: "Built on community",
    text: "Fostering unity, belonging and shared joy by bringing families, youth, educators and organizations together.",
    color: "bg-saffron-500",
  },
];

/** Mission on cream, breaking up the night sections around it. */
export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 bg-cream text-night">
      <div className="py-20 sm:py-28">
        <div className="container-page">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            We set out to bring the Festival of Lights to Ajax for the first time, and to make it a{" "}
            <span className="text-rani-dark">celebration for everyone</span> in Durham Region.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">
            The Durham Diwali Festival is committed to an inclusive, community-centred celebration that honours the
            cultural significance of Diwali while fostering unity, belonging and shared joy across the region.
          </p>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <span className={`block h-3 w-12 rounded-full ${p.color}`} aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
