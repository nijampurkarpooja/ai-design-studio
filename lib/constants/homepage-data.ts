import type {
  FooterData,
  HeroData,
  ImageCard,
  InsightCard,
  IntroData,
  Logo,
  NetworkCard,
} from '@/types/homepage';

export const heroData: HeroData = {
  headlineImage: '/images/hero/hero_headline.png',
  subtitle: 'An invite-only private community for designers who want to build the future with AI.',
  primaryCta: {
    text: 'Enroll in AI Studio',
    href: '#',
  },
  secondaryCta: {
    text: 'Join waitlist for a new program',
    href: '#',
  },
};

export const introData: IntroData = {
  heading: 'Welcome to an AI-first studio',
  highlightedText: 'AI-first studio',
  paragraphs: [
    'This is a place where designers come together to learn, create, and push the boundaries of what\'s possible with AI-assisted design.',
    'Founded by experienced designers who understand both the craft and the future of design.',
  ],
  image: {
    src: '/images/intro/founder.jpg',
    alt: 'Founder portrait',
  },
};

export const logos: Logo[] = [
  { src: '/images/logos/company1.svg', alt: 'Company 1', href: '#' },
  { src: '/images/logos/company2.svg', alt: 'Company 2', href: '#' },
  { src: '/images/logos/company3.svg', alt: 'Company 3', href: '#' },
  { src: '/images/logos/company4.svg', alt: 'Company 4', href: '#' },
  { src: '/images/logos/company5.svg', alt: 'Company 5', href: '#' },
];

export const networkCards: NetworkCard[] = [
  {
    title: 'Global Network',
    description: 'Designers from around the world',
    images: ['/images/profiles/profile1.jpg', '/images/profiles/profile2.jpg'],
  },
  {
    title: 'Mentor Network',
    description: 'Experienced mentors ready to guide you',
    images: ['/images/profiles/mentor1.jpg', '/images/profiles/mentor2.jpg'],
  },
];

export const teamCards: ImageCard[] = [
  {
    image: {
      src: '/images/team/team1.jpg',
      alt: 'Team photo 1',
    },
    location: 'San Francisco',
    year: '2024',
    caption: 'Our amazing team working together',
  },
  {
    image: {
      src: '/images/team/team2.jpg',
      alt: 'Team photo 2',
    },
    location: 'New York',
    year: '2024',
    caption: 'Collaboration in action',
  },
  {
    image: {
      src: '/images/team/team3.jpg',
      alt: 'Team photo 3',
    },
    location: 'Remote',
    year: '2024',
    caption: 'Global connections',
  },
];

export const aiVisionCards: ImageCard[] = [
  {
    image: {
      src: '/images/ai-vision/vision1.jpg',
      alt: 'AI vision example 1',
    },
    location: 'Studio',
    year: '2024',
    caption: 'AI-assisted creativity in practice',
  },
  {
    image: {
      src: '/images/ai-vision/vision2.jpg',
      alt: 'AI vision example 2',
    },
    location: 'Workshop',
    year: '2024',
    caption: 'Exploring new possibilities',
  },
  {
    image: {
      src: '/images/ai-vision/vision3.jpg',
      alt: 'AI vision example 3',
    },
    location: 'Lab',
    year: '2024',
    caption: 'Innovation at work',
  },
];

export const insights: InsightCard[] = [
  { text: 'AI is transforming how designers work, not replacing them.' },
  { text: 'The best designs combine human creativity with AI efficiency.' },
  { text: 'Learning AI tools is now essential for modern designers.' },
  { text: 'Design thinking remains crucial, even with AI assistance.' },
  { text: 'The future belongs to designers who embrace AI.' },
  { text: 'AI can handle repetitive tasks, freeing designers for creativity.' },
  { text: 'Understanding AI capabilities opens new design possibilities.' },
  { text: 'Collaboration between designers and AI creates better outcomes.' },
];

export const footerData: FooterData = {
  preFooterText: 'Ready to start your journey?',
  cta: {
    text: 'Join waitlist on Cursor',
    href: '#',
  },
  programInfo: 'AI Studio Program 2024',
  stats: '10,000+ designers • 50+ countries • 100+ mentors',
  navLinks: [
    { text: 'About', href: '/about' },
    { text: 'Programs', href: '/programs' },
    { text: 'Community', href: '/community' },
    { text: 'Contact', href: '/contact' },
  ],
  socialLinks: [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ],
  copyright: '© 2024 10k Designers. All rights reserved.',
};
