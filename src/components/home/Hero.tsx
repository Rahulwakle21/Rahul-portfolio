import { hero } from "@/content/profile";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { HeroShipPanel } from "@/components/home/HeroShipPanel";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="hero-orb pointer-events-none absolute -top-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="hero-orb-delay pointer-events-none absolute top-1/3 -right-16 -z-10 h-64 w-64 rounded-full bg-syntax-type/15 blur-[90px] sm:h-80 sm:w-80"
      />

      <Container className="relative grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>
              <span className="status-dot mr-2 inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" aria-hidden="true" />
              {hero.eyebrow}
            </Eyebrow>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Open to roles
            </span>
          </div>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            <span className="mb-4 block font-mono text-base font-normal tracking-normal text-muted sm:text-lg">
              {siteConfig.name} — {siteConfig.role}
            </span>
            {hero.headline[0]}{" "}
            <span className="gradient-text block sm:inline">{hero.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{hero.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
            <span className="rounded-lg border border-line bg-surface/60 px-2.5 py-1.5">React · TypeScript</span>
            <span className="rounded-lg border border-line bg-surface/60 px-2.5 py-1.5">Node.js · REST</span>
            <span className="rounded-lg border border-line bg-surface/60 px-2.5 py-1.5">SaaS · 4 yrs</span>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/case-studies/tuskr">Read the Tuskr case study →</ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="ghost" download>
              Download résumé
            </ButtonLink>
          </div>
        </div>

        <HeroShipPanel />
      </Container>
      <div aria-hidden="true" className="section-rule mx-auto max-w-6xl px-5 sm:px-8" />
    </section>
  );
}
