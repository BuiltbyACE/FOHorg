import HeroSection from '@/components/contact/HeroSection';
import QuickInfoStrip from '@/components/contact/QuickInfoStrip';
import ContactGrid from '@/components/contact/ContactGrid';
import InfoCardsRow from '@/components/contact/InfoCardsRow';
import CtaBanner from '@/components/contact/CtaBanner';

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <QuickInfoStrip />
      <ContactGrid />
      <InfoCardsRow />
      <CtaBanner />
    </>
  );
}
