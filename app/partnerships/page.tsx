import type { Metadata } from 'next';
import HeroSection from '@/components/partnerships/HeroSection';
import WhyPartnerSection from '@/components/partnerships/WhyPartnerSection';
import TypesSection from '@/components/partnerships/TypesSection';
import PartnersLogosSection from '@/components/partnerships/PartnersLogosSection';
import ProcessSection from '@/components/partnerships/ProcessSection';
import CTABannerSection from '@/components/partnerships/CTABannerSection';

export const metadata: Metadata = {
  title: 'Partnerships | Fountain of Hope Foundation',
  description:
    'Partner with Fountain of Hope to create lasting change in Garissa County. Explore corporate, institutional, NGO, government, and individual partnership opportunities.',
};

export default function PartnershipsPage() {
  return (
    <>
      <HeroSection />
      <WhyPartnerSection />
      <TypesSection />
      <PartnersLogosSection />
      <ProcessSection />
      <CTABannerSection />
    </>
  );
}
