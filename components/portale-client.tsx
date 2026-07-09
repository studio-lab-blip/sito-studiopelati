"use client";

import { motion } from "framer-motion";
import { UserPlus, Upload, Activity, MessageSquare, ShieldCheck, ArrowRight, LogIn } from "lucide-react";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const ease = [0.22, 1, 0.36, 1] as const;

const BENEFITS = [
  { icon: UserPlus,      testo: "Richieste di assunzione guidate" },
  { icon: Upload,        testo: "Invio documentazione" },
  { icon: Activity,      testo: "Monitoraggio delle pratiche" },
  { icon: MessageSquare, testo: "Comunicazioni rapide" },
  { icon: ShieldCheck,   testo: "Riduzione degli errori" },
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

/* ── Mockup portale (form wizard) ─────────────────────── */
function PortaleMockup() {
  return (
    <div
      className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/60"
      style={{
        transform: "perspective(1100px) rotateY(-9deg) rotateX(3deg)",
        boxShadow: "0 32px 80px rgba(15,76,92,0.20), 0 8px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{ background: "#0F4C5C" }}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: "#C9A227" }} />
          <span className="text-xs font-semibold tracking-wide text-white">Portale Aziende</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-5 space-y-4" style={{ background: "#F7F9FC" }}>
        {/* Titolo form */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#475569" }}>
            Nuova comunicazione
          </p>
          <p className="text-sm font-bold" style={{ color: "#1E293B" }}>Comunicazione di assunzione</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0">
          {["Anagrafica", "Contratto", "Invio"].map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    background: i === 0 ? "#2563EB" : "white",
                    color:      i === 0 ? "white"   : "#94A3B8",
                    border:     i === 0 ? "none"     : "1.5px solid #CBD5E1",
                  }}
                >
                  {i + 1}
                </div>
                <span className="text-[9px] font-medium" style={{ color: i === 0 ? "#2563EB" : "#94A3B8" }}>
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className="mb-4 h-px w-10 shrink-0"
                  style={{ background: i === 0 ? "#2563EB" : "#CBD5E1" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
          {[
            { label: "Nome dipendente",  value: "Mario Rossi",           isSelect: false },
            { label: "Tipo contratto",   value: "Tempo indeterminato",   isSelect: true  },
            { label: "Data inizio",      value: "01/09/2025",            isSelect: false },
          ].map(({ label, value, isSelect }) => (
            <div key={label}>
              <p className="mb-1 text-[10px] font-semibold" style={{ color: "#475569" }}>{label}</p>
              <div
                className="flex items-center justify-between rounded-lg border px-3 py-2"
                style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}
              >
                <span className="text-xs font-medium" style={{ color: "#1E293B" }}>{value}</span>
                {isSelect && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA nel mockup */}
        <div
          className="flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-semibold text-white"
          style={{ background: "#2563EB" }}
        >
          Continua
          <ArrowRight className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

/* ── Componente principale ────────────────────────────── */
export function PortaleClient() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #f0f9ff 55%, #eff6ff 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── SINISTRA: testo ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Badge */}
            <span
              className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#0F4C5C", fontFamily: "var(--font-hero-manrope)" }}
            >
              <span className="h-px w-5 shrink-0" style={{ background: "#C9A227" }} />
              Portale Aziende
            </span>

            {/* Titolo */}
            <h2
              className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
              style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
            >
              Il tuo ufficio del personale, sempre online
            </h2>

            {/* Sottotitolo */}
            <p
              className="mb-8 text-base leading-relaxed md:text-lg"
              style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
            >
              Con il Portale Aziende puoi richiedere assunzioni, trasmettere documenti, seguire le pratiche e dialogare con lo Studio in modo semplice e sicuro.
            </p>

            {/* Benefit list */}
            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mb-10 space-y-3"
            >
              {BENEFITS.map(({ icon: Icon, testo }) => (
                <motion.li
                  key={testo}
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(15,76,92,0.08)" }}
                  >
                    <Icon className="size-4" style={{ color: "#0F4C5C" }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#1E293B", fontFamily: "var(--font-hero-inter)" }}
                  >
                    {testo}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={PORTAL_URL}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.28)",
                  fontFamily: "var(--font-hero-manrope)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1D4ED8";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.36)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#2563EB";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(37,99,235,0.28)";
                }}
              >
                <LogIn className="size-4" />
                Accedi al Portale
              </a>
              <a
                href="/clienti"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-[#EFF6FF]"
                style={{
                  borderColor: "#2563EB",
                  color: "#2563EB",
                  fontFamily: "var(--font-hero-manrope)",
                }}
              >
                Scopri come funziona
              </a>
            </motion.div>
          </motion.div>

          {/* ── DESTRA: mockup ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Blob decorativi */}
              <div
                aria-hidden
                className="absolute -bottom-10 left-1/2 h-28 w-80 -translate-x-1/2 rounded-full blur-2xl"
                style={{ background: "rgba(15,76,92,0.10)" }}
              />
              <div
                aria-hidden
                className="absolute -top-6 -right-6 h-20 w-20 rounded-full blur-xl"
                style={{ background: "rgba(201,162,39,0.15)" }}
              />
              <PortaleMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
