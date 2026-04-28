"use client";
import { useInView } from "@/hooks/useInView";
import { SectionTitle } from "@/components/SectionTitle";
import { CORE_VALUES } from "@/lib/content";

export function ValuesSection() {
  const { ref, inView } = useInView<HTMLUListElement>();
  return (
    <section id="values" className="oc-sect oc-sect-bg-mat">
      <div className="mx-auto grid max-w-[1250px] gap-12 px-8 md:grid-cols-[1fr_1fr] md:gap-24 md:px-12">
        {/* Left title block */}
        <div>
          <SectionTitle
            en={
              <>
                SOLACT
                <br aria-hidden />
                Values
              </>
            }
            jp="私たちが大切にしている3つの価値観"
          />
          <p className="mt-10 max-w-[380px] font-jp-bold text-[16px] font-bold leading-[1.875] tracking-[-0.01em] text-foreground">
            「採用に、嘘はいらない」を実現するために、
            私たちが事業の土台に据える行動指針です。
          </p>
        </div>

        {/* Right list */}
        <ul
          ref={ref}
          className={`flex flex-col transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-24 blur-md"
          }`}
        >
          {CORE_VALUES.map((v, i) => (
            <li
              key={v.jp}
              className={`flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between ${
                i > 0 ? "border-t border-foreground/10" : ""
              }`}
            >
              <span className="font-jp-bold text-[18px] font-bold leading-[1.6] tracking-[-0.01em] text-foreground">
                {v.jp}
              </span>
              <span className="font-en text-[18px] font-normal leading-[1.6] text-muted-line">
                {v.en}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
