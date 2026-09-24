import { business } from "./constants";

export type SuburbContent = {
  slug: string;
  name: string;
  postcode: string;
  /** Small label above the hero heading */
  eyebrow: string;
  heroDescription: string;
  /** Background photo for the hero (a real Sinko job) */
  heroImage: string;
  heroImagePosition?: string;
  localHeading: string;
  localBody: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  mapZoom: number;
  metaTitle: string;
  metaDescription: string;
};

// Only facts we can stand behind: location relative to the Corrimal base,
// the services offered, licensing, hours and the published offers.
export const suburbs: SuburbContent[] = [
  {
    slug: "corrimal",
    name: "Corrimal",
    postcode: "2518",
    eyebrow: "Service Area · Home Base",
    heroDescription: `Sinko Plumbing Maintenance & Gas is proudly based in ${business.address.full}. As local Corrimal plumbers, we know the area and can usually get to you fast.`,
    heroImage: "/media/bathrooms/bathroom-vanity-tap-install.webp",
    localHeading: "Local Corrimal plumbing",
    localBody:
      "As a Corrimal-based business, we understand the local plumbing systems, common issues in older and newer homes alike, and can respond quickly to emergency callouts in the area. Whether it's a blocked drain in a Corrimal unit block or a full bathroom renovation, our licensed team has you covered.",
    highlights: [
      "Fastest response times, we're based right here",
      "Emergency plumbing available 24/7",
      "Licensed gas fitting and LPG installation",
      "Free, no-obligation quotes",
    ],
    faqs: [
      {
        question: "Are you actually based in Corrimal?",
        answer: `Yes. Our home base is right here in ${business.address.full}, so Corrimal jobs typically get our fastest response times.`,
      },
      {
        question: "Do you cover emergency callouts in Corrimal at night?",
        answer:
          "Yes. We offer 24/7 emergency plumbing for Corrimal residents, covering burst pipes, gas leaks and blocked drains outside normal business hours.",
      },
      {
        question: "Do you service both houses and units in Corrimal?",
        answer: "Yes. We work on residential houses, units, townhouses and small commercial properties throughout Corrimal.",
      },
      {
        question: "Do you service suburbs near Corrimal too?",
        answer:
          "Yes. As well as Corrimal, we regularly service nearby suburbs including Wollongong, Fairy Meadow, Towradgi, Bulli, Thirroul and Woonona.",
      },
    ],
    mapZoom: 14,
    metaTitle: "Plumber Corrimal | Local Emergency Plumbing",
    metaDescription:
      "Sinko Plumbing Maintenance & Gas is based right in Corrimal NSW 2518, your local licensed plumber for emergency repairs, gas fitting, drainage and more.",
  },
  {
    slug: "wollongong",
    name: "Wollongong",
    postcode: "2500",
    eyebrow: "Service Area",
    heroDescription:
      "From the CBD to the northern and southern suburbs, our licensed team services homes and businesses throughout Wollongong.",
    heroImage: "/media/gas/outdoor-gas-kitchen-build.webp",
    localHeading: "Plumbing & gas across Wollongong",
    localBody:
      "Sinko Plumbing Maintenance & Gas services Wollongong and surrounds from our Corrimal base, close enough for fast response times on emergency jobs, with the licensing and experience to handle everything from a leaking tap to a full gas installation.",
    highlights: [
      "Emergency plumbing available 24/7",
      "Residential and commercial jobs welcome",
      "Licensed gas fitting and LPG installation",
      "Free, no-obligation quotes",
    ],
    faqs: [
      {
        question: "How quickly can you get to Wollongong for an emergency?",
        answer:
          "We're based just up the road in Corrimal, so Wollongong callouts are typically a short drive away. Emergency jobs like burst pipes and gas leaks are always prioritised.",
      },
      {
        question: "Do you work on commercial properties in Wollongong CBD?",
        answer: "Yes. We handle both residential and commercial plumbing and gas fitting work throughout Wollongong, including the CBD.",
      },
      {
        question: "Can you install gas appliances in Wollongong apartments?",
        answer:
          "Yes. Our licensed gas fitters install and service gas appliances in apartments, units and townhouses across Wollongong, in line with strata and building requirements.",
      },
      {
        question: "Do you service suburbs near Wollongong too?",
        answer:
          "Yes. We cover the whole Illawarra, including Fairy Meadow, Corrimal, Port Kembla, Dapto and Shellharbour.",
      },
    ],
    mapZoom: 13,
    metaTitle: "Plumber Wollongong | Emergency & Gas Plumbing",
    metaDescription:
      "Licensed plumber servicing Wollongong NSW. Emergency plumbing, gas fitting, blocked drains, hot water and more from Sinko Plumbing Maintenance & Gas.",
  },
  {
    slug: "woonona",
    name: "Woonona",
    postcode: "2517",
    eyebrow: "Service Area · Northern Suburbs",
    heroDescription:
      "Just north of our Corrimal base, Woonona is one of the suburbs we service most. Licensed plumbing, gas fitting and 24/7 emergency help, close to home.",
    heroImage: "/media/hot-water/rinnai-hot-water-install.webp",
    heroImagePosition: "object-[50%_40%]",
    localHeading: "Your nearby Woonona plumber",
    localBody:
      "Woonona sits just a few suburbs north of Corrimal, so we're never far away. From hot water system replacements and blocked drains to gas appliance installs and bathroom renovations, our licensed team looks after Woonona homes and businesses with upfront pricing and tidy workmanship.",
    highlights: [
      "Close by, just north of our Corrimal base",
      "Emergency plumbing available 24/7",
      "Hot water supply, install and repair",
      "Free, no-obligation quotes",
    ],
    faqs: [
      {
        question: "Do you service Woonona?",
        answer: "Yes. Woonona is just north of our Corrimal base and one of the suburbs we service regularly.",
      },
      {
        question: "Can you replace a hot water system in Woonona?",
        answer:
          "Yes. We supply, install and repair gas, electric and heat pump hot water systems for Woonona homes, and can advise on the right size for your household.",
      },
      {
        question: "Do you offer emergency plumbing in Woonona after hours?",
        answer: `Yes. Call us any time on ${business.phone} for burst pipes, gas leaks, blocked drains or flooding.`,
      },
      {
        question: "Do you charge extra to travel to Woonona?",
        answer: "No hidden travel fees. You'll get an upfront, obligation-free quote before any work starts.",
      },
    ],
    mapZoom: 14,
    metaTitle: "Plumber Woonona | Local Emergency Plumbing & Gas",
    metaDescription:
      "Licensed plumber servicing Woonona NSW 2517. Emergency plumbing, hot water, gas fitting and blocked drains from Sinko Plumbing, based nearby in Corrimal.",
  },
  {
    slug: "fairy-meadow",
    name: "Fairy Meadow",
    postcode: "2519",
    eyebrow: "Service Area · Next Door",
    heroDescription:
      "Right next door to Corrimal, Fairy Meadow gets some of our fastest response times. Licensed plumbing and gas work for homes, units and local businesses.",
    heroImage: "/media/water-filters/puretec-filter-housing-outdoor.webp",
    localHeading: "Plumbing right next door in Fairy Meadow",
    localBody:
      "Fairy Meadow borders our Corrimal home base, which means quick callouts when something goes wrong. We handle everything from leaking taps and blocked drains to whole-home Puretec water filtration and licensed gas fitting, with free quotes on every job.",
    highlights: [
      "Right next door to our Corrimal base",
      "Emergency plumbing available 24/7",
      "Puretec water filtration partner",
      "Free, no-obligation quotes",
    ],
    faqs: [
      {
        question: "How close are you to Fairy Meadow?",
        answer: "Very close. Fairy Meadow borders our Corrimal home base, so Fairy Meadow jobs are only a short drive away.",
      },
      {
        question: "Do you install water filters in Fairy Meadow?",
        answer:
          "Yes. As a Puretec partner we install whole-house, under-sink and point-of-use water filtration systems in Fairy Meadow homes.",
      },
      {
        question: "Do you work on units and apartments in Fairy Meadow?",
        answer: "Yes. We work on houses, units, townhouses and small commercial properties throughout Fairy Meadow.",
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes. We offer 15% off for DVA cardholders and $50 off for first-time customers, on top of always-free quotes.",
      },
    ],
    mapZoom: 14,
    metaTitle: "Plumber Fairy Meadow | Local Plumbing & Gas Fitting",
    metaDescription:
      "Licensed plumber servicing Fairy Meadow NSW 2519. Emergency plumbing, water filtration, gas fitting and drains from Sinko Plumbing, right next door in Corrimal.",
  },
  {
    slug: "thirroul",
    name: "Thirroul",
    postcode: "2515",
    eyebrow: "Service Area · Northern Suburbs",
    heroDescription:
      "Covering Thirroul and the northern Illawarra from our Corrimal base. Licensed plumbing, gas fitting, drainage and bathroom renovation plumbing.",
    heroImage: "/media/bathrooms/bathroom-reno-1.webp",
    localHeading: "Trusted plumbing in Thirroul",
    localBody:
      "From Corrimal we service Thirroul and the northern suburbs for everything from emergency repairs to full bathroom renovation plumbing. We also handle stormwater drainage and sewer pumping systems, with CCTV drain inspection to find the problem before we dig.",
    highlights: [
      "Servicing Thirroul and the northern Illawarra",
      "Emergency plumbing available 24/7",
      "Bathroom renovation rough-in and fit-off",
      "Free, no-obligation quotes",
    ],
    faqs: [
      {
        question: "Do you service Thirroul?",
        answer: "Yes. We service Thirroul and the surrounding northern suburbs, including Austinmer, Bulli and Woonona, from our Corrimal base.",
      },
      {
        question: "Can you do the plumbing for my Thirroul bathroom renovation?",
        answer:
          "Yes. We handle the full plumbing scope for bathroom renovations, from rough-in through to fit-off, working alongside your builder or tiler.",
      },
      {
        question: "Do you fix stormwater problems in Thirroul?",
        answer:
          "Yes. We install and repair stormwater drainage and use CCTV drain inspection to find blockages, root intrusion and damaged pipes.",
      },
      {
        question: "Are you available for emergencies in Thirroul?",
        answer: `Yes. Call ${business.phone} any time, day or night, for burst pipes, gas leaks or flooding.`,
      },
    ],
    mapZoom: 14,
    metaTitle: "Plumber Thirroul | Emergency Plumbing & Gas",
    metaDescription:
      "Licensed plumber servicing Thirroul NSW 2515. Emergency plumbing, bathroom renovation plumbing, stormwater and gas fitting from Sinko Plumbing.",
  },
];

export function getSuburb(slug: string): SuburbContent {
  const suburb = suburbs.find((s) => s.slug === slug);
  if (!suburb) throw new Error(`Unknown suburb: ${slug}`);
  return suburb;
}
