export interface HeroData {
  headlineImage: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface IntroData {
  heading: string;
  highlightedText: string; // Text to highlight in heading
  paragraphs: string[];
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

export interface NetworkCard {
  title: string;
  description: string;
  images?: string[]; // Profile picture URLs
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
  preFooterText: string;
  cta: {
    text: string;
    href: string;
  };
  programInfo: string;
  stats: string;
  navLinks: Array<{ text: string; href: string }>;
  socialLinks: Array<{ name: string; href: string; icon: string }>;
  copyright: string;
}
