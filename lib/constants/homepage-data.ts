import type {
  FooterData,
  HeroData,
  ImageCard,
  InsightCard,
  IntroData,
  Logo,
  NetworkCard,
} from "@/types/homepage";



export const heroData: HeroData = {
  headlineImage: "/images/hero/hero_headline.png",
  subtitle:
    "We're an AI-first design studio creating exceptional digital experiences. We combine human creativity with AI-powered tools to deliver innovative solutions faster and smarter.",
  primaryCta: {
    text: "Start a project",
    href: "#",
  },
  secondaryCta: {
    text: "Explore our work",
    href: "#",
  },
  featured: {
    kicker: "AI-Powered Design",
    title: "Where creativity meets artificial intelligence.",
    description:
      "We leverage cutting-edge AI tools to accelerate design workflows, explore more possibilities, and deliver exceptional results. Our studio specializes in product design, brand identity, and digital experiences that push boundaries.",
    bullets: [
      "AI-enhanced design workflows that save time and unlock creativity",
      "Experienced team working with leading brands and startups",
      "Proven track record of innovative, user-centered solutions",
    ],
    image: {
      src: "/images/intro/founders.jpg",
      alt: "Studio team",
    },
  },
};

export const introData: IntroData = {
  heading: "Design reimagined with AI",
  highlightedText: "AI",
  paragraphs: [
    "We're not just using AI tools—we're rethinking the entire design process. By integrating AI at every stage, from ideation to execution, we create more innovative solutions in less time.",
    "Our approach combines the best of human intuition and AI capabilities. We use AI to handle repetitive tasks, generate variations, and explore possibilities, while our designers focus on strategy, user experience, and creative direction.",
  ],
  bullets: [
    "AI-powered ideation and rapid prototyping",
    "Intelligent design systems and component libraries",
    "Data-driven insights that inform every decision",
  ],
  image: {
    src: "/images/intro/founders.jpg",
    alt: "AI design process",
  },
};

export const logos: Logo[] = [
  { src: "/images/logos/company1.svg", alt: "Client Company 1", href: "#" },
  { src: "/images/logos/company2.svg", alt: "Client Company 2", href: "#" },
  { src: "/images/logos/company3.svg", alt: "Client Company 3", href: "#" },
  { src: "/images/logos/company4.svg", alt: "Client Company 4", href: "#" },
  { src: "/images/logos/company5.svg", alt: "Client Company 5", href: "#" },
];

export const networkCards: NetworkCard[] = [
  {
    title: "Design Team",
    description: "Expert designers and AI specialists",
    images: ["/images/profiles/profile1.jpg", "/images/profiles/profile2.jpg"],
  },
  {
    title: "Client Partners",
    description: "Trusted by innovative companies worldwide",
    images: ["/images/profiles/mentor1.jpg", "/images/profiles/mentor2.jpg"],
  },
];

export const teamCards: ImageCard[] = [
  {
    image: {
      src: "/images/team/team1.jpg",
      alt: "Studio workspace",
    },
    location: "San Francisco",
    year: "2024",
    caption: "Our AI-first design studio",
  },
  {
    image: {
      src: "/images/team/team2.jpg",
      alt: "Design collaboration",
    },
    location: "New York",
    year: "2024",
    caption: "Human-AI collaboration in action",
  },
  {
    image: {
      src: "/images/team/team3.jpg",
      alt: "Remote studio",
    },
    location: "Remote",
    year: "2024",
    caption: "Global team, unified vision",
  },
];

export const aiVisionCards: ImageCard[] = [
  {
    image: {
      src: "/images/ai-vision/vision1.jpg",
      alt: "AI design workflow",
    },
    location: "Studio",
    year: "2024",
    caption: "AI-powered design workflows",
  },
  {
    image: {
      src: "/images/ai-vision/vision2.jpg",
      alt: "Rapid prototyping",
    },
    location: "Workshop",
    year: "2024",
    caption: "Rapid iteration and prototyping",
  },
  {
    image: {
      src: "/images/ai-vision/vision3.jpg",
      alt: "AI design tools",
    },
    location: "Lab",
    year: "2024",
    caption: "Cutting-edge AI design tools",
  },
];

export const insights: InsightCard[] = [
  { text: "AI amplifies human creativity, it doesn't replace it." },
  { text: "We use AI to explore more possibilities, faster." },
  { text: "Every project starts with understanding the problem, not the tool." },
  { text: "The best designs emerge from human-AI collaboration." },
  { text: "AI handles iteration, designers handle vision." },
  { text: "We're building the future of design, today." },
  { text: "Speed and quality aren't trade-offs with AI-first design." },
  { text: "Our studio proves AI and creativity are perfect partners." },
];

export const footerData: FooterData = {
  preFooterText: "Ready to transform your design?",
  cta: {
    text: "Start a project",
    href: "#",
  },
  programInfo: "AI-First Design Studio",
  stats: "50+ projects • 30+ clients • 100% AI-enhanced",
  navLinks: [
    { text: "About", href: "/about" },
    { text: "Work", href: "/work" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Dribbble", href: "#", icon: "dribbble" },
  ],
  copyright: "© 2024 AI Design Studio. All rights reserved.",
};
