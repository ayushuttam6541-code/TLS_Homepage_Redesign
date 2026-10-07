import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { CustomCursor } from "@/components/animation/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SportsSection } from "@/components/sections/SportsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { RankingsSection } from "@/components/sections/RankingsSection";
import { CampusSection } from "@/components/sections/CampusSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { VirtualTourSection } from "@/components/sections/VirtualTourSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SportsSection />
        <StatisticsSection />
        <RankingsSection />
        <CampusSection />
        <AchievementsSection />
        <AwardsSection />
        <VirtualTourSection />
        <TestimonialsSection />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}
