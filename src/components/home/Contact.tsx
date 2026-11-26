import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../../data/festival";
import { submitNetlifyForm } from "../../lib/netlifyForms";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitNetlifyForm("contact", { ...form });
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="section-heading">
            Say <span className="text-rani-light">hello.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-cream/70">
            Questions about sponsorships, vendor booths, volunteering, or the festival program? Send us a message
            and a member of the organizing team will get back to you.
          </p>

          <dl className="mt-10 border-t border-cream/15">
            <div className="border-b border-cream/15 py-4">
              <dt className="text-xs font-bold text-rani-light">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-display text-xl font-bold hover:text-marigold-400">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="border-b border-cream/15 py-4">
              <dt className="text-xs font-bold text-rani-light">Phone</dt>
              <dd className="mt-1 font-display text-xl font-bold">{CONTACT_PHONE}</dd>
            </div>
            <div className="border-b border-cream/15 py-4">
              <dt className="text-xs font-bold text-rani-light">Where</dt>
              <dd className="mt-1 font-display text-xl font-bold">North Ajax, Durham Region, Ontario</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl bg-cream p-8 text-ink sm:p-10 lg:col-span-7">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <h3 className="font-display text-3xl font-extrabold text-night">
                Message sent!
              </h3>
              <p className="text-sm text-ink/85">
                Thank you for reaching out. We'll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-outline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid gap-4 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="sm:col-span-1">
                <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold text-ink/85">
                  First name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className="field"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lastName" className="mb-1.5 block text-xs font-semibold text-ink/85">
                  Last name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className="field"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink/85">
                  Phone*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="field"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink/85">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="field"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink/85">
                  Write a message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="field resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-rani w-full disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-600">
                  Something went wrong sending your message. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
