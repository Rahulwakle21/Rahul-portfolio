import { ContributionGrid, FlowChain } from "@/components/case-study/parts";
import { ButtonLink, Eyebrow, Section, TagList } from "@/components/ui/primitives";
import { challenges, contributions, tuskr } from "@/content/tuskr";

const mindset = ["Product", "UX", "Architecture", "Performance"];

export function TuskrFeature() {
  return (
    <Section
      id="tuskr"
      index="01"
      eyebrow="Featured case study"
      title={tuskr.kicker}
      intro="My strongest work: shipping and improving a real SaaS product, end to end."
    >
      <article
        aria-label="Tuskr case study summary"
        className="reveal overflow-clip rounded-3xl border border-line bg-surface shadow-2xl shadow-shadow"
      >
        <div className="relative border-b border-line p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/40 to-transparent"
          />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/35 bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Featured
              </span>
              <Eyebrow className="text-accent">Tuskr · SaaS product engineering</Eyebrow>
            </div>
            <p className="mt-4 max-w-2xl text-2xl font-medium tracking-tight text-balance sm:text-4xl">
              “{tuskr.tagline}”
            </p>
            <div className="mt-6">
              <TagList items={tuskr.stack} tone="accent" label="Tuskr tech stack" />
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-line md:grid-cols-2">
          <div className="bg-surface p-6 sm:p-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">The product</h3>
            <p className="mt-3 leading-relaxed text-pretty">{tuskr.product}</p>
          </div>
          <div className="bg-surface p-6 sm:p-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">My role</h3>
            <p className="mt-3 leading-relaxed text-pretty">{tuskr.role}</p>
          </div>
        </div>

        <div className="border-t border-line p-6 sm:p-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Engineering challenges</h3>
          <ul className="reveal-stagger mt-4 flex flex-wrap gap-2">
            {challenges.map((c) => (
              <li key={c.challenge} className="rounded-lg border border-line-strong bg-surface-2 px-3 py-2 text-sm">
                {c.challenge}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line p-6 sm:p-10">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">What I built</h3>
          <ContributionGrid items={contributions} headingLevel="h4" />
        </div>

        <div className="grid gap-px border-t border-line bg-line md:grid-cols-2">
          <div className="bg-surface p-6 sm:p-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Performance</h3>
            <div className="mt-4">
              <TagList items={["Code splitting", "Lazy loading", "Render optimisation", "Memoization", "Core Web Vitals"]} label="Performance techniques" />
            </div>
          </div>
          <div className="bg-surface p-6 sm:p-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">SEO &amp; accessibility</h3>
            <div className="mt-4">
              <TagList items={["Semantic UI", "Metadata", "Crawlability", "Responsive design", "Accessibility"]} label="SEO and accessibility practices" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-line p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">Engineering mindset</h3>
            <FlowChain steps={mindset} label="Engineering mindset, in order" />
          </div>
          <ButtonLink href="/case-studies/tuskr" className="self-start lg:self-auto">
            Read the full case study →
          </ButtonLink>
        </div>
      </article>
    </Section>
  );
}
