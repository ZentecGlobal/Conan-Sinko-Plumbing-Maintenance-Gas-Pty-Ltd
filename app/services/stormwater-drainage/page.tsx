import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Phone, Video, Waves } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import CheckList from "@/components/CheckList";
import SectionEyebrow from "@/components/SectionEyebrow";
import FramedImage from "@/components/FramedImage";
import ServiceHero from "@/components/ServiceHero";
import FeatureCards from "@/components/FeatureCards";
import ProcessSteps from "@/components/ProcessSteps";
import FaqSplit from "@/components/FaqSplit";
import GetInTouch from "@/components/GetInTouch";
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
      <ServiceHero
        eyebrow="Stormwater & Drainage"
        title="Storm Water, Drainage & Sewer Pumping Systems"
        highlight={["Drainage"]}
        description="Reliable stormwater drainage and sewer pumping system installation, repair and diagnostics, backed by CCTV drain inspection technology."
        media={{ type: "image", src: "/media/stormwater/stormwater-pump-install.webp", position: "object-[38%_66%]" }}
        bullets={["CCTV drain inspection", "Council-compliant", "Free quotes"]}
      />

      <section className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn variant="left">
              <SectionEyebrow>What&apos;s Included</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Full-Service Drainage &amp; Sewer Pumping
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From new installations to emergency repairs, we handle the
                complete stormwater and sewer pumping scope for homes and
                businesses across the Illawarra, backed by CCTV drain
                inspection to diagnose problems before we dig.
              </p>
              <CheckList
                items={included}
              />
              <a
                href={business.phoneHref}
                className="mt-6 btn-primary px-6 py-3"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Get a Free Quote: {business.phone}
              </a>
            </FadeIn>
            <FadeIn variant="right" delay={150}>
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
          </div>
        </Container>
      </section>

      <FeatureCards
        eyebrow="Our Specialties"
        title="Drainage done properly, from pit to pump"
        description="We diagnose first and dig second, so you only pay to fix the actual problem."
        items={[
          { icon: Droplets, title: "Stormwater Systems", text: "Design, installation and repair of stormwater pits, pipes and overflow relief drains." },
          { icon: Waves, title: "Sewer Pumping", text: "Sewer pump station installation and servicing for properties below the main sewer line." },
          { icon: Video, title: "CCTV Drain Inspection", text: "Camera diagnostics to locate blockages, root intrusion and pipe damage before we dig." },
        ]}
      />

      <ProcessSteps />

      <FaqSplit
        id="stormwater-faq-heading"
        title="Storm water & drainage FAQs"
        items={faqs}
        footer={
          <>
            Servicing Corrimal, Wollongong and the wider Illawarra. See all{" "}
            <Link href="/services" className="font-semibold text-navy underline decoration-accent/0 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-accent">
              services
            </Link>{" "}
            or{" "}
            <Link href="/service-areas" className="font-semibold text-navy underline decoration-accent/0 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-accent">
              service areas
            </Link>
            .
          </>
        }
      />

      <GetInTouch />
    </>
  );
}
