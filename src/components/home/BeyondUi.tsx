import { beyondUi, productThinking } from "@/content/profile";
import { Card, Section, SubHeading } from "@/components/ui/primitives";

export function BeyondUi() {
  return (
    <Section
      id="beyond-ui"
      index="03"
      eyebrow="Beyond UI"
      title="JSX is the last step, not the first."
      intro="Every feature I ship passes through the same questions — from the customer call to how it behaves in production."
    >
      <ol className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {beyondUi.map((item, i) => (
          <li
            key={item.step}
            className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-surface"
          >
            <span aria-hidden="true" className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-semibold tracking-tight">{item.step}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.question}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <SubHeading id="product-thinking">Product thinking, from real product work</SubHeading>
        <p className="mt-2 max-w-2xl text-muted">
          I work across the delivery cycle with product, backend, QA, design and clients — not only on tickets handed to me.
        </p>
        <ul aria-labelledby="product-thinking" className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productThinking.map((item) => (
            <Card as="li" key={item.title}>
              <h4 className="font-semibold tracking-tight">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
}
