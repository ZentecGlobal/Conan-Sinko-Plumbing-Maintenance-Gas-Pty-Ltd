import { Phone } from "lucide-react";
import { business } from "@/lib/constants";

export default function CallNowButton() {
  return (
    <a
      href={business.phoneHref}
      className="group fixed bottom-5 right-5 z-50 flex h-14 items-center overflow-hidden rounded-full bg-cta pl-[1.125rem] pr-[1.125rem] text-cta-text shadow-[0_10px_30px_-6px_rgba(8,124,193,0.7),0_8px_28px_rgba(0,0,0,0.25)] ring-4 ring-white/90 transition-all duration-500 ease-out-expo hover:bg-cta-hover hover:pr-6 active:scale-95"
      aria-label={`Call Sinko Plumbing now on ${business.phone}`}
    >
      <span className="absolute inset-0 rounded-full bg-cta motion-safe:animate-ping motion-safe:opacity-40 group-hover:motion-safe:animate-none" aria-hidden="true" />
      <Phone className="relative h-5 w-5 shrink-0 group-hover:motion-safe:animate-[wiggle_0.5s_ease-in-out]" aria-hidden="true" fill="currentColor" />
      {/* Number slides out on hover (desktop) */}
      <span
        className="relative max-w-0 overflow-hidden whitespace-nowrap font-bold opacity-0 transition-all duration-500 ease-out-expo group-hover:ml-2.5 group-hover:max-w-[10rem] group-hover:opacity-100"
        aria-hidden="true"
      >
        {business.phone}
      </span>
    </a>
  );
}
