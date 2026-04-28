"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { SectionTitle } from "@/components/SectionTitle";
import { SERVICES } from "@/lib/content";

export function ServicesSection() {
  const { ref, inView } = useInView<HTMLUListElement>();
  return (
    <section id="services" className="oc-sect">
      <div className="mx-auto grid max-w-[1250px] gap-12 px-8 md:grid-cols-[280px_1fr] md:gap-24 md:px-12">
        {/* Left title */}
        <div>
          <SectionTitle en="Services" jp="サービス" />
          <p className="mt-10 max-w-[260px] font-jp-bold text-[14px] leading-[1.85] tracking-[-0.01em] text-muted-text">
            診断から行動実績まで、本質で選ばれる採用を支える4つのプロダクト。
          </p>
        </div>

        {/* Right service list */}
        <ul
          ref={ref}
          className={`flex flex-col transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-24 blur-md"
          }`}
        >
          {SERVICES.map((s, i) => (
            <li
              key={s.name}
              className={`group ${i > 0 ? "border-t border-foreground/10" : ""}`}
            >
              <div className="flex flex-col gap-2 py-7">
                <h3 className="font-jp-bold text-[24px] font-bold leading-[1.4] tracking-[-0.01em] text-foreground md:text-[28px]">
                  {s.name}
                </h3>
                <p className="flex items-center gap-2 font-jp-bold text-[14px] font-bold leading-[1.85] tracking-[-0.01em] text-muted-text md:text-[15px]">
                  {s.desc}
                  <Image
                    src="/images/icons/icon-blank.svg"
                    alt=""
                    width={12}
                    height={12}
                    aria-hidden
                    unoptimized
                  />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
