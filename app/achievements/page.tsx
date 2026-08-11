'use client';

import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  ShieldCheck,
  UserCheck,
  CircleCheckBig,
  Sparkles,
  ChevronRight,
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
  { icon: Heart, number: 10500, suffix: '+', title: 'Children in Education', desc: 'Kept in school across Garissa County' },
  { icon: Target, number: 3500, suffix: '+', title: 'Youth Trained', desc: 'In vocational skills & leadership' },
  { icon: Globe, number: 300000, suffix: '+', title: 'Radio Reached', desc: 'Via Star FM health talk shows' },
  { icon: Users, number: 1400, suffix: '+', title: 'CHVs & CBDs Trained', desc: 'Community health structures strengthened' },
  { icon: HandHeart, number: 14000, suffix: '+', title: 'Peacebuilding Sensitized', desc: 'Against violent extremism & radicalization' },
  { icon: Award, number: 40, suffix: '+', title: 'Faith Leaders Engaged', desc: 'Women religious leaders mobilized for health' },
];

const programAreas = [
  { icon: BookOpen, color: '#E91E63', title: 'Education', number: '10,500+', desc: 'Boys and girls kept in school with scholarships, learning materials, and teacher support' },
  { icon: Stethoscope, color: '#0EA5E9', title: 'Maternal & Newborn Health', number: '300,000+', desc: 'Reached through OMMI radio advocacy, faith leaders, and youth champions' },
  { icon: UserCheck, color: '#10B981', title: 'Youth & Vocational Training', number: '3,500+', desc: 'Young people trained in trade crafts, digital skills, and leadership' },
  { icon: Compass, color: '#F59E0B', title: 'Family Planning & Child Spacing', number: '40+', desc: 'Women religious leaders engaged; 423 married women reached through PPFP' },
  { icon: HandHeart, color: '#8B5CF6', title: 'Peacebuilding & Resilience', number: '14,000+', desc: 'Women and men sensitized against violent extremism and radicalization' },
  { icon: ShieldCheck, color: '#06B6D4', title: 'Economic Empowerment', number: '10,500+', desc: 'Refugees and host community residents supported with sustainable livelihoods' },
];

const timeline = [
  { year: '2019', title: 'FP2020 Project', icon: Star, desc: 'Launched post-partum family planning advocacy with a $50,000 FP2020 grant, the foundation of our maternal health work.' },
  { year: '2020', title: 'First PPFP Circular', icon: Heart, desc: 'Garissa issued its first county PPFP circular — 423 married women reached during six months of implementation.' },
  { year: '2022', title: 'Evidence for Action', icon: HandHeart, desc: 'KDHS 2022 showed Garissa mCPR rising from 5.5% to 11%, while MMR at 646/100,000 confirmed the urgent need for advocacy.' },
  { year: '2024', title: 'Jhpiego Partnership', icon: Users, desc: 'Launched a $20,000 gender-lensed RMNCAH-N and SGBV advocacy project to address systemic barriers for women.' },
  { year: '2025', title: 'OMMI Initiative Launches', icon: BarChart3, desc: 'With ICRHK, the Okoa Mama na Mtoto Initiative begins — landscaping with county health leadership and faith networks.' },
  { year: '2025', title: 'Radio & Faith Mobilization', icon: Award, desc: 'Star FM talk show reaches 300,000+; 40 women religious leaders and 15 youth champions trained to champion safe motherhood.' },
  { year: '2025', title: 'County Executive Commitment', icon: Star, desc: 'Executive advocacy meeting chaired by the Deputy County Secretary commits the county to strengthened maternal health systems.' },
];

const stories = [
  {
    title: 'Counting the Cost of Motherhood',
    date: 'April 2025',
    tag: 'County Health Landscaping',
    img: '/images/foh2.jpeg',
    stat: '30+',
    statLabel: 'Health managers in the analysis room',
    excerpt: 'Before we could change outcomes, we had to understand them. FoH and the County Health Management Team sat down with years of maternal health data to find out exactly why mothers were dying.',
    story:
      'The review covered service utilization trends, facility readiness and health outcomes, bringing together more than 30 county and sub-county health managers. It revealed genuine progress — immunization coverage and skilled delivery were rising — but also persistent gaps in access and quality of care. The meeting produced a shared action list: strengthen the availability of blood and blood products, improve referral systems, and speed up decision-making for mothers in danger. Every subsequent OMMI intervention was built on this evidence base.',
    quote: {
      text: 'The persistently high maternal and child mortality rates in Garissa remain one of our most urgent challenges. Our priority is to close the existing gaps in referral, blood availability and timely decision-making so that no mother or child is lost to preventable causes.',
      author: 'County Director of Health',
    },
  },
  {
    title: 'Women of Faith, Voices of Change',
    date: 'May 2025',
    tag: 'Women Religious Leaders',
    img: '/images/foh6.jpeg',
    stat: '40',
    statLabel: 'Women religious leaders mobilized',
    excerpt: 'In a county where faith shapes daily life, FoH brought forty women religious leaders together to make safe motherhood a message of faith.',
    story:
      'The consultative session equipped the leaders with evidence on antenatal care, facility-based delivery and newborn care, and aligned OMMI\u2019s objectives with religious values. Nearly all pledged to carry the message into their sermons, religious forums and women\u2019s gatherings — creating a trusted, culturally resonant channel for health information across the community.',
    quote: {
      text: 'Our religion Islam allows us to do child spacing and breastfeed our baby for 24 months. This is meant to take care of the mother\u2019s health and give time for the child to grow. We will use our gathering to inform our congregation about what we learnt in this meeting.',
      author: 'Women Religious Leader, Garissa',
    },
  },
  {
    title: 'Champions on the Frontline',
    date: 'June 2025',
    tag: 'Youth Champions',
    img: '/images/foh7.jpeg',
    stat: '15',
    statLabel: 'Young peer educators trained',
    excerpt: 'Fifteen young people stepped up to become the county\u2019s newest advocates for maternal and newborn health.',
    story:
      'Trained as peer educators on antenatal and postnatal care, the importance of skilled delivery and the danger signs of pregnancy, the champions were urged to use the platforms they already live on — WhatsApp, TikTok and Facebook — to share health messages, mobilize their peers and families to support pregnant women, and promote girls\u2019 education. The training also encouraged young men to walk with their partners through pregnancy and childbirth, breaking down stigma around family planning and building trust in hospital deliveries.',
  },
  {
    title: 'Healing Over the Airwaves',
    date: 'July 2025',
    tag: 'Community Radio',
    img: '/images/certificategiving.jpeg',
    stat: '300,000+',
    statLabel: 'Listeners reached across the county',
    excerpt: 'FoH took the conversation about safe motherhood to one of Garissa\u2019s most trusted platforms — Star FM.',
    story:
      'Partnering with Star FM, which covers more than 70% of the county, FoH aired a live talk show in both Somali and Swahili. Listeners called in from every sub-county to ask why a pregnancy visit matters, whether hospital delivery is free, what to do if a wife is bleeding, and why a facility birth beats a home birth. The show reached an estimated 300,000+ people and confirmed radio as one of the most powerful tools for changing public perception in pastoralist settings.',
  },
  {
    title: 'The Power of the Purse',
    date: 'August 2025',
    tag: 'County Assembly Advocacy',
    img: '/images/foh8.jpeg',
    stat: '70%',
    statLabel: 'Of the health budget spent on salaries, not services',
    excerpt: 'Advocacy reached the decision-makers who hold the budget — the Members of the County Assembly.',
    story:
      'FoH convened MCAs, the CECM for Health, the Chief Officer and the Director of Health to deliberate on maternal and newborn health financing. The session revealed that although health receives the largest share of the county budget, over 70% goes to salaries — leaving little for service delivery. It also exposed a data problem: deaths of referred mothers from neighbouring Tana River County were being recorded as Garissa\u2019s, inflating the mortality figures. Leaders committed to joint data frameworks, fairer budget allocation and presenting maternal health before the full Assembly.',
    quote: {
      text: 'We as County Assembly members commit to championing maternal health by advocating for adequate financial resources and ensuring that every part of our health system functions effectively.',
      author: 'Chair, County Assembly Health Committee',
    },
  },
  {
    title: 'Commitment from the Top',
    date: 'October 2025',
    tag: 'County Executive Meeting',
    img: '/images/foh13.jpeg',
    stat: 'Quarterly',
    statLabel: 'Reviews of MNCH performance agreed',
    excerpt: 'On 29 October 2025, the county\u2019s executive leadership met — chaired by the Deputy County Secretary — to turn advocacy into commitment.',
    story:
      'The high-level meeting brought together the Deputy County Secretary, CECM representatives, the Chief Officer and Director of Health, the heads of Family Health and Curative Services, the Assembly Health and Budget committees, and the OMMI advocacy team. They agreed on concrete priorities: increasing domestic financing for RMNCAH, expanding Social Health Authority coverage for expectant mothers, strengthening community health strategies, and adopting MNCH scorecards to track progress. The county committed to quarterly reviews, upgraded rural health facilities, quarterly supply of essential commodities and round-the-clock skilled birth attendance — so that no mother or child is left behind.',
    quote: {
      text: 'No mother or child should be left behind.',
      author: 'Deputy County Secretary, Garissa',
    },
  },
];

const awards = [
  { title: 'FP2020 Grant (2019\u20132020)', desc: '$50,000 for post-partum family planning advocacy in Garissa — 423 married women reached during six months of implementation.' },
  { title: 'First County PPFP Circular (2020)', desc: 'Garissa issued its first PPFP circular directing medical superintendents and facility in-charges to upscale post-partum family planning.' },
  { title: 'Jhpiego Partnership (2024)', desc: '$20,000 gender-lensed RMNCAH-N & SGBV advocacy — 30 FP champions signed a joint communiqu\u00e9.' },
  { title: 'KDHS 2022 Milestone', desc: 'Garissa mCPR grew from 5.5% to 11%, with a 25% increase in male involvement in child spacing.' },
  { title: 'ICRHK Partnership (2025)', desc: 'Okoa Mama na Mtoto Initiative (OMMI) — a year-one advocacy package to reduce maternal, newborn & child mortality.' },
  { title: 'Radio Reach Milestone (2025)', desc: 'Star FM talk shows in Somali & Swahili reached an estimated 300,000+ listeners across the county.' },
  { title: 'Faith & Youth Champions (2025)', desc: '40 women religious leaders and 15 youth champions equipped to champion safe motherhood across the sub-counties.' },
  { title: 'County Executive Commitment (2025)', desc: 'Executive meeting chaired by the Deputy County Secretary committed to quarterly MNCH reviews, upgraded rural facilities and round-the-clock skilled birth attendance.' },
];

export default function AchievementsPage() {
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [showAllAwards, setShowAllAwards] = useState(false);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[600px] md:min-h-[650px] flex items-center pt-[76px]">
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
                  <Image src="/images/foh15.jpeg" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 overflow-hidden" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
                  <Image src="/images/foh16.jpeg" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 col-span-2 overflow-hidden" style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)' }}>
                  <Image src="/images/foh17.jpeg" alt="Community" fill className="object-cover" />
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
                    className="p-4 sm:p-6 lg:p-6 text-center group hover:bg-gray-50/50 transition-colors duration-300 min-w-0"
                    {...fadeUpChild}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-[26px] xl:text-3xl font-bold text-navy mb-1 whitespace-nowrap tracking-tight">
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-navy font-semibold text-xs sm:text-sm mb-1">{stat.title}</p>
                    <p className="text-gray-400 text-[11px] leading-snug">{stat.desc}</p>
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
                {stories.map((story) => {
                  const isOpen = openStory === story.title;
                  return (
                    <motion.div
                      key={story.title}
                      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
                      {...fadeUpChild}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={story.img}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-[#E91E63] text-white text-[10px] font-bold uppercase tracking-wider">
                          {story.tag}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                          {story.date}
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">{story.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{story.excerpt}</p>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex items-center gap-3 mb-4 rounded-xl bg-primary/5 border border-primary/15 p-4">
                                <span className="text-2xl font-extrabold text-[#E91E63]">{story.stat}</span>
                                <span className="text-xs font-semibold text-navy uppercase tracking-wide">
                                  {story.statLabel}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed">{story.story}</p>
                              {story.quote && (
                                <blockquote className="mt-4 border-l-4 border-[#E91E63] bg-pink-50/60 rounded-r-xl p-4">
                                  <p className="text-gray-700 text-sm italic leading-relaxed">
                                    &ldquo;{story.quote.text}&rdquo;
                                  </p>
                                  <footer className="mt-2 text-xs font-bold text-[#081B63] uppercase tracking-wide">
                                    — {story.quote.author}
                                  </footer>
                                </blockquote>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          onClick={() => setOpenStory(isOpen ? null : story.title)}
                          className="mt-auto inline-flex items-center gap-2 pt-4 text-[#E91E63] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 cursor-pointer"
                        >
                          {isOpen ? 'Read Less' : 'Read Full Story'}
                          <ChevronRight
                            size={16}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
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
                  {(showAllAwards ? awards : awards.slice(0, 4)).map((award) => (
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
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={() => setShowAllAwards((prev) => !prev)}
                  >
                    {showAllAwards ? 'Show Less' : 'View All Awards'}
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${showAllAwards ? 'rotate-90' : ''}`}
                    />
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
                key={item.title}
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
                key={item.title}
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
