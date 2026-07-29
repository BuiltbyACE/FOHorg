'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Target,
  Eye,
  Users,
  GraduationCap,
  Shield,
  Globe,
  HandHeart,
  BookOpen,
  Building2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Trees,
  Home,
  Stethoscope,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/common/Button';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { staggerChildren: 0.1 },
};

const fadeUpChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,29,72,0.04),transparent_50%)] pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-6">
                <Sparkles size={16} />
                About Our Foundation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight mb-6">
                Empowering Communities,{' '}
                <span className="text-primary">Transforming Lives</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-xl">
                At Foundation of Hope, we believe in the power of collective action. 
                Since our inception, we have been dedicated to creating sustainable change 
                in underserved communities through education, healthcare, and empowerment programs.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                Our approach combines local knowledge with global best practices, ensuring 
                that every initiative we undertake creates lasting, meaningful impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/donate" size="lg">
                  Donate Now
                  <Heart size={18} className="fill-white" />
                </Button>
                <Button href="/programs" variant="outline" size="lg">
                  Our Programs
                  <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-navy/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                <Image
                  src="/images/First.png"
                  alt="Smiling child giving a thumbs-up"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                  preload
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision & Values */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light pointer-events-none" />
        <Container className="relative">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              What Drives Us
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Our mission, vision, and core values guide every decision we make and every community we serve.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            {...stagger}
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'To empower underserved communities through sustainable education, healthcare, and economic development programs that create lasting, positive change.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description:
                  'A world where every individual has equal access to opportunities, resources, and the support needed to build a better future for themselves and their communities.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                description:
                  'Integrity, compassion, transparency, and collaboration are at the heart of everything we do. We believe in dignity for all and accountability to those we serve.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                {...fadeUpChild}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Impact Statistics */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Making a Difference Together
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Numbers that reflect our commitment and the trust communities place in us.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            {...stagger}
          >
            {[
              { icon: Users, number: '50,000+', label: 'Lives Impacted' },
              { icon: GraduationCap, number: '12,000+', label: 'Children Educated' },
              { icon: Building2, number: '150+', label: 'Communities Served' },
              { icon: HandHeart, number: '2,000+', label: 'Active Volunteers' },
              { icon: Award, number: '85+', label: 'Programs Launched' },
              { icon: Globe, number: '20+', label: 'Partner Organizations' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center group"
                {...fadeUpChild}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">{stat.number}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />
        <Container className="relative">
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
                  src="/images/Second.png"
                  alt="Four volunteers standing together"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                  preload
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
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-6">
                The Story Behind{' '}
                <span className="text-primary">Our Foundation</span>
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Foundation of Hope was born from a simple yet powerful idea: that every person 
                  deserves the opportunity to thrive. What started as a small community initiative 
                  has grown into a global movement of compassion and change.
                </p>
                <p>
                  Over the years, we have evolved from providing immediate relief to implementing 
                  sustainable, long-term solutions. Our programs now span across education, 
                  healthcare, community development, and emergency response.
                </p>
                <p>
                  Today, we work with over 20 partner organizations and thousands of dedicated 
                  volunteers, reaching more than 50,000 individuals across multiple communities. 
                  Every step of our journey has been guided by the communities we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              What We Do
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Through targeted programs and dedicated partnerships, we create meaningful change.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            {...stagger}
          >
            {[
              {
                icon: BookOpen,
                title: 'Education',
                description:
                  'Providing quality education and learning resources to children and youth in underserved communities.',
              },
              {
                icon: Stethoscope,
                title: 'Healthcare',
                description:
                  'Ensuring access to essential healthcare services and health awareness programs.',
              },
              {
                icon: Home,
                title: 'Community Dev.',
                description:
                  'Building resilient communities through infrastructure, clean water, and sanitation projects.',
              },
              {
                icon: Trees,
                title: 'Environment',
                description:
                  'Promoting environmental sustainability through conservation and reforestation initiatives.',
              },
              {
                icon: Shield,
                title: 'Emergency Relief',
                description:
                  'Providing swift humanitarian aid and support during natural disasters and crises.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                {...fadeUpChild}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why It Matters */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 pointer-events-none" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
                Why It Matters
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-6">
                Because Every{' '}
                <span className="text-primary">Life Matters</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                In a world of plenty, millions still lack access to basic necessities. We believe 
                that change is possible when we come together with purpose and determination.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Your support doesn&apos;t just provide aid — it restores hope, creates opportunities, 
                and builds a foundation for a better tomorrow. Every contribution, no matter how 
                small, has the power to transform lives.
              </p>
              <Button href="/donate" size="lg">
                Join Our Mission
                <ArrowRight size={18} />
              </Button>
            </motion.div>
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {[
                {
                  icon: BarChart3,
                  title: 'Measurable Impact',
                  description:
                    'Every program is tracked and evaluated to ensure maximum effectiveness and accountability.',
                },
                {
                  icon: Users,
                  title: 'Community-Driven',
                  description:
                    'We work hand-in-hand with local leaders to ensure our initiatives meet real needs.',
                },
                {
                  icon: Award,
                  title: 'Sustainable Change',
                  description:
                    'We focus on long-term solutions that empower communities to thrive independently.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  {...fadeUpChild}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                Together, We Can Make a Difference
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Join us in our mission to create lasting change. Your support helps us reach more 
                communities, educate more children, and build a better future for all.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-primary font-bold text-base uppercase tracking-[0.03em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Donate Today
                  <Heart size={18} className="fill-primary" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-white/40 text-white font-bold text-base uppercase tracking-[0.03em] hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  Get Involved
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
