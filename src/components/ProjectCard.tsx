import { ExternalLink, Github, ImageIcon, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { projects } from "@/data/profile";

type Project = (typeof projects)[number];

function isPlaceholderLink(url: string) {
  return !/^https?:\/\//i.test(url);
}

export function ProjectCard({ project }: { project: Project }) {
  const liveMissing = isPlaceholderLink(project.liveUrl);
  const sourceMissing = isPlaceholderLink(project.sourceUrl);

  return (
    <Reveal>
      <article className="glass card-hover overflow-hidden rounded-3xl">
        {/* ==============================================================
            PROJECT SCREENSHOT — replace /public/projects/foodshareai.png
           ============================================================== */}
        <div className="relative aspect-16/9 w-full overflow-hidden border-b border-border/70 bg-secondary/40">
          <img
            src={project.image}
            alt={`${project.name} project screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase backdrop-blur">
            <ImageIcon className="h-3 w-3" /> replace /public/projects/foodshareai.png
          </span>
        </div>

        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Featured Project
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>

            <ul className="mt-6 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={liveMissing ? undefined : project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled={liveMissing}
                title={liveMissing ? "Add your live demo URL in src/data/profile.ts" : undefined}
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 aria-disabled:pointer-events-none aria-disabled:opacity-50"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href={sourceMissing ? undefined : project.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled={sourceMissing}
                title={sourceMissing ? "Add your GitHub URL in src/data/profile.ts" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary aria-disabled:pointer-events-none aria-disabled:opacity-50"
              >
                <Github className="h-4 w-4" /> Source Code
              </a>
            </div>

            {(liveMissing || sourceMissing) && (
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                Add the real URLs in <span className="text-primary">src/data/profile.ts</span>{" "}
                (liveUrl / sourceUrl).
              </p>
            )}
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Technologies</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Editable list — update <span className="font-mono text-primary">tech</span> in
              src/data/profile.ts.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
