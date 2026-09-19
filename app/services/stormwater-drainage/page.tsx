import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Droplets, Phone, Video, Waves } from "lucide-react";
import Container from "@/components/Container";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/FadeIn";
import FramedImage from "@/components/FramedImage";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Storm Water & Drainage Illawarra | CCTV Drain Inspection",
  description:
    "Storm water drainage and sewer pumping system specialists in the Illawarra. Includes CCTV drain inspection to accurately diagnose blockages, tree root intrusion and pipe damage. Call 0413 776 437.",
};

const included = [
  "Stormwater pit and pipe installation & repair",
  "Sewer pumping system installation, repair & servicing",
  "Surface and subsoil drainage solutions",
  "CCTV drain inspection to pinpoint blockages and damage",
  "Tree root intrusion diagnosis and clearing",
  "Council-compliant drainage works",
];

const faqs = [
  {
    question: "What is CCTV drain inspection?",
    answer:
      "Using a waterproof camera, we inspect the inside of your stormwater or sewer pipes to identify blockages, cracks, tree root intrusion and misaligned joints without excavation. This allows us to accurately diagnose the issue before recommending a solution.",
  },
  {
    question: "How do I know if I need a sewer pumping system?",
    answer:
      "If your property sits below the level of the main sewer line, gravity alone is not sufficient to drain wastewater away. A sewer pumping system lifts wastewater up to the main line. We can assess your property and advise whether one is required.",
  },
  {
    question: "Do you handle stormwater drainage for new builds and renovations?",
    answer:
      "Yes. We design and install council-compliant stormwater drainage systems for new builds, renovations and extensions throughout the Illawarra.",
  },
  {
    question: "What causes recurring blocked stormwater drains?",
    answer:
      "The most common causes are tree root intrusion, leaf and sediment build-up, and collapsed or misaligned pipes. A CCTV inspection identifies the exact cause, allowing us to resolve the issue at its source rather than simply clearing the symptom.",
  },
];

export default function StormwaterDrainagePage() {
  return (
    <>
      {/* HERO — photo background (no dedicated video clip yet for this service) */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/media/stormwater/stormwater-pump-install.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Solid dark only behind the text; clears up fast so the photo reads vividly on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy from-0% via-navy/85 via-38% to-navy/10 to-70%" />
        </div>
        <Container className="flex min-h-[420px] flex-col justify-center gap-6 py-14 sm:py-20">
          <FadeIn className="flex flex-col items-start gap-4">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              Service
            </p>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl">
              Storm Water, Drainage &amp; Sewer Pumping Systems
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-lg">
              Reliable stormwater drainage and sewer pumping system
              installation, repair and diagnostics, backed by CCTV drain
              inspection technology.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now: {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-navy-dark/40 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
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
                Full-Service Drainage &amp; Sewer Pumping
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                From new installations to emergency repairs, we handle the
                complete stormwater and sewer pumping scope for homes and
                businesses across the Illawarra, backed by CCTV drain
                inspection to diagnose problems before we dig.
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
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Get a Free Quote: {business.phone}
              </a>
            </div>
            <FramedImage
              src="/media/stormwater/stormwater-pump-install.webp"
              alt="Underground stormwater pump and tank installation by Sinko Plumbing"
              aspectRatio="aspect-square"
              variant="offset"
              className="mx-auto w-full max-w-md"
              interactive
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Droplets className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                  Stormwater Pump Install
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
                <Droplets className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Stormwater Systems</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Design, installation and repair of stormwater pits, pipes and
                overflow relief drains.
              </p>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                <Waves className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">Sewer Pumping</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Sewer pump station installation and servicing for properties
                below the main sewer line.
              </p>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
                <Video className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">CCTV Drain Inspection</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                Camera diagnostics to locate blockages, root intrusion and pipe
                damage before we dig.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20" aria-labelledby="stormwater-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="stormwater-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Storm Water &amp; Drainage FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
            <p className="mt-8 text-sm text-ink/70">
              Servicing Corrimal, Wollongong and the wider Illawarra. See all{" "}
              <Link href="/services" className="text-navy hover:underline">
                services
              </Link>{" "}
              or{" "}
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
