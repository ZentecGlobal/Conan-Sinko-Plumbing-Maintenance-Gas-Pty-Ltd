import { ArrowUpRight, Quote, Star } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionEyebrow from "./SectionEyebrow";
import SpotlightCard from "./SpotlightCard";
import { googleReviewsUrl, reviews } from "@/lib/reviews";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8Z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7H2.1a11 11 0 0 0 0 9.9l3.7-2.8Z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7l3.7 2.9C6.7 7.3 9.1 5.4 12 5.4Z" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-amber-400 text-amber-400" : "text-white/20"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/** Customer reviews. Falls back to a Google reviews call-out until real reviews are added in lib/reviews.ts. */
export default function ReviewsSection() {
  const hasReviews = reviews.length > 0;

  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28" aria-labelledby="reviews-heading">
      <div className="bg-blueprint absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px] motion-safe:animate-[drift_20s_ease-in-out_infinite]" aria-hidden="true" />
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <FadeIn variant="left">
            <SectionEyebrow tone="light">Reviews</SectionEyebrow>
            <h2 id="reviews-heading" className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              What Illawarra locals say about us
            </h2>
          </FadeIn>
          <FadeIn variant="right" delay={100} className="flex lg:justify-end">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
            >
              <GoogleMark />
              <span className="text-sm font-semibold text-white">Read all our Google reviews</span>
              <ArrowUpRight className="h-4 w-4 text-accent-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </FadeIn>
        </div>

        {hasReviews ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <FadeIn key={review.name + i} delay={(i % 3) * 120} className="h-full">
                <SpotlightCard className="glow-border h-full rounded-3xl bg-white/[0.04] p-7 backdrop-blur transition-transform duration-500 ease-out-expo hover:-translate-y-1.5">
                  <figure className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Stars count={review.rating} />
                      <Quote className="h-8 w-8 text-accent/30" aria-hidden="true" />
                    </div>
                    <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cta font-display font-bold text-white">
                        {review.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block font-bold text-white">{review.name}</span>
                        <span className="block text-sm text-white/50">
                          {[review.location, review.job].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn variant="scale" className="mt-12">
            <div className="glow-border relative overflow-hidden rounded-3xl bg-white/[0.04] p-8 text-center backdrop-blur sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">
                <GoogleMark />
              </div>
              <p className="mx-auto mt-6 max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
                Hear it straight from our customers
              </p>
              <p className="mx-auto mt-3 max-w-lg text-white/65">
                See what homeowners across Corrimal, Wollongong and the Illawarra have said about working with us.
              </p>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 px-8 py-4">
                Read Our Google Reviews
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
