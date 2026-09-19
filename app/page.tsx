import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Caravan, Droplets, Filter, Flame, ShieldCheck, ShowerHead } from "lucide-react";
import Container from "@/components/Container";
import OffersBanner from "@/components/OffersBanner";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FadeIn from "@/components/FadeIn";
import MediaSlider from "@/components/MediaSlider";
import { business, services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Plumber Illawarra | 24/7 Local Plumbing & Gas",
  description:
    "Sinko Plumbing Maintenance & Gas, licensed emergency plumber servicing Corrimal, Wollongong and the Illawarra Region. Free quotes, gas fitting, drainage, hot water. Call 0413 776 437.",
};

const teaserServices = services.filter((s) =>
  ["stormwater-drainage", "gas-lpg", "water-filtration-specialist"].includes(s.slug)
);

const teaserIcons: Record<string, typeof Droplets> = {
  "stormwater-drainage": Droplets,
  "gas-lpg": Flame,
  "water-filtration-specialist": Filter,
};

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Licensed Plumber",
    detail: `License ${business.licenseNumber}`,
  },
  {
    icon: Award,
    title: "ACN Registered",
    detail: business.acn,
  },
  {
    icon: Award,
    title: "Master Plumbers Member",
    detail: "Industry association",
  },
  {
    icon: Filter,
    title: "Puretec Partner",
    detail: "Water filtration specialist",
  },
];

const homeFaqs = [
  {
    question: "Do you offer emergency plumbing outside business hours?",
    answer:
      "Yes, we provide 24/7 emergency plumbing across the Illawarra for burst pipes, gas leaks, blocked drains and flooding. Call us any time on " +
      business.phone +
      ".",
  },
  {
    question: "What areas do you service?",
    answer:
      "We're based in Corrimal and service the wider Illawarra Region, including Wollongong, Fairy Meadow, Towradgi, Bulli, Thirroul, Woonona, Dapto, Shellharbour and Port Kembla.",
  },
  {
    question: "Are your quotes really free?",
    answer:
      "Yes, every quote is free and obligation-free. We'll always confirm pricing with you before starting any work.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes, Sinko Plumbing Maintenance & Gas PTY LTD holds Plumbing License ${business.licenseNumber} and is fully insured for residential and commercial work.`,
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "We offer 15% off for DVA cardholders and $50 off for first-time customers, on top of always-free quotes.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/media/stormwater/stormwater-pump-install.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_66%]"
          />
          {/* Solid dark only behind the text; clears up fast so the photo reads vividly on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy from-0% via-navy/80 via-38% to-navy/5 to-70%" />
        </div>
        <div className="flex min-h-[560px] flex-col justify-center gap-6 px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <FadeIn className="flex flex-col items-start gap-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-navy-dark/70 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-accent backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
              24/7 Emergency Plumbing · Illawarra Region
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
              Fast, Licensed{" "}
              <span className="text-accent">Emergency Plumbing</span> When You
              Need It Most
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
              From burst pipes to gas leaks and blocked drains, Sinko Plumbing
              Maintenance &amp; Gas is the trusted local tradie for Corrimal,
              Wollongong and across the Illawarra, day or night.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="rounded-full bg-accent px-8 py-4 text-center font-bold text-accent-text shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl"
              >
                Call Now: {business.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-navy-dark/40 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                Request a Free Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <OffersBanner />

      {/* TOP SERVICES TEASER */}
      <section className="bg-body py-16 sm:py-20" aria-labelledby="top-services-heading">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                What We Do
              </p>
              <h2 id="top-services-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Popular Plumbing &amp; Gas Services
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/80">
                A few of the jobs we&apos;re called out for most across the Illawarra.
                See the full list of 10 services we offer.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teaserServices.map((service) => (
                <ServiceCard key={service.slug} service={service} icon={teaserIcons[service.slug]} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-bold text-navy hover:underline"
              >
                View all 10 services →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section className="bg-surface py-12">
        <Container>
          <FadeIn className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl bg-navy p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-white/60">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>

      {/* GALLERY STRIP */}
      <section className="relative overflow-hidden bg-body py-16 sm:py-20" aria-labelledby="gallery-heading">
        {/* Decorative background accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 -z-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 -z-0 h-72 w-72 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Our Work
            </p>
            <h2 id="gallery-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Recent Jobs
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/80">
              A snapshot of real plumbing and gas work completed across
              Corrimal, Wollongong and the wider Illawarra, from bathroom
              renovations to emergency repairs.
            </p>
          </FadeIn>
          <FadeIn className="mt-8">
            <MediaSlider
              aspectRatio="aspect-[16/9]"
              variant="offset"
              className="w-full max-w-3xl"
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
                  src: "/media/bathrooms/smart-toilet-install.webp",
                  alt: "Smart toilet installation",
                  label: "Smart Toilet Install",
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
                {
                  type: "video",
                  src: "/media/videos/toilet-install.mp4",
                  poster: "/media/bathrooms/smart-toilet-install.webp",
                  posterAlt: "Preview of the smart toilet install video",
                  label: "Toilet Install Video",
                  labelIcon: <ShowerHead className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />,
                },
              ]}
            />
          </FadeIn>
          <FadeIn delay={320} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-navy hover:underline"
            >
              Get a free quote for your next job →
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-body py-16 sm:py-20" aria-labelledby="faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Got Questions?
            </p>
            <h2 id="faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">
              Straight answers about our emergency plumbing, service areas and pricing.
            </p>
            <div className="mt-8">
              <FaqAccordion items={homeFaqs} />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
