import Image from "next/image";
import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Parallax from "./Parallax";
import RevealText from "./RevealText";
import SectionEyebrow from "./SectionEyebrow";
import { business } from "@/lib/constants";

type Media = { type: "image"; src: string; position?: string } | { type: "video"; src: string; poster: string };

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  media: Media;
  /** Words in the title to highlight with the teal shimmer */
  highlight?: string[];
  bullets?: string[];
};

/** Photo/video hero for service pages: animated headline on the left, quick quote form on the right. */
export default function ServiceHero({
  eyebrow,
  title,
  description,
  media,
  highlight = [],
  bullets = ["Licensed & insured", "Upfront pricing", "Free quotes"],
}: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-16 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <Parallax speed={0.18} className="absolute -inset-y-16 inset-x-0">
          <div className="absolute inset-0 motion-safe:animate-[ken-burns_14s_var(--ease-out-expo)_both]">
            {media.type === "image" ? (
              <Image src={media.src} alt="" fill priority sizes="100vw" className={`object-cover ${media.position ?? "object-center"}`} />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={media.poster}
                aria-hidden="true"
              >
                <source src={media.src} type="video/mp4" />
              </video>
            )}
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-5% via-navy-950/85 via-45% to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        <div className="bg-blueprint absolute inset-y-0 left-0 w-2/3 opacity-60" />
        <div className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-cta/20 blur-[140px] motion-safe:animate-[drift_20s_ease-in-out_infinite]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <div className="animate-rise">
              <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.45)] sm:text-5xl xl:text-6xl">
              <RevealText text={title} delay={120} highlight={highlight} />
            </h1>
            <p className="animate-rise max-w-xl text-lg leading-relaxed text-white/80 [animation-delay:600ms]">{description}</p>
            <a href={business.phoneHref} className="btn-primary animate-rise group px-8 py-4 [animation-delay:750ms]">
              <Phone className="h-5 w-5 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
              Call Now: {business.phone}
            </a>
            <ul className="animate-rise flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70 [animation-delay:900ms]">
              {bullets.map((point) => (
                <li key={point} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise relative [animation-delay:500ms]">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-cta/20 to-transparent blur-2xl" aria-hidden="true" />
            <div className="glow-border rounded-[2rem] bg-navy-950/75 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-white">Get a free quote</p>
                  <p className="mt-1 text-sm text-white/60">Tell us about the job and we&apos;ll get back to you.</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-text">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <ContactForm tone="dark" compact submitLabel="Get My Free Quote" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
