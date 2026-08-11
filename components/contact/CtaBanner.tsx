'use client';

import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-[#081B63] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border-[50px] border-white/8 pointer-events-none" />
      <div className="absolute -right-8 top-8 w-40 h-40 rounded-full border-[20px] border-white/6 pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border-[55px] border-[#E91E63]/10 pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-20 h-20 rounded-full border-[10px] border-[#E91E63]/12 pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.22em] mb-4">
              Every Connection Counts
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight max-w-[580px]">
              Together, We Can Build
              <br />
              a <span className="text-[#E91E63]">Better Tomorrow</span>
            </h2>
            <p className="text-white/55 mt-5 text-base leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              Reach out today. Whether you want to donate, volunteer, partner, or simply
              learn more — our door is always open.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] bg-[#E91E63] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-lg shadow-pink-500/20 hover:-translate-y-0.5 hover:bg-[#C2185B] transition-all duration-300"
            >
              Send a Message
              <Send size={15} />
            </a>
            <a
              href="/donations"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] border-2 border-white/30 text-white font-bold text-sm uppercase tracking-[0.07em] hover:bg-white hover:text-[#081B63] hover:border-white transition-all duration-300"
            >
              Donate Now
              <Heart size={15} className="fill-current" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
