import { path, shell } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";

export function Path() {
  return (
    <section id="path" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className={shell}>
        <SectionLabel index="04">Path</SectionLabel>
        <h2 className="scroll-in display mt-5 max-w-[14ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94] tracking-[-0.03em]">
          School, clients, and the product
        </h2>
        <ol className="mt-10 border-t border-border">
          {path.map((item) => (
            <li
              key={item.title}
              className="scroll-in grid gap-3 border-b border-border py-8 sm:grid-cols-[150px_1fr] sm:gap-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper tabular-nums">
                {item.when}
              </p>
              <div>
                <h3 className="display text-3xl tracking-[-0.03em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.place}</p>
                <p className="mt-3 max-w-[62ch] text-pretty text-muted-foreground">
                  {item.text}
                </p>
                {item.stack ? (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {item.stack}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
