import { Manrope, Inter } from "next/font/google";
import { HeroClient } from "./hero-client";

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

async function fetchLogoUrl(): Promise<string | null> {
  try {
    const base = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";
    const res = await fetch(`${base}/api/public/studio`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    return (data as { logo_url?: string | null }).logo_url ?? null;
  } catch {
    return null;
  }
}

export async function HeroSection() {
  const logoUrl = await fetchLogoUrl();

  return (
    <HeroClient
      logoUrl={logoUrl}
      manropeVar={manrope.variable}
      interVar={inter.variable}
    />
  );
}
