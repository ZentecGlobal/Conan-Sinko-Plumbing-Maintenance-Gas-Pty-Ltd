import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionEyebrow from "@/components/SectionEyebrow";
import HeroBackdrop from "@/components/HeroBackdrop";
import RevealText from "@/components/RevealText";
import CoverageMap from "@/components/CoverageMap";
import MapFrame from "@/components/MapFrame";
import FaqSplit from "@/components/FaqSplit";
import GetInTouch from "@/components/GetInTouch";
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

// Photo + blurb for the suburbs with their own page
const featuredSuburbs: Record<string, { image: string; alt: string; tag: string; blurb: string }> = {
  corrimal: {
    image: "/media/bathrooms/bathroom-reno-1.webp",
    alt: "Bathroom renovation plumbing completed in the Corrimal area",
    tag: "Home base",
    blurb: "Our home base. Fastest response times for emergencies, repairs and renovations.",
  },
  wollongong: {
    image: "/media/gas/outdoor-gas-kitchen-build.webp",
    alt: "Outdoor gas kitchen installed in the Wollongong area",
    tag: "Just down the road",
    blurb: "Plumbing and gas fitting across Wollongong's homes, units and small businesses.",
  },
  "fairy-meadow": {
    image: "/media/water-filters/puretec-filter-housing-outdoor.webp",
    alt: "Puretec water filtration unit installed on a home",
    tag: "Next door",
    blurb: "Right next door to our base, with some of our fastest response times.",
  },
  woonona: {
    image: "/media/hot-water/rinnai-hot-water-install.webp",
    alt: "Rinnai hot water system installation",
    tag: "Northern suburbs",
    blurb: "Hot water, drains and gas work just north of Corrimal.",
  },
  thirroul: {
    image: "/media/bathrooms/bathroom-reno-walkthrough.webp",
    alt: "Bathroom renovation plumbing",
    tag: "Northern suburbs",
    blurb: "Renovation plumbing, stormwater and emergency repairs.",
  },
};

export default function ServiceAreasPage() {
  const mainSuburbs = serviceAreas.filter((a) => a.hasDedicatedPage && featuredSuburbs[a.slug]);

  return (
    <>
      {/* HERO with animated coverage map */}
      <section className="relative isolate overflow-hidden py-16 lg:py-20">
        <HeroBackdrop />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col items-start gap-6">
              <div className="animate-rise">
                <SectionEyebrow tone="light">Service Areas</SectionEyebrow>
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] text-white sm:text-5xl xl:text-6xl">
                <RevealText text="Proudly Servicing the Illawarra Region" delay={120} highlight={["Illawarra"]} />
              </h1>
              <p className="animate-rise max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:500ms]">
                Based in Corrimal, our licensed plumbers cover the full Illawarra, from
                Wollongong up to Bulli and Thirroul, down to Dapto and Shellharbour.
              </p>
              <div className="animate-rise flex w-full flex-col gap-3 [animation-delay:650ms] sm:w-auto sm:flex-row">
                <a href={business.phoneHref} className="btn-primary group px-7 py-3.5">
                  <Phone className="h-4 w-4 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                  Call Now: {business.phone}
                </a>
                <Link href="#get-in-touch" className="btn-ghost group px-7 py-3.5">
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              <dl className="animate-rise mt-2 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 [animation-delay:800ms]">
                {[
                  { value: `${serviceAreas.length}+`, label: "Suburbs" },
                  { value: "24/7", label: "Emergencies" },
                  { value: "$0", label: "Travel fees" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-extrabold text-white">{stat.value}</dd>
                    <dd className="text-xs font-semibold uppercase tracking-wider text-white/50">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="animate-rise relative mx-auto w-full max-w-md [animation-delay:300ms] lg:max-w-none">
              <div className="glow-border relative aspect-[400/460] overflow-hidden rounded-[2rem] bg-navy-950/50 p-4 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
                <CoverageMap />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHERE WE WORK */}
      <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn variant="left">
              <SectionEyebrow>Local Coverage</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">Where we work</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Sinko Plumbing Maintenance &amp; Gas is based in {business.address.full} and services
                residential and commercial customers across the entire Illawarra Region. Wherever
                you&apos;re located, we aim to get a licensed plumber to you fast, especially for
                emergency callouts.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceAreas.map((area, i) => (
                  <FadeIn as="li" key={area.slug} delay={i * 60} variant="scale">
                    <Link
                      href={area.href}
                      className={`group flex items-center gap-2.5 rounded-2xl border px-3.5 py-3 text-sm font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-12px_rgba(11,31,51,0.3)] ${
                        area.hasDedicatedPage
                          ? "border-navy bg-navy text-white hover:border-cta hover:bg-cta"
                          : "border-border bg-body text-ink hover:border-accent"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:rotate-[-10deg] ${
                          area.hasDedicatedPage ? "bg-accent text-accent-text" : "bg-navy text-white group-hover:bg-accent group-hover:text-accent-text"
                        }`}
                      >
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {area.name}
                    </Link>
                  </FadeIn>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Not sure if we cover your suburb?{" "}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-navy underline decoration-accent/0 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-accent"
                >
                  Call us on {business.phone}.
                </a>{" "}
                If you&apos;re in the Illawarra, chances are we do.
              </p>
            </FadeIn>
            <FadeIn variant="right" delay={150}>
              <MapFrame query="Wollongong NSW" zoom={10} title="Map of the Illawarra Region service area" subcaption="Thirroul to Shellharbour" aspect="aspect-[4/3] lg:aspect-[4/4.2]" />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* MAIN SUBURBS */}
      <section className="bg-body py-20 sm:py-28">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <FadeIn variant="left">
              <SectionEyebrow>Home Base &amp; Beyond</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">Our main service suburbs</h2>
            </FadeIn>
            <FadeIn variant="right" delay={100} className="lg:pb-2">
              <p className="text-lg leading-relaxed text-muted">
                Local knowledge matters. Explore what we do in the five suburbs we work in most.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {mainSuburbs.map((area, i) => {
              const info = featuredSuburbs[area.slug];
              return (
                <FadeIn
                  key={area.slug}
                  delay={i * 120}
                  variant="reveal"
                  // First two (home base + Wollongong) get the big cards
                  className={i < 2 ? "h-[22rem] sm:h-[26rem] lg:col-span-3" : "h-[18rem] lg:col-span-2 md:last:col-span-2 lg:last:col-span-2"}
                >
                  <Link href={area.href} className="group relative flex h-full overflow-hidden rounded-[2rem] bg-navy">
                    <Image
                      src={info.image}
                      alt={info.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy backdrop-blur">
                      <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {info.tag}
                    </span>
                    <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6 sm:p-8">
                      <div className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
                        <h3 className={`font-extrabold text-white ${i < 2 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>Plumber in {area.name}</h3>
                        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/75">{info.blurb}</p>
                      </div>
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-xl transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-cta group-hover:text-white">
                        <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <FaqSplit id="service-areas-faq-heading" title="Service area FAQs" items={faqs} />

      <GetInTouch />
    </>
  );
}
