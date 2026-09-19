import type { ReactNode } from "react";

/**
 * Re-mounts on every navigation (unlike layout.tsx), so this gives every
 * route a light fade + slide-up entrance — a page transition with zero JS
 * cost, applied once here instead of on each individual page.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-[page-in_0.4s_ease-out]">{children}</div>;
}
