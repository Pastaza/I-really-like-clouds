 "use client";

import Link from "next/link";
import { useState } from "react";
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
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-white/60 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:h-14 sm:py-0">
          <Link href="/" className="touch-target inline-flex items-center font-semibold tracking-tight text-ink-950">
            <img src="/Logo.png" alt="Logo" className="h-15 w-auto" />
          </Link>
          <button
            type="button"
            className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 bg-white/80 text-ink-900 sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
          </button>
          <nav
            id="site-nav-menu"
            className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-2 text-xs text-ink-900 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:text-sm`}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="touch-target inline-flex items-center rounded-lg px-2 py-1.5 hover:bg-white/70 hover:text-ink-700"
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
