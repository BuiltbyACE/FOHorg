import HeroSection from '@/components/donations/HeroSection';
import ImpactStats from '@/components/donations/ImpactStats';
import DonationMethods from '@/components/donations/DonationMethods';
import HowItWorks from '@/components/donations/HowItWorks';
import TransparencyPanel from '@/components/donations/TransparencyPanel';
import Testimonials from '@/components/donations/Testimonials';
import CtaBanner from '@/components/donations/CtaBanner';

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
