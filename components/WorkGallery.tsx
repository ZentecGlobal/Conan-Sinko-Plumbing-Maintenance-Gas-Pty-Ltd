"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { Caravan, Droplets, Filter, Flame, Pause, Play, ShowerHead, Thermometer } from "lucide-react";
import FadeIn from "./FadeIn";

type Tile = {
  label: string;
  category: string;
  icon: ReactNode;
  /** Grid placement classes for the lg bento layout */
  span: string;
} & ({ type: "image"; src: string; alt: string; imageClassName?: string } | { type: "video"; src: string; poster: string });

const icon = "h-4 w-4 text-accent-soft";

const tiles: Tile[] = [
  {
    type: "image",
    src: "/media/bathrooms/bathroom-vanity-tap-install.webp",
    alt: "Bathroom renovation plumbing fit-out with wall-mounted tapware and floating vanity",
    label: "Bathroom Renovation",
    category: "Bathrooms",
    icon: <ShowerHead className={icon} aria-hidden="true" />,
    span: "sm:col-span-2 lg:row-span-2",
  },
  {
    type: "video",
    src: "/media/videos/outdoor-gas-kitchen.mp4",
    poster: "/media/gas/outdoor-gas-kitchen-build.webp",
    label: "Outdoor Gas Kitchen",
    category: "Gas & LPG",
    icon: <Flame className={icon} aria-hidden="true" />,
    span: "sm:col-span-2",
  },
  {
    type: "image",
    src: "/media/stormwater/stormwater-pump-install.webp",
    alt: "Underground stormwater pump and tank installation",
    label: "Stormwater Pump",
    category: "Drainage",
    icon: <Droplets className={icon} aria-hidden="true" />,
    span: "",
  },
  {
    type: "image",
    src: "/media/water-filters/puretec-filter-housing-outdoor.webp",
    alt: "Puretec whole-home water filtration unit installed on an exterior wall",
    label: "Puretec Filtration",
    category: "Water Filters",
    icon: <Filter className={icon} aria-hidden="true" />,
    span: "",
  },
  {
    type: "image",
    src: "/media/gallery/caravan-plumbing-lotus.webp",
    alt: "Caravan plumbing fit-out on a Lotus Trooper caravan",
    label: "Caravan Fit-out",
    category: "Caravans",
    icon: <Caravan className={icon} aria-hidden="true" />,
    span: "",
    imageClassName: "saturate-[0.65] contrast-105",
  },
  {
    type: "image",
    src: "/media/hot-water/rinnai-hot-water-install.webp",
    alt: "Rinnai hot water system installation",
    label: "Hot Water Install",
    category: "Hot Water",
    icon: <Thermometer className={icon} aria-hidden="true" />,
    span: "",
  },
  {
    type: "image",
    src: "/media/bathrooms/bathroom-freestanding-tub.webp",
    alt: "Freestanding bathtub installed during a bathroom renovation",
    label: "Freestanding Bath",
    category: "Bathrooms",
    icon: <ShowerHead className={icon} aria-hidden="true" />,
    span: "sm:col-span-2",
  },
];

/** Plays a muted clip only while it's on screen, with a manual pause toggle. */
function VideoTile({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [paused]);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      setPaused(false);
      video.play().catch(() => {});
    } else {
      setPaused(true);
      video.pause();
    }
  }

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
        aria-label={`${label} video`}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="ml-0.5 h-4 w-4" fill="currentColor" />}
      </button>
    </>
  );
}

/** Bento grid of real jobs: photos zoom on hover, the video tile autoplays in view. */
export default function WorkGallery() {
  return (
    <ul className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-4">
      {tiles.map((tile, i) => (
        <FadeIn as="li" key={tile.label} delay={i * 90} variant="reveal" className={`group relative overflow-hidden rounded-3xl bg-navy ${tile.span}`}>
          {tile.type === "image" ? (
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110 ${tile.imageClassName ?? ""}`}
            />
          ) : (
            <VideoTile src={tile.src} poster={tile.poster} label={tile.label} />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent transition-opacity duration-500 group-hover:from-navy-950/95" />
          <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-navy-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/85 backdrop-blur">
            {tile.category}
          </span>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 p-5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur">{tile.icon}</span>
            <span className="font-display text-lg font-bold text-white">{tile.label}</span>
          </div>
          <span
            className="pointer-events-none absolute inset-x-5 bottom-0 z-10 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-cta transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
            aria-hidden="true"
          />
        </FadeIn>
      ))}
    </ul>
  );
}
