"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { Pill } from "@/components/Pill";
import { VISION_PARAGRAPHS } from "@/lib/content";

export function HeroIntro() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Top hero block — left logo + right message (Base 構造) */}
      <div className="relative mx-auto grid max-w-[1250px] gap-10 px-8 pt-[200px] pb-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:pt-[260px]">
        {/* SOLACT logo */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="SOLACT"
            width={600}
            height={600}
            priority
            unoptimized
            className="oc-fade-in-up h-auto w-full max-w-[420px]"
          />
        </div>

        {/* Main message */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-en text-[14px] font-semibold tracking-[0.04em] text-foreground">
            Our Message
          </p>
          <h1 className="font-jp-bold text-[40px] font-bold leading-[1.35] tracking-[-0.01em] text-foreground md:text-[60px] md:leading-[1.35] lg:text-[68px]">
            <span className="block whitespace-nowrap">採用に、</span>
            <span className="block whitespace-nowrap">嘘はいらない。</span>
          </h1>
        </div>
      </div>

      {/* Vision paragraphs — line-by-line reveal (Base 同様 ml-auto 右寄せ) */}
      <div
        ref={ref}
        className="mx-auto max-w-[1250px] px-8 pb-32 md:px-12 md:pb-48"
        aria-label="Our Vision"
      >
        <div className="ml-auto max-w-[650px] text-[16px] leading-[1.9] text-foreground md:text-[18px]">
          {VISION_PARAGRAPHS.map((para, pi) => (
            <p key={pi} className="mb-7 last:mb-0">
              {para.map((line, li) => {
                const totalDelayIdx =
                  VISION_PARAGRAPHS.slice(0, pi).reduce((s, p) => s + p.length, 0) + li;
                return (
                  <span
                    key={li}
                    className="block"
                    style={{
                      animationName: inView ? "oc-line-show" : undefined,
                      animationDuration: inView ? "0.7s" : undefined,
                      animationTimingFunction: inView ? "cubic-bezier(0.22,1,0.36,1)" : undefined,
                      animationFillMode: inView ? "forwards" : undefined,
                      animationDelay: `${totalDelayIdx * 0.08}s`,
                      opacity: inView ? undefined : 0,
                    }}
                  >
                    {line || " "}
                  </span>
                );
              })}
            </p>
          ))}

          <div className="mt-12">
            <Pill label="Story" href="#story" />
          </div>
        </div>
      </div>

      {/* Scroll arrow indicator */}
      <div className="pointer-events-none absolute bottom-12 right-12 hidden md:block">
        <span className="block h-12 w-px bg-foreground/30" />
      </div>
    </section>
  );
}
