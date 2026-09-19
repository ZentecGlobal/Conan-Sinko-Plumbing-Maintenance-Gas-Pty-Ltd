type GoogleMapEmbedProps = {
  /** Free-text address to search for, e.g. "Corrimal NSW 2518, Australia" */
  address?: string;
  /** Latitude, used together with lng instead of address */
  lat?: number;
  /** Longitude, used together with lat instead of address */
  lng?: number;
  /** Accessible title for the iframe */
  title?: string;
  zoom?: number;
  className?: string;
};

export default function GoogleMapEmbed({
  address,
  lat,
  lng,
  title = "Map",
  zoom = 12,
  className = "",
}: GoogleMapEmbedProps) {
  const query =
    lat !== undefined && lng !== undefined ? `${lat},${lng}` : address ?? "Corrimal NSW 2518, Australia";

  // Key-less embed mode; swap for a Maps Embed API key + /maps/embed/v1/place for richer markers.
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=${zoom}&output=embed`;

  return (
    <div className={`overflow-hidden rounded-2xl border-2 border-navy shadow-sm ${className}`}>
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-video w-full grayscale-[15%] contrast-[1.05]"
      />
    </div>
  );
}
