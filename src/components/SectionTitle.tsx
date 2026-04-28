import { ReactNode } from "react";

type SectionTitleProps = {
  en: ReactNode;
  jp: string;
  className?: string;
};

export function SectionTitle({ en, jp, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="oc-sect-title">{en}</h2>
      <span className="oc-sect-title-sub">{jp}</span>
    </div>
  );
}
