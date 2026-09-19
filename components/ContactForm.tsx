"use client";

import { FormEvent, useState } from "react";

// TODO: wire this up to a real submission target — e.g. a Next.js Route Handler
// at app/api/contact/route.ts that emails the lead, or a form service like
// Formspree/Resend. Currently this only simulates a successful submission.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent bg-accent/10 p-6 text-center"
      >
        <p className="font-bold text-navy">Thanks, your message is in!</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll be in touch shortly. For anything urgent, please call us
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="suburb" className="block text-sm font-medium text-ink">
          Suburb
        </label>
        <input
          id="suburb"
          name="suburb"
          type="text"
          placeholder="e.g. Corrimal"
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3.5 font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)] sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
