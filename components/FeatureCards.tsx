import type { LucideIcon } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";
import SpotlightCard from "./SpotlightCard";

type Feature = { icon: LucideIcon; title: string; text: string };

type FeatureCardsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: Feature[];
};

/** Navy section of numbered feature cards with a cursor spotlight and staggered entrance. */
export default function FeatureCards({ eyebrow, title, description, items }: FeatureCardsProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
      <div className="bg-blueprint absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px] motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-cta/20 blur-[120px] motion-safe:animate-[drift_24s_ease-in-out_infinite_reverse]" aria-hidden="true" />
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <FadeIn variant="left">
            <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">{title}</h2>
          </FadeIn>
          {description && (
            <FadeIn variant="right" delay={100} className="lg:pb-2">
              <p className="text-lg leading-relaxed text-white/65">{description}</p>
            </FadeIn>
          )}
        </div>
        <ul className={`mt-12 grid gap-6 sm:grid-cols-2 ${items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {items.map((item, i) => (
            <FadeIn as="li" key={item.title} delay={i * 120} className="h-full">
              <SpotlightCard className="glow-border group h-full overflow-hidden rounded-3xl bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:bg-white/[0.07]">
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-cta/10 text-accent-soft ring-1 ring-inset ring-accent/30 transition-all duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:from-accent group-hover:to-accent group-hover:text-accent-text">
                      <item.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="font-display text-5xl font-extrabold text-white/[0.06] transition-colors duration-500 group-hover:text-accent/20" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{item.text}</p>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
