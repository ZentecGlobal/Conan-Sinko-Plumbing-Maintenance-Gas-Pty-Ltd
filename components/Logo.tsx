import Image from "next/image";

type LogoProps = {
  /** Emblem height class, e.g. "h-12"; the wordmark scales with `textClass` */
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

const sizes = {
  sm: { emblem: "h-10 w-10", top: "text-[1.05rem]", bottom: "text-[0.62rem]" },
  md: { emblem: "h-12 w-12", top: "text-[1.25rem]", bottom: "text-[0.7rem]" },
  lg: { emblem: "h-14 w-14", top: "text-[1.45rem]", bottom: "text-[0.8rem]" },
};

/**
 * Client logo: the round plunger + wrench emblem (cropped from the supplied
 * logo artwork) with the wordmark set as real text, so "Maintenance & Gas
 * PTY LTD" stays sharp and readable at header size instead of a few blurry pixels.
 */
export default function Logo({ size = "md", priority = false, className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`flex items-center gap-2.5 font-[Arial,Helvetica,sans-serif] text-white ${className}`}>
      <Image
        src="/logos/sinko-emblem.webp"
        alt=""
        width={213}
        height={213}
        priority={priority}
        className={`${s.emblem} shrink-0`}
      />
      <span className="flex flex-col leading-none">
        <span className={`${s.top} font-bold tracking-tight`}>SINKO</span>
        <span className={`${s.top} -mt-0.5 tracking-tight`}>PLUMBING</span>
        <span className={`${s.bottom} mt-1 whitespace-nowrap font-medium text-white/90`}>
          Maintenance &amp; <span className="text-[#deea29]">Gas</span>{" "}
          <span className="text-[0.85em] tracking-wide">PTY LTD</span>
        </span>
      </span>
    </span>
  );
}
