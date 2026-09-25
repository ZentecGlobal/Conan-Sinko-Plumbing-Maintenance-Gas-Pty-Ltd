import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { business, nav, serviceAreas, services } from "@/lib/constants";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.5 0-4.3 1.5-4.3 4.4v2.4H7.2v3.2h2.7v8h3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white/75">
      <div className="bg-blueprint pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      {/* Oversized watermark wordmark */}
      <p
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.025] lg:text-[16rem]"
        aria-hidden="true"
      >
        SINKO
      </p>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" aria-label={`${business.name}, home`} className="flex items-center">
            <Logo size="lg" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Licensed local plumbers servicing the Illawarra Region for emergency
            repairs, gas fitting, drainage and maintenance.
          </p>
          <div className="mt-4 flex gap-3">
            {/* TODO: confirm live social profile links */}
            <a
              href={business.social.facebook}
              aria-label="Sinko Plumbing on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-text"
            >
              <FacebookIcon />
            </a>
            <a
              href={business.social.instagram}
              aria-label="Sinko Plumbing on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-text"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white after:mt-3 after:block after:h-0.5 after:w-8 after:rounded-full after:bg-accent">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group inline-flex items-center transition-colors duration-300 hover:text-white">
                  <span className="mr-0 h-px w-0 bg-accent transition-all duration-300 group-hover:mr-2 group-hover:w-3" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white after:mt-3 after:block after:h-0.5 after:w-8 after:rounded-full after:bg-accent">
            Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="group inline-flex items-center transition-colors duration-300 hover:text-white">
                  <span className="mr-0 h-px w-0 bg-accent transition-all duration-300 group-hover:mr-2 group-hover:w-3" aria-hidden="true" />
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-accent-soft transition-colors hover:text-white">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white after:mt-3 after:block after:h-0.5 after:w-8 after:rounded-full after:bg-accent">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={business.phoneHref} className="group inline-flex items-center transition-colors duration-300 hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${business.email}`} className="group inline-flex items-center transition-colors duration-300 hover:text-white">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{business.address.full}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-white/70">
            Servicing {serviceAreas.slice(0, 4).map((a) => a.name).join(", ")} and
            the wider Illawarra Region.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Plumbing License {business.licenseNumber} · ACN {business.acn} · Director{" "}
            {business.director}
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/60 sm:px-6">
            <p>
              Powered &amp; Designed by{" "}
              <a
                href="https://zentecglobal.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/70 hover:text-white"
              >
                Zentec Global
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
