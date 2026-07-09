"use client";

import { motion } from "framer-motion";
import { FileText, Briefcase, Percent, Shield } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const AREE = [
  {
    icon: FileText,
    titolo: "Amministrazione del personale",
    desc: "Cedolini paga, assunzioni, cessazioni, presenze, F24, CU, 770 e adempimenti periodici.",
    colore: "#0F4C5C",
  },
  {
    icon: Briefcase,
    titolo: "Consulenza del lavoro",
    desc: "Contrattualistica, inquadramenti, costo del lavoro, procedure disciplinari e supporto specialistico.",
    colore: "#2563EB",
  },
  {
    icon: Percent,
    titolo: "Agevolazioni contributive",
    desc: "Analisi preventiva dei requisiti, bonus assunzioni, incentivi giovani, donne, ZES e verifica della spettanza.",
    colore: "#0F4C5C",
  },
  {
    icon: Shield,
    titolo: "Ammortizzatori sociali",
    desc: "CIGO, FIS, CIGS, contratti di solidarietà e gestione delle pratiche con gli enti.",
    colore: "#2563EB",
  },
];

export function CompetenzeClient() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F7F9FC" }}>
      <div className="mx-auto max-w-6xl px-6">

        {/* Intestazione centrata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-14 max-w-2xl"
        >
          <span
            className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#0F4C5C", fontFamily: "var(--font-hero-manrope)" }}
          >
            <span className="h-px w-5 shrink-0" style={{ background: "#C9A227" }} />
            Aree di competenza
          </span>
          <h2
            className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
          >
            Tutto ciò che serve per gestire il personale della tua impresa
          </h2>
          <p
            className="text-base leading-relaxed md:text-lg"
            style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
          >
            Dall&apos;amministrazione quotidiana alla consulenza strategica, affianchiamo l&apos;azienda in ogni fase del rapporto di lavoro.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {AREE.map(({ icon: Icon, titolo, desc, colore }) => (
            <motion.div
              key={titolo}
              variants={item}
              className="group flex flex-col rounded-2xl border border-transparent bg-white p-6 transition-all duration-300"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 32px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Icona */}
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                style={{ background: `${colore}12` }}
              >
                <Icon
                  className="size-6 transition-colors duration-300"
                  style={{ color: colore }}
                  strokeWidth={1.7}
                />
              </div>

              {/* Titolo */}
              <p
                className="mb-3 text-base font-bold leading-snug"
                style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
              >
                {titolo}
              </p>

              {/* Descrizione */}
              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
              >
                {desc}
              </p>

              {/* Freccia discreta */}
              <div
                className="mt-5 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ color: colore, fontFamily: "var(--font-hero-manrope)" }}
              >
                Scopri di più →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
