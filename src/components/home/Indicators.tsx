import { indicators } from "@/content/profile";
import { Container } from "@/components/ui/primitives";

export function Indicators() {
  return (
    <section aria-labelledby="indicators-title" className="border-t border-line py-12">
      <Container>
        <h2 id="indicators-title" className="sr-only">
          Engineering at a glance
        </h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {indicators.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 bg-bg p-5">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.label}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight">
                {item.value}
                {item.measured && (
                  <>
                    <span aria-hidden="true" className="ml-1 align-super text-xs text-accent">*</span>
                    <span className="sr-only"> (from résumé)</span>
                  </>
                )}
              </dd>
              <dd className="text-xs leading-relaxed text-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-mono text-xs text-muted">
          <span className="text-accent">*</span> Figures from my résumé. Everything else is a qualitative indicator — no invented
          stats.
        </p>
      </Container>
    </section>
  );
}
