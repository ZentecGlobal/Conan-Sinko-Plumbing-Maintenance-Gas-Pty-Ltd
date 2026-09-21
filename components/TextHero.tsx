import type { ReactNode } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { business } from "@/lib/constants";

type TextHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional content rendered below the CTA buttons, e.g. a trust-badge row */
  children?: ReactNode;
};

/** Plain navy, text-only hero — no photo or slider. Used by hub pages. */
export default function TextHero({ eyebrow, title, description, children }: TextHeroProps) {
  return (
    <section className="bg-navy py-14 sm:py-20">
      <Container>
        <FadeIn className="flex flex-col items-start gap-4">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
            <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-navy-dark/40 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-white"
            >
              Request a Free Quote
            </Link>
          </div>
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
