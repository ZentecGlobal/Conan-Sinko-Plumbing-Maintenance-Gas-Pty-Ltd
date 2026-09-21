import type { Metadata } from "next";
import Link from "next/link";
import { Caravan, CheckCircle2, Droplets, Filter, Flame, Phone, ShowerHead } from "lucide-react";
import Container from "@/components/Container";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/FadeIn";
import GalleryHero from "@/components/GalleryHero";
import PopularServices from "@/components/PopularServices";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber Wollongong | Emergency & Gas Plumbing",
  description:
    "Licensed plumber servicing Wollongong NSW. Emergency plumbing, gas fitting, blocked drains, hot water and more from Sinko Plumbing Maintenance & Gas.",
};

const faqs = [
  {
    question: "How quickly can you get to Wollongong for an emergency?",
    answer:
      "We're based just up the road in Corrimal, so Wollongong callouts are typically a short drive away. Emergency jobs like burst pipes and gas leaks are always prioritised.",
  },
  {
    question: "Do you work on commercial properties in Wollongong CBD?",
    answer:
      "Yes. We handle both residential and commercial plumbing and gas fitting work throughout Wollongong, including the CBD.",
  },
  {
    question: "Can you install gas appliances in Wollongong apartments?",
    answer:
      "Yes. Our licensed gas fitters install and service gas appliances in apartments, units and townhouses across Wollongong, in line with strata and building requirements.",
  },
  {
    question: "Do you service suburbs near Wollongong too?",
    answer:
      "Yes. As well as Wollongong, we regularly service nearby suburbs including Corrimal, Fairy Meadow, Towradgi, Bulli, Thirroul and Woonona.",
  },
];

export default function WollongongPage() {
  return (
    <>
      <GalleryHero
        eyebrow="Service Area"
        title="Plumber in Wollongong, NSW"
        description="From the CBD to the northern and southern suburbs, our licensed team services homes and businesses throughout Wollongong."
        slides={[
          {
            type: "image",
            src: "/media/bathrooms/bathroom-vanity-tap-install.webp",
            alt: "Bathroom renovation plumbing fit-out with wall-mounted tapware and floating vanity",
            label: "Bathroom Renovation",
            labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
          },
          {
            type: "image",
            src: "/media/stormwater/stormwater-pump-install.webp",
            alt: "Underground stormwater pump and tank installation by Sinko Plumbing",
            label: "Stormwater Pump Install",
            labelIcon: <Droplets className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
          },
          {
            type: "image",
            src: "/media/gas/outdoor-gas-kitchen-build.webp",
            alt: "Outdoor gas kitchen build with LPG connections installed by Sinko Plumbing",
            label: "Gas Kitchen Install",
            labelIcon: <Flame className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
          },
          {
            type: "image",
            src: "/media/water-filters/puretec-filter-housing-outdoor.webp",
            alt: "Puretec whole-home water filtration unit installed on an exterior wall",
            label: "Water Filtration",
            labelIcon: <Filter className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
          },
          {
            type: "image",
            src: "/media/gallery/caravan-plumbing-lotus.webp",
            alt: "Caravan plumbing fit-out completed by Sinko Plumbing on a Lotus Trooper caravan",
            label: "Caravan Plumbing",
            labelIcon: <Caravan className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
            imageClassName: "saturate-[0.65] contrast-105",
          },
        ]}
      />

      <section className="relative overflow-hidden bg-body py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Why Local Matters
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Local Wollongong Plumbing
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Sinko Plumbing Maintenance &amp; Gas services Wollongong and
                surrounds from our Corrimal base, close enough for fast
                response times on emergency jobs, with the licensing and
                experience to handle everything from a leaking tap to a full
                gas installation.
              </p>
              <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
                {[
                  "Emergency plumbing available 24/7",
                  "Residential and commercial jobs welcome",
                  "Licensed gas fitting and LPG installation",
                  "Free, no-obligation quotes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 px-4 py-3 text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Your Wollongong Plumber: {business.phone}
              </a>
            </div>
            <GoogleMapEmbed
              address="Wollongong NSW 2500, Australia"
              zoom={12}
              title="Map of Wollongong NSW"
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
            />
          </FadeIn>
        </Container>
      </section>

      <PopularServices suburb="Wollongong" />

      <section className="bg-body py-16 sm:py-20" aria-labelledby="wollongong-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="wollongong-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Wollongong Plumbing FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
            <p className="mt-8 text-sm text-ink/70">
              Also servicing Corrimal and the wider Illawarra. See all{" "}
              <Link href="/services" className="font-semibold text-navy hover:underline">
                services
              </Link>{" "}
              or explore our other{" "}
              <Link href="/service-areas" className="font-semibold text-navy hover:underline">
                service areas
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
