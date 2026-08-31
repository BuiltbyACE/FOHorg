'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Target,
  Heart,
  Users,
  HandHeart,
  Eye,
  Compass,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/common/Button';
import AboutCarousel, { type CarouselSlide } from './AboutCarousel';
import { approachSteps } from '@/constants/programs';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const values = [
  { label: 'Community Ownership', icon: Users },
  { label: 'Integrity', icon: ShieldIcon },
  { label: 'Compassion', icon: Heart },
  { label: 'Transparency', icon: Eye },
  { label: 'Collaboration', icon: HandHeart },
];

const carouselSlides: CarouselSlide[] = [
  {
    src: '/images/foh21.jpeg',
    alt: 'Maternal and newborn health outreach under the Okoa Mama initiative in Garissa',
    caption: 'Championing safe motherhood through the Okoa Mama na Mtoto Initiative.',
  },
  {
    src: '/images/foh7.jpeg',
    alt: 'Menstrual health and dignity support for girls in Garissa',
    caption: 'Menstrual health education and dignity kits keep girls in school.',
  },
  {
    src: '/images/quality education.jpeg',
    alt: 'Children in a Fountain of Hope quality education programme',
    caption: 'Quality education and retention support for children across the county.',
  },
  {
    src: '/images/foh22.jpeg',
    alt: 'Community peace building dialogue facilitated by Fountain of Hope',
    caption: 'Peace building and social cohesion dialogues strengthen communities.',
  },
  {
    src: '/images/fohhero2.jpeg',
    alt: 'Young people empowered through Fountain of Hope youth programmes',
    caption: 'Empowering youth through mentorship, skills and opportunity.',
  },
];

function ShieldIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,30,99,0.06),transparent_50%)] pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-6">
                <Compass size={16} />
                About Fountain of Hope
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight mb-6">
                Rooted in Garissa,{' '}
                <span className="text-primary">Building Hope</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-xl">
                Fountain of Hope is a community-based organization working to improve
                the health, education and livelihoods of vulnerable communities in
                Garissa County through strategic partnerships and sustainable
                programmes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/programs" size="lg">
                  Our Programs
                  <ArrowRight size={18} />
                </Button>
                <Button href="/donations" variant="outline" size="lg">
                  Support Our Work
                  <Heart size={18} className="fill-primary" />
                </Button>
              </div>
              <p className="mt-6">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  View Full Gallery
                  <ArrowRight size={16} />
                </Link>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-navy/5 rounded-3xl blur-2xl" />
              <div className="relative">
                <AboutCarousel slides={carouselSlides} interval={4500} />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Who We Are / Profile */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-navy/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                <Image
                  src="/images/our story in the about page.jpeg"
                  alt="Members of the Fountain of Hope community standing together"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-6">
                Our Journey in the{' '}
                <span className="text-primary">Northern Frontier</span>
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Fountain of Hope is a community-based organization with its roots
                  in Garissa County in the Northern frontier of Kenya. The
                  organization was established in the year 2017, driven by a deep
                  commitment to the well-being of vulnerable communities.
                </p>
                <p>
                  From a modest beginning, we have grown into a recognized force for
                  maternal and newborn health advocacy, quality education, peace
                  building, and youth empowerment — working hand-in-hand with
                  government, faith leaders, health workers and young champions
                  across the county.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 text-navy font-semibold text-sm">
                  <HeartHandshake size={20} className="text-primary flex-shrink-0" />
                  Community-based in Garissa County
                </div>
                <div className="flex items-center gap-3 text-navy font-semibold text-sm">
                  <Target size={20} className="text-primary flex-shrink-0" />
                  Established 2017
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="approach">
        <Container>
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              How We Work
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              A disciplined, community-led cycle that turns needs into lasting impact.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
          >
            {approachSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-navy to-navy-light" id="values">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,30,99,0.15),transparent_50%)] pointer-events-none" />
        <Container className="relative">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Five values sit at the heart of everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <value.icon size={26} className="text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {value.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 md:py-24">
        <Container>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-rose-700 px-8 py-16 md:px-16 md:py-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_50%)] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                Let&apos;s Build Hope Together
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Partner with us, volunteer, or get in touch with our Garissa team.
                Every contribution helps us reach more communities and transform more lives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-primary font-bold text-base uppercase tracking-[0.03em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-white/40 text-white font-bold text-base uppercase tracking-[0.03em] hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
