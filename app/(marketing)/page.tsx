import Link from "next/link";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const serviziEvidenza = [
  { titolo: "Consulenza del lavoro", desc: "Assistenza contrattuale e normativa per le imprese." },
  { titolo: "Comunicazioni di assunzione", desc: "Gestione digitale delle pratiche di assunzione." },
  { titolo: "Gestione paghe", desc: "Elaborazione buste paga e adempimenti contributivi." },
  { titolo: "Sicurezza sul lavoro", desc: "Supporto agli obblighi in materia di salute e sicurezza." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium text-brand-700 mb-4 tracking-wide uppercase">Consulenza del lavoro</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] leading-tight mb-6 max-w-2xl">
          {/* Placeholder — da sostituire con headline definitiva */}
          Il tuo studio di riferimento per il lavoro e le risorse umane
        </h1>
        <p className="text-lg text-[var(--fg-sub)] max-w-xl mb-10">
          {/* Placeholder — da sostituire con sottotitolo definitivo */}
          Assistiamo le imprese nella gestione del personale, dagli adempimenti contrattuali alle comunicazioni obbligatorie.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={PORTAL_URL}
            className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Accedi al portale clienti
          </a>
          <Link
            href="/servizi"
            className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--fg)] hover:border-brand-700 hover:text-brand-700 transition-colors"
          >
            Scopri i servizi
          </Link>
        </div>
      </section>

      {/* Servizi in evidenza */}
      <section className="border-t border-[var(--border)] bg-brand-50/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-semibold text-[var(--fg)] mb-8">Cosa facciamo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviziEvidenza.map(({ titolo, desc }) => (
              <div key={titolo} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
                <div className="w-8 h-1 rounded-full bg-brand-700 mb-4" />
                <h3 className="font-semibold text-[var(--fg)] mb-2">{titolo}</h3>
                <p className="text-sm text-[var(--fg-sub)]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/servizi" className="text-sm font-medium text-brand-700 hover:underline">
              Tutti i servizi →
            </Link>
          </div>
        </div>
      </section>

      {/* Chi siamo — anteprima */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-brand-700 mb-3 uppercase tracking-wide">Lo Studio</p>
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">
              {/* Placeholder */}
              Professionalità e attenzione al cliente dal —
            </h2>
            <p className="text-[var(--fg-sub)] mb-6">
              {/* Placeholder — da sostituire con presentazione reale */}
              Studio Pelati affianca le imprese con competenza e continuità, offrendo un servizio personalizzato su ogni esigenza lavorativa e previdenziale.
            </p>
            <Link href="/lo-studio" className="text-sm font-medium text-brand-700 hover:underline">
              Scopri lo studio →
            </Link>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-brand-50/30 h-56 flex items-center justify-center text-sm text-[var(--fg-sub)]">
            {/* Spazio per immagine o elemento grafico */}
            —
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--fg)] mb-1">Sei già cliente?</h2>
            <p className="text-sm text-[var(--fg-sub)]">Accedi al portale per gestire le pratiche di assunzione.</p>
          </div>
          <a
            href={PORTAL_URL}
            className="shrink-0 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Accedi al portale →
          </a>
        </div>
      </section>
    </>
  );
}
