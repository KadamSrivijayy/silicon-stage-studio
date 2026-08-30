import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Srivijay Kadam" },
      {
        name: "description",
        content:
          "Skills of student developer Srivijay Kadam: C++ as current focus, Python fundamentals, core programming concepts and basic DSA.",
      },
      { property: "og:title", content: "Skills | Srivijay Kadam" },
      {
        property: "og:description",
        content: "C++ current focus, Python fundamentals, core programming concepts and basic DSA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

function Skills() {
  return (
    <PageShell>
      <Section>
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Learning"
          subtitle="An honest snapshot of where I am right now — what I practice daily, what I'm still learning, and what's next."
        />

        <Reveal delay={100} className="mt-8">
          <div className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-xs tracking-widest text-primary uppercase">
                Main Current Skill
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-gradient">C++</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Fundamentals, problem solving and basic data structures &amp; algorithms — my
                everyday practice.
              </p>
            </div>
            <span className="self-start rounded-full border border-primary/60 bg-primary/15 px-4 py-1.5 font-mono text-xs tracking-widest text-primary uppercase">
              Current Focus
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.category} {...g} delay={i * 90} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
