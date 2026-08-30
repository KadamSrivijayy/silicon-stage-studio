import { Reveal } from "@/components/Reveal";

export function StatsCard({
  value,
  label,
  note,
  delay = 0,
}: {
  value: string;
  label: string;
  note?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass card-hover group relative h-full overflow-hidden rounded-2xl p-6">
        <div
          aria-hidden
          className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
        />
        <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{value}</p>
        <p className="mt-3 text-sm font-medium">{label}</p>
        {note ? <p className="mt-1 font-mono text-xs text-muted-foreground">{note}</p> : null}
      </div>
    </Reveal>
  );
}
