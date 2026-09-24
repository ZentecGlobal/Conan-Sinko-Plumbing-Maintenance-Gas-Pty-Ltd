export type Review = {
  name: string;
  /** Suburb or short context, e.g. "Corrimal" */
  location?: string;
  /** 1–5 */
  rating: number;
  text: string;
  /** e.g. "Blocked drain", "Hot water install" */
  job?: string;
};

// TODO: paste REAL customer reviews here (copy them from the Google Business
// Profile). Never add made-up testimonials. While this list is empty, the
// homepage shows a "read our Google reviews" card instead of review cards.
export const reviews: Review[] = [];

// TODO: replace with the direct Google Business Profile reviews link once confirmed.
export const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sinko+Plumbing+Maintenance+%26+Gas+Corrimal";
