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

const NAV_LINKS = [
  { href: "/lo-studio",       label: "Lo Studio" },
  { href: "/servizi",         label: "Servizi" },
  { href: "/clienti",         label: "Area clienti" },
  { href: "/approfondimenti", label: "Approfondimenti" },
  { href: "/contatti",        label: "Contatti" },
];

const SERVIZI = [
  "Amministrazione del personale",
  "Consulenza del lavoro",
  "Agevolazioni contributive",
  "Ammortizzatori sociali",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${manrope.variable} ${inter.variable} mt-auto`}
      style={{ background: "#1E293B" }}
    >
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:pt-16">

        {/* Griglia principale */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div
              className="mb-4 h-0.5 w-10 rounded-full"
              style={{ background: "#C9A227" }}
            />
            <p
              className="mb-1 text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-hero-manrope)" }}
            >
              Studio Pelati
            </p>
            <p
              className="mb-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#C9A227", fontFamily: "var(--font-hero-manrope)" }}
            >
              Consulenza del Lavoro
            </p>
            <p
              className="mb-3 mt-3 text-sm leading-relaxed text-white/60"
              style={{ fontFamily: "var(--font-hero-inter)" }}
            >
              Dott. Rag. Piergiorgio Pelati<br />
              Consulente del Lavoro · Ragioniere Commercialista
            </p>
            <p
              className="text-xs leading-relaxed text-white/35"
              style={{ fontFamily: "var(--font-hero-inter)" }}
            >
              In sinergia con Studio Pelati snc<br />
              Centro elaborazione dati e servizi alle imprese
            </p>
          </div>

          {/* Col 2 — Navigazione */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/35"
              style={{ fontFamily: "var(--font-hero-manrope)" }}
            >
              Navigazione
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                    style={{ fontFamily: "var(--font-hero-inter)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Servizi */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/35"
              style={{ fontFamily: "var(--font-hero-manrope)" }}
            >
              Servizi
            </p>
            <ul className="space-y-2.5">
              {SERVIZI.map((s) => (
                <li key={s}>
                  <Link
                    href="/servizi"
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                    style={{ fontFamily: "var(--font-hero-inter)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contatti */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/35"
              style={{ fontFamily: "var(--font-hero-manrope)" }}
            >
              Contatti
            </p>
            <ul className="mb-5 space-y-2.5">
              <li
                className="text-sm leading-relaxed text-white/60"
                style={{ fontFamily: "var(--font-hero-inter)" }}
              >
                Via Santissima Trinità 19 (scala C)<br />
                25124 Brescia (BS)
              </li>
              <li>
                <a
                  href="tel:+390307000841"
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  style={{ fontFamily: "var(--font-hero-inter)" }}
                >
                  +39 030 7000841
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@studiopelati.it"
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  style={{ fontFamily: "var(--font-hero-inter)" }}
                >
                  info@studiopelati.it
                </a>
              </li>
            </ul>

            <a
              href={PORTAL_URL}
              className="inline-flex items-center rounded-xl border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10"
              style={{ fontFamily: "var(--font-hero-manrope)" }}
            >
              Portale Aziende →
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <span
            className="text-xs text-white/35"
            style={{ fontFamily: "var(--font-hero-inter)" }}
          >
            © {year} Studio Pelati — P.IVA 00362840985 — Tutti i diritti riservati
          </span>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
              style={{ fontFamily: "var(--font-hero-inter)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
              style={{ fontFamily: "var(--font-hero-inter)" }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
