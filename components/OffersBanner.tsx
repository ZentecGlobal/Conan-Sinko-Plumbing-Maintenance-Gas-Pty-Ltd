import { BadgePercent, Gift, ReceiptText } from "lucide-react";
import FadeIn from "./FadeIn";
import { offers } from "@/lib/constants";

const offerIcons = [ReceiptText, BadgePercent, Gift];

/** Offer cards that overlap the bottom edge of the hero above them. */
export default function OffersBanner() {
  return (
    <section aria-label="Current offers" className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/60 bg-surface shadow-[0_30px_70px_-30px_rgba(11,31,51,0.45)] md:grid-cols-3">
        {offers.map((offer, i) => {
          const Icon = offerIcons[i] ?? BadgePercent;
          return (
            <FadeIn
              key={offer.title}
              delay={i * 120}
              className="group relative flex items-start gap-4 border-border p-6 transition-colors duration-300 hover:bg-body max-md:border-b max-md:last:border-b-0 md:border-r md:last:border-r-0 sm:p-7"
            >
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-cta transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-accent-soft transition-all duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-text">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-tight text-ink">{offer.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-muted">{offer.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
