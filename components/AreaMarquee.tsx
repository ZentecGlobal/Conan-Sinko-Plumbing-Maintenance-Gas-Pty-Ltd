import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/constants";

/** Endless scrolling strip of suburbs we service. Pauses on hover. */
export default function AreaMarquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...serviceAreas, ...serviceAreas];

  return (
    <section aria-label="Suburbs we service" className="relative overflow-hidden border-y border-navy-light bg-navy-950 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent" aria-hidden="true" />
      <ul className="flex w-max animate-[marquee_40s_linear_infinite] items-center hover:[animation-play-state:paused]">
        {loop.map((area, i) => (
          <li key={`${area.slug}-${i}`} aria-hidden={i >= serviceAreas.length} className="flex items-center">
            <Link
              href={area.href}
              tabIndex={i >= serviceAreas.length ? -1 : undefined}
              className="group flex items-center gap-2 px-7 font-display text-xl font-bold text-white/40 transition-colors hover:text-white sm:text-2xl"
            >
              <MapPin className="h-5 w-5 text-accent transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
              {area.name}
            </Link>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}
