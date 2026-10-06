import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("font-mono text-xs uppercase tracking-[0.18em] text-muted", className)}>{children}</p>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return (
    <li
      className={cx(
        "rounded-full border px-3 py-1 font-mono text-xs",
        tone === "accent" ? "border-accent/40 bg-accent/10 text-accent" : "border-line text-muted",
      )}
    >
      {children}
    </li>
  );
}

export function TagList({ items, tone, label }: { items: readonly string[]; tone?: "default" | "accent"; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </ul>
  );
}

export function Card({
  as: Element = "div",
  className,
  children,
}: {
  as?: "div" | "li" | "article";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Element
      className={cx(
        "group relative rounded-2xl border border-line bg-surface p-6 transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-shadow",
        "before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-accent/40 before:to-transparent before:opacity-0 before:transition-opacity group-hover:before:opacity-100",
        className,
      )}
    >
      {children}
    </Element>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", external, download, className }: ButtonLinkProps) {
  const classes = cx(
    "inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-[colors,transform,box-shadow] duration-300",
    variant === "primary"
      ? "bg-accent text-accent-ink shadow-[0_4px_24px_-4px_color-mix(in_oklab,var(--color-accent)_55%,transparent)] hover:-translate-y-0.5 hover:bg-text hover:shadow-[0_8px_32px_-6px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]"
      : "border border-line-strong bg-surface/40 text-text backdrop-blur-sm hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-shadow",
    className,
  );

  if (external || download || !href.startsWith("/")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download: "" })}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type SectionProps = {
  id: string;
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "default" | "cta";
};

export function Section({ id, index, eyebrow, title, intro, children, className, tone = "default" }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cx(
        "lazy-section relative border-t border-line py-20 sm:py-28",
        tone === "cta" && "overflow-hidden border-t-0",
        className,
      )}
    >
      {tone === "cta" && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-accent/8 to-accent/14"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          />
        </>
      )}
      <Container className="relative">
        <header className="reveal mb-12 max-w-3xl">
          <Eyebrow>
            {index && <span className="text-accent">§ {index} </span>}
            {eyebrow}
          </Eyebrow>
          <div aria-hidden="true" className="section-rule mt-4 max-w-md" />
          <h2
            id={headingId}
            className={cx(
              "mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl",
              tone === "cta" && "sm:text-[3.25rem] sm:leading-[1.08]",
            )}
          >
            {title}
          </h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
}

export function SubHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="text-lg font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
