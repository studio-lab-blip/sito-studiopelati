"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Zap, Headphones } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const RAGIONI = [
  {
    numero: "01",
    icon: Award,
    titolo: "Esperienza consolidata",
    desc: "Oltre sessant'anni di attività al servizio delle imprese: una storia professionale che si traduce in solidità, continuità e profonda conoscenza del diritto del lavoro.",
  },
  {
    numero: "02",
    icon: Lightbulb,
    titolo: "Approccio consulenziale",
    desc: "Ogni scelta viene valutata sotto il profilo normativo, economico e organizzativo, per individuare la soluzione più vantaggiosa per la specifica realtà aziendale.",
  },
  {
    numero: "03",
    icon: Zap,
    titolo: "Innovazione digitale",
    desc: "Strumenti online per semplificare richieste, documenti e comunicazioni: il Portale Aziende è il punto di accesso diretto allo Studio, disponibile h24.",
  },
  {
    numero: "04",
    icon: Headphones,
    titolo: "Assistenza diretta",
    desc: "Un interlocutore competente per la gestione completa del personale: assunzioni, cessazioni, adempimenti periodici e consulenza specialistica in un unico riferimento.",
  },
];

export function PercheClient() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Elemento decorativo centrale — blob molto discreto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(15,76,92,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

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
            Studio Pelati
          </span>
          <h2
            className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "#1E293B", fontFamily: "var(--font-hero-manrope)" }}
          >
            Perché scegliere Studio Pelati
          </h2>
          <p
            className="text-base leading-relaxed md:text-lg"
            style={{ color: "#475569", fontFamily: "var(--font-hero-inter)" }}
          >
            Un approccio consulenziale, digitale e personalizzato per accompagnare l&apos;impresa in ogni decisione legata al personale.
          </p>
        </motion.div>

        {/* Grid 2×2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2"
        >
          {RAGIONI.map(({ numero, icon: Icon, titolo, desc }) => (
            <motion.div
              key={numero}
              variants={item}
              className="group relative flex flex-col rounded-2xl border p-8 transition-all duration-300"
              style={{
                backgroundColor: "#f0fdf4",
                borderColor: "#166534",
                boxShadow: "0 2px 12px rgba(22,101,52,0.18)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 28px rgba(22,101,52,0.28)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#14532d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(22,101,52,0.18)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#166534";
              }}
            >
              {/* Badge numero + icona — affiancati */}
              <div className="mb-5 flex items-center gap-4">
                {/* Cerchio icona */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[rgba(15,76,92,0.12)]"
                  style={{ background: "rgba(15,76,92,0.07)" }}
                >
                  <Icon className="size-5" style={{ color: "#0F4C5C" }} strokeWidth={1.7} />
                </div>

                {/* Numero in oro */}
                <span
                  className="text-3xl font-bold leading-none"
                  style={{ color: "#C9A227", fontFamily: "var(--font-hero-manrope)", opacity: 0.7 }}
                >
                  {numero}
                </span>
              </div>

              {/* Titolo */}
              <p
                className="mb-3 text-lg font-bold leading-snug"
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

              {/* Accent bar oro in fondo, visibile solo su hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, #C9A227 0%, transparent 100%)" }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
