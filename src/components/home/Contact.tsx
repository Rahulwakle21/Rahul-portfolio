import { CopyEmailButton } from "@/components/client/CopyEmailButton";
import { ButtonLink, Section } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, display: "in/rahul-wakle" },
  { label: "GitHub", href: siteConfig.social.github, display: "Rahulwakle21" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      tone="cta"
      eyebrow="Contact."
      title="Hiring for full-stack, backend or frontend? Let’s talk."
      intro={`Based in ${siteConfig.location.city}, ${siteConfig.location.country} (IST, UTC+5:30). Open to Software Developer, React.js and Full-Stack roles.`}
    >
      <div className="reveal-stagger grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface-glass rounded-2xl border border-accent/25 p-6 shadow-xl shadow-shadow sm:p-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-2xl font-semibold tracking-tight break-all transition-colors hover:text-accent sm:text-3xl"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone.e164}`}
            className="mt-3 block text-lg font-medium tracking-tight transition-colors hover:text-accent sm:text-xl"
          >
            {siteConfig.phone.display}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>
              Send an email
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.e164}`} variant="ghost">
              Call
            </ButtonLink>
            <CopyEmailButton email={siteConfig.email} />
            <ButtonLink href={siteConfig.resumePath} variant="ghost" download>
              Résumé (PDF)
            </ButtonLink>
          </div>
        </div>
        <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="flex min-h-16 items-center justify-between gap-4 px-6 transition-colors hover:bg-surface hover:text-accent"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{link.label}</span>
                <span className="text-sm">
                  {link.display} ↗<span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
          <li className="flex min-h-16 items-center justify-between gap-4 px-6">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Base</span>
            <span className="text-sm">
              {siteConfig.location.city}, {siteConfig.location.country}
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
