import { ReactNode } from "react";
import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { business } from "@/lib/constants";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white py-14 sm:py-20">
      <Container className="relative">
        <FadeIn>
          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-ink/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-navy" aria-hidden="true" />
              Licensed {business.licenseNumber}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-navy" aria-hidden="true" />
              24/7 Emergency
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-navy" aria-hidden="true" />
              Free Quotes
            </span>
          </div>
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
