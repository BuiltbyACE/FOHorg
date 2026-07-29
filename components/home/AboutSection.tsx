'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CircleCheckBig, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                  alt="Fountain of Hope volunteers working with local community members"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card Bottom Right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#081B63] to-indigo-900 text-white p-6 rounded-3xl shadow-xl border border-white/10 max-w-[260px] z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <HeartHandshake size={22} />
                  </div>
                  <span className="text-2xl font-extrabold text-white">15+ Years</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Of dedicated community work and sustainable impact.</p>
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
              Founded with the firm belief that every human being deserves clean water, health, and quality education, Fountain of Hope works hand-in-hand with African leaders to build resilient, self-sustaining communities.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Rather than providing short-term handouts, we invest in long-term infrastructure, local leadership, and sustainable economic opportunities that transform lives for generations.
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Community-Led Development Programs</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Zero Overhead Waste — Direct Field Allocation</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                <CircleCheckBig size={20} className="text-[#E91E63] flex-shrink-0" />
                <span>Empowering Women & Youth as Transformation Agents</span>
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
