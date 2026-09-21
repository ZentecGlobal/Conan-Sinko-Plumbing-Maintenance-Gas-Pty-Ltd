"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_2px_8px_rgba(11,31,51,0.06),0_12px_24px_rgba(11,31,51,0.06)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={isOpen ? "border-l-4 border-accent bg-body/60" : "border-l-4 border-transparent transition-colors hover:bg-body/30"}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isOpen ? "bg-accent text-accent-text" : "bg-navy/10 text-navy"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] font-bold text-ink transition-colors sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-accent text-accent-text" : "bg-navy/10 text-navy"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pl-[4.25rem] text-[15px] leading-relaxed text-ink/70 sm:px-6 sm:pl-[4.75rem]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
