import type { Metadata } from 'next';
import SponsorshipHero from '@/components/sponsorship/HeroSection';
import StatsStrip from '@/components/sponsorship/StatsStrip';
import WhySponsorSection from '@/components/sponsorship/WhySponsorSection';
import PricingTiers from '@/components/sponsorship/PricingTiers';
import ImpactGrid from '@/components/sponsorship/ImpactGrid';
import PartnersStrip from '@/components/sponsorship/PartnersStrip';
import CtaBanner from '@/components/sponsorship/CtaBanner';

export const metadata: Metadata = {
  title: 'Sponsorship | Fountain of Hope',
  description:
    'Sponsor Fountain of Hope and empower lives through education, healthcare, youth development, and community outreach programs across Kenya.',
};

export default function SponsorshipPage() {
  return (
    <>
      <SponsorshipHero />
      <StatsStrip />
      <WhySponsorSection />
      <PricingTiers />
      <ImpactGrid />
      <PartnersStrip />
      <CtaBanner />
    </>
  );
}
