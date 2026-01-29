import type {
  AIVisionSectionData,
  ClientLogosData,
  ConcernsSectionData,
  CTASectionData,
  FooterData,
  HeroData,
  ImageCard,
  InsightCard,
  InsightsSectionData,
  IntroData,
  Logo,
  NetworkCard,
  PortfolioSectionData,
  ProcessSectionData,
  ServicesSectionData,
  SocialProofData,
  StatsSectionData,
  StoryData,
  TeamSectionData,
} from "@/types/homepage";

export const heroData: HeroData = {
  headlineImage: "/images/hero/hero_headline.png",
  subtitle:
    "We're an AI-first design studio that combines human creativity with cutting-edge AI tools to deliver exceptional design solutions. Faster, smarter, and more innovative than traditional agencies.",
  primaryCta: {
    text: "Start a project",
    href: "#",
  },
  secondaryCta: {
    text: "View our work",
    href: "#",
  },
};

export const introData: IntroData = {
  heading:
    "We're an AI-first design studio reimagining how design work gets done",
  highlightedText: "AI-first design studio",
  paragraphs: [
    "The design landscape has fundamentally changed. AI isn't replacing designers—it's amplifying what great designers can achieve. We've built our studio from the ground up to work natively with AI tools, not just use them as an afterthought.",
    "Our approach combines deep design expertise with cutting-edge AI capabilities. We're not just using AI—we're rethinking workflows, processes, and methodologies to deliver exceptional work faster without compromising on quality or creativity.",
    "This means our clients get better outcomes, faster delivery, and more innovative solutions. We handle everything from product design to brand identity, all through an AI-enhanced lens that makes us more efficient and more creative.",
  ],
  image: {
    src: "/images/intro/founders.jpg",
    alt: "Studio team working on AI-enhanced design projects",
  },
};

export const logos: Logo[] = [
  { src: "/images/logos/company1.svg", alt: "Client Company 1", href: "#" },
  { src: "/images/logos/company2.svg", alt: "Client Company 2", href: "#" },
  { src: "/images/logos/company3.svg", alt: "Client Company 3", href: "#" },
  { src: "/images/logos/company4.svg", alt: "Client Company 4", href: "#" },
  { src: "/images/logos/company5.svg", alt: "Client Company 5", href: "#" },
];

export const clientLogosData: ClientLogosData = {
  eyebrow: "Trusted by",
  logos: logos,
  variant: "marquee",
};

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

export const socialProofData: SocialProofData = {
  eyebrow: "Why work with us",
  heading: "Built for teams that move fast",
  founder: {
    name: "10kdesigners Studio",
    role: "AI-first design studio",
    bio: "A tight, senior team shipping polished product and brand work—amplified with AI tools where it makes us faster (without compromising taste or quality).",
    avatar: {
      src: "/images/intro/founders.jpg",
      alt: "Studio founders",
    },
  },
  networkCards,
  statusCards: [
    { label: "Availability", value: "Limited", tone: "warning" },
    { label: "Engagements", value: "2–6 weeks", tone: "neutral" },
    { label: "Team", value: "Senior-only", tone: "positive" },
    { label: "Process", value: "AI-native", tone: "positive" },
  ],
  logos: clientLogosData,
};

export const teamCards: ImageCard[] = [
  {
    image: {
      src: "/images/team/team1.jpg",
      alt: "Studio workspace",
    },
    location: "San Francisco",
    year: "2026",
    caption: "Our AI-first design studio",
  },
  {
    image: {
      src: "/images/team/team2.jpg",
      alt: "Design collaboration",
    },
    location: "New York",
    year: "2026",
    caption: "Human-AI collaboration in action",
  },
  {
    image: {
      src: "/images/team/team3.jpg",
      alt: "Remote studio",
    },
    location: "Remote",
    year: "2026",
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
    year: "2026",
    caption: "AI-powered design workflows",
  },
  {
    image: {
      src: "/images/ai-vision/vision2.jpg",
      alt: "Rapid prototyping",
    },
    location: "Workshop",
    year: "2026",
    caption: "Rapid iteration and prototyping",
  },
  {
    image: {
      src: "/images/ai-vision/vision3.jpg",
      alt: "AI design tools",
    },
    location: "Lab",
    year: "2026",
    caption: "Cutting-edge AI design tools",
  },
];

export const insights: InsightCard[] = [
  { text: "The bar to entry is lower." },
  { text: "Mid-level roles may dry up." },
  { text: "High is the new average." },
  { text: "Senior roles are expected to catch up." },
  { text: "Designers leave design school." },
  { text: "Companies & certificates are useless." },
  { text: "Companies want smaller teams." },
  { text: "AI tools are good but not great." },
  { text: "The design industry can be overwhelming." },
  { text: "Those with a good network grow faster." },
];

export const aiVisionSectionData: AIVisionSectionData = {
  heading:
    "AI-assisted creativity is the single greatest opportunity in design. But most studios aren't ready.",
  highlightedText: "But most studios aren't ready.",
  description:
    "While others are still figuring out how to use AI tools, we've built our entire studio around AI-native workflows. We've moved beyond experimentation to proven processes that deliver better results faster. This isn't the future—it's how we work today.",
  cards: aiVisionCards,
};

export const concernsSectionData: ConcernsSectionData = {
  eyebrow: "Our philosophy",
  heading: "Why AI-first design matters for your business",
  highlightedText: "AI-first design matters",
  paragraphs: [
    "AI is transforming design, but not in the way most people think. It's not replacing designers—it's amplifying what great designers can achieve. The studios that understand this will deliver better work, faster.",
    "We've built our entire approach around this reality. Our team combines deep design expertise with AI-native workflows, meaning we can explore more directions, iterate faster, and deliver higher-quality work in less time.",
    "When you work with us, you're not just getting design services—you're getting a partner who understands both the craft of design and the power of AI. The result? Solutions that are more innovative, delivered faster, without compromising on quality.",
  ],
  bullets: [
    "AI handles repetitive work, freeing us to focus on strategy and creativity",
    "Faster iteration means more exploration and better final outcomes",
    "Our AI-native processes deliver 40% faster without sacrificing quality",
    "We think in systems and narratives, not just pixels",
  ],
  image: {
    src: "/images/concerns/concerns.jpg",
    alt: "Design process notes and AI workflow diagrams on a board",
  },
};

export const insightsSectionData: InsightsSectionData = {
  eyebrow: "What we've learned",
  heading: "Design has changed. AI is not the future, it's how we work today.",
  insights: [
    { text: "AI amplifies great designers, it doesn't replace them." },
    { text: "Speed without quality is meaningless—we deliver both." },
    { text: "The best AI workflows are invisible to clients." },
    { text: "More exploration leads to better final outcomes." },
    { text: "Senior designers + AI tools = unstoppable." },
    { text: "Systems thinking matters more than ever." },
    { text: "Clients want partners who move fast and think deep." },
    { text: "AI-native processes are a competitive advantage." },
    { text: "Quality and speed aren't trade-offs anymore." },
    { text: "The future belongs to studios that adapt, not resist." },
  ],
};

export const footerData: FooterData = {
  preFooterText:
    "Ready to work with an AI-first design studio? Let's create something extraordinary together.",
  cta: {
    text: "Start a project",
    href: "#",
  },
  programInfo: "2026 Studio",
  stats: "50+ projects delivered. 98% client satisfaction.",
  navLinks: [
    { text: "Work", href: "/work" },
    { text: "Services", href: "/services" },
    { text: "Process", href: "/process" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Dribbble", href: "#", icon: "dribbble" },
  ],
  copyright: "© 2026 10kdesigners Studio. All rights reserved.",
};

export const storyData: StoryData = {
  heading: "How we became an AI-first design studio",
  paragraphs: [
    "We started as traditional designers, learning the craft through years of agency and startup work. We learned to obsess over pixels, think in systems, and understand that great design isn't just about aesthetics—it's about solving real problems for real people.",
    "When AI tools began transforming the design landscape, we didn't resist. Instead, we embraced the opportunity to rethink our entire approach. We saw that AI could handle the repetitive work, freeing us to focus on strategy, creativity, and the decisions that actually matter.",
    "Today, our studio operates with an AI-native mindset. Every workflow, every process, every tool choice is made with AI in mind. This isn't about replacing human creativity—it's about amplifying it. The result? Better work, delivered faster, with more time for the creative thinking that makes great design great.",
  ],
  bullets: [
    "Founded by designers with deep agency and startup experience",
    "Early adopters of AI tools in professional design workflows",
    "Built proprietary processes that integrate AI seamlessly",
    "Delivering exceptional results for forward-thinking companies",
  ],
  image: {
    src: "/images/story/founder-story.jpg",
    alt: "Studio team collaborating on AI-enhanced design projects",
  },
};

export const teamSectionData: TeamSectionData = {
  eyebrow: "The studio",
  heading: "A tight-knit team of",
  highlightedText: "senior designers",
  cards: teamCards,
};

export const servicesData: ServicesSectionData = {
  eyebrow: "What we do",
  heading: "AI-powered design services",
  highlightedText: "AI-powered",
  description:
    "We combine senior design expertise with cutting-edge AI tools to deliver exceptional design solutions. Faster delivery, better outcomes, no compromises.",
  services: [
    {
      title: "Product Design",
      description:
        "End-to-end product design from concept to launch. Our AI-enhanced workflows let us explore more directions and deliver production-ready designs faster.",
      icon: "product",
    },
    {
      title: "Brand Identity",
      description:
        "Complete brand systems that capture your vision. From initial concepts to comprehensive guidelines, all delivered with AI-accelerated workflows.",
      icon: "brand",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered interfaces and experiences that balance aesthetics with functionality. AI helps us iterate faster while maintaining our high standards.",
      icon: "ui",
    },
    {
      title: "Design Systems",
      description:
        "Scalable design systems and component libraries built for consistency. AI assists with documentation and maintenance, ensuring long-term success.",
      icon: "system",
    },
    {
      title: "Rapid Prototyping",
      description:
        "Fast iteration and validation using AI tools to explore multiple directions simultaneously. Test ideas quickly, refine what works.",
      icon: "prototype",
    },
    {
      title: "Design Strategy",
      description:
        "Strategic design consulting that aligns your product vision with user needs and business goals. AI helps us analyze data and generate insights faster.",
      icon: "strategy",
    },
  ],
};

export const portfolioSectionData: PortfolioSectionData = {
  eyebrow: "Featured work",
  heading: "Projects that showcase",
  highlightedText: "AI-enhanced creativity",
  description:
    "A selection of our recent work demonstrating how AI tools amplify human creativity and accelerate delivery without compromising quality or taste.",
  cards: aiVisionCards,
};

export const processSectionData: ProcessSectionData = {
  eyebrow: "Our approach",
  heading: "The AI-first design",
  highlightedText: "methodology",
  description:
    "We've developed a systematic approach that integrates AI natively at every stage. This isn't AI as an add-on—it's AI as a fundamental part of how we work.",
  steps: [
    {
      step: 1,
      title: "Discovery & Strategy",
      description:
        "We start by understanding your goals, users, and constraints. AI helps us analyze data, identify patterns, and generate strategic insights faster than traditional methods.",
    },
    {
      step: 2,
      title: "AI-Enhanced Ideation",
      description:
        "Using AI tools, we rapidly explore multiple directions simultaneously, generate variations, and stress-test concepts before committing to any single direction.",
    },
    {
      step: 3,
      title: "Rapid Prototyping",
      description:
        "We build interactive prototypes quickly, using AI to handle repetitive tasks and generate variations while we focus on user experience and strategic decisions.",
    },
    {
      step: 4,
      title: "Iteration & Refinement",
      description:
        "Continuous feedback loops with AI-assisted iteration help us refine designs faster while maintaining our high quality standards. More iterations mean better outcomes.",
    },
    {
      step: 5,
      title: "Delivery & Handoff",
      description:
        "We deliver production-ready designs with comprehensive documentation, design systems, and developer handoff materials. AI helps ensure nothing falls through the cracks.",
    },
  ],
};

export const statsData: StatsSectionData = {
  eyebrow: "By the numbers",
  heading: "Our impact",
  highlightedText: "in numbers",
  stats: [
    {
      label: "Projects Completed",
      value: "50+",
      description: "Successful design projects delivered",
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      description: "Clients who would work with us again",
    },
    {
      label: "Time Saved",
      value: "40%",
      description: "Faster delivery with AI-enhanced workflows",
    },
    {
      label: "Team Members",
      value: "12",
      description: "Senior designers and AI specialists",
    },
  ],
};

export const ctaSectionData: CTASectionData = {
  eyebrow: "Ready to get started?",
  heading: "Let's create something",
  highlightedText: "extraordinary together",
  description:
    "Whether you're launching a new product, rebranding, or need strategic design guidance, we're here to help. Our AI-first approach means faster delivery without compromising quality.",
  primaryCta: {
    text: "Start a project",
    href: "#",
  },
  secondaryCta: {
    text: "View our work",
    href: "#",
  },
};

export const teamNetworkSectionData = {
  eyebrow: "Our network",
  heading: "Connected with",
  highlightedText: "industry leaders",
  description:
    "We work with talented designers, strategists, and partners across the globe to deliver exceptional results. Our network extends our capabilities and ensures we can tackle any challenge.",
  cards: networkCards,
};
