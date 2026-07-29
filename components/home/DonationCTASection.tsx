'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';

const donationTiers = [
  { amount: 25, impact: 'Provides school supplies & textbooks for 2 children for a full term.' },
  { amount: 50, impact: 'Supplies clean drinking water & hygiene kits for a family of 5.' },
  { amount: 100, impact: 'Funds 1 month of mobile medical clinic services & emergency medicine.' },
  { amount: 250, impact: 'Sponsors micro-grant seed capital for a female entrepreneur.' },
];

export default function DonationCTASection() {
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const currentImpact = donationTiers.find((t) => t.amount === selectedAmount)?.impact || 
    'Provides direct emergency aid, food security, and education access to vulnerable families.';

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-[#081B63] to-slate-950 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-pink-400/30 backdrop-blur-md">
            <Sparkles size={15} />
            <span>100% Direct Field Allocation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Your Generosity Can Save & Elevate Lives Today
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-12 max-w-2xl mx-auto">
            Every contribution directly funds essential health, education, and clean water programs across Africa. Join thousands of compassionate donors.
          </p>

          {/* Donation Box Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-2xl text-left max-w-3xl mx-auto"
          >
            {/* Frequency Toggle */}
            <div className="flex items-center justify-center p-1.5 rounded-full bg-black/40 border border-white/10 max-w-xs mx-auto mb-8">
              <button
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  frequency === 'monthly'
                    ? 'bg-[#E91E63] text-white shadow-lg shadow-pink-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Donate Monthly
              </button>
              <button
                onClick={() => setFrequency('one-time')}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  frequency === 'one-time'
                    ? 'bg-[#E91E63] text-white shadow-lg shadow-pink-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                One-Time
              </button>
            </div>

            {/* Amount Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount('');
                  }}
                  className={`py-4 rounded-2xl font-extrabold text-xl sm:text-2xl transition-all border ${
                    selectedAmount === tier.amount && !customAmount
                      ? 'bg-white text-[#081B63] border-white shadow-xl scale-105'
                      : 'bg-white/5 text-white border-white/15 hover:bg-white/15 hover:border-pink-400/50'
                  }`}
                >
                  ${tier.amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-8">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-lg">$</span>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl py-3.5 pl-10 pr-4 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 text-base"
                />
              </div>
            </div>

            {/* Dynamic Impact Statement */}
            <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-400/20 text-pink-200 text-sm font-medium mb-8 flex items-start gap-3">
              <CheckCircle size={20} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Your Impact:</span>
                {currentImpact}
              </div>
            </div>

            {/* Submit Action */}
            <Button href="/donations" variant="primary" size="lg" className="w-full text-center justify-center py-4">
              Complete {frequency === 'monthly' ? 'Monthly' : 'One-Time'} Donation (${customAmount || selectedAmount})
              <Heart size={20} className="fill-white animate-pulse" />
            </Button>

            {/* Security Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium border-t border-white/10 pt-6">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Tax Deductible (501c3 Registered)</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
