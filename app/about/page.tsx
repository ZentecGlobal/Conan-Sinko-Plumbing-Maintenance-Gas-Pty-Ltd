import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Filter, HeartHandshake, Phone, ShieldCheck, Wrench } from "lucide-react";
import Container from "@/components/Container";
import HeroBackdrop from "@/components/HeroBackdrop";
import RevealText from "@/components/RevealText";
import Parallax from "@/components/Parallax";
import FeatureCards from "@/components/FeatureCards";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSplit from "@/components/FaqSplit";
import GetInTouch from "@/components/GetInTouch";
import FadeIn from "@/components/FadeIn";
import CheckList from "@/components/CheckList";
import SectionEyebrow from "@/components/SectionEyebrow";
import { business } from "@/lib/constants";

const faqs = [
  {
    question: "Is Sinko Plumbing licensed and insured?",
    answer: `Yes. We hold Plumbing License ${business.licenseNumber} and ACN ${business.acn}, and every job we carry out is fully insured.`,
  },
  {
    question: "What areas does Sinko Plumbing service?",
    answer:
      "We're based in Corrimal and service the wider Illawarra Region, including Wollongong, Fairy Meadow, Towradgi, Bulli, Thirroul, Woonona, Dapto, Shellharbour and Port Kembla.",
  },
  {
    question: "Are you a member of any professional associations?",
    answer:
      "Yes, Sinko Plumbing Maintenance & Gas is a proud member of the Master Plumbers association, holding ourselves to a higher industry standard.",
  },
  {
    question: "Do you handle both residential and commercial jobs?",
    answer:
      "Yes. We take on residential homes, units and small commercial properties across the Illawarra, from emergency repairs to full renovations.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Conan Sinko, director of Sinko Plumbing Maintenance & Gas PTY LTD, a licensed, local Illawarra plumbing business built on trust and quality workmanship.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    text: `Plumbing License ${business.licenseNumber}, ACN ${business.acn}. Every job is compliant and covered.`,
  },
  {
    icon: HeartHandshake,
    title: "Honest, Local Service",
    text:
      "We're your neighbours, not a call centre. Straight-talking advice and fair, upfront pricing.",
  },
  {
    icon: Award,
    title: "Master Plumbers Member",
    text:
      "Proud member of the Master Plumbers association, holding ourselves to a higher industry standard.",
  },
  {
    icon: Wrench,
    title: "Skilled Across the Trade",
    text:
      "From emergency repairs to gas fitting and full renovations, one licensed team gets every job done right.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO with floating job-photo collage */}
      <section className="relative isolate overflow-hidden py-16 lg:py-24">
        <HeroBackdrop />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col items-start gap-6">
              <div className="animate-rise">
                <SectionEyebrow tone="light">About Us</SectionEyebrow>
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] text-white sm:text-5xl xl:text-6xl">
                <RevealText text="Local Illawarra Plumbers You Can Trust" delay={120} highlight={["Trust"]} />
              </h1>
              <p className="animate-rise max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:500ms]">
                Sinko Plumbing Maintenance &amp; Gas PTY LTD is a licensed, family-run plumbing
                business proudly serving Corrimal, Wollongong and the wider Illawarra Region.
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
              <ul className="animate-rise mt-2 flex flex-wrap gap-2 [animation-delay:800ms]">
                {[
                  { icon: HeartHandshake, label: "Family-Run" },
                  { icon: ShieldCheck, label: "Licensed & Insured" },
                  { icon: Award, label: "Master Plumbers Member" },
                ].map((badge) => (
                  <li
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-white/85 backdrop-blur transition-colors duration-300 hover:border-accent"
                  >
                    <badge.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    {badge.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collage: three real job photos at different depths */}
            <div className="relative mx-auto h-[26rem] w-full max-w-lg sm:h-[30rem]" aria-hidden="true">
              <Parallax speed={-0.06} className="absolute right-0 top-0 w-[68%]">
                <div className="animate-rise [animation-delay:300ms]">
                  <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[1.75rem] border-[5px] border-white/90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-out-expo hover:rotate-0 hover:scale-[1.03]">
                    <Image src="/media/bathrooms/bathroom-vanity-tap-install.webp" alt="" fill priority sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
                  </div>
                </div>
              </Parallax>
              <Parallax speed={0.06} className="absolute bottom-2 left-0 w-[46%]">
                <div className="animate-rise [animation-delay:500ms]">
                  <div className="relative aspect-square -rotate-3 overflow-hidden rounded-[1.5rem] border-[5px] border-white/90 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-out-expo hover:rotate-0 hover:scale-105">
                    <Image src="/media/stormwater/stormwater-pump-install.webp" alt="" fill priority sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
                  </div>
                </div>
              </Parallax>
              <Parallax speed={0.1} className="absolute left-[8%] top-6 w-[30%]">
                <div className="animate-rise [animation-delay:700ms]">
                  <div className="relative aspect-[3/4] -rotate-6 overflow-hidden rounded-[1.25rem] border-4 border-white/90 shadow-2xl transition-transform duration-700 ease-out-expo hover:rotate-0">
                    <Image src="/media/water-filters/puretec-filter-housing-outdoor.webp" alt="" fill priority sizes="15vw" className="object-cover" />
                  </div>
                </div>
              </Parallax>

              {/* Floating credential badges */}
              <div className="animate-rise absolute -left-2 top-[46%] [animation-delay:950ms] sm:-left-6">
                <div className="glow-border flex items-center gap-3 rounded-2xl bg-navy-950/80 p-3 pr-4 shadow-2xl backdrop-blur-xl motion-safe:animate-[float_6s_ease-in-out_infinite]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-text">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Licensed plumber</p>
                    <p className="text-xs text-white/60">Lic. {business.licenseNumber}</p>
                  </div>
                </div>
              </div>
              <div className="animate-rise absolute -right-2 bottom-10 [animation-delay:1100ms] sm:-right-4">
                <div className="glow-border flex items-center gap-3 rounded-2xl bg-navy-950/80 p-3 pr-4 shadow-2xl backdrop-blur-xl motion-safe:animate-[float_7s_ease-in-out_1s_infinite]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta text-white">
                    <Filter className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Puretec partner</p>
                    <p className="text-xs text-white/60">Water filtration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-body py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn variant="reveal" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(11,31,51,0.6)]">
            <Image
              src="/media/bathrooms/bathroom-reno-walkthrough.webp"
              alt="Bathroom renovation completed by Sinko Plumbing"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-[1.5s] ease-out-expo hover:scale-105"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-navy/90 p-4 backdrop-blur">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display font-bold text-accent-text">
                {business.director.charAt(0)}
              </span>
              <span>
                <span className="block font-bold text-white">{business.director}</span>
                <span className="block text-sm text-white/60">Director &amp; Licensed Plumber · Lic. {business.licenseNumber}</span>
              </span>
            </div>
          </FadeIn>
          <FadeIn variant="right" delay={100}>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Meet Conan Sinko, Director
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Sinko Plumbing Maintenance &amp; Gas PTY LTD was founded on a
              simple idea: give Illawarra homes and businesses a plumber
              they can actually trust. Under director Conan Sinko, our team
              combines hands-on trade experience with genuine customer care,
              handling everything from urgent emergency repairs to full
              bathroom renovations.
            </p>
            <CheckList
                items={[
                  "Showing up on time, every time",
                  "Explaining the job clearly before we start",
                  "Getting it right the first time",
                  "Backed by our plumbing license and full insurance",
                ]}
              />
          </FadeIn>
          </div>
        </Container>
      </section>

      <FeatureCards
        eyebrow="Why Choose Us"
        title="Why locals choose Sinko Plumbing"
        description="A licensed local team that turns up, explains the job straight and gets it right the first time."
        items={values}
      />

      <FaqSplit id="about-faq-heading" title="Common questions about us" items={faqs} />

      <ReviewsSection />

      <GetInTouch />
    </>
  );
}
