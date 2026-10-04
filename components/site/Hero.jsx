import { facts, heroPills, profile, roles, shell, ticker } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero-stage">
      <div className="shape shape-a" aria-hidden="true" />
      <div className="shape shape-b" aria-hidden="true" />
      <div className="shape shape-c" aria-hidden="true" />

      <div className={`${shell} relative py-14 text-center sm:py-20`}>
        <p className="font-mono text-sm font-medium tracking-[0.16em] text-signal sm:text-base">
          $ ship --product --pipeline
        </p>
        <h1 className="mx-auto mt-4 max-w-[12ch] font-sans text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          az@lab:~$
        </h1>
        <p className="mt-1 font-sans text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-signal">
          whoami
        </p>
        <p className="mt-6 text-xl text-foreground sm:text-2xl">
          <span className="sr-only">{roles.join(", ")}</span>
          <span aria-hidden="true" className="inline-flex items-baseline justify-center gap-2">
            <span className="text-signal">&gt;</span>
            <span className="role-cycle">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </span>
          </span>
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I build the interface, the services behind it, and the rollout that
          gets them to production. Open to remote roles and client work.
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {heroPills.map((pill) => (
            <li key={pill.label} className={`pill pill-${pill.tone}`}>
              {pill.label}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a className="btn btn-signal px-5" href="#work">
            Explore my work
          </a>
          <a className="btn btn-line px-5" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a className="link-quiet inline-flex min-h-11 items-center" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="link-quiet inline-flex min-h-11 items-center" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link-quiet inline-flex min-h-11 items-center" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-5xl gap-8 text-left sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-border pt-4">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-copper">
                {fact.label}
              </dt>
              <dd className="mt-2 text-pretty text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="ticker-clip border-y border-border" aria-hidden="true">
        <div className="ticker-track">
          <TickerRow />
          <TickerRow copy />
        </div>
      </div>
    </section>
  );
}

function TickerRow({ copy = false }) {
  return (
    <div className="ticker-row" {...(copy ? { "data-ticker-copy": "" } : {})}>
      {ticker.map((item) => (
        <span className="ticker-item" key={`${copy ? "b" : "a"}-${item}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
