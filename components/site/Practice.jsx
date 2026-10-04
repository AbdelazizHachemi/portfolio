import { practice, shell } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";

export function Practice() {
  return (
    <section id="practice" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className={shell}>
        <SectionLabel index="03">Practice</SectionLabel>
        <h2 className="scroll-in display mt-5 max-w-[16ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94] tracking-[-0.03em]">
          What I use when it has to ship
        </h2>
        <p className="mt-5 max-w-[52ch] text-pretty text-muted-foreground">
          A short list on purpose. These are the tools I reach for when the
          work has to leave my laptop.
        </p>
        <div className="mt-10 border-t border-border">
          {practice.map((group) => (
            <div
              key={group.title}
              className="scroll-in grid gap-2 border-b border-border py-5 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-8"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                {group.title}
              </h3>
              <p className="text-pretty text-lg sm:text-xl">{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
