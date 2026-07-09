"use client";

import { useState } from "react";

const WA_NUMBER = "390307000841";

export default function ContattiPage() {
  const [form, setForm] = useState({ nome: "", azienda: "", telefono: "", email: "", whatsapp: "", messaggio: "" });
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
        Compila il form con i tuoi recapiti e ti ricontatteremo al più presto. Puoi anche scriverci via WhatsApp o chiamarci direttamente.
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
              <Field label="WhatsApp" type="tel" value={form.whatsapp} onChange={(v) => set("whatsapp", v)} placeholder="+39 333 …" />
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

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-5 hover:border-green-500 transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <div className="font-medium text-[var(--fg)] text-sm group-hover:text-green-600 transition-colors">Scrivici su WhatsApp</div>
              <div className="text-xs text-[var(--fg-sub)]">+39 030 7000841</div>
            </div>
          </a>
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
