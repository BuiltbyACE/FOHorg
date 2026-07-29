import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsOverview from '@/components/programs/ProgramsOverview';
import ProgramsGrid from '@/components/programs/ProgramsGrid';
import ImpactBanner from '@/components/programs/ImpactBanner';
import ProgramApproach from '@/components/programs/ProgramApproach';
import FeaturedStory from '@/components/programs/FeaturedStory';
import Testimonials from '@/components/programs/Testimonials';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramsGrid />
      <ImpactBanner />
      <ProgramApproach />
      <FeaturedStory />
      <Testimonials />
      <ProgramsCTA />
    </div>
  );
}
