'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Users, Award } from 'lucide-react';
import Button from '@/components/common/Button';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-pink-50/20 to-white">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hope Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200/60 text-[#E91E63] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles size={15} className="text-[#E91E63]" />
              <span>Restoring Hope Across African Communities</span>
            </div>

            {/* Emotional Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#081B63] leading-[1.12] tracking-tight mb-6">
              Together We Can <span className="text-[#E91E63] underline decoration-pink-300 underline-offset-8">Change Lives</span> & Build Bright Futures.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Fountain of Hope is committed to transforming vulnerable communities through sustainable education, clean water access, healthcare services, and economic empowerment.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <Button href="/donations" variant="primary" size="lg" className="w-full sm:w-auto">
                Donate Now
                <Heart size={18} className="fill-white" />
              </Button>

              <Button href="/programs" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Programs
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-pink-100/80 flex items-center justify-center text-[#E91E63]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-[#081B63] font-bold text-sm sm:text-base">100%</div>
                  <div className="text-slate-500 text-xs font-medium">Transparent</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#081B63]">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-[#081B63] font-bold text-sm sm:text-base">50,000+</div>
                  <div className="text-slate-500 text-xs font-medium">Lives Touched</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-100/80 flex items-center justify-center text-amber-600">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-[#081B63] font-bold text-sm sm:text-base">Top Rated</div>
                  <div className="text-slate-500 text-xs font-medium">Global NGO</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Imagery Collage */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/15 border-4 border-white aspect-[4/5] sm:aspect-[4/4.5]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                  alt="African children learning together in bright classroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-2 border border-white/30">
                    Community Education Initiative
                  </div>
                  <h3 className="text-xl font-bold leading-snug">Empowering 15,000+ Children With Quality Education</h3>
                </div>
              </div>

              {/* Floating Overlapping Small Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 flex items-center gap-4 max-w-[240px] z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#E91E63] to-pink-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md shadow-pink-500/30">
                  95%
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Impact</div>
                  <div className="text-sm font-bold text-[#081B63]">Funds Go Directly To Programs</div>
                </div>
              </motion.div>

              {/* Floating Badge Top Right */}
              <motion.div 
                className="absolute -top-6 -right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 text-[#081B63] font-semibold text-xs sm:text-sm z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Active Field Missions: Kenya, Uganda & Ghana</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
