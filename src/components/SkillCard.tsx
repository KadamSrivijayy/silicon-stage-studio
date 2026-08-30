import { Brain, Code2, Layers, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/data/profile";

const icons = { code: Code2, brain: Brain, layers: Layers, rocket: Rocket };

const levelStyles: Record<SkillLevel, string> = {
  "Current Focus": "border-primary/60 bg-primary/15 text-primary",
  Practicing: "border-accent/50 bg-accent/10 text-accent",
  Learning: "border-border bg-secondary/70 text-foreground",
  Familiar: "border-border bg-secondary/70 text-muted-foreground",
  Future: "border-dashed border-border bg-transparent text-muted-foreground",
};

export function SkillCard({
  category,
  icon,
  skills,
  delay = 0,
}: {
  category: string;
  icon: keyof typeof icons;
  skills: { name: string; level: SkillLevel }[];
  delay?: number;
}) {
  const Icon = icons[icon];
  return (
    <Reveal delay={delay}>
      <div className="glass card-hover h-full rounded-2xl p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl accent-gradient text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="font-display text-lg font-semibold">{category}</h3>
        </div>

        <ul className="mt-6 space-y-2.5">
          {skills.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/40 px-3.5 py-2.5 transition-colors hover:border-primary/40"
            >
              <span className="text-sm font-medium">{s.name}</span>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase",
                  levelStyles[s.level],
                )}
              >
                {s.level === "Future" ? "Coming Soon" : s.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
