import { serviceAreas } from "@/lib/constants";

// Approximate suburb coordinates (lat, lng) — only used to lay the dots out in
// roughly the right north→south / coast→inland positions. Not a real map.
const coords: Record<string, [number, number]> = {
  thirroul: [-34.315, 150.92],
  bulli: [-34.335, 150.915],
  woonona: [-34.35, 150.908],
  corrimal: [-34.372, 150.9],
  towradgi: [-34.385, 150.905],
  "fairy-meadow": [-34.395, 150.89],
  wollongong: [-34.425, 150.893],
  "port-kembla": [-34.48, 150.9],
  dapto: [-34.495, 150.79],
  shellharbour: [-34.58, 150.87],
};

const W = 400;
const H = 460;
// Bounding box: lng 150.70→151.00, lat -34.28→-34.60
const project = ([lat, lng]: [number, number]) => ({
  x: ((lng - 150.7) / 0.3) * W,
  y: ((-34.28 - lat) / 0.32) * H,
});

// Hand-traced, simplified Illawarra coastline (x, y in the same space)
const coast = "M322 0 C312 40 306 80 300 110 S292 150 291 175 S282 215 286 240 S296 270 286 300 S262 330 262 350 S252 400 246 430 L240 460";
const sea = `${coast} L400 460 L400 0 Z`;

/** Decorative animated coverage map for the Service Areas hero. */
export default function CoverageMap() {
  const home = project(coords.corrimal);
  const areas = serviceAreas
    .filter((a) => coords[a.slug])
    .map((a) => ({ ...a, ...project(coords[a.slug]) }));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" role="img" aria-label="Map of the Illawarra suburbs we service, centred on Corrimal">
      <defs>
        <linearGradient id="sea" x1="0" x2="1">
          <stop offset="0" stopColor="#087cc1" stopOpacity="0.28" />
          <stop offset="1" stopColor="#087cc1" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#19afa5" stopOpacity="0.45" />
          <stop offset="1" stopColor="#19afa5" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d={sea} fill="url(#sea)" />
      <path
        d={coast}
        fill="none"
        stroke="#7fe0d8"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="1"
        strokeDashoffset="1"
        pathLength={1}
        className="animate-[draw_2.2s_var(--ease-out-expo)_0.2s_forwards]"
      />
      <text x="352" y="200" fill="#7fe0d8" fillOpacity="0.35" fontSize="11" letterSpacing="4" transform="rotate(90 352 200)">
        TASMAN SEA
      </text>

      {/* Coverage radius around home base */}
      <circle cx={home.x} cy={home.y} r="150" fill="url(#glow)" opacity="0.5" />
      {[60, 110, 160].map((r, i) => (
        <circle
          key={r}
          cx={home.x}
          cy={home.y}
          r={r}
          fill="none"
          stroke="#19afa5"
          strokeOpacity="0.25"
          strokeDasharray="3 6"
          className="origin-center [transform-box:fill-box] motion-safe:animate-[orbit_60s_linear_infinite]"
          style={{ animationDirection: i % 2 ? "reverse" : "normal" }}
        />
      ))}

      {/* Routes from Corrimal out to each suburb */}
      {areas
        .filter((a) => a.slug !== "corrimal")
        .map((a, i) => (
          <line
            key={`route-${a.slug}`}
            x1={home.x}
            y1={home.y}
            x2={a.x}
            y2={a.y}
            stroke="#7fe0d8"
            strokeOpacity="0.4"
            strokeWidth="1"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
            className="animate-[draw_1s_var(--ease-out-expo)_forwards]"
            style={{ animationDelay: `${700 + i * 110}ms` }}
          />
        ))}

      {/* Suburb dots + labels */}
      {areas.map((a, i) => {
        const isHome = a.slug === "corrimal";
        const labelLeft = a.x > 240;
        return (
          <g key={a.slug} className="animate-rise" style={{ animationDelay: `${800 + i * 110}ms` }}>
            {isHome ? (
              <>
                <circle cx={a.x} cy={a.y} r="16" fill="#19afa5" opacity="0.35" className="origin-center [transform-box:fill-box] motion-safe:animate-ping" />
                <circle cx={a.x} cy={a.y} r="9" fill="#19afa5" stroke="#fff" strokeWidth="3" />
              </>
            ) : (
              <circle cx={a.x} cy={a.y} r={a.hasDedicatedPage ? 6 : 4.5} fill={a.hasDedicatedPage ? "#087cc1" : "#fff"} stroke="#0b1f33" strokeWidth="2" />
            )}
            <text
              x={labelLeft ? a.x - (isHome ? 18 : 12) : a.x + 14}
              y={a.y + 4}
              textAnchor={labelLeft ? "end" : "start"}
              fill="#fff"
              fillOpacity={isHome || a.hasDedicatedPage ? 1 : 0.7}
              fontSize={isHome ? 15 : 12}
              fontWeight={isHome || a.hasDedicatedPage ? 700 : 500}
            >
              {isHome ? "Corrimal · Home base" : a.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
