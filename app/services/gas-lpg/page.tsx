import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Flame, Gauge, Phone, ShieldAlert } from "lucide-react";
import Container from "@/components/Container";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/FadeIn";
import FramedImage from "@/components/FramedImage";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gas Fitter & LPG Installation Illawarra",
  description:
    "Licensed gas fitting and LPG installation across the Illawarra. Gas appliance connections, LPG bottle setups, gas safety checks and leak detection. Call 0413 776 437.",
};

const included = [
  "Natural gas & LPG appliance installation and connection",
  "LPG bottle and cylinder installations",
  "Gas line installation, relocation and repair",
  "Gas safety inspections and compliance certificates",
  "Gas leak detection and emergency repairs",
  "Cooktop, oven, heater and hot water gas connections",
];

const faqs = [
  {
    question: "Are you licensed to do gas fitting work?",
    answer: `Yes, all gas work is carried out under Plumbing License ${business.licenseNumber}, covering both natural gas and LPG installations.`,
  },
  {
    question: "I can smell gas, what should I do?",
    answer:
      "If you smell gas, turn off the gas supply at the meter or cylinder if it's safe to do so, don't use switches or naked flames, ventilate the area, and call us immediately on " +
      business.phone +
      " for an emergency callout.",
  },
  {
    question: "Do you install LPG for caravans and outdoor kitchens?",
    answer:
      "Yes, we install and service LPG systems for caravans, outdoor kitchens, patio heaters and BBQ gas points, in addition to standard household connections.",
  },
  {
    question: "Do I need a compliance certificate after gas work?",
    answer:
      "Yes, a Certificate of Compliance is required for most gas fitting work in NSW. We handle this as part of the job so your installation is fully certified and insurable.",
  },
];

export default function GasLpgPage() {
  return (
    <>
      {/* HERO — looping background video (poster = static fallback for slow connections / load failure) */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover opacity-55"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/gas/outdoor-gas-kitchen-build.webp"
          >
            <source src="/media/videos/outdoor-gas-kitchen.mp4" type="video/mp4" />
          </video>
          {/* Solid dark only behind the text; clears up fast so the video reads vividly on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy from-0% via-navy/85 via-38% to-navy/10 to-70%" />
        </div>
        <Container className="flex min-h-[420px] flex-col justify-center gap-6 py-14 sm:py-20">
          <FadeIn className="flex flex-col items-start gap-4">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Service
            </p>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl">
              Gas &amp; LPG Fitting Services
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-lg">
              Licensed gas fitting for natural gas and LPG: installations,
              safety checks and emergency leak repairs across the Illawarra.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now: {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-navy-dark/40 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-white"
              >
                Request a Free Quote
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <FadeIn className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
                What&apos;s Included
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Complete Gas &amp; LPG Fitting Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                From new appliance connections to emergency leak repairs, our
                licensed gas fitters handle the complete natural gas and LPG
                scope for homes and businesses across the Illawarra.
              </p>
              <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-body">
                {included.map((item) => (
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
                Get a Free Quote: {business.phone}
              </a>
            </div>
            <FramedImage
              src="/media/gas/outdoor-gas-kitchen-build.webp"
              alt="Outdoor gas kitchen build with LPG connections installed by Sinko Plumbing"
              aspectRatio="aspect-square"
              variant="offset"
              className="mx-auto w-full max-w-md"
              interactive
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Flame className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                  Outdoor Gas Kitchen Build
                </p>
              </div>
            </FramedImage>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-body py-16 sm:py-20">
        <Container>
          <FadeIn className="grid gap-6 sm:grid-cols-3">
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                <Flame className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Installations</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Natural gas and LPG appliance, cooktop and heater installations
                to Australian standards.
              </p>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                <Gauge className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Safety Checks</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Gas safety inspections and compliance certification for homes
                and businesses.
              </p>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Leak Detection</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Rapid response gas leak detection and repair, available for
                emergency callouts.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20" aria-labelledby="gas-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="gas-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Gas &amp; LPG FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
            <p className="mt-8 text-sm text-ink/70">
              See all{" "}
              <Link href="/services" className="text-navy hover:underline">
                services
              </Link>{" "}
              or check our{" "}
              <Link href="/service-areas" className="text-navy hover:underline">
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
