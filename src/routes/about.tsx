import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { drives, profile, education, interests } from "@/data/profile";

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
          <p>
            My goal is to continuously improve my technical skills, deepen my understanding of problem-solving,
            and build practical projects that solve real problems. I believe in the power of consistent practice
            and learning by doing.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Education" title="Schooling" />
        <div className="mt-10 space-y-4">
          {education.map((edu, i) => (
            <Reveal key={edu.level} delay={i * 80}>
              <div className="glass card-hover rounded-2xl p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{edu.level}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="inline-block rounded-full border border-primary/60 bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
                      {edu.percentage}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:gap-4">
                    <span>📍 {edu.location}</span>
                    <span>📅 {edu.duration}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Beyond Coding" title="My Interests" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest, i) => (
            <Reveal key={interest} delay={i * 60}>
              <div className="glass card-hover flex items-center rounded-2xl p-4">
                <span className="text-sm font-medium">{interest}</span>
              </div>
            </Reveal>
          ))}
        </div>
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
