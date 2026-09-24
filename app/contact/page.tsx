import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Clock, Mail, MapPin, MessageSquareText, Phone, PhoneCall, ShieldCheck, ClipboardCheck } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FadeIn from "@/components/FadeIn";
import HeroBackdrop from "@/components/HeroBackdrop";
import RevealText from "@/components/RevealText";
import SectionEyebrow from "@/components/SectionEyebrow";
import MapFrame from "@/components/MapFrame";
import FaqSplit from "@/components/FaqSplit";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sinko Plumbing Maintenance & Gas. Call 0413 776 437 or send an enquiry. Based in Corrimal NSW, servicing the Illawarra Region.",
};

const faqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "We aim to respond to online enquiries the same business day. For urgent or emergency jobs, please call us directly on " +
      business.phone +
      " for the fastest response.",
  },
  {
    question: "Do you offer free quotes?",
    answer: "Yes. Every quote is free and obligation-free, with pricing confirmed before any work begins.",
  },
  {
    question: "What are your business hours?",
    answer: `Our standard hours are ${business.hours.weekdays}, with 24/7 emergency plumbing available outside of that.`,
  },
  {
    question: "Can I contact you for an emergency after hours?",
    answer:
      "Yes. Call us any time on " +
      business.phone +
      " for burst pipes, gas leaks, blocked drains or flooding, day or night.",
  },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.full)}`;

const nextSteps = [
  { icon: MessageSquareText, title: "We read your enquiry", detail: "A licensed plumber looks over the job details." },
  { icon: PhoneCall, title: "We get back to you", detail: "By phone or email to ask anything we need." },
  { icon: ClipboardCheck, title: "Free, upfront quote", detail: "Clear pricing before any work begins." },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* HERO: copy on the left, quick contact actions on the right */}
      <section className="relative isolate overflow-hidden py-16 lg:py-24">
        <HeroBackdrop />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="flex flex-col items-start gap-6">
              <div className="animate-rise">
                <SectionEyebrow tone="light">Contact</SectionEyebrow>
              </div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.03] text-white sm:text-5xl xl:text-6xl">
                <RevealText text="Let's Get Your Job Sorted" delay={120} highlight={["Sorted"]} />
              </h1>
              <p className="animate-rise max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:450ms]">
                Have a plumbing or gas job that needs sorting? Call us directly for the fastest
                response, or send an enquiry below.
              </p>
              <ul className="animate-rise flex flex-wrap gap-2 [animation-delay:600ms]">
                {[
                  { icon: ShieldCheck, label: `Licensed ${business.licenseNumber}` },
                  { icon: Clock, label: "24/7 Emergency" },
                  { icon: BadgeCheck, label: "Free Quotes" },
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

            <div className="flex flex-col gap-4">
              {/* Primary: call */}
              <a
                href={business.phoneHref}
                className="animate-rise group relative flex items-center gap-5 overflow-hidden rounded-3xl bg-cta p-6 text-white shadow-[0_30px_60px_-20px_rgba(8,124,193,0.8)] transition-all duration-500 ease-out-expo [animation-delay:350ms] hover:-translate-y-1 hover:bg-cta-hover sm:p-7"
              >
                <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 ease-out-expo group-hover:scale-150" aria-hidden="true" />
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <span className="absolute inset-0 rounded-2xl bg-white/25 motion-safe:animate-ping" aria-hidden="true" />
                  <Phone className="relative h-7 w-7 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" fill="currentColor" aria-hidden="true" />
                </span>
                <span className="relative flex-1">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
                    <span className="h-2 w-2 rounded-full bg-accent-soft motion-safe:animate-pulse" aria-hidden="true" />
                    On call 24/7 · fastest response
                  </span>
                  <span className="mt-1 block font-display text-3xl font-extrabold sm:text-4xl">{business.phone}</span>
                </span>
                <ArrowUpRight className="relative h-6 w-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${business.email}`}
                  className="animate-rise glow-border group flex flex-col gap-4 rounded-3xl bg-white/[0.05] p-5 text-white backdrop-blur transition-all duration-500 ease-out-expo [animation-delay:500ms] hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-text">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-accent-soft" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-white/50">Email us</span>
                    <span className="mt-1 block break-all text-sm font-bold">{business.email}</span>
                  </span>
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-rise glow-border group flex flex-col gap-4 rounded-3xl bg-white/[0.05] p-5 text-white backdrop-blur transition-all duration-500 ease-out-expo [animation-delay:650ms] hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-text">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-accent-soft" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-white/50">Based in</span>
                    <span className="mt-1 block text-sm font-bold">{business.address.full}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FORM + DETAILS */}
      <section className="relative bg-body py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <FadeIn variant="left" className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[0_30px_70px_-35px_rgba(11,31,51,0.45)] sm:p-10">
                <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-cta to-accent" aria-hidden="true" />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <SectionEyebrow>Online Enquiry</SectionEyebrow>
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Send us a message</h2>
                    <p className="mt-2 text-muted">
                      For urgent or emergency jobs, please call us directly rather than using this form.
                    </p>
                  </div>
                  <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-accent-soft sm:flex">
                    <MessageSquareText className="h-7 w-7" aria-hidden="true" />
                  </span>
                </div>
                <ContactForm />
              </div>
            </FadeIn>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <FadeIn variant="right" delay={100}>
                <div className="relative overflow-hidden rounded-[2rem] bg-navy p-6 text-white sm:p-8">
                  <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
                  <div className="relative">
                    <p className="font-display text-xl font-bold">What happens next</p>
                    <ol className="relative mt-6 space-y-6">
                      <span className="absolute bottom-3 left-5 top-3 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" aria-hidden="true" />
                      {nextSteps.map((step, i) => (
                        <FadeIn as="li" key={step.title} delay={200 + i * 150} className="relative flex gap-4">
                          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent-soft ring-1 ring-accent/40">
                            <step.icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block font-bold">{step.title}</span>
                            <span className="block text-sm text-white/60">{step.detail}</span>
                          </span>
                        </FadeIn>
                      ))}
                    </ol>
                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/50">Mon–Fri</p>
                        <p className="mt-1 font-semibold">{business.hours.weekdays}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/50">Emergencies</p>
                        <p className="mt-1 font-semibold text-accent-soft">24/7, any day</p>
                      </div>
                    </div>
                    <p className="mt-6 text-xs text-white/45">
                      Plumbing Licence {business.licenseNumber} · ACN {business.acn}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn variant="right" delay={200}>
                <MapFrame zoom={14} title="Map to Sinko Plumbing, Corrimal" subcaption="Servicing the whole Illawarra" />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <FaqSplit id="contact-faq-heading" title="Contact FAQs" items={faqs} />
    </>
  );
}
