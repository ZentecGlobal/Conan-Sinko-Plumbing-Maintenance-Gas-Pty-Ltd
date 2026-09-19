import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallNowButton from "@/components/CallNowButton";
import { business } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-body text-ink">
        <Header />
        <main className="flex-1 pb-24">{children}</main>
        <Footer />
        <CallNowButton />
      </body>
    </html>
  );
}
