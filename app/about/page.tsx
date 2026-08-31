import type { Metadata } from 'next';
import AboutPageContent from '@/components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | Fountain of Hope — Community-Based Organization in Garissa, Kenya',
  description:
    'Learn about Fountain of Hope, a community-based organization with its roots in Garissa County, Kenya, established in 2017. Discover our approach, values, programmes and impact.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
