import { skills } from "@/content/profile";
import { Section, TagList } from "@/components/ui/primitives";

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Technical skills" title="The stack, layer by layer.">
      <div className="reveal-stagger divide-y divide-line overflow-clip rounded-2xl border border-line bg-surface/40 shadow-lg shadow-shadow">
        {skills.map((group) => (
          <div
            key={group.name}
            className="grid gap-4 p-6 transition-colors hover:bg-surface sm:grid-cols-[14rem_1fr] sm:items-center"
          >
            <h3 className="flex items-baseline gap-3 font-semibold">
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                L{group.layer}
              </span>
              {group.name}
            </h3>
            <TagList items={group.items} label={`${group.name} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
