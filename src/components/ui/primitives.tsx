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
    <Element className={cx("rounded-2xl border border-line bg-surface p-6 transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-shadow", className)}>
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
    "inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-text"
      : "border border-line-strong text-text hover:border-accent hover:text-accent",
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
};

export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={cx("lazy-section border-t border-line py-20 sm:py-28", className)}>
      <Container>
        <header className="reveal mb-12 max-w-3xl">
          <Eyebrow>
            {index && <span className="text-accent">§ {index} </span>}
            {eyebrow}
          </Eyebrow>
          <h2 id={headingId} className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
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
