import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, shell } from "@/lib/content";

const tones = ["green", "blue", "pink", "amber"];

export function ProjectArticle({ project }) {
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className={`${shell} py-12 sm:py-16`}>
      <div className="mx-auto max-w-3xl">
        <Link href="/#work" className="link-quiet inline-flex min-h-11 items-center text-sm">
          All work
        </Link>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.16em] text-signal">
          {project.kind}
          <span className="px-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground tabular-nums">{project.year}</span>
        </p>
        <h1 className="display mt-3 text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
          {project.title}
        </h1>
        <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item, toneIndex) => (
            <li key={item} className={`pill pill-${tones[toneIndex % tones.length]}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading} className="scroll-in">
            <h2 className="display text-3xl tracking-[-0.03em] sm:text-4xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <p className="border-l-2 border-copper pl-5 text-pretty text-lg leading-relaxed">
          {project.proof}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="btn btn-signal"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Next
          </p>
          <Link
            href={`/work/${next.id}`}
            className="display mt-2 inline-block text-3xl tracking-[-0.03em] hover:text-signal"
          >
            {next.title}
          </Link>
        </div>
      </div>
    </article>
  );
}
