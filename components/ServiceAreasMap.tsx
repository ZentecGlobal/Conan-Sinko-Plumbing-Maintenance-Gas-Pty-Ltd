import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";
import MapFrame from "./MapFrame";
import { business, serviceAreas } from "@/lib/constants";

/** "Proudly serving" suburb list alongside a framed Google Map. */
export default function ServiceAreasMap() {
  return (
    <section className="relative overflow-hidden bg-body py-20 sm:py-28" aria-labelledby="areas-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <FadeIn variant="left">
            <SectionEyebrow>Service Areas</SectionEyebrow>
            <h2 id="areas-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Proudly serving suburbs across the <span className="text-cta">Illawarra</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Based in Corrimal, our licensed plumbers cover the northern suburbs down to
              Shellharbour. Not sure if we reach you? Just give us a call.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {serviceAreas.map((area, i) => (
                <FadeIn as="li" key={area.slug} delay={i * 50} variant="scale">
                  <Link
                    href={area.href}
                    className={`group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                      area.hasDedicatedPage
                        ? "border-navy bg-navy text-white hover:bg-cta hover:border-cta"
                        : "border-border bg-surface text-ink hover:border-accent"
                    }`}
                  >
                    <MapPin
                      className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                        area.hasDedicatedPage ? "text-accent-soft" : "text-accent"
                      }`}
                      aria-hidden="true"
                    />
                    {area.name}
                  </Link>
                </FadeIn>
              ))}
            </ul>
            <Link href="/service-areas" className="group mt-8 inline-flex items-center gap-2 font-bold text-navy">
              View all service areas
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </FadeIn>

          <FadeIn variant="right" delay={150}>
            <MapFrame title={`Map of ${business.shortName} service area around ${business.address.suburb}`} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
