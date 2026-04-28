"use client";
import { useInView } from "@/hooks/useInView";
import { SectionTitle } from "@/components/SectionTitle";
import { STORY_PARAGRAPHS } from "@/lib/content";

export function StorySection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="story" className="oc-sect">
      <div className="mx-auto grid max-w-[1250px] gap-12 px-8 md:grid-cols-[280px_1fr] md:gap-24 md:px-12">
        <div>
          <SectionTitle en="Story" jp="創業のストーリー" />
        </div>

        <div
          ref={ref}
          className={`transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-24 blur-md"
          }`}
        >
          <h3 className="font-jp-bold text-[24px] font-bold leading-[1.83] tracking-[-0.01em] text-foreground">
            その人の本質を、
            <br />
            採用に届ける仕組みを。
          </h3>

          <div className="mt-9 font-sans text-[16px] leading-[1.94] text-foreground md:text-[17px]">
            {STORY_PARAGRAPHS.map((line, i) => (
              <p key={i} className={line ? "mb-4 last:mb-0" : "h-4"}>
                {line || " "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
