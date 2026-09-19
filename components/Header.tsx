"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { business, nav, services } from "@/lib/constants";

// Dedicated-page services first, then the rest — matches the "Our Specialist
// Services" ordering on the /services hub page.
const navServices = [...services].sort((a, b) => Number(b.hasDedicatedPage) - Number(a.hasDedicatedPage));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-light bg-navy/95 shadow-sm backdrop-blur">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logos/sinko-plumbing-logo.webp"
            alt={`${business.name} logo`}
            width={520}
            height={260}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-accent"
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-navy-light bg-navy-dark p-2 shadow-2xl">
                    {navServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-accent"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 flex items-center justify-between rounded-lg bg-accent/10 px-3 py-2.5 text-sm font-bold text-accent transition-colors hover:bg-accent/15"
                    >
                      View All Services
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(241,255,3,0.45)] sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-navy-light bg-navy px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {nav.map((item) =>
              item.label === "Services" ? (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md px-3 py-2.5 text-white/90 hover:bg-white/5 hover:text-accent"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-submenu"
                      aria-label={mobileServicesOpen ? "Collapse services list" : "Expand services list"}
                      className="flex h-10 w-10 shrink-0 items-center justify-center text-white/70 hover:text-accent"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <ul id="mobile-services-submenu" className="ml-3 flex flex-col gap-0.5 border-l border-navy-light pl-3">
                      {navServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-accent"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-white/90 hover:bg-white/5 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-1">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-text"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {business.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
