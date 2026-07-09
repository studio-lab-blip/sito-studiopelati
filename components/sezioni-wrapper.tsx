import { Manrope, Inter } from "next/font/google";
import { NumeriClient } from "./numeri-client";
import { CompetenzeClient } from "./competenze-client";

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

export function SezioniWrapper() {
  return (
    <div className={`${manrope.variable} ${inter.variable}`}>
      <NumeriClient />
      <CompetenzeClient />
    </div>
  );
}
