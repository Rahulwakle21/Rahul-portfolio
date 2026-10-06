import { education, experience } from "@/content/profile";
import { CheckList, Section, TagList } from "@/components/ui/primitives";

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Two SaaS companies, one through-line: shipping product.">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((role) => (
          <li key={role.company} className="reveal relative">
            <span
              aria-hidden="true"
              className={`absolute top-2 -left-[31px] h-3 w-3 rounded-full border-2 border-bg sm:-left-[47px] ${role.current ? "bg-accent" : "bg-line-strong"}`}
            />
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {role.title} · {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {role.product && <span className="text-text">{role.product} — </span>}
                    {role.summary}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {role.current && <span className="mr-2 text-accent">● now</span>}
                  {role.period} · {role.location}
                </p>
              </header>
              <div className="mt-6">
                <CheckList items={role.points} />
              </div>
              <div className="mt-6">
                <TagList items={role.stack} label={`${role.company} tech stack`} />
              </div>
            </article>
          </li>
        ))}
      </ol>
      <p className="mt-8 pl-6 font-mono text-xs text-muted sm:pl-10">
        Education — {education.degree}, {education.school} · {education.year} · {education.grade}
      </p>
    </Section>
  );
}
