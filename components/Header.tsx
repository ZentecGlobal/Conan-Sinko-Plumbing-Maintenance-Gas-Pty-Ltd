"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { business, nav, services } from "@/lib/constants";

// Dedicated-page services first, then the rest — matches the "Our Specialist
// Services" ordering on the /services hub page.
const navServices = [...services].sort((a, b) => Number(b.hasDedicatedPage) - Number(a.hasDedicatedPage));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Esc closes the mobile menu (and its services submenu).
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy-light bg-navy/95 shadow-sm backdrop-blur">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
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
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-has-[:focus-visible]:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                {/* pt-2 (not a translate) keeps the pointer inside the hover area while moving to the panel */}
                <div
                  className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] delay-100 duration-200 ease-out group-has-[:focus-visible]:visible group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:delay-0 group-hover:visible group-hover:opacity-100 group-hover:delay-0"
                >
                  <div className="origin-top -translate-y-1 scale-95 overflow-hidden rounded-2xl border border-white/10 bg-navy-dark p-2 shadow-2xl transition-transform delay-100 duration-200 ease-out group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:scale-100 group-has-[:focus-visible]:delay-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-0">
                    {navServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 flex items-center justify-between rounded-lg bg-cta px-3 py-2.5 text-sm font-bold text-cta-text transition-colors hover:bg-accent hover:text-accent-text"
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
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-bold text-cta-text shadow-[0_4px_14px_rgba(8,124,193,0.35)] transition-all hover:bg-accent hover:text-accent-text hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(8,124,193,0.45)] sm:flex"
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
            <span className="relative block h-6 w-6" aria-hidden="true">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Always mounted so it can animate open AND closed; inert keeps hidden links out of the tab order. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          inert={!open}
          className="min-h-0 overflow-hidden bg-navy px-4"
        >
          <div className="border-t border-navy-light pb-4">
            <ul className="flex flex-col gap-1 pt-2">
              {nav.map((item) =>
                item.label === "Services" ? (
                  <li key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex-1 rounded-md px-3 py-2.5 text-white/90 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                        aria-label={mobileServicesOpen ? "Collapse services list" : "Expand services list"}
                        className="flex h-10 w-10 shrink-0 items-center justify-center text-white/70 hover:text-white"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul
                        id="mobile-services-submenu"
                        inert={!mobileServicesOpen}
                        className="ml-3 flex min-h-0 flex-col gap-0.5 overflow-hidden border-l border-navy-light pl-3"
                      >
                        {navServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={service.href}
                              onClick={closeMenu}
                              className="block rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2.5 text-white/90 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li className="pt-1">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-bold text-cta-text transition-colors hover:bg-accent hover:text-accent-text"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phone}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
