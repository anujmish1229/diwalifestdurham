import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { team, type TeamMember } from "../../data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const palettes = [
  "from-diya-500 to-diya-700",
  "from-saffron-400 to-saffron-600",
  "from-marigold-500 to-saffron-600",
  "from-diya-400 to-diya-600",
];

function TeamPhoto({ member, palette }: { member: TeamMember; palette: string }) {
  const [failed, setFailed] = useState(false);
  const src = member.photo ?? `/team/${slugify(member.name)}.jpg`;

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${palette} font-display text-4xl font-bold text-white/90`}
        role="img"
        aria-label={member.name}
      >
        {initials(member.name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={member.name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function TeamCard({
  member,
  palette,
  isOpen,
  onToggle,
}: {
  member: TeamMember;
  palette: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="stall-card-photo flex flex-col">
      <div className="aspect-[4/5] w-full bg-diya-100">
        <TeamPhoto member={member} palette={palette} />
      </div>

      <div className="p-6">
        <h3 className="font-display text-base font-bold text-diya-900">{member.name}</h3>
        <p className="text-sm font-bold text-saffron-600">{member.role}</p>

        {member.bio && (
          <>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-saffron-600 transition hover:text-saffron-700"
            >
              {isOpen ? "Show less" : "Read bio"}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="mt-3 text-sm leading-relaxed text-ink/90">{member.bio}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="team" className="scroll-mt-20 border-y border-white/5 bg-black/20 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Get to know our team</h2>
          <p className="mt-4 text-base leading-relaxed text-saffron-50/60">
            Our team was thoughtfully and intentionally selected to reflect
            the values of equity, diversity, and inclusion that guide every
            aspect of the Durham Diwali Festival.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => {
            const isOpen = expanded === member.name;
            const palette = palettes[i % palettes.length];
            const toggle = () => setExpanded(isOpen ? null : member.name);

            return (
              <div key={member.name} className="relative">
                {/* Always in flow: this reserves the grid row's real height, so
                    opening a neighbor's bio never moves this card. */}
                <TeamCard member={member} palette={palette} isOpen={false} onToggle={toggle} />

                {/* Expanded state: pops out of flow and grows downward over
                    whatever sits below it, instead of pushing the grid apart. */}
                {isOpen && (
                  <div className="absolute inset-x-0 top-0 z-30 shadow-lantern ring-2 ring-marigold-400/50 rounded-[1.75rem]">
                    <TeamCard member={member} palette={palette} isOpen onToggle={toggle} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
