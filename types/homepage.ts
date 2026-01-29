export interface HeroData {
  headline: string;
  headlineImage?: string;
  eyebrow?: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  featured?: {
    kicker?: string;
    title: string;
    description: string;
    bullets?: string[];
    image: {
      src: string;
      alt: string;
    };
  };
}

export interface IntroData {
  eyebrow?: string;
  heading: string;
  highlightedText: string; // Text to highlight in heading
  paragraphs: string[];
  bullets?: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Logo {
  src: string;
  alt: string;
  href?: string;
}

export interface ClientLogosData {
  eyebrow?: string; // Optional "Trusted by" text
  heading?: string; // Optional section heading
  logos: Logo[]; // Array of logo objects
  variant?: "grid" | "marquee"; // Layout variant
}

export interface NetworkCard {
  title: string;
  description: string;
  images?: string[]; // Profile picture URLs
}

export interface SocialProofStatusCard {
  label: string;
  value: string;
  tone?: "neutral" | "positive" | "warning";
}

export interface SocialProofFounder {
  name: string;
  role: string;
  bio: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export interface SocialProofData {
  eyebrow?: string;
  heading: string;
  founder: SocialProofFounder;
  networkCards: NetworkCard[];
  statusCards: SocialProofStatusCard[];
  logos: ClientLogosData;
}

export interface ImageCard {
  image: {
    src: string;
    alt: string;
  };
  location: string;
  year: string;
  caption: string;
}

export interface InsightCard {
  text: string;
}

export interface FooterData {
  /** CTA block (merged from CTA section) */
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  programInfo: string;
  stats: string;
  navLinks: Array<{ text: string; href: string }>;
  socialLinks: Array<{ name: string; href: string; icon: string }>;
  copyright: string;
}

export interface StoryData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  paragraphs: string[];
  bullets?: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface TeamMemberCard {
  name: string;
  role: string;
  bio?: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export interface TeamSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  cards: TeamMemberCard[];
}

export interface AIVisionSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  cards: ImageCard[];
}

export interface ConcernsSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  paragraphs: string[];
  bullets?: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface InsightsSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  insights: InsightCard[];
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicesSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  services: ServiceCard[];
}

export interface PortfolioSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  cards: ImageCard[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ProcessSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  steps: ProcessStep[];
}

export interface StatCard {
  label: string;
  value: string;
  description?: string;
}

export interface StatsSectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  stats: StatCard[];
}

export interface CTASectionData {
  eyebrow?: string;
  heading: string;
  highlightedText?: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}
