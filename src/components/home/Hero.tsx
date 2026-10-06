import { hero } from "@/content/profile";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

const k = "text-syntax-keyword";
const s = "text-accent";
const p = "text-syntax-type";
const c = "text-muted";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
      <Container className="grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div>
          <Eyebrow>
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </Eyebrow>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            <span className="mb-4 block font-mono text-base font-normal tracking-normal text-muted sm:text-lg">
              {siteConfig.name} — {siteConfig.role}
            </span>
            {hero.headline[0]} <span className="text-muted">{hero.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{hero.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/case-studies/tuskr">Read the Tuskr case study →</ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="ghost" download>
              Download résumé
            </ButtonLink>
          </div>
        </div>

        <figure className="intro overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-shadow">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <figcaption className="ml-2 font-mono text-xs text-muted">engineer.ts</figcaption>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
            <code>
              <span className={c}>{"// currently shipping"}</span>
              {"\n"}
              <span className={k}>export const</span> rahul <span className={k}>=</span> {"{"}
              {"\n  "}role: <span className={s}>&quot;Software Developer&quot;</span>,
              {"\n  "}experience: <span className={s}>&quot;4 years&quot;</span>,
              {"\n  "}now: <span className={s}>&quot;{hero.currently.product} @ {hero.currently.company}&quot;</span>,
              {"\n  "}frontend: [<span className={s}>&quot;React&quot;</span>, <span className={s}>&quot;TypeScript&quot;</span>, <span className={s}>&quot;Redux&quot;</span>],
              {"\n  "}backend: [<span className={s}>&quot;Node.js&quot;</span>, <span className={s}>&quot;Express&quot;</span>],
              {"\n  "}database: [<span className={s}>&quot;PostgreSQL&quot;</span>, <span className={s}>&quot;MySQL&quot;</span>, <span className={s}>&quot;MongoDB&quot;</span>],
              {"\n  "}ai: [<span className={s}>&quot;Cursor&quot;</span>, <span className={s}>&quot;Claude&quot;</span>, <span className={s}>&quot;ChatGPT&quot;</span>, <span className={s}>&quot;Copilot&quot;</span>],
              {"\n  "}cares: [<span className={s}>&quot;UX&quot;</span>, <span className={s}>&quot;perf&quot;</span>, <span className={s}>&quot;a11y&quot;</span>, <span className={s}>&quot;SEO&quot;</span>],
              {"\n"}
              {"}"} <span className={k}>satisfies</span> <span className={p}>ProductEngineer</span>;
            </code>
          </pre>
        </figure>
      </Container>
    </section>
  );
}
