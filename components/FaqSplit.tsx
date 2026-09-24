import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import SectionEyebrow from "./SectionEyebrow";
import { business } from "@/lib/constants";

type FaqSplitProps = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
  /** Optional small print under the accordion, e.g. related links */
  footer?: ReactNode;
};

/** Two-column FAQ: sticky heading + call card on the left, accordion on the right. */
export default function FaqSplit({
  id,
  title,
  description = "Straight answers about our work, service areas and pricing.",
  items,
  footer,
}: FaqSplitProps) {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28" aria-labelledby={id}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn variant="left" className="lg:sticky lg:top-32 lg:self-start">
            <SectionEyebrow>Got Questions?</SectionEyebrow>
            <h2 id={id} className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
            <div className="relative mt-8 overflow-hidden rounded-3xl bg-navy p-6 text-white">
              <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-lg font-bold">Still not sure?</p>
                <p className="mt-1 text-sm text-white/65">Talk straight to a licensed plumber, any time.</p>
                <a href={business.phoneHref} className="btn-primary group mt-5 px-6 py-3 text-sm">
                  <Phone className="h-4 w-4 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                  {business.phone}
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn variant="right" delay={100}>
            <FaqAccordion items={items} />
            {footer && <p className="mt-6 text-sm text-muted">{footer}</p>}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
