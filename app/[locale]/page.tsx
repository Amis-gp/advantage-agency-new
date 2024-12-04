'use client';
import AchievementsSection from '@/components/home/AchievementsSection';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSections';
import IntroductionSection from '@/components/home/IntroductionSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import StatsSection from '@/components/home/StatsSection';
import PartnersSection from '@/components/home/PartnersSection';
import Instructions from '@/components/home/InstructionsSection';
import TeamSection from '@/components/home/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='bg-black text-white overflow-hidden'>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <IntroductionSection />
        <PortfolioSection />
        <AchievementsSection />
        <PartnersSection />
        <Instructions />
        <TeamSection />
        <Footer />
      </main>
    </div>
  );
}