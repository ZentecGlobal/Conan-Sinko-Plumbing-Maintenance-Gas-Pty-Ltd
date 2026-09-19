import Link from "next/link";
import { Wrench } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { services } from "@/lib/constants";
import { serviceIcons } from "@/lib/service-icons";

type PopularServicesProps = {
  /** e.g. "Corrimal" — used to render "Popular Services in {suburb}" */
  suburb: string;
};

/** Icon-badge pill list of all services, used on suburb pages. */
export default function PopularServices({ suburb }: PopularServicesProps) {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container>
        <FadeIn>
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy">
            <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
            Browse Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Popular Services in {suburb}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Wrench;
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group flex items-center gap-2 rounded-full border border-navy/15 bg-body px-4 py-2.5 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors group-hover:bg-accent group-hover:text-accent-text">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {service.name}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
