import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import CheckList from "./CheckList";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FaqSplit from "./FaqSplit";
import GetInTouch from "./GetInTouch";
import MapFrame from "./MapFrame";
import Parallax from "./Parallax";
import PopularServices from "./PopularServices";
import ProcessSteps from "./ProcessSteps";
import SectionEyebrow from "./SectionEyebrow";
import ServiceHero from "./ServiceHero";
import WorkGallery from "./WorkGallery";
import { business } from "@/lib/constants";
import { suburbs, type SuburbContent } from "@/lib/suburbs";

const LINK =
  "font-semibold text-navy underline decoration-accent/0 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-accent";

/** Full suburb landing page, driven by the content in lib/suburbs.ts. */
export default function SuburbPage({ suburb }: { suburb: SuburbContent }) {
  const nearby = suburbs.filter((s) => s.slug !== suburb.slug);
  const isHome = suburb.slug === "corrimal";

  return (
    <>
      <ServiceHero
        eyebrow={suburb.eyebrow}
        title={`Plumber in ${suburb.name}, NSW`}
        // The last word of the name carries the comma in "Plumber in Fairy Meadow, NSW"
        highlight={suburb.name.split(" ").map((w, i, all) => (i === all.length - 1 ? `${w},` : w))}
        description={suburb.heroDescription}
        media={{ type: "image", src: suburb.heroImage, position: suburb.heroImagePosition }}
        bullets={[isHome ? "Based right here" : `Servicing ${suburb.name} ${suburb.postcode}`, "24/7 emergencies", "Free quotes"]}
      />

      {/* LOCAL + MAP */}
      <section className="relative isolate overflow-hidden bg-body py-20 sm:py-28">
        {/* Oversized outline watermark of the suburb name, drifting with scroll */}
        <Parallax speed={0.12} className="pointer-events-none absolute -left-4 top-6 -z-10 select-none">
          <p aria-hidden="true" className="whitespace-nowrap font-display text-[7rem] font-extrabold uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(11,31,51,0.07)] sm:text-[11rem] lg:text-[14rem]">
            {suburb.name}
          </p>
        </Parallax>
        <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn variant="left">
              <SectionEyebrow>Why Local Matters</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">{suburb.localHeading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{suburb.localBody}</p>
              <CheckList items={suburb.highlights} />
              <a href={business.phoneHref} className="btn-primary group mt-8 px-6 py-3.5">
                <Phone className="h-4 w-4 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                Call Your {suburb.name} Plumber: {business.phone}
              </a>
            </FadeIn>
            <FadeIn variant="right" delay={150}>
              <MapFrame
                query={`${suburb.name} NSW ${suburb.postcode}, Australia`}
                zoom={suburb.mapZoom}
                title={`Map of ${suburb.name} NSW`}
                caption={isHome ? `Based in ${suburb.name}` : `Servicing ${suburb.name}`}
                subcaption={isHome ? "Our home base" : `From our ${business.address.suburb} base`}
                aspect="aspect-[4/3] lg:aspect-[4/4.2]"
                showBadge
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <PopularServices suburb={suburb.name} />

      {/* RECENT JOBS */}
      <section className="bg-body py-20 sm:py-28" aria-labelledby="suburb-work-heading">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <FadeIn variant="left">
              <SectionEyebrow>Our Work</SectionEyebrow>
              <h2 id="suburb-work-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Recent jobs across the Illawarra
              </h2>
            </FadeIn>
            <FadeIn variant="right" delay={100} className="lg:pb-2">
              <p className="text-lg leading-relaxed text-muted">
                A look at real plumbing and gas work our team has completed around {business.address.suburb} and the wider region.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12">
            <WorkGallery />
          </div>
        </Container>
      </section>

      <ProcessSteps />

      {/* NEARBY SUBURBS */}
      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
        <div className="bg-blueprint absolute inset-0 -z-10" aria-hidden="true" />
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionEyebrow tone="light">Nearby Areas</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">Also servicing nearby suburbs</h2>
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((s, i) => (
              <FadeIn as="li" key={s.slug} delay={i * 100} className="h-full">
                <Link
                  href={`/service-areas/${s.slug}`}
                  className="group relative flex h-full min-h-44 overflow-hidden rounded-3xl bg-navy-950"
                >
                  <Image
                    src={s.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover opacity-50 transition-all duration-[1.2s] ease-out-expo group-hover:scale-110 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-5">
                    <span>
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent-soft">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        NSW {s.postcode}
                      </span>
                      <span className="mt-1 block font-display text-2xl font-bold text-white">{s.name}</span>
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-cta">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSplit
        id={`${suburb.slug}-faq-heading`}
        title={`${suburb.name} plumbing FAQs`}
        items={suburb.faqs}
        footer={
          <>
            Servicing {suburb.name} and the wider Illawarra. See all{" "}
            <Link href="/services" className={LINK}>
              services
            </Link>{" "}
            or explore our other{" "}
            <Link href="/service-areas" className={LINK}>
              service areas
            </Link>
            .
          </>
        }
      />

      <GetInTouch />
    </>
  );
}
