import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "./Container";
import HeroBackdrop from "./HeroBackdrop";
import RevealText from "./RevealText";
import { business } from "@/lib/constants";

type TextHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional content rendered below the CTA buttons, e.g. a trust-badge row */
  children?: ReactNode;
};

/** Navy, text-only hero — no photo or slider. Used by hub pages. */
export default function TextHero({ eyebrow, title, description, children }: TextHeroProps) {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <HeroBackdrop />
      <Container>
        <div className="flex flex-col items-start gap-5">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            <RevealText text={title} delay={120} />
          </h1>
          <p className="animate-rise max-w-2xl text-base leading-relaxed text-white/75 [animation-delay:450ms] sm:text-lg">
            {description}
          </p>
          <div className="animate-rise mt-2 flex w-full flex-col gap-3 [animation-delay:600ms] sm:w-auto sm:flex-row">
            <a href={business.phoneHref} className="btn-primary px-7 py-3.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {business.phone}
            </a>
            <Link href="/contact" className="btn-ghost group px-7 py-3.5">
              Request a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          {children && <div className="animate-rise w-full [animation-delay:750ms]">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
