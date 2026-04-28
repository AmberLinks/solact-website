import Link from "next/link";

type PillProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
};

export function Pill({ label, href, external, className = "" }: PillProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = `oc-pill ${className}`.trim();
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <span>{label}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span>{label}</span>
    </Link>
  );
}
