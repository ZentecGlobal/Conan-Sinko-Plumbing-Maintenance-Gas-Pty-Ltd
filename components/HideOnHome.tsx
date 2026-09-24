"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Pages that end with their own GetInTouch form section, so the generic CTA band would double up.
const pagesWithOwnContactForm = ["/", "/about", "/contact", "/services", "/service-areas", "/services/gas-lpg", "/services/stormwater-drainage"];

/** Renders children except on pages that already close with a contact form. */
export default function HideOnHome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Suburb pages (/service-areas/<suburb>) all end with the contact form too
  const hasOwnForm = pagesWithOwnContactForm.includes(pathname) || pathname.startsWith("/service-areas/");
  return hasOwnForm ? null : <>{children}</>;
}
