import { ReactNode } from "react";
import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import Container from "./Container";
import HeroBackdrop from "./HeroBackdrop";
import RevealText from "./RevealText";
import { business } from "@/lib/constants";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

const badges = [
  { icon: ShieldCheck, label: `Licensed ${business.licenseNumber}` },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: BadgeCheck, label: "Free Quotes" },
];

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <HeroBackdrop />
      <Container className="relative">
        {eyebrow && (
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
          <RevealText text={title} delay={150} />
        </h1>
        {description && (
          <p className="animate-rise mt-5 max-w-2xl text-base leading-relaxed text-white/75 [animation-delay:450ms] sm:text-lg">
            {description}
          </p>
        )}
        <div className="animate-rise mt-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/85 [animation-delay:600ms]">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-colors duration-300 hover:border-accent"
            >
              <badge.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {badge.label}
            </span>
          ))}
        </div>
        {children}
      </Container>
    </section>
  );
}
