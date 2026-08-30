import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/profile";

export function Timeline() {
  return (
    <ol className="relative mt-10 space-y-8 border-l border-border pl-6 sm:pl-10">
      {timeline.map((item, i) => (
        <Reveal as="li" key={item.phase} delay={i * 120} className="relative">
          <span
            aria-hidden
            className="absolute top-2 -left-[31px] flex h-3.5 w-3.5 items-center justify-center rounded-full accent-gradient sm:-left-[47px]"
          />
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            {item.phase}
          </span>
          <div className="glass card-hover mt-3 rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
