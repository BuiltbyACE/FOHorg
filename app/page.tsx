import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';

export const metadata: Metadata = {
  title: 'Fountain of Hope Foundation | Empowering Garissa Communities',
  description: 'Fountain of Hope is a non-profit organization dedicated to improving the health, education, and livelihoods of vulnerable families in Garissa County, Kenya.',
};

const ProgramsSection = dynamic(() => import('@/components/home/ProgramsSection'));
const ImpactSection = dynamic(() => import('@/components/home/ImpactSection'));
const PartnershipsSection = dynamic(() => import('@/components/home/PartnershipsSection'));
const SponsorshipBanner = dynamic(() => import('@/components/home/SponsorshipBanner'));
const GallerySection = dynamic(() => import('@/components/home/GallerySection'));
const DonationCTASection = dynamic(() => import('@/components/home/DonationCTASection'));
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ContactSection = dynamic(() => import('@/components/home/ContactSection'));

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ProgramsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ImpactSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <PartnershipsSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <SponsorshipBanner />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <DonationCTASection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
