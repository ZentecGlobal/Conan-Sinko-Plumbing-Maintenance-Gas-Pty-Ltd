import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Caravan, CheckCircle2, Filter, Phone, ShowerHead, Thermometer, Wrench } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import FramedImage from "@/components/FramedImage";
import MediaSlider from "@/components/MediaSlider";
import TextHero from "@/components/TextHero";
import { business, services } from "@/lib/constants";
import { serviceIcons } from "@/lib/service-icons";

const faqs = [
  {
    question: "What plumbing and gas services do you offer?",
    answer:
      "We cover 10 services across the Illawarra: emergency plumbing, blocked drains, water filtration, caravan plumbing, stormwater and sewer pumping, gas and LPG, excavation, general maintenance and repair, hot water systems, and bathroom renovation plumbing.",
  },
  {
    question: "Do you offer emergency plumbing?",
    answer:
      "Yes. We provide 24/7 emergency plumbing for burst pipes, gas leaks, blocked drains and flooding across the Illawarra region.",
  },
  {
    question: "Are your quotes free?",
    answer: "Yes, every quote is free and obligation-free. Pricing is always confirmed with you before work begins.",
  },
  {
    question: "Do you handle both plumbing and gas fitting?",
    answer:
      "Yes. We're licensed for both plumbing and gas fitting work, including natural gas and LPG installations, appliance connections and safety checks.",
  },
];

export const metadata: Metadata = {
  title: "Plumbing Services Illawarra",
  description:
    "All plumbing & gas services from Sinko Plumbing Maintenance & Gas: emergency plumbing, blocked drains, water filtration, gas & LPG, hot water, bathroom renovations and more across the Illawarra.",
};

// These slugs have their own extended section further down the page, which
// owns the #slug anchor id — skip putting a duplicate id on the grid card.
const extendedSectionSlugs = new Set([
  "water-filtration-specialist",
  "caravan-plumbing",
  "hot-water-systems",
  "bathroom-renovation-plumbing",
]);

export default function ServicesPage() {
  // Number sequentially in the order sections actually render on the page
  // (featured/dedicated-page cards first, then the rest) rather than by
  // each service's position in the priority-ordered `services` array.
  const featuredServices = services
    .filter((service) => service.hasDedicatedPage)
    .map((service, index) => ({ ...service, displayNumber: index + 1 }));
  const otherServices = services
    .filter((service) => !service.hasDedicatedPage)
    .map((service, index) => ({ ...service, displayNumber: featuredServices.length + index + 1 }));

  return (
    <>
      <TextHero
        eyebrow="Our Services"
        title="Plumbing & Gas Services Across the Illawarra"
        description="From emergency callouts to full bathroom renovations, our licensed team handles it all. Browse all 10 services below, free quotes on every job."
      />

      <section className="bg-body py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Dedicated Pages
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Our Specialist Services
            </h2>
          </FadeIn>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              return (
                <FadeIn key={service.slug} delay={index * 60} as="li" className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        {String(service.displayNumber).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{service.name}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">
                      {service.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white group-hover:underline">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </ol>

          <FadeIn className="mt-14">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              More Services
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              All Plumbing &amp; Gas Services
            </h2>
          </FadeIn>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              const hasExtendedSection = extendedSectionSlugs.has(service.slug);
              return (
                <FadeIn
                  key={service.slug}
                  as="li"
                  delay={(index % 3) * 60}
                  className="h-full"
                  id={hasExtendedSection ? undefined : service.slug}
                >
                  <Link
                    href={hasExtendedSection ? service.href : "/contact"}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        {String(service.displayNumber).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{service.name}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">
                      {service.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white group-hover:underline">
                      {hasExtendedSection ? "Details below" : "Get a Quote"}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* EXTENDED WATER FILTRATION SECTION */}
      <section
        id="water-filtration-specialist"
        className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-20"
        aria-labelledby="water-filtration-heading"
      >
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Water Filtration Specialist
              </p>
              <h2 id="water-filtration-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Cleaner, Safer Water for Your Whole Home
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Sinko Plumbing Maintenance &amp; Gas is a proud installation
                partner for <strong className="text-ink">Puretec</strong>{" "}
                water filtration systems. We supply, install and service
                whole-home filtration, under-sink filters and point-of-use
                systems designed to remove sediment, chlorine and
                contaminants, giving you better-tasting, safer water straight
                from the tap.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Whole-house filtration system installation",
                  "Under-sink and point-of-use filter units",
                  "Puretec-certified products and servicing",
                  "Filter replacement and maintenance plans",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink/80">
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
                Ask About Water Filtration
              </a>
            </div>
            <FramedImage
              src="/media/water-filters/puretec-filter-housing-outdoor.webp"
              alt="Puretec whole-home water filtration unit and Filterball installed on an exterior wall by Sinko Plumbing"
              aspectRatio="aspect-square"
              variant="offset"
              className="mx-auto w-full max-w-md"
              imageClassName="brightness-100 contrast-110 saturate-110"
              interactive
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Filter className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                  Puretec Water Filtration
                </p>
              </div>
            </FramedImage>
          </FadeIn>
        </Container>
      </section>

      {/* EXTENDED CARAVAN PLUMBING SECTION */}
      <section
        id="caravan-plumbing"
        className="bg-body py-16 sm:py-20"
        aria-labelledby="caravan-plumbing-heading"
      >
        <Container>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <FramedImage
              src="/media/gallery/caravan-plumbing-lotus.webp"
              alt="Caravan plumbing fit-out completed by Sinko Plumbing on a Lotus Trooper caravan"
              aspectRatio="aspect-[4/3]"
              variant="offset"
              className="order-2"
              interactive
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Caravan className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                  Caravan Plumbing Fit-Out
                </p>
              </div>
            </FramedImage>
            <div className="order-1">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Caravan Plumbing
              </p>
              <h2 id="caravan-plumbing-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Specialist Plumbing for Caravans &amp; Mobile Living
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                From new fit-outs to repairs on the road, we handle water
                tanks, pumps, gas connections and drainage for caravans,
                motorhomes and campers, built to handle life on the move.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fresh, grey and black water tank plumbing",
                  "Water pump installation and repair",
                  "Caravan gas fitting and appliance connections",
                  "Pre-trip plumbing and gas inspections",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink/80">
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
                Ask About Caravan Plumbing
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* EXTENDED HOT WATER SYSTEMS SECTION */}
      <section
        id="hot-water-systems"
        className="border-y border-border bg-surface py-16 sm:py-20"
        aria-labelledby="hot-water-heading"
      >
        <Container>
          <FadeIn className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Hot Water Systems
              </p>
              <h2 id="hot-water-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Gas, Electric &amp; Heat Pump Hot Water
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                We supply, install and repair hot water systems from trusted
                brands like Rinnai: gas continuous flow, electric storage and
                heat pump systems sized right for your household or business.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Gas continuous flow and storage hot water systems",
                  "Electric and heat pump hot water systems",
                  "Same-day repairs for no hot water emergencies",
                  "System replacement and upgrade advice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/70">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ask About Hot Water Systems
              </a>
            </div>
            <MediaSlider
              aspectRatio="aspect-[4/3]"
              variant="offset"
              slides={[
                {
                  type: "image",
                  src: "/media/hot-water/rinnai-hot-water-install.webp",
                  alt: "Rinnai hot water system installation",
                  label: "Rinnai Hot Water System",
                  labelIcon: <Thermometer className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
                {
                  type: "video",
                  src: "/media/videos/hot-water-system-install.mp4",
                  poster: "/media/hot-water/rinnai-hot-water-install.webp",
                  posterAlt: "Preview of the Rinnai hot water system install video",
                  label: "Watch the Install",
                  labelIcon: <Thermometer className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
              ]}
            />
          </FadeIn>
        </Container>
      </section>

      {/* EXTENDED BATHROOM RENOVATION SECTION */}
      <section
        id="bathroom-renovation-plumbing"
        className="bg-body py-16 sm:py-20"
        aria-labelledby="bathroom-renovation-heading"
      >
        <Container>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                Bathroom Renovation Plumbing
              </p>
              <h2 id="bathroom-renovation-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Full Plumbing for Your Bathroom Renovation
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                From rough-in through to fit-off, we handle the full plumbing
                scope for bathroom renovations: vanities, showers,
                freestanding tubs and floor-mounted tapware, coordinated with
                your builder or tiler so the job runs smoothly.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Rough-in and fit-off for new bathroom layouts",
                  "Freestanding bath and floor-mounted tap installation",
                  "Shower, vanity and toilet plumbing",
                  "Waterproofing-ready drainage and pipework",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/70">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ask About Bathroom Renovations
              </a>
            </div>
            <MediaSlider
              aspectRatio="aspect-[4/3]"
              variant="offset"
              slides={[
                {
                  type: "image",
                  src: "/media/bathrooms/bathroom-reno-1.webp",
                  alt: "Modern bathroom renovation with floating timber vanity, round mirror and walk-in shower by Sinko Plumbing",
                  label: "Modern Bathroom Renovation",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
                {
                  type: "image",
                  src: "/media/bathrooms/bathroom-freestanding-tub.webp",
                  alt: "Freestanding bathtub and matte black floor-mounted tap plumbing installed during a bathroom renovation",
                  label: "Freestanding Bath Install",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
                {
                  type: "image",
                  src: "/media/bathrooms/bathroom-reno-walkthrough.webp",
                  alt: "Bathroom renovation with freestanding tub and vanity",
                  label: "Full Renovation View",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
                {
                  type: "image",
                  src: "/media/bathrooms/bathroom-vanity-tap-install.webp",
                  alt: "Bathroom renovation plumbing fit-out with wall-mounted tapware, floating vanity and glass shower screen",
                  label: "Vanity & Tapware Fit-Out",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
                {
                  type: "video",
                  src: "/media/videos/bathroom-walkthrough.mp4",
                  poster: "/media/bathrooms/bathroom-reno-1.webp",
                  posterAlt: "Preview of the bathroom renovation walkthrough video",
                  label: "Walkthrough Video",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
              ]}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20" aria-labelledby="services-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="services-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Services FAQs
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
