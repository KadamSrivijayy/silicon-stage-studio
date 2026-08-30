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
          "FoodShareAI — a web-based project by Srivijay Kadam combining a modern web interface with AI-oriented food-sharing functionality.",
      },
      { property: "og:title", content: "Projects | Srivijay Kadam" },
      { property: "og:description", content: "FoodShareAI, my featured student project." },
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
          subtitle="One project, built properly. I'd rather show something real than pad this page."
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
