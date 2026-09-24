"use client";

import { FormEvent, useId, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { business, services } from "@/lib/constants";

type ContactFormProps = {
  /** "light" for white cards, "dark" for glass panels on navy */
  tone?: "light" | "dark";
  /** Compact = name, phone, service, message (used in the homepage hero) */
  compact?: boolean;
  submitLabel?: string;
};

/** Enquiry form. Posts to /api/contact, which emails the lead via Resend. */
export default function ContactForm({ tone = "light", compact = false, submitLabel = "Send Message" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "submitted" | "error">("idle");
  const [error, setError] = useState("");
  // Unique ids so several forms can live on one page (hero + footer form on the homepage)
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const dark = tone === "dark";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const payload = {
      ...Object.fromEntries(new FormData(event.currentTarget)),
      // Tells the business which page/form the lead came from
      page: `${window.location.pathname}${compact ? " (quick quote form)" : ""}`,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send your message.");
      setStatus("submitted");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send your message.");
      setStatus("error");
    }
  }

  const label = `block text-sm font-medium ${dark ? "text-white/80" : "text-ink"}`;
  const field = `mt-1.5 w-full rounded-xl border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-4 ${
    dark
      ? "border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-accent focus:bg-white/[0.09] focus:ring-accent/20"
      : "border-border bg-surface text-ink placeholder:text-muted focus:border-cta focus:ring-cta/15"
  }`;

  if (status === "submitted") {
    return (
      <div
        role="status"
        className={`animate-rise flex flex-col items-center rounded-2xl border p-8 text-center ${
          dark ? "border-accent/40 bg-accent/10" : "border-accent bg-accent/10"
        }`}
      >
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <p className={`mt-3 font-display text-xl font-bold ${dark ? "text-white" : "text-navy"}`}>
          Thanks, your message is in!
        </p>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
          We&apos;ll be in touch shortly. For anything urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: hidden from people and screen readers; bots fill it in and get silently dropped */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={id("company")}>Company</label>
        <input id={id("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>
            Full name
          </label>
          <input id={id("name")} name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>
            Phone number
          </label>
          <input id={id("phone")} name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
      </div>

      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={id("email")} className={label}>
              Email address
            </label>
            <input id={id("email")} name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor={id("suburb")} className={label}>
              Suburb
            </label>
            <input id={id("suburb")} name="suburb" type="text" placeholder="e.g. Corrimal" className={field} />
          </div>
        </div>
      )}

      <div>
        <label htmlFor={id("service")} className={label}>
          Service needed
        </label>
        <select id={id("service")} name="service" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled className="text-ink">
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name} className="text-ink">
              {s.name}
            </option>
          ))}
          <option value="Other" className="text-ink">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label htmlFor={id("message")} className={label}>
          How can we help?
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={compact ? 3 : 4}
          required
          placeholder="Tell us a bit about the job"
          className={`${field} resize-none`}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className={`animate-rise flex items-start gap-3 rounded-xl border p-4 text-sm ${
            dark ? "border-red-400/40 bg-red-500/10 text-white" : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
          <p>
            {error} Please try again, or call us on{" "}
            <a href={business.phoneHref} className="font-bold underline underline-offset-2">
              {business.phone}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary group w-full px-6 py-4 disabled:cursor-wait disabled:opacity-80"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            {submitLabel}
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
      <p className={`text-center text-xs ${dark ? "text-white/50" : "text-muted"}`}>
        Free, no-obligation quote. For emergencies, please call us directly.
      </p>
    </form>
  );
}
