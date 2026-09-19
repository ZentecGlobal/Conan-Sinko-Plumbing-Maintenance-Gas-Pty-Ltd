import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactDetailItem from "@/components/ContactDetailItem";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FadeIn from "@/components/FadeIn";
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

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Have a plumbing or gas job that needs sorting? Call us directly for the fastest response, or send an enquiry below."
      />

      <section className="bg-body py-16 sm:py-20">
        <Container>
          <FadeIn className="grid gap-10 lg:grid-cols-5">
            <div className="lg:order-2 lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <div className="bg-navy px-6 py-5">
                  <h2 className="text-xl font-bold text-white">Contact Us</h2>
                  <p className="mt-1 text-sm text-white/70">
                    We&apos;re here to help with your plumbing and gas needs.
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-5">
                    <ContactDetailItem
                      icon={Phone}
                      label="Phone"
                      value={business.phone}
                      href={business.phoneHref}
                    />
                    <ContactDetailItem
                      icon={Mail}
                      label="Email"
                      value={business.email}
                      href={`mailto:${business.email}`}
                    />
                    <ContactDetailItem
                      icon={MapPin}
                      label="Address"
                      value={business.address.full}
                    />
                    <ContactDetailItem
                      icon={Clock}
                      label="Hours"
                      value={
                        <>
                          {business.hours.weekdays}
                          <br />
                          <span className="font-bold text-navy">{business.hours.emergency}</span>
                        </>
                      }
                    />
                  </div>
                  <div className="mt-6 border-t border-border pt-4 text-xs text-muted">
                    <p>Plumbing License {business.licenseNumber}</p>
                    <p>ACN {business.acn}</p>
                  </div>
                  <GoogleMapEmbed
                    address={`${business.address.full}, Australia`}
                    zoom={14}
                    title="Map to Sinko Plumbing, Corrimal"
                    className="mt-6 aspect-[4/3] w-full"
                  />
                </div>
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <div className="bg-navy px-6 py-5 sm:px-8">
                  <h2 className="text-xl font-bold text-white">Send an Enquiry</h2>
                  <p className="mt-1 text-sm text-white/70">
                    For urgent/emergency jobs, please call us directly rather
                    than using this form.
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20" aria-labelledby="contact-faq-heading">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              FAQ
            </p>
            <h2 id="contact-faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Contact FAQs
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
