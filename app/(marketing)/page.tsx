import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { SezioniWrapper } from "@/components/sezioni-wrapper";
import { PortaleSection } from "@/components/portale-section";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://studiopelati.it";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Numeri dello Studio + Aree di competenza */}
      <SezioniWrapper />

      {/* Portale Aziende */}
      <PortaleSection />

      {/* CTA finale */}
      <section className="border-t border-[var(--border)] bg-brand-950">
        <div className="mx-auto max-w-5xl px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Inizia a lavorare con noi</h2>
            <p className="text-sm text-brand-300">Contattaci per una prima consulenza senza impegno.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contatti"
              className="rounded-lg bg-white text-brand-900 px-6 py-3 text-sm font-semibold hover:bg-brand-50 transition-colors"
            >
              Richiedi un contatto
            </Link>
            <a
              href={PORTAL_URL}
              className="rounded-lg border border-brand-600 text-white px-6 py-3 text-sm font-semibold hover:bg-brand-900 transition-colors"
            >
              Portale Aziende →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
