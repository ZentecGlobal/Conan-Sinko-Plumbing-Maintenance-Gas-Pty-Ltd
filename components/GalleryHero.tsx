import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import MediaSlider, { type Slide } from "./MediaSlider";
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
    <section className="bg-navy py-14 sm:py-20">
      <Container>
        <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now: {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-navy-dark/40 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
          <div className="rounded-[28px] bg-white p-3 shadow-2xl">
            <MediaSlider aspectRatio="aspect-[4/3]" variant="offset" slides={slides} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
