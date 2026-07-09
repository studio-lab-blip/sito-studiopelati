import { Manrope, Inter } from "next/font/google";
import { PortaleClient } from "./portale-client";

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

export function PortaleSection() {
  return (
    <div className={`${manrope.variable} ${inter.variable}`}>
      <PortaleClient />
    </div>
  );
}
