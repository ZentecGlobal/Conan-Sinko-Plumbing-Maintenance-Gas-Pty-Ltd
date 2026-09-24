import type { Metadata } from "next";
import { Caravan, Filter, Phone, ShowerHead, Thermometer, Wrench } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import CheckList from "@/components/CheckList";
import SectionEyebrow from "@/components/SectionEyebrow";
import FramedImage from "@/components/FramedImage";
import MediaSlider from "@/components/MediaSlider";
import ServiceHero from "@/components/ServiceHero";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import FaqSplit from "@/components/FaqSplit";
import GetInTouch from "@/components/GetInTouch";
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
      <ServiceHero
        eyebrow="Our Services"
        title="Plumbing & Gas Services Across the Illawarra"
        highlight={["Gas"]}
        description="From emergency callouts to full bathroom renovations, our licensed team handles it all. Browse all 10 services below, free quotes on every job."
        media={{ type: "image", src: "/media/bathrooms/bathroom-vanity-tap-install.webp" }}
      />

      <section className="bg-body py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionEyebrow>Dedicated Pages</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Our Specialist Services
            </h2>
          </FadeIn>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              return (
                <FadeIn key={service.slug} delay={index * 120} as="li" className="h-full">
                  <ServiceCard service={service} icon={Icon} index={service.displayNumber} />
                </FadeIn>
              );
            })}
          </ol>

          <FadeIn className="mt-24">
            <SectionEyebrow>More Services</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              All Plumbing &amp; Gas Services
            </h2>
          </FadeIn>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              const hasExtendedSection = extendedSectionSlugs.has(service.slug);
              return (
                <FadeIn
                  key={service.slug}
                  as="li"
                  delay={(index % 3) * 120}
                  className="h-full"
                  id={hasExtendedSection ? undefined : service.slug}
                >
                  <ServiceCard
                    service={service}
                    icon={Icon}
                    index={service.displayNumber}
                    href={hasExtendedSection ? service.href : "#get-in-touch"}
                    ctaLabel={hasExtendedSection ? "Details below" : "Get a quote"}
                  />
                </FadeIn>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* EXTENDED WATER FILTRATION SECTION */}
      <section
        id="water-filtration-specialist"
        className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28"
        aria-labelledby="water-filtration-heading"
      >
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
        <Container className="relative">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Water Filtration Specialist</SectionEyebrow>
              <h2 id="water-filtration-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Cleaner, Safer Water for Your Whole Home
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Sinko Plumbing Maintenance &amp; Gas is a proud installation
                partner for <strong className="text-ink">Puretec</strong>{" "}
                water filtration systems. We supply, install and service
                whole-home filtration, under-sink filters and point-of-use
                systems designed to remove sediment, chlorine and
                contaminants, giving you better-tasting, safer water straight
                from the tap.
              </p>
              <CheckList
                items={[
                  "Whole-house filtration system installation",
                  "Under-sink and point-of-use filter units",
                  "Puretec-certified products and servicing",
                  "Filter replacement and maintenance plans",
                ]}
              />
              <a
                href={business.phoneHref}
                className="mt-6 btn-primary px-6 py-3"
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
        className="bg-body py-20 sm:py-28"
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
              <SectionEyebrow>Caravan Plumbing</SectionEyebrow>
              <h2 id="caravan-plumbing-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Specialist Plumbing for Caravans &amp; Mobile Living
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From new fit-outs to repairs on the road, we handle water
                tanks, pumps, gas connections and drainage for caravans,
                motorhomes and campers, built to handle life on the move.
              </p>
              <CheckList
                items={[
                  "Fresh, grey and black water tank plumbing",
                  "Water pump installation and repair",
                  "Caravan gas fitting and appliance connections",
                  "Pre-trip plumbing and gas inspections",
                ]}
              />
              <a
                href={business.phoneHref}
                className="mt-6 btn-primary px-6 py-3"
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
        className="border-y border-border bg-surface py-20 sm:py-28"
        aria-labelledby="hot-water-heading"
      >
        <Container>
          <FadeIn className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionEyebrow>Hot Water Systems</SectionEyebrow>
              <h2 id="hot-water-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Gas, Electric &amp; Heat Pump Hot Water
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                We supply, install and repair hot water systems from trusted
                brands like Rinnai: gas continuous flow, electric storage and
                heat pump systems sized right for your household or business.
              </p>
              <CheckList
                items={[
                  "Gas continuous flow and storage hot water systems",
                  "Electric and heat pump hot water systems",
                  "Same-day repairs for no hot water emergencies",
                  "System replacement and upgrade advice",
                ]}
              />
              <a
                href={business.phoneHref}
                className="mt-6 btn-primary px-6 py-3"
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
        className="bg-body py-20 sm:py-28"
        aria-labelledby="bathroom-renovation-heading"
      >
        <Container>
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Bathroom Renovation Plumbing</SectionEyebrow>
              <h2 id="bathroom-renovation-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Full Plumbing for Your Bathroom Renovation
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                From rough-in through to fit-off, we handle the full plumbing
                scope for bathroom renovations: vanities, showers,
                freestanding tubs and floor-mounted tapware, coordinated with
                your builder or tiler so the job runs smoothly.
              </p>
              <CheckList
                items={[
                  "Rough-in and fit-off for new bathroom layouts",
                  "Freestanding bath and floor-mounted tap installation",
                  "Shower, vanity and toilet plumbing",
                  "Waterproofing-ready drainage and pipework",
                ]}
              />
              <a
                href={business.phoneHref}
                className="mt-6 btn-primary px-6 py-3"
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

      <ProcessSteps />

      <FaqSplit id="services-faq-heading" title="Services FAQs" items={faqs} />

      <GetInTouch />
    </>
  );
}
