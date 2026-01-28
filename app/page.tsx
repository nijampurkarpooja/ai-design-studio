import { HeroSection } from '@/components/homepage/hero-section';
import { IntroSection } from '@/components/homepage/intro-section';
import { heroData, introData } from '@/lib/constants/homepage-data';

export default function Home() {
  return (
    <main>
      <HeroSection data={heroData} />
      <IntroSection data={introData} />
    </main>
  );
}
