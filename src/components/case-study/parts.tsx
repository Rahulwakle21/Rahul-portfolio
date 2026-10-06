import { Card, TagList, cx } from "@/components/ui/primitives";
import type { Contribution } from "@/content/tuskr";

export function ContributionGrid({ items, headingLevel = "h3" }: { items: Contribution[]; headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel;
  return (
    <ul className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Card as="li" key={item.title} className="flex flex-col">
          <span aria-hidden="true" className="font-mono text-xs text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Heading className="mt-3 text-base font-semibold tracking-tight">{item.title}</Heading>
          <p className="mt-2 mb-5 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
          <TagList items={item.tags} label={`${item.title} — skills`} />
        </Card>
      ))}
    </ul>
  );
}

export function FlowChain({ steps, label, className }: { steps: readonly string[]; label: string; className?: string }) {
  return (
    <ol aria-label={label} className={cx("flex flex-wrap items-center gap-2 font-mono text-sm", className)}>
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className={cx("rounded-lg border px-3 py-1.5", i === 0 ? "border-accent/50 text-accent" : "border-line-strong")}>
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-muted">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function MetaList({ items }: { items: ReadonlyArray<{ label: string; value: string }> }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.label}</dt>
          <dd className="mt-1 text-sm font-medium">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LabelPill({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "warn" }) {
  return (
    <span
      className={cx(
        "inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em]",
        tone === "accent" ? "border-accent/40 text-accent" : "border-warn/40 text-warn",
      )}
    >
      {children}
    </span>
  );
}
