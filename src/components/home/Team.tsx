import { useEffect, useState } from "react";
import { ChevronUp, X } from "lucide-react";
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
  onOpen,
  onClose,
}: {
  member: TeamMember;
  palette: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div data-team-card={member.name} className="stall-card-photo flex flex-col">
      {member.bio ? (
        <button
          type="button"
          onClick={onOpen}
          aria-expanded={isOpen}
          aria-label={`Read ${member.name}'s bio`}
          className="group aspect-[4/5] w-full overflow-hidden bg-diya-100"
        >
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none">
            <TeamPhoto member={member} palette={palette} />
          </div>
        </button>
      ) : (
        <div className="aspect-[4/5] w-full bg-diya-100">
          <TeamPhoto member={member} palette={palette} />
        </div>
      )}

      <div className="p-6">
        <h3 className="font-display text-base font-bold text-diya-900">{member.name}</h3>
        <p className="text-sm font-bold text-saffron-600">{member.role}</p>

        {member.bio && (
          <button
            type="button"
            onClick={onOpen}
            aria-expanded={isOpen}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-saffron-600 transition hover:text-saffron-700"
          >
            Read bio
            <ChevronUp size={14} />
          </button>
        )}
      </div>

      {member.bio && (
        /* Bio sheet: rises from the bottom edge and covers the whole card.
           No z-index, so the awning strip (z-index 1) stays painted on top. */
        <div
          aria-hidden={!isOpen}
          className={`absolute inset-0 flex flex-col bg-saffron-50 pt-8 transition-[transform,visibility] duration-500 ease-out motion-reduce:transition-none ${
            isOpen ? "visible translate-y-0" : "invisible translate-y-full"
          }`}
        >
          <div className="flex items-start justify-between gap-3 px-6">
            <div>
              <h3 className="font-display text-base font-bold text-diya-900">{member.name}</h3>
              <p className="text-sm font-bold text-saffron-600">{member.role}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close bio"
              className="-mr-2 rounded-full p-2 text-saffron-600 transition hover:bg-saffron-100 hover:text-saffron-700"
            >
              <X size={18} />
            </button>
          </div>
          <p className="mt-4 flex-1 overflow-y-auto px-6 pb-6 text-sm leading-relaxed text-ink/90">
            {member.bio}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  const [expanded, setExpanded] = useState<string | null>(null);

  // While a bio is open, any press outside that card (or Escape) closes it.
  useEffect(() => {
    if (!expanded) return;
    const onPointerDown = (e: PointerEvent) => {
      const card = (e.target as Element).closest("[data-team-card]");
      if (card?.getAttribute("data-team-card") !== expanded) setExpanded(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded]);

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              palette={palettes[i % palettes.length]}
              isOpen={expanded === member.name}
              onOpen={() => setExpanded(member.name)}
              onClose={() => setExpanded(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
