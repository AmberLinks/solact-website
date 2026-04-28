"use client";
import { useInView } from "@/hooks/useInView";
import { SectionTitle } from "@/components/SectionTitle";
import { Pill } from "@/components/Pill";
import { CONTACT_EMAIL } from "@/lib/content";

export function ContactSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="contact" className="oc-sect oc-sect-bg-mat">
      <div className="mx-auto grid max-w-[1250px] gap-12 px-8 md:grid-cols-[280px_1fr] md:gap-24 md:px-12">
        <div>
          <SectionTitle en="Contact" jp="お問い合わせ" />
        </div>

        <div
          ref={ref}
          className={`transition-[opacity,transform] duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-jp-bold text-[24px] font-bold leading-[1.6] tracking-[-0.01em] text-foreground md:text-[28px]">
            ご相談・取材・パートナー連携、
            <br />
            お気軽にお問い合わせください。
          </h3>

          <p className="mt-6 font-sans text-[16px] leading-[1.94] text-muted-text md:text-[17px]">
            事業内容・提携・採用についてのご質問は、下記メールアドレスまでご連絡ください。
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-9 inline-block font-en text-[24px] font-semibold tracking-[0.02em] text-primary underline underline-offset-8 transition hover:text-primary/70 md:text-[32px]"
          >
            {CONTACT_EMAIL}
          </a>

          <div className="mt-10">
            <Pill label="Send Email" href={`mailto:${CONTACT_EMAIL}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
