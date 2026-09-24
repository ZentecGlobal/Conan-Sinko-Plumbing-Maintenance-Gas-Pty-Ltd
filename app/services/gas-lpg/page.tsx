import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Gauge, Phone, ShieldAlert } from "lucide-react";
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
      <ServiceHero
        eyebrow="Gas & LPG"
        title="Gas & LPG Install & Repair Across the Illawarra"
        highlight={["LPG"]}
        description="Licensed gas fitting for natural gas and LPG: installations, safety checks and emergency leak repairs across the Illawarra."
        media={{ type: "video", src: "/media/videos/outdoor-gas-kitchen.mp4", poster: "/media/gas/outdoor-gas-kitchen-build.webp" }}
        bullets={["Licensed gas fitter", "Compliance certificates", "Free quotes"]}
      />

      <section className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn variant="left">
              <SectionEyebrow>What&apos;s Included</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Complete Gas &amp; LPG Fitting Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From new appliance connections to emergency leak repairs, our
                licensed gas fitters handle the complete natural gas and LPG
                scope for homes and businesses across the Illawarra.
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
          </div>
        </Container>
      </section>

      <FeatureCards
        eyebrow="Our Specialties"
        title="Safe, compliant gas work every time"
        description="Every gas job is carried out by a licensed fitter and certified to Australian standards."
        items={[
          { icon: Flame, title: "Installations", text: "Natural gas and LPG appliance, cooktop and heater installations to Australian standards." },
          { icon: Gauge, title: "Safety Checks", text: "Gas safety inspections and compliance certification for homes and businesses." },
          { icon: ShieldAlert, title: "Leak Detection", text: "Rapid response gas leak detection and repair, available for emergency callouts." },
        ]}
      />

      <ProcessSteps />

      <FaqSplit
        id="gas-faq-heading"
        title="Gas & LPG FAQs"
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
