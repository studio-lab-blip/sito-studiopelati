import { Manrope, Inter } from "next/font/google";
import Link from "next/link";

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

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

export function CtaSection() {
  return (
    <div className={`${manrope.variable} ${inter.variable}`}>
      <section style={{ background: "#0F4C5C" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            {/* Testo */}
            <div className="max-w-xl">
              {/* Badge label */}
              <span
                className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#C9A227", fontFamily: "var(--font-hero-manrope)" }}
              >
                <span className="h-px w-5 shrink-0 opacity-60" style={{ background: "#C9A227" }} />
                Studio Pelati
              </span>

              <h2
                className="mb-3 text-3xl font-bold leading-tight md:text-4xl"
                style={{ color: "#FFFFFF", fontFamily: "var(--font-hero-manrope)" }}
              >
                Inizia a lavorare con noi
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-hero-inter)" }}
              >
                Contattaci per una prima consulenza senza impegno.<br className="hidden sm:block" />
                Ti accompagniamo in ogni decisione legata al personale della tua impresa.
              </p>
            </div>

            {/* Bottoni */}
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contatti"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "#FFFFFF",
                  color: "#0F4C5C",
                  fontFamily: "var(--font-hero-manrope)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                Richiedi un contatto
              </Link>
              <a
                href={PORTAL_URL}
                className="inline-flex items-center rounded-xl border px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.40)",
                  fontFamily: "var(--font-hero-manrope)",
                }}
              >
                Accedi al Portale →
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
