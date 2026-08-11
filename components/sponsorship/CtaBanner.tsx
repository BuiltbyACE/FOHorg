'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Heart, HandHeart } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-[#151640] py-14 lg:py-16 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-12 -top-12 opacity-10">
        <svg width="200" height="200" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8 C24 14, 16 20, 14 30 C12 38, 16 46, 24 50 C28 52, 32 52, 32 52 C32 52, 36 52, 40 50 C48 46, 52 38, 50 30 C48 20, 40 14, 32 8Z" fill="white" opacity="0.25" />
          <path d="M22 38 C22 38, 20 32, 22 26 C24 20, 28 16, 32 14 C36 16, 40 20, 42 26 C44 32, 42 38, 42 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="32" cy="34" r="6" fill="white" opacity="0.9" />
          <path d="M26 42 C26 46, 29 50, 32 52 C35 50, 38 46, 38 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full border-[40px] border-white/5" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-6 top-8 w-40 h-40 rounded-full border-[24px] border-white/5" />

      {/* Heart pattern decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute right-4 bottom-4 opacity-[0.04]">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => (
            <Heart key={i} size={24} className="text-white" fill="white" />
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#E01A6F] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-pink-500/20">
              <HandHeart size={28} strokeWidth={1.5} className="fill-white" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2
                className="text-white font-extrabold uppercase leading-tight tracking-[-0.01em] mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)' }}
              >
                Let&apos;s Build Hope Together
              </h2>
              <p className="text-white/70 text-[14px] leading-relaxed max-w-[480px]">
                Become a sponsor today and be part of a movement that transforms lives and communities.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-wrap gap-3 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E01A6F] hover:bg-[#C0175E] text-white font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/25 select-none"
            >
              Become a Sponsor
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-bold text-[13px] uppercase tracking-[0.07em] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 select-none"
            >
              Talk to Us
              <Phone size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
