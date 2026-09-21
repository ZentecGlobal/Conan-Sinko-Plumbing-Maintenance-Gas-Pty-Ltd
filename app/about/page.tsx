import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle2, HeartHandshake, Phone, ShieldCheck, Wrench } from "lucide-react";
import Container from "@/components/Container";
import TextHero from "@/components/TextHero";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/FadeIn";
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
    description: `Plumbing License ${business.licenseNumber}, ACN ${business.acn}. Every job is compliant and covered.`,
    accent: true,
  },
  {
    icon: HeartHandshake,
    title: "Honest, Local Service",
    description:
      "We're your neighbours, not a call centre. Straight-talking advice and fair, upfront pricing.",
    accent: false,
  },
  {
    icon: Award,
    title: "Master Plumbers Member",
    description:
      "Proud member of the Master Plumbers association, holding ourselves to a higher industry standard.",
    accent: false,
  },
  {
    icon: Wrench,
    title: "Skilled Across the Trade",
    description:
      "From emergency repairs to gas fitting and full renovations, one licensed team gets every job done right.",
    accent: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <TextHero
        eyebrow="About Us"
        title="Local Illawarra Plumbers You Can Trust"
        description="Sinko Plumbing Maintenance & Gas PTY LTD is a licensed, family-run plumbing business proudly serving Corrimal, Wollongong and the wider Illawarra Region."
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <HeartHandshake className="h-4 w-4 text-accent" aria-hidden="true" />
            Family-Run
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Licensed &amp; Insured
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" />
            Master Plumbers Member
          </span>
        </div>
      </TextHero>

      <section className="relative overflow-hidden bg-body py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Meet Conan Sinko, Director
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Sinko Plumbing Maintenance &amp; Gas PTY LTD was founded on a
              simple idea: give Illawarra homes and businesses a plumber
              they can actually trust. Under director Conan Sinko, our team
              combines hands-on trade experience with genuine customer care,
              handling everything from urgent emergency repairs to full
              bathroom renovations.
            </p>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {[
                "Showing up on time, every time",
                "Explaining the job clearly before we start",
                "Getting it right the first time",
                "Backed by our plumbing license and full insurance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 px-4 py-3 text-ink/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Why Choose Sinko Plumbing
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      value.accent
                        ? "bg-accent text-accent-text"
                        : "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-text"
                    }`}
                  >
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-body py-16 sm:py-20" aria-labelledby="about-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="about-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Common Questions About Us
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <div className="rounded-[26px] bg-navy p-1 shadow-2xl">
              <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16">
                <span className="pointer-events-none absolute -top-16 right-0 -z-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
                <h2 className="relative text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="relative mt-3 text-lg text-ink/70">
                  Get a free, no-obligation quote from your local Illawarra
                  plumber today.
                </p>
                <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now: {business.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-navy px-8 py-4 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    Request a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
