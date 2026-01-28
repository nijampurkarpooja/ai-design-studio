import { HeroSection } from '@/components/homepage/hero-section';
import { heroData } from '@/lib/constants/homepage-data';

export default function Home() {
  return (
    <main>
      <HeroSection data={heroData} />
    </main>
  );
}
