/** Shared decorative layer for navy heroes: blueprint grid + slow drifting glows. */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy to-navy-dark" />
      <div className="bg-blueprint absolute inset-0" />
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-cta/25 blur-[120px] motion-safe:animate-[drift_18s_ease-in-out_infinite]" />
      <div className="absolute -right-24 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[120px] motion-safe:animate-[drift_22s_ease-in-out_infinite_reverse]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </div>
  );
}
