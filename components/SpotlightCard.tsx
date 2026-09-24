"use client";

import type { MouseEvent, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/** Wrapper that feeds the cursor position to the `.spotlight` glow in globals.css. */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div onMouseMove={handleMove} className={`spotlight relative ${className}`}>
      {children}
    </div>
  );
}
