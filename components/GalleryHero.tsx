import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Container from "./Container";
import HeroBackdrop from "./HeroBackdrop";
import MediaSlider, { type Slide } from "./MediaSlider";
import RevealText from "./RevealText";
import { business } from "@/lib/constants";

type GalleryHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  slides: Slide[];
};

/** Navy hero with text on the left and a slidable photo gallery on the right. */
export default function GalleryHero({ eyebrow, title, description, slides }: GalleryHeroProps) {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <HeroBackdrop />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-soft backdrop-blur">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
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
          </div>
          <div className="animate-rise relative [animation-delay:300ms]">
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-accent/30 to-cta/20 blur-2xl" aria-hidden="true" />
            <div className="rounded-[28px] bg-white/95 p-3 shadow-2xl ring-1 ring-white/20">
              <MediaSlider aspectRatio="aspect-[4/3]" variant="offset" slides={slides} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
