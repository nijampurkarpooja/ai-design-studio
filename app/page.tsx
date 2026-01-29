import { AIVisionSection } from "@/components/homepage/ai-vision-section";
import { ClientLogosSection } from "@/components/homepage/client-logos-section";
import { ConcernsSection } from "@/components/homepage/concerns-section";
import { CTASection } from "@/components/homepage/cta-section";
import { FooterSection } from "@/components/homepage/footer-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { InsightsSection } from "@/components/homepage/insights-section";
import { IntroSection } from "@/components/homepage/intro-section";
import { PortfolioSection } from "@/components/homepage/portfolio-section";
import { ProcessSection } from "@/components/homepage/process-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { SocialProofSection } from "@/components/homepage/social-proof-section";
import { StatsSection } from "@/components/homepage/stats-section";
import { StorySection } from "@/components/homepage/story-section";
import { TeamSection } from "@/components/homepage/team-section";
import {
  aiVisionSectionData,
  clientLogosData,
  concernsSectionData,
  ctaSectionData,
  footerData,
  heroData,
  insightsSectionData,
  introData,
  portfolioSectionData,
  processSectionData,
  servicesData,
  socialProofData,
  statsData,
  storyData,
  teamSectionData,
} from "@/lib/constants/homepage-data";

export default function Home() {
  return (
    <main>
      {/* Hero: First impression and value proposition */}
      <HeroSection data={heroData} />

      {/* Intro: What we are and what makes us different */}
      <IntroSection data={introData} />

      {/* Client Logos: Early credibility - trusted by */}
      <ClientLogosSection data={clientLogosData} />

      {/* Services: What we offer */}
      <ServicesSection data={servicesData} />

      {/* Process: How we work - AI-first methodology (key differentiator) */}
      <ProcessSection data={processSectionData} />

      {/* Portfolio: Showcase of capabilities and proof of work */}
      <PortfolioSection data={portfolioSectionData} />

      {/* Stats: Quantified results and social proof */}
      <StatsSection data={statsData} />

      {/* AI Vision: Why AI-first matters - the opportunity */}
      <AIVisionSection data={aiVisionSectionData} />

      {/* Concerns: Why AI-first design matters for business - the value */}
      <ConcernsSection data={concernsSectionData} />

      {/* Story: How we became an AI-first studio - our journey */}
      <StorySection data={storyData} />

      {/* Team: Who we are */}
      <TeamSection data={teamSectionData} />

      {/* Insights: What we've learned - thought leadership */}
      <InsightsSection data={insightsSectionData} />

      {/* Social Proof: Why work with us - final credibility push */}
      <SocialProofSection data={socialProofData} />

      {/* CTA: Call to action before footer */}
      <CTASection data={ctaSectionData} />

      {/* Footer: Final navigation and information */}
      <FooterSection data={footerData} />
    </main>
  );
}
