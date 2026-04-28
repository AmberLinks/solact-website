"use client";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/lib/content";

export function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[2000]">
        <div className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
          <Logo />

          {/* Floating pill nav (desktop, top of page) */}
          <nav
            aria-label="Primary"
            className={`hidden md:flex items-center rounded-full bg-[#f8f8f8] shadow-[0_0_0_1px_rgba(0,32,47,0.06)] transition-[opacity,width] duration-300 ${
              collapsed ? "pointer-events-none w-[65px] opacity-0" : "opacity-100 w-auto"
            }`}
          >
            <ul className="flex items-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="flex">
                  <a
                    href={item.href}
                    target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
                    rel={/^https?:\/\//.test(item.href) ? "noopener noreferrer" : undefined}
                    className="flex h-[65px] items-center justify-center px-4 font-en text-[11px] font-semibold tracking-[0.05em] text-foreground transition hover:opacity-60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger button (collapsed state OR mobile) */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className={`flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#f8f8f8] shadow-[0_0_0_1px_rgba(0,32,47,0.06)] transition md:absolute md:right-12 ${
              collapsed ? "md:opacity-100" : "md:pointer-events-none md:opacity-0"
            }`}
          >
            <span className="relative block h-[14px] w-[24px]">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-full bg-foreground transition-transform ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-[2px] w-full bg-foreground transition-transform ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[1999] bg-[#f8f8f8] transition-[opacity,visibility] duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col items-center justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
              rel={/^https?:\/\//.test(item.href) ? "noopener noreferrer" : undefined}
              className="font-en text-2xl font-semibold tracking-[0.04em] text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
