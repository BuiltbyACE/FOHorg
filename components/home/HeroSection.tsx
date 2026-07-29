'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-stretch overflow-hidden bg-white pt-[84px]"
    >
      {/* ── Subtle radial background glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 0% 0%, rgba(248,250,252,0.95) 0%, transparent 70%), radial-gradient(ellipse 45% 45% at 100% 0%, rgba(233,30,99,0.06) 0%, transparent 65%)',
        }}
      />

      {/*
       * Two-column wrapper:
       * Left  → 42% content
       * Right → 58% image (bleeds to viewport edge)
       */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row">

        {/* ──────────────────────────────────────────
            LEFT  –  Content Column
        ────────────────────────────────────────── */}
        <div className="flex items-center w-full lg:w-[42%] px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 py-28 lg:py-0 lg:pr-10">
          <div className="max-w-[560px] w-full">

            {/* Stacked editorial headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-extrabold leading-[1.0] tracking-[-0.03em] mb-7"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              <span className="block text-[#081B63]">Building</span>
              <span className="block text-[#E91E63]">Hope,</span>
              <span className="block text-[#081B63]">Transforming</span>
              <span className="block text-[#081B63]">Lives</span>
            </motion.h1>

            {/* Body paragraph */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-slate-500 leading-[1.8] mb-10"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', maxWidth: '480px' }}
            >
              Together, we empower communities, support vulnerable families, and
              create lasting opportunities through education, healthcare, clean
              water, and sustainable development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary — Donate */}
              <Link
                href="/donations"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-lg shadow-[#E91E63]/30 hover:shadow-xl hover:shadow-[#E91E63]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 select-none"
                style={{ height: '54px', paddingLeft: '2rem', paddingRight: '2rem' }}
              >
                <svg
                  width="17" height="17" viewBox="0 0 24 24"
                  fill="currentColor" aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Now
              </Link>

              {/* Secondary — Learn More */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full bg-white border-2 border-[#081B63] text-[#081B63] hover:bg-[#081B63] hover:text-white font-bold text-sm uppercase tracking-[0.07em] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 select-none"
                style={{ height: '54px', paddingLeft: '2rem', paddingRight: '2rem' }}
              >
                Learn More
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Subtle trust line */}
            <motion.p
              {...fadeUp(0.4)}
              className="mt-8 text-slate-400 text-xs tracking-wide"
            >
              Trusted by 50,000+ families across Kenya, Uganda, Ghana &amp; Rwanda.
            </motion.p>

          </div>
        </div>

        {/* ──────────────────────────────────────────
            RIGHT  –  Full-bleed Image Column
        ────────────────────────────────────────── */}
        <motion.div
          className="relative w-full lg:w-[58%] min-h-[420px] lg:min-h-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero%20page.png"
            alt="Hands holding a Fountain of Hope pink heart logo"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-contain object-center"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
