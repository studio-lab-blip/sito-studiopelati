export default function LoStudioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-medium text-brand-700 mb-3 uppercase tracking-wide">Lo Studio</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6 max-w-2xl leading-tight">
        {/* Placeholder — da sostituire con titolo definitivo */}
        Chi siamo
      </h1>

      {/* Presentazione — da completare con contenuto reale */}
      <div className="grid md:grid-cols-3 gap-12 mt-10">
        <div className="md:col-span-2 space-y-5 text-[var(--fg-sub)]">
          <p>
            {/* Placeholder storia */}
            Studio Pelati nasce con l&apos;obiettivo di offrire alle imprese un punto di riferimento solido e continuativo per tutte le questioni legate al lavoro e alle risorse umane.
          </p>
          <p>
            {/* Placeholder approccio */}
            Il nostro approccio è basato sulla vicinanza al cliente, sulla puntualità negli adempimenti e sull&apos;aggiornamento costante rispetto all&apos;evoluzione normativa.
          </p>
        </div>

        {/* Dati numerici — placeholder */}
        <div className="flex flex-col gap-6">
          {[
            { valore: "—", label: "Anni di attività" },
            { valore: "—", label: "Clienti assistiti" },
            { valore: "—", label: "Settori serviti" },
          ].map(({ valore, label }) => (
            <div key={label} className="border-l-2 border-brand-700 pl-4">
              <div className="text-2xl font-bold text-[var(--fg)]">{valore}</div>
              <div className="text-sm text-[var(--fg-sub)]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team — placeholder */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-8">Il team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Aggiungere membri del team */}
          <div className="rounded-xl border border-[var(--border)] p-6 text-center text-sm text-[var(--fg-sub)]">
            Da completare
          </div>
        </div>
      </div>
    </div>
  );
}
