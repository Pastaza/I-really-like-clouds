import Link from "next/link";
import { Container } from "./ui";

const links = [
  { href: "/identify", label: "Identify" },
  { href: "/forecast", label: "Sky forecast" },
  { href: "/atlas", label: "Cloud atlas" },
  { href: "/photos", label: "Photos" },
  { href: "/guide", label: "Guide" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-white/60 backdrop-blur">
      <Container>
        <div className="flex flex-col gap-3 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <Link href="/" className="touch-target inline-flex items-center font-semibold tracking-tight text-ink-950">
            ireallylikeclouds
          </Link>
          <nav className="flex w-full flex-wrap items-center gap-2 text-xs text-ink-900 sm:w-auto sm:gap-5 sm:text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="touch-target inline-flex items-center rounded-lg px-2 py-1.5 hover:bg-white/70 hover:text-ink-700"
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
