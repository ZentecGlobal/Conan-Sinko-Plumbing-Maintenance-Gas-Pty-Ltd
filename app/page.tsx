import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Filter,
  Flame,
  PhoneCall,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Container from "@/components/Container";
import OffersBanner from "@/components/OffersBanner";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FadeIn from "@/components/FadeIn";
import RevealText from "@/components/RevealText";
import HeroBackdrop from "@/components/HeroBackdrop";
import SpotlightCard from "@/components/SpotlightCard";
import CountUp from "@/components/CountUp";
import AreaMarquee from "@/components/AreaMarquee";
import SectionEyebrow from "@/components/SectionEyebrow";
import ContactForm from "@/components/ContactForm";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreasMap from "@/components/ServiceAreasMap";
import GetInTouch from "@/components/GetInTouch";
import WorkGallery from "@/components/WorkGallery";
import Parallax from "@/components/Parallax";
import { business, serviceAreas, services } from "@/lib/constants";

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

const stats: { label: string; value: number | null; display?: string; prefix?: string; suffix?: string }[] = [
  { label: "Emergency callouts", value: null, display: "24/7" },
  { label: "Specialist services", value: services.length },
  { label: "Illawarra suburbs", value: serviceAreas.length, suffix: "+" },
  { label: "Off for DVA cardholders", value: 15, suffix: "%" },
];

const aboutPoints = [
  "Showing up on time, every time",
  "Explaining the job before we start",
  "Getting it right the first time",
  "Licensed, insured & Master Plumbers member",
];

const steps = [
  {
    icon: PhoneCall,
    title: "Give us a call",
    detail: "Talk straight to a licensed plumber, day or night, about what's gone wrong.",
  },
  {
    icon: ClipboardCheck,
    title: "Free, upfront quote",
    detail: "We assess the job and confirm the price with you before any work starts.",
  },
  {
    icon: Wrench,
    title: "Fixed properly",
    detail: "Quality workmanship by a licensed tradie, done right the first time.",
  },
  {
    icon: Sparkles,
    title: "Left spotless",
    detail: "We clean up after ourselves and make sure you're happy before we leave.",
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
      <section className="relative isolate flex items-center overflow-hidden bg-navy-950 pb-32 pt-16 sm:pb-40 lg:pt-24">
        <div className="absolute inset-0 -z-10">
          <Parallax speed={0.18} className="absolute -inset-y-16 inset-x-0">
          <div className="absolute inset-0 motion-safe:animate-[ken-burns_14s_var(--ease-out-expo)_both]">
            <Image
              src="/media/stormwater/stormwater-pump-install.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[38%_66%]"
            />
          </div>
          </Parallax>
          {/* Solid navy behind the copy, clearing toward the right so the job photo still reads */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-5% via-navy-950/85 via-40% to-navy-950/10 to-75%" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
          <div className="bg-blueprint absolute inset-y-0 left-0 w-2/3 opacity-60" />
          <div className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-cta/20 blur-[140px] motion-safe:animate-[drift_20s_ease-in-out_infinite]" />
        </div>

        <Container className="w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="flex flex-col items-start gap-6">
              <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-navy-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-soft backdrop-blur-md sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                24/7 Emergency Plumbing · Illawarra
              </p>
              <h1 className="max-w-3xl text-[2.6rem] font-extrabold leading-[1.02] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.45)] sm:text-6xl xl:text-7xl">
                <RevealText
                  text="Fast, Licensed Emergency Plumbing When You Need It Most"
                  delay={150}
                  highlight={["Emergency"]}
                />
              </h1>
              <p className="animate-rise max-w-xl text-lg leading-relaxed text-white/80 [animation-delay:700ms]">
                From burst pipes to gas leaks and blocked drains, Sinko Plumbing
                Maintenance &amp; Gas is the trusted local tradie for Corrimal,
                Wollongong and across the Illawarra, day or night.
              </p>
              <div className="animate-rise flex w-full flex-col gap-3 [animation-delay:850ms] sm:w-auto sm:flex-row">
                <a href={business.phoneHref} className="btn-primary group px-8 py-4 text-base">
                  <Phone className="h-5 w-5 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                  Call Now: {business.phone}
                </a>
                <Link href="/contact" className="btn-ghost group px-8 py-4 text-base">
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              <ul className="animate-rise mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70 [animation-delay:1000ms]">
                {["Licensed & insured", "Upfront pricing", "Free quotes"].map((point) => (
                  <li key={point} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick quote form */}
            <div className="animate-rise relative [animation-delay:600ms]">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-cta/20 to-transparent blur-2xl" aria-hidden="true" />
              <div className="glow-border rounded-[2rem] bg-navy-950/75 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-white">Get a free quote</p>
                    <p className="mt-1 text-sm text-white/60">Tell us about the job and we&apos;ll get back to you.</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-text">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <ContactForm tone="dark" compact submitLabel="Get My Free Quote" />
              </div>
            </div>
          </div>
        </Container>

      </section>

      <OffersBanner />

      {/* TOP SERVICES TEASER */}
      <section className="relative bg-body py-20 sm:py-28" aria-labelledby="top-services-heading">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <FadeIn variant="left">
              <SectionEyebrow>What We Do</SectionEyebrow>
              <h2 id="top-services-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Popular plumbing &amp; gas services
              </h2>
            </FadeIn>
            <FadeIn variant="right" delay={100} className="lg:pb-2">
              <p className="text-lg leading-relaxed text-muted">
                A few of the jobs we&apos;re called out for most across the Illawarra.
                See the full list of 10 services we offer.
              </p>
              <Link href="/services" className="group mt-4 inline-flex items-center gap-2 font-bold text-navy">
                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                  View all 10 services
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teaserServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 120} className="h-full">
                <ServiceCard service={service} icon={teaserIcons[service.slug]} index={i + 1} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28" aria-labelledby="about-heading">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeIn variant="left" className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(11,31,51,0.6)] sm:aspect-[5/5]">
                <Image
                  src="/media/bathrooms/bathroom-reno-1.webp"
                  alt="Bathroom renovation plumbing completed by Sinko Plumbing"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out-expo hover:scale-105"
                />
              </div>
              <Parallax speed={-0.08} className="absolute -bottom-8 -right-4 z-10 w-[46%] sm:-right-8">
              <div className="overflow-hidden rounded-3xl border-[6px] border-surface shadow-2xl">
                <div className="relative aspect-square">
                  <Image
                    src="/media/gas/outdoor-gas-kitchen-build.webp"
                    alt="Outdoor gas kitchen installed by Sinko Plumbing"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              </Parallax>
              <div className="absolute -left-4 top-8 rounded-2xl bg-navy p-4 shadow-xl motion-safe:animate-[float_6s_ease-in-out_infinite] sm:-left-8">
                <p className="font-display text-3xl font-extrabold text-white">24/7</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">Emergency callouts</p>
              </div>
            </FadeIn>

            <FadeIn variant="right" delay={100}>
              <SectionEyebrow>About Us</SectionEyebrow>
              <h2 id="about-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Your local plumber, not a call centre
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Sinko Plumbing Maintenance &amp; Gas was founded on a simple idea: give
                Illawarra homes and businesses a plumber they can actually trust. Under
                director {business.director}, our team combines hands-on trade experience with
                genuine customer care, from urgent emergency repairs to full bathroom
                renovations.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutPoints.map((point, i) => (
                  <FadeIn as="li" key={point} delay={150 + i * 80} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-ink/85">{point}</span>
                  </FadeIn>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/about" className="btn-primary group px-7 py-3.5">
                  More About Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display font-bold text-white">
                    {business.director.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{business.director}</span>
                    <span className="block text-sm text-muted">Director &amp; Licensed Plumber</span>
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* STATS + CREDENTIALS */}
      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24" aria-label="Why choose Sinko Plumbing">
        <HeroBackdrop />
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100} className="flex flex-col items-center text-center lg:px-6">
                <dt className="order-2 mt-2 text-sm font-medium uppercase tracking-widest text-white/55">{stat.label}</dt>
                <dd className="order-1 font-display text-5xl font-extrabold text-white sm:text-6xl">
                  {stat.value === null ? (
                    <span className="text-shimmer">{stat.display}</span>
                  ) : (
                    <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  )}
                </dd>
              </FadeIn>
            ))}
          </dl>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} variant="scale">
                <SpotlightCard className="glow-border group h-full rounded-2xl bg-white/[0.04] p-5 backdrop-blur transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-soft transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-accent group-hover:text-accent-text">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="mt-0.5 text-sm text-white/55">{item.detail}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28" aria-labelledby="process-heading">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 id="process-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Sorted in four simple steps
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              No runaround, no hidden fees. Here&apos;s what happens when you call Sinko.
            </p>
          </FadeIn>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Animated "pipe" connecting the steps */}
            <svg className="absolute left-0 top-8 hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
              <line x1="12" y1="1" x2="88" y2="1" stroke="var(--color-border)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <line
                x1="12"
                y1="1"
                x2="88"
                y2="1"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeDasharray="6 14"
                vectorEffect="non-scaling-stroke"
                className="motion-safe:animate-[flow_1.2s_linear_infinite]"
              />
            </svg>
            {steps.map((step, i) => (
              <FadeIn as="li" key={step.title} delay={i * 150} className="group relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-accent-soft shadow-[0_12px_30px_-10px_rgba(11,31,51,0.6)] ring-8 ring-surface transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:bg-cta group-hover:text-white">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-text">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-[15px] leading-relaxed text-muted">{step.detail}</p>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      <AreaMarquee />

      <ReviewsSection />

      {/* RECENT JOBS */}
      <section className="relative overflow-hidden bg-body py-20 sm:py-28" aria-labelledby="gallery-heading">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <FadeIn variant="left">
              <SectionEyebrow>Our Work</SectionEyebrow>
              <h2 id="gallery-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Recent jobs across the Illawarra
              </h2>
            </FadeIn>
            <FadeIn variant="right" delay={100} className="lg:pb-2">
              <p className="text-lg leading-relaxed text-muted">
                Real plumbing and gas work completed across Corrimal, Wollongong and
                surrounds, from bathroom renovations to stormwater and gas installs.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12">
            <WorkGallery />
          </div>
          <FadeIn delay={200} className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-display text-xl font-bold text-ink">Got a similar job in mind?</p>
              <p className="mt-1 text-muted">Tell us about it and we&apos;ll give you a free, upfront quote.</p>
            </div>
            <Link href="#get-in-touch" className="btn-primary group shrink-0 px-7 py-3.5">
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-surface py-20 sm:py-28" aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeIn variant="left" className="lg:sticky lg:top-32 lg:self-start">
              <SectionEyebrow>Got Questions?</SectionEyebrow>
              <h2 id="faq-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Straight answers about our emergency plumbing, service areas and pricing.
              </p>
              <div className="relative mt-8 overflow-hidden rounded-3xl bg-navy p-6 text-white">
                <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
                <div className="relative">
                  <p className="font-display text-lg font-bold">Still not sure?</p>
                  <p className="mt-1 text-sm text-white/65">Talk straight to a licensed plumber, any time.</p>
                  <a href={business.phoneHref} className="btn-primary group mt-5 px-6 py-3 text-sm">
                    <Phone className="h-4 w-4 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
                    {business.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn variant="right" delay={100}>
              <FaqAccordion items={homeFaqs} />
            </FadeIn>
          </div>
        </Container>
      </section>

      <ServiceAreasMap />

      <GetInTouch />
    </>
  );
}
