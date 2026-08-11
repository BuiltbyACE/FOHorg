'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function PartnershipsHero() {
  return (
    <section className="bg-white overflow-hidden pt-[76px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* ── Left: Content ── */}
        <div className="w-full lg:w-[44%] flex-shrink-0">
          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            <span className="block text-[#081B63]">Together, We Can</span>
            <span className="block text-[#081B63]">Create Lasting</span>
            <span className="block text-[#E91E63]">Change</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
            className="w-10 h-[3px] bg-[#E91E63] mt-4 mb-6 origin-left"
          />

          <motion.p
            {...fadeUp(0.2)}
            className="text-slate-500 text-[15px] leading-[1.75] mb-8 max-w-[440px]"
          >
            Our partnerships are the foundation of our impact. By working together
            with organizations, institutions, businesses, and individuals, we are
            building stronger communities and a brighter future for all.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-pink-500/25 select-none"
            >
              Become a Partner
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#081B63] text-[#081B63] hover:bg-[#081B63] hover:text-white font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 select-none"
            >
              Learn More
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>

        {/* ── Right: Image + Quote card ── */}
        <motion.div
          className="w-full lg:w-[56%] relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] lg:h-[420px]">
            <Image
              src="/images/foh22.jpeg"
              alt="Diverse hands stacked together in partnership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 56vw"
              priority
              unoptimized
            />
          </div>

          {/* Floating quote card */}
          <motion.div
            className="glass-dark absolute bottom-5 right-4 lg:right-3 rounded-2xl p-5 max-w-[250px] shadow-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
          >
            <div
              className="text-[#E91E63] font-extrabold leading-none mb-2 select-none"
              style={{ fontFamily: 'Georgia, serif', fontSize: '44px', lineHeight: '1' }}
            >
              &ldquo;
            </div>
            <p className="text-white text-[13px] leading-relaxed font-medium">
              Alone we can do so little; together we can do so much.
            </p>
            <p className="text-slate-400 text-[11px] mt-2 font-medium">— Helen Keller</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
