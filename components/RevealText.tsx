import { Fragment } from "react";

type RevealTextProps = {
  text: string;
  /** ms before the first word starts */
  delay?: number;
  /** ms between each word */
  stagger?: number;
  /** Words (exact match) to highlight with the shimmer accent */
  highlight?: string[];
};

/**
 * Splits a heading into words that slide up out of a mask one after another.
 * Pure CSS (keyframes in globals.css), so it works in server components and
 * the full text is still in the HTML for SEO and screen readers.
 */
export default function RevealText({ text, delay = 0, stagger = 70, highlight = [] }: RevealTextProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-line">
            <span className="reveal-word" style={{ animationDelay: `${delay + i * stagger}ms` }}>
              {highlight.includes(word) ? <span className="text-shimmer">{word}</span> : word}
            </span>
          </span>
          {/* Space sits outside the inline-block, otherwise it collapses */}
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}
