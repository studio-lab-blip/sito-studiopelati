const consulenza = [
  "Assistenza nella gestione del personale dipendente, assimilato e parasubordinato",
  "Analisi strategica dei costi per la costruzione del trattamento retributivo",
  "Gestione delle pratiche di collocamento",
  "Redazione e tenuta del Libro Unico del Lavoro e degli adempimenti elaborativi connessi",
  "Gestione dei rapporti con INPS, INAIL, Agenzia delle Entrate e Ministero del Lavoro",
  "Analisi delle opportunità di inserimento lavorativo con le agevolazioni previste dalla normativa vigente",
  "Collocamento dei lavoratori disabili",
  "Analisi della contrattualistica aziendale",
  "Assistenza nella risoluzione di controversie di lavoro e nelle visite ispettive",
  "Assistenza nelle relazioni sindacali e in vertenze o conciliazioni",
  "Assistenza alla certificazione di contratti",
  "Contrattualistica afferente collaborazioni esterne",
  "Redazione del regolamento aziendale",
  "Attività informativa al Cliente sulle novità normative",
];

const amministrazioneElaborazione = [
  "Acquisizione delle presenze del personale da file o tabulati aziendali",
  "Elaborazione e stampa del Libro Unico del Lavoro (LUL), del prospetto paga del dipendente, dei lavoratori parasubordinati, degli amministratori e dei tirocinanti",
  "Gestione automatica di ferie, ex festività, permessi, riduzioni orario, residui e banca ore",
  "Elaborazione di quadrature contabili con suddivisioni e personalizzazioni per le esigenze aziendali",
  "Prospetti per l'imputazione contabile dei costi del personale con codifica del piano dei conti aziendale",
  "Distinte delle retribuzioni nette e relativo file per la banca",
  "Stampa delle distinte delle ritenute sindacali",
  "Elaborazione e stampa del modello di pagamento unificato F24",
  "Elaborazione e stampa di prospetti di malattia, infortunio, maternità e liquidazione TFR",
  "Elaborazione e stampa del fondo TFR e dei ratei di ferie e mensilità aggiuntive",
  "Elaborazione dei costi del personale mensili e prospetti IRAP/ISA",
  "Elaborazione e trasmissione delle denunce mensili INPS – modello UNIEMENS",
  "Gestione contabile dei servizi di welfare aziendale e della previdenza complementare",
];

const amministrazioneGestione = [
  "Gestione del collocamento ordinario e obbligatorio con stesura della contrattualistica di assunzione",
  "Simulazioni di costi e busta paga fac-simile",
  "Verifica delle agevolazioni applicabili e scelta della tipologia contrattuale più conveniente",
  "Fascicolo del lavoratore con tutti i documenti e le informative obbligatorie (trasparenza contrattuale, detrazioni, TFR, ecc.)",
  "Gestione dei rapporti con INPS, INAIL, Cassa Edile, Agenzia delle Entrate e Ispettorato Territoriale del Lavoro",
  "Gestione amministrativa degli eventi infortunistici e delle malattie professionali",
  "Ricorso agli ammortizzatori sociali e procedure sindacali preliminari",
  "Progettazione e gestione di piani welfare finalizzati al benessere dei lavoratori e all'ottimizzazione fiscale",
];

const contenzioso = [
  "INPS",
  "INAIL",
  "Ispettorato del Lavoro",
  "Agenzia delle Entrate",
  "Altri enti coinvolti nella gestione del personale",
];

export default function ServiziPage() {
  return (
    <div style={{ background: "#edede9" }} className="min-h-screen">
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">Servizi</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight">
        L&apos;attività dello Studio
      </h1>
      <p className="text-[var(--fg-sub)] max-w-xl mb-14">
        L&apos;attività dello Studio si svolge in diversi ambiti di specializzazione, garantendo un supporto completo e integrato per tutte le esigenze legate alla gestione del personale.
      </p>

      {/* Consulenza del lavoro */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">Consulenza del lavoro</h2>
        <div className="w-8 h-0.5 bg-brand-700 mb-6" />
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {consulenza.map((v) => (
            <li key={v} className="flex items-start gap-3 text-sm text-[var(--fg-sub)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
              {v}
            </li>
          ))}
        </ul>
      </section>

      {/* Amministrazione — elaborazione */}
      <section className="mb-14 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-1">Amministrazione del personale</h2>
        <p className="text-sm text-[var(--fg-sub)] mb-2">Elaborazione paghe</p>
        <div className="w-8 h-0.5 bg-brand-700 mb-6" />
        <p className="text-sm text-[var(--fg-sub)] mb-6">
          Un software paghe avanzato ci consente di offrire un servizio rapido, efficiente e puntuale, adattato alle esigenze aziendali. Grazie a questo strumento semplifichiamo e ottimizziamo le modalità di comunicazione con l&apos;azienda e con i suoi dipendenti.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {amministrazioneElaborazione.map((v) => (
            <li key={v} className="flex items-start gap-3 text-sm text-[var(--fg-sub)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
              {v}
            </li>
          ))}
        </ul>
      </section>

      {/* Amministrazione — gestione */}
      <section className="mb-14 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-1">Amministrazione del personale</h2>
        <p className="text-sm text-[var(--fg-sub)] mb-2">Gestione e collocamento</p>
        <div className="w-8 h-0.5 bg-brand-700 mb-6" />
        <p className="text-sm text-[var(--fg-sub)] mb-6">
          Prestiamo particolare cura all&apos;assistenza nella gestione dei seguenti servizi:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {amministrazioneGestione.map((v) => (
            <li key={v} className="flex items-start gap-3 text-sm text-[var(--fg-sub)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
              {v}
            </li>
          ))}
        </ul>
      </section>

      {/* Contenzioso */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">Contenzioso e Assistenza</h2>
        <div className="w-8 h-0.5 bg-brand-700 mb-6" />
        <p className="text-sm text-[var(--fg-sub)] mb-6">
          Forniamo assistenza nelle relazioni con gli enti previdenziali e di controllo, con supporto durante verifiche ispettive e nella gestione delle controversie di lavoro:
        </p>
        <ul className="flex flex-col gap-3">
          {contenzioso.map((v) => (
            <li key={v} className="flex items-center gap-3 text-sm text-[var(--fg-sub)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
              {v}
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}
