'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SendHorizontal, ArrowRight, Clock, MessageCircle, CheckCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const trustItems = [
  { icon: Clock, label: 'Response within 24h' },
  { icon: MessageCircle, label: 'Friendly support team' },
  { icon: CheckCircle, label: 'Every inquiry answered' },
];

export default function HeroSection() {
  return (
    <section className="pt-[84px] pb-20 lg:pb-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,30,99,0.04)_0%,transparent_55%)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-6">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-4">
              Get in Touch
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-[#081B63]">We&apos;d Love</span>
              <br />
              <span className="text-[#081B63]">to Hear</span>
              <br />
              <span className="text-[#E91E63]">From You</span>
            </motion.h1>

            <motion.div {...fadeUp(0.14)} className="w-10 h-[3px] bg-[#E91E63] mt-4 mb-6" />

            <motion.p {...fadeUp(0.20)} className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[520px]">
              Have a question, partnership idea, or want to get involved? Our team is here
              to listen, connect, and help you make a real difference.
            </motion.p>

            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-[#E91E63] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-md shadow-pink-500/25 hover:-translate-y-0.5 hover:bg-[#C2185B] transition-all duration-300"
              >
                Send a Message
                <SendHorizontal size={16} />
              </a>
              <a
                href="/partnerships"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-white border border-slate-200 text-[#081B63] font-bold text-sm uppercase tracking-[0.07em] hover:border-[#081B63] hover:-translate-y-0.5 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...fadeUp(0.36)} className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-100">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                  <Icon size={14} className="text-[#E91E63]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
                alt="Our team connecting with communities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/40 via-transparent to-transparent" />
            </div>

            {/* Floating response card */}
            <div className="glass-dark absolute bottom-6 left-4 sm:left-6 rounded-2xl p-5 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">We&apos;re Online</span>
              </div>
              <p className="text-white text-sm font-bold leading-snug">Average reply time</p>
              <p className="text-[#E91E63] text-2xl font-extrabold mt-1">Under 24h</p>
              <p className="text-white/50 text-xs mt-0.5">Mon – Fri, 8AM–5PM EAT</p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-[18px] border-[#E91E63]/10 pointer-events-none" />
            <div className="absolute top-8 -right-2 w-10 h-10 rounded-full border-[6px] border-[#E91E63]/15 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
