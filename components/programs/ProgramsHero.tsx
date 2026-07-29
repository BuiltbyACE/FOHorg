'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Button from '@/components/common/Button';

export default function ProgramsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-pink-50/20 to-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200/60 text-[#E91E63] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles size={15} className="text-[#E91E63]" />
              <span>Our Programs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#081B63] leading-[1.12] tracking-tight mb-6">
              <span className="text-[#E91E63]">Building</span> Stronger Communities Through Sustainable Programs
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              From education and healthcare to women empowerment and environmental sustainability, our comprehensive programs are designed to create lasting, measurable impact in communities across Africa.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <Button href="/programs" variant="primary" size="lg" className="w-full sm:w-auto">
                Explore Programs
                <ArrowUpRight size={18} />
              </Button>
              <Button href="/donations" variant="outline" size="lg" className="w-full sm:w-auto">
                Support Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/15 border-4 border-white aspect-[4/5] sm:aspect-[4/4.5]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                  alt="Community programs transforming lives across Africa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/60 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 max-w-[260px] z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-sm text-slate-500 font-medium mb-1">Our Commitment</p>
                <p className="text-sm font-bold text-[#081B63] leading-snug">
                  &ldquo;Every program is designed with the community, for the community.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
