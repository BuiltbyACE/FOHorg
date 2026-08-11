'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import DonationWidget from './DonationWidget';
import ImpactBar from './ImpactBar';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full flex flex-col justify-between overflow-hidden bg-white pt-[84px] min-h-[720px] lg:min-h-[860px]"
    >
      {/*
        DESKTOP BACKGROUND PHOTOGRAPH (lg+ screens)
        Full-bleed with object-position tuned so BOTH child (center-left)
        and mother (right) are clearly visible together.
      */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/heropagerefinnment.png"
          alt="Foundation of Hope — mother and child together"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: '22% 35%',
          }}
        />

        {/*
          DESKTOP LEFT-TO-RIGHT WHITE GRADIENT OVERLAY
          Provides solid white for left text column (0-22%),
          then rapidly dissolves to 0% by 44% so child & mother are 100% clear.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, ' +
              'rgba(255,255,255,1.00) 0%, ' +
              'rgba(255,255,255,1.00) 22%, ' +
              'rgba(255,255,255,0.85) 28%, ' +
              'rgba(255,255,255,0.40) 34%, ' +
              'rgba(255,255,255,0.05) 40%, ' +
              'rgba(255,255,255,0.00) 44%)',
          }}
        />
      </div>

      {/* 
        MAIN CONTENT & LAYOUT CONTAINER
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 pb-8 flex-grow flex flex-col justify-center">
        <div className="max-w-[560px]">
          
          {/* Eyebrow Pill */}
          <motion.div {...fadeUp(0.05)} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3F8] border border-pink-100/80 text-[#E91E63] font-bold text-xs sm:text-sm tracking-wide uppercase">
              <Heart className="w-3.5 h-3.5 fill-[#E91E63]" />
              Together for a Brighter Tomorrow
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-extrabold text-[#081B63] tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] mb-5"
          >
            Building <span className="text-[#E91E63]">Hope,</span> <br />
            Transforming <span className="text-[#E91E63]">Lives</span>
          </motion.h1>

          {/* Mission Description */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[520px] mb-6 font-normal"
          >
            Together, we empower communities, support vulnerable families, and create lasting opportunities through education, healthcare, clean water, and sustainable development.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-wrap items-center gap-3.5 mb-6"
          >
            <Link
              href="/donations"
              className="h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#E91E63]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              DONATE NOW
            </Link>

            <Link
              href="/programs"
              className="h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-white border-2 border-[#081B63] text-[#081B63] hover:bg-[#081B63] hover:text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>DISCOVER OUR WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/*
            MOBILE & TABLET FEATURED PHOTOGRAPH CONTAINER (< lg screens)
            Guarantees that on mobile screens, BOTH mother AND child are 100% visible
            together in full 3:2 landscape ratio with zero face or body cropping!
          */}
          <motion.div
            {...fadeUp(0.4)}
            className="block lg:hidden my-6 w-full relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-pink-100/80"
          >
            <Image
              src="/images/heropagerefinnment.png"
              alt="Foundation of Hope — mother and child together"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </motion.div>

          {/* Overlapping Horizontal Donation Panel */}
          <motion.div {...fadeUp(0.45)} className="w-full max-w-[560px]">
            <DonationWidget />
          </motion.div>

        </div>
      </div>

      {/* 
        LAYER 5: DECORATIVE BOTTOM SHAPES & IMPACT BAR
        Stats bar raised ~48px higher as requested ("40-60px higher than current")
      */}
      <div className="relative z-10 w-full -mt-6 sm:-mt-10 lg:-mt-14 pb-6">
        
        {/* Decorative Wave Shapes Behind Impact Bar */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 pointer-events-none h-32 overflow-hidden z-0">
          {/* Left Pink Curved Wave Shape */}
          <svg
            className="absolute left-0 bottom-0 h-full w-[45%] text-[#E91E63]/80 opacity-90"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,150 L0,80 Q250,140 500,60 L500,150 Z"
            />
          </svg>
          {/* Right Navy Curved Wave Shape */}
          <svg
            className="absolute right-0 bottom-0 h-full w-[55%] text-[#0A1E5E]"
            viewBox="0 0 600 150"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,150 L0,50 Q300,130 600,40 L600,150 Z"
            />
          </svg>
        </div>

        {/* Floating Impact Bar */}
        <motion.div
          {...fadeUp(0.55)}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <ImpactBar />
        </motion.div>
      </div>
    </section>
  );
}
