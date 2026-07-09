"use client";

import { motion } from "framer-motion";
import { Tag, BookOpen, FolderOpen, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const ARTICOLI = [
  {
    icon: Tag,
    categoria: "Agevolazioni contributive",
    colore: "#0F4C5C",
    titolo: "Agevolazioni contributive",
    desc: "Guide e aggiornamenti su bonus assunzioni, incentivi giovani, donne, ZES e decontribuzioni. Analisi dei requisiti e istruzioni operative per l'accesso.",
  },
  {
    icon: BookOpen,
    categoria: "Contratti di lavoro",
    colore: "#2563EB",
    titolo: "Contratti e rapporti di lavoro",
    desc: "Approfondimenti su assunzioni, trasformazioni, cessazioni, contratti individuali e CCNL. Tutto ciò che serve per gestire correttamente il rapporto di lavoro.",
  },
  {
    icon: FolderOpen,
    categoria: "Amministrazione del personale",
    colore: "#0F4C5C",
    titolo: "Amministrazione del personale",
    desc: "Indicazioni operative su cedolini, adempimenti, scadenze, comunicazioni e gestione documentale per un'amministrazione efficiente e conforme.",
  },
];

export function ApprofondimentiClient() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F7F9FC" }}>
      <div className="mx-auto max-w-6xl px-6">

        {/* Intestazione */}
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
            Approfondimenti
          </span>
          <h2
            className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
          >
            Approfondimenti e guide operative
          </h2>
          <p
            className="text-base leading-relaxed md:text-lg"
            style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
          >
            Aggiornamenti chiari e strumenti pratici per orientarsi tra novità normative, incentivi e gestione del personale.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ARTICOLI.map(({ icon: Icon, categoria, colore, titolo, desc }) => (
            <motion.article
              key={titolo}
              variants={item}
              className="group flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300"
              style={{
                borderColor: "#E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(0,0,0,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = `${colore}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
              }}
            >
              {/* Categoria tag + icona */}
              <div className="mb-5 flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${colore}12` }}
                >
                  <Icon className="size-4" style={{ color: colore }} strokeWidth={1.8} />
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                  style={{
                    color: colore,
                    background: `${colore}10`,
                  }}
                >
                  {categoria}
                </span>
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
                className="mb-6 flex-1 text-sm leading-relaxed"
                style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
              >
                {desc}
              </p>

              {/* Link "Esplora" */}
              <div
                className="flex items-center gap-1.5 text-sm font-semibold transition-gap duration-200"
                style={{ color: colore, fontFamily: "var(--font-hero-manrope)" }}
              >
                Esplora
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA finale centrata */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex justify-center"
        >
          <a
            href="/approfondimenti"
            className="inline-flex items-center gap-2 rounded-xl border bg-white px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              borderColor: "#2563EB",
              color: "#2563EB",
              fontFamily: "var(--font-hero-manrope)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#EFF6FF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF";
            }}
          >
            Vai agli approfondimenti
            <ArrowRight className="size-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
