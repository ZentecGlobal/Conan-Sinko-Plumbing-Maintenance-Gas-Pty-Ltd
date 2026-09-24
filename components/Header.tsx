"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { business, nav, serviceAreas, services } from "@/lib/constants";

// Dedicated-page services first, then the rest — matches the "Our Specialist
// Services" ordering on the /services hub page.
const navServices = [...services].sort((a, b) => Number(b.hasDedicatedPage) - Number(a.hasDedicatedPage));

// The 5 suburbs shown in the Service Areas dropdown (dedicated pages first).
const navSuburbSlugs = ["corrimal", "wollongong", "woonona", "fairy-meadow", "thirroul"];
const navSuburbs = navSuburbSlugs
  .map((slug) => serviceAreas.find((a) => a.slug === slug))
  .filter((a): a is (typeof serviceAreas)[number] => Boolean(a));

type DropdownEntry = { key: string; name: string; href: string };

// Nav items (by href) that open a dropdown instead of being a plain link.
const dropdowns: Record<string, { items: DropdownEntry[]; allLabel: string }> = {
  "/services": {
    items: navServices.map((s) => ({ key: s.slug, name: s.name, href: s.href })),
    allLabel: "View All Services",
  },
  "/service-areas": {
    items: navSuburbs.map((a) => ({ key: a.slug, name: `Plumber ${a.name}`, href: a.href })),
    allLabel: "View All Service Areas",
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Compact header once the page is scrolled, plus a teal reading-progress bar.
  // The bar is written straight to the DOM so scrolling never re-renders React.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Esc closes the mobile menu (and its services submenu).
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileSubmenu(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setMobileSubmenu(null);
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-white/10 bg-navy-950/85 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-navy-light bg-navy"
      }`}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-white/5" aria-hidden="true" />
      <span
        ref={progressRef}
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-soft to-cta"
        aria-hidden="true"
      />
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 transition-[padding] duration-500 ease-out-expo sm:px-6 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <Image
            src="/logos/sinko-plumbing-logo.webp"
            alt={`${business.name} logo`}
            width={520}
            height={260}
            priority
            className={`w-auto transition-all duration-500 ease-out-expo hover:scale-105 ${scrolled ? "h-11 sm:h-12" : "h-12 sm:h-14"}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map((item) =>
            dropdowns[item.href] ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`nav-link relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-white ${
                    isActive(item.href) ? "text-white" : "text-white/75"
                  }`}
                  data-active={isActive(item.href) || undefined}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-has-[:focus-visible]:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                {/* pt-2 (not a translate) keeps the pointer inside the hover area while moving to the panel */}
                <div
                  className={`invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] delay-100 duration-200 ease-out group-has-[:focus-visible]:visible group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:delay-0 group-hover:visible group-hover:opacity-100 group-hover:delay-0`}
                >
                  <div className="origin-top -translate-y-1 scale-95 min-w-56 overflow-hidden rounded-2xl border border-white/10 bg-navy-dark p-1.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] transition-transform delay-100 duration-200 ease-out group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:scale-100 group-has-[:focus-visible]:delay-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:delay-0">
                    {dropdowns[item.href].items.map((entry) => (
                      <Link
                        key={entry.key}
                        href={entry.href}
                        className="group/item relative flex items-center whitespace-nowrap rounded-lg px-4 py-2 text-sm text-white/75 transition-colors duration-300 hover:bg-white/[0.07] hover:text-white"
                      >
                        {/* Hover indicator takes no width, so padding stays even on both sides */}
                        <span
                          className="absolute left-1.5 top-1/2 h-4 w-0.5 -translate-y-1/2 scale-y-0 rounded-full bg-accent transition-transform duration-300 group-hover/item:scale-y-100"
                          aria-hidden="true"
                        />
                        <span className="transition-transform duration-300 group-hover/item:translate-x-1">{entry.name}</span>
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="btn-primary mt-1.5 flex w-full justify-between gap-6 rounded-lg px-4 py-2.5 text-sm"
                    >
                      {dropdowns[item.href].allLabel}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-white ${
                  isActive(item.href) ? "text-white" : "text-white/75"
                }`}
                data-active={isActive(item.href) || undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="btn-primary group hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <Phone className="h-4 w-4 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" />
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
                dropdowns[item.href] ? (
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
                        onClick={() => setMobileSubmenu((v) => (v === item.href ? null : item.href))}
                        aria-expanded={mobileSubmenu === item.href}
                        aria-controls={`mobile-submenu-${item.href.slice(1)}`}
                        aria-label={`${mobileSubmenu === item.href ? "Collapse" : "Expand"} ${item.label.toLowerCase()} list`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center text-white/70 hover:text-white"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileSubmenu === item.href ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        mobileSubmenu === item.href ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul
                        id={`mobile-submenu-${item.href.slice(1)}`}
                        inert={mobileSubmenu !== item.href}
                        className="ml-3 flex min-h-0 flex-col gap-0.5 overflow-hidden border-l border-navy-light pl-3"
                      >
                        {dropdowns[item.href].items.map((entry) => (
                          <li key={entry.key}>
                            <Link
                              href={entry.href}
                              onClick={closeMenu}
                              className="block rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {entry.name}
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
                  className="btn-primary w-full px-4 py-3 text-sm"
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
