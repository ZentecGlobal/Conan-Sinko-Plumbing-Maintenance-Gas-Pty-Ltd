import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallNowButton from "@/components/CallNowButton";
import CtaBand from "@/components/CtaBand";
import HideOnHome from "@/components/HideOnHome";
import { business } from "@/lib/constants";

const displayFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sinkopmg.com.au"),
  title: {
    default: `${business.name} | Local Plumber Illawarra`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Licensed local plumber servicing Corrimal, Wollongong and the Illawarra Region. Emergency plumbing, gas fitting, drainage, hot water & more. Call 0413 776 437.",
  keywords: [
    "plumber illawarra",
    "plumber corrimal",
    "plumber wollongong",
    "emergency plumber illawarra",
    "gas fitter illawarra",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: business.name,
    title: `${business.name} | Local Plumber Illawarra`,
    description:
      "Licensed local plumber servicing Corrimal, Wollongong and the Illawarra Region. Emergency plumbing, gas fitting, drainage, hot water & more.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-body text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <HideOnHome>
          <CtaBand />
        </HideOnHome>
        <Footer />
        <CallNowButton />
      </body>
    </html>
  );
}
