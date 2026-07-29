import HeroSection from '@/components/home/HeroSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import ImpactSection from '@/components/home/ImpactSection';
import PartnershipsSection from '@/components/home/PartnershipsSection';
import SponsorshipBanner from '@/components/home/SponsorshipBanner';
import GallerySection from '@/components/home/GallerySection';
import DonationCTASection from '@/components/home/DonationCTASection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Programs */}
      <ProgramsSection />

      {/* 4. Impact Section */}
      <ImpactSection />

      {/* 5. Partnerships */}
      <PartnershipsSection />

      {/* 6. Sponsorship Banner */}
      <SponsorshipBanner />

      {/* 7. Gallery */}
      <GallerySection />

      {/* 8. Donation CTA */}
      <DonationCTASection />

      {/* 9. About Section */}
      <AboutSection />

      {/* 10. Contact */}
      <ContactSection />
    </div>
  );
}
