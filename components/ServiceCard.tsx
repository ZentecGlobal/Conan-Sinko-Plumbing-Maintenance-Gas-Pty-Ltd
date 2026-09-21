import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import type { Service } from "@/lib/constants";

type ServiceCardProps = {
  service: Service;
  icon: LucideIcon;
};

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-text">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-white">{service.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white group-hover:underline">
        {service.hasDedicatedPage ? "Learn more" : "View details"}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
