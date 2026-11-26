import { useEffect, useState } from "react";
import { X } from "lucide-react";
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
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${palette} font-display text-3xl font-bold text-white/90`}
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
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

/** Bio dialog: photo beside the full bio, closed with Escape, the X, or a click on the backdrop. */
function BioDialog({ member, palette, onClose }: { member: TeamMember; palette: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name}, ${member.role}`}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-cream text-ink sm:grid-cols-[14rem_1fr]"
      >
        <div className="hidden bg-night-mid sm:block">
          <TeamPhoto member={member} palette={palette} />
        </div>
        <div className="overflow-y-auto p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-extrabold leading-none tracking-tight text-night">{member.name}</h3>
              <p className="mt-2 text-sm font-bold text-rani-dark">{member.role}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close bio"
              className="-mr-2 -mt-2 rounded-full p-2 text-night transition hover:bg-night/10"
              autoFocus
            >
              <X size={20} />
            </button>
          </div>
          <p className="mt-5 leading-relaxed text-ink/85">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="team" className="scroll-mt-20 bg-cream py-20 text-night sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="section-heading">
            The people who <span className="text-rani-dark">lit it up.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Our team was thoughtfully and intentionally selected to reflect the values of equity, diversity, and
            inclusion that guide every aspect of the Durham Diwali Festival.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member, i) => {
            const palette = palettes[i % palettes.length];
            const photo = (
              <span className="block aspect-square overflow-hidden rounded-2xl bg-night-mid">
                <span className="block h-full w-full transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none">
                  <TeamPhoto member={member} palette={palette} />
                </span>
              </span>
            );
            const text = (
              <>
                <span className="mt-3 block font-display text-lg font-bold leading-tight tracking-tight">{member.name}</span>
                <span className="mt-0.5 block text-sm text-saffron-700">{member.role}</span>
              </>
            );
            return (
              <li key={member.name}>
                {member.bio ? (
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-haspopup="dialog"
                    className="group block w-full text-left"
                  >
                    {photo}
                    {text}
                    <span className="mt-1.5 block text-xs font-bold text-rani-dark group-hover:underline">Read bio</span>
                  </button>
                ) : (
                  <div className="group">
                    {photo}
                    {text}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {open !== null && (
        <BioDialog member={team[open]} palette={palettes[open % palettes.length]} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
