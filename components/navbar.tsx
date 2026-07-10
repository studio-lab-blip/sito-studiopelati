"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const links = [
  { href: "/lo-studio", label: "Lo Studio" },
  { href: "/servizi",   label: "Servizi" },
  { href: "/clienti",   label: "Area clienti" },
  { href: "/contatti",  label: "Contatti" },
];

export function Navbar({ logoUrl }: { logoUrl?: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-3">
        {/* Logo / wordmark */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="Studio Pelati"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              unoptimized
            />
          ) : (
            <>
              <span className="flex gap-[3px]">
                <span className="w-[5px] h-6 rounded-full bg-brand-700" />
                <span className="w-[5px] h-6 rounded-full bg-brand-700 opacity-55" />
                <span className="w-[5px] h-6 rounded-full bg-brand-700 opacity-30" />
              </span>
              <span className="font-semibold text-[var(--fg)]">Studio Pelati</span>
            </>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm transition-colors hover:text-[#0F4C5C] ${
                  active ? "text-[#0F4C5C] font-semibold" : "text-[var(--fg-sub)]"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#0F4C5C]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={PORTAL_URL}
          className="hidden md:inline-flex items-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
        >
          Portale Aziende
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-1 text-[var(--fg-sub)]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors hover:text-[#0F4C5C] ${
                  active ? "text-[#0F4C5C] font-semibold" : "text-[var(--fg-sub)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={PORTAL_URL}
            className="inline-flex justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
          >
            Portale Aziende
          </a>
        </div>
      )}
    </header>
  );
}
