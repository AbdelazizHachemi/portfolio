"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import { nav, profile, shell } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const barRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        const progress = max > 0 ? el.scrollTop / max : 0;
        bar.style.transform = `scaleX(${progress})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const content = document.getElementById("site-content");
    if (open) {
      document.body.style.overflow = "hidden";
      content?.setAttribute("inert", "");
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      content?.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      content?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div
        ref={barRef}
        aria-hidden="true"
        className="h-0.5 origin-left bg-signal"
        style={{ transform: "scaleX(0)" }}
      />
      <div className={`${shell} flex h-16 items-center justify-between gap-3`}>
        <a href={onHome ? "#top" : "/"} className="nav-link flex min-h-11 items-center gap-3">
          <span className="display truncate text-lg tracking-tight sm:text-xl">
            <span className="sm:hidden">A. Hachemi</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </span>
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground lg:inline-flex">
            <span className="size-1.5 bg-copper" aria-hidden="true" />
            Open
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={onHome ? `#${item.id}` : `/#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`nav-link px-3 py-2 text-sm ${
                active === item.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ModeToggle />
          <a
            className="btn btn-signal hidden sm:inline-flex"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <button
            type="button"
            className="menu-button inline-flex size-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open
        ? createPortal(
            <div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Sections"
              className="fixed inset-0 z-[60] overflow-y-auto bg-background px-5 pb-10 pt-4 md:hidden"
            >
              <div className="flex h-12 items-center justify-end">
                <button
                  type="button"
                  className="menu-button inline-flex size-11 items-center justify-center"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col">
                {nav.map((item, index) => (
                  <a
                    key={item.id}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={onHome ? `#${item.id}` : `/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="nav-link border-b border-border py-4 display text-4xl"
                  >
                    <span className="mr-3 font-mono text-sm not-italic text-signal tabular-nums">
                      0{index + 2}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                className="btn btn-solid mt-8"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
