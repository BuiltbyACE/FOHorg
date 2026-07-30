'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Heart } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function SponsorshipHero() {
  return (
    <section className="bg-white overflow-hidden pt-[84px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20 flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-14">
        <div className="w-full lg:w-[56%] relative">
          <motion.span
            {...fadeUp(0.05)}
            className="inline-block lg:hidden text-[#E01A6F] text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
          >
            Partner with Purpose
          </motion.span>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] lg:h-[420px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1599058918144-1ffabb6abce0?w=900&q=80"
                alt="Smiling children giving thumbs up"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 56vw"
                priority
                unoptimized
              />
            </div>

            <motion.div
              className="absolute bottom-5 right-4 lg:right-3 rounded-2xl p-5 max-w-[270px] shadow-2xl bg-[#151640]/90 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6 }}
            >
              <div
                className="text-[#E01A6F] font-extrabold leading-none mb-2 select-none"
                style={{ fontFamily: 'Georgia, serif', fontSize: '44px', lineHeight: '1' }}
              >
                &ldquo;
              </div>
              <p className="text-white text-[13px] leading-relaxed font-medium italic">
                Alone we can do so little; together we can do so much.
              </p>
              <p className="text-white/50 text-[11px] mt-2 font-medium tracking-wide">
                &mdash; Helen Keller
              </p>
              <div className="absolute bottom-3 right-3 opacity-10">
                <Heart size={32} className="text-white" fill="white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[44%] flex-shrink-0">
          <motion.span
            {...fadeUp(0.05)}
            className="hidden lg:inline-block text-[#E01A6F] text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
          >
            PARTNER WITH PURPOSE
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold uppercase leading-[1.08] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}
          >
            <span className="block text-[#151640]">TOGETHER, WE CAN</span>
            <span className="block text-[#151640]">BUILD A BETTER</span>
            <span className="block text-[#E01A6F]">TOMORROW</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-[#6B6B80] text-[15px] leading-[1.75] mb-8 max-w-[480px]"
          >
            Your sponsorship empowers lives, strengthens communities, and creates lasting change. 
            Join us in building a future where every child has the opportunity to thrive.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E01A6F] hover:bg-[#C0175E] text-white font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/25 select-none"
            >
              BECOME A SPONSOR
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#151640] text-[#151640] hover:bg-[#151640] hover:text-white font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 select-none"
            >
              SEE OUR IMPACT
              <BarChart3 size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
