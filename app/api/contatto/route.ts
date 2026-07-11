import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.nome || !body?.telefono || !body?.email) {
    return NextResponse.json({ error: "Campi obbligatori mancanti." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn("[contatto] RESEND_API_KEY non configurata");
    return NextResponse.json({ ok: true });
  }

  const testo = `
Nuova richiesta di contatto da studiopelati.it

Nome: ${body.nome}
Azienda: ${body.azienda || "—"}
Telefono: ${body.telefono}
Email: ${body.email}

Messaggio:
${body.messaggio || "—"}
`.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "sito@studiopelati.it",
      to: ["info@studiopelati.it"],
      reply_to: body.email,
      subject: `Richiesta di contatto da ${body.nome}${body.azienda ? ` — ${body.azienda}` : ""}`,
      text: testo,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.error("[contatto] Resend error:", err);
    return NextResponse.json({ error: "Errore invio email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
