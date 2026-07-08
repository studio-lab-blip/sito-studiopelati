import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-semibold text-[var(--fg)] mb-1">Studio Pelati</div>
            <p className="text-sm text-[var(--fg-sub)] max-w-xs">
              Consulenza del lavoro.<br />
              Al fianco delle imprese ogni giorno.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-sub)] mb-1">Pagine</div>
            <Link href="/lo-studio" className="text-sm text-[var(--fg-sub)] hover:text-brand-700 transition-colors">Lo Studio</Link>
            <Link href="/servizi"   className="text-sm text-[var(--fg-sub)] hover:text-brand-700 transition-colors">Servizi</Link>
            <Link href="/clienti"   className="text-sm text-[var(--fg-sub)] hover:text-brand-700 transition-colors">Area clienti</Link>
          </div>

          {/* Contacts — placeholder, da completare con dati reali */}
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-sub)] mb-1">Contatti</div>
            <span className="text-sm text-[var(--fg-sub)]">info@studiopelati.it</span>
            <span className="text-sm text-[var(--fg-sub)]">—</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--fg-sub)]">
          <span>© {new Date().getFullYear()} Studio Pelati — P.IVA —</span>
          <span>Tutti i diritti riservati</span>
        </div>
      </div>
    </footer>
  );
}
