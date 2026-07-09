const puntiForza = [
  "Oltre 60 anni di esperienza",
  "Consulenza personalizzata",
  "Elaborazione paghe e amministrazione del personale",
  "Aggiornamento normativo costante",
  "Portale digitale per aziende e lavoratori",
  "Collaborazione con professionisti specializzati",
];

const metodo = [
  {
    titolo: "Inquadramento aziendale",
    testo:
      "Viene analizzato in ogni suo aspetto, dalla natura dell'attività esercitata alla valutazione dei rischi, fino al corretto inquadramento assicurativo INAIL dei lavoratori, considerando tutte le peculiarità delle lavorazioni, delle attività principali, accessorie e complementari.",
  },
  {
    titolo: "Tutela previdenziale di imprenditori e amministratori",
    testo:
      "Lo Studio dedica particolare attenzione alla posizione previdenziale del titolare, dei soci lavoratori e degli amministratori, individuando le soluzioni che consentano il miglior equilibrio tra sostenibilità del costo contributivo e adeguata tutela previdenziale.",
  },
  {
    titolo: "Progettazione del rapporto di lavoro",
    testo:
      "Ogni rapporto viene definito in funzione delle specifiche esigenze aziendali, valutando la tipologia contrattuale più appropriata, i margini di flessibilità consentiti dalla normativa, la predisposizione di contratti individuali personalizzati e l'eventuale accesso alle agevolazioni contributive e fiscali previste dalla legge. Ogni scelta viene effettuata tenendo conto dell'evoluzione normativa, della contrattazione collettiva e delle dinamiche economiche e retributive.",
  },
];

export default function LoStudioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">

      {/* Intestazione */}
      <div className="mb-14">
        <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">Lo Studio</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-3 leading-tight max-w-2xl">
          Dott. Rag. Piergiorgio Pelati
        </h1>
        <p className="text-lg text-brand-700 font-medium mb-4">
          Consulente del Lavoro · Ragioniere Commercialista
        </p>
        <p className="text-[var(--fg-sub)] max-w-2xl mb-3">
          Da oltre sessant&apos;anni affianchiamo imprese, professionisti ed enti nella gestione del lavoro, offrendo consulenza specialistica, elaborazione paghe e soluzioni organizzative orientate all&apos;efficienza, alla conformità normativa e alla crescita aziendale.
        </p>
        <p className="text-sm text-[var(--fg-sub)] border-l-2 border-brand-300 pl-4 max-w-xl">
          In sinergia con <strong>Studio Pelati snc</strong> — centro elaborazione dati e servizi alle imprese.
        </p>
      </div>

      {/* Punti di forza */}
      <div className="mb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-semibold text-[var(--fg)] mb-6">I nostri punti di forza</h2>
          <ul className="space-y-3">
            {puntiForza.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[var(--fg)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-brand-50/30 p-6">
          <h2 className="text-lg font-semibold text-[var(--fg)] mb-3">Perché sceglierci</h2>
          <p className="text-sm text-[var(--fg-sub)] mb-3">
            La gestione del personale richiede competenze aggiornate, precisione e una costante attenzione all&apos;evoluzione normativa.
          </p>
          <p className="text-sm text-[var(--fg-sub)]">
            Lo Studio offre un supporto completo che unisce esperienza professionale, aggiornamento continuo e strumenti digitali evoluti per semplificare gli adempimenti e fornire consulenza strategica alle imprese.
          </p>
        </div>
      </div>

      {/* Il metodo */}
      <div>
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-3">Il metodo</h2>
        <p className="text-[var(--fg-sub)] mb-8 max-w-2xl">
          Ogni attività svolta dallo Studio è preceduta da un&apos;approfondita analisi della normativa vigente, della prassi amministrativa e del contratto collettivo nazionale di lavoro più idoneo, al fine di individuare le soluzioni giuridiche ed economiche più vantaggiose e coerenti con l&apos;organizzazione aziendale e con l&apos;ottimizzazione del costo del lavoro.
        </p>
        <div className="flex flex-col gap-6">
          {metodo.map(({ titolo, testo }, i) => (
            <div key={titolo} className="grid md:grid-cols-[200px_1fr] gap-6 border-t border-[var(--border)] pt-6">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-brand-700 bg-brand-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold text-[var(--fg)] leading-snug">{titolo}</h3>
              </div>
              <p className="text-sm text-[var(--fg-sub)] leading-relaxed">{testo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
