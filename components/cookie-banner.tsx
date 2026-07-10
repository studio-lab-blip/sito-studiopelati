"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "sp_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept(type: "all" | "minimal") {
    localStorage.setItem(STORAGE_KEY, type);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div
        className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-5 shadow-2xl"
        style={{ background: "rgb(14 26 34)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Gold-teal accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #0F766E 0%, #C9A227 100%)" }}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="flex-1 text-sm leading-relaxed" style={{ color: "rgb(175 200 210)" }}>
            Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie analitici
            per migliorare l&apos;esperienza di navigazione.{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-2 transition-colors hover:text-teal-400"
            >
              Privacy policy
            </Link>
          </p>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => accept("minimal")}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
              style={{ color: "rgb(160 185 195)" }}
            >
              Solo necessari
            </button>
            <button
              onClick={() => accept("all")}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)" }}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
