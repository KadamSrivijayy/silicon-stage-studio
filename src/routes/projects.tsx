import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Srivijay Kadam" },
      {
        name: "description",
        content:
          "Projects by Srivijay Kadam: FoodShareAI — a web-based food-sharing platform, and Emotion-Based Smart Lighting System.",
      },
      { property: "og:title", content: "Projects | Srivijay Kadam" },
      { property: "og:description", content: "My projects: FoodShareAI and Emotion-Based Smart Lighting System." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell>
      <Section>
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Building practical projects that solve real problems or explore interesting concepts."
        />
        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="rounded-2xl border border-dashed border-border p-8 text-center">
            <p className="font-display text-lg font-semibold">More projects coming</p>
            <p className="mt-2 text-sm text-muted-foreground">
              As I progress with C++, DSA and Java, new projects will land here.
            </p>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
