"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType, type TouchEvent } from "react";
import Image from "next/image";
import { Camera, Caravan, ChevronLeft, ChevronRight, Droplets, Filter, Flame, Play, ShowerHead, Thermometer, Video } from "lucide-react";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;

type Item = {
  label: string;
  category: string;
  icon: IconType;
  /** Tall shots: show whole image over a blurred backdrop instead of cropping */
  portrait?: boolean;
} & ({ type: "image"; src: string; alt: string; imageClassName?: string } | { type: "video"; src: string; poster: string });

// Real Sinko jobs (supplied by the client). Portrait shots are shown uncropped
// over a blurred copy of themselves; everything else fills the viewer.
const photos: Item[] = [
  { type: "image", src: "/media/bathrooms/bathroom-vanity-tap-install.webp", alt: "Bathroom renovation with wall-mounted tapware and floating vanity", label: "Bathroom Renovation", category: "Bathrooms", icon: ShowerHead },
  { type: "image", src: "/media/gas/outdoor-gas-kitchen-build.webp", alt: "Outdoor gas kitchen build with LPG connections", label: "Outdoor Gas Kitchen", category: "Gas & LPG", icon: Flame },
  { type: "image", src: "/media/stormwater/stormwater-pump-install.webp", alt: "Underground stormwater pump and tank installation", label: "Stormwater Pump", category: "Drainage", icon: Droplets },
  { type: "image", src: "/media/water-filters/puretec-filter-housing-outdoor.webp", alt: "Puretec whole-home water filtration unit on an exterior wall", label: "Puretec Filtration", category: "Water Filters", icon: Filter },
  { type: "image", src: "/media/gallery/caravan-plumbing-lotus.webp", alt: "Caravan plumbing fit-out on a Lotus Trooper caravan", label: "Caravan Fit-out", category: "Caravans", icon: Caravan, imageClassName: "saturate-[0.65] contrast-105" },
  { type: "image", src: "/media/hot-water/rinnai-hot-water-install.webp", alt: "Rinnai hot water system installation", label: "Hot Water Install", category: "Hot Water", icon: Thermometer, portrait: true },
  { type: "image", src: "/media/bathrooms/bathroom-reno-1.webp", alt: "Modern bathroom renovation with round mirror and timber vanity", label: "Modern Bathroom", category: "Bathrooms", icon: ShowerHead },
  { type: "image", src: "/media/bathrooms/bathroom-freestanding-tub.webp", alt: "Freestanding bathtub installed during a bathroom renovation", label: "Freestanding Bath", category: "Bathrooms", icon: ShowerHead },
];

const videos: Item[] = [
  { type: "video", src: "/media/videos/outdoor-gas-kitchen.mp4", poster: "/media/gas/outdoor-gas-kitchen-build.webp", label: "Outdoor Gas Kitchen", category: "Gas & LPG", icon: Flame },
  { type: "video", src: "/media/videos/hot-water-system-install.mp4", poster: "/media/hot-water/rinnai-hot-water-install.webp", label: "Hot Water Install", category: "Hot Water", icon: Thermometer },
  { type: "video", src: "/media/videos/bathroom-walkthrough.mp4", poster: "/media/bathrooms/bathroom-reno-1.webp", label: "Bathroom Walkthrough", category: "Bathrooms", icon: ShowerHead },
  { type: "video", src: "/media/videos/toilet-install.mp4", poster: "/media/bathrooms/smart-toilet-install.webp", label: "Toilet Install", category: "Bathrooms", icon: ShowerHead },
];

const items = [...photos, ...videos];

function Thumb({ item, active, onClick }: { item: Item; active: boolean; onClick: () => void }) {
  const Icon = item.icon;
  const src = item.type === "image" ? item.src : item.poster;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${item.label}${item.type === "video" ? " video" : ""}`}
      aria-current={active || undefined}
      className={`group relative aspect-[16/10] overflow-hidden rounded-xl bg-navy-950 ring-2 transition-all duration-300 ${
        active ? "ring-accent shadow-[0_0_0_4px_rgba(25,175,165,0.25)]" : "ring-white/10 hover:ring-white/40"
      }`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="160px"
        className={`object-cover transition-all duration-500 group-hover:scale-110 ${active ? "opacity-100" : "opacity-60 group-hover:opacity-90"}`}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
      {item.type === "video" && (
        <span className="absolute left-1/2 top-[42%] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
        </span>
      )}
      <span className="absolute inset-x-1.5 bottom-1.5 flex items-center gap-1 text-left">
        <Icon className="h-3 w-3 shrink-0 text-accent-soft" aria-hidden="true" />
        <span className="truncate text-[11px] font-bold leading-tight text-white">{item.label}</span>
      </span>
    </button>
  );
}

/** Showcase of real jobs: large viewer with arrows, plus a panel of photo and video thumbnails. */
export default function WorkGallery() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const touchX = useRef<number | null>(null);
  const current = items[index];
  const Icon = current.icon;

  const go = useCallback((i: number) => {
    setIndex((i + items.length) % items.length);
    setPlaying(false);
  }, []);

  // Arrow keys when the viewer has focus
  const viewerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = viewerRef.current;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [go, index]);

  function onTouchStart(e: TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: TouchEvent) {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  }

  const still = current.type === "image" ? current.src : current.poster;

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_23rem]">
      {/* Main viewer */}
      <div
        ref={viewerRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Recent jobs gallery"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="group/viewer relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-950 shadow-[0_30px_70px_-30px_rgba(11,31,51,0.6)] outline-none focus-visible:ring-4 focus-visible:ring-accent/40 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[32rem]"
      >
        {/* key forces a fresh fade/zoom-in on every change */}
        <div key={index} className="absolute inset-0 animate-[slide-in_0.7s_var(--ease-out-expo)]">
          <Image src={still} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="scale-110 object-cover opacity-50 blur-2xl" aria-hidden="true" />
          {current.type === "video" && playing ? (
            <video src={current.src} poster={current.poster} controls autoPlay playsInline className="absolute inset-0 h-full w-full object-contain" />
          ) : (
            <Image
              src={still}
              alt={current.type === "image" ? current.alt : `${current.label} video preview`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={`${current.portrait ? "object-contain" : "object-cover"} ${current.type === "image" ? current.imageClassName ?? "" : ""}`}
            />
          )}
        </div>

        {current.type === "video" && !playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/play absolute inset-0 z-10 flex items-center justify-center"
            aria-label={`Play ${current.label} video`}
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy shadow-2xl transition-transform duration-300 group-hover/play:scale-110">
              <span className="absolute inset-0 rounded-full bg-white/60 motion-safe:animate-ping" aria-hidden="true" />
              <Play className="relative ml-1 h-8 w-8" fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}

        {/* Caption */}
        {!playing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
            <span key={`cap-${index}`} className="flex animate-rise items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-text">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-accent-soft">{current.category}</span>
                <span className="block font-display text-xl font-bold text-white sm:text-2xl">{current.label}</span>
              </span>
            </span>
          </div>
        )}

        <span className="absolute right-4 top-4 z-10 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {index + 1} / {items.length}
        </span>

        {/* Arrows */}
        {[
          { dir: -1, label: "Previous job", Icon: ChevronLeft, pos: "left-4" },
          { dir: 1, label: "Next job", Icon: ChevronRight, pos: "right-4" },
        ].map((a) => (
          <button
            key={a.label}
            type="button"
            onClick={() => go(index + a.dir)}
            aria-label={a.label}
            className={`absolute ${a.pos} top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-white shadow-xl ring-1 ring-white/20 backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-cta`}
          >
            <a.Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* Thumbnail panel */}
      <div className="relative overflow-hidden rounded-3xl bg-navy p-5 text-white">
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
            <Camera className="h-4 w-4" aria-hidden="true" />
            Photos ({photos.length})
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2">
            {photos.map((item, i) => (
              <Thumb key={item.src} item={item} active={index === i} onClick={() => go(i)} />
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
            <Video className="h-4 w-4" aria-hidden="true" />
            Videos ({videos.length})
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2">
            {videos.map((item, i) => (
              <Thumb key={item.src} item={item} active={index === photos.length + i} onClick={() => go(photos.length + i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
