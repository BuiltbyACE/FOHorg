'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-[#E91E63] py-20 md:py-24 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[40px] border-white/10 pointer-events-none" />
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border-[20px] border-white/8 pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full border-[50px] border-white/8 pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/70 text-[11px] font-bold uppercase tracking-[0.22em] mb-3">
              Join the Movement
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight max-w-[600px]">
              Together, We Can Create a World of Hope
            </h2>
            <p className="text-white/70 mt-5 text-base leading-relaxed max-w-[520px] mx-auto lg:mx-0">
              Join thousands of compassionate individuals who are taking action and making
              a real difference in communities every single day.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/donations"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] bg-white text-[#E91E63] font-bold text-sm uppercase tracking-[0.07em] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              Donate Now
              <Heart size={16} className="fill-[#E91E63]" />
            </a>
            <a
              href="/partnerships"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] border-2 border-white text-white font-bold text-sm uppercase tracking-[0.07em] hover:bg-white hover:text-[#E91E63] transition-all duration-300"
            >
              Become a Partner
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
