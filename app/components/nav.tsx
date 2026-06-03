"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "./ui";

const links = [
  { href: "/identify", label: "Identify" },
  { href: "/forecast", label: "Sky forecast" },
  { href: "/atlas", label: "Cloud atlas" },
  { href: "/photos", label: "Photos" },
  { href: "/guide", label: "Guide" }
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-ink-950/40">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:h-14 sm:py-0">
          <Link
            href="/"
            className="touch-target inline-flex items-center font-semibold tracking-tight text-ink-950 dark:text-ink-50"
          >
            <img src="/Logo.png" alt="Logo" className="h-14 w-auto" />
          </Link>

          <ThemeToggle />

          <button
            type="button"
            className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 bg-white/80 text-ink-900 sm:hidden dark:border-white/10 dark:bg-white/10 dark:text-ink-50"
            aria-expanded={menuOpen}
            aria-controls="site-nav-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
          </button>

          <nav
            id="site-nav-menu"
            className={`${
              menuOpen ? "flex" : "hidden"
            } w-full flex-col gap-2 text-xs text-ink-900 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:text-sm dark:text-ink-50`}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="touch-target inline-flex items-center rounded-lg px-2 py-1.5 hover:bg-white/70 hover:text-ink-700 dark:hover:bg-white/10 dark:hover:text-ink-50"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
