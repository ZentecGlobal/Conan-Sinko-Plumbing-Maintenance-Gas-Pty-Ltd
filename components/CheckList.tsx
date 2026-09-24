import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

type CheckListProps = {
  items: readonly string[];
  className?: string;
};

/** Two-column grid of tick tiles that stagger in and lift on hover. */
export default function CheckList({ items, className = "mt-8" }: CheckListProps) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {items.map((item, i) => (
        <FadeIn
          as="li"
          key={item}
          delay={i * 70}
          className="group/tick relative flex items-start gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-[0_2px_10px_-4px_rgba(11,31,51,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_14px_30px_-12px_rgba(11,31,51,0.25)]"
        >
          <span
            className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-accent to-cta transition-transform duration-500 ease-out-expo group-hover/tick:scale-y-100"
            aria-hidden="true"
          />
          <span className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_4px_10px_-2px_rgba(25,175,165,0.6)] transition-transform duration-500 ease-out-expo group-hover/tick:rotate-[360deg] group-hover/tick:scale-110">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="text-[15px] font-medium leading-snug text-ink/85">{item}</span>
        </FadeIn>
      ))}
    </ul>
  );
}
