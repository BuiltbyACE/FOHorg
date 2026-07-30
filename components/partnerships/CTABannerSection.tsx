'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function CTABannerSection() {
  return (
    <section className="bg-[#E91E63] py-14 lg:py-16 relative overflow-hidden">
      {/* Decorative rings — right side */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full border-[40px] border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-6 top-8 w-40 h-40 rounded-full border-[24px] border-white/10" />
      {/* Left glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full border-[40px] border-white/10" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Icon + Text */}
          <div className="flex items-center gap-5">
            {/* FOH-style hands icon */}
            <div className="w-16 h-16 flex-shrink-0 opacity-90">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M32 8 C24 14, 16 20, 14 30 C12 38, 16 46, 24 50 C28 52, 32 52, 32 52 C32 52, 36 52, 40 50 C48 46, 52 38, 50 30 C48 20, 40 14, 32 8Z"
                  fill="white"
                  opacity="0.25"
                />
                <path
                  d="M22 38 C22 38, 20 32, 22 26 C24 20, 28 16, 32 14 C36 16, 40 20, 42 26 C44 32, 42 38, 42 38"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="32" cy="34" r="6" fill="white" opacity="0.9" />
                <path
                  d="M26 42 C26 46, 29 50, 32 52 C35 50, 38 46, 38 42"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2
                className="text-white font-extrabold uppercase leading-tight tracking-[-0.01em] mb-2"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
              >
                Ready to Make a Difference Together?
              </h2>
              <p className="text-white/80 text-[14px] leading-relaxed max-w-[480px]">
                Join our family of partners and help us build a world filled with hope,
                dignity, and opportunity for all.
              </p>
            </motion.div>
          </div>

          {/* Right: Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-wrap gap-3 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#E91E63] hover:bg-pink-50 font-bold text-[13px] uppercase tracking-[0.07em] px-6 py-3.5 rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 shadow-md select-none"
            >
              Become a Partner
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-bold text-[13px] uppercase tracking-[0.07em] px-6 py-3.5 rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 select-none cursor-pointer"
            >
              Download Partnership Guide
              <Download size={14} strokeWidth={2.5} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
