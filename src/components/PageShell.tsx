import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Standard page wrapper: subtle grid backdrop + entry transition. */
export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("relative animate-in fade-in duration-500", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] grid-backdrop"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-140px] left-1/2 -z-10 h-[420px] w-[720px] max-w-[110vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      {children}
    </main>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:py-20", className)}>
      {children}
    </section>
  );
}
