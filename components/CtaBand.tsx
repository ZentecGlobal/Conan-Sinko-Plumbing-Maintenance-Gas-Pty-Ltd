import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { business } from "@/lib/constants";

/** Site-wide closing call-to-action, sits between page content and the footer. */
export default function CtaBand() {
  return (
    <section className="relative bg-[linear-gradient(to_bottom,var(--color-body)_55%,var(--color-navy-950)_55%)] pt-16 sm:pt-24">
      <Container>
        <FadeIn variant="scale">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-6 py-12 shadow-[0_30px_80px_-30px_rgba(11,31,51,0.7)] sm:px-12 sm:py-16">
            <div className="bg-blueprint absolute inset-0 -z-10" aria-hidden="true" />
            <div
              className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl motion-safe:animate-[drift_14s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-32 left-10 -z-10 h-80 w-80 rounded-full bg-cta/40 blur-3xl motion-safe:animate-[drift_18s_ease-in-out_infinite_reverse]"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  On call 24/7 across the Illawarra
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                  Got a leak, a blockage or a gas smell? Let&apos;s sort it today.
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Talk straight to a licensed plumber. Free quotes, upfront pricing, no surprises.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                <a href={business.phoneHref} className="btn-primary px-8 py-4 text-lg">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {business.phone}
                </a>
                <Link href="/contact" className="btn-ghost group px-8 py-4">
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
