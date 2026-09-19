import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Container from "@/components/Container";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import TextHero from "@/components/TextHero";
import { business, serviceAreas } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber Service Areas | Illawarra Region",
  description:
    "Sinko Plumbing Maintenance & Gas services the whole Illawarra Region including Corrimal, Wollongong, Fairy Meadow, Bulli, Thirroul, Dapto and Shellharbour.",
};

const faqs = [
  {
    question: "What suburbs do you service?",
    answer:
      "We service the whole Illawarra Region: Corrimal, Wollongong, Fairy Meadow, Towradgi, Bulli, Thirroul, Woonona, Dapto, Shellharbour and Port Kembla.",
  },
  {
    question: "Are you based locally?",
    answer: `Yes. Sinko Plumbing Maintenance & Gas is based right in ${business.address.full}, so we're never far away.`,
  },
  {
    question: "Do you charge extra to travel to outer suburbs?",
    answer:
      "No hidden travel fees. We provide upfront, obligation-free quotes wherever you're located within our service area.",
  },
  {
    question: "How fast can you get to me for an emergency?",
    answer:
      "We prioritise emergency callouts like burst pipes and gas leaks and aim to reach you as quickly as possible, especially in and around Corrimal and Wollongong.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <TextHero
        eyebrow="Service Areas"
        title="Proudly Servicing the Illawarra Region"
        description="Based in Corrimal, our licensed plumbers cover the full Illawarra, from Wollongong up to Bulli and Thirroul, down to Dapto and Shellharbour."
      />

      <section className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Local Coverage
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Where We Work
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Sinko Plumbing Maintenance &amp; Gas is based in {business.address.full}{" "}
                and services residential and commercial customers across the
                entire Illawarra Region. Wherever you&apos;re located, we aim to get
                a licensed plumber to you fast, especially for emergency
                callouts.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={area.href}
                      className="group flex items-center gap-2 rounded-full border border-navy/15 bg-body px-4 py-2.5 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-accent group-hover:text-accent-text">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/70">
                Not sure if we cover your suburb?{" "}
                <a href={business.phoneHref} className="font-semibold text-navy hover:underline">
                  Call us on {business.phone}.
                </a>{" "}
                If you&apos;re in the Illawarra, chances are we do.
              </p>
            </div>
            <GoogleMapEmbed
              lat={-34.4278}
              lng={150.8931}
              zoom={11}
              title="Map of the Illawarra Region service area"
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-body py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Home Base &amp; Beyond
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Our Main Service Suburbs
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {serviceAreas
              .filter((a) => a.hasDedicatedPage)
              .map((area, index) => (
                <FadeIn key={area.slug} delay={index * 80}>
                  <Link
                    href={area.href}
                    className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Plumber in {area.name}
                      </h3>
                      <p className="mt-1 text-[15px] text-white/70">
                        Local plumbing &amp; gas services in {area.name} and
                        surrounds.
                      </p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20" aria-labelledby="service-areas-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="service-areas-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Service Area FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
