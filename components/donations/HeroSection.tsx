'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const donationOptions = [
  { amount: 10, impact: 'Provides school supplies for a Garissa child' },
  { amount: 25, impact: 'Supplies school materials for one child' },
  { amount: 50, impact: 'Powers a community radio health message' },
  { amount: 100, impact: 'Funds antenatal supplies for expectant mothers' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  const [selected, setSelected] = useState(25);
  const [isCustom, setIsCustom] = useState(false);
  const [custom, setCustom] = useState('');

  const activeAmount = isCustom ? Number(custom) || 0 : selected;
  const activeOption = donationOptions.find((o) => o.amount === activeAmount);

  return (
    <section className="pt-[84px] pb-20 lg:pb-28 bg-white relative overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,30,99,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-6">
            <motion.p
              {...fadeUp(0)}
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-4"
            >
              Give Hope. Change Lives.
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-[#081B63]">Together,</span>
              <br />
              <span className="text-[#081B63]">We Can</span>
              <br />
              <span className="text-[#E91E63]">Transform Lives</span>
            </motion.h1>

            <motion.div {...fadeUp(0.16)} className="w-10 h-[3px] bg-[#E91E63] mt-4 mb-6" />

            <motion.p
              {...fadeUp(0.22)}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[520px]"
            >
              Your generosity empowers communities, uplifts the vulnerable, and creates
              opportunities for a brighter tomorrow. Every gift — no matter the size —
              ripples outward for generations.
            </motion.p>

            {/* Amount Selector */}
            <motion.div {...fadeUp(0.30)} className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#081B63] mb-3">
                Choose your gift amount
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                {donationOptions.map((opt) => (
                  <button
                    key={opt.amount}
                    onClick={() => { setSelected(opt.amount); setIsCustom(false); }}
                    className={`h-11 px-6 rounded-[6px] text-sm font-bold uppercase tracking-[0.07em] transition-all duration-200 ${
                      !isCustom && selected === opt.amount
                        ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/25'
                        : 'bg-white border border-slate-200 text-[#081B63] hover:border-[#E91E63] hover:text-[#E91E63]'
                    }`}
                  >
                    ${opt.amount}
                  </button>
                ))}
                <button
                  onClick={() => setIsCustom(true)}
                  className={`h-11 px-6 rounded-[6px] text-sm font-bold uppercase tracking-[0.07em] transition-all duration-200 ${
                    isCustom
                      ? 'bg-[#E91E63] text-white shadow-md shadow-pink-500/25'
                      : 'bg-white border border-slate-200 text-[#081B63] hover:border-[#E91E63] hover:text-[#E91E63]'
                  }`}
                >
                  Other
                </button>
              </div>

              {isCustom && (
                <div className="relative mb-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full h-11 pl-8 pr-4 rounded-[6px] border border-[#E91E63] bg-pink-50/30 text-[#081B63] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E91E63]/30 placeholder-slate-400"
                    suppressHydrationWarning
                  />
                </div>
              )}

              {activeOption && (
                <p className="text-[13px] text-slate-500 italic mt-1 flex items-center gap-1.5">
                  <Heart size={12} className="text-[#E91E63] fill-[#E91E63] flex-shrink-0" />
                  {activeOption.impact}
                </p>
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-4 mt-7">
              <a
                href={`/donate?amount=${activeAmount}`}
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-[#E91E63] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-md shadow-pink-500/25 hover:-translate-y-0.5 hover:bg-[#C2185B] transition-all duration-300"
              >
                Donate Now
                <Heart size={16} className="fill-white" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-white border border-slate-200 text-[#081B63] font-bold text-sm uppercase tracking-[0.07em] hover:border-[#081B63] hover:-translate-y-0.5 transition-all duration-300"
              >
                See the Impact
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...fadeUp(0.46)} className="flex flex-wrap items-center gap-5 mt-7 pt-7 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                <ShieldCheck size={15} className="text-emerald-500" />
                Secure Giving
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                <ShieldCheck size={15} className="text-emerald-500" />
                Tax-Deductible
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                <ShieldCheck size={15} className="text-emerald-500" />
                Cancel Anytime
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="/images/foh8.jpeg"
                alt="Children benefiting from Fountain of Hope programs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="glass-dark absolute bottom-6 left-4 sm:left-6 rounded-2xl p-5 max-w-[230px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#E91E63]/20 flex items-center justify-center">
                  <Heart size={14} className="text-[#E91E63] fill-[#E91E63]" />
                </div>
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">Impact Today</span>
              </div>
              <p className="text-white text-2xl font-extrabold leading-none">300,000+</p>
              <p className="text-white/60 text-xs mt-1">Reached through community radio</p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-[20px] border-[#E91E63]/10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
