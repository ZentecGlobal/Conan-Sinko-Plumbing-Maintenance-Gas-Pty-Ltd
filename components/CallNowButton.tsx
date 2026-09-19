import { Phone } from "lucide-react";
import { business } from "@/lib/constants";

export default function CallNowButton() {
  return (
    <a
      href={business.phoneHref}
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-text shadow-[0_4px_14px_rgba(241,255,3,0.35),0_8px_28px_rgba(0,0,0,0.25)] ring-4 ring-white transition-transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(241,255,3,0.5),0_10px_32px_rgba(0,0,0,0.3)] active:scale-95"
      aria-label={`Call Sinko Plumbing now on ${business.phone}`}
    >
      <span className="absolute inset-0 rounded-full bg-accent motion-safe:animate-ping motion-safe:opacity-60 group-hover:motion-safe:animate-none" aria-hidden="true" />
      <Phone className="relative h-6 w-6" aria-hidden="true" fill="currentColor" />
    </a>
  );
}
