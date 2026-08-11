'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CircleCheckBig, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Photography Collage */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5] group">
                <Image
                  src="/images/foh15.jpeg"
                  alt="Fountain of Hope volunteers working with local community members in Garissa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card Bottom Right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#081B63] to-indigo-900 text-white p-6 rounded-3xl shadow-xl border border-white/10 max-w-[260px] z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <HeartHandshake size={22} />
                  </div>
                  <span className="text-2xl font-extrabold text-white">1,400+</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Community health volunteers (CHVs) &amp; CBDs trained in Garissa.</p>
              </div>

            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
              <Compass size={15} />
              <span>Our Vision & Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-6 leading-tight">
              Driven by Passion, Guided by Transparency & Hope
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Our vision is a healthy, literate and wealthy Garissa community.
              Fountain of Hope works hand-in-hand with county leadership, faith
              networks and young people to build resilient, self-sustaining
              communities across Garissa County.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Rather than short-term handouts, we invest in strategic partnerships
              and sustainable programs — from maternal and newborn health advocacy
              to education, vocational training and economic empowerment.
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Strategic Partnerships & County Collaboration</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Community Health Structures — 1,400+ CHVs &amp; CBDs</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Empowering Women, Youth &amp; Faith Leaders</span>
              </div>
            </div>

            <Button href="/about" variant="secondary" size="lg">
              Read Our Full Story
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
