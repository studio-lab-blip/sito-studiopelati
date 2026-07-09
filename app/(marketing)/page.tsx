import Link from "next/link";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://studiopelati.it";

const puntiForza = [
  { titolo: "Oltre 60 anni di esperienza", desc: "Una storia professionale lunga che garantisce solidità, continuità e profonda conoscenza del diritto del lavoro." },
  { titolo: "Consulenza personalizzata", desc: "Ogni cliente riceve un'assistenza su misura, pensata per le specifiche esigenze della propria realtà aziendale." },
  { titolo: "Elaborazione paghe e amministrazione", desc: "Un servizio rapido, efficiente e puntuale per la gestione completa del personale dipendente e parasubordinato." },
  { titolo: "Portale digitale per le aziende", desc: "Strumenti digitali evoluti per semplificare le comunicazioni obbligatorie e la gestione quotidiana del personale." },
];

const clienti = [
  "Piccole e medie imprese",
  "Grandi aziende",
  "Professionisti",
  "Start-up",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold text-brand-700 mb-5 tracking-widest uppercase">
          Studio Pelati — Consulenza del Lavoro
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] leading-tight mb-6 max-w-3xl">
          Consulenza del Lavoro · Amministrazione del Personale · Servizi alle Imprese
        </h1>
        <p className="text-lg text-[var(--fg-sub)] max-w-2xl mb-4">
          Competenza, innovazione e strumenti digitali per semplificare la gestione del lavoro e i rapporti con le aziende.
        </p>
        <p className="text-base text-[var(--fg-sub)] max-w-2xl mb-10">
          Da oltre sessant&apos;anni affianchiamo imprese, professionisti ed enti nella gestione del lavoro, offrendo consulenza specialistica, elaborazione paghe e soluzioni organizzative orientate all&apos;efficienza, alla conformità normativa e alla crescita aziendale.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contatti"
            className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Richiedi un contatto
          </Link>
          <a
            href={PORTAL_URL}
            className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--fg)] hover:border-brand-700 hover:text-brand-700 transition-colors"
          >
            Accedi al Portale Aziende
          </a>
        </div>
      </section>

      {/* Punti di forza */}
      <section className="border-t border-[var(--border)] bg-brand-50/30">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">I nostri punti di forza</h2>
          <p className="text-sm text-[var(--fg-sub)] mb-10">
            Aggiornamento normativo costante e collaborazione con professionisti specializzati.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {puntiForza.map(({ titolo, desc }) => (
              <div key={titolo} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                <div className="w-8 h-1 rounded-full bg-brand-700 mb-4" />
                <h3 className="font-semibold text-[var(--fg)] mb-2 text-sm">{titolo}</h3>
                <p className="text-sm text-[var(--fg-sub)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il metodo — anteprima */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">Il metodo</p>
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">
              Un&apos;analisi approfondita prima di ogni scelta
            </h2>
            <p className="text-[var(--fg-sub)] mb-6">
              Ogni attività svolta dallo Studio è preceduta da un&apos;approfondita analisi della normativa vigente, della prassi amministrativa e del contratto collettivo nazionale di lavoro più idoneo, al fine di individuare le soluzioni giuridiche ed economiche più vantaggiose per l&apos;azienda.
            </p>
            <Link href="/lo-studio" className="text-sm font-semibold text-brand-700 hover:underline">
              Scopri lo studio e il nostro metodo →
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">A chi ci rivolgiamo</p>
            <p className="text-[var(--fg-sub)] mb-5">Assistiamo realtà di ogni dimensione e settore:</p>
            <ul className="space-y-3">
              {clienti.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[var(--fg)]">
                  <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
