import type {
  AIVisionSectionData,
  ClientLogosData,
  ConcernsSectionData,
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
  TeamMemberCard,
  TeamSectionData,
} from "@/types/homepage";

export const heroData: HeroData = {
  eyebrow: "Lumen — AI-first design studio",
  headline: "Design, amplified.",
  subtitle:
    "We combine human creativity with AI-native workflows to deliver exceptional product and brand design. Faster, smarter, and built for teams that move fast.",
  primaryCta: {
    text: "Start a project",
    href: "#",
  },
  secondaryCta: {
    text: "View our work",
    href: "#portfolio",
  },
};

export const introData: IntroData = {
  heading:
    "We're an AI-first design studio reimagining how design work gets done",
  highlightedText: "AI-first design studio",
  paragraphs: [
    "The design landscape has fundamentally changed. AI isn't replacing designers—it's amplifying what great designers can achieve. We've built our studio from the ground up to work natively with AI tools, not just use them as an afterthought.",
    "Our approach combines deep design expertise with cutting-edge AI capabilities. We rethink workflows and methodologies to deliver exceptional work faster without compromising on quality or creativity.",
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
    name: "Lumen",
    role: "AI-first design studio",
    bio: "Senior team shipping product and brand work—amplified with AI where it makes us faster.",
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

export const teamMembers: TeamMemberCard[] = [
  {
    name: "Alex Chen",
    role: "Lead Product Designer",
    bio: "10+ years in product and brand. Ships AI-native workflows daily.",
    avatar: { src: "/images/team/team1.jpg", alt: "Alex Chen" },
  },
  {
    name: "Jordan Reese",
    role: "Senior Brand Designer",
    bio: "Brand systems and identity. Believes AI frees time for craft.",
    avatar: { src: "/images/team/team2.jpg", alt: "Jordan Reese" },
  },
  {
    name: "Sam Rivera",
    role: "Design Systems Lead",
    bio: "Design systems and UI. Makes AI part of the pipeline.",
    avatar: { src: "/images/team/team3.jpg", alt: "Sam Rivera" },
  },
];

export const aiVisionCards: ImageCard[] = [
  {
    image: {
      src: "/images/ai-vision/vision1.jpg",
      alt: "AI-native design workflow in the studio",
    },
    location: "Our studio",
    year: "2026",
    caption:
      "We run AI-native workflows from day one—not bolt-ons. Discovery, ideation, and handoff all speak the same language.",
  },
  {
    image: {
      src: "/images/ai-vision/vision2.jpg",
      alt: "Rapid iteration and prototyping with AI",
    },
    location: "Process",
    year: "2026",
    caption:
      "More directions in less time. We stress-test concepts and refine with AI so we commit to the right direction.",
  },
  {
    image: {
      src: "/images/ai-vision/vision3.jpg",
      alt: "AI design tools integrated into practice",
    },
    location: "Tooling",
    year: "2026",
    caption:
      "Curated stack of AI design tools. We adopt what works and drop what doesn’t—so clients get speed and quality.",
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
  eyebrow: "Why we do what we do",
  heading: "Why AI-first design matters for every project",
  highlightedText: "AI-first design matters",
  description:
    "AI is transforming design, but not by replacing designers—instead, it amplifies what great teams can achieve. Our studio is built on AI-native workflows: more ideas, faster iteration, and better client results.",
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
  heading: "Principles we live by—how we work with AI today.",
  highlightedText: "Principles we live by",
  description:
    "These tenets guide how we run the studio and partner with clients. They're always evolving.",
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
  heading: "A tight-knit team of senior designers",
  highlightedText: "senior designers",
  cards: teamMembers,
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

const portfolioCards: ImageCard[] = [
  {
    image: {
      src: "/images/portfolio/project1.jpg",
      alt: "Fintech app — dashboard and onboarding",
    },
    location: "Product Design",
    year: "2026",
    caption:
      "End-to-end product design for a fintech startup. AI-accelerated exploration led to a clearer dashboard and onboarding flow.",
  },
  {
    image: {
      src: "/images/portfolio/project2.jpg",
      alt: "Brand identity and design system",
    },
    location: "Brand & Design System",
    year: "2026",
    caption:
      "Brand identity and scalable design system for a B2B SaaS. Delivered in 4 weeks with AI-assisted asset production.",
  },
  {
    image: {
      src: "/images/portfolio/project3.jpg",
      alt: "E-commerce experience redesign",
    },
    location: "E-commerce",
    year: "2025",
    caption:
      "UX overhaul and visual refresh for an e-commerce client. Higher conversion and faster iteration with AI in the loop.",
  },
];

export const portfolioSectionData: PortfolioSectionData = {
  eyebrow: "Featured work",
  heading: "Projects that showcase",
  highlightedText: "AI-enhanced creativity",
  description:
    "Recent work: AI tools amplifying human creativity and faster delivery.",
  cards: portfolioCards,
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

export const teamNetworkSectionData = {
  eyebrow: "Our network",
  heading: "Connected with",
  highlightedText: "industry leaders",
  description:
    "We work with talented designers, strategists, and partners across the globe to deliver exceptional results. Our network extends our capabilities and ensures we can tackle any challenge.",
  cards: networkCards,
};
