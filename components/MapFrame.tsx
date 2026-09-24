import { MapPin, Navigation } from "lucide-react";
import { business } from "@/lib/constants";

type MapFrameProps = {
  /** Free-text place to centre on */
  query?: string;
  zoom?: number;
  title: string;
  caption?: string;
  subcaption?: string;
  aspect?: string;
  /** Small floating "on call" badge in the top-right corner */
  showBadge?: boolean;
};

/** Google Map in a white frame with a glow behind and a floating "based in" card with a directions link. */
export default function MapFrame({
  query = business.address.full,
  zoom = 11,
  title,
  caption = `Based in ${business.address.suburb}`,
  subcaption = "Servicing the whole Illawarra",
  aspect = "aspect-[4/3]",
  showBadge = false,
}: MapFrameProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="relative">
      <div className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-accent/30 via-cta/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_30px_70px_-30px_rgba(11,31,51,0.55)] ring-1 ring-border">
        {/* The embed always draws a place card in its top-left corner that we can't style
            (cross-origin), so the iframe is made taller and pulled up to crop it out.
            Google's attribution along the bottom edge stays visible. */}
        <div className={`relative overflow-hidden rounded-[1.6rem] ${aspect}`}>
          <iframe
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-x-0 -top-[110px] h-[calc(100%+110px)] w-full border-0 saturate-[0.9]"
          />
        </div>
        {showBadge && (
          <div className="pointer-events-none absolute right-4 top-4 motion-safe:animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-navy shadow-lg ring-1 ring-border backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              On call 24/7
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto">
          <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-navy/95 p-3 pr-4 shadow-xl backdrop-blur">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-text">
              <span className="absolute inset-0 rounded-xl bg-accent motion-safe:animate-ping motion-safe:opacity-30" aria-hidden="true" />
              <MapPin className="relative h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white">{caption}</p>
              <p className="truncate text-xs text-white/60">{subcaption}</p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-cta sm:ml-3"
              aria-label="Open in Google Maps"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
