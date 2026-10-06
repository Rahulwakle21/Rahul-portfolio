import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-32">
      <Eyebrow className="text-accent">404</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">This route doesn’t exist.</h1>
      <p className="mt-4 max-w-lg text-muted">The page may have moved. The case study and contact details are one click away.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/case-studies/tuskr" variant="ghost">
          Tuskr case study
        </ButtonLink>
      </div>
    </Container>
  );
}
