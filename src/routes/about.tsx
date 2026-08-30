import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { drives, profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Srivijay Kadam" },
      {
        name: "description",
        content:
          "Srivijay Kadam's journey as a student developer: from Python with Apna College to C++, DSA and future Java development.",
      },
      { property: "og:title", content: "About | Srivijay Kadam" },
      {
        property: "og:description",
        content: "The learning journey of a student developer: Python, C++, DSA and what comes next.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <Section>
        <SectionHeading
          eyebrow="Who I am"
          title="About Me"
          subtitle={`${profile.role} — currently studying, practicing daily, and building projects to turn what I learn into something real.`}
        />

        <Reveal delay={100} className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            I'm a student who fell for programming through the simple thrill of making a computer
            do exactly what I asked. I began with Python, learning the fundamentals step by step,
            and that first foundation made me curious about how things actually work underneath.
          </p>
          <p>
            Today my focus is C++ and data structures &amp; algorithms. I spend my time practicing
            problems, revisiting the basics until they feel natural, and slowly building the kind
            of logical thinking that good software depends on. I'm not an experienced engineer yet
            — I'm a learner who shows up consistently.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Timeline" title="My Journey" />
        <Timeline />
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Motivation" title="What Drives Me" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drives.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
