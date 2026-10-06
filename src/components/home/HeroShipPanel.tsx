import { hero } from "@/content/profile";
import { siteConfig } from "@/lib/site";

const pipeline = [
  { id: "req", label: "Requirements", state: "done" as const },
  { id: "arch", label: "Architecture", state: "done" as const },
  { id: "build", label: "Build", state: "active" as const },
  { id: "ship", label: "Release", state: "next" as const },
  { id: "ops", label: "Production", state: "next" as const },
];

const layers = [
  { name: "Frontend", items: "React · TS · Redux", tone: "accent" as const },
  { name: "Backend", items: "Node · Express · REST", tone: "type" as const },
  { name: "Data", items: "Postgres · MySQL · Mongo", tone: "keyword" as const },
];

const signals = ["UX", "Performance", "A11y", "SEO"];

function StepDot({ state }: { state: "done" | "active" | "next" }) {
  if (state === "active") {
    return (
      <span className="relative flex h-3 w-3">
        <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" aria-hidden="true" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`h-2.5 w-2.5 rounded-full ${state === "done" ? "bg-accent/70" : "border border-line-strong bg-surface-2"}`}
    />
  );
}

export function HeroShipPanel() {
  return (
    <figure className="intro relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden="true" className="hero-orbit-ring pointer-events-none absolute -inset-6 rounded-[2rem] border border-dashed border-accent/20" />
      <div aria-hidden="true" className="hero-orbit-ring-reverse pointer-events-none absolute -inset-10 rounded-[2.5rem] border border-dashed border-syntax-type/15" />

      <div className="relative rounded-2xl bg-linear-to-br from-accent/45 via-line/70 to-syntax-type/35 p-px ring-glow">
        <div className="overflow-hidden rounded-[calc(1rem-1px)] border border-line/40 bg-surface">
          <figcaption className="flex items-center gap-3 border-b border-line bg-surface-2/90 px-4 py-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-xs font-semibold text-accent">RW</span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Delivery board</p>
              <p className="truncate text-sm font-medium tracking-tight">SaaS · full-stack · product cycle</p>
            </div>
            <span className="shrink-0 rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
              <span className="status-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden="true" />
              In flight
            </span>
          </figcaption>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-linear-to-br from-accent/10 via-surface to-surface-2/80 p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-accent/15 blur-2xl"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Active deployment</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">{hero.currently.product}</p>
              <p className="mt-1 text-sm text-muted">{hero.currently.company}</p>
              <p className="mt-3 font-mono text-xs text-muted">Since {hero.currently.since} · {siteConfig.location.city}</p>
            </div>

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">How a feature moves</p>
              <ol className="flex items-start justify-between gap-1" aria-label="Product delivery pipeline">
                {pipeline.map((step, i) => (
                  <li key={step.id} className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
                    <div className="flex w-full items-center">
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          className={`h-px flex-1 ${step.state === "next" ? "bg-line" : "bg-accent/50"}`}
                        />
                      )}
                      <StepDot state={step.state} />
                      {i < pipeline.length - 1 && (
                        <span
                          aria-hidden="true"
                          className={`h-px flex-1 ${pipeline[i + 1].state === "next" ? "bg-line" : "bg-accent/40"}`}
                        />
                      )}
                    </div>
                    <span
                      className={`font-mono text-[9px] leading-tight uppercase tracking-wide sm:text-[10px] ${step.state === "active" ? "text-accent" : "text-muted"}`}
                    >
                      {step.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {layers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-lg border border-line bg-bg/60 px-3 py-2.5 transition-colors hover:border-line-strong"
                >
                  <p
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      layer.tone === "accent" ? "text-accent" : layer.tone === "type" ? "text-syntax-type" : "text-syntax-keyword"
                    }`}
                  >
                    {layer.name}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">{layer.items}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Ship criteria</span>
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-md border border-line-strong/80 bg-surface-2/80 px-2 py-1 font-mono text-[10px] text-text"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only">
        {siteConfig.name}, {siteConfig.role}, four years experience, currently building {hero.currently.product} at{" "}
        {hero.currently.company} since {hero.currently.since}. Stack includes React, TypeScript, Node.js, Express, PostgreSQL,
        MySQL, and MongoDB. Focus areas: user experience, performance, accessibility, and SEO.
      </p>
    </figure>
  );
}
