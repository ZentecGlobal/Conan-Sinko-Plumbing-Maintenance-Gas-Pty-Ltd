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
  const frameClasses =
    variant === "offset"
      ? `shadow-[10px_10px_0_0_#1c2439] ${interactive ? "hover:shadow-[14px_14px_0_0_#1c2439]" : ""}`
      : `border-[4px] border-navy shadow-[0_2px_8px_rgba(28,36,57,0.15),0_12px_24px_rgba(28,36,57,0.12),0_24px_48px_rgba(28,36,57,0.08)] sm:border-[6px] ${
          interactive ? "hover:shadow-2xl" : ""
        }`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${frameClasses} ${aspectRatio} ${
        interactive ? "transition-all duration-300 ease-out hover:scale-[1.03]" : "transition-all"
      } ${className}`}
    >
      {priority ? (
        <Image src={src} alt={alt} fill priority sizes={sizes} className={`object-cover ${imageClassName}`} />
      ) : (
        <Image src={src} alt={alt} fill loading="lazy" sizes={sizes} className={`object-cover ${imageClassName}`} />
      )}
      {label && (
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white shadow-md">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
