import type { Metadata } from 'next';
import HeroSection from '@/components/contact/HeroSection';
import QuickInfoStrip from '@/components/contact/QuickInfoStrip';
import ContactGrid from '@/components/contact/ContactGrid';
import InfoCardsRow from '@/components/contact/InfoCardsRow';
import CtaBanner from '@/components/contact/CtaBanner';

export const metadata: Metadata = {
  title: 'Contact Us | Fountain of Hope Foundation',
  description: 'Get in touch with Fountain of Hope Foundation. Reach us for partnerships, donations, volunteering, or inquiries about our programs in Garissa County.',
};

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
