export const business = {
  name: "Sinko Plumbing Maintenance & Gas PTY LTD",
  shortName: "Sinko Plumbing",
  director: "Conan Sinko",
  licenseNumber: "339066C",
  acn: "631 282 909",
  phone: "0413 776 437",
  phoneHref: "tel:0413776437",
  email: "conan@sinkopmg.com.au",
  address: {
    street: "Corrimal", // TODO: confirm exact street address with client
    suburb: "Corrimal",
    state: "NSW",
    postcode: "2518",
    full: "Corrimal NSW 2518",
  },
  hours: {
    weekdays: "7:00am – 5:00pm",
    weekend: "Emergency callouts only",
    emergency: "24/7 Emergency Plumbing",
  },
  social: {
    // TODO: replace with real profile URLs
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  name: string;
  slug: string;
  href: string;
  hasDedicatedPage: boolean;
  summary: string;
};

export const services: Service[] = [
  {
    name: "Emergency Plumbing",
    slug: "emergency-plumbing",
    href: "/services#emergency-plumbing",
    hasDedicatedPage: false,
    summary:
      "Burst pipes, gas leaks, blocked toilets and flooding. Fast response across the Illawarra, day or night.",
  },
  {
    name: "Blocked Drains",
    slug: "blocked-drains",
    href: "/services#blocked-drains",
    hasDedicatedPage: false,
    summary:
      "Fast, reliable clearing of blocked drains using modern equipment to get water flowing again.",
  },
  {
    name: "Water Filtration Specialist",
    slug: "water-filtration-specialist",
    href: "/services#water-filtration-specialist",
    hasDedicatedPage: false,
    summary:
      "Whole-home and point-of-use filtration systems, proudly installed as a Puretec partner.",
  },
  {
    name: "Caravan Plumbing",
    slug: "caravan-plumbing",
    href: "/services#caravan-plumbing",
    hasDedicatedPage: false,
    summary:
      "Specialist plumbing fit-outs and repairs for caravans, motorhomes and mobile living.",
  },
  {
    name: "Storm Water & Sewer Pumping Systems",
    slug: "stormwater-drainage",
    href: "/services/stormwater-drainage",
    hasDedicatedPage: true,
    summary:
      "Stormwater drainage, sewer pumping systems and CCTV drain inspection across the Illawarra.",
  },
  {
    name: "Gas & LPG",
    slug: "gas-lpg",
    href: "/services/gas-lpg",
    hasDedicatedPage: true,
    summary:
      "Licensed gas fitting, LPG installations, appliance connections and gas safety checks.",
  },
  {
    name: "Excavation",
    slug: "excavation",
    href: "/services#excavation",
    hasDedicatedPage: false,
    summary:
      "Trenching and excavation works for pipe laying, drainage and plumbing installations.",
  },
  {
    name: "Plumbing Maintenance & Repair",
    slug: "plumbing-maintenance-repair",
    href: "/services#plumbing-maintenance-repair",
    hasDedicatedPage: false,
    summary:
      "General repairs, taps, toilets, leaks and scheduled maintenance for homes and businesses.",
  },
  {
    name: "Hot Water Systems",
    slug: "hot-water-systems",
    href: "/services#hot-water-systems",
    hasDedicatedPage: false,
    summary:
      "Supply, install and repair of gas, electric and heat pump hot water systems.",
  },
  {
    name: "Bathroom Renovation Plumbing",
    slug: "bathroom-renovation-plumbing",
    href: "/services#bathroom-renovation-plumbing",
    hasDedicatedPage: false,
    summary:
      "Full plumbing rough-in and fit-off for bathroom renovations, from concept to completion.",
  },
];

export type ServiceArea = {
  name: string;
  slug: string;
  href: string;
  hasDedicatedPage: boolean;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Corrimal", slug: "corrimal", href: "/service-areas/corrimal", hasDedicatedPage: true },
  { name: "Wollongong", slug: "wollongong", href: "/service-areas/wollongong", hasDedicatedPage: true },
  { name: "Fairy Meadow", slug: "fairy-meadow", href: "/service-areas", hasDedicatedPage: false },
  { name: "Towradgi", slug: "towradgi", href: "/service-areas", hasDedicatedPage: false },
  { name: "Bulli", slug: "bulli", href: "/service-areas", hasDedicatedPage: false },
  { name: "Thirroul", slug: "thirroul", href: "/service-areas", hasDedicatedPage: false },
  { name: "Woonona", slug: "woonona", href: "/service-areas", hasDedicatedPage: false },
  { name: "Dapto", slug: "dapto", href: "/service-areas", hasDedicatedPage: false },
  { name: "Shellharbour", slug: "shellharbour", href: "/service-areas", hasDedicatedPage: false },
  { name: "Port Kembla", slug: "port-kembla", href: "/service-areas", hasDedicatedPage: false },
];

export const offers = [
  {
    title: "Free Quotes",
    description: "No-obligation, upfront quotes on every job, every time.",
  },
  {
    title: "15% Off for DVA Card Holders",
    description: "We proudly support veterans with a 15% discount for DVA cardholders.",
  },
  {
    title: "$50 Off First-Time Customers",
    description: "New to Sinko Plumbing? Take $50 off your first service call.",
  },
] as const;
