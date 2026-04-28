import { Logo } from "@/components/Logo";
import { LEGAL_LINKS, NAV_ITEMS, CONTACT_EMAIL } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1250px] px-8 pt-20 pb-10 md:px-12">
        <Logo width={200} height={48} variant="white" />

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
                  rel={/^https?:\/\//.test(item.href) ? "noopener noreferrer" : undefined}
                  className="font-en text-[12px] font-semibold tracking-[0.05em] text-background transition hover:opacity-60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-en text-[14px] font-semibold tracking-[0.04em] text-background transition hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-background/10 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[11px] underline underline-offset-4 text-background/80 transition hover:opacity-60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-en text-[11px] tracking-[0.06em] text-background/60">
            © {year} SOLACT
          </p>
        </div>
      </div>
    </footer>
  );
}
