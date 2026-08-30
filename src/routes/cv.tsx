import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Phone } from "lucide-react";
import { PageShell, Section } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { profile, projects, skillGroups, timeline } from "@/data/profile";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV | Srivijay Kadam" },
      {
        name: "description",
        content:
          "Resume of Srivijay Kadam, aspiring software developer — profile, education, skills, programming and projects.",
      },
      { property: "og:title", content: "CV | Srivijay Kadam" },
      { property: "og:description", content: "Resume of Srivijay Kadam, aspiring software developer." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CV,
});

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/70 py-7 first:border-t-0 first:pt-0">
      <h3 className="font-mono text-xs tracking-widest text-primary uppercase">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-border px-4 py-3 font-mono text-xs text-muted-foreground">
      {children}
    </p>
  );
}

function CV() {
  const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => s.name));
  const unique = [...new Set(allSkills)];

  return (
    <PageShell>
      <Section>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">My CV</h1>
              <p className="mt-3 text-muted-foreground">
                A living resume — I keep it updated as I learn.
              </p>
            </div>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 self-start rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <article className="glass rounded-3xl p-7 sm:p-10">
            <header className="flex flex-col gap-4 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm text-primary">{profile.shortRole}</p>
              </div>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-4 w-4" /> {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4" /> {profile.phone}
                  </a>
                </li>
              </ul>
            </header>

            <Block title="Profile">
              <p>{profile.intro}</p>
            </Block>

            <Block title="Education">
              <Placeholder>
                [ EDIT ME ] Add your school / college / degree / year here — src/routes/cv.tsx
              </Placeholder>
            </Block>

            <Block title="Skills">
              <ul className="flex flex-wrap gap-2">
                {unique.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Programming">
              <p>
                <span className="text-foreground">Languages:</span> C++ (current focus), Python
                (fundamentals).
              </p>
              <p>
                <span className="text-foreground">Concepts:</span> conditional statements, loops,
                functions, arrays, pointers, searching, sorting, problem solving, basic DSA.
              </p>
            </Block>

            <Block title="Projects">
              {projects.map((p) => (
                <div key={p.name}>
                  <p className="text-foreground">{p.name}</p>
                  <p>{p.description}</p>
                </div>
              ))}
            </Block>

            <Block title="Learning Journey">
              <ul className="space-y-2">
                {timeline.map((t) => (
                  <li key={t.phase}>
                    <span className="font-mono text-xs text-primary">{t.phase}</span> —{" "}
                    <span className="text-foreground">{t.title}</span>: {t.body}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Certifications & Achievements">
              <Placeholder>[ EDIT ME ] Add certifications, courses or awards when you have them.</Placeholder>
            </Block>
          </article>
        </Reveal>

        <Reveal delay={200} className="mt-6">
          <p className="text-center font-mono text-xs text-muted-foreground">
            Replace the PDF at <span className="text-primary">/public/Srivijay-Kadam-CV.pdf</span>{" "}
            to update the download button.
          </p>
        </Reveal>
      </Section>
    </PageShell>
  );
}
