import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import type { Service } from "@/lib/constants";
import SpotlightCard from "./SpotlightCard";

type ServiceCardProps = {
  service: Service;
  icon: LucideIcon;
  /** Optional index shown as a large faded number, e.g. 1 → "01" */
  index?: number;
  /** Override the link target / label (defaults to the service page) */
  href?: string;
  ctaLabel?: string;
};

export default function ServiceCard({ service, icon: Icon, index, href, ctaLabel }: ServiceCardProps) {
  return (
    <SpotlightCard className="glow-border group h-full overflow-hidden rounded-3xl bg-navy shadow-[0_20px_50px_-24px_rgba(11,31,51,0.6)] transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-[0_32px_64px_-24px_rgba(11,31,51,0.8)]">
      <Link href={href ?? service.href} className="relative z-10 flex h-full flex-col p-7">
        {index !== undefined && (
          <span
            className="absolute right-6 top-4 font-display text-6xl font-extrabold text-white/[0.04] transition-colors duration-500 group-hover:text-accent/15"
            aria-hidden="true"
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-cta/10 text-accent-soft ring-1 ring-inset ring-accent/30 transition-all duration-500 ease-out-expo group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-accent group-hover:from-accent group-hover:to-accent group-hover:text-accent-text">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-white">{service.name}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/65">{service.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
          {ctaLabel ?? (service.hasDedicatedPage ? "Learn more" : "View details")}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-cta">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </Link>
    </SpotlightCard>
  );
}
