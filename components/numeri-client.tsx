"use client";

import { motion } from "framer-motion";
import { Clock, UserCheck, BookOpen, Monitor } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const STATS = [
  {
    tipo: "numero",
    valore: "60+",
    titolo: "Anni di esperienza",
    desc: "Una storia professionale che garantisce solidità, continuità e profonda conoscenza del diritto del lavoro.",
    icon: Clock,
  },
  {
    tipo: "icona",
    valore: null,
    titolo: "Consulenza personalizzata",
    desc: "Ogni cliente riceve un'assistenza su misura, pensata per le specifiche esigenze della propria realtà aziendale.",
    icon: UserCheck,
  },
  {
    tipo: "icona",
    valore: null,
    titolo: "Normativa sempre aggiornata",
    desc: "Monitoraggio costante delle circolari ministeriali, prassi amministrative e rinnovi contrattuali.",
    icon: BookOpen,
  },
  {
    tipo: "icona",
    valore: null,
    titolo: "Strumenti digitali dedicati",
    desc: "Il Portale Aziende semplifica le comunicazioni obbligatorie e la gestione quotidiana del personale.",
    icon: Monitor,
  },
];

export function NumeriClient() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-14 text-center"
        >
          <span
            className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#0F4C5C", fontFamily: "var(--font-hero-manrope)" }}
          >
            <span className="h-px w-5 shrink-0" style={{ background: "#C9A227" }} />
            Chi siamo
            <span className="h-px w-5 shrink-0" style={{ background: "#C9A227" }} />
          </span>
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
          >
            Lo studio in numeri
          </h2>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map(({ tipo, valore, titolo, desc, icon: Icon }) => (
            <motion.div
              key={titolo}
              variants={item}
              className="flex flex-col rounded-2xl border bg-white p-6"
              style={{
                borderColor: "#E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Accent bar oro */}
              <div
                className="mb-5 h-0.5 w-10 rounded-full"
                style={{ background: "#C9A227" }}
              />

              {/* Numero grande o icona */}
              {tipo === "numero" && valore ? (
                <p
                  className="mb-4 text-5xl font-bold leading-none"
                  style={{ color: "#0F4C5C", fontFamily: "var(--font-hero-manrope)" }}
                >
                  {valore}
                </p>
              ) : (
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "rgba(15,76,92,0.08)" }}
                >
                  <Icon className="size-5" style={{ color: "#0F4C5C" }} strokeWidth={1.8} />
                </div>
              )}

              {/* Titolo */}
              <p
                className="mb-2 text-base font-bold"
                style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
              >
                {titolo}
              </p>

              {/* Descrizione */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
