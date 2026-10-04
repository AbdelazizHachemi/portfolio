import { profile, shell } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className={`${shell} flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between`}>
        <div>
          <p className="display text-2xl tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software engineer · full-stack and platform
          </p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground tabular-nums">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
