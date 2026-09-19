import { BadgeCheck } from "lucide-react";
import { offers } from "@/lib/constants";

export default function OffersBanner() {
  return (
    <section aria-label="Current offers" className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="flex items-start gap-4 rounded-xl border border-border bg-body p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-text">
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold leading-tight text-ink">{offer.title}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
