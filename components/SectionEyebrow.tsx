import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  /** "light" for navy backgrounds */
  tone?: "dark" | "light";
};

/** Small uppercase label above section headings. */
export default function SectionEyebrow({ children, tone = "dark" }: SectionEyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
        tone === "light" ? "text-accent-soft" : "text-navy"
      }`}
    >
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-1.5 w-6 rounded-full bg-accent" />
        <span className="h-1.5 w-1.5 rounded-full bg-cta" />
      </span>
      {children}
    </p>
  );
}
