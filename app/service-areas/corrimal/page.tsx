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
  title: "Plumber Corrimal | Local Emergency Plumbing",
  description:
    "Sinko Plumbing Maintenance & Gas is based right in Corrimal NSW 2518, your local licensed plumber for emergency repairs, gas fitting, drainage and more.",
};

const faqs = [
  {
    question: "Are you actually based in Corrimal?",
    answer: `Yes. Our home base is right here in ${business.address.full}, so Corrimal jobs typically get our fastest response times.`,
  },
  {
    question: "Do you cover emergency callouts in Corrimal at night?",
    answer:
      "Yes. We offer 24/7 emergency plumbing for Corrimal residents, covering burst pipes, gas leaks and blocked drains outside normal business hours.",
  },
  {
    question: "Do you service both houses and units in Corrimal?",
    answer:
      "Yes. We work on residential houses, units, townhouses and small commercial properties throughout Corrimal.",
  },
  {
    question: "Do you service suburbs near Corrimal too?",
    answer:
      "Yes. As well as Corrimal, we regularly service nearby suburbs including Wollongong, Fairy Meadow, Towradgi, Bulli, Thirroul and Woonona.",
  },
];

export default function CorrimalPage() {
  return (
    <>
      <GalleryHero
        eyebrow="Service Area · Home Base"
        title="Plumber in Corrimal, NSW"
        description={`Sinko Plumbing Maintenance & Gas is proudly based in ${business.address.full}. As local Corrimal plumbers, we know the area and can usually get to you fast.`}
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
                Local Corrimal Plumbing
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                As a Corrimal-based business, we understand the local
                plumbing systems, common issues in older and newer homes
                alike, and can respond quickly to emergency callouts in the
                area. Whether it&apos;s a blocked drain in a Corrimal unit block or
                a full bathroom renovation, our licensed team has you covered.
              </p>
              <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
                {[
                  "Fastest response times, we're based right here",
                  "Emergency plumbing available 24/7",
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
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Your Local Corrimal Plumber: {business.phone}
              </a>
            </div>
            <GoogleMapEmbed
              address="Corrimal NSW 2518, Australia"
              zoom={13}
              title="Map of Corrimal NSW"
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
            />
          </FadeIn>
        </Container>
      </section>

      <PopularServices suburb="Corrimal" />

      <section className="bg-body py-16 sm:py-20" aria-labelledby="corrimal-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="corrimal-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Corrimal Plumbing FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
            <p className="mt-8 text-sm text-ink/70">
              Also servicing Wollongong and the wider Illawarra. See all{" "}
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
