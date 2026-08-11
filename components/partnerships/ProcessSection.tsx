'use client';

import { motion } from 'framer-motion';
import { FileText, MessageCircle, ClipboardList, Handshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Get in Touch',
    desc: 'Reach out to us and share your interest in partnering with Fountain of Hope.',
  },
  {
    icon: MessageCircle,
    title: 'Discuss & Explore',
    desc: "We'll schedule a meeting to understand your goals and explore opportunities.",
  },
  {
    icon: ClipboardList,
    title: 'Plan Together',
    desc: 'We co-create a partnership plan that aligns with our mission and your goals.',
  },
  {
    icon: Handshake,
    title: 'Implement & Collaborate',
    desc: 'We work hand-in-hand to implement programs and maximize impact.',
  },
  {
    icon: TrendingUp,
    title: 'Measure & Grow',
    desc: 'We evaluate results, share impact stories, and look for ways to grow together.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#081B63] py-16 lg:py-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2
            className="text-white font-extrabold uppercase tracking-[0.04em]"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
          >
            Our Partnership Process
          </h2>
        </div>

        {/* 5-step timeline */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-4">

          {/* Dashed connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-px border-t-2 border-dashed border-[#E91E63]/50 z-0"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/5"
              >
                {/* Circle with icon */}
                <div className="w-14 h-14 rounded-full bg-[#E91E63] flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-500/30 flex-shrink-0">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                {/* Step number + title */}
                <p className="text-white font-bold text-[12px] uppercase tracking-[0.06em] leading-snug mb-2">
                  {i + 1}. {step.title}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-[12px] leading-relaxed px-2 max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
