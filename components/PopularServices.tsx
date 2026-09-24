import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";
import { services } from "@/lib/constants";
import { serviceIcons } from "@/lib/service-icons";

type PopularServicesProps = {
  /** e.g. "Corrimal" — used to render "Popular Services in {suburb}" */
  suburb: string;
};

/** Grid of all services as icon tiles, used on suburb pages. */
export default function PopularServices({ suburb }: PopularServicesProps) {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <FadeIn variant="left">
            <SectionEyebrow>Browse Services</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Popular services in {suburb}
            </h2>
          </FadeIn>
          <FadeIn variant="right" delay={100} className="lg:pb-2">
            <p className="text-lg leading-relaxed text-muted">
              Every service below is available to {suburb} homes and businesses, with free quotes on every job.
            </p>
          </FadeIn>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? Wrench;
            return (
              <FadeIn as="li" key={service.slug} delay={(i % 5) * 70} variant="scale" className="h-full">
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-body p-4 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-navy hover:bg-navy hover:shadow-[0_24px_50px_-20px_rgba(11,31,51,0.6)] sm:p-5"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent-soft transition-all duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-text">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-all duration-500 group-hover:rotate-45 group-hover:text-accent-soft"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-bold leading-snug text-ink transition-colors duration-500 group-hover:text-white">
                    {service.name}
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
