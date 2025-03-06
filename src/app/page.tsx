
import AboutSection from "@/components/home/About-section";
import CareerSection from "@/components/home/career-section";
import PortfolioHero from "@/components/home/Hero-section";
import RotatingObjectSection from "@/components/home/Main-section";
import WhyMeSection from "@/components/home/whyme-section";
import FAQSection from "@/components/home/faq-section";
import ContactSection from "@/components/home/contact-section";
import ProjectSection from "@/components/home/project-section";
import { TestimonialsSection } from "@/components/home/marquee-section";



export default function Home() {
  return (
    <>
      <main>
        <PortfolioHero />
        <RotatingObjectSection />
        <ProjectSection />
        <AboutSection />
        <CareerSection />
        <WhyMeSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />

      </main>
    </>
  );
}
