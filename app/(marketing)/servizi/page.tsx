/* Contenuto placeholder — da completare con i servizi reali dello studio */
const servizi = [
  {
    titolo: "Consulenza del lavoro",
    desc: "Da completare con la descrizione del servizio.",
  },
  {
    titolo: "Comunicazioni di assunzione",
    desc: "Gestione digitale delle comunicazioni obbligatorie di assunzione tramite il portale dedicato.",
  },
  {
    titolo: "Elaborazione paghe",
    desc: "Da completare con la descrizione del servizio.",
  },
  {
    titolo: "Gestione previdenziale",
    desc: "Da completare con la descrizione del servizio.",
  },
  {
    titolo: "Sicurezza sul lavoro",
    desc: "Da completare con la descrizione del servizio.",
  },
  {
    titolo: "Contrattualistica",
    desc: "Da completare con la descrizione del servizio.",
  },
];

export default function ServiziPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium text-brand-700 mb-3 uppercase tracking-wide">Servizi</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight">
        Cosa offriamo
      </h1>
      <p className="text-[var(--fg-sub)] max-w-xl mb-12">
        {/* Placeholder — da completare */}
        Un supporto completo e personalizzato per tutte le esigenze legate alla gestione del personale.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {servizi.map(({ titolo, desc }) => (
          <div key={titolo} className="rounded-xl border border-[var(--border)] p-6">
            <div className="w-6 h-1 rounded-full bg-brand-700 mb-4" />
            <h2 className="font-semibold text-[var(--fg)] mb-2">{titolo}</h2>
            <p className="text-sm text-[var(--fg-sub)]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
