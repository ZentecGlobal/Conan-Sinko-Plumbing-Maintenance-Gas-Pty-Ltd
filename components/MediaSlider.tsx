"use client";

import { useRef, useState, type ReactNode, type TouchEvent } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Play, Video } from "lucide-react";

type ImageSlide = {
  type: "image";
  src: string;
  alt: string;
  label?: string;
  /** Pass an already-rendered icon element, e.g. <Thermometer className="h-4 w-4" /> */
  labelIcon?: ReactNode;
  /** Extra classes for the <Image>, e.g. to tone down an over-saturated photo */
  imageClassName?: string;
};

type VideoSlide = {
  type: "video";
  src: string;
  poster: string;
  posterAlt: string;
  label?: string;
  labelIcon?: ReactNode;
  imageClassName?: string;
};

export type Slide = ImageSlide | VideoSlide;

type MediaSliderProps = {
  slides: Slide[];
  aspectRatio?: string;
  className?: string;
  /**
   * "border" (default): uniform navy border on all sides.
   * "offset": no border — a solid navy block peeks out from the bottom-right instead.
   */
  variant?: "border" | "offset";
};

/**
 * Lightweight swipeable slider for pairing a photo with a click-to-play
 * video in the same frame — no carousel library, just touch events + state.
 */
export default function MediaSlider({
  slides,
  aspectRatio = "aspect-[4/3]",
  className = "",
  variant = "border",
}: MediaSliderProps) {
  const [index, setIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = slides.length > 1;

  function goTo(i: number) {
    setIndex((i + slides.length) % slides.length);
    setPlayingVideo(false);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goTo(index + 1);
      else goTo(index - 1);
    }
    touchStartX.current = null;
  }

  const slide = slides[index];
  const showCaptionArea = Boolean(slide.label) || hasMultiple;
  const frameClasses =
    variant === "offset"
      ? "shadow-[10px_10px_0_0_#1c2439] hover:shadow-[14px_14px_0_0_#1c2439]"
      : "border-[4px] border-navy shadow-[0_2px_8px_rgba(28,36,57,0.15),0_12px_24px_rgba(28,36,57,0.12),0_24px_48px_rgba(28,36,57,0.08)] sm:border-[6px]";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all ${frameClasses} ${aspectRatio} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slide.type === "image" ? (
        <Image
          key={index}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`animate-[fade-in_0.3s_ease-out] object-cover ${slide.imageClassName ?? ""}`}
        />
      ) : playingVideo ? (
        <video controls autoPlay poster={slide.poster} className="h-full w-full object-cover">
          <source src={slide.src} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlayingVideo(true)}
          className="group/play absolute inset-0 block h-full w-full"
        >
          <Image
            key={index}
            src={slide.poster}
            alt={slide.posterAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`animate-[fade-in_0.3s_ease-out] object-cover ${slide.imageClassName ?? ""}`}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-navy/40 transition-colors group-hover/play:bg-navy/25">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-text shadow-lg transition-transform group-hover/play:scale-110">
              <Play className="ml-0.5 h-6 w-6" aria-hidden="true" fill="currentColor" />
            </span>
          </span>
        </button>
      )}

      {/* Media-type badge */}
      <span className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur-sm">
        {slide.type === "image" ? (
          <Camera className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Video className="h-4 w-4" aria-hidden="true" />
        )}
      </span>

      {/* Slide counter */}
      {hasMultiple && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-navy/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
          {index + 1} / {slides.length}
        </span>
      )}

      {/* Prev/next arrows */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-navy group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-navy group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      )}

      {/* Caption + dots */}
      {showCaptionArea && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pb-3 pt-8">
          {slide.label && (
            <p className="flex items-center gap-2 px-4 pb-2 font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
              {slide.labelIcon}
              {slide.label}
            </p>
          )}
          {hasMultiple && (
            <div className="flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
