import Link from "next/link";
import { ThemeToggle } from "@/components/client/ThemeToggle";
import { Container } from "@/components/ui/primitives";

const nav = [
  { href: "/#tuskr", label: "Case study" },
  { href: "/#experience", label: "Experience" },
  { href: "/#beyond-ui", label: "Beyond UI" },
  { href: "/#skills", label: "Skills" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-3 font-mono text-sm transition-opacity hover:opacity-90"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-accent to-accent/70 font-semibold text-accent-ink shadow-[0_4px_16px_-2px_color-mix(in_oklab,var(--color-accent)_50%,transparent)] ring-1 ring-accent/30 transition-transform group-hover:scale-105"
          >
            RW
          </span>
          <span className="sr-only sm:not-sr-only">
            rahul<span className="text-accent">.</span>wakle
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm">
            {nav.map((item, i) => (
              <li key={item.href} className={i === 0 ? undefined : "hidden md:block"}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full px-3 text-muted transition-colors hover:bg-surface-2/80 hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/#contact"
                className="ml-2 flex min-h-11 items-center rounded-full border border-accent/40 bg-accent/10 px-4 font-medium text-accent transition-[colors,box-shadow] hover:border-accent hover:bg-accent hover:text-accent-ink hover:shadow-[0_4px_20px_-4px_color-mix(in_oklab,var(--color-accent)_55%,transparent)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-accent" />
    </header>
  );
}
