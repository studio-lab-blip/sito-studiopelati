"use client";

import { useState } from "react";

export default function ContattiPage() {
  const [form, setForm] = useState({ nome: "", azienda: "", telefono: "", email: "", messaggio: "" });
  const [stato, setStato] = useState<"idle" | "loading" | "ok" | "error">("idle");

  function set(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function invia(e: React.FormEvent) {
    e.preventDefault();
    setStato("loading");
    const res = await fetch("/api/contatto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStato(res.ok ? "ok" : "error");
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold text-brand-700 mb-3 uppercase tracking-widest">Contatti</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight">
        Parliamo del tuo progetto
      </h1>
      <p className="text-[var(--fg-sub)] max-w-xl mb-12">
        Compila il form con i tuoi recapiti e ti ricontatteremo al più presto.
      </p>

      <div className="grid md:grid-cols-[1fr_320px] gap-12">

        {/* Form */}
        <div>
          {stato === "ok" ? (
            <div className="rounded-xl border border-[var(--border)] bg-brand-50/30 p-8 text-center">
              <div className="text-2xl mb-3">✓</div>
              <h2 className="font-semibold text-[var(--fg)] mb-2">Messaggio inviato</h2>
              <p className="text-sm text-[var(--fg-sub)]">Ti ricontatteremo il prima possibile.</p>
            </div>
          ) : (
            <form onSubmit={invia} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome e cognome *" required value={form.nome} onChange={(v) => set("nome", v)} placeholder="Mario Rossi" />
                <Field label="Azienda" value={form.azienda} onChange={(v) => set("azienda", v)} placeholder="Rossi Srl" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Telefono *" required type="tel" value={form.telefono} onChange={(v) => set("telefono", v)} placeholder="+39 030 …" />
                <Field label="Email *" required type="email" value={form.email} onChange={(v) => set("email", v)} placeholder="mario@esempio.it" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--fg)]">Messaggio</label>
                <textarea
                  value={form.messaggio}
                  onChange={(e) => set("messaggio", e.target.value)}
                  rows={4}
                  placeholder="Come possiamo aiutarti?"
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-sub)] focus:outline-none focus:ring-2 focus:ring-brand-700 resize-none"
                />
              </div>
              {stato === "error" && (
                <p className="text-sm text-red-600">Errore nell&apos;invio. Prova a scriverci direttamente a info@studiopelati.it.</p>
              )}
              <button
                type="submit"
                disabled={stato === "loading"}
                className="self-start rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors disabled:opacity-60"
              >
                {stato === "loading" ? "Invio in corso…" : "Invia richiesta"}
              </button>
            </form>
          )}
        </div>

        {/* Recapiti */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-[var(--border)] p-6">
            <h2 className="font-semibold text-[var(--fg)] mb-4">Recapiti</h2>
            <div className="flex flex-col gap-4 text-sm">
              <Recapito label="Indirizzo">
                Via Santissima Trinità 19 (scala C)<br />Brescia
              </Recapito>
              <Recapito label="Telefono">
                <a href="tel:+390307000841" className="text-brand-700 hover:underline">+39 030 7000841</a>
              </Recapito>
              <Recapito label="Email">
                <a href="mailto:info@studiopelati.it" className="text-brand-700 hover:underline">info@studiopelati.it</a>
              </Recapito>
              <Recapito label="P.IVA">00362840985</Recapito>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <iframe
              src="https://maps.google.com/maps?q=45.5375740,9.9225121&z=16&output=embed&hl=it"
              width="100%"
              height="220"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Pelati — Come trovarci"
            />
            <a
              href="https://maps.app.goo.gl/YYnQyHDzGD23Ywqt7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-brand-700 hover:underline border-t border-[var(--border)]"
            >
              Apri in Google Maps →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required = false }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--fg)]">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-sub)] focus:outline-none focus:ring-2 focus:ring-brand-700"
      />
    </div>
  );
}

function Recapito({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-sub)] mb-0.5">{label}</div>
      <div className="text-[var(--fg)]">{children}</div>
    </div>
  );
}
