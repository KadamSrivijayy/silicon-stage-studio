import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { PageShell, Section } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { StatsCard } from "@/components/StatsCard";
import { profile, stats } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srivijay Kadam | Aspiring Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Srivijay Kadam, a student developer focused on C++, DSA and problem solving, and creator of FoodShareAI.",
      },
      { property: "og:title", content: "Srivijay Kadam | Aspiring Software Developer" },
      {
        property: "og:description",
        content: "Student developer focused on C++, DSA and building real projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs tracking-widest text-primary uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Student Developer
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
                Hi, I'm <span className="text-gradient">Srivijay Kadam.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
                {profile.role}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* ===================================================
              PROFILE PHOTO — replace /public/profile.jpg
              (keep the same file name and path)
             =================================================== */}
          <Reveal delay={200} className="justify-self-center">
            <div className="relative animate-float">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-primary/40"
              />
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={320}
                height={320}
                className="relative h-52 w-52 rounded-full border-2 border-primary/40 object-cover glow-ring sm:h-64 sm:w-64 lg:h-80 lg:w-80"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatsCard key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Currently building my foundations</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            I started with Python, I'm deep in C++ and DSA right now, and I'm working toward Java
            and real-world software development. Have a look at what I'm learning and what I've
            built so far.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              My Skills <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              My Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
