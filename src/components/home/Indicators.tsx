import { indicators } from "@/content/profile";
import { Container } from "@/components/ui/primitives";

export function Indicators() {
  return (
    <section aria-labelledby="indicators-title" className="py-12 sm:py-16">
      <Container>
        <h2 id="indicators-title" className="sr-only">
          Engineering at a glance
        </h2>
        <p className="reveal mb-6 max-w-lg font-mono text-xs uppercase tracking-[0.18em] text-muted">
          At a glance
        </p>
        <dl className="reveal-stagger grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {indicators.map((item, i) => (
            <div
              key={item.label}
              className="group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-shadow"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 font-mono text-[10px] text-line-strong transition-colors group-hover:text-accent/50"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{item.label}</dt>
              <dd className="text-xl font-semibold tracking-tight sm:text-2xl">
                {item.value}
                {item.measured && (
                  <>
                    <span aria-hidden="true" className="ml-1 align-super text-xs text-accent">
                      *
                    </span>
                    <span className="sr-only"> (from résumé)</span>
                  </>
                )}
              </dd>
              <dd className="text-xs leading-relaxed text-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 font-mono text-xs text-muted">
          <span className="text-accent">*</span> Figures from my résumé. Everything else is a qualitative indicator — no invented
          stats.
        </p>
      </Container>
    </section>
  );
}
