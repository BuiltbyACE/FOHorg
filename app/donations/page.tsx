import type { Metadata } from 'next';
import HeroSection from '@/components/donations/HeroSection';
import ImpactStats from '@/components/donations/ImpactStats';
import DonationMethods from '@/components/donations/DonationMethods';
import HowItWorks from '@/components/donations/HowItWorks';
import TransparencyPanel from '@/components/donations/TransparencyPanel';
import Testimonials from '@/components/donations/Testimonials';
import CtaBanner from '@/components/donations/CtaBanner';

export const metadata: Metadata = {
  title: 'Donate | Fountain of Hope Foundation',
  description: 'Support Fountain of Hope with a donation. Every contribution helps improve maternal health, education, and livelihoods in Garissa County, Kenya.',
};

export default function DonationsPage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <DonationMethods />
      <HowItWorks />
      <TransparencyPanel />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
