import { Header } from "@/components/Header";
import { HeroIntro } from "@/components/HeroIntro";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuesSection } from "@/components/ValuesSection";
import { StorySection } from "@/components/StorySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroIntro />
        <ServicesSection />
        <ValuesSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
