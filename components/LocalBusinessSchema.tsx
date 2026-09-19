import { business } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    legalName: business.name,
    image: "https://www.sinkopmg.com.au/logos/sinko-plumbing-logo.webp",
    url: "https://www.sinkopmg.com.au/",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.suburb,
      addressRegion: business.address.state,
      postalCode: business.address.postcode,
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Place",
      name: "Illawarra Region, NSW",
    },
    founder: {
      "@type": "Person",
      name: business.director,
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Plumbing License",
        value: business.licenseNumber,
      },
      {
        "@type": "PropertyValue",
        name: "ACN",
        value: business.acn,
      },
    ],
    openingHours: "Mo-Fr 07:00-17:00",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
