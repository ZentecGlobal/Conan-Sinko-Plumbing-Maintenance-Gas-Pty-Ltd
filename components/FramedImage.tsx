import Image from "next/image";
import type { ReactNode } from "react";

type FramedImageProps = {
  src: string;
  alt: string;
  /** e.g. "aspect-[4/5]", "aspect-video", "aspect-square", "aspect-[4/3]" */
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** Small pill badge in the bottom-left corner, e.g. "Puretec Water Filtration". */
  label?: string;
  /** Hover lift/scale — only for gallery/grid contexts, never on hero images. */
  interactive?: boolean;
  /**
   * "border" (default): uniform navy border on all sides.
   * "offset": no border — a solid navy block peeks out from the bottom-right instead.
   */
  variant?: "border" | "offset";
  /** Optional overlay content (captions, badges, hover icons) rendered on top of the image. */
  children?: ReactNode;
};

/**
 * Reusable navy-framed "photo" treatment used for standalone images across
 * the site (gallery shots, service photos, etc). Not for logos/icons or
 * full-bleed hero background media — those stay unframed.
 */
export default function FramedImage({
  src,
  alt,
  aspectRatio = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  imageClassName = "",
  label,
  interactive = false,
  variant = "border",
  children,
}: FramedImageProps) {
  const image = priority ? (
    <Image src={src} alt={alt} fill priority sizes={sizes} className={`object-cover ${imageClassName}`} />
  ) : (
    <Image src={src} alt={alt} fill loading="lazy" sizes={sizes} className={`object-cover ${imageClassName}`} />
  );
  const labelChip = label && (
    <span className="absolute bottom-3 left-3 z-10 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white shadow-md">
      {label}
    </span>
  );

  if (variant === "offset") {
    // White-bordered photo floating over a teal glow and a dotted "blueprint" plate.
    return (
      <div className={`group relative isolate ${className}`}>
        <div
          className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-cta/15 to-transparent blur-2xl transition-opacity duration-700 group-hover:opacity-100 sm:opacity-80"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-5 -right-5 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-[radial-gradient(var(--color-accent)_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-50 transition-transform duration-700 ease-out-expo group-hover:translate-x-1.5 group-hover:translate-y-1.5"
          aria-hidden="true"
        />
        <div
          className={`relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_30px_70px_-30px_rgba(11,31,51,0.6)] ring-1 ring-border transition-all duration-700 ease-out-expo ${aspectRatio} ${
            interactive ? "group-hover:-translate-y-1.5 group-hover:shadow-[0_40px_80px_-30px_rgba(11,31,51,0.7)]" : ""
          } [&_img]:transition-transform [&_img]:duration-[1.2s] [&_img]:ease-out-expo group-hover:[&_img]:scale-105`}
        >
          {image}
          {labelChip}
          {children}
        </div>
      </div>
    );
  }

  const frameClasses = `border-[4px] border-navy shadow-[0_2px_8px_rgba(11,31,51,0.15),0_12px_24px_rgba(11,31,51,0.12),0_24px_48px_rgba(11,31,51,0.08)] sm:border-[6px] ${
    interactive ? "hover:shadow-2xl" : ""
  }`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${frameClasses} ${aspectRatio} ${
        interactive ? "transition-all duration-300 ease-out hover:scale-[1.03]" : "transition-all"
      } ${className}`}
    >
      {image}
      {labelChip}
      {children}
    </div>
  );
}
