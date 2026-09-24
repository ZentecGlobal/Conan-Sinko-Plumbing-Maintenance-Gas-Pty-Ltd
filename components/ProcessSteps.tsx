import { ClipboardCheck, PhoneCall, Sparkles, Wrench } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";

const steps = [
  {
    icon: PhoneCall,
    title: "Give us a call",
    detail: "Talk straight to a licensed plumber, day or night, about what's gone wrong.",
  },
  {
    icon: ClipboardCheck,
    title: "Free, upfront quote",
    detail: "We assess the job and confirm the price with you before any work starts.",
  },
  {
    icon: Wrench,
    title: "Fixed properly",
    detail: "Quality workmanship by a licensed tradie, done right the first time.",
  },
  {
    icon: Sparkles,
    title: "Left spotless",
    detail: "We clean up after ourselves and make sure you're happy before we leave.",
  },
];

/** "How it works" four-step strip joined by an animated dashed "pipe". */
export default function ProcessSteps({ title = "Sorted in four simple steps" }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28" aria-labelledby="process-heading">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 id="process-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            No runaround, no hidden fees. Here&apos;s what happens when you call Sinko.
          </p>
        </FadeIn>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <svg className="absolute left-0 top-8 hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
            <line x1="12" y1="1" x2="88" y2="1" stroke="var(--color-border)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <line
              x1="12"
              y1="1"
              x2="88"
              y2="1"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="6 14"
              vectorEffect="non-scaling-stroke"
              className="motion-safe:animate-[flow_1.2s_linear_infinite]"
            />
          </svg>
          {steps.map((step, i) => (
            <FadeIn as="li" key={step.title} delay={i * 150} className="group relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-accent-soft shadow-[0_12px_30px_-10px_rgba(11,31,51,0.6)] ring-8 ring-surface transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:bg-cta group-hover:text-white">
                <step.icon className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-text">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[16rem] text-[15px] leading-relaxed text-muted">{step.detail}</p>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
