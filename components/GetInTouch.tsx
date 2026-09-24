import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";
import { business } from "@/lib/constants";

/** Homepage closing section: pitch + contact options on the left, full enquiry form on the right. */
export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className="relative bg-[linear-gradient(to_bottom,var(--color-body)_40%,var(--color-navy-950)_40%)] pt-4"
      aria-labelledby="get-in-touch-heading"
    >
      <Container>
        <FadeIn variant="scale">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy p-6 shadow-[0_40px_90px_-30px_rgba(11,31,51,0.8)] sm:p-10 lg:p-14">
            <div className="bg-blueprint absolute inset-0 -z-10" aria-hidden="true" />
            <div className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-cta/35 blur-3xl motion-safe:animate-[drift_16s_ease-in-out_infinite]" aria-hidden="true" />
            <div className="absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent/25 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite_reverse]" aria-hidden="true" />

            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div className="flex flex-col">
                <SectionEyebrow tone="light">Get In Touch</SectionEyebrow>
                <h2 id="get-in-touch-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                  Ready to get it sorted?
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
                  Fill in the form and we&apos;ll get back to you with a free,
                  no-obligation quote. Got an emergency? Call us now.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={business.phoneHref}
                    className="group flex items-center gap-3 rounded-2xl bg-cta p-4 text-white shadow-[0_12px_30px_-10px_rgba(8,124,193,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-cta-hover"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                      <Phone className="h-5 w-5 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-white/70">Call 24/7</span>
                      <span className="block font-display text-lg font-bold">{business.phone}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">Email us</span>
                      <span className="block truncate text-sm font-bold">{business.email}</span>
                    </span>
                  </a>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-white/70 lg:mt-auto lg:pt-8">
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                    Mon–Fri {business.hours.weekdays} · {business.hours.emergency}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                    Licensed &amp; insured · Licence {business.licenseNumber}
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-navy-950/50 p-6 backdrop-blur-xl sm:p-8">
                <p className="font-display text-xl font-bold text-white">Send us an enquiry</p>
                <p className="mb-6 mt-1 text-sm text-white/55">We&apos;ll call or email you back with a quote.</p>
                <ContactForm tone="dark" submitLabel="Get My Free Quote" />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
