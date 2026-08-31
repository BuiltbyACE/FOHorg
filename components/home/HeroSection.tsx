'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT: Text content (6 cols) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow — small editorial label */}
            <motion.div {...fadeUp(0.05)} className="mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3F8] border border-pink-100/80 text-[#E91E63] font-bold text-xs sm:text-[13px] tracking-[0.03em] uppercase">
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
              className="text-slate-500 text-base sm:text-[17px] leading-[1.65] max-w-[600px] mb-9 font-normal"
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

      {/* Bottom wave — same sinusoidal path split at center: pink left, navy right */}
      <div aria-hidden="true" className="relative w-full overflow-hidden h-28 sm:h-36 md:h-40">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <clipPath id="hero-wave-pink">
              <rect x="0" y="0" width="630" height="140" />
            </clipPath>
            <clipPath id="hero-wave-navy">
              <rect x="630" y="0" width="810" height="140" />
            </clipPath>
          </defs>
          {/* Pink — left portion of the sine wave */}
          <path
            clipPath="url(#hero-wave-pink)"
            fill="#E91E63"
            d="M0,140 L0,80 C55,25 160,6 295,18 C420,30 515,82 630,102 C745,82 850,30 1100,18 C1250,6 1385,25 1440,80 L1440,140 Z"
          />
          {/* Navy — right portion of the exact same path */}
          <path
            clipPath="url(#hero-wave-navy)"
            fill="#0A1E5E"
            d="M0,140 L0,80 C55,25 160,6 295,18 C420,30 515,82 630,102 C745,82 850,30 1100,18 C1250,6 1385,25 1440,80 L1440,140 Z"
          />
        </svg>
      </div>
    </section>
  );
}
