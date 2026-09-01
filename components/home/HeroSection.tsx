'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* ── Mobile background image (absolute, behind text) ── */}
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="/images/hero page better.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/72 to-white/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[88px] lg:pt-24 pb-44 sm:pb-44 lg:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT: Text content (6 cols) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow — mobile: stacked prominent location; desktop: single pill */}
            <motion.div {...fadeUp(0.05)} className="mb-6 sm:mb-7">

              {/* ── Mobile only: two-row location block ── */}
              <div className="sm:hidden">
                <span className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full bg-[#FFF3F8] border border-pink-100 text-[#E91E63] font-bold text-[10px] tracking-[0.14em] uppercase mb-3">
                  Fountain of Hope
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center shadow-lg shadow-[#E91E63]/35">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-extrabold text-[#081B63] text-[20px] tracking-[0.02em] uppercase leading-tight">
                      Garissa County,
                    </span>
                    <span className="font-extrabold text-[#E91E63] text-[20px] tracking-[0.02em] uppercase leading-tight">
                      Kenya
                    </span>
                  </div>
                </div>
                <div className="mt-3 h-[2.5px] w-20 rounded-full bg-gradient-to-r from-[#E91E63] via-[#E91E63]/60 to-transparent" />
              </div>

              {/* ── Desktop only: single pill ── */}
              <span className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3F8] border border-pink-100/80 text-[#E91E63] font-bold text-[13px] tracking-[0.03em] uppercase">
                Fountain of Hope
                <span className="w-1 h-1 rounded-full bg-[#E91E63]/50" aria-hidden="true" />
                Garissa County, Kenya
              </span>
            </motion.div>

            {/* Headline — editorial, controlled width */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-bold text-[#081B63] tracking-[-0.02em] leading-[1.12] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] mb-7 max-w-[640px]"
            >
              Together we improve{' '}
              <span className="text-[#E91E63]">livelihood and well&nbsp;being</span>{' '}
              of vulnerable communities through{' '}
              <span className="text-[#E91E63]">strategic partnerships</span> and
              implementation of sustainable programmes.
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.25)}
              className="text-slate-600 sm:text-slate-500 text-base sm:text-[17px] leading-[1.65] max-w-[600px] mb-9 font-normal"
            >
              Fountain of Hope is a community-based organization rooted in Garissa
              County, working with government, faith leaders, and young champions to
              build resilient, self-sustaining communities.
            </motion.p>

            {/* CTAs — one integrated group */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-4">
              <Link
                href="/donations"
                className="h-[54px] px-8 sm:px-9 rounded-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#E91E63]/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
              >
                DONATE NOW
              </Link>
              <Link
                href="/programs"
                className="h-[54px] px-8 sm:px-9 rounded-full bg-white border-2 border-[#081B63]/90 text-[#081B63] hover:bg-[#081B63] hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 group"
              >
                <span>DISCOVER OUR WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Photograph (6 cols) — desktop only ── */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <motion.div
              {...fadeUp(0.2)}
              className="relative w-full max-w-[520px] mx-auto rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/hero page better.png"
                alt="Fountain of Hope — mother and child together in Garissa"
                width={1222}
                height={1287}
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[130px] sm:h-[160px] md:h-[190px] lg:h-[230px]"
      >
        <svg
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pink accent */}
          <path
            fill="#ED1760"
            d="
              M0 112
              C120 82 225 91 350 111
              C480 132 585 132 700 99
              C815 66 910 72 1025 99
              C1150 128 1280 108 1440 86

              L1440 111

              C1290 130 1160 147 1025 120
              C910 96 820 92 705 124
              C585 157 475 156 345 134
              C220 113 115 105 0 137

              Z
            "
          />

          {/* Navy foundation */}
          <path
            fill="#102968"
            d="
              M0 137
              C115 105 220 113 345 134
              C475 156 585 157 705 124
              C820 92 910 96 1025 120
              C1160 147 1290 130 1440 111

              L1440 230
              L0 230
              Z
            "
          />
        </svg>
      </div>
    </section>
  );
}
