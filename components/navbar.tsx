"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portale.studiopelati.it";

const links = [
  { href: "/lo-studio", label: "Lo Studio" },
  { href: "/servizi",   label: "Servizi" },
  { href: "/clienti",   label: "Area clienti" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo / wordmark */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[var(--fg)] hover:opacity-80 transition-opacity">
          <span className="flex gap-[3px]">
            <span className="w-[5px] h-6 rounded-full bg-brand-700" />
            <span className="w-[5px] h-6 rounded-full bg-brand-700 opacity-55" />
            <span className="w-[5px] h-6 rounded-full bg-brand-700 opacity-30" />
          </span>
          <span>Studio Pelati</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-brand-700 ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "text-brand-700 font-medium"
                  : "text-[var(--fg-sub)]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={PORTAL_URL}
          className="hidden md:inline-flex items-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
        >
          Accedi al portale
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
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--fg-sub)] hover:text-brand-700 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href={PORTAL_URL}
            className="inline-flex justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
          >
            Accedi al portale
          </a>
        </div>
      )}
    </header>
  );
}
