import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, shell } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";

const tones = ["green", "blue", "pink", "amber"];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className={shell}>
        <SectionLabel index="02">Selected work</SectionLabel>
        <div className="scroll-in mt-6 flex flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-[18ch] text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.03em]">
            Work I can walk through
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Open a project to read how it is built, what it had to survive in
            production, and what I can show for it.
          </p>
        </div>

        <ul className="mt-12 border-t border-border">
          {projects.map((project) => (
            <li key={project.id} id={project.id} className="scroll-in scroll-mt-28">
              <Link
                href={`/work/${project.id}`}
                className="group grid gap-4 border-b border-border py-8 transition-colors duration-150 hover:bg-panel sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-10 sm:pr-4"
              >
                <span className="font-mono text-sm text-signal tabular-nums">
                  {project.index}
                </span>
                <span className="min-w-0">
                  <span className="display block text-4xl tracking-[-0.03em] sm:text-5xl">
                    {project.title}
                  </span>
                  <span className="mt-3 block max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    {project.summary}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item, index) => (
                      <span key={item} className={`pill pill-${tones[index % tones.length]}`}>
                        {item}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-base text-signal sm:pt-3">
                  Read
                  <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
