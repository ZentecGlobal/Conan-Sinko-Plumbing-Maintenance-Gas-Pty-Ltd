import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/sinko-plumbing-logo.webp"
              alt={`${business.name} logo`}
              width={520}
              height={260}
              loading="lazy"
              className="h-14 w-auto"
            />
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-text"
            >
              <FacebookIcon />
            </a>
            <a
              href={business.social.instagram}
              aria-label="Sinko Plumbing on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-text"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="hover:text-accent">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-accent hover:underline">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${business.email}`} className="hover:text-accent">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{business.address.full}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            Servicing {serviceAreas.slice(0, 4).map((a) => a.name).join(", ")} and
            the wider Illawarra Region.
          </p>
        </div>
      </div>

      <div className="border-t border-navy-light">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Plumbing License {business.licenseNumber} · ACN {business.acn} · Director{" "}
            {business.director}
          </p>
        </div>
        <div className="border-t border-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-gray-500 sm:px-6">
            <p>
              Powered &amp; Designed by{" "}
              <a
                href="https://zentecglobal.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-400 hover:text-accent"
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
