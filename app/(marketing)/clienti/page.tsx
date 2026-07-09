const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const passi = [
  { n: "1", titolo: "Accedi al portale", desc: "Usa le credenziali fornite dallo studio per entrare nella tua area riservata." },
  { n: "2", titolo: "Compila la pratica", desc: "Inserisci i dati del nuovo dipendente guidato dal form passo per passo." },
  { n: "3", titolo: "Invia allo studio", desc: "La comunicazione viene trasmessa allo studio che gestirà gli adempimenti obbligatori." },
];

const faq = [
  {
    domanda: "Non ho ancora le credenziali di accesso.",
    risposta: "Contatta lo studio: ti invieremo un link di attivazione via email per impostare la tua password.",
  },
  {
    domanda: "Ho dimenticato la password.",
    risposta: `Dalla pagina di accesso usa il link "Password dimenticata?" per ricevere un'email di reset.`,
  },
  {
    domanda: "A cosa serve il portale?",
    risposta: "Il portale ti permette di inviare le comunicazioni di assunzione direttamente allo studio in modo semplice e sicuro, senza doversi recare fisicamente in ufficio.",
  },
];

export default function ClientiPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">Area clienti</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight">
        Il tuo portale riservato
      </h1>
      <p className="text-[var(--fg-sub)] max-w-xl mb-10">
        Accedi alla tua area riservata per gestire le pratiche di assunzione e comunicare con lo studio in modo semplice e sicuro.
      </p>

      {/* CTA principali */}
      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href={PORTAL_URL}
          className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
        >
          Accedi al portale
        </a>
        <a
          href={`${PORTAL_URL}/comunicazione`}
          className="rounded-lg border border-brand-700 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
        >
          Nuova comunicazione di assunzione →
        </a>
      </div>

      {/* Come funziona */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-8">Come funziona</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {passi.map(({ n, titolo, desc }) => (
            <div key={n} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-700 text-white text-sm font-bold flex items-center justify-center">
                {n}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--fg)] mb-1">{titolo}</h3>
                <p className="text-sm text-[var(--fg-sub)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-6">Domande frequenti</h2>
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {faq.map(({ domanda, risposta }) => (
            <div key={domanda} className="py-5">
              <h3 className="font-medium text-[var(--fg)] mb-1">{domanda}</h3>
              <p className="text-sm text-[var(--fg-sub)]">{risposta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contatti */}
      <div className="rounded-xl border border-[var(--border)] p-6 bg-brand-50/30">
        <h2 className="font-semibold text-[var(--fg)] mb-1">Hai bisogno di assistenza?</h2>
        <p className="text-sm text-[var(--fg-sub)] mb-4">
          Per problemi di accesso o per richiedere le credenziali, contatta direttamente lo studio.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="mailto:info@studiopelati.it" className="text-brand-700 hover:underline">📧 info@studiopelati.it</a>
          <a href="tel:+390307000841" className="text-brand-700 hover:underline">📞 +39 030 7000841</a>
        </div>
      </div>
    </div>
  );
}
