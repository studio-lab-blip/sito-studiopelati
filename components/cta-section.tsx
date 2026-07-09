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
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a3040 0%, #0F4C5C 45%, #0d5a6e 100%)",
        }}
      >
        {/* Forme decorative di sfondo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(201,162,39,0.09)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.12)" }}
        />
        {/* Cerchio decorativo centrale trasparente */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[600px] w-[600px] rounded-full border"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[900px] w-[900px] rounded-full border"
            style={{ borderColor: "rgba(255,255,255,0.025)" }}
          />
        </div>

        {/* Contenuto centrato */}
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">

          {/* Badge */}
          <span
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#C9A227", fontFamily: "var(--font-hero-manrope)" }}
          >
            <span className="h-px w-5 shrink-0 opacity-70" style={{ background: "#C9A227" }} />
            Studio Pelati
            <span className="h-px w-5 shrink-0 opacity-70" style={{ background: "#C9A227" }} />
          </span>

          {/* Titolo grande */}
          <h2
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-hero-manrope)" }}
          >
            Inizia a lavorare con noi
          </h2>

          {/* Testo motivazionale */}
          <p
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.70)", fontFamily: "var(--font-hero-inter)" }}
          >
            Contattaci per una prima consulenza senza impegno.<br />
            Ti accompagniamo in ogni decisione legata al personale della tua impresa.
          </p>

          {/* CTA buttons centrati */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#FFFFFF",
                color: "#0F4C5C",
                fontFamily: "var(--font-hero-manrope)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.20)",
              }}
            >
              Richiedi un contatto
            </Link>
            <a
              href={PORTAL_URL}
              className="inline-flex items-center rounded-xl border px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                fontFamily: "var(--font-hero-manrope)",
              }}
            >
              Accedi al Portale →
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
