import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { team } from "../../data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const palettes = [
  "from-diya-500 to-diya-700",
  "from-saffron-400 to-saffron-600",
  "from-marigold-500 to-saffron-600",
  "from-diya-400 to-diya-600",
];

export default function Team() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="team" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Team</span>
          <h2 className="mt-5 text-3xl font-bold text-diya-900 sm:text-4xl">
            Get to know us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Our team was thoughtfully and intentionally selected to reflect
            the values of equity, diversity, and inclusion that guide every
            aspect of the Durham Diwali Festival.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => {
            const isOpen = expanded === member.name;
            return (
              <div
                key={member.name}
                className="flex flex-col rounded-2xl border border-diya-100 bg-white p-6 shadow-sm shadow-diya-900/5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${palettes[i % palettes.length]} font-display text-lg font-semibold text-white`}
                  >
                    {initials(member.name)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-diya-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-saffron-600">{member.role}</p>
                  </div>
                </div>

                {member.bio && (
                  <>
                    <p
                      className={`mt-4 text-sm leading-relaxed text-ink/60 ${
                        isOpen ? "" : "line-clamp-3"
                      }`}
                    >
                      {member.bio}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : member.name)}
                      className="mt-3 inline-flex items-center gap-1 self-start text-xs font-semibold uppercase tracking-wide text-diya-700 transition hover:text-diya-900"
                    >
                      {isOpen ? "Show less" : "Read bio"}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
