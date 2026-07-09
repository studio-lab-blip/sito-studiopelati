import { Manrope, Inter } from "next/font/google";
import { PercheClient } from "./perche-client";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-hero-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hero-inter",
  display: "swap",
});

export function PercheSection() {
  return (
    <div className={`${manrope.variable} ${inter.variable}`}>
      <PercheClient />
    </div>
  );
}
