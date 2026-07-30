'use client';

import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart,
  Target,
  Users,
  Award,
  BookOpen,
  Stethoscope,
  Compass,
  HandHeart,
  Globe,
  BarChart3,
  Star,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  UserCheck,
  CircleCheckBig,
  Sparkles,
  Zap,
  Building2,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/common/Button';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const fadeUpChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { staggerChildren: 0.1 },
};

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.01 }}
      className="tabular-nums"
    >
      <motion.span
        initial={{ textShadow: '0 0 0 rgba(233,30,99,0)' }}
        whileInView={{ textShadow: '0 0 0 rgba(233,30,99,0)' }}
        viewport={{ once: true }}
      >
        {end.toLocaleString()}{suffix}
      </motion.span>
    </motion.span>
  );
}

const heroChecklist = [
  { title: 'Driven by Compassion', desc: 'We put people first in everything we do.' },
  { title: 'Focused on Impact', desc: 'We create measurable, sustainable change.' },
  { title: 'Powered by Partnerships', desc: 'Collaboration amplifies our mission.' },
  { title: 'Building a Better Future', desc: "Today's actions for tomorrow's generations." },
];

const impactStats = [
  { icon: Heart, number: 12500, suffix: '+', title: 'Lives Impacted', desc: 'Across 70 communities' },
  { icon: Target, number: 45, suffix: '+', title: 'Programs Implemented', desc: 'Education, health, empowerment & more' },
  { icon: Globe, number: 78, suffix: '+', title: 'Communities Reached', desc: 'Urban, rural & hard-to-reach areas' },
  { icon: Users, number: 100, suffix: '+', title: 'Volunteers Engaged', desc: 'Dedicated hearts working hand-in-hand' },
  { icon: HandHeart, number: 30, suffix: '+', title: 'Partner Organizations', desc: 'Working hand-in-hand for greater impact' },
  { icon: Award, number: 15, suffix: '+', title: 'Awards & Recognitions', desc: 'Honoring our commitment to excellence' },
];

const programAreas = [
  { icon: BookOpen, color: '#E91E63', title: 'Education', number: '8,500+', desc: 'Children enroll in quality education programs and supported to stay in school' },
  { icon: Stethoscope, color: '#0EA5E9', title: 'Healthcare', number: '6,200+', desc: 'Individuals received essential healthcare, check-ups, and maternal care support' },
  { icon: Compass, color: '#10B981', title: 'Youth Development', number: '4,100+', desc: 'Young people empowered with skills, mentorship, and leadership opportunities' },
  { icon: UserCheck, color: '#F59E0B', title: 'Women Empowerment', number: '3,000+', desc: 'Women trained, supported, and equipped to build sustainable livelihoods' },
  { icon: HandHeart, color: '#8B5CF6', title: 'Community Outreach', number: '25,000+', desc: 'People reached through outreach services, donations, and awareness campaigns' },
  { icon: ShieldCheck, color: '#06B6D4', title: 'Environment & Sustainability', number: '12,000+', desc: 'Trees planted and communities educated on conservation and sustainability' },
];

const timeline = [
  { year: '2016', title: 'Foundation', icon: Star, desc: 'Fountain of Hope was founded with a mission to bring hope and opportunity to vulnerable communities.' },
  { year: '2017', title: 'First Programs', icon: Heart, desc: 'Launched our first education and feeding programs, reaching 100+ children in 5 communities.' },
  { year: '2018', title: 'Strong Partnerships', icon: HandHeart, desc: 'Built strategic partnerships with organizations and volunteers to expand our reach.' },
  { year: '2019', title: 'Expanding Impact', icon: Users, desc: 'Expanded to 20+ communities and launched women empowerment initiatives.' },
  { year: '2021', title: 'Growing Stronger', icon: BarChart3, desc: 'Reached over 10,000 lives and introduced youth mentorship and skills training programs.' },
  { year: '2023', title: 'Recognized for Impact', icon: Award, desc: 'Received national recognition for outstanding contribution to community development.' },
  { year: '2025', title: 'Building the Future', icon: Star, desc: 'Continuing to innovate, collaborate, and create sustainable change for generations to come.' },
];

const stories = [
  {
    title: 'From Struggle to Success',
    desc: 'Daniel now dreams of becoming an engineer thanks to our scholarship program.',
    img: '/images/First.png',
  },
  {
    title: 'Empowered to Inspire',
    desc: 'Mariam turned her skills training into a thriving business that supports her family.',
    img: '/images/Second.png',
  },
  {
    title: 'Healthy Communities',
    desc: 'Our mobile health camps bring essential healthcare to families who need it most.',
    img: '/images/hero page.png',
  },
  {
    title: 'Hope for Tomorrow',
    desc: 'Together we are building a greener future for the people and the planet.',
    img: '/images/First.png',
  },
];

const awards = [
  { title: 'Community Impact Award 2021', desc: 'For outstanding contribution to social development.' },
  { title: 'Humanitarian Excellence Award 2022', desc: 'For exceptional service to vulnerable communities.' },
  { title: 'NGO of the Year 2023', desc: 'Recognized for innovation, transparency & impact.' },
  { title: 'Partner of the Year 2024', desc: 'For strong collaboration and lasting impact.' },
];

export default function AchievementsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[600px] md:min-h-[650px] flex items-center pt-[84px]">
        <div className="relative w-full h-full flex flex-col lg:flex-row">
          {/* Left - Navy with angled edge */}
          <div
            className="relative z-10 w-full lg:w-[55%] bg-navy py-16 md:py-20 lg:py-24 flex items-center"
            style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,30,99,0.08),transparent_50%)] pointer-events-none" />
            <Container className="relative">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-6">
                  <Sparkles size={16} />
                  OUR ACHIEVEMENTS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-2">
                  MILESTONES OF HOPE.
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
                  IMPACT THAT LASTS.
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
                  Every milestone we achieve is a testament to the power of collective action
                  and unwavering commitment. From humble beginnings to transforming thousands
                  of lives, our journey reflects the hope and resilience of the communities we serve.
                </p>
                <ul className="space-y-4">
                  {heroChecklist.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CircleCheckBig size={12} className="text-primary" />
                      </span>
                      <div>
                        <span className="text-white font-semibold text-sm">{item.title}</span>
                        <span className="text-gray-400 text-sm ml-1.5">— {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Container>
          </div>

          {/* Right - Photo Collage */}
          <div className="relative w-full lg:w-[45%] bg-navy lg:bg-transparent flex items-center justify-center py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative w-full max-w-lg mx-auto px-4"
            >
              {/* Collage grid with diagonal dividers */}
              <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <div className="relative h-48 md:h-56 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}>
                  <Image src="/images/First.png" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 overflow-hidden" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
                  <Image src="/images/Second.png" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 col-span-2 overflow-hidden" style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)' }}>
                  <Image src="/images/hero page.png" alt="Community" fill className="object-cover" />
                </div>
              </div>

              {/* Pink Diamond Badge */}
              <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-4 z-20">
                <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center rotate-45 bg-primary rounded-lg shadow-xl shadow-primary/30">
                  <div className="-rotate-45 text-center">
                      <Award size={24} className="text-white mx-auto mb-1" />
                    <p className="text-white text-[9px] lg:text-[10px] font-bold uppercase leading-tight max-w-[80px] mx-auto">
                      Turning Hope Into Lasting Achievements
                    </p>
                  </div>
                </div>
              </div>

              {/* White Banner */}
              <div className="mt-4 bg-white rounded-xl py-3 px-6 shadow-lg text-center">
                <p className="text-navy font-bold text-sm tracking-wide">
                  TOGETHER, WE CAN BUILD A BETTER TOMORROW
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OUR IMPACT IN NUMBERS ─── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            {...fadeUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-gray-100">
              {impactStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    className="p-6 lg:p-8 text-center group hover:bg-gray-50/50 transition-colors duration-300"
                    {...fadeUpChild}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-navy mb-1">
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-navy font-semibold text-sm mb-1">{stat.title}</p>
                    <p className="text-gray-400 text-xs">{stat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── ACHIEVEMENTS BY PROGRAM AREA ─── */}
      <section className="relative py-16 md:py-24 bg-white">
        <Container>
          <motion.div className="text-center mb-14" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Achievements by Program Area
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            {...stagger}
          >
            {programAreas.map((program) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                  {...fadeUpChild}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    <Icon size={28} style={{ color: program.color }} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-1">{program.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{program.number}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{program.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ─── OUR JOURNEY OF IMPACT ─── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <Container>
          <motion.div className="text-center mb-12 md:mb-16" {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Our Journey of Impact
            </h2>
          </motion.div>

          <TimelineWave items={timeline} />
        </Container>
      </section>

      {/* ─── STORIES BEHIND OUR ACHIEVEMENTS + AWARDS ─── */}
      <section className="relative py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left - Stories (wider, 3/5) */}
            <div className="lg:col-span-3">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-10">
                  Stories Behind Our Achievements
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-5">
                {stories.map((story, i) => (
                  <motion.div
                    key={story.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                    {...fadeUpChild}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={story.img}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy mb-2">{story.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{story.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
                        Read Story
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Awards (narrower, 2/5) */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-navy leading-tight tracking-tight mb-10">
                  Awards & Recognitions
                </h2>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
                {...fadeUp}
              >
                <div className="space-y-6">
                  {awards.map((award, i) => (
                    <motion.div
                      key={award.title}
                      className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
                      {...fadeUpChild}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-navy font-bold text-sm">{award.title}</p>
                        <p className="text-gray-500 text-xs mt-1">{award.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button href="#" variant="outline" size="md" className="w-full">
                    View All Awards
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CALL TO ACTION STRIP ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-primary" />
        {/* Decorative heart outlines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-10 -left-10 w-40 h-40 text-white/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <svg className="absolute top-1/3 -right-8 w-32 h-32 text-white/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <svg className="absolute bottom-8 left-1/4 w-24 h-24 text-white/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        <Container className="relative">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-5 max-w-xl">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-1">
                <Heart size={28} className="text-white fill-white/80" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-2">
                  Together, We Achieve More
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Every partnership, every donation, and every hour volunteered brings us closer to a world where hope thrives.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Button href="/partnerships" variant="outline-white" size="lg">
                Become a Partner
                <HandHeart size={18} />
              </Button>
              <Button href="/donations" variant="primary" size="lg">
                Donate Now
                <Heart size={18} className="fill-white" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

/* ─────── TimelineWave — measurement-driven sine curve ─────── */

const TIMELINE_HEIGHT = 440;
const DOT_SIZE = 20;
const DOT_ABOVE = 130;
const DOT_BELOW = 310;
const GAP = 16;

function catmullRomToBezier(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i === 0 ? 0 : i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    d += [
      ` C`,
      (p1.x + (p2.x - p0.x) / 6).toFixed(1),
      (p1.y + (p2.y - p0.y) / 6).toFixed(1),
      (p2.x - (p3.x - p1.x) / 6).toFixed(1),
      (p2.y - (p3.y - p1.y) / 6).toFixed(1),
      p2.x.toFixed(1),
      p2.y.toFixed(1),
    ].join(' ');
  }
  return d;
}

function measureMarkers(container: HTMLElement): { x: number; y: number }[] | null {
  const cr = container.getBoundingClientRect();
  const dots = container.querySelectorAll<HTMLElement>('[data-marker]');
  if (dots.length < 2) return null;
  const pts: { x: number; y: number }[] = [];
  for (const dot of dots) {
    const mr = dot.getBoundingClientRect();
    pts.push({ x: mr.left - cr.left + mr.width / 2, y: mr.top - cr.top + mr.height / 2 });
  }
  return pts;
}

const timelineIcons = [Star, Heart, HandHeart, Users, BarChart3, Award, Sparkles];

function TimelineWave({ items }: { items: typeof timeline }) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [desktopPath, setDesktopPath] = useState('');
  const [mobilePath, setMobilePath] = useState('');
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const dc = desktopRef.current;
    if (dc && dc.offsetParent !== null) {
      const pts = measureMarkers(dc);
      if (pts) setDesktopPath(catmullRomToBezier(pts));
    }
    const mc = mobileRef.current;
    if (mc && mc.offsetParent !== null) {
      const pts = measureMarkers(mc);
      if (pts) setMobilePath(catmullRomToBezier(pts));
    }
    if (!ready) setReady(true);
  }, [ready]);

  useLayoutEffect(() => {
    measure();
    const targets = [desktopRef.current, mobileRef.current].filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;
    const ro = new ResizeObserver(measure);
    targets.forEach((t) => ro.observe(t));
    return () => ro.disconnect();
  }, [measure]);

  return (
    <>
      {/* Desktop / Tablet */}
      <div
        ref={desktopRef}
        className="hidden md:block relative select-none mx-auto"
        style={{ height: TIMELINE_HEIGHT, maxWidth: 1100 }}
      >
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ overflow: 'visible' }}
        >
          <motion.path
            d={desktopPath}
            stroke="#0A1E5E"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>

        <div className="relative z-10 w-full h-full">
          {items.map((item, i) => {
            const Icon = timelineIcons[i] || Star;
            const dotAbove = i % 2 === 0;
            const dotCenter = dotAbove ? DOT_ABOVE : DOT_BELOW;

            return (
              <div
                key={item.year}
                className="absolute top-0"
                style={{
                  left: `${(i / (items.length - 1)) * 100}%`,
                  width: 0,
                  height: '100%',
                }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    width: 160,
                    [dotAbove ? 'top' : 'bottom']: dotAbove
                      ? dotCenter + DOT_SIZE + GAP
                      : TIMELINE_HEIGHT - dotCenter + GAP,
                  }}
                >
                  <motion.div
                    className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
                    initial={{ opacity: 0, y: dotAbove ? 12 : -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <p className="text-[11px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      {item.year}
                    </p>
                    <p className="text-navy font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                <span
                  data-marker
                  className="absolute left-1/2 -translate-x-1/2 block rounded-full bg-primary border-[3px] border-white shadow-md shadow-primary/30 z-20 cursor-pointer hover:scale-125 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
                  style={{ top: dotCenter, width: DOT_SIZE, height: DOT_SIZE }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile — vertical S-curve with measured path */}
      <div ref={mobileRef} className="md:hidden relative select-none">
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ overflow: 'visible' }}
        >
          <motion.path
            d={mobilePath}
            stroke="#0A1E5E"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>

        <div className="relative z-10 space-y-12 py-4">
          {items.map((item, i) => {
            const Icon = timelineIcons[i] || Star;
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-5 ${side === 'right' ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                          {item.year}
                        </span>
                        <p className="text-navy font-bold text-sm leading-tight">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 relative z-10 pt-2">
                  <span data-marker className="block w-4 h-4 rounded-full bg-primary border-[2.5px] border-white shadow-md shadow-primary/30" />
                </div>

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
