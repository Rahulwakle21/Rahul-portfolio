import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line py-12">
      <div aria-hidden="true" className="section-rule absolute inset-x-0 top-0" />
      <Container className="flex flex-col gap-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.role} · {siteConfig.location.city}, {siteConfig.location.country}
        </p>
        <p>
          Built with Next.js App Router · Server Components ·{" "}
          <Link href="/case-studies/tuskr#this-site" className="underline decoration-line-strong underline-offset-4 hover:text-accent">
            how this site is built
          </Link>
        </p>
      </Container>
    </footer>
  );
}
