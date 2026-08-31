import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';

export const metadata: Metadata = {
  title: 'Fountain of Hope | Community-Based Organization in Garissa, Kenya',
  description:
    'Fountain of Hope is a community-based organization in Garissa County, Kenya, improving the health, education and livelihoods of vulnerable communities through strategic partnerships and sustainable programmes.',
};

const BuildingHopeSection = dynamic(() => import('@/components/home/BuildingHopeSection'));
const ProgramsSection = dynamic(() => import('@/components/home/ProgramsSection'));
const MaternalHealthSection = dynamic(() => import('@/components/home/MaternalHealthSection'));
const PartnershipsSection = dynamic(() => import('@/components/home/PartnershipsSection'));
const GallerySection = dynamic(() => import('@/components/home/GallerySection'));
const ContactSection = dynamic(() => import('@/components/home/ContactSection'));

const fallback = <div className="h-96 animate-pulse bg-gray-100" />;

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />

      <Suspense fallback={fallback}>
        <BuildingHopeSection />
      </Suspense>

      <Suspense fallback={fallback}>
        <ProgramsSection />
      </Suspense>

      <Suspense fallback={fallback}>
        <MaternalHealthSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <PartnershipsSection />
      </Suspense>

      <Suspense fallback={fallback}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
