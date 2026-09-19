"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Root element to render — use "li" when the direct parent is a <ul>/<ol>. */
  as?: ElementType;
  id?: string;
};

/**
 * Lightweight scroll-in fade/slide-up wrapper — plain IntersectionObserver +
 * Tailwind transition utilities, no animation library. Fires once, and is a
 * no-op under prefers-reduced-motion via Tailwind's motion-reduce: variant.
 */
export default function FadeIn({ children, className = "", delay = 0, as: Tag = "div", id }: FadeInProps) {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
