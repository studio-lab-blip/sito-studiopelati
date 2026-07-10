"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, FileText, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const CHECKS = [
  "Amministrazione del personale",
  "Consulenza specialistica",
  "Agevolazioni contributive",
  "Portale digitale per le aziende",
];

const STATS = [
  { icon: Users,     val: "12", label: "Dipendenti", color: "#0F4C5C" },
  { icon: FileText,  val: "3",  label: "Pratiche",   color: "#2563EB" },
  { icon: Building2, val: "2",  label: "Sedi",       color: "#C9A227" },
];

const COMMS = [
  { name: "Mario Rossi",   type: "Assunzione",       dot: "#0F4C5C" },
  { name: "Luigi Bianchi", type: "Proroga contratto", dot: "#2563EB" },
  { name: "Anna Verdi",    type: "Cessazione",        dot: "#C9A227" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  } as const;
}

export function HeroClient({
  logoUrl,
  manropeVar,
  interVar,
}: {
  logoUrl: string | null;
  manropeVar: string;
  interVar: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${manropeVar} ${interVar}`}
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f7f9fc 60%, #eff6ff 100%)" }}
    >
      {/* Blob decorativi */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(15,76,92,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── SINISTRA ─────────────────────────────────── */}
          <div>
            {/* Etichetta */}
            <motion.div {...fadeUp(0)}>
              <span
                className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#0F4C5C", fontFamily: "var(--font-hero-manrope)" }}
              >
                <span className="h-px w-5 shrink-0" style={{ background: "#C9A227" }} />
                Consulenza del Lavoro
              </span>
            </motion.div>

            {/* Logo */}
            {logoUrl && (
              <motion.div {...fadeUp(0.08)} className="mb-6">
                <Image
                  src={logoUrl}
                  alt="Studio Pelati"
                  width={220}
                  height={76}
                  className="h-20 w-auto object-contain"
                  unoptimized
                />
              </motion.div>
            )}

            {/* Titolo principale */}
            <motion.h1
              {...fadeUp(0.14)}
              className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl"
              style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
            >
              Il partner strategico per la gestione del personale della tua impresa
            </motion.h1>

            {/* Sottotitolo */}
            <motion.p
              {...fadeUp(0.22)}
              className="mb-8 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
            >
              Affianchiamo aziende e professionisti con consulenza del lavoro, amministrazione del personale, agevolazioni contributive e strumenti digitali.
            </motion.p>

            {/* Checklist */}
            <motion.ul {...fadeUp(0.30)} className="mb-10 space-y-3">
              {CHECKS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                  style={{ color: "#1E293B", fontFamily: "var(--font-hero-inter)" }}
                >
                  <CheckCircle2 className="size-5 shrink-0" style={{ color: "#0F4C5C" }} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-3">
              <a
                href="/contatti"
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
                Prenota una consulenza
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </div>

          {/* ── DESTRA — mockup portale ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Blob sotto la card */}
              <div
                aria-hidden
                className="absolute -bottom-8 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full blur-2xl"
                style={{ background: "rgba(15,76,92,0.12)" }}
              />
              {/* Ornamento oro */}
              <div
                aria-hidden
                className="absolute -top-5 -right-5 h-16 w-16 rounded-full blur-xl"
                style={{ background: "rgba(201,162,39,0.18)" }}
              />

              {/* Card 3D */}
              <div
                className="relative w-[400px] overflow-hidden rounded-2xl border border-white/70"
                style={{
                  transform: "perspective(1100px) rotateY(-9deg) rotateX(3deg)",
                  boxShadow: "0 32px 80px rgba(15,76,92,0.22), 0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                {/* Header portale */}
                <div
                  className="flex items-center justify-between px-5 py-3.5"
                  style={{ background: "#0F4C5C" }}
                >
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

                {/* Body portale */}
                <div className="space-y-4 px-5 py-5" style={{ background: "#F7F9FC" }}>
                  {/* Saluto */}
                  <div>
                    <p className="text-[11px] font-medium" style={{ color: "#475569" }}>Buongiorno,</p>
                    <p className="text-sm font-bold" style={{ color: "#1E293B" }}>Azienda Rossi S.r.l.</p>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {STATS.map(({ icon: Icon, val, label, color }) => (
                      <div
                        key={label}
                        className="rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm"
                      >
                        <Icon className="mx-auto mb-1 size-4" style={{ color }} strokeWidth={1.8} />
                        <p className="text-base font-bold" style={{ color: "#1E293B" }}>{val}</p>
                        <p className="text-[10px]" style={{ color: "#475569" }}>{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Comunicazioni */}
                  <div>
                    <p
                      className="mb-2 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "#475569" }}
                    >
                      Comunicazioni recenti
                    </p>
                    <div className="space-y-2">
                      {COMMS.map(({ name, type, dot }) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2.5 shadow-sm"
                        >
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: dot }} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold" style={{ color: "#1E293B" }}>{name}</p>
                            <p className="text-[10px]" style={{ color: "#475569" }}>{type}</p>
                          </div>
                          <span className="shrink-0 text-[10px]" style={{ color: "#475569" }}>›</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA nel mockup */}
                  <div
                    className="rounded-lg py-2.5 text-center text-xs font-semibold text-white"
                    style={{ background: "#2563EB" }}
                  >
                    + Nuova comunicazione
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
