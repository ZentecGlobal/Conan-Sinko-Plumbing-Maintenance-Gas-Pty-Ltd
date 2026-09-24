"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "blur" | "reveal";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Entrance direction/style. Defaults to a slide up. */
  variant?: Variant;
  /** Root element to render — use "li" when the direct parent is a <ul>/<ol>. */
  as?: ElementType;
  id?: string;
};

const hidden: Record<Variant, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-95",
  blur: "opacity-0 blur-md translate-y-4",
  // Image wipe: clipped from the bottom edge up
  reveal: "[clip-path:inset(100%_0_0_0)] scale-105",
};

// Only the reveal variant sets a clip-path when shown; applying it to every
// variant would clip their box-shadows.
const shownExtra: Partial<Record<Variant, string>> = {
  reveal: "[clip-path:inset(0_0_0_0)]",
};

/**
 * Lightweight scroll-in entrance wrapper — plain IntersectionObserver +
 * Tailwind transition utilities, no animation library. Fires once, and is a
 * no-op under prefers-reduced-motion via Tailwind's motion-reduce: variant.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
  id,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motion = `transition-all duration-1000 ease-out-expo motion-reduce:transition-none motion-reduce:translate-none motion-reduce:scale-none motion-reduce:blur-none motion-reduce:opacity-100 motion-reduce:[clip-path:none] ${
    visible ? `opacity-100 translate-x-0 translate-y-0 scale-100 blur-none ${shownExtra[variant] ?? ""}` : hidden[variant]
  }`;
  const delayStyle = visible ? { transitionDelay: `${delay}ms` } : undefined;

  // Chrome's IntersectionObserver treats a fully clip-pathed element as not
  // intersecting, so the reveal wipe goes on an inner wrapper and the observed
  // outer element stays unclipped.
  if (variant === "reveal") {
    return (
      <Tag ref={ref} id={id} className={className}>
        <div style={delayStyle} className={`relative h-full w-full ${motion}`}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag ref={ref} id={id} style={delayStyle} className={`${motion} ${className}`}>
      {children}
    </Tag>
  );
}
