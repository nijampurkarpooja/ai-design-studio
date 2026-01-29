import { AIVisionSection } from "@/components/homepage/ai-vision-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { InsightsSection } from "@/components/homepage/insights-section";
import { IntroSection } from "@/components/homepage/intro-section";
import { PortfolioSection } from "@/components/homepage/portfolio-section";
import { ProcessSection } from "@/components/homepage/process-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { SocialProofSection } from "@/components/homepage/social-proof-section";
import { StatsSection } from "@/components/homepage/stats-section";
import { TeamSection } from "@/components/homepage/team-section";
import {
  aiVisionSectionData,
  heroData,
  insightsSectionData,
  introData,
  portfolioSectionData,
  processSectionData,
  servicesData,
  socialProofData,
  statsData,
  teamSectionData,
} from "@/lib/constants/homepage-data";

export default function Home() {
  return (
    <main>
      {/* Hero: First impression and value proposition */}
      <HeroSection data={heroData} />

      {/* Intro: What we are and what makes us different */}
      <IntroSection data={introData} />

      {/* Services: What we offer */}
      <ServicesSection data={servicesData} />

      {/* Process: How we work - AI-first methodology (key differentiator) */}
      <ProcessSection data={processSectionData} />

      {/* AI Vision: Why AI-first matters (single block) */}
      <AIVisionSection data={aiVisionSectionData} />

      {/* Portfolio: Showcase of capabilities (only card grid) */}
      <PortfolioSection data={portfolioSectionData} />

      {/* Stats: Quantified results and social proof */}
      <StatsSection data={statsData} />

      {/* Social Proof: Why work with us (mixed layout) */}
      <SocialProofSection data={socialProofData} />

      {/* Team: Who we are (single featured image) */}
      <TeamSection data={teamSectionData} />

      {/* Insights: What we've learned - thought leadership */}
      <InsightsSection data={insightsSectionData} />
    </main>
  );
}
