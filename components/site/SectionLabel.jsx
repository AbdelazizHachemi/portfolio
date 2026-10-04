export function SectionLabel({ index, children }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="text-signal tabular-nums">{index}</span>
      <span aria-hidden="true" className="px-2">
        /
      </span>
      {children}
    </p>
  );
}
