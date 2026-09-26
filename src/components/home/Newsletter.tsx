import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { submitNetlifyForm } from "../../lib/netlifyForms";
import { StringLights } from "../decorative";

type Status = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitNetlifyForm("newsletter", { email });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="newsletter"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-r from-diya-700 via-diya-800 to-diya-900 py-20"
    >
      <StringLights className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full text-marigold-300" count={18} height={32} />

      <div className="container-page relative text-center">
        <h2 className="font-display text-3xl font-bold text-saffron-50 sm:text-4xl">
          Subscribe Now
        </h2>
        <p className="mx-auto mt-3 max-w-md text-saffron-50/70">
          Be the first to hear about Durham Diwali Festival events, tickets,
          and community updates.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-medium text-marigold-200">
            <CheckCircle2 size={18} />
            You're subscribed! We'll keep you posted.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="newsletter"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="relative flex-1">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-diya-900/40"
              />
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border-none bg-white py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-[#635a6e] focus:outline-none focus:ring-2 focus:ring-saffron-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary shrink-0 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Get Event Updates"
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-marigold-200">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </section>
  );
}
