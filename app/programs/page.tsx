import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsOverview from '@/components/programs/ProgramsOverview';

export const metadata: Metadata = {
  title: 'Our Programs | Fountain of Hope — RMNCAH & Community Resilience, Garissa',
  description:
    'Explore Fountain of Hope programs across two pillars — RMNCAH (maternal health, menstrual health, family planning, non-communicable diseases) and Community Resilience (peace building, climate change, empowerment) — transforming lives in Garissa County.',
};

const ProgramsGrid = dynamic(() => import('@/components/programs/ProgramsGrid'));
const ProgramDetails = dynamic(() => import('@/components/programs/ProgramDetails'));
const ImpactBanner = dynamic(() => import('@/components/programs/ImpactBanner'));
const ProgramApproach = dynamic(() => import('@/components/programs/ProgramApproach'));
const FeaturedStory = dynamic(() => import('@/components/programs/FeaturedStory'));
const Testimonials = dynamic(() => import('@/components/programs/Testimonials'));
const ProgramsCTA = dynamic(() => import('@/components/programs/ProgramsCTA'));

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ProgramsHero />
      <ProgramsOverview />

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ProgramsGrid />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <ProgramDetails />
      </Suspense>

      <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100" />}>
        <ImpactBanner />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <ProgramApproach />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <FeaturedStory />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100" />}>
        <ProgramsCTA />
      </Suspense>
    </div>
  );
}
